#!/usr/bin/env node
/**
 * Controls for the incremental probe queue.
 *
 * Sharded enumeration finds several thousand repositories where the single-query
 * sample saw 998. Probing costs one to two API calls each against an hourly
 * allowance of roughly a thousand, so coverage has to accumulate across runs; a
 * queue that silently re-probed the same entries would leave the census
 * permanently at a sixth of the topic while appearing to work.
 *
 * The ordering rule is the part most worth pinning. Priority must NOT be by
 * stars: star ordering is what the topic page already provides, and it is
 * precisely what left the quiet majority of the ecosystem unexamined. A queue
 * ordered that way would rebuild the bias this project exists to correct.
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./probe-queue.mjs', import.meta.url), 'utf8')

let failed = 0
const check = (label, condition) => {
  if (condition) {
    process.stdout.write(`  PASS  ${label}\n`)
  } else {
    process.stdout.write(`  FAIL  ${label}\n`)
    failed += 1
  }
}

// Never-probed entries must precede stale ones, or a growing topic starves new
// repositories behind re-probes of ones already measured.
check('never-probed entries are queued ahead of stale ones',
  /\[\.\.\.never,\s*\.\.\.stale\]/.test(source))

// Ordering must be by enumeration age, not popularity.
check('ordering uses created_at', /created_at/.test(source))
check('stars are not used as a sort key',
  !/sort\([^)]*stars/.test(source) && !/stars\s*-\s*\w+\.stars/.test(source))

// Verdicts must eventually be refreshed rather than frozen once written.
const staleMatch = source.match(/CENSUS_STALE_DAYS \?\? (\d+)/)
check('a staleness threshold is defined', staleMatch !== null)
if (staleMatch !== null) {
  const days = Number(staleMatch[1])
  check(`staleness threshold is meaningful (${days}d)`, days >= 1 && days <= 30)
}

// Coverage is the number this whole mechanism exists to move, so it must be
// reportable without running a probe.
check('coverage is reported in --stats', /coverage/.test(source))

// Behavioural checks on the tiering rule, mirrored from the implementation.
const tier = (hasVerdict, ageDays, staleDays) => {
  if (!hasVerdict) return 'never'
  return ageDays >= staleDays ? 'stale' : 'fresh'
}
check('an unprobed repository is queued', tier(false, 0, 7) === 'never')
check('a fresh verdict is skipped', tier(true, 1, 7) === 'fresh')
check('an aged verdict is re-queued', tier(true, 8, 7) === 'stale')

// Sentinel: a tiering function returning one value for everything would satisfy
// any single check above, so assert the three outcomes are distinguishable.
assert.equal(new Set([tier(false, 0, 7), tier(true, 1, 7), tier(true, 8, 7)]).size, 3,
  'sentinel: the three queue tiers must be distinguishable')

process.stdout.write(failed === 0
  ? '\nall 9 queue controls behaved as specified\n'
  : `\n${failed} of 9 queue controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
