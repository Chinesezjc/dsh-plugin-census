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
 *   node scripts/scan-decay.mjs < data/catalog.jsonl > data/decay.jsonl
 *   node scripts/scan-decay.mjs --summary < data/catalog.jsonl
 */

import { execFile } from 'node:child_process'
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

async function main() {
  const summaryOnly = process.argv.includes('--summary')
  const entries = []
  for await (const line of createInterface({ input: process.stdin })) {
    if (line.trim().length === 0) continue
    try {
      entries.push(JSON.parse(line))
    } catch { /* skip unparseable input rows */ }
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 8)
  const results = []
  let cursor = 0
  let done = 0

  async function worker() {
    while (cursor < entries.length) {
      const entry = entries[cursor++]
      let record
      try {
        record = await scan(entry)
      } catch (error) {
        record = { repo: entry.repo, state: 'inconclusive', detail: String(error) }
      }
      results.push(record)
      if (!summaryOnly) process.stdout.write(`${JSON.stringify(record)}\n`)
      done += 1
      if (done % 50 === 0) process.stderr.write(`  scanned ${done}/${entries.length}\n`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, entries.length) }, worker))

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
  if (summaryOnly) process.stdout.write(`${JSON.stringify({ scanned: results.length, dormantThresholdDays: DORMANT_DAYS, counts }, null, 2)}\n`)
}

await main()
