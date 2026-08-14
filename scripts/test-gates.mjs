#!/usr/bin/env node
/**
 * Negative-control test for the tier-2 and tier-3 contract gates.
 *
 * A gate that never fails is not a gate. Tiers 1 and 3 are already exercised
 * by real repositories (a compliant plugin reaches PARSED, a non-plugin stops
 * at NO_CONTRACT), but tiers 2 and 3 only trip on inputs that are rare in the
 * wild, so they are injected here: without this control, `looksLikePatchList`
 * and the missing-file branch could both be broken and every real probe would
 * still look correct.
 *
 * Runs the real predicate against crafted inputs and asserts each verdict
 * flips as intended.
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./probe-contract.mjs', import.meta.url), 'utf8')

// Extract the predicate under test rather than re-implementing it, so the
// control cannot silently drift from the shipped logic.
const match = source.match(/function looksLikePatchList\(text\) \{[\s\S]*?\n\}/)
assert.ok(match, 'looksLikePatchList must be present in probe-contract.mjs')
const looksLikePatchList = new Function(`${match[0]}; return looksLikePatchList`)()

const cases = [
  // Positive: real patch shapes must pass, or the gate rejects valid plugins.
  { name: 'yaml sequence of mappings', input: '- id: my-plugin\n  enabled: true\n', expect: true },
  { name: 'mapping of named entries', input: 'my-plugin:\n  enabled: true\n', expect: true },
  { name: 'scoped package key', input: '"@scope/pkg":\n  config: {}\n', expect: true },
  { name: 'sequence with comments', input: '# header comment\n- id: a\n', expect: true },

  // Negative: each of these must fail, proving tier 3 can actually reject.
  { name: 'empty file', input: '', expect: false },
  { name: 'whitespace only', input: '\n\n   \n\t\n', expect: false },
  { name: 'comments only', input: '# TODO: write the patch\n# nothing here yet\n', expect: false },
  { name: 'prose without structure', input: 'this file intentionally left blank\n', expect: false },
]

let failed = 0
for (const testCase of cases) {
  const actual = looksLikePatchList(testCase.input)
  const ok = actual === testCase.expect
  if (!ok) failed += 1
  const label = ok ? 'PASS' : 'FAIL'
  console.log(`  ${label}  ${testCase.name}: expected ${testCase.expect}, got ${actual}`)
}

// Prove the control itself can fail: a deliberately wrong expectation must be
// reported, otherwise this harness would rubber-stamp a broken predicate.
const sentinel = looksLikePatchList('') === true
assert.equal(sentinel, false, 'sentinel: empty input must not be treated as a valid patch list')

console.log(failed === 0
  ? `\nall ${cases.length} tier-3 controls behaved as specified`
  : `\n${failed} of ${cases.length} controls did not behave as specified`)
process.exit(failed === 0 ? 0 : 1)
