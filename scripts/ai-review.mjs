#!/usr/bin/env node
/**
 * Score catalogued plugins 1-5 on overall quality, using a model.
 *
 * This is a subjective judgement and is published as one. There is no ground
 * truth to validate a score against, so what this script guarantees is not
 * correctness but *auditability*: every review records the exact commit it read,
 * the SHA of the README bytes it was shown, and the version of the prompt that
 * produced it. A reader can fetch that commit and re-run the same prompt.
 *
 * Three properties matter more than the scores themselves.
 *
 * 1. A failed review is never a score. When the model call fails, returns
 *    unparseable output, or returns a score outside 1-5, the record is written
 *    with `reviewed: false` and *no* score field. Silently emitting a default
 *    would make a transport failure indistinguishable from a real opinion about
 *    someone's repository — the failure mode this repository has hit before.
 *
 * 2. Sampling is star-neutral. An earlier version reviewed the head of the
 *    catalogue, which is star-sorted; it drew a sample averaging 1055 stars from
 *    a catalogue averaging 26, containing none of the 324 zero-star plugins, and
 *    produced a distribution skewed high. Selection here is a seeded shuffle, so
 *    it is reproducible, independent of popularity, and changes with the seed.
 *
 * 3. A score is an average of repeated samples, not a single verdict. Every run
 *    re-draws its sample, so a repository drawn again is scored again and the
 *    scores accumulate. This is the correction to a real defect: `dsh-toolkit`
 *    and `dsh-TUI` once scored 4 and 3 on an identical commit SHA and identical
 *    README bytes, so one sample of this judgement is not the judgement. Each
 *    record publishes the mean, the number of runs, and every raw score, so a
 *    reader can see which entries are stable and which are one guess.
 *
 *    Samples taken under a different prompt version, or against a different
 *    commit, are discarded rather than averaged in: they answer a different
 *    question or describe different code.
 *
 * Each run draws `--limit` entries; change `--seed` between runs so the draws
 * overlap partially, widening coverage while deepening the entries drawn again:
 *
 *   node scripts/ai-review.mjs --limit 20 --seed 1 \
 *     --existing data/reviews.jsonl < data/catalog.jsonl > data/reviews.next.jsonl
 */

import { execFile } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'

/** Prompt version. Bump whenever RUBRIC or buildPrompt changes; invalidates reuse. */
const PROMPT_VERSION = 'v1'

/**
 * Model CLI, used when no API key is configured.
 *
 * The CLI is convenient interactively because it already holds a credential, but
 * it cannot run unattended: it is a 289 MB platform binary that reads its token
 * from a local settings file. CI uses the HTTP backend below instead.
 */
const MODEL_CLI = process.env.CENSUS_MODEL_CLI ?? process.env.MODEL_CLI ?? 'claude'

/**
 * API credentials. When a key is present the reviewer calls the Messages API
 * directly and never shells out, which is what makes an unattended run possible.
 */
const API_KEY = process.env.CENSUS_API_KEY ?? process.env.ANTHROPIC_AUTH_TOKEN ?? process.env.ANTHROPIC_API_KEY ?? ''
const API_BASE = (process.env.CENSUS_API_BASE ?? process.env.ANTHROPIC_BASE_URL ?? 'https://api.anthropic.com').replace(/\/+$/, '')
const API_MODEL = process.env.CENSUS_API_MODEL ?? process.env.ANTHROPIC_MODEL ?? 'deepseek-v4-flash'

/**
 * Response tokens allowed per review.
 *
 * A verdict plus three reasons is a few hundred tokens, but this endpoint emits a
 * `thinking` block first and that block counts against the budget. Measured on
 * `Totoro-qaq/dsh-plugin-bridge`: 4094 characters of thinking exhausted a 1024
 * budget and the answer never arrived, which surfaced as unparseable output. The
 * budget has to cover the reasoning, not just the answer.
 */
const MAX_TOKENS = Number(process.env.CENSUS_MAX_TOKENS ?? 4096)

/** Fraction of attempted reviews that may fail before the run is refused. */
const MAX_UNREVIEWED_SHARE = 0.3

/** Bytes of README shown to the model. */
const README_LIMIT = 6000

/**
 * The rubric. Kept in source rather than in a data file so that a review can be
 * reproduced from a commit of this repository alone.
 */
