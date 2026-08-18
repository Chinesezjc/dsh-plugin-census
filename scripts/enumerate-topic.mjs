#!/usr/bin/env node
/**
 * Enumerate the whole topic by sharding around the search API's 1000-result cap.
 *
 * A single `topic:dsh-plugin` query reports 6081 repositories and returns at most
 * 1000 of them, so the census covered 16.4% of the ecosystem while claiming to
 * measure it. That is the one weakness no amount of extra criteria fixes: the
 * project's only distinct claim is unsolicited topic-wide coverage, and it was
 * sampling a sixth of the topic by most-recently-updated — the least
 * representative sixth available, since it excludes everything that has gone
 * quiet.
 *
 * Sharding splits the query into buckets each below the cap. Star buckets alone
 * are not enough (`stars:0` holds 2563), so oversized buckets are split again by
 * creation date, and days are split by hour if a single day ever exceeds the cap.
 * Measured bucket sizes at the time of writing:
 *
 *   stars:0        2563  -> split by date: 47 / 73 / 378 / 759 / 922 / 384
 *   stars:1        1465  -> split by date
 *   stars:2..3     1253  -> split by date
 *   stars:4..10     691  -> fits
 *   stars:11..50    246  -> fits
 *   stars:>50       170  -> fits
 *
 * A bucket that still exceeds the cap after every split is reported rather than
 * silently truncated: under-coverage that is not announced becomes a false claim
 * of completeness.
 *
 *   node scripts/enumerate-topic.mjs > data/repos-raw.jsonl
 *   node scripts/enumerate-topic.mjs --plan   # print the shard plan only
 */

import { execFile } from 'node:child_process'

/** The search API never returns more than this per query, whatever the total. */
const RESULT_CAP = 1000
/** Results per page; the maximum the API accepts. */
const PAGE_SIZE = 100
/** Star buckets, coarse where the population is thin. */
const STAR_BUCKETS = ['stars:0', 'stars:1', 'stars:2..3', 'stars:4..10', 'stars:11..50', 'stars:>50']

/**
 * Run one `gh api` search call.
 * @param query - the full `q=` value, already URL-safe.
 * @param page - 1-based page number.
 * @returns `{ total, items }`, or null when the call failed.
 */
function search(query, page = 1) {
  const path = `search/repositories?q=${encodeURIComponent(query)}&sort=updated&per_page=${PAGE_SIZE}&page=${page}`
  return new Promise((resolve) => {
    execFile('gh', ['api', path], { maxBuffer: 32 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        process.stderr.write(`  search failed (${query} p${page}): ${String(stderr).trim().slice(0, 160)}\n`)
        return resolve(null)
      }
      try {
        const body = JSON.parse(stdout)
        resolve({ total: body.total_count ?? 0, items: body.items ?? [] })
      } catch {
        resolve(null)
      }
    })
  })
}

/**
 * Count results for a query without fetching them.
 * @param query - the full `q=` value.
 * @returns the reported total, or null when unavailable.
 */
async function count(query) {
  const result = await search(query, 1)
  return result === null ? null : result.total
}

/**
 * Split a query into sub-queries that each fit under the result cap.
 *
 * Date ranges are chosen from the data rather than hardcoded: the topic's
 * population is concentrated in the days since it started growing, so a fixed
 * calendar split would leave the busy days oversized and the quiet ones wasteful.
 * @param base - query to split.
 * @param depth - recursion guard.
 * @returns queries whose totals are each under the cap, plus any that could not be split.
 */
