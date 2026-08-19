#!/usr/bin/env node
/**
 * Controls for scripts/ai-review.mjs.
 *
 * Each control states a behaviour the reviewer must have, and each was checked
 * in both directions: the assertion was confirmed to fail when the behaviour was
 * removed from the source. A suite that stays green after the behaviour is
 * deleted proves nothing, which is how an earlier gate in this repository passed
 * while matching only its own documentation.
 *
 *   node scripts/test-review.mjs
 */

import { execFileSync, spawn, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SCRIPT = new URL('./ai-review.mjs', import.meta.url).pathname
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
 * Run the reviewer with a stub model CLI.
 * @param options - catalogue text, stub behaviour and extra argv.
 * @returns `{ status, stdout, stderr, records }`.
 */
function runReviewer({ catalogue, stub, argv = [], existing }) {
  const dir = mkdtempSync(join(tmpdir(), 'review-'))
  const stubPath = join(dir, 'stub-model')
  writeFileSync(stubPath, stub, { mode: 0o755 })
  const args = [SCRIPT, ...argv]
  if (existing !== undefined) {
    const existingPath = join(dir, 'existing.jsonl')
    writeFileSync(existingPath, existing)
    args.push('--existing', existingPath)
  }
  const result = spawnSync(process.execPath, args, {
    input: catalogue,
    encoding: 'utf8',
    env: { ...process.env, CENSUS_MODEL_CLI: stubPath, PATH: `${dir}:${process.env.PATH}` },
    timeout: 120_000,
  })
  const records = String(result.stdout || '')
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))
  return { status: result.status, stdout: result.stdout, stderr: result.stderr, records }
}

/** A stub `gh` that serves a fixed repository, plus a stub model. */
function ghStub({ readmeText = '# Real plugin\n\nDoes a thing.\n', files = ['src/index.ts'] } = {}) {
  const b64 = (s) => Buffer.from(s).toString('base64')
  return `#!/usr/bin/env node
const path = process.argv.slice(2).join(' ')
const out = (o) => process.stdout.write(JSON.stringify(o))
if (path.includes('/commits')) out([{ sha: 'a'.repeat(40), commit: { committer: { date: '2026-08-17T00:00:00Z' } } }])
else if (path.includes('/readme')) out({ content: ${JSON.stringify('')} || '${b64(readmeText)}' })
else if (path.includes('/git/trees')) out({ truncated: false, tree: ${JSON.stringify(
    files.map((p) => ({ path: p, type: 'blob' })),
  )} })
else if (path.includes('/contents/')) out({ content: '${b64(JSON.stringify({ name: 'p', scripts: { build: 'tsc' } }))}' })
else out({})
`
}

// ---------------------------------------------------------------------------
// Source-level controls: properties enforced by construction.
// ---------------------------------------------------------------------------

check(
  'prompt withholds star count from the model',
  !/buildPrompt[\s\S]*?\bstars\b/.test(SOURCE.slice(SOURCE.indexOf('function buildPrompt'), SOURCE.indexOf('function parseVerdict'))),
  'buildPrompt must not interpolate stars; the rubric forbids using popularity',
)

check(
  'rubric explicitly forbids scoring on popularity or recency',
  /Do not reward or penalise star count/.test(SOURCE),
)

check(
  'averaging is gated on the prompt version',
  /prior\.promptVersion === record\.promptVersion/.test(SOURCE),
  'samples answering a different question must not be averaged together',
)

check(
  'averaging is gated on the pinned commit sha',
  /prior\.commitSha === record\.commitSha/.test(SOURCE),
  'samples describing different code must not be averaged together',
)

check(
  'a drawn entry is re-reviewed rather than skipped',
  !/reusable\.push/.test(SOURCE) && /const sample = ordered\.slice/.test(SOURCE),
  'skipping an already-scored entry makes repeated sampling impossible',
)

check(
  'input is deduplicated by repository',
  /dropped \$\{dropped\} duplicate input row/.test(SOURCE),
)

// ---------------------------------------------------------------------------
// Behavioural controls: run the script against stubs.
// ---------------------------------------------------------------------------

