#!/usr/bin/env node
/**
 * Controls for scripts/probe-npm-manifest.mjs.
 *
 * The probe exists because the repository manifest and the published package
 * disagree: `adoresever/graph-memory` declares `dsh.bundle` in its repository and
 * declares no `dsh` field at all in its published tarball, so it is catalogued
 * `CONTRACT_OK` and fails to load when installed by name. Verified against
 * @deepseek-ai/dsh@0.1.0-rc.7, which refuses it with "declares no dsh.bundle".
 *
 * Every control runs against a stub registry, so none of them touch the network,
 * and each was verified by injecting the corresponding defect.
 *
 *   node scripts/test-npm-manifest.mjs
 */

import { spawn, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const SCRIPT = new URL('./probe-npm-manifest.mjs', import.meta.url).pathname
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
 * Serve a stub registry in its own process and run the probe against it.
 *
 * The server must not run in this process: `spawnSync` blocks the event loop for
 * the child's whole lifetime, so an in-process server never accepts the
 * connection and the child hangs until its timeout.
 *
 * @param routes - map from package name to `{ status, body }`.
 * @param options - catalogue rows and environment overrides.
 * @returns `{ status, stderr, records, requests }`.
 */
function runProbe(routes, options = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'npmreg-'))
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
  // Path is /<name>/latest, with a scoped name percent-decoded by the probe.
  const name = decodeURIComponent(req.url.replace(/^\\//, '').replace(/\\/latest$/, ''))
  const route = routes[name]
  if (!route) {
    res.writeHead(404, { 'content-type': 'application/json' })
    return res.end('{"error":"Not found"}')
  }
  res.writeHead(route.status ?? 200, { 'content-type': 'application/json' })
  res.end(typeof route.body === 'string' ? route.body : JSON.stringify(route.body ?? {}))
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
    const rows = options.rows ?? [
      { repo: 'o/p', package: 'plugin-a', installable: 'published' },
    ]
    const args = [SCRIPT]
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

// The defect the probe exists to find.
const missing = runProbe({ 'plugin-a': { body: { version: '1.0.0' } } })
check(
  'a published manifest with no dsh field is bundle-missing',
  missing.records[0]?.state === 'bundle-missing',
  JSON.stringify(missing.records[0] ?? missing.stderr),
)
check(
  'the detail names the load failure rather than just the absence',
  /refuses this as a profile bundle/.test(missing.records[0]?.detail ?? ''),
  missing.records[0]?.detail,
)
check(
  'broken packages are listed on stderr',
  /will not load when installed by name/.test(missing.stderr),
  missing.stderr.split('\n').slice(-6).join(' | '),
)

// A dsh field that carries no bundle is still a load failure: DSH requires
// `dsh.bundle` specifically, so a `dsh.client`-only package cannot be a bundle.
const clientOnly = runProbe({ 'plugin-a': { body: { version: '1.0.0', dsh: { client: {} } } } })
check(
  'a dsh field without a bundle is still bundle-missing',
  clientOnly.records[0]?.state === 'bundle-missing',
  JSON.stringify(clientOnly.records[0] ?? ''),
)
check(
  'the published surface declaration is recorded',
  clientOnly.records[0]?.publishedSurface === 'client',
  JSON.stringify(clientOnly.records[0]?.publishedSurface),
)

const ok = runProbe({
  'plugin-a': { body: { version: '2.0.0', dsh: { bundle: { patch: './cordis.patch.yml' } } } },
})
check(
  'a published manifest declaring dsh.bundle is bundle-ok',
  ok.records[0]?.state === 'bundle-ok',
  JSON.stringify(ok.records[0] ?? ''),
)
check('the published version is recorded', ok.records[0]?.version === '2.0.0')

// A 404 is an answer and must be distinguished from a read failure.
const gone = runProbe({})
check(
  'an unresolvable name is package-missing, not unreadable',
  gone.records[0]?.state === 'package-missing',
  JSON.stringify(gone.records[0] ?? ''),
)

// A 500 is not evidence about the package and must never be reported as a defect.
const broken = runProbe({ 'plugin-a': { status: 500, body: { error: 'boom' } } })
check(
  'a server error is unreadable, not bundle-missing',
  broken.records[0]?.state === 'unreadable',
  JSON.stringify(broken.records[0] ?? ''),
)
check(
  'a transient failure is retried',
  broken.requests > 1,
  `${broken.requests} request(s) for one package`,
)

// A 404 must NOT be retried: it would delay a real finding.
const goneRequests = runProbe({}).requests
check('a 404 is not retried', goneRequests === 1, `${goneRequests} request(s)`)

// Only npm-resolvable entries are checked; a git-only entry has no published
// manifest to disagree with, so checking it would report a meaningless 404.
const gitOnly = runProbe(
  { 'plugin-a': { body: { version: '1.0.0', dsh: { bundle: {} } } } },
  { rows: [{ repo: 'o/p', package: 'plugin-a', installable: 'git-only' }] },
)
check(
  'a git-only entry is not checked',
  gitOnly.records.length === 0 && gitOnly.requests === 0,
  `${gitOnly.records.length} record(s), ${gitOnly.requests} request(s)`,
)

// Scoped names must survive URL encoding.
const scoped = runProbe(
  { '@scope/plugin': { body: { version: '1.0.0', dsh: { bundle: { patch: './p.yml' } } } } },
  { rows: [{ repo: 'o/p', package: '@scope/plugin', installable: 'published' }] },
)
check(
  'a scoped package name resolves',
  scoped.records[0]?.state === 'bundle-ok',
  JSON.stringify(scoped.records[0] ?? scoped.stderr),
)

// A wholly unreadable run must be refused rather than published as zero defects.
const allBroken = runProbe(
  {
    'plugin-a': { status: 500, body: {} },
    'plugin-b': { status: 500, body: {} },
    'plugin-c': { status: 500, body: {} },
  },
  {
    rows: ['plugin-a', 'plugin-b', 'plugin-c'].map((p, i) => ({
      repo: `o/p${i}`,
      package: p,
      installable: 'published',
    })),
  },
)
check('a wholly unreadable run exits non-zero', allBroken.status !== 0, `status=${allBroken.status}`)
check(
  'the refusal explains why the count would be meaningless',
  /would be meaningless/.test(allBroken.stderr),
  allBroken.stderr.split('\n').slice(-3).join(' | '),
)

// Incremental accumulation, matching the probe and decay scan.
{
  const rows = ['a', 'b', 'c', 'd'].map((p, i) => ({
    repo: `o/p${i}`,
    package: `plugin-${p}`,
    installable: 'published',
  }))
  const routes = Object.fromEntries(
    rows.map((r) => [r.package, { body: { version: '1.0.0', dsh: { bundle: { patch: './p.yml' } } } }]),
  )
  const first = runProbe(routes, { rows, env: { CENSUS_NPM_BATCH: '2' } })
  check('a bounded batch checks only its batch', first.requests === 2, `${first.requests} request(s)`)
  check('a bounded batch reports the limit', /checking 2 of 4/.test(first.stderr))
  const second = runProbe(routes, {
    rows,
    env: { CENSUS_NPM_BATCH: '2' },
    existing: `${first.records.map((r) => JSON.stringify(r)).join('\n')}\n`,
  })
  check(
    'a second run carries forward stored results',
    /carried forward 2 stored result/.test(second.stderr),
    second.stderr.split('\n').slice(0, 4).join(' | '),
  )
  check(
    'a second run advances to unchecked entries',
    second.records.length === 4,
    `${second.records.length} record(s)`,
  )
}

check(
  'the registry base is overridable so controls need no network',
  /CENSUS_NPM_REGISTRY/.test(SOURCE),
)

process.stdout.write(
  failures === 0
    ? `\nall ${checks} npm-manifest controls behaved as specified\n`
    : `\n${failures} of ${checks} npm-manifest controls failed\n`,
)
process.exit(failures === 0 ? 0 : 1)