const RUBRIC = `Score the plugin 1-5 on how much a competent DSH user would trust and use it.

5  Substantial, documented, tested. Clear purpose, real implementation depth.
4  Solid and usable. Works, documented well enough to adopt, some rough edges.
3  Ordinary. Real but thin implementation, minimal docs, no tests.
2  Barely a plugin. Skeleton, placeholder, or template with little of its own.
1  Empty, broken, or a stub that does nothing.

Judge only the evidence given. Do not reward or penalise star count, author,
language of the documentation, or how recently it was pushed. A small plugin
that does one thing properly is a 4, not a 2 — score depth of execution, not
size of scope.`

/** Reported command failures, capped so one broken run does not flood the log. */
let commandFailures = 0

/**
 * Run a command and capture stdout.
 * @param cmd - executable.
 * @param args - arguments.
 * @param input - optional stdin payload.
 * @returns stdout on success, or null on any failure.
 */
function run(cmd, args, input) {
  return new Promise((resolve) => {
    const child = execFile(
      cmd,
      args,
      { maxBuffer: 32 * 1024 * 1024, timeout: 180_000 },
      (error, stdout, stderr) => {
        // Report the first few failures. Discarding stderr made an unauthenticated
        // `gh` indistinguishable from a repository that had genuinely vanished:
        // a CI run failed all 20 reviews as HEAD_UNREADABLE in 0.7 seconds and
        // the log said nothing about the missing token.
        if (error && commandFailures < 3) {
          commandFailures += 1
          process.stderr.write(`  ${cmd} failed: ${String(stderr).trim().slice(0, 200)}\n`)
        }
        resolve(error ? null : String(stdout))
      },
    )
    if (input !== undefined && child.stdin) {
      child.stdin.end(input)
    }
  })
}

/**
 * Ask the model for a verdict over the Messages API.
 *
 * @param prompt - the full prompt.
 * @returns assistant text, or null when the call failed.
 */
async function askApi(prompt) {
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
    // Report the transport failure. Swallowing it silently made a
    // misconfigured endpoint look identical to a model that refused to answer.
    process.stderr.write(`  api request failed: ${error?.message ?? error}${
      error?.cause?.message ? ` (${error.cause.message})` : ''
    }\n`)
    return null
  }
  if (!response.ok) {
    process.stderr.write(`  api ${response.status}: ${(await response.text()).slice(0, 160)}\n`)
    return null
  }
  let body
  try {
    body = await response.json()
  } catch {
    return null
  }
  // Distinguish "ran out of budget mid-thought" from "answered something we could
  // not parse". Both yield no verdict, but only the first is fixed by raising
  // MAX_TOKENS, and calling it unparseable output sends a reader after the prompt.
  if (body?.stop_reason === 'max_tokens') {
    process.stderr.write(`  api stopped at the ${MAX_TOKENS}-token ceiling before answering\n`)
    return { truncated: true }
  }
  // Concatenate every text block and ignore the rest. This endpoint returns a
  // `thinking` block before the answer, so reading `content[0].text` yields
  // undefined and would be indistinguishable from a refusal.
  const blocks = Array.isArray(body?.content) ? body.content : []
  const text = blocks
    .filter((block) => block?.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text)
    .join('\n')
    .trim()
  return text === '' ? null : text
}

/**
 * Ask for a verdict through whichever backend is configured.
 * @param prompt - the full prompt.
 * @returns assistant text, or null when the call failed.
 */
async function ask(prompt) {
  return API_KEY ? askApi(prompt) : run(MODEL_CLI, ['-p', prompt])
}

/** @returns true when the backend reported it never finished answering. */
function isTruncated(raw) {
  return typeof raw === 'object' && raw !== null && raw.truncated === true
}

/**
 * Call `gh api` and parse the JSON body.
 * @param path - API path.
 * @returns parsed body, or null on failure.
 */
async function api(path) {
  const out = await run('gh', ['api', path])
  if (out === null) return null
  try {
    return JSON.parse(out)
  } catch {
    return null
  }
}

/** @returns hex sha256 of a string. */
function sha256(text) {
  return createHash('sha256').update(text).digest('hex')
}

/**
 * Deterministic 32-bit hash of a string, used to seed a per-repo shuffle key.
 * @param text - input.
 * @returns unsigned 32-bit integer.
 */
