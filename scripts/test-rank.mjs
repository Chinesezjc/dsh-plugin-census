#!/usr/bin/env node
/**
 * Controls for scripts/rank-pairwise.mjs.
 *
 * The ranker exists because the 1-5 absolute scale collapsed onto 4 and 5. Its own
 * risk is different: a comparison that fails must not move a rating, and a rating
 * must never be reshaped toward a target distribution. Both are asserted here.
 *
 * Every control runs against stub `gh` and a stub model endpoint, so none touch the
 * network. Each was verified by injecting the corresponding defect.
 *
 *   node scripts/test-rank.mjs
 */

import { spawn, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SCRIPT = new URL('./rank-pairwise.mjs', import.meta.url).pathname
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
    process.stdout.write(`FAIL  ${name}${detail ? ` \u2014 ${detail}` : ''}\n`)
  } else {
    process.stdout.write(`ok    ${name}\n`)
  }
}

/**
 * Run the ranker against a stub `gh` and a stub model server.
 *
 * The model server runs in its own process: `spawnSync` blocks this event loop for
 * the child's lifetime, so an in-process server would never accept the connection.
 *
 * @param options - `replies` (per-request bodies), `rows`, `existing`, `env`.
 * @returns `{ status, stderr, records, modelCalls }`.
 */
function runRank(options = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'rank-'))
  const portFile = join(dir, 'port')
  const callFile = join(dir, 'calls')
  writeFileSync(callFile, '')

  // Stub `gh`: every repository is readable and small.
  writeFileSync(
    join(dir, 'gh'),
    `#!/usr/bin/env node
const path = process.argv.slice(2).join(' ')
const out = (o) => process.stdout.write(JSON.stringify(o))
if (path.includes('/commits')) out([{ sha: 'deadbeef' }])
else if (path.includes('/readme')) out({ content: Buffer.from('# plugin\\nreal content').toString('base64') })
else if (path.includes('/git/trees')) out({ tree: [{ path: 'lib/index.js', type: 'blob' }, { path: 'package.json', type: 'blob' }] })
else out({})
`,
    { mode: 0o755 },
  )

  const replies = options.replies ?? [{ winner: 'A', margin: 'clear', reason: 'lib/index.js is real' }]
  writeFileSync(
    join(dir, 'server.mjs'),
    `import { createServer } from 'node:http'
import { appendFileSync, writeFileSync } from 'node:fs'
const replies = ${JSON.stringify(replies)}
let n = 0
const server = createServer((req, res) => {
  let body = ''
  req.on('data', (c) => { body += c })
  req.on('end', () => {
    appendFileSync(${JSON.stringify(callFile)}, 'x')
    const reply = replies[Math.min(n, replies.length - 1)]
    n += 1
    res.writeHead(200, { 'content-type': 'application/json' })
    if (reply === 'truncated') {
      return res.end(JSON.stringify({ stop_reason: 'max_tokens', content: [{ type: 'thinking', thinking: 'x' }] }))
    }
    if (reply === 'garbage') {
      return res.end(JSON.stringify({ stop_reason: 'end_turn', content: [{ type: 'text', text: 'no json here' }] }))
    }
    res.end(JSON.stringify({
      stop_reason: 'end_turn',
      content: [{ type: 'thinking', thinking: 'deliberating' }, { type: 'text', text: JSON.stringify(reply) }],
    }))
  })
})
server.listen(0, '127.0.0.1', () => writeFileSync(${JSON.stringify(portFile)}, String(server.address().port)))
`,
  )
  const server = spawn(process.execPath, [join(dir, 'server.mjs')], { stdio: 'ignore' })
  try {
    const deadline = Date.now() + 10_000
    let port = ''
    while (Date.now() < deadline) {
      try {
        port = readFileSync(portFile, 'utf8').trim()
        if (port) break
      } catch { /* not written yet */ }
      spawnSync(process.execPath, ['-e', 'setTimeout(()=>{},40)'])
    }
    if (!port) throw new Error('stub model server did not report a port')

    const rows = options.rows ?? [
      { repo: 'o/a', package: 'a' },
      { repo: 'o/b', package: 'b' },
    ]
    const args = [SCRIPT, '--limit', String(options.limit ?? 1), '--seed', '1']
    if (options.existing !== undefined) {
      const path = join(dir, 'existing.jsonl')
      writeFileSync(path, options.existing)
      args.push('--existing', path)
    }
    const result = spawnSync(process.execPath, args, {
      input: `${rows.map((r) => JSON.stringify(r)).join('\n')}\n`,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${dir}:${process.env.PATH}`,
        CENSUS_API_KEY: 'stub-key',
        CENSUS_API_BASE: `http://127.0.0.1:${port}`,
        CENSUS_RETRY_DELAY_MS: '5',
        CENSUS_RANK_CONCURRENCY: '1',
        ...(options.env ?? {}),
      },
      timeout: 60_000,
    })
    return {
      status: result.status,
      stderr: String(result.stderr ?? ''),
      records: String(result.stdout ?? '').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l)),
      modelCalls: readFileSync(callFile, 'utf8').length,
    }
  } finally {
    server.kill()
  }
}

