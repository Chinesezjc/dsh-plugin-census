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

The [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic held **6081**
repositories on 2026-08-17, up from 1064 three days earlier. GitHub sorts topic
pages by stars, and the most-starred entries are the least likely to be plugins.

Measured over a 999-repository sample (the search API's per-query ceiling):

| Stars | Satisfies the plugin contract |
| --- | --- |
| 0 | 76.3% |
| 1-2 | 79.1% |
| 3-9 | 77.0% |
| 10-49 | 76.2% |
| 50+ | **52.7%** |
| all | 75.5% |

Only the top band is depressed, and its contents explain why: the
highest-starred repositories carrying this topic are mostly the *catalogues* of
it — `awesome-dsh-plugin` (6439), `AdamPlatin123/awesome-dsh-plugins` (1098),
`0xsline/awesome-deepseek-harness` (649) — plus adjacent tooling such as
`Tencent/BrowserSkill` (1089). None is a plugin, none claims to be, and all sort
above the plugins a visitor is looking for.

An earlier measurement (2026-08-14, n=999) found compliance falling
monotonically with stars, from 64.5% at zero to 36.4% above fifty. **That
pattern no longer holds** and the earlier figures should not be cited: the
ecosystem grew 5.7x in three days, and this probe now finds bundles in
subpackages, which the earlier one missed.

## Sample composition

All 998 probed repositories, by verdict:

| Verdict | Count | Share |
| --- | --- | --- |
| `CONTRACT_OK` | 753 | 75.5% |
| `NO_DSH_FIELD` | 99 | 9.9% |
| `NO_PACKAGE_JSON` | 78 | 7.8% |
| `DSH_WITHOUT_BUNDLE_PATCH` | 58 | 5.8% |
| `VENDORED_HARNESS` | 5 | 0.5% |
| `PATCH_FILE_EMPTY_OR_INVALID` | 2 | 0.2% |
| `PATCH_FILE_MISSING` | 2 | 0.2% |
| `TREE_UNREADABLE` | 1 | 0.1% |

`VENDORED_HARNESS` marks a repository that ships a copy of the harness rather
than a plugin: it satisfies the contract because it *contains* DSH's own bundle
packages. All six have `fork: false`, so they are source copies that neither an
owner check nor a fork check detects; they are identified by first-party package
name. The largest is `fufankeji/deepseek-harness-studio` at 208 stars.

## Shelf life

These figures describe one sample at one moment, and the moment is short. All 257
repositories judged non-compliant were re-probed a few hours after the first
pass: two had become compliant because their authors added `dsh.bundle` in the
interval — `songoao25/dsh-plugin-guardian` at 08:58 and
`xinyuehtx/dsh-plugin-hooks-ordering` at 07:54 on the same day. Neither change
came from a probe fix; the authors simply shipped.

Treat any number here as a reading with a timestamp, not a standing fact. The
scripts are included so the reading can be retaken rather than trusted.

The scheduled workflow demonstrates this directly: a run a few hours after the
figures above were written produced a catalogue of 742 rather than 763 entries
from the same 999-repository ceiling. Nothing in the probe changed between them —
the topic's most-recently-updated 999 repositories were simply a different set.

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

**Honest limit:** tiers 2 and 3 reject little in practice — 11 of 772 tier-1
passers fail them. Static verification is close to exhausted at tier 1, and the
remaining uncertainty can only be resolved by installing a plugin. Install
verification is not implemented; nothing here claims a plugin runs.

## Surface attribution

Each verified plugin is attributed to the surface it extends, with the evidence
ranked by strength and the confidence published alongside:

- **high** — depends on `@deepseek-ai/dsh-client-*` (client) or
  `@deepseek-ai/dsh-host-*` and host-only packages (host).
- **low** — no `@deepseek-ai/*` dependency at all; attributed from name and
  description keywords. 303 of 753 (40.2%) fall here, against 414 attributed
  from dependency evidence and 36 partially attributed.

A low-confidence attribution is a guess and is labelled as one.

## Installability

Contract compliance says a plugin declares a valid patch. It does not say the
package can be obtained. Two failure modes are decidable without installing
anything:

| Verdict | Meaning | Count |
| --- | --- | --- |
| `published` | the declared name resolves on the npm registry | 385 |
| `git-only` | absent from npm; installable from a Git specifier | 363 |
| `unpublishable-scope` | names itself under `@deepseek-ai/` from a repository outside that organisation | 5 |

A further six repositories carry `@deepseek-ai/dsh-base` verbatim. They are not
misnamed plugins but **vendored copies of the harness**, so they are classified
`VENDORED_HARNESS` and excluded from the catalogue rather than counted here.

The blocked entries are listed separately in the catalogue. They satisfy the
bundle contract, but only the DeepSeek organisation can publish to the
`@deepseek-ai` scope, so those names cannot be created by their current owners
and `dsh plugin add @deepseek-ai/...` fails for every one of them. This is a
naming defect that renaming fixes; it is not a statement about code quality.

The check deliberately does **not** flag lookalike scopes such as
`@deepseek-ai-community`. Those are separate, independently registrable scopes
whose owners can publish normally, so they are installable — confusing branding
is a different concern this catalogue does not adjudicate.

## Decay

`scripts/scan-decay.mjs` re-checks every catalogued entry and reports four
conditions, flagging and never removing: `gone` (404), `archived`, `dormant`
(no push within 30 days) and `unbundled` (the contract no longer holds). A probe
that cannot reach a conclusion is reported as `inconclusive`, never as decay,
because every decay state invites a deletion the evidence may not support.

Over all 753 entries:

| State | Count |
| --- | --- |
| `live` | 752 |
| `archived` | 1 |
| `gone` | 0 |
| `dormant` | 0 |
| `unbundled` | 0 |
| `inconclusive` | 0 |

**`dormant: 0` is a sampling artefact, not a healthy ecosystem.** The census
samples the topic by most-recently-updated, so every entry in it was pushed
within hours and dormancy is definitionally absent. Against a star-sorted sample
of the same topic, real dormancy exists and reaches 95 days
(`shanliuling/skills-link`, 187 stars). A reader should not conclude from this
table that nothing in the ecosystem has gone quiet — only that this sampling
method cannot see it.

The flagged entry: `Hanihahaha/deepseek-harness-plugins` is archived.

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

# 6. negative controls for every gate
node scripts/test-gates.mjs
node scripts/test-monorepo.mjs
node scripts/test-inconclusive.mjs
node scripts/test-decay.mjs
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

The search API returns at most 1000 results per query, so the sample is 999
unique repositories out of 6081 reported — the shortfall is an API ceiling, not
filtering. Entries are sampled by most-recently-updated.

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
- **Vendored-harness detection.** Six repositories carry `@deepseek-ai/dsh-base`
  verbatim with `fork: false`. They pass a contract check by containing DSH's own
  packages, and neither an owner check nor a fork check sees them.
- **Decay scanning that refuses to guess.** `scripts/scan-decay.mjs` reports
  `gone`, `archived`, `dormant` and `unbundled`, and reports an unreadable probe
  as `inconclusive` rather than as decay, because every decay state invites a
  deletion the evidence may not support.
- **Published distributions of the whole sample** rather than a curated
  selection: verdict shares, star-band compliance, and installability across all
  999 probed repositories, with the probe scripts included.

A deeper per-repository audit exists but is **not published** — see
[AUDIT-EXPERIMENTAL.md](AUDIT-EXPERIMENTAL.md). Its first implementation produced
false positives on every repository tested, so no criterion ships before it
passes a hand-labelled fixture suite.

## License

MIT
