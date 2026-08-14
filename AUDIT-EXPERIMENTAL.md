# Conformance audit: experimental, not published

The audit criteria in `scripts/audit-repo.mjs` are **not** part of the published
catalogue and must not be until each criterion passes `scripts/test-audit.mjs`.

## Why this file exists

The first implementation of this auditor produced false positives on **every**
repository it was tried against — four out of four, including a `no-manifest`
verdict for a repository whose manifest exists at 2385 bytes. Publishing those
verdicts would have made specific, false technical claims about other people's
work.

Criteria count is not the goal. Precision is. `omdsh-dev/dsh-plugin-check`
applies 36 criteria to a single repository and earns them with its own test
suite; matching the count without matching the precision produces a catalogue
that is worse than having none.

## Gate

A criterion may enter the published catalogue when:

1. It appears in `fixtures/labelled.json` with hand-verified expectations and
   recorded evidence — expectations derived by reading the repository, never by
   running the auditor and recording its output.
2. `node scripts/test-audit.mjs <checkout-root>` passes.
3. Removing the criterion's implementation makes that suite **fail**. A gate
   that cannot fail is not evidence.

## Current state

19 expectations across 5 fixtures, all holding. Four defect classes were
verified detectable by injection:

| Removed behaviour | Suite result |
| --- | --- |
| bundler recognition (esbuild `bundle: true`) | fails |
| reserved-scope ownership check | fails |
| `emitDeclarationOnly` handling | fails |
| relaxed peer-dependency matching | fails |

### False-positive classes found and fixed

1. **Comments and string constants scanned as code.** `new URL('./x.ts')` in a
   doc comment and `'.ts'` as an extension constant read as real imports.
2. **Wrong authority for extension rewriting.** Guessed from build-script names
   instead of `rewriteRelativeImportExtensions` (TypeScript 5.7).
   `dsh-plugin-check` sets the flag and builds with bare `tsc` — correct, and it
   was reported as broken.
3. **Single-config and single-name assumptions.** Build settings often live in
   `tsconfig.build.json`; peers are often `@deepseek-ai/dsh-settings` rather
   than bare `cordis`.
4. **Build output required in a source checkout.** `main` pointing at an
   uncommitted `lib/` is normal practice, not a manifest defect.
5. **TypeScript checks applied to plain JavaScript.** A package that authors
   `lib/` directly has no `src/` and needs no `tsconfig.json`.

### Known coverage gap

Preferring `tsconfig.build.json` over `tsconfig.json` is **unverified**:
removing it leaves the suite green. Locking it needs a repository with two
tsconfigs, an `outDir` in `tsconfig.json`, no unresolvable `extends`, and
disagreeing layouts. A scan of the top 60 compliant plugins did not find one.
`scripts/test-audit.mjs` prints this gap on every run so it cannot be mistaken
for coverage.

## Fetching checkouts

Always use `scripts/fetch-checkout.sh`. A truncated `curl | tar` exits 0 having
extracted nothing, which turns any throttled fetch into a confident
`no-manifest` error; one such fetch during development extracted 15 of 38 files
and produced exactly that. The script distinguishes three outcomes:

| Exit | Meaning |
| --- | --- |
| 0 | complete tree, marker present |
| 1 | transfer failed — the verdict must **not** be trusted |
| 3 | complete tree, marker genuinely absent — the verdict **is** trustworthy |

Measured correction: on this platform `tar` rejects a non-archive by itself, so
tar's exit status is the load-bearing defence. `--fail` and `pipefail` make the
failure earlier and the message accurate but are not what catches truncation;
`scripts/test-fetch.sh` labels those two as configuration assertions rather than
behavioural proof.
