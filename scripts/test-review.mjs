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

import { spawnSync } from 'node:child_process'
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

process.stdout.write(
  failures === 0
    ? `\nall ${checks} review controls behaved as specified\n`
    : `\n${failures} of ${checks} review controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
