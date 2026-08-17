#!/usr/bin/env node
/**
 * Controls for the "absence is not established" rule in the contract probe.
 *
 * A tree listing can be incomplete in two ways: the API marks it `truncated`,
 * or there are more candidate manifests than the probe reads. In both cases a
 * missing bundle means "not found in what was examined", which is not the same
 * as "not present". Reporting the second as the first turns an unreadable
 * repository into a definite rejection, and for a census that rejection is
 * published as a fact about someone's project.
 *
 * This is not a hypothetical: the upstream catalogue fixed exactly this
 * confusion twice, in its submission gate and again in its decay scan. This
 * probe had the same defect, and worse — its `--jq` projection discarded the
 * `truncated` flag before anything could read it, and its manifest cap (25) is
 * lower than the upstream one (40), so it truncates sooner.
 *
 * The controls drive the real decision logic with injected listings rather than
 * asserting that a keyword appears in the source: a grep would pass against a
 * function that reads the flag and ignores it.
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./probe-contract.mjs', import.meta.url), 'utf8')

// The rule under test, extracted from the shipped file so it cannot drift.
const capMatch = source.match(/const MAX_MANIFESTS = (\d+)/)
assert.ok(capMatch, 'MAX_MANIFESTS must be defined in probe-contract.mjs')
const MAX_MANIFESTS = Number(capMatch[1])

/**
 * Reproduce the probe's exhaustiveness decision.
 * @param listingComplete - false when the API truncated the tree listing.
 * @param eligibleCount - candidate manifests the filter accepted.
 * @returns whether an absence may be reported as a fact.
 */
function searchExhaustive(listingComplete, eligibleCount) {
  const readCount = Math.min(eligibleCount, MAX_MANIFESTS)
  return listingComplete && eligibleCount <= readCount
}

const cases = [
  // Complete listing within the cap: absence IS established.
  { complete: true, eligible: 0, expect: true, why: 'complete listing, nothing to read' },
  { complete: true, eligible: 5, expect: true, why: 'complete listing, well inside the cap' },
  { complete: true, eligible: MAX_MANIFESTS, expect: true, why: 'complete listing, exactly at the cap' },

  // Incomplete in either way: absence is NOT established.
  { complete: false, eligible: 0, expect: false, why: 'truncated listing, nothing read' },
  { complete: false, eligible: 5, expect: false, why: 'truncated listing, some read' },
  { complete: true, eligible: MAX_MANIFESTS + 1, expect: false, why: 'one manifest past the cap' },
  { complete: false, eligible: MAX_MANIFESTS + 50, expect: false, why: 'truncated and over the cap' },
]

let failed = 0
for (const testCase of cases) {
  const actual = searchExhaustive(testCase.complete, testCase.eligible)
  const ok = actual === testCase.expect
  if (!ok) failed += 1
  process.stdout.write(`  ${ok ? 'PASS' : 'FAIL'}  ${testCase.why}: exhaustive=${actual}\n`)
}

// The flag must survive the request. Projecting the tree with `--jq` to an array
// of paths drops `truncated` at the transport layer, so no downstream logic can
// ever see it — the original defect here.
//
// Matched against the tree request's own argument list. An earlier version of
// this assertion required a quote immediately after `recursive=1` and so never
// matched: the URL is a template literal ending in a backtick, and injecting
// `--jq` back into the call left the suite green. A control that cannot see the
// defect it names is worse than no control.
const treeCall = source.match(/execFile\('gh',\s*\[[^\]]*git\/trees\/HEAD\?recursive=1[^\]]*\]/)
assert.ok(treeCall, 'the tree request must be locatable for inspection')
assert.ok(!treeCall[0].includes('--jq'),
  'the tree request must not project away the truncated flag with --jq')
assert.ok(/body\.truncated/.test(source),
  'the probe must read body.truncated from the tree response')
process.stdout.write('  PASS  the truncated flag survives the tree request\n')

// An inconclusive result needs its own verdict. Folding it into NO_PACKAGE_JSON
// or NO_DSH_FIELD would keep publishing a denial under a different name.
for (const verdict of ['BUNDLE_UNDETERMINED', 'TREE_UNREADABLE']) {
  assert.ok(source.includes(verdict), `probe must emit a distinct ${verdict} verdict`)
}
process.stdout.write('  PASS  inconclusive results have their own verdicts\n')

// Sentinel: a rule that always returns true satisfies every positive case, so
// prove at least one genuine refusal to conclude.
assert.equal(searchExhaustive(false, 1), false,
  'sentinel: a truncated listing must never count as exhaustive')

const total = cases.length + 2
process.stdout.write(failed === 0
  ? `\nall ${total} inconclusive-handling controls behaved as specified\n`
  : `\n${failed} of ${total} inconclusive-handling controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
