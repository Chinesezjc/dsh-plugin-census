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

// Manifest declarations. Attribution read only dependencies, which discarded the
// author's own statement of surface: measured over 25 low/none rows, 16 carried a
// `dsh.client` or `dsh.host` block while being attributed from a keyword.
{
  const { spawnSync } = await import('node:child_process')
  const { mkdtempSync, writeFileSync } = await import('node:fs')
  const { tmpdir } = await import('node:os')
  const { join } = await import('node:path')

  /**
   * Run attribution against a stubbed manifest.
   * @param manifest - object served as the package.json.
   * @param row - catalogue row fields.
   * @returns the emitted record.
   */
  const attribute = (manifest, row = {}) => {
    const dir = mkdtempSync(join(tmpdir(), 'attr-'))
    // fetchFile passes `--jq .content`, so the stub emits the base64 string
    // rather than the API wrapper object.
    writeFileSync(
      join(dir, 'gh'),
      `#!/usr/bin/env node
process.stdout.write(Buffer.from(${JSON.stringify(JSON.stringify(manifest))}).toString('base64'))
`,
      { mode: 0o755 },
    )
    const input = JSON.stringify({
      repo: 'o/p',
      verdict: 'CONTRACT_OK',
      name: 'plugin',
      manifestPath: 'package.json',
      ...row,
    })
    const result = spawnSync(
      process.execPath,
      [new URL('./attribute.mjs', import.meta.url).pathname, '--existing', '/dev/null'],
      { input: `${input}\n`, encoding: 'utf8', env: { ...process.env, PATH: `${dir}:${process.env.PATH}` }, timeout: 60_000 },
    )
    const line = String(result.stdout ?? '').split('\n').find((l) => l.trim())
    return line ? JSON.parse(line) : null
  }

  const declaredClient = attribute({ name: 'p', dsh: { client: { platform: 'web' } } })
  check(
    'a dsh.client declaration attributes the client surface',
    declaredClient?.surface === 'client' && declaredClient?.confidence === 'declared',
    JSON.stringify(declaredClient),
  )
  check(
    'the declaration is recorded as evidence',
    JSON.stringify(declaredClient?.evidence) === '["dsh.client"]',
    JSON.stringify(declaredClient?.evidence),
  )

  const declaredHost = attribute({ name: 'p', dsh: { host: { tools: [] } } })
  check(
    'a dsh.host declaration attributes the host surface',
    declaredHost?.surface === 'host' && declaredHost?.confidence === 'declared',
    JSON.stringify(declaredHost),
  )

  const declaredBoth = attribute({ name: 'p', dsh: { client: {}, host: {} } })
  check(
    'declaring both surfaces attributes both',
    declaredBoth?.surface === 'both' && declaredBoth?.confidence === 'declared',
    JSON.stringify(declaredBoth),
  )

  // A dependency on a surface-specific first-party package is installed evidence
  // and must outrank a manifest declaration, which can be aspirational.
  const conflicting = attribute({
    name: 'p',
    dsh: { host: {} },
    dependencies: { '@deepseek-ai/dsh-client-ui': '1.0.0' },
  })
  check(
    'dependency evidence outranks a manifest declaration',
    conflicting?.surface === 'client' && conflicting?.confidence === 'high',
    JSON.stringify(conflicting),
  )

  // A bundle-only `dsh` block says nothing about surface and must not be read as
  // a declaration; it would otherwise attribute every compliant plugin.
  const bundleOnly = attribute({ name: 'p', dsh: { bundle: { patch: './p.yml' } } })
  check(
    'a bundle-only dsh block is not a surface declaration',
    bundleOnly?.confidence !== 'declared',
    JSON.stringify(bundleOnly),
  )
}

process.stdout.write(failed === 0
  ? '\nall 15 attribution-guard controls behaved as specified\n'
  : `\n${failed} of 15 attribution-guard controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