const oneRepo = `${JSON.stringify({ repo: 'o/p', package: 'p', manifestPath: 'package.json', description: 'd' })}\n`
const dir = mkdtempSync(join(tmpdir(), 'ghstub-'))
writeFileSync(join(dir, 'gh'), ghStub(), { mode: 0o755 })

/**
 * Run with both a stubbed `gh` on PATH and a stubbed model.
 * @param stub - model stub source.
 * @param extra - extra options.
 */
function runWithGh(stub, extra = {}) {
  const stubDir = mkdtempSync(join(tmpdir(), 'model-'))
  const stubPath = join(stubDir, 'model')
  writeFileSync(stubPath, stub, { mode: 0o755 })
  const args = [SCRIPT, '--limit', '5', ...(extra.argv ?? [])]
  if (extra.existing !== undefined) {
    const p = join(stubDir, 'existing.jsonl')
    writeFileSync(p, extra.existing)
    args.push('--existing', p)
  }
  const result = spawnSync(process.execPath, args, {
    input: extra.catalogue ?? oneRepo,
    encoding: 'utf8',
    env: { ...process.env, CENSUS_MODEL_CLI: stubPath, PATH: `${dir}:${process.env.PATH}` },
    timeout: 120_000,
  })
  const records = String(result.stdout || '')
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))
  return { ...result, records }
}

const good = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 4, "reasons": ["has src/index.ts", "build script present"]}')
`)
check('a valid verdict yields reviewed:true with the score', good.records[0]?.reviewed === true && good.records[0]?.score === 4, JSON.stringify(good.records[0] ?? good.stderr))
check('a review records the commit sha it read', /^a{40}$/.test(good.records[0]?.commitSha ?? ''), String(good.records[0]?.commitSha))
check('a review records a readme sha', /^[0-9a-f]{64}$/.test(good.records[0]?.readmeSha ?? ''))
check('a review records the prompt version', good.records[0]?.promptVersion === 'v1')

const fenced = runWithGh(`#!/usr/bin/env node
process.stdout.write('\`\`\`json\\n{"score": 3, "reasons": ["a"]}\\n\`\`\`')
`)
check('a fenced JSON reply is still parsed', fenced.records[0]?.score === 3, JSON.stringify(fenced.records[0] ?? fenced.stderr))

const prose = runWithGh(`#!/usr/bin/env node
process.stdout.write('I think this is quite good, maybe a 4 out of 5.')
`)
check(
  'unparseable output produces no score',
  prose.records[0]?.reviewed === false && prose.records[0]?.score === undefined,
  JSON.stringify(prose.records[0] ?? prose.stderr),
)
check('unparseable output is labelled UNPARSEABLE_OUTPUT', prose.records[0]?.failure === 'UNPARSEABLE_OUTPUT')

const crashed = runWithGh(`#!/usr/bin/env node
process.exit(9)
`)
check(
  'a failed model call produces no score',
  crashed.records[0]?.reviewed === false && crashed.records[0]?.score === undefined,
  JSON.stringify(crashed.records[0] ?? crashed.stderr),
)
check('a failed model call is labelled MODEL_CALL_FAILED', crashed.records[0]?.failure === 'MODEL_CALL_FAILED')

for (const bad of ['0', '6', '3.5', '"4"', 'null']) {
  const r = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": ${bad}, "reasons": ["x"]}')
`)
  check(
    `score ${bad} is rejected rather than published`,
    r.records[0]?.reviewed === false && r.records[0]?.score === undefined,
    JSON.stringify(r.records[0] ?? ''),
  )
}

// Failure-rate refusal: every review fails, so the run must exit non-zero.
const allFail = runWithGh(
  `#!/usr/bin/env node
process.exit(1)
`,
  {
    catalogue: ['a/1', 'b/2', 'c/3', 'd/4']
      .map((repo) => JSON.stringify({ repo, package: 'p', manifestPath: 'package.json' }))
      .join('\n') + '\n',
  },
)
check('a run where every review failed exits non-zero', allFail.status !== 0, `status=${allFail.status}`)
check('the refusal names the ceiling', /above the 30% ceiling/.test(String(allFail.stderr)))

