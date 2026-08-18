#!/usr/bin/env node
/**
 * Choose which repositories to probe next, so a census larger than one API
 * allowance still converges.
 *
 * Sharded enumeration raised coverage from 998 repositories to 5866, but probing
 * costs one to two API calls each and GITHUB_TOKEN's allowance is roughly a
 * thousand per hour. A full pass cannot complete in one run, and a workflow that
 * tries either exhausts the allowance and publishes nothing — measured, all 998
 * trees unreadable — or keeps sampling a sixth of the topic under a new name.
 *
 * The queue makes coverage accumulate across runs:
 *
 *   1. repositories never probed, oldest enumeration first
 *   2. then repositories whose verdicts are older than the staleness threshold
 *   3. fresh verdicts are skipped
 *
 * Priority is deliberately NOT by stars. Star ordering is what the topic page
 * already provides, and it is what left the quiet majority of the ecosystem
 * unexamined; a queue ordered that way would rebuild the bias this project
 * exists to correct.
 *
 *   node scripts/probe-queue.mjs --limit 700 > /tmp/batch.txt
 *   node scripts/probe-queue.mjs --stats
 */

import { existsSync, readFileSync, statSync } from 'node:fs'

/** Days before a verdict is considered stale and re-queued. */
const STALE_DAYS = Number(process.env.CENSUS_STALE_DAYS ?? 7)

/**
 * Read a JSONL file, tolerating absence.
 * @param path - file path.
 * @returns parsed records.
 */
function readJsonl(path) {
  if (!existsSync(path)) return []
  return readFileSync(path, 'utf8').split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      try {
        return JSON.parse(line)
      } catch {
        return null
      }
    })
    .filter((record) => record !== null)
}

const argOf = (name, fallback) => {
  const index = process.argv.indexOf(name)
  return index === -1 ? fallback : process.argv[index + 1]
}

const enumeratedPath = argOf('--enumerated', 'data/repos-raw.jsonl')
const verdictPath = argOf('--verdicts', 'data/contract-v3.jsonl')

const enumerated = readJsonl(enumeratedPath)
const verdicts = readJsonl(verdictPath)

// Verdicts carry no per-record timestamp, so the file's modification time stands
// in for all of them. Coarse but honest: it cannot claim a verdict is fresher
// than the run that wrote it.
const verdictAgeDays = existsSync(verdictPath)
  ? (Date.now() - statSync(verdictPath).mtimeMs) / 86400000
  : Infinity

const probed = new Set(verdicts.map((record) => record.repo))

const never = []
const stale = []
let fresh = 0
for (const repo of enumerated) {
  const name = repo.full_name
  if (name === undefined || name === null) continue
  if (!probed.has(name)) never.push(repo)
  else if (verdictAgeDays >= STALE_DAYS) stale.push(repo)
  else fresh += 1
}

// Oldest enumeration first within each tier: the repository that has waited
// longest for a verdict is the one whose absence most distorts the totals.
const byOldest = (a, b) => String(a.created_at ?? '').localeCompare(String(b.created_at ?? ''))
never.sort(byOldest)
stale.sort(byOldest)

if (process.argv.includes('--stats')) {
  process.stdout.write(`${JSON.stringify({
    enumerated: enumerated.length,
    withVerdict: probed.size,
    verdictAgeDays: Number.isFinite(verdictAgeDays) ? Number(verdictAgeDays.toFixed(2)) : null,
    staleThresholdDays: STALE_DAYS,
    neverProbed: never.length,
    staleVerdicts: stale.length,
    freshVerdicts: fresh,
    coverage: enumerated.length === 0 ? null : Number((probed.size / enumerated.length).toFixed(4)),
  }, null, 2)}\n`)
  process.exit(0)
}

const limit = Number(argOf('--limit', '700'))
const queue = [...never, ...stale].slice(0, limit)

process.stderr.write(`queue: ${queue.length} of ${never.length + stale.length} pending`
  + ` (${never.length} never probed, ${stale.length} stale at ${STALE_DAYS}d, ${fresh} fresh)\n`)
for (const repo of queue) process.stdout.write(`${repo.full_name}\n`)
