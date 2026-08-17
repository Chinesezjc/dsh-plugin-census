# DSH Plugin Catalogue

Generated 2026-08-17 from 742 contract-verified repositories.

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

### Host plugins (214)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Host | `@deepseek-harness-tui/dsh-tui` | npm | 1739 | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured  |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | Host | `@agentrq/dsh-plugin-agentrq` | npm | 1075 | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agent |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Host | `aegis` | npm | 1034 | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across lo |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Host | `@huiliyi37/dsh-tianshu-tui` | npm | 197 | dsh-tianshu-tui — 是官方 Dsh web端的交互式终端极简风格 UI 插件。以自研ansi为渲染核心，极度丝滑流畅，在官方的基础上增加了TDD、证据门、视觉图像模块等工作流。 |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Host | `@nanmicoder/dsh-auto-mode` | npm | 79 | Safe automatic permissions for DeepSeek Harness. |
| [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | Host | `@anysearch/anysearch-dsh` | npm | 78 | AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) |
| [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | Host | `@tencent-connect/dsh-qqbot` | npm | 55 | 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件 |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Host | `ax-feishu-bridge` | npm | 31 | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Host | `dsh-interconnect` | npm | 30 | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Host | `dsh-code` | npm | 23 | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制与Codex CLI 、Claude Code 的优秀机制，打造的 DSH-Code. （ |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | Host | `@zseven-w/dsh-crew` | npm | 21 | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress |
| [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) | Host | `@modusensus/dsh-mneme` | npm | 21 | Structured memory engine for DeepSeek Harness. Offline semantic search, entity-attribute-timeline, autoDream s |
| [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | Host | `dsh-im-gateway` | npm | 21 | 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 \| Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents t |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | Host | `dsh-lark-bot` | npm | 20 | dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃 |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Host | `billion-context-dsh` | npm | 20 | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides wh |
| [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Host | `pi2dsh` | npm | 20 | Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plu |
| [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | Host | `dsh-lark-link` | npm | 17 | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based co |
| [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | Host | `dsh-workbench-plugin` | npm | 13 | Deepseek-harness-workbench-plugin |
| [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Host | `dsh-llm-codex` | npm | 12 | DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key \| DSH plugin: reuse your Codex  |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | Host | `@alib8b8/dsh-plugin-aflare` | npm | 11 | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · |
| [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) | Host | `@xlight-oss/visionary-dsh` | npm | 11 | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | Host | `dsh-plugin-writing-guard` | npm | 10 | Deterministic manuscript integrity guard for AI-assisted academic revision - protects scientific facts, claim  |
| [EchoUser005/dsh-fate-spectrum](https://github.com/EchoUser005/dsh-fate-spectrum) | Host | `dsh-fate-spectrum` | npm | 7 | DeepSeek Harness plugin for Bazi & Zi Wei Dou Shu — deterministic, offline fate-chart calculation for AI agent |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Host | `dsh-checkpoint-rewind` | npm | 7 | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary  |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Host | `dsh-better-edit` | npm | 7 | Hash-anchored read/edit/batch_edit/undo_last_edit tools for DeepSeek Harness (dsh) — dsh port of pi-hashline-e |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Host | `dsh-claude-move` | npm | 6 | Four-source migration wizard for DeepSeek Harness: move Claude Code, Codex, OpenCode and Hermes sessions, memo |
| [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | Host | `dsh-background-agents` | npm | 5 | Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watc |
| [balcoz/dsh-ocr-local](https://github.com/balcoz/dsh-ocr-local) | Host | `dsh-ocr-local` | npm | 5 | Local OCR plugin for DeepSeek Harness — paste an image, get its text via PP-OCRv5 + ONNX Runtime, fully offlin |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | Host | `dsh-github-connect` | npm | 5 | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, cre |
| [JMOKSZ/dsh-lark-bridge](https://github.com/JMOKSZ/dsh-lark-bridge) | Host | `@jmoksz/lark-bridge` | npm | 4 | Feishu (Lark) entry point for DeepSeek Harness: drive dsh agents from a Feishu bot with streaming cards, ask/a |
| [MimicHunterZ/dsh-agent-compact](https://github.com/MimicHunterZ/dsh-agent-compact) | Host | `@mimichunterz/agent-compact` | npm | 4 | DSH plugin for agent-driven span compaction: compress chosen conversation spans into self-written checkpoints  |
| [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Host | `dsh-doublecheck` | npm | 4 | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineer |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | Host | `dsh-lsp-actions` | npm | 4 | LSP action surface for DeepSeek Harness: diagnostics, formatting, completion, code actions, symbols, signature |
| [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) | Host | `dsh-obsidian-assistant` | npm | 4 | DeepSeek Harness 插件（Cordis toolset）：操作本地 Obsidian 知识库（vault），提供搜索、读写笔记、双向链接 / 关系图谱、批量整理，并通过 Obsidian 的 "Local  |
| [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | Host | `dsh-quant` | npm | 4 | dsh plugin: quantitative tools for agents — market data (Binance public API), technical indicators (SMA/EMA/RS |
| [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) | Host | `dsh-model-failover` | npm | 3 | Two-level model circuit breaker with failover for DeepSeek Harness: trip a model or a whole provider after rep |
| [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | Host | `@perrylink/dsh-github` | npm | 3 | Official-grade GitHub CI for DeepSeek Harness: composite action.yml, PR review bot with idempotent inline comm |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Host | `dsh-memento` | npm | 3 | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.me |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Host | `dsh-wecom` | npm | 3 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Host | `oh-my-dsh` | npm | 3 | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) | Host | `@dshhubs/plugin-search` | npm | 3 | Discover The Best DSH plugins |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | Host | `dsh-plugin-wechat` | npm | 3 |  |
| [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) | Host | `@1e0zj/dsh-plugin-mall` | npm | 2 | DSH 插件市场：搜索 GitHub dsh-plugin 话题插件，一键安装到本地 dsh（agent 工具 + 设置页插件市场 tab） |
| [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) | Host | `dsh-knowledge` | npm | 2 | Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management  |
| [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Host | `@tingrudeng/dsh-feishu-bot` | npm | 2 | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu |
| [memorylake-ai/memorylake-harness](https://github.com/memorylake-ai/memorylake-harness) | Host | `@memorylake/dsh-plugin` | npm | 2 | MemoryLake Harness |
| [wulun811/dsh-plugin-vet](https://github.com/wulun811/dsh-plugin-vet) | Host | `@jieai/dsh-plugin-vet` | npm | 2 | Trust pipeline for deepseek-harness plugins: deterministic static scan (11 rules) + LLM-driven audit protocol  |
| [1264459640/dsh-trellis](https://github.com/1264459640/dsh-trellis) | Host | `dsh-trellis` | npm | 1 | Self-contained Trellis workflow trigger for DeepSeek Harness (DSH / Cordis) |
| [314857493/dsh-vision](https://github.com/314857493/dsh-vision) | Host | `dsh-vision-proxy-route` | npm | 1 | Free GLM vision for text-only DeepSeek Harness: paste images in the GUI (auto-transcribe route) + vision tool  |
| [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | Host | `dsh-python-env` | npm | 1 |  |
| [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) | Host | `dshmarketplace-plugin` | npm | 1 | Browse and install DSH plugins from inside DeepSeek Harness. /store, a settings tab, and agent tools — bilingu |
| [ECHOUniverse/dshacp](https://github.com/ECHOUniverse/dshacp) | Host | `@hanxu131/dshacp` | npm | 1 |  |
| [FuRongJun-1999/CommonTrustProtocol](https://github.com/FuRongJun-1999/CommonTrustProtocol) | Host | `@furongjun1999/dsh-memory` | npm | 1 | Common Trust Protocol (CTP) 共同信任协议 \| Intelligentics 智能论，研究智能系统存续的底层结构条件 |
| [GXX182/dsh-vision-bridge](https://github.com/GXX182/dsh-vision-bridge) | Host | `dsh-vision-bridge` | npm | 1 | DeepSeek Harness plugin that bridges session images to pluggable vision APIs while keeping DeepSeek as the pri |
| [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) | Host | `dsh-bill` | npm | 1 | DSH (DeepSeek Harness) plugin: per-session cost line + cost attribution report, priced by llm-pricing |
| [Oo0520/dsh-plugin-doctor](https://github.com/Oo0520/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 1 |  |
| [PerryLink/dsh-session-sync](https://github.com/PerryLink/dsh-session-sync) | Host | `dsh-session-sync` | npm | 1 | Cross-device DeepSeek Harness session sync: a dedicated git mirror with append-only keep-both conflict resolut |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Host | `dsh-cloudflare-browser-run` | npm | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | npm | 1 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) | Host | `dsh-ssh-ops` | npm | 1 | DeepSeek Harness SSH 运维插件：主对话驱动 SSH，带高危命令保护与右侧终端。 |
| [dshworks/dsh-crew](https://github.com/dshworks/dsh-crew) | Host | `@dshworks/dsh-crew` | npm | 1 | Watch Claude Code and Codex work inside dsh: each gets a real terminal pane in your session's workspace that y |
| [fleg45/memoria-framework](https://github.com/fleg45/memoria-framework) | Host | `dsh-memoria` | npm | 1 | 通用 AI Agent 记忆框架 —— 记忆不是检索，是分流。5 层衰减 / 8 类型 / 5 管线结构化输出。 |
| [gxx950224/ggame](https://github.com/gxx950224/ggame) | Host | `@ggame/backpack` | npm | 1 | 干活跟打魔兽一样累 |
| [jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) | Host | `dsh-model-sync` | npm | 1 | Writes live provider model lists into DSH settings. Composer rings show 5h/7d plan windows or metered balance  |
| [jiesou/dsh-opencode-zen-free-provider](https://github.com/jiesou/dsh-opencode-zen-free-provider) | Host | `@jiesou/dsh-opencode-zen-free-provider` | npm | 1 | OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据 |
| [jcc1997/dsh-plugins](https://github.com/jcc1997/dsh-plugins) | Host | `dsh-git` | npm | 1 |  |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Host | `@jumpserver-east/jumpserver-dsh` | npm | 1 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [leo-lab-2026/dsh-lark-bridge](https://github.com/leo-lab-2026/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 1 |  |
| [qinyre/dsh-plugin-capabilities](https://github.com/qinyre/dsh-plugin-capabilities) | Host | `dsh-plugin-capabilities` | npm | 1 | 在 dsh 设置页管理技能与 MCP 服务器，支持从 Claude Code、Codex 导入。 |
| [xavier711/dsh-plugin-deepseek-usage](https://github.com/xavier711/dsh-plugin-deepseek-usage) | Host | `@xavier711/dsh-deepseek-usage` | npm | 1 | A DeepSeek usage panel plugin for the DeepSeek Harness Web GUI. It adds a 「Usage / 用量」 entry at the bottom of  |
| [yhlooo/dsh-bridges](https://github.com/yhlooo/dsh-bridges) | Host | `dsh-bridges` | npm | 1 | 将 DeepSeek Harness 桥接到已配置其它 Harness Agent 的项目。支持 CodeBuddy / Codex / OpenCode / Claude Code / ... |
| [22-ai-00/dsh-enhanced](https://github.com/22-ai-00/dsh-enhanced) | Host | `@dsh-enhanced/acp` | npm | 0 | 专门用来实现dsh的增强插件集 |
| [Andrietteprotective835/dsh-mcp-lens](https://github.com/Andrietteprotective835/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 0 | Shrink massive MCP catalogs to two tools, letting DeepSeek Harness search and call 1,000+ remote APIs efficien |
| [CharlotteN7/dsh-ocsf-forwarder](https://github.com/CharlotteN7/dsh-ocsf-forwarder) | Host | `dsh-ocsf-forwarder` | npm | 0 | Ships DeepSeek Harness session activity to your SIEM as OCSF 1.9.0 records |
| [CharlotteN7/dsh-dlp](https://github.com/CharlotteN7/dsh-dlp) | Host | `dsh-dlp` | npm | 0 | Stops a DeepSeek Harness agent from reading your credential files and pasting secrets into tool calls |
| [CharlotteN7/dsh-netguard](https://github.com/CharlotteN7/dsh-netguard) | Host | `dsh-netguard` | npm | 0 | A host allowlist on DeepSeek Harness web_fetch and web_search, enforced at connect time |
| [Leeaoyin/dsh-agent-harness-audit](https://github.com/Leeaoyin/dsh-agent-harness-audit) | Host | `dsh-harness-audit` | npm | 0 | Audits your agent harness stability using deepseek harness. |
| [MaxHou-infinity/dsh-scout](https://github.com/MaxHou-infinity/dsh-scout) | Host | `dsh-scout` | npm | 0 | 司察 Scout — evidence-driven company & job due-diligence plugin for DeepSeek Harness (HR tech). 面向 DeepSeek Harn |
| [PerryLink/dsh-click](https://github.com/PerryLink/dsh-click) | Host | `dsh-click` | npm | 0 | Cross-platform native desktop control for DeepSeek Harness (Windows first): screen_shot, screen_read, click/ty |
| [PerryLink/dsh-defend](https://github.com/PerryLink/dsh-defend) | Host | `dsh-defend` | npm | 0 | Prompt-injection, jailbreak, and secret-leak defense for DeepSeek Harness: Aho-Corasick detection with allow/a |
| [PerryLink/dsh-library](https://github.com/PerryLink/dsh-library) | Host | `dsh-library` | npm | 0 | Local document knowledge base for DeepSeek Harness: library_add/remove/list, hybrid semantic+keyword library_s |
| [PerryLink/dsh-observe](https://github.com/PerryLink/dsh-observe) | Host | `dsh-observe` | npm | 0 | OpenTelemetry and Langfuse observability exporter for DeepSeek Harness: turn/step/tool/LLM spans, token and co |
| [PerryLink/dsh-translate](https://github.com/PerryLink/dsh-translate) | Host | `dsh-translate` | npm | 0 | Vendor parameter translation and deterministic JSON repair for DeepSeek Harness: /translate maps temperature/t |
| [SYMlp/dsh-markdown-memory](https://github.com/SYMlp/dsh-markdown-memory) | Host | `dsh-markdown-memory` | npm | 0 | Markdown folder long-term memory plugin for DeepSeek Harness (dsh): one file per fact, human-editable, git-ver |
| [Snowfly11531/dsh-wechat-bot](https://github.com/Snowfly11531/dsh-wechat-bot) | Host | `dsh-wechat-bot` | npm | 0 | WeChat QR-Code Bot Plugin for DeepSeek Harness — Scan-to-login WeChat bot built on the official iLink Bot API. |
| [V-Reason/dsh-task-notify](https://github.com/V-Reason/dsh-task-notify) | Host | `dsh-task-notify` | npm | 0 | DeepSeekHarness任务完成时进行消息推送提醒（微信+Windows通知） |
| [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) | Host | `dsh-pilot` | npm | 0 | ✋ Hands for your DeepSeek Harness agent — autonomous browser operation by accessibility refs, with a permissio |
| [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) | Host | `dsh-preview` | npm | 0 | 👁 Eyes for your DeepSeek Harness agent — it opens, sees, and fixes what it builds. Headless-browser verificat |
| [aqsk-BLG/dsh-memory](https://github.com/aqsk-BLG/dsh-memory) | Host | `dsh-memory` | npm | 0 |  |
| [dami9527/dsh-image-pathify](https://github.com/dami9527/dsh-image-pathify) | Host | `dsh-image-pathify` | npm | 0 | DeepSeek Harness 插件：让 deepseek-v4-flash 等不能看图的模型也能处理聊天图片，内置识图工具。安装：dsh plugin --profile web add dsh-image-path |
| [dushaobindoudou/dsh-acp](https://github.com/dushaobindoudou/dsh-acp) | Host | `dsh-acp-server` | npm | 0 | Agent Client Protocol (ACP) server plugin for the DeepSeek Harness (dsh) - drive dsh agents from Zed and any A |
| [duhu2000/qcc-mcp-oauth](https://github.com/duhu2000/qcc-mcp-oauth) | Host | `qcc-dsh-mcp-oauth` | npm | 0 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查（Qichacha）MCP 服务 / One-click OAuth connect to Qichacha MCP services for De |
| [gxx950224/backpack](https://github.com/gxx950224/backpack) | Host | `@ggame/backpack` | npm | 0 | dsh backpack plugin |
| [iHow1/dsh-ihow-memory](https://github.com/iHow1/dsh-ihow-memory) | Host | `dsh-ihow-memory` | npm | 0 | iHow Memory plugin for DeepSeek Harness |
| [jiaoqsh/dsh-document](https://github.com/jiaoqsh/dsh-document) | Host | `@jiaoqsh/dsh-document` | npm | 0 | DeepSeek Harness plugin: read_document tool — Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF a |
| [jiay98528-dev/dsh-plugin-weaknet-adaptor](https://github.com/jiay98528-dev/dsh-plugin-weaknet-adaptor) | Host | `dsh-plugin-weaknet-adaptor` | npm | 0 |  |
| [jiesou/dsh-cline-free-provider](https://github.com/jiesou/dsh-cline-free-provider) | Host | `@jiesou/dsh-cline-free-provider` | npm | 0 | Cline 免费模型接入 DeepSeek Harness |
| [keepview/dsh-lark](https://github.com/keepview/dsh-lark) | Host | `dsh-lark` | npm | 0 | Minimal Lark/Feishu gateway plugin for DeepSeek Harness (dsh) — chat with your agent from Feishu, one topic =  |
| [jlu-lujing/dsh-kit](https://github.com/jlu-lujing/dsh-kit) | Host | `dsh-kit` | npm | 0 |  |
| [lkshjd/dsh-debate](https://github.com/lkshjd/dsh-debate) | Host | `@sky_sun/dsh-debate` | npm | 0 | DeepSeek Harness multi-agent debate plugin: isolated research, cross-examination, judge convergence (backgroun |
| [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) | Host | `@lk251066/dsh-tui` | npm | 0 | Fixed framed terminal workbench plugin for DeepSeek Harness with transcript-only scrolling and persistent sess |
| [protoctistmoses143/dsh-docs](https://github.com/protoctistmoses143/dsh-docs) | Host | `dsh-doc` | npm | 0 | Convert PDFs, Office docs, scanned images, and more to clean Markdown, JSON, or text locally with offline OCR— |
| [ruby1304/dsh-vision-subagent](https://github.com/ruby1304/dsh-vision-subagent) | Host | `dsh-vision-subagent` | npm | 0 | Vision for DeepSeek Harness agents — paste images in the Web composer, delegate reads to Kimi/MiniMax vision r |
| [shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) | Host | `dsh-risk-guard` | npm | 0 | Zero-interruption audit + fuse blocking plugin for DeepSeek Harness / 零打扰 Agent 审计与保险丝拦截插件 |
| [tancheng33/dsh-yogacara](https://github.com/tancheng33/dsh-yogacara) | Host | `dsh-yogacara` | npm | 0 | A Yogācāra (唯识) self-model plugin for DeepSeek Harness: eight consciousnesses, the 51 mental factors, a perfum |
| [uckkk/dsh-license-guard](https://github.com/uckkk/dsh-license-guard) | Host | `dsh-license-guard` | npm | 0 | 依赖许可证合规：扫描 node_modules 许可证、归一化 SPDX、分类并做发布前合规校验 |
| [uckkk/dsh-git-commit](https://github.com/uckkk/dsh-git-commit) | Host | `dsh-git-commit` | npm | 0 | @{name=dsh-git-commit; version=0.1.0; description=Git 提交助手：分析仓库变更生成规范化 Conventional Commits 提交信息、按提交历史生成 CHANG |
| [uckkk/dsh-secret-scan](https://github.com/uckkk/dsh-secret-scan) | Host | `dsh-secret-scan` | npm | 0 | @{name=dsh-secret-scan; version=0.1.0; description=敏感信息扫描：递归扫描代码库中的泄露密钥/令牌/私钥/硬编码密码，输出去敏感化的位置与严重级，提交前自查安全; typ |
| [uckkk/dsh-test-coverage](https://github.com/uckkk/dsh-test-coverage) | Host | `dsh-test-coverage` | npm | 0 | 测试覆盖率分析：解析 LCOV/Cobertura/Istanbul/Go 覆盖率报告，输出结构化覆盖数据与未覆盖行区间 |
| [uckkk/dsh-video-creator](https://github.com/uckkk/dsh-video-creator) | Host | `dsh-video-creator` | npm | 0 | @{name=dsh-video-creator; version=0.1.4; description=视频号创作助手：内置主流短视频创作模板，调用中国境内大模型一键生成内容包，适配抖音/视频号/B站/快手/小红书/微 |
| [useorgx/orgx-deepseek-harness-plugin](https://github.com/useorgx/orgx-deepseek-harness-plugin) | Host | `@useorgx/deepseek-harness-plugin` | npm | 0 | OrgX Work Ledger, MCP tools, skills, proof, and governed execution for DeepSeek Harness |
| [wanshichenguang/dsh-tool-vision](https://github.com/wanshichenguang/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 0 | DSH plugin: image_describe (识图) tool over the DashScope OpenAI-compatible vision API (qwen3.7-flash). Bring yo |
| [web-casa/dsh-plugin-pkgseek](https://github.com/web-casa/dsh-plugin-pkgseek) | Host | `dsh-plugin-pkgseek` | npm | 0 | PkgSeek Linux package, command and CVE intelligence as native DeepSeek Harness (dsh) tools |
| [yangfch3/dsh-mcp-mgr](https://github.com/yangfch3/dsh-mcp-mgr) | Host | `dsh-mcp-mgr` | npm | 0 | MCP server manager for DeepSeek Harness — workspace mcp.json discovery, hot sync, and a web settings UI. |
| [zhangjunjesse/dsh-tool-image-gen](https://github.com/zhangjunjesse/dsh-tool-image-gen) | Host | `dsh-tool-image-gen` | npm | 0 |  |
| [zoahdev/dsh-browser-use](https://github.com/zoahdev/dsh-browser-use) | Host | `dsh-browser-use` | npm | 0 | Browser Use bridge for DeepSeek Harness: run real web tasks (open pages, click, type, fill forms, extract data |
| [zoahdev/dsh-firecrawl](https://github.com/zoahdev/dsh-firecrawl) | Host | `dsh-firecrawl` | npm | 0 | Firecrawl bridge for DeepSeek Harness: scrape URLs to LLM-ready Markdown and search the web via the Firecrawl  |
| [zoahdev/dsh-kirocrew](https://github.com/zoahdev/dsh-kirocrew) | Host | `dsh-kirocrew` | npm | 0 | KiroCrew bridge for DeepSeek Harness: delegate turns to a persistent, self-evolving workspace over ACP (JSON-R |
| [zoahdev/dsh-vision](https://github.com/zoahdev/dsh-vision) | Host | `dsh-vision` | npm | 0 | Give DeepSeek Harness eyes: analyze images with an OpenAI-compatible vision model via a vision_analyze tool. |
| [zoahdev/dsh-zh](https://github.com/zoahdev/dsh-zh) | Host | `dsh-zh` | npm | 0 | Chinese-thinking system-prompt section for DeepSeek Harness: make your dsh agent think and answer in simplifie |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | Host | `@open-design/dsh-runtime` | Git only | 87981 | 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative. 🖥️ Local-first desktop app |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Host | `@openviking/dsh-memory-plugin` | Git only | 28792 | Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills. |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Host | `@yuxianglin/dsh-bridge-browser` | Git only | 230 | dsh plugin: Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capab |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | Host | `dsh-code-review` | Git only | 111 | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness |
| [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) | Host | `tabbit-browser` | Git only | 76 | Tabbit Broser plugins for Deepseek Harness |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Host | `dsh-cost-meter` | Git only | 66 | DeepSeek Harness Session Cost Statistics & OpenCode Go Quota Display, DS Official Balance Display, Codex-like  |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | Host | `@dsh-external/plugin-console` | Git only | 52 | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | Host | `dsh-whale-report` | Git only | 19 | 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | Host | `@dsh-external/dsh-inspect` | Git only | 6 | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | Host | `@vlln/dsh-loop` | Git only | 5 | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Host | `dsh-plugin-knowledge-graph` | Git only | 4 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [MrWeiCodes/dsh-permgate](https://github.com/MrWeiCodes/dsh-permgate) | Host | `dsh-permgate` | Git only | 4 | 为 DeepSeek Harness（DSH）提供的细粒度权限控制插件 |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Host | `dsh-chat-imagine` | Git only | 4 | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片。 |
| [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) | Host | `dsh-plugin-subhub` | Git only | 4 | Bring third-party subscription accounts into DeepSeek Harness - 为 DeepSeek Harness 接入第三方订阅账户(当前支持 OpenAI / Cha |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | Host | `dsh-directorx` | Git only | 3 | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision |
| [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | Host | `@dsh-community/dsh-ops-kit` | Git only | 3 | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, and plugin |
| [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) | Host | `mindspace-dsh-local-rag` | Git only | 3 | ARPM-derived local hybrid RAG plugin for DeepSeek Harness |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | Git only | 3 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [LeslieWylie/dsh-md-preview](https://github.com/LeslieWylie/dsh-md-preview) | Host | `dsh-md-preview` | Git only | 2 | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — an md_html_render tool that works |
| [PerryLink/dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) | Host | `dsh-skill-pack-security` | Git only | 2 | Security-audit skill pack + plugin_vet supply-chain gate for DeepSeek Harness (dsh): 8 bilingual agent skills  |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | Host | `dsh-plan-lattice` | Git only | 1 | Execution-time drift firewall for long-running DeepSeek Harness agents. Real-Harness tests: unsafe stale mutat |
| [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) | Host | `@amethystluna/logicprobe` | Git only | 1 | Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design d |
| [Brain2nd/DSH-AutoLab](https://github.com/Brain2nd/DSH-AutoLab) | Host | `dsh-autolab` | Git only | 1 | DeepSeek Harness (DSH) AutoLab 插件：自治研究控制器 + 本地会话通信 —— 沿袭 DSH 极致内核，高缓存命中、高性能低成本 |
| [CyBerKitTen0009/dsh-quota-dashboard](https://github.com/CyBerKitTen0009/dsh-quota-dashboard) | Host | `dsh-quota-dashboard` | Git only | 1 |  |
| [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) | Host | `@dely0/dsh-personal-workbench` | Git only | 1 | DSH 个人工作台：日历 + 任务列表 + AI 澄清/拆解/执行/复盘 \| Personal workbench for DeepSeek Harness Web: calendar + task list + AI |
| [GitRuozhi/dsh-github-mcp](https://github.com/GitRuozhi/dsh-github-mcp) | Host | `dsh-github-mcp` | Git only | 1 | DSH-GitHub bridge: direct GitHub access for DSH via the official GitHub MCP server, plus a fix for the officia |
| [JonyChan8394/dsh-llm-balance](https://github.com/JonyChan8394/dsh-llm-balance) | Host | `dsh-llm-balance` | Git only | 1 | Show LLM API balances under the chat input: DeepSeek, OpenRouter, SiliconFlow and any custom provider with a b |
| [LeslieWylie/dsh-fleet-audit](https://github.com/LeslieWylie/dsh-fleet-audit) | Host | `dsh-fleet-audit` | Git only | 1 | DSH agent-fleet hygiene audit plugin: credential-file permissions, embedded git-remote credentials (masked), p |
| [Ox2g/dsh-plugin-wechat](https://github.com/Ox2g/dsh-plugin-wechat) | Host | `@ox2g/dsh-plugin-wechat` | Git only | 1 | WeChat access plugin for DeepSeek Harness (DSH) |
| [SCSpotato/dsh-remote](https://github.com/SCSpotato/dsh-remote) | Host | `dsh-remote-control` | Git only | 1 | Native Android client to remotely control DeepSeek Harness (DSH) from your phone |
| [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) | Host | `evo-memory` | Git only | 1 | agent memory plugin based on CLP |
| [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) | Host | `dsh-plugin-git-inspect` | Git only | 1 | Read-only Git inspection tools for DeepSeek Harness |
| [WeiYe6/dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) | Host | `dsh-session-handoff` | Git only | 1 | Hand your long DSH session over to a clean one: /handoff summarizes the conversation with an LLM, creates a ne |
| [Xiaopeng212321414321413231/critical-skillgovern](https://github.com/Xiaopeng212321414321413231/critical-skillgovern) | Host | `dsh-skillgovern` | Git only | 1 | 🔍 Critical SkillGovern — 批判式技能治理框架。跨平台（Hermes/Claude Code/Codex）技能质量审查方法论，已在 120+ 技能实战验证 |
| [drscrewdriver/dsh-seatbelt-sandbox](https://github.com/drscrewdriver/dsh-seatbelt-sandbox) | Host | `dsh-seatbelt-sandbox` | Git only | 1 | dsh-seatbelt 方面沙箱增强尝试使用非exec工具直接对接系统seatbelt相关api |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Host | `dsh-grafana` | Git only | 1 | Paste a Grafana dashboard URL and fine-tune it through conversation with DeepSeek Harness — 贴大盘 URL，对话微调，写回 Gr |
| [isheng-eqi/dsh-hermes-memory](https://github.com/isheng-eqi/dsh-hermes-memory) | Host | `dsh-hermes-memory` | Git only | 1 | Hermes-style persistent memory (MEMORY.md / USER.md) for DeepSeek Harness (DSH) — a faithful port of hermes-ag |
| [jaxxchen003/foliodrop-dsh-publish](https://github.com/jaxxchen003/foliodrop-dsh-publish) | Host | `@foliodrop/dsh-publish` | Git only | 1 | Publish DeepSeek Harness agent output as a shareable FolioDrop URL |
| [ktziy/dsh-plugin-factory](https://github.com/ktziy/dsh-plugin-factory) | Host | `dsh-plugin-factory` | Git only | 1 | 一切皆插件，这里将是插件的源头 |
| [lecutu/dsh-slide-reflex](https://github.com/lecutu/dsh-slide-reflex) | Host | `dsh-slide-reflex` | Git only | 1 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| [lovezi0/dsh-memory-palace](https://github.com/lovezi0/dsh-memory-palace) | Host | `dsh-memory-palace` | Git only | 1 | 把 WorkBuddy 的文件式记忆系统移植进 [DeepSeek Harness](https://www.deepseek.com/harness/) —— 为 Harness 提供**跨会话持久化、人类可直接编辑的 |
| [mcxianyujun/dsh-web-search-anysearch](https://github.com/mcxianyujun/dsh-web-search-anysearch) | Host | `dsh-web-search-anysearch` | Git only | 1 | Native AnySearch /v1/search WebSearchProvider for DeepSeek Harness with Web UI, credentials integration, and W |
| [memorax-ai/dsh-patchouli](https://github.com/memorax-ai/dsh-patchouli) | Host | `dsh-patchouli` | Git only | 1 | Agent knowledge hub and deepseek-harness plugin |
| [nexsjournal/dsh-imagegen-plugin](https://github.com/nexsjournal/dsh-imagegen-plugin) | Host | `dsh-imagegen-plugin` | Git only | 1 | 给 DeepSeek Harness（DSH）加上第三方生图/改图能力的插件：对话召唤 + 设置卡片，支持 OpenAI 兼容 / 阿里百炼 / Replicate / fal.ai |
| [paul-yangmy/dsh-tavily-web-search](https://github.com/paul-yangmy/dsh-tavily-web-search) | Host | `dsh-tavily-web-search` | Git only | 1 | Tavily-backed web search provider plugin (bundle) for DeepSeek Harness (dsh) |
| [863683348/dsh-plugin-gate](https://github.com/863683348/dsh-plugin-gate) | Host | `dsh-plugin-gate` | Git only | 0 | Installation safety gate for DeepSeek Harness plugins: antivirus-style scanner for install scripts, permission |
| [863683348/dsh-plugin-recommend](https://github.com/863683348/dsh-plugin-recommend) | Host | `dsh-plugin-recommend` | Git only | 0 | Plugin recommender for DeepSeek Harness: search and rank DSH plugins from an embedded 1100+ entry marketplace  |
| [863683348/dsh-plugin-scorecard](https://github.com/863683348/dsh-plugin-scorecard) | Host | `dsh-plugin-scorecard` | Git only | 0 | DSH plugin health scorecard: quality & security audit, rankings and search across the dsh-plugin ecosystem. |
| [863683348/dsh-plugin-verify](https://github.com/863683348/dsh-plugin-verify) | Host | `dsh-plugin-verify` | Git only | 0 | Verification toolkit for DeepSeek Harness agents: evidence-based claim checking with line citations, config va |
| [863683348/dsh-starter-zh](https://github.com/863683348/dsh-starter-zh) | Host | `dsh-starter-zh` | Git only | 0 | DSH 新手入门包：安装即得欢迎语、从 0 到 1 学习路径、按场景推荐插件、新手自查清单，并与 dsh-handbook-zh 中文教程联动。Starter pack for DeepSeek Harness begi |
| [AIsa-plugins/easy-dsh-plugin](https://github.com/AIsa-plugins/easy-dsh-plugin) | Host | `@aisa-plugins/easy-search` | Git only | 0 |  |
| [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) | Host | `@bryan-cmf/dsh-infra-observability` | Git only | 0 | DSH-Plugin: structural observability layer - real tool/skill usage recording (tools/result), skill-catalog aud |
| [Bryan-cmf/dsh-vector-memory](https://github.com/Bryan-cmf/dsh-vector-memory) | Host | `@bryan-cmf/dsh-vector-memory` | Git only | 0 | DSH-Plugin: durable agent memory core - mem_save/mem_search/mem_health backed by storageDomain (survives resta |
| [FUSU123fusu/dsh-tui-model-switch](https://github.com/FUSU123fusu/dsh-tui-model-switch) | Host | `dsh-tui-model-switch` | Git only | 0 |  |
| [Hefulalala/dsh-remote-workspace](https://github.com/Hefulalala/dsh-remote-workspace) | Host | `@dsh-external/dsh-remote-workspace` | Git only | 0 | DSH plugin: SSH/SFTP remote sites and remote workspaces in the sidebar |
| [JamesYasR/dsh-email-push-master](https://github.com/JamesYasR/dsh-email-push-master) | Host | `dsh-email-push-master` | Git only | 0 |  |
| [Lbryany/dsh-herdr](https://github.com/Lbryany/dsh-herdr) | Host | `@lbryany/dsh-herdr` | Git only | 0 | Herdr lifecycle status integration for DeepSeek Harness |
| [PerryLink/dsh-fast](https://github.com/PerryLink/dsh-fast) | Host | `dsh-fast` | Git only | 0 | Read-only performance diagnostics for DeepSeek Harness: session load (open/restore) timing, spill-hit counts,  |
| [PerryLink/dsh-mask](https://github.com/PerryLink/dsh-mask) | Host | `dsh-mask` | Git only | 0 | PII masking middleware for DeepSeek Harness: anonymize names, phones, emails, ID cards, bank cards, keys, and  |
| [PerryLink/dsh-score](https://github.com/PerryLink/dsh-score) | Host | `dsh-score` | Git only | 0 | Multi-dimensional quality scoring for DeepSeek Harness plugins: scores one repo or npm package across install  |
| [PerryLink/dsh-test-drive](https://github.com/PerryLink/dsh-test-drive) | Host | `dsh-test-drive` | Git only | 0 | Isolated install-and-smoke test drives for DeepSeek Harness plugins: installs a repo or npm package into a thr |
| [Raphaelutumn/dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) | Host | `dsh-change-budget` | Git only | 0 | DeepSeek Harness file-safety guardrail that limits AI coding-agent file edits per turn and prevents too many f |
| [SamurAIGPT/dsh-plugin-muapi](https://github.com/SamurAIGPT/dsh-plugin-muapi) | Host | `@dsh-plugin/dsh-plugin-muapi` | Git only | 0 | DeepSeek Harness plugin exposing MuApi's 100+ image/video/audio generation models as an agent tool |
| [SodaMem/dsh-plugin-sodamem](https://github.com/SodaMem/dsh-plugin-sodamem) | Host | `dsh-plugin-sodamem` | Git only | 0 | Native DeepSeek Harness (dsh) plugin for SodaMem — auto-injects evidence-grounded memory into every turn and i |
| [Shiyao-Huang/awesome-deepseek-harness-plugin](https://github.com/Shiyao-Huang/awesome-deepseek-harness-plugin) | Host | `deeplugin-market` | Git only | 0 | Public DeepSeek Harness plugin Store and ecosystem dataset: install specs, source evidence, SQLite history, me |
| [XiaoSong1223/dsh-release-guardian](https://github.com/XiaoSong1223/dsh-release-guardian) | Host | `dsh-release-guardian` | Git only | 0 | Deterministic release-risk checks and quality gates for DeepSeek Harness |
| [allentnetus/dsh-job-hunting](https://github.com/allentnetus/dsh-job-hunting) | Host | `dsh-job-hunting` | Git only | 0 | DeepSeek Harness job hunting plugin and runtime skill for local job intelligence workflows. |
| [anyuer678/dsh-logtimeline](https://github.com/anyuer678/dsh-logtimeline) | Host | `dsh-logtimeline` | Git only | 0 | Query local log files with Chinese natural-language time expressions — LogTimeline for DeepSeek Harness. |
| [cyjyyd/dsh-tui](https://github.com/cyjyyd/dsh-tui) | Host | `dsh-ssh-tui` | Git only | 0 | DeepSeek Harness enhanced plugin:dsh-tui. you can use Deepseek Harness within Terminal |
| [fengyufengzi/dsh-learning-plugin](https://github.com/fengyufengzi/dsh-learning-plugin) | Host | `dsh-learning-plugin` | Git only | 0 | A small DeepSeek Harness tool plugin for learning the Cordis extension model |
| [fengyufengzi/dsh-local-diagnostics](https://github.com/fengyufengzi/dsh-local-diagnostics) | Host | `dsh-local-diagnostics` | Git only | 0 | Privacy-first in-memory diagnostics for DeepSeek Harness |
| [ghbhiee/dsh-plugins](https://github.com/ghbhiee/dsh-plugins) | Host | `dsh-plugin-cli-session` | Git only | 0 | Terminal, file browser, and mobile/CLI plugins for DeepSeek Harness |
| [guozede12593312/dsh-cnwrite](https://github.com/guozede12593312/dsh-cnwrite) | Host | `dsh-cnwrite` | Git only | 0 | DeepSeek Harness 中文写作助手插件：排版 cn_polish + 写作统计 cn_stats |
| [guobinmengxiang-rgb/dsh-memory-canvas](https://github.com/guobinmengxiang-rgb/dsh-memory-canvas) | Host | `dsh-memory-canvas` | Git only | 0 | DSH plugin: offload bulky tool logs to refs/*.md, keep a Mermaid canvas, recall by node_id. Zero daemon. Don't |
| [guobinmengxiang-rgb/dsh-plugins](https://github.com/guobinmengxiang-rgb/dsh-plugins) | Host | `dsh-cli-guard` | Git only | 0 | Small DeepSeek Harness plugins. Install one folder at a time. Don't pip the wrong dsh. |
| [hanchn/dsh-multimodal-router](https://github.com/hanchn/dsh-multimodal-router) | Host | `@hanchn/dsh-multimodal-router` | Git only | 0 | A zero-config, multi-provider vision tool for DeepSeek Harness with automatic local model discovery and privac |
| [hhy66/dsh-balance-stats](https://github.com/hhy66/dsh-balance-stats) | Host | `dsh-balance-stats` | Git only | 0 | DSH 余额与消耗面板（dsh-balance-stats） |
| [kiefeng/dsh-lan-memory](https://github.com/kiefeng/dsh-lan-memory) | Host | `dsh-lan-memory` | Git only | 0 | 澜·记忆与人格系统 — DeepSeek Harness memory & persona plugin (三层记忆 + SOUL/MOOD + 一键整理) |
| [klarkxy/dsh-plugin-autoevo](https://github.com/klarkxy/dsh-plugin-autoevo) | Host | `dsh-plugin-autoevo` | Git only | 0 | DSH capability reuse and safe evolution layer. Evolution continues. |
| [knottttt/codex-dsh-bridge](https://github.com/knottttt/codex-dsh-bridge) | Host | `codex-dsh-bridge-companion` | Git only | 0 | Codex bridge for dispatching tasks to DeepSeek Harness sessions, with Harness settings integration. |
| [lijx122/dsh-plugin-auth-guard](https://github.com/lijx122/dsh-plugin-auth-guard) | Host | `dsh-plugin-auth-guard` | Git only | 0 | Enterprise-grade Zero-Trust Authentication, LAN/Public Access Control & Security Gate Plugin for DeepSeek Harn |
| [nanshanzhaoji/dsh-download-progress](https://github.com/nanshanzhaoji/dsh-download-progress) | Host | `dsh-download-progress` | Git only | 0 | DSH 下载进度插件：download 工具实时计算下载百分比，Web GUI 右下角悬浮面板显示进度条 |
| [opencamel/dsh-x-archive](https://github.com/opencamel/dsh-x-archive) | Host | `dsh-x-archive` | Git only | 0 | DSH (DeepSeek Harness) tool plugin: archive and read X (Twitter) posts as permanent Markdown snapshots, powere |
| [paul-yangmy/dsh-umi-ocr-vision](https://github.com/paul-yangmy/dsh-umi-ocr-vision) | Host | `dsh-umi-ocr-vision` | Git only | 0 |  |
| [rbelem/dsh-tui](https://github.com/rbelem/dsh-tui) | Host | `@rbelem/dsh-tui` | Git only | 0 |  |
| [rouyiemei/dsh-smart-router](https://github.com/rouyiemei/dsh-smart-router) | Host | `dsh-smart-router` | Git only | 0 | Automatic model routing for DeepSeek Harness: three difficulty tiers (hard/normal/easy) plus vision routing, p |
| [slicenferqin/dsh-whale-tui](https://github.com/slicenferqin/dsh-whale-tui) | Host | `dsh-whale-tui` | Git only | 0 | grok-build style terminal UI for DeepSeek Harness: a Rust/ratatui TUI shipped as a dsh plugin bundle |
| [sundusk/dsh-moodball](https://github.com/sundusk/dsh-moodball) | Host | `@linxin666/dsh-moodball-status` | Git only | 0 | DeepSeek Harness Pet |
| [sunny0826/dsh-plugin-herdr](https://github.com/sunny0826/dsh-plugin-herdr) | Host | `dsh-plugin-herdr` | Git only | 0 | Herdr control-plane plugin for DeepSeek Harness (DSH): observe and drive Herdr — a terminal workspace manager  |
| [stvlynn/dsh.fish](https://github.com/stvlynn/dsh.fish) | Host | `dsh-hub` | Git only | 0 | Discover and install DeepSeek Harness plugins, skills, MCP servers, agent presets, bundles, and profiles. |
| [yabolee-kkk/dsh-streaming-mcp-bridge](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge) | Host | `dsh-streaming-mcp-bridge` | Git only | 0 | DeepSeek Harness streaming MCP bridge: live session events as MCP progress, plus ACP adapter for cc-connect/Fe |
| [yauntyour/DSH-Encrypt](https://github.com/yauntyour/DSH-Encrypt) | Host | `dsh-encrypt` | Git only | 0 | DeepSeek Harness 凭证加密插件，通过设置密码使用AES-256-GCM+SHA3-256实现的全流程加密+校验，运行时临时解密，内存安全。 |
| [zhao999/dsh-plugin-wecom-bot](https://github.com/zhao999/dsh-plugin-wecom-bot) | Host | `dsh-plugin-wecom-bot` | Git only | 0 |  |
| [zhao-wuyan/dsh-maestro-runtime](https://github.com/zhao-wuyan/dsh-maestro-runtime) | Host | `dsh-maestro-runtime` | Git only | 0 | DSH host plugin for maestro-flow: guard, context, KG sync, delegate/team/coordinator runtime |

### Client plugins (64)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Client (Web UI) | `dshmarket` | npm | 754 | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | Client (Web UI) | `dsh-context` | npm | 172 | 一站式 DeepSeek Harness 上下文可视化插件，Context 面板与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。 |
| [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | Client (Web UI) | `@sanqi-normal/dsh-webui-market-plugin` | npm | 70 | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Ha |
| [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) | Client (Web UI) | `dsh-sidebar-qa` | npm | 16 | 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能 |
| [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) | Client (Web UI) | `dsh-full-remote` | npm | 14 | DeepSeek Harness plugin for remote access: a token-gated reverse proxy keeps settings, credentials, and file a |
| [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | Client (Web UI) | `dsh-outline` | npm | 10 | DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Client (Web UI) | `dsh-ui-appearance` | npm | 7 | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, gla |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | Client (Web UI) | `context-vista` | npm | 6 | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /co |
| [NanmiCoder/dsh-plugin-market](https://github.com/NanmiCoder/dsh-plugin-market) | Client (Web UI) | `@nanmicoder/dsh-plugin-market` | npm | 5 | Verified plugin marketplace for DeepSeek Harness — discover, inspect, install, and remove DSH plugins from the |
| [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) | Client (Web UI) | `dsh-composer-history` | npm | 5 | Terminal-style input history for the DeepSeek Harness web composer: edge-first arrows with exact draft/caret r |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Client (Web UI) | `dsh-github` | npm | 4 |  |
| [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) | Client (Web UI) | `dsh-agent-skills` | npm | 4 | Discover and manage Agent Skills inside DeepSeek Harness |
| [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | Client (Web UI) | `dsh-joi-channel-theme` | npm | 4 | 轴伊 Joi 双衣装主题 for DeepSeek Harness — unofficial, non-commercial fan theme plugin 🍊 |
| [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) | Client (Web UI) | `@ha-na-bi/dsh-client-ui-custom` | npm | 4 | Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcut |
| [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 3 | Cute whale-girl pet plugin for the DeepSeek Harness Web UI |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 3 | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Client (Web UI) | `dsh-xueqiu` | npm | 3 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) | Client (Web UI) | `dsh-workbench` | npm | 3 | Right-side file workspace for DeepSeek Harness Web. |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | Client (Web UI) | `@michengai/dsh-archive-manager` | npm | 2 | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [PerryLink/dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) | Client (Web UI) | `dsh-session-pin` | npm | 2 | Pin sessions and workspaces to the top of the DeepSeek Harness sidebar with per-pin row colors - a dual-face ( |
| [Physicolor/harness-ui-enhancer](https://github.com/Physicolor/harness-ui-enhancer) | Client (Web UI) | `harness-ui-enhancer` | npm | 2 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles  |
| [chenproton/dsh-history](https://github.com/chenproton/dsh-history) | Client (Web UI) | `dsh-history` | npm | 2 | dsh-history |
| [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) | Client (Web UI) | `@steven-wu/dsh-cost-meter` | npm | 1 | dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from t |
| [hytime/dsh-companion](https://github.com/hytime/dsh-companion) | Client (Web UI) | `@hytime/dsh-companion` | npm | 1 | DSH Companion 三件套(插件/技能/CLI)发布仓库 - hy-companion 陪伴系统 |
| [omdsh-plugins/omdsh-base](https://github.com/omdsh-plugins/omdsh-base) | Client (Web UI) | `@omdsh-plugins/omdsh-base` | npm | 1 | The session-mode system for the DeepSeek Harness web GUI: the segment registry every mode plugin registers int |
| [xczhanjun/lazeword](https://github.com/xczhanjun/lazeword) | Client (Web UI) | `dsh-lazeword` | npm | 1 |  |
| [ztlovelsw/dsh-model-profile](https://github.com/ztlovelsw/dsh-model-profile) | Client (Web UI) | `@ztlovelsw/dsh-model-profile` | npm | 1 | 在「设置 → 模型」的模型目录编辑器行内配置每个模型的图像支持与思考等级（reasoning efforts） |
| [AndyYang12345/dsh-butler-memory](https://github.com/AndyYang12345/dsh-butler-memory) | Client (Web UI) | `dsh-butler-memory` | npm | 0 | A dsh plugin that uses the butler memory mcp server to achieve better and organized memory for dsh. Long term  |
| [BPZ0726/dsh-bestui](https://github.com/BPZ0726/dsh-bestui) | Client (Web UI) | `dsh-bestui` | npm | 0 | Adaptive wallpaper and appearance studio for the DeepSeek Harness Web UI. |
| [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) | Client (Web UI) | `dsh-wsl-workspace-picker` | npm | 0 | Enhanced workspace directory browser for DeepSeek Harness web UI: one-click access to  /mnt  Windows drives un |
| [biggerboy/dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) | Client (Web UI) | `@biggerboy123/dsh-conversation-anchors` | npm | 0 | Sidebar conversation anchor navigation plugin for DeepSeek Harness web GUI |
| [geebos/dsh-terminal](https://github.com/geebos/dsh-terminal) | Client (Web UI) | `@geebos/dsh-terminal` | npm | 0 | Embeds a collapsible interactive terminal inside DeepSeek Harness Web conversations |
| [libinghui55/dsh-tavily-search](https://github.com/libinghui55/dsh-tavily-search) | Client (Web UI) | `dsh-tavily-search` | npm | 0 | Tavily-backed web search provider plugin for DeepSeek Harness (dsh): GUI config card with API key + on/off swi |
| [ossFrankFrank/dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme) | Client (Web UI) | `dsh-dracula-theme` | npm | 0 |  |
| [preflower/deepseek-harness-compaction-ui](https://github.com/preflower/deepseek-harness-compaction-ui) | Client (Web UI) | `deepseek-harness-compaction-ui` | npm | 0 | Visual percentage and token settings for official DeepSeek Harness compaction |
| [zzyyyds88/dsh-solo-leveling](https://github.com/zzyyyds88/dsh-solo-leveling) | Client (Web UI) | `deepseek-pet` | npm | 0 | DeepSeek Harness（DSH）插件集：访问门禁（登录 + HTTPS 反代）、默认值、手机端适配、桌宠、任务套件（看板 / 统计 / Git 图谱 / 皮肤）。Linux 服务器部署 DSH，浏览器 / 手机 |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | Client (Web UI) | `deepseek-plugin-store` | Git only | 19 | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | Client (Web UI) | `dsh-prompt-enhancer` | Git only | 15 | DeepSeek Harness DSH 提示词增强插件：✨ 一键优化草稿，增强提示词。 |
| [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) | Client (Web UI) | `dsh-shortcuts` | Git only | 2 | DeepSeek Harness WebUI 键盘快捷键插件（34 个预置功能、一键录制自定义、静默权限切换）— Fully customizable keyboard shortcuts for the DSH Web |
| [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) | Client (Web UI) | `dsh-angelina-themes` | Git only | 2 | Angelina light and dark glass themes with parallax for DeepSeek Harness |
| [dingzhenyao/dsh-plugin-directory](https://github.com/dingzhenyao/dsh-plugin-directory) | Client (Web UI) | `dsh-plugin-directory` | Git only | 2 | DSH Web GUI plugin: a browsable, searchable, stats-driven directory of GitHub DeepSeek Harness plugins (dsh-pl |
| [dsh-pub/dsh-pub](https://github.com/dsh-pub/dsh-pub) | Client (Web UI) | `@dsh-pub/plugin-directory` | Git only | 2 | The bilingual, source-backed registry and installer for the DeepSeek Harness plugin ecosystem. |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | Client (Web UI) | `dsh-skin-market` | Git only | 2 |  |
| [xDylanLong/dsh-snapmarketing](https://github.com/xDylanLong/dsh-snapmarketing) | Client (Web UI) | `@snapmarketing/dsh-plugin-center` | Git only | 2 | dsh-snapmarketing is a thin DeepSeek Harness surface for discovering, installing, and managing allowlisted plu |
| [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) | Client (Web UI) | `@hewhenjay/dsh-provider-hub` | Git only | 1 | Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs |
| [JUANWANG-BUAA/dsh-session-git](https://github.com/JUANWANG-BUAA/dsh-session-git) | Client (Web UI) | `dsh-session-git` | Git only | 1 | Conversation lineage for DeepSeek Harness: fork at a completed turn and show the family tree. Does not rewind  |
| [Suef-666/dsh-tab-alert](https://github.com/Suef-666/dsh-tab-alert) | Client (Web UI) | `dsh-tab-alert` | Git only | 1 |  |
| [haiyoucuv/dsh-chat-tweaks](https://github.com/haiyoucuv/dsh-chat-tweaks) | Client (Web UI) | `dsh-chat-tweaks` | Git only | 1 | DSH web UI-tweak plugin: show the provider display name next to the model name in the composer model seat, rem |
| [haiyoucuv/dsh-model-provider-label](https://github.com/haiyoucuv/dsh-model-provider-label) | Client (Web UI) | `dsh-model-provider-label` | Git only | 1 | DeepSeek Harness plugin that disambiguates same-named models by showing their provider |
| [l-s-c/dsh-workspace-labels](https://github.com/l-s-c/dsh-workspace-labels) | Client (Web UI) | `dsh-workspace-labels` | Git only | 1 | Open DeepSeek Harness workspaces from the existing sidebar three-dot menu |
| [luis1232023/dsh-workspace-enhance](https://github.com/luis1232023/dsh-workspace-enhance) | Client (Web UI) | `dsh-workspace-enhance` | Git only | 1 | 增强dsh左侧工作区区侧栏——每个工作区文件夹下提供 任务/文件/Git 子 Tab，含文件树与右侧预览、Git 的 Changes/Graph 双视图、搜索、视图切换与添加工作区，界面样式对齐默认插件。 |
| [realMisakaMikoto/dsh-skin-studio](https://github.com/realMisakaMikoto/dsh-skin-studio) | Client (Web UI) | `dsh-skin-studio` | Git only | 1 | DeepSeek Harness 自定义皮肤工作室，支持全界面配色、组件图片/视频背景与皮肤包分享 |
| [tttwh/dsh-plugin-Audit](https://github.com/tttwh/dsh-plugin-Audit) | Client (Web UI) | `dsh-plugin-Audit` | Git only | 1 | 将DeepSeek Harness插件列表按来源分组展示——官方插件与自行安装插件，一目了然。 |
| [189-sketch/dsh-custom-logo](https://github.com/189-sketch/dsh-custom-logo) | Client (Web UI) | `dsh-custom-logo` | Git only | 0 | Replace the DSH top-left BrandWordmark/FishLogo with your own image or text — an inline ⚙ handle inside the wo |
| [Eleven-is-cool/dsh-worktree](https://github.com/Eleven-is-cool/dsh-worktree) | Client (Web UI) | `@eleven-is-cool/dsh-worktree` | Git only | 0 | Git worktree plugin for DeepSeek Harness web: browse/create worktrees from the workspace panel |
| [LINNoot/dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | Client (Web UI) | `dsh-pet-bridge` | Git only | 0 | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) | Client (Web UI) | `@dsh-community/dsh-req-workbench` | Git only | 0 | DeepSeek Harness Web UI 插件：需求管理工作台，从对话/文本/本地文件解析并管理需求与子任务，支持截止时间与超时提醒。 |
| [Yui-Little/dsh-mobile-shell](https://github.com/Yui-Little/dsh-mobile-shell) | Client (Web UI) | `dsh-mobile-shell` | Git only | 0 | Mobile shell UI plugin for DeepSeek Harness web: overlay drawer, full-width conversation, settings sheet, mark |
| [fengs2021/dsh-plugin-catalog](https://github.com/fengs2021/dsh-plugin-catalog) | Client (Web UI) | `dsh-plugin-catalog` | Git only | 0 |  |
| [huangrx6/dsh-plugin](https://github.com/huangrx6/dsh-plugin) | Client (Web UI) | `dsh-layout` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：Skill 管理（导入/详情/多格式文件预览）、MCP 服务器管理（补丁层读写/测试连接/工具明细）、布局设置 |
| [omdsh-plugins/omdsh-chatmode](https://github.com/omdsh-plugins/omdsh-chatmode) | Client (Web UI) | `@omdsh-plugins/omdsh-chatmode` | Git only | 0 | Chat mode for the DeepSeek Harness web GUI: a Chat/Work switch above the conversation, a workspace-free sessio |
| [omdsh-plugins/omdsh-sidechat](https://github.com/omdsh-plugins/omdsh-sidechat) | Client (Web UI) | `@omdsh-plugins/omdsh-sidechat` | Git only | 0 | Summon a conversation of its own anywhere in the DeepSeek Harness web GUI: a side panel anchored to whatever y |
| [omdsh-plugins/omdsh-shortcuts](https://github.com/omdsh-plugins/omdsh-shortcuts) | Client (Web UI) | `@omdsh-plugins/omdsh-shortcuts` | Git only | 0 | Bind a chord to anything the harness can do: a menu the desktop shell renders natively, a switchboard the runt |
| [u9521/dsh-subagent-custom-model](https://github.com/u9521/dsh-subagent-custom-model) | Client (Web UI) | `@local/dsh-subagent-custom-model` | Git only | 0 | Subagent custom model configuration plugin for DeepSeek Harness |

### Client + Host (142)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Client + Host | `dsh-plugin-desktop` | npm | 10823 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 3874 | Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Client + Host | `dsh-better-sidebar` | npm | 1847 | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/Git/子代理页面 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Client + Host | `@anionex/dsh-vision-toolkit` | npm | 585 | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Client + Host | `deepseek-idesign` | npm | 79 | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 69 | Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, sk |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Client + Host | `dsh-mnemon` | npm | 66 | Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Client + Host | `dsh-chat-import` | npm | 54 | Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCo |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Client + Host | `dsh-web-plugin-manager` | npm | 53 | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖 |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Client + Host | `@mars-sea/dsh-commandcode-provider` | npm | 48 | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Client + Host | `@mstar-harness/dsh` | npm | 48 | A Skill-driven Harness/Loop Engineering Workflow Agent Plugin |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Client + Host | `@yejiming/dsh-data-agent` | npm | 35 | Connect DSH to your database for conversational data analysis and actionable business insights. |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Client + Host | `dsh-codex-connect` | npm | 20 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Client + Host | `dsh-user-experience` | npm | 19 | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX  |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Client + Host | `dsh-codex` | npm | 18 | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) | Client + Host | `dsh-smooth-stream` | npm | 17 | DeepSeek Harness (dsh) plugin: silky streaming reveal, no flicker. dsh 丝滑流式渲染插件。 |
| [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Client + Host | `@shengsheng/dsh-taskboard` | npm | 17 | Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native W |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | Client + Host | `dsh-recommend` | npm | 17 | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | Client + Host | `@canglongcl/dsh-web-review` | npm | 15 | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | Client + Host | `@leetoners/dsh-ui-subagent-monitor` | npm | 12 |  |
| [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) | Client + Host | `dsh-recall-plugin` | npm | 12 | DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent |
| [isomoes/ikanban](https://github.com/isomoes/ikanban) | Client + Host | `@isomoes/dsh-ikanban` | npm | 11 | Monorepo for the iKanban browser-surface fork for DeepSeek Harness. |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Client + Host | `dsh-remote` | npm | 10 | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution buil |
| [icodesign/orbis](https://github.com/icodesign/orbis) | Client + Host | `@orbisapp/remote-dsh` | npm | 9 | A mobile client for deepseek harness remote control |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | Client + Host | `dsh-passwords` | npm | 9 | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, sub |
| [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | Client + Host | `dsh-mcp-panel` | npm | 8 | MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and  |
| [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Client + Host | `dsh-plugin-subscriptions` | npm | 8 | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth logi |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | Client + Host | `@michengai/dsh-skills-manager` | npm | 7 | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Client + Host | `dsh-auto-review` | npm | 7 | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns stru |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Client + Host | `dsh-builtin-toggles` | npm | 7 | Evidence-backed built-in capability inspector with fail-closed controls for DeepSeek Harness Web. |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Client + Host | `dsh-codex-subscription` | npm | 7 | 在 DeepSeek Harness 中直接使用 ChatGPT/Codex 订阅，无需 OpenAI API Key 或 Codex CLI，支持 OAuth 登录、订阅搜索与额度显示 \| ChatGPT/Codex |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Client + Host | `dsh-permission-rules` | npm | 6 | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-na |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Client + Host | `dsh-token-panel` | npm | 6 | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly  |
| [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) | Client + Host | `@eddyskywalker/dsh-chatgpt-subscription` | npm | 3 |  |
| [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) | Client + Host | `@jiyr0119/dsh-workspace-explorer` | npm | 3 | DeepSeek Harness 工作区文件资源管理器:右侧目录树面板,点击/拖拽文件引用进输入框,UI 对齐 DSH 原生风格 \| Workspace file explorer plugin for DeepSee |
| [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) | Client + Host | `dsh-output-styles` | npm | 3 | Claude Code outputStyles for DeepSeek Harness - session-scoped, durable, runtime-switchable model output style |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Client + Host | `dsh-plugin-subagent-director` | npm | 3 | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plu |
| [astra3294/dsh-doctor](https://github.com/astra3294/dsh-doctor) | Client + Host | `dsh-doctor` | npm | 3 | Deterministic diagnostics and recovery for DeepSeek Harness |
| [banlanzs/dsh-web-enhanced](https://github.com/banlanzs/dsh-web-enhanced) | Client + Host | `dsh-web-enhanced` | npm | 3 | [building……] DeepSeek Harness's web enhancement plugin—brings task dashboards, Git graphs, workspace file pane |
| [shatyuka/dsh-llm-codebuddy](https://github.com/shatyuka/dsh-llm-codebuddy) | Client + Host | `@shatyuka/dsh-llm-codebuddy` | npm | 3 | Tencent CodeBuddy plugin for DeepSeek Harness (dsh). |
| [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | Client + Host | `dsh-ocgo-usage` | npm | 3 | A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the |
| [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | Client + Host | `dsh-bell-notify` | npm | 2 | DeepSeek Harness (dsh) 社区插件：为 Agent 生命周期事件合成铃声 + 右下角呼吸状态点，每个事件可上传自定义音频。dsh plugin that rings bells and shows a |
| [Ready22Race/dsh-team-task](https://github.com/Ready22Race/dsh-team-task) | Client + Host | `@ready22race/dsh-team-task` | npm | 2 | team-task for DeepSeek Harness (dsh): long-horizon multi-agent tasks — reviewed plan DAG, runtime-owned settle |
| [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) | Client + Host | `dsh-auth-gate` | npm | 2 | Login gate for the DeepSeek Harness (dsh) web surface: password or shared-token authentication, session cookie |
| [valuz-ai/dsh-valuz-genui](https://github.com/valuz-ai/dsh-valuz-genui) | Client + Host | `@valuz/dsh-valuz-genui` | npm | 2 | DeepSeek Harness plugin: generate_ui — the model authors A2UI documents rendered as interactive surfaces in th |
| [863683348/dsh-plugin-audit](https://github.com/863683348/dsh-plugin-audit) | Client + Host | `dsh-audit` | npm | 1 | Plugin health audit for DeepSeek Harness: sync the GitHub dsh-plugin topic into a local catalog, probe npm, st |
| [AKS1st/dsh-skill-manager](https://github.com/AKS1st/dsh-skill-manager) | Client + Host | `dsh-skill-manager` | npm | 1 | DSH web plugin: a Skill Manager page in the settings panel browsing system / user / workspace / preset skills, |
| [Britneycode/dsh-update-center](https://github.com/Britneycode/dsh-update-center) | Client + Host | `dsh-update-center` | npm | 1 | dsh (DeepSeek Harness) 更新中心与插件市场：自托管 plugins.json 注册表（GitHub dsh-plugin 主题自动聚合 + npm 包名映射秒级安装），一键安装/更新/卸载/禁用插件 |
| [H97y/dsh-devflow](https://github.com/H97y/dsh-devflow) | Client + Host | `dsh-devflow` | npm | 1 | Automated development pipeline plugin for DeepSeek Harness: requirement pool → LLM refine/design/plan/review → |
| [JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) | Client + Host | `dsh-layered-memory` | npm | 1 | Layered memory plugin for DeepSeek Harness (dsh) — auto-distills conversations into L0–L3 memories (raw dialog |
| [MarecGents/deepseek-harness-hub](https://github.com/MarecGents/deepseek-harness-hub) | Client + Host | `@marecgents/dsh-hub` | npm | 1 | windows desktop project as plugin for deepseek harness |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | Client + Host | `@michengai/dsh-agency-agents` | npm | 1 | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [PerryLink/dsh-budget](https://github.com/PerryLink/dsh-budget) | Client + Host | `dsh-budget` | npm | 1 | Cost governance for DeepSeek Harness: aggregated token/cost metering per model, session and day, budget caps w |
| [Saikel-Orado-Liu/dsh-cost-meter](https://github.com/Saikel-Orado-Liu/dsh-cost-meter) | Client + Host | `@gamegeek-saikel/dsh-cost-meter` | npm | 1 | Cost tracking plugin for the DeepSeek Harness Web GUI — snapshot-anchored per-turn pricing, account balance, a |
| [SiriLee/dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | Client + Host | `dsh-edit-approval` | npm | 1 | DeepSeek Harness plugin: per-edit approval with red/green line diff before write/edit/str_replace_editor (appr |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | Client + Host | `dsh-rewind-plugin` | npm | 1 | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantic |
| [WenhongPan/dsh-projects](https://github.com/WenhongPan/dsh-projects) | Client + Host | `dsh-projects` | npm | 1 | Codex-inspired project and session management for DeepSeek Harness. |
| [cookiesheep/whale-on-desk](https://github.com/cookiesheep/whale-on-desk) | Client + Host | `whale-on-desk` | npm | 1 | A pixel-art whale companion for DeepSeek Harness — it swims while your agents work and taps the glass when an  |
| [gfds2005/dsh-timed-goal](https://github.com/gfds2005/dsh-timed-goal) | Client + Host | `dsh-timed-goal` | npm | 1 | DSH（DeepSeek Harness） Web 插件：在任意对话中配置一次性（或每日重复）任务——一个绝对时间加上要执行的提示词。到点时，插件将对话权限固定为 full access（danger-full-acce |
| [ruby1304/dsh-turn-fork](https://github.com/ruby1304/dsh-turn-fork) | Client + Host | `dsh-turn-fork` | npm | 1 | Turn-atomic message editing, retry, reroll and version-tree navigation for DeepSeek Harness conversations — th |
| [saitamahang/dsh-skill-importer](https://github.com/saitamahang/dsh-skill-importer) | Client + Host | `dsh-skill-importer` | npm | 1 | deepSeek Harness plugin: import and manage skills from files or URLs, with a composer picker and /skills comma |
| [sjh9714/dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | Client + Host | `dsh-what-changed` | npm | 1 | 看得见 Agent 到底改了什么。一个会话里所有文件改动，一屏看完再决定要不要提交 \| See what the agent actually changed. Every file it wrote this ses |
| [stoneface10/dsh-codex-connect-plus](https://github.com/stoneface10/dsh-codex-connect-plus) | Client + Host | `dsh-codex-connect-plus` | npm | 1 | ChatGPT OAuth, Codex models, and gpt-image-2 tools for DeepSeek Harness |
| [tianleyitian/dsh-file-drop](https://github.com/tianleyitian/dsh-file-drop) | Client + Host | `dsh-file-drop` | npm | 1 | 文件拖拽：把文件拖到 DSH 窗口，真实路径写入输入框 |
| [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) | Client + Host | `dsh-ui-tweaks` | npm | 1 | 一切皆插件，可以定义自己喜欢的dsh，开关控制单项功能，字体大小，表格样式，对话框长度，timeline，git等 |
| [young1lin/dsh-ui-gitworkbench](https://github.com/young1lin/dsh-ui-gitworkbench) | Client + Host | `@young1lin/dsh-ui-gitworkbench` | npm | 1 |  |
| [863683348/dsh-trend-radar](https://github.com/863683348/dsh-trend-radar) | Client + Host | `dsh-trend-radar` | npm | 0 | Ecosystem trend dashboard (行情面板) for dsh plugins: snapshot dsh-plugin topic + awesome list into local history, |
| [AlexYin-Tongji/dsh-plugin-console](https://github.com/AlexYin-Tongji/dsh-plugin-console) | Client + Host | `dsh-plugin-console` | npm | 0 | DSH Plugin Console: a verified community plugin catalog and profile manager for DeepSeek Harness |
| [Czerror/dsh-plugin-prompt-tool](https://github.com/Czerror/dsh-plugin-prompt-tool) | Client + Host | `dsh-plugin-prompt-tool` | npm | 0 | DSH 插件：简体中文行为规范三层注入（常驻层 + prompt 技能 + anchored preset 锚定注入）+ Web UI 编辑 prompt.md |
| [GraySilver/dsh-task-modes](https://github.com/GraySilver/dsh-task-modes) | Client + Host | `@graysilver/dsh-task-modes` | npm | 0 | 让每一次 Agent 协作都有明确的工作方式。Independent DeepSeek Harness Web plugin with composable Execute/Plan, Standard/First pr |
| [JayDong9130/dsh-evolution-lab](https://github.com/JayDong9130/dsh-evolution-lab) | Client + Host | `dsh-evolution-lab` | npm | 0 | Proof-carrying Skill self-evolution for DeepSeek Harness |
| [LaoYueHanNi/dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree) | Client + Host | `dsh-git-worktree` | npm | 0 |  |
| [Sttrevens/dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) | Client + Host | `@steven-wu/dsh-linked-folders` | npm | 0 | dsh plugin: multi-folder workspace — global linked-folders list + per-session on-the-fly linking, managed from |
| [brzvsk/dsh-plugins](https://github.com/brzvsk/dsh-plugins) | Client + Host | `dsh-visualize` | npm | 0 |  |
| [lkshjd/dsh-balance](https://github.com/lkshjd/dsh-balance) | Client + Host | `@sky_sun/dsh-balance` | npm | 0 | DeepSeek Harness session-header account balance plugin: host /api/balance route over credentials seam plus a 6 |
| [meltartica/dsh-mcp-servers](https://github.com/meltartica/dsh-mcp-servers) | Client + Host | `dsh-mcp-servers` | npm | 0 | DeepSeek Harness bundle that exposes Model Context Protocol (MCP) servers as native tools, with a settings UI, |
| [omdsh-plugins/omdsh-plughub](https://github.com/omdsh-plugins/omdsh-plughub) | Client + Host | `@omdsh-plugins/omdsh-plughub` | npm | 0 | The omdsh plugin hub: a Settings tab that installs and removes omdsh plugins from a configurable upstream, and |
| [peterliucius/dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) | Client + Host | `dsh-prompt-optimize` | npm | 0 | DeepSeek Harness web plugin: rewrite the current composer draft through an auxiliary LLM call. Click replaces  |
| [quicksandznzn/dsh-session-share](https://github.com/quicksandznzn/dsh-session-share) | Client + Host | `dsh-session-share` | npm | 0 | Share and import complete DeepSeek Harness Session trees as validated, offline Capsules with local ZIP transfe |
| [xiaosenho/dsh-plugin-remote-access](https://github.com/xiaosenho/dsh-plugin-remote-access) | Client + Host | `@xiaosenho/dsh-plugin-remote-access` | npm | 0 | dsh远程访问插件，支持局域网和公网隧道连接 |
| [zoyluoblue/deepseek-harness-billing](https://github.com/zoyluoblue/deepseek-harness-billing) | Client + Host | `@zoytown/dsh-billing` | npm | 0 | DeepSeek Harness (dsh) plugin for DeepSeek API account balance — sidebar indicator, Settings page, and /balanc |
| [zoyluoblue/deepseek-harness-token](https://github.com/zoyluoblue/deepseek-harness-token) | Client + Host | `@zoytown/dsh-token` | npm | 0 | DeepSeek Harness (dsh) plugin for machine-wide token usage statistics — a Settings page with totals, a GitHub- |
| [zuoguyoupan2023/openharness-reader](https://github.com/zuoguyoupan2023/openharness-reader) | Client + Host | `openharness-reader` | npm | 0 | OpenHarness Reader - workspace file browser/editor with Markdown preview for DeepSeek Harness Web |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | Client + Host | `@ethanyoq/dsh-ai-novel-writer` | Git only | 372 | 本地优先 AI 小说创作工作台，提供 Windows/macOS 桌面版与 DeepSeek Harness 插件开发预览，支持角色、大纲、章节蓝图、审稿修稿和本地模型。 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Client + Host | `dsh-at-file` | Git only | 309 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path  |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 45 | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Client + Host | `dsh-agent-team-gui` | Git only | 28 | Persistent multi-model agent squads for DeepSeek Harness — reusable teams, per-agent model/tool policies, and  |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | Client + Host | `@dsh-external/ego-browser` | Git only | 22 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | Client + Host | `@dsh-scholar/research-plugin` | Git only | 20 | dsh-scholar |
| [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | Client + Host | `seektty` | Git only | 12 | Pluggable DeepSeek-colored TUI for DeepSeek Harness |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | Client + Host | `dsh-awiki` | Git only | 3 | AWiki identity and messaging plugin for DeepSeek Harness |
| [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) | Client + Host | `dsh-billing-community-bundle` | Git only | 2 |  |
| [aka-danielZhang/dsh-mcp-settings](https://github.com/aka-danielZhang/dsh-mcp-settings) | Client + Host | `dsh-mcp-settings` | Git only | 2 | DSH bundle for MCP server management, inventory status, and Web settings |
| [lhwu1/dsh-withskillhub](https://github.com/lhwu1/dsh-withskillhub) | Client + Host | `dsh-withskillhub` | Git only | 2 | 携手skillhub，快捷安装启用丰富的skill，一键装配方便快捷。 |
| [tyql688/dsh-providers](https://github.com/tyql688/dsh-providers) | Client + Host | `dsh-providers` | Git only | 2 | Model providers for DeepSeek Harness: sign in with OAuth or an API key, and keep every provider's model catalo |
| [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | Client + Host | `dsh-nebula` | Git only | 2 | nebula v5 plugin for deepseek harness |
| [1321928757/dsh-prompt-polish](https://github.com/1321928757/dsh-prompt-polish) | Client + Host | `dsh-prompt-polish` | Git only | 1 | 输入栏提示词优化插件 / Input-bar prompt optimizer for DeepSeek Harness：6 种策略 × 3 种语言一键重写草稿，可选会话上下文，带确认弹窗、最近 5 次历史与三级设置持久 |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Client + Host | `dsh-web-tools` | Git only | 1 | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXN |
| [HeWhenJay/dsh-project-knowledge-review](https://github.com/HeWhenJay/dsh-project-knowledge-review) | Client + Host | `dsh-project-knowledge-review` | Git only | 1 | 中文 DSH 知识复习插件：有证据才回答、资料缺失提醒补充学习视频。 |
| [Jian-Sparrow/dsh-plugin-mission-control](https://github.com/Jian-Sparrow/dsh-plugin-mission-control) | Client + Host | `dsh-plugin-mission-control` | Git only | 1 |  |
| [PandaAIDD/dsh-molecule-viewer](https://github.com/PandaAIDD/dsh-molecule-viewer) | Client + Host | `@dsh-plugins/dsh-molecule-viewer` | Git only | 1 | DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染交互式 3D 分子查看器（3Dmol.js，支持旋转/缩放/样式切换/着色）。 |
| [cungphammanh590-star/dsh-quiz](https://github.com/cungphammanh590-star/dsh-quiz) | Client + Host | `dsh-quiz` | Git only | 1 | 让碎片化知识随问答深入脑海 |
| [eurt-nano/dsh-cache-cost-monitor](https://github.com/eurt-nano/dsh-cache-cost-monitor) | Client + Host | `dsh-cache-cost-monitor` | Git only | 1 | （已按规范要求严格配置文件，不会出现异常阻止启动） DeepSeek Harness 插件，the monster of cache-cost，用于监控前缀缓存命中率、统计 Token 消耗与估算 API 运行成本。 D |
| [fazhu4/dsh-usage-insights](https://github.com/fazhu4/dsh-usage-insights) | Client + Host | `dsh-usage-insights` | Git only | 1 | dsh的本地用量面板，统计 Token、请求、Agent 活动、工具调用和性能 |
| [huxint/dsh-team](https://github.com/huxint/dsh-team) | Client + Host | `dsh-team` | Git only | 1 | Agent teams for DeepSeek Harness: named long-lived teammates over ctx.subagents, a shared task list, a member- |
| [kaiqiangh/dsh-workshpace-plugin](https://github.com/kaiqiangh/dsh-workshpace-plugin) | Client + Host | `dsh-workspace-plugin` | Git only | 1 | Inspect the files an agent touched, review session artifacts, preview bounded content, and manage local Worksp |
| [kexuejin/dsh-zhihu-dashboard](https://github.com/kexuejin/dsh-zhihu-dashboard) | Client + Host | `dsh-zhihu-dashboard` | Git only | 1 | Zhihu (知乎) dashboard for DeepSeek Harness: hot list with trends, follow feed, post tracking, and app-idea dist |
| [lhwu1/dsh-lookseek](https://github.com/lhwu1/dsh-lookseek) | Client + Host | `dsh-lookseek` | Git only | 1 | 可以看见ai的执行步骤，将ai的步骤抽出来为对应动画，增加编码时等待的娱乐性。 |
| [luodeb/dsh-web-auth-gateway](https://github.com/luodeb/dsh-web-auth-gateway) | Client + Host | `dsh-web-auth-gateway` | Git only | 1 | Authentication reverse-proxy gateway plugin for DeepSeek Harness Web |
| [pureskywalk/dsh-context-show](https://github.com/pureskywalk/dsh-context-show) | Client + Host | `dsh-context-show` | Git only | 1 | DSH Web 实时上下文占用面板：可拖动面板、按工具/供应商统计 token 用量与花费、峰谷计价 |
| [space-spacee-clamation/dsh-package-manager](https://github.com/space-spacee-clamation/dsh-package-manager) | Client + Host | `@dsh-ext/dsh-package-manager` | Git only | 1 | dsh包管理器中间件，对原有的add的模式进行的封装，支持预设和插件  （内容还在迭代!!!!） |
| [spacexun2/dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) | Client + Host | `@dsh-external/dsh-worktime-board` | Git only | 1 | 🐂🐴 牛马修仙看板：DeepSeek Harness 工时统计 × 修仙养成——把每一分钟劳动，都修成境界（日/周/月 + 学年年历，炼气→宇宙洪荒） |
| [wangxing-git/dsh-autogate](https://github.com/wangxing-git/dsh-autogate) | Client + Host | `dsh-autogate` | Git only | 1 | DeepSeek Harness 自动审批插件：在 workspace-write 沙箱之上叠加确定性规则 + LLM 安全审批，自动模式不放宽沙箱、fail-closed。 Safe auto-approval for |
| [weisiren000/dsh-remote-ssh-ops](https://github.com/weisiren000/dsh-remote-ssh-ops) | Client + Host | `dsh-remote-ssh-ops` | Git only | 1 | DeepSeek Harness SSH 远程运维插件，支持远程命令、文件管理、JumpServer 与 keyboard-interactive 认证 |
| [xiagaogaozi/dsh-subagent-pool](https://github.com/xiagaogaozi/dsh-subagent-pool) | Client + Host | `dsh-subagent-pool` | Git only | 1 | DSH named-subagent pool: configure reusable subagents (model/reasoning preset) in settings and call them by na |
| [1710782766/dsh-llm-vision](https://github.com/1710782766/dsh-llm-vision) | Client + Host | `dsh-llm-vision` | Git only | 0 | Reliable vision + OCR for text-only models on DeepSeek Harness: describe_image (normal/critical) + extract_tex |
| [21hbguo/dsh-thinking-counter](https://github.com/21hbguo/dsh-thinking-counter) | Client + Host | `@dsh-external/dsh-thinking-counter` | Git only | 0 | DSH「大胖鲸智商检测器」：Thinking 短语检测统计 · 全会话 reasoning 短语命中/分组/聪明程度判定 |
| [AtomerCore/dsh-qq-agent-mail](https://github.com/AtomerCore/dsh-qq-agent-mail) | Client + Host | `dsh-qq-agent-mail` | Git only | 0 | A DeepSeek Harness plugin that integrates QQ Agent Mail. |
| [CodeIdeal/dsh_review](https://github.com/CodeIdeal/dsh_review) | Client + Host | `dsh_review` | Git only | 0 | Interactive Codex CLI-style code review plugin for DeepSeek Harness |
| [MicroSpotlight/openharness-find-plugin](https://github.com/MicroSpotlight/openharness-find-plugin) | Client + Host | `@microspotlight/openharness-find-plugin` | Git only | 0 |  |
| [PerryLink/dsh-draw](https://github.com/PerryLink/dsh-draw) | Client + Host | `dsh-draw` | Git only | 0 | Unified static-image generation router for DeepSeek Harness: one image_generate tool with standard parameters, |
| [PerryLink/dsh-talk](https://github.com/PerryLink/dsh-talk) | Client + Host | `dsh-talk` | Git only | 0 | Voice-first session loop for DeepSeek Harness: a composer microphone button with browser/local speech-to-text  |
| [SipengXie2024/dsh-turn-reminder](https://github.com/SipengXie2024/dsh-turn-reminder) | Client + Host | `dsh-turn-reminder` | Git only | 0 | User-attention notifications for DeepSeek Harness (dsh) web: turn end, approval requests, and model questions  |
| [TheColdWorld/dsh-wsl-keepalive](https://github.com/TheColdWorld/dsh-wsl-keepalive) | Client + Host | `wsl-keepalive` | Git only | 0 | a Ai-Gererated plugin for Dsh alive in Windows Subsystem of Linux |
| [XiaHouSheng/dsh-token-tracker](https://github.com/XiaHouSheng/dsh-token-tracker) | Client + Host | `dsh-token-tracker` | Git only | 0 | A DeepSeek-Harness web plugin that tracks provider token usage, prices it with a peak/off-peak table, and show |
| [Xs1KVerOA/dsh-service-manage](https://github.com/Xs1KVerOA/dsh-service-manage) | Client + Host | `dsh-service-manage` | Git only | 0 | DeepSeek Harness service manager for SSH, FTP, databases, Docker and S3, with proxy support, SSH file transfer |
| [bx33661/dsh-omv](https://github.com/bx33661/dsh-omv) | Client + Host | `dsh-omv` | Git only | 0 | Native DeepSeek Harness workbench for evidence-first vulnerability research, reproduction, and reporting. |
| [crack-time/dsh-client-ui-skin-cottage](https://github.com/crack-time/dsh-client-ui-skin-cottage) | Client + Host | `@crack/dsh-client-ui-skin-cottage` | Git only | 0 | Pastoral Cottage skin for the DeepSeek Harness web GUI: 4K wallpaper + frosted glass panels (pure-UI dsh.clien |
| [facai0316/dsh-auto-coding](https://github.com/facai0316/dsh-auto-coding) | Client + Host | `@auto-coding/mega` | Git only | 0 | 一个代码流水线，前期磨合好了以后，会有个很舒服的 vibe coding 体验，也可以更好的把闲时 token 利用起来（白天人肉测试+写需求+审核前一天的计划和决策，晚上让流水线自己挂着跑） |
| [jean3690/dsh-devtoolbox](https://github.com/jean3690/dsh-devtoolbox) | Client + Host | `dsh-devtoolbox` | Git only | 0 | DSH 本地工具箱插件：侧边栏独立页面 + /toolbox 命令 + 配置驱动的 agent 工具注册，35 个纯本地小工具（文本/编码/数据/安全/提取/转换/参考/效率），数据不出本机。 |
| [lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) | Client + Host | `@lujianjun19/dsh-llm-github-copilot` | Git only | 0 |  |
| [omdsh-plugins/omdsh-codemode](https://github.com/omdsh-plugins/omdsh-codemode) | Client + Host | `@omdsh-plugins/omdsh-codemode` | Git only | 0 | Code mode for the DeepSeek Harness web GUI: a third segment beside Chat and Work whose column is the harness's |
| [omdsh-plugins/omdsh-editor](https://github.com/omdsh-plugins/omdsh-editor) | Client + Host | `@omdsh-plugins/omdsh-editor` | Git only | 0 | Open the current project directory in a native editor from the DeepSeek Harness web GUI: the session header's  |
| [omdsh-plugins/omdsh-remdev](https://github.com/omdsh-plugins/omdsh-remdev) | Client + Host | `@omdsh-plugins/omdsh-remdev` | Git only | 0 | Remote development for the DeepSeek Harness web GUI: connect a workspace to an SSH server, provision a .dsh-se |
| [omdsh-plugins/omdsh-sidepanel](https://github.com/omdsh-plugins/omdsh-sidepanel) | Client + Host | `@omdsh-plugins/omdsh-sidepanel` | Git only | 0 | Work-mode side panels for the DeepSeek Harness web GUI: a right file explorer with previews and a bottom termi |
| [omdsh-plugins/omdsh-status](https://github.com/omdsh-plugins/omdsh-status) | Client + Host | `@omdsh-plugins/omdsh-status` | Git only | 0 | Current project and its git state at a glance for the DeepSeek Harness web GUI: the project name with its bran |
| [omdsh-plugins/omdsh-usage](https://github.com/omdsh-plugins/omdsh-usage) | Client + Host | `@omdsh-plugins/omdsh-usage` | Git only | 0 | API spend at a glance for the DeepSeek Harness web GUI: this conversation, this project, and the account balan |
| [realpkuasule/dsh-side-notify](https://github.com/realpkuasule/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |
| [realpkuasule/dsh-sidechat](https://github.com/realpkuasule/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |
| [winditer/dsh-prompt-optimizer](https://github.com/winditer/dsh-prompt-optimizer) | Client + Host | `dsh-prompt-optimizer` | Git only | 0 |  |
| [xiaozhiaixue/dsh-sidechat](https://github.com/xiaozhiaixue/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |
| [xiaozhiaixue/dsh-side-notify](https://github.com/xiaozhiaixue/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |

## Partial attribution (34)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Unattributed | `dsh-vision-router` | npm | 551 | Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q& |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | Unattributed | `dsh-plugins-store` | npm | 56 | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness commu |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Unattributed | `dsh-lark-channel` | npm | 29 | Lark/Feishu IM bot channel for DeepSeek Harness \| 飞书 DeepSeek Harness （DSH）插件 |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 20 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [CH4ACKO3/dsh-harmony](https://github.com/CH4ACKO3/dsh-harmony) | Unattributed | `dsh-harmony` | npm | 10 | A library for patching, replacing and decorating dsh plugin during runtime |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Unattributed | `dsh-import-agents` | npm | 10 | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-clic |
| [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) | Unattributed | `dsh-extension-hub` | npm | 8 | Manage DSH（DeepSeek Harness)） skills and MCP servers: CLI + settings-page UI with zh/en i18n, Claude/Codex imp |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | Unattributed | `@kc0ed/dsh-bottom-bar` | npm | 6 | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Unattributed | `dsh-plugin-guide` | npm | 4 | Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Of |
| [Zalpha263/dsh-file-explorer](https://github.com/Zalpha263/dsh-file-explorer) | Unattributed | `dsh-file-explorer` | npm | 4 | 可以像其他agent一样查看当前工作区的文件夹，并且可以预览文件 |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DSH 插件市场 — DeepSeek Harness 设置内一键安装社区插件，并提供公开目录站（浏览 / 复制安装命令） |
| [D4Cluv-Train/dsh-plugin-manager](https://github.com/D4Cluv-Train/dsh-plugin-manager) | Unattributed | `@d4cluvtrain/dsh-plugin-manager` | npm | 2 | 一个插件管理的小插件，功能逐步增加中... |
| [nonentity303/dsh-plugin-manager](https://github.com/nonentity303/dsh-plugin-manager) | Unattributed | `dsh-plugin-manager-pro` | npm | 2 |  |
| [xgone/dsh-remote](https://github.com/xgone/dsh-remote) | Unattributed | `@xgone/dsh-remote` | npm | 2 | Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, rol |
| [Choi-Peng/dsh-deepseek-balance](https://github.com/Choi-Peng/dsh-deepseek-balance) | Unattributed | `@choi-p/dsh-deepseek-balance` | npm | 1 | DeepSeek Harness bundle plugin: shows your DeepSeek account balance in the web sidebar footer, above Settings. |
| [Hanihahaha/deepseek-harness-plugins](https://github.com/Hanihahaha/deepseek-harness-plugins) | Unattributed | `dsh-auto-approve` | npm | 1 |  |
| [Julyves/dsh-git-ui](https://github.com/Julyves/dsh-git-ui) | Unattributed | `dsh-git-ui` | npm | 1 | DeepSeek Harness (dsh) plugin: Git status pill in the session header — branch, dirty counts, ahead/behind, rec |
| [dshworks/dsh-meter](https://github.com/dshworks/dsh-meter) | Unattributed | `@dshworks/dsh-meter` | npm | 1 | The DeepSeek time-of-use meter for dsh: what this session cost, which tariff is running, when it flips, and th |
| [jeremy9682/dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | Unattributed | `@jeremy9682/dsh-acp` | npm | 1 | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) | Unattributed | `claude2dsh` | npm | 1 |  |
| [qsjzqssh/mc-hud](https://github.com/qsjzqssh/mc-hud) | Unattributed | `mc-hud` | npm | 1 | Minecraft-style token consumption HUD for DeepSeek Harness |
| [Fectivnfy112357/dsh-dual-plugin-guide](https://github.com/Fectivnfy112357/dsh-dual-plugin-guide) | Unattributed | `dsh-dual-plugin-guide` | npm | 0 | Dual-format plugin development guide: DSH static plugin package (dsh plugin --profile add) + Agent Plugins 1.0 |
| [Walvez/dsh-search-failover](https://github.com/Walvez/dsh-search-failover) | Unattributed | `dsh-search-failover` | npm | 0 | DSH provider-level web search failover pool: 8 free/paid backends with quota-aware circuit breaking (keeps nat |
| [wwumit/dsh-compliancehub](https://github.com/wwumit/dsh-compliancehub) | Unattributed | `@wwumit/dsh-compliancehub` | npm | 0 | Remote skill provider for DeepSeek Harness: install skills from a JSON catalog via ctx.skills |
| [wwumit/dsh-plugin-tools](https://github.com/wwumit/dsh-plugin-tools) | Unattributed | `@wwumit/dsh-plugin-tools` | npm | 0 | Plugin tools provider for DeepSeek Harness: expert2skill, skill-compliance, dependency-scan (dsh.bundle) |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | Git only | 9 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Unattributed | `@dsh-external/dsh-plugin-tts` | Git only | 5 | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings pan |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | Unattributed | `resanity` | Git only | 4 | reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。 |
| [Han-Yao94/dsh-filelens](https://github.com/Han-Yao94/dsh-filelens) | Unattributed | `dsh-filelens` | Git only | 3 |  |
| [shouwang37/dsh-comfyui-node-development](https://github.com/shouwang37/dsh-comfyui-node-development) | Unattributed | `dsh-comfyui-node-development` | Git only | 2 | DeepSeek Harness（DSH）插件：ComfyUI 自定义节点开发浓缩指南，打包为 comfyui-node-dev 技能 |
| [asakumizy/dsh-local-skills](https://github.com/asakumizy/dsh-local-skills) | Unattributed | `dsh-local-skills` | Git only | 1 | DSH plugin: local SKILL browser with a Notion-style web UI (live watch, Use-button guide, bundled starter skil |
| [Failing-coachman563/dsh-skill-viewer](https://github.com/Failing-coachman563/dsh-skill-viewer) | Unattributed | `dsh-skill-viewer` | Git only | 0 | Manage and organize DSH skills via a web interface with one-click enable/disable, batch migration, and workspa |
| [syncable-dev/dsh-plugin-memtrace](https://github.com/syncable-dev/dsh-plugin-memtrace) | Unattributed | `dsh-plugin-memtrace` | Git only | 0 | 🧠 Local-first code intelligence graph for DeepSeek Harness. Structural search, blast radius, temporal memory, |

## Unverified attribution (283)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Host | `@tt-a1i/archify-dsh` | npm | 13694 | Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self |
| [liustack/modlens](https://github.com/liustack/modlens) | Host | `@liustack/modlens` | npm | 2637 | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Host | `managed-agents` | npm | 611 | Open-source CMA-compatible agent runtime for any model, with MCP tools, sandboxed sessions, audit, replay, and |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | npm | 124 | The web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. A |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Client + Host | `dsh-usage-stats` | npm | 59 | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI (dsh  |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | Client (Web UI) | `@xmanrui/dsh-im` | npm | 26 | 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Telegram、Discord和WhatsApp）。 Connect IM bots to DeepSeek  |
| [geml-spec/geml](https://github.com/geml-spec/geml) | Host | `@geml/dsh-plugin` | npm | 24 | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | Client (Web UI) | `dsh-gui-customization` | npm | 14 | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | Host | `dsh-tavern` | npm | 8 |  |
| [better-er/dsh-tool-autoexpand](https://github.com/better-er/dsh-tool-autoexpand) | Client + Host | `dsh-tool-autoexpand` | npm | 6 | dsh·工具结果自动展开插件 |
| [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | Host | `@maxwell-feng/dsh-windows-ocr` | npm | 6 |  |
| [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) | Host | `dsh-multi-folder` | npm | 5 |  |
| [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) | Client + Host | `@js2hou/dsh-mcp-manager` | npm | 5 | 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。 |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Host | `upstream-radar` | npm | 5 | DSH plugin security and dependency monitoring for DeepSeek Harness: exact vulnerable paths, breaking updates,  |
| [dfkai/dsh-board](https://github.com/dfkai/dsh-board) | Client + Host | `dsh-board` | npm | 5 | DeepSeek Harness 侧栏用量与成本面板：官方峰谷计价 · 1M 上下文 · 词勋段位 · 成就与热力图 |
| [mengyun233/dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | Client (Web UI) | `dsh-codex-pet` | npm | 5 | 将 Codex 桌宠皮肤自动迁移到 DeepSeek Harness，在 DSH Web 界面渲染功能一致的桌宠：动画、多会话对话框、设置面板，一键迁移即插即用。 |
| [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 5 | Feishu (Lark) channel bridge for DeepSeek Harness (dsh) — message a Feishu bot, it runs a dsh agent turn, the  |
| [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) | Host | `dsh-composer-expand` | npm | 4 | Composer expand/collapse toggle for DeepSeek Harness (dsh): a ⬆/⬇ button in the composer tool row grows the in |
| [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Client (Web UI) | `dsh-update-checker` | npm | 4 | 全栈更新管理：对 DeepSeek Harness 主程序与每个已装第三方插件做 npm/GitHub 双源 semver 比对，GUI 横幅随系统语言（中/英）提示可更新插件；一键更新主程序或任意插件，自动备份可回滚， |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Host | `@agenticcontrolplane/dsh` | npm | 4 | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs |
| [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) | Client (Web UI) | `dsh-skin-switcher` | npm | 4 | DeepSeek Harness Web GUI 皮肤切换插件：设置界面一键切换已安装皮肤 |
| [Ch0uHuaZ1/DeepSeek-Harness-Desktop](https://github.com/Ch0uHuaZ1/DeepSeek-Harness-Desktop) | Client (Web UI) | `dsh-desktop-launcher` | npm | 3 | One-click desktop launcher for DeepSeek Harness — starts the web UI, runs it in the tray, and reuses your exis |
| [MHfire/dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) | Client + Host | `@mhfire/dsh-im-bridge` | npm | 3 | 即时通讯渠道(企微、飞书等) ⇄ DeepSeek Harness Agent 桥接 |
| [Phant0Meow/dsh-memory-meow](https://github.com/Phant0Meow/dsh-memory-meow) | Client + Host | `meow-memory` | npm | 3 |  |
| [StarChen-Cycler/octie-dsh-plugin](https://github.com/StarChen-Cycler/octie-dsh-plugin) | Client (Web UI) | `octie-cli` | npm | 3 | State-oriented task graph kernel for the agentic era - a DeepSeek Harness bundle: 13 octie_* tools, octie Cord |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | Host | `gongwen-skill` | npm | 3 | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风 |
| [LA7-F/dsh-MyCordis](https://github.com/LA7-F/dsh-MyCordis) | Host | `dsh-mycordis` | npm | 2 | 可以让你的dsh中的“Cordis插件”变得可管理，可一键生成安装包\|Make the "Cordis plugins" in your dsh manageable and generate installation |
| [Rain-Shuoyu/dsh-client-deep-sneak](https://github.com/Rain-Shuoyu/dsh-client-deep-sneak) | Client + Host | `dsh-client-deep-sneak` | npm | 2 | DeepSneak（深度摸鱼）是专门为 DeepSeek Harness 设计的插件，在 agent 工作时播放 B 站视频，并在 agent 需要操作时暂停并提醒用户，方便摸鱼的同时避免因为没有发现 agent 被阻塞 |
| [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) | Host | `dsh-github-skills` | npm | 2 | Skill-first GitHub workflows for DeepSeek Harness: PR triage, review feedback, CI diagnosis, and safe publishi |
| [XJungit/omdp](https://github.com/XJungit/omdp) | Client + Host | `@omdp/dsh-connector` | npm | 2 | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles |
| [alanzhao0128/dsh-balance-monitor](https://github.com/alanzhao0128/dsh-balance-monitor) | Client (Web UI) | `dsh-balance-monitor` | npm | 2 |  |
| [ingleav626-art/dsh-native-launcher](https://github.com/ingleav626-art/dsh-native-launcher) | Client (Web UI) | `dsh-native-launcher` | npm | 2 | 以"零额外安装"为设计原则：仅凭一个官方插件与 Windows 原生机制，让 DeepSeek Harness Web UI 获得桌面 App 式的一键启动体验。 |
| [luoyan96/dsh-catnap-studio](https://github.com/luoyan96/dsh-catnap-studio) | Client (Web UI) | `dsh-catnap-plugins` | npm | 2 | Cat-themed DeepSeek Harness Web UI plugin with three original themes and a calm interactive companion. Not an  |
| [maxwell-feng/dsh-tesseract-ocr](https://github.com/maxwell-feng/dsh-tesseract-ocr) | Host | `@maxwell-feng/dsh-tesseract-ocr` | npm | 2 |  |
| [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | Client + Host | `dsh-approval-gate` | npm | 2 | DeepSeek Harness 自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe） |
| [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | Client + Host | `dsh-mmx-bridge` | npm | 2 | MiniMax multimodal capability hub for DeepSeek Harness (DSH): image understanding (VLM), text/image-to-video,  |
| [winterhuan/dsh-skills-viewer](https://github.com/winterhuan/dsh-skills-viewer) | Host | `@winterchenhuan/dsh-skills-viewer` | npm | 2 | Read-only Skills settings page plugin for DeepSeek Harness Web |
| [wsz987/dsh-channels](https://github.com/wsz987/dsh-channels) | Host | `@wsz987/dsh-channels` | npm | 2 | 把微信 / QQ / 钉钉 / 飞书接入 DeepSeek Harness：统一配置、扫码授权，在各 IM 里直接和你的 Agent 对话 |
| [Alvin-Somedo/dsh-app-launcher](https://github.com/Alvin-Somedo/dsh-app-launcher) | Client (Web UI) | `dsh-app-launcher` | npm | 1 | 把 DSH Web GUI 变成"桌面应用":以独立应用窗口打开,关闭窗口即优雅退出整个 DSH 进程 |
| [CN-Leo/dsh-deepseek-balance](https://github.com/CN-Leo/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | deepseek-harness 插件，实时查询deepseek账号余额 |
| [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Host | `dsh-prompt` | npm | 1 | DeepSeek Harness 的 Prompt 工具箱：别再复制粘贴——24 条深度模板随手点，/prompt 与智能推荐主动兜底，装好即用、可自定义。 \| The Prompt toolbox for DeepS |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Host | `dsh-mattpocock-skills-deck` | npm | 1 | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统 |
| [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) | Client (Web UI) | `dsh-themes` | npm | 1 |  |
| [ZhuSheng-0807/dsh-novel-reader](https://github.com/ZhuSheng-0807/dsh-novel-reader) | Client (Web UI) | `dsh-novel-reader` | npm | 1 |  |
| [daetz-coder/dsh-multi-chat](https://github.com/daetz-coder/dsh-multi-chat) | Client + Host | `dsh-multi-chat` | npm | 1 | Multi-window wall for DeepSeek Harness: run & monitor N DSH conversations side-by-side in one screen, plus an  |
| [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) | Host | `@hyzyn/dsh-plugin-kit` | npm | 1 | dsh-plugin-kit is a general-purpose plugin collection for the DeepSeek Harness (DSH) Web GUI: environment vari |
| [kingcharleslzy-ai/dsh-honcho-memory](https://github.com/kingcharleslzy-ai/dsh-honcho-memory) | Host | `dsh-honcho-memory` | npm | 1 |  |
| [kouyichi/dsh-tui-app](https://github.com/kouyichi/dsh-tui-app) | Client + Host | `dsh-tui-app` | npm | 1 | DeepSeek Harness terminal UI plugin (Ink/React) |
| [lywusichen/dsh-skill-panel](https://github.com/lywusichen/dsh-skill-panel) | Client + Host | `dsh-skill-panel` | npm | 1 | DeepSeek Harness 技能悬浮窗插件：侧边栏技能按钮，一键查看当前会话已加载的技能并打开本地目录。 |
| [moonquake2004/dsh-doctor](https://github.com/moonquake2004/dsh-doctor) | Client + Host | `@moonquake2004/dsh-doctor` | npm | 1 |  |
| [zhouzhencheng07/dsh-memory](https://github.com/zhouzhencheng07/dsh-memory) | Host | `dsh-memory` | npm | 1 | Cross-session memory for DeepSeek Harness (dsh): Auto-Memory per-turn capture, memory_search, Dream consolidat |
| [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) | Client (Web UI) | `@1mlightyears/dsh-theme-synthwave` | npm | 0 | A synthwave style DeepSeek Harness(dsh) theme |
| [263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) | Host | `dsh-verify` | npm | 0 | Independent browser acceptance testing for agent deliverables. Agents self-test and pass; real browsers tell t |
| [Artificialwhale/session-reader-plugin](https://github.com/Artificialwhale/session-reader-plugin) | Host | `dsh-session-reader` | npm | 0 | Allow agent to acquire context from other sessions. |
| [ChanningYuan/dsh-dingtalk](https://github.com/ChanningYuan/dsh-dingtalk) | Host | `dsh-dingtalk` | npm | 0 | DingTalk IM channel plugin for DeepSeek Harness (dsh): chats drive local dsh agents, replies return as markdow |
| [E83737664/dsh-skills-manager](https://github.com/E83737664/dsh-skills-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [Enderfga/dsh-clawo](https://github.com/Enderfga/dsh-clawo) | Host | `@enderfga/dsh-clawo` | npm | 0 | DeepSeek Harness bundle: register Claw Orchestrator as an ACP subagent provider — delegate a dsh subagent to a |
| [KeFan-J/dsh-token-usage](https://github.com/KeFan-J/dsh-token-usage) | Host | `dsh-token-usage` | npm | 0 |  |
| [Lion-1209/dsh-plugin-lion-skills](https://github.com/Lion-1209/dsh-plugin-lion-skills) | Host | `dsh-plugin-lion-skills` | npm | 0 | Lion-Skills — a developer-focused agent skill suite (zh) as a DeepSeek Harness plugin: 11 workflow skills moun |
| [ReachGa0/dsh-desktop](https://github.com/ReachGa0/dsh-desktop) | Host | `dsh-desktop-windows-launcher` | npm | 0 | DeepSeek Harness 桌面版（Windows）：双击即用，选区截图直接问 AI · 系统托盘、会话管理 · Featured in awesome-dsh-plugin |
| [Slothtron/dsh-fff](https://github.com/Slothtron/dsh-fff) | Host | `dsh-fff` | npm | 0 |  |
| [YOYOYOAKE/dsh-token-plan-monitor](https://github.com/YOYOYOAKE/dsh-token-plan-monitor) | Client + Host | `@yoyoyoake/dsh-token-plan-monitor` | npm | 0 |  |
| [ZaVang/dsh-diorama](https://github.com/ZaVang/dsh-diorama) | Client (Web UI) | `dsh-diorama` | npm | 0 |  |
| [ankesu/dsh-live2d-pet](https://github.com/ankesu/dsh-live2d-pet) | Client + Host | `dsh-live2d-pet` | npm | 0 | Live2D companion for DeepSeek Harness: render a Cubism model in the Web UI with state-driven expressions and m |
| [gdy01/dsh-token-cost](https://github.com/gdy01/dsh-token-cost) | Host | `dsh-token-cost` | npm | 0 | DSH plugin: per-project LLM token usage and RMB cost (input / cache-hit / output) based on model standard pric |
| [jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) | Host | `dsh-jiey-browser` | npm | 0 | DeepSeek Harness plugin: drive Jiey Browser over MCP |
| [jyhn-hunao/dsh-session-cost](https://github.com/jyhn-hunao/dsh-session-cost) | Client + Host | `dsh-session-cost` | npm | 0 |  |
| [kouyichi/dsh-plugins](https://github.com/kouyichi/dsh-plugins) | Host | `dsh-a2a` | npm | 0 | dsh (DeepSeek Harness) plugin family: 31 plugins / 80+ tools — learn/profile/dream/tower/kanban + scaffold/gua |
| [liulei237136/dsh-publish-plugin](https://github.com/liulei237136/dsh-publish-plugin) | Host | `dsh-publish-plugin` | npm | 0 |  |
| [liulei237136/dsh-test-plugin](https://github.com/liulei237136/dsh-test-plugin) | Host | `dsh-test-plugin` | npm | 0 |  |
| [miiaowuwu/dsh-event-sounds](https://github.com/miiaowuwu/dsh-event-sounds) | Client (Web UI) | `dsh-client-ui-event-sounds` | npm | 0 | 语音控制插件（安洁莉娜「hirari do～」） |
| [niuniuaba/dsh-subagent-vision](https://github.com/niuniuaba/dsh-subagent-vision) | Host | `dsh-subagent-vision` | npm | 0 |  |
| [qschen86/dsh-deepseek-balance](https://github.com/qschen86/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 0 | DSH web plugin: DeepSeek API balance & today usage badge in the sidebar rail |
| [shifan3/dsh-approve-for-me](https://github.com/shifan3/dsh-approve-for-me) | Host | `dsh-approve-for-me` | npm | 0 | Approve-for-me mode for DeepSeek Harness: LLM safety auto-approval for approval requests; high-risk destructiv |
| [suanlayu666/suanlayu-dsh-plugins](https://github.com/suanlayu666/suanlayu-dsh-plugins) | Client (Web UI) | `dsh-file-upload` | npm | 0 | Self-made DeepSeek Harness plugins (MIT) |
| [tevenfeng/dsh-plugin-omoslim](https://github.com/tevenfeng/dsh-plugin-omoslim) | Host | `dsh-plugin-omoslim` | npm | 0 | DeepSeek Harness bundle: oh-my-opencode-slim style Orchestrator agent preset with model-pinned specialist suba |
| [thooy/dsh-client-ui-theme-manager](https://github.com/thooy/dsh-client-ui-theme-manager) | Client (Web UI) | `dsh-client-ui-theme-manager` | npm | 0 |  |
| [warm-flame-core/new-project-init](https://github.com/warm-flame-core/new-project-init) | Host | `new-project-init` | npm | 0 | 以存量完善为核心的项目文档体系 skill：优化已有项目文档、固化 AI 分角色协作工作流；也支持中途加入补建体系与新项目初始化。提问驱动、26 模板、MIT 开源。 |
| [winliyou/dsh-plugins](https://github.com/winliyou/dsh-plugins) | Host | `@chaoset/adaptive-perf` | npm | 0 | deepseek harness plugin set |
| [wuhobin/dsh-mcp-manage](https://github.com/wuhobin/dsh-mcp-manage) | Host | `dsh-mcp-manage` | npm | 0 | dsh plugin: Settings > MCP 服务 management page for DeepSeek Harness (DSH). List/add/edit/delete MCP servers reg |
| [xingyingyuzhui/dsh-skill-manager](https://github.com/xingyingyuzhui/dsh-skill-manager) | Host | `dsh-skill-manager` | npm | 0 | Manage DeepSeek Harness skills from Settings: list, disable without editing SKILL.md, and install/uninstall us |
| [zdx8637-gitdog/dshmobile](https://github.com/zdx8637-gitdog/dshmobile) | Client (Web UI) | `@zdx8637/dshmobile-bridge` | npm | 0 | 手机远程控制 DeepSeek Harness：Android App + 云端 relay + PC 插件，常驻二维码一码三用（扫码下载/配对/登录授权）。有服务器可以自行部署。 |
| [zsvd/dsh-mcp-manager](https://github.com/zsvd/dsh-mcp-manager) | Client + Host | `dsh-mcp-manager` | npm | 0 | 用于DSH的MCP管理器 |
| [zuoyunlai/lunheng-article-pipeline-dsh](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh) | Host | `lunheng-article-pipeline` | npm | 0 | 论衡（lunheng-article-pipeline）DeepSeek Harness bundle 插件（DSH 适配版） |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 108 | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| brow |
| [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) | Unattributed | `dsh-dafeiyu` | npm | 81 | Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows. |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | Unattributed | `dsh1024` | npm | 45 | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install command |
| [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Unattributed | `dsh-stock-watch` | npm | 38 | A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗 |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | Unattributed | `@dsh-suite/all` | npm | 38 | The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin st |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Unattributed | `dsh-notifier` | npm | 33 | Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (tel |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Unattributed | `dsh-tokenledger` | npm | 22 | Relay-site attributed token usage for DeepSeek Harness — zero config, no credentials |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | Unattributed | `dsh-opencode-go-usage` | npm | 10 | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | Unattributed | `@loongsuite/dsh-plugin` | npm | 10 | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM ca |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | Unattributed | `dsh-remote-plugin` | npm | 7 | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Ses |
| [losebird/dsh-plugin-market](https://github.com/losebird/dsh-plugin-market) | Unattributed | `@ace-zone/dsh-market` | npm | 4 | DeepSeek Harness plugins market｜DSH 插件市场 |
| [xbzbing/dsh-auth-gateway](https://github.com/xbzbing/dsh-auth-gateway) | Unattributed | `dsh-auth-gateway` | npm | 3 | 为 DeepSeek Harness 增加远程访问能力，并通过密码和 OTP 进行安全加固。 Adds secure remote access to DeepSeek Harness with password aut |
| [dttxorg/deepseekeyes](https://github.com/dttxorg/deepseekeyes) | Unattributed | `@dttxorg/deepseekeyes` | npm | 2 | Auditable vision and cross-platform Computer Use runtime for DeepSeek Harness — strict evidence, health-checke |
| [siweina/dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | Unattributed | `dsh-novel-writer` | npm | 2 | DSH / DeepSeek Harness 小说写作助手插件：章节库管理、句式模式分析（九类句式/情感曲线/风格指纹）、风格自检、伏笔登记、批量导入、续写辅助。Novel writing assistant plugi |
| [Blank-not-black/dsh-remote-plugin](https://github.com/Blank-not-black/dsh-remote-plugin) | Unattributed | `dsh-remote-plugin` | npm | 1 | DSH Remote 插件独立包：DSH 原生侧边栏入口 + 右侧抽屉管理页；内置网关随 DSH 自动启停 |
| [kingcharleslzy-ai/dsh-cost-balance-pro](https://github.com/kingcharleslzy-ai/dsh-cost-balance-pro) | Unattributed | `dsh-cost-balance-pro` | npm | 1 |  |
| [uluckystar/dsh-plugin-market](https://github.com/uluckystar/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 1 | DSH 插件市场：在设置页浏览 mydsh.dev 插件大全（5596 候选 / 3656 有效），分类/AI 搜索、一键安装启用停用卸载、安全评估与自动重启。非官方社区 mydsh.dev 出品 |
| [xinyuehtx/dsh-plugin-hooks-ordering](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering) | Unattributed | `@tengxiaohtx/dsh-plugin-hooks-ordering` | npm | 1 | 为 deepseek harness 的 waterfall 和 serial 进行确定性 hooks 监听排序 |
| [z953218350/dsh-archive-manager](https://github.com/z953218350/dsh-archive-manager) | Unattributed | `@mlgbnb/dsh-archive-manager` | npm | 1 | Codex-style archived session manager for DSH Web UI — view, search, restore, and delete archived sessions from |
| [940842546/dsh-permissions](https://github.com/940842546/dsh-permissions) | Unattributed | `dsh-permissions` | npm | 0 |  |
| [A-G-guy/dsh-plugins](https://github.com/A-G-guy/dsh-plugins) | Unattributed | `@dsh-plus/bundle-main` | npm | 0 | agguy's DSH Plugins —— DeepSeek Harness 自定义插件 monorepo：移动端窄屏适配 / 任务结束邮件通知 / 子代理独立模型 / 自定义 LLM 路由 / ...... |
| [Awu12277/dsh-sleep-send](https://github.com/Awu12277/dsh-sleep-send) | Unattributed | `dsh-sleep-send` | npm | 0 | DSH Web 的定时发送插件：在输入框右侧提供「定时发送」按钮与配置面板，支持智能时段、自定义日期时间、多个定时任务，并通过 localStorage 持久化任务，刷新页面后自动恢复。 |
| [JxaMe/dsh-telegram-bridge](https://github.com/JxaMe/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 |  |
| [Leo-Ayh-Oday/dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) | Unattributed | `@leooday/dsh-bundle` | npm | 0 | Runtime governance for DeepSeek Harness: progress governor, evidence freshness, completion guard, capability r |
| [LyaxZ/dsh-quick-toc](https://github.com/LyaxZ/dsh-quick-toc) | Unattributed | `dsh-quick-toc` | npm | 0 | DeepSeek Harness 对话大纲插件：按回合分组的 Markdown 标题目录，自动跟随高亮，平滑跳转导航。 |
| [ankesu/dsh-emoji-wallet](https://github.com/ankesu/dsh-emoji-wallet) | Unattributed | `dsh-emoji-wallet` | npm | 0 | Minimal DeepSeek balance wallet for DSH: one click shows your API balance in the session header. · DSH 余额小钱包：顶 |
| [dove-a/dsh-chat-window-fold](https://github.com/dove-a/dsh-chat-window-fold) | Unattributed | `dsh-chat-window-fold` | npm | 0 | DSH web GUI plugin: auto fold/expand the chat window — bottom checkpoints hide old pages, top-scroll expands e |
| [eddiehuang227-source/live-talk](https://github.com/eddiehuang227-source/live-talk) | Unattributed | `dsh-live-talk` | npm | 0 | Animate any photo into a responsive virtual girl. She talks, turns, smiles, and moves naturally in sync with y |
| [gjj-star/dsh-conversation-navigato](https://github.com/gjj-star/dsh-conversation-navigato) | Unattributed | `dsh-conversation-navigator` | npm | 0 | DSH 会话导航 |
| [jinhuoooo/dsh-voice-input](https://github.com/jinhuoooo/dsh-voice-input) | Unattributed | `dsh-voice-input` | npm | 0 | DSH 语音输入插件：点一下麦克风说话，文字自动进输入框。本地 Whisper 引擎，为打字小白设计。Voice-to-text plugin for DeepSeek Harness. |
| [light-only/dsh-codex-select](https://github.com/light-only/dsh-codex-select) | Unattributed | `dsh-codex-select` | npm | 0 |  |
| [liuyuelintop/dsh-conversation-exporter](https://github.com/liuyuelintop/dsh-conversation-exporter) | Unattributed | `dsh-conversation-exporter` | npm | 0 | Export DeepSeek Harness conversations as clean, human-readable Markdown. |
| [qschen86/dsh-telegram-bridge](https://github.com/qschen86/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 | DSH host plugin: Telegram notifications and reply-to-continue for sessions |
| [ruby1304/dsh-quota-status](https://github.com/ruby1304/dsh-quota-status) | Unattributed | `dsh-quota-status` | npm | 0 | DeepSeek Harness web plugin: minimal quota/balance card — DeepSeek API balance with tier colors & peak/off-pea |
| [wingsky-1/dsh-plugin-hub](https://github.com/wingsky-1/dsh-plugin-hub) | Unattributed | `@wingsky-1/dsh-gzip` | npm | 0 | DSH (DeepSeek Harness) 插件集：npm 分发，可一键装全家桶或单独安装 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Host | `dsh-ouroboros` | Git only | 5490 | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result ne |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Host | `treg-dsh` | Git only | 432 | OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Client + Host | `superdesign-dsh` | Git only | 425 | The design skill for Claude Code, Cursor and any coding agent. Stop shipping AI-slop UI: turn it into shippabl |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Client (Web UI) | `whale-girl` | Git only | 215 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Client + Host | `dsh-memory-evolve` | Git only | 142 | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广 |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Host | `local-shell-mcp-dsh` | Git only | 49 | Enables LLM to use a cli environment. |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Host | `@dsh-external/dsh-automation` | Git only | 49 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent session |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | Client + Host | `dsh-auto-collapse` | Git only | 22 |  |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Client (Web UI) | `dsh-pet-remielle` | Git only | 11 |  |
| [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-denia` | Git only | 9 | DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。 |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Host | `dsh-plugin-guard` | Git only | 8 | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, an |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | Git only | 7 | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / liv |
| [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) | Host | `dsh-composer-tools` | Git only | 7 | Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo. |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Host | `dsh-plugin-codegraph` | Git only | 5 | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools  |
| [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) | Client (Web UI) | `dsh-ding` | Git only | 4 |  |
| [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | Client (Web UI) | `dsh-popout-sidebar` | Git only | 4 |  |
| [platonai/dsh-browser4](https://github.com/platonai/dsh-browser4) | Host | `dsh-browser4` | Git only | 4 | Browser4 — an AI-native browser engine for autonomous agents, intelligent extraction, and large-scale web auto |
| [wangzhuo-coding/geo-content-optimizer](https://github.com/wangzhuo-coding/geo-content-optimizer) | Host | `@dsh-external/dsh-plugin-geo-content-optimizer` | Git only | 4 | GEO生成式引擎优化智能体 — 7类关键词+七层架构+EE-A-T权威框架+8维度降痕改写 |
| [zdjmrq/dsh-user-plugins-manager](https://github.com/zdjmrq/dsh-user-plugins-manager) | Client + Host | `dsh-pluginmanager` | Git only | 4 | DSH 用户插件管理器:在 设置→插件 统一管理插件目录散件、运行树插件与 npm 插件包——挂载/卸载/启用/停用(cordis.patch.yml 补丁层 + HMR 热生效) |
| [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | Client (Web UI) | `dsh-desk-pet` | Git only | 3 | Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. |
| [kobenfang/bigA](https://github.com/kobenfang/bigA) | Host | `@kobenfang/dsh-biga` | Git only | 3 | openclaw-skills BigA · A股智能选股（选股分析·量化交易·股票池） |
| [534119219/chicheng-stats](https://github.com/534119219/chicheng-stats) | Host | `chicheng-stats` | Git only | 2 | DSH 全局用量统计插件：高度可配置侧边栏组件（文字/卡片）+ 统计面板（模型分布/趋势/首字节/耗时明细） |
| [Dylan37670/dsh-plugin-panel](https://github.com/Dylan37670/dsh-plugin-panel) | Client (Web UI) | `@dsh-community/plugin-panel` | Git only | 2 | DSH plugin marketplace panel with full catalog search, Chinese translation, semantic search, favorites, and li |
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
| [Awesome-AI-Pedia/Awesome-DSH-Pet](https://github.com/Awesome-AI-Pedia/Awesome-DSH-Pet) | Client (Web UI) | `awesome-dsh-pet` | Git only | 1 | deepseek harness Pet 包含噜噜 总裁等宠物，并可快速添加自定义宠物 |
| [ChengxiuCDP/dsh-plugin-advisor](https://github.com/ChengxiuCDP/dsh-plugin-advisor) | Host | `dsh-plugin-advisor` | Git only | 1 |  |
| [MeowTnT3r/catalog-capabilities-zh](https://github.com/MeowTnT3r/catalog-capabilities-zh) | Host | `catalog-capabilities-zh` | Git only | 1 | 一个面向 Codex 的公开 skill：编排当前 Agent 已有的可信安装器，并为 skills、插件和市场能力维护一份有来源依据的中文说明目录 |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | Host | `dsh-apex-standard` | Git only | 1 | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [Ri0n72Y/workspace-scope](https://github.com/Ri0n72Y/workspace-scope) | Host | `workspace-scope` | Git only | 1 | Per-workspace Skill and MCP enablement for DeepSeek Harness |
| [alex04130/dsh-forge](https://github.com/alex04130/dsh-forge) | Client + Host | `dsh-forge` | Git only | 1 | DeepSeek Harness 扩展套件：运行时注入器、子代理派发与模型路由策略、插件市场/技能/插件管理面板、浏览器桥与 MCP 集成。 |
| [baisama-cloud/dsh-omni-bridge](https://github.com/baisama-cloud/dsh-omni-bridge) | Host | `dsh-omni-bridge` | Git only | 1 |  |
| [baisama-cloud/dsh-session-mover](https://github.com/baisama-cloud/dsh-session-mover) | Client (Web UI) | `dsh-session-mover` | Git only | 1 | Drag sessions to another workspace in the DeepSeek Harness (DSH) web GUI — 把侧边栏会话直接拖到其他工作区（完整历史克隆+原会话归档） |
| [baisama-cloud/dsh-stt-input](https://github.com/baisama-cloud/dsh-stt-input) | Client + Host | `dsh-stt-input` | Git only | 1 | Speech-to-text voice input plugin for DeepSeek Harness (DSH) web GUI: click the mic in the composer to turn sp |
| [kobenfang/Eyes](https://github.com/kobenfang/Eyes) | Host | `@kobenfang/dsh-eyes` | Git only | 1 | openclaw - skills : Eyes · 大眼看世界（全球热点·国际新闻·市场分析）- Global News Monitor |
| [kobenfang/FruitPi](https://github.com/kobenfang/FruitPi) | Host | `@kobenfang/dsh-fruitpi` | Git only | 1 | openclaw - skills : Fruit Pi · 水果派（全球水果实时价格） |
| [lishLRF/dsh-3d-model-viewer](https://github.com/lishLRF/dsh-3d-model-viewer) | Client + Host | `dsh-3d-model-viewer` | Git only | 1 |  |
| [ljsysfurryACE/dsh-aura-scheduler](https://github.com/ljsysfurryACE/dsh-aura-scheduler) | Host | `@agentframe/dsh-aura-scheduler` | Git only | 1 | Proactive scheduling for DeepSeek Harness: Aura heartbeat + value network (official is model-driven only) |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Host | `chat2skill-plugin-runtime` | Git only | 1 | Extracting and iterating skills from daily conversations with AI |
| [songoao25/dsh-plugin-guardian](https://github.com/songoao25/dsh-plugin-guardian) | Client (Web UI) | `dsh-plugin-guardian` | Git only | 1 | Safe uninstall with snapshot rollback for DeepSeek Harness plugins — clean residue, health check, no command l |
| [tiantyu/dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) | Client (Web UI) | `dsh-skin-toggle` | Git only | 1 | 皮肤管理🐋切换按钮，用于 DeepSeek Harness (DSH)网页 GUI 的皮肤管理。纯客户端插件。 |
| [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | Client (Web UI) | `dsh-theme-endfield` | Git only | 1 | 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。 |
| [AskingTheHeavens/dsh-openclaw-persona](https://github.com/AskingTheHeavens/dsh-openclaw-persona) | Host | `@user/dsh-openclaw-persona` | Git only | 0 | DSH profile bundle: load OpenClaw-style persona files (SOUL.md, IDENTITY.md, USER.md, TOOLS.md, MEMORY.md, AGE |
| [ClausYang/dsh-bang-shell](https://github.com/ClausYang/dsh-bang-shell) | Host | `@omdsh-dev/dsh-bang-shell` | Git only | 0 |  |
| [Como44/dsh-zh-more](https://github.com/Como44/dsh-zh-more) | Client + Host | `dsh-zh-more` | Git only | 0 | DSH 中文增强补全：斜杠命令名与插件清单卡片中文化，支持三种显示模式（只显示中文/中英都显示/不翻译）。Chinese-first plugin for DSH: translates slash-command na |
| [FUSU123fusu/dsh-tui-checkpoints](https://github.com/FUSU123fusu/dsh-tui-checkpoints) | Client (Web UI) | `dsh-tui-checkpoints` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-jobs](https://github.com/FUSU123fusu/dsh-tui-jobs) | Client + Host | `dsh-tui-jobs` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-market](https://github.com/FUSU123fusu/dsh-tui-market) | Client (Web UI) | `dsh-tui-market` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-subagents](https://github.com/FUSU123fusu/dsh-tui-subagents) | Client + Host | `dsh-tui-subagents` | Git only | 0 |  |
| [FuncWei/dsh-kanban](https://github.com/FuncWei/dsh-kanban) | Client + Host | `dsh-kanban` | Git only | 0 |  |
| [GMH13552/dsh-timer-scheduler](https://github.com/GMH13552/dsh-timer-scheduler) | Client + Host | `dsh-timer-scheduler-ui` | Git only | 0 | 简单的dsh定时任务插件 支持定时列表任务、ui显示，对于长期任务有益 |
| [Gdnaiteab/pingo-dsh-plugin](https://github.com/Gdnaiteab/pingo-dsh-plugin) | Client + Host | `pingo-dsh-plugin` | Git only | 0 | DSH plugin: Pingo desktop-pet companion (catgirl pet in the dsh Web GUI + 14 Pingo persona/strategy skills). O |
| [Github-CJX/dsh-tool-imagegen](https://github.com/Github-CJX/dsh-tool-imagegen) | Host | `@local/dsh-tool-imagegen` | Git only | 0 | DSH Desktop 对话内联生图插件** — 模型在对话中自动调用 `generate_image` 工具，图片直接内联显示在对话框里，无需外部面板、无需手动切换。 |
| [Lilien-xu/dsh-meego](https://github.com/Lilien-xu/dsh-meego) | Host | `dsh-meego` | Git only | 0 | DeepSeek Harness plugin for Feishu Project/Meego |
| [PengboNB/skk-gal-dsh](https://github.com/PengboNB/skk-gal-dsh) | Client (Web UI) | `skk-gal` | Git only | 0 | DSH的外观插件 |
| [QianziTech/dsh-trellis-dashboard](https://github.com/QianziTech/dsh-trellis-dashboard) | Host | `dsh-trellis-dashboard` | Git only | 0 | 支持在Deepseek Harness(dsh)中，通过对话tab查看trellis任务状态、工作区信息等。需配合trellis使用：https://github.com/mindfold-ai/Trellis |
| [ReiRui/dsh-image-preview](https://github.com/ReiRui/dsh-image-preview) | Host | `dsh-image-preview` | Git only | 0 |  |
| [RossBool/dsh-plugins](https://github.com/RossBool/dsh-plugins) | Host | `dsh-agent-orchestration` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：协作编排、跨会话、团队模式、计划引擎、话题时间轴、语音、MCP 管理、提示词增强 |
| [TongaiLinC/dsh-mobile-access](https://github.com/TongaiLinC/dsh-mobile-access) | Client (Web UI) | `dsh-mobile-access` | Git only | 0 | DeepSeek Harness 移动端访问插件 —— 让手机 / 平板通过局域网或 VPN 访问 DeepSeek Harness Web GUI，并内置 PC 端审批门禁、LAN / VPN / 公网自动识别 与 网 |
| [WonderfulEdge/dsh-publish-skill](https://github.com/WonderfulEdge/dsh-publish-skill) | Host | `dsh-publish-skill` | Git only | 0 | dsh h0发版技能 |
| [UnKnownFish125/dsh-deepmemory](https://github.com/UnKnownFish125/dsh-deepmemory) | Host | `dsh-deepmemory` | Git only | 0 | DeepSeek Harness 长期记忆系统：跨会话记忆 + 无限上下文（设计对齐 AstrBot livingmemory，作者 lxfight；AGPL-3.0） |
| [bainianlaoyao/easy-archive](https://github.com/bainianlaoyao/easy-archive) | Client (Web UI) | `easy-archive` | Git only | 0 | DSH web plugin: two-step inline archive on workspace sidebar rows — one click arms a red confirm, the second a |
| [cainiao1992/dsh-codebuddy-auth](https://github.com/cainiao1992/dsh-codebuddy-auth) | Host | `dsh-codebuddy-auth` | Git only | 0 | Tencent CodeBuddy provider plugin for DeepSeek Harness: OAuth login, token refresh, and model sync via native  |
| [caisiyang123/dsh-tick-rail](https://github.com/caisiyang123/dsh-tick-rail) | Client (Web UI) | `dsh-tick-rail` | Git only | 0 | Tick-rail conversation navigator plugin for DeepSeek Harness — peak-falloff tick marks, hover previews, click- |
| [chuyue-yue/dsh-plugin-manager](https://github.com/chuyue-yue/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-installer-ui` | Git only | 0 |  |
| [dhb861832993-star/pbr-render](https://github.com/dhb861832993-star/pbr-render) | Host | `pbr-render` | Git only | 0 | PBR 3D model preview plugin for DeepSeek Harness — GLB/GLTF game art with textures, material channel inspector |
| [djt889/dsh-drag-to-attachment](https://github.com/djt889/dsh-drag-to-attachment) | Client (Web UI) | `@dsh-external/dsh-drag-to-attachment` | Git only | 0 | DSH（DeepSeek Harness）Web UI 插件：把本地任意文件/文件夹拖入或粘贴为附件（图片、任意文件、整个文件夹）或定位真实路径——一个开关，两种模式。dsh-plugin for DeepSeek Ha |
| [glenngit/dsh-top](https://github.com/glenngit/dsh-top) | Client + Host | `dsh-top` | Git only | 0 | System monitoring tool for the dsh web GUI: live CPU, RAM, disk, network, and top processes in a floating, col |
| [hatsuyuki0103/oh-my-deepseek-harness](https://github.com/hatsuyuki0103/oh-my-deepseek-harness) | Host | `oh-my-deepseek-harness` | Git only | 0 |  |
| [kobenfang/BigFish](https://github.com/kobenfang/BigFish) | Host | `@kobenfang/dsh-bigfish` | Git only | 0 | 🎣 BigFish AI钓鱼助手 - 钓点分析·鱼情分析·钓点分享 \| Fishing spot analysis, fish activity, bait & lure |
| [kobenfang/BigFocus](https://github.com/kobenfang/BigFocus) | Host | `@kobenfang/dsh-bigfocus` | Git only | 0 | 🎯 BigFocus 追踪管家 - 商品价格/明星动态/行业追踪 \| Price tracking, monitoring, alerts |
| [kobenfang/Big8](https://github.com/kobenfang/Big8) | Host | `@kobenfang/dsh-big8` | Git only | 0 | ☯ Big8 AI玄学助手 - 看风水·看面相·算八字·查星座·每日一卦·老黄历 \| AI fortune-telling: feng shui, face reading, BaZi, zodiac |
| [kobenfang/BigFood](https://github.com/kobenfang/BigFood) | Host | `@kobenfang/dsh-bigfood` | Git only | 0 | 🍳 BigFood AI冰箱管家 - 食材识别→菜谱推荐 \| Food recognition, recipe recommendation |
| [kobenfang/BigLead](https://github.com/kobenfang/BigLead) | Host | `@kobenfang/dsh-biglead` | Git only | 0 | 🎯 BigLead 精准客户线索挖掘 - B2B销售获客 \| B2B lead generation, sales prospecting |
| [knGear/dsh-AgentTask](https://github.com/knGear/dsh-AgentTask) | Host | `dsh-agenttask` | Git only | 0 |  |
| [kobenfang/BigPlan](https://github.com/kobenfang/BigPlan) | Host | `@kobenfang/dsh-bigplan` | Git only | 0 | 📋 BigPlan AI产品调研 - 市场/技术/供应链分析，三套产品规格方案 \| Product research, market analysis |
| [kobenfang/BigSeedSkill](https://github.com/kobenfang/BigSeedSkill) | Host | `@kobenfang/dsh-bigseed` | Git only | 0 | 🌱 BigSeed 闪念记录与人生拼图 - 捕捉生活点滴生成人生故事/自传 \| Life story, journal, biography, memory keeper |
| [littleblakew/msds-chain-mcp](https://github.com/littleblakew/msds-chain-mcp) | Client + Host | `dsh-msds-chain` | Git only | 0 |  |
| [lnyuqian/dsh-skill-sidebar](https://github.com/lnyuqian/dsh-skill-sidebar) | Client + Host | `dsh-skill-sidebar` | Git only | 0 | dsh-skill-sidebar 技能面板：DSH 右侧边栏技能面板（Skills panel）— 扫描本机技能目录列出全部技能，4-6 字功能短语 + 目录标签 + 一键复制调用 + 置顶 + 默认自动打开 + 每周 |
| [loklamlok/dsh-queue-director](https://github.com/loklamlok/dsh-queue-director) | Host | `dsh-queue-director` | Git only | 0 | DSH web plugin: reorder queued messages (up / down / top / bottom) before the agent processes them. |
| [lywusichen/dsh-jmcomic](https://github.com/lywusichen/dsh-jmcomic) | Client (Web UI) | `dsh-jmcomic` | Git only | 0 | DeepSeek Harness 插件:JMComic 搜索下载、本地漫画库、窗内阅读器,内置源码离线可用。 |
| [msilita/dsh-graceful-restart](https://github.com/msilita/dsh-graceful-restart) | Client (Web UI) | `dsh-graceful-restart` | Git only | 0 |  |
| [nexsjournal/dsh-customui-plugin](https://github.com/nexsjournal/dsh-customui-plugin) | Client (Web UI) | `dsh-customui-plugin` | Git only | 0 | Personalize the DeepSeek Harness web GUI: sidebar logo, empty-conversation hero, and chat background image — a |
| [qschen86/dsh-calendar-todo](https://github.com/qschen86/dsh-calendar-todo) | Client + Host | `dsh-calendar-todo` | Git only | 0 | DSH web plugin: per-folder calendar + todo app with iCal import and conversation tools |
| [pycjava/dsh-usage](https://github.com/pycjava/dsh-usage) | Client + Host | `dsh-usage-ledger` | Git only | 0 | DSH 跨会话 token 记账插件：进程内每一次模型调用都记入本地 SQLite 账本，设置面板一眼看全、agent 一问即答。只做 token,不做钱。 |
| [qschen86/dsh-workspace-dock](https://github.com/qschen86/dsh-workspace-dock) | Client (Web UI) | `dsh-workspace-dock` | Git only | 0 | DSH web plugin: workspace dock rail left of the sidebar |
| [qschen86/dsh-web-restart](https://github.com/qschen86/dsh-web-restart) | Client (Web UI) | `dsh-web-restart` | Git only | 0 | DSH web plugin: restart the dsh web service from the UI, with optional auto-continue |
| [rencl3/dsh-matlab-bridge](https://github.com/rencl3/dsh-matlab-bridge) | Host | `dsh-matlab-bridge` | Git only | 0 | DSH plugin + MATLAB daemon bridging AI and MATLAB R2025b via file IPC — 20 matlab_* tools for editor code and  |
| [ruby1304/dsh-preset-anchored-standard](https://github.com/ruby1304/dsh-preset-anchored-standard) | Host | `dsh-preset-anchored-standard` | Git only | 0 | Minimal-anchored agent preset for DeepSeek Harness: first-request bash+editor anchor, then full Standard catal |
| [ruby1304/dsh-public-plugins](https://github.com/ruby1304/dsh-public-plugins) | Host | `dsh-plugin-eval-harness` | Git only | 0 | Public, reusable DeepSeek Harness plugins and skills: workflow canvas toolkit, blind eval harness, LLM cost la |
| [shukookie/dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper) | Client (Web UI) | `dsh-plugin-wallpaper` | Git only | 0 | Wallpaper switcher for DeepSeek Harness - sidebar picker with local image upload, dim slider, and one-click ne |
| [u9521/dsh-advanced-model-editor](https://github.com/u9521/dsh-advanced-model-editor) | Client + Host | `@local/dsh-advanced-model-editor` | Git only | 0 | DSH WebUI plugin for managing custom LLM providers, model parameters, thinking budgets, and request settings. |
| [warmwine/dsh-memoryleak](https://github.com/warmwine/dsh-memoryleak) | Host | `dsh-memoryleak` | Git only | 0 | 基于dsh的知识库和待办管理工具 |
| [weijunliang23/dsh-stzb](https://github.com/weijunliang23/dsh-stzb) | Client (Web UI) | `dsh-stzb` | Git only | 0 | DSH Web 率土之滨风格皮肤 |
| [wolfsonliu/dsh-file-explorer](https://github.com/wolfsonliu/dsh-file-explorer) | Client (Web UI) | `@dsh-external/dsh-file-explorer` | Git only | 0 | A floating file-explorer panel for DSH Web — browse the workspace file tree, preview files, and extend preview |
| [xingyingyuzhui/dsh-chat-tune](https://github.com/xingyingyuzhui/dsh-chat-tune) | Client (Web UI) | `dsh-chat-tune` | Git only | 0 | DeepSeek Harness plugin: tune chat font, width, line height, and paragraph spacing |
| [xjwwjx/dsh-conversation-quote](https://github.com/xjwwjx/dsh-conversation-quote) | Client (Web UI) | `@xjwwjx/dsh-conversation-quote` | Git only | 0 | Quote-to-composer UI plugin for DeepSeek Harness Web: select conversation text in the chat and send it togethe |
| [xxxrickymorty-dev/dsh-rick](https://github.com/xxxrickymorty-dev/dsh-rick) | Client (Web UI) | `dsh-rick` | Git only | 0 | C-137 skin for DeepSeek Harness: 28 posters, custom scenes, and overlay pets (Rick, Morty, portal gun). |
| [y0urday/dsh-arcgis-pro-bridge](https://github.com/y0urday/dsh-arcgis-pro-bridge) | Host | `dsh-arcgis-pro-bridge` | Git only | 0 | ArcGIS Pro bridge plugin for DeepSeek Harness — tools exposed as mcp__arcgis__* |
| [yzlin499/dsh-yzlin499-easy-plugins](https://github.com/yzlin499/dsh-yzlin499-easy-plugins) | Host | `dsh-mcp-compat` | Git only | 0 | 非常好的小工具，毛坯房DSH可以看看。 |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Unattributed | `misakanet` | Git only | 397 | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verifie |
| [zhu168/dsh-save-money](https://github.com/zhu168/dsh-save-money) | Unattributed | `dsh-save-money` | Git only | 19 | Save-money plugin for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time ru |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | Unattributed | `dsh-code-ide` | Git only | 9 | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit) | Unattributed | `harness-ai-kit-plugin` | Git only | 7 | Package manager for AI agent assets — 42 skills, 5 CLIs, 1 plugin. Skills for AI/LLM agent engineering, eval-d |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Unattributed | `dizzy-dsh` | Git only | 6 | My DSH plugins |
| [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | Unattributed | `dsh-ocgo-lite` | Git only | 6 | OpenCode Go 用量常驻条：套餐余量圆环 + token/花费实时统计（本次会话/全部范围 + 按模型联动，官方实时定价），一键复制 API Key。OpenCode Go usage bar for DeepS |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | Git only | 6 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Unattributed | `dsh-mermaid` | Git only | 5 | 在 DSH Web 会话中把 Mermaid 代码围栏渲染为 SVG 图表 \| Render Mermaid code fences as SVG diagrams in DSH Web messages |
| [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) | Unattributed | `deeptop-bridge` | Git only | 5 | Deeptop, a lightweight native desktop client for DeepSeek Harness. |
| [loster12520/dsh-btw](https://github.com/loster12520/dsh-btw) | Unattributed | `dsh-btw` | Git only | 4 | deepseek harness版btw插件 |
| [AKS1st/dsh-sysmon](https://github.com/AKS1st/dsh-sysmon) | Unattributed | `dsh-sysmon` | Git only | 3 | DSH Web 系统状态悬浮窗：实时 CPU/内存/磁盘占用率 \| System-status overlay showing live CPU, memory and disk usage for DSH Web |
| [Easyhoov/deepseek-harness-desktop-windows](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | Unattributed | `@dsh-desktop/balance` | Git only | 3 | 把 DeepSeek Harness 装进 Windows 桌面的应用：不用装 Node.js、不用敲命令，双击启动即用。进程内集成官方 DSH、零端口 IPC 传输；内置侧边栏工作台（文件 / 终端 / Git / 浏 |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | Unattributed | `@dsh-external/dsh-whale-galgame` | Git only | 3 | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [Tisitan/dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | Unattributed | `dsh-live2d-companion` | Git only | 3 | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [kermanx/dshw](https://github.com/kermanx/dshw) | Unattributed | `dshw` | Git only | 3 | PR workflow plugin for DeepSeek Harness |
| [hackerFish/dsh-video-studio](https://github.com/hackerFish/dsh-video-studio) | Unattributed | `@hackerfish/dsh-video-studio` | Git only | 2 | 鲸影 DSH Video Studio：DeepSeek Harness 原生视频/漫剧生成插件——六段导演流水线、多供应商免费额度调度、四层提示词自优化，质量优先省钱第二 |
| [kanneiren/dsh-windows-manager](https://github.com/kanneiren/dsh-windows-manager) | Unattributed | `dsh-windows-manager-plugin` | Git only | 2 | Lightweight DeepSeek Harness manager for Windows \| 轻量级 DeepSeek Harness Windows 托盘管理器 \| tray |
| [534119219/chicheng-peak](https://github.com/534119219/chicheng-peak) | Unattributed | `chicheng-peak` | Git only | 1 | DSH 峰谷提醒插件：DeepSeek 官方峰谷时段感知——高峰橙/低峰蓝贴边呼吸边框、流光效果、服务端消息推送提醒（自定义标题内容）。Peak/valley breathing border + push remind |
| [Cheng-xiu/dsh-mobile-link](https://github.com/Cheng-xiu/dsh-mobile-link) | Unattributed | `dsh-mobile-link` | Git only | 1 | One-click phone access to DeepSeek Harness (DSH): Cloudflare quick tunnel + multi-channel push (ServerChan/Pus |
| [GPIOX/dsh-api-balance](https://github.com/GPIOX/dsh-api-balance) | Unattributed | `dsh-api-balance-badge` | Git only | 1 | DeepSeek Harness 动态 Cordis 插件：可拖动、可缩放、亚克力质感的 API 余额悬浮徽章 |
| [baiyingawa/everyconnect](https://github.com/baiyingawa/everyconnect) | Unattributed | `everyconnect` | Git only | 1 | DSH插件，用于将dsh连接至微信、qq等软件，通过微claw插件、qq机器人等方式实现 |
| [c-v-c-v/dsh-chat-nav](https://github.com/c-v-c-v/dsh-chat-nav) | Unattributed | `dsh-chat-nav` | Git only | 1 | DeepSeek Harness 聊天快捷导航插件（ChatGPT 式悬停滑出）· A DeepSeek Harness chat quick-nav plugin (ChatGPT-style hover slide- |
| [jesspig/deepseek-harness-desktop](https://github.com/jesspig/deepseek-harness-desktop) | Unattributed | `@dsh-desktop/bundle` | Git only | 1 | 这是一个独立的 Cordis 应用:不改动上游仓库,以官方扩展方式(自定义 profile + bundle + Cordis 插件)把 dsh 跑成原生桌面应用。 |
| [shsr07/dsh-go-usage](https://github.com/shsr07/dsh-go-usage) | Unattributed | `dsh-go-usage` | Git only | 1 | OpenCode GO subscription usage widget for DeepSeek Harness: rolling / weekly / monthly usage with reset countd |
| [zemul/dsh-generate-image](https://github.com/zemul/dsh-generate-image) | Unattributed | `dsh-generate-image` | Git only | 1 | DeepSeek Harness 插件：通过本机 OpenAI Codex CLI 生成与编辑图片。 |
| [zhenkun26/dsh-repo-atlas](https://github.com/zhenkun26/dsh-repo-atlas) | Unattributed | `dsh-repo-atlas` | Git only | 1 |  |
| [AKS1st/dsh-archived-conversations](https://github.com/AKS1st/dsh-archived-conversations) | Unattributed | `dsh-archived-conversations` | Git only | 0 | Show archived conversations in the DSH Web sidebar footer with read-only message previews. |
| [ArcoCodes/bloome-finance-plugin](https://github.com/ArcoCodes/bloome-finance-plugin) | Unattributed | `bloome-finance-plugin` | Git only | 0 |  |
| [Bob-Bo1/dsh-deepseek-balance](https://github.com/Bob-Bo1/dsh-deepseek-balance) | Unattributed | `deepseek-balance` | Git only | 0 | DSH plugin for viewing DeepSeek API balance and local Flash/Pro usage costs. |
| [ErrorLst/dsh-notes](https://github.com/ErrorLst/dsh-notes) | Unattributed | `@dsh-external/dsh-notes` | Git only | 0 |  |
| [HUITianYi/dsh-whale-desktop-launcher](https://github.com/HUITianYi/dsh-whale-desktop-launcher) | Unattributed | `dsh-whale-desktop-launcher` | Git only | 0 | Windows desktop launcher plugin for DeepSeek Harness with a whale-girl icon and clean app-mode window |
| [KUNTING0701/dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg) | Unattributed | `dsh-aurora-bg` | Git only | 0 | DeepSeek Harness (DSH) Web UI - ? CSS transform,? canvas/mask/blur |
| [Nixz0824/dsh-sound-cue](https://github.com/Nixz0824/dsh-sound-cue) | Unattributed | `@dsh-external/dsh-sound-cue` | Git only | 0 | DSH sound cues: ding when you need to act, another when a task finishes / 需要操作与任务完成时的简短提示音（Web Audio，无弹窗） |
| [SnowfallC/dsh-mobile-voice-call](https://github.com/SnowfallC/dsh-mobile-voice-call) | Unattributed | `dsh-mobile-voice-call` | Git only | 0 | App-free mobile voice calls with existing DeepSeek Harness sessions. |
| [a903067276-rgb/dsh-perm-guard](https://github.com/a903067276-rgb/dsh-perm-guard) | Unattributed | `dsh-perm-guard` | Git only | 0 | Auto-approval permission guard for DeepSeek Harness: a middle tier between workspace-write and danger-full-acc |
| [april-jk/dsh-mobile-plugin](https://github.com/april-jk/dsh-mobile-plugin) | Unattributed | `@april-jk/dsh-mobile` | Git only | 0 | Unofficial DSH plugin for paired mobile access to a local DeepSeek Harness |
| [changlianxiya-139/dsh-ambiguity-handling](https://github.com/changlianxiya-139/dsh-ambiguity-handling) | Unattributed | `dsh-ambiguity-handling` | Git only | 0 | Append ambiguity-handling rules to the DeepSeek Harness system prompt |
| [chuyue-1/deepseek-harness-gamepad-cursor](https://github.com/chuyue-1/deepseek-harness-gamepad-cursor) | Unattributed | `@dsh-user/gamepad-cursor` | Git only | 0 | DeepSeek Harness 手柄光标插件 / Gamepad cursor plugin for DeepSeek Harness |
| [flyhigao/dsh-sticky-notes](https://github.com/flyhigao/dsh-sticky-notes) | Unattributed | `dsh-sticky-notes` | Git only | 0 |  |
| [hajimilvdou/dsh-storecloud](https://github.com/hajimilvdou/dsh-storecloud) | Unattributed | `dsh-storecloud` | Git only | 0 | 集插件及agent商城，云端同步与订阅插件组为一体的dsh插件项目 |
| [hhj2714/dsh-whale-btn](https://github.com/hhj2714/dsh-whale-btn) | Unattributed | `dsh-whale-btn` | Git only | 0 | 桌面悬浮鲸鱼按钮：置顶可拖动，单击聚焦/打开 DeepSeek Harness 窗口 (DSH host plugin, macOS arm64) |
| [jackyoung022/dsh-session-canvas](https://github.com/jackyoung022/dsh-session-canvas) | Unattributed | `@jackyoung022/dsh-session-canvas` | Git only | 0 | dsh插件，基于session的画布，可进行多session汇总 |
| [jing-hy/dsh-task-runner](https://github.com/jing-hy/dsh-task-runner) | Unattributed | `dsh-task-runner` | Git only | 0 | DSH plugin: project/task dual-mode workspaces. Tasks skip the workspace picker - every task conversation gets  |
| [kimirong/dsher-bbs-plugin](https://github.com/kimirong/dsher-bbs-plugin) | Unattributed | `@kimirong/dsher-bbs-plugin` | Git only | 0 | bbs.dsher.cn 社区面板 — DeepSeek Harness Web 的 bundle 插件：右下角悬浮入口，浏览/搜索/发帖/回帖/点赞/粘贴截图上传/一键登录。dsh plugin --profile w |
| [ld-1101/dsh-file-preview](https://github.com/ld-1101/dsh-file-preview) | Unattributed | `dsh-file-preview` | Git only | 0 | DSH (DeepSeek Harness) plugin: workspace file preview column with Markdown/PDF/image/CSV preview, session-prod |
| [lhf6623/dsh-vibe](https://github.com/lhf6623/dsh-vibe) | Unattributed | `dsh-vibe` | Git only | 0 | DeepSeek Harness 输入氛围插件：键盘/鼠标实时高亮，打字火焰、输入抖动、回答提示音与整页抖动 |
| [monotykamary/dsh-fovea](https://github.com/monotykamary/dsh-fovea) | Unattributed | `dsh-fovea` | Git only | 0 | Foveated repository intelligence for DeepSeek Harness: token-budgeted code graphs, focus, impact, and continuo |
| [nan1010082085/dsh-plugin-ima-sync](https://github.com/nan1010082085/dsh-plugin-ima-sync) | Unattributed | `dsh-plugin-ima-sync` | Git only | 0 | DSH plugin: auto-upload conversation progress to Tencent IMA (daily note + Work knowledge base) |
| [qschen86/dsh-plantuml](https://github.com/qschen86/dsh-plantuml) | Unattributed | `dsh-plantuml` | Git only | 0 | DSH web plugin: render PlantUML fenced blocks in conversation messages as SVG |
| [uigdwunm/dsh-process-fold](https://github.com/uigdwunm/dsh-process-fold) | Unattributed | `dsh-process-fold` | Git only | 0 | Fold DSH Web execution steps into compact expandable process boxes. |
| [wolfsonliu/dsh-file-explorer-preview-code](https://github.com/wolfsonliu/dsh-file-explorer-preview-code) | Unattributed | `@dsh-external/dsh-file-explorer-preview-code` | Git only | 0 | DSH Web file-explorer preview plugin: code preview & editor for DSH Web — per-language syntax highlighting, in |
| [wolfsonliu/dsh-file-explorer-preview-molstar](https://github.com/wolfsonliu/dsh-file-explorer-preview-molstar) | Unattributed | `@dsh-external/dsh-file-explorer-preview-molstar` | Git only | 0 | file-explorer preview plugin: protein 3D structure viewer for DSH Web — interactive previews of .cif, .pdb, an |
| [wolfsonliu/dsh-file-explorer-preview-sequence](https://github.com/wolfsonliu/dsh-file-explorer-preview-sequence) | Unattributed | `@dsh-external/dsh-file-explorer-preview-sequence` | Git only | 0 | DSH Web file-explorer preview plugin: renders FASTA / GenBank / JBEI / SnapGene / SBOL sequences with the SeqV |
| [xingyingyuzhui/dsh-session-actions](https://github.com/xingyingyuzhui/dsh-session-actions) | Unattributed | `dsh-session-actions` | Git only | 0 |  |
| [xjwwjx/dsh-sonic](https://github.com/xjwwjx/dsh-sonic) | Unattributed | `@xjwwjx/dsh-sonic` | Git only | 0 | Sound notification plugin for DeepSeek Harness Web: plays a chime when user confirmation is needed and a succe |

## Blocked by reserved scope (5)

These repositories satisfy the bundle contract, but their `package.json` names
them under `@deepseek-ai/`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any `dsh plugin add @deepseek-ai/...` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | Host | `@deepseek-ai/dsh-plugin-check` | **blocked** | 23 | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Host | `@deepseek-ai/dsh-toolkit` | **blocked** | 21 | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十 |
| [le-soleil-se-couche/dsh-token-cost](https://github.com/le-soleil-se-couche/dsh-token-cost) | Client + Host | `@deepseek-ai/dsh-token-cost` | **blocked** | 6 | 在对话页面直接查看消耗费用（嵌入官方底部状态条，点击看明细）；设置中汇总用量与费用，并可自定义其他模型单价 |
| [lmzhen/dsh-evolution](https://github.com/lmzhen/dsh-evolution) | Unattributed | `@deepseek-ai/dsh-evolution-host` | **blocked** | 1 | Hermes-inspired agent self-evolution plugin family, purpose-built for DeepSeek Harness |
| [GHJIVHIDD/dsh-plugin-vm-sandbox](https://github.com/GHJIVHIDD/dsh-plugin-vm-sandbox) | Host | `@deepseek-ai/dsh-plugin-vm-sandbox` | **blocked** | 2 | 原生UI界面。面向 DeepSeek Harness Web 的虚拟机沙箱插件：它基于 OrbStack 为每个会话提供独立的 debian/alpine 沙箱虚拟机，在会话视图环中新增「虚拟机」页签，支持查看/启动/休 |
