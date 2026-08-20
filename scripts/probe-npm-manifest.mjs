#!/usr/bin/env node
/**
 * Check what the *published* npm package declares, not what the repository does.
 *
 * The contract probe reads a repository's `package.json`. A user runs
 * `dsh plugin add <name>`, which installs the published tarball. Those are
 * different artefacts and they disagree in practice:
 *
 *   `adoresever/graph-memory` — repository declares
 *   `dsh.bundle.patch: "./cordis.patch.yml"`, the published package declares no
 *   `dsh` field at all. Installing it and registering it as a profile bundle
 *   fails with "profile bundle \"graph-memory\" declares no dsh.bundle in its
 *   package.json", verified against @deepseek-ai/dsh@0.1.0-rc.7.
 *
 * Measured over the first 12 published packages, 2 were in this state, so the
 * catalogue was reporting `CONTRACT_OK` for packages that cannot load. That is a
 * correctness defect rather than a missing nicety: the census claims a plugin
 * satisfies the contract DSH enforces at load time, and for these it does not.
 *
 * The registry is queried directly rather than through `npm view`: one HTTP call
 * returns the whole manifest in ~740 ms against ~2 s for the CLI, and it is the
 * npm registry rather than GitHub, so it does not compete with the probe for the
 * installation allowance.
 *
 * States, each decided only on evidence:
 *
 *   bundle-ok          the published manifest declares `dsh.bundle`
 *   bundle-missing     it resolves but declares no `dsh.bundle` — will not load
 *   package-missing    the name does not resolve (404)
 *   unreadable         the registry could not be read; never reported as a defect
 *
 *   node scripts/probe-npm-manifest.mjs --existing data/npm-manifest.jsonl \
 *     < data/catalog.jsonl > data/npm-manifest.next.jsonl
 */

import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

/** Registry base; overridable so a control can point at a local stub. */
const REGISTRY = (process.env.CENSUS_NPM_REGISTRY ?? 'https://registry.npmjs.org').replace(/\/+$/, '')

/** Concurrent registry requests. */
const CONCURRENCY = Math.max(1, Number(process.env.CENSUS_NPM_CONCURRENCY ?? 6))

/** Entries checked per run; 0 checks every entry. */
const BATCH = Number(process.env.CENSUS_NPM_BATCH ?? 0)

/** Extra attempts for a transient failure; 0 disables retrying. */
const RETRY_ATTEMPTS = Number(process.env.CENSUS_RETRY_ATTEMPTS ?? 1)

/** Pause before a retry. */
const RETRY_DELAY_MS = Number(process.env.CENSUS_RETRY_DELAY_MS ?? 1500)

/** Share of unreadable results above which the run is refused. */
const MAX_UNREADABLE_SHARE = 0.3

/**
 * Fetch a package's latest published manifest.
 * @param name - npm package name.
 * @returns `{ status, manifest? }` where status is 'ok' | 'missing' | 'unreadable'.
 */
async function fetchManifest(name) {
  for (let attempt = 0; ; attempt += 1) {
    let response
    try {
      response = await fetch(`${REGISTRY}/${encodeURIComponent(name).replace(/^%40/, '@')}/latest`, {
        headers: { accept: 'application/json' },
        signal: AbortSignal.timeout(30_000),
      })
    } catch (error) {
      // A transport failure is not evidence about the package.
      if (attempt >= RETRY_ATTEMPTS) {
        return { status: 'unreadable', detail: String(error?.message ?? error).slice(0, 120) }
      }
      await new Promise((resolve) => { setTimeout(resolve, RETRY_DELAY_MS) })
      continue
    }
    // A 404 is an answer: the name does not resolve. Retrying it would delay a
    // real finding, so it is returned immediately.
    if (response.status === 404) return { status: 'missing' }
    if (!response.ok) {
      if (attempt >= RETRY_ATTEMPTS) {
        return { status: 'unreadable', detail: `HTTP ${response.status}` }
      }
      await new Promise((resolve) => { setTimeout(resolve, RETRY_DELAY_MS) })
      continue
    }
    try {
      return { status: 'ok', manifest: await response.json() }
    } catch {
      return { status: 'unreadable', detail: 'unparseable registry body' }
    }
  }
}

/**
 * Classify one catalogue entry against its published package.
 * @param entry - catalogue row.
 * @returns a record; `state` is never a defect when the registry was unreadable.
 */