const won = runRank()
check(
  'a clear win moves both ratings in opposite directions',
  won.records.length === 2
    && won.records.find((r) => r.repo === 'o/a').rating > 1500
    && won.records.find((r) => r.repo === 'o/b').rating < 1500,
  JSON.stringify(won.records),
)
check(
  'each record carries its match count',
  won.records.every((r) => r.matches === 1),
  JSON.stringify(won.records.map((r) => r.matches)),
)

// A tie must be recorded as a real outcome, not discarded: the prompt states a tie
// is a valid answer precisely so two comparable plugins do not exhaust the budget.
const tied = runRank({ replies: [{ winner: 'tie', margin: 'slight', reason: 'both ship lib/' }] })
check(
  'a tie leaves equal ratings but still counts as a match',
  tied.records.length === 2
    && tied.records[0].rating === tied.records[1].rating
    && tied.records.every((r) => r.matches === 1),
  JSON.stringify(tied.records),
)

// A slight margin must move ratings less than a clear one.
const slight = runRank({ replies: [{ winner: 'A', margin: 'slight', reason: 'marginal' }] })
check(
  'a slight margin moves ratings less than a clear one',
  slight.records.find((r) => r.repo === 'o/a').rating
    < won.records.find((r) => r.repo === 'o/a').rating,
  `slight=${slight.records.find((r) => r.repo === 'o/a').rating} clear=${won.records.find((r) => r.repo === 'o/a').rating}`,
)

// The defect that matters most: a failed comparison must not move a rating.
const truncated = runRank({ replies: ['truncated'] })
check(
  'a truncated reply produces no rating at all',
  truncated.records.length === 0,
  JSON.stringify(truncated.records),
)
check(
  'a truncated reply is retried',
  truncated.modelCalls > 1,
  `${truncated.modelCalls} model call(s)`,
)
check(
  'the token ceiling is named when it is hit',
  /token ceiling before answering/.test(truncated.stderr),
  truncated.stderr.split('\n').slice(-4).join(' | '),
)

const garbage = runRank({ replies: ['garbage'] })
check(
  'an unparseable reply produces no rating',
  garbage.records.length === 0,
  JSON.stringify(garbage.records),
)
check(
  'the unparsed text is shown rather than silently dropped',
  /no JSON in reply/.test(garbage.stderr),
  garbage.stderr.split('\n').slice(-3).join(' | '),
)

// A run where everything failed must be refused.
const allFailed = runRank({
  replies: ['truncated'],
  limit: 2,
  rows: [
    { repo: 'o/a', package: 'a' },
    { repo: 'o/b', package: 'b' },
    { repo: 'o/c', package: 'c' },
    { repo: 'o/d', package: 'd' },
  ],
})
check('a wholly failed run exits non-zero', allFailed.status !== 0, `status=${allFailed.status}`)

