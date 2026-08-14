#!/usr/bin/env node
/**
 * Attribute the DSH surface a compliant plugin extends.
 *
 * Evidence is ranked by how directly it reflects what DSH loads:
 *
 *   1. `@deepseek-ai/dsh-client-*` or `@deepseek-ai/dsh-host-*` dependencies.
 *      Strongest signal: importing a client package is only possible for code
 *      that runs in the browser client, and host packages likewise.
 *   2. Other `@deepseek-ai/dsh-*` dependencies mapped to their known surface
 *      (dsh-tools, dsh-llm, dsh-subagent and similar are host-only).
 *   3. Package-name and description keywords. Weakest, used only when no
 *      dependency evidence exists; a measured 22.6% of compliant plugins
 *      declare no `@deepseek-ai/*` dependency at all, so this tier cannot be
 *      dropped, but it is reported as low confidence.
 *
 * Confidence is emitted alongside the surface so the published catalogue can
 * distinguish a verified attribution from a guess, instead of presenting both
 * as equal facts.
 *
 * Reads contract verdict JSONL on stdin; writes attribution JSONL on stdout.
 */

import { execFile } from 'node:child_process'
import { createInterface } from 'node:readline'

/** Host-only DSH packages that do not carry a `host-` name prefix. */
const HOST_PACKAGES = new Set([
  'dsh-tools', 'dsh-llm', 'dsh-subagent', 'dsh-agent', 'dsh-bash', 'dsh-fs',
  'dsh-mcp-client', 'dsh-skill-filesystem', 'dsh-credentials', 'dsh-sandbox',
  'dsh-storage', 'dsh-schedule', 'dsh-hooks', 'dsh-system-prompt', 'dsh-jobs',
  'dsh-code-runtime', 'dsh-pty', 'dsh-terminal', 'dsh-lsp', 'dsh-compact',
])
/** Packages shared by both surfaces, which therefore attribute neither. */
const NEUTRAL_PACKAGES = new Set([
  'cordis', 'schemastery', 'dsh-session', 'dsh-settings', 'dsh-invariants',
  'dsh-api', 'dsh-core', 'dsh-identity', 'dsh-context',
])

/**
 * Fetch and decode one repository file.
 * @param repo - `owner/name`.
 * @param path - repository-relative path.
 * @returns decoded text, or null when unavailable.
 */
function fetchFile(repo, path) {
  return new Promise((resolve) => {
    execFile('gh', ['api', `repos/${repo}/contents/${path}`, '--jq', '.content'],
      { maxBuffer: 8 * 1024 * 1024 }, (error, stdout) => {
        if (error || !stdout.trim()) return resolve(null)
        try {
          resolve(Buffer.from(stdout.trim(), 'base64').toString('utf8'))
        } catch {
          resolve(null)
        }
      })
  })
}

/**
 * Attribute a surface from dependency names.
 * @param dependencies - all dependency names across dependency kinds.
 * @returns surface and confidence, or null when no dependency evidence exists.
 */
function fromDependencies(dependencies) {
  const dshPackages = dependencies
    .filter((name) => name.startsWith('@deepseek-ai/'))
    .map((name) => name.slice('@deepseek-ai/'.length))
    .filter((name) => !NEUTRAL_PACKAGES.has(name))

  if (dshPackages.length === 0) return null

  const client = dshPackages.some((name) => name.startsWith('dsh-client'))
  const host = dshPackages.some((name) => name.startsWith('dsh-host') || HOST_PACKAGES.has(name))

  if (client && host) return { surface: 'both', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  if (client) return { surface: 'client', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  if (host) return { surface: 'host', confidence: 'high', evidence: dshPackages.slice(0, 6) }
  // DSH packages present but none surface-specific: real but unattributable.
  return { surface: 'indeterminate', confidence: 'medium', evidence: dshPackages.slice(0, 6) }
}

/**
 * Attribute a surface from name and description keywords.
 * @param packageName - npm package name, possibly null.
 * @param description - repository description, possibly null.
 * @returns surface and low confidence.
 */
function fromKeywords(packageName, description) {
  const text = `${packageName ?? ''} ${description ?? ''}`.toLowerCase()
  const clientHit = /client|web ui|web-ui|webui|panel|sidebar|skin|theme|css|ui\b|界面|皮肤|侧栏|前端/.test(text)
  const hostHit = /tool|mcp|skill|memory|llm|model|provider|sandbox|bash|shell|subagent|agent|工具|模型/.test(text)
  if (clientHit && hostHit) return { surface: 'both', confidence: 'low', evidence: ['keyword'] }
  if (clientHit) return { surface: 'client', confidence: 'low', evidence: ['keyword'] }
  if (hostHit) return { surface: 'host', confidence: 'low', evidence: ['keyword'] }
  return { surface: 'indeterminate', confidence: 'none', evidence: [] }
}

async function main() {
  const targets = []
  for await (const line of createInterface({ input: process.stdin })) {
    if (line.trim().length === 0) continue
    try {
      const record = JSON.parse(line)
      if (record.verdict === 'CONTRACT_OK') targets.push(record)
    } catch {
      continue
    }
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 10)
  let cursor = 0
  let done = 0

  async function worker() {
    while (cursor < targets.length) {
      const record = targets[cursor++]
      const manifestText = await fetchFile(record.repo, 'package.json')
      let dependencies = []
      let description = null
      if (manifestText !== null) {
        try {
          const manifest = JSON.parse(manifestText)
          dependencies = Object.keys({
            ...(manifest.dependencies ?? {}),
            ...(manifest.peerDependencies ?? {}),
            ...(manifest.devDependencies ?? {}),
          })
          description = manifest.description ?? null
        } catch { /* fall through to keyword attribution */ }
      }

      const attribution = fromDependencies(dependencies)
        ?? fromKeywords(record.name, description)

      process.stdout.write(`${JSON.stringify({
        repo: record.repo,
        packageName: record.name ?? null,
        surface: attribution.surface,
        confidence: attribution.confidence,
        evidence: attribution.evidence,
      })}\n`)
      done += 1
      if (done % 50 === 0) process.stderr.write(`  attributed ${done}/${targets.length}\n`)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, targets.length) }, worker))
  process.stderr.write(`attribution complete: ${done}\n`)
}

await main()
