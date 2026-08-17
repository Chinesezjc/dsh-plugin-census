#!/usr/bin/env node
/**
 * Controls for monorepo bundle discovery in the contract probe.
 *
 * The root-only probe reported every monorepo plugin as a non-plugin. Measured
 * on the live topic: `zhu1090093659/dsh-web-ui` declares bundles under
 * `packages/`, `volcengine/OpenViking` under `examples/`,
 * `anywhere-labs/deepseek-harness-desktop` under a root-level
 * `dsh-plugin-desktop/`, and `Q00/ouroboros` under `integrations/`. The market
 * leader's own submission gate walks the tree, so a root-only census
 * under-reports the ecosystem it claims to measure.
 *
 * These are path-classification controls, run offline against the real
 * predicate. Network verdicts are checked separately; what is pinned here is
 * the rule that decides WHICH manifests are read, because that rule caused
 * three separate wrong answers while being developed:
 *   - hint prefixes alone missed a root-level plugin directory
 *   - a blanket `examples/` exclusion rejected a real plugin
 *   - tree-walking made DSH's own repository pass the plugin contract
 */

import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('./probe-contract.mjs', import.meta.url), 'utf8')

// Extract the predicate and its constant from the shipped file rather than
// restating them, so this control cannot drift from the code it guards.
const hintsMatch = source.match(/const WORKSPACE_HINTS = \[[\s\S]*?\]/)
const predicateMatch = source.match(/function isPluginCandidate\(path\) \{[\s\S]*?\n\}/)
assert.ok(hintsMatch, 'WORKSPACE_HINTS must be present in probe-contract.mjs')
assert.ok(predicateMatch, 'isPluginCandidate must be present in probe-contract.mjs')
const isPluginCandidate = new Function(
  `${hintsMatch[0]}; ${predicateMatch[0]}; return isPluginCandidate`)()

const cases = [
  // Must accept: every one of these is a hand-verified real plugin location.
  { path: 'package.json', expect: true, why: 'single-package plugin at the root' },
  { path: 'packages/dsh-aionui-panel/package.json', expect: true, why: 'zhu1090093659/dsh-web-ui workspace bundle' },
  { path: 'integrations/dsh-plugin/package.json', expect: true, why: 'Q00/ouroboros integration bundle' },
  { path: 'examples/dsh-memory-plugin/package.json', expect: true, why: 'volcengine/OpenViking ships its plugin as an example' },
  { path: 'dsh-plugin-desktop/package.json', expect: true, why: 'anywhere-labs root-level plugin directory, matched by depth not by prefix' },
  { path: 'plugins/my-plugin/package.json', expect: true, why: 'conventional plugins/ workspace' },

  // Must reject: fixtures and vendored trees are not the package on offer.
  { path: 'dsh-plugin-desktop/tests/fixtures/smoke-plugin/package.json', expect: false, why: 'test fixture inside a package' },
  { path: 'packages/x/__tests__/package.json', expect: false, why: 'test directory' },
  { path: 'node_modules/dep/package.json', expect: false, why: 'vendored dependency' },
  { path: 'packages/a/b/c/d/package.json', expect: false, why: 'nested deeper than a workspace package' },
  { path: 'src/deep/nested/thing/package.json', expect: false, why: 'too deep to be the plugin package' },
]

let failed = 0
for (const testCase of cases) {
  const actual = isPluginCandidate(testCase.path)
  const ok = actual === testCase.expect
  if (!ok) failed += 1
  process.stdout.write(`  ${ok ? 'PASS' : 'FAIL'}  ${testCase.path}\n`)
  if (!ok) process.stdout.write(`        expected ${testCase.expect} (${testCase.why}), got ${actual}\n`)
}

// The harness itself must never be reported as a plugin: it is the product, and
// it is the highest-starred entry carrying the topic, so a wrong answer here is
// the most visible one the census could give.
assert.ok(/deepseek-ai\/deepseek-harness/.test(source),
  'probe-contract.mjs must special-case the first-party harness repository')
assert.ok(/FIRST_PARTY_HARNESS/.test(source),
  'probe-contract.mjs must emit a distinct verdict for the first-party harness')
process.stdout.write('  PASS  first-party harness is excluded from plugin verdicts\n')

// Vendored copies of the harness need a separate defence: they satisfy the
// contract by containing the harness's own bundle packages, and `fork` is false
// for every one measured, so neither an owner check nor a fork check sees them.
// Five were found on the live topic, one at 203 stars.
const firstPartyPkgs = source.match(/const FIRST_PARTY_PACKAGES = new Set\(\[[\s\S]*?\]\)/)
assert.ok(firstPartyPkgs, 'probe-contract.mjs must define FIRST_PARTY_PACKAGES')
const FIRST_PARTY_PACKAGES = new Function(`${firstPartyPkgs[0]}; return FIRST_PARTY_PACKAGES`)()
assert.ok(FIRST_PARTY_PACKAGES.has('@deepseek-ai/dsh-base'),
  'FIRST_PARTY_PACKAGES must cover @deepseek-ai/dsh-base, the package these copies carry')
assert.ok(!FIRST_PARTY_PACKAGES.has('dsh-interconnect'),
  'FIRST_PARTY_PACKAGES must not contain third-party plugin names')
assert.ok(/VENDORED_HARNESS/.test(source),
  'probe-contract.mjs must emit a distinct verdict for a vendored harness copy')
process.stdout.write('  PASS  vendored harness copies are classified separately\n')

// Sentinel: a predicate that accepts everything would satisfy every positive
// case above, so prove at least one rejection genuinely happens.
assert.equal(isPluginCandidate('node_modules/dep/package.json'), false,
  'sentinel: vendored manifests must be rejected')

process.stdout.write(failed === 0
  ? `\nall ${cases.length + 2} monorepo controls behaved as specified\n`
  : `\n${failed} of ${cases.length + 2} monorepo controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
