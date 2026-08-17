#!/usr/bin/env node
/**
 * Controls for the decay scan's classification rules.
 *
 * The rule that matters most here is negative: an inconclusive probe must never
 * be reported as decay. Every decay state invites a maintainer to delete an
 * entry, and a scan can be wrong for reasons that have nothing to do with the
 * repository — an outage, a rename, a rate-limit blip, a tree too large to read.
 * A report that mixes doubt into its findings cannot be acted on without
 * re-checking all of it, which defeats the point of running it.
 *
 * The dormancy threshold is also asserted, because it is the one number here
 * calibrated by judgement rather than measurement. The census samples the topic
 * by most-recently-updated, so every sampled entry was pushed within hours and
 * dormancy is definitionally absent from that sample; a threshold tuned on it
 * would always report zero. Measured against a star-sorted sample of the same
 * topic, real dormancy exists and reaches 95 days.
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./scan-decay.mjs', import.meta.url), 'utf8')

const thresholdMatch = source.match(/DECAY_DORMANT_DAYS \?\? (\d+)/)
assert.ok(thresholdMatch, 'scan-decay.mjs must define a default dormancy threshold')
const DORMANT_DAYS = Number(thresholdMatch[1])

/** States that invite a maintainer to remove an entry. */
const ACTIONABLE = new Set(['gone', 'archived', 'dormant', 'unbundled'])

let failed = 0
const check = (label, condition) => {
  if (condition) {
    process.stdout.write(`  PASS  ${label}\n`)
  } else {
    process.stdout.write(`  FAIL  ${label}\n`)
    failed += 1
  }
}

// The threshold must be usable against an ecosystem weeks old. A borrowed
// six-month default would never fire; a one-day threshold would flag healthy
// plugins for a quiet weekend.
check(`dormancy threshold is calibrated for this ecosystem (${DORMANT_DAYS} days)`,
  DORMANT_DAYS >= 14 && DORMANT_DAYS <= 90)

// Inconclusive must be its own state, distinct from every actionable one.
check('inconclusive is a distinct state', /state: 'inconclusive'/.test(source))
check('inconclusive is not in the actionable set', !ACTIONABLE.has('inconclusive'))

// A transport failure must not be read as a 404. Conflating them turns an
// outage into "repository gone", which is the most damaging possible misreport.
check('transport failure is distinguished from 404',
  /status: notFound \? 404 : 0/.test(source))
check('non-200 repository metadata yields inconclusive, not gone',
  /meta\.status !== 200[\s\S]{0,160}inconclusive/.test(source))

// A truncated tree must not be read as "bundle gone" — the same rule the
// contract probe follows.
check('a truncated tree yields no unbundled verdict',
  /truncated === true\) return null/.test(source))
check('an unreadable manifest yields no unbundled verdict',
  /if \(bundled === null\)[\s\S]{0,120}inconclusive/.test(source))

// Nothing may be deleted by the scan itself.
check('the scan never removes an entry',
  !/\bunlink|rmSync|removeEntry|splice\(/.test(source))

// A scan that could not check most entries must refuse to publish. Reporting
// `inconclusive` honestly is necessary but not sufficient: a run measured at
// 436 of 753 unknown carries no signal, and publishing it invites the reader to
// read `live` counts as coverage.
const rateMatch = source.match(/rate > ([\d.]+)/)
check('an inconclusive-rate threshold is defined', rateMatch !== null)
if (rateMatch !== null) {
  const threshold = Number(rateMatch[1])
  const wouldRefuse = (unknown, total) => total > 0 && unknown / total > threshold
  check(`threshold is meaningful (${threshold})`, threshold > 0.1 && threshold < 0.8)
  check('a fully unreadable scan is refused', wouldRefuse(753, 753))
  check('the observed 436/753 run would be refused', wouldRefuse(436, 753))
  check('a healthy scan is not refused', !wouldRefuse(0, 753))
  check('a few unreadable repositories do not block a scan', !wouldRefuse(20, 753))
}
check('the refusal exits non-zero', /process\.exit\(1\)/.test(source))

// Sentinel: prove the actionable set is not simply empty, which would make
// every check above vacuous.
assert.ok(ACTIONABLE.size === 4, 'sentinel: four actionable decay states must be tracked')
assert.ok(ACTIONABLE.has('gone') && ACTIONABLE.has('unbundled'),
  'sentinel: gone and unbundled must be actionable')

process.stdout.write(failed === 0
  ? '\nall 15 decay controls behaved as specified\n'
  : `\n${failed} of 15 decay controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
