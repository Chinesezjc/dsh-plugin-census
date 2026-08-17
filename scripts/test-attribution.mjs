#!/usr/bin/env node
/**
 * Controls for the attribution step's refusal to publish a broken fetch.
 *
 * A CI run published 395 of 527 entries as `confidence: none` with an empty
 * evidence list. Every manifest fetch had failed, and `fetchFile` returned null
 * silently, so "this package declares no DSH dependency" and "this runner could
 * not read the manifest" produced identical output. The first is a finding about
 * the ecosystem; the second is a finding about the environment, and publishing
 * the second as the first is the worst failure this repository can have — it
 * attributes an absence to someone else's package.
 *
 * These controls pin the guard rather than the fetch: what must hold is that a
 * high failure rate stops the step, and that the threshold is neither so low
 * that a few unreadable repositories block a refresh nor so high that a mostly
 * broken run still publishes.
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./attribute.mjs', import.meta.url), 'utf8')

let failed = 0
const check = (label, condition) => {
  if (condition) {
    process.stdout.write(`  PASS  ${label}\n`)
  } else {
    process.stdout.write(`  FAIL  ${label}\n`)
    failed += 1
  }
}

// Failures must be counted. Without a counter there is nothing to threshold on.
check('failed fetches are counted', /fetchFailures \+= 1/.test(source))

// The reason must reach the log. Diagnosing the original incident was blocked
// precisely because the failure produced no output at all.
check('failure reasons are written to stderr',
  /fetch failed:.*stderr/.test(source) || /process\.stderr\.write\(`\s*fetch failed/.test(source))

// The step must exit non-zero, not merely warn: the workflow commits whatever
// the join step produces, so a warning would still be published.
check('a high failure rate exits non-zero', /process\.exit\(1\)/.test(source))

// Threshold sanity. Extract it rather than restate it.
const thresholdMatch = source.match(/failureRate > ([\d.]+)/)
check('a failure-rate threshold is defined', thresholdMatch !== null)
if (thresholdMatch !== null) {
  const threshold = Number(thresholdMatch[1])
  check(`threshold is meaningful (${threshold})`, threshold > 0.05 && threshold < 0.5)

  // Behavioural check on the rule itself, in both directions.
  const wouldRefuse = (failures, done) => done > 0 && failures / done > threshold
  check('a fully broken run is refused', wouldRefuse(527, 527))
  check('the observed incident would be refused', wouldRefuse(395, 527))
  check('a healthy run is not refused', !wouldRefuse(0, 527))
  check('a few unreadable repositories do not block a refresh', !wouldRefuse(5, 527))
}

// The counter must be declared before the function that increments it: `let` is
// not hoisted, so the wrong order throws on the first fetch rather than at parse
// time — it passed `node --check` while being broken.
const counterAt = source.indexOf('let fetchFailures')
const fetchAt = source.indexOf('function fetchFile')
check('the failure counter is declared before fetchFile',
  counterAt !== -1 && fetchAt !== -1 && counterAt < fetchAt)

// Sentinel: prove the threshold rule can refuse something, otherwise every
// check above is vacuous.
assert.ok(thresholdMatch !== null, 'sentinel: a threshold must exist to test')
assert.equal(Number(thresholdMatch[1]) < 1, true,
  'sentinel: a threshold of 1 or more could never refuse any run')

process.stdout.write(failed === 0
  ? '\nall 9 attribution-guard controls behaved as specified\n'
  : `\n${failed} of 9 attribution-guard controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
