# DSH Plugin Catalogue

Generated 2026-08-17 from 763 contract-verified repositories.

Every entry below satisfies all three tiers of the bundle contract DSH enforces
in `packages/boot/app-boot/src/profile.ts:388-397`. Contract verification is
static: it proves a plugin *declares* a resolvable, structurally valid patch,
not that it installs or runs. No install-and-run verification is claimed.

The **Install** column reports how a plugin can be obtained: `npm` when the
declared package name resolves on the npm registry, `Git only` when it does
not (a Git specifier still works), and **blocked** when the name cannot be
published at all.

Ordering is by installability, then attribution confidence, then stars.

## Verified attribution

Surface established from `@deepseek-ai/*` dependency evidence.

### Host plugins (245)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Host | `@deepseek-harness-tui/dsh-tui` | npm | 1691 | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured  |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | Host | `@agentrq/dsh-plugin-agentrq` | npm | 1074 | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agent |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Host | `@huiliyi37/dsh-tianshu-tui` | npm | 196 | dsh-tianshu-tui — 是官方 Dsh web端的交互式终端极简风格 UI 插件。以自研ansi为渲染核心，极度丝滑流畅，在官方的基础上增加了TDD、证据门、视觉图像模块等工作流。 |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Host | `@nanmicoder/dsh-auto-mode` | npm | 76 | Safe automatic permissions for DeepSeek Harness. |
| [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | Host | `@tencent-connect/dsh-qqbot` | npm | 54 | 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件 |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Host | `ax-feishu-bridge` | npm | 29 | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Host | `dsh-code` | npm | 24 | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制与Codex CLI 、Claude Code 的优秀机制，打造的 DSH-Code. （ |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Host | `billion-context-dsh` | npm | 20 | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides wh |
| [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) | Host | `@modusensus/dsh-mneme` | npm | 20 | Structured memory engine for DeepSeek Harness. Offline semantic search, entity-attribute-timeline, autoDream s |
| [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Host | `pi2dsh` | npm | 20 | Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plu |
| [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | Host | `dsh-im-gateway` | npm | 20 | 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 \| Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents t |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | Host | `dsh-lark-bot` | npm | 19 | dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃 |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | Host | `@zseven-w/dsh-crew` | npm | 17 | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | Host | `@alib8b8/dsh-plugin-aflare` | npm | 11 | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · |
| [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) | Host | `@xlight-oss/visionary-dsh` | npm | 11 | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Host | `dsh-sentinel` | npm | 10 | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the  |
| [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | Host | `dsh-plugin-writing-guard` | npm | 10 | Deterministic manuscript integrity guard for AI-assisted academic revision - protects scientific facts, claim  |
| [XMoon/dsh-pi-tui](https://github.com/XMoon/dsh-pi-tui) | Host | `@xmoon76/dsh-pi-tui` | npm | 9 | A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui |
| [EchoUser005/dsh-fate-spectrum](https://github.com/EchoUser005/dsh-fate-spectrum) | Host | `dsh-fate-spectrum` | npm | 7 | DeepSeek Harness plugin for Bazi & Zi Wei Dou Shu — deterministic, offline fate-chart calculation for AI agent |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Host | `dsh-claude-move` | npm | 7 | Four-source migration wizard for DeepSeek Harness: move Claude Code, Codex, OpenCode and Hermes sessions, memo |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Host | `dsh-checkpoint-rewind` | npm | 6 | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary  |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Host | `dsh-better-edit` | npm | 6 | Hash-anchored read/edit/batch_edit/undo_last_edit tools for DeepSeek Harness (dsh) — dsh port of pi-hashline-e |
| [sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) | Host | `dsh-win32` | npm | 6 | 在 Windows 上把 DSH 用起来。一行装好极简模式的持久 shell，沙箱内也能用 \| Get DSH working on Windows: persistent shell for Minimal mode |
| [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | Host | `dsh-usage-billing` | npm | 5 |  |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | Host | `dsh-github-connect` | npm | 5 | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, cre |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | Host | `dsh-plugin-deepeye` | npm | 4 | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analys |
| [MimicHunterZ/dsh-agent-compact](https://github.com/MimicHunterZ/dsh-agent-compact) | Host | `@mimichunterz/agent-compact` | npm | 4 | DSH plugin for agent-driven span compaction: compress chosen conversation spans into self-written checkpoints  |
| [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | Host | `dsh-background-agents` | npm | 4 | Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watc |
| [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Host | `dsh-doublecheck` | npm | 4 | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineer |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | Host | `dsh-lsp-actions` | npm | 4 | LSP action surface for DeepSeek Harness: diagnostics, formatting, completion, code actions, symbols, signature |
| [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) | Host | `@picgo/dsh-plugin` | npm | 4 | Upload images and files to your image host from DeepSeek Harness, powered by PicGo |
| [balcoz/dsh-ocr-local](https://github.com/balcoz/dsh-ocr-local) | Host | `dsh-ocr-local` | npm | 4 | Local OCR plugin for DeepSeek Harness — paste an image, get its text via PP-OCRv5 + ONNX Runtime, fully offlin |
| [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) | Host | `dsh-obsidian-assistant` | npm | 4 | DeepSeek Harness 插件（Cordis toolset）：操作本地 Obsidian 知识库（vault），提供搜索、读写笔记、双向链接 / 关系图谱、批量整理，并通过 Obsidian 的 "Local  |
| [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | Host | `dsh-quant` | npm | 4 | dsh plugin: quantitative tools for agents — market data (Binance public API), technical indicators (SMA/EMA/RS |
| [IAMLieutenant/dsh-tool-user-memory](https://github.com/IAMLieutenant/dsh-tool-user-memory) | Host | `dsh-tool-user-memory` | npm | 3 | DeepSeek Harness 用户记忆插件 |
| [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) | Host | `dsh-model-failover` | npm | 3 | Two-level model circuit breaker with failover for DeepSeek Harness: trip a model or a whole provider after rep |
| [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) | Host | `dsh-vault` | npm | 3 | Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI |
| [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | Host | `@perrylink/dsh-github` | npm | 3 | Official-grade GitHub CI for DeepSeek Harness: composite action.yml, PR review bot with idempotent inline comm |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Host | `dsh-memento` | npm | 3 | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.me |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Host | `dsh-wecom` | npm | 3 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Host | `oh-my-dsh` | npm | 3 | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) | Host | `@dshhubs/plugin-search` | npm | 3 | Discover The Best DSH plugins |
| [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) | Host | `@elementor-i/dsh-agentmemory` | npm | 3 | agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the loc |
| [GIT121995/dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) | Host | `dsh-memory-gate` | npm | 2 | Retrieved ≠ injected: CBDC-gated memory for DeepSeek Harness — decides how memory is USED (use/verify/ignore + |
| [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Host | `@tingrudeng/dsh-feishu-bot` | npm | 2 | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu |
| [lqhl/dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Host | `dsh-pi-tui` | npm | 2 |  |
| [1264459640/dsh-trellis](https://github.com/1264459640/dsh-trellis) | Host | `dsh-trellis` | npm | 1 | Self-contained Trellis workflow trigger for DeepSeek Harness (DSH / Cordis) |
| [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | Host | `dsh-python-env` | npm | 1 |  |
| [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) | Host | `dshmarketplace-plugin` | npm | 1 | Browse and install DSH plugins from inside DeepSeek Harness. /store, a settings tab, and agent tools — bilingu |
| [ECHOUniverse/dshacp](https://github.com/ECHOUniverse/dshacp) | Host | `@hanxu131/dshacp` | npm | 1 |  |
| [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) | Host | `dsh-bill` | npm | 1 | DSH (DeepSeek Harness) plugin: per-session cost line + cost attribution report, priced by llm-pricing |
| [PerryLink/dsh-session-sync](https://github.com/PerryLink/dsh-session-sync) | Host | `dsh-session-sync` | npm | 1 | Cross-device DeepSeek Harness session sync: a dedicated git mirror with append-only keep-both conflict resolut |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | npm | 1 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Host | `dsh-cloudflare-browser-run` | npm | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [alanzhao0128/dsh-image-plugins](https://github.com/alanzhao0128/dsh-image-plugins) | Host | `dsh-image-plugins` | npm | 1 | Multimodal plugin for DeepSeek Harness (dsh): understand images and generate images via configurable OpenAI-co |
| [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) | Host | `dsh-ssh-ops` | npm | 1 | DeepSeek Harness SSH 运维插件：主对话驱动 SSH，带高危命令保护与右侧终端。 |
| [clarkzhao/dsh-llm-grok](https://github.com/clarkzhao/dsh-llm-grok) | Host | `dsh-llm-grok` | npm | 1 | dsh plugin for grok |
| [dshworks/dsh-crew](https://github.com/dshworks/dsh-crew) | Host | `@dshworks/dsh-crew` | npm | 1 | Run Claude Code and Codex as live terminal panes beside dsh: a split view in the web UI, buttons to seat them, |
| [firecrawl/dsh-firecrawl](https://github.com/firecrawl/dsh-firecrawl) | Host | `@firecrawl/dsh-firecrawl` | npm | 1 | Firecrawl-backed web_search and web_fetch providers for the DeepSeek Harness web capability seam (ctx.web) |
| [fleg45/memoria-framework](https://github.com/fleg45/memoria-framework) | Host | `dsh-memoria` | npm | 1 | 通用 AI Agent 记忆框架 —— 记忆不是检索，是分流。5 层衰减 / 8 类型 / 5 管线结构化输出。 |
| [fz-lyle/dsh-deveco-cli](https://github.com/fz-lyle/dsh-deveco-cli) | Host | `@ah-plugins/dsh-deveco-cli` | npm | 1 | DevEco CLI 将 DevEco Studio 工具链统一封装为一个 CLI，内置 ohpm、hvigor、hdc、emulator、hilog，同时集成 HarmonyOS 技能安装、项目脚手架、本地 Harmo |
| [gxx950224/ggame](https://github.com/gxx950224/ggame) | Host | `@ggame/backpack` | npm | 1 | 干活跟打魔兽一样累 |
| [jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) | Host | `dsh-model-sync` | npm | 1 | Writes live provider model lists into DSH settings. Composer rings show 5h/7d plan windows or metered balance  |
| [jcc1997/dsh-plugins](https://github.com/jcc1997/dsh-plugins) | Host | `dsh-git` | npm | 1 |  |
| [jiesou/dsh-opencode-zen-free-provider](https://github.com/jiesou/dsh-opencode-zen-free-provider) | Host | `@jiesou/dsh-opencode-zen-free-provider` | npm | 1 | OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据 |
| [jingzhao-l/iterate-plugin](https://github.com/jingzhao-l/iterate-plugin) | Host | `iterate-plugin` | npm | 1 | DeepSeek Harness (dsh) 插件：把 iterate 技能落成自治闭环代码迭代 — 多轮并行审查、确定性去重收敛、原子修复+验证自停、meta-review 一致性审计、dry-run 只读审查。由 i |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Host | `@jumpserver-east/jumpserver-dsh` | npm | 1 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [leo-lab-2026/dsh-lark-bridge](https://github.com/leo-lab-2026/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 1 |  |
| [qinyre/dsh-plugin-capabilities](https://github.com/qinyre/dsh-plugin-capabilities) | Host | `dsh-plugin-capabilities` | npm | 1 | 在 dsh 设置页管理技能与 MCP 服务器，支持从 Claude Code、Codex 导入。 |
| [rj-jiangyichen/dsh-rules](https://github.com/rj-jiangyichen/dsh-rules) | Host | `dsh-rules` | npm | 1 |  |
| [ruimin251204/dsh-plugin-surgery](https://github.com/ruimin251204/dsh-plugin-surgery) | Host | `dsh-plugin-surgery` | npm | 1 |  |
| [xavier711/dsh-plugin-deepseek-usage](https://github.com/xavier711/dsh-plugin-deepseek-usage) | Host | `@xavier711/dsh-deepseek-usage` | npm | 1 | A DeepSeek usage panel plugin for the DeepSeek Harness Web GUI. It adds a 「Usage / 用量」 entry at the bottom of  |
| [yhlooo/dsh-bridges](https://github.com/yhlooo/dsh-bridges) | Host | `dsh-bridges` | npm | 1 | 将 DeepSeek Harness 桥接到已配置其它 Harness Agent 的项目。支持 CodeBuddy / Codex / OpenCode / Claude Code / ... |
| [zjcdkj/dsh-plugins](https://github.com/zjcdkj/dsh-plugins) | Host | `dsh-plugin-qwen-image` | npm | 1 | DeepSeek Harness (DSH) plugins. qwen-image gives a text-only coding model eyes: an image goes to a Qwen-VL rou |
| [863683348/dsh-gov](https://github.com/863683348/dsh-gov) | Host | `dsh-gov` | npm | 0 | Agent governance suite for DeepSeek Harness: policy-based tool gating (allow/deny/ask), structured JSONL audit |
| [863683348/dsh-feed](https://github.com/863683348/dsh-feed) | Host | `dsh-feed` | npm | 0 | Cross-ecosystem aggregation base (聚合的聚合): syncs GitHub dsh-plugin topic + npm into one open JSON index, querie |
| [863683348/dsh-insight](https://github.com/863683348/dsh-insight) | Host | `dsh-insight` | npm | 0 | Plugin insight center — one answer to 哪些值得装: plugin_guide (needs), recipe (environments), plugin_rank (health  |
| [863683348/dsh-need-finder](https://github.com/863683348/dsh-need-finder) | Host | `dsh-need-finder` | npm | 0 | Requirement-driven dsh plugin discovery (点菜, not 逛超市): plugin_guide tool matches natural-language needs to a c |
| [863683348/dsh-recipe](https://github.com/863683348/dsh-recipe) | Host | `dsh-recipe` | npm | 0 | Scenario bundles of dsh plugins (插件界的 dotfiles): recipe tool lists, searches, applies and composes ready-made  |
| [Andrietteprotective835/dsh-mcp-lens](https://github.com/Andrietteprotective835/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 0 | Shrink massive MCP catalogs to two tools, letting DeepSeek Harness search and call 1,000+ remote APIs efficien |
| [MaxHou-infinity/dsh-scout](https://github.com/MaxHou-infinity/dsh-scout) | Host | `dsh-scout` | npm | 0 | 司察 Scout — evidence-driven company & job due-diligence plugin for DeepSeek Harness (HR tech). 面向 DeepSeek Harn |
| [PerryLink/dsh-defend](https://github.com/PerryLink/dsh-defend) | Host | `dsh-defend` | npm | 0 | Prompt-injection, jailbreak, and secret-leak defense for DeepSeek Harness: Aho-Corasick detection with allow/a |
| [PerryLink/dsh-click](https://github.com/PerryLink/dsh-click) | Host | `dsh-click` | npm | 0 | Cross-platform native desktop control for DeepSeek Harness (Windows first): screen_shot, screen_read, click/ty |
| [PerryLink/dsh-library](https://github.com/PerryLink/dsh-library) | Host | `dsh-library` | npm | 0 | Local document knowledge base for DeepSeek Harness: library_add/remove/list, hybrid semantic+keyword library_s |
| [PerryLink/dsh-observe](https://github.com/PerryLink/dsh-observe) | Host | `dsh-observe` | npm | 0 | OpenTelemetry and Langfuse observability exporter for DeepSeek Harness: turn/step/tool/LLM spans, token and co |
| [PerryLink/dsh-translate](https://github.com/PerryLink/dsh-translate) | Host | `dsh-translate` | npm | 0 | Vendor parameter translation and deterministic JSON repair for DeepSeek Harness: /translate maps temperature/t |
| [Taler97/dsh-rollback](https://github.com/Taler97/dsh-rollback) | Host | `dsh-rollback` | npm | 0 | File-mutation rollback plugin for DeepSeek Harness |
| [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) | Host | `dsh-pilot` | npm | 0 | ✋ Hands for your DeepSeek Harness agent — autonomous browser operation by accessibility refs, with a permissio |
| [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) | Host | `dsh-preview` | npm | 0 | 👁 Eyes for your DeepSeek Harness agent — it opens, sees, and fixes what it builds. Headless-browser verificat |
| [Yidien/dsh-capture-window](https://github.com/Yidien/dsh-capture-window) | Host | `dsh-capture-window` | npm | 0 | DeepSeek Harness 旁路捕获插件：随手丢想法进独立的安静新会话，不打断主线上下文。 |
| [dami9527/dsh-image-pathify](https://github.com/dami9527/dsh-image-pathify) | Host | `dsh-image-pathify` | npm | 0 | DeepSeek Harness 插件：让 deepseek-v4-flash 等不能看图的模型也能处理聊天图片，内置识图工具。安装：dsh plugin --profile web add dsh-image-path |
| [ddll8023/dsh-codex](https://github.com/ddll8023/dsh-codex) | Host | `dsh-codex` | npm | 0 | OpenAI Codex (ChatGPT Plus/Pro OAuth) provider plugin for DeepSeek Harness (DSH). dsh-plugin |
| [duhu2000/qcc-mcp-oauth](https://github.com/duhu2000/qcc-mcp-oauth) | Host | `qcc-dsh-mcp-oauth` | npm | 0 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查（Qichacha）MCP 服务 / One-click OAuth connect to Qichacha MCP services for De |
| [dushaobindoudou/dsh-acp](https://github.com/dushaobindoudou/dsh-acp) | Host | `dsh-acp-server` | npm | 0 | Agent Client Protocol (ACP) server plugin for the DeepSeek Harness (dsh) - drive dsh agents from Zed and any A |
| [fengs2021/dsh-feishu-bridge](https://github.com/fengs2021/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 0 | DSH 飞书机器人桥接插件：飞书消息进 DSH 会话，流式交互卡片实时回复（思维链/正文/工具链分区，打字机效果） |
| [gxx950224/backpack](https://github.com/gxx950224/backpack) | Host | `@ggame/backpack` | npm | 0 | dsh backpack plugin |
| [haoku123/dsh-budget-guard](https://github.com/haoku123/dsh-budget-guard) | Host | `dsh-budget-guard` | npm | 0 | DeepSeek Harness plugin: LLM cost metering with budget enforcement (deny/warn) and peak-valley pricing. 成本计量+超 |
| [iwker/dsh-htmlrun](https://github.com/iwker/dsh-htmlrun) | Host | `dsh-htmlrun` | npm | 0 | Publish local single-file HTML to shareable html.run links as a DeepSeek Harness model tool (wraps the zero-de |
| [jiaoqsh/dsh-document](https://github.com/jiaoqsh/dsh-document) | Host | `@jiaoqsh/dsh-document` | npm | 0 | DeepSeek Harness plugin: read_document tool — Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF a |
| [jiay98528-dev/dsh-plugin-weaknet-adaptor](https://github.com/jiay98528-dev/dsh-plugin-weaknet-adaptor) | Host | `dsh-plugin-weaknet-adaptor` | npm | 0 |  |
| [jiesou/dsh-cline-free-provider](https://github.com/jiesou/dsh-cline-free-provider) | Host | `@jiesou/dsh-cline-free-provider` | npm | 0 | Cline 免费模型接入 DeepSeek Harness |
| [keepview/dsh-lark](https://github.com/keepview/dsh-lark) | Host | `dsh-lark` | npm | 0 | Minimal Lark/Feishu gateway plugin for DeepSeek Harness (dsh) — chat with your agent from Feishu, one topic =  |
| [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) | Host | `@lk251066/dsh-tui` | npm | 0 | Fixed framed terminal workbench plugin for DeepSeek Harness with transcript-only scrolling and persistent sess |
| [oThTJx/dsh-skill-always-apply](https://github.com/oThTJx/dsh-skill-always-apply) | Host | `@firefly0621/dsh-skill-always-apply` | npm | 0 | DeepSeek Harness plugin: injects alwaysApply-marked skill bodies into sessions before the first model request  |
| [oThTJx/dsh-skill-superpowers](https://github.com/oThTJx/dsh-skill-superpowers) | Host | `@firefly0621/dsh-skill-superpowers` | npm | 0 | DeepSeek Harness plugin: obra/superpowers skill library adapted to dsh tooling, plus a session-start bootstrap |
| [protoctistmoses143/dsh-docs](https://github.com/protoctistmoses143/dsh-docs) | Host | `dsh-doc` | npm | 0 | Convert PDFs, Office docs, scanned images, and more to clean Markdown, JSON, or text locally with offline OCR— |
| [ruby1304/dsh-vision-subagent](https://github.com/ruby1304/dsh-vision-subagent) | Host | `dsh-vision-subagent` | npm | 0 | Vision for text-only DeepSeek Harness agents: subagent-delegated image reading + Codex-style paste bridge on a |
| [shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) | Host | `dsh-risk-guard` | npm | 0 | Zero-interruption audit + fuse blocking plugin for DeepSeek Harness / 零打扰 Agent 审计与保险丝拦截插件 |
| [tancheng33/dsh-yogacara](https://github.com/tancheng33/dsh-yogacara) | Host | `dsh-yogacara` | npm | 0 | A Yogācāra (唯识) self-model plugin for DeepSeek Harness: eight consciousnesses, the 51 mental factors, a perfum |
| [uckkk/dsh-api-contract](https://github.com/uckkk/dsh-api-contract) | Host | `dsh-api-contract` | npm | 0 | 接口契约助手：解析 OpenAPI 3.x，生成 TypeScript/Python 类型化客户端并检测破坏性变更 |
| [uckkk/dsh-base64url](https://github.com/uckkk/dsh-base64url) | Host | `dsh-base64url` | npm | 0 | @{name=dsh-base64url; version=0.1.0; description=Base64URL 编解码; type=module; main=lib/index.js; exports=; file |
| [uckkk/dsh-api-testgen](https://github.com/uckkk/dsh-api-testgen) | Host | `dsh-api-testgen` | npm | 0 | 接口测试生成：解析 OpenAPI 3.x，生成覆盖成功/缺参/非法枚举的 pytest/vitest 接口测试骨架 |
| [uckkk/dsh-api-mock](https://github.com/uckkk/dsh-api-mock) | Host | `dsh-api-mock` | npm | 0 | 接口模拟服务器：解析 OpenAPI 3.x，生成零依赖 Node Mock 服务器并按 schema 生成示例数据 |
| [uckkk/dsh-byte-size](https://github.com/uckkk/dsh-byte-size) | Host | `dsh-byte-size` | npm | 0 | @{name=dsh-byte-size; version=0.1.0; description=字节大小格式化：把任意字节数换算为 B/KB/MB/GB/TB 等人类可读格式，支持二进制与十进制前缀（Byte size |
| [uckkk/dsh-animation-principles](https://github.com/uckkk/dsh-animation-principles) | Host | `dsh-animation-principles` | npm | 0 | 迪士尼动画12法则知识库 |
| [uckkk/dsh-cinematography](https://github.com/uckkk/dsh-cinematography) | Host | `dsh-cinematography` | npm | 0 | @{name=dsh-cinematography; version=0.1.0; description=电影运镜与镜头语言参考; type=module; main=lib/index.js; exports=; f |
| [uckkk/dsh-code-stats](https://github.com/uckkk/dsh-code-stats) | Host | `dsh-code-stats` | npm | 0 | @{name=dsh-code-stats; version=0.1.0; description=代码统计：扫描项目，按语言统计文件数与代码行数，返回语言分布与最大文件清单; type=module; main=lib |
| [uckkk/dsh-color](https://github.com/uckkk/dsh-color) | Host | `@i6060/dsh-color` | npm | 0 | 颜色工具：hex/rgb/hsl 互转、补色、明暗与对比度 |
| [uckkk/dsh-color-contrast](https://github.com/uckkk/dsh-color-contrast) | Host | `dsh-color-contrast` | npm | 0 | WCAG颜色对比度计算器 |
| [uckkk/dsh-color-name](https://github.com/uckkk/dsh-color-name) | Host | `dsh-color-name` | npm | 0 | @{name=dsh-color-name; version=0.1.0; description=颜色名称识别：输入十六进制颜色，返回常见中文/英文颜色名称（Color name lookup tool for Dee |
| [uckkk/dsh-color-theory](https://github.com/uckkk/dsh-color-theory) | Host | `dsh-color-theory` | npm | 0 | 色彩理论与配色方案参考 |
| [uckkk/dsh-cron](https://github.com/uckkk/dsh-cron) | Host | `dsh-cron` | npm | 0 | @{name=dsh-cron; version=0.1.0; description=Cron 解析：解析 5 字段 cron 表达式，返回人类可读描述与接下来 N 次执行时间; type=module; main=l |
| [uckkk/dsh-composition](https://github.com/uckkk/dsh-composition) | Host | `dsh-composition` | npm | 0 | @{name=dsh-composition; version=0.1.0; description=构图法则参考：摄影、绘画与界面布局通用的构图知识库（三分法、对称、引导线等），辅助画面与界面设计决策; type=mo |
| [uckkk/dsh-dependency-audit](https://github.com/uckkk/dsh-dependency-audit) | Host | `dsh-dependency-audit` | npm | 0 | 依赖安全审计：OSV.dev 漏洞扫描 + npm 过期依赖检测，返回严重级/修复版本/升级幅度 |
| [uckkk/dsh-db-migration](https://github.com/uckkk/dsh-db-migration) | Host | `dsh-db-migration` | npm | 0 | 数据库迁移生成：对比两个 SQL DDL，检测表/列结构差异并生成 ALTER TABLE 迁移 SQL |
| [uckkk/dsh-git-commit](https://github.com/uckkk/dsh-git-commit) | Host | `dsh-git-commit` | npm | 0 | @{name=dsh-git-commit; version=0.1.0; description=Git 提交助手：分析仓库变更生成规范化 Conventional Commits 提交信息、按提交历史生成 CHANG |
| [uckkk/dsh-license-guard](https://github.com/uckkk/dsh-license-guard) | Host | `dsh-license-guard` | npm | 0 | 依赖许可证合规：扫描 node_modules 许可证、归一化 SPDX、分类并做发布前合规校验 |
| [uckkk/dsh-regex](https://github.com/uckkk/dsh-regex) | Host | `@i6060/dsh-regex` | npm | 0 | 正则工具：测试匹配/替换/转义 |
| [uckkk/dsh-secret-scan](https://github.com/uckkk/dsh-secret-scan) | Host | `dsh-secret-scan` | npm | 0 | @{name=dsh-secret-scan; version=0.1.0; description=敏感信息扫描：递归扫描代码库中的泄露密钥/令牌/私钥/硬编码密码，输出去敏感化的位置与严重级，提交前自查安全; typ |
| [uckkk/dsh-test-coverage](https://github.com/uckkk/dsh-test-coverage) | Host | `dsh-test-coverage` | npm | 0 | 测试覆盖率分析：解析 LCOV/Cobertura/Istanbul/Go 覆盖率报告，输出结构化覆盖数据与未覆盖行区间 |
| [uckkk/dsh-video-creator](https://github.com/uckkk/dsh-video-creator) | Host | `dsh-video-creator` | npm | 0 | @{name=dsh-video-creator; version=0.1.4; description=视频号创作助手：内置主流短视频创作模板，调用中国境内大模型一键生成内容包，适配抖音/视频号/B站/快手/小红书/微 |
| [wanshichenguang/dsh-tool-vision](https://github.com/wanshichenguang/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 0 | DSH plugin: image_describe (识图) tool over the DashScope OpenAI-compatible vision API (qwen3.7-flash). Bring yo |
| [white-sand-grand/dsh-plugin-doctor](https://github.com/white-sand-grand/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 0 |  |
| [yangfch3/dsh-mcp-mgr](https://github.com/yangfch3/dsh-mcp-mgr) | Host | `dsh-mcp-mgr` | npm | 0 | MCP server manager for DeepSeek Harness — workspace mcp.json discovery, hot sync, and a web settings UI. |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | Host | `@open-design/dsh-runtime` | Git only | 87849 | 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative. 🖥️ Local-first desktop app |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Host | `@openviking/dsh-memory-plugin` | Git only | 28748 | Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills. |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Host | `@yuxianglin/dsh-bridge-browser` | Git only | 223 | dsh plugin: Chrome sidebar extension that lets DSH operate your browser directly, no vision capabilities requi |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | Host | `dsh-code-review` | Git only | 103 | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness |
| [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) | Host | `tabbit-browser` | Git only | 69 | Tabbit Broser plugins for Deepseek Harness |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Host | `dsh-cost-meter` | Git only | 59 | DeepSeek Harness Session Cost Statistics & OpenCode Go Quota Display, DS Official Balance Display, Codex-like  |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | Host | `@dsh-external/plugin-console` | Git only | 50 | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | Host | `dsh-whale-report` | Git only | 19 | 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。 |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Host | `nowledge-mem-deepseek-harness` | Git only | 5 | One memory layer for every AI tool and agent, packaged for DeepSeek Harness |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | Host | `@dsh-external/dsh-inspect` | Git only | 5 | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 |
| [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | Host | `dsh-tool-turbo` | Git only | 4 | Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simpl |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Host | `dsh-plugin-knowledge-graph` | Git only | 4 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [MrWeiCodes/dsh-permgate](https://github.com/MrWeiCodes/dsh-permgate) | Host | `dsh-permgate` | Git only | 4 | 为 DeepSeek Harness（DSH）提供的细粒度权限控制插件 |
| [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) | Host | `dsh-plugin-subhub` | Git only | 4 | Bring third-party subscription accounts into DeepSeek Harness - 为 DeepSeek Harness 接入第三方订阅账户(当前支持 OpenAI / Cha |
| [mytianyi0712/dsh-tui-plugin-OhMyPi](https://github.com/mytianyi0712/dsh-tui-plugin-OhMyPi) | Host | `dsh-omp-tui` | Git only | 4 | 一个dsh的终端样式插件，灵感来自Oh My Pi |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Host | `dsh-prime-agent` | Git only | 4 | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode |
| [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) | Host | `mindspace-dsh-local-rag` | Git only | 3 | ARPM-derived local hybrid RAG plugin for DeepSeek Harness |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | Git only | 3 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Host | `dsh-chat-imagine` | Git only | 3 | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片。 |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | Host | `dsh-directorx` | Git only | 2 | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision |
| [PerryLink/dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) | Host | `dsh-skill-pack-security` | Git only | 2 | Security-audit skill pack + plugin_vet supply-chain gate for DeepSeek Harness (dsh): 8 bilingual agent skills  |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | Host | `dsh-plan-lattice` | Git only | 1 | Crash-durable execution control for long-running DeepSeek Harness agents. Mechanism tests: stale mutations 12/ |
| [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) | Host | `@amethystluna/logicprobe` | Git only | 1 | Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design d |
| [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) | Host | `@dely0/dsh-personal-workbench` | Git only | 1 | DSH 个人工作台：日历 + 任务列表 + AI 澄清/拆解/执行/复盘 \| Personal workbench for DeepSeek Harness Web: calendar + task list + AI |
| [SCSpotato/dsh-remote](https://github.com/SCSpotato/dsh-remote) | Host | `dsh-remote-control` | Git only | 1 | Native Android client to remotely control DeepSeek Harness (DSH) from your phone |
| [WayneJin0918/dsh-wm](https://github.com/WayneJin0918/dsh-wm) | Host | `dsh-wm` | Git only | 1 | Playable world-model toolkit for DeepSeek Harness: look at frames, name the 3D / pixel / latent route, measure |
| [Very12345/sai](https://github.com/Very12345/sai) | Host | `sai-dsh-plugin` | Git only | 1 | A local-first Android coding agent powered by the official DeepSeek Harness |
| [ciceroyang/dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) | Host | `dsh-report-studio` | Git only | 1 | Turn a DeepSeek Harness session into deliverable work reports (daily/weekly/handoff/article) with verifiable r |
| [drscrewdriver/dsh-seatbelt-sandbox](https://github.com/drscrewdriver/dsh-seatbelt-sandbox) | Host | `dsh-seatbelt-sandbox` | Git only | 1 | dsh-seatbelt 方面沙箱增强尝试使用非exec工具直接对接系统seatbelt相关api |
| [isheng-eqi/dsh-hermes-memory](https://github.com/isheng-eqi/dsh-hermes-memory) | Host | `dsh-hermes-memory` | Git only | 1 | Hermes-style persistent memory (MEMORY.md / USER.md) for DeepSeek Harness (DSH) — a faithful port of hermes-ag |
| [jaxxchen003/foliodrop-dsh-publish](https://github.com/jaxxchen003/foliodrop-dsh-publish) | Host | `@foliodrop/dsh-publish` | Git only | 1 | Publish DeepSeek Harness agent output as a shareable FolioDrop URL |
| [ktziy/dsh-plugin-factory](https://github.com/ktziy/dsh-plugin-factory) | Host | `dsh-plugin-factory` | Git only | 1 | 一切皆插件，这里将是插件的源头 |
| [lecutu/dsh-slide-reflex](https://github.com/lecutu/dsh-slide-reflex) | Host | `dsh-slide-reflex` | Git only | 1 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| [lovezi0/dsh-memory-palace](https://github.com/lovezi0/dsh-memory-palace) | Host | `dsh-memory-palace` | Git only | 1 | 把 WorkBuddy 的文件式记忆系统移植进 [DeepSeek Harness](https://www.deepseek.com/harness/) —— 为 Harness 提供**跨会话持久化、人类可直接编辑的 |
| [mcxianyujun/dsh-web-search-anysearch](https://github.com/mcxianyujun/dsh-web-search-anysearch) | Host | `dsh-web-search-anysearch` | Git only | 1 | Native AnySearch /v1/search WebSearchProvider for DeepSeek Harness with Web UI, credentials integration, and W |
| [memorax-ai/dsh-patchouli](https://github.com/memorax-ai/dsh-patchouli) | Host | `dsh-patchouli` | Git only | 1 | Agent knowledge hub and deepseek-harness plugin |
| [nexsjournal/dsh-imagegen-plugin](https://github.com/nexsjournal/dsh-imagegen-plugin) | Host | `dsh-imagegen-plugin` | Git only | 1 | 给 DeepSeek Harness（DSH）加上第三方生图/改图能力的插件：对话召唤 + 设置卡片，支持 OpenAI 兼容 / 阿里百炼 / Replicate / fal.ai |
| [roxyyn0304/dsh-tool-everything](https://github.com/roxyyn0304/dsh-tool-everything) | Host | `dsh-tool-everything` | Git only | 1 | DeepSeek Harness的 Everything 搜索工具插件 |
| [22-ai-00/dsh-enhanced](https://github.com/22-ai-00/dsh-enhanced) | Host | `@dsh-enhanced/acp` | Git only | 0 | 专门用来实现dsh的增强插件集 |
| [863683348/dsh-plugin-gate](https://github.com/863683348/dsh-plugin-gate) | Host | `dsh-plugin-gate` | Git only | 0 | Installation safety gate for DeepSeek Harness plugins: antivirus-style scanner for install scripts, permission |
| [863683348/dsh-plugin-recommend](https://github.com/863683348/dsh-plugin-recommend) | Host | `dsh-plugin-recommend` | Git only | 0 | Plugin recommender for DeepSeek Harness: search and rank DSH plugins from an embedded 1100+ entry marketplace  |
| [863683348/dsh-plugin-verify](https://github.com/863683348/dsh-plugin-verify) | Host | `dsh-plugin-verify` | Git only | 0 | Verification toolkit for DeepSeek Harness agents: evidence-based claim checking with line citations, config va |
| [863683348/dsh-plugin-scorecard](https://github.com/863683348/dsh-plugin-scorecard) | Host | `dsh-plugin-scorecard` | Git only | 0 | DSH plugin health scorecard: quality & security audit, rankings and search across the dsh-plugin ecosystem. |
| [863683348/dsh-starter-zh](https://github.com/863683348/dsh-starter-zh) | Host | `dsh-starter-zh` | Git only | 0 | DSH 新手入门包：安装即得欢迎语、从 0 到 1 学习路径、按场景推荐插件、新手自查清单，并与 dsh-handbook-zh 中文教程联动。Starter pack for DeepSeek Harness begi |
| [AmethystLuna/embedded-workbench](https://github.com/AmethystLuna/embedded-workbench) | Host | `@amethystluna/embedded-workbench` | Git only | 0 | Embedded C/C++ AI engineering plugin — firmware skills (FreeRTOS, Keil, HardFault, state machines) + 1% Rule / |
| [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) | Host | `@bryan-cmf/dsh-infra-observability` | Git only | 0 | DSH-Plugin: structural observability layer - real tool/skill usage recording (tools/result), skill-catalog aud |
| [Bryan-cmf/dsh-vector-memory](https://github.com/Bryan-cmf/dsh-vector-memory) | Host | `@bryan-cmf/dsh-vector-memory` | Git only | 0 | DSH-Plugin: durable agent memory core - mem_save/mem_search/mem_health backed by storageDomain (survives resta |
| [Hefulalala/dsh-remote-workspace](https://github.com/Hefulalala/dsh-remote-workspace) | Host | `@dsh-external/dsh-remote-workspace` | Git only | 0 | DSH plugin: SSH/SFTP remote sites and remote workspaces in the sidebar |
| [JohnXu22786/session-titler](https://github.com/JohnXu22786/session-titler) | Host | `dsh-session-caption` | Git only | 0 | Two-phase session captioning for the DeepSeek Harness: instant keyword captions while busy, budget-model refin |
| [JonyChan8394/dsh-llm-balance](https://github.com/JonyChan8394/dsh-llm-balance) | Host | `dsh-llm-balance` | Git only | 0 | Show LLM API balances under the chat input: DeepSeek, OpenRouter, SiliconFlow and any custom provider with a b |
| [PerryLink/dsh-fast](https://github.com/PerryLink/dsh-fast) | Host | `dsh-fast` | Git only | 0 | Read-only performance diagnostics for DeepSeek Harness: session load (open/restore) timing, spill-hit counts,  |
| [PerryLink/dsh-local-ai](https://github.com/PerryLink/dsh-local-ai) | Host | `dsh-local-ai` | Git only | 0 | Local-model (Ollama) integration for DeepSeek Harness: discover, pull, remove, and inspect local models, route |
| [PerryLink/dsh-mask](https://github.com/PerryLink/dsh-mask) | Host | `dsh-mask` | Git only | 0 | PII masking middleware for DeepSeek Harness: anonymize names, phones, emails, ID cards, bank cards, keys, and  |
| [PerryLink/dsh-score](https://github.com/PerryLink/dsh-score) | Host | `dsh-score` | Git only | 0 | Multi-dimensional quality scoring for DeepSeek Harness plugins: scores one repo or npm package across install  |
| [PerryLink/dsh-test-drive](https://github.com/PerryLink/dsh-test-drive) | Host | `dsh-test-drive` | Git only | 0 | Isolated install-and-smoke test drives for DeepSeek Harness plugins: installs a repo or npm package into a thr |
| [SYMlp/dsh-markdown-memory](https://github.com/SYMlp/dsh-markdown-memory) | Host | `dsh-markdown-memory` | Git only | 0 | Markdown folder long-term memory plugin for DeepSeek Harness (dsh): one file per fact, human-editable, git-ver |
| [SamurAIGPT/dsh-plugin-muapi](https://github.com/SamurAIGPT/dsh-plugin-muapi) | Host | `@dsh-plugin/dsh-plugin-muapi` | Git only | 0 | DeepSeek Harness plugin exposing MuApi's 100+ image/video/audio generation models as an agent tool |
| [SodaMem/dsh-plugin-sodamem](https://github.com/SodaMem/dsh-plugin-sodamem) | Host | `dsh-plugin-sodamem` | Git only | 0 | Native DeepSeek Harness (dsh) plugin for SodaMem — auto-injects evidence-grounded memory into every turn and i |
| [Very12345/sai-dsh-plugins](https://github.com/Very12345/sai-dsh-plugins) | Host | `@sai/dsh-android` | Git only | 0 | First-party DeepSeek Harness plugins for the sai Android coding agent |
| [XiaoSong1223/dsh-release-guardian](https://github.com/XiaoSong1223/dsh-release-guardian) | Host | `dsh-release-guardian` | Git only | 0 | Deterministic release-risk checks and quality gates for DeepSeek Harness |
| [Shiyao-Huang/awesome-deepseek-harness-plugin](https://github.com/Shiyao-Huang/awesome-deepseek-harness-plugin) | Host | `deeplugin-market` | Git only | 0 | Public DeepSeek Harness plugin Store and ecosystem dataset: install specs, source evidence, SQLite history, me |
| [Yiipu/dsh-agentmemory](https://github.com/Yiipu/dsh-agentmemory) | Host | `dsh-agentmemory` | Git only | 0 | a DSH (DeepSeek Harness) Cordis plugin that bridges a session's activity into agentmemory, a local, self-hoste |
| [akqwpeter-prog/dsh-skill-router](https://github.com/akqwpeter-prog/dsh-skill-router) | Host | `dsh-skill-router` | Git only | 0 | Rule-first pre-step skill router for DeepSeek Harness — pours matched skills on high-confidence hits, stays si |
| [allentnetus/dsh-job-hunting](https://github.com/allentnetus/dsh-job-hunting) | Host | `dsh-job-hunting` | Git only | 0 | DeepSeek Harness job hunting plugin and runtime skill for local job intelligence workflows. |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Host | `dsh-grafana` | Git only | 0 | Paste a Grafana dashboard URL and fine-tune it through conversation with DeepSeek Harness — 贴大盘 URL，对话微调，写回 Gr |
| [guobinmengxiang-rgb/dsh-memory-canvas](https://github.com/guobinmengxiang-rgb/dsh-memory-canvas) | Host | `dsh-memory-canvas` | Git only | 0 | DSH plugin: offload bulky tool logs to refs/*.md, keep a Mermaid canvas, recall by node_id. Zero daemon. Don't |
| [guobinmengxiang-rgb/dsh-plugins](https://github.com/guobinmengxiang-rgb/dsh-plugins) | Host | `dsh-cli-guard` | Git only | 0 | Small DeepSeek Harness plugins. Install one folder at a time. Don't pip the wrong dsh. |
| [ghbhiee/dsh-plugins](https://github.com/ghbhiee/dsh-plugins) | Host | `dsh-plugin-cli-session` | Git only | 0 | Terminal, file browser, and mobile/CLI plugins for DeepSeek Harness |
| [hhy66/dsh-balance-stats](https://github.com/hhy66/dsh-balance-stats) | Host | `dsh-balance-stats` | Git only | 0 | DSH 余额与消耗面板（dsh-balance-stats） |
| [kiefeng/dsh-lan-memory](https://github.com/kiefeng/dsh-lan-memory) | Host | `dsh-lan-memory` | Git only | 0 | 澜·记忆与人格系统 — DeepSeek Harness memory & persona plugin (三层记忆 + SOUL/MOOD + 一键整理) |
| [klarkxy/dsh-plugin-autoevo](https://github.com/klarkxy/dsh-plugin-autoevo) | Host | `dsh-plugin-autoevo` | Git only | 0 | DSH capability reuse and safe evolution layer. Evolution continues. |
| [nanshanzhaoji/dsh-download-progress](https://github.com/nanshanzhaoji/dsh-download-progress) | Host | `dsh-download-progress` | Git only | 0 | DSH 下载进度插件：download 工具实时计算下载百分比，Web GUI 右下角悬浮面板显示进度条 |
| [opencamel/dsh-x-archive](https://github.com/opencamel/dsh-x-archive) | Host | `dsh-x-archive` | Git only | 0 | DSH (DeepSeek Harness) tool plugin: archive and read X (Twitter) posts as permanent Markdown snapshots, powere |
| [omdsh-plugins/omdsh-tui](https://github.com/omdsh-plugins/omdsh-tui) | Host | `@omdsh-plugins/omdsh-tui-app` | Git only | 0 | Workspace root for the DeepSeek Harness interactive terminal: the TUI surface, its profile bundle, and the ven |
| [qiuyiwu1989-star/dsh-k12-substrate](https://github.com/qiuyiwu1989-star/dsh-k12-substrate) | Host | `dsh-k12-substrate` | Git only | 0 | K12 capability substrate for DeepSeek Harness — 143 objectively-decidable capability anchors and 6,091 list it |
| [rbelem/dsh-tui](https://github.com/rbelem/dsh-tui) | Host | `@rbelem/dsh-tui` | Git only | 0 |  |
| [rouyiemei/dsh-smart-router](https://github.com/rouyiemei/dsh-smart-router) | Host | `dsh-smart-router` | Git only | 0 | Automatic model routing for DeepSeek Harness: three difficulty tiers (hard/normal/easy) plus vision routing, p |
| [slicenferqin/dsh-whale-tui](https://github.com/slicenferqin/dsh-whale-tui) | Host | `dsh-whale-tui` | Git only | 0 | grok-build style terminal UI for DeepSeek Harness: a Rust/ratatui TUI shipped as a dsh plugin bundle |
| [sundusk/dsh-moodball](https://github.com/sundusk/dsh-moodball) | Host | `@linxin666/dsh-moodball-status` | Git only | 0 | DeepSeek Harness Pet |
| [stvlynn/dsh.fish](https://github.com/stvlynn/dsh.fish) | Host | `dsh-hub` | Git only | 0 | Discover and install DeepSeek Harness plugins, skills, MCP servers, agent presets, bundles, and profiles. |
| [uckkk/dsh-context-dashboard](https://github.com/uckkk/dsh-context-dashboard) | Host | `dsh-context-dashboard` | Git only | 0 | DSH 会话上下文统计面板：每会话消息/轮次/工具调用/预估 token + 全局与按项目报告。Context usage dashboard for DeepSeek Harness. |
| [uckkk/dsh-design-patterns](https://github.com/uckkk/dsh-design-patterns) | Host | `dsh-design-patterns` | Git only | 0 | UI设计模式参考 |
| [uckkk/dsh-duration](https://github.com/uckkk/dsh-duration) | Host | `dsh-duration` | Git only | 0 | 时长格式化 |
| [uckkk/dsh-design-styles](https://github.com/uckkk/dsh-design-styles) | Host | `dsh-design-styles` | Git only | 0 | 设计风格参考 |
| [uckkk/dsh-http-uckkk](https://github.com/uckkk/dsh-http-uckkk) | Host | `dsh-http-uckkk` | Git only | 0 | HTTP 请求工具：发起请求返回状态/响应头/响应体/耗时 |
| [uckkk/dsh-grid-system](https://github.com/uckkk/dsh-grid-system) | Host | `dsh-grid-system` | Git only | 0 | @{name=dsh-grid-system; version=0.1.0; description=栅格与间距系统参考：8 点栅格、响应式断点与间距规范知识库，指导界面布局设计（Grid & spacing syste |
| [uckkk/dsh-image-uckkk](https://github.com/uckkk/dsh-image-uckkk) | Host | `dsh-image-uckkk` | Git only | 0 | @{name=dsh-image-uckkk; version=0.1.0; description=图片处理：读取图片尺寸/格式、缩放与格式转换（内置 ffmpeg，跨平台）; type=module; main=li |
| [uckkk/dsh-json-flatten](https://github.com/uckkk/dsh-json-flatten) | Host | `dsh-json-flatten` | Git only | 0 | @{name=dsh-json-flatten; version=0.1.0; description=JSON 扁平化：嵌套 JSON ↔ 点号扁平键互转（支持数组索引）; type=module; main=./in |
| [uckkk/dsh-json-merge](https://github.com/uckkk/dsh-json-merge) | Host | `dsh-json-merge` | Git only | 0 | JSON 深合并 |
| [uckkk/dsh-jwt-uckkk](https://github.com/uckkk/dsh-jwt-uckkk) | Host | `dsh-jwt-uckkk` | Git only | 0 | @{name=dsh-jwt-uckkk; version=0.1.0; description=JWT 解码：解析 header/payload，判断过期（不验签）; type=module; main=lib/ind |
| [uckkk/dsh-interaction-design](https://github.com/uckkk/dsh-interaction-design) | Host | `dsh-interaction-design` | Git only | 0 | 交互设计理论参考 |
| [uckkk/dsh-number-words](https://github.com/uckkk/dsh-number-words) | Host | `dsh-number-words` | Git only | 0 | @{name=dsh-number-words; version=0.1.0; description=数字转大写：阿拉伯数字转中文大写（金额/票据场景），支持小数与负数（Number to Chinese upperc |
| [uckkk/dsh-password-uckkk](https://github.com/uckkk/dsh-password-uckkk) | Host | `dsh-password-uckkk` | Git only | 0 | 密码工具：强随机密码生成 + 密码强度/信息熵检测 |
| [uckkk/dsh-photography](https://github.com/uckkk/dsh-photography) | Host | `dsh-photography` | Git only | 0 | 摄影基础参考 |
| [uckkk/dsh-motion-design](https://github.com/uckkk/dsh-motion-design) | Host | `dsh-motion-design` | Git only | 0 | 动效设计原则参考 |
| [uckkk/dsh-paper-sizes](https://github.com/uckkk/dsh-paper-sizes) | Host | `dsh-paper-sizes` | Git only | 0 | 纸张尺寸标准参考 |
| [uckkk/dsh-roman](https://github.com/uckkk/dsh-roman) | Host | `dsh-roman` | Git only | 0 | @{name=dsh-roman; version=0.1.0; description=罗马数字转换：阿拉伯数字与罗马数字互转（Roman numeral converter tool for DeepSeek Har |
| [uckkk/dsh-session-export](https://github.com/uckkk/dsh-session-export) | Host | `dsh-session-export` | Git only | 0 | DSH 会话导出/备份工具：列出本地会话并把任意会话导出为 Markdown/JSON（支持 zstd 与明文存储）。Session export & backup for DeepSeek Harness. |
| [uckkk/dsh-storyboard](https://github.com/uckkk/dsh-storyboard) | Host | `dsh-storyboard` | Git only | 0 | @{name=dsh-storyboard; version=0.1.0; description=分镜脚本：分镜术语、镜头类型与分镜模板知识库，辅助视频与短片创作（Storyboard reference for De |
| [uckkk/dsh-session-search](https://github.com/uckkk/dsh-session-search) | Host | `dsh-session-search` | Git only | 0 | DSH 会话全文搜索：跨所有本地会话按关键词检索（支持 zstd 与明文存储）。Full-text search across DeepSeek Harness sessions. |
| [uckkk/dsh-text-wrap](https://github.com/uckkk/dsh-text-wrap) | Host | `dsh-text-wrap` | Git only | 0 | 文本换行 |
| [uckkk/dsh-text-diff](https://github.com/uckkk/dsh-text-diff) | Host | `dsh-text-diff` | Git only | 0 | 行级文本 diff |
| [uckkk/dsh-string-similarity](https://github.com/uckkk/dsh-string-similarity) | Host | `dsh-string-similarity` | Git only | 0 | @{name=dsh-string-similarity; version=0.1.0; description=字符串相似度：Levenshtein/Jaccard 等算法计算文本相似度（String similari |
| [uckkk/dsh-ux-writing](https://github.com/uckkk/dsh-ux-writing) | Host | `dsh-ux-writing` | Git only | 0 | @{name=dsh-ux-writing; version=0.1.0; description=UX 文案写作：微文案规范与按钮、错误提示文案指南，辅助界面文案撰写（UX writing guide for Deep |
| [wade20250715/dsh-pubmed](https://github.com/wade20250715/dsh-pubmed) | Host | `dsh-pubmed` | Git only | 0 |  |
| [xiaozhe7772222/dsh-api-key-pool](https://github.com/xiaozhe7772222/dsh-api-key-pool) | Host | `dsh-api-key-pool` | Git only | 0 | API Key rotation pool for DeepSeek Harness: multi-key round-robin, failover on 401/403/429, cooldown & recover |
| [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) | Host | `dsh-opencode-zen` | Git only | 0 | 0 元接入 6 个免费大模型：OpenCode Zen 免费档模型零配置接入 DeepSeek Harness，免注册免充值，内置 6 个免费模型，多 Key 轮换与限流退避。 |
| [yauntyour/DSH-Encrypt](https://github.com/yauntyour/DSH-Encrypt) | Host | `dsh-encrypt` | Git only | 0 | DeepSeek Harness 凭证加密插件，通过设置密码使用AES-256-GCM+SHA3-256实现的全流程加密+校验，运行时临时解密，内存安全。 |
| [zhao999/dsh-plugin-wecom-bot](https://github.com/zhao999/dsh-plugin-wecom-bot) | Host | `dsh-plugin-wecom-bot` | Git only | 0 |  |
| [zhao-wuyan/dsh-maestro-runtime](https://github.com/zhao-wuyan/dsh-maestro-runtime) | Host | `dsh-maestro-runtime` | Git only | 0 | DSH host plugin for maestro-flow: guard, context, KG sync, delegate/team/coordinator runtime |
| [yzke/dsh-extension-ops](https://github.com/yzke/dsh-extension-ops) | Host | `dsh-extension-ops` | Git only | 0 | Read-only extension operations standard for DeepSeek Harness agents |

### Client plugins (62)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Client (Web UI) | `dshmarket` | npm | 698 | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | Client (Web UI) | `dsh-context` | npm | 166 | 一站式 DeepSeek Harness 上下文可视化插件，Context 面板与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。 |
| [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) | Client (Web UI) | `dsh-sidebar-qa` | npm | 15 | 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能 |
| [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) | Client (Web UI) | `dsh-full-remote` | npm | 13 | DeepSeek Harness plugin for remote access: a token-gated reverse proxy keeps settings, credentials, and file a |
| [zerob13/dsh-better-markdown](https://github.com/zerob13/dsh-better-markdown) | Client (Web UI) | `dsh-better-markdown` | npm | 13 | DeepSeek Harness Web plugin powered by markstream-react for resilient streaming Markdown, Mermaid diagrams, Ka |
| [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | Client (Web UI) | `@nonamelego/dsh-catppuccin` | npm | 10 | DeepSeek Harness Web GUI 的 Catppuccin 主题插件：Latte / Frappé / Macchiato / Mocha 四种主题一键切换，内置可开关的玻璃质感（Glassmorphis |
| [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | Client (Web UI) | `dsh-outline` | npm | 10 | DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Client (Web UI) | `dsh-ui-appearance` | npm | 7 | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, gla |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | Client (Web UI) | `context-vista` | npm | 6 | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /co |
| [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) | Client (Web UI) | `dsh-composer-history` | npm | 5 | Terminal-style input history for the DeepSeek Harness web composer: edge-first arrows with exact draft/caret r |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Client (Web UI) | `dsh-github` | npm | 4 |  |
| [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | Client (Web UI) | `dsh-joi-channel-theme` | npm | 4 | 轴伊 Joi 双衣装主题 for DeepSeek Harness — unofficial, non-commercial fan theme plugin 🍊 |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 3 | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. |
| [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) | Client (Web UI) | `dsh-workbench` | npm | 3 | Right-side file workspace for DeepSeek Harness Web. |
| [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) | Client (Web UI) | `@ha-na-bi/dsh-client-ui-custom` | npm | 3 | Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcut |
| [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 2 | Unofficial whale-girl pet plugin for the DeepSeek Harness Web UI |
| [PerryLink/dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) | Client (Web UI) | `dsh-session-pin` | npm | 2 | Pin sessions and workspaces to the top of the DeepSeek Harness sidebar with per-pin row colors - a dual-face ( |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Client (Web UI) | `dsh-xueqiu` | npm | 2 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | Client (Web UI) | `@michengai/dsh-archive-manager` | npm | 1 | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) | Client (Web UI) | `@steven-wu/dsh-cost-meter` | npm | 1 | dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from t |
| [omdsh-plugins/omdsh-base](https://github.com/omdsh-plugins/omdsh-base) | Client (Web UI) | `@omdsh-plugins/omdsh-base` | npm | 1 | The session-mode system for the DeepSeek Harness web GUI: the segment registry every mode plugin registers int |
| [sjh9714/dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | Client (Web UI) | `dsh-what-changed` | npm | 1 | 看得见 Agent 到底改了什么。一个会话里所有文件改动，一屏看完再决定要不要提交 \| See what the agent actually changed. Every file it wrote this ses |
| [xczhanjun/lazeword](https://github.com/xczhanjun/lazeword) | Client (Web UI) | `dsh-lazeword` | npm | 1 |  |
| [ztlovelsw/dsh-model-profile](https://github.com/ztlovelsw/dsh-model-profile) | Client (Web UI) | `@ztlovelsw/dsh-model-profile` | npm | 1 | 在「设置 → 模型」的模型目录编辑器行内配置每个模型的图像支持与思考等级（reasoning efforts） |
| [AndyYang12345/dsh-butler-memory](https://github.com/AndyYang12345/dsh-butler-memory) | Client (Web UI) | `dsh-butler-memory` | npm | 0 | A dsh plugin that uses the butler memory mcp server to achieve better and organized memory for dsh. Long term  |
| [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) | Client (Web UI) | `dsh-wsl-workspace-picker` | npm | 0 | Enhanced workspace directory browser for DeepSeek Harness web UI: one-click access to  /mnt  Windows drives un |
| [geebos/dsh-terminal](https://github.com/geebos/dsh-terminal) | Client (Web UI) | `@geebos/dsh-terminal` | npm | 0 | Embeds a collapsible interactive terminal inside DeepSeek Harness Web conversations |
| [libinghui55/dsh-tavily-search](https://github.com/libinghui55/dsh-tavily-search) | Client (Web UI) | `dsh-tavily-search` | npm | 0 | Tavily-backed web search provider plugin for DeepSeek Harness (dsh): GUI config card with API key + on/off swi |
| [lijian-ui/dsh-session-cleaner](https://github.com/lijian-ui/dsh-session-cleaner) | Client (Web UI) | `@lijian-ui/dsh-session-cleaner` | npm | 0 | 为 DeepSeek Harness (dsh) 提供会话管理：列表（含标题）/ 点击预览 / 真删除（二次确认）/ 归档分组与恢复。 |
| [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) | Client (Web UI) | `dsh-agent-skills` | npm | 0 | Discover and manage Agent Skills inside DeepSeek Harness |
| [preflower/deepseek-harness-compaction-ui](https://github.com/preflower/deepseek-harness-compaction-ui) | Client (Web UI) | `deepseek-harness-compaction-ui` | npm | 0 | Visual percentage and token settings for official DeepSeek Harness compaction |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | Client (Web UI) | `deepseek-plugin-store` | Git only | 19 | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | Client (Web UI) | `dsh-prompt-enhancer` | Git only | 14 | DeepSeek Harness DSH 提示词增强插件：✨ 一键优化草稿，增强提示词。 |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Client (Web UI) | `@dsh-external/dsh-mobile` | Git only | 14 |  |
| [bruc3van/dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) | Client (Web UI) | `dsh-desktop-safe-market` | Git only | 6 | 唯一主打安全，提倡先审查再安装的 DSH 市场 (review-before-install DSH marketplace) |
| [haiyoucuv/dsh-model-provider-label](https://github.com/haiyoucuv/dsh-model-provider-label) | Client (Web UI) | `dsh-model-provider-label` | Git only | 2 | DeepSeek Harness plugin that disambiguates same-named models by showing their provider |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | Client (Web UI) | `dsh-skin-market` | Git only | 2 |  |
| [xDylanLong/dsh-snapmarketing](https://github.com/xDylanLong/dsh-snapmarketing) | Client (Web UI) | `@snapmarketing/dsh-plugin-center` | Git only | 2 | dsh-snapmarketing is a thin DeepSeek Harness surface for discovering, installing, and managing allowlisted plu |
| [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) | Client (Web UI) | `@hewhenjay/dsh-provider-hub` | Git only | 1 | Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs |
| [JUANWANG-BUAA/dsh-session-git](https://github.com/JUANWANG-BUAA/dsh-session-git) | Client (Web UI) | `dsh-session-git` | Git only | 1 | Conversation lineage for DeepSeek Harness: fork at a completed turn and show the family tree. Does not rewind  |
| [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) | Client (Web UI) | `dsh-shortcuts` | Git only | 1 | DeepSeek Harness WebUI 键盘快捷键插件（34 个预置功能、一键录制自定义、静默权限切换）— Fully customizable keyboard shortcuts for the DSH Web |
| [haiyoucuv/dsh-chat-tweaks](https://github.com/haiyoucuv/dsh-chat-tweaks) | Client (Web UI) | `dsh-chat-tweaks` | Git only | 1 | DSH web UI-tweak plugin: show the provider display name next to the model name in the composer model seat, rem |
| [jxwb125646/dsh-niu-lai](https://github.com/jxwb125646/dsh-niu-lai) | Client (Web UI) | `dsh-niu-lai` | Git only | 1 | 《牛来》 meme sound board for DeepSeek Harness Web: plays the movie 妈妈 when you send a message and 牛来 when a task  |
| [luis1232023/dsh-workspace-enhance](https://github.com/luis1232023/dsh-workspace-enhance) | Client (Web UI) | `dsh-workspace-enhance` | Git only | 1 | 增强dsh左侧工作区区侧栏——每个工作区文件夹下提供 会话/文件/Git 子 Tab，含文件树与右侧预览、Git 的 Changes/Graph 双视图、搜索、视图切换与添加工作区，界面样式对齐默认插件。 |
| [realMisakaMikoto/dsh-skin-studio](https://github.com/realMisakaMikoto/dsh-skin-studio) | Client (Web UI) | `dsh-skin-studio` | Git only | 1 | DeepSeek Harness 自定义皮肤工作室，支持全界面配色、组件图片/视频背景与皮肤包分享 |
| [tttwh/dsh-plugin-Audit](https://github.com/tttwh/dsh-plugin-Audit) | Client (Web UI) | `dsh-plugin-Audit` | Git only | 1 | 将DeepSeek Harness插件列表按来源分组展示——官方插件与自行安装插件，一目了然。 |
| [Eleven-is-cool/dsh-worktree](https://github.com/Eleven-is-cool/dsh-worktree) | Client (Web UI) | `@eleven-is-cool/dsh-worktree` | Git only | 0 | Git worktree plugin for DeepSeek Harness web: browse/create worktrees from the workspace panel |
| [LINNoot/dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | Client (Web UI) | `dsh-pet-bridge` | Git only | 0 | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [LeemanCheung/dsh-skin-studio](https://github.com/LeemanCheung/dsh-skin-studio) | Client (Web UI) | `dsh-skin-studio` | Git only | 0 | A local token-safe DSH theme generator, editor, auditor, and exporter |
| [LeemanCheung/dsh-vibe-pack](https://github.com/LeemanCheung/dsh-vibe-pack) | Client (Web UI) | `dsh-vibe-pack` | Git only | 0 | Transactional data-only DSH configuration packs with integrity, ownership, and rollback |
| [LeemanCheung/dsh-whale-companion](https://github.com/LeemanCheung/dsh-whale-companion) | Client (Web UI) | `dsh-whale-companion` | Git only | 0 | A native DSH desktop whale with growth, achievements, skins, and privacy-safe progress tracking |
| [SMWHff/dsh-delete-session](https://github.com/SMWHff/dsh-delete-session) | Client (Web UI) | `dsh-delete-session` | Git only | 0 | DSH Web client+host plugin: delete a session (durable log + workspace accounting) from the session overflow me |
| [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) | Client (Web UI) | `@dsh-community/dsh-req-workbench` | Git only | 0 | DeepSeek Harness Web UI 插件：需求管理工作台，从对话/文本/本地文件解析并管理需求与子任务，支持截止时间与超时提醒。 |
| [Suef-666/dsh-tab-alert](https://github.com/Suef-666/dsh-tab-alert) | Client (Web UI) | `dsh-tab-alert` | Git only | 0 |  |
| [Yui-Little/dsh-mobile-shell](https://github.com/Yui-Little/dsh-mobile-shell) | Client (Web UI) | `dsh-mobile-shell` | Git only | 0 | Mobile shell UI plugin for DeepSeek Harness web: overlay drawer, full-width conversation, settings sheet, mark |
| [fengs2021/dsh-plugin-catalog](https://github.com/fengs2021/dsh-plugin-catalog) | Client (Web UI) | `dsh-plugin-catalog` | Git only | 0 |  |
| [fengs2021/dsh-file-bridge](https://github.com/fengs2021/dsh-file-bridge) | Client (Web UI) | `dsh-file-bridge` | Git only | 0 | DSH 文件收发桥：📎附件按钮上传（图片原生预览条/文件链接）+ send_files 工具下发 + /dsh-files 静态服务 + 反引号路径一键调起侧边栏 explorer |
| [huangrx6/dsh-plugin](https://github.com/huangrx6/dsh-plugin) | Client (Web UI) | `dsh-layout` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：Skill 管理（导入/详情/多格式文件预览）、MCP 服务器管理（补丁层读写/测试连接/工具明细）、布局设置 |
| [omdsh-plugins/omdsh-chatmode](https://github.com/omdsh-plugins/omdsh-chatmode) | Client (Web UI) | `@omdsh-plugins/omdsh-chatmode` | Git only | 0 | Chat mode for the DeepSeek Harness web GUI: a Chat/Work switch above the conversation, a workspace-free sessio |
| [omdsh-plugins/omdsh-sidechat](https://github.com/omdsh-plugins/omdsh-sidechat) | Client (Web UI) | `@omdsh-plugins/omdsh-sidechat` | Git only | 0 | Summon a conversation of its own anywhere in the DeepSeek Harness web GUI: a side panel anchored to whatever y |
| [omdsh-plugins/omdsh-shortcuts](https://github.com/omdsh-plugins/omdsh-shortcuts) | Client (Web UI) | `@omdsh-plugins/omdsh-shortcuts` | Git only | 0 | Bind a chord to anything the harness can do: a menu the desktop shell renders natively, a switchboard the runt |
| [u9521/dsh-subagent-custom-model](https://github.com/u9521/dsh-subagent-custom-model) | Client (Web UI) | `@local/dsh-subagent-custom-model` | Git only | 0 | Subagent custom model configuration plugin for DeepSeek Harness |

### Client + Host (140)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Client + Host | `dsh-plugin-desktop` | npm | 10341 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 3758 | Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Client + Host | `dsh-better-sidebar` | npm | 1791 | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/Git/子代理页面 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Client + Host | `@anionex/dsh-vision-toolkit` | npm | 574 | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Client + Host | `deepseek-idesign` | npm | 73 | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 68 | Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, sk |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Client + Host | `dsh-mnemon` | npm | 63 | Three-tier memory system for DeepSeek Harness with nine pluggable providers, smart routing, independent task A |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Client + Host | `dsh-web-plugin-manager` | npm | 52 | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖 |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Client + Host | `@mstar-harness/dsh` | npm | 48 | A Skill-driven Harness/Loop Engineering Workflow Agent Plugin |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Client + Host | `@mars-sea/dsh-commandcode-provider` | npm | 46 | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support |
| [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | Client + Host | `@pinkbanana/dsh-balance` | npm | 19 | DeepSeek Harness balance plugin for the Settings page |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Client + Host | `dsh-codex-connect` | npm | 18 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | Client + Host | `dsh-recommend` | npm | 17 | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Client + Host | `dsh-codex` | npm | 16 | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | Client + Host | `@canglongcl/dsh-web-review` | npm | 15 | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) | Client + Host | `dsh-smooth-stream` | npm | 15 | DeepSeek Harness (dsh) plugin: silky streaming reveal, no flicker. dsh 丝滑流式渲染插件。 |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | Client + Host | `@leetoners/dsh-ui-subagent-monitor` | npm | 11 |  |
| [icodesign/orbis](https://github.com/icodesign/orbis) | Client + Host | `@orbisapp/remote-dsh` | npm | 9 | A mobile client for deepseek harness remote control |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Client + Host | `dsh-remote` | npm | 9 | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution buil |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | Client + Host | `@michengai/dsh-skills-manager` | npm | 7 | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | Client + Host | `dsh-mcp-panel` | npm | 7 | MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and  |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Client + Host | `dsh-codex-subscription` | npm | 7 | 在 DeepSeek Harness 中直接使用 ChatGPT/Codex 订阅，无需 OpenAI API Key 或 Codex CLI，支持 OAuth 登录、订阅搜索与额度显示 \| ChatGPT/Codex |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | Client + Host | `dsh-passwords` | npm | 7 | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, sub |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Client + Host | `dsh-permission-rules` | npm | 6 | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-na |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Client + Host | `dsh-token-panel` | npm | 6 | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly  |
| [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Client + Host | `dsh-llm-fallbacks` | npm | 6 | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [siegfly/dsh-deepseek-vision](https://github.com/siegfly/dsh-deepseek-vision) | Client + Host | `dsh-deepseek-vision` | npm | 6 | Vision-language gateway plugin for DeepSeek Harness - paste an image, DeepSeek sees text |
| [springbrand-lab/dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 5 |  |
| [AdonisSheldon/dsh-openai-oauth](https://github.com/AdonisSheldon/dsh-openai-oauth) | Client + Host | `dsh-openai-oauth` | npm | 4 | Use ChatGPT OAuth and OpenAI Codex models in DeepSeek Harness—no API key or Codex CLI required. |
| [Anestis271/dsh-desktop](https://github.com/Anestis271/dsh-desktop) | Client + Host | `@anestis271/dsh-desktop` | npm | 4 | Turn the official DeepSeek Harness WebUI into a natural desktop experience. |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Client + Host | `dsh-auto-review` | npm | 4 | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns stru |
| [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) | Client + Host | `dsh-output-styles` | npm | 3 | Claude Code outputStyles for DeepSeek Harness - session-scoped, durable, runtime-switchable model output style |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Client + Host | `dsh-plugin-subagent-director` | npm | 3 | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plu |
| [SeverusZh/dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) | Client + Host | `dsh-yolo-mode` | npm | 3 | dsh-yolo-mode - an LLM-powered auto-approval plugin for DeepSeek Harness sandbox escalations (built-in presets |
| [astra3294/dsh-doctor](https://github.com/astra3294/dsh-doctor) | Client + Host | `dsh-doctor` | npm | 3 | Deterministic diagnostics and recovery for DeepSeek Harness |
| [banlanzs/dsh-web-enhanced](https://github.com/banlanzs/dsh-web-enhanced) | Client + Host | `dsh-web-enhanced` | npm | 3 | [building……] DeepSeek Harness's web enhancement plugin—brings task dashboards, Git graphs, workspace file pane |
| [shatyuka/dsh-llm-codebuddy](https://github.com/shatyuka/dsh-llm-codebuddy) | Client + Host | `@shatyuka/dsh-llm-codebuddy` | npm | 3 | Tencent CodeBuddy plugin for DeepSeek Harness (dsh). |
| [zhxqc/dsh-oh-my-theme](https://github.com/zhxqc/dsh-oh-my-theme) | Client + Host | `dsh-oh-my-theme` | npm | 3 | DeepSeek Harness (dsh) web plugin with themes, global typography, @file mentions, project file tree, and Markd |
| [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) | Client + Host | `@jiyr0119/dsh-workspace-explorer` | npm | 2 | DeepSeek Harness 工作区文件资源管理器:右侧目录树面板,点击/拖拽文件引用进输入框,UI 对齐 DSH 原生风格 \| Workspace file explorer plugin for DeepSee |
| [Ready22Race/team-task](https://github.com/Ready22Race/team-task) | Client + Host | `@ready22race/dsh-team-task` | npm | 2 | team-task for DeepSeek Harness (dsh): long-horizon multi-agent tasks — reviewed plan DAG, runtime-owned settle |
| [SailingLoong/loongport-dsh](https://github.com/SailingLoong/loongport-dsh) | Client + Host | `loongport` | npm | 2 | LoongPort npm setup CLI for DeepSeek Harness (dsh) OpenAI-compatible routes |
| [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) | Client + Host | `dsh-auth-gate` | npm | 2 | Login gate for the DeepSeek Harness (dsh) web surface: password or shared-token authentication, session cookie |
| [hyqibot/DeepSeek-Harness-Token-Free](https://github.com/hyqibot/DeepSeek-Harness-Token-Free) | Client + Host | `dsh-plugin-desktop` | npm | 2 | A token-free desktop client for the DeepSeek Harness，enjoy！为 DeepSeek Harness (DSH)     生态打造的全免Token费的桌面端 ，极简极 |
| [seven282/oss-prompt-optimizer](https://github.com/seven282/oss-prompt-optimizer) | Client + Host | `oss-prompt-optimizer` | npm | 2 | 用于优化 DeepSeek harness提示词优化器，提升 AI 输出质量 |
| [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) | Client + Host | `dsh-vision` | npm | 2 | DeepSeek Harness: vision |
| [863683348/dsh-plugin-audit](https://github.com/863683348/dsh-plugin-audit) | Client + Host | `dsh-audit` | npm | 1 | Plugin health audit for DeepSeek Harness: sync the GitHub dsh-plugin topic into a local catalog, probe npm, st |
| [Britneycode/dsh-update-center](https://github.com/Britneycode/dsh-update-center) | Client + Host | `dsh-update-center` | npm | 1 | dsh (DeepSeek Harness) 更新中心与插件市场：自托管 plugins.json 注册表（GitHub dsh-plugin 主题自动聚合 + npm 包名映射秒级安装），一键安装/更新/卸载/禁用插件 |
| [J-Chien/dsh-meter](https://github.com/J-Chien/dsh-meter) | Client + Host | `dsh-meter` | npm | 1 | Per-session billing plugin for DeepSeek Harness: token buckets, cache hit rate, and peak-aware cost in the ses |
| [JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) | Client + Host | `dsh-layered-memory` | npm | 1 | Layered memory plugin for DeepSeek Harness (dsh) — auto-distills conversations into L0–L3 memories (raw dialog |
| [MRZHUH/dsh-remote-server](https://github.com/MRZHUH/dsh-remote-server) | Client + Host | `dsh-remote-server` | npm | 1 | Mention a server with @ in a DeepSeek Harness session and run commands on it over SSH, behind a two-tier appro |
| [MarecGents/deepseek-harness-hub](https://github.com/MarecGents/deepseek-harness-hub) | Client + Host | `@marecgents/dsh-hub` | npm | 1 | windows desktop project as plugin for deepseek harness |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | Client + Host | `@michengai/dsh-agency-agents` | npm | 1 | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [PerryLink/dsh-budget](https://github.com/PerryLink/dsh-budget) | Client + Host | `dsh-budget` | npm | 1 | Cost governance for DeepSeek Harness: aggregated token/cost metering per model, session and day, budget caps w |
| [WenhongPan/dsh-projects](https://github.com/WenhongPan/dsh-projects) | Client + Host | `dsh-projects` | npm | 1 | Codex-inspired project and session management for DeepSeek Harness. |
| [cookiesheep/whale-on-desk](https://github.com/cookiesheep/whale-on-desk) | Client + Host | `whale-on-desk` | npm | 1 | A pixel-art whale companion for DeepSeek Harness — it swims while your agents work and taps the glass when an  |
| [edynasty/dsh-opencode-go-provider](https://github.com/edynasty/dsh-opencode-go-provider) | Client + Host | `dsh-opencode-go-provider` | npm | 1 | DSH OpenCode Go provider plugin |
| [elves-ai/dsh-web-search-firecrawl](https://github.com/elves-ai/dsh-web-search-firecrawl) | Client + Host | `@elves-ai/dsh-web-search-firecrawl` | npm | 1 | Firecrawl-backed search provider for the DeepSeek Harness web capability seam (ctx.web) |
| [fazhu4/dsh-activity-report](https://github.com/fazhu4/dsh-activity-report) | Client + Host | `dsh-activity-report` | npm | 1 | dsh的本地用量面板，统计 Token、请求、Agent 活动、工具调用和性能 |
| [gfds2005/dsh-timed-goal](https://github.com/gfds2005/dsh-timed-goal) | Client + Host | `dsh-timed-goal` | npm | 1 | DSH（DeepSeek Harness） Web 插件：在任意对话中配置一次性（或每日重复）任务——一个绝对时间加上要执行的提示词。到点时，插件将对话权限固定为 full access（danger-full-acce |
| [kanchengw/dsh-mindseye](https://github.com/kanchengw/dsh-mindseye) | Client + Host | `dsh-mindseye` | npm | 1 | Plug-in vision for text-only models in DSH, with native multimodal interaction, layered memory cache, and inte |
| [mouliangyu/dsh-plugins](https://github.com/mouliangyu/dsh-plugins) | Client + Host | `dsh-remote` | npm | 1 | Community plugins for DeepSeek Harness |
| [saitamahang/dsh-skill-importer](https://github.com/saitamahang/dsh-skill-importer) | Client + Host | `dsh-skill-importer` | npm | 1 | deepSeek Harness plugin: import and manage skills from files or URLs, with a composer picker and /skills comma |
| [ycp424c/dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | Client + Host | `@ycp424c/dsh-luna-vision-bridge` | npm | 1 | DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek |
| [863683348/dsh-trend-radar](https://github.com/863683348/dsh-trend-radar) | Client + Host | `dsh-trend-radar` | npm | 0 | Ecosystem trend dashboard (行情面板) for dsh plugins: snapshot dsh-plugin topic + awesome list into local history, |
| [Czerror/dsh-plugin-prompt-tool](https://github.com/Czerror/dsh-plugin-prompt-tool) | Client + Host | `dsh-plugin-prompt-tool` | npm | 0 | DSH 插件：简体中文行为规范三层注入（常驻层 + prompt 技能 + anchored preset 锚定注入）+ Web UI 编辑 prompt.md |
| [GraySilver/dsh-task-modes](https://github.com/GraySilver/dsh-task-modes) | Client + Host | `@graysilver/dsh-task-modes` | npm | 0 | 让每一次 Agent 协作都有明确的工作方式。Independent DeepSeek Harness Web plugin with composable Execute/Plan, Standard/First pr |
| [H97y/dsh-devflow](https://github.com/H97y/dsh-devflow) | Client + Host | `dsh-devflow` | npm | 0 | Automated development pipeline plugin for DeepSeek Harness: requirement pool → LLM refine/design/plan/review → |
| [Neumannzc/dsh-archive-manager](https://github.com/Neumannzc/dsh-archive-manager) | Client + Host | `@tangzai/dsh-ui-archive-manager` | npm | 0 | 归档管理插件：DSH 设置页按工作区展示归档会话并支持取消归档（Archive manager settings section for DeepSeek Harness） |
| [RangeKing/dsh-iris](https://github.com/RangeKing/dsh-iris) | Client + Host | `dsh-iris` | npm | 0 | Progressive capability routing for DeepSeek Harness |
| [SiriLee/dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | Client + Host | `dsh-edit-approval` | npm | 0 | DeepSeek Harness plugin: per-edit approval with red/green line diff before write/edit/str_replace_editor (appr |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | Client + Host | `dsh-rewind-plugin` | npm | 0 | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantic |
| [Sttrevens/dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) | Client + Host | `@steven-wu/dsh-linked-folders` | npm | 0 | dsh plugin: multi-folder workspace — global linked-folders list + per-session on-the-fly linking, managed from |
| [bitxeno/dsh-at-github](https://github.com/bitxeno/dsh-at-github) | Client + Host | `dsh-at-github` | npm | 0 | GitHub issue and pull request references for the DeepSeek Harness web GUI |
| [meltartica/dsh-mcp-servers](https://github.com/meltartica/dsh-mcp-servers) | Client + Host | `dsh-mcp-servers` | npm | 0 | DeepSeek Harness bundle that exposes Model Context Protocol (MCP) servers as native tools, with a settings UI, |
| [omdsh-plugins/omdsh-plughub](https://github.com/omdsh-plugins/omdsh-plughub) | Client + Host | `@omdsh-plugins/omdsh-plughub` | npm | 0 | The omdsh plugin hub: a Settings tab that installs and removes omdsh plugins from a configurable upstream, and |
| [peterliucius/dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) | Client + Host | `dsh-prompt-optimize` | npm | 0 | Rewrite a composer draft through an auxiliary LLM call without sending a message |
| [quicksandznzn/dsh-session-share](https://github.com/quicksandznzn/dsh-session-share) | Client + Host | `dsh-session-share` | npm | 0 | Share and import complete DeepSeek Harness Session trees as validated, offline Capsules with local ZIP transfe |
| [ruby1304/dsh-turn-fork](https://github.com/ruby1304/dsh-turn-fork) | Client + Host | `dsh-turn-fork` | npm | 0 | Turn-atomic message editing, retry, reroll and version-tree navigation for DeepSeek Harness conversations — th |
| [valuz-ai/dsh-valuz-genui](https://github.com/valuz-ai/dsh-valuz-genui) | Client + Host | `@valuz/dsh-valuz-genui` | npm | 0 | DeepSeek Harness plugin: generate_ui — the model authors A2UI documents rendered as interactive surfaces in th |
| [xiaosenho/dsh-plugin-remote-access](https://github.com/xiaosenho/dsh-plugin-remote-access) | Client + Host | `@xiaosenho/dsh-plugin-remote-access` | npm | 0 | dsh远程访问插件，支持局域网和公网隧道连接 |
| [zoyluoblue/deepseek-harness-billing](https://github.com/zoyluoblue/deepseek-harness-billing) | Client + Host | `@zoytown/dsh-billing` | npm | 0 | DeepSeek Harness (dsh) plugin for DeepSeek API account balance — sidebar indicator, Settings page, and /balanc |
| [zoyluoblue/deepseek-harness-token](https://github.com/zoyluoblue/deepseek-harness-token) | Client + Host | `@zoytown/dsh-token` | npm | 0 | DeepSeek Harness (dsh) plugin for machine-wide token usage statistics — a Settings page with totals, a GitHub- |
| [zuoguyoupan2023/openharness-reader](https://github.com/zuoguyoupan2023/openharness-reader) | Client + Host | `openharness-reader` | npm | 0 | OpenHarness Reader - workspace file browser/editor with Markdown preview for DeepSeek Harness Web |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | Client + Host | `@ethanyoq/dsh-ai-novel-writer` | Git only | 369 | 本地优先 AI 小说创作工作台，提供 Windows/macOS 桌面版与 DeepSeek Harness 插件开发预览，支持角色、大纲、章节蓝图、审稿修稿和本地模型。 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Client + Host | `dsh-at-file` | Git only | 296 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path  |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 38 | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | Client + Host | `@dsh-external/ego-browser` | Git only | 21 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | Client + Host | `@dsh-scholar/research-plugin` | Git only | 20 | dsh-scholar |
| [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Client + Host | `dsh-agent-team-gui` | Git only | 19 | Persistent multi-model agent squads for DeepSeek Harness — reusable teams, per-agent model/tool policies, and  |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Client + Host | `dsh-user-experience` | Git only | 18 | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX  |
| [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | Client + Host | `@dsh-external/dsh-sidechain` | Git only | 9 | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | Client + Host | `@ramify/dsh-ramify` | Git only | 9 | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| [JustGenius-s/DSH-Plugs](https://github.com/JustGenius-s/DSH-Plugs) | Client + Host | `@just-genius/dsh-codex` | Git only | 6 | DSH Plugins Cellection |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | Client + Host | `dsh-awiki` | Git only | 3 | AWiki identity and messaging plugin for DeepSeek Harness |
| [MagicCrazyMan/dsh-password-prompt](https://github.com/MagicCrazyMan/dsh-password-prompt) | Client + Host | `dsh-password-prompt` | Git only | 2 | DeepSeek Harness plugin: masked password panel in the Web GUI (password_prompt tool) — bundle + dual-face plug |
| [aka-danielZhang/dsh-mcp-settings](https://github.com/aka-danielZhang/dsh-mcp-settings) | Client + Host | `dsh-mcp-settings` | Git only | 2 | DSH bundle for MCP server management, inventory status, and Web settings |
| [tyql688/dsh-providers](https://github.com/tyql688/dsh-providers) | Client + Host | `dsh-providers` | Git only | 2 | Model providers for DeepSeek Harness: sign in with OAuth or an API key, and keep every provider's model catalo |
| [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | Client + Host | `dsh-nebula` | Git only | 2 | nebula v5 plugin for deepseek harness |
| [1321928757/dsh-prompt-polish](https://github.com/1321928757/dsh-prompt-polish) | Client + Host | `dsh-prompt-polish` | Git only | 1 | 输入栏提示词优化插件 / Input-bar prompt optimizer for DeepSeek Harness：6 种策略 × 3 种语言一键重写草稿，可选会话上下文，带确认弹窗、最近 5 次历史与三级设置持久 |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Client + Host | `dsh-web-tools` | Git only | 1 | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXN |
| [LeemanCheung/dsh-agent-arena](https://github.com/LeemanCheung/dsh-agent-arena) | Client + Host | `dsh-agent-arena` | Git only | 1 | Isolated multi-model coding matches with deterministic verification, scoring, and reports |
| [PandaAIDD/dsh-molecule-viewer](https://github.com/PandaAIDD/dsh-molecule-viewer) | Client + Host | `@dsh-plugins/dsh-molecule-viewer` | Git only | 1 | DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染交互式 3D 分子查看器（3Dmol.js，支持旋转/缩放/样式切换/着色）。 |
| [cungphammanh590-star/dsh-quiz](https://github.com/cungphammanh590-star/dsh-quiz) | Client + Host | `dsh-quiz` | Git only | 1 | 让碎片化知识随问答深入脑海 |
| [flg1217/dsh-llm-agy](https://github.com/flg1217/dsh-llm-agy) | Client + Host | `@dsh-external/dsh-llm-agy` | Git only | 1 | AGY (Antigravity CLI) integration for DeepSeek Harness: LLM adapter subagents, deep web search, connectivity d |
| [huxint/dsh-team](https://github.com/huxint/dsh-team) | Client + Host | `dsh-team` | Git only | 1 | Agent teams for DeepSeek Harness: named long-lived teammates over ctx.subagents, a shared task list, a member- |
| [kaiqiangh/dsh-workshpace-plugin](https://github.com/kaiqiangh/dsh-workshpace-plugin) | Client + Host | `dsh-workspace-plugin` | Git only | 1 | Inspect the files an agent touched, review session artifacts, preview bounded content, and manage local Worksp |
| [lhwu1/dsh-lookseek](https://github.com/lhwu1/dsh-lookseek) | Client + Host | `dsh-lookseek` | Git only | 1 | 可以看见ai的执行步骤，将ai的步骤抽出来为对应动画，增加编码时等待的娱乐性。 |
| [luodeb/dsh-web-auth-gateway](https://github.com/luodeb/dsh-web-auth-gateway) | Client + Host | `dsh-web-auth-gateway` | Git only | 1 | Authentication reverse-proxy gateway plugin for DeepSeek Harness Web |
| [space-spacee-clamation/dsh-package-manager](https://github.com/space-spacee-clamation/dsh-package-manager) | Client + Host | `@dsh-ext/dsh-package-manager` | Git only | 1 | dsh包管理器中间件，对原有的add的模式进行的封装，支持预设和插件  （内容还在迭代!!!!） |
| [spacexun2/dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) | Client + Host | `@dsh-external/dsh-worktime-board` | Git only | 1 | 🐂🐴 牛马修仙看板：DeepSeek Harness 工时统计 × 修仙养成——把每一分钟劳动，都修成境界（日/周/月 + 学年年历，炼气→宇宙洪荒） |
| [wangxing-git/dsh-autogate](https://github.com/wangxing-git/dsh-autogate) | Client + Host | `dsh-autogate` | Git only | 1 | DeepSeek Harness 自动审批插件：在 workspace-write 沙箱之上叠加确定性规则 + LLM 安全审批，自动模式不放宽沙箱、fail-closed。 Safe auto-approval for |
| [AlexYin-Tongji/dsh-plugin-console](https://github.com/AlexYin-Tongji/dsh-plugin-console) | Client + Host | `dsh-plugin-console` | Git only | 0 | DSH Plugin Console: a verified community plugin catalog and profile manager for DeepSeek Harness |
| [AlwaysSum/deepseek-harness-kit](https://github.com/AlwaysSum/deepseek-harness-kit) | Client + Host | `@dsh-kit/plugin-file-explorer` | Git only | 0 | 让所有人可以更方便的使用DeepSeek harness |
| [AtomerCore/dsh-qq-agent-mail](https://github.com/AtomerCore/dsh-qq-agent-mail) | Client + Host | `dsh-qq-agent-mail` | Git only | 0 | A DeepSeek Harness plugin that integrates QQ Agent Mail. |
| [CodeIdeal/dsh_review](https://github.com/CodeIdeal/dsh_review) | Client + Host | `dsh_review` | Git only | 0 | Interactive Codex CLI-style code review plugin for DeepSeek Harness |
| [GuoxinShan/dsh-yzj](https://github.com/GuoxinShan/dsh-yzj) | Client + Host | `@dsh-yzj/bundle` | Git only | 0 | 云之家 (Yunzhijia) plugin bundle for DeepSeek Harness: yzj-cli bridge, 41 model-facing tools, floating workspace  |
| [MaRi23333/dsh-fish-tts](https://github.com/MaRi23333/dsh-fish-tts) | Client + Host | `dsh-fish-tts` | Git only | 0 | DeepSeek Harness 语音合成（TTS）插件：逐条回复朗读、自动朗读开关。仅支持 Fish Audio API，需自备 Key。第三方项目，非官方。 |
| [PerryLink/dsh-draw](https://github.com/PerryLink/dsh-draw) | Client + Host | `dsh-draw` | Git only | 0 | Unified static-image generation router for DeepSeek Harness: one image_generate tool with standard parameters, |
| [PerryLink/dsh-talk](https://github.com/PerryLink/dsh-talk) | Client + Host | `dsh-talk` | Git only | 0 | Voice-first session loop for DeepSeek Harness: a composer microphone button with browser/local speech-to-text  |
| [SipengXie2024/dsh-memory-hermes](https://github.com/SipengXie2024/dsh-memory-hermes) | Client + Host | `dsh-memory-hermes` | Git only | 0 | Hermes-style bounded memory + self-curating skill library for DeepSeek Harness (dsh): two-file curated memory, |
| [SipengXie2024/dsh-turn-reminder](https://github.com/SipengXie2024/dsh-turn-reminder) | Client + Host | `dsh-turn-reminder` | Git only | 0 | User-attention notifications for DeepSeek Harness (dsh) web: turn end, approval requests, and model questions  |
| [TheColdWorld/dsh-wsl-keepalive](https://github.com/TheColdWorld/dsh-wsl-keepalive) | Client + Host | `wsl-keepalive` | Git only | 0 | a Ai-Gererated plugin for Dsh alive in Windows Subsystem of Linux |
| [Xs1KVerOA/dsh-service-manage](https://github.com/Xs1KVerOA/dsh-service-manage) | Client + Host | `dsh-service-manage` | Git only | 0 | DeepSeek Harness service manager for SSH, FTP, databases, Docker and S3, with proxy support, SSH file transfer |
| [bill084153-cell/dsh-knowledge-forge](https://github.com/bill084153-cell/dsh-knowledge-forge) | Client + Host | `dsh-knowledge-forge` | Git only | 0 | DeepSeek Harness (DSH) plugin for local-first automatic Wiki memory and native Skill generation. |
| [bx33661/dsh-omv](https://github.com/bx33661/dsh-omv) | Client + Host | `dsh-omv` | Git only | 0 | Native DeepSeek Harness workbench for evidence-first vulnerability research, reproduction, and reporting. |
| [crack-time/dsh-client-ui-skin-cottage](https://github.com/crack-time/dsh-client-ui-skin-cottage) | Client + Host | `@crack/dsh-client-ui-skin-cottage` | Git only | 0 | Pastoral Cottage skin for the DeepSeek Harness web GUI: 4K wallpaper + frosted glass panels (pure-UI dsh.clien |
| [facai0316/dsh-auto-coding](https://github.com/facai0316/dsh-auto-coding) | Client + Host | `@auto-coding/mega` | Git only | 0 | 一个代码流水线，前期磨合好了以后，会有个很舒服的 vibe coding 体验，也可以更好的把闲时 token 利用起来（白天人肉测试+写需求+审核前一天的计划和决策，晚上让流水线自己挂着跑） |
| [jean3690/dsh-devtoolbox](https://github.com/jean3690/dsh-devtoolbox) | Client + Host | `dsh-devtoolbox` | Git only | 0 | DSH 本地工具箱插件：侧边栏独立页面 + /toolbox 命令 + 配置驱动的 agent 工具注册，35 个纯本地小工具（文本/编码/数据/安全/提取/转换/参考/效率），数据不出本机。 |
| [omdsh-plugins/omdsh-codemode](https://github.com/omdsh-plugins/omdsh-codemode) | Client + Host | `@omdsh-plugins/omdsh-codemode` | Git only | 0 | Code mode for the DeepSeek Harness web GUI: a third segment beside Chat and Work whose column is the harness's |
| [omdsh-plugins/omdsh-editor](https://github.com/omdsh-plugins/omdsh-editor) | Client + Host | `@omdsh-plugins/omdsh-editor` | Git only | 0 | Open the current project directory in a native editor from the DeepSeek Harness web GUI: the session header's  |
| [omdsh-plugins/omdsh-sidepanel](https://github.com/omdsh-plugins/omdsh-sidepanel) | Client + Host | `@omdsh-plugins/omdsh-sidepanel` | Git only | 0 | Work-mode side panels for the DeepSeek Harness web GUI: a right file explorer with previews and a bottom termi |
| [omdsh-plugins/omdsh-remdev](https://github.com/omdsh-plugins/omdsh-remdev) | Client + Host | `@omdsh-plugins/omdsh-remdev` | Git only | 0 | Remote development for the DeepSeek Harness web GUI: connect a workspace to an SSH server, provision a .dsh-se |
| [omdsh-plugins/omdsh-usage](https://github.com/omdsh-plugins/omdsh-usage) | Client + Host | `@omdsh-plugins/omdsh-usage` | Git only | 0 | API spend at a glance for the DeepSeek Harness web GUI: this conversation, this project, and the account balan |
| [omdsh-plugins/omdsh-status](https://github.com/omdsh-plugins/omdsh-status) | Client + Host | `@omdsh-plugins/omdsh-status` | Git only | 0 | Current project and its git state at a glance for the DeepSeek Harness web GUI: the project name with its bran |
| [realpkuasule/dsh-side-notify](https://github.com/realpkuasule/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |
| [realpkuasule/dsh-sidechat](https://github.com/realpkuasule/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |
| [tbxy09/dsh-replay-lab](https://github.com/tbxy09/dsh-replay-lab) | Client + Host | `@tbxy09/dsh-replay-lab` | Git only | 0 | Controlled request-surface replay and regression workbench for DeepSeek Harness |
| [xiagaogaozi/dsh-subagent-pool](https://github.com/xiagaogaozi/dsh-subagent-pool) | Client + Host | `dsh-subagent-pool` | Git only | 0 | DSH named-subagent pool: configure reusable subagents (model/reasoning preset) in settings and call them by na |
| [xiaozhiaixue/dsh-side-notify](https://github.com/xiaozhiaixue/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |
| [xiaozhiaixue/dsh-sidechat](https://github.com/xiaozhiaixue/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |

## Partial attribution (42)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Unattributed | `dsh-vision-router` | npm | 515 | Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q& |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | Unattributed | `dsh-plugins-store` | npm | 57 | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness commu |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Unattributed | `dsh-lark-channel` | npm | 27 | Lark/Feishu IM bot channel for DeepSeek Harness \| 飞书 DeepSeek Harness （DSH）插件 |
| [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | Unattributed | `@dhicoc/dsh-reverse-skill` | npm | 24 | Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authoriz |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 20 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [CH4ACKO3/dsh-harmony](https://github.com/CH4ACKO3/dsh-harmony) | Unattributed | `dsh-harmony` | npm | 10 | A library for patching, replacing and decorating dsh plugin during runtime |
| [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) | Unattributed | `dsh-extension-hub` | npm | 8 | Manage DSH（DeepSeek Harness)） skills and MCP servers: CLI + settings-page UI with zh/en i18n, Claude/Codex imp |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Unattributed | `dsh-import-agents` | npm | 7 | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-clic |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | Unattributed | `@kc0ed/dsh-bottom-bar` | npm | 6 | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) | Unattributed | `dsh-spend` | npm | 5 | Token usage & cost monitor for DeepSeek Harness — floating widget with multi-dimensional stats, time-series ch |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Unattributed | `dsh-plugin-guide` | npm | 4 | Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Of |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DSH 插件市场 — DeepSeek Harness 设置内一键安装社区插件，并提供公开目录站（浏览 / 复制安装命令） |
| [D4Cluv-Train/dsh-plugin-manager](https://github.com/D4Cluv-Train/dsh-plugin-manager) | Unattributed | `@d4cluvtrain/dsh-plugin-manager` | npm | 2 | 一个插件管理的小插件，功能逐步增加中... |
| [nonentity303/dsh-plugin-manager](https://github.com/nonentity303/dsh-plugin-manager) | Unattributed | `dsh-plugin-manager-pro` | npm | 2 |  |
| [Hanihahaha/deepseek-harness-plugins](https://github.com/Hanihahaha/deepseek-harness-plugins) | Unattributed | `dsh-auto-approve` | npm | 1 |  |
| [chengzhi43/dsh-file](https://github.com/chengzhi43/dsh-file) | Unattributed | `dsh-file` | npm | 1 | A VS Code-style file manager plugin for DeepSeek Harness Web / DeepSeek Harness 的 VS Code 风格文件管理器插件 |
| [jeremy9682/dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | Unattributed | `@jeremy9682/dsh-acp` | npm | 1 | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) | Unattributed | `claude2dsh` | npm | 1 |  |
| [rrrrrredy/skill-security-guard](https://github.com/rrrrrredy/skill-security-guard) | Unattributed | `dsh-skill-security-guard` | npm | 1 | Static security scanner for agent skills: A-F risk rating, safe zip scanning, CI-tested rules |
| [xgone/dsh-remote](https://github.com/xgone/dsh-remote) | Unattributed | `@xgone/dsh-remote` | npm | 1 | Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, rol |
| [Julyves/dsh-git-ui](https://github.com/Julyves/dsh-git-ui) | Unattributed | `dsh-git-ui` | npm | 0 | DeepSeek Harness (dsh) plugin: Git status pill in the session header — branch, dirty counts, ahead/behind, rec |
| [Walvez/dsh-search-failover](https://github.com/Walvez/dsh-search-failover) | Unattributed | `dsh-search-failover` | npm | 0 | DSH provider-level web search failover pool: 8 free/paid backends with quota-aware circuit breaking (keeps nat |
| [dshworks/dsh-meter](https://github.com/dshworks/dsh-meter) | Unattributed | `@dshworks/dsh-meter` | npm | 0 | The DeepSeek time-of-use meter for dsh: what this session cost, which tariff is running, when it flips, and th |
| [oThTJx/dsh-skill-impeccable](https://github.com/oThTJx/dsh-skill-impeccable) | Unattributed | `@firefly0621/dsh-skill-impeccable` | npm | 0 | DeepSeek Harness bundled skill: the impeccable frontend-design workflow (adapted from pbakaus/impeccable) for  |
| [oThTJx/dsh-skill-ponytail](https://github.com/oThTJx/dsh-skill-ponytail) | Unattributed | `@firefly0621/dsh-skill-ponytail` | npm | 0 | DeepSeek Harness bundled skill: the lazy senior dev mode (from DietrichGebert/ponytail) — YAGNI ladder, stdlib |
| [oThTJx/dsh-skill-taste](https://github.com/oThTJx/dsh-skill-taste) | Unattributed | `@firefly0621/dsh-skill-taste` | npm | 0 | DeepSeek Harness bundled skill: the design-taste frontend skill family (from Leonxlnx/taste-skill) — premium,  |
| [oThTJx/dsh-skill-karpathy-guidelines](https://github.com/oThTJx/dsh-skill-karpathy-guidelines) | Unattributed | `@firefly0621/dsh-skill-karpathy-guidelines` | npm | 0 | DeepSeek Harness bundled skill: Karpathy's coding guidelines — think before coding, simplicity first, surgical |
| [penguin-oo/dsh-delegate-router](https://github.com/penguin-oo/dsh-delegate-router) | Unattributed | `dsh-delegate-router` | npm | 0 | Automatic Flash/Pro routing for DeepSeek Harness subagent calls: light tasks go cheap, heavy tasks stay strong |
| [penguin-oo/dsh-quota-hub](https://github.com/penguin-oo/dsh-quota-hub) | Unattributed | `dsh-quota-hub` | npm | 0 |  |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | Git only | 9 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Unattributed | `@dsh-external/dsh-plugin-tts` | Git only | 5 | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings pan |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | Unattributed | `resanity` | Git only | 4 | reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。 |
| [7dgroup-ai/dsh-skill-7d-code-reviewer](https://github.com/7dgroup-ai/dsh-skill-7d-code-reviewer) | Unattributed | `@7dgroup/dsh-skill-7d-code-reviewer` | Git only | 2 | 这是一个专业级的 DSH（DeepSeek Harness）代码审查技能插件，由 7DGroup 团队开发，专为 AI 辅助代码审查场景设计。基于 TypeScript + Cordis 开发，以组合包（bundle）形 |
| [beijingwahw/dsh-companion](https://github.com/beijingwahw/dsh-companion) | Unattributed | `dsh-companion` | Git only | 2 | DeepSeek Companion — DeepSeek Harness 官方伴侣插件：对话导出/交接摘要/成本优化/全局检索 + 执行轨迹分析、Prompt 工程工作台、多模型竞技场、任务编排、安全与审计（E–J 九 |
| [shouwang37/dsh-comfyui-node-development](https://github.com/shouwang37/dsh-comfyui-node-development) | Unattributed | `dsh-comfyui-node-development` | Git only | 2 | DeepSeek Harness（DSH）插件：ComfyUI 自定义节点开发浓缩指南，打包为 comfyui-node-dev 技能 |
| [Failing-coachman563/dsh-skill-viewer](https://github.com/Failing-coachman563/dsh-skill-viewer) | Unattributed | `dsh-skill-viewer` | Git only | 0 | Manage and organize DSH skills via a web interface with one-click enable/disable, batch migration, and workspa |
| [beijingwahw/dsh-companion-dev](https://github.com/beijingwahw/dsh-companion-dev) | Unattributed | `dsh-companion` | Git only | 0 | DeepSeek Companion 开发者版 — DeepSeek Harness 官方伴侣插件完整功能集：A–J 九大模块（对话导出/交接摘要/成本优化/全局检索 + 执行轨迹分析、Prompt 工程工作台、多模型竞 |
| [beijingwahw/dsh-companion-enterprise](https://github.com/beijingwahw/dsh-companion-enterprise) | Unattributed | `dsh-companion-enterprise` | Git only | 0 | DeepSeek Companion Enterprise — DeepSeek Harness 企业级伴侣插件：安全审计与 DLP、团队协作与知识管理、任务编排与断点续跑、多模型竞技场、执行轨迹分析、Prompt 工程 |
| [syncable-dev/dsh-plugin-memtrace](https://github.com/syncable-dev/dsh-plugin-memtrace) | Unattributed | `dsh-plugin-memtrace` | Git only | 0 | 🧠 Local-first code intelligence graph for DeepSeek Harness. Structural search, blast radius, temporal memory, |
| [wwumit/dsh-compliancehub](https://github.com/wwumit/dsh-compliancehub) | Unattributed | `@wwumit/dsh-compliancehub` | Git only | 0 | Remote skill provider for DeepSeek Harness: install skills from a JSON catalog via ctx.skills |
| [wwumit/dsh-plugin-tools](https://github.com/wwumit/dsh-plugin-tools) | Unattributed | `@wwumit/dsh-plugin-tools` | Git only | 0 | Plugin tools provider for DeepSeek Harness: expert2skill, skill-compliance, dependency-scan (dsh.bundle) |

## Unverified attribution (272)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Host | `@tt-a1i/archify-dsh` | npm | 13600 | Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Host | `managed-agents` | npm | 610 | Open-source CMA-compatible agent runtime for any model, with MCP tools, sandboxed sessions, audit, replay, and |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | npm | 118 | The web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. A |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Client + Host | `dsh-usage-stats` | npm | 57 | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI (dsh  |
| [geml-spec/geml](https://github.com/geml-spec/geml) | Host | `@geml/dsh-plugin` | npm | 24 | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | Client (Web UI) | `@xmanrui/dsh-im` | npm | 23 | 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Telegram、Discord和WhatsApp）。 Connect IM bots to DeepSeek  |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | Client (Web UI) | `dsh-gui-customization` | npm | 14 | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [biociao/dsh-science](https://github.com/biociao/dsh-science) | Host | `dsh-science` | npm | 14 |  |
| [Mr-remon219/dsh-search-boost](https://github.com/Mr-remon219/dsh-search-boost) | Host | `dsh-search-boost` | npm | 10 | The plunge for dsh to boost model's search ability. |
| [weshopai/weshop-dsh-plugin](https://github.com/weshopai/weshop-dsh-plugin) | Client + Host | `weshop-dsh-plugin` | npm | 9 | Native WeShop Cordis plugin for DeepSeek Harness. Allow you to use infinite canvas with infinite creative skil |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | Host | `dsh-tavern` | npm | 7 |  |
| [a903067276-rgb/dsh-hud](https://github.com/a903067276-rgb/dsh-hud) | Client + Host | `dsh-hud` | npm | 6 | HUD status panel plugin for DeepSeek Harness (dsh) web: git status, MCP servers, skills, model & token usage i |
| [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | Host | `@maxwell-feng/dsh-windows-ocr` | npm | 6 |  |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Host | `upstream-radar` | npm | 5 | DSH plugin security and dependency monitoring for DeepSeek Harness: exact vulnerable paths, breaking updates,  |
| [dfkai/dsh-board](https://github.com/dfkai/dsh-board) | Client + Host | `dsh-board` | npm | 5 | DeepSeek Harness 侧栏用量与成本面板：官方峰谷计价 · 1M 上下文 · 词勋段位 · 成就与热力图 |
| [mengyun233/dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | Client (Web UI) | `dsh-codex-pet` | npm | 5 | 将 Codex 桌宠皮肤自动迁移到 DeepSeek Harness，在 DSH Web 界面渲染功能一致的桌宠：动画、多会话对话框、设置面板，一键迁移即插即用。 |
| [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 5 | Feishu (Lark) channel bridge for DeepSeek Harness (dsh) — message a Feishu bot, it runs a dsh agent turn, the  |
| [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) | Host | `dsh-composer-expand` | npm | 4 | Composer expand/collapse toggle for DeepSeek Harness (dsh): a ⬆/⬇ button in the composer tool row grows the in |
| [sjh9714/dsh-movein](https://github.com/sjh9714/dsh-movein) | Host | `dsh-movein` | npm | 4 | Move your whole Claude Code setup into DeepSeek Harness (DSH) with one command. Skills, MCP, hooks, instructio |
| [truelove-dreamer/dsh-plugin-vetting](https://github.com/truelove-dreamer/dsh-plugin-vetting) | Host | `dsh-plugin-vetting` | npm | 4 | DeepSeek Harness plugin: heuristic malware vetting for installed third-party plugins |
| [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) | Client (Web UI) | `dsh-skin-switcher` | npm | 4 | DeepSeek Harness Web GUI 皮肤切换插件：设置界面一键切换已安装皮肤 |
| [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | Client (Web UI) | `dsh-opencode-palette` | npm | 3 | 🎨 看腻了 DSH 默认皮肤？34 款 opencode 经典配色一键换上——tokyonight、dracula、gruvbox、matrix、rose-pine……即点即换，重启不丢。34 opencode the |
| [MHfire/dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) | Client + Host | `@mhfire/dsh-im-bridge` | npm | 3 | 即时通讯渠道(企微、飞书等) ⇄ DeepSeek Harness Agent 桥接 |
| [Phant0Meow/dsh-memory-meow](https://github.com/Phant0Meow/dsh-memory-meow) | Client + Host | `meow-memory` | npm | 3 |  |
| [StarChen-Cycler/octie-dsh-plugin](https://github.com/StarChen-Cycler/octie-dsh-plugin) | Client (Web UI) | `octie-cli` | npm | 3 | State-oriented task graph kernel for the agentic era - a DeepSeek Harness bundle: 13 octie_* tools, octie Cord |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | Host | `gongwen-skill` | npm | 3 | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风 |
| [siberiah2o/dsh-plugin-terminal](https://github.com/siberiah2o/dsh-plugin-terminal) | Client (Web UI) | `dsh-plugin-terminal` | npm | 3 | Bottom terminal panel plugin for DeepSeek Harness (DSH Web GUI) |
| [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) | Host | `@eqman00003/knowlp-rag` | npm | 3 | KnowLP-RAG: dual knowledge-graph RAG for Markdown notes — dsh plugin add @eqman00003/knowlp-rag · MCP + native |
| [XJungit/omdp](https://github.com/XJungit/omdp) | Client + Host | `@omdp/dsh-connector` | npm | 2 | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles |
| [alanzhao0128/dsh-balance-monitor](https://github.com/alanzhao0128/dsh-balance-monitor) | Client (Web UI) | `dsh-balance-monitor` | npm | 2 |  |
| [guo6x/dsh-pilot](https://github.com/guo6x/dsh-pilot) | Client + Host | `dsh-pilot` | npm | 2 | Give your DSH agent hands: drive a real browser (Edge/Chrome over CDP) from the chat — ref-driven clicking, pe |
| [maxwell-feng/dsh-tesseract-ocr](https://github.com/maxwell-feng/dsh-tesseract-ocr) | Host | `@maxwell-feng/dsh-tesseract-ocr` | npm | 2 |  |
| [truelove-dreamer/dsh-plugin-git-workflow](https://github.com/truelove-dreamer/dsh-plugin-git-workflow) | Host | `dsh-plugin-git-workflow` | npm | 2 | DeepSeek Harness plugin: first-class Git workflow tools for the model — repo status, diffs, commit creation wi |
| [winterhuan/dsh-skills-viewer](https://github.com/winterhuan/dsh-skills-viewer) | Host | `@winterchenhuan/dsh-skills-viewer` | npm | 2 | Read-only Skills settings page plugin for DeepSeek Harness Web |
| [yepyeel/dsh-vision](https://github.com/yepyeel/dsh-vision) | Host | `dsh-vision` | npm | 2 | 提供dsh中deepseek v4等无法识图的模型一双眼睛 |
| [Alvin-Somedo/dsh-app-launcher](https://github.com/Alvin-Somedo/dsh-app-launcher) | Client (Web UI) | `dsh-app-launcher` | npm | 1 | 把 DSH Web GUI 变成"桌面应用":以独立应用窗口打开,关闭窗口即优雅退出整个 DSH 进程 |
| [CN-Leo/dsh-deepseek-balance](https://github.com/CN-Leo/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | deepseek-harness 插件，实时查询deepseek账号余额 |
| [ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | Host | `dsh-vibe-math` | npm | 1 | Vibe Mathematics —— 多代理数学问题求解与形式化验证框架 |
| [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Host | `dsh-prompt` | npm | 1 | DeepSeek Harness 的 Prompt 工具箱：别再复制粘贴——24 条深度模板随手点，/prompt 与智能推荐主动兜底，装好即用、可自定义。 \| The Prompt toolbox for DeepS |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Host | `dsh-mattpocock-skills-deck` | npm | 1 | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统 |
| [LA7-F/dsh-MyCordis](https://github.com/LA7-F/dsh-MyCordis) | Host | `dsh-mycordis` | npm | 1 | 可以让你的dsh中的“Cordis插件”变得可管理，可一键生成安装包 |
| [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) | Client (Web UI) | `dsh-themes` | npm | 1 |  |
| [TwistedRiCen/dsh-vision-bridge](https://github.com/TwistedRiCen/dsh-vision-bridge) | Host | `@liangdacheng/dsh-vision-bridge` | npm | 1 | DSH-native Vision Evidence bridge for text-only reasoning models with native image attachments and strict mult |
| [daetz-coder/dsh-multi-chat](https://github.com/daetz-coder/dsh-multi-chat) | Client + Host | `dsh-multi-chat` | npm | 1 | Multi-window wall for DeepSeek Harness: run & monitor N DSH conversations side-by-side in one screen, plus an  |
| [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) | Host | `@hyzyn/dsh-plugin-kit` | npm | 1 | dsh-plugin-kit is a general-purpose plugin collection for the DeepSeek Harness (DSH) Web GUI: environment vari |
| [kouyichi/dsh-tui-app](https://github.com/kouyichi/dsh-tui-app) | Client + Host | `dsh-tui-app` | npm | 1 | DeepSeek Harness terminal UI plugin (Ink/React) |
| [luoyan96/dsh-catnap-studio](https://github.com/luoyan96/dsh-catnap-studio) | Client (Web UI) | `dsh-catnap-plugins` | npm | 1 | Cat-themed DeepSeek Harness Web UI plugin with three original themes and a calm interactive companion. Not an  |
| [lywusichen/dsh-skill-panel](https://github.com/lywusichen/dsh-skill-panel) | Client + Host | `dsh-skill-panel` | npm | 1 | DeepSeek Harness 技能悬浮窗插件：侧边栏技能按钮，一键查看当前会话已加载的技能并打开本地目录。 |
| [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | Client + Host | `dsh-approval-gate` | npm | 1 | DeepSeek Harness 自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe） |
| [moonquake2004/dsh-doctor](https://github.com/moonquake2004/dsh-doctor) | Client + Host | `@moonquake2004/dsh-doctor` | npm | 1 |  |
| [noname-iii/dsh-code-checker](https://github.com/noname-iii/dsh-code-checker) | Client + Host | `dsh-code-checker` | npm | 1 | A plugin for Deepseek Harness (well it may support other AI agent IDEs but I hadn't test it out yet) that chec |
| [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | Client + Host | `dsh-mmx-bridge` | npm | 1 | MiniMax multimodal capability hub for DeepSeek Harness (DSH): image understanding (VLM), text/image-to-video,  |
| [263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) | Host | `dsh-verify` | npm | 0 | Independent browser acceptance testing for agent deliverables. Agents self-test and pass; real browsers tell t |
| [Artificialwhale/session-reader-plugin](https://github.com/Artificialwhale/session-reader-plugin) | Host | `dsh-session-reader` | npm | 0 | Allow agent to acquire context from other sessions. |
| [E83737664/dsh-skills-manager](https://github.com/E83737664/dsh-skills-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [Enderfga/dsh-clawo](https://github.com/Enderfga/dsh-clawo) | Host | `@enderfga/dsh-clawo` | npm | 0 | DeepSeek Harness bundle: register Claw Orchestrator as an ACP subagent provider — delegate a dsh subagent to a |
| [Lion-1209/dsh-plugin-lion-skills](https://github.com/Lion-1209/dsh-plugin-lion-skills) | Host | `dsh-plugin-lion-skills` | npm | 0 | Lion-Skills — a developer-focused agent skill suite (zh) as a DeepSeek Harness plugin: 11 workflow skills moun |
| [Melody-max114/dsh-excel-panel](https://github.com/Melody-max114/dsh-excel-panel) | Client (Web UI) | `dsh-excel-panel` | npm | 0 | DSH 右侧栏 Excel 编辑插件：支持 xlsx 预览/编辑、公式实时计算、合并单元格、格式设置并保存回原文件。 |
| [MuYu-Zh/dsh-open-browser](https://github.com/MuYu-Zh/dsh-open-browser) | Client (Web UI) | `dsh-open-browser` | npm | 0 | 源码启动自动唤醒web ui |
| [Qing45/dsh-feishu-chat](https://github.com/Qing45/dsh-feishu-chat) | Host | `dsh-feishu-chat` | npm | 0 | Feishu (Lark) bot bridge for DeepSeek Harness: two-way chat with your agent, settings page for bot credentials |
| [ReachGa0/dsh-desktop](https://github.com/ReachGa0/dsh-desktop) | Host | `dsh-desktop-windows-launcher` | npm | 0 | DeepSeek Harness 桌面版（Windows）：双击即用，选区截图直接问 AI · 系统托盘、会话管理 · Featured in awesome-dsh-plugin |
| [StockMCP-net/dsh-stockmcp](https://github.com/StockMCP-net/dsh-stockmcp) | Host | `dsh-stockmcp` | npm | 0 | A DSH plugin for obtaining various US stock and macroeconomic data. |
| [jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) | Host | `dsh-jiey-browser` | npm | 0 | DeepSeek Harness plugin: drive Jiey Browser over MCP |
| [kouyichi/dsh-plugins](https://github.com/kouyichi/dsh-plugins) | Host | `dsh-a2a` | npm | 0 | dsh (DeepSeek Harness) plugin family: 31 plugins / 80+ tools — learn/profile/dream/tower/kanban + scaffold/gua |
| [liulei237136/dsh-publish-plugin](https://github.com/liulei237136/dsh-publish-plugin) | Host | `dsh-publish-plugin` | npm | 0 |  |
| [liulei237136/dsh-test-plugin](https://github.com/liulei237136/dsh-test-plugin) | Host | `dsh-test-plugin` | npm | 0 |  |
| [miiaowuwu/dsh-event-sounds](https://github.com/miiaowuwu/dsh-event-sounds) | Client (Web UI) | `dsh-client-ui-event-sounds` | npm | 0 | 语音控制插件（安洁莉娜「hirari do～」） |
| [shifan3/dsh-approve-for-me](https://github.com/shifan3/dsh-approve-for-me) | Host | `dsh-approve-for-me` | npm | 0 | Approve-for-me mode for DeepSeek Harness: LLM safety auto-approval for approval requests; high-risk destructiv |
| [suanlayu666/suanlayu-dsh-plugins](https://github.com/suanlayu666/suanlayu-dsh-plugins) | Client (Web UI) | `dsh-file-upload` | npm | 0 | Self-made DeepSeek Harness plugins (MIT) |
| [warm-flame-core/new-project-init](https://github.com/warm-flame-core/new-project-init) | Host | `new-project-init` | npm | 0 | 以存量完善为核心的项目文档体系 skill：优化已有项目文档、固化 AI 分角色协作工作流；也支持中途加入补建体系与新项目初始化。提问驱动、26 模板、MIT 开源。 |
| [winliyou/dsh-plugins](https://github.com/winliyou/dsh-plugins) | Host | `@chaoset/adaptive-perf` | npm | 0 | deepseek harness plugin set |
| [wuhobin/dsh-mcp-manage](https://github.com/wuhobin/dsh-mcp-manage) | Host | `dsh-mcp-manage` | npm | 0 | dsh plugin: Settings > MCP 服务 management page for DeepSeek Harness (DSH). List/add/edit/delete MCP servers reg |
| [xiaoyi-xx/dsh-peak-status](https://github.com/xiaoyi-xx/dsh-peak-status) | Client (Web UI) | `dsh-peak-status` | npm | 0 | DeepSeek Harness Web GUI 的高峰时段指示灯。在会话头部右上角（原生 conversation.session.header.utilities 工具位）显示一个融入界面的小胶囊，实时告诉你当前北京 |
| [yfzhou0904/dsh-plugin-gallery](https://github.com/yfzhou0904/dsh-plugin-gallery) | Host | `@yfzhou/dsh-codex-moot-escalation` | npm | 0 | A personal gallery of plugins for DeepSeek Harness |
| [zdx8637-gitdog/dshmobile](https://github.com/zdx8637-gitdog/dshmobile) | Client (Web UI) | `@zdx8637/dshmobile-bridge` | npm | 0 | 手机远程控制 DeepSeek Harness：Android App + 云端 relay + PC 插件，常驻二维码一码三用（扫码下载/配对/登录授权）。有服务器可以自行部署。 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 103 | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| brow |
| [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) | Unattributed | `dsh-dafeiyu` | npm | 76 | Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows. |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | Unattributed | `@dsh-suite/all` | npm | 38 | The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin st |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | Unattributed | `dsh1024` | npm | 36 | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install command |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Unattributed | `dsh-notifier` | npm | 33 | Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (tel |
| [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 23 | Plugin marketplace for DeepSeek Harness — live-syncs the GitHub dsh-plugin topic (1800+ repos) into a searchab |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Unattributed | `dsh-tokenledger` | npm | 22 | Relay-site attributed token usage for DeepSeek Harness — zero config, no credentials |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | Unattributed | `dsh-opencode-go-usage` | npm | 10 | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | Unattributed | `@loongsuite/dsh-plugin` | npm | 10 | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM ca |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | Unattributed | `dsh-remote-plugin` | npm | 7 | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Ses |
| [cokiscarazo-rgb/dsh-session-management](https://github.com/cokiscarazo-rgb/dsh-session-management) | Unattributed | `dsh-session-management` | npm | 5 |  |
| [losebird/dsh-plugin-market](https://github.com/losebird/dsh-plugin-market) | Unattributed | `@ace-zone/dsh-market` | npm | 3 | DeepSeek Harness plugins market｜DSH 插件市场 |
| [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) | Unattributed | `dsh-plugins-market` | npm | 2 | DSH的插件创意市场来啦!～～～欢迎使用&提供反馈！！DSH 插件创意市场 · DeepSeek Harness 插件发现与一键安装面板 全量嗅探官方 dsh-plugin topic（900+），过滤蹭标签噪音，保留人 |
| [dttxorg/deepseekeyes](https://github.com/dttxorg/deepseekeyes) | Unattributed | `@dttxorg/deepseekeyes` | npm | 2 | Auditable vision and cross-platform Computer Use runtime for DeepSeek Harness — strict evidence, health-checke |
| [siweina/dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | Unattributed | `dsh-novel-writer` | npm | 2 | DSH / DeepSeek Harness 小说写作助手插件：章节库管理、句式模式分析（九类句式/情感曲线/风格指纹）、风格自检、伏笔登记、批量导入、续写辅助。Novel writing assistant plugi |
| [Blank-not-black/dsh-remote-plugin](https://github.com/Blank-not-black/dsh-remote-plugin) | Unattributed | `dsh-remote-plugin` | npm | 1 | DSH Remote 插件独立包：DSH 原生侧边栏入口 + 右侧抽屉管理页；内置网关随 DSH 自动启停 |
| [TeaClearInkII/DSH-Marketplaces-Nexus](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus) | Unattributed | `dsh-marketplaces-nexus` | npm | 1 | 一个DSH插件市场的市场集 · DSH 万市枢纽。 |
| [a903067276-rgb/dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) | Unattributed | `dsh-file-upload` | npm | 1 | DSH 文件上传小插件（web 客户端插件） |
| [qinyre/dsh-plugin-install](https://github.com/qinyre/dsh-plugin-install) | Unattributed | `dsh-plugin-install` | npm | 1 | 给 dsh 设置页加「安装」标签页，按包名安装任意第三方插件。 |
| [uluckystar/dsh-plugin-market](https://github.com/uluckystar/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 1 | DSH 插件市场：在设置页浏览 mydsh.dev 插件大全（5596 候选 / 4876 有效），分类/AI 搜索、一键安装启用停用卸载、安全评估与自动重启。非官方社区 mydsh.dev 出品 |
| [xinyuehtx/dsh-plugin-hooks-ordering](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering) | Unattributed | `@tengxiaohtx/dsh-plugin-hooks-ordering` | npm | 1 | 为 deepseek harness 的 waterfall 和 serial 进行确定性 hooks 监听排序 |
| [xun404/dsh-pihuo-plugins](https://github.com/xun404/dsh-pihuo-plugins) | Unattributed | `@pihuo/dsh-pihuo` | npm | 1 | PiHuo: DeepSeek Harness plugins that run local ACP processes as chat workers |
| [1797833970/dsh-data-analysis-plugin](https://github.com/1797833970/dsh-data-analysis-plugin) | Unattributed | `@andy1797833970/dsh-bundle-data-analysis` | npm | 0 | DeepSeek Harness data-analysis agent plugin (Python code runtime + analysis tools + skill + bundle) |
| [940842546/dsh-permissions](https://github.com/940842546/dsh-permissions) | Unattributed | `dsh-permissions` | npm | 0 |  |
| [IZRINO/dsh-token-stats](https://github.com/IZRINO/dsh-token-stats) | Unattributed | `dsh-token-stats` | npm | 0 | DeepSeek Harness token usage statistics plugin (DSH plugin): all-session hourly/daily/weekly/monthly aggregati |
| [JxaMe/dsh-telegram-bridge](https://github.com/JxaMe/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 |  |
| [LyaxZ/dsh-quick-toc](https://github.com/LyaxZ/dsh-quick-toc) | Unattributed | `dsh-quick-toc` | npm | 0 | DeepSeek Harness 对话大纲插件：按回合分组的 Markdown 标题目录，自动跟随高亮，平滑跳转导航。 |
| [dove-a/dsh-chat-window-fold](https://github.com/dove-a/dsh-chat-window-fold) | Unattributed | `dsh-chat-window-fold` | npm | 0 | DSH web GUI plugin: auto fold/expand the chat window — bottom checkpoints hide old pages, top-scroll expands e |
| [jinhuoooo/dsh-voice-input](https://github.com/jinhuoooo/dsh-voice-input) | Unattributed | `dsh-voice-input` | npm | 0 | DSH 语音输入插件：点一下麦克风说话，文字自动进输入框。本地 Whisper 引擎，为打字小白设计。Voice-to-text plugin for DeepSeek Harness. |
| [kaixinbaba/dsh-complete-notify](https://github.com/kaixinbaba/dsh-complete-notify) | Unattributed | `dsh-complete-notify` | npm | 0 | 任务完成时播放提示音并弹出小通知（页面内 toast + 后台时系统通知）。纯浏览器方案，零系统依赖，跨 Windows/macOS/Linux。 |
| [light-only/dsh-codex-select](https://github.com/light-only/dsh-codex-select) | Unattributed | `dsh-codex-select` | npm | 0 |  |
| [liuyuelintop/dsh-conversation-exporter](https://github.com/liuyuelintop/dsh-conversation-exporter) | Unattributed | `dsh-conversation-exporter` | npm | 0 | Export DeepSeek Harness conversations as clean, human-readable Markdown. |
| [ruby1304/dsh-quota-status](https://github.com/ruby1304/dsh-quota-status) | Unattributed | `dsh-quota-status` | npm | 0 | DeepSeek Harness web plugin: minimal quota/balance card — DeepSeek API balance with tier colors & peak/off-pea |
| [sjh9714/dsh-lean](https://github.com/sjh9714/dsh-lean) | Unattributed | `dsh-lean` | npm | 0 | DeepSeek bills peak hours at 2x and peak is 09-12 and 14-18 Beijing time, the working day. npx dsh-lean audit  |
| [wingsky-1/dsh-plugin-hub](https://github.com/wingsky-1/dsh-plugin-hub) | Unattributed | `@wingsky-1/dsh-gzip` | npm | 0 | DSH (DeepSeek Harness) 插件集：npm 分发，可一键装全家桶或单独安装 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Host | `dsh-ouroboros` | Git only | 5485 | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result ne |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Host | `treg-dsh` | Git only | 429 | OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Client (Web UI) | `whale-girl` | Git only | 205 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Client + Host | `dsh-memory-evolve` | Git only | 136 | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广 |
| [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) | Client (Web UI) | `dsh-client-liang-intensity-skin` | Git only | 70 | DeepSeek Harness 滑动变阻器皮肤 |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Host | `local-shell-mcp-dsh` | Git only | 49 | Enables LLM to use a cli environment. |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | Client + Host | `dsh-auto-collapse` | Git only | 20 |  |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Client (Web UI) | `dsh-pet-remielle` | Git only | 10 |  |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | Client (Web UI) | `@vlln/dsh-task-status` | Git only | 9 | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) | Host | `dsh-composer-tools` | Git only | 8 | Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo. |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | Git only | 7 | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / liv |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Host | `dsh-plugin-guard` | Git only | 7 | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, an |
| [wangzhuo-coding/geo-content-optimizer](https://github.com/wangzhuo-coding/geo-content-optimizer) | Host | `@dsh-external/dsh-plugin-geo-content-optimizer` | Git only | 4 | GEO生成式引擎优化智能体 — 7类关键词+七层架构+EE-A-T权威框架+8维度降痕改写 |
| [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | Client (Web UI) | `dsh-desk-pet` | Git only | 3 | Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. |
| [kobenfang/bigA](https://github.com/kobenfang/bigA) | Host | `@kobenfang/dsh-biga` | Git only | 3 | openclaw-skills BigA · A股智能选股（选股分析·量化交易·股票池） |
| [534119219/chicheng-stats](https://github.com/534119219/chicheng-stats) | Host | `chicheng-stats` | Git only | 2 | DSH 全局用量统计插件：高度可配置侧边栏组件（文字/卡片）+ 统计面板（模型分布/趋势/首字节/耗时明细） |
| [Happy2Git/dsh-compass](https://github.com/Happy2Git/dsh-compass) | Client (Web UI) | `dsh-compass` | Git only | 2 | DeepSeek Harness context-and-files panel plugin: directory browser, injected context, and read-only git graph  |
| [LiuJunheng/DeepSeekHarnessGreen](https://github.com/LiuJunheng/DeepSeekHarnessGreen) | Client (Web UI) | `dsh-archive-purge` | Git only | 2 | DeepSeek Harness绿色整合版，一键启动，不污染C盘，一个文件夹里管理。DeepSeek Harness Green All-in-One Launcher - double-click to run, al |
| [MiraculousGarfield/dsh-ops-health](https://github.com/MiraculousGarfield/dsh-ops-health) | Client + Host | `dsh-ops-health` | Git only | 2 |  |
| [RealHacker/dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | Client (Web UI) | `dsh-theme-colorizer` | Git only | 2 | A Deepseek Harness plugin that gives its UI color themes |
| [YLingHao/dsh-codeui](https://github.com/YLingHao/dsh-codeui) | Client (Web UI) | `dsh-codeui` | Git only | 2 | A code-review workbench for DeepSeek Harness and  jump from an always-on turn rail straight back to that turn  |
| [Ye-Yu-Mo/dsh-llm-proxy](https://github.com/Ye-Yu-Mo/dsh-llm-proxy) | Host | `dsh-llm-proxy` | Git only | 2 | DeepSeek Harness (dsh) 全局 HTTP 代理插件：undici setGlobalDispatcher + EnvHttpProxyAgent，配置化、热切换、可观测 |
| [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) | Client (Web UI) | `dsh-ui-beautify` | Git only | 2 | 用于dsh界面美化，内置四种颜色主题，并且可上传自定义背景 |
| [daboge-beach/dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio) | Client (Web UI) | `@dsh-skin-studio/gallery` | Git only | 2 | 🎨 DeepSeek Harness skin studio — built-in curated skins + a community skin gallery. 皮肤工作室：内置精选皮肤 · 用户上传皮肤中心，让 |
| [jypjypjypjyp/dsh-vqa-agent](https://github.com/jypjypjypjyp/dsh-vqa-agent) | Client + Host | `dsh-vqa-agent` | Git only | 2 | DSH 插件:vqa_ask 双模型视觉问答 —— 主模型提问 → 视觉模型看图回答,UI 实时展示 QA 过程,支持多模态视觉模型选择 |
| [kobenfang/ListForm](https://github.com/kobenfang/ListForm) | Host | `@kobenfang/dsh-listform` | Git only | 2 | openclaw - skills :　List · 智能表单（万能信息记录·智能记事本·智能账单）- Smart Form & Notes |
| [534119219/dsh-custom-provider-reasoning](https://github.com/534119219/dsh-custom-provider-reasoning) | Host | `dsh-custom-provider-reasoning` | Git only | 1 | dsh 插件：让自定义提供方（pi-ai 手写路由）的所有模型都能选择思考强度（推理等级），选择经原厂适配器真正发往线上。A dsh plugin giving every custom-provider model s |
| [Neplich/dsh_plugin](https://github.com/Neplich/dsh_plugin) | Host | `@neplich/dsh-preset-dev` | Git only | 1 |  |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | Host | `dsh-apex-standard` | Git only | 1 | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [Ri0n72Y/workspace-scope](https://github.com/Ri0n72Y/workspace-scope) | Host | `workspace-scope` | Git only | 1 | Per-workspace Skill and MCP enablement for DeepSeek Harness |
| [Zdram/deepseek-harness-skin](https://github.com/Zdram/deepseek-harness-skin) | Client (Web UI) | `deepseek-harness-skin` | Git only | 1 | 给DeepSeek Harness的界面提供可更换的自定义背景和界面半透明效果 |
| [Zoramoris/Amoris-agent](https://github.com/Zoramoris/Amoris-agent) | Client + Host | `dsh-nyamu-skin` | Git only | 1 | 喵梦agent系列插件。初学者首次尝试。 |
| [kelai141/dsh-code-diff-viewer](https://github.com/kelai141/dsh-code-diff-viewer) | Host | `dsh-code-diff-viewer` | Git only | 1 | 用于dsh的代码可视化系统 |
| [kobenfang/FruitPi](https://github.com/kobenfang/FruitPi) | Host | `@kobenfang/dsh-fruitpi` | Git only | 1 | openclaw - skills : Fruit Pi · 水果派（全球水果实时价格） |
| [kobenfang/Eyes](https://github.com/kobenfang/Eyes) | Host | `@kobenfang/dsh-eyes` | Git only | 1 | openclaw - skills : Eyes · 大眼看世界（全球热点·国际新闻·市场分析）- Global News Monitor |
| [ljsysfurryACE/dsh-aura-scheduler](https://github.com/ljsysfurryACE/dsh-aura-scheduler) | Host | `@agentframe/dsh-aura-scheduler` | Git only | 1 | Proactive scheduling for DeepSeek Harness: Aura heartbeat + value network (official is model-driven only) |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Host | `chat2skill-plugin-runtime` | Git only | 1 | Extracting and iterating skills from daily conversations with AI |
| [songoao25/dsh-plugin-guardian](https://github.com/songoao25/dsh-plugin-guardian) | Client (Web UI) | `dsh-plugin-guardian` | Git only | 1 | Safe uninstall with snapshot rollback for DeepSeek Harness plugins — clean residue, health check, no command l |
| [supersealwqas/dsh-custom-provider-settings](https://github.com/supersealwqas/dsh-custom-provider-settings) | Host | `dsh-custom-provider-settings` | Git only | 1 | DeepSeek Harness 第三方 API 与自定义模型设置插件：支持请求头、User-Agent、模型列表、图像输入和思考等级 \| WebUI plugin for third-party APIs and c |
| [tiantyu/dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) | Client (Web UI) | `dsh-skin-toggle` | Git only | 1 | Instant on/off 🐋 toggle button for the maid-atelier skin in the DeepSeek Harness (DSH) web GUI. Pure client-s |
| [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | Client (Web UI) | `dsh-theme-endfield` | Git only | 1 | 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。 |
| [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) | Client (Web UI) | `dsh-theme-synthwave` | Git only | 0 | A synthwave style DeepSeek Harness(dsh) theme |
| [ArcherLyu/dsh-plugin-ssh](https://github.com/ArcherLyu/dsh-plugin-ssh) | Client (Web UI) | `dsh-plugin-ssh` | Git only | 0 |  |
| [AskingTheHeavens/dsh-openclaw-persona](https://github.com/AskingTheHeavens/dsh-openclaw-persona) | Host | `@user/dsh-openclaw-persona` | Git only | 0 | DSH profile bundle: load OpenClaw-style persona files (SOUL.md, IDENTITY.md, USER.md, TOOLS.md, MEMORY.md, AGE |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Host | `dsh-plugin-codegraph` | Git only | 0 | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools  |
| [ChengxiuCDP/dsh-plugin-advisor](https://github.com/ChengxiuCDP/dsh-plugin-advisor) | Host | `dsh-plugin-advisor` | Git only | 0 |  |
| [ChrisZhangWG/dsh-codex-meter](https://github.com/ChrisZhangWG/dsh-codex-meter) | Client (Web UI) | `dsh-codex-meter` | Git only | 0 | Codex-style compact meter for the DSH web GUI: a tiny monospace pill showing live session cost, today's consum |
| [ClausYang/dsh-bang-shell](https://github.com/ClausYang/dsh-bang-shell) | Host | `@omdsh-dev/dsh-bang-shell` | Git only | 0 |  |
| [Dwsy/dsh-pi-extension-bridge](https://github.com/Dwsy/dsh-pi-extension-bridge) | Client + Host | `dsh-pi-extension-bridge` | Git only | 0 | TypeScript compatibility bridge for running Pi Coding Agent extensions and terminal UI inside DeepSeek DSH. |
| [FUSU123fusu/dsh-tui-checkpoints](https://github.com/FUSU123fusu/dsh-tui-checkpoints) | Client (Web UI) | `dsh-tui-checkpoints` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-jobs](https://github.com/FUSU123fusu/dsh-tui-jobs) | Client + Host | `dsh-tui-jobs` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-market](https://github.com/FUSU123fusu/dsh-tui-market) | Client (Web UI) | `dsh-tui-market` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-subagents](https://github.com/FUSU123fusu/dsh-tui-subagents) | Client + Host | `dsh-tui-subagents` | Git only | 0 |  |
| [FengLingYaaa/dsh-gpt-perm-strip](https://github.com/FengLingYaaa/dsh-gpt-perm-strip) | Host | `dsh-gpt-perm-strip` | Git only | 0 | DSH plugin: strip leftover GPT sandbox_permissions that are not strictly wider than the current session. |
| [FuncWei/dsh-kanban](https://github.com/FuncWei/dsh-kanban) | Client + Host | `dsh-kanban` | Git only | 0 |  |
| [GMH13552/dsh-timer-scheduler](https://github.com/GMH13552/dsh-timer-scheduler) | Client + Host | `dsh-timer-scheduler-ui` | Git only | 0 | 简单的dsh定时任务插件 支持定时列表任务、ui显示，对于长期任务有益 |
| [Gdnaiteab/pingo-dsh-plugin](https://github.com/Gdnaiteab/pingo-dsh-plugin) | Client + Host | `pingo-dsh-plugin` | Git only | 0 | DSH plugin: Pingo desktop-pet companion (catgirl pet in the dsh Web GUI + 14 Pingo persona/strategy skills). O |
| [JachinShen/dsh-subagent-response-promoter](https://github.com/JachinShen/dsh-subagent-response-promoter) | Host | `dsh-subagent-response-promoter` | Git only | 0 |  |
| [Lilien-xu/dsh-meego](https://github.com/Lilien-xu/dsh-meego) | Host | `dsh-meego` | Git only | 0 | DeepSeek Harness plugin for Feishu Project/Meego |
| [Nicotinamide/dsh-plugin-tg-bridge](https://github.com/Nicotinamide/dsh-plugin-tg-bridge) | Client (Web UI) | `dsh-plugin-tg-bridge` | Git only | 0 | DSH (DeepSeek Harness) ↔️ Telegram bridge: message, approve, ask, switch sessions/models/modes, manage permiss |
| [Mrzhailiming/deepseek-pet](https://github.com/Mrzhailiming/deepseek-pet) | Host | `dsh-pet-plugin` | Git only | 0 | deepseek pet |
| [ReiRui/dsh-image-preview](https://github.com/ReiRui/dsh-image-preview) | Host | `dsh-image-preview` | Git only | 0 |  |
| [Plocr/dsh-desktop](https://github.com/Plocr/dsh-desktop) | Client (Web UI) | `ui-dashboard` | Git only | 0 | DeepSeek Harness 桌面工作台：Electron 原生壳 + 内嵌 harness 运行时（离线、免装 Node），壳仅保留桌面原生能力，与 harness 间以 bridge 插件通信 |
| [RossBool/dsh-plugins](https://github.com/RossBool/dsh-plugins) | Host | `dsh-agent-orchestration` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：协作编排、跨会话、团队模式、计划引擎、话题时间轴、语音、MCP 管理、提示词增强 |
| [SoDaZilla-zzz/dsh-liquid-glass-balance-card](https://github.com/SoDaZilla-zzz/dsh-liquid-glass-balance-card) | Client (Web UI) | `dsh-liquid-glass-balance-card` | Git only | 0 | Draggable liquid-glass DeepSeek API balance card plugin for DeepSeek Harness (DSH) web GUI / DSH ??????? DeepS |
| [TongaiLinC/dsh-mobile-access](https://github.com/TongaiLinC/dsh-mobile-access) | Client (Web UI) | `dsh-mobile-access` | Git only | 0 | DeepSeek Harness 移动端访问插件 —— 让手机 / 平板通过局域网或 VPN 访问 DeepSeek Harness Web GUI，并内置 PC 端审批门禁、LAN / VPN / 公网自动识别 与 网 |
| [UnKnownFish125/dsh-deepmemory](https://github.com/UnKnownFish125/dsh-deepmemory) | Host | `dsh-deepmemory` | Git only | 0 | DeepSeek Harness 长期记忆系统：跨会话记忆 + 无限上下文（设计对齐 AstrBot livingmemory，作者 lxfight；AGPL-3.0） |
| [WonderfulEdge/dsh-publish-skill](https://github.com/WonderfulEdge/dsh-publish-skill) | Host | `dsh-publish-skill` | Git only | 0 | dsh h0发版技能 |
| [ZnonEn/dsh-volcark-quota](https://github.com/ZnonEn/dsh-volcark-quota) | Host | `@dsh-external/dsh-volcark-quota` | Git only | 0 | 火山方舟 Coding Plan / Agent Plan 额度实时查看的 DeepSeek Harness (DSH) 插件：AK/SK 直连官方 API，悬浮小球 + Donut 环形图展示各窗口已用/剩余/重置倒计 |
| [Zhengshuji/dsh-sound-notifier](https://github.com/Zhengshuji/dsh-sound-notifier) | Client + Host | `dsh-sound-notifier` | Git only | 0 | DSH（DeepSeek Harness）插件：在Web界面播放不同提示音，以提示Harness工作状态 |
| [akqwpeter-prog/skill-bartender](https://github.com/akqwpeter-prog/skill-bartender) | Host | `skill-bartender` | Git only | 0 | Task-to-skill pairing for DeepSeek Harness — pours the minimal set (usually one; zero when plain tools suffice |
| [antibrow/dsh-antibrow](https://github.com/antibrow/dsh-antibrow) | Host | `dsh-antibrow` | Git only | 0 | DeepSeek Harness plugin: give your agent a browser with a persistent identity - engine-level fingerprint spoof |
| [beijingwahw/dsh-proactive](https://github.com/beijingwahw/dsh-proactive) | Host | `dsh-proactive` | Git only | 0 | DSH Proactive — 主动智能调度插件：自主心跳 + 科学家/理论家双心智（贝叶斯实验设计与定律归纳）+ 能量共生经济 + 好奇心探索 + 安全治理，Raft 共识与热更新 |
| [cainiao1992/dsh-codebuddy-auth](https://github.com/cainiao1992/dsh-codebuddy-auth) | Host | `dsh-codebuddy-auth` | Git only | 0 | Tencent CodeBuddy provider plugin for DeepSeek Harness: OAuth login, token refresh, and model sync via native  |
| [deronghe/dsh-plugin-desktop-installer](https://github.com/deronghe/dsh-plugin-desktop-installer) | Client (Web UI) | `dsh-plugin-desktop-installer` | Git only | 0 | DSH Desktop installer |
| [dhb861832993-star/pbr-render](https://github.com/dhb861832993-star/pbr-render) | Host | `pbr-render` | Git only | 0 | PBR 3D model preview plugin for DeepSeek Harness — GLB/GLTF game art with textures, material channel inspector |
| [djt889/dsh-drag-to-attachment](https://github.com/djt889/dsh-drag-to-attachment) | Client (Web UI) | `@dsh-external/dsh-drag-to-attachment` | Git only | 0 | DSH（DeepSeek Harness）Web UI 插件：把本地任意文件/文件夹拖入或粘贴为附件（图片、任意文件、整个文件夹）或定位真实路径——一个开关，两种模式。dsh-plugin for DeepSeek Ha |
| [fengs2021/dsh-narrow-screen-fix](https://github.com/fengs2021/dsh-narrow-screen-fix) | Client (Web UI) | `dsh-narrow-screen-fix` | Git only | 0 |  |
| [fengs2021/dsh-boot-failsafe](https://github.com/fengs2021/dsh-boot-failsafe) | Client (Web UI) | `dsh-boot-failsafe` | Git only | 0 |  |
| [haohao16421/dsh-add-conversation](https://github.com/haohao16421/dsh-add-conversation) | Client (Web UI) | `dsh-add-conversation` | Git only | 0 |  |
| [hatsuyuki0103/oh-my-deepseek-harness](https://github.com/hatsuyuki0103/oh-my-deepseek-harness) | Host | `oh-my-deepseek-harness` | Git only | 0 |  |
| [ipcjs/dsh-model-slider](https://github.com/ipcjs/dsh-model-slider) | Client + Host | `dsh-model-slider` | Git only | 0 | DSH Web UI model seat: 3-level quick slider (low/medium/high) + advanced picker + modality icons + provider us |
| [kevin-luo/dsh-org-panel](https://github.com/kevin-luo/dsh-org-panel) | Client (Web UI) | `dsh-org-panel` | Git only | 0 | deepseek harness 纯牛马 —— 多智能体数字员工指挥台插件 |
| [kobenfang/BigFish](https://github.com/kobenfang/BigFish) | Host | `@kobenfang/dsh-bigfish` | Git only | 0 | 🎣 BigFish AI钓鱼助手 - 钓点分析·鱼情分析·钓点分享 \| Fishing spot analysis, fish activity, bait & lure |
| [kobenfang/Big8](https://github.com/kobenfang/Big8) | Host | `@kobenfang/dsh-big8` | Git only | 0 | ☯ Big8 AI玄学助手 - 看风水·看面相·算八字·查星座·每日一卦·老黄历 \| AI fortune-telling: feng shui, face reading, BaZi, zodiac |
| [kobenfang/BigLead](https://github.com/kobenfang/BigLead) | Host | `@kobenfang/dsh-biglead` | Git only | 0 | 🎯 BigLead 精准客户线索挖掘 - B2B销售获客 \| B2B lead generation, sales prospecting |
| [kobenfang/BigFocus](https://github.com/kobenfang/BigFocus) | Host | `@kobenfang/dsh-bigfocus` | Git only | 0 | 🎯 BigFocus 追踪管家 - 商品价格/明星动态/行业追踪 \| Price tracking, monitoring, alerts |
| [kobenfang/BigFood](https://github.com/kobenfang/BigFood) | Host | `@kobenfang/dsh-bigfood` | Git only | 0 | 🍳 BigFood AI冰箱管家 - 食材识别→菜谱推荐 \| Food recognition, recipe recommendation |
| [kobenfang/BigPlan](https://github.com/kobenfang/BigPlan) | Host | `@kobenfang/dsh-bigplan` | Git only | 0 | 📋 BigPlan AI产品调研 - 市场/技术/供应链分析，三套产品规格方案 \| Product research, market analysis |
| [kobenfang/BigSeedSkill](https://github.com/kobenfang/BigSeedSkill) | Host | `@kobenfang/dsh-bigseed` | Git only | 0 | 🌱 BigSeed 闪念记录与人生拼图 - 捕捉生活点滴生成人生故事/自传 \| Life story, journal, biography, memory keeper |
| [lingruan28-boop/dsh-balance-float](https://github.com/lingruan28-boop/dsh-balance-float) | Host | `@dsh-external/dsh-balance-float` | Git only | 0 | DeepSeek API 余额悬浮窗：打开 Harness 即显示，可拖动缩放，放大查看官方用量 \| A floating DeepSeek balance & usage widget for DeepSeek Ha |
| [littleblakew/msds-chain-mcp](https://github.com/littleblakew/msds-chain-mcp) | Client + Host | `dsh-msds-chain` | Git only | 0 |  |
| [loonai321/dsh-humanized-deepseek-maid](https://github.com/loonai321/dsh-humanized-deepseek-maid) | Host | `dsh-humanized-deepseek-maid` | Git only | 0 | Humanized whale-girl maid persona plugin for DeepSeek Harness: immersive roleplay, speaking modes, and ALTM-in |
| [lywusichen/dsh-jmcomic](https://github.com/lywusichen/dsh-jmcomic) | Client (Web UI) | `dsh-jmcomic` | Git only | 0 | DeepSeek Harness 插件:JMComic 搜索下载、本地漫画库、窗内阅读器,内置源码离线可用。 |
| [nexsjournal/dsh-customui-plugin](https://github.com/nexsjournal/dsh-customui-plugin) | Client (Web UI) | `dsh-customui-plugin` | Git only | 0 | Personalize the DeepSeek Harness web GUI: sidebar logo, empty-conversation hero, and chat background image — a |
| [oukeming64-tech/codex-skills](https://github.com/oukeming64-tech/codex-skills) | Host | `@oukeming64-tech/codex-skills` | Git only | 0 | Evidence-first agent skills for handoff auditing and documentation sync, packaged for Codex and DeepSeek Harne |
| [pycjava/dsh-usage](https://github.com/pycjava/dsh-usage) | Client + Host | `dsh-usage-ledger` | Git only | 0 | DSH 跨会话 token 记账插件：进程内每一次模型调用都记入本地 SQLite 账本，设置面板一眼看全、agent 一问即答。只做 token,不做钱。 |
| [ruby1304/dsh-preset-anchored-standard](https://github.com/ruby1304/dsh-preset-anchored-standard) | Host | `dsh-preset-anchored-standard` | Git only | 0 | Minimal-anchored agent preset for DeepSeek Harness: first-request bash+editor anchor, then full Standard catal |
| [realpkuasule/dsh-archive-panel](https://github.com/realpkuasule/dsh-archive-panel) | Client (Web UI) | `dsh-archive-panel` | Git only | 0 | View and unarchive archived sessions in DeepSeek Harness (DSH) |
| [shukookie/dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper) | Client (Web UI) | `dsh-plugin-wallpaper` | Git only | 0 | Wallpaper switcher for DeepSeek Harness - sidebar picker with local image upload, dim slider, and one-click ne |
| [u9521/dsh-advanced-model-editor](https://github.com/u9521/dsh-advanced-model-editor) | Client + Host | `@local/dsh-advanced-model-editor` | Git only | 0 | DSH WebUI plugin for managing custom LLM providers, model parameters, thinking budgets, and request settings. |
| [xingyingyuzhui/dsh-folded-chat](https://github.com/xingyingyuzhui/dsh-folded-chat) | Host | `dsh-folded-chat` | Git only | 0 |  |
| [xiaozhiaixue/dsh-archive-panel](https://github.com/xiaozhiaixue/dsh-archive-panel) | Client (Web UI) | `dsh-archive-panel` | Git only | 0 | View and unarchive archived sessions in DeepSeek Harness (DSH) |
| [xjwwjx/dsh-conversation-quote](https://github.com/xjwwjx/dsh-conversation-quote) | Client (Web UI) | `@xjwwjx/dsh-conversation-quote` | Git only | 0 | Quote-to-composer UI plugin for DeepSeek Harness Web: select conversation text in the chat and send it togethe |
| [xxxrickymorty-dev/dsh-rick](https://github.com/xxxrickymorty-dev/dsh-rick) | Client (Web UI) | `dsh-rick` | Git only | 0 | C-137 skin for DeepSeek Harness: 28 posters, custom scenes, and overlay pets (Rick, Morty, portal gun). |
| [yujianjian1013/dsh-codex-media](https://github.com/yujianjian1013/dsh-codex-media) | Client + Host | `dsh-codex-media` | Git only | 0 |  |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Unattributed | `misakanet` | Git only | 397 | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verifie |
| [zuorn/Tydora](https://github.com/zuorn/Tydora) | Unattributed | `tydora` | Git only | 29 | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional link |
| [zhu168/dsh-save-money](https://github.com/zhu168/dsh-save-money) | Unattributed | `dsh-save-money` | Git only | 19 | Save-money plugin for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time ru |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Unattributed | `cordis-fabric-bundle` | Git only | 14 | 一种类似MC Fabric的hook处理器 |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Unattributed | `@your-scope/dsh-plugin-template` | Git only | 9 | 基于原turtle ui官方仓库创建的plugin模板仓库 |
| [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit) | Unattributed | `harness-ai-kit-plugin` | Git only | 7 | Package manager for AI agent assets — 42 skills, 5 CLIs, 1 plugin. Skills for AI/LLM agent engineering, eval-d |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | Unattributed | `dsh-code-ide` | Git only | 6 | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) | Unattributed | `dsh-file-mentions` | Git only | 6 | Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, mentioned-files chip  |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | Git only | 6 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) | Unattributed | `deeptop-bridge` | Git only | 5 | Deeptop, a lightweight native desktop client for DeepSeek Harness. |
| [charrywhite/dsh-sticky-notes](https://github.com/charrywhite/dsh-sticky-notes) | Unattributed | `dsh-sticky-notes` | Git only | 5 | Sticky notes for DeepSeek Harness: draggable notes with text & image support, 9 skins, and AI-powered read/wri |
| [Easyhoov/deepseek-harness-desktop-windows](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | Unattributed | `@dsh-desktop/balance` | Git only | 3 | 把 DeepSeek Harness 装进 Windows 桌面的应用：不用装 Node.js、不用敲命令，双击启动即用。进程内集成官方 DSH、零端口 IPC 传输；内置侧边栏工作台（文件 / 终端 / Git / 浏 |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | Unattributed | `@dsh-external/dsh-whale-galgame` | Git only | 3 | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [Tisitan/dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | Unattributed | `dsh-live2d-companion` | Git only | 3 | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [WTStarMark/QAQ](https://github.com/WTStarMark/QAQ) | Unattributed | `dsh-qaq` | Git only | 3 | DSH 启动容灾守卫，检测宿主崩溃与 UI 红屏，自动回滚到最近一次成功配置。非侵入、一键懒人脚本、结构化日志。QAQ: a launch resilience guard for DeepSeek Harness (D |
| [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) | Unattributed | `@dsh-external/dsh-conv-search` | Git only | 3 | dsh-conv-search（对话内文本搜索）— in-conversation text search plugin for DeepSeek Harness (Ctrl+F, match case, whole w |
| [beijingwahw/dsh-conv-export](https://github.com/beijingwahw/dsh-conv-export) | Unattributed | `@dsh-external/dsh-conv-export` | Git only | 2 | dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image |
| [hackerFish/dsh-video-studio](https://github.com/hackerFish/dsh-video-studio) | Unattributed | `@hackerfish/dsh-video-studio` | Git only | 2 | 鲸影 DSH Video Studio：DeepSeek Harness 原生视频/漫剧生成插件——六段导演流水线、多供应商免费额度调度、四层提示词自优化，质量优先省钱第二 |
| [honghudavy-star/DSH_plugins_4U](https://github.com/honghudavy-star/DSH_plugins_4U) | Unattributed | `@dsh-plugins/4u` | Git only | 2 | DSH 自建插件集合：微信桥接器 + GUI 微信入口补丁，一键安装 |
| [kanneiren/dsh-windows-manager](https://github.com/kanneiren/dsh-windows-manager) | Unattributed | `dsh-windows-manager-plugin` | Git only | 2 | Lightweight DeepSeek Harness manager for Windows \| 轻量级 DeepSeek Harness Windows 托盘管理器 \| tray |
| [loster12520/dsh-btw](https://github.com/loster12520/dsh-btw) | Unattributed | `dsh-btw` | Git only | 2 | deepseek harness版btw插件 |
| [xbzbing/dsh-password-gate](https://github.com/xbzbing/dsh-password-gate) | Unattributed | `dsh-password-gate` | Git only | 2 | 为 DeepSeek Harness 增加远程访问能力，并通过密码+OTP 进行安全加固。 |
| [yangzhaofeng496/dsh-feishu-plugin](https://github.com/yangzhaofeng496/dsh-feishu-plugin) | Unattributed | `dsh-feishu-plugin` | Git only | 2 | Feishu bot bridge plugin for DeepSeek Harness |
| [534119219/chicheng-peak](https://github.com/534119219/chicheng-peak) | Unattributed | `chicheng-peak` | Git only | 1 | DSH 峰谷提醒插件：DeepSeek 官方峰谷时段感知——高峰橙/低峰蓝贴边呼吸边框、流光效果、服务端消息推送提醒（自定义标题内容）。Peak/valley breathing border + push remind |
| [Cheng-xiu/dsh-mobile-link](https://github.com/Cheng-xiu/dsh-mobile-link) | Unattributed | `dsh-mobile-link` | Git only | 1 | One-click phone access to DeepSeek Harness (DSH): Cloudflare quick tunnel + multi-channel push (ServerChan/Pus |
| [GPIOX/dsh-api-balance](https://github.com/GPIOX/dsh-api-balance) | Unattributed | `dsh-api-balance-badge` | Git only | 1 | DeepSeek Harness 动态 Cordis 插件：可拖动、可缩放、亚克力质感的 API 余额悬浮徽章 |
| [c-v-c-v/dsh-chat-nav](https://github.com/c-v-c-v/dsh-chat-nav) | Unattributed | `dsh-chat-nav` | Git only | 1 | DeepSeek Harness 聊天快捷导航插件（ChatGPT 式悬停滑出）· A DeepSeek Harness chat quick-nav plugin (ChatGPT-style hover slide- |
| [jesspig/deepseek-harness-desktop](https://github.com/jesspig/deepseek-harness-desktop) | Unattributed | `@dsh-desktop/bundle` | Git only | 1 | 这是一个独立的 Cordis 应用:不改动上游仓库,以官方扩展方式(自定义 profile + bundle + Cordis 插件)把 dsh 跑成原生桌面应用。 |
| [shsr07/dsh-go-usage](https://github.com/shsr07/dsh-go-usage) | Unattributed | `dsh-go-usage` | Git only | 1 | OpenCode GO subscription usage widget for DeepSeek Harness: rolling / weekly / monthly usage with reset countd |
| [zhenkun26/dsh-repo-atlas](https://github.com/zhenkun26/dsh-repo-atlas) | Unattributed | `dsh-repo-atlas` | Git only | 1 |  |
| [zhongjie10086/dsh-adaptive-native-standard](https://github.com/zhongjie10086/dsh-adaptive-native-standard) | Unattributed | `dsh-adaptive-native-standard` | Git only | 1 | Windows-native Adaptive Standard preset for DeepSeek Harness |
| [A-G-guy/dsh-plugins](https://github.com/A-G-guy/dsh-plugins) | Unattributed | `@dsh-custom/bundle-main` | Git only | 0 | agguy's DSH Plugins —— DeepSeek Harness 自定义插件 monorepo：移动端窄屏适配 / 任务结束邮件通知 / 子代理独立模型 / 自定义 LLM 路由 / ...... |
| [AtlasCloudAI/dsh-media-gen](https://github.com/AtlasCloudAI/dsh-media-gen) | Unattributed | `dsh-media-gen` | Git only | 0 | Plan and execute Atlas Cloud image, video, audio, and 3D workflows in DeepSeek Harness. |
| [ArcoCodes/bloome-finance-plugin](https://github.com/ArcoCodes/bloome-finance-plugin) | Unattributed | `bloome-finance-plugin` | Git only | 0 |  |
| [Tang-mm95/dsh-kdocs-connector](https://github.com/Tang-mm95/dsh-kdocs-connector) | Unattributed | `dsh-kdocs-connector` | Git only | 0 | 金山文档（WPS 个人账号）连接器 · DeepSeek Harness 插件：网页登录、浏览/搜索/星标/共享云文档、引用到对话、浏览器下载、新建文档 |
| [Temoa/dsh-sessions-rm](https://github.com/Temoa/dsh-sessions-rm) | Unattributed | `@temoa/dsh-sessions-rm` | Git only | 0 | Session management for DeepSeek Harness (DSH). |
| [a903067276-rgb/dsh-plan-switch](https://github.com/a903067276-rgb/dsh-plan-switch) | Unattributed | `dsh-plan-switch` | Git only | 0 | 输入框一键进/出 Plan 模式（/plan 的快捷点击），DSH web 小插件 |
| [a903067276-rgb/dsh-perm-guard](https://github.com/a903067276-rgb/dsh-perm-guard) | Unattributed | `dsh-perm-guard` | Git only | 0 | Auto-approval permission guard for DeepSeek Harness: a middle tier between workspace-write and danger-full-acc |
| [april-jk/dsh-mobile-plugin](https://github.com/april-jk/dsh-mobile-plugin) | Unattributed | `@april-jk/dsh-mobile` | Git only | 0 | Unofficial DSH plugin for paired mobile access to a local DeepSeek Harness |
| [chuyue-1/deepseek-harness-gamepad-cursor](https://github.com/chuyue-1/deepseek-harness-gamepad-cursor) | Unattributed | `@dsh-user/gamepad-cursor` | Git only | 0 | DeepSeek Harness 手柄光标插件 / Gamepad cursor plugin for DeepSeek Harness |
| [eeyzs1/dsh-plugins](https://github.com/eeyzs1/dsh-plugins) | Unattributed | `@eeyzs1/dsh-attach-files` | Git only | 0 | DeepSeek Harness (DSH) dynamic Cordis plugins |
| [fengs2021/dsh-session-title-cold](https://github.com/fengs2021/dsh-session-title-cold) | Unattributed | `dsh-session-title-cold` | Git only | 0 | DSH 插件：冷会话标题回填——把持久化日志的 session/title 事件折叠进 projection 缓存，会话列表显示真实标题而不是工作区目录名 |
| [flyhigao/dsh-sticky-notes](https://github.com/flyhigao/dsh-sticky-notes) | Unattributed | `dsh-sticky-notes` | Git only | 0 |  |
| [hajimilvdou/dsh-storecloud](https://github.com/hajimilvdou/dsh-storecloud) | Unattributed | `dsh-storecloud` | Git only | 0 | 集插件及agent商城，云端同步与订阅插件组为一体的dsh插件项目 |
| [jackyoung022/dsh-session-canvas](https://github.com/jackyoung022/dsh-session-canvas) | Unattributed | `@linxin666/dsh-session-canvas` | Git only | 0 | dsh插件，基于session的画布，可进行多session汇总 |
| [jing-hy/dsh-task-runner](https://github.com/jing-hy/dsh-task-runner) | Unattributed | `dsh-task-runner` | Git only | 0 | DSH plugin: project/task dual-mode workspaces. Tasks skip the workspace picker - every task conversation gets  |
| [ld-1101/dsh-file-preview](https://github.com/ld-1101/dsh-file-preview) | Unattributed | `dsh-file-preview` | Git only | 0 | DSH (DeepSeek Harness) plugin: workspace file preview column with Markdown/PDF/image/CSV preview, session-prod |
| [monotykamary/dsh-fovea](https://github.com/monotykamary/dsh-fovea) | Unattributed | `dsh-fovea` | Git only | 0 | Foveated repository intelligence for DeepSeek Harness: token-budgeted code graphs, focus, impact, and continuo |
| [nan1010082085/dsh-plugin-ima-sync](https://github.com/nan1010082085/dsh-plugin-ima-sync) | Unattributed | `dsh-plugin-ima-sync` | Git only | 0 | DSH plugin: auto-upload conversation progress to Tencent IMA (daily note + Work knowledge base) |
| [omdsh-plugins/omdsh-remctrl](https://github.com/omdsh-plugins/omdsh-remctrl) | Unattributed | `@omdsh-plugins/omdsh-remctrl` | Git only | 0 | Remote control for the DeepSeek Harness: a second front door on its own port, behind device pairing and a tier |
| [realpkuasule/dsh-session-id](https://github.com/realpkuasule/dsh-session-id) | Unattributed | `dsh-session-id-footer` | Git only | 0 |  |
| [toolazytoname/dsh-plugin-grok](https://github.com/toolazytoname/dsh-plugin-grok) | Unattributed | `dsh-plugin-grok` | Git only | 0 | DeepSeek Harness plugin: drive the local Grok Build CLI for text, image, and video. |
| [xiaozhiaixue/dsh-session-id](https://github.com/xiaozhiaixue/dsh-session-id) | Unattributed | `dsh-session-id-footer` | Git only | 0 |  |
| [xingyingyuzhui/dsh-session-actions](https://github.com/xingyingyuzhui/dsh-session-actions) | Unattributed | `dsh-session-actions` | Git only | 0 |  |
| [xiyuepcl/dsh-translator](https://github.com/xiyuepcl/dsh-translator) | Unattributed | `dsh-translator` | Git only | 0 | DeepSeek-powered approval translation for DeepSeek Harness (dsh): approval dialogs show their reason natively  |
| [xjwwjx/dsh-sonic](https://github.com/xjwwjx/dsh-sonic) | Unattributed | `@xjwwjx/dsh-sonic` | Git only | 0 | Sound notification plugin for DeepSeek Harness Web: plays a chime when user confirmation is needed and a succe |

## Blocked by reserved scope (2)

These repositories satisfy the bundle contract, but their `package.json` names
them under `@deepseek-ai/`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any `dsh plugin add @deepseek-ai/...` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | Client + Host | `@deepseek-ai/dsh-ex-setting` | **blocked** | 2 | DSH的设置扩展 |
| [GHJIVHIDD/dsh-plugin-vm-sandbox](https://github.com/GHJIVHIDD/dsh-plugin-vm-sandbox) | Host | `@deepseek-ai/dsh-plugin-vm-sandbox` | **blocked** | 2 | 原生UI界面。面向 DeepSeek Harness Web 的虚拟机沙箱插件：它基于 OrbStack 为每个会话提供独立的 debian/alpine 沙箱虚拟机，在会话视图环中新增「虚拟机」页签，支持查看/启动/休 |
