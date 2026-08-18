#!/usr/bin/env node
/**
 * Controls for scripts/enumerate-topic.mjs.
 *
 * The enumerator is the one step whose failure silently shrinks the sample: an
 * exhausted search allowance fails every shard identically, and the result is a
 * fragment that has the same shape as a deliberate sample. Run 32097129800
 * enumerated 100 of 6842 repositories that way, continuing through 8 of 9 shards
 * after the pool was spent.
 *
 * Each control was verified by injecting the corresponding defect and confirming
 * this suite turns red.
 *
 *   node scripts/test-enumerate.mjs
 */

import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SCRIPT = new URL('./enumerate-topic.mjs', import.meta.url).pathname
const SOURCE = readFileSync(SCRIPT, 'utf8')
let failures = 0
let checks = 0

/**
 * Assert a condition.
 * @param name - control name.
 * @param ok - result.
 * @param detail - shown on failure.
 */
function check(name, ok, detail = '') {
  checks += 1
  if (!ok) {
    failures += 1
    process.stdout.write(`FAIL  ${name}${detail ? ` — ${detail}` : ''}\n`)
  } else {
    process.stdout.write(`ok    ${name}\n`)
  }
}

/**
 * Run the enumerator against a stub `gh`.
 * @param ghSource - Node source for the stub.
 * @param argv - extra arguments.
 * @returns `{ status, stdout, stderr, lines }`.
 */
function runEnumerator(ghSource, argv = []) {
  const dir = mkdtempSync(join(tmpdir(), 'enum-'))
  writeFileSync(join(dir, 'gh'), ghSource, { mode: 0o755 })
  const result = spawnSync(process.execPath, [SCRIPT, ...argv], {
    encoding: 'utf8',
    env: { ...process.env, PATH: `${dir}:${process.env.PATH}` },
    timeout: 120_000,
  })
  return {
    status: result.status,
    stdout: String(result.stdout ?? ''),
    stderr: String(result.stderr ?? ''),
    lines: String(result.stdout ?? '').split('\n').filter((l) => l.trim()),
  }
}

/**
 * Build a stub `gh` that reports a large topic and serves `perQuery` results per
 * shard, optionally failing with a rate-limit message after `failAfter` calls.
 * @param options - stub behaviour.
 * @returns stub source.
 */
function ghStub({ reported = 6842, perQuery = 100, failAfter = Infinity, failMessage = 'API rate limit exceeded for installation' } = {}) {
  return `#!/usr/bin/env node
const fs = require('node:fs')
const counter = process.env.STUB_COUNT_FILE
let n = 0
try { n = Number(fs.readFileSync(counter, 'utf8')) || 0 } catch {}
n += 1
fs.writeFileSync(counter, String(n))
if (n > ${failAfter}) {
  process.stderr.write(${JSON.stringify(`gh: ${failMessage}`)})
  process.exit(1)
}
const path = process.argv.slice(2).join(' ')
const page = Number((path.match(/[&?]page=(\\d+)/) || [])[1] || 1)
// Report a big total so the shard planner splits, but only serve page 1.
const items = page === 1
  ? Array.from({ length: ${perQuery} }, (_, i) => ({
      full_name: 'owner' + n + '/repo' + i,
      stargazers_count: 0,
      pushed_at: '2026-08-17T00:00:00Z',
      created_at: '2026-08-16T00:00:00Z',
      archived: false,
      fork: false,
      description: null,
      language: 'TypeScript',
      topics: ['dsh-plugin'],
    }))
  : []
process.stdout.write(JSON.stringify({ total_count: ${reported}, items }))
`
}

/**
 * Run with a fresh call counter.
 * @param options - stub options.
 * @param argv - extra argv.
 */