async function check(entry) {
  const name = entry.package
  if (typeof name !== 'string' || name.length === 0) {
    return { repo: entry.repo, packageName: null, state: 'unreadable', detail: 'no package name recorded' }
  }
  const result = await fetchManifest(name)
  const base = { repo: entry.repo, packageName: name, checkedAt: new Date().toISOString() }
  if (result.status === 'unreadable') {
    return { ...base, state: 'unreadable', detail: result.detail }
  }
  if (result.status === 'missing') {
    return { ...base, state: 'package-missing', detail: 'name does not resolve on the registry' }
  }
  const manifest = result.manifest
  const bundle = manifest?.dsh?.bundle
  const declaresBundle = bundle !== undefined && bundle !== null
  // Read the published surface declaration too. The repository manifest already
  // feeds attribution; this records whether the shipped package agrees.
  const dshKeys = Object.keys(manifest?.dsh ?? {})
  const publishedSurface = manifest?.dsh?.client !== undefined && manifest?.dsh?.host !== undefined
    ? 'both'
    : manifest?.dsh?.client !== undefined
      ? 'client'
      : manifest?.dsh?.host !== undefined
        ? 'host'
        : null
  return {
    ...base,
    version: manifest?.version ?? null,
    state: declaresBundle ? 'bundle-ok' : 'bundle-missing',
    detail: declaresBundle
      ? `declares dsh.bundle at ${JSON.stringify(bundle.patch ?? bundle)}`
      : `published manifest declares no dsh.bundle (dsh keys: ${JSON.stringify(dshKeys)}); `
        + 'DSH refuses this as a profile bundle',
    dshKeys,
    publishedSurface,
  }
}

/**
 * Read previously checked entries so a run can carry forward what it skips.
 * @param path - JSONL path, or empty.
 * @returns map from repo to stored record.
 */
function loadExisting(path) {
  const stored = new Map()
  if (!path || !existsSync(path)) return stored
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    if (!line.trim()) continue
    try {
      const record = JSON.parse(line)
      if (record?.repo) stored.set(record.repo, record)
    } catch { /* skip unparseable stored row */ }
  }
  return stored
}

/** @returns the value following `flag`, or a fallback. */
function argValue(flag, fallback) {
  const index = process.argv.indexOf(flag)
  return index >= 0 && process.argv[index + 1] !== undefined ? process.argv[index + 1] : fallback
}

async function main() {
  const entries = []
  for await (const line of createInterface({ input: process.stdin, crlfDelay: Infinity })) {
    if (!line.trim()) continue
    try {
      const entry = JSON.parse(line)
      if (entry?.repo) entries.push(entry)
    } catch { /* skip unparseable catalogue row */ }
  }

  // Only packages that resolve on npm can be installed by name; a git-only entry
  // has no published manifest to disagree with, so checking it would report a
  // `package-missing` that says nothing.
  const publishable = entries.filter((entry) => entry.installable === 'published')
  const stored = loadExisting(argValue('--existing', ''))

  // Oldest results first, so a bounded batch advances instead of re-checking the
  // same head every run.
  const ordered = [...publishable].sort((a, b) => {
    const aAt = stored.get(a.repo)?.checkedAt ?? ''
    const bAt = stored.get(b.repo)?.checkedAt ?? ''
    return aAt < bAt ? -1 : aAt > bAt ? 1 : a.repo.localeCompare(b.repo)
  })
  const selected = BATCH > 0 ? ordered.slice(0, BATCH) : ordered
  if (selected.length < publishable.length) {
    process.stderr.write(`checking ${selected.length} of ${publishable.length} published package(s) this run\n`)
  }

  const checked = new Array(selected.length)
  let cursor = 0
  let done = 0

  async function worker() {
    for (;;) {
      const index = cursor
      cursor += 1
      if (index >= selected.length) return
      checked[index] = await check(selected[index])
      done += 1
      if (done % 100 === 0) process.stderr.write(`  checked ${done}/${selected.length}\n`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, selected.length) }, worker))

  const results = []
  const fresh = new Map(checked.filter(Boolean).map((record) => [record.repo, record]))
  let carried = 0
  for (const entry of publishable) {
    const record = fresh.get(entry.repo) ?? stored.get(entry.repo)
    if (!record) continue
    if (!fresh.has(entry.repo)) carried += 1
    results.push(record)
    process.stdout.write(`${JSON.stringify(record)}\n`)
  }
  if (carried > 0) process.stderr.write(`carried forward ${carried} stored result(s)\n`)

  const counts = {}
  for (const record of results) counts[record.state] = (counts[record.state] ?? 0) + 1
  process.stderr.write(`\npublished-manifest check over ${results.length} package(s):\n`)
  for (const [state, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    process.stderr.write(`  ${state.padEnd(16)} ${String(count).padStart(4)}\n`)
  }

  const broken = results.filter((record) => record.state === 'bundle-missing')
  if (broken.length > 0) {
    process.stderr.write('\npackages that will not load when installed by name:\n')
    for (const record of broken.slice(0, 20)) {
      process.stderr.write(`  ${record.packageName} (${record.repo})\n`)
    }
    if (broken.length > 20) process.stderr.write(`  ...and ${broken.length - 20} more\n`)
  }

  // A run that mostly could not read the registry describes the network, not the
  // ecosystem. Judged over this run's own batch, so carried-forward rows cannot
  // hide a wholly failed batch.
  const freshRows = checked.filter(Boolean)
  const unreadable = freshRows.filter((record) => record.state === 'unreadable').length
  if (freshRows.length > 0) {
    const rate = unreadable / freshRows.length
    process.stderr.write(`\nunreadable this run: ${unreadable}/${freshRows.length} (${(rate * 100).toFixed(1)}%)\n`)
    if (rate > MAX_UNREADABLE_SHARE) {
      process.stderr.write(
        'refusing to publish this check: most packages could not be read, so a'
        + ' `bundle-missing` count from this run would be meaningless\n',
      )
      process.exit(1)
    }
  }
}

await main()
