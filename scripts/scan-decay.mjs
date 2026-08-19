#!/usr/bin/env node
/**
 * Decay scan over the catalogue: report entries that have stopped being usable.
 *
 * Four conditions, each independently checkable and each reported only on
 * evidence:
 *
 *   gone       the repository returns 404
 *   archived   the repository is archived
 *   dormant    no push within DORMANT_DAYS
 *   unbundled  the bundle contract no longer holds
 *
 * Nothing is removed. A scan can be wrong — an outage, a rename, a rate-limit
 * blip — and removal is irreversible, so findings are written to a report for a
 * human to act on. An inconclusive probe (API error, unreadable tree) is
 * reported as `inconclusive` and never as decay: a decay report that mixes
 * doubt into its findings cannot be acted on without re-checking all of it.
 *
 * Sampling caveat this scan has to work around: the census samples the topic by
 * most-recently-updated, so every entry in it was pushed within hours and
 * dormancy is definitionally absent from that sample. Measured against a
 * star-sorted sample of the same topic, real dormancy exists and reaches three
 * months. A dormancy threshold calibrated on the census sample would therefore
 * always report zero and look healthy. DORMANT_DAYS is set against the topic's
 * actual age, and the report states which sample it ran over.
 *
 * The scan is incremental. It re-checked every entry on every run, which cost two
 * API calls per catalogue entry and grew with the catalogue: 85% of the hourly
 * allowance at 2117 entries, and more than the whole allowance at the size this
 * catalogue is heading for. A run that cannot check most entries is refused
 * outright, so unbounded growth turned into a hard failure — measured at 45.4%
 * inconclusive, above the 40% ceiling. Each run now checks a bounded batch,
 * oldest results first, and carries forward the rest.
 *
 *   node scripts/scan-decay.mjs --existing data/decay.jsonl \
 *     < data/catalog.jsonl > data/decay.next.jsonl
 *   node scripts/scan-decay.mjs --summary < data/catalog.jsonl
 */

import { execFile } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

/**
 * Days without a push before an entry counts as dormant.
 *
 * The ecosystem is weeks old, so a six-month threshold borrowed from an
 * established registry would never fire here. 30 days is roughly a third of the
 * topic's observed lifetime and long enough that a working plugin is not
 * flagged for a quiet fortnight.
 */
const DORMANT_DAYS = Number(process.env.DECAY_DORMANT_DAYS ?? 30)

/**
 * Run a `gh api` call and parse the JSON body.
 * @param path - API path after the host.
 * @returns `{ status, body }`; status 0 marks a transport failure.
 */
function api(path) {
  return new Promise((resolve) => {
    execFile('gh', ['api', path], { maxBuffer: 32 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        const notFound = /HTTP 404|Not Found/.test(String(stderr))
        return resolve({ status: notFound ? 404 : 0 })
      }
      try {
        resolve({ status: 200, body: JSON.parse(stdout) })
      } catch {
        resolve({ status: 0 })
      }
    })
  })
}

/**
 * Re-check whether a repository still satisfies the bundle contract.
 *
 * Mirrors the probe's rule that an unexamined tree yields no verdict: a
 * truncated listing returns null (inconclusive) rather than reporting the
 * bundle as gone, because flagging a healthy entry as `unbundled` invites a
 * removal that the evidence does not support.
 * @param repo - `owner/name`.
 * @param manifestPath - manifest that declared the bundle when last probed.
 * @returns true when still bundled, false when confirmed gone, null when unknown.
 */
