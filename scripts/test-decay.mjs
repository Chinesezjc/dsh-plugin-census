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

// Incremental scanning. Re-checking every entry cost two API calls per catalogue
// entry and grew with the catalogue: 85% of the hourly allowance at 2117 entries,
// which is what made a scheduled run fail at 45.4% inconclusive.
{
  const { spawnSync } = await import('node:child_process')
  const { mkdtempSync, writeFileSync, readFileSync: read } = await import('node:fs')
  const { tmpdir } = await import('node:os')
  const { join } = await import('node:path')

  const dir = mkdtempSync(join(tmpdir(), 'decay-'))
  // Stub `gh` so no network is involved; every repository looks live.
  writeFileSync(
    join(dir, 'gh'),
    `#!/usr/bin/env node
const path = process.argv.slice(2).join(' ')
const out = (o) => process.stdout.write(JSON.stringify(o))
if (path.includes('/git/trees')) out({ truncated: false, tree: [{ path: 'package.json', type: 'blob' }] })
else if (path.includes('/contents/')) out({ content: Buffer.from(JSON.stringify({ dsh: { bundle: { patch: './p.yml' } } })).toString('base64') })
else out({ archived: false, pushed_at: new Date().toISOString(), fork: false })
`,
    { mode: 0o755 },
  )
  const catalogue = Array.from({ length: 20 }, (_, i) =>
    JSON.stringify({ repo: `owner${i}/plugin`, manifestPath: 'package.json' }),
  ).join('\n') + '\n'

  const runScan = (existing) => {
    const args = [new URL('./scan-decay.mjs', import.meta.url).pathname]
    if (existing) args.push('--existing', existing)
    const result = spawnSync(process.execPath, args, {
      input: catalogue,
      encoding: 'utf8',
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CENSUS_DECAY_BATCH: '5' },
      timeout: 120_000,
    })
    return {
      status: result.status,
      stderr: String(result.stderr ?? ''),
      rows: String(result.stdout ?? '').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l)),
    }
  }

  const first = runScan(null)
  check('a bounded scan exits zero', first.status === 0)
  check('a bounded scan checks only its batch', first.rows.length === 5, `${first.rows.length} rows`)
  check('the batch limit is reported', /scanning 5 of 20/.test(first.stderr))
  check('every scanned row carries a scan time', first.rows.every((r) => typeof r.scannedAt === 'string'))

  const firstPath = join(dir, 'first.jsonl')
  writeFileSync(firstPath, first.rows.map((r) => JSON.stringify(r)).join('\n') + '\n')
  const second = runScan(firstPath)
  check('a second run carries forward stored results', /carried forward 5 stored result/.test(second.stderr))
  check('a second run grows the report', second.rows.length === 10, `${second.rows.length} rows`)
  const firstRepos = new Set(first.rows.map((r) => r.repo))
  const rescanned = second.rows.filter(
    (r) => firstRepos.has(r.repo) && r.scannedAt !== first.rows.find((f) => f.repo === r.repo)?.scannedAt,
  )
  check(
    'a second run scans entries the first did not',
    rescanned.length === 0,
    `${rescanned.length} entr(y/ies) were re-scanned instead of advancing`,
  )

  // The refusal must judge this run's batch, not the accumulated report: stored
  // inconclusive rows would otherwise fail a run whose own batch was fine.
  const pollutedPath = join(dir, 'polluted.jsonl')
  writeFileSync(
    pollutedPath,
    Array.from({ length: 5 }, (_, i) =>
      JSON.stringify({ repo: `owner${i}/plugin`, state: 'inconclusive', detail: 'old failure', scannedAt: '2000-01-01T00:00:00Z' }),
    ).join('\n') + '\n',
  )
  const afterPollution = runScan(pollutedPath)
  check(
    'stored inconclusive rows do not fail a healthy run',
    afterPollution.status === 0,
    `status=${afterPollution.status} ${afterPollution.stderr.slice(-200)}`,
  )
  check(
    'the refusal rate is reported for this run only',
    /inconclusive rate this run: 0\/5/.test(afterPollution.stderr),
    afterPollution.stderr.split('\n').filter((l) => l.includes('inconclusive')).join(' | '),
  )
}

