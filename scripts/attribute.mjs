#!/usr/bin/env node
/**
 * Attribute the DSH surface a compliant plugin extends.
 *
 * Evidence is ranked by how directly it reflects what DSH loads:
 *
 *   1. `@deepseek-ai/dsh-client-*` or `@deepseek-ai/dsh-host-*` dependencies.
 *      Strongest signal: importing a client package is only possible for code
 *      that runs in the browser client, and host packages likewise.
 *   2. Other `@deepseek-ai/dsh-*` dependencies mapped to their known surface
 *      (dsh-tools, dsh-llm, dsh-subagent and similar are host-only).
 *   3. Package-name and description keywords. Weakest, used only when no
 *      dependency evidence exists; a measured 22.6% of compliant plugins
 *      declare no `@deepseek-ai/*` dependency at all, so this tier cannot be
 *      dropped, but it is reported as low confidence.
 *
 * Confidence is emitted alongside the surface so the published catalogue can
 * distinguish a verified attribution from a guess, instead of presenting both
 * as equal facts.
 *
 * Reads contract verdict JSONL on stdin; writes attribution JSONL on stdout.
 */

import { execFile } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

/** Host-only DSH packages that do not carry a `host-` name prefix. */
const HOST_PACKAGES = new Set([
  'dsh-tools', 'dsh-llm', 'dsh-subagent', 'dsh-agent', 'dsh-bash', 'dsh-fs',
  'dsh-mcp-client', 'dsh-skill-filesystem', 'dsh-credentials', 'dsh-sandbox',
  'dsh-storage', 'dsh-schedule', 'dsh-hooks', 'dsh-system-prompt', 'dsh-jobs',
  'dsh-code-runtime', 'dsh-pty', 'dsh-terminal', 'dsh-lsp', 'dsh-compact',
])
/** Packages shared by both surfaces, which therefore attribute neither. */
const NEUTRAL_PACKAGES = new Set([
  'cordis', 'schemastery', 'dsh-session', 'dsh-settings', 'dsh-invariants',
  'dsh-api', 'dsh-core', 'dsh-identity', 'dsh-context',
])

/** Count of failed manifest fetches, reported at the end as a data-quality signal. */
let fetchFailures = 0

/**
 * Fetch and decode one repository file.
 *
 * A failure is reported, not swallowed. Returning null silently made a fetch
 * failure indistinguishable from a package with no dependencies, so a CI run
 * where every fetch failed published 395 entries as `confidence: none` — a
 * verdict that looks like a finding about those packages and is actually a
 * finding about the runner.
 * @param repo - `owner/name`.
 * @param path - repository-relative path.
 * @returns decoded text, or null when unavailable.
 */
function fetchFile(repo, path) {
  return new Promise((resolve) => {
    execFile('gh', ['api', `repos/${repo}/contents/${path}`, '--jq', '.content'],
      { maxBuffer: 8 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          fetchFailures += 1
          if (fetchFailures <= 5) {
            process.stderr.write(`  fetch failed: ${repo}/${path}: ${String(stderr).trim().slice(0, 160)}\n`)
          }
          return resolve(null)
        }
        if (!stdout.trim()) {
          fetchFailures += 1
          if (fetchFailures <= 5) process.stderr.write(`  fetch empty: ${repo}/${path}\n`)
          return resolve(null)
        }
        try {
          resolve(Buffer.from(stdout.trim(), 'base64').toString('utf8'))
        } catch (decodeError) {
          fetchFailures += 1
          if (fetchFailures <= 5) {
            process.stderr.write(`  decode failed: ${repo}/${path}: ${String(decodeError).slice(0, 120)}\n`)
          }
          resolve(null)
        }
      })
  })
}



/**
 * Attribute a surface from dependency names.
 * @param dependencies - all dependency names across dependency kinds.
 * @returns surface and confidence, or null when no dependency evidence exists.
 */
