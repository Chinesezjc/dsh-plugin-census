#!/usr/bin/env node
/**
 * Full-criteria conformance audit for one DSH plugin repository checkout.
 *
 * Criteria parity target: `omdsh-dev/dsh-plugin-check`, which applies 36 checks
 * to a single repository from inside DSH. That tool cannot enumerate the
 * ecosystem (it has no topic search), and this project's earlier three-tier
 * probe was a strict subset of its criteria. This module closes that gap so a
 * census entry carries the same depth as a single-repository diagnosis.
 *
 * Every check reads a local checkout. The audit never executes repository code:
 * no install, no build, no postinstall. Manifest and tsconfig are parsed as
 * data, sources are scanned as text.
 *
 * Usage: audit-repo.mjs <checkout-dir> <owner/name>
 * Emits one JSON verdict object on stdout.
 */

import { promises as fs } from 'node:fs'
import { join, resolve, relative, sep } from 'node:path'

/** Severity ranking used to summarise a repository in one word. */
const SEVERITY_ORDER = { error: 0, warning: 1, info: 2 }

/** Relative TypeScript-extension imports, which break once compiled. */
const TS_IMPORT_RE =
  /(?:(?:from|import)\s+|import\s*\(|require\s*\()['"]((?:\.\.?\/)[^'"]+\.(?:ts|tsx|mts|cts))['"]/
/** Worker-style `new URL('./x.ts')` references left in build output. */
const TS_URL_RE = /new URL\s*\(\s*['"]((?:\.\.?\/)[^'"]+\.(?:ts|tsx|mts|cts))['"]/

/** Budget for text scanning, so one large repository cannot stall a shard. */
const MAX_SCAN_FILES = 400
const MAX_SCAN_BYTES = 4 * 1024 * 1024
const EXTENDS_MAX_DEPTH = 5

/**
 * Validate an npm package name against the registry's rules.
 * @param name - candidate package name.
 * @returns true when the name is publishable in principle.
 */
function isValidPackageName(name) {
  if (typeof name !== 'string' || name.length === 0 || name.length > 214) return false
  if (name.startsWith('.') || name.startsWith('_')) return false
  if (name !== name.toLowerCase()) return false
  return /^(?:@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*$/.test(name)
}

/**
 * Strip line and block comments so scanned text holds only code.
 *
 * Without this, a comment or a string constant mentioning a `.ts` path is
 * indistinguishable from a real import. Verified against
 * `omdsh-dev/dsh-plugin-check`, whose build output mentions `new URL('./x.ts')`
 * inside a doc comment and `'.ts'` as an extension constant: scanning raw text
 * reported two errors there that do not exist.
 * @param text - source text.
 * @returns text with comments removed.
 */
function stripComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .split('\n')
    .map((line) => line.replace(/(^|[^:'"\\])\/\/.*$/, '$1'))
    .join('\n')
}

/**
 * Report whether any text carries a real relative TypeScript-extension import.
 * @param texts - source texts.
 * @param pattern - import pattern to apply.
 * @returns true when a match survives comment stripping.
 */
function hasRealImport(texts, pattern) {
  return texts.some((text) => pattern.test(stripComments(text)))
}

/**
 * Read and parse a JSON file.
 * @param path - file path.
 * @returns parsed value, or null when missing or malformed.
 */
async function readJson(path) {
  try {
    return JSON.parse(await fs.readFile(path, 'utf8'))
  } catch {
    return null
  }
}

/**
 * Resolve a declared relative path and confirm it stays inside the checkout.
 *
 * Containment matters because a manifest may point outside its own package
 * (`../../etc`), which neither publishes nor installs as the author expects.
 * @param root - checkout directory.
 * @param target - declared relative path.
 * @returns ok plus a reason when rejected.
 */
async function resolveWithin(root, target) {
  const absolute = resolve(root, target)
  const rel = relative(root, absolute)
  if (rel.startsWith('..') || rel.startsWith(sep) || rel === '') {
    return { ok: false, reason: `escapes package root: ${target}` }
  }
  try {
    const stat = await fs.lstat(absolute)
    if (stat.isSymbolicLink()) return { ok: false, reason: `symlink not accepted: ${target}` }
    return { ok: true }
  } catch {
    return { ok: false, reason: `path does not exist: ${target}` }
  }
}

/**
 * Strip a YAML inline comment while respecting quoting.
 * @param line - raw line.
 * @returns the line without its trailing comment.
 */
function stripInlineComment(line) {
  let inSingle = false
  let inDouble = false
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    if (char === "'" && !inDouble) inSingle = !inSingle
    else if (char === '"' && !inSingle) inDouble = !inDouble
    else if (char === '#' && !inSingle && !inDouble && (index === 0 || /\s/.test(line[index - 1]))) {
      return line.slice(0, index).trimEnd()
    }
  }
  return line.trimEnd()
}

/**
 * Remove surrounding quotes from a scalar value.
 * @param value - raw scalar text.
 * @returns unquoted value.
 */
function stripQuotes(value) {
  const match = /^(['"])(.*)\1$/.exec(value)
  return match === null ? value : match[2]
}

/**
 * Parse a bundle patch into its operation sections.
 *
 * Line-oriented on purpose: patch files must be classified without depending
 * on a YAML library, and the shapes that occur are `- insert:` / `- update:` /
 * `- disable:` sections of `id`/`name`/`config` entries. A `config` block is
 * opaque plugin configuration, so its nested lines are absorbed rather than
 * parsed as entry fields.
 * @param text - patch file contents.
 * @returns parsed sections with per-section errors.
 */
export function parsePatchSections(text) {
  const sections = []
  let current
  let currentEntry
  let nestedFieldIndent = -1

  for (const raw of text.split('\n')) {
    const line = stripInlineComment(raw)
    if (line.trim() === '') continue
    const indent = line.length - line.trimStart().length
    const content = line.trim()

    const sectionMatch = /^-\s*(insert|update|disable):$/.exec(content)
    if (sectionMatch !== null) {
      current = { op: sectionMatch[1], entries: [], errors: [] }
      sections.push(current)
      currentEntry = undefined
      nestedFieldIndent = -1
      continue
    }

    if (indent === 0) {
      const topId = /^-\s*id:\s*(.+)$/.exec(content)
      if (topId !== null) {
        current = { op: 'update', entries: [], errors: [] }
        currentEntry = { id: stripQuotes(topId[1]), name: '', fields: [] }
        current.entries.push(currentEntry)
        sections.push(current)
        nestedFieldIndent = -1
        continue
      }
      if (content.startsWith('- ')) {
        current = { op: 'unknown', entries: [], errors: [`unknown top-level entry: ${content.slice(0, 40)}`] }
        sections.push(current)
        currentEntry = undefined
        continue
      }
    }

    if (current === undefined) {
      current = { op: 'unknown', entries: [], errors: [`content before any section: ${content.slice(0, 40)}`] }
      sections.push(current)
      continue
    }

    if (nestedFieldIndent >= 0 && indent >= nestedFieldIndent) continue

    const entryMatch = /^-\s*([a-zA-Z][\w-]*):\s*(.*)$/.exec(content)
    if (entryMatch !== null) {
      currentEntry = { id: '', name: '', fields: [] }
      current.entries.push(currentEntry)
      const key = entryMatch[1]
      const value = stripQuotes(entryMatch[2])
      if (key === 'id') currentEntry.id = value
      else if (key === 'name') currentEntry.name = value
      else currentEntry.fields.push(key)
      nestedFieldIndent = key === 'config' && value === '' ? indent + 2 : -1
      continue
    }

    const fieldMatch = /^([a-zA-Z][\w-]*):\s*(.*)$/.exec(content)
    if (fieldMatch === null) {
      current.errors.push(`unparseable line: ${content.slice(0, 40)}`)
      continue
    }
    if (currentEntry === undefined) {
      currentEntry = { id: '', name: '', fields: [] }
      current.entries.push(currentEntry)
    }
    const key = fieldMatch[1]
    if (key === 'id') currentEntry.id = stripQuotes(fieldMatch[2])
    else if (key === 'name') currentEntry.name = stripQuotes(fieldMatch[2])
    else currentEntry.fields.push(key)
    nestedFieldIndent = key === 'config' && fieldMatch[2].trim() === '' ? indent + 2 : -1
  }

  for (const section of sections) {
    for (const entry of section.entries) {
      if (entry.id === '') section.errors.push('entry missing id')
    }
  }
  return sections
}

/**
 * Resolve a tsconfig through its relative `extends` chain.
 *
 * A shared base config is normal, so failing to follow `extends` would report
 * false positives on every repository that uses one. Package-form `extends`
 * cannot be resolved without installing dependencies, so it is reported as
 * unresolved rather than guessed at.
 * @param dir - checkout directory.
 * @returns resolved compiler options, or null when no tsconfig exists.
 */
export async function resolveTsconfig(dir, filename = 'tsconfig.json') {
  const read = async (path, depth) => {
    if (depth > EXTENDS_MAX_DEPTH) return { ok: false, reason: `extends deeper than ${EXTENDS_MAX_DEPTH}` }
    const config = await readJson(path)
    if (config === null) return { ok: false, reason: `unreadable or malformed: ${path}` }
    const options = {}
    const extend = config.extends
    if (typeof extend === 'string') {
      if (!extend.startsWith('.')) return { ok: false, reason: `package-form extends not resolvable offline: ${extend}` }
      const parent = await read(resolve(path, '..', extend), depth + 1)
      if (!parent.ok) return parent
      Object.assign(options, parent.options)
    }
    Object.assign(options, config.compilerOptions ?? {})
    return { ok: true, options }
  }

  try {
    await fs.access(join(dir, filename))
  } catch {
    return null
  }
  const result = await read(join(dir, filename), 0)
  if (!result.ok) return { compilerOptions: {}, resolved: false, skipReason: result.reason }
  return { compilerOptions: result.options, resolved: true }
}

/**
 * Collect text file contents under a directory within a fixed budget.
 * @param dir - directory to walk.
 * @param extensions - file extensions to include.
 * @returns collected texts and whether the walk was truncated.
 */
async function collectTexts(dir, extensions) {
  const texts = []
  let bytes = 0
  let truncated = false
  const walk = async (current) => {
    if (truncated) return
    let entries
    try {
      entries = await fs.readdir(current, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      if (truncated) return
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
      const path = join(current, entry.name)
      if (entry.isSymbolicLink()) continue
      if (entry.isDirectory()) {
        await walk(path)
        continue
      }
      if (!extensions.some((extension) => entry.name.endsWith(extension))) continue
      if (texts.length >= MAX_SCAN_FILES || bytes >= MAX_SCAN_BYTES) {
        truncated = true
        return
      }
      try {
        const content = await fs.readFile(path, 'utf8')
        bytes += content.length
        texts.push(content)
      } catch { /* unreadable file is not a finding */ }
    }
  }
  await walk(dir)
  return { texts, truncated }
}

/**
 * Audit one checked-out repository against the full criteria set.
 * @param dir - checkout directory.
 * @param repo - `owner/name`, used for scope-ownership checks.
 * @returns a verdict with every issue found.
 */
export async function audit(dir, repo) {
  const issues = []
  const add = (code, severity, detail) => issues.push({ code, severity, detail })

  const manifest = await readJson(join(dir, 'package.json'))
  if (manifest === null) {
    add('no-manifest', 'error', 'package.json missing or not valid JSON')
    return finish(repo, null, issues)
  }

  // --- manifest -----------------------------------------------------------
  const name = manifest.name
  if (!isValidPackageName(name)) {
    add('invalid-name', 'error', `not a valid npm package name: ${String(name)}`)
  }

  // Reserved-scope ownership: only the DeepSeek organisation may publish
  // `@deepseek-ai/*`, so a foreign owner declaring that scope can never ship.
  const owner = repo.split('/')[0].toLowerCase()
  if (typeof name === 'string' && name.startsWith('@deepseek-ai/') && owner !== 'deepseek-ai') {
    add('unpublishable-scope', 'error',
      `names itself under @deepseek-ai/ but is owned by ${owner}, which cannot publish that scope`)
  }

  // `main` and `types` normally point into build output, which a source
  // checkout does not contain. Requiring the target to exist reported a defect
  // for every plugin that does not commit lib/ — correct practice, not an
  // error. Only two things are decidable from a source tree: that the field is
  // declared at all, and that it does not escape the package root.
  //
  // `types` is optional: a plain-JavaScript plugin has no declarations to
  // point at, so its absence is reported at info level for completeness rather
  // than as a defect.
  for (const field of ['main', 'types']) {
    const target = manifest[field]
    if (typeof target !== 'string' || target === '') {
      if (field === 'main') add('missing-main-or-types', 'error', 'main not declared')
      else add('no-types-field', 'info', 'types not declared (expected for a plain-JavaScript package)')
      continue
    }
    const absolute = resolve(dir, target)
    const rel = relative(dir, absolute)
    if (rel.startsWith('..') || rel.startsWith(sep) || rel === '') {
      add('missing-main-or-types', 'error', `${field} escapes the package root: ${target}`)
    }
  }

  if (!Array.isArray(manifest.files)) {
    add('incomplete-files', 'warning', 'files not declared; the published tarball may omit entry points')
  } else {
    for (const required of ['lib', 'cordis.patch.yml']) {
      if (!manifest.files.includes(required)) add('incomplete-files', 'warning', `files omits ${required}`)
    }
  }

  // A plugin must not bundle its own copy of the host it plugs into, so what
  // matters is that SOME DSH or Cordis package is a peer — not specifically
  // `cordis` by that name. Requiring the bare name reported a defect for
  // `dsh-auto-continue`, whose peers are @deepseek-ai/dsh-settings and
  // @deepseek-ai/schemastery: a client plugin has no reason to peer-depend on
  // the Cordis core directly.
  const peers = manifest.peerDependencies
  const peerNames = peers !== undefined && typeof peers === 'object' ? Object.keys(peers) : []
  const hasHostPeer = peerNames.some((peerName) =>
    peerName === 'cordis' || peerName.startsWith('@deepseek-ai/'))
  if (peerNames.length === 0) {
    add('missing-peer', 'warning', 'peerDependencies not declared; the host may be bundled instead of shared')
  } else if (!hasHostPeer) {
    add('missing-peer', 'warning',
      `peerDependencies declares no DSH or Cordis package (found: ${peerNames.slice(0, 4).join(', ')})`)
  }

  const engines = manifest.engines
  if (engines !== undefined && typeof engines === 'object' && 'dsh' in engines
    && typeof engines.dsh !== 'string') {
    add('invalid-engines-dsh', 'warning', 'engines.dsh is present but not a version range string')
  }

  if (manifest.scripts === undefined || typeof manifest.scripts !== 'object'
    || (manifest.scripts.build === undefined && manifest.scripts.prepack === undefined)) {
    add('no-build-script', 'warning', 'neither scripts.build nor scripts.prepack is declared')
  }

  // --- bundle declaration and patch --------------------------------------
  const declared = manifest.dsh?.bundle?.patch
  let patchText = null
  if (typeof declared !== 'string' || declared === '') {
    add('no-bundle-decl', 'error', 'dsh.bundle.patch not declared')
  } else {
    const resolved = await resolveWithin(dir, declared)
    if (!resolved.ok) {
      add('no-patch', 'error', `dsh.bundle.patch invalid: ${resolved.reason}`)
    } else {
      try {
        patchText = await fs.readFile(resolve(dir, declared), 'utf8')
      } catch {
        add('no-patch', 'error', `declared patch unreadable: ${declared}`)
      }
    }
  }

  if (patchText !== null) {
    const sections = parsePatchSections(patchText)
    const insert = sections.find((section) => section.op === 'insert')
    if (insert === undefined) {
      add('malformed-patch', 'error', 'no insert section; a bundle patch needs at least one `- insert:`')
    } else {
      if (insert.errors.length > 0) {
        add('malformed-patch', 'error', insert.errors.slice(0, 3).join('; '))
      }
      const seen = new Set()
      for (const entry of insert.entries) {
        if (entry.id === '') continue
        if (seen.has(entry.id)) add('duplicate-row-id', 'error', `duplicate row id: ${entry.id}`)
        seen.add(entry.id)
      }
      for (const entry of insert.entries) {
        for (const field of entry.fields) {
          if (field !== 'config') {
            add('unexpected-fields', 'warning', `entry ${entry.id || '(unnamed)'} carries unexpected field: ${field}`)
          }
        }
      }
      // A single-plugin bundle whose patch mounts a name unrelated to its own
      // package will not resolve through the profile's node_modules.
      if (typeof name === 'string' && insert.entries.length === 1) {
        const mounted = insert.entries[0].name
        if (mounted !== '' && mounted !== name && !mounted.startsWith(`${name}/`)) {
          add('patch-name-mismatch', 'warning',
            `patch mounts "${mounted}" but the package is "${name}"`)
        }
      }
    }
    for (const section of sections) {
      if (section.op !== 'insert' && section.errors.length > 0) {
        add('malformed-patch', 'error', `${section.op} section: ${section.errors.slice(0, 2).join('; ')}`)
      }
    }
  }

  // --- source shape -------------------------------------------------------
  // Establish what kind of package this is BEFORE applying language-specific
  // checks. A plain-JavaScript plugin that authors lib/ directly is valid, and
  // reporting `no-tsconfig` plus `no-source-entry` against it (as an earlier
  // version did for `dsh-mcp-manager`) invents two defects out of a supported
  // layout.
  const exists = async (relPath) => {
    try {
      await fs.access(join(dir, relPath))
      return true
    } catch {
      return false
    }
  }

  const hasSource = await exists('src')
  const hasLib = await exists('lib')
  const tsSources = hasSource
    ? await collectTexts(join(dir, 'src'), ['.ts', '.tsx', '.mts', '.cts'])
    : { texts: [], truncated: false }
  const isTypeScript = tsSources.texts.length > 0

  if (!hasSource && !hasLib) {
    add('no-source-entry', 'error', 'neither src/ nor lib/ is present; there is nothing to load')
  }

  // --- build layout (TypeScript packages only) ----------------------------
  // Build settings frequently live in a dedicated config: both
  // `dsh-interconnect` and `dsh-auto-continue` keep outDir/declarationDir in
  // tsconfig.build.json, so reading only tsconfig.json concluded a mismatch
  // that does not exist. Every candidate is consulted before judging.
  let tsconfig = null
  if (isTypeScript) {
    for (const candidate of ['tsconfig.build.json', 'tsconfig.json']) {
      if (!(await exists(candidate))) continue
      const resolved = await resolveTsconfig(dir, candidate)
      if (resolved === null) continue
      // Prefer whichever config actually declares output layout.
      if (tsconfig === null
        || (resolved.resolved && resolved.compilerOptions.outDir !== undefined)) {
        tsconfig = resolved
      }
    }
    if (tsconfig === null) {
      add('no-tsconfig', 'warning', 'TypeScript sources present but no tsconfig.json or tsconfig.build.json')
    } else if (!tsconfig.resolved) {
      add('tsconfig-extends-unresolved', 'info', tsconfig.skipReason ?? 'extends chain unresolved')
    } else {
      const { outDir, declarationDir, emitDeclarationOnly } = tsconfig.compilerOptions
      const main = typeof manifest.main === 'string' ? manifest.main : ''
      const types = typeof manifest.types === 'string' ? manifest.types : ''
      const prefixOf = (value) => value.replace(/^\.\//, '').replace(/\/$/, '')
      const prefixes = (dirValue, fileValue) =>
        prefixOf(dirValue) === '' || fileValue.replace(/^\.\//, '').startsWith(prefixOf(dirValue))

      // With `emitDeclarationOnly`, tsc produces ONLY declarations and the
      // JavaScript comes from a bundler, so `outDir` governs `types` rather
      // than `main`. `dsh-auto-continue` sets outDir to lib/types with
      // emitDeclarationOnly and bundles JS into lib/ via esbuild; comparing
      // that outDir against main reported a mismatch that does not exist.
      const declarationsOnly = emitDeclarationOnly === true
      if (typeof outDir === 'string' && declarationsOnly) {
        if (types !== '' && !prefixes(outDir, types)) {
          add('types-path-mismatch', 'error',
            `outDir "${outDir}" (emitDeclarationOnly) does not prefix types "${types}"`)
        }
      } else if (typeof outDir === 'string' && main !== '' && !prefixes(outDir, main)) {
        add('lib-layout-mismatch', 'error', `outDir "${outDir}" does not prefix main "${main}"`)
      }

      if (typeof declarationDir === 'string' && types !== '' && !prefixes(declarationDir, types)) {
        add('types-path-mismatch', 'error', `declarationDir "${declarationDir}" does not prefix types "${types}"`)
      }
    }
  }

  // A relative `.ts` import is only a defect if nothing resolves it before the
  // code ships. Three mechanisms do, and all three must be considered or the
  // check invents failures:
  //
  //   1. `rewriteRelativeImportExtensions` (TypeScript 5.7) rewrites on emit.
  //      `dsh-plugin-check` sets it and builds with bare `tsc`.
  //   2. A bundler that inlines imports. `dsh-interconnect` builds with esbuild
  //      in `bundle: true` mode, so no specifier survives into lib/ at all.
  //   3. No relative `.ts` specifiers in the first place — `dsh-auto-continue`
  //      has none, so there is nothing to rewrite.
  //
  // Each of these was a separate false positive before being accounted for.
  const rewritesImports = tsconfig?.resolved === true
    && tsconfig.compilerOptions.rewriteRelativeImportExtensions === true

  const buildScripts = manifest.scripts !== undefined && typeof manifest.scripts === 'object'
    ? Object.values(manifest.scripts).filter((script) => typeof script === 'string').join(' ')
    : ''
  let bundles = /esbuild|tsdown|rollup|rspack|webpack|vite|unbuild|bun build/.test(buildScripts)
  // A custom build entry point hides its bundler inside the script file, so the
  // script is read rather than guessed at from its name.
  if (!bundles) {
    const entry = /\b(?:node|bun)\s+(\S+\.m?js)/.exec(buildScripts)
    if (entry !== null) {
      try {
        const text = await fs.readFile(resolve(dir, entry[1]), 'utf8')
        bundles = /esbuild|tsdown|rollup|rspack|webpack|vite|unbuild|bundle\s*:\s*true/.test(text)
      } catch { /* unreadable build script: fall through to reporting */ }
    }
  }

  if (isTypeScript) {
    if (tsSources.truncated) add('scan-truncated', 'info', 'source scan hit the file or byte budget')
    if (hasRealImport(tsSources.texts, TS_IMPORT_RE) && !rewritesImports && !bundles) {
      add('missing-rewrite-imports', 'error',
        'sources import relative .ts paths, tsconfig does not set rewriteRelativeImportExtensions, '
        + 'and no bundling build step was found; compiled output will not resolve')
    }
  }

  if (hasLib) {
    const { texts } = await collectTexts(join(dir, 'lib'), ['.js', '.mjs', '.cjs'])
    if (hasRealImport(texts, TS_IMPORT_RE) || hasRealImport(texts, TS_URL_RE)) {
      add('stale-ts-imports', 'error', 'build output still imports .ts paths')
    }
  } else if (typeof manifest.main === 'string' && manifest.main.replace(/^\.\//, '').startsWith('lib')
    && manifest.scripts?.build === undefined && manifest.scripts?.prepack === undefined) {
    add('no-build-entry', 'error', 'main points into lib/, which is absent, and no build script is declared')
  }

  return finish(repo, manifest, issues)
}

/**
 * Summarise a verdict from its issue list.
 * @param repo - `owner/name`.
 * @param manifest - parsed manifest, or null.
 * @param issues - issues found.
 * @returns the verdict record.
 */
function finish(repo, manifest, issues) {
  const errors = issues.filter((issue) => issue.severity === 'error')
  const warnings = issues.filter((issue) => issue.severity === 'warning')
  issues.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity])
  return {
    repo,
    packageName: manifest?.name ?? null,
    conformance: errors.length === 0 ? (warnings.length === 0 ? 'clean' : 'warnings') : 'errors',
    errorCount: errors.length,
    warningCount: warnings.length,
    issues,
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [dir, repo] = process.argv.slice(2)
  if (dir === undefined || repo === undefined) {
    process.stderr.write('usage: audit-repo.mjs <checkout-dir> <owner/name>\n')
    process.exit(2)
  }
  process.stdout.write(`${JSON.stringify(await audit(dir, repo))}\n`)
}