async function shard(base, depth = 0) {
  const total = await count(base)
  if (total === null) return { queries: [], oversized: [{ query: base, total: null }] }
  if (total === 0) return { queries: [], oversized: [] }
  if (total <= RESULT_CAP) return { queries: [{ query: base, total }], oversized: [] }
  if (depth >= 2) return { queries: [], oversized: [{ query: base, total }] }

  // Find the date span this bucket actually occupies, then split it.
  const oldest = await search(`${base} sort:created-asc`, 1)
  const newest = await search(`${base} sort:created-desc`, 1)
  const first = oldest?.items?.[0]?.created_at?.slice(0, 10)
  const last = newest?.items?.[0]?.created_at?.slice(0, 10)
  if (first === undefined || last === undefined) {
    return { queries: [], oversized: [{ query: base, total }] }
  }

  const days = []
  for (let day = new Date(first); day <= new Date(last); day.setUTCDate(day.getUTCDate() + 1)) {
    days.push(day.toISOString().slice(0, 10))
  }
  // Everything before the first observed day, so nothing falls outside the plan.
  const spans = [`created:<${first}`, ...days.map((day) => `created:${day}`)]

  const queries = []
  const oversized = []
  for (const span of spans) {
    const nested = await shard(`${base} ${span}`, depth + 1)
    queries.push(...nested.queries)
    oversized.push(...nested.oversized)
  }
  return { queries, oversized }
}

/**
 * Fetch every page of one query.
 * @param query - a query already known to fit under the cap.
 * @returns repository records.
 */
async function fetchAll(query) {
  const records = []
  for (let page = 1; page <= Math.ceil(RESULT_CAP / PAGE_SIZE); page += 1) {
    const result = await search(query, page)
    if (result === null) break
    records.push(...result.items)
    if (result.items.length < PAGE_SIZE) break
  }
  return records
}

async function main() {
  const planOnly = process.argv.includes('--plan')
  const topic = process.env.CENSUS_TOPIC ?? 'topic:dsh-plugin'

  const reported = await count(topic)
  process.stderr.write(`${topic}: ${reported ?? 'unknown'} repositories reported\n`)

  const plan = []
  const oversized = []
  for (const bucket of STAR_BUCKETS) {
    const nested = await shard(`${topic} ${bucket}`)
    plan.push(...nested.queries)
    oversized.push(...nested.oversized)
    process.stderr.write(`  ${bucket}: ${nested.queries.length} shard(s)\n`)
  }

  const planned = plan.reduce((sum, entry) => sum + entry.total, 0)
  process.stderr.write(`\nshard plan: ${plan.length} queries covering ${planned} repositories\n`)

  // Under-coverage must be stated, not discovered later by a reader comparing
  // the catalogue size against the topic page.
  if (oversized.length > 0) {
    process.stderr.write(`\nWARNING: ${oversized.length} bucket(s) exceed the ${RESULT_CAP} cap after splitting:\n`)
    for (const entry of oversized) {
      process.stderr.write(`  ${entry.query} (${entry.total ?? 'unreadable'})\n`)
    }
    process.stderr.write('Repositories in these buckets beyond the cap are NOT enumerated.\n')
  }

  if (planOnly) {
    for (const entry of plan) process.stdout.write(`${entry.total}\t${entry.query}\n`)
    return
  }

  const seen = new Set()
  let emitted = 0
  for (const [index, entry] of plan.entries()) {
    const records = await fetchAll(entry.query)
    for (const item of records) {
      if (seen.has(item.full_name)) continue
      seen.add(item.full_name)
      process.stdout.write(`${JSON.stringify({
        full_name: item.full_name,
        stars: item.stargazers_count ?? 0,
        pushed_at: item.pushed_at,
        created_at: item.created_at,
        archived: item.archived ?? false,
        fork: item.fork ?? false,
        desc: item.description ?? null,
        lang: item.language ?? null,
        topics: item.topics ?? [],
      })}\n`)
      emitted += 1
    }
    process.stderr.write(`  [${index + 1}/${plan.length}] ${entry.query} -> ${records.length} fetched, ${emitted} unique so far\n`)
  }

  const coverage = reported === null || reported === 0 ? null : emitted / reported
  process.stderr.write(`\nenumerated ${emitted} unique repositories`)
  process.stderr.write(coverage === null ? '\n' : ` (${(coverage * 100).toFixed(1)}% of ${reported} reported)\n`)

  // The point of sharding is coverage; a run that quietly collapses back toward
  // the single-query cap has failed at its only job.
  if (coverage !== null && coverage < 0.5) {
    process.stderr.write('refusing this enumeration: coverage below 50% means sharding did not work,'
      + ' and publishing it would repeat the single-query sample under a new name\n')
    process.exit(1)
  }
}

await main()
