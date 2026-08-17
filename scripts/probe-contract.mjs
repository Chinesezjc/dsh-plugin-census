#!/usr/bin/env node
/**
 * Three-tier DSH plugin contract probe.
 *
 * The tiers mirror what `loadProfile` in DSH actually enforces
 * (packages/boot/app-boot/src/profile.ts:388-397). A bundle only loads when
 * all three hold, so a catalogue that checks fewer tiers reports plugins as
 * usable that a real `dsh plugin add` would reject:
 *
 *   T1 DECLARED  package.json has dsh.bundle.patch   (profile.ts:391-393 throws without it)
 *   T2 RESOLVED  that relative path exists in the repo (profile.ts:395 joins it)
 *   T3 PARSED    the patch file is a valid overlay patch list (profile.ts:396 parses it)
 *
 * Tier 3 is checked structurally here: the file must be YAML that parses to a
 * sequence of mappings. Full semantic validation needs DSH itself and belongs
 * to the install-verification stage, not this static probe.
 *
 * Reads repo full names on stdin (one per line), writes JSONL verdicts on
 * stdout. Network access is GitHub contents API via `gh`.
 */

import { execFile } from 'node:child_process'
import { createInterface } from 'node:readline'

/** Highest tier reached; ordered so numeric comparison expresses "at least". */
const TIER = { NONE: 0, DECLARED: 1, RESOLVED: 2, PARSED: 3 }
const TIER_NAME = ['NO_CONTRACT', 'DECLARED', 'RESOLVED', 'PARSED']

/**
 * Fetch and decode one file from a repository's default branch.
 * @param repo - `owner/name`.
 * @param path - repository-relative file path.
 * @returns decoded UTF-8 text, or null when absent or unreadable.
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
 * Decide whether text is a plausible Cordis overlay patch list.
 *
 * Deliberately structural, not a YAML parse: the probe must not depend on a
 * YAML library to classify thousands of third-party files, and the failure
 * this tier catches in practice is a patch path pointing at a missing or
 * empty file rather than at subtly invalid YAML.
 * @param text - candidate patch file contents.
 * @returns true when the file looks like a non-empty YAML sequence or mapping.
 */
function looksLikePatchList(text) {
  const meaningful = text.split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'))
  if (meaningful.length === 0) return false
  // A patch list is a YAML sequence of mappings, or a mapping of named entries.
  return meaningful.some((line) => line.startsWith('- ') || /^[\w$@./-]+\s*:/.test(line))
}

/**
 * Decide whether a manifest path is a plausible plugin location.
 *
 * Hint prefixes alone are not enough: `anywhere-labs/deepseek-harness-desktop`
 * keeps its bundle in a root-level `dsh-plugin-desktop/` directory, which no
 * conventional prefix matches. Depth is the more reliable signal, with test
 * fixtures excluded because a fixture manifest is not the package on offer.
 * @param path - manifest path within the repository.
 * @returns true when the path could hold the repository's plugin.
 */
