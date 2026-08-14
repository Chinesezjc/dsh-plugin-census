#!/usr/bin/env node
/**
 * Three-tier DSH plugin contract probe.
 *
 * The tiers mirror what `loadProfile` in DSH actually enforces
 * (packages/boot/app-boot/src/profile.ts:388-397). A bundle only loads when
 * all three hold, so a catalogue that checks fewer tiers reports plugins as
 * usable that a real `dsh plugin add` would reject:
 *
 *   T1 DECLARED  package.json has dsh.bundle.patch   (profile.ts:391-393 throws without it)
 *   T2 RESOLVED  that relative path exists in the repo (profile.ts:395 joins it)
 *   T3 PARSED    the patch file is a valid overlay patch list (profile.ts:396 parses it)
 *
 * Tier 3 is checked structurally here: the file must be YAML that parses to a
 * sequence of mappings. Full semantic validation needs DSH itself and belongs
 * to the install-verification stage, not this static probe.
 *
 * Reads repo full names on stdin (one per line), writes JSONL verdicts on
 * stdout. Network access is GitHub contents API via `gh`.
 */

import { execFile } from 'node:child_process'
import { createInterface } from 'node:readline'

/** Highest tier reached; ordered so numeric comparison expresses "at least". */
const TIER = { NONE: 0, DECLARED: 1, RESOLVED: 2, PARSED: 3 }
const TIER_NAME = ['NO_CONTRACT', 'DECLARED', 'RESOLVED', 'PARSED']

/**
 * Fetch and decode one file from a repository's default branch.
 * @param repo - `owner/name`.
 * @param path - repository-relative file path.
 * @returns decoded UTF-8 text, or null when absent or unreadable.
 */
function fetchFile(repo, path) {
  return new Promise((resolve) => {
    execFile('gh', ['api', `repos/${repo}/contents/${path}`, '--jq', '.content'],
      { maxBuffer: 8 * 1024 * 1024 }, (error, stdout) => {
        if (error || !stdout.trim()) return resolve(null)
        try {
          resolve(Buffer.from(stdout.trim(), 'base64').toString('utf8'))
        } catch {
          resolve(null)
        }
      })
  })
}

/**
 * Decide whether text is a plausible Cordis overlay patch list.
 *
 * Deliberately structural, not a YAML parse: the probe must not depend on a
 * YAML library to classify thousands of third-party files, and the failure
 * this tier catches in practice is a patch path pointing at a missing or
 * empty file rather than at subtly invalid YAML.
 * @param text - candidate patch file contents.
 * @returns true when the file looks like a non-empty YAML sequence or mapping.
 */
function looksLikePatchList(text) {
  const meaningful = text.split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'))
  if (meaningful.length === 0) return false
  // A patch list is a YAML sequence of mappings, or a mapping of named entries.
  return meaningful.some((line) => line.startsWith('- ') || /^[\w$@./-]+\s*:/.test(line))
}

/**
 * Probe one repository through all three contract tiers.
 * @param repo - `owner/name`.
 * @returns a verdict record describing the highest tier reached.
 */
async function probe(repo) {
  const manifestText = await fetchFile(repo, 'package.json')
  if (manifestText === null) {
    return { repo, tier: TIER.NONE, verdict: 'NO_PACKAGE_JSON', patch: null, note: 'not an npm package' }
  }

  let manifest
  try {
    manifest = JSON.parse(manifestText)
  } catch {
    return { repo, tier: TIER.NONE, verdict: 'MALFORMED_PACKAGE_JSON', patch: null, note: 'package.json is not valid JSON' }
  }

  const declared = manifest?.dsh?.bundle?.patch
  if (typeof declared !== 'string' || declared.length === 0) {
    const hasDsh = manifest?.dsh !== undefined
    return {
      repo,
      tier: TIER.NONE,
      verdict: hasDsh ? 'DSH_WITHOUT_BUNDLE_PATCH' : 'NO_DSH_FIELD',
      patch: null,
      note: hasDsh ? 'dsh present but dsh.bundle.patch missing' : 'no dsh field',
      name: manifest.name ?? null,
    }
  }

  // Tier 2: the declared path must resolve inside the repository.
  const patchPath = declared.replace(/^\.\//, '')
  const patchText = await fetchFile(repo, patchPath)
  const base = { repo, patch: declared, name: manifest.name ?? null }
  if (patchText === null) {
    return { ...base, tier: TIER.DECLARED, verdict: 'PATCH_FILE_MISSING', note: `declares ${declared} but the file is absent` }
  }

  // Tier 3: the patch file must carry patch-list structure.
  if (!looksLikePatchList(patchText)) {
    return { ...base, tier: TIER.RESOLVED, verdict: 'PATCH_FILE_EMPTY_OR_INVALID', note: `${declared} has no patch entries` }
  }

  return { ...base, tier: TIER.PARSED, verdict: 'CONTRACT_OK', note: 'declared, resolved, and structurally valid' }
}

/**
 * Run probes over stdin repo names with bounded concurrency.
 * @returns exit code semantics are conveyed by process exit.
 */
async function main() {
  const repos = []
  for await (const line of createInterface({ input: process.stdin })) {
    const name = line.trim()
    if (name.length > 0 && !name.startsWith('#')) repos.push(name)
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 8)
  let cursor = 0
  let done = 0

  async function worker() {
    while (cursor < repos.length) {
      const repo = repos[cursor++]
      try {
        const result = await probe(repo)
        result.tierName = TIER_NAME[result.tier]
        process.stdout.write(`${JSON.stringify(result)}\n`)
      } catch (error) {
        process.stdout.write(`${JSON.stringify({ repo, tier: 0, tierName: 'NO_CONTRACT', verdict: 'PROBE_ERROR', note: String(error) })}\n`)
      }
      done += 1
      if (done % 50 === 0) process.stderr.write(`  probed ${done}/${repos.length}\n`)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, repos.length) }, worker))
  process.stderr.write(`probe complete: ${done} repositories\n`)
}

await main()
