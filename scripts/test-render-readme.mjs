#!/usr/bin/env node
/**
 * Controls for scripts/render-readme.mjs.
 *
 * The generator exists because hand-typed figures drifted from `data/*.jsonl`
 * every time the scheduled workflow refreshed the data. Measured on 2026-08-18:
 * the READMEs claimed 6929 enumerated, 1698 probed and 1167 catalogued while the
 * data held 7111, 2398 and 1660. So the property under test is not "the numbers
 * look right" but "a disagreement cannot survive CI".
 *
 * Each control was verified by injecting the corresponding defect.
 *
 *   node scripts/test-render-readme.mjs
 */

import { spawnSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const SCRIPT = 'scripts/render-readme.mjs'
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
 * Copy the repository into a sandbox so a control can edit files freely.
 * @returns the sandbox path.
 */
function sandbox() {
  const dir = mkdtempSync(join(tmpdir(), 'readme-'))
  for (const entry of ['scripts', 'data', 'README.md', 'README.zh.md']) {
    cpSync(join(ROOT, entry), join(dir, entry), { recursive: true })
  }
  return dir
}

/**
 * Run the generator inside a sandbox.
 * @param dir - sandbox path.
 * @param args - extra arguments.
 * @returns the spawn result.
 */
function render(dir, args = []) {
  return spawnSync(process.execPath, [SCRIPT, ...args], {
    cwd: dir,
    encoding: 'utf8',
    timeout: 60_000,
  })
}

// The committed tree must already agree with its data, or the gate below would
// fail for everyone on an unrelated change.
const clean = render(sandbox(), ['--check'])
check(
  'the committed READMEs agree with the committed data',
  clean.status === 0,
  `${clean.stdout}${clean.stderr}`.trim(),
)

// --check must detect a figure that no longer matches the data. This is the
// control that makes the CI gate meaningful.
{
  const dir = sandbox()
  const path = join(dir, 'README.md')
  const before = readFileSync(path, 'utf8')
  const edited = before.replace(
    /(<!-- census:begin n-probed -->)\d+(<!-- census:end n-probed -->)/,
    '$1999999$2',
  )
  check('the n-probed region exists to be edited', before !== edited)
  writeFileSync(path, edited)
  const result = render(dir, ['--check'])
  check(
    'a stale figure fails --check',
    result.status !== 0 && /STALE/.test(result.stdout),
    `status=${result.status} ${result.stdout}`,
  )
  check(
    'the failure says how to fix it',
    /render-readme\.mjs/.test(`${result.stdout}${result.stderr}`),
  )
}

// Rewriting must restore the correct figure, and be idempotent.
{
  const dir = sandbox()
  const path = join(dir, 'README.md')
  const original = readFileSync(path, 'utf8')
  writeFileSync(
    path,
    original.replace(
      /(<!-- census:begin n-probed -->)\d+(<!-- census:end n-probed -->)/,
      '$1123$2',
    ),
  )
  const first = render(dir)
  check('a rewrite exits zero', first.status === 0, `${first.stdout}${first.stderr}`)
  const rewritten = readFileSync(path, 'utf8')
  check('a rewrite restores the data-derived figure', rewritten === original)
  const second = render(dir)
  check(
    'a second rewrite changes nothing',
    second.status === 0 && /current/.test(second.stdout) && readFileSync(path, 'utf8') === rewritten,
    second.stdout,
  )
}

// A marker with no generator must fail loudly. A silent skip would freeze one
// figure while the rest updated — the exact failure this script prevents.
{
  const dir = sandbox()
  const path = join(dir, 'README.md')
  writeFileSync(
    path,
    `${readFileSync(path, 'utf8')}\n<!-- census:begin not-a-region -->x<!-- census:end not-a-region -->\n`,
  )
  const result = render(dir)
  // Two independent guards reject this: the missing generator throws, and the
  // orphan check throws because a skipped region is never recorded as seen.
  // Removing either one alone still fails, so this control cannot attribute the
  // failure to a specific guard — it only asserts the marker cannot be ignored.
  check(
    'an unknown region name is rejected, by whichever guard fires first',
    result.status !== 0 && /not-a-region/.test(`${result.stdout}${result.stderr}`),
    `status=${result.status} ${result.stderr.slice(0, 160)}`,
  )
  check(
    'an unknown region never survives into the file',
    !/<!-- census:begin not-a-region -->x/.test(readFileSync(path, 'utf8'))
      || result.status !== 0,
    'the generator kept an unknown region verbatim and exited zero',
  )
}

// An unterminated marker must fail rather than silently keeping stale contents.
{
  const dir = sandbox()
  const path = join(dir, 'README.md')
  writeFileSync(path, `${readFileSync(path, 'utf8')}\n<!-- census:begin n-probed -->\n`)
  const result = render(dir)
  check(
    'an unmatched marker is an error',
    result.status !== 0,
    `status=${result.status} ${result.stderr.slice(0, 160)}`,
  )
}

// Both languages must publish the same counts; a figure fixed in one file only
// was a real defect before the generator existed.
{
  const en = readFileSync(join(ROOT, 'README.md'), 'utf8')
  const zh = readFileSync(join(ROOT, 'README.zh.md'), 'utf8')
  const read = (text, name) => {
    const match = text.match(
      new RegExp(`<!-- census:begin ${name} -->([^<]*)<!-- census:end ${name} -->`),
    )
    return match ? match[1] : null
  }
  const shared = ['n-enumerated', 'n-probed', 'n-vendored']
  const mismatched = shared.filter((name) => read(en, name) !== read(zh, name))
  check(
    'both languages publish identical counts',
    mismatched.length === 0,
    mismatched.map((name) => `${name}: en=${read(en, name)} zh=${read(zh, name)}`).join(', '),
  )
  check(
    'every shared figure is present in both languages',
    shared.every((name) => read(en, name) !== null && read(zh, name) !== null),
    shared.filter((name) => read(en, name) === null || read(zh, name) === null).join(', '),
  )
}

// The decay table must not present `inconclusive` as decay: it means the probe
// could not reach a conclusion, and listing it as a flag would report a quota
// shortfall as a property of someone's repository.
{
  const en = readFileSync(join(ROOT, 'README.md'), 'utf8')
  const flagged = en.match(
    /<!-- census:begin decay-flagged-en -->([\s\S]*?)<!-- census:end decay-flagged-en -->/,
  )
  check('the flagged-entry region exists', flagged !== null)
  if (flagged) {
    check(
      'inconclusive entries are not listed as decayed',
      !/\|\s*inconclusive\s*\|/.test(flagged[1]),
      flagged[1].slice(0, 200),
    )
    check(
      'the flagged list is capped rather than unbounded',
      flagged[1].split('\n').length < 40,
      `${flagged[1].split('\n').length} lines`,
    )
  }
}

// The cap must hold when there is actually something to cap. Only 7 entries are
// decayed today, so the real data can never reach a cap of 12 and an assertion
// over it would pass with the cap removed. These controls synthesise 40 decayed
// entries instead, which is what makes them able to fail.
{
  const dir = sandbox()
  const decayPath = join(dir, 'data/decay.jsonl')
  const rows = readFileSync(decayPath, 'utf8').split('\n').filter((line) => line.trim())
  const synthetic = Array.from({ length: 40 }, (_, i) =>
    JSON.stringify({ repo: `synthetic/decayed-${i}`, state: 'archived', detail: 'repository is archived' }),
  )
  writeFileSync(decayPath, [...rows, ...synthetic].join('\n') + '\n')
  const result = render(dir)
  check('regeneration with synthetic decay succeeded', result.status === 0, result.stderr.slice(0, 200))
  const region = readFileSync(join(dir, 'README.md'), 'utf8').match(
    /<!-- census:begin decay-flagged-en -->([\s\S]*?)<!-- census:end decay-flagged-en -->/,
  )
  check(
    'a long decayed list is capped',
    region !== null && region[1].split('\n').length < 25,
    `${region ? region[1].split('\n').length : 'no region'} lines for 47 decayed entries`,
  )
  check(
    'the cap states how many entries were omitted',
    region !== null && /more in `data\/decay\.jsonl`/.test(region[1]),
    region ? region[1].split('\n').slice(-2).join(' | ') : '',
  )
  // Compute the expectation from the sandbox data. Hardcoding a total made this
  // control fail the moment a CI refresh changed how many entries are decayed,
  // which measured the data rather than the generator.
  const expectedDecayed = readFileSync(decayPath, 'utf8')
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line))
    .filter((row) => ['gone', 'archived', 'dormant', 'unbundled'].includes(row.state))
    .length
  check(
    'the count in the header reflects every decayed entry, not just the shown ones',
    region !== null && new RegExp(`\\b${expectedDecayed} entries flagged as decayed\\b`).test(region[1]),
    `expected ${expectedDecayed}; header was ${region ? region[1].split('\n')[0] : 'absent'}`,
  )
}