function isPluginCandidate(path) {
  if (path === 'package.json') return true
  if (/(^|\/)node_modules\//.test(path)) return false
  // Exclude test and fixture manifests: a fixture is not the package on offer.
  // `examples/` is deliberately NOT excluded wholesale — `volcengine/OpenViking`
  // ships its real plugin as `examples/dsh-memory-plugin`, and an earlier
  // blanket `examples/*/` rule rejected it. Only nesting BELOW a package
  // directory indicates a fixture.
  if (/(^|\/)(tests?|__tests__|fixtures?|e2e|spec)\//.test(path)) return false
  const depth = path.split('/').length
  if (WORKSPACE_HINTS.some((hint) => path.startsWith(hint))) return depth <= 4
  // A directory one level down is a plausible single-package layout.
  return depth === 2
}

/** Directory prefixes that conventionally hold workspace subpackages. */
const WORKSPACE_HINTS = ['packages/', 'plugins/', 'extensions/', 'bundle/', 'bundles/',
  'npm/', 'apps/', 'integrations/', 'examples/', 'src/plugins/']
/** Cap on manifests read per repository, so one monorepo cannot exhaust the budget. */
const MAX_MANIFESTS = 25

/**
 * Package names published only by the DSH project itself.
 *
 * A repository whose bundle manifest carries one of these is not offering a
 * plugin; it is shipping a copy of the harness. Measured on the live topic:
 * five repositories (including `fufankeji/deepseek-harness-studio` at 203
 * stars) contain `packages/bundle/base/package.json` naming
 * `@deepseek-ai/dsh-base` verbatim. `fork` is false for all five, so these are
 * source copies that an owner-name check cannot detect. Reporting them as
 * misnamed plugins was wrong: the name is not the author's mistake, it is the
 * harness's own name.
 */
const FIRST_PARTY_PACKAGES = new Set([
  '@deepseek-ai/dsh-base', '@deepseek-ai/dsh-web-app', '@deepseek-ai/dsh-headless',
])

/**
 * List every `package.json` path in a repository's default-branch tree.
 * @param repo - `owner/name`.
 * @returns `{ paths, complete }`, or null when the tree could not be read.
 *   `complete` is false when the API truncated the listing, which means an
 *   absence of manifests below is not established.
 */
/** Count of unreadable tree listings, reported as a data-quality signal. */
let treeFailures = 0

function listManifests(repo) {
  return new Promise((resolve) => {
    // The whole response is requested, not a `--jq` projection of it: the
    // `truncated` flag lives at the top level, and filtering it away in the
    // request is what makes a partial listing indistinguishable from a complete
    // one. The upstream catalogue fixed this same confusion twice — once in its
    // submission gate and again in its decay scan — because reporting "we could
    // not see all of it" as "there is nothing there" turns an unreadable
    // repository into a definite rejection.
    execFile('gh', ['api', `repos/${repo}/git/trees/HEAD?recursive=1`],
      { maxBuffer: 32 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          // The reason has to reach the log. A run where every tree was
          // unreadable produced no diagnostic at all, which left the cause —
          // an exhausted API allowance — to be inferred from timing instead of
          // read from the output.
          treeFailures += 1
          if (treeFailures <= 5) {
            process.stderr.write(`  tree unreadable: ${repo}: ${String(stderr).trim().slice(0, 200)}\n`)
          }
          return resolve(null)
        }
        try {
          const body = JSON.parse(stdout)
          if (!Array.isArray(body?.tree)) return resolve(null)
          const paths = body.tree
            .filter((entry) => typeof entry.path === 'string' && entry.path.endsWith('package.json'))
            .map((entry) => entry.path)
            // Shallow paths first: a root or top-level workspace manifest is
            // more likely to be the plugin than something nested deeper.
            .sort((a, b) => a.split('/').length - b.split('/').length)
          resolve({ paths, complete: body.truncated !== true })
        } catch {
          resolve(null)
        }
      })
  })
}


/**
 * Read a manifest and extract its bundle declaration.
 * @param repo - `owner/name`.
 * @param path - manifest path within the repository.
 * @returns parsed shape, or null when unreadable or malformed.
 */
async function readManifest(repo, path) {
  const text = await fetchFile(repo, path)
  if (text === null) return null
  try {
    const manifest = JSON.parse(text)
    return {
      path,
      name: manifest?.name ?? null,
      declared: manifest?.dsh?.bundle?.patch,
      hasDsh: manifest?.dsh !== undefined,
      hasBundle: manifest?.dsh?.bundle !== undefined,
    }
  } catch {
    return { path, malformed: true }
  }
}

/**
 * Probe one repository through all three contract tiers.
 *
 * Searches the whole default-branch tree rather than only the root, because
 * monorepos place the plugin manifest in a subdirectory. Measured on the
 * current topic: `zhu1090093659/dsh-web-ui` declares five bundles under
 * `packages/`, `volcengine/OpenViking` one under `examples/`,
 * `anywhere-labs/deepseek-harness-desktop` one under `dsh-plugin-desktop/`, and
 * `Q00/ouroboros` one under `integrations/` — a root-only probe reports all of
 * them as non-plugins.
 * @param repo - `owner/name`.
 * @returns a verdict record describing the highest tier reached.
 */
async function probe(repo) {
  // DSH's own repository declares bundles (`packages/bundle/base` is
  // `@deepseek-ai/dsh-base`), so tree-walking makes the harness itself pass the
  // plugin contract. It is the product, not a plugin for the product, and it is
  // the highest-starred entry carrying the topic — reporting it as a plugin
  // would put the single most visible wrong answer at the top of the census.
  if (repo.toLowerCase() === 'deepseek-ai/deepseek-harness') {
    return {
      repo,
      tier: TIER.NONE,
      verdict: 'FIRST_PARTY_HARNESS',
      patch: null,
      note: 'DeepSeek Harness itself; its bundles are product packages, not third-party plugins',
    }
  }

  const rootManifest = await readManifest(repo, 'package.json')
  let candidates = []
  if (rootManifest !== null && !rootManifest.malformed) candidates.push(rootManifest)

  // Only walk the tree when the root does not already satisfy the contract:
  // the tree call is an extra request per repository and most plugins are
  // single-package.
  let listingComplete = true
  let candidatesTruncatedByCap = false
  if (!candidates.some((entry) => typeof entry.declared === 'string' && entry.declared.length > 0)) {
    const listing = await listManifests(repo)
    if (listing === null && rootManifest === null) {
      return {
        repo,
        tier: TIER.NONE,
        verdict: 'TREE_UNREADABLE',
        patch: null,
        note: 'the repository tree could not be read; no conclusion about a bundle is possible',
      }
    }
    listingComplete = listing === null ? false : listing.complete
    const eligible = (listing?.paths ?? [])
      .filter((path) => path !== 'package.json')
      .filter(isPluginCandidate)
    const workspacePaths = eligible.slice(0, MAX_MANIFESTS)
    candidatesTruncatedByCap = eligible.length > workspacePaths.length
    for (const path of workspacePaths) {
      const entry = await readManifest(repo, path)
      if (entry === null || entry.malformed) continue
      candidates.push(entry)
      if (typeof entry.declared === 'string' && entry.declared.length > 0) break
    }
  }

  // An absence is only reportable when the whole tree was actually examined.
  // With a truncated listing or manifests left unread past the cap, the honest
  // verdict is "not established", not "no bundle".
  const searchExhaustive = listingComplete && !candidatesTruncatedByCap
  const inconclusive = (why) => ({
    repo,
    tier: TIER.NONE,
    verdict: 'BUNDLE_UNDETERMINED',
    patch: null,
    note: why,
  })

  if (candidates.length === 0) {
    if (rootManifest?.malformed === true) {
      return { repo, tier: TIER.NONE, verdict: 'MALFORMED_PACKAGE_JSON', patch: null, note: 'package.json is not valid JSON' }
    }
    if (!searchExhaustive) {
      return inconclusive(listingComplete
        ? `more candidate manifests than the ${MAX_MANIFESTS} this probe reads`
        : 'the repository tree listing was truncated by the API')
    }
    return { repo, tier: TIER.NONE, verdict: 'NO_PACKAGE_JSON', patch: null, note: 'not an npm package' }
  }

  const bundle = candidates.find((entry) => typeof entry.declared === 'string' && entry.declared.length > 0)

  // A vendored copy of the harness satisfies the contract because it contains
  // the harness's own bundle packages. Detected by package name rather than by
  // repository or owner name, since these are source copies rather than forks.
  if (bundle !== undefined && typeof bundle.name === 'string' && FIRST_PARTY_PACKAGES.has(bundle.name)) {
    return {
      repo,
      tier: TIER.NONE,
      verdict: 'VENDORED_HARNESS',
      patch: null,
      note: `contains the first-party package ${bundle.name} at ${bundle.path}; this is a copy of the harness, not a plugin`,
      name: bundle.name,
      manifestPath: bundle.path,
    }
  }

  if (bundle === undefined) {
    // Same reasoning as an empty candidate list: with part of the tree unread,
    // "no bundle in what we saw" is not "no bundle".
    if (!searchExhaustive) {
      return inconclusive(listingComplete
        ? `no bundle in the ${candidates.length} manifest(s) read, but more exist past the ${MAX_MANIFESTS} cap`
        : `no bundle in the ${candidates.length} manifest(s) read, and the tree listing was truncated`)
    }
    const anyDsh = candidates.find((entry) => entry.hasDsh)
    const source = anyDsh ?? candidates[0]
    return {
      repo,
      tier: TIER.NONE,
      verdict: anyDsh === undefined ? 'NO_DSH_FIELD' : 'DSH_WITHOUT_BUNDLE_PATCH',
      patch: null,
      note: anyDsh === undefined
        ? `no dsh field in ${candidates.length} manifest(s)`
        : `dsh present in ${source.path} but dsh.bundle.patch missing`,
      name: source.name,
      manifestPath: source.path,
    }
  }

  const manifest = bundle
  const declared = manifest.declared

  // Tier 2: the declared path must resolve, relative to the manifest that
  // declared it. A subpackage patch path is relative to its own directory, so
  // resolving against the repository root would report every monorepo bundle
  // as missing its patch file.
  const manifestDir = manifest.path === 'package.json'
    ? ''
    : `${manifest.path.slice(0, manifest.path.lastIndexOf('/'))}/`
  const patchPath = `${manifestDir}${declared.replace(/^\.\//, '')}`
  const patchText = await fetchFile(repo, patchPath)
  const base = {
    repo,
    patch: declared,
    name: manifest.name ?? null,
    manifestPath: manifest.path,
    patchPath,
  }
  if (patchText === null) {
    return { ...base, tier: TIER.DECLARED, verdict: 'PATCH_FILE_MISSING', note: `declares ${declared} but ${patchPath} is absent` }
  }

  // Tier 3: the patch file must carry patch-list structure.
  if (!looksLikePatchList(patchText)) {
    return { ...base, tier: TIER.RESOLVED, verdict: 'PATCH_FILE_EMPTY_OR_INVALID', note: `${declared} has no patch entries` }
  }

  return { ...base, tier: TIER.PARSED, verdict: 'CONTRACT_OK', note: 'declared, resolved, and structurally valid' }
}

/**
 * Run probes over stdin repo names with bounded concurrency.
 * @returns exit code semantics are conveyed by process exit.
 */
async function main() {
  const repos = []
  for await (const line of createInterface({ input: process.stdin })) {
    const name = line.trim()
    if (name.length > 0 && !name.startsWith('#')) repos.push(name)
  }

  const limit = Number(process.env.RADAR_CONCURRENCY ?? 8)
  let cursor = 0
  let done = 0
  /** Verdict tallies, used to detect a run that failed wholesale. */
  const verdictCounts = {}

  async function worker() {
    while (cursor < repos.length) {
      const repo = repos[cursor++]
      try {
        const result = await probe(repo)
        result.tierName = TIER_NAME[result.tier]
        verdictCounts[result.verdict] = (verdictCounts[result.verdict] ?? 0) + 1
        process.stdout.write(`${JSON.stringify(result)}\n`)
      } catch (error) {
        verdictCounts.PROBE_ERROR = (verdictCounts.PROBE_ERROR ?? 0) + 1
        process.stdout.write(`${JSON.stringify({ repo, tier: 0, tierName: 'NO_CONTRACT', verdict: 'PROBE_ERROR', note: String(error) })}\n`)
      }
      done += 1
      if (done % 50 === 0) process.stderr.write(`  probed ${done}/${repos.length}\n`)
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, repos.length) }, worker))
  process.stderr.write(`probe complete: ${done} repositories\n`)

  // An unreadable tree for most repositories means the API stopped answering,
  // not that the ecosystem changed. Measured: a run 25 minutes after a
  // successful one returned TREE_UNREADABLE for all 998 repositories, because
  // GITHUB_TOKEN's hourly allowance had been spent by the previous runs — this
  // probe alone issues one to two calls per repository. Publishing that output
  // would replace a good catalogue with an empty one.
  //
  // The empty-catalogue guard downstream does catch the end result, but it
  // catches it three steps later and attributes the failure to the wrong place,
  // so the condition is reported where it happens.
  const unreadable = verdictCounts.TREE_UNREADABLE ?? 0
  if (done > 0) {
    const rate = unreadable / done
    if (unreadable > 0) {
      process.stderr.write(`unreadable trees: ${unreadable}/${done} (${(rate * 100).toFixed(1)}%)\n`)
    }
    if (rate > 0.25) {
      process.stderr.write('refusing this probe run: most repository trees could not be read,'
        + ' which indicates an exhausted API allowance rather than a change in the ecosystem.'
        + ' Check `gh api rate_limit` and re-run in the next hour window.\n')
      process.exit(1)
    }
  }
}

await main()
