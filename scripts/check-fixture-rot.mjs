#!/usr/bin/env node
/**
 * Report fixtures whose subject no longer exhibits the defect they pin.
 *
 * Two fixtures rotted in two days, each turning CI red for a reason that was not
 * a regression:
 *
 *   - `omdsh-dev/dsh-plugin-check` renamed itself away from the `@deepseek-ai/`
 *     scope on 2026-08-21, so `mustReport: [unpublishable-scope]` stopped holding
 *     and three scheduled runs failed.
 *   - `titanwings/colleague-skill` added a `package.json` on 2026-08-25, so a
 *     control asserting a genuinely absent marker stopped holding.
 *
 * Both were the outcome this census exists to encourage. The failure mode is that
 * a fixture pinning a *present* defect decays when its subject improves, and the
 * red build looks exactly like a regression.
 *
 * Only `mustReport` entries can rot this way. A `mustNotReport` entry asserts an
 * absence, which stays true as a repository improves, so those are not checked
 * here.
 *
 * This is a report, not a gate: it exits 0 even when a fixture has rotted, because
 * a rotted fixture is not a defect in this repository and blocking the pipeline on
 * it would repeat the failure it is meant to pre-empt. Run it to find out before
 * CI tells you.
 *
 *   node scripts/check-fixture-rot.mjs
 */

import { execFile } from 'node:child_process'
import { readFileSync } from 'node:fs'

const ROOT = new URL('..', import.meta.url).pathname

/**
 * Run `gh api` and parse the JSON body.
 * @param path - API path.
 * @returns parsed body, or null when the call failed.
 */
function api(path) {
  return new Promise((resolve) => {
    execFile('gh', ['api', path], { maxBuffer: 16 * 1024 * 1024 }, (error, stdout) => {
      if (error) return resolve(null)
      try {
        resolve(JSON.parse(stdout))
      } catch {
        resolve(null)
      }
    })
  })
}

/**
 * Read a repository's root manifest.
 * @param repo - `owner/name`.
 * @returns parsed package.json, or null when unreadable.
 */
async function manifest(repo) {
  const body = await api(`repos/${repo}/contents/package.json`)
  if (body === null || typeof body?.content !== 'string') return null
  try {
    return JSON.parse(Buffer.from(body.content, 'base64').toString('utf8'))
  } catch {
    return null
  }
}

/**
 * Check whether a repository still exhibits one pinned criterion.
 *
 * Only criteria that can be decided from the manifest are checked. An unknown
 * criterion is reported as unchecked rather than assumed to hold, because
 * claiming a fixture is healthy without looking is the failure this script exists
 * to avoid.
 *
 * @param repo - `owner/name`.
 * @param code - criterion code from `mustReport`.
 * @returns 'holds' | 'rotted' | 'unreadable' | 'unchecked'.
 */
async function stillExhibits(repo, code) {
  if (code === 'unpublishable-scope') {
    const pkg = await manifest(repo)
    if (pkg === null) return 'unreadable'
    const name = typeof pkg.name === 'string' ? pkg.name : ''
    if (!name.startsWith('@deepseek-ai/')) return 'rotted'
    const owner = repo.split('/')[0].toLowerCase()
    return owner === 'deepseek-ai' ? 'rotted' : 'holds'
  }
  return 'unchecked'
}

const labelled = JSON.parse(readFileSync(`${ROOT}fixtures/labelled.json`, 'utf8'))
const pinned = labelled.fixtures.filter((f) => (f.mustReport ?? []).length > 0)

process.stdout.write(
  `checking ${pinned.length} fixture(s) that pin a present defect`
  + ` (${labelled.fixtures.length - pinned.length} assert only absences and cannot rot this way)\n\n`,
)

let rotted = 0
let unchecked = 0
for (const fixture of pinned) {
  for (const code of fixture.mustReport) {
    const state = await stillExhibits(fixture.repo, code)
    if (state === 'rotted') rotted += 1
    if (state === 'unchecked' || state === 'unreadable') unchecked += 1
    const mark = { holds: 'ok   ', rotted: 'ROTTED', unreadable: '?    ', unchecked: '?    ' }[state]
    process.stdout.write(`  ${mark} ${fixture.repo} — ${code} (${state})\n`)
  }
}

process.stdout.write('\n')
if (rotted > 0) {
  process.stdout.write(
    `${rotted} fixture criterion/criteria no longer hold. Repoint them before the next\n`
    + 'scheduled run fails on it. This script exits 0 regardless: a subject that fixed\n'
    + 'itself is the outcome this census reports for, not a defect here.\n',
  )
} else {
  process.stdout.write('every checked fixture still exhibits its pinned defect\n')
}
if (unchecked > 0) {
  process.stdout.write(
    `${unchecked} criterion/criteria could not be decided from the manifest and were not\n`
    + 'checked. They are reported as unknown rather than assumed healthy.\n',
  )
}