// `inconclusive` must stay out of the decayed list even when it dominates the
// data, which it does: 438 of 1660 entries could not be checked.
{
  const dir = sandbox()
  const decayPath = join(dir, 'data/decay.jsonl')
  const rows = readFileSync(decayPath, 'utf8').split('\n').filter((line) => line.trim())
  const synthetic = Array.from({ length: 30 }, (_, i) =>
    JSON.stringify({ repo: `synthetic/unchecked-${i}`, state: 'inconclusive', detail: 'tree unreadable' }),
  )
  writeFileSync(decayPath, [...rows, ...synthetic].join('\n') + '\n')
  const result = render(dir)
  check('regeneration with synthetic inconclusive succeeded', result.status === 0, result.stderr.slice(0, 200))
  const generated = readFileSync(join(dir, 'README.md'), 'utf8')
  const region = generated.match(
    /<!-- census:begin decay-flagged-en -->([\s\S]*?)<!-- census:end decay-flagged-en -->/,
  )
  check(
    'synthetic inconclusive entries are not listed as decayed',
    region !== null && !/synthetic\/unchecked/.test(region[1]),
    region ? region[1].slice(0, 200) : 'no region',
  )
  const expectedInconclusive = readFileSync(decayPath, 'utf8')
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line))
    .filter((row) => row.state === 'inconclusive')
    .length
  check(
    'the inconclusive count is published separately',
    new RegExp(
      `<!-- census:begin n-inconclusive -->${expectedInconclusive}<!-- census:end n-inconclusive -->`,
    ).test(generated),
    `expected ${expectedInconclusive}; got ${(generated.match(/n-inconclusive -->[^<]*/) ?? ['missing'])[0]}`,
  )
}