// Reuse: a stored review at the same sha and prompt version is not re-reviewed.
const storedSame = JSON.stringify({
  repo: 'o/p',
  reviewed: true,
  score: 2,
  commitSha: 'a'.repeat(40),
  promptVersion: 'v1',
})
const reuse = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 5, "reasons": ["fresh"]}')
`, { existing: `${storedSame}\n` })
check(
  'a second sample at the same sha is averaged with the first',
  reuse.records[0]?.score === 3.5
    && JSON.stringify(reuse.records[0]?.scores) === '[2,5]'
    && reuse.records[0]?.runs === 2,
  JSON.stringify(reuse.records[0] ?? reuse.stderr),
)
check(
  'the published score is the mean of the raw samples',
  (() => {
    const r = reuse.records[0]
    if (!r?.scores) return false
    const mean = r.scores.reduce((sum, v) => sum + v, 0) / r.scores.length
    return Math.abs(r.score - mean) < 1e-9
  })(),
  JSON.stringify(reuse.records[0] ?? ''),
)
check(
  'disagreement across runs is reported',
  /1 disagree across runs/.test(String(reuse.stderr)),
  String(reuse.stderr).split('\n').slice(-3).join(' | '),
)

// A third sample must extend the same list rather than restarting it.
const storedTwice = JSON.stringify({
  repo: 'o/p',
  reviewed: true,
  score: 3,
  scores: [2, 4],
  runs: 2,
  commitSha: 'a'.repeat(40),
  promptVersion: 'v1',
})
const third = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 3, "reasons": ["third"]}')
`, { existing: `${storedTwice}\n` })
check(
  'a third sample extends the existing list',
  JSON.stringify(third.records[0]?.scores) === '[2,4,3]' && third.records[0]?.runs === 3,
  JSON.stringify(third.records[0] ?? third.stderr),
)

const storedOldPrompt = JSON.stringify({
  repo: 'o/p',
  reviewed: true,
  score: 2,
  commitSha: 'a'.repeat(40),
  promptVersion: 'v0',
})
const bumped = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 5, "reasons": ["fresh"]}')
`, { existing: `${storedOldPrompt}\n` })
check(
  'a sample from an older prompt version is discarded, not averaged',
  bumped.records[0]?.score === 5 && JSON.stringify(bumped.records[0]?.scores) === '[5]',
  JSON.stringify(bumped.records[0] ?? bumped.stderr),
)

const storedMoved = JSON.stringify({
  repo: 'o/p',
  reviewed: true,
  score: 2,
  commitSha: 'b'.repeat(40),
  promptVersion: 'v1',
})
const moved = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 5, "reasons": ["fresh"]}')
`, { existing: `${storedMoved}\n` })
check(
  'a sample against a different commit is discarded, not averaged',
  moved.records[0]?.score === 5 && JSON.stringify(moved.records[0]?.scores) === '[5]',
  JSON.stringify(moved.records[0] ?? moved.stderr),
)

// Duplicate input rows must collapse to one review.
const dupes = runWithGh(`#!/usr/bin/env node
process.stdout.write('{"score": 3, "reasons": ["x"]}')
`, { catalogue: oneRepo + oneRepo + oneRepo })
check('duplicate input rows produce one review', dupes.records.length === 1, `got ${dupes.records.length}`)
check('the duplicate drop is reported', /dropped 2 duplicate input row/.test(String(dupes.stderr)))

// Sampling: the seed changes the order, and the order does not track stars.
const many = Array.from({ length: 60 }, (_, i) =>
  JSON.stringify({ repo: `owner${i}/plugin`, package: 'p', manifestPath: 'package.json', stars: i * 100 }),
).join('\n') + '\n'
const modelOk = `#!/usr/bin/env node
process.stdout.write('{"score": 3, "reasons": ["x"]}')
`
const seedA = runWithGh(modelOk, { catalogue: many, argv: ['--seed', '1', '--limit', '10'] })
const seedB = runWithGh(modelOk, { catalogue: many, argv: ['--seed', '2', '--limit', '10'] })
const seedA2 = runWithGh(modelOk, { catalogue: many, argv: ['--seed', '1', '--limit', '10'] })
const namesA = seedA.records.map((r) => r.repo).join(',')
const namesB = seedB.records.map((r) => r.repo).join(',')
const namesA2 = seedA2.records.map((r) => r.repo).join(',')
check('the same seed selects the same sample', namesA === namesA2, `${namesA}\n${namesA2}`)
check('a different seed selects a different sample', namesA !== namesB, namesA)