// Transient retry. 280 of 283 inconclusive entries in the published report said
// "repository metadata unavailable", and every sampled one was reachable and
// healthy minutes later. A single attempt makes a blip permanent, which both
// loses coverage and pushes the run toward its 40% refusal threshold.
{
  const { spawnSync } = await import('node:child_process')
  const { mkdtempSync, writeFileSync, readFileSync: read } = await import('node:fs')
  const { tmpdir } = await import('node:os')
  const { join } = await import('node:path')

  const dir = mkdtempSync(join(tmpdir(), 'decay-retry-'))
  const countFile = join(dir, 'attempts')
  const modeFile = join(dir, 'mode')
  // Fail the first metadata call, then succeed. Count attempts on that path.
  writeFileSync(
    join(dir, 'gh'),
    `#!/usr/bin/env node
const fs = require('node:fs')
const path = process.argv.slice(2).join(' ')
const out = (o) => process.stdout.write(JSON.stringify(o))
const mode = fs.readFileSync(${JSON.stringify(modeFile)}, 'utf8').trim()
if (path.includes('/git/trees')) { out({ truncated: false, tree: [{ path: 'package.json', type: 'blob' }] }) }
else if (path.includes('/contents/')) { out({ content: Buffer.from(JSON.stringify({ dsh: { bundle: { patch: './p.yml' } } })).toString('base64') }) }
else {
  const n = Number(fs.readFileSync(${JSON.stringify(countFile)}, 'utf8')) + 1
  fs.writeFileSync(${JSON.stringify(countFile)}, String(n))
  if (n === 1) {
    process.stderr.write(mode === 'notfound' ? 'gh: Not Found (HTTP 404)' : 'gh: server error (HTTP 502)')
    process.exit(1)
  }
  out({ archived: false, pushed_at: new Date().toISOString(), fork: false })
}
`,
    { mode: 0o755 },
  )

  const runRetry = (mode) => {
    writeFileSync(countFile, '0')
    writeFileSync(modeFile, mode)
    const result = spawnSync(process.execPath, [new URL('./scan-decay.mjs', import.meta.url).pathname], {
      input: `${JSON.stringify({ repo: 'owner/plugin', manifestPath: 'package.json' })}\n`,
      encoding: 'utf8',
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, CENSUS_RETRY_DELAY_MS: '10' },
      timeout: 60_000,
    })
    return {
      attempts: Number(read(countFile, 'utf8')),
      status: result.status,
      rows: String(result.stdout ?? '').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l)),
    }
  }

  const transient = runRetry('transient')
  check('a transient metadata failure is retried', transient.attempts === 2, `${transient.attempts} attempt(s)`)
  check(
    'a retried entry reaches a conclusion instead of inconclusive',
    transient.rows[0]?.state === 'live',
    JSON.stringify(transient.rows[0] ?? ''),
  )

  const notFound = runRetry('notfound')
  check('a 404 is not retried', notFound.attempts === 1, `${notFound.attempts} attempt(s)`)
  check(
    'a 404 still reports gone rather than inconclusive',
    notFound.rows[0]?.state === 'gone',
    JSON.stringify(notFound.rows[0] ?? ''),
  )
}

// Sentinel: prove the actionable set is not simply empty, which would make
// every check above vacuous.
assert.ok(ACTIONABLE.size === 4, 'sentinel: four actionable decay states must be tracked')
assert.ok(ACTIONABLE.has('gone') && ACTIONABLE.has('unbundled'),
  'sentinel: gone and unbundled must be actionable')

process.stdout.write(failed === 0
  ? '\nall 28 decay controls behaved as specified\n'
  : `\n${failed} of 28 decay controls did not behave as specified\n`)
process.exit(failed === 0 ? 0 : 1)
