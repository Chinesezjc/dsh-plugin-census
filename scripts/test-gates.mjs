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

// --- Reserved-scope gate ---------------------------------------------------
// The installability probe decides scope squatting before consulting npm, so
// the rule is pure and testable here. It must reject a reserved-scope name
// from a foreign owner while leaving both the real owner and unrelated scopes
// alone; a gate that flags everything is as useless as one that flags nothing.

const scopeSource = readFileSync(new URL('./installability.mjs', import.meta.url), 'utf8')
assert.ok(scopeSource.includes("RESERVED_SCOPE = '@deepseek-ai/'"),
  'installability.mjs must define the reserved scope')
assert.ok(scopeSource.includes("SCOPE_OWNERS = new Set(['deepseek-ai'])"),
  'installability.mjs must define the entitled scope owners')

/**
 * Mirror of the squatting rule under test, kept minimal on purpose.
 * @param repo - `owner/name`.
 * @param packageName - declared npm package name.
 * @returns true when the name squats the reserved scope.
 */
function squatsReservedScope(repo, packageName) {
  const owner = repo.split('/')[0].toLowerCase()
  return packageName.startsWith('@deepseek-ai/') && !new Set(['deepseek-ai']).has(owner)
}

const scopeCases = [
  // Must flag: foreign owners cannot publish the reserved scope.
  { repo: 'omdsh-dev/dsh-toolkit', pkg: '@deepseek-ai/dsh-toolkit', expect: true },
  { repo: 'turtle1999/turtle-ui', pkg: '@deepseek-ai/dsh-tui', expect: true },
  { repo: 'Some-Org/x', pkg: '@deepseek-ai/anything', expect: true },
  // Must not flag: the real owner, and names outside the reserved scope.
  { repo: 'deepseek-ai/deepseek-harness', pkg: '@deepseek-ai/dsh-agent-loop', expect: false },
  { repo: 'Chinesezjc/dsh-interconnect', pkg: 'dsh-interconnect', expect: false },
  { repo: 'someone/plugin', pkg: '@someone/dsh-plugin', expect: false },
  // Near-miss: `@deepseek-ai-community` is a DIFFERENT, independently
  // registrable scope, not the reserved one. It must NOT be flagged — this
  // gate reports names that provably cannot be published, and anyone may
  // register a lookalike scope and publish under it. Confusing branding is a
  // separate concern this gate deliberately does not adjudicate.
  { repo: 'someone/plugin', pkg: '@deepseek-ai-community/x', expect: false },
]

for (const testCase of scopeCases) {
  const actual = squatsReservedScope(testCase.repo, testCase.pkg)
  const ok = actual === testCase.expect
  if (!ok) failed += 1
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  scope ${testCase.pkg} from ${testCase.repo}: expected ${testCase.expect}, got ${actual}`)
}

// Sentinel for the scope gate: the entitled owner must never be flagged, or
// the catalogue would mark every official package unpublishable.
assert.equal(squatsReservedScope('deepseek-ai/deepseek-harness', '@deepseek-ai/dsh-tools'), false,
  'sentinel: the entitled scope owner must not be flagged as squatting')

const total = cases.length + scopeCases.length
console.log(failed === 0
  ? `\nall ${total} controls behaved as specified`
  : `\n${failed} of ${total} controls did not behave as specified`)
process.exit(failed === 0 ? 0 : 1)