// Star-neutrality: the selected indices must not be the top-star head.
const idx = seedA.records.map((r) => Number(r.repo.replace(/^owner(\d+).*$/, '$1')))
const topTen = new Set(Array.from({ length: 10 }, (_, i) => 59 - i))
const overlap = idx.filter((i) => topTen.has(i)).length
check(
  'the sample is not the star-sorted head',
  overlap < 8,
  `selected ${idx.join(',')} — ${overlap}/10 were the ten highest-star entries`,
)

// ---------------------------------------------------------------------------
// HTTP backend. CI has no model CLI, so the unattended path is the Messages API.
// These controls run it against a local stub server: no network, no credential.
// ---------------------------------------------------------------------------

/**
 * Serve one canned Messages API response and run the reviewer against it.
 *
 * The stub server runs in its OWN process. An in-process server cannot work here:
 * `spawnSync` blocks this process's event loop for the child's whole lifetime, so
 * the server never accepts the connection and the child hangs until its timeout.
 * That deadlock looked exactly like a broken reviewer for several iterations.
 *
 * @param body - the JSON body to return.
 * @param status - HTTP status.
 * @returns the reviewer result plus the request count the stub recorded.
 */
function runWithApi(body, status = 200) {
  const stubDir = mkdtempSync(join(tmpdir(), 'api-'))
  const portFile = join(stubDir, 'port')
  const countFile = join(stubDir, 'count')
  const serverPath = join(stubDir, 'server.mjs')
  writeFileSync(
    serverPath,
    `import { createServer } from 'node:http'
import { writeFileSync } from 'node:fs'
let requests = 0
const server = createServer((req, res) => {
  requests += 1
  writeFileSync(${JSON.stringify(countFile)}, String(requests))
  res.writeHead(${status}, { 'content-type': 'application/json' })
  res.end(${JSON.stringify(JSON.stringify(body))})
})
server.listen(0, '127.0.0.1', () => {
  writeFileSync(${JSON.stringify(portFile)}, String(server.address().port))
})
`,
  )
  writeFileSync(countFile, '0')
  const server = spawn(process.execPath, [serverPath], { stdio: 'ignore', detached: false })
  try {
    // Wait for the port file rather than sleeping a guessed interval.
    const deadline = Date.now() + 10_000
    let port = ''
    while (Date.now() < deadline) {
      try {
        port = readFileSync(portFile, 'utf8').trim()
        if (port) break
      } catch {
        /* not written yet */
      }
      execFileSync(process.execPath, ['-e', 'setTimeout(()=>{},50)'])
    }
    if (!port) throw new Error('stub API server did not report a port')
    const result = spawnSync(process.execPath, [SCRIPT, '--limit', '1'], {
      input: oneRepo,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${dir}:${process.env.PATH}`,
        CENSUS_API_KEY: 'test-key',
        CENSUS_API_BASE: `http://127.0.0.1:${port}`,
        CENSUS_API_MODEL: 'test-model',
        CENSUS_MODEL_CLI: '/nonexistent/cli-must-not-be-used',
      },
      timeout: 120_000,
    })
    const requests = Number(readFileSync(countFile, 'utf8')) || 0
    const records = String(result.stdout || '')
      .split('\n')
      .filter((l) => l.trim())
      .map((l) => JSON.parse(l))
    return { ...result, records, requests }
  } finally {
    server.kill()
  }
}

// A `thinking` block precedes the answer on this endpoint. Reading content[0]
// yields undefined, which is indistinguishable from a refusal.
const thinking = runWithApi({
  stop_reason: 'end_turn',
  content: [
    { type: 'thinking', thinking: 'weighing the evidence' },
    { type: 'text', text: '{"score": 4, "reasons": ["has tests"]}' },
  ],
})
check(
  'the API backend reads text past a leading thinking block',
  thinking.records[0]?.reviewed === true && thinking.records[0]?.score === 4,
  JSON.stringify(thinking.records[0] ?? thinking.stderr),
)
check(
  'a configured API key means the CLI is never invoked',
  thinking.requests === 1 && !/ENOENT|cli-must-not-be-used/.test(String(thinking.stderr)),
  `requests=${thinking.requests} stderr=${String(thinking.stderr).slice(0, 160)}`,
)

