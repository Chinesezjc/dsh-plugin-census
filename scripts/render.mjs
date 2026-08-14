#!/usr/bin/env node
/**
 * Render the machine-readable catalogue into PLUGINS.md.
 *
 * Ordering is by attribution confidence and then stars, deliberately not by
 * stars alone: star order is what the GitHub topic page already provides, and
 * it ranks non-plugins highest (measured 36.4% contract compliance in the 50+
 * star band against 64.5% at zero stars).
 *
 * Low-confidence attributions are rendered in a separate section rather than
 * mixed in, so a keyword guess is never displayed as though it were verified
 * dependency evidence.
 */

import { readFileSync, writeFileSync } from 'node:fs'

const SURFACE_LABEL = {
  client: 'Client (Web UI)',
  host: 'Host',
  both: 'Client + Host',
  indeterminate: 'Unattributed',
  unknown: 'Unattributed',
}

/** How a plugin can be installed, or why it cannot be. */
const INSTALL_LABEL = {
  published: 'npm',
  'git-only': 'Git only',
  'unpublishable-scope': '**blocked**',
  unnamed: 'unnamed',
  unknown: 'unknown',
}

/**
 * Read a JSONL file into parsed records.
 * @param path - file path.
 * @returns parsed records.
 */
function readJsonl(path) {
  return readFileSync(path, 'utf8').split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => JSON.parse(line))
}

/**
 * Escape pipe characters so a description cannot break table markup.
 * @param text - raw text, possibly null.
 * @returns single-line escaped text.
 */
function cell(text) {
  if (text === null || text === undefined) return ''
  return text.replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ').trim().slice(0, 110)
}

/**
 * Render one markdown table for a group of entries.
 * @param entries - catalogue entries.
 * @returns markdown table text.
 */
function table(entries) {
  const rows = entries.map((entry) => {
    const surface = SURFACE_LABEL[entry.surface] ?? entry.surface
    const pkg = entry.package === null ? '' : `\`${entry.package}\``
    const install = INSTALL_LABEL[entry.installable] ?? entry.installable
    return `| [${entry.repo}](https://github.com/${entry.repo}) | ${surface} | ${pkg} | ${install} | ${entry.stars} | ${cell(entry.description)} |`
  })
  return ['| Repository | Surface | Package | Install | Stars | Description |',
    '| --- | --- | --- | --- | --- | --- |', ...rows].join('\n')
}

const catalogue = readJsonl(new URL('../data/catalog.jsonl', import.meta.url).pathname)
// Blocked entries are separated first: they satisfy the bundle contract but
// name themselves under an npm scope their owner cannot publish, so no install
// command in their own README can succeed. Listing them beside installable
// plugins would misrepresent all of them.
const blocked = catalogue.filter((entry) => entry.installable === 'unpublishable-scope')
const installable = catalogue.filter((entry) => entry.installable !== 'unpublishable-scope')
const high = installable.filter((entry) => entry.confidence === 'high')
const medium = installable.filter((entry) => entry.confidence === 'medium')
const weak = installable.filter((entry) => entry.confidence === 'low' || entry.confidence === 'none')

const bySurface = (entries, surface) => entries.filter((entry) => entry.surface === surface)

const generated = new Date().toISOString().slice(0, 10)

const document = `# DSH Plugin Catalogue

Generated ${generated} from ${catalogue.length} contract-verified repositories.

Every entry below satisfies all three tiers of the bundle contract DSH enforces
in \`packages/boot/app-boot/src/profile.ts:388-397\`. Contract verification is
static: it proves a plugin *declares* a resolvable, structurally valid patch,
not that it installs or runs. No install-and-run verification is claimed.

The **Install** column reports how a plugin can be obtained: \`npm\` when the
declared package name resolves on the npm registry, \`Git only\` when it does
not (a Git specifier still works), and **blocked** when the name cannot be
published at all.

Ordering is by installability, then attribution confidence, then stars.

## Verified attribution

Surface established from \`@deepseek-ai/*\` dependency evidence.

### Host plugins (${bySurface(high, 'host').length})

${table(bySurface(high, 'host'))}

### Client plugins (${bySurface(high, 'client').length})

${table(bySurface(high, 'client'))}

### Client + Host (${bySurface(high, 'both').length})

${table(bySurface(high, 'both'))}

## Partial attribution (${medium.length})

Depends on \`@deepseek-ai/*\` packages, but none that identify a surface.

${medium.length > 0 ? table(medium) : '_None._'}

## Unverified attribution (${weak.length})

No \`@deepseek-ai/*\` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

${table(weak)}

## Blocked by reserved scope (${blocked.length})

These repositories satisfy the bundle contract, but their \`package.json\` names
them under \`@deepseek-ai/\`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any \`dsh plugin add @deepseek-ai/...\` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

${blocked.length > 0 ? table(blocked) : '_None._'}
`

writeFileSync(new URL('../PLUGINS.md', import.meta.url).pathname, document)
process.stderr.write(`rendered ${catalogue.length} entries: ${high.length} verified, ${medium.length} partial, ${weak.length} unverified\n`)
