#!/usr/bin/env node
/**
 * Controls for scripts/installability.mjs.
 *
 * This step had no control suite and no failure gate while every other step had
 * both, which is how the gap went unnoticed. Two properties matter:
 *
 *   - A registry that does not answer must never become a verdict about the
 *     package. `unknown` is honest; `git-only` from a 500 would be a fabrication,
 *     and `git-only` is exactly what a reader installs from a Git specifier.
 *   - A run where the registry mostly failed must be refused. `unknown` is honest
 *     per row, but a table where most rows say "we could not tell" carries no
 *     signal and invites the reader to treat the remainder as coverage.
 *
 * Every control runs against a stub registry in its own process, so none touch
 * the network. Each was verified by injecting the corresponding defect.
 *
 *   node scripts/test-installability.mjs
 */

import { spawn, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SCRIPT = new URL('./installability.mjs', import.meta.url).pathname
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

// The script hardcodes the registry host, so controls point DNS-free traffic at a
// local stub by overriding the host through an environment variable. Confirm the
// hook exists rather than assuming it.
check(
  'the registry base is overridable so controls need no network',
  /CENSUS_NPM_REGISTRY/.test(SOURCE),
  'installability.mjs must read CENSUS_NPM_REGISTRY for these controls to run offline',
)

/**
 * Serve a stub registry in its own process and run the assessment against it.
 *
 * The server must not run in this process: `spawnSync` blocks the event loop for
 * the child's whole lifetime, so an in-process server never accepts the
 * connection and the child hangs until its timeout.
 *
 * @param routes - map from package name to an HTTP status.
 * @param options - catalogue rows and environment overrides.
 * @returns `{ status, stderr, records, requests }`.
 */
function runAssess(routes, options = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'instreg-'))
  const portFile = join(dir, 'port')
  const countFile = join(dir, 'count')
  writeFileSync(countFile, '0')
  writeFileSync(
    join(dir, 'server.mjs'),
    `import { createServer } from 'node:http'
import { writeFileSync } from 'node:fs'
const routes = ${JSON.stringify(routes)}
let requests = 0
const server = createServer((req, res) => {
  requests += 1
  writeFileSync(${JSON.stringify(countFile)}, String(requests))
  const name = decodeURIComponent(req.url.replace(/^\\//, ''))
  const status = routes[name] ?? 404
  res.writeHead(status, { 'content-type': 'application/json' })
  res.end(status === 200 ? '{"name":"' + name + '"}' : '{"error":"nope"}')
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
    if (!port) throw new Error('stub registry did not report a port')
    const rows = options.rows ?? [{ repo: 'o/p', verdict: 'CONTRACT_OK', name: 'plugin-a' }]
    const result = spawnSync(process.execPath, [SCRIPT], {
      input: `${rows.map((r) => JSON.stringify(r)).join('\n')}\n`,
      encoding: 'utf8',
      env: {
        ...process.env,
        CENSUS_NPM_REGISTRY: `http://127.0.0.1:${port}`,
        CENSUS_RETRY_DELAY_MS: '10',
        ...(options.env ?? {}),
      },
      timeout: 60_000,
    })
    return {
      status: result.status,
      stderr: String(result.stderr ?? ''),
      records: String(result.stdout ?? '').split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l)),
      requests: Number(readFileSync(countFile, 'utf8')) || 0,
    }
  } finally {
    server.kill()
  }
}

const published = runAssess({ 'plugin-a': 200 })
check(
  'a resolvable name is published',
  published.records[0]?.installable === 'published',
  JSON.stringify(published.records[0] ?? published.stderr),
)

const absent = runAssess({})
check(
  'a 404 is git-only',
  absent.records[0]?.installable === 'git-only',
  JSON.stringify(absent.records[0] ?? ''),
)
check('a 404 is not retried', absent.requests === 1, `${absent.requests} request(s)`)

// The defect this guards: a registry failure must not become a package verdict.
const broken = runAssess({ 'plugin-a': 500 })
check(
  'a registry error is unknown, not git-only',
  broken.records[0]?.installable === 'unknown',
  JSON.stringify(broken.records[0] ?? ''),
)
check(
  'a transient registry failure is retried',
  broken.requests > 1,
  `${broken.requests} request(s) for one package`,
)

// A wholly failed run must be refused rather than published as a table of unknowns.
const allBroken = runAssess(
  { 'plugin-a': 500, 'plugin-b': 500, 'plugin-c': 500, 'plugin-d': 500 },
  {
    rows: ['plugin-a', 'plugin-b', 'plugin-c', 'plugin-d'].map((p, i) => ({
      repo: `o/p${i}`,
      verdict: 'CONTRACT_OK',
      name: p,
    })),
  },
)
check('a wholly unknown run exits non-zero', allBroken.status !== 0, `status=${allBroken.status}`)
check(
  'the refusal explains why the split would be meaningless',
  /is meaningful|meaningless/.test(allBroken.stderr),
  allBroken.stderr.split('\n').slice(-3).join(' | '),
)
check(
  'the unknown rate is reported',
  /unknown rate: \d+\/\d+/.test(allBroken.stderr),
  allBroken.stderr.split('\n').filter((l) => l.includes('unknown rate')).join(' | '),
)

// A few unknowns must not block an otherwise healthy run.
const mostlyFine = runAssess(
  { 'plugin-a': 200, 'plugin-b': 200, 'plugin-c': 200, 'plugin-d': 200, 'plugin-e': 500 },
  {
    rows: ['plugin-a', 'plugin-b', 'plugin-c', 'plugin-d', 'plugin-e'].map((p, i) => ({
      repo: `o/p${i}`,
      verdict: 'CONTRACT_OK',
      name: p,
    })),
  },
)
check(
  'one unknown among many does not refuse the run',
  mostlyFine.status === 0,
  `status=${mostlyFine.status}; ${mostlyFine.stderr.split('\n').slice(-2).join(' | ')}`,
)
check(
  'every input row still yields a record',
  mostlyFine.records.length === 5,
  `${mostlyFine.records.length} record(s)`,
)

// The reserved-scope rule must not depend on the registry at all: a repository
// outside the organisation cannot publish that name whatever the registry says.
const reserved = runAssess(
  { '@deepseek-ai/dsh-thing': 200 },
  { rows: [{ repo: 'someone/else', verdict: 'CONTRACT_OK', name: '@deepseek-ai/dsh-thing' }] },
)
check(
  'a foreign package under the reserved scope is unpublishable',
  reserved.records[0]?.installable === 'unpublishable-scope',
  JSON.stringify(reserved.records[0] ?? ''),
)

// A manifest with no name is its own state, not an unknown.
const unnamed = runAssess({}, { rows: [{ repo: 'o/p', verdict: 'CONTRACT_OK', name: null }] })
check(
  'a manifest with no package name is unnamed',
  unnamed.records[0]?.installable === 'unnamed',
  JSON.stringify(unnamed.records[0] ?? ''),
)

process.stdout.write(
  failures === 0
    ? `\nall ${checks} installability controls behaved as specified\n`
    : `\n${failures} of ${checks} installability controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