// Budget exhaustion is its own failure. Measured on a real repository: 4094
// characters of thinking spent a 1024-token budget and no answer was emitted.
const truncated = runWithApi({
  stop_reason: 'max_tokens',
  content: [{ type: 'thinking', thinking: 'x'.repeat(4000) }],
})
check(
  'budget exhaustion produces no score',
  truncated.records[0]?.reviewed === false && truncated.records[0]?.score === undefined,
  JSON.stringify(truncated.records[0] ?? truncated.stderr),
)
check(
  'budget exhaustion is labelled ANSWER_TRUNCATED, not UNPARSEABLE_OUTPUT',
  truncated.records[0]?.failure === 'ANSWER_TRUNCATED',
  `got ${truncated.records[0]?.failure}`,
)

// The body deliberately carries a well-formed verdict, so only the status check
// can reject it. An error-shaped body would be unparseable anyway and the control
// would pass even with the status check removed — which it did, until this case
// replaced it.
const apiError = runWithApi(
  { stop_reason: 'end_turn', content: [{ type: 'text', text: '{"score": 5, "reasons": ["should not count"]}' }] },
  500,
)
check(
  'a non-200 status is rejected even when the body parses',
  apiError.records[0]?.reviewed === false && apiError.records[0]?.score === undefined,
  JSON.stringify(apiError.records[0] ?? ''),
)
check(
  'an API error is labelled MODEL_CALL_FAILED',
  apiError.records[0]?.failure === 'MODEL_CALL_FAILED',
  `got ${apiError.records[0]?.failure}`,
)

const emptyText = runWithApi({
  stop_reason: 'end_turn',
  content: [{ type: 'thinking', thinking: 'thought only' }],
})
check(
  'a response with no text block produces no score',
  emptyText.records[0]?.reviewed === false && emptyText.records[0]?.score === undefined,
  JSON.stringify(emptyText.records[0] ?? ''),
)

// A failing `gh` must say why. Without this, an unauthenticated CI run reported
// every entry as HEAD_UNREADABLE and the log named no cause.
const brokenGh = (() => {
  const badDir = mkdtempSync(join(tmpdir(), 'badgh-'))
  writeFileSync(
    join(badDir, 'gh'),
    '#!/usr/bin/env node\nprocess.stderr.write("gh: authentication required")\nprocess.exit(1)\n',
    { mode: 0o755 },
  )
  return spawnSync(process.execPath, [SCRIPT, '--limit', '1'], {
    input: oneRepo,
    encoding: 'utf8',
    env: { ...process.env, PATH: `${badDir}:${process.env.PATH}`, CENSUS_MODEL_CLI: '/nonexistent' },
    timeout: 60_000,
  })
})()
check(
  'a failing gh command reports its stderr',
  /gh failed: .*authentication required/.test(String(brokenGh.stderr)),
  String(brokenGh.stderr).split('\n').slice(0, 3).join(' | '),
)