// Stored ratings must carry forward, so coverage accumulates across runs.
const carried = runRank({
  existing: `${JSON.stringify({ repo: 'o/z', rating: 1600, matches: 4, promptVersion: 'p1' })}\n`,
  rows: [
    { repo: 'o/a', package: 'a' },
    { repo: 'o/b', package: 'b' },
    { repo: 'o/z', package: 'z' },
  ],
})
check(
  'a stored rating for an unplayed entry is preserved',
  carried.records.find((r) => r.repo === 'o/z')?.rating === 1600
    && carried.records.find((r) => r.repo === 'o/z')?.matches === 4,
  JSON.stringify(carried.records.find((r) => r.repo === 'o/z')),
)

// A stored rating from a different prompt version must be discarded, since the
// question that produced it no longer matches the one being asked.
const stale = runRank({
  existing: `${JSON.stringify({ repo: 'o/z', rating: 1600, matches: 4, promptVersion: 'p0' })}\n`,
  rows: [
    { repo: 'o/a', package: 'a' },
    { repo: 'o/b', package: 'b' },
    { repo: 'o/z', package: 'z' },
  ],
})
// `o/z` may still be played this run — discarding its stale record resets it to 0
// matches, which sorts it to the front of the pairing order. What must not survive
// is the stored rating and match count from the superseded prompt.
const staleZ = stale.records.find((r) => r.repo === 'o/z')
check(
  'a rating from a superseded prompt version is not carried forward',
  staleZ === undefined || (staleZ.rating !== 1600 && staleZ.matches < 4),
  JSON.stringify(staleZ),
)

// The method must never reshape ratings toward a target distribution: a rating has
// to be traceable to comparisons that were actually made.
check(
  'no target distribution is applied to the ratings',
  !/normal|gaussian|percentile|quota|forceDistribution/i.test(SOURCE),
  'rank-pairwise.mjs must not reshape ratings toward any target curve',
)
check(
  'star counts are never shown to the model',
  !/stargazers|\bstars\b/.test(SOURCE.split('async function compare')[1].split('async function')[0]),
  'the comparison prompt must not include popularity',
)

// Convergence. Pairing the least-compared entries first spread across the whole
// catalogue and never deepened: after two real runs, all 332 rated entries had exactly
// 1 match, because entries with 0 matches always sort ahead of entries with 1. At that
// rate 10 matches would take about 453 runs. Bounding the pool is what makes depth
// possible, so depth is asserted directly.
{
  const rows = [
    { repo: 'o/a', package: 'a' },
    { repo: 'o/b', package: 'b' },
    { repo: 'o/c', package: 'c' },
    { repo: 'o/d', package: 'd' },
  ]
  let carried = ''
  const maxMatches = []
  for (let round = 0; round < 3; round += 1) {
    const result = runRank({ rows, limit: 2, existing: carried })
    carried = `${result.records.map((r) => JSON.stringify(r)).join('\n')}\n`
    maxMatches.push(result.records.reduce((max, r) => Math.max(max, r.matches ?? 0), 0))
  }
  check(
    'repeated runs deepen existing entries rather than only adding new ones',
    maxMatches[2] > maxMatches[0],
    `max matches per round: ${maxMatches.join(' -> ')}`,
  )
}

// A stored rating outside the current pool must survive. Emitting only the pool
// discarded ratings earned before the pool criterion existed.
{
  const outside = { repo: 'o/outside', rating: 1620, matches: 6, promptVersion: 'p1' }
  const kept = runRank({
    rows: [{ repo: 'o/a', package: 'a' }, { repo: 'o/b', package: 'b' }],
    existing: `${JSON.stringify(outside)}\n`,
  })
  const found = kept.records.find((r) => r.repo === 'o/outside')
  check(
    'a stored rating outside the pool is not discarded',
    found?.rating === 1620 && found?.matches === 6,
    JSON.stringify(found),
  )
}

process.stdout.write(
  failures === 0
    ? `\nall ${checks} pairwise-ranking controls behaved as specified\n`
    : `\n${failures} of ${checks} pairwise-ranking controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
