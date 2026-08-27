#!/usr/bin/env node
/**
 * Rank catalogued plugins by pairwise comparison rather than absolute scoring.
 *
 * The 1-5 scale collapsed: 97% of 1078 reviews landed on 4 or 5, and the mean
 * moved only 0.7 points between plugins with under 10 files and plugins with 31 to
 * 100. The model was perceiving the difference and refusing to express it.
 *
 * Asking which of two plugins a competent user would trust separates cases the
 * scale could not. Measured on two plugins both scored 5:
 * `FengYangXun123/dsh-opencode-usage` (7 files) beat
 * `GongYuanCaiJi/dsh-claude-code-templates` (5057 files) with a clear margin,
 * because the latter is a vendored skill bundle — verified afterwards: 5031 of its
 * 5057 files sit under `skills/` and only 3 under `lib/`. Absolute scoring had been
 * flattened by size; the comparison was not.
 *
 * Ratings use Elo because it needs no global ordering and tolerates a sparse,
 * growing set of comparisons: each run plays a bounded batch and the ratings
 * accumulate, the same way contract probing and decay scanning do. A full pass at
 * six comparisons per plugin would take about 270 minutes, well past the 45-minute
 * job timeout, so it is spread across runs instead.
 *
 * What this does NOT do is force a distribution. A rating is only ever moved by a
 * comparison the model actually made, so a rating can be traced to the matches
 * that produced it. Reshaping the histogram to a target curve would publish a
 * number that no evidence supports, about someone else's repository.
 *
 * Convergence, measured rather than assumed: one match per entry produces a
 * 16-point spread with every entry at exactly plus or minus 8, two matches widen it
 * to 32 and entries begin to separate. Elo conventionally needs 10 to 20 matches
 * before a rating means anything, so a rating with a low `matches` count is not yet
 * a finding. At 150 comparisons per run, ranking the 1078 already-reviewed entries
 * to 10 matches each takes about 36 runs; ranking the whole 5307-entry catalogue
 * would take about 177. Ratings are therefore published with their match count and
 * are not presented as a verdict until that count is high enough.
 *
 *   node scripts/rank-pairwise.mjs --limit 150 \
 *     --existing data/ratings.jsonl < data/catalog.jsonl > data/ratings.next.jsonl
 */

import { execFile } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

/** Prompt version. Bump when the question changes; invalidates stored matches. */
const PROMPT_VERSION = 'p1'

/** API credentials, shared with the absolute reviewer. */
const API_KEY = process.env.CENSUS_API_KEY ?? process.env.ANTHROPIC_AUTH_TOKEN ?? ''
const API_BASE = (process.env.CENSUS_API_BASE ?? 'https://api.deepseek.com/anthropic').replace(/\/+$/, '')
const API_MODEL = process.env.CENSUS_API_MODEL ?? 'deepseek-v4-flash'

/** Response ceiling. The reasoning block counts against it, as in ai-review. */
const MAX_TOKENS = Number(process.env.CENSUS_MAX_TOKENS ?? 8192)

/** Comparisons run at once. */
const CONCURRENCY = Math.max(1, Number(process.env.CENSUS_RANK_CONCURRENCY ?? 4))

/** Wall-clock budget in seconds; 0 disables. */
const DEADLINE_SECONDS = Number(process.env.CENSUS_RANK_DEADLINE_SECONDS ?? 0)

/**
 * Path to the absolute reviews, used to bound the candidate pool.
 *
 * Without a bound, pairing the least-compared entries first spreads across the whole
 * catalogue and never deepens: after two runs, 332 entries each had exactly 1 match,
 * because 6187 entries with 0 matches always sort ahead of anything with 1. Reaching
 * 10 matches that way would take about 453 runs. Breadth was the wrong objective —
 * a rating needs depth to mean anything.
 *
 * The pool is the entries the absolute score rated 5, which is precisely the set the
 * 1-5 scale cannot separate — 547 of 1078 reviews. That criterion defends itself:
 * ranking is only useful where the cheaper signal has run out. Selecting by stars
 * would import the popularity bias this census avoids everywhere else.
 */
const REVIEWS_PATH = process.env.CENSUS_REVIEWS_PATH ?? 'data/reviews.jsonl'