// Wall-clock deadline. The batch is bounded by time, not only by API allowance:
// a review takes ~17.6 s and the job times out at 45 minutes, so a run sized
// purely by quota would kill the census with it.
{
  const dir = mkdtempSync(join(tmpdir(), 'deadline-'))
  writeFileSync(join(dir, 'gh'), ghStub(), { mode: 0o755 })
  const slow = mkdtempSync(join(tmpdir(), 'slowmodel-'))
  const slowPath = join(slow, 'model')
  // Each call takes ~1.2 s, so a 2 s deadline stops the loop partway.
  writeFileSync(
    slowPath,
    '#!/usr/bin/env node\n'
      + 'setTimeout(() => process.stdout.write(\'{"score": 4, "reasons": ["x"]}\'), 1200)\n',
    { mode: 0o755 },
  )
  const many = Array.from({ length: 8 }, (_, i) =>
    JSON.stringify({ repo: `owner${i}/plugin`, package: 'p', manifestPath: 'package.json' }),
  ).join('\n') + '\n'
  const result = spawnSync(process.execPath, [SCRIPT, '--limit', '8'], {
    input: many,
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${dir}:${process.env.PATH}`,
      CENSUS_MODEL_CLI: slowPath,
      CENSUS_REVIEW_DEADLINE_SECONDS: '2',
      // Pin concurrency to 1: with the default pool, four workers claim the whole
      // sample before the deadline elapses and nothing is left unreached, so the
      // control would pass without the deadline doing anything.
      CENSUS_REVIEW_CONCURRENCY: '1',
    },
    timeout: 120_000,
  })
  const records = String(result.stdout || '')
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))
  check(
    'the deadline stops the loop before the whole sample is reviewed',
    records.length < 8 && records.length > 0,
    `${records.length} of 8 reviewed; stderr=${String(result.stderr).slice(-200)}`,
  )
  check(
    'the deadline is reported with a count',
    /stopping at the 2s deadline after \d+ review/.test(String(result.stderr)),
    String(result.stderr).split('\n').slice(-3).join(' | '),
  )
  check(
    'a deadline-shortened run still exits zero',
    result.status === 0,
    `status=${result.status}`,
  )
}

// An entry drawn but never reached must keep its stored review. Keying the
// carry-forward on "drawn" rather than "reviewed" silently dropped those rows.
{
  const dir = mkdtempSync(join(tmpdir(), 'carry-'))
  writeFileSync(join(dir, 'gh'), ghStub(), { mode: 0o755 })
  const slow = mkdtempSync(join(tmpdir(), 'slow2-'))
  const slowPath = join(slow, 'model')
  writeFileSync(
    slowPath,
    '#!/usr/bin/env node\n'
      + 'setTimeout(() => process.stdout.write(\'{"score": 4, "reasons": ["x"]}\'), 1200)\n',
    { mode: 0o755 },
  )
  const repos = Array.from({ length: 8 }, (_, i) => `owner${i}/plugin`)
  const catalogue = repos
    .map((repo) => JSON.stringify({ repo, package: 'p', manifestPath: 'package.json' }))
    .join('\n') + '\n'
  // Every entry already has a stored review, so nothing may be lost.
  const existingPath = join(slow, 'existing.jsonl')
  writeFileSync(
    existingPath,
    repos
      .map((repo) => JSON.stringify({
        repo,
        reviewed: true,
        score: 3,
        scores: [3],
        runs: 1,
        commitSha: 'f'.repeat(40),
        promptVersion: 'v1',
      }))
      .join('\n') + '\n',
  )
  const result = spawnSync(process.execPath, [SCRIPT, '--limit', '8', '--existing', existingPath], {
    input: catalogue,
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${dir}:${process.env.PATH}`,
      CENSUS_MODEL_CLI: slowPath,
      CENSUS_REVIEW_DEADLINE_SECONDS: '2',
      // Pin concurrency to 1: with the default pool, four workers claim the whole
      // sample before the deadline elapses and nothing is left unreached, so the
      // control would pass without the deadline doing anything.
      CENSUS_REVIEW_CONCURRENCY: '1',
    },
    timeout: 120_000,
  })
  const records = String(result.stdout || '')
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))
  check(
    'a deadline-shortened run loses no stored entry',
    new Set(records.map((row) => row.repo)).size === repos.length,
    `${new Set(records.map((row) => row.repo)).size} of ${repos.length} repos in output`,
  )
  check(
    'unreached entries keep their stored score',
    records.filter((row) => row.runs === 1 && row.score === 3).length > 0,
    JSON.stringify(records.map((row) => `${row.repo}:${row.score}/${row.runs}`)),
  )
}

