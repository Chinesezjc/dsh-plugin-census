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
    return `| [${entry.repo}](https://github.com/${entry.repo}) | ${surface} | ${pkg} | ${entry.stars} | ${cell(entry.description)} |`
  })
  return ['| Repository | Surface | Package | Stars | Description |',
    '| --- | --- | --- | --- | --- |', ...rows].join('\n')
}

const catalogue = readJsonl(new URL('../data/catalog.jsonl', import.meta.url).pathname)
const high = catalogue.filter((entry) => entry.confidence === 'high')
const medium = catalogue.filter((entry) => entry.confidence === 'medium')
const weak = catalogue.filter((entry) => entry.confidence === 'low' || entry.confidence === 'none')

const bySurface = (entries, surface) => entries.filter((entry) => entry.surface === surface)

const generated = new Date().toISOString().slice(0, 10)

const document = `# DSH Plugin Catalogue

Generated ${generated} from ${catalogue.length} contract-verified repositories.

Every entry below satisfies all three tiers of the bundle contract DSH enforces
in \`packages/boot/app-boot/src/profile.ts:388-397\`. Contract verification is
static: it proves a plugin *declares* a resolvable, structurally valid patch,
not that it installs or runs. No install verification is claimed.

Ordering is by attribution confidence, then stars.

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
`

writeFileSync(new URL('../PLUGINS.md', import.meta.url).pathname, document)
process.stderr.write(`rendered ${catalogue.length} entries: ${high.length} verified, ${medium.length} partial, ${weak.length} unverified\n`)