/** Score at or above which an entry joins the ranking pool; 0 ranks everything. */
const POOL_MIN_SCORE = Number(process.env.CENSUS_RANK_POOL_MIN_SCORE ?? 5)

/** Elo K-factor. Low, because a single comparison is weak evidence. */
const K_FACTOR = Number(process.env.CENSUS_RANK_K ?? 16)

/** Starting rating for an unranked plugin. */
const BASE_RATING = 1500

/**
 * Fraction of attempted comparisons that may fail before the run is refused.
 *
 * 0.45 rather than a tidier number: persistent truncation is real and measured, so a
 * stricter ceiling would refuse runs that are working as well as this method can. The
 * gate exists to catch a broken key or a dead endpoint, where essentially everything
 * fails, not to demand a success rate the model does not deliver.
 */
const MAX_FAILED_SHARE = Number(process.env.CENSUS_RANK_MAX_FAILED ?? 0.45)

/**
 * Retries for a transient fetch, and for a comparison that returned no verdict.
 *
 * Two is measured, not chosen for symmetry with the other scripts. Some pairs
 * truncate persistently: one pair produced a verdict in 2 of 8 identical attempts,
 * so a single retry would still lose 56% of such pairs while three attempts lose
 * 42%. Raising the token ceiling does not help — 16384 truncated on the same pair —
 * because the reasoning block, not the input, consumes the budget: that pair sends
 * only 19 and 28 files with 3.3 KB and 5.9 KB READMEs.
 *
 * Some comparisons therefore stay unresolved, which is why the failure ceiling is
 * set from observation rather than optimism. An unresolved pair costs coverage, not
 * correctness: no rating moves.
 */
const RETRY_ATTEMPTS = Number(process.env.CENSUS_RETRY_ATTEMPTS ?? 2)

/** Pause before a retry. */
const RETRY_DELAY_MS = Number(process.env.CENSUS_RETRY_DELAY_MS ?? 1500)

/** Reported command failures, capped so one broken run does not flood the log. */
let commandFailures = 0

/**
 * Run a command and capture stdout.
 * @param cmd - executable.
 * @param args - arguments.
 * @returns stdout, or an object describing the failure.
 */
function run(cmd, args) {
  return new Promise((resolve) => {
    execFile(cmd, args, { maxBuffer: 32 * 1024 * 1024, timeout: 120_000 }, (error, stdout, stderr) => {
      if (error) {
        if (commandFailures < 3) {
          commandFailures += 1
          process.stderr.write(`  ${cmd} failed: ${String(stderr).trim().slice(0, 160)}\n`)
        }
        return resolve({ failed: true, stderr: String(stderr) })
      }
      resolve(String(stdout))
    })
  })
}

/**
 * Call `gh api`, retrying a transient failure but never a 404.
 * @param path - API path.
 * @returns parsed body, or null.
 */
async function api(path) {
  for (let attempt = 0; ; attempt += 1) {
    const out = await run('gh', ['api', path])
    if (typeof out === 'string') {
      try {
        return JSON.parse(out)
      } catch {
        return null
      }
    }
    const stderr = out?.stderr ?? ''
    if (/HTTP 404|Not Found/i.test(stderr) || /rate limit/i.test(stderr) || attempt >= RETRY_ATTEMPTS) {
      return null
    }
    await new Promise((resolve) => { setTimeout(resolve, RETRY_DELAY_MS) })
  }
}

/**
 * Gather the evidence shown for one plugin.
 * @param entry - catalogue row.
 * @returns brief, or null when the repository could not be read.
 */
