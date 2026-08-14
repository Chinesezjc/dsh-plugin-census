# DSH Plugin Radar

Contract-verified, category-sorted index of the DeepSeek Harness plugin ecosystem.

> **Disclaimer.** This is a personal, community-run project. It is **not** an
> official DeepSeek product and does **not** represent DeepSeek's position.
> Inclusion here is not an endorsement, and exclusion is not a judgement of
> quality. The maintainer contributes to DeepSeek Harness upstream; that does
> not make this catalogue authoritative. Verdicts are produced by the scripts in
> this repository and are reproducible — check them rather than trusting them.

## Why this exists

The [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic holds over a
thousand repositories, and GitHub sorts topic pages by stars. Measured across
999 of them, contract compliance runs **opposite** to star count:

| Stars | Satisfies the plugin contract |
| --- | --- |
| 0 | 64.5% |
| 1–2 | 61.9% |
| 3–9 | 54.6% |
| 10–49 | 39.6% |
| 50+ | **36.4%** |

So the entries a visitor sees first are the least likely to be installable
plugins. The highest-starred repository carrying the topic is DeepSeek Harness
itself; the second is a Python skill collection. Neither is a plugin. That is
the problem this index addresses — not that the topic is abused, but that its
default ordering inverts usefulness.

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

**Honest limit:** tiers 2 and 3 reject almost nothing in practice — 596 of 597
tier-1 passers cleared both. Static verification is close to exhausted at tier 1,
and the remaining uncertainty can only be resolved by installing a plugin.
Install verification is not implemented yet; nothing in this repository currently
claims a plugin runs.

## Surface attribution

Each verified plugin is attributed to the surface it extends, with the evidence
ranked by strength and the confidence published alongside:

- **high** — depends on `@deepseek-ai/dsh-client-*` (client) or
  `@deepseek-ai/dsh-host-*` and host-only packages (host).
- **low** — no `@deepseek-ai/*` dependency at all; attributed from name and
  description keywords. 22.6% of verified plugins fall here.

A low-confidence attribution is a guess and is labelled as one.

## Reproducing

```sh
# 1. collect repositories carrying the topic
gh api "search/repositories?q=topic:dsh-plugin&sort=updated&per_page=100&page=1" > /dev/null

# 2. three-tier contract probe
node scripts/probe-contract.mjs < repos.txt > data/contract.jsonl

# 3. surface attribution
node scripts/attribute.mjs < data/contract.jsonl > data/surface.jsonl

# 4. negative controls for the tier-3 gate
node scripts/test-gates.mjs
```

`scripts/test-gates.mjs` exists because a gate that cannot fail is not a gate.
It asserts the tier-3 predicate rejects empty, whitespace-only, comment-only,
and prose files, and carries a sentinel that fails if the predicate is ever
made unconditionally permissive.

## Data

| File | Contents |
| --- | --- |
| `data/repos-raw.jsonl` | repository metadata as returned by the search API |
| `data/contract-v2.jsonl` | three-tier contract verdicts |
| `data/surface.jsonl` | surface attribution with confidence |
| `data/catalog.jsonl` | joined, classified catalogue |

Search API returns at most 1000 results per query, so the sample is 999 unique
repositories out of a reported 1064 — the shortfall is an API limit, not
filtering.

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

This project's distinct contribution is contract verification traced to DSH
source, surface attribution with published confidence, and compliance-based
rather than star-based ordering.

## License

MIT