async function stillBundled(repo, manifestPath) {
  const direct = await api(`repos/${repo}/contents/${manifestPath ?? 'package.json'}`)
  if (direct.status === 200 && typeof direct.body?.content === 'string') {
    try {
      const pkg = JSON.parse(Buffer.from(direct.body.content, 'base64').toString('utf8'))
      if (pkg?.dsh?.bundle?.patch !== undefined) return true
    } catch {
      return null
    }
  }
  if (direct.status === 0) return null

  // The recorded manifest is gone or no longer declares a bundle; the plugin may
  // have moved within the repository, so the tree is consulted before concluding.
  const tree = await api(`repos/${repo}/git/trees/HEAD?recursive=1`)
  if (tree.status !== 200 || !Array.isArray(tree.body?.tree)) return null
  if (tree.body.truncated === true) return null

  const manifests = tree.body.tree
    .filter((entry) => typeof entry.path === 'string' && entry.path.endsWith('package.json'))
    .filter((path) => !/(^|\/)(node_modules|tests?|__tests__|fixtures?)\//.test(path))
    .slice(0, 25)
  for (const path of manifests) {
    const file = await api(`repos/${repo}/contents/${path}`)
    if (file.status === 0) return null
    if (file.status !== 200 || typeof file.body?.content !== 'string') continue
    try {
      const pkg = JSON.parse(Buffer.from(file.body.content, 'base64').toString('utf8'))
      if (pkg?.dsh?.bundle?.patch !== undefined) return true
    } catch { /* a malformed manifest is not evidence either way */ }
  }
  return false
}

/**
 * Classify one catalogue entry.
 * @param entry - catalogue record.
 * @returns a decay record.
 */
async function scan(entry) {
  const meta = await api(`repos/${entry.repo}`)
  if (meta.status === 404) {
    return { repo: entry.repo, state: 'gone', detail: 'repository returns 404' }
  }
  if (meta.status !== 200) {
    return { repo: entry.repo, state: 'inconclusive', detail: 'repository metadata unavailable' }
  }
  if (meta.body.archived === true) {
    return { repo: entry.repo, state: 'archived', detail: 'repository is archived' }
  }

  const pushedAt = meta.body.pushed_at
  const ageDays = pushedAt === undefined || pushedAt === null
    ? null
    : Math.floor((Date.now() - new Date(pushedAt).getTime()) / 86400000)
  if (ageDays !== null && ageDays >= DORMANT_DAYS) {
    return { repo: entry.repo, state: 'dormant', detail: `no push in ${ageDays} days`, ageDays }
  }

  const bundled = await stillBundled(entry.repo, entry.manifestPath)
  if (bundled === null) {
    return { repo: entry.repo, state: 'inconclusive', detail: 'bundle contract could not be re-checked' }
  }
  if (bundled === false) {
    return {
      repo: entry.repo,
      state: 'unbundled',
      detail: `no dsh.bundle.patch found; previously at ${entry.manifestPath ?? 'package.json'}`,
    }
  }
  return { repo: entry.repo, state: 'live', detail: `pushed ${ageDays} day(s) ago`, ageDays }
}

/**
 * Read previously scanned entries so a run can carry forward what it skips.
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
  const summaryOnly = process.argv.includes('--summary')
  const entries = []
  for await (const line of createInterface({ input: process.stdin })) {
    if (line.trim().length === 0) continue
    try {
      entries.push(JSON.parse(line))
    } catch { /* skip unparseable input rows */ }
  }

  const stored = loadExisting(argValue('--existing', ''))
  const batchSize = Number(process.env.CENSUS_DECAY_BATCH ?? argValue('--limit', '0')) || 0

  // Order by staleness: entries never scanned first, then the oldest results.
  // Without an order a bounded batch would re-check the same head every run and
  // the tail would never be scanned at all.
  const ordered = [...entries].sort((a, b) => {
    const aAt = stored.get(a.repo)?.scannedAt ?? ''
    const bAt = stored.get(b.repo)?.scannedAt ?? ''
    return aAt < bAt ? -1 : aAt > bAt ? 1 : a.repo.localeCompare(b.repo)
  })
  const selected = batchSize > 0 ? ordered.slice(0, batchSize) : ordered
  const scanning = new Set(selected.map((entry) => entry.repo))
  if (batchSize > 0 && selected.length < entries.length) {
    process.stderr.write(
      `scanning ${selected.length} of ${entries.length} entr(y/ies) this run;`
      + ` the rest keep their stored state\n`,
    )
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 8)
  const results = []
  let cursor = 0
  let done = 0

  const scannedNow = []

  async function worker() {
    while (cursor < selected.length) {
      const entry = selected[cursor++]
      let record
      try {
        record = await scan(entry)
      } catch (error) {
        record = { repo: entry.repo, state: 'inconclusive', detail: String(error) }
      }
      // Stamp the scan time so the next run can order by staleness. Without it
      // a bounded batch has no way to advance past the first N entries.
      record.scannedAt = new Date().toISOString()
      scannedNow.push(record)
      done += 1
      if (done % 50 === 0) process.stderr.write(`  scanned ${done}/${selected.length}\n`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, selected.length) }, worker))

  // Emit in catalogue order: freshly scanned entries, and stored records for the
  // rest. Dropping unscanned entries would shrink the report to this run's batch
  // and make the decay counts describe the batch rather than the catalogue.
  const freshByRepo = new Map(scannedNow.map((record) => [record.repo, record]))
  let carried = 0
  for (const entry of entries) {
    const record = freshByRepo.get(entry.repo) ?? stored.get(entry.repo)
    if (!record) continue
    if (!freshByRepo.has(entry.repo)) carried += 1
    results.push(record)
    if (!summaryOnly) process.stdout.write(`${JSON.stringify(record)}\n`)
  }
  if (carried > 0) process.stderr.write(`carried forward ${carried} stored result(s)\n`)

  const counts = {}
  for (const record of results) counts[record.state] = (counts[record.state] ?? 0) + 1
  const decayed = results.filter((r) => ['gone', 'archived', 'dormant', 'unbundled'].includes(r.state))

  process.stderr.write(`\ndecay scan over ${results.length} entries (dormant threshold ${DORMANT_DAYS} days):\n`)
  for (const [state, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    process.stderr.write(`  ${state.padEnd(14)} ${String(count).padStart(4)}\n`)
  }
  if (decayed.length > 0) {
    process.stderr.write('\nentries needing review (flagged, never removed):\n')
    for (const record of decayed.slice(0, 20)) {
      process.stderr.write(`  ${record.state.padEnd(10)} ${record.repo} — ${record.detail}\n`)
    }
  }
  if (summaryOnly) {
    process.stdout.write(`${JSON.stringify({ scanned: results.length, dormantThresholdDays: DORMANT_DAYS, counts }, null, 2)}\n`)
  }

  // A scan that could not reach a conclusion for most entries describes the
  // runner, not the catalogue. Reporting `inconclusive` honestly is necessary
  // but not sufficient: a report where 58% of entries are unknown — measured on
  // a CI run — carries no signal, and publishing it invites the reader to treat
  // `live` counts as coverage they are not. The threshold is deliberately looser
  // than attribution's, because a decay scan makes two API calls per entry and
  // some unreadable repositories are normal.
  // Judge this run's own work, not the report as a whole. Carried-forward records
  // were checked successfully in an earlier run, so counting them here would let
  // a wholly failed batch hide behind stored results — and, before the scan was
  // incremental, an accumulation of old inconclusive rows would fail a run whose
  // fresh batch was entirely fine.
  const freshInconclusive = scannedNow.filter((record) => record.state === 'inconclusive').length
  if (scannedNow.length > 0) {
    const rate = freshInconclusive / scannedNow.length
    process.stderr.write(
      `inconclusive rate this run: ${freshInconclusive}/${scannedNow.length} (${(rate * 100).toFixed(1)}%)\n`,
    )
    if (rate > 0.4) {
      process.stderr.write('refusing to publish this decay scan: most entries checked this run could not'
        + ' be reached, so neither the decay findings nor the live counts are meaningful\n')
      process.exit(1)
    }
  }
  const totalInconclusive = counts.inconclusive ?? 0
  if (totalInconclusive > 0) {
    process.stderr.write(
      `inconclusive in the published report: ${totalInconclusive}/${results.length}`
      + ` (${((totalInconclusive / results.length) * 100).toFixed(1)}%)\n`,
    )
  }
}

await main()