async function brief(entry) {
  const commits = await api(`repos/${entry.repo}/commits?per_page=1`)
  const sha = Array.isArray(commits) ? commits[0]?.sha : null
  if (!sha) return null
  const [readmeBody, treeBody] = await Promise.all([
    api(`repos/${entry.repo}/readme?ref=${sha}`),
    api(`repos/${entry.repo}/git/trees/${sha}?recursive=1`),
  ])
  if (treeBody === null || !Array.isArray(treeBody.tree)) return null
  const readme = typeof readmeBody?.content === 'string'
    ? Buffer.from(readmeBody.content, 'base64').toString('utf8')
    : ''
  const files = treeBody.tree.filter((n) => n.type === 'blob').map((n) => n.path)
  return {
    repo: entry.repo,
    sha,
    readme: readme.slice(0, 3000),
    files: files.filter((p) => !/^(\.git|node_modules|dist|build)\//.test(p)).slice(0, 80),
    total: files.length,
  }
}

/**
 * Ask which of two plugins is more trustworthy.
 *
 * Neither star count nor push date is supplied: the question is about the code, and
 * the cheapest way to keep popularity out of the answer is not to offer it.
 *
 * @param a - first brief.
 * @param b - second brief.
 * @returns `{ winner, margin, reason }`, or null when the call failed.
 */
async function compare(a, b) {
  const side = (x, label) => `## Plugin ${label}\n\nfiles (${x.total} total, listing capped):\n${x.files.join('\n') || '(none)'}\n\nREADME (${Buffer.byteLength(x.readme)} bytes):\n${x.readme || '(empty)'}`
  const prompt = `Two DeepSeek Harness plugins. Which would a competent DSH user trust and
use more?

Judge depth of execution, not size of scope: a small plugin that does one thing
properly can beat a large one. A repository that mostly vendors someone else's
files is not doing the work itself. Ignore popularity — no star counts are given.

${side(a, 'A')}

${side(b, 'B')}

Decide quickly. If neither is clearly better, answer "tie" rather than
deliberating further — a tie is a real answer here and two comparable plugins are
the common case.

Respond with ONLY a JSON object, no prose and no code fence:
{"winner": "A" | "B" | "tie", "margin": "clear" | "slight", "reason": "<one specific, checkable sentence citing a path or a README fact>"}`

  let response
  try {
    response = await fetch(`${API_BASE}/v1/messages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: API_MODEL,
        max_tokens: MAX_TOKENS,
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: AbortSignal.timeout(180_000),
    })
  } catch (error) {
    process.stderr.write(`  api request failed: ${error?.message ?? error}\n`)
    return null
  }
  if (!response.ok) {
    process.stderr.write(`  api ${response.status}\n`)
    return null
  }
  let body
  try {
    body = await response.json()
  } catch {
    return null
  }
  // Budget exhaustion is its own failure: the reasoning block counts against
  // max_tokens, so a long deliberation can consume it before the answer.
  if (body?.stop_reason === 'max_tokens') {
    process.stderr.write(`  stopped at the ${MAX_TOKENS}-token ceiling before answering\n`)
    return null
  }
  const text = (Array.isArray(body?.content) ? body.content : [])
    .filter((block) => block?.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text)
    .join('\n')
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start < 0 || end <= start) {
    process.stderr.write(`  no JSON in reply (${text.length}B): ${JSON.stringify(text.slice(0, 200))}\n`)
    return null
  }
  let parsed
  try {
    parsed = JSON.parse(text.slice(start, end + 1))
  } catch (error) {
    process.stderr.write(`  unparseable JSON: ${JSON.stringify(text.slice(start, start + 200))}\n`)
    return null
  }
  if (!['A', 'B', 'tie'].includes(parsed?.winner)) {
    process.stderr.write(`  reply had no usable winner: ${JSON.stringify(parsed).slice(0, 200)}\n`)
    return null
  }
  return {
    winner: parsed.winner,
    margin: parsed.margin === 'clear' ? 'clear' : 'slight',
    reason: typeof parsed.reason === 'string' ? parsed.reason.slice(0, 400) : '',
  }
}

/** Deterministic 32-bit hash, for reproducible pairing. */
function hash32(text) {
  let h = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Read stored ratings. */
function loadExisting(path) {
  const stored = new Map()
  if (!path || !existsSync(path)) return stored
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    if (!line.trim()) continue
    try {
      const record = JSON.parse(line)
      if (record?.repo) stored.set(record.repo, record)
    } catch { /* skip unparseable stored row */ }
  }
  return stored
}

/** @returns the value following `flag`, or a fallback. */
function argValue(flag, fallback) {
  const index = process.argv.indexOf(flag)
  return index >= 0 && process.argv[index + 1] !== undefined ? process.argv[index + 1] : fallback
}

async function main() {
  const limit = Number(argValue('--limit', '150'))
  const seed = Number(argValue('--seed', String(new Date().toISOString().slice(0, 10).replace(/-/g, ''))))
  const entries = []
  for await (const line of createInterface({ input: process.stdin, crlfDelay: Infinity })) {
    if (!line.trim()) continue
    try {
      const entry = JSON.parse(line)
      if (entry?.repo) entries.push(entry)
    } catch { /* skip unparseable catalogue row */ }
  }
  const byRepo = new Map()
  for (const entry of entries) if (!byRepo.has(entry.repo)) byRepo.set(entry.repo, entry)
  const catalogue = [...byRepo.values()]

  // Restrict to the pool before pairing, so comparisons deepen a bounded set instead
  // of recruiting new entries forever.
  let pool = catalogue
  if (POOL_MIN_SCORE > 0 && existsSync(REVIEWS_PATH)) {
    const eligible = new Set()
    for (const line of readFileSync(REVIEWS_PATH, 'utf8').split('\n')) {
      if (!line.trim()) continue
      try {
        const review = JSON.parse(line)
        if (review?.reviewed && Number(review.score) >= POOL_MIN_SCORE) eligible.add(review.repo)
      } catch { /* skip unparseable stored row */ }
    }
    const restricted = catalogue.filter((entry) => eligible.has(entry.repo))
    if (restricted.length >= 2) {
      pool = restricted
      process.stderr.write(
        `pool: ${pool.length} entr(y/ies) scored ${POOL_MIN_SCORE} or above,`
        + ` of ${catalogue.length} catalogued\n`,
      )
    } else {
      process.stderr.write(
        `pool would hold ${restricted.length} entr(y/ies); ranking the whole catalogue instead\n`,
      )
    }
  }

  const stored = loadExisting(argValue('--existing', ''))
  const rating = new Map()
  const played = new Map()
  for (const [repo, record] of stored) {
    if (record.promptVersion !== PROMPT_VERSION) continue
    rating.set(repo, record.rating ?? BASE_RATING)
    played.set(repo, record.matches ?? 0)
  }

  // Pair the least-compared plugins first, so coverage spreads instead of
  // deepening a few entries. Ties broken by a seeded hash for reproducibility.
  const ordered = [...pool].sort((a, b) => {
    const pa = played.get(a.repo) ?? 0
    const pb = played.get(b.repo) ?? 0
    if (pa !== pb) return pa - pb
    return hash32(`${seed}:${a.repo}`) - hash32(`${seed}:${b.repo}`)
  })

  // Adjacent pairs from that order: similar experience, which is what makes an
  // Elo update informative rather than a foregone conclusion.
  const pairs = []
  for (let i = 0; i + 1 < ordered.length && pairs.length < limit; i += 2) {
    pairs.push([ordered[i], ordered[i + 1]])
  }
  process.stderr.write(`playing ${pairs.length} comparison(s) over a ${pool.length}-entry pool\n`)

  const briefCache = new Map()
  const getBrief = async (entry) => {
    if (briefCache.has(entry.repo)) return briefCache.get(entry.repo)
    const value = await brief(entry)
    briefCache.set(entry.repo, value)
    return value
  }

  const results = new Array(pairs.length)
  const startedAt = Date.now()
  let cursor = 0
  let attempted = 0
  let failed = 0
  let stopped = false

  async function worker() {
    for (;;) {
      if (DEADLINE_SECONDS > 0 && (Date.now() - startedAt) / 1000 > DEADLINE_SECONDS) {
        stopped = true
        return
      }
      const index = cursor
      cursor += 1
      if (index >= pairs.length) return
      const [a, b] = pairs[index]
      attempted += 1
      const [ba, bb] = await Promise.all([getBrief(a), getBrief(b)])
      if (!ba || !bb) {
        failed += 1
        process.stderr.write(`  FAILED unreadable  ${a.repo} vs ${b.repo}\n`)
        continue
      }
      // Retry once. Truncation is non-deterministic: the same pair produced a
      // verdict twice and hit the ceiling once across three identical attempts,
      // because the reasoning block competes with the answer for the token budget.
      // Two comparable plugins invite the longest deliberation, which is why the
      // prompt states that a tie is a real answer.
      let verdict = null
      for (let attempt = 0; attempt <= RETRY_ATTEMPTS; attempt += 1) {
        if (attempt > 0) await new Promise((resolve) => { setTimeout(resolve, RETRY_DELAY_MS) })
        verdict = await compare(ba, bb)
        if (verdict) break
      }
      if (!verdict) {
        failed += 1
        process.stderr.write(`  FAILED no verdict  ${a.repo} vs ${b.repo}\n`)
        continue
      }
      results[index] = { a: a.repo, b: b.repo, ...verdict, shaA: ba.sha, shaB: bb.sha }
      process.stderr.write(
        `  ${verdict.winner === 'tie' ? 'tie ' : verdict.winner + '   '} ${verdict.margin.padEnd(6)} ${a.repo} vs ${b.repo}\n`,
      )
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, pairs.length) }, worker))
  if (stopped) {
    process.stderr.write(`stopping at the ${DEADLINE_SECONDS}s deadline after ${attempted} comparison(s)\n`)
  }

  // Apply Elo in a deterministic order, so the same matches always produce the
  // same ratings regardless of which worker finished first.
  const matchLog = []
  for (const outcome of results) {
    if (!outcome) continue
    const ra = rating.get(outcome.a) ?? BASE_RATING
    const rb = rating.get(outcome.b) ?? BASE_RATING
    const expectedA = 1 / (1 + 10 ** ((rb - ra) / 400))
    const scoreA = outcome.winner === 'A' ? 1 : outcome.winner === 'B' ? 0 : 0.5
    // A slight margin moves ratings less than a clear one: the model's own
    // confidence is evidence about how much the comparison should count.
    const weight = outcome.margin === 'clear' ? 1 : 0.5
    const delta = K_FACTOR * weight * (scoreA - expectedA)
    rating.set(outcome.a, ra + delta)
    rating.set(outcome.b, rb - delta)
    played.set(outcome.a, (played.get(outcome.a) ?? 0) + 1)
    played.set(outcome.b, (played.get(outcome.b) ?? 0) + 1)
    matchLog.push(outcome)
  }

  // Emit every catalogued entry that has a rating, so the file stays the complete
  // record rather than only this run's pairs.
  // Emit over the pool plus any stored entry outside it. Emitting only the pool
  // silently discarded ratings earned before the pool existed, or after an entry left
  // it because its absolute score changed — a rating is evidence already paid for and
  // must not vanish because the selection criterion moved.
  const emitted = new Set()
  const outgoing = [...pool]
  for (const repo of rating.keys()) {
    if (!pool.some((entry) => entry.repo === repo)) outgoing.push({ repo })
  }
  for (const entry of outgoing) {
    if (emitted.has(entry.repo)) continue
    emitted.add(entry.repo)
    const matches = played.get(entry.repo) ?? 0
    if (matches === 0) continue
    process.stdout.write(`${JSON.stringify({
      repo: entry.repo,
      rating: Math.round((rating.get(entry.repo) ?? BASE_RATING) * 10) / 10,
      matches,
      promptVersion: PROMPT_VERSION,
      ratedAt: new Date().toISOString(),
    })}\n`)
  }

  const rated = [...played.values()].filter((n) => n > 0).length
  process.stderr.write(
    `\n${matchLog.length} comparison(s) applied, ${failed} failed of ${attempted} attempted;`
    + ` ${rated} of ${pool.length} pooled entries now rated\n`,
  )
  if (matchLog.length > 0) {
    const spread = [...rating.values()].sort((x, y) => x - y)
    process.stderr.write(
      `rating spread: ${Math.round(spread[0])} to ${Math.round(spread[spread.length - 1])}\n`,
    )
  }

  // A run that mostly failed describes the runner, not the ecosystem.
  if (attempted > 0 && failed / attempted > MAX_FAILED_SHARE) {
    process.stderr.write(
      `refusing: ${failed}/${attempted} comparisons failed, above the`
      + ` ${Math.round(MAX_FAILED_SHARE * 100)}% ceiling\n`,
    )
    process.exit(1)
  }
}

await main()
