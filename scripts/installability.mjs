#!/usr/bin/env node
/**
 * Determine whether a contract-compliant plugin can actually be installed.
 *
 * Contract compliance proves a plugin declares a valid patch. It does not
 * prove `dsh plugin add <package>` can resolve anything, and two failures are
 * decidable statically:
 *
 *   1. Scope squatting. A manifest naming itself `@deepseek-ai/x` from a
 *      repository outside the `deepseek-ai` organisation can never be
 *      published: only members of that npm scope may publish under it. A
 *      measured 36 repositories in the topic do this. The install command a
 *      README shows for such a package always fails.
 *   2. Unpublished packages. A name absent from the npm registry cannot be
 *      installed by name, whatever the manifest says. Git specifiers remain a
 *      valid install path, so this is reported as `git-only`, not as broken.
 *
 * Both checks are read-only HTTP against public registries, so they belong in
 * the same static workflow as the contract probe. Neither executes third-party
 * code.
 *
 * Reads contract verdict JSONL on stdin; writes installability JSONL on stdout.
 */

import { createInterface } from 'node:readline'

/** Repository owners entitled to publish under the `@deepseek-ai` npm scope. */
const SCOPE_OWNERS = new Set(['deepseek-ai'])
/** The npm scope reserved to the DSH project. */
const RESERVED_SCOPE = '@deepseek-ai/'

/** Retries for a transient registry failure; 0 disables retrying. */
const RETRY_ATTEMPTS = Number(process.env.CENSUS_RETRY_ATTEMPTS ?? 1)

/** Pause before retrying a failed registry lookup. */
const RETRY_DELAY_MS = Number(process.env.CENSUS_RETRY_DELAY_MS ?? 1500)

/**
 * Share of `unknown` verdicts above which the run is refused.
 *
 * This step had no gate while every other step had one. A registry outage would
 * publish thousands of `unknown` rows, and although `unknown` is honest rather
 * than a false `git-only`, a table where most entries say "we could not tell"
 * carries no signal and invites the reader to treat the remainder as coverage it
 * is not.
 */
const MAX_UNKNOWN_SHARE = Number(process.env.CENSUS_MAX_UNKNOWN_SHARE ?? 0.25)

/** Registry base; overridable so controls can run against a stub with no network. */
const REGISTRY = (process.env.CENSUS_NPM_REGISTRY ?? 'https://registry.npmjs.org').replace(/\/+$/, '')

/**
 * Query the npm registry for a package name.
 * @param packageName - full npm package name.
 * @returns 'published', 'absent', or 'unknown' when the registry is unreachable.
 */
async function registryState(packageName) {
  const encoded = packageName.replace('/', '%2F')
  for (let attempt = 0; ; attempt += 1) {
    try {
      const response = await fetch(`${REGISTRY}/${encoded}`, { method: 'GET' })
      if (response.status === 200) return 'published'
      // A 404 is the answer that produces `git-only`; retrying it would delay a
      // real finding for every unpublished plugin in the catalogue.
      if (response.status === 404) return 'absent'
      if (attempt >= RETRY_ATTEMPTS) return 'unknown'
    } catch {
      if (attempt >= RETRY_ATTEMPTS) return 'unknown'
    }
    await new Promise((resolve) => { setTimeout(resolve, RETRY_DELAY_MS) })
  }
}

/**
 * Classify installability from the manifest name and its repository owner.
 * @param repo - `owner/name`.
 * @param packageName - declared npm package name, possibly null.
 * @returns verdict and human-readable reason.
 */
async function assess(repo, packageName) {
  if (typeof packageName !== 'string' || packageName.length === 0) {
    return { installable: 'unnamed', reason: 'manifest declares no package name' }
  }

  const owner = repo.split('/')[0].toLowerCase()

  // Scope squatting is decidable without the registry and is the stronger
  // finding, so it is reported even when the name is also unpublished.
  if (packageName.startsWith(RESERVED_SCOPE) && !SCOPE_OWNERS.has(owner)) {
    const state = await registryState(packageName)
    return {
      installable: 'unpublishable-scope',
      reason: `names itself under ${RESERVED_SCOPE} but is owned by ${owner}, which cannot publish that scope`,
      registry: state,
    }
  }

  const state = await registryState(packageName)
  if (state === 'published') {
    return { installable: 'published', reason: 'resolvable by name from the npm registry', registry: state }
  }
  if (state === 'absent') {
    return {
      installable: 'git-only',
      reason: 'not on the npm registry; installable only from a Git specifier',
      registry: state,
    }
  }
  return { installable: 'unknown', reason: 'npm registry did not answer conclusively', registry: state }
}

async function main() {
  const targets = []
  for await (const line of createInterface({ input: process.stdin })) {
    if (line.trim().length === 0) continue
    try {
      const record = JSON.parse(line)
      if (record.verdict === 'CONTRACT_OK') targets.push(record)
    } catch {
      continue
    }
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 8)
  const verdicts = []
  let cursor = 0
  let done = 0

  async function worker() {
    while (cursor < targets.length) {
      const record = targets[cursor++]
      const assessment = await assess(record.repo, record.name)
      verdicts.push(assessment.installable)
      process.stdout.write(`${JSON.stringify({
        repo: record.repo,
        packageName: record.name ?? null,
        ...assessment,
      })}\n`)
      done += 1
      if (done % 50 === 0) process.stderr.write(`  assessed ${done}/${targets.length}\n`)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, targets.length) }, worker))
  process.stderr.write(`installability assessment complete: ${done}\n`)

  const counts = {}
  for (const state of verdicts) counts[state] = (counts[state] ?? 0) + 1
  for (const [state, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    process.stderr.write(`  ${state.padEnd(22)} ${String(count).padStart(4)}\n`)
  }
  const unknown = counts.unknown ?? 0
  if (done > 0) {
    const rate = unknown / done
    process.stderr.write(`unknown rate: ${unknown}/${done} (${(rate * 100).toFixed(1)}%)\n`)
    if (rate > MAX_UNKNOWN_SHARE) {
      process.stderr.write(
        'refusing to publish this assessment: the registry did not answer for most'
        + ' packages, so neither the unknown count nor the published/git-only split'
        + ' is meaningful\n',
      )
      process.exit(1)
    }
  }
}

await main()