function run(options, argv = []) {
  const dir = mkdtempSync(join(tmpdir(), 'enumcnt-'))
  const counter = join(dir, 'count')
  writeFileSync(counter, '0')
  const stubDir = mkdtempSync(join(tmpdir(), 'enumgh-'))
  writeFileSync(join(stubDir, 'gh'), ghStub(options), { mode: 0o755 })
  const result = spawnSync(process.execPath, [SCRIPT, ...argv], {
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${stubDir}:${process.env.PATH}`,
      STUB_COUNT_FILE: counter,
      // Pacing is real behaviour and is asserted separately; without this the
      // whole suite would sleep 2.2 s per stubbed call.
      CENSUS_SEARCH_INTERVAL_MS: options.intervalMs ?? '0',
    },
    timeout: 180_000,
  })
  return {
    status: result.status,
    stdout: String(result.stdout ?? ''),
    stderr: String(result.stderr ?? ''),
    lines: String(result.stdout ?? '').split('\n').filter((l) => l.trim()),
    calls: Number(readFileSync(counter, 'utf8')) || 0,
  }
}

// ---------------------------------------------------------------------------
// Source-level control.
// ---------------------------------------------------------------------------

check(
  'the rate-limit flag is declared before the function that assigns it',
  SOURCE.indexOf('let rateLimited = false') < SOURCE.indexOf('function search('),
  'a `let` used above its declaration passes node --check and throws at runtime',
)

// ---------------------------------------------------------------------------
// Behavioural controls.
// ---------------------------------------------------------------------------

// Allowance spent *during the shard loop*, not during planning. The planner
// issues one count() per star bucket first, so the threshold must clear those or
// the loop never starts and this control would assert on the wrong phase — which
// is how it failed when first written.
const planCalls = run({ reported: 300, perQuery: 100 }, ['--plan']).calls
const spent = run({ reported: 300, perQuery: 100, failAfter: planCalls + 1 })
check('an exhausted allowance exits non-zero', spent.status !== 0, `status=${spent.status}`)
check(
  'an exhausted allowance stops the shard loop early',
  /stopping after shard \d+ of \d+/.test(spent.stderr),
  spent.stderr.split('\n').slice(-4).join(' | '),
)
check(
  'the refusal blames the allowance, not the sharding',
  /allowance was spent partway through/.test(spent.stderr),
  spent.stderr.split('\n').slice(-3).join(' | '),
)
check(
  'an exhausted allowance does not report a coverage bug',
  !/sharding did not work/.test(spent.stderr),
)

// A healthy run that genuinely under-covers must still be refused, and must be
// attributed to coverage rather than to the allowance.
const thin = run({ reported: 100000, perQuery: 1 })
check('genuine under-coverage exits non-zero', thin.status !== 0, `status=${thin.status}`)
check(
  'genuine under-coverage is attributed to sharding',
  /sharding did not work/.test(thin.stderr),
  thin.stderr.split('\n').slice(-3).join(' | '),
)

// A run with adequate coverage must succeed and emit records.
const healthy = run({ reported: 200, perQuery: 100 })
check('an adequately covered run exits zero', healthy.status === 0, `status=${healthy.status} ${healthy.stderr.slice(-200)}`)
check('an adequately covered run emits records', healthy.lines.length > 0, `${healthy.lines.length} lines`)
check(
  'emitted records carry the fields the probe needs',
  healthy.lines.length > 0
    && (() => {
      const row = JSON.parse(healthy.lines[0])
      return ['full_name', 'stars', 'pushed_at', 'created_at', 'archived', 'fork'].every((k) => k in row)
    })(),
  healthy.lines[0],
)

// Duplicates across shards must collapse.
const dupRow = healthy.lines.map((l) => JSON.parse(l).full_name)
check('emitted repositories are unique', new Set(dupRow).size === dupRow.length, `${dupRow.length} rows, ${new Set(dupRow).size} unique`)

// --plan must not spend the allowance on fetching.
const planned = run({ reported: 300, perQuery: 100 }, ['--plan'])
check('--plan exits zero', planned.status === 0, `status=${planned.status}`)
check(
  '--plan prints a shard plan without emitting repository records',
  planned.lines.length > 0 && planned.lines.every((l) => /^\d+\t/.test(l)),
  planned.lines.slice(0, 2).join(' | '),
)

// Pacing: with a real interval, consecutive search calls must be separated by
// roughly that interval. The search API allows 30 per minute and nothing paced
// these calls before, which is what actually spent the pool in every failed run.
check(
  'the pacing interval is read from the environment',
  /CENSUS_SEARCH_INTERVAL_MS/.test(SOURCE),
)
const pacedStart = Date.now()
const paced = run({ reported: 300, perQuery: 100, intervalMs: '400' }, ['--plan'])
const pacedMs = Date.now() - pacedStart
check(
  'a real interval spaces out consecutive search calls',
  paced.calls >= 3 && pacedMs >= (paced.calls - 1) * 400 * 0.6,
  `${paced.calls} calls in ${pacedMs} ms with a 400 ms interval`,
)

process.stdout.write(
  failures === 0
    ? `\nall ${checks} enumeration controls behaved as specified\n`
    : `\n${failures} of ${checks} enumeration controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