function hash32(text) {
  let h = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/**
 * Order entries reproducibly and independently of stars.
 *
 * Sorting by a seeded hash of the repository name gives the same order for the
 * same seed, a different order for a different seed, and an order uncorrelated
 * with star count — the property the star-sorted head lacked.
 *
 * @param entries - catalogue rows.
 * @param seed - integer seed.
 * @returns new array in shuffled order.
 */
function seededShuffle(entries, seed) {
  return entries
    .map((entry) => ({ entry, key: hash32(`${seed}:${entry.repo}`) }))
    .sort((a, b) => a.key - b.key || (a.entry.repo < b.entry.repo ? -1 : 1))
    .map((row) => row.entry)
}

/**
 * Fetch the head commit SHA and its date for a repository's default branch.
 * @param repo - `owner/name`.
 * @returns `{ sha, committedAt }`, or null when unreadable.
 */
async function headCommit(repo) {
  const body = await api(`repos/${repo}/commits?per_page=1`)
  if (!Array.isArray(body) || body.length === 0) return null
  const sha = body[0]?.sha
  const committedAt = body[0]?.commit?.committer?.date ?? body[0]?.commit?.author?.date
  return typeof sha === 'string' ? { sha, committedAt: committedAt ?? null } : null
}

/**
 * Fetch a repository's README as text at a pinned commit.
 * @param repo - `owner/name`.
 * @param ref - commit SHA.
 * @returns README text (possibly empty), or null when the request failed.
 */
async function readme(repo, ref) {
  const body = await api(`repos/${repo}/readme?ref=${ref}`)
  if (body === null) return null
  if (body.missing || typeof body.content !== 'string') return ''
  try {
    return Buffer.from(body.content, 'base64').toString('utf8')
  } catch {
    return ''
  }
}

/**
 * Fetch the manifest of the catalogued package at a pinned commit.
 * @param repo - `owner/name`.
 * @param path - manifest path recorded in the catalogue.
 * @param ref - commit SHA.
 * @returns parsed manifest, or null when unreadable.
 */
async function manifest(repo, path, ref) {
  if (!path) return null
  const body = await api(`repos/${repo}/contents/${path}?ref=${ref}`)
  if (body === null || typeof body?.content !== 'string') return null
  try {
    return JSON.parse(Buffer.from(body.content, 'base64').toString('utf8'))
  } catch {
    return null
  }
}

/**
 * List the file paths of a repository at a pinned commit.
 * @param repo - `owner/name`.
 * @param ref - commit SHA.
 * @returns `{ paths, truncated }`, or null when unreadable.
 */
async function tree(repo, ref) {
  const body = await api(`repos/${repo}/git/trees/${ref}?recursive=1`)
  if (body === null || !Array.isArray(body?.tree)) return null
  return {
    paths: body.tree.filter((n) => n.type === 'blob').map((n) => n.path),
    truncated: body.truncated === true,
  }
}

/**
 * Build the prompt shown to the model.
 *
 * Star count, owner and push date are deliberately withheld: the rubric forbids
 * using them, and the cheapest way to enforce that is not to supply them.
 *
 * @param context - gathered evidence.
 * @returns prompt text.
 */
function buildPrompt(context) {
  const { entry, files, pkg, readmeText, truncated } = context
  const interesting = files
    .filter((p) => !/^(\.git|node_modules|dist|build)\//.test(p))
    .slice(0, 120)
  const scripts = pkg?.scripts ? Object.keys(pkg.scripts).join(', ') : '(none)'
  const deps = Object.keys({ ...(pkg?.dependencies ?? {}), ...(pkg?.peerDependencies ?? {}) })
  return `${RUBRIC}

## Plugin

package: ${entry.package ?? '(unknown)'}
declared surface: ${entry.surface ?? 'indeterminate'}
description: ${entry.description ?? '(none)'}

## package.json

scripts: ${scripts}
dependencies (${deps.length}): ${deps.slice(0, 40).join(', ') || '(none)'}

## Files (${files.length} total${truncated ? ', listing truncated by the API' : ''})

${interesting.join('\n') || '(none)'}

## README (${Buffer.byteLength(readmeText)} bytes${readmeText.length > README_LIMIT ? ', truncated' : ''})

${readmeText.slice(0, README_LIMIT) || '(empty)'}

## Output

Respond with ONLY a JSON object, no prose and no code fence:
{"score": <integer 1-5>, "reasons": ["<specific, checkable>", "..."]}

Each reason must cite something above — a path, a script, a dependency, a README
fact. Give two or three reasons. Do not restate the rubric.`
}

/**
 * Extract the JSON object from model output.
 * @param text - raw stdout.
 * @returns `{ score, reasons }` when valid, else null.
 */
function parseVerdict(text) {
  if (typeof text !== 'string') return null
  const fenced = text.replace(/```(?:json)?/g, '')
  const start = fenced.indexOf('{')
  const end = fenced.lastIndexOf('}')
  if (start < 0 || end <= start) return null
  let parsed
  try {
    parsed = JSON.parse(fenced.slice(start, end + 1))
  } catch {
    return null
  }
  const score = parsed?.score
  if (!Number.isInteger(score) || score < 1 || score > 5) return null
  const reasons = Array.isArray(parsed?.reasons)
    ? parsed.reasons.filter((r) => typeof r === 'string' && r.trim()).slice(0, 4)
    : []
  return { score, reasons }
}

/**
 * Review one catalogue entry.
 * @param entry - catalogue row.
 * @returns a review record; `reviewed` is false when no score was obtained.
 */
async function review(entry) {
  const head = await headCommit(entry.repo)
  if (!head) {
    return { repo: entry.repo, reviewed: false, failure: 'HEAD_UNREADABLE', promptVersion: PROMPT_VERSION }
  }
  const [readmeText, pkg, treeInfo] = await Promise.all([
    readme(entry.repo, head.sha),
    manifest(entry.repo, entry.manifestPath, head.sha),
    tree(entry.repo, head.sha),
  ])
  if (readmeText === null || treeInfo === null) {
    return {
      repo: entry.repo,
      reviewed: false,
      failure: readmeText === null ? 'README_UNREADABLE' : 'TREE_UNREADABLE',
      commitSha: head.sha,
      promptVersion: PROMPT_VERSION,
    }
  }
  const prompt = buildPrompt({
    entry,
    files: treeInfo.paths,
    pkg,
    readmeText,
    truncated: treeInfo.truncated,
  })
  const raw = await ask(prompt)
  const truncated = isTruncated(raw)
  const verdict = truncated ? null : parseVerdict(raw)
  const base = {
    repo: entry.repo,
    commitSha: head.sha,
    committedAt: head.committedAt,
    readmeSha: sha256(readmeText),
    readmeBytes: Buffer.byteLength(readmeText),
    fileCount: treeInfo.paths.length,
    promptVersion: PROMPT_VERSION,
    reviewedAt: new Date().toISOString(),
  }
  if (!verdict) {
    const failure = truncated
      ? 'ANSWER_TRUNCATED'
      : raw === null ? 'MODEL_CALL_FAILED' : 'UNPARSEABLE_OUTPUT'
    return { ...base, reviewed: false, failure }
  }
  return { ...base, reviewed: true, score: verdict.score, reasons: verdict.reasons }
}

/**
 * Combine a new review with whatever was stored for the same repository.
 *
 * Averaging is only valid across samples of the same question about the same
 * code, so a stored record is carried forward only when its prompt version and
 * commit SHA match the new one. Otherwise the new sample replaces it: mixing a
 * score for an older commit into the mean would report an average of two
 * different repositories' states as one number.
 *
 * @param prior - stored record, or undefined.
 * @param record - the review just produced, known to be `reviewed`.
 * @returns a record carrying `scores`, `runs`, and `score` as the mean.
 */
function mergeReview(prior, record) {
  const comparable = prior?.reviewed
    && prior.promptVersion === record.promptVersion
    && prior.commitSha === record.commitSha
  const previous = comparable
    ? (Array.isArray(prior.scores) ? prior.scores : [prior.score]).filter(Number.isInteger)
    : []
  const scores = [...previous, record.score]
  const mean = scores.reduce((sum, value) => sum + value, 0) / scores.length
  return {
    ...record,
    // The published score is the mean; the raw samples stay alongside it so the
    // number is auditable rather than merely reported.
    score: mean,
    scores,
    runs: scores.length,
    // Reasons come from the latest sample. Keeping every run's reasons would
    // grow without bound and they describe the same commit.
    reasons: record.reasons,
  }
}

/**
 * Read stored reviews, so repeated samples of the same entry can be averaged.
 * @param path - JSONL path.
 * @returns map from repo to stored record.
 */
function loadExisting(path) {
  const stored = new Map()
  if (!path || !existsSync(path)) return stored
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    if (!line.trim()) continue
    try {
      const record = JSON.parse(line)
      if (record?.repo) stored.set(record.repo, record)
    } catch {
      /* ignore malformed stored line */
    }
  }
  return stored
}

/** @returns parsed argv flags. */
function options(argv) {
  const get = (name, fallback) => {
    const i = argv.indexOf(name)
    return i >= 0 && argv[i + 1] !== undefined ? argv[i + 1] : fallback
  }
  return {
    limit: Number(get('--limit', '40')),
    seed: Number(get('--seed', '20260817')),
    existing: get('--existing', ''),
  }
}

async function main() {
  const opts = options(process.argv.slice(2))
  if (!Number.isFinite(opts.limit) || opts.limit <= 0) {
    process.stderr.write('--limit must be a positive number\n')
    process.exit(2)
  }
  const entries = []
  for await (const line of createInterface({ input: process.stdin, crlfDelay: Infinity })) {
    if (!line.trim()) continue
    try {
      const entry = JSON.parse(line)
      if (entry?.repo) entries.push(entry)
    } catch {
      /* ignore malformed catalogue line */
    }
  }

  // Deduplicate by repository. Reusing this script's own output as --existing
  // previously multiplied rows, producing two different scores for one commit.
  const byRepo = new Map()
  for (const entry of entries) if (!byRepo.has(entry.repo)) byRepo.set(entry.repo, entry)
  const dropped = entries.length - byRepo.size
  if (dropped > 0) process.stderr.write(`dropped ${dropped} duplicate input row(s)\n`)

  const stored = loadExisting(opts.existing)

  // Draw this run's sample. Every run re-draws: a repository already reviewed is
  // reviewed AGAIN and its scores are averaged, rather than being skipped.
  //
  // Skipping was the earlier behaviour and it was wrong. It assumed the score is
  // a function of the content, so re-asking could only waste an API call. That
  // assumption was already falsified in this project: `dsh-toolkit` and `dsh-TUI`
  // scored 4 and 3 on an identical commit SHA and identical README bytes. A
  // single sample of a non-deterministic judgement was published as if it were
  // the judgement.
  const ordered = seededShuffle([...byRepo.values()], opts.seed)
  const sample = ordered.slice(0, opts.limit)

  const results = []
  let attempted = 0
  let unreviewed = 0
  let repeated = 0

  for (const entry of sample) {
    attempted += 1
    const record = await review(entry)
    if (!record.reviewed) {
      unreviewed += 1
      results.push(record)
      process.stderr.write(`FAILED ${record.failure}  ${entry.repo}\n`)
      continue
    }
    const prior = stored.get(entry.repo)
    const merged = mergeReview(prior, record)
    if (merged.runs > 1) repeated += 1
    results.push(merged)
    process.stderr.write(
      `score ${record.score}  ${entry.repo}`
        + (merged.runs > 1
          ? `  (run ${merged.runs}: [${merged.scores.join(',')}] mean ${merged.score.toFixed(2)})`
          : '')
        + '\n',
    )
  }

  // Carry forward every stored review not drawn this time, so output remains the
  // complete record rather than only this run's sample.
  const drawn = new Set(sample.map((entry) => entry.repo))
  let carried = 0
  for (const [repo, prior] of stored) {
    if (drawn.has(repo)) continue
    results.push(prior)
    carried += 1
  }

  for (const record of results) process.stdout.write(`${JSON.stringify(record)}\n`)

  const scored = results.filter((r) => r.reviewed)
  const mean = scored.length
    ? (scored.reduce((sum, r) => sum + r.score, 0) / scored.length).toFixed(2)
    : 'n/a'
  const multi = scored.filter((r) => (r.runs ?? 1) > 1)
  process.stderr.write(
    `\nreviewed ${attempted - unreviewed} of ${attempted} drawn`
      + ` (${repeated} repeat, ${carried} carried forward), failed ${unreviewed}\n`
      + `catalogue coverage ${scored.length}; mean of published scores ${mean}\n`,
  )
  if (multi.length > 0) {
    const spread = multi.filter((r) => Math.max(...r.scores) !== Math.min(...r.scores))
    process.stderr.write(
      `${multi.length} entr(y/ies) have more than one sample;`
        + ` ${spread.length} disagree across runs\n`,
    )
  }

  // A run that mostly failed describes the runner, not the ecosystem.
  if (attempted > 0 && unreviewed / attempted > MAX_UNREVIEWED_SHARE) {
    process.stderr.write(
      `refusing: ${unreviewed}/${attempted} reviews failed, above the ${Math.round(
        MAX_UNREVIEWED_SHARE * 100,
      )}% ceiling\n`,
    )
    process.exit(1)
  }
}

await main()
