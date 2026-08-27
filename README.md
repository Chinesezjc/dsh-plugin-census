# DSH Plugin Census

English | [中文](README.zh.md)

A reproducible census of the DeepSeek Harness plugin ecosystem: what the
`dsh-plugin` topic actually contains, and which entries can actually be
installed.

> **Disclaimer.** This is a personal, community-run project. It is **not** an
> official DeepSeek product and does **not** represent DeepSeek's position.
> Inclusion here is not an endorsement, and exclusion is not a judgement of
> quality. The maintainer contributes to DeepSeek Harness upstream; that does
> not make this catalogue authoritative. Verdicts are produced by the scripts in
> this repository and are reproducible — check them rather than trusting them.

## Why this exists

The [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic held **6923**
repositories on 2026-08-18, up from 1064 four days earlier. GitHub sorts topic
pages by stars, and the most-starred entries are the least likely to be plugins.

The topic is enumerated in full rather than sampled: <!-- census:begin n-enumerated -->11940<!-- census:end n-enumerated --> unique
repositories, by sharding around the search API's 1000-result per-query ceiling.
Contract probing then accumulates across runs, so the verdict figures below cover
the <!-- census:begin n-probed -->9398<!-- census:end n-probed --> repositories probed so far:

| Stars | Satisfies the plugin contract |
| --- | --- |
<!-- census:begin compliance-en -->
| 0 | 69.3% |
| 1-2 | 77.8% |
| 3-9 | 83.2% |
| 10-49 | 80.1% |
| 50+ | **58.5%** |
| all | 76.2% |
<!-- census:end compliance-en -->

Only the top band is depressed, and its contents explain why: the
highest-starred repositories carrying this topic are mostly the *catalogues* of
it — `awesome-dsh-plugin` (7773), `AdamPlatin123/awesome-dsh-plugins` (1158) —
plus adjacent tooling. None is a plugin, none claims to be, and all sort above
the plugins a visitor is looking for.

An earlier measurement (2026-08-14, n=999) found compliance falling
monotonically with stars, from 64.5% at zero to 36.4% above fifty. **That
pattern no longer holds** and the earlier figures should not be cited: the
ecosystem grew 6.5x in four days, and this probe now finds bundles in
subpackages, which the earlier one missed.

## Sample composition

All <!-- census:begin n-probed -->9398<!-- census:end n-probed --> probed repositories, by verdict:

| Verdict | Count | Share |
| --- | --- | --- |
<!-- census:begin verdicts -->
| `CONTRACT_OK` | 7140 | 76.0% |
| `NO_DSH_FIELD` | 915 | 9.7% |
| `NO_PACKAGE_JSON` | 679 | 7.2% |
| `DSH_WITHOUT_BUNDLE_PATCH` | 571 | 6.1% |
| `VENDORED_HARNESS` | 34 | 0.4% |
| `PATCH_FILE_EMPTY_OR_INVALID` | 25 | 0.3% |
| `MALFORMED_PACKAGE_JSON` | 15 | 0.2% |
| `PATCH_FILE_MISSING` | 10 | 0.1% |
| `BUNDLE_UNDETERMINED` | 4 | 0.0% |
| `TREE_UNREADABLE` | 4 | 0.0% |
| `FIRST_PARTY_HARNESS` | 1 | 0.0% |
<!-- census:end verdicts -->

Probing accumulates: each run spends its API allowance on repositories never
probed, then on the stalest, so this table covers a growing share of the
<!-- census:begin n-enumerated -->11940<!-- census:end n-enumerated --> enumerated repositories rather than a fresh sample each time.

`VENDORED_HARNESS` marks a repository that ships a copy of the harness rather
than a plugin: it satisfies the contract because it *contains* DSH's own bundle
packages. All <!-- census:begin n-vendored -->34<!-- census:end n-vendored --> have `fork: false`, so they are source copies that neither an
owner check nor a fork check detects; they are identified by first-party package
name. The largest is `fufankeji/deepseek-harness-studio` at 260 stars.

## Shelf life

These figures describe one sample at one moment, and the moment is short. All 257
repositories judged non-compliant were re-probed a few hours after the first
pass: two had become compliant because their authors added `dsh.bundle` in the
interval — `songoao25/dsh-plugin-guardian` at 08:58 and
`xinyuehtx/dsh-plugin-hooks-ordering` at 07:54 on the same day. Neither change
came from a probe fix; the authors simply shipped.

Treat any number here as a reading with a timestamp, not a standing fact. The
scripts are included so the reading can be retaken rather than trusted.

Earlier revisions of this README reported catalogue sizes that moved by tens of
entries between runs hours apart. That variation was an artefact of sampling one
page of the topic: each run drew a different set. Enumeration now covers the
whole topic, so a change between runs reflects the ecosystem rather than which
repositories happened to be sampled — but the timestamp still matters, because
the topic grew 6.5x in four days.

## What "contract-verified" means

Verification mirrors what DSH actually enforces when it loads a bundle, in
`packages/boot/app-boot/src/profile.ts:388-397`. Three tiers, each a separate
failure the loader would raise:

| Tier | Check | Loader behaviour without it |
| --- | --- | --- |
| 1 `DECLARED` | `package.json` has `dsh.bundle.patch` | throws at `profile.ts:391-393` |
| 2 `RESOLVED` | the declared path exists | fails to read at `profile.ts:395` |
| 3 `PARSED` | the patch file holds patch entries | fails to parse at `profile.ts:396` |

Only `PARSED` entries are listed as plugins.

**Honest limit:** tiers 2 and 3 reject little in practice — <!-- census:begin n-tier23-fail -->35<!-- census:end n-tier23-fail --> of the
<!-- census:begin n-declared -->1734<!-- census:end n-declared --> repositories that declare a patch fail them.
Static verification is close to exhausted at tier 1, and the remaining
uncertainty can only be resolved by installing a plugin. Install verification is
not implemented; nothing here claims a plugin runs.

## Surface attribution

Each verified plugin is attributed to the surface it extends, with the evidence
ranked by strength and the confidence published alongside:

| Confidence | Basis | Count | Share |
| --- | --- | --- | --- |
<!-- census:begin surface-en -->
| `high` | depends on `@deepseek-ai/dsh-client-*` (client) or `@deepseek-ai/dsh-host-*` and host-only packages (host) | 4229 | 59.2% |
| `declared` | the plugin's own `dsh.client` or `dsh.host` block declares the surface | 1734 | 24.3% |
| `medium` | depends on `@deepseek-ai/*`, but no dependency distinguishes client from host — surface `indeterminate` | 269 | 3.8% |
| `low` | no `@deepseek-ai/*` dependency; surface guessed from a name or description keyword | 629 | 8.8% |
| `none` | no dependency evidence and no keyword match — **not attributed at all** | 279 | 3.9% |
<!-- census:end surface-en -->

The <!-- census:begin n-dep-evidence -->4498<!-- census:end n-dep-evidence --> `high` and `medium` rows rest on an installed
dependency. A further <!-- census:begin n-declared -->1734<!-- census:end n-declared --> are `declared`: the plugin's own `dsh`
block names the surface, which is the author's statement rather than an installed
package, so it ranks below dependency evidence and above a guess.

Attribution read only dependencies until recently, which discarded those
declarations and published a guess in their place. **52% of those guesses were
wrong about the surface** — 147 of 283 changed once the declaration was read, so
this was a correctness defect rather than a labelling one.

A `low` attribution is a guess from a word in the repository name and is labelled
as one. A `none` row carries surface `indeterminate` and empty evidence: it is an
absence of attribution, not a weak attribution, and it should not be read as a
statement about the plugin.

**The remaining guesses are near the floor of what this method can decide.** The
`low` and `none` rows that survive have only a `dsh.bundle` block and, usually, no
dependencies at all, so there is nothing left in the manifest to read. Attributing
them from the seams named in their bundle patch file was tested and rejected: over
30 plugins whose surface is already known, 23 had no `inject` block and exactly one
yielded a seam, so the rule could not be calibrated against anything. Resolving
these would need evidence this census does not collect — installing the plugin, or
reading its source.

## Installability

Contract compliance says a plugin declares a valid patch. It does not say the
package can be obtained. Two failure modes are decidable without installing
anything:

| Verdict | Meaning | Count |
| --- | --- | --- |
<!-- census:begin install-en -->
| `published` | the declared name resolves on the npm registry | 3397 |
| `git-only` | absent from npm; installable from a Git specifier | 3603 |
| `unpublishable-scope` | names itself under `@deepseek-ai/` from a repository outside that organisation | 138 |
| `unknown` | **the registry did not answer** — not a statement about the package | 2 |
<!-- census:end install-en -->

A further <!-- census:begin n-vendored -->34<!-- census:end n-vendored --> repositories carry `@deepseek-ai/dsh-base` verbatim. They are
not misnamed plugins but **vendored copies of the harness**, so they are
classified `VENDORED_HARNESS` and excluded from the catalogue rather than
counted here.

The blocked entries are listed separately in the catalogue. They satisfy the
bundle contract, but only the DeepSeek organisation can publish to the
`@deepseek-ai` scope, so those names cannot be created by their current owners
and `dsh plugin add @deepseek-ai/...` fails for every one of them. This is a
naming defect that renaming fixes; it is not a statement about code quality.

The check deliberately does **not** flag lookalike scopes such as
`@deepseek-ai-community`. Those are separate, independently registrable scopes
whose owners can publish normally, so they are installable — confusing branding
is a different concern this catalogue does not adjudicate.

## Pairwise ranking, still converging

The 1-5 quality score above cannot separate plugins: 97% of reviews land on 4 or 5,
and the mean moves only 0.7 points between plugins under 10 files and plugins of 31
to 100. The model perceives the difference and does not express it.

Asking which of two plugins a competent user would trust does separate them. Two
plugins both scored 5 — `FengYangXun123/dsh-opencode-usage` at 7 files and
`GongYuanCaiJi/dsh-claude-code-templates` at 5057 — produced a clear winner, and the
smaller one won: 5031 of the larger repository's files sit under `skills/` and 3
under `lib/`, so it mostly vendors someone else's work. Absolute scoring was
flattened by size; the comparison was not.

Ratings are Elo, updated only by comparisons that actually ran. **No target
distribution is imposed.** Forcing a normal curve would mean moving several hundred
plugins to a lower score than any evidence supports, about repositories this census
does not own.

**These ratings are not yet a ranking.** <!-- census:begin n-rated -->332<!-- census:end n-rated --> entries have a rating,
averaging <!-- census:begin rating-matches-mean -->1.0<!-- census:end rating-matches-mean --> comparisons each with a maximum of
<!-- census:begin rating-matches-max -->1<!-- census:end rating-matches-max -->, and the spread is only
<!-- census:begin rating-spread -->1492 to 1508<!-- census:end rating-spread -->. Elo needs roughly 10 to 20 matches before a rating
carries meaning, so the order below is close to arbitrary at present and is published
to show the mechanism accumulating rather than to recommend anything. Each row states
its match count for exactly that reason.

| Plugin | Rating | Matches |
| --- | --- | --- |
<!-- census:begin rating-top -->
| [0xKcyzz/dsh-local-project](https://github.com/0xKcyzz/dsh-local-project) | 1508 | 1 |
| [1052326311/dsh-instruction-audit](https://github.com/1052326311/dsh-instruction-audit) | 1508 | 1 |
| [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | 1508 | 1 |
| [2128627267/dsh-qapproval-timeout](https://github.com/2128627267/dsh-qapproval-timeout) | 1508 | 1 |
| [2h0n/dsh-web-notification](https://github.com/2h0n/dsh-web-notification) | 1508 | 1 |
| [863683348/dsh-memory-setup](https://github.com/863683348/dsh-memory-setup) | 1508 | 1 |
| [863683348/dsh-plugin-gate](https://github.com/863683348/dsh-plugin-gate) | 1508 | 1 |
| [A-G-guy/dsh-plus](https://github.com/A-G-guy/dsh-plus) | 1508 | 1 |
| [aa2246740/dsh-oauth-login](https://github.com/aa2246740/dsh-oauth-login) | 1508 | 1 |
| [AIMFllyYS/dsh-operating-context](https://github.com/AIMFllyYS/dsh-operating-context) | 1508 | 1 |
| [AKS1st/dsh-sysmon](https://github.com/AKS1st/dsh-sysmon) | 1508 | 1 |
| [AlphaGodzilla/ag-dsh-coding-plugins](https://github.com/AlphaGodzilla/ag-dsh-coding-plugins) | 1508 | 1 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 1508 | 1 |
| [Apageoflove/DSH-arena](https://github.com/Apageoflove/DSH-arena) | 1508 | 1 |
| [beimianism/Hermes-to-DSH](https://github.com/beimianism/Hermes-to-DSH) | 1508 | 1 |
<!-- census:end rating-top -->

Comparisons are restricted to the entries the absolute score could not separate,
meaning 4 and 5 together: 97% of reviews land on one of those two, and 9 of 116
entries sampled more than once scored both, so a threshold at 5 alone would select the
pool partly by noise. Entries at 3 or below are excluded because the score already
separated them. Without that bound, pairing the least-compared entries first
spread across the whole catalogue and never deepened: after two runs every rated entry
had exactly 1 match, and reaching 10 would have taken about 453 runs. Comparisons run
alongside enumeration, which spends a different API allowance, so 150 of them add
about 2% to the run rather than a separate 13 minutes. Some pairs
never resolve: one produced a verdict in 2 of 8 identical attempts, because the
model's reasoning competes with its answer for the token budget. An unresolved pair
costs coverage, not correctness — no rating moves.

## What the published package declares

Contract verification reads a repository's `package.json`. A user runs
`dsh plugin add <name>`, which installs the published tarball. **Those are
different artefacts and they disagree.**

Over <!-- census:begin n-npm-checked -->3397<!-- census:end n-npm-checked --> packages that resolve on npm:

| State | Meaning | Count | Share |
| --- | --- | --- | --- |
<!-- census:begin npm-manifest -->
| `bundle-ok` | the published manifest declares `dsh.bundle` | 3035 | 89.3% |
| `bundle-missing` | **the published manifest declares no `dsh.bundle`** — DSH refuses it as a profile bundle | 174 | 5.1% |
| `package-missing` | the declared name no longer resolves on the registry | 17 | 0.5% |
| `unreadable` | the registry could not be read; not a statement about the package | 171 | 5.0% |
<!-- census:end npm-manifest -->

<!-- census:begin n-npm-broken -->191<!-- census:end n-npm-broken --> of them (<!-- census:begin pct-npm-broken -->5.6%<!-- census:end pct-npm-broken -->) **cannot be loaded by
name**, while satisfying the contract in their repository. `bobcat848/dsh-calculator`
declares `dsh.bundle` and a full `dsh.client` block in its repository, and its
published `dsh-calculator@0.0.1` declares no `dsh` field at all; `orriduck/dsh-tui`
is the same at `0.2.19`. Installing one and registering it as a profile bundle
fails with `declares no dsh.bundle in its package.json`, verified against
`@deepseek-ai/dsh@0.1.0-rc.7`.

This is a publish-time gap rather than a mistake in the repository — typically a
build that rewrites `package.json` without carrying the `dsh` block through. The
catalogue reports it rather than removing the entries, because the repository does
satisfy the contract and the fix belongs to the author.

## Decay

`scripts/scan-decay.mjs` re-checks catalogued entries and reports four
conditions, flagging and never removing: `gone` (404), `archived`, `dormant`
(no push within 30 days) and `unbundled` (the contract no longer holds). A probe
that cannot reach a conclusion is reported as `inconclusive`, never as decay,
because every decay state invites a deletion the evidence may not support.

Over all <!-- census:begin n-catalog-rows -->7140<!-- census:end n-catalog-rows --> entries:

| State | Count |
| --- | --- |
<!-- census:begin decay -->
| `live` | 7023 |
| `archived` | 17 |
| `gone` | 12 |
| `unbundled` | 7 |
| `dormant` | 0 |
| `inconclusive` | 81 |
<!-- census:end decay -->

**`dormant: 0` reflects the topic's age, not its health.** The oldest push among
the catalogued entries is <!-- census:begin max-age-days -->13<!-- census:end max-age-days --> days old, so a 30-day dormancy threshold
cannot fire yet. This is no longer the sampling artefact it once was — the
enumeration covers the whole topic rather than its most-recently-updated page —
but the figure still says nothing about long-term maintenance, because nothing in
this ecosystem has had time to go quiet.

**`inconclusive` is <!-- census:begin n-inconclusive -->81<!-- census:end n-inconclusive --> entries (<!-- census:begin pct-inconclusive -->1.1%<!-- census:end pct-inconclusive -->), and that is a
limitation of the scan rather than a finding about those repositories.** The scan
spends the same hourly API allowance as the probe, and a run that exhausts it
reports what it could not check instead of guessing. The refusal threshold is 40%,
so this run published; a reader should treat the decay table as covering the
entries that were actually reachable.

The scan is incremental for the same reason the probe is: re-checking every
entry cost two API calls per catalogued plugin and grew with the catalogue,
reaching 85% of the hourly allowance and failing a scheduled run outright at
45.4% inconclusive. Each run now checks a bounded batch, oldest results first,
and carries the rest forward, so a state in this table may have been observed
on an earlier run than the figures above.

<!-- census:begin decay-flagged-en -->
The 36 entries flagged as decayed (`inconclusive` is not decay and is excluded):

| Entry | State |
| --- | --- |
| `1HelloMan1/dsh-stats-dashboard` | archived — repository is archived |
| `brunhildzhou/dsh-all-warmup` | archived — repository is archived |
| `ccch1mneyyy/dsh-working-activity` | archived — repository is archived |
| `Diluka/dsh-side-session` | archived — repository is archived |
| `guaguasong/dsh-attachment-s3` | archived — repository is archived |
| `haiyoucuv/dsh-model-provider-label` | archived — repository is archived |
| `Hanihahaha/deepseek-harness-plugins` | archived — repository is archived |
| `IZRINO/dsh-token-stats` | archived — repository is archived |
| `myg133/anspire-ai-search` | archived — repository is archived |
| `nathannli/dsh-fish-shell` | archived — repository is archived |
| `nickhelion/dsh-serverchan-notify` | archived — repository is archived |
| `orangeofcarl0-sys/dsh-fork-perf` | archived — repository is archived |

...and 24 more in `data/decay.jsonl`.
<!-- census:end decay-flagged-en -->

## Quality review

Everything above is decidable. This section is not: `scripts/ai-review.mjs`
asks a model to score a plugin 1-5 on how much a competent DSH user would trust
it, and publishes the result as the subjective judgement it is. The rubric lives
in the script, and every review records the commit SHA it read, the SHA of the
README bytes it was shown, and the prompt version that produced it, so any score
can be re-derived from that exact commit.

A published score is the **mean of repeated samples**, not a single verdict. Each
run re-draws its sample, so an entry drawn again is scored again and the scores
accumulate; the record carries the mean, the number of runs, and every raw score.
Samples taken under a different prompt version or against a different commit are
discarded rather than averaged in.

This is a correction, not a refinement. Scoring once and never re-asking assumed
the verdict is a function of the content. It is not: `dsh-toolkit` and `dsh-TUI`
once scored 4 and 3 on an identical commit SHA and identical README bytes, and
the first entry to be drawn twice under the new mechanism
(`wangzhuo-coding/geo-content-optimizer`) scored 5 then 4 on unchanged bytes.

Over <!-- census:begin n-reviewed -->1078<!-- census:end n-reviewed --> reviewed entries, by mean score:

| Score | Meaning | Count | Share |
| --- | --- | --- | --- |
<!-- census:begin scores-en -->
| 5 | substantial, documented, tested | 547 | 50.7% |
| 4 | solid and usable | 503 | 46.7% |
| 3 | ordinary, thin, undocumented | 18 | 1.7% |
| 2 | barely a plugin | 8 | 0.7% |
| 1 | empty or broken | 2 | 0.2% |
<!-- census:end scores-en -->

**This distribution is the finding, and it makes the score nearly useless as a
filter.** Almost nothing scores below 4. Two explanations were tested and only
one survived:

- *The rubric cannot reach low scores.* False. Given a synthetic 3-file plugin
  with an 18-byte README and no dependencies, the same prompt returns 2.
- *The population is already filtered.* Supported. Every entry here cleared all
  three tiers of the bundle contract, which excludes stubs before review begins.

Two hand-checks confirmed the scores rather than the suspicion that produced
them. `fengs2021/dsh-plugin-catalog` has 5 files and no tests, which looks thin
until the files are opened: 30 KB of implementation across `lib/index.js` and
`lib/client.js`, two documented HTTP endpoints, and a rollback path for its only
write. It scored 4, correctly. `AngelosZou/dsh-python-env` has a null GitHub
description — and 42 files, 21 `lib/` modules, 12 test files, a CHANGELOG and
bilingual docs. It scored 5, correctly. **File count and description length are
bad proxies for depth**, which is the reason a model is asked at all.

Sampling is star-neutral by construction, because an earlier version of this
feature was not: selecting the catalogue head drew a sample averaging 1055 stars
from a catalogue averaging 26 and containing none of its 326 zero-star entries.
Selection is now a seeded shuffle over repository names, re-drawn per run. The
published sample has median 2 stars and includes 21 zero-star entries of 79.

**Repeated samples agree more often than not.** Of the <!-- census:begin n-multi -->116<!-- census:end n-multi --> entries sampled
more than once, <!-- census:begin n-identical -->104<!-- census:end n-identical --> returned an identical score and
<!-- census:begin n-disagree -->12<!-- census:end n-disagree --> moved, with a mean spread of <!-- census:begin mean-spread -->0.11<!-- census:end mean-spread --> points and a
maximum of <!-- census:begin max-spread -->2<!-- census:end max-spread -->. An earlier reading of this table, taken when only two
entries had been sampled twice and both had moved, described the scores as noisy;
that reading was too small to support the claim and this one supersedes it.

The figure is still provisional. Repeat samples accumulate only where two draws
collide, so the count grows slowly, and a single-run score (`runs: 1`) remains one
observation rather than a stable value — prefer entries with a higher `runs`
count.

Coverage is <!-- census:begin n-reviewed -->1078<!-- census:end n-reviewed --> of <!-- census:begin n-catalogued -->7140<!-- census:end n-catalogued --> and grows with each scheduled run,
which reviews up to 180 entries under a seed derived from the hour. The batch is
the smaller of that cap and what the remaining hourly API allowance affords, and
the reviewer stops at a 15-minute deadline so a slow run cannot exceed the job
timeout and take the census down with it.

Reviews run in a pool of four rather than one at a time, measured at 4.83 seconds
each against the live endpoint instead of 17.6 sequentially. Output order follows
the draw, not completion, so the same seed produces byte-identical ordering. A failed review is recorded with
`reviewed: false` and no score, and a run in which more than 30% of reviews fail
exits non-zero rather than publishing a transport failure as an opinion about
someone's code.

The reviewer calls the Messages API directly when `CENSUS_API_KEY` is set, and
falls back to a local model CLI otherwise. The scheduled workflow uses the API
path and **cannot fail the job**: the census is decidable evidence and the review
is an opinion, so a model outage leaves `data/reviews.jsonl` untouched rather than
blocking the catalogue from publishing.

## Reproducing

```sh
# 1. collect repositories carrying the topic
gh api "search/repositories?q=topic:dsh-plugin&sort=updated&per_page=100&page=1" > /dev/null

# 2. three-tier contract probe
node scripts/probe-contract.mjs < repos.txt > data/contract.jsonl

# 3. surface attribution
node scripts/attribute.mjs < data/contract.jsonl > data/surface.jsonl

# 4. installability (npm registry + reserved-scope check)
node scripts/installability.mjs < data/contract.jsonl > data/installability.jsonl

# 5. decay scan over the catalogue
node scripts/scan-decay.mjs < data/catalog.jsonl > data/decay.jsonl

# 6. model quality review (needs a model CLI; CENSUS_MODEL_CLI overrides `claude`)
# change the seed between runs: draws overlap, and overlapping entries average
node scripts/ai-review.mjs --limit 20 --seed 1 \
  --existing data/reviews.jsonl < data/catalog.jsonl > data/reviews.next.jsonl

# 7. negative controls for every gate
node scripts/test-gates.mjs
node scripts/test-monorepo.mjs
node scripts/test-inconclusive.mjs
node scripts/test-decay.mjs
node scripts/test-attribution.mjs
node scripts/test-queue.mjs
node scripts/test-review.mjs
./scripts/test-fetch.sh
```

`scripts/test-gates.mjs` exists because a gate that cannot fail is not a gate.
It asserts the tier-3 predicate rejects empty, whitespace-only, comment-only,
and prose files, and that the reserved-scope rule flags foreign owners while
leaving the entitled owner, unrelated scopes, and lookalike scopes alone. Both
gates carry a sentinel that fails if the rule is ever made unconditionally
permissive, and both were verified by injecting a defect and confirming the
suite turns red.

## Data

| File | Contents |
| --- | --- |
| `data/repos-raw.jsonl` | repository metadata as returned by the search API |
| `data/contract-v3.jsonl` | three-tier contract verdicts |
| `data/surface-v3.jsonl` | surface attribution with confidence |
| `data/installability-v3.jsonl` | npm resolution and reserved-scope verdicts |
| `data/catalog.jsonl` | joined, classified catalogue |
| `data/decay.jsonl` | per-entry decay state |
| `data/reviews.jsonl` | model quality scores (mean, run count, raw samples), pinned to a commit and prompt version |
| `data/npm-manifest.jsonl` | what each published package declares, versus its repository |
| `data/ratings.jsonl` | Elo ratings from pairwise comparisons, with each entry's match count |

The search API returns at most 1000 results per query. `scripts/enumerate-topic.mjs`
shards around that ceiling by star bucket and then by creation day, reaching
<!-- census:begin n-enumerated -->11940<!-- census:end n-enumerated --> unique repositories, the whole topic rather than a sample.
Day boundaries come from result counts rather than sort order, because this
search backend does not order by creation date.

## Related projects

Several catalogues already cover this ecosystem, with different tradeoffs:

- [`AdamPlatin123/awesome-dsh-plugins`](https://github.com/AdamPlatin123/awesome-dsh-plugins)
  — runtime-level testing (installs into DSH, drives a local model, observes
  tool invocation) via local cron rather than Actions. The most thorough
  verification in the ecosystem.
- [`Sunrisepeak/dsh-index`](https://github.com/Sunrisepeak/dsh-index) — scheduled
  discovery workflow with `pnpm pack` validation and stale-pin alarms.
- [`wangshunnn/oh-my-dsh`](https://github.com/wangshunnn/oh-my-dsh) — registry
  refreshed every eight hours from `topic:dsh-plugin`, with schema validation.

This project does not compete on per-repository depth, and two of the projects
above are ahead of it on criteria:

- [`awesome-dsh-plugin/awesome-dsh-plugin`](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
  (6439 stars) runs a submission gate on every PR (`scripts/check-submission.mjs`):
  `dsh.bundle` anywhere in the tree, repository age, commit count. Its tree walk
  is **more careful than this one** — it treats a truncated tree or a manifest
  count above its cap as *unknown* rather than absent, which this probe does not.
  It also resolves npm publication (`scripts/probe-npm.mjs`) and guards against
  name squatting by checking that a published package points back at the same
  repository. Roughly 1300 submissions have passed through it.
- [`omdsh-dev/dsh-plugin-check`](https://github.com/omdsh-dev/dsh-plugin-check)
  applies **36 criteria** to a single repository — manifest protocol, patch
  structure, build layout, TypeScript imports, row-id registration — far finer
  than the three contract tiers published here.

What remains distinct here:

- **Unsolicited coverage.** Both projects above examine repositories that are
  submitted to them. This one probes a topic-wide sample regardless of whether
  anyone submitted it, so it measures the ecosystem rather than its inbox.
- **Vendored-harness detection.** Five repositories in this sample carry
  `@deepseek-ai/dsh-base` verbatim with `fork: false`, and more exist outside it.
  They pass a contract check by containing DSH's own packages, and neither an
  owner check nor a fork check sees them.
- **Decay scanning that refuses to guess.** `scripts/scan-decay.mjs` reports
  `gone`, `archived`, `dormant` and `unbundled`, and reports an unreadable probe
  as `inconclusive` rather than as decay, because every decay state invites a
  deletion the evidence may not support.
- **Published distributions of the whole sample** rather than a curated
  selection: verdict shares, star-band compliance, and installability across all
  <!-- census:begin n-probed -->9398<!-- census:end n-probed --> probed repositories, with the probe scripts included.

A deeper per-repository audit exists but is **not published** — see
[AUDIT-EXPERIMENTAL.md](AUDIT-EXPERIMENTAL.md). Its first implementation produced
false positives on every repository tested, so no criterion ships before it
passes a hand-labelled fixture suite.

## License

MIT
