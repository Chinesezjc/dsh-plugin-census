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

Measured correction, from CI rather than from this machine: **tar's exit status is
not a reliable defence on either platform.** On a one-second truncation GNU tar
on the runner exits 0 and leaves 6 files behind, and bsdtar locally produced both
(exit 0, 0 files) and (exit 1, 12 files) on different runs of the same case. An
earlier version of this document claimed tar was load-bearing; that held only for
the local tar, and not even reliably there.

The fetcher therefore downloads to a file and runs `gzip -t`, which walks the
whole stream and fails on truncation, before extracting anything. `--fail` and
`pipefail` are kept as defence in depth and asserted as configuration rather than
credited with behaviour they do not provide. `scripts/test-fetch.sh` proves the
integrity gate in both directions: `gzip -t` must accept a complete archive and
reject a truncated one.

A related trap: do not force truncation with a wall-clock budget. `--max-time 1`
cuts a 5.5 MB archive short locally but completes inside the second on the
runner, so the control was testing network speed rather than behaviour.
Truncation is injected deterministically instead.

## Silent degradation

Two scripts published confident verdicts derived from a broken environment, and
both are now guarded. The pattern is worth naming because it is the failure mode
this repository is most exposed to: an unreadable input degrades to a value that
is indistinguishable from a real finding about someone else's repository.

| Script | Degraded to | Guard |
| --- | --- | --- |
| `attribute.mjs` | `confidence: none`, empty evidence — 395 of 527 entries on one run | fails above a 25% fetch-failure rate |
| `scan-decay.mjs` | `inconclusive` for 436 of 753 entries, published anyway | fails above a 40% inconclusive rate |

The decay step was additionally `continue-on-error`, so an exit code would have
been swallowed even had the scan produced one. That is removed: a guard behind
`continue-on-error` is not a guard.

Both thresholds are asserted by controls that include the rates actually
observed, so a regression that reintroduces either incident turns the suite red.