// The ratings table is published while still converging, so the figures stating how
// little evidence stands behind it must be generated, not written by hand. A stale
// "averaging 1.0 comparisons" line beside ratings with 12 matches each would
// misrepresent the data in the direction of overclaiming.
{
  const readme = readFileSync(`${ROOT}README.md`, 'utf8')
  const RATING_REGIONS = [
    'n-rated', 'n-onematch', 'rating-matches-mean', 'rating-matches-max',
    'rating-spread', 'rating-bands', 'rating-distribution',
  ]
  for (const region of RATING_REGIONS) {
    check(
      `the ratings region ${region} is generated`,
      new RegExp(`census:begin ${region} -->`).test(readme),
      `README.md must carry a ${region} marker`,
    )
  }
  const zh = readFileSync(`${ROOT}README.zh.md`, 'utf8')
  check(
    'the Chinese README carries the same ratings figures',
    RATING_REGIONS.every((r) => new RegExp(`census:begin ${r} -->`).test(zh)),
    'README.zh.md must carry every ratings marker',
  )
  const regionRows = (text, name) =>
    (text.split(`census:begin ${name} -->`)[1]?.split('<!-- census:end')[0] ?? '')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('|'))
      .filter((l) => !/^\|(\s*---\s*\|)+\s*$/.test(l))
      .slice(1) // skip the header row, which is part of the region now
  const bands = regionRows(readme, 'rating-bands')
  const distribution = regionRows(readme, 'rating-distribution')
  // Each row must state its mean match count, which is what tells a reader how
  // little evidence stands behind a rating. Neither table may name individual
  // plugins: simulated at Spearman 0.87 the top fifteen by rating held 0 to 1 of
  // the true top fifteen, so naming entries in rank order would assert precision
  // the method lacks.
  check(
    'every published band states its mean match count',
    bands.length === 0 || bands.every((l) => /\|\s*[\d.]+\s*\|\s*$/.test(l)),
    `${bands.length} band row(s); first: ${bands[0] ?? '(none)'}`,
  )
  check(
    'every published distribution row states its mean match count',
    distribution.length === 0 || distribution.every((l) => /\|\s*[\d.]+\s*\|\s*$/.test(l)),
    `${distribution.length} row(s); first: ${distribution[0] ?? '(none)'}`,
  )
  check(
    'the ratings section does not publish a ranked list of plugins',
    !/census:begin rating-top/.test(readme)
      && !/github\.com\/[^)]+\) \| \d{4} \|/.test(`${bands.join('\n')}${distribution.join('\n')}`),
    'rows must not name individual plugins in rank order',
  )
  // Bands put their boundaries on rating values, never inside one. A quantity-based
  // cut into quarters split the 586 entries sharing rating 1508 across two bands and
  // printed two rows whose rating ranges both contained 1508, beside a table that
  // looked like four equal tiers. Parsing each band's range and checking the ranges
  // run strictly downward without touching catches both defects: a split value makes
  // two ranges overlap, and an equal-count cut makes them touch or overlap wherever
  // the population is concentrated.
  const ranges = bands.map((l) => {
    const cell = l.split('|')[2]?.trim() ?? ''
    const [low, high] = cell.includes('\u2013') ? cell.split('\u2013') : [cell, cell]
    return { low: Number(low), high: Number(high) }
  })
  check(
    'band rating ranges never overlap',
    ranges.every((r, i) => i === 0 || r.high < ranges[i - 1].low),
    `ranges: ${ranges.map((r) => `${r.low}-${r.high}`).join(', ')}`,
  )
  // The distribution names values, so a reader can see how concentrated the ratings
  // are; a band that holds one dominant value hides that.
  check(
    'rating distribution rows group by value, not by quantity',
    distribution.length === 0
      || distribution.every((l) => /^\|\s*(\d+(\.\d+)?|other \d+ values|其他 \d+ 个分数值)\s*\|/.test(l)),
    `rows: ${distribution.join(' | ')}`,
  )
  check(
    'no rating value appears in two distribution rows',
    (() => {
      const values = distribution
        .map((l) => l.split('|')[1]?.trim())
        .filter((v) => /^\d+(\.\d+)?$/.test(v ?? ''))
      return new Set(values).size === values.length
    })(),
    `values: ${distribution.map((l) => l.split('|')[1]?.trim()).join(', ')}`,
  )
}

process.stdout.write(
  failures === 0
    ? `\nall ${checks} readme-render controls behaved as specified\n`
    : `\n${failures} of ${checks} readme-render controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