// Concurrency. Reviews are independent and the sequential loop spent most of its
// time waiting, so the pool is the difference between ~17.6 s and a few seconds
// per review. These controls check that it is real and that it stays bounded.
{
  const dir = mkdtempSync(join(tmpdir(), 'conc-'))
  writeFileSync(join(dir, 'gh'), ghStub(), { mode: 0o755 })
  const slow = mkdtempSync(join(tmpdir(), 'slowc-'))
  const slowPath = join(slow, 'model')
  const logFile = join(slow, 'calls.log')
  // Append a start and end timestamp per call and reconstruct overlap from the
  // ordering. An earlier version kept a live counter in a file; that is an
  // unsynchronised read-modify-write across processes and reported a peak of 5
  // for a pool of 4, which measured the instrument rather than the pool.
  writeFileSync(
    slowPath,
    `#!/usr/bin/env node
const fs = require('node:fs')
fs.appendFileSync(${JSON.stringify(logFile)}, 'S ' + Date.now() + '\\n')
setTimeout(() => {
  fs.appendFileSync(${JSON.stringify(logFile)}, 'E ' + Date.now() + '\\n')
  process.stdout.write('{"score": 4, "reasons": ["x"]}')
}, 700)
`,
    { mode: 0o755 },
  )
  const catalogue = Array.from({ length: 12 }, (_, i) =>
    JSON.stringify({ repo: `owner${i}/plugin`, package: 'p', manifestPath: 'package.json' }),
  ).join('\n') + '\n'

  /** Peak overlap, reconstructed from the start/end timestamps. */
  const peakOverlap = () => {
    const events = readFileSync(logFile, 'utf8')
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [kind, at] = line.split(' ')
        return { at: Number(at), delta: kind === 'S' ? 1 : -1 }
      })
      .sort((a, b) => a.at - b.at || a.delta - b.delta)
    let current = 0
    let peak = 0
    for (const event of events) {
      current += event.delta
      if (current > peak) peak = current
    }
    return peak
  }

  const runPool = (concurrency) => {
    writeFileSync(logFile, '')
    const started = Date.now()
    const result = spawnSync(process.execPath, [SCRIPT, '--limit', '12'], {
      input: catalogue,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${dir}:${process.env.PATH}`,
        CENSUS_MODEL_CLI: slowPath,
        CENSUS_REVIEW_CONCURRENCY: String(concurrency),
      },
      timeout: 120_000,
    })
    return {
      ms: Date.now() - started,
      peak: peakOverlap(),
      records: String(result.stdout || '').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l)),
      status: result.status,
    }
  }

  const serial = runPool(1)
  const parallel = runPool(4)

  check(
    'concurrency 1 runs one model call at a time',
    serial.peak === 1,
    `peak=${serial.peak}`,
  )
  check(
    'concurrency 4 overlaps model calls',
    parallel.peak > 1,
    `peak=${parallel.peak}`,
  )
  check(
    'the pool never exceeds its configured size',
    parallel.peak <= 4,
    `peak=${parallel.peak} exceeds 4`,
  )
  check(
    'concurrency reviews the whole sample',
    parallel.records.length === 12 && serial.records.length === 12,
    `serial=${serial.records.length} parallel=${parallel.records.length}`,
  )
  check(
    'concurrency is faster than serial for the same work',
    parallel.ms < serial.ms,
    `serial=${serial.ms}ms parallel=${parallel.ms}ms`,
  )
  check(
    'both orders emit the same entries in the same sequence',
    serial.records.map((r) => r.repo).join() === parallel.records.map((r) => r.repo).join(),
    `serial=${serial.records.map((r) => r.repo).slice(0, 3).join()} parallel=${parallel.records.map((r) => r.repo).slice(0, 3).join()}`,
  )
}

// The token ceiling must be high enough that reasoning fits. 4096 truncated 6 of
// 9 failures in a full CI run, and 8192 scored 12 of 12 where 4096 scored 9 while
// also finishing faster, because a truncated call spends the whole budget and
// returns nothing.
check(
  'the token ceiling leaves room for the reasoning block',
  Number((SOURCE.match(/CENSUS_MAX_TOKENS \?\? (\d+)/) ?? [])[1]) >= 8192,
  `ceiling is ${(SOURCE.match(/CENSUS_MAX_TOKENS \?\? (\d+)/) ?? ['', 'unset'])[1]}`,
)

process.stdout.write(
  failures === 0
    ? `\nall ${checks} review controls behaved as specified\n`
    : `\n${failures} of ${checks} review controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