function fromDependencies(dependencies) {
  const dshPackages = dependencies
    .filter((name) => name.startsWith('@deepseek-ai/'))
    .map((name) => name.slice('@deepseek-ai/'.length))
    .filter((name) => !NEUTRAL_PACKAGES.has(name))

  if (dshPackages.length === 0) return null

  const client = dshPackages.some((name) => name.startsWith('dsh-client'))
  const host = dshPackages.some((name) => name.startsWith('dsh-host') || HOST_PACKAGES.has(name))

  if (client && host) return { surface: 'both', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  if (client) return { surface: 'client', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  if (host) return { surface: 'host', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  // DSH packages present but none surface-specific: real but unattributable.
  return { surface: 'indeterminate', confidence: 'medium', evidence: dshPackages.slice(0, 6) }
}

/**
 * Attribute a surface from the plugin's own `dsh` manifest block.
 *
 * This is the author's explicit declaration of which surface the plugin extends,
 * so it outranks a keyword guess and sits just below a dependency on a
 * surface-specific first-party package. Attribution read only dependencies until
 * now, which discarded it: measured over 25 low/none rows, 16 carried a
 * `dsh.client` or `dsh.host` block while being attributed from a word in the
 * repository name. `1MLightyears/dsh-theme-synthwave` declares
 * `dsh.client.platform: "web"`, and `13071301808/dsh-composer-expand` declares
 * `dsh.client.inject: ["@deepseek-ai/dsh-client-ui-conversation"]`.
 *
 * Confidence is `declared` rather than `high`: it is a first-party statement of
 * intent, which is strong evidence about the surface but is not the same kind of
 * evidence as an installed dependency, and a manifest can be aspirational.
 *
 * @param manifest - parsed package.json, possibly null.
 * @returns surface and confidence, or null when no declaration exists.
 */
function fromManifest(manifest) {
  const dsh = manifest?.dsh
  if (!dsh || typeof dsh !== 'object') return null
  const client = dsh.client !== undefined && dsh.client !== null
  const host = dsh.host !== undefined && dsh.host !== null
  if (!client && !host) return null
  const evidence = []
  if (client) evidence.push('dsh.client')
  if (host) evidence.push('dsh.host')
  const surface = client && host ? 'both' : client ? 'client' : 'host'
  return { surface, confidence: 'declared', evidence }
}

/*
 * Rejected: attributing from the bundle patch file's `inject` seams.
 *
 * The patch file names the seams a plugin injects (`commands`, `skills`,
 * `webServer`, `tuiScenes`), which looks like stronger evidence than a keyword.
 * A feasibility test against ground truth says otherwise, and it is recorded here
 * so the idea is not re-attempted from the same premise:
 *
 *   - Over 30 plugins whose surface is already established by dependency
 *     evidence, 23 had no `inject` block at all and 5 had an unreadable patch.
 *     Exactly 1 yielded a seam, so there is no labelled data to calibrate a
 *     seam-to-surface rule against. `commands` could plausibly be either surface.
 *   - Over 19 `low`-confidence rows, only 3 carried an `inject` block, and all
 *     three were the same author using the same seam.
 *
 * So it would cost one extra fetch per low-confidence row — 234 calls per run —
 * to resolve at most ~37 of them by a rule that cannot be validated. That trades
 * one guess for another guess while spending allowance the probe needs.
 */

/**
 * Attribute a surface from name and description keywords.
 * @param packageName - npm package name, possibly null.
 * @param description - repository description, possibly null.
 * @returns surface and low confidence.
 */
function fromKeywords(packageName, description) {
  const text = `${packageName ?? ''} ${description ?? ''}`.toLowerCase()
  const clientHit = /client|web ui|web-ui|webui|panel|sidebar|skin|theme|css|ui\b|界面|皮肤|侧栏|前端/.test(text)
  const hostHit = /tool|mcp|skill|memory|llm|model|provider|sandbox|bash|shell|subagent|agent|工具|模型/.test(text)
  if (clientHit && hostHit) return { surface: 'both', confidence: 'low', evidence: ['keyword'] }
  if (clientHit) return { surface: 'client', confidence: 'low', evidence: ['keyword'] }
  if (hostHit) return { surface: 'host', confidence: 'low', evidence: ['keyword'] }
  return { surface: 'indeterminate', confidence: 'none', evidence: [] }
}

async function main() {
  // Attribution costs one API call per compliant plugin, and a fully enumerated
  // topic holds thousands — more than one hourly allowance. Existing
  // attributions are reused unless --refresh is passed, so coverage accumulates
  // across runs the same way contract verdicts do.
  const reuse = !process.argv.includes('--refresh')
  const existingIndex = process.argv.indexOf('--existing')
  const existingPath = existingIndex === -1 ? 'data/surface-v3.jsonl' : process.argv[existingIndex + 1]
  const existing = new Map()
  if (reuse && existsSync(existingPath)) {
    for (const line of readFileSync(existingPath, 'utf8').split('\n')) {
      if (line.trim().length === 0) continue
      try {
        const record = JSON.parse(line)
        // A previous inconclusive result is not worth carrying: it may have come
        // from a failed fetch rather than from the package itself, and reusing it
        // would make a transient failure permanent.
        // `declared` is reused for the same reason as dependency evidence: it comes
        // from the manifest, not from a guess, so re-fetching cannot improve it.
        // `low` and `none` are deliberately NOT reused — they are re-attributed
        // every run, which is what lets a newly added `dsh.client` block, or the
        // manifest tier itself, upgrade rows that were previously keyword guesses.
        if (['high', 'declared', 'medium'].includes(record.confidence)) {
          existing.set(record.repo, record)
        }
      } catch { /* skip unparseable rows */ }
    }
  }

  const targets = []
  const carried = []
  for await (const line of createInterface({ input: process.stdin })) {
    if (line.trim().length === 0) continue
    try {
      const record = JSON.parse(line)
      if (record.verdict !== 'CONTRACT_OK') continue
      const previous = existing.get(record.repo)
      if (previous !== undefined) carried.push(previous)
      else targets.push(record)
    } catch {
      continue
    }
  }

  for (const record of carried) process.stdout.write(`${JSON.stringify(record)}\n`)
  if (carried.length > 0) {
    process.stderr.write(`reused ${carried.length} existing attribution(s); ${targets.length} to fetch\n`)
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 10)
  let cursor = 0
  let done = 0

  async function worker() {
    while (cursor < targets.length) {
      const record = targets[cursor++]
      // Read the manifest that actually declared the bundle, not the repository
      // root. 109 of 766 compliant plugins declare theirs in a subpackage, and
      // their dependencies live there too: reading the root manifest would
      // attribute every one of them from the wrong dependency list, usually an
      // empty one, silently collapsing them to low-confidence keyword guesses.
      const manifestPath = typeof record.manifestPath === 'string' && record.manifestPath.length > 0
        ? record.manifestPath
        : 'package.json'
      const manifestText = await fetchFile(record.repo, manifestPath)
      let dependencies = []
      let description = null
      let parsedManifest = null
      if (manifestText !== null) {
        try {
          parsedManifest = JSON.parse(manifestText)
          dependencies = Object.keys({
            ...(parsedManifest.dependencies ?? {}),
            ...(parsedManifest.peerDependencies ?? {}),
            ...(parsedManifest.devDependencies ?? {}),
          })
          description = parsedManifest.description ?? null
        } catch { /* fall through to keyword attribution */ }
      }

      // Ordered by evidence strength: an installed surface-specific dependency,
      // then the author's own `dsh` declaration, then a keyword guess.
      const attribution = fromDependencies(dependencies)
        ?? fromManifest(parsedManifest)
        ?? fromKeywords(record.name, description)

      process.stdout.write(`${JSON.stringify({
        repo: record.repo,
        packageName: record.name ?? null,
        surface: attribution.surface,
        confidence: attribution.confidence,
        evidence: attribution.evidence,
      })}\n`)
      done += 1
      if (done % 50 === 0) process.stderr.write(`  attributed ${done}/${targets.length}\n`)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, targets.length) }, worker))
  process.stderr.write(`attribution complete: ${done}\n`)

  // A high fetch-failure rate means the output describes the runner, not the
  // ecosystem. Publishing it would put 'no dependency evidence' against packages
  // that have plenty — measured once at 395 of 527 entries — so the step fails
  // instead, leaving the previous attribution in place.
  if (done > 0) {
    const failureRate = fetchFailures / done
    process.stderr.write(`manifest fetch failures: ${fetchFailures}/${done} (${(failureRate * 100).toFixed(1)}%)\n`)
    if (failureRate > 0.25) {
      process.stderr.write('refusing to publish attribution: over 25% of manifest fetches failed,'
        + ' so a "no evidence" verdict cannot be distinguished from a broken fetch\n')
      process.exit(1)
    }
  }
}

await main()
