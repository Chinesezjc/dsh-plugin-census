# DSH Plugin Catalogue

Generated 2026-08-18 from 1167 contract-verified repositories.

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

### Host plugins (339)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Host | `@deepseek-harness-tui/dsh-tui` | npm | 1879 | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured  |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | Host | `@agentrq/dsh-plugin-agentrq` | npm | 1077 | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agent |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Host | `aegis` | npm | 1048 | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across lo |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Host | `@huiliyi37/dsh-tianshu-tui` | npm | 210 | 官方 DeepSeek Harness 的交互式终端 UI 插件：自研 ANSI 极简渲染核心（由作者自己的开源项目天枢 Tui 演进）、流式 Markdown/工具卡、多会话 tab、16+ 主题、slash 命令与选 |
| [zhaoolee/notes](https://github.com/zhaoolee/notes) | Host | `@zhaoolee/dsh-notes` | npm | 146 | 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片 |
| [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | Host | `@anysearch/anysearch-dsh` | npm | 89 | AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Host | `@nanmicoder/dsh-auto-mode` | npm | 88 | Safe automatic permissions for DeepSeek Harness. |
| [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | Host | `@tencent-connect/dsh-qqbot` | npm | 61 | 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件 |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | Host | `@zseven-w/dsh-crew` | npm | 56 | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress |
| [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion) | Host | `@wxkingstar/specfusion-dsh` | npm | 52 | 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20 个中国开放平台的 65,600+ 篇 API 文档；零配置，支持 Skill |
| [zenx0x/allinluna](https://github.com/zenx0x/allinluna) | Host | `@zenx0x/allinflash` | npm | 32 | Resource-aware multi-agent orchestration for Codex and DeepSeek Harness (All in Flash DSH plugin) |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Host | `ax-feishu-bridge` | npm | 31 | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Host | `dsh-interconnect` | npm | 30 | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Host | `dsh-code` | npm | 27 | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制和高级特性与Codex CLI 、Claude Code 等主流交互机制，打造的 DSH- |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Host | `billion-context-dsh` | npm | 23 | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides wh |
| [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) | Host | `@modusensus/dsh-mneme` | npm | 23 | Structured memory engine for DeepSeek Harness. Offline semantic search, entity-attribute-timeline, autoDream s |
| [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | Host | `dsh-im-gateway` | npm | 23 | 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 \| Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents t |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Host | `dsh-web-search-pro` | npm | 22 | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform b |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | Host | `dsh-lark-bot` | npm | 21 | dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot，扫码即用：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（d |
| [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Host | `pi2dsh` | npm | 21 | Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plu |
| [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Host | `@dsh-tui/dsh-tui` | npm | 18 | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle |
| [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | Host | `dsh-lark-link` | npm | 17 | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based co |
| [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) | Host | `dsh-plugin-product-subagents` | npm | 17 | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durab |
| [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | Host | `dsh-free-search` | npm | 15 | Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed |
| [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) | Host | `dsh-mobile` | npm | 15 | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 |
| [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | Host | `dsh-workbench-plugin` | npm | 14 | Deepseek-harness-workbench-plugin |
| [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Host | `dsh-llm-codex` | npm | 13 | DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key \| DSH plugin: reuse your Codex  |
| [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | Host | `project-blueprint` | npm | 13 | Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 6 |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Host | `dsh-continual-evolve` | npm | 12 | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refine |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | Host | `@alib8b8/dsh-plugin-aflare` | npm | 11 | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · |
| [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | Host | `dsh-plugin-writing-guard` | npm | 11 | DeepSeek Harness (DSH) academic writing guard for papers — 论文去AI味 / AI-writing style detection, evidence prese |
| [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) | Host | `@xlight-oss/visionary-dsh` | npm | 11 | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Host | `dsh-sentinel` | npm | 11 | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the  |
| [Co-Engram/Co-Engram](https://github.com/Co-Engram/Co-Engram) | Host | `@co-engram/dsh` | npm | 9 | Self-evolving team memory |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | Host | `@huanlin/dsh-plugin-sleep` | npm | 9 | 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp \| Exposes a sleep tool that pauses for specified ms then returns, with |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | Host | `dsh-balance` | npm | 9 | dsh余额插件. A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, f |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | Host | `dsh-record-replay` | npm | 9 | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record- |
| [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Host | `@openma/deepseek-harness-acp` | npm | 9 | ACP server implementation for DeepSeek harness. dsh-acp |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Host | `task-passport` | npm | 9 | Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat l |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Host | `dsh-better-edit` | npm | 8 | Hash-anchored read/edit/batch_edit/undo_last_edit tools for DeepSeek Harness (dsh) — dsh port of pi-hashline-e |
| [Owen718/snapgrep](https://github.com/Owen718/snapgrep) | Host | `snapgrep` | npm | 8 | An in-process trigram index that makes code search in Pi&DSH 20-70x faster than ripgrep, with identical result |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 7 | Bidirectional Lark/Feishu controller for DeepSeek Harness |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Host | `deepseek-harness-tui` | npm | 7 | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals |
| [dushaobindoudou/dsh-acp](https://github.com/dushaobindoudou/dsh-acp) | Host | `dsh-acp-server` | npm | 6 | Agent Client Protocol (ACP) server plugin for the DeepSeek Harness (dsh) - drive dsh agents from Zed, any ACP  |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Host | `@fakechris/dsh-track` | npm | 6 | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | Host | `dsh-openai-codex-auth` | npm | 6 | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Host | `dsh-claude-move` | npm | 6 | Four-source migration wizard for DeepSeek Harness: move Claude Code, Codex, OpenCode and Hermes sessions, memo |
| [balcoz/dsh-ocr-local](https://github.com/balcoz/dsh-ocr-local) | Host | `dsh-ocr-local` | npm | 5 | DeepSeek Harness 本地 OCR 插件：粘贴图片，PP-OCRv5 + ONNX Runtime   识别文字，完全离线，支持 TUI 与 Web \| Local OCR plugin for DeepS |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | Host | `dsh-github-connect` | npm | 5 | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, cre |
| [AngelosZou/graphlint](https://github.com/AngelosZou/graphlint) | Host | `dsh-graphlint` | npm | 5 |  |
| [GCS-ZHN/mcp-sentinel](https://github.com/GCS-ZHN/mcp-sentinel) | Host | `@gcszhn/mcp-sentinel-deepseek-harness-plugin` | npm | 5 | Harness agent plugin that acts as a sentinel between the AI agent and MCP servers — polling long-running tasks |
| [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | Host | `dsh-ssh` | npm | 5 | SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ss |
| [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) | Host | `dsh-meme` | npm | 5 | DeepSeek Harness DSH的表情包插件——找得到、发得出、学得会 |
| [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) | Host | `dsh-tdai-memory` | npm | 5 | Agent memory for DeepSeek Harness \| DeepSeek Harness 记忆插件 |
| [1264459640/dsh-trellis](https://github.com/1264459640/dsh-trellis) | Host | `dsh-trellis` | npm | 4 | Self-contained Trellis workflow trigger for DeepSeek Harness (DSH / Cordis) |
| [JMOKSZ/dsh-lark-bridge](https://github.com/JMOKSZ/dsh-lark-bridge) | Host | `@jmoksz/lark-bridge` | npm | 4 | Feishu (Lark) entry point for DeepSeek Harness: drive dsh agents from a Feishu bot with streaming cards, ask/a |
| [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) | Host | `dsh-auto-approval` | npm | 4 |  |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Host | `dsh-undo` | npm | 4 | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step an |
| [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 4 | Vision model for DeepSeek Harness \| DeepSeek Harness 外置视觉模型插件 |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Host | `@jiesou/dsh-stream-rules` | npm | 4 | 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Ti |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | Host | `dsh-plugin-deepeye` | npm | 4 | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analys |
| [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) | Host | `dsh-model-failover` | npm | 3 | Two-level model circuit breaker with failover for DeepSeek Harness: trip a model or a whole provider after rep |
| [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) | Host | `dsh-vault` | npm | 3 | Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI |
| [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) | Host | `dsh-knowledge` | npm | 3 | Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management  |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Host | `dsh-wecom` | npm | 3 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Host | `oh-my-dsh` | npm | 3 | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) | Host | `@dshhubs/plugin-search` | npm | 3 | Discover The Best DSH plugins |
| [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | Host | `@univer-cli/dsh-univer-plugin` | npm | 3 | Preview Univer sheets, docs & slides inside DeepSeek Harness. |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | Host | `dsh-plugin-wechat` | npm | 3 |  |
| [yhlooo/dsh-bridges](https://github.com/yhlooo/dsh-bridges) | Host | `dsh-bridges` | npm | 3 | 将 DeepSeek Harness 桥接到已配置其它 Harness Agent 的项目。支持 CodeBuddy / Codex / OpenCode / Claude Code / ... |
| [freehul/sgme](https://github.com/freehul/sgme) | Host | `dsh-sgme` | npm | 3 | 你的 AI，从此记得你——拾光记忆引擎，它记得你们聊过的每一件事，还会主动关心你。 |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | Host | `dsh-tui` | npm | 3 | A small, session-aware terminal UI for DeepSeek Harness |
| [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) | Host | `dsh-soul-md` | npm | 3 | Soul.md persona for DeepSeek Harness \| DeepSeek Harness 人设卡插件 |
| [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) | Host | `dsh-weixin` | npm | 3 | DeepSeek Harness: Weixin |
| [TGYD-helige/dsh-pi](https://github.com/TGYD-helige/dsh-pi) | Host | `dsh-pi-host` | npm | 3 | Run trusted Pi extensions inside DeepSeek Harness through a compatibility host. |
| [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) | Host | `dsh-plugin-marketplace` | npm | 3 | Plugin marketplace for DeepSeek Harness \| DeepSeek Harness 插件市场 |
| [PixLunaLab/dsh-pixluna](https://github.com/PixLunaLab/dsh-pixluna) | Host | `dsh-pixluna` | npm | 3 | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ |
| [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | Host | `dsh-meta-orchestrator` | npm | 3 | A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning  |
| [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) | Host | `@1e0zj/dsh-plugin-mall` | npm | 2 | DSH 插件市场：搜索 GitHub dsh-plugin 话题插件，一键安装到本地 dsh（agent 工具 + 设置页插件市场 tab） |
| [GXX182/dsh-vision-bridge](https://github.com/GXX182/dsh-vision-bridge) | Host | `dsh-vision-bridge` | npm | 2 | DeepSeek Harness plugin that bridges session images to pluggable vision APIs while keeping DeepSeek as the pri |
| [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) | Host | `dsh-bill` | npm | 2 | DSH (DeepSeek Harness) plugin: per-session cost line + cost attribution report, priced by llm-pricing |
| [LeslieWylie/dsh-md-preview](https://github.com/LeslieWylie/dsh-md-preview) | Host | `dsh-md-preview` | npm | 2 | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — an md_html_render tool that works |
| [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Host | `@tingrudeng/dsh-feishu-bot` | npm | 2 | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu |
| [jiesou/dsh-opencode-zen-free-provider](https://github.com/jiesou/dsh-opencode-zen-free-provider) | Host | `@jiesou/dsh-opencode-zen-free-provider` | npm | 2 | OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据 |
| [lqhl/dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Host | `dsh-pi-tui` | npm | 2 |  |
| [lql341/dsh-scnet](https://github.com/lql341/dsh-scnet) | Host | `dsh-scnet` | npm | 2 | dsh plugin for scnet.cn |
| [mcxianyujun/dsh-web-search-anysearch](https://github.com/mcxianyujun/dsh-web-search-anysearch) | Host | `dsh-web-search-anysearch` | npm | 2 | Native AnySearch /v1/search WebSearchProvider for DeepSeek Harness with Web UI, credentials integration, and W |
| [memorylake-ai/memorylake-harness](https://github.com/memorylake-ai/memorylake-harness) | Host | `@memorylake/dsh-plugin` | npm | 2 | MemoryLake Harness |
| [wulun811/dsh-plugin-vet](https://github.com/wulun811/dsh-plugin-vet) | Host | `@jieai/dsh-plugin-vet` | npm | 2 | Trust pipeline for deepseek-harness plugins: deterministic static scan (11 rules) + LLM-driven audit protocol  |
| [yangfch3/dsh-mcp-mgr](https://github.com/yangfch3/dsh-mcp-mgr) | Host | `dsh-mcp-mgr` | npm | 2 | MCP server manager for DeepSeek Harness — workspace mcp.json discovery, hot sync, and a web settings UI. |
| [Spirit4471/multimodal-bridge](https://github.com/Spirit4471/multimodal-bridge) | Host | `dsh-multimodal-bridge` | npm | 2 | Multimodal bridge for any LLM: qwen_vision (Qwen-VL) + qwen_generate (Qwen-Image) — an MCP server for Kimi Cod |
| [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | Host | `dsh-mobile-control` | npm | 2 | DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件 |
| [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | Host | `@shelken/dsh-co-authored-by` | npm | 2 | dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit |
| [xiaoshihou514/dsh-tui](https://github.com/xiaoshihou514/dsh-tui) | Host | `dsh-tui` | npm | 2 | DeepSeek Harness: TUI |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | Host | `dsh-deeptutor` | npm | 2 | Learning assistant extension for DeepSeek Harness (dsh): brings DeepTutor tutoring to your agent — deep explan |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Host | `dsh-tiered-approval` | npm | 2 | Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow s |
| [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Host | `dsh-claude-marketplace` | npm | 2 | Claude Code marketplace compatibility for DeepSeek Harness |
| [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) | Host | `dsh-ui-spec` | npm | 2 | DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Determi |
| [314857493/dsh-vision](https://github.com/314857493/dsh-vision) | Host | `dsh-vision-proxy-route` | npm | 1 | Free GLM vision for text-only DeepSeek Harness: paste images in the GUI (auto-transcribe route) + vision tool  |
| [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | Host | `dsh-python-env` | npm | 1 |  |
| [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) | Host | `dshmarketplace-plugin` | npm | 1 | Browse and install DSH plugins from inside DeepSeek Harness. /store, a settings tab, and agent tools — bilingu |
| [ECHOUniverse/dshacp](https://github.com/ECHOUniverse/dshacp) | Host | `@hanxu131/dshacp` | npm | 1 |  |
| [FuRongJun-1999/CommonTrustProtocol](https://github.com/FuRongJun-1999/CommonTrustProtocol) | Host | `@furongjun1999/dsh-memory` | npm | 1 | Common Trust Protocol (CTP) 共同信任协议 \| Intelligentics 智能论，研究智能系统存续的底层结构条件 |
| [Oo0520/dsh-plugin-doctor](https://github.com/Oo0520/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 1 |  |
| [SwainGao/dsh-plugin-ai-bridge](https://github.com/SwainGao/dsh-plugin-ai-bridge) | Host | `dsh-plugin-ai-bridge` | npm | 1 |  |
| [V-Reason/dsh-task-notify](https://github.com/V-Reason/dsh-task-notify) | Host | `dsh-task-notify` | npm | 1 | DeepSeekHarness任务完成时进行消息推送提醒（微信+Windows通知） |
| [clarkzhao/dsh-llm-grok](https://github.com/clarkzhao/dsh-llm-grok) | Host | `dsh-llm-grok` | npm | 1 | dsh plugin for grok |
| [dshworks/dsh-crew](https://github.com/dshworks/dsh-crew) | Host | `@dshworks/dsh-crew` | npm | 1 | Watch Claude Code and Codex work inside dsh: each gets a real terminal pane in your session's workspace that y |
| [duhu2000/qcc-mcp-oauth](https://github.com/duhu2000/qcc-mcp-oauth) | Host | `qcc-dsh-mcp-oauth` | npm | 1 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查（Qichacha）MCP 服务 / One-click OAuth connect to Qichacha MCP services for De |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Host | `dsh-grafana` | npm | 1 | Paste a Grafana dashboard URL and fine-tune it through conversation with DeepSeek Harness — 贴大盘 URL，对话微调，写回 Gr |
| [gxx950224/ggame](https://github.com/gxx950224/ggame) | Host | `@ggame/backpack` | npm | 1 | 干活跟打魔兽一样累 |
| [jcc1997/dsh-plugins](https://github.com/jcc1997/dsh-plugins) | Host | `dsh-git` | npm | 1 |  |
| [jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) | Host | `dsh-model-sync` | npm | 1 | Writes live provider model lists into DSH settings. Composer rings show 5h/7d plan windows or metered balance  |
| [jiesou/dsh-cline-free-provider](https://github.com/jiesou/dsh-cline-free-provider) | Host | `@jiesou/dsh-cline-free-provider` | npm | 1 | Cline 免费模型接入 DeepSeek Harness |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Host | `@jumpserver-east/jumpserver-dsh` | npm | 1 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [leo-lab-2026/dsh-lark-bridge](https://github.com/leo-lab-2026/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 1 |  |
| [moonbowterfly/dsh-bio-genie](https://github.com/moonbowterfly/dsh-bio-genie) | Host | `@dsh-bio/dsh-bio-genie` | npm | 1 | 🧬 dsh bio analysis plugin for DeepSeek Harness — wish-style bioinformatics & biology analysis: Biopython-powe |
| [qinyre/dsh-plugin-capabilities](https://github.com/qinyre/dsh-plugin-capabilities) | Host | `dsh-plugin-capabilities` | npm | 1 | 在 dsh 设置页管理技能与 MCP 服务器，支持从 Claude Code、Codex 导入。 |
| [wanshichenguang/dsh-tool-vision](https://github.com/wanshichenguang/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 1 | DSH plugin: image_describe (识图) tool over the DashScope OpenAI-compatible vision API (qwen3.7-flash). Bring yo |
| [web-casa/dsh-plugin-pkgseek](https://github.com/web-casa/dsh-plugin-pkgseek) | Host | `dsh-plugin-pkgseek` | npm | 1 | PkgSeek Linux package, command and CVE intelligence as native DeepSeek Harness (dsh) tools |
| [xavier711/dsh-plugin-deepseek-usage](https://github.com/xavier711/dsh-plugin-deepseek-usage) | Host | `@xavier711/dsh-deepseek-usage` | npm | 1 | A DeepSeek usage panel plugin for the DeepSeek Harness Web GUI. It adds a 「Usage / 用量」 entry at the bottom of  |
| [xiaohuang-zaianlian/dsh-code-scan](https://github.com/xiaohuang-zaianlian/dsh-code-scan) | Host | `dsh-code-scan` | npm | 1 |  |
| [lifeodyssey/dsh-compressor](https://github.com/lifeodyssey/dsh-compressor) | Host | `dsh-compressor` | npm | 1 | DeepSeek Harness plugin: compress tool output, cut up to 20% of context, without touching the context cache or |
| [sdoygb/conjugate-spectral-geometry](https://github.com/sdoygb/conjugate-spectral-geometry) | Host | `geometry-knowledge` | npm | 1 | Conjugate Spectral Geometry - Geometric Theory of quantum error correction: 12-volume/117-paper index + DeepSe |
| [diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) | Host | `stratagate-dsh` | npm | 1 | Local-first cross-session memory for DeepSeek Harness (DSH): automatic capture, Event/Element cards, evidence- |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Host | `dsh-tool-approval` | npm | 1 | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") |
| [wulusai2333/mimo-vision](https://github.com/wulusai2333/mimo-vision) | Host | `mimo-vision` | npm | 1 | DeepSeek Harness (DSH) native plugin — describe_image tool: a vision bridge (image → mimo-v2.5 → text descript |
| [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | Host | `dsh-browser-control` | npm | 1 | DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件 |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Host | `dsh-cloudflare-browser-run` | npm | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | npm | 1 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | Host | `dsh-codex-bridge` | npm | 1 | Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab. |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 1 | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 |
| [tappass/dsh-governance](https://github.com/tappass/dsh-governance) | Host | `@tappass/dsh-governance` | npm | 1 | The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your busines |
| [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Host | `dsh-lens-lite` | npm | 1 | Post-edit diagnostics for DeepSeek Harness |
| [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Host | `dsh-mcp-proxy` | npm | 1 | Context-cheap lazy MCP access for DeepSeek Harness |
| [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) | Host | `dsh-memory` | npm | 1 | Durable cross-session SQLite memory for DeepSeek Harness |
| [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | Host | `dsh-deepseek-usage` | npm | 1 | DeepSeek balance and token usage tools for DeepSeek Harness |
| [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) | Host | `dsh-browser` | npm | 1 | Playwright-powered browser automation for DeepSeek Harness |
| [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) | Host | `dsh-tool-reqpipe` | npm | 1 | reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发） |
| [22-ai-00/dsh-enhanced](https://github.com/22-ai-00/dsh-enhanced) | Host | `@dsh-enhanced/acp` | npm | 0 | 专门用来实现dsh的增强插件集 |
| [Andrietteprotective835/dsh-mcp-lens](https://github.com/Andrietteprotective835/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 0 | Shrink massive MCP catalogs to two tools, letting DeepSeek Harness search and call 1,000+ remote APIs efficien |
| [CharlotteN7/dsh-dlp](https://github.com/CharlotteN7/dsh-dlp) | Host | `dsh-dlp` | npm | 0 | Stops a DeepSeek Harness agent from reading your credential files and pasting secrets into tool calls |
| [CharlotteN7/dsh-netguard](https://github.com/CharlotteN7/dsh-netguard) | Host | `dsh-netguard` | npm | 0 | A host allowlist on DeepSeek Harness web_fetch and web_search, enforced at connect time |
| [CharlotteN7/dsh-ocsf-forwarder](https://github.com/CharlotteN7/dsh-ocsf-forwarder) | Host | `dsh-ocsf-forwarder` | npm | 0 | Ships DeepSeek Harness session activity to your SIEM as OCSF 1.9.0 records |
| [Enc-hanted/dsh-pulse](https://github.com/Enc-hanted/dsh-pulse) | Host | `dsh-pulse` | npm | 0 | Cross-session usage & cost observatory for the DeepSeek Harness web profile — trend/heatmap dashboards, per-mo |
| [JUNQINGV587/mattpocock-skills-dsh](https://github.com/JUNQINGV587/mattpocock-skills-dsh) | Host | `mattpocock-skills-dsh` | npm | 0 |  |
| [Leeaoyin/dsh-agent-harness-audit](https://github.com/Leeaoyin/dsh-agent-harness-audit) | Host | `dsh-harness-audit` | npm | 0 | Audits your agent harness stability using deepseek harness. |
| [NoNshiranai/dshx-tui](https://github.com/NoNshiranai/dshx-tui) | Host | `@dshx/tui` | npm | 0 |  |
| [SYMlp/dsh-markdown-memory](https://github.com/SYMlp/dsh-markdown-memory) | Host | `dsh-markdown-memory` | npm | 0 | Markdown folder long-term memory plugin for DeepSeek Harness (dsh): one file per fact, human-editable, git-ver |
| [Snowfly11531/dsh-wechat-bot](https://github.com/Snowfly11531/dsh-wechat-bot) | Host | `dsh-wechat-bot` | npm | 0 |  |
| [SodaMem/dsh-plugin-sodamem](https://github.com/SodaMem/dsh-plugin-sodamem) | Host | `dsh-plugin-sodamem` | npm | 0 | Native DeepSeek Harness (dsh) plugin for SodaMem — auto-injects evidence-grounded memory into every turn and i |
| [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) | Host | `dsh-pilot` | npm | 0 | ✋ Hands for your DeepSeek Harness agent — autonomous browser operation by accessibility refs, with a permissio |
| [VeryInt/dsh-image-vision](https://github.com/VeryInt/dsh-image-vision) | Host | `dsh-image-vision` | npm | 0 |  |
| [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) | Host | `dsh-preview` | npm | 0 | 👁 Eyes for your DeepSeek Harness agent — it opens, sees, and fixes what it builds. Headless-browser verificat |
| [Yidien/dsh-capture-window](https://github.com/Yidien/dsh-capture-window) | Host | `dsh-capture-window` | npm | 0 | DeepSeek Harness 旁路捕获插件：随手丢想法进独立的安静新会话，不打断主线上下文。 |
| [aqsk-BLG/dsh-memory](https://github.com/aqsk-BLG/dsh-memory) | Host | `dsh-memory` | npm | 0 |  |
| [creativedswork/dsh-expmem](https://github.com/creativedswork/dsh-expmem) | Host | `@creative-dswork/dsh-expmem` | npm | 0 | Experience Memory for DeepSeek Harness |
| [cyjyyd/dsh-tui](https://github.com/cyjyyd/dsh-tui) | Host | `dsh-ssh-tui` | npm | 0 |  |
| [dami9527/dsh-image-pathify](https://github.com/dami9527/dsh-image-pathify) | Host | `dsh-image-pathify` | npm | 0 | DeepSeek Harness 插件：让 deepseek-v4-flash 等不能看图的模型也能处理聊天图片，内置识图工具。安装：dsh plugin --profile web add dsh-image-path |
| [ddll8023/dsh-codex](https://github.com/ddll8023/dsh-codex) | Host | `dsh-codex` | npm | 0 | OpenAI Codex (ChatGPT Plus/Pro OAuth) provider plugin for DeepSeek Harness (DSH). dsh-plugin |
| [gxx950224/backpack](https://github.com/gxx950224/backpack) | Host | `@ggame/backpack` | npm | 0 | dsh backpack plugin |
| [iHow1/dsh-ihow-memory](https://github.com/iHow1/dsh-ihow-memory) | Host | `dsh-ihow-memory` | npm | 0 | iHow Memory plugin for DeepSeek Harness |
| [iswalle/getnote-dsh-plugin](https://github.com/iswalle/getnote-dsh-plugin) | Host | `@getnote/dsh-plugin` | npm | 0 | DeepSeek Harness plugin for 得到大脑（Get笔记） |
| [keepview/dsh-lark](https://github.com/keepview/dsh-lark) | Host | `dsh-lark` | npm | 0 | Minimal Lark/Feishu gateway plugin for DeepSeek Harness (dsh) — chat with your agent from Feishu, one topic =  |
| [jlu-lujing/dsh-kit](https://github.com/jlu-lujing/dsh-kit) | Host | `dsh-kit` | npm | 0 |  |
| [literaf/dsh-academy](https://github.com/literaf/dsh-academy) | Host | `dsh-academy` | npm | 0 | Academic mode for DeepSeek Harness (dsh): research persona, anti-fabrication rules for citations and data, bil |
| [lkshjd/dsh-debate](https://github.com/lkshjd/dsh-debate) | Host | `@sky_sun/dsh-debate` | npm | 0 | DeepSeek Harness multi-agent debate plugin: isolated research, cross-examination, judge convergence (backgroun |
| [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) | Host | `@lk251066/dsh-tui` | npm | 0 | Fixed framed terminal workbench plugin for DeepSeek Harness with transcript-only scrolling and persistent sess |
| [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | Host | `dsh-quant` | npm | 0 |  |
| [protoctistmoses143/dsh-docs](https://github.com/protoctistmoses143/dsh-docs) | Host | `dsh-doc` | npm | 0 | Convert PDFs, Office docs, scanned images, and more to clean Markdown, JSON, or text locally with offline OCR— |
| [ruby1304/dsh-vision-subagent](https://github.com/ruby1304/dsh-vision-subagent) | Host | `dsh-vision-subagent` | npm | 0 | Vision for DeepSeek Harness agents — paste images in the Web composer, delegate reads to Kimi/MiniMax vision r |
| [rrrrrredy/beforedone](https://github.com/rrrrrredy/beforedone) | Host | `dsh-beforedone` | npm | 0 | Require fresh, file-bound verification evidence before coding agents declare completion. |
| [shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) | Host | `dsh-risk-guard` | npm | 0 | Zero-interruption audit + fuse blocking plugin for DeepSeek Harness / 零打扰 Agent 审计与保险丝拦截插件 |
| [tancheng33/dsh-yogacara](https://github.com/tancheng33/dsh-yogacara) | Host | `dsh-yogacara` | npm | 0 | A Yogācāra (唯识) self-model plugin for DeepSeek Harness: eight consciousnesses, the 51 mental factors, a perfum |
| [useorgx/orgx-deepseek-harness-plugin](https://github.com/useorgx/orgx-deepseek-harness-plugin) | Host | `@useorgx/deepseek-harness-plugin` | npm | 0 | OrgX Work Ledger, MCP tools, skills, proof, and governed execution for DeepSeek Harness |
| [winterhuan/dsh-shadow-mind](https://github.com/winterhuan/dsh-shadow-mind) | Host | `@winterchenhuan/dsh-shadow-mind` | npm | 0 | Parallel cognitive runtime for DeepSeek Harness, ported from pi-shadow-mind |
| [yabolee-kkk/dsh-streaming-mcp-bridge](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge) | Host | `dsh-streaming-mcp-bridge` | npm | 0 | DeepSeek Harness streaming MCP bridge: live session events as MCP progress, plus ACP adapter for cc-connect/Fe |
| [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | Host | `dsh-expression` | npm | 0 |  |
| [zhangjunjesse/dsh-tool-image-gen](https://github.com/zhangjunjesse/dsh-tool-image-gen) | Host | `dsh-tool-image-gen` | npm | 0 |  |
| [zoahdev/dsh-browser-use](https://github.com/zoahdev/dsh-browser-use) | Host | `dsh-browser-use` | npm | 0 | Browser Use bridge for DeepSeek Harness: run real web tasks (open pages, click, type, fill forms, extract data |
| [zoahdev/dsh-firecrawl](https://github.com/zoahdev/dsh-firecrawl) | Host | `dsh-firecrawl` | npm | 0 | Firecrawl bridge for DeepSeek Harness: scrape URLs to LLM-ready Markdown and search the web via the Firecrawl  |
| [zoahdev/dsh-kirocrew](https://github.com/zoahdev/dsh-kirocrew) | Host | `dsh-kirocrew` | npm | 0 | KiroCrew bridge for DeepSeek Harness: delegate turns to a persistent, self-evolving workspace over ACP (JSON-R |
| [zoahdev/dsh-vision](https://github.com/zoahdev/dsh-vision) | Host | `dsh-vision` | npm | 0 | Give DeepSeek Harness eyes: analyze images with an OpenAI-compatible vision model via a vision_analyze tool. |
| [zoahdev/dsh-zh](https://github.com/zoahdev/dsh-zh) | Host | `dsh-zh` | npm | 0 | Chinese-thinking system-prompt section for DeepSeek Harness: make your dsh agent think and answer in simplifie |
| [severin-ye/uagent-sync](https://github.com/severin-ye/uagent-sync) | Host | `uagent-sync-dsh` | npm | 0 | Cross-device agent workspace sync for OpenCode, Codex, and DeepSeek Harness — backup, restore, update, and con |
| [BolunHan/cc-monitor](https://github.com/BolunHan/cc-monitor) | Host | `dsh-cc-monitor` | npm | 0 | claude code and deepseek harness stats monitor \| CC, DSH 状态监控赛博红绿灯 |
| [rrrrrredy/agent-memory-system](https://github.com/rrrrrredy/agent-memory-system) | Host | `@rrrrrredy/dsh-agent-memory` | npm | 0 | Local-first, evidence-backed continuous memory for coding agents |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | Host | `@open-design/dsh-runtime` | Git only | 88515 | 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative. 🖥️ Local-first desktop app |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Host | `@openviking/dsh-memory-plugin` | Git only | 28953 | Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills. |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | Host | `@evermind-ai/dsh-plugin` | Git only | 12100 | One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving acro |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Host | `@yuxianglin/dsh-bridge-browser` | Git only | 269 | dsh plugin: Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capab |
| [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris) | Host | `@polaris-ai/deepseek-harness-plugin` | Git only | 166 | Toward Autonomous Scientific Discovery |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | Host | `dsh-code-review` | Git only | 134 | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Host | `@dsh-external/dsh-super-injector` | Git only | 101 |  |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Host | `dsh-cost-meter` | Git only | 85 | DeepSeek Harness Session Cost Statistics & OpenCode Go Quota Display, DS Official Balance Display, Codex-like  |
| [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | Host | `@dsh-external/workflow` | Git only | 78 | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 |
| [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Host | `forkprobe-dsh` | Git only | 67 | Compare multiple skills on the same task and pick the winner. |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | Host | `@dsh-external/plugin-console` | Git only | 55 | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Host | `@multica-ai/dsh-runtime` | Git only | 46 | Support dsh runtime on Multica. |
| [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) | Host | `@openguardrails/dsh` | Git only | 27 | The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors. |
| [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | Host | `dsh-whale-report` | Git only | 22 | 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。 |
| [LoserFox/distill](https://github.com/LoserFox/distill) | Host | `@loserfox/distill` | Git only | 19 | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Host | `@dsh-external/dsh-deep-research` | Git only | 14 | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/informa |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | Host | `@openmaic/dsh-openmaic` | Git only | 14 | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching |
| [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) | Host | `dsh-plugin-cobsidian` | Git only | 11 | Agent-agnostic workflow skill for maintaining Obsidian knowledge bases |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | Host | `@dsh-external/dsh-evolve` | Git only | 10 | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Host | `dsh-search-mcp` | Git only | 10 | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), con |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | Host | `dsh-directorx` | Git only | 9 | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Host | `@dsh-external/dsh-better-browser` | Git only | 9 | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in |
| [inthepond/ff-toolkit](https://github.com/inthepond/ff-toolkit) | Host | `dsh-ffkit` | Git only | 8 | FFmpeg toolkit with CLI, MCP server, and AI tool schemas |
| [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | Host | `deepseek-harness-qqbot` | Git only | 7 | QQ Bot text and image channel plugin for DeepSeek Harness |
| [reshuibuduo/tmcra-memory](https://github.com/reshuibuduo/tmcra-memory) | Host | `tmcra-deepseek-harness-local-memory` | Git only | 6 | TMCRA Core — local-first, scope-isolated long-term memory runtime for AI agents. |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Host | `@loserfox/telegram` | Git only | 6 | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | Host | `@dsh-external/dsh-inspect` | Git only | 6 | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Host | `codex-plugin-dsh` | Git only | 6 | Use local Codex App Server as a model provider in DeepSeek Harness |
| [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | Host | `dsh-telegram-relay` | Git only | 6 | DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation an |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Host | `@dsh-cowork/chatnode-wechat` | Git only | 6 | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for  |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Host | `dsh-chat-imagine` | Git only | 5 | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片。 |
| [dpskh/dsh-a2a](https://github.com/dpskh/dsh-a2a) | Host | `@dpskh/a2a` | Git only | 5 | Agent2Agent mesh for the Harness |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Host | `nowledge-mem-deepseek-harness` | Git only | 5 | One memory layer for every AI tool and agent, packaged for DeepSeek Harness |
| [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Host | `self-control-guard` | Git only | 5 | Self-control guard plugin for DeepSeek Harness host exit and restart workflows. |
| [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) | Host | `deepseek-harness-wecom` | Git only | 5 | WeCom AI Bot text and image bridge for DeepSeek Harness |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Host | `dsh-plugin-knowledge-graph` | Git only | 4 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) | Host | `dsh-plugin-subhub` | Git only | 4 | Bring third-party subscription accounts into DeepSeek Harness - 为 DeepSeek Harness 接入第三方订阅账户(当前支持 OpenAI / Cha |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | Host | `@vlln/dsh-loop` | Git only | 4 | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | Host | `@morlay/session-persistence-rdb` | Git only | 4 | session 关系型数据库持久化 |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Host | `dsh-openapi` | Git only | 4 | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness |
| [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | Host | `dsh-tool-turbo` | Git only | 4 | Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simpl |
| [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | Host | `@dsh-cowork/chatnode-wechat` | Git only | 4 | READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Host | `dsh-prime-agent` | Git only | 4 | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode |
| [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | Host | `@dsh-community/dsh-ops-kit` | Git only | 3 | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, and plugin |
| [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) | Host | `mindspace-dsh-local-rag` | Git only | 3 | ARPM-derived local hybrid RAG plugin for DeepSeek Harness |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | Git only | 3 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [tafcear/kimi-tide](https://github.com/tafcear/kimi-tide) | Host | `dsh-kimi-tide` | Git only | 3 | 月汐 — Kimi Code (Moonshot) 接入 DeepSeek Harness 的完整方案：标准 DSH 插件 + Kimi CLI 桥接维护 fork + Agent 协作闭环方法论 |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | Host | `@bill9109/dsh-webbridge` | Git only | 3 | DSH 结合 Kimi WebBridge |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Host | `dsh-tool-policy` | Git only | 3 | Declarative deny-by-default tool policy plugin for DeepSeek Harness |
| [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) | Host | `dsh-music-plugin` | Git only | 3 | DeepSeek Harness music plugin (dsh-plugin) |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | Host | `shopline-ai-toolkit-dsh` | Git only | 3 | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent |
| [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | Host | `@dsh-polyglot/bundle` | Git only | 3 | dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSee |
| [yauntyour/DSH-Encrypt](https://github.com/yauntyour/DSH-Encrypt) | Host | `dsh-encrypt` | Git only | 2 | DeepSeek Harness 凭证加密插件，通过设置密码使用AES-256-GCM+SHA3-256实现的全流程加密+校验，运行时临时解密，内存安全。 |
| [alxshelepenok/grove](https://github.com/alxshelepenok/grove) | Host | `dsh-grove` | Git only | 2 | A formal workflow protocol that keeps AI coding agents on track through machine-enforced invariants, verified  |
| [dpskh/dsh-checkpoint](https://github.com/dpskh/dsh-checkpoint) | Host | `@dpskh/tool-checkpoint` | Git only | 2 | Mark an exploration start in the session; pairs with rewind to fold the exploration out of context. |
| [dpskh/dsh-rewind](https://github.com/dpskh/dsh-rewind) | Host | `@dpskh/tool-rewind` | Git only | 2 | Fold everything since the last checkpoint mark into an auto-generated report, replacing it in context while ke |
| [TT-Wang/dsh-slice-agent-loop](https://github.com/TT-Wang/dsh-slice-agent-loop) | Host | `@dsh-external/dsh-slice-agent-loop` | Git only | 2 | A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript |
| [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | Host | `@dsh-external/dsh-kb-sieve` | Git only | 2 | DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, determin |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Host | `@a179-sanae/dsh-code-check` | Git only | 2 |  |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | Host | `mmv-dspic` | Git only | 2 | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks  |
| [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) | Host | `dsh-eval-regression` | Git only | 2 |  |
| [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) | Host | `dsh-k12-lesson-builder` | Git only | 2 | DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials |
| [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | Host | `dsh-governed-workflow` | Git only | 2 | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents. |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | Host | `dsh-reloader` | Git only | 2 | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | Host | `dsh-plugin-miliastra-toolbox` | Git only | 2 | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Host | `@dsh-memory/bundle` | Git only | 2 | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exa |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | Host | `dsh-playwright-cli` | Git only | 2 | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML rep |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Host | `@dsh-crosstalk/bundle` | Git only | 2 | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style |
| [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | Host | `@dsh-skillport/bundle` | Git only | 2 | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md di |
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
| [SamurAIGPT/dsh-plugin-muapi](https://github.com/SamurAIGPT/dsh-plugin-muapi) | Host | `@dsh-plugin/dsh-plugin-muapi` | Git only | 1 | DeepSeek Harness plugin exposing MuApi's 100+ image/video/audio generation models as an agent tool |
| [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) | Host | `evo-memory` | Git only | 1 | agent memory plugin based on CLP |
| [Tianbaidi/dsh-plugin-vision](https://github.com/Tianbaidi/dsh-plugin-vision) | Host | `dsh-plugin-vision` | Git only | 1 |  |
| [Very12345/sai](https://github.com/Very12345/sai) | Host | `sai-dsh-plugin` | Git only | 1 | A local-first Android coding agent powered by the official DeepSeek Harness |
| [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) | Host | `dsh-plugin-git-inspect` | Git only | 1 | Read-only Git inspection tools for DeepSeek Harness |
| [WeiYe6/dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) | Host | `dsh-session-handoff` | Git only | 1 | Hand your long DSH session over to a clean one: /handoff summarizes the conversation with an LLM, creates a ne |
| [Xiaopeng212321414321413231/critical-skillgovern](https://github.com/Xiaopeng212321414321413231/critical-skillgovern) | Host | `dsh-skillgovern` | Git only | 1 | 🔍 Critical SkillGovern — 批判式技能治理框架。跨平台（Hermes/Claude Code/Codex）技能质量审查方法论，已在 120+ 技能实战验证 |
| [allentnetus/dsh-job-hunting](https://github.com/allentnetus/dsh-job-hunting) | Host | `dsh-job-hunting` | Git only | 1 | DeepSeek Harness job hunting plugin and runtime skill for local job intelligence workflows. |
| [hatter123/dsh-math](https://github.com/hatter123/dsh-math) | Host | `dsh-math` | Git only | 1 | Scientific computing plugin for DeepSeek Harness: numeric + symbolic math (mathjs + Algebrite) |
| [hellosky983/dsh-mc-companion](https://github.com/hellosky983/dsh-mc-companion) | Host | `dsh-mc-companion` | Git only | 1 | Friendly AI Minecraft companion for DeepSeek Harness: follows the player, chats like a friend, remembers adven |
| [jaxxchen003/foliodrop-dsh-publish](https://github.com/jaxxchen003/foliodrop-dsh-publish) | Host | `@foliodrop/dsh-publish` | Git only | 1 | Publish DeepSeek Harness agent output as a shareable FolioDrop URL |
| [lecutu/dsh-slide-reflex](https://github.com/lecutu/dsh-slide-reflex) | Host | `dsh-slide-reflex` | Git only | 1 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| [nexsjournal/dsh-imagegen-plugin](https://github.com/nexsjournal/dsh-imagegen-plugin) | Host | `dsh-imagegen-plugin` | Git only | 1 | 给 DeepSeek Harness（DSH）加上第三方生图/改图能力的插件：对话召唤 + 设置卡片，支持 OpenAI 兼容 / 阿里百炼 / Replicate / fal.ai |
| [paul-yangmy/dsh-tavily-web-search](https://github.com/paul-yangmy/dsh-tavily-web-search) | Host | `dsh-tavily-web-search` | Git only | 1 | Tavily-backed web search provider plugin (bundle) for DeepSeek Harness (dsh) |
| [roxyyn0304/dsh-tool-everything](https://github.com/roxyyn0304/dsh-tool-everything) | Host | `dsh-tool-everything` | Git only | 1 | DeepSeek Harness的 Everything 搜索工具插件 |
| [toRolex/periscope](https://github.com/toRolex/periscope) | Host | `periscope-dsh` | Git only | 1 | Bridge vision to text-only coding agents — a Claude Code & Codex plugin for DeepSeek and friends |
| [twanonymous/agent-dispatch-cli](https://github.com/twanonymous/agent-dispatch-cli) | Host | `dsh-cli-delegator` | Git only | 1 | Codex-native capability router for delegating bounded tasks to configurable local AI CLIs. |
| [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | Host | `deepseek-harness-plugin-from-scratch` | Git only | 1 | Code-audited, progressive guide to production-grade DeepSeek Harness plugins |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Host | `dsh-toolbelt` | Git only | 1 | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write gua |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Host | `dsh-tool-monitor` | Git only | 1 | Monitor existing DeepSeek Harness background jobs without running commands twice |
| [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Host | `dsh-kimi-bridge` | Git only | 1 | Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab. |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | Host | `dsh-plugin-wepre` | Git only | 1 | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | Host | `dsh-session-index` | Git only | 1 |  |
| [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Host | `dsh-telegram` | Git only | 1 |  |
| [TTTPOB/dsh-task-models](https://github.com/TTTPOB/dsh-task-models) | Host | `dsh-task-models` | Git only | 1 | DeepSeek Harness plugin with per-task model and reasoning-effort selection |
| [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | Host | `dsh-security-scan` | Git only | 1 |  |
| [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | Host | `dsh-webhook-bridge` | Git only | 1 |  |
| [kit-zeason/dsh-simple-CLI](https://github.com/kit-zeason/dsh-simple-CLI) | Host | `dsh-simple-cli` | Git only | 1 | Minimal DeepSeek Harness extension tailored for contemporary CLI mobilization. |
| [SLAPaper/dsh-self-checking-profile](https://github.com/SLAPaper/dsh-self-checking-profile) | Host | `dsh-self-checking` | Git only | 1 | A drop-in dsh web profile that adds the **Self Checking** sandbox mode to DeepSeek Harness (dsh) |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | Host | `@dsh-routines/bundle` | Git only | 1 | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file di |
| [AIsa-plugins/easy-dsh-plugin](https://github.com/AIsa-plugins/easy-dsh-plugin) | Host | `@aisa-plugins/easy-search` | Git only | 0 |  |
| [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) | Host | `@bryan-cmf/dsh-infra-observability` | Git only | 0 | DSH-Plugin: structural observability layer - real tool/skill usage recording (tools/result), skill-catalog aud |
| [Bryan-cmf/dsh-vector-memory](https://github.com/Bryan-cmf/dsh-vector-memory) | Host | `@bryan-cmf/dsh-vector-memory` | Git only | 0 | DSH-Plugin: durable agent memory core - mem_save/mem_search/mem_health backed by storageDomain (survives resta |
| [FUSU123fusu/dsh-tui-cron](https://github.com/FUSU123fusu/dsh-tui-cron) | Host | `dsh-tui-cron` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-model-switch](https://github.com/FUSU123fusu/dsh-tui-model-switch) | Host | `dsh-tui-model-switch` | Git only | 0 |  |
| [Hanihahaha/dsh-sandbox-argument-normalizer](https://github.com/Hanihahaha/dsh-sandbox-argument-normalizer) | Host | `dsh-sandbox-argument-normalizer` | Git only | 0 |  |
| [Hanihahaha/dsh-skill-mcp-manager](https://github.com/Hanihahaha/dsh-skill-mcp-manager) | Host | `dsh-skill-mcp-manager` | Git only | 0 |  |
| [Hefulalala/dsh-remote-workspace](https://github.com/Hefulalala/dsh-remote-workspace) | Host | `@dsh-external/dsh-remote-workspace` | Git only | 0 | DSH plugin: SSH/SFTP remote sites and remote workspaces in the sidebar |
| [JamesYasR/dsh-email-push-master](https://github.com/JamesYasR/dsh-email-push-master) | Host | `dsh-email-push-master` | Git only | 0 |  |
| [Lbryany/dsh-herdr](https://github.com/Lbryany/dsh-herdr) | Host | `@lbryany/dsh-herdr` | Git only | 0 | Herdr lifecycle status integration for DeepSeek Harness |
| [Mshir0/context-graph-deepseek-harness](https://github.com/Mshir0/context-graph-deepseek-harness) | Host | `dsh-context-graph` | Git only | 0 | Context Graph 是 DeepSeek Harness 的上下文管理插件，可扫描代码、构建语义图谱，并按任务精准注入上下文。 |
| [OctKwong30/dsh-upload-file](https://github.com/OctKwong30/dsh-upload-file) | Host | `dsh-upload-file` | Git only | 0 | DSH 插件：可将任意文件上传至 Web GUI 对话框（支持附件按钮、拖放以及 read_uploaded_file 工具） |
| [Raphaelutumn/dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) | Host | `dsh-change-budget` | Git only | 0 | DeepSeek Harness file-safety guardrail that limits AI coding-agent file edits per turn and prevents too many f |
| [Shiyao-Huang/awesome-deepseek-harness-plugin](https://github.com/Shiyao-Huang/awesome-deepseek-harness-plugin) | Host | `deeplugin-market` | Git only | 0 | Public DeepSeek Harness plugin Store and ecosystem dataset: install specs, source evidence, SQLite history, me |
| [anyuer678/dsh-logtimeline](https://github.com/anyuer678/dsh-logtimeline) | Host | `dsh-logtimeline` | Git only | 0 | Query local log files with Chinese natural-language time expressions — LogTimeline for DeepSeek Harness. |
| [arcships/dsh-llm-aimux](https://github.com/arcships/dsh-llm-aimux) | Host | `@arcships/dsh-llm-aimux` | Git only | 0 | DeepSeek Harness (dsh) LLM adapter backed by aimux — one Rust engine, 325+ providers as dsh model routes |
| [fengyufengzi/dsh-learning-plugin](https://github.com/fengyufengzi/dsh-learning-plugin) | Host | `dsh-learning-plugin` | Git only | 0 | A small DeepSeek Harness tool plugin for learning the Cordis extension model |
| [fengyufengzi/dsh-local-diagnostics](https://github.com/fengyufengzi/dsh-local-diagnostics) | Host | `dsh-local-diagnostics` | Git only | 0 | Privacy-first in-memory diagnostics for DeepSeek Harness |
| [ghbhiee/dsh-plugins](https://github.com/ghbhiee/dsh-plugins) | Host | `dsh-plugin-cli-session` | Git only | 0 |  |
| [guobinmengxiang-rgb/dsh-memory-canvas](https://github.com/guobinmengxiang-rgb/dsh-memory-canvas) | Host | `dsh-memory-canvas` | Git only | 0 | DSH plugin: offload bulky tool logs to refs/*.md, keep a Mermaid canvas, recall by node_id. Zero daemon. Don't |
| [guozede12593312/dsh-cnwrite](https://github.com/guozede12593312/dsh-cnwrite) | Host | `dsh-cnwrite` | Git only | 0 | DeepSeek Harness 中文写作助手插件：排版 cn_polish + 写作统计 cn_stats |
| [guobinmengxiang-rgb/dsh-plugins](https://github.com/guobinmengxiang-rgb/dsh-plugins) | Host | `dsh-cli-guard` | Git only | 0 | Small DeepSeek Harness plugins. Install one folder at a time. Don't pip the wrong dsh. |
| [hanchn/dsh-multimodal-router](https://github.com/hanchn/dsh-multimodal-router) | Host | `@hanchn/dsh-multimodal-router` | Git only | 0 | A zero-config, multi-provider vision tool for DeepSeek Harness with automatic local model discovery and privac |
| [imkingjh999/dsh-tool-accurate-vision](https://github.com/imkingjh999/dsh-tool-accurate-vision) | Host | `dsh-tool-accurate-vision` | Git only | 0 | Model-facing accurate_vision tool for DeepSeek Harness: precise spatial reasoning via any OpenAI-compatible vi |
| [kiefeng/dsh-lan-memory](https://github.com/kiefeng/dsh-lan-memory) | Host | `dsh-lan-memory` | Git only | 0 | 澜·记忆与人格系统 — DeepSeek Harness memory & persona plugin (三层记忆 + SOUL/MOOD + 一键整理) |
| [klarkxy/dsh-plugin-autoevo](https://github.com/klarkxy/dsh-plugin-autoevo) | Host | `dsh-plugin-autoevo` | Git only | 0 | 发现、探索、审查、升级。DSH，进化永不停歇！ |
| [knottttt/codex-dsh-bridge](https://github.com/knottttt/codex-dsh-bridge) | Host | `codex-dsh-bridge-companion` | Git only | 0 | Codex bridge for dispatching tasks to DeepSeek Harness sessions, with Harness settings integration. |
| [lijx122/dsh-plugin-auth-guard](https://github.com/lijx122/dsh-plugin-auth-guard) | Host | `dsh-plugin-auth-guard` | Git only | 0 | Enterprise-grade Zero-Trust Authentication, LAN/Public Access Control & Security Gate Plugin for DeepSeek Harn |
| [paul-yangmy/dsh-umi-ocr-vision](https://github.com/paul-yangmy/dsh-umi-ocr-vision) | Host | `dsh-umi-ocr-vision` | Git only | 0 |  |
| [po-et/dsh-http-probe](https://github.com/po-et/dsh-http-probe) | Host | `dsh-http-probe` | Git only | 0 | DeepSeek Harness plugin: http_probe tool — check status, latency and headers of any HTTP endpoint. |
| [rand0wn/dsh-minimal-anchor](https://github.com/rand0wn/dsh-minimal-anchor) | Host | `dsh-minimal-anchor` | Git only | 0 | DeepSeek Harness (dsh) plugin: prune the tool schema and inject a structural preamble on a session's first tur |
| [realpkuasule/dsh-launch-pad](https://github.com/realpkuasule/dsh-launch-pad) | Host | `dsh-launch-pad` | Git only | 0 | dsh-launch-pad |
| [rouyiemei/dsh-smart-router](https://github.com/rouyiemei/dsh-smart-router) | Host | `dsh-smart-router` | Git only | 0 | Automatic model routing for DeepSeek Harness: three difficulty tiers (hard/normal/easy) plus vision routing, p |
| [slicenferqin/dsh-whale-tui](https://github.com/slicenferqin/dsh-whale-tui) | Host | `dsh-whale-tui` | Git only | 0 | grok-build style terminal UI for DeepSeek Harness: a Rust/ratatui TUI shipped as a dsh plugin bundle |
| [sundusk/dsh-moodball](https://github.com/sundusk/dsh-moodball) | Host | `@linxin666/dsh-moodball-status` | Git only | 0 | DeepSeek Harness Pet |
| [sunny0826/dsh-plugin-herdr](https://github.com/sunny0826/dsh-plugin-herdr) | Host | `dsh-plugin-herdr` | Git only | 0 | Herdr control-plane plugin for DeepSeek Harness (DSH): observe and drive Herdr — a terminal workspace manager  |
| [stvlynn/dsh.fish](https://github.com/stvlynn/dsh.fish) | Host | `dsh-hub` | Git only | 0 | Discover and install DeepSeek Harness plugins, skills, MCP servers, agent presets, bundles, and profiles. |
| [xiaozhe7772222/dsh-api-key-pool](https://github.com/xiaozhe7772222/dsh-api-key-pool) | Host | `dsh-api-key-pool` | Git only | 0 | API Key rotation pool for DeepSeek Harness: multi-key round-robin, failover on 401/403/429, cooldown & recover |
| [youngyangvip/dsh-diagon-alley](https://github.com/youngyangvip/dsh-diagon-alley) | Host | `dsh-diagon-alley` | Git only | 0 | dsh插件：对角巷角色面具插件 v1.0.0 |
| [zhao-wuyan/dsh-maestro-runtime](https://github.com/zhao-wuyan/dsh-maestro-runtime) | Host | `dsh-maestro-runtime` | Git only | 0 | DSH host plugin for maestro-flow: guard, context, KG sync, delegate/team/coordinator runtime |
| [zhao999/dsh-plugin-wecom-bot](https://github.com/zhao999/dsh-plugin-wecom-bot) | Host | `dsh-plugin-wecom-bot` | Git only | 0 |  |
| [AmethystLuna/embedded-workbench](https://github.com/AmethystLuna/embedded-workbench) | Host | `@amethystluna/embedded-workbench` | Git only | 0 | Embedded C/C++ AI engineering plugin — firmware skills (FreeRTOS, Keil, HardFault, state machines) + 1% Rule / |
| [sybolization/agent-jit](https://github.com/sybolization/agent-jit) | Host | `agent-jit` | Git only | 0 | DeepSeek Harness (dsh) 插件：把 LLM agent loop 中确定性的执行路径编译成 DSL 程序并直接执行，显著降低 token、往返轮次与上下文暴露。A DeepSeek Harness p |

### Client plugins (102)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Client (Web UI) | `dshmarket` | npm | 901 | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | Client (Web UI) | `dsh-context` | npm | 234 | Best DeepSeek Harness plugin for context insight and management, with context dashboard / browser and context  |
| [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | Client (Web UI) | `@sanqi-normal/dsh-webui-market-plugin` | npm | 82 | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Ha |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Client (Web UI) | `dsh-open-in-vscode` | npm | 49 | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | Client (Web UI) | `deepseek-pet` | npm | 30 | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Client (Web UI) | `dsh-share` | npm | 23 | DSH 对话分享插件，分享单轮或多轮对话，可导出为图片或 Markdown。Share DSH Q&As or selected conversation groups as PNG or Markdown. |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | Client (Web UI) | `@huanlin/dsh-plugin-better-sidebar-plugin-office` | npm | 20 | 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 \| Provides Office-suite preview (.docx/.xl |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Client (Web UI) | `dsh-milestone` | npm | 17 | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条 |
| [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) | Client (Web UI) | `dsh-chat-timeline` | npm | 14 | 1:1 port of DeepSeek's official web right-side chat navigation rail (ScrollNav) as a DeepSeek Harness (DSH) pl |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Client (Web UI) | `@dingyi222666/dsh-session-notification` | npm | 13 | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 |
| [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | Client (Web UI) | `dsh-outline` | npm | 11 | DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | Client (Web UI) | `@huanlin/dsh-plugin-ya-workspace-sidebar` | npm | 11 | DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 \| DSH Web workspace sidebar replacement: top global r |
| [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | Client (Web UI) | `@nonamelego/dsh-catppuccin` | npm | 10 | DeepSeek Harness Web GUI 的 Catppuccin 主题插件：Latte / Frappé / Macchiato / Mocha 四种主题一键切换，内置可开关的玻璃质感（Glassmorphis |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | Client (Web UI) | `@huanlin/dsh-plugin-anti-ads` | npm | 10 | DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 \| DSH Web ad blocker with four independent defense layers targeting t |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | Client (Web UI) | `@huanlin/dsh-plugin-d399` | npm | 8 | 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） \| Pops up a mini-game menu while the model generates (Wordle/M |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | Client (Web UI) | `context-vista` | npm | 8 | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /co |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Client (Web UI) | `dsh-ui-appearance` | npm | 7 | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, gla |
| [detongz/dsh-client-ui-obsidian-memory](https://github.com/detongz/dsh-client-ui-obsidian-memory) | Client (Web UI) | `dsh-client-ui-obsidian-memory` | npm | 6 | deepseek harness plugin obsidian memory |
| [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) | Client (Web UI) | `@ha-na-bi/dsh-client-ui-custom` | npm | 6 | Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcut |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | Client (Web UI) | `@huanlin/dsh-plugin-spur` | npm | 6 | 聊天流中悬挂皮鞭，甩动鞭梢（>2.0 px/ms）即向 agent 发送 go work 消息 \| A whip hanging in the chat stream; flick the tip (>2.0 px/m |
| [NanmiCoder/dsh-plugin-market](https://github.com/NanmiCoder/dsh-plugin-market) | Client (Web UI) | `@nanmicoder/dsh-plugin-market` | npm | 5 | Verified plugin marketplace for DeepSeek Harness — discover, inspect, install, and remove DSH plugins from the |
| [Physicolor/harness-ui-enhancer](https://github.com/Physicolor/harness-ui-enhancer) | Client (Web UI) | `harness-ui-enhancer` | npm | 5 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles  |
| [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | Client (Web UI) | `dsh-joi-channel-theme` | npm | 5 | 轴伊 Joi 双衣装主题 for DeepSeek Harness — unofficial, non-commercial fan theme plugin 🍊 |
| [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 4 | Cute whale-girl pet plugin for the DeepSeek Harness Web UI |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Client (Web UI) | `dsh-github` | npm | 4 |  |
| [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) | Client (Web UI) | `dsh-agent-skills` | npm | 4 | Discover and manage Agent Skills inside DeepSeek Harness |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | Client (Web UI) | `@michengai/dsh-archive-manager` | npm | 3 | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 3 | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Client (Web UI) | `dsh-xueqiu` | npm | 3 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) | Client (Web UI) | `dsh-workbench` | npm | 3 | Right-side file workspace for DeepSeek Harness Web. |
| [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) | Client (Web UI) | `@niyongsheng/free-vision-skill` | npm | 3 | Local‑only vision skill for macOS 本地化识图技能 |
| [TianYa-DAO/dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine) | Client (Web UI) | `dsh-wallpaper-engine` | npm | 2 | deepseek-和人生是、 |
| [chenproton/dsh-history](https://github.com/chenproton/dsh-history) | Client (Web UI) | `dsh-history` | npm | 2 | Quickly view, search, and jump to all the messages you sent in a long conversation. |
| [luoying2334/dsh-plugin-skill-manager-gui](https://github.com/luoying2334/dsh-plugin-skill-manager-gui) | Client (Web UI) | `dsh-plugin-skill-manager-gui` | npm | 2 | DeepSeek Harness (DSH) 图形化技能管理器——可通过 Web 设置界面创建、编辑、导入（ZIP 压缩包）和删除 SKILL.md 技能。支持全局安装及按工作区安装。 |
| [Anionex/dsh-eye-care](https://github.com/Anionex/dsh-eye-care) | Client (Web UI) | `@anionex/dsh-eye-care` | npm | 2 | Warm light, warm dark, and system-aware eye-care themes for DSH Web |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | npm | 2 |  |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Client (Web UI) | `dsh-kanban` | npm | 2 | Task board plugin for the DeepSeek Harness Web UI |
| [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) | Client (Web UI) | `@blue-a11y/dsh-client-shortcuts` | npm | 2 | Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+ |
| [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | Client (Web UI) | `dsh-plugin-graph` | npm | 2 | 一个Deepseek Harness的插件关系图谱可视化插件 |
| [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) | Client (Web UI) | `@steven-wu/dsh-cost-meter` | npm | 1 | dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from t |
| [fazhu4/dsh-plugin-studio](https://github.com/fazhu4/dsh-plugin-studio) | Client (Web UI) | `dsh-usage-insights` | npm | 1 | DSH（DeepSeek Harness）插件管理器：在 Web 设置页中按官方/社区分组管理已安装插件（中文描述、一键启停、详情、卸载），并内置 GitHub 插件市场（高收藏/增长最快榜单 + 搜索 + 一键安装）。 |
| [hytime/dsh-companion](https://github.com/hytime/dsh-companion) | Client (Web UI) | `@hytime/dsh-companion` | npm | 1 | DSH Companion 三件套(插件/技能/CLI)发布仓库 - hy-companion 陪伴系统 |
| [realMisakaMikoto/dsh-skin-studio](https://github.com/realMisakaMikoto/dsh-skin-studio) | Client (Web UI) | `dsh-skin-studio` | npm | 1 | DeepSeek Harness 自定义皮肤工作室，支持全界面配色、组件图片/视频背景与皮肤包分享 |
| [xczhanjun/lazeword](https://github.com/xczhanjun/lazeword) | Client (Web UI) | `dsh-lazeword` | npm | 1 |  |
| [ztlovelsw/dsh-model-profile](https://github.com/ztlovelsw/dsh-model-profile) | Client (Web UI) | `@ztlovelsw/dsh-model-profile` | npm | 1 | 手动或自动配置模型思考强度、上下文窗口、最大输出token |
| [zzyyyds88/dsh-solo-leveling](https://github.com/zzyyyds88/dsh-solo-leveling) | Client (Web UI) | `deepseek-pet` | npm | 1 | DeepSeek Harness（DSH）插件集：访问门禁（登录 + HTTPS 反代）、默认值、手机端适配、桌宠、任务套件（看板 / 统计 / Git 图谱 / 皮肤）。Linux 服务器部署 DSH，浏览器 / 手机 |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 |
| [AndyYang12345/dsh-butler-memory](https://github.com/AndyYang12345/dsh-butler-memory) | Client (Web UI) | `dsh-butler-memory` | npm | 0 | A dsh plugin that uses the butler memory mcp server to achieve better and organized memory for dsh. Long term  |
| [BPZ0726/dsh-bestui](https://github.com/BPZ0726/dsh-bestui) | Client (Web UI) | `dsh-bestui` | npm | 0 | Adaptive wallpaper and appearance studio for the DeepSeek Harness Web UI. |
| [ChiYuKe/dsh-message-map](https://github.com/ChiYuKe/dsh-message-map) | Client (Web UI) | `dsh-message-map` | npm | 0 | 为 DSH 移植 Codex 风格的会话消息导航轨道（Message map） |
| [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) | Client (Web UI) | `dsh-wsl-workspace-picker` | npm | 0 | Enhanced workspace directory browser for DeepSeek Harness web UI: one-click access to  /mnt  Windows drives un |
| [biggerboy/dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) | Client (Web UI) | `@biggerboy123/dsh-conversation-anchors` | npm | 0 | Sidebar conversation anchor navigation plugin for DeepSeek Harness web GUI |
| [libinghui55/dsh-tavily-search](https://github.com/libinghui55/dsh-tavily-search) | Client (Web UI) | `dsh-tavily-search` | npm | 0 | Tavily-backed web search provider plugin for DeepSeek Harness (dsh): GUI config card with API key + on/off swi |
| [my-dsh-plugin/dsh-skill-manager](https://github.com/my-dsh-plugin/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 0 | DeepSeek Harness 技能安装管理器:从 GitHub 安装/更新/卸载 Skills,分组展示已加载技能,可选兼容 Claude Code .claude/skills。Install/update/uni |
| [omdsh-plugins/omdsh-base](https://github.com/omdsh-plugins/omdsh-base) | Client (Web UI) | `@omdsh-plugins/omdsh-base` | npm | 0 |  |
| [ossFrankFrank/dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme) | Client (Web UI) | `dsh-dracula-theme` | npm | 0 |  |
| [preflower/deepseek-harness-compaction-ui](https://github.com/preflower/deepseek-harness-compaction-ui) | Client (Web UI) | `deepseek-harness-compaction-ui` | npm | 0 | Visual percentage and token settings for official DeepSeek Harness compaction |
| [potoior/dsh-bull-bear](https://github.com/potoior/dsh-bull-bear) | Client (Web UI) | `dsh-bull-bear` | npm | 0 | Real-time stock market pet for DeepSeek Harness: the faster price rises the higher the bull raises its head, t |
| [raomaiping-hash/dsh-client-ui-mobile](https://github.com/raomaiping-hash/dsh-client-ui-mobile) | Client (Web UI) | `dsh-client-ui-mobile` | npm | 0 | Mobile UI optimizer for the DeepSeek Harness Web GUI — drawer sidebar, full-screen settings, safe areas, touch |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Client (Web UI) | `@dsh-external/dsh-ads` | Git only | 486 | 把 DSH 变成 2005 年门户网站｜Parody ads, fake games, and popups for the DSH Web UI |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Client (Web UI) | `dsh-ui-status-label` | Git only | 38 | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | Client (Web UI) | `deepseek-plugin-store` | Git only | 20 | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | Client (Web UI) | `@runzhliu/dsh-browser-desktop` | Git only | 19 | Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Comp |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | Client (Web UI) | `dsh-prompt-enhancer` | Git only | 18 | DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 🔁 DSH 服务异常一键重启 |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | Client (Web UI) | `dsh-skin-market` | Git only | 18 |  |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | Client (Web UI) | `@dsh-external/dsh-diff-viewer` | Git only | 18 | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool  |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Client (Web UI) | `@dsh-external/dsh-mobile` | Git only | 18 |  |
| [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | Client (Web UI) | `@dsh-external/dsh-qq2006` | Git only | 14 | DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材 |
| [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-deepcel` | Git only | 11 | 一款模仿 excel 的 dsh 皮肤 |
| [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Client (Web UI) | `dsh-provider-model-configurator` | Git only | 11 | DSH 模型 Pro:为 DSH WebUI 提供将 pi-ai 预设或任意已配置提供商的模型上下文、输出上限、推理档位与兼容开关一键应用到目标提供商,并集中查看、新建、编辑、复制与删除各提供商模型条目的能力。 |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | Client (Web UI) | `@dsh-external/dsh-split-panes` | Git only | 5 |  |
| [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | Client (Web UI) | `dsh-client-ui-frosted-glass` | Git only | 4 |  |
| [Yui-Little/dsh-mobile-shell](https://github.com/Yui-Little/dsh-mobile-shell) | Client (Web UI) | `dsh-mobile-shell` | Git only | 3 | Mobile shell UI plugin for DeepSeek Harness web: overlay drawer, full-width conversation, settings sheet, mark |
| [Guojiz/gitlearnos](https://github.com/Guojiz/gitlearnos) | Client (Web UI) | `gitlearnos` | Git only | 3 | Git-native AI learning OS with a GitLearnOS-exclusive DeepSeek Harness panel, targeted practice, local RAG, an |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | Client (Web UI) | `dsh-custom-css` | Git only | 3 |  |
| [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) | Client (Web UI) | `dsh-shortcuts` | Git only | 2 | DeepSeek Harness WebUI 键盘快捷键插件（34 个预置功能、一键录制自定义、静默权限切换）— Fully customizable keyboard shortcuts for the DSH Web |
| [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) | Client (Web UI) | `dsh-angelina-themes` | Git only | 2 | Angelina light and dark glass themes with parallax for DeepSeek Harness |
| [dingzhenyao/dsh-plugin-directory](https://github.com/dingzhenyao/dsh-plugin-directory) | Client (Web UI) | `dsh-plugin-directory` | Git only | 2 | DSH Web GUI plugin: a browsable, searchable, stats-driven directory of GitHub DeepSeek Harness plugins (dsh-pl |
| [dsh-pub/dsh-pub](https://github.com/dsh-pub/dsh-pub) | Client (Web UI) | `@dsh-pub/plugin-directory` | Git only | 2 | The bilingual, source-backed registry and installer for the DeepSeek Harness plugin ecosystem. |
| [xDylanLong/dsh-snapmarketing](https://github.com/xDylanLong/dsh-snapmarketing) | Client (Web UI) | `@snapmarketing/dsh-plugin-center` | Git only | 2 | dsh-snapmarketing is a thin DeepSeek Harness surface for discovering, installing, and managing allowlisted plu |
| [shenjackyuanjie/dsh-cot-summary](https://github.com/shenjackyuanjie/dsh-cot-summary) | Client (Web UI) | `@shenjack/dsh-client-cot-summary-overlay` | Git only | 2 | WIP:啊哈哈哈哈，最后一天了，我要总结cot！ |
| [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | Client (Web UI) | `dsh-goal-mode` | Git only | 2 | 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具 |
| [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | Client (Web UI) | `dsh-plugin-switch` | Git only | 2 | DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and  |
| [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) | Client (Web UI) | `@hewhenjay/dsh-provider-hub` | Git only | 1 | Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs |
| [Suef-666/dsh-tab-alert](https://github.com/Suef-666/dsh-tab-alert) | Client (Web UI) | `dsh-tab-alert` | Git only | 1 |  |
| [huangrx6/dsh-plugin](https://github.com/huangrx6/dsh-plugin) | Client (Web UI) | `dsh-layout` | Git only | 1 | DeepSeek Harness (DSH) 插件合集：Skill 管理（导入/详情/多格式文件预览）、MCP 服务器管理（补丁层读写/测试连接/工具明细）、布局设置 |
| [l-s-c/dsh-workspace-labels](https://github.com/l-s-c/dsh-workspace-labels) | Client (Web UI) | `dsh-workspace-labels` | Git only | 1 | Open DeepSeek Harness workspaces from the existing sidebar three-dot menu |
| [luis1232023/dsh-workspace-enhance](https://github.com/luis1232023/dsh-workspace-enhance) | Client (Web UI) | `dsh-workspace-enhance` | Git only | 1 | 增强dsh左侧工作区区侧栏——每个工作区文件夹下提供 任务/文件/Git 子 Tab，含文件树与右侧预览、Git 的 Changes/Graph 双视图、搜索、视图切换与添加工作区，界面样式对齐默认插件。 |
| [tttwh/dsh-plugin-Audit](https://github.com/tttwh/dsh-plugin-Audit) | Client (Web UI) | `dsh-plugin-Audit` | Git only | 1 | 将DeepSeek Harness插件列表按来源分组展示——官方插件与自行安装插件，一目了然。 |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | Client (Web UI) | `@dsh-external/tps` | Git only | 1 | 只是一个 tps 插件 |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | Client (Web UI) | `dsh-desktop-window` | Git only | 1 |  |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | Client (Web UI) | `dsh-pixel-whale` | Git only | 1 | A lively pixel-whale running-state companion for DeepSeek Harness Web. |
| [189-sketch/dsh-custom-logo](https://github.com/189-sketch/dsh-custom-logo) | Client (Web UI) | `dsh-custom-logo` | Git only | 0 | Replace the DSH top-left BrandWordmark/FishLogo with your own image or text — an inline ⚙ handle inside the wo |
| [Eleven-is-cool/dsh-worktree](https://github.com/Eleven-is-cool/dsh-worktree) | Client (Web UI) | `@eleven-is-cool/dsh-worktree` | Git only | 0 | Git worktree plugin for DeepSeek Harness web: browse/create worktrees from the workspace panel |
| [LINNoot/dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | Client (Web UI) | `dsh-pet-bridge` | Git only | 0 | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) | Client (Web UI) | `@dsh-community/dsh-req-workbench` | Git only | 0 | DeepSeek Harness Web UI 插件：需求管理工作台，从对话/文本/本地文件解析并管理需求与子任务，支持截止时间与超时提醒。 |
| [TangRj-Git/trajectory-graph](https://github.com/TangRj-Git/trajectory-graph) | Client (Web UI) | `dsh-plugin-trajectory-graph` | Git only | 0 | Interactive per-Turn trajectory graph and execution visualization plugin for DeepSeek Harness. |
| [fengs2021/dsh-plugin-catalog](https://github.com/fengs2021/dsh-plugin-catalog) | Client (Web UI) | `dsh-plugin-catalog` | Git only | 0 |  |
| [leilei3167/dsh-bookmark](https://github.com/leilei3167/dsh-bookmark) | Client (Web UI) | `dsh-bookmark` | Git only | 0 | Codex-style conversation navigator for the DeepSeek Harness web UI |
| [omdsh-plugins/omdsh-chatmode](https://github.com/omdsh-plugins/omdsh-chatmode) | Client (Web UI) | `@omdsh-plugins/omdsh-chatmode` | Git only | 0 | Chat mode for the DeepSeek Harness web GUI: a Chat/Work switch above the conversation, a workspace-free sessio |
| [omdsh-plugins/omdsh-shortcuts](https://github.com/omdsh-plugins/omdsh-shortcuts) | Client (Web UI) | `@omdsh-plugins/omdsh-shortcuts` | Git only | 0 | Bind a chord to anything the harness can do: a menu the desktop shell renders natively, a switchboard the runt |
| [omdsh-plugins/omdsh-sidechat](https://github.com/omdsh-plugins/omdsh-sidechat) | Client (Web UI) | `@omdsh-plugins/omdsh-sidechat` | Git only | 0 | Summon a conversation of its own anywhere in the DeepSeek Harness web GUI: a side panel anchored to whatever y |

### Client + Host (198)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Client + Host | `dsh-plugin-desktop` | npm | 12422 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 4285 | Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Client + Host | `dsh-better-sidebar` | npm | 2037 | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/Git/子代理页面 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Client + Host | `@anionex/dsh-vision-toolkit` | npm | 653 | [dsh]为纯文本模型设计更强大的视觉工具箱：安装免费使用、粘贴图片直接识别、多张图片问答、截图到前端UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity) | Client + Host | `dsh-working-activity` | npm | 650 | Lively Working-line extension for pi CLI and DSH |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | Client + Host | `@nanmicoder/dsh-agent-teams` | npm | 514 | AgentTeams plugin for DeepSeek Harness |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Client + Host | `@zseven-w/dsh-openpencil` | npm | 115 | The DeepSeek Harness plugin for OpenPencil — preview, inspect, and edit real .op documents inside a conversati |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Client + Host | `deepseek-idesign` | npm | 107 | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 88 | Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, sk |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Client + Host | `dsh-mnemon` | npm | 82 | Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Client + Host | `@mars-sea/dsh-commandcode-provider` | npm | 57 | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Client + Host | `dsh-chat-import` | npm | 57 | Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCo |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Client + Host | `@yejiming/dsh-data-agent` | npm | 52 | Connect DSH to your database for conversational data analysis and actionable business insights. |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Client + Host | `@mstar-harness/dsh` | npm | 49 | An omni-plugin for harness engineering workflows with multi-agents, programmatic gates and skills. |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | Client + Host | `@huanlin/dsh-plugin-mineru` | npm | 34 | 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON \| Exposes MinerU document-parsing tools to th |
| [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Client + Host | `@shengsheng/dsh-taskboard` | npm | 32 | Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native W |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | Client + Host | `dsh-message-edit` | npm | 30 | DSH 插件：分支式消息编辑、重掷、重试与版本时间线 \| DSH plugin: branch-based message editing, reroll, retry, version timeline |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Client + Host | `dsh-codex-connect` | npm | 25 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Client + Host | `dsh-emoji` | npm | 24 | 让 AI 回复加入自定义表情，支持Bilibili、小红书、贴吧、知乎等多平台表情包，或自定义表情 |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Client + Host | `@dingyi222666/dsh-focus-chat` | npm | 21 | 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Client + Host | `@anionex/dsh-computer-use` | npm | 21 | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Compute |
| [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Client + Host | `dsh-plugin-subscriptions` | npm | 20 | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth logi |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Client + Host | `dsh-user-experience` | npm | 19 | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX  |
| [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Client + Host | `dsh-image-gen` | npm | 19 | Installable multi-provider image generation bundle for DeepSeek Harness (Google Gemini, OpenAI, Volcengine See |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | Client + Host | `dsh-recommend` | npm | 18 | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | Client + Host | `@leetoners/dsh-ui-subagent-monitor` | npm | 15 |  |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Client + Host | `dsh-remote` | npm | 15 | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution buil |
| [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) | Client + Host | `dsh-recall-plugin` | npm | 15 | DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | Client + Host | `@canglongcl/dsh-web-review` | npm | 15 | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Client + Host | `@yejiming/dsh-gomoku` | npm | 13 | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 |
| [isomoes/ikanban](https://github.com/isomoes/ikanban) | Client + Host | `@isomoes/dsh-ikanban` | npm | 12 | iKanban 是一个面向键盘操作、基于 DeepSeek Harness 的多智能体编码工作空间。它专为跨项目地驱动、审查和协调并行智能体工作而构建，将会话管理、差异审查和项目感知导航集于一处。 |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Client + Host | `dsh-codex-subscription` | npm | 11 | 在 DeepSeek Harness 中直接使用 ChatGPT/Codex 订阅，无需 OpenAI API Key 或 Codex CLI，支持 OAuth 登录、订阅搜索与额度显示 \| ChatGPT/Codex |
| [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Client + Host | `dsh-advisor` | npm | 11 | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | Client + Host | `dsh-passwords` | npm | 11 | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, sub |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Client + Host | `@huanlin/dsh-plugin-yet-another-subagent` | npm | 11 | 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 \| Configurable subagent profile system: s |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | Client + Host | `@huanlin/dsh-plugin-aigc-canvas` | npm | 11 | provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 \| Provider-agnostic AIGC HTTP bridg |
| [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) | Client + Host | `dsh-bash-terminal` | npm | 10 |  |
| [icodesign/orbis](https://github.com/icodesign/orbis) | Client + Host | `@orbisapp/remote-dsh` | npm | 9 | A mobile client for deepseek harness remote control |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Client + Host | `@huanlin/dsh-plugin-auto-blame` | npm | 9 | 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 \| After a model turn, an LLM generates 3 critical follow-up suggestions show |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | Client + Host | `@huanlin/dsh-plugin-interpreters` | npm | 9 | 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 \| Exposes run_python/run_node tools th |
| [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Client + Host | `dsh-llm-fallbacks` | npm | 8 | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | Client + Host | `@michengai/dsh-skills-manager` | npm | 7 | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Client + Host | `dsh-builtin-toggles` | npm | 7 | Evidence-backed built-in capability inspector with fail-closed controls for DeepSeek Harness Web. |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Client + Host | `dsh-token-panel` | npm | 7 | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly  |
| [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | Client + Host | `dsh-plugin-installer` | npm | 6 | A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem. |
| [springbrand-lab/dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 5 | Themes and web GUI plugins for DeepSeek Harness: task board, Git graph, file panel, SSH, mobile remote, compan |
| [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) | Client + Host | `@dsh-usage-meter/usage` | npm | 4 | DeepSeek Harness usage recorder plugin: per-model hourly token usage (input/output/cache hits) with a stacked  |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Client + Host | `dsh-agent-messaging` | npm | 4 | Cross-session verification, claims and a decision ledger for DeepSeek Harness — so two agent sessions don't re |
| [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) | Client + Host | `@eddyskywalker/dsh-chatgpt-subscription` | npm | 3 |  |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | Client + Host | `@awiki/dsh` | npm | 3 | AWiki identity and messaging plugin for DeepSeek Harness |
| [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) | Client + Host | `@jiyr0119/dsh-workspace-explorer` | npm | 3 | DeepSeek Harness 工作区文件资源管理器:右侧目录树面板,点击/拖拽文件引用进输入框,UI 对齐 DSH 原生风格 \| Workspace file explorer plugin for DeepSee |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Client + Host | `dsh-plugin-subagent-director` | npm | 3 | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plu |
| [astra3294/dsh-doctor](https://github.com/astra3294/dsh-doctor) | Client + Host | `dsh-doctor` | npm | 3 | Deterministic diagnostics and recovery for DeepSeek Harness |
| [banlanzs/dsh-web-enhanced](https://github.com/banlanzs/dsh-web-enhanced) | Client + Host | `dsh-web-enhanced` | npm | 3 | [building……] DeepSeek Harness's web enhancement plugin—brings task dashboards, Git graphs, workspace file pane |
| [shatyuka/dsh-llm-codebuddy](https://github.com/shatyuka/dsh-llm-codebuddy) | Client + Host | `@shatyuka/dsh-llm-codebuddy` | npm | 3 | Tencent CodeBuddy plugin for DeepSeek Harness (dsh). |
| [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | Client + Host | `dsh-ocgo-usage` | npm | 3 | A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the |
| [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) | Client + Host | `dsh-config-manager` | npm | 3 | Backup / export / import / migrate your DeepSeek Harness (DSH) configuration - dual-face Cordis plugin (host e |
| [YOGEMOW/DeepSeek_Prism](https://github.com/YOGEMOW/DeepSeek_Prism) | Client + Host | `@yogemow/deepseek-prism-dsh` | npm | 3 | 为纯文本模型按需识图：DSH 零补丁 Cordis 插件（prism_see 工具 + 图片 VEP 降级 + 技能运行时注册）+ Codex Skill；多 Provider 视觉 API，VEP/1 低 Token  |
| [ycp424c/dsh-browser-bridge](https://github.com/ycp424c/dsh-browser-bridge) | Client + Host | `@ycp424c/dsh-browser-bridge` | npm | 3 | Prompt-scoped bridge between DSH and explicitly attached Chrome tabs |
| [Anionex/dsh-suggested-replies](https://github.com/Anionex/dsh-suggested-replies) | Client + Host | `@anionex/dsh-suggested-replies` | npm | 3 | DSH Web 预测回复插件：AI 回复后在输入框上方生成可点击填入草稿的下一步消息候选 |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | Client + Host | `@michengai/dsh-agency-agents` | npm | 2 | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [Ready22Race/dsh-team-task](https://github.com/Ready22Race/dsh-team-task) | Client + Host | `@ready22race/dsh-team-task` | npm | 2 | team-task for DeepSeek Harness (dsh): long-horizon multi-agent tasks — reviewed plan DAG, runtime-owned settle |
| [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) | Client + Host | `dsh-auth-gate` | npm | 2 | Login gate for the DeepSeek Harness (dsh) web surface: password or shared-token authentication, session cookie |
| [luodeb/dsh-web-auth-gateway](https://github.com/luodeb/dsh-web-auth-gateway) | Client + Host | `dsh-web-auth-gateway` | npm | 2 | Authentication reverse-proxy gateway plugin for DeepSeek Harness Web |
| [valuz-ai/dsh-valuz-genui](https://github.com/valuz-ai/dsh-valuz-genui) | Client + Host | `@valuz/dsh-valuz-genui` | npm | 2 | DeepSeek Harness plugin: generate_ui — the model authors A2UI documents rendered as interactive surfaces in th |
| [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) | Client + Host | `dsh-working-activity` | npm | 2 | 已归档:合并至 working-activity,pi 版与 DSH 版同仓维护 |
| [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) | Client + Host | `dsh-vision` | npm | 2 | DeepSeek Harness: vision |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | Client + Host | `dsh-archive-manager` | npm | 2 |  |
| [AKS1st/dsh-skill-manager](https://github.com/AKS1st/dsh-skill-manager) | Client + Host | `dsh-skill-manager` | npm | 1 | DSH web plugin: a Skill Manager page in the settings panel browsing system / user / workspace / preset skills, |
| [Britneycode/dsh-update-center](https://github.com/Britneycode/dsh-update-center) | Client + Host | `dsh-update-center` | npm | 1 | dsh (DeepSeek Harness) 更新中心与插件市场：自托管 plugins.json 注册表（GitHub dsh-plugin 主题自动聚合 + npm 包名映射秒级安装），一键安装/更新/卸载/禁用插件 |
| [H97y/dsh-devflow](https://github.com/H97y/dsh-devflow) | Client + Host | `dsh-devflow` | npm | 1 | Automated development pipeline plugin for DeepSeek Harness: requirement pool → LLM refine/design/plan/review → |
| [JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) | Client + Host | `dsh-layered-memory` | npm | 1 | 让 DeepSeek Harness 拥有长期记忆：对话自动蒸馏为事实/场景/画像三层记忆，每步自动召回注入——让 AI 基于证据说话，零操作无感使用 \| Long-term memory for DeepSeek H |
| [LaoYueHanNi/dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree) | Client + Host | `dsh-git-worktree` | npm | 1 |  |
| [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | Client + Host | `dsh-bell-notify` | npm | 1 | DeepSeek Harness (dsh) 社区插件：为 Agent 生命周期事件合成铃声 + 右下角呼吸状态点，每个事件可上传自定义音频。dsh plugin that rings bells and shows a |
| [MarecGents/deepseek-harness-hub](https://github.com/MarecGents/deepseek-harness-hub) | Client + Host | `@marecgents/dsh-hub` | npm | 1 | windows desktop project as plugin for deepseek harness |
| [Saikel-Orado-Liu/dsh-cost-meter](https://github.com/Saikel-Orado-Liu/dsh-cost-meter) | Client + Host | `@gamegeek-saikel/dsh-cost-meter` | npm | 1 | Cost tracking plugin for the DeepSeek Harness Web GUI — snapshot-anchored per-turn pricing, account balance, a |
| [SiriLee/dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | Client + Host | `dsh-edit-approval` | npm | 1 | DeepSeek Harness plugin: per-edit approval with red/green line diff before write/edit/str_replace_editor (appr |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | Client + Host | `dsh-rewind-plugin` | npm | 1 | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantic |
| [WenhongPan/dsh-projects](https://github.com/WenhongPan/dsh-projects) | Client + Host | `dsh-projects` | npm | 1 | Project and session organization for DeepSeek Harness: multi-folder projects, searchable chats, attention summ |
| [cookiesheep/whale-on-desk](https://github.com/cookiesheep/whale-on-desk) | Client + Host | `whale-on-desk` | npm | 1 | A pixel-art whale companion for DeepSeek Harness — it swims while your agents work and taps the glass when an  |
| [fazhu4/dsh-usage-insights](https://github.com/fazhu4/dsh-usage-insights) | Client + Host | `dsh-usage-insights` | npm | 1 | dsh的本地用量面板，统计 Token、请求、Agent 活动、工具调用和性能 |
| [gfds2005/dsh-timed-goal](https://github.com/gfds2005/dsh-timed-goal) | Client + Host | `dsh-timed-goal` | npm | 1 | DSH（DeepSeek Harness） Web 插件：在任意对话中配置一次性（或每日重复）任务——一个绝对时间加上要执行的提示词。到点时，插件将对话权限固定为 full access（danger-full-acce |
| [huxint/dsh-team](https://github.com/huxint/dsh-team) | Client + Host | `dsh-team` | npm | 1 | Agent teams for DeepSeek Harness: named long-lived teammates over ctx.subagents, a shared task list, a member- |
| [huntdier/dsh-open-plugins](https://github.com/huntdier/dsh-open-plugins) | Client + Host | `@huntdier/dsh-client-ui-aionui-panel` | npm | 1 |  |
| [saitamahang/dsh-skill-importer](https://github.com/saitamahang/dsh-skill-importer) | Client + Host | `dsh-skill-importer` | npm | 1 | Import, validate, manage, and migrate Agent Skills for DeepSeek Harness (DSH), Claude Code, Codex, and other A |
| [sjh9714/dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | Client + Host | `dsh-what-changed` | npm | 1 | 看得见 Agent 到底改了什么。一个会话里所有文件改动，一屏看完再决定要不要提交 \| See what the agent actually changed. Every file it wrote this ses |
| [spacexun2/dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) | Client + Host | `dsh-worktime-board` | npm | 1 | 🐂🐴 牛马修仙看板：DeepSeek Harness 工时统计 × 修仙养成——把每一分钟劳动，都修成境界（日/周/月 + 学年年历，炼气→宇宙洪荒） |
| [stoneface10/dsh-codex-connect-plus](https://github.com/stoneface10/dsh-codex-connect-plus) | Client + Host | `dsh-codex-connect-plus` | npm | 1 | Use your ChatGPT subscription in DeepSeek Harness to access Codex models and generate or edit images with gpt- |
| [tianleyitian/dsh-file-drop](https://github.com/tianleyitian/dsh-file-drop) | Client + Host | `dsh-file-drop` | npm | 1 | 文件拖拽：把文件拖到 DSH 窗口，真实路径写入输入框 |
| [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) | Client + Host | `dsh-ui-tweaks` | npm | 1 | 一切皆插件，可以定义自己喜欢的dsh，开关控制单项功能，字体大小，表格样式，对话框长度，timeline，git等 |
| [young1lin/dsh-ui-gitworkbench](https://github.com/young1lin/dsh-ui-gitworkbench) | Client + Host | `@young1lin/dsh-ui-gitworkbench` | npm | 1 |  |
| [ycp424c/dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | Client + Host | `@ycp424c/dsh-luna-vision-bridge` | npm | 1 | DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek |
| [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) | Client + Host | `@artificialnotimbecile/dsh-context-taxonomy` | npm | 1 | Logical-call context taxonomy plugin for DeepSeek Harness |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Client + Host | `dsh-translator` | npm | 1 | Turn DeepSeek Harness into a focused, configurable AI translation workspace. |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Client + Host | `dsh-context-lens` | npm | 1 | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse c |
| [1710782766/dsh-llm-vision](https://github.com/1710782766/dsh-llm-vision) | Client + Host | `dsh-llm-vision` | npm | 0 | Reliable vision + OCR for text-only models on DeepSeek Harness: describe_image (normal/critical) + extract_tex |
| [AlexYin-Tongji/dsh-plugin-console](https://github.com/AlexYin-Tongji/dsh-plugin-console) | Client + Host | `dsh-plugin-console` | npm | 0 | DSH Plugin Console: a verified community plugin catalog and profile manager for DeepSeek Harness |
| [Czerror/dsh-plugin-prompt-tool](https://github.com/Czerror/dsh-plugin-prompt-tool) | Client + Host | `dsh-plugin-prompt-tool` | npm | 0 | DSH 插件：简体中文行为规范三层注入（常驻层 + prompt 技能 + anchored preset 锚定注入）+ Web UI 编辑 prompt.md |
| [GraySilver/dsh-task-modes](https://github.com/GraySilver/dsh-task-modes) | Client + Host | `@graysilver/dsh-task-modes` | npm | 0 |  |
| [JayDong9130/dsh-evolution-lab](https://github.com/JayDong9130/dsh-evolution-lab) | Client + Host | `dsh-evolution-lab` | npm | 0 | Proof-carrying Skill self-evolution for DeepSeek Harness |
| [Lan-zk/dsh-at-mention](https://github.com/Lan-zk/dsh-at-mention) | Client + Host | `dsh-at-mention` | npm | 0 | @-mention context references for DeepSeek Harness: workspace file search and cross-session references from the |
| [MicroSpotlight/openharness-find-plugin](https://github.com/MicroSpotlight/openharness-find-plugin) | Client + Host | `@microspotlight/openharness-find-plugin` | npm | 0 |  |
| [NOirBRight/dsh-llm-grok](https://github.com/NOirBRight/dsh-llm-grok) | Client + Host | `dsh-llm-grok` | npm | 0 | Grok subscription OAuth provider and Web configuration plugin for DeepSeek Harness |
| [NoNshiranai/dshx-working-activity](https://github.com/NoNshiranai/dshx-working-activity) | Client + Host | `@dshx/working-activity` | npm | 0 |  |
| [Sttrevens/dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) | Client + Host | `@steven-wu/dsh-linked-folders` | npm | 0 | dsh plugin: multi-folder workspace — global linked-folders list + per-session on-the-fly linking, managed from |
| [blooming-fang/dsh-feishu-notifier](https://github.com/blooming-fang/dsh-feishu-notifier) | Client + Host | `dsh-feishu-notifier` | npm | 0 | DeepSeek Harness 飞书通知插件：在需要用户操作或对话结束时发送飞书机器人提醒，并支持持久化配置。 |
| [brzvsk/dsh-plugins](https://github.com/brzvsk/dsh-plugins) | Client + Host | `dsh-visualize` | npm | 0 |  |
| [jean3690/dsh-devtoolbox](https://github.com/jean3690/dsh-devtoolbox) | Client + Host | `dsh-devtoolbox` | npm | 0 | DSH 本地工具箱插件：侧边栏独立页面 + /toolbox 命令 + 配置驱动的 agent 工具注册，35 个纯本地小工具（文本/编码/数据/安全/提取/转换/参考/效率），数据不出本机。 |
| [lkshjd/dsh-balance](https://github.com/lkshjd/dsh-balance) | Client + Host | `@sky_sun/dsh-balance` | npm | 0 | DeepSeek Harness session-header account balance plugin: host /api/balance route over credentials seam plus a 6 |
| [lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) | Client + Host | `@lujianjun19/dsh-llm-github-copilot` | npm | 0 |  |
| [meltartica/dsh-mcp-servers](https://github.com/meltartica/dsh-mcp-servers) | Client + Host | `dsh-mcp-servers` | npm | 0 | DeepSeek Harness bundle that exposes Model Context Protocol (MCP) servers as native tools, with a settings UI, |
| [omdsh-plugins/omdsh-plughub](https://github.com/omdsh-plugins/omdsh-plughub) | Client + Host | `@omdsh-plugins/omdsh-plughub` | npm | 0 | The omdsh plugin hub: a Settings tab that installs and removes omdsh plugins from a configurable upstream, and |
| [peterliucius/dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) | Client + Host | `dsh-prompt-optimize` | npm | 0 | DeepSeek Harness web plugin: rewrite the current composer draft through an auxiliary LLM call. Click replaces  |
| [quicksandznzn/dsh-session-share](https://github.com/quicksandznzn/dsh-session-share) | Client + Host | `dsh-session-share` | npm | 0 | Share and import complete DeepSeek Harness Session trees as validated, offline Capsules with local ZIP transfe |
| [wloops/dsh-git-worktree](https://github.com/wloops/dsh-git-worktree) | Client + Host | `dsh-git-worktree` | npm | 0 | Domi-grade git worktree isolation and delivery for DeepSeek Harness: permanent worktrees, ready-for-review / a |
| [xiaosenho/dsh-plugin-remote-access](https://github.com/xiaosenho/dsh-plugin-remote-access) | Client + Host | `@xiaosenho/dsh-plugin-remote-access` | npm | 0 | dsh远程访问插件，支持局域网和公网隧道连接 |
| [zoyluoblue/deepseek-harness-token](https://github.com/zoyluoblue/deepseek-harness-token) | Client + Host | `@zoytown/dsh-token` | npm | 0 | DeepSeek Harness (dsh) plugin for machine-wide token usage statistics — a Settings page with totals, a GitHub- |
| [kingsunb/dsh-model-plus](https://github.com/kingsunb/dsh-model-plus) | Client + Host | `@kingsunb/dsh-model-plus` | npm | 0 |  |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | Client + Host | `@ethanyoq/dsh-ai-novel-writer` | Git only | 381 | 本地优先 AI 小说创作工作台，提供 Windows/macOS 桌面版与 DeepSeek Harness 插件开发预览，支持角色、大纲、章节蓝图、审稿修稿和本地模型。 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Client + Host | `dsh-at-file` | Git only | 352 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path  |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Client + Host | `@omdsh-dev/dsh-genui` | Git only | 199 | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fenc |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Client + Host | `@dsh-external/dsh-visualize` | Git only | 171 | 在 DSH 对话中生成交互式可视化｜Render model-generated interactive cards inside DSH conversations |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 61 | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Client + Host | `dsh-notification` | Git only | 59 | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude key |
| [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | Client + Host | `@openbiliclaw/dsh-plugin` | Git only | 42 | OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册  |
| [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Client + Host | `dsh-agent-team-gui` | Git only | 40 | Persistent multi-model workflow teams for DeepSeek Harness — dynamic lead planning, bounded DAGs, per-agent mo |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | Client + Host | `@dsh-external/ego-browser` | Git only | 24 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、 |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Client + Host | `dsh-custom-tool` | Git only | 24 | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool l |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | Client + Host | `@dsh-scholar/research-plugin` | Git only | 23 | dsh-scholar |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | Client + Host | `@dsh-external/dsh-stickers` | Git only | 20 | DSH WebUI sticker plugin for bidirectional user and agent reactions |
| [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | Client + Host | `seektty` | Git only | 19 | Pluggable DeepSeek-colored TUI for DeepSeek Harness |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | Client + Host | `dsh-stock-market` | Git only | 15 | 有效解决了写代码的时候账户不能同时亏钱的BUG |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Client + Host | `dsh-explain` | Git only | 11 | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 |
| [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | Client + Host | `@dsh-external/dsh-sidechain` | Git only | 10 | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | Client + Host | `@ramify/dsh-ramify` | Git only | 9 | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | Client + Host | `@dsh-external/dsh-oauth-mcp-client` | Git only | 8 | OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness. |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | Client + Host | `@xilin3/dsh-prompt-persona` | Git only | 8 | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. |
| [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) | Client + Host | `dsh-cue-plugin` | Git only | 6 | DeepSeek Harness 的跨会话引用(cue)插件 |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Client + Host | `dsh-web-tools` | Git only | 5 | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXN |
| [lhwu1/dsh-withskillhub](https://github.com/lhwu1/dsh-withskillhub) | Client + Host | `dsh-withskillhub` | Git only | 4 | 携手skillhub，快捷安装启用丰富的skill，一键装配方便快捷。 |
| [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | Client + Host | `@bill9109/dsh-101` | Git only | 4 | DSH 文档阅读模式 |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | Client + Host | `dsh-douyin` | Git only | 4 | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | Client + Host | `@omdsh/dsh-hub` | Git only | 4 |  |
| [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | Client + Host | `@mattheliu/7d7d` | Git only | 4 |  |
| [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | Client + Host | `dsh-longbridge` | Git only | 4 |  |
| [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | Client + Host | `dsh-book2skill` | Git only | 4 | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human g |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | Client + Host | `dsh-learn-everything` | Git only | 4 |  |
| [lhwu1/dsh-lookseek](https://github.com/lhwu1/dsh-lookseek) | Client + Host | `dsh-lookseek` | Git only | 3 | 可以看见ai的执行步骤，将ai的步骤抽出来为对应动画，增加编码时等待的娱乐性。 |
| [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | Client + Host | `dsh-revive` | Git only | 3 | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | Client + Host | `dsh-paddle-ocr` | Git only | 3 |  |
| [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | Client + Host | `dsh-ernie-image` | Git only | 3 |  |
| [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | Client + Host | `dsh-voice-funasr` | Git only | 3 |  |
| [Yihong89/dsh-usage-plugin](https://github.com/Yihong89/dsh-usage-plugin) | Client + Host | `dsh-usage-plugin` | Git only | 3 | DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + u |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Client + Host | `dsh-wikilink` | Git only | 3 | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach the |
| [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) | Client + Host | `dsh-billing-community-bundle` | Git only | 2 |  |
| [aka-danielZhang/dsh-mcp-settings](https://github.com/aka-danielZhang/dsh-mcp-settings) | Client + Host | `dsh-mcp-settings` | Git only | 2 | DSH bundle for MCP server management, inventory status, and Web settings |
| [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | Client + Host | `dsh-nebula` | Git only | 2 | nebula v5 plugin for deepseek harness |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Client + Host | `@dsh-plugin/dsh-review-loop` | Git only | 2 | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量 |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Client + Host | `dsh-model-modes` | Git only | 2 | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness |
| [1321928757/dsh-prompt-polish](https://github.com/1321928757/dsh-prompt-polish) | Client + Host | `dsh-prompt-polish` | Git only | 1 | 输入栏提示词优化插件 / Input-bar prompt optimizer for DeepSeek Harness：6 种策略 × 3 种语言一键重写草稿，可选会话上下文，带确认弹窗、最近 5 次历史与三级设置持久 |
| [21hbguo/dsh-thinking-counter](https://github.com/21hbguo/dsh-thinking-counter) | Client + Host | `@dsh-external/dsh-thinking-counter` | Git only | 1 | DSH「大胖鲸智商检测器」：Thinking 短语检测统计 · 全会话 reasoning 短语命中/分组/聪明程度判定 |
| [HeWhenJay/dsh-project-knowledge-review](https://github.com/HeWhenJay/dsh-project-knowledge-review) | Client + Host | `dsh-project-knowledge-review` | Git only | 1 | 中文 DSH 知识复习插件：有证据才回答、资料缺失提醒补充学习视频。 |
| [Jian-Sparrow/dsh-plugin-mission-control](https://github.com/Jian-Sparrow/dsh-plugin-mission-control) | Client + Host | `dsh-plugin-mission-control` | Git only | 1 |  |
| [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) | Client + Host | `dsh-llm-ollama` | Git only | 1 | Native Ollama Cloud provider and Web configuration plugin for DeepSeek Harness |
| [PandaAIDD/dsh-molecule-viewer](https://github.com/PandaAIDD/dsh-molecule-viewer) | Client + Host | `@dsh-plugins/dsh-molecule-viewer` | Git only | 1 | DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染交互式 3D 分子查看器（3Dmol.js，支持旋转/缩放/样式切换/着色）。 |
| [bx33661/dsh-omv](https://github.com/bx33661/dsh-omv) | Client + Host | `dsh-omv` | Git only | 1 | Native DeepSeek Harness workbench for evidence-first vulnerability research, reproduction, and reporting. |
| [cungphammanh590-star/dsh-quiz](https://github.com/cungphammanh590-star/dsh-quiz) | Client + Host | `dsh-quiz` | Git only | 1 | 让碎片化知识随问答深入脑海 |
| [eurt-nano/dsh-cache-cost-monitor](https://github.com/eurt-nano/dsh-cache-cost-monitor) | Client + Host | `dsh-cache-cost-monitor` | Git only | 1 | 让 DeepSeek 的每一分钱都花在刀刃上 —— 前缀缓存命中率、费用与健康度，一眼看穿。（已按规范要求严格配置文件，不会出现异常阻止启动） DeepSeek Harness 插件，the monster of cac |
| [flg1217/dsh-llm-agy](https://github.com/flg1217/dsh-llm-agy) | Client + Host | `@dsh-external/dsh-llm-agy` | Git only | 1 | AGY (Antigravity CLI) integration for DeepSeek Harness: LLM adapter subagents, deep web search, connectivity d |
| [kaiqiangh/dsh-workshpace-plugin](https://github.com/kaiqiangh/dsh-workshpace-plugin) | Client + Host | `dsh-workspace-plugin` | Git only | 1 | Inspect the files an agent touched, review session artifacts, preview bounded content, and manage local Worksp |
| [kexuejin/dsh-zhihu-dashboard](https://github.com/kexuejin/dsh-zhihu-dashboard) | Client + Host | `dsh-zhihu-dashboard` | Git only | 1 | Zhihu (知乎) dashboard for DeepSeek Harness: hot list with trends, follow feed, post tracking, and app-idea dist |
| [pureskywalk/dsh-context-show](https://github.com/pureskywalk/dsh-context-show) | Client + Host | `dsh-context-show` | Git only | 1 | DSH Web 实时上下文占用面板：可拖动面板、按工具/供应商统计 token 用量与花费、峰谷计价 |
| [space-spacee-clamation/dsh-package-manager](https://github.com/space-spacee-clamation/dsh-package-manager) | Client + Host | `@dsh-ext/dsh-package-manager` | Git only | 1 | dsh包管理器中间件，对原有的add的模式进行的封装，支持预设和插件  （内容还在迭代!!!!） |
| [wangxing-git/dsh-autogate](https://github.com/wangxing-git/dsh-autogate) | Client + Host | `dsh-autogate` | Git only | 1 | DeepSeek Harness 自动审批插件：在 workspace-write 沙箱之上叠加确定性规则 + LLM 安全审批，自动模式不放宽沙箱、fail-closed。 Safe auto-approval for |
| [weisiren000/dsh-remote-ssh-ops](https://github.com/weisiren000/dsh-remote-ssh-ops) | Client + Host | `dsh-remote-ssh-ops` | Git only | 1 | DeepSeek Harness SSH 远程运维插件，支持远程命令、文件管理、JumpServer 与 keyboard-interactive 认证 |
| [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) | Client + Host | `@proton1917/dsh-live-stats` | Git only | 1 | Live token estimates and true streaming TPS for DeepSeek Harness Web |
| [4sa1ary9/dsh-everything-oauth](https://github.com/4sa1ary9/dsh-everything-oauth) | Client + Host | `dsh-everything-oauth` | Git only | 0 | Windows fork of dsh-everything-oauth: Codex / Grok / Claude subscription login for DeepSeek Harness |
| [4sa1ary9/dockyard-dsh](https://github.com/4sa1ary9/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 0 | Windows fork of Dockyard DSH: composer provider picker for Codex / Grok / Claude / Cursor / Antigravity |
| [AtomerCore/dsh-qq-agent-mail](https://github.com/AtomerCore/dsh-qq-agent-mail) | Client + Host | `dsh-qq-agent-mail` | Git only | 0 | A DeepSeek Harness plugin that integrates QQ Agent Mail. |
| [CodeIdeal/dsh_review](https://github.com/CodeIdeal/dsh_review) | Client + Host | `dsh_review` | Git only | 0 | Interactive Codex CLI-style code review plugin for DeepSeek Harness |
| [TheColdWorld/dsh-wsl-keepalive](https://github.com/TheColdWorld/dsh-wsl-keepalive) | Client + Host | `wsl-keepalive` | Git only | 0 | a Ai-Gererated plugin for Dsh alive in Windows Subsystem of Linux |
| [XiaHouSheng/dsh-token-tracker](https://github.com/XiaHouSheng/dsh-token-tracker) | Client + Host | `dsh-token-tracker` | Git only | 0 | A DeepSeek-Harness web plugin that tracks provider token usage, prices it with a peak/off-peak table, and show |
| [Xs1KVerOA/dsh-service-manage](https://github.com/Xs1KVerOA/dsh-service-manage) | Client + Host | `dsh-service-manage` | Git only | 0 | DeepSeek Harness service manager for SSH, FTP, databases, Docker and S3, with proxy support, SSH file transfer |
| [facai0316/dsh-auto-coding](https://github.com/facai0316/dsh-auto-coding) | Client + Host | `@auto-coding/mega` | Git only | 0 | 一个代码流水线，前期磨合好了以后，会有个很舒服的 vibe coding 体验，也可以更好的把闲时 token 利用起来（白天人肉测试+写需求+审核前一天的计划和决策，晚上让流水线自己挂着跑） |
| [hddwbd/dsh-plugin-llm-proxy](https://github.com/hddwbd/dsh-plugin-llm-proxy) | Client + Host | `dsh-plugin-llm-proxy` | Git only | 0 | deepseek Harness 模型代理插件 |
| [omdsh-plugins/omdsh-codemode](https://github.com/omdsh-plugins/omdsh-codemode) | Client + Host | `@omdsh-plugins/omdsh-codemode` | Git only | 0 | Code mode for the DeepSeek Harness web GUI: a third segment beside Chat and Work whose column is the harness's |
| [omdsh-plugins/omdsh-editor](https://github.com/omdsh-plugins/omdsh-editor) | Client + Host | `@omdsh-plugins/omdsh-editor` | Git only | 0 | Open the current project directory in a native editor from the DeepSeek Harness web GUI: the session header's  |
| [omdsh-plugins/omdsh-remdev](https://github.com/omdsh-plugins/omdsh-remdev) | Client + Host | `@omdsh-plugins/omdsh-remdev` | Git only | 0 | Remote development for the DeepSeek Harness web GUI: connect a workspace to an SSH server, provision a .dsh-se |
| [omdsh-plugins/omdsh-sidepanel](https://github.com/omdsh-plugins/omdsh-sidepanel) | Client + Host | `@omdsh-plugins/omdsh-sidepanel` | Git only | 0 | Work-mode side panels for the DeepSeek Harness web GUI: a right file explorer with previews and a bottom termi |
| [omdsh-plugins/omdsh-status](https://github.com/omdsh-plugins/omdsh-status) | Client + Host | `@omdsh-plugins/omdsh-status` | Git only | 0 | Current project and its git state at a glance for the DeepSeek Harness web GUI: the project name with its bran |
| [omdsh-plugins/omdsh-usage](https://github.com/omdsh-plugins/omdsh-usage) | Client + Host | `@omdsh-plugins/omdsh-usage` | Git only | 0 | API spend at a glance for the DeepSeek Harness web GUI: this conversation, this project, and the account balan |
| [realpkuasule/dsh-side-notify](https://github.com/realpkuasule/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |
| [realpkuasule/dsh-sidechat](https://github.com/realpkuasule/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |
| [winditer/dsh-prompt-optimizer](https://github.com/winditer/dsh-prompt-optimizer) | Client + Host | `dsh-prompt-optimizer` | Git only | 0 |  |
| [wuyh/dsh-workspace-toolbox](https://github.com/wuyh/dsh-workspace-toolbox) | Client + Host | `dsh-workspace-toolbox` | Git only | 0 | DSH (DeepSeek Harness) Web 工作区工具箱插件：文件浏览、Docker 与 Vite 项目管控、SSH/容器终端。 |
| [xiagaogaozi/dsh-subagent-pool](https://github.com/xiagaogaozi/dsh-subagent-pool) | Client + Host | `dsh-subagent-pool` | Git only | 0 | DSH命名子代理池：在设置中配置可重用的子代理（模型/推理/预设），并按名称调用它们 |
| [xiaozhiaixue/dsh-side-notify](https://github.com/xiaozhiaixue/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 | dsh-sidechat companion: push messages straight to the main agent (floating pill + /notify and /to-main command |
| [xiaozhiaixue/dsh-sidechat](https://github.com/xiaozhiaixue/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 | Codex-style side chat for DeepSeek Harness: stage selections in the input (no auto-send), one-click new chat,  |

## Partial attribution (50)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Unattributed | `dsh-vision-router` | npm | 677 | Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q& |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | Unattributed | `dsh-plugins-store` | npm | 56 | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness commu |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Unattributed | `dsh-lark-channel` | npm | 32 | Lark/Feishu IM bot channel for DeepSeek Harness \| 飞书 DeepSeek Harness （DSH）插件 |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 20 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Unattributed | `dsh-import-agents` | npm | 10 | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-clic |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | Unattributed | `@kc0ed/dsh-bottom-bar` | npm | 7 | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Unattributed | `qiushi-dsh-evidence-audit` | npm | 5 | Observe-only hash-chained evidence receipts for DeepSeek Harness |
| [Zalpha263/dsh-file-explorer](https://github.com/Zalpha263/dsh-file-explorer) | Unattributed | `dsh-file-explorer` | npm | 4 | 可以像其他agent一样查看当前工作区的文件夹，并且可以预览文件 |
| [xgone/dsh-remote](https://github.com/xgone/dsh-remote) | Unattributed | `@xgone/dsh-remote` | npm | 4 | Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, rol |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Unattributed | `dsh-plugin-guide` | npm | 4 | Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Of |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DSH 插件市场 — DeepSeek Harness 设置内一键安装社区插件，并提供公开目录站（浏览 / 复制安装命令） |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Unattributed | `dsh-recall` | npm | 3 | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and  |
| [D4Cluv-Train/dsh-plugin-manager](https://github.com/D4Cluv-Train/dsh-plugin-manager) | Unattributed | `@d4cluvtrain/dsh-plugin-manager` | npm | 2 | 一个插件管理的小插件，功能逐步增加中... |
| [nonentity303/dsh-plugin-manager](https://github.com/nonentity303/dsh-plugin-manager) | Unattributed | `dsh-plugin-manager-pro` | npm | 2 |  |
| [Choi-Peng/dsh-deepseek-balance](https://github.com/Choi-Peng/dsh-deepseek-balance) | Unattributed | `@choi-p/dsh-deepseek-balance` | npm | 1 | DeepSeek Harness bundle plugin: shows your DeepSeek account balance in the web sidebar footer, above Settings. |
| [Hanihahaha/deepseek-harness-plugins](https://github.com/Hanihahaha/deepseek-harness-plugins) | Unattributed | `dsh-auto-approve` | npm | 1 |  |
| [Julyves/dsh-git-ui](https://github.com/Julyves/dsh-git-ui) | Unattributed | `dsh-git-ui` | npm | 1 | DeepSeek Harness (dsh) plugin: Git status pill in the session header — branch, dirty counts, ahead/behind, rec |
| [dshworks/dsh-meter](https://github.com/dshworks/dsh-meter) | Unattributed | `@dshworks/dsh-meter` | npm | 1 | The DeepSeek time-of-use meter for dsh: what this session cost, which tariff is running, when it flips, and th |
| [jeremy9682/dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | Unattributed | `@jeremy9682/dsh-acp` | npm | 1 | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [qsjzqssh/mc-hud](https://github.com/qsjzqssh/mc-hud) | Unattributed | `mc-hud` | npm | 1 | Minecraft-style token consumption HUD for DeepSeek Harness |
| [rrrrrredy/skill-security-guard](https://github.com/rrrrrredy/skill-security-guard) | Unattributed | `dsh-skill-security-guard` | npm | 1 | Static security scanner for agent skills: A-F risk rating, safe zip scanning, CI-tested rules |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | Unattributed | `dsh-all-search` | npm | 1 | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) |
| [Fectivnfy112357/dsh-dual-plugin-guide](https://github.com/Fectivnfy112357/dsh-dual-plugin-guide) | Unattributed | `dsh-dual-plugin-guide` | npm | 0 | Dual-format plugin development guide: DSH static plugin package (dsh plugin --profile add) + Agent Plugins 1.0 |
| [Hanihahaha/dsh-auto-approve](https://github.com/Hanihahaha/dsh-auto-approve) | Unattributed | `dsh-auto-approve` | npm | 0 |  |
| [Walvez/dsh-search-failover](https://github.com/Walvez/dsh-search-failover) | Unattributed | `dsh-search-failover` | npm | 0 | DSH provider-level web search failover pool: 8 free/paid backends with quota-aware circuit breaking (keeps nat |
| [renpengfei1027/dsh-web-notify](https://github.com/renpengfei1027/dsh-web-notify) | Unattributed | `dsh-web-notify` | npm | 0 | Approval attention plugin for the DSH Web GUI: pending approval/plan-review/question alerts (chime, tab-title  |
| [wwumit/dsh-compliancehub](https://github.com/wwumit/dsh-compliancehub) | Unattributed | `@wwumit/dsh-compliancehub` | npm | 0 | Remote skill provider for DeepSeek Harness: install skills from a JSON catalog via ctx.skills |
| [wwumit/dsh-office](https://github.com/wwumit/dsh-office) | Unattributed | `@wwumit/dsh-office` | npm | 0 | Office efficiency skill hub provider for DeepSeek Harness (excel2insights, sum2slides-pro) |
| [wwumit/dsh-plugin-tools](https://github.com/wwumit/dsh-plugin-tools) | Unattributed | `@wwumit/dsh-plugin-tools` | npm | 0 | Plugin tools provider for DeepSeek Harness: expert2skill, skill-compliance, dependency-scan (dsh.bundle) |
| [openHacking/pptkit-presentation](https://github.com/openHacking/pptkit-presentation) | Unattributed | `dsh-plugin-pptkit-presentation` | npm | 0 | End-user presentation workflows, preview application, and Agent Skill powered by PPTKit. |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | Git only | 9 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | Unattributed | `dsh-acp-for-bitfun` | Git only | 9 | BitFun 与 DSH ACP 交互对接 插件 |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Unattributed | `@dsh-external/dsh-plugin-tts` | Git only | 5 | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings pan |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | Unattributed | `resanity` | Git only | 4 | reSanity 散修 — 面向散户投研的证据搜索与逻辑梳理 Skill：核查一手资料，拆解题材到收入、利润和现金的传导链，标注证据与推断边界。 |
| [Han-Yao94/dsh-filelens](https://github.com/Han-Yao94/dsh-filelens) | Unattributed | `dsh-filelens` | Git only | 3 |  |
| [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | Unattributed | `@mattheliu/session-teleport` | Git only | 2 |  |
| [lsz-asd/dsh-chameleon](https://github.com/lsz-asd/dsh-chameleon) | Unattributed | `@dsh-external/dsh-chameleon` | Git only | 2 |  |
| [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | Unattributed | `dsh-review-skills` | Git only | 2 |  |
| [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | Unattributed | `agent-loop-workflow` | Git only | 1 | A project-agnostic multi-agent collaboration protocol for the DeepSeek Harness: loop guards that stop runaway  |
| [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) | Unattributed | `dsh-plugin-bridge` | Git only | 1 | Cross-preset session migration for DeepSeek Harness: fixed-schema handoff summaries instead of bypassing the p |
| [asakumizy/dsh-local-skills](https://github.com/asakumizy/dsh-local-skills) | Unattributed | `dsh-local-skills` | Git only | 1 | DSH plugin: local SKILL browser with a Notion-style web UI (live watch, Use-button guide, bundled starter skil |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | Unattributed | `dsh-local-filetree` | Git only | 1 | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, r |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | Unattributed | `dsh-resume-plugin` | Git only | 1 | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Unattributed | `dsh-codex-import` | Git only | 1 | Read-only Codex setup compatibility scanner for DeepSeek Harness |
| [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | Unattributed | `dsh-openclaw-acp` | Git only | 1 | DeepSeek Harness bundle for OpenClaw and WeChat over ACP |
| [Failing-coachman563/dsh-skill-viewer](https://github.com/Failing-coachman563/dsh-skill-viewer) | Unattributed | `dsh-skill-viewer` | Git only | 0 | Manage and organize DSH skills via a web interface with one-click enable/disable, batch migration, and workspa |
| [jifeng15/dsh-web-restart](https://github.com/jifeng15/dsh-web-restart) | Unattributed | `dsh-web-hot` | Git only | 0 | True hot-loading for dsh web: safely auto-restart after installing plugins, editing config, or upgrading dsh.  |
| [syncable-dev/dsh-plugin-memtrace](https://github.com/syncable-dev/dsh-plugin-memtrace) | Unattributed | `dsh-plugin-memtrace` | Git only | 0 | 🧠 Local-first code intelligence graph for DeepSeek Harness. Structural search, blast radius, temporal memory, |
| [WOOK98/airesearch-plugin](https://github.com/WOOK98/airesearch-plugin) | Unattributed | `airesearch-plugin` | Git only | 0 |  |

## Unverified attribution (435)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Host | `@tt-a1i/archify-dsh` | npm | 13998 | Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self |
| [liustack/modlens](https://github.com/liustack/modlens) | Host | `@liustack/modlens` | npm | 2916 | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Host | `managed-agents` | npm | 619 | Open-source CMA-compatible agent runtime for any model, with MCP tools, sandboxed sessions, audit, replay, and |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Host | `graph-memory` | npm | 543 | Deepseek Harness、Openclaw知识图谱记忆插件。2026年4月受邀发布在清华大学讨论会。Knowledge Graph + Memory；Knowledge Graph Context Engine  |
| [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | Host | `dsh-engramory` | npm | 155 | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | npm | 138 | The web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. A |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Client + Host | `dsh-usage-stats` | npm | 65 | Provider balances, subscription quotas, and token-usage analytics for the DeepSeek Harness Web GUI (dsh web). |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | Client (Web UI) | `@xmanrui/dsh-im` | npm | 45 | 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord和WhatsApp）。 Connect IM bots to Dee |
| [opencues/opencues](https://github.com/opencues/opencues) | Host | `@opencues/dsh` | npm | 33 | Turn any text field into a two-way LLM channel: it reads what you write and fills what you ask. Flags a slip a |
| [geml-spec/geml](https://github.com/geml-spec/geml) | Host | `@geml/dsh-plugin` | npm | 24 | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | Client (Web UI) | `dsh-gui-customization` | npm | 14 | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | Host | `dsh-tavern` | npm | 11 |  |
| [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | Host | `@fakechris/dsh-restart-recover` | npm | 11 | DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | Host | `dsh-vision-proxy` | npm | 11 | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。GUI 附加图片自动经 OpenAI 兼容 VLM 转译成文字后交给 DeepSeek 作答；支持百炼/智谱/OpenRouter 等任意 O |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | Client (Web UI) | `dsh-hdc-bridge` | npm | 10 | DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 设备面板（官方 client 插件形态）+ 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建/签名/模拟器控制 / DSH-native Harmon |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | Host | `dsh-mcp-manager` | npm | 9 | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Host | `dsh-plugin-claude-bridge` | npm | 8 | Bridge Claude Code memory, skills, and config into DeepSeek Harness |
| [xylt369/dsh-browser](https://github.com/xylt369/dsh-browser) | Host | `@yeesy369/dsh-browser-playwright` | npm | 8 | Browser capability for DeepSeek Harness: headed Edge/Playwright provider, SSRF-safe navigation, a11y-ref click |
| [better-er/dsh-tool-autoexpand](https://github.com/better-er/dsh-tool-autoexpand) | Client + Host | `dsh-tool-autoexpand` | npm | 7 | dsh·工具结果自动展开插件 |
| [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) | Client (Web UI) | `@dshthemes/core` | npm | 7 | A collection of UI themes for deepseek-harness. |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Host | `dsh-plugin-codegraph` | npm | 6 | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools  |
| [dfkai/dsh-board](https://github.com/dfkai/dsh-board) | Client + Host | `dsh-board` | npm | 6 | DeepSeek Harness 侧栏用量与成本面板：官方峰谷计价 · 1M 上下文 · 词勋段位 · 成就与热力图 |
| [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | Host | `@maxwell-feng/dsh-windows-ocr` | npm | 6 |  |
| [liustack/pptfast](https://github.com/liustack/pptfast) | Host | `@liustack/pptfast` | npm | 6 | Stable, editable PPTX generation for AI agents — semantic IR in, native DrawingML out. DSH plugin + Claude Cod |
| [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Client (Web UI) | `dsh-update-checker` | npm | 5 | 全栈更新管理：对 DeepSeek Harness 主程序与每个已装第三方插件做 npm/GitHub 双源 semver 比对，GUI 横幅随系统语言（中/英）提示可更新插件；一键更新主程序或任意插件，自动备份可回滚， |
| [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) | Host | `dsh-multi-folder` | npm | 5 |  |
| [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) | Client + Host | `@js2hou/dsh-mcp-manager` | npm | 5 | 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。 |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Host | `upstream-radar` | npm | 5 | Scan and monitor DeepSeek Harness plugins: find exact dependency and compatibility problems, then keep a fixab |
| [mengyun233/dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | Client (Web UI) | `dsh-codex-pet` | npm | 5 | 将 Codex 桌宠皮肤自动迁移到 DeepSeek Harness，在 DSH Web 界面渲染功能一致的桌宠：动画、多会话对话框、设置面板，一键迁移即插即用。 |
| [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 5 | Fail-closed Feishu (Lark) channel bridge for DeepSeek Harness (dsh) — chat with a bot, get agent turns back. O |
| [cerebrixos-org/tuning-engines-cli](https://github.com/cerebrixos-org/tuning-engines-cli) | Host | `tuningengines-cli` | npm | 5 | CLI & MCP server for Tuning Engines — fine-tune LLMs on code repositories |
| [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) | Host | `dsh-composer-expand` | npm | 4 | Composer expand/collapse toggle for DeepSeek Harness (dsh): a ⬆/⬇ button in the composer tool row grows the in |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Host | `@agenticcontrolplane/dsh` | npm | 4 | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs |
| [platonai/dsh-browser4](https://github.com/platonai/dsh-browser4) | Host | `dsh-browser4` | npm | 4 | Browser4 — an AI-native browser engine for autonomous agents, intelligent extraction, and large-scale web auto |
| [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) | Client (Web UI) | `dsh-skin-switcher` | npm | 4 | DeepSeek Harness Web GUI 皮肤切换插件：设置界面一键切换已安装皮肤 |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Host | `dsh-plugin-opencode-bridge` | npm | 4 | Bridge opencode skills and config into DeepSeek Harness |
| [Ch0uHuaZ1/DeepSeek-Harness-Desktop](https://github.com/Ch0uHuaZ1/DeepSeek-Harness-Desktop) | Client (Web UI) | `dsh-desktop-launcher` | npm | 3 | One-click desktop launcher for DeepSeek Harness — starts the web UI, runs it in the tray, and reuses your exis |
| [MHfire/dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) | Client + Host | `@mhfire/dsh-im-bridge` | npm | 3 | 即时通讯渠道(企微、飞书等) ⇄ DeepSeek Harness Agent 桥接 |
| [ingleav626-art/dsh-native-launcher](https://github.com/ingleav626-art/dsh-native-launcher) | Client (Web UI) | `dsh-native-launcher` | npm | 3 | 以"零额外安装"为设计原则：仅凭一个官方插件与 Windows 原生机制，让 DeepSeek Harness Web UI 获得桌面 App 式的一键启动体验。 |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | Host | `gongwen-skill` | npm | 3 | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风 |
| [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | Client + Host | `dsh-mmx-bridge` | npm | 3 | 一个工具 = MiniMax 全部多模态能力：DSH 纯文本模型看图/画图/生视频/说话/唱歌/翻唱/搜索/查额度 \| One mmx_bridge tool = all MiniMax multimodal (VLM |
| [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) | Host | `@eqman00003/knowlp-rag` | npm | 3 | KnowLP-RAG: dual knowledge-graph RAG for Markdown notes — dsh plugin add @eqman00003/knowlp-rag · MCP + native |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Host | `dsh-superpowers` | npm | 3 | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstr |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Host | `dsh-plugin-meta-memory` | npm | 3 | Structured long-term memory system for DeepSeek Harness |
| [LA7-F/dsh-MyCordis](https://github.com/LA7-F/dsh-MyCordis) | Host | `dsh-mycordis` | npm | 2 | 可以让你的dsh中的“Cordis插件”变得可管理，可一键生成安装包\|Make the "Cordis plugins" in your dsh manageable and generate installation |
| [Rain-Shuoyu/dsh-client-deep-sneak](https://github.com/Rain-Shuoyu/dsh-client-deep-sneak) | Client + Host | `dsh-client-deep-sneak` | npm | 2 | DeepSneak（深度摸鱼）是专门为 DeepSeek Harness 设计的插件，在 agent 工作时播放 B 站视频，并在 agent 需要操作时暂停并提醒用户，方便摸鱼的同时避免因为没有发现 agent 被阻塞 |
| [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) | Host | `dsh-github-skills` | npm | 2 | Skill-first GitHub workflows for DeepSeek Harness: PR triage, review feedback, CI diagnosis, and safe publishi |
| [XJungit/omdp](https://github.com/XJungit/omdp) | Client + Host | `@omdp/dsh-connector` | npm | 2 | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles |
| [ZhuSheng-0807/dsh-novel-reader](https://github.com/ZhuSheng-0807/dsh-novel-reader) | Client (Web UI) | `dsh-novel-reader` | npm | 2 |  |
| [alanzhao0128/dsh-balance-monitor](https://github.com/alanzhao0128/dsh-balance-monitor) | Host | `dsh-balance-monitor` | npm | 2 |  |
| [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) | Host | `@hytime/dsh-thinking-effort` | npm | 2 |  |
| [lhdrc/dsh-df-memory](https://github.com/lhdrc/dsh-df-memory) | Host | `dsh-df-memory` | npm | 2 |  |
| [luoyan96/dsh-catnap-studio](https://github.com/luoyan96/dsh-catnap-studio) | Client (Web UI) | `dsh-catnap-plugins` | npm | 2 | Cat-themed DeepSeek Harness Web UI plugin with three original themes and a calm interactive companion. Not an  |
| [lyfZhixing/dsh-cost-tracker](https://github.com/lyfZhixing/dsh-cost-tracker) | Host | `dsh-cost-tracker` | npm | 2 | 为 DeepSeek Harness Web（`dsh --profile web`）记录**每日 LLM 调用花费**，支持按会话 / 模型 / 天多维度查看。 |
| [maxwell-feng/dsh-tesseract-ocr](https://github.com/maxwell-feng/dsh-tesseract-ocr) | Host | `@maxwell-feng/dsh-tesseract-ocr` | npm | 2 |  |
| [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | Client + Host | `dsh-approval-gate` | npm | 2 | DeepSeek Harness 自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe） |
| [wsz987/dsh-channels](https://github.com/wsz987/dsh-channels) | Host | `@wsz987/dsh-channels` | npm | 2 | 把微信 / QQ / 钉钉 / 飞书 / Telegram 接入 DeepSeek Harness：统一配置、扫码授权，直接在各 IM 与 Agent 对话；支持图片与文件收发，Agent 可读取 PDF、DOCX、XL |
| [Roarpeng/GraphFlow](https://github.com/Roarpeng/GraphFlow) | Host | `@roarpeng/graphflow` | npm | 2 |  |
| [ZihaoVistonWang/Stata-AI-Skill](https://github.com/ZihaoVistonWang/Stata-AI-Skill) | Host | `@zihaovistonwang/stata-ai-skill` | npm | 2 | Stata AI Skill Native Service: Native localhost HTTP service that lets AI agents run Stata without VS Code, No |
| [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) | Host | `@sakikotgw/pack-agent` | npm | 2 | Agent Modpack — 像装 MC 整合包一样，装你的 agent。 |
| [ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | Host | `dsh-vibe-math` | npm | 2 | Vibe Mathematics —— 多代理数学问题求解与形式化验证框架 |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Host | `dsh-plugin-codex-bridge` | npm | 2 | Bridge codex skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Host | `dsh-plugin-pi-bridge` | npm | 2 | Bridge pi skills and config into DeepSeek Harness |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | Client (Web UI) | `dsh-side-panel` | npm | 2 |  |
| [Alvin-Somedo/dsh-app-launcher](https://github.com/Alvin-Somedo/dsh-app-launcher) | Client (Web UI) | `dsh-app-launcher` | npm | 1 | 把 DSH Web GUI 变成"桌面应用":以独立应用窗口打开,关闭窗口即优雅退出整个 DSH 进程 |
| [CN-Leo/dsh-deepseek-balance](https://github.com/CN-Leo/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | deepseek-harness 插件，实时查询deepseek账号余额 |
| [F1shn/dsh-session-cost](https://github.com/F1shn/dsh-session-cost) | Host | `dsh-session-cost` | npm | 1 | DeepSeek Harness 会话与单次回复费用显示插件 |
| [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Host | `dsh-prompt` | npm | 1 | DeepSeek Harness 的 Prompt 工具箱：别再复制粘贴——24 条深度模板随手点，/prompt 与智能推荐主动兜底，装好即用、可自定义。 \| The Prompt toolbox for DeepS |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Host | `dsh-mattpocock-skills-deck` | npm | 1 | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统 |
| [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) | Client (Web UI) | `dsh-themes` | npm | 1 |  |
| [fuyu-jie/dsh-go-plugin](https://github.com/fuyu-jie/dsh-go-plugin) | Client (Web UI) | `@fuyu-jie/dsh-go-plugin` | npm | 1 |  |
| [iluluyu/dsh-plugin-outline](https://github.com/iluluyu/dsh-plugin-outline) | Client (Web UI) | `dsh-plugin-outline` | npm | 1 | ChatGPT-style right-edge turn navigation plugin for DeepSeek Harness (dsh) web |
| [kingcharleslzy-ai/dsh-honcho-memory](https://github.com/kingcharleslzy-ai/dsh-honcho-memory) | Host | `dsh-honcho-memory` | npm | 1 |  |
| [kouyichi/dsh-tui-app](https://github.com/kouyichi/dsh-tui-app) | Client + Host | `dsh-tui-app` | npm | 1 | DeepSeek Harness terminal UI plugin (Ink/React) |
| [liu3734/jira-tasks-dsh-plugin](https://github.com/liu3734/jira-tasks-dsh-plugin) | Client (Web UI) | `dsh-jira-tasks` | npm | 1 | 在 DSH 会话输入框下方展示当前 JIRA 项目指派给当前用户的「开启 / 重新开启」任务列表。JIRA 地址与令牌从凭据读取；项目 Key 与 JQL 按工作区配置并持久化。 |
| [moonquake2004/dsh-doctor](https://github.com/moonquake2004/dsh-doctor) | Client + Host | `@moonquake2004/dsh-doctor` | npm | 1 |  |
| [ph4310822/dsh-x402-wallet](https://github.com/ph4310822/dsh-x402-wallet) | Client (Web UI) | `@danielng23/dsh-x402-wallet` | npm | 1 | x402 Payment wallet plugin for DeepSeek Harness |
| [s17179XTY/dsh-mobile](https://github.com/s17179XTY/dsh-mobile) | Client (Web UI) | `dsh-mobile` | npm | 1 | dsh-mobile — 用於 DeepSeek Harness 的手机連接 |
| [zhouzhencheng07/dsh-memory](https://github.com/zhouzhencheng07/dsh-memory) | Host | `dsh-memory` | npm | 1 | Cross-session memory for DeepSeek Harness (dsh): Auto-Memory per-turn capture, memory_search, Dream consolidat |
| [linshufan21/dsh-Api-monitor](https://github.com/linshufan21/dsh-Api-monitor) | Host | `dsh-api-balance` | npm | 1 | DeepSeek Harness API 余额监测 \| DeepSeek Harness API balance monitor |
| [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) | Host | `dsh-amber-protocol` | npm | 1 | Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overla |
| [zjsthmjialin/commercial-ui-ux-codex-skill](https://github.com/zjsthmjialin/commercial-ui-ux-codex-skill) | Client (Web UI) | `dsh-commercial-ui-ux` | npm | 1 | Installable Codex skill for commercial UI/UX/GUI design, review, repair, and implementation. |
| [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) | Client + Host | `design-playbook` | npm | 1 | Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrain |
| [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) | Host | `sidesight` | npm | 1 | CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and vid |
| [Fectivnfy112357/github-explore](https://github.com/Fectivnfy112357/github-explore) | Host | `github-explore` | npm | 1 | Discovery + management wrappers around gh CLI for AI coding agents. find_repos, multi-axis explore, trending,  |
| [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) | Host | `agent-plaza` | npm | 1 | Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes) |
| [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) | Host | `@ohmydsh/runtime` | npm | 1 |  |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | Client + Host | `dsh-atuin` | npm | 1 | dsh atuin-history: record dsh user prompts into atuin shell history |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Host | `dsh-plugin-vision-toolkit` | npm | 1 | Vision toolkit for DeepSeek Harness -- give text-only agents eyes |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Host | `dsh-plugin-code-review` | npm | 1 | Structured code review skill for DeepSeek Harness |
| [ConradLu2740/pa-dsh](https://github.com/ConradLu2740/pa-dsh) | Host | `@proactive-agent/dsh` | npm | 1 | ProactiveAgent × DeepSeek Harness 插件组：把主动记忆 + 主动建议接入 DSH（6 个 cordis 插件，引擎零重写） |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Host | `dsh-plugin-auto-docs` | npm | 1 | Auto documentation generation skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Host | `dsh-plugin-context-compressor` | npm | 1 | Context compression skill for DeepSeek Harness |
| [ophielel/deepseek-forge](https://github.com/ophielel/deepseek-forge) | Host | `dsh-devkit-browser` | npm | 1 | DeepSeek Harness 开发锻造工坊：审批守卫、开发 Skills、GitHub/浏览器能力与 Token Watch 消耗监督，装上就能干活。 |
| [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) | Client (Web UI) | `@1mlightyears/dsh-theme-synthwave` | npm | 0 | A synthwave style DeepSeek Harness(dsh) theme |
| [263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) | Host | `dsh-verify` | npm | 0 | The quality gate for agent-built web apps. Real-browser acceptance checks — CLI, MCP (Claude Code / Cursor / C |
| [E83737664/dsh-skills-manager](https://github.com/E83737664/dsh-skills-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [Enderfga/dsh-clawo](https://github.com/Enderfga/dsh-clawo) | Host | `@enderfga/dsh-clawo` | npm | 0 | DeepSeek Harness bundle: register Claw Orchestrator as an ACP subagent provider — delegate a dsh subagent to a |
| [FuncWei/dsh-kanban](https://github.com/FuncWei/dsh-kanban) | Client + Host | `dsh-kanban` | npm | 0 |  |
| [GGbao-114/dsh-theme-cyberpunk-red](https://github.com/GGbao-114/dsh-theme-cyberpunk-red) | Client (Web UI) | `dsh-theme-cyberpunk2077` | npm | 0 |  |
| [KeFan-J/dsh-token-usage](https://github.com/KeFan-J/dsh-token-usage) | Host | `dsh-token-usage` | npm | 0 |  |
| [LianbinZhou/dsh-archive-manager](https://github.com/LianbinZhou/dsh-archive-manager) | Client (Web UI) | `dsh-archive-manager` | npm | 0 | DSH Web GUI archive manager: list archived sessions & one-click restore (with bug fixes) |
| [Lion-1209/dsh-plugin-lion-skills](https://github.com/Lion-1209/dsh-plugin-lion-skills) | Host | `dsh-plugin-lion-skills` | npm | 0 | Lion-Skills — a developer-focused agent skill suite (zh) as a DeepSeek Harness plugin: 11 workflow skills moun |
| [Linductor-alkaid/dsh_tui](https://github.com/Linductor-alkaid/dsh_tui) | Client (Web UI) | `dsh-tui` | npm | 0 | 用第三方 TUI 组件给 DeepSeek Harness（dsh） 做的终端界面。视觉框架对齐 WebUI：左侧工作区/会话选择，中间流式对话，右侧状态、token、统计和待办面板。 |
| [PandaAIDD/dsh-aidd](https://github.com/PandaAIDD/dsh-aidd) | Host | `dsh-aidd` | npm | 0 | Claude Science-style AIDD research workbench for DeepSeek Harness — ReAct research loop, versioned artifacts w |
| [Phant0Meow/dsh-memory-meow](https://github.com/Phant0Meow/dsh-memory-meow) | Client + Host | `meow-memory` | npm | 0 |  |
| [ReachGa0/dsh-desktop](https://github.com/ReachGa0/dsh-desktop) | Host | `dsh-desktop-windows-launcher` | npm | 0 | DeepSeek Harness 桌面版（Windows）：双击即用，选区截图直接问 AI · 系统托盘、会话管理 · Featured in awesome-dsh-plugin |
| [YOYOYOAKE/dsh-token-plan-monitor](https://github.com/YOYOYOAKE/dsh-token-plan-monitor) | Client + Host | `@yoyoyoake/dsh-token-plan-monitor` | npm | 0 |  |
| [ZaVang/dsh-diorama](https://github.com/ZaVang/dsh-diorama) | Client (Web UI) | `dsh-diorama` | npm | 0 |  |
| [dhb861832993-star/img-preview](https://github.com/dhb861832993-star/img-preview) | Host | `img-preview` | npm | 0 | Inline local image preview for DeepSeek Harness - img_serve tool + img fence, renders PNG/JPG/WebP/GIF/AVIF/BM |
| [dylanzhangzx/dknowc-dsh](https://github.com/dylanzhangzx/dknowc-dsh) | Host | `dknowc-dsh` | npm | 0 | 深知可信办公全家桶 dsh 插件包：深知可信咨询 / 深知可信搜索 / 深知公文写作（skill + MCP 转接） |
| [gdy01/dsh-token-cost](https://github.com/gdy01/dsh-token-cost) | Host | `dsh-token-cost` | npm | 0 | DSH plugin: per-project LLM token usage and RMB cost (input / cache-hit / output) based on model standard pric |
| [glenngit/dsh-top](https://github.com/glenngit/dsh-top) | Client + Host | `dsh-top` | npm | 0 | System monitoring tool for the dsh web GUI: live CPU, RAM, disk, network, and top processes in a floating, col |
| [jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) | Host | `dsh-jiey-browser` | npm | 0 | DeepSeek Harness plugin: drive Jiey Browser over MCP |
| [jyhn-hunao/dsh-session-cost](https://github.com/jyhn-hunao/dsh-session-cost) | Client + Host | `dsh-session-cost` | npm | 0 |  |
| [kouyichi/dsh-plugins](https://github.com/kouyichi/dsh-plugins) | Host | `dsh-a2a` | npm | 0 | dsh (DeepSeek Harness) plugin family: 31 plugins / 80+ tools — learn/profile/dream/tower/kanban + scaffold/gua |
| [lengduan/dsh-815-skin](https://github.com/lengduan/dsh-815-skin) | Client (Web UI) | `@lengduan/dsh-client-ui-skin-815` | npm | 0 | 1945-08-15 世界名画 dsh皮肤 |
| [liulei237136/dsh-publish-plugin](https://github.com/liulei237136/dsh-publish-plugin) | Host | `dsh-publish-plugin` | npm | 0 |  |
| [liulei237136/dsh-test-plugin](https://github.com/liulei237136/dsh-test-plugin) | Host | `dsh-test-plugin` | npm | 0 |  |
| [miiaowuwu/dsh-event-sounds](https://github.com/miiaowuwu/dsh-event-sounds) | Client (Web UI) | `dsh-client-ui-event-sounds` | npm | 0 |  |
| [niuniuaba/dsh-subagent-vision](https://github.com/niuniuaba/dsh-subagent-vision) | Host | `dsh-subagent-vision` | npm | 0 |  |
| [qschen86/dsh-deepseek-balance](https://github.com/qschen86/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 0 | DSH web plugin: DeepSeek API balance & today usage badge in the sidebar rail |
| [shifan3/dsh-approve-for-me](https://github.com/shifan3/dsh-approve-for-me) | Host | `dsh-approve-for-me` | npm | 0 | Approve-for-me mode for DeepSeek Harness: LLM safety auto-approval for approval requests; high-risk destructiv |
| [suanlayu666/suanlayu-dsh-plugins](https://github.com/suanlayu666/suanlayu-dsh-plugins) | Client (Web UI) | `dsh-file-upload` | npm | 0 | Self-made DeepSeek Harness plugins (MIT) |
| [tevenfeng/dsh-plugin-omoslim](https://github.com/tevenfeng/dsh-plugin-omoslim) | Host | `dsh-plugin-omoslim` | npm | 0 | DeepSeek Harness bundle: oh-my-opencode-slim style Orchestrator agent preset with model-pinned specialist suba |
| [thooy/dsh-client-ui-theme-manager](https://github.com/thooy/dsh-client-ui-theme-manager) | Client (Web UI) | `dsh-client-ui-theme-manager` | npm | 0 |  |
| [warm-flame-core/new-project-init](https://github.com/warm-flame-core/new-project-init) | Host | `new-project-init` | npm | 0 | 以存量完善为核心的项目文档体系 skill：优化已有项目文档、固化 AI 分角色协作工作流；也支持中途加入补建体系与新项目初始化。提问驱动、26 模板、MIT 开源。 |
| [wingsky-1/dsh-plugin-hub](https://github.com/wingsky-1/dsh-plugin-hub) | Client (Web UI) | `@wingsky-1/dsh-gzip` | npm | 0 | DSH (DeepSeek Harness) 插件集：npm 分发，可一键装全家桶或单独安装 |
| [wuhobin/dsh-mcp-manage](https://github.com/wuhobin/dsh-mcp-manage) | Host | `dsh-mcp-manage` | npm | 0 | dsh plugin: Settings > MCP 服务 management page for DeepSeek Harness (DSH). List/add/edit/delete MCP servers reg |
| [xingyingyuzhui/dsh-skill-manager](https://github.com/xingyingyuzhui/dsh-skill-manager) | Host | `dsh-skill-manager` | npm | 0 | Manage DeepSeek Harness skills from Settings: list, disable without editing SKILL.md, and install/uninstall us |
| [zuoyunlai/lunheng-article-pipeline-dsh](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh) | Host | `lunheng-article-pipeline` | npm | 0 | 论衡（lunheng-article-pipeline）DeepSeek Harness bundle 插件（DSH 适配版） |
| [zsvd/dsh-mcp-manager](https://github.com/zsvd/dsh-mcp-manager) | Client + Host | `dsh-mcp-manager` | npm | 0 | 用于DSH的MCP管理器 |
| [radaren/dsh-auth](https://github.com/radaren/dsh-auth) | Client (Web UI) | `dsh-auth` | npm | 0 |  |
| [alvinunreal/openpets](https://github.com/alvinunreal/openpets) | Unattributed | `@open-pets/dsh` | npm | 1072 | Local first, desktop companion platform with animated pets, plugin SDK and coding-agent integrations. |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 119 | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| brow |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Unattributed | `dsh-tokenledger` | npm | 91 | Relay-site attributed token usage for DeepSeek Harness — zero config, no credentials |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Unattributed | `@anionex/dsh-turn-rewind` | npm | 78 | deepseek harness对话和代码状态回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change L |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | Unattributed | `dsh1024` | npm | 69 | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install command |
| [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Unattributed | `dsh-stock-watch` | npm | 44 | A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗 |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | Unattributed | `@dsh-suite/all` | npm | 40 | The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin st |
| [Xuxchloris/deepseek-harness-sdr-plugin](https://github.com/Xuxchloris/deepseek-harness-sdr-plugin) | Unattributed | `@xuxchloris/dsh-sdr` | npm | 24 | DeepSeek Harness 的 SDR 数字员工插件：九阶段外贸获客 SOP、结构性人工审批、客户去重、持久化知识检索与审计日志，默认 dry-run 安全演示。 |
| [834063245-creator/HoloGram](https://github.com/834063245-creator/HoloGram) | Unattributed | `@a834063245/hologram-dsh` | npm | 24 | 3D code dependency graph generator with built-in LLM agent. Language-agnostic (Python, TypeScript, Rust, Go, J |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | Unattributed | `@loongsuite/dsh-plugin` | npm | 12 | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM ca |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | Unattributed | `dsh-opencode-go-usage` | npm | 10 | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | Unattributed | `dsh-remote-plugin` | npm | 8 | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Ses |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Unattributed | `@0xsline/dsh-spotlight` | npm | 8 | Keyboard-first command palette for DeepSeek Harness Web |
| [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) | Unattributed | `@dsh-trading/bundle` | npm | 5 | Trading research workbench for DeepSeek Harness (dsh): typed market-data seam, deterministic indicators, inter |
| [losebird/dsh-plugin-market](https://github.com/losebird/dsh-plugin-market) | Unattributed | `@ace-zone/dsh-market` | npm | 4 | DeepSeek Harness plugins market｜DSH 插件市场 |
| [xbzbing/dsh-auth-gateway](https://github.com/xbzbing/dsh-auth-gateway) | Unattributed | `dsh-auth-gateway` | npm | 4 | 为 DeepSeek Harness 增加远程访问能力，并通过密码和 OTP 进行安全加固。 Adds secure remote access to DeepSeek Harness with password aut |
| [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) | Unattributed | `widget-dock` | npm | 4 | DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Unattributed | `dsh-plugin-cost-tracker` | npm | 3 | Token cost tracker for DeepSeek Harness |
| [siweina/dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | Unattributed | `dsh-novel-writer` | npm | 2 | DSH / DeepSeek Harness 小说写作助手插件：章节库管理、句式模式分析（九类句式/情感曲线/风格指纹）、风格自检、伏笔登记、批量导入、续写辅助。Novel writing assistant plugi |
| [springbrand-lab/dsh-plugin-market](https://github.com/springbrand-lab/dsh-plugin-market) | Unattributed | `@springbrand/dsh-plugin-marketplace` | npm | 2 | Plugin marketplace for DeepSeek Harness Web settings: install, update and remove plugins across any local prof |
| [Dariandai/dsh-starter-pack](https://github.com/Dariandai/dsh-starter-pack) | Unattributed | `dsh-starter-pack` | npm | 2 |  |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Unattributed | `@jasonjin06/dsh-sound-effects` | npm | 2 | Sound effects plugin for DeepSeek Harness: ambient work music, success chime, and attention chime. |
| [Blank-not-black/dsh-remote-plugin](https://github.com/Blank-not-black/dsh-remote-plugin) | Unattributed | `dsh-remote-plugin` | npm | 1 | DSH Remote 插件独立包：DSH 原生侧边栏入口 + 右侧抽屉管理页；内置网关随 DSH 自动启停 |
| [TeaClearInkII/DSH-Marketplaces-Nexus](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus) | Unattributed | `dsh-marketplaces-nexus` | npm | 1 | 一个DSH插件市场的市场集 · DSH 万市枢纽。 |
| [kingcharleslzy-ai/dsh-cost-balance-pro](https://github.com/kingcharleslzy-ai/dsh-cost-balance-pro) | Unattributed | `dsh-cost-balance-pro` | npm | 1 |  |
| [uluckystar/dsh-plugin-market](https://github.com/uluckystar/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 1 | DSH 插件市场：在设置页浏览 mydsh.dev 插件大全（5596 候选 / 3656 有效），分类/AI 搜索、一键安装启用停用卸载、安全评估与自动重启。非官方社区 mydsh.dev 出品 |
| [xinyuehtx/dsh-plugin-hooks-ordering](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering) | Unattributed | `@tengxiaohtx/dsh-plugin-hooks-ordering` | npm | 1 | 为 deepseek harness 的 waterfall 和 serial 进行确定性 hooks 监听排序 |
| [z953218350/dsh-archive-manager](https://github.com/z953218350/dsh-archive-manager) | Unattributed | `@mlgbnb/dsh-archive-manager` | npm | 1 | Codex-style archived session manager for DSH Web UI — view, search, restore, and delete archived sessions from |
| [zjsthmjialin/pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill) | Unattributed | `dsh-pdf-background-gray` | npm | 1 | Codex skill for removing gray backgrounds from scanned PDFs without changing resolution or anti-aliased text. |
| [zjsthmjialin/inspiration-deck-workshop](https://github.com/zjsthmjialin/inspiration-deck-workshop) | Unattributed | `dsh-inspiration-deck-workshop` | npm | 1 | Inspiration Deck Workshop: local HTML presentation skill and template toolkit |
| [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | Unattributed | `dsh-batch-regression` | npm | 1 | DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论 |
| [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | Unattributed | `dsh-screenshot-diff` | npm | 1 | DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具 |
| [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | Unattributed | `dsh-port-guard` | npm | 1 | DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置 |
| [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | Unattributed | `dsh-bisect-debug` | npm | 1 | DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因 |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | Unattributed | `dsh-balance-display` | npm | 1 | DeepSeek API balance overlay for DeepSeek Harness |
| [940842546/dsh-permissions](https://github.com/940842546/dsh-permissions) | Unattributed | `dsh-permissions` | npm | 0 |  |
| [A-G-guy/dsh-plus](https://github.com/A-G-guy/dsh-plus) | Unattributed | `@dsh-plus/bundle-main` | npm | 0 | DSH+ —— DeepSeek Harness 自定义插件 monorepo：移动端窄屏适配 / 任务结束邮件通知 / 子代理独立模型 / 自定义 LLM 路由 / ...... |
| [Awu12277/dsh-sleep-send](https://github.com/Awu12277/dsh-sleep-send) | Unattributed | `dsh-sleep-send` | npm | 0 | DSH Web 的定时发送插件：在输入框右侧提供「定时发送」按钮与配置面板，支持智能时段、自定义日期时间、多个定时任务，并通过 localStorage 持久化任务，刷新页面后自动恢复。 |
| [JxaMe/dsh-telegram-bridge](https://github.com/JxaMe/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 |  |
| [Leo-Ayh-Oday/dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) | Unattributed | `@leooday/dsh-bundle` | npm | 0 | Runtime governance for DeepSeek Harness: progress governor, evidence freshness, completion guard, capability r |
| [LyaxZ/dsh-quick-toc](https://github.com/LyaxZ/dsh-quick-toc) | Unattributed | `dsh-quick-toc` | npm | 0 | DeepSeek Harness 对话大纲插件：按回合分组的 Markdown 标题目录，自动跟随高亮，平滑跳转导航。 |
| [TiChuXiXi/dsh-message-jump](https://github.com/TiChuXiXi/dsh-message-jump) | Unattributed | `dsh-message-jump` | npm | 0 | DSH (DeepSeek Harness) web 消息定位侧栏插件：会话页右侧指令列表面板，一键列出用户指令并平滑滚动定位到历史消息，仿 DeepSeek 网页右侧消息列表。 |
| [ankesu/dsh-emoji-wallet](https://github.com/ankesu/dsh-emoji-wallet) | Unattributed | `dsh-emoji-wallet` | npm | 0 | Minimal DeepSeek balance wallet for DSH: one click shows your API balance in the session header. · DSH 余额小钱包：顶 |
| [dove-a/dsh-chat-window-fold](https://github.com/dove-a/dsh-chat-window-fold) | Unattributed | `dsh-chat-window-fold` | npm | 0 | DSH web GUI plugin: auto fold/expand the chat window — bottom checkpoints hide old pages, top-scroll expands e |
| [eddiehuang227-source/live-talk](https://github.com/eddiehuang227-source/live-talk) | Unattributed | `dsh-live-talk` | npm | 0 | Animate any photo into a responsive virtual girl. She talks, turns, smiles, and moves naturally in sync with y |
| [gjj-star/dsh-conversation-navigato](https://github.com/gjj-star/dsh-conversation-navigato) | Unattributed | `dsh-conversation-navigator` | npm | 0 |  |
| [jing-hy/dsh-task-runner](https://github.com/jing-hy/dsh-task-runner) | Unattributed | `dsh-task-runner` | npm | 0 | DSH plugin: project/task dual-mode workspaces. Tasks skip the workspace picker - every task conversation gets  |
| [kaixinbaba/dsh-complete-notify](https://github.com/kaixinbaba/dsh-complete-notify) | Unattributed | `dsh-complete-notify` | npm | 0 | 任务完成时播放提示音并弹出小通知（页面内 toast + 后台时系统通知）。纯浏览器方案，零系统依赖，跨 Windows/macOS/Linux。 |
| [light-only/dsh-codex-select](https://github.com/light-only/dsh-codex-select) | Unattributed | `dsh-codex-select` | npm | 0 |  |
| [qschen86/dsh-telegram-bridge](https://github.com/qschen86/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 | DSH host plugin: Telegram notifications and reply-to-continue for sessions |
| [ray062/dsh-obvious-grid](https://github.com/ray062/dsh-obvious-grid) | Unattributed | `dsh-obvious-grid` | npm | 0 |  |
| [ruby1304/dsh-quota-status](https://github.com/ruby1304/dsh-quota-status) | Unattributed | `dsh-quota-status` | npm | 0 | DeepSeek Harness web plugin: minimal quota/balance card — DeepSeek API balance with tier colors & peak/off-pea |
| [zdx8637-gitdog/dshmobile](https://github.com/zdx8637-gitdog/dshmobile) | Unattributed | `@zdx8637/dshmobile-bridge` | npm | 0 | 手机远程控制 DeepSeek Harness：Android App + 云端 relay + PC 插件，常驻二维码一码三用（扫码下载/配对/登录授权）。有服务器可以自行部署。 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Host | `dsh-ouroboros` | Git only | 5518 | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result ne |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-maid-atelier` | Git only | 1282 | DSH Web 鲸鱼娘皮肤系列(深海女仆工坊 maid-atelier)——CC BY-NC-SA 4.0 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Host | `treg-dsh` | Git only | 456 | OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Client + Host | `superdesign-dsh` | Git only | 429 | The design skill for Claude Code, Cursor and any coding agent. Stop shipping AI-slop UI: turn it into shippabl |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | Host | `dsh-harmony-next` | Git only | 328 | 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, archit |
| [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) | Host | `easyeda-agent-dsh` | Git only | 231 |  |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Client (Web UI) | `whale-girl` | Git only | 226 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Client + Host | `dsh-memory-evolve` | Git only | 164 | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广 |
| [taxueseek/argo](https://github.com/taxueseek/argo) | Host | `@taxueseek/argo-dsh` | Git only | 98 | 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Host | `@omdsh-dev/dsh-annotation` | Git only | 72 | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 |
| [labring/sealos-skills](https://github.com/labring/sealos-skills) | Host | `sealos` | Git only | 70 | AI agent skills for Sealos — deploy any project, provision databases, object storage & more with one command.  |
| [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp) | Host | `ru-marketplace-mcp-dsh` | Git only | 64 | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский  |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Host | `@dsh-external/dsh-automation` | Git only | 52 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent session |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Host | `local-shell-mcp-dsh` | Git only | 49 | Enables LLM to use a cli environment. |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | Client (Web UI) | `@vlln/dsh-navbar` | Git only | 38 | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | Client + Host | `recruiting-copilot` | Git only | 36 | 给 HR / 猎头的 AI 招聘工作流：岗位标准梳理、Boss直聘 + 猎聘双通道寻源初筛、市场人才盘点、简历评估、约面试、候选人台账与日报。可装成 Claude Code 插件或 DeepSeek Harness (d |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | Client + Host | `dsh-auto-collapse` | Git only | 24 |  |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | Client + Host | `@dsh-external/dsh-minigames` | Git only | 22 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [upstash/skills](https://github.com/upstash/skills) | Host | `upstash-skills` | Git only | 19 | Collection of skills for Upstash |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Host | `dsh-plugin-guard` | Git only | 18 | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, an |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Client (Web UI) | `@bill9109/dsh-web-ui-notify` | Git only | 18 | 为 DSH 增加桌面通知提醒 |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Client (Web UI) | `dsh-pet-remielle` | Git only | 16 |  |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | Client (Web UI) | `@omdsh-dev/dsh-drag-and-drop` | Git only | 16 | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | Client (Web UI) | `@dsh-external/dsh-side-panel` | Git only | 15 | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 |
| [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-denia` | Git only | 14 | DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。 |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | Host | `dsh-context-doctor` | Git only | 13 | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | Client (Web UI) | `dsh-plugin-background` | Git only | 11 | dsh壁纸插件 |
| [mudden2380078550-creator/write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) | Host | `write-chinese-long-screenplay` | Git only | 9 | 中文电影与剧集长剧本写作 skill |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | Client (Web UI) | `@vlln/dsh-task-status` | Git only | 9 | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [creght-dev/skills](https://github.com/creght-dev/skills) | Host | `creght-skills` | Git only | 8 | Codex and agent skills for Cregh. |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | Git only | 7 | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / liv |
| [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) | Host | `dsh-composer-tools` | Git only | 7 | Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo. |
| [SummerSec/SumSec-Skills](https://github.com/SummerSec/SumSec-Skills) | Host | `sumsec-skills` | Git only | 7 | SummerSec 个人自定义Skill仓库 |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | Client + Host | `dsh-web-archive` | Git only | 7 | 折叠对话当中众多的“无用消息”，例如Think、Bash等 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | Host | `@dsh-external/dsh-plannotator` | Git only | 7 | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Age |
| [GuangminJu/mellos-mapping](https://github.com/GuangminJu/mellos-mapping) | Client + Host | `mellos-mapping-dsh` | Git only | 5 | A live layered dependency map for bottom-up development — MCP server + terminal pane for Claude Code, Codex CL |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | Client (Web UI) | `dsh-blue-whale-maid` | Git only | 5 | 运行在 deepseek harness 上的女仆酱 |
| [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) | Client (Web UI) | `dsh-ding` | Git only | 4 |  |
| [wangzhuo-coding/geo-content-optimizer](https://github.com/wangzhuo-coding/geo-content-optimizer) | Host | `@dsh-external/dsh-plugin-geo-content-optimizer` | Git only | 4 | GEO生成式引擎优化智能体 — 7类关键词+七层架构+EE-A-T权威框架+8维度降痕改写 |
| [zdjmrq/dsh-user-plugins-manager](https://github.com/zdjmrq/dsh-user-plugins-manager) | Client + Host | `dsh-pluginmanager` | Git only | 4 | DSH 用户插件管理器:在 设置→插件 统一管理插件目录散件、运行树插件与 npm 插件包——挂载/卸载/启用/停用(cordis.patch.yml 补丁层 + HMR 热生效) |
| [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) | Host | `@leechen298/code2skill` | Git only | 4 | Generate Function, MCP, Agent Skill, and offline test packages from existing code; installable as a DeepSeek H |
| [fatmo666/Caushell](https://github.com/fatmo666/Caushell) | Host | `caushell-dsh-bash` | Git only | 4 | Compiler-style pre-execution safety analysis for Harness shell actions. |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | Client (Web UI) | `@dsh-community/dsh-deeplink` | Git only | 4 | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | Host | `dsh-win-notify` | Git only | 4 | DSH 插件：代理任务完成时弹出带声音的 Windows Toast 通知，点击通知即可直接切回并前台显示 DSH 标签页 |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | Host | `@detpecca/dsh-llm-wiki` | Git only | 4 |  |
| [libinyam/dsh-vision-provider](https://github.com/libinyam/dsh-vision-provider) | Client + Host | `dsh-vision-provider` | Git only | 4 | Config-only DeepSeek Harness bundle for OpenAI-compatible vision models. |
| [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) | Client + Host | `dsh-auto` | Git only | 4 | dsh Auto Approve |
| [534119219/chicheng-stats](https://github.com/534119219/chicheng-stats) | Host | `chicheng-stats` | Git only | 3 | DSH 全局用量统计插件：高度可配置侧边栏组件（文字/卡片）+ 统计面板（模型分布/趋势/首字节/耗时明细） |
| [YLingHao/dsh-codeui](https://github.com/YLingHao/dsh-codeui) | Client (Web UI) | `dsh-codeui` | Git only | 3 | A workbench for programmers to review code and track changes, featuring a conversation navigation rail for jum |
| [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | Client + Host | `dsh-desk-pet` | Git only | 3 | Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. |
| [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | Client (Web UI) | `dsh-popout-sidebar` | Git only | 3 |  |
| [kobenfang/bigA](https://github.com/kobenfang/bigA) | Host | `@kobenfang/dsh-biga` | Git only | 3 | openclaw-skills BigA · A股智能选股（选股分析·量化交易·股票池） |
| [tiantyu/dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) | Client (Web UI) | `dsh-skin-toggle` | Git only | 3 | 皮肤管理🐋切换按钮，用于 DeepSeek Harness (DSH)网页 GUI 的皮肤管理。纯客户端插件。 |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | Host | `@zerohackz/dsh-openflowframes` | Git only | 3 |  |
| [watericetangcw/academic-research-graph](https://github.com/watericetangcw/academic-research-graph) | Host | `dsh-academic-research-graph` | Git only | 3 | A SKILL that turns one paper into a living research map. |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | Host | `@humanize/dsh-humanize` | Git only | 3 |  |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | Client + Host | `dsh-sticky-disclosure` | Git only | 3 | DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click,  |
| [Meredith2328/dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) | Client + Host | `dsh-sidebar-mode` | Git only | 3 | 把默认的四种模式切换塞进「新会话」按钮里，新会话创建更方便（标准/PTC/创造/极简，与设置双向同步） |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | Host | `deepseek-harness-plugin-mcp` | Git only | 3 | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Client (Web UI) | `@dsh-external/dsh-web-skins` | Git only | 3 | DSH 换肤插件镜像 + 夕港（harbor）皮肤 \| Mirror of dsh-external/dsh-skins + harbor (夕港) dusk-harbor skin |
| [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | Client + Host | `@dsh-external/dsh-archive-viewer` | Git only | 3 | DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。 |
| [534119219/dsh-custom-provider-reasoning](https://github.com/534119219/dsh-custom-provider-reasoning) | Host | `dsh-custom-provider-reasoning` | Git only | 2 | dsh 插件：让自定义提供方（pi-ai 手写路由）的所有模型都能选择思考强度（推理等级），选择经原厂适配器真正发往线上。A dsh plugin giving every custom-provider model s |
| [Dylan37670/dsh-plugin-panel](https://github.com/Dylan37670/dsh-plugin-panel) | Client (Web UI) | `@dsh-community/plugin-panel` | Git only | 2 | DSH plugin marketplace panel with full catalog search, Chinese translation, semantic search, favorites, and li |
| [MiraculousGarfield/dsh-ops-health](https://github.com/MiraculousGarfield/dsh-ops-health) | Client + Host | `dsh-ops-health` | Git only | 2 |  |
| [RealHacker/dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | Client (Web UI) | `dsh-theme-colorizer` | Git only | 2 | A Deepseek Harness plugin that gives its UI color themes |
| [Ye-Yu-Mo/dsh-llm-proxy](https://github.com/Ye-Yu-Mo/dsh-llm-proxy) | Host | `dsh-llm-proxy` | Git only | 2 | DeepSeek Harness (dsh) 全局 HTTP 代理插件：undici setGlobalDispatcher + EnvHttpProxyAgent，配置化、热切换、可观测 |
| [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) | Client (Web UI) | `dsh-ui-beautify` | Git only | 2 | 用于dsh界面美化，内置四种颜色主题，并且可上传自定义背景 |
| [alex04130/dsh-forge](https://github.com/alex04130/dsh-forge) | Client + Host | `dsh-forge` | Git only | 2 | DeepSeek Harness 扩展套件：运行时注入器、子代理派发与模型路由策略、插件市场/技能/插件管理面板、浏览器桥与 MCP 集成。 |
| [daboge-beach/dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio) | Client (Web UI) | `@dsh-skin-studio/gallery` | Git only | 2 | 🎨 DeepSeek Harness skin studio — built-in curated skins + a community skin gallery. 皮肤工作室：内置精选皮肤 · 用户上传皮肤中心，让 |
| [kobenfang/ListForm](https://github.com/kobenfang/ListForm) | Host | `@kobenfang/dsh-listform` | Git only | 2 | openclaw - skills :　List · 智能表单（万能信息记录·智能记事本·智能账单）- Smart Form & Notes |
| [morlay/better-session](https://github.com/morlay/better-session) | Client (Web UI) | `@morlay/better-session` | Git only | 2 | better session |
| [s17179XTY/dsh-BigfishPet](https://github.com/s17179XTY/dsh-BigfishPet) | Host | `bigfish-pet` | Git only | 2 | dsh-BigfishPet — DeepSeek Harness 桌宠插件 |
| [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | Client (Web UI) | `dsh-theme-endfield` | Git only | 2 | 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。 |
| [SummerSec/semantic-linter](https://github.com/SummerSec/semantic-linter) | Host | `semantic-linter` | Git only | 2 | 一款面向 LLM 指令文件的插件和命令行工具，用于检测语义边界过宽的用词，并提供受保护的 Hook、项目级本地规则注入，以及针对 Skill、Prompt 和 Agent 的语义陷阱检查。 |
| [WeirdSky924/project-change-router-skill](https://github.com/WeirdSky924/project-change-router-skill) | Host | `project-change-router-skill` | Git only | 2 | Project-level change routing and reuse governance for AI coding agents. Helps Codex and Claude Code find the r |
| [drowned-fish1/deepseek-harness-skillx](https://github.com/drowned-fish1/deepseek-harness-skillx) | Host | `dsh-skillx` | Git only | 2 | DeepSeek Harness plugin for safely discovering, auditing, and adopting external Agent Skills — prompt-injectio |
| [zsxh1990/pr-genius](https://github.com/zsxh1990/pr-genius) | Host | `pr-genius` | Git only | 2 | PR Genius — 提交前改进顾问 + 大型开源项目 PR 知识库 |
| [zneoxlab/deepseek-harness-app](https://github.com/zneoxlab/deepseek-harness-app) | Client + Host | `dsh-app-bridge` | Git only | 2 | DeepSeek Harness Desktop — A native desktop app for DeepSeek Harness (dsh). Open the app and start using the a |
| [Samuka007/dsh-nix](https://github.com/Samuka007/dsh-nix) | Client (Web UI) | `@dsh-nix/tui-core` | Git only | 2 | Nix-native packaging for DeepSeek Harness (dsh) |
| [0928OYX/dsh-free-skins](https://github.com/0928OYX/dsh-free-skins) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-gallery` | Git only | 1 | DeepSeek Harness (DSH) 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用免重启 + 皮肤不透明度 + 自定义对话区背景（CC BY-NC-SA 4.0，0928OYX） |
| [Awesome-AI-Pedia/Awesome-DSH-Pet](https://github.com/Awesome-AI-Pedia/Awesome-DSH-Pet) | Client (Web UI) | `awesome-dsh-pet` | Git only | 1 | deepseek harness Pet 包含噜噜 总裁等宠物，并可快速添加自定义宠物 |
| [Cheng-xiu/dsh-auto-scheduler](https://github.com/Cheng-xiu/dsh-auto-scheduler) | Host | `dsh-auto-scheduler` | Git only | 1 | DSH timed auto-work plugin: start/stop agent sessions on a user-defined schedule with Beijing valley/peak pres |
| [ChengxiuCDP/dsh-plugin-advisor](https://github.com/ChengxiuCDP/dsh-plugin-advisor) | Host | `dsh-plugin-advisor` | Git only | 1 |  |
| [GHJIVHIDD/dsh-plugin-container](https://github.com/GHJIVHIDD/dsh-plugin-container) | Client + Host | `@dsh-community/dsh-plugin-container` | Git only | 1 | Docker 容器沙箱部署级插件(与 dsh-plugin-vm-sandbox 全能力对齐,无需 OrbStack):39 个 docker_* 模型工具、快照/回滚、文件传输、端口转发、后台任务、审计、共享/配额/回 |
| [MeowTnT3r/catalog-capabilities-zh](https://github.com/MeowTnT3r/catalog-capabilities-zh) | Host | `catalog-capabilities-zh` | Git only | 1 | 一个面向 Codex 的公开 skill：编排当前 Agent 已有的可信安装器，并为 skills、插件和市场能力维护一份有来源依据的中文说明目录 |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | Host | `dsh-apex-standard` | Git only | 1 | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [Ri0n72Y/workspace-scope](https://github.com/Ri0n72Y/workspace-scope) | Host | `workspace-scope` | Git only | 1 | Per-workspace Skill and MCP enablement for DeepSeek Harness |
| [baisama-cloud/dsh-omni-bridge](https://github.com/baisama-cloud/dsh-omni-bridge) | Host | `dsh-omni-bridge` | Git only | 1 |  |
| [baisama-cloud/dsh-session-mover](https://github.com/baisama-cloud/dsh-session-mover) | Client (Web UI) | `dsh-session-mover` | Git only | 1 | Drag sessions to another workspace in the DeepSeek Harness (DSH) web GUI — 把侧边栏会话直接拖到其他工作区（完整历史克隆+原会话归档） |
| [kevin-luo/dsh-org-panel](https://github.com/kevin-luo/dsh-org-panel) | Client (Web UI) | `dsh-org-panel` | Git only | 1 | deepseek harness 纯牛马 —— 多智能体数字员工指挥台插件 |
| [kobenfang/Eyes](https://github.com/kobenfang/Eyes) | Host | `@kobenfang/dsh-eyes` | Git only | 1 | openclaw - skills : Eyes · 大眼看世界（全球热点·国际新闻·市场分析）- Global News Monitor |
| [kobenfang/FruitPi](https://github.com/kobenfang/FruitPi) | Host | `@kobenfang/dsh-fruitpi` | Git only | 1 | openclaw - skills : Fruit Pi · 水果派（全球水果实时价格） |
| [lemonorangeapple/JuneAgent](https://github.com/lemonorangeapple/JuneAgent) | Host | `june-agent` | Git only | 1 | A Persona and Skills Set for My Daily Use. For Deepseek Harness and Claude Code. |
| [lishLRF/dsh-3d-model-viewer](https://github.com/lishLRF/dsh-3d-model-viewer) | Client + Host | `dsh-3d-model-viewer` | Git only | 1 | DSH 插件：在 DeepSeek Harness 的 Web 界面查看 OBJ/STL/STEP 三维模型，并转译为标准化、LLM 可读的 JSON（含语义分析），一键发送给 AI。 |
| [nexsjournal/dsh-customui-plugin](https://github.com/nexsjournal/dsh-customui-plugin) | Client (Web UI) | `dsh-customui-plugin` | Git only | 1 | Personalize the DeepSeek Harness web GUI: sidebar logo, empty-conversation hero, and chat background image — a |
| [qingfeng200410/dsh-plugin-dosage](https://github.com/qingfeng200410/dsh-plugin-dosage) | Client + Host | `dsh-plugin-dosage` | Git only | 1 | DeepSeek Harness 用量插件。把多供应商余额监测和 DeepSeek 峰谷计费合进侧栏同一个「用量/余额」浮层：账户额度、Token 统计、消耗概览、月历、调用记录和官方价格一次看完，换项目数据也不丢 |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Host | `chat2skill-plugin-runtime` | Git only | 1 | Extracting and iterating skills from daily conversations with AI |
| [songoao25/dsh-plugin-guardian](https://github.com/songoao25/dsh-plugin-guardian) | Client (Web UI) | `dsh-plugin-guardian` | Git only | 1 | Safe uninstall with snapshot rollback for DeepSeek Harness plugins — clean residue, health check, no command l |
| [addxing/function-testing](https://github.com/addxing/function-testing) | Host | `dsh-skill-function-testing` | Git only | 1 | 面向各类 AI 编程代理的功能测试用例生成 Skill。它可以根据 PRD、Git 提交记录或用户故事生成功能测试用例，并输出 Excel 风格测试报告     A skill for generating functi |
| [hetu-altas/hetu-hammurabi](https://github.com/hetu-altas/hetu-hammurabi) | Host | `@hetu-altas/ConstitutionCoding-Plugin` | Git only | 1 | hetu 系列「宪章编程」harness 模块。通过 dsh和opencode 的 Commands / Agents / Skills / Plugins 将研发流程固化为可自动执行的节点流水线：输入任务书路径或一句话 |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Host | `dsh-plugin-agent-dashboard` | Git only | 1 | Multi-agent dashboard skill for DeepSeek Harness |
| [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Host | `dsh-apple-mode` | Git only | 1 | Xcode AI integration mode for DeepSeek Harness (dsh) — an agent preset + installer that gives your DSH session |
| [Gandufu/dsh-plugin](https://github.com/Gandufu/dsh-plugin) | Client (Web UI) | `dsh-theme-wukong` | Git only | 1 | DeepSeek Harness 插件集合｜齐天大圣双主题皮肤，支持亮暗模式、响应式布局与热插拔 |
| [904915452/dsh-specify](https://github.com/904915452/dsh-specify) | Host | `@zhangqingyu/dsh-specify` | Git only | 0 | DeepSeek Harness 插件：Spec-Kit 规范驱动开发技能套件（/speckit-* 斜杠命令） |
| [904915452/dsh-keyboard-shortcuts](https://github.com/904915452/dsh-keyboard-shortcuts) | Client (Web UI) | `@zhangqingyu/dsh-keyboard-shortcuts` | Git only | 0 | DeepSeek Harness 插件：可配置键盘快捷键（输入历史 + 审批/计划快捷键） |
| [Como44/dsh-zh-more](https://github.com/Como44/dsh-zh-more) | Client + Host | `dsh-zh-more` | Git only | 0 | DSH 中文增强补全：斜杠命令名与插件清单卡片中文化，支持三种显示模式（只显示中文/中英都显示/不翻译）。Chinese-first plugin for DSH: translates slash-command na |
| [Duoasa/interactive-component-integration](https://github.com/Duoasa/interactive-component-integration) | Host | `interactive-component-integration` | Git only | 0 | Public Codex and DSH skill for faithful canvas, WebGL, shader, scroll, pointer, and third-party animation inte |
| [ErrorLst/dsh-notes](https://github.com/ErrorLst/dsh-notes) | Client + Host | `@dsh-external/dsh-notes` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-checkpoints](https://github.com/FUSU123fusu/dsh-tui-checkpoints) | Client (Web UI) | `dsh-tui-checkpoints` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-jobs](https://github.com/FUSU123fusu/dsh-tui-jobs) | Client + Host | `dsh-tui-jobs` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-keys](https://github.com/FUSU123fusu/dsh-tui-keys) | Client (Web UI) | `dsh-tui-keys` | Git only | 0 |  |
| [GMH13552/dsh-timer-scheduler](https://github.com/GMH13552/dsh-timer-scheduler) | Client + Host | `dsh-timer-scheduler-ui` | Git only | 0 | 简单的dsh定时任务插件 支持定时列表任务、ui显示，对于长期任务有益 |
| [Gdnaiteab/pingo-dsh-plugin](https://github.com/Gdnaiteab/pingo-dsh-plugin) | Client + Host | `pingo-dsh-plugin` | Git only | 0 | DSH plugin: Pingo desktop-pet companion (catgirl pet in the dsh Web GUI + 14 Pingo persona/strategy skills). O |
| [FlipFlopszzz/dsh-studio](https://github.com/FlipFlopszzz/dsh-studio) | Client + Host | `@dsh-studio/plugins-permission` | Git only | 0 | Desktop workbench & plugin collection for DeepSeek Harness (DSH): Electron shell, IDE-ification plugins, and M |
| [Github-CJX/dsh-tool-imagegen](https://github.com/Github-CJX/dsh-tool-imagegen) | Host | `@local/dsh-tool-imagegen` | Git only | 0 | DSH Desktop 对话内联生图插件** — 模型在对话中自动调用 `generate_image` 工具，图片直接内联显示在对话框里，无需外部面板、无需手动切换。 |
| [Lilien-xu/dsh-meego](https://github.com/Lilien-xu/dsh-meego) | Host | `dsh-meego` | Git only | 0 | DeepSeek Harness plugin for Feishu Project/Meego |
| [Mrzhailiming/deepseek-pet](https://github.com/Mrzhailiming/deepseek-pet) | Host | `dsh-pet-plugin` | Git only | 0 | 在 DeepSeek Harness 的 Web 界面里养一只二次元小鲸鱼 —— 你和 Agent 干活它就吃东西 |
| [Nicotinamide/dsh-plugin-tg-bridge](https://github.com/Nicotinamide/dsh-plugin-tg-bridge) | Client (Web UI) | `dsh-plugin-tg-bridge` | Git only | 0 | DSH (DeepSeek Harness) ↔️ Telegram bridge: message, approve, ask, switch sessions/models/modes, manage permiss |
| [OctKwong30/dsh-conversation-jump](https://github.com/OctKwong30/dsh-conversation-jump) | Client (Web UI) | `dsh-node-jump` | Git only | 0 | 让 DeepSeek Harness Web GUI 在会话内支持对话节点快捷跳转 |
| [PengboNB/skk-gal-dsh](https://github.com/PengboNB/skk-gal-dsh) | Client (Web UI) | `skk-gal` | Git only | 0 | DSH的外观插件 |
| [QianziTech/dsh-trellis-dashboard](https://github.com/QianziTech/dsh-trellis-dashboard) | Host | `dsh-trellis-dashboard` | Git only | 0 | 支持在Deepseek Harness(dsh)中，通过对话tab查看trellis任务状态、工作区信息等。需配合trellis使用：https://github.com/mindfold-ai/Trellis |
| [ReiRui/dsh-image-preview](https://github.com/ReiRui/dsh-image-preview) | Host | `dsh-image-preview` | Git only | 0 |  |
| [RossBool/dsh-plugins](https://github.com/RossBool/dsh-plugins) | Host | `dsh-agent-orchestration` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：协作编排、跨会话、团队模式、计划引擎、话题时间轴、语音、MCP 管理、提示词增强 |
| [TongaiLinC/dsh-mobile-access](https://github.com/TongaiLinC/dsh-mobile-access) | Client (Web UI) | `dsh-mobile-access` | Git only | 0 | DeepSeek Harness 移动端访问插件 —— 让手机 / 平板通过局域网或 VPN 访问 DeepSeek Harness Web GUI，并内置 PC 端审批门禁、LAN / VPN / 公网自动识别 与 网 |
| [UnKnownFish125/dsh-deepmemory](https://github.com/UnKnownFish125/dsh-deepmemory) | Host | `dsh-deepmemory` | Git only | 0 | DeepSeek Harness 长期记忆系统：跨会话记忆 + 无限上下文（设计对齐 AstrBot livingmemory，作者 lxfight；AGPL-3.0） |
| [WonderfulEdge/dsh-publish-skill](https://github.com/WonderfulEdge/dsh-publish-skill) | Host | `dsh-publish-skill` | Git only | 0 | dsh h0发版技能 |
| [bainianlaoyao/easy-archive](https://github.com/bainianlaoyao/easy-archive) | Client (Web UI) | `easy-archive` | Git only | 0 | DSH web plugin: two-step inline archive on workspace sidebar rows — one click arms a red confirm, the second a |
| [baisama-cloud/dsh-stt-input](https://github.com/baisama-cloud/dsh-stt-input) | Client + Host | `dsh-stt-input` | Git only | 0 |  |
| [cainiao1992/dsh-codebuddy-auth](https://github.com/cainiao1992/dsh-codebuddy-auth) | Host | `dsh-codebuddy-auth` | Git only | 0 | Tencent CodeBuddy provider plugin for DeepSeek Harness: OAuth login, token refresh, and model sync via native  |
| [caisiyang123/dsh-tick-rail](https://github.com/caisiyang123/dsh-tick-rail) | Client (Web UI) | `dsh-tick-rail` | Git only | 0 | Tick-rail conversation navigator plugin for DeepSeek Harness — peak-falloff tick marks, hover previews, click- |
| [calwang414/my-dsh-plugins](https://github.com/calwang414/my-dsh-plugins) | Host | `@calwang414/dsh-cdp-browser` | Git only | 0 |  |
| [chuyue-yue/dsh-plugin-manager](https://github.com/chuyue-yue/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-installer-ui` | Git only | 0 |  |
| [dhb861832993-star/pbr-render](https://github.com/dhb861832993-star/pbr-render) | Host | `pbr-render` | Git only | 0 | PBR 3D model preview plugin for DeepSeek Harness — GLB/GLTF game art with textures, material channel inspector |
| [hanyi7867069-create/dsh-content-lab](https://github.com/hanyi7867069-create/dsh-content-lab) | Host | `dsh-content-lab` | Git only | 0 | 内容工坊 — topic, title, post and content-calendar generation tools for DeepSeek Harness. |
| [hanyi7867069-create/dsh-moonrise](https://github.com/hanyi7867069-create/dsh-moonrise) | Client (Web UI) | `dsh-moonrise` | Git only | 0 | 月升 Moonrise — a warm amber-on-midnight theme for the DeepSeek Harness Web UI. |
| [hatsuyuki0103/oh-my-deepseek-harness](https://github.com/hatsuyuki0103/oh-my-deepseek-harness) | Host | `oh-my-deepseek-harness` | Git only | 0 |  |
| [kingguuu8-svg/dsh-pi-compatible](https://github.com/kingguuu8-svg/dsh-pi-compatible) | Host | `dsh-pi-compatible` | Git only | 0 | 在 DeepSeek Harness 中复刻 Pi 工具组的 agent preset，提供 Pi 风格小写核心工具契约并保留 DSH-backed 扩展工具。 |
| [kobenfang/Big8](https://github.com/kobenfang/Big8) | Host | `@kobenfang/dsh-big8` | Git only | 0 | ☯ Big8 AI玄学助手 - 看风水·看面相·算八字·查星座·每日一卦·老黄历 \| AI fortune-telling: feng shui, face reading, BaZi, zodiac |
| [kobenfang/BigFish](https://github.com/kobenfang/BigFish) | Host | `@kobenfang/dsh-bigfish` | Git only | 0 | 🎣 BigFish AI钓鱼助手 - 钓点分析·鱼情分析·钓点分享 \| Fishing spot analysis, fish activity, bait & lure |
| [kobenfang/BigFocus](https://github.com/kobenfang/BigFocus) | Host | `@kobenfang/dsh-bigfocus` | Git only | 0 | 🎯 BigFocus 追踪管家 - 商品价格/明星动态/行业追踪 \| Price tracking, monitoring, alerts |
| [kobenfang/BigLead](https://github.com/kobenfang/BigLead) | Host | `@kobenfang/dsh-biglead` | Git only | 0 | 🎯 BigLead 精准客户线索挖掘 - B2B销售获客 \| B2B lead generation, sales prospecting |
| [kobenfang/BigFood](https://github.com/kobenfang/BigFood) | Host | `@kobenfang/dsh-bigfood` | Git only | 0 | 🍳 BigFood AI冰箱管家 - 食材识别→菜谱推荐 \| Food recognition, recipe recommendation |
| [kobenfang/BigPlan](https://github.com/kobenfang/BigPlan) | Host | `@kobenfang/dsh-bigplan` | Git only | 0 | 📋 BigPlan AI产品调研 - 市场/技术/供应链分析，三套产品规格方案 \| Product research, market analysis |
| [knGear/dsh-AgentTask](https://github.com/knGear/dsh-AgentTask) | Host | `dsh-agenttask` | Git only | 0 |  |
| [kobenfang/BigSeedSkill](https://github.com/kobenfang/BigSeedSkill) | Host | `@kobenfang/dsh-bigseed` | Git only | 0 | 🌱 BigSeed 闪念记录与人生拼图 - 捕捉生活点滴生成人生故事/自传 \| Life story, journal, biography, memory keeper |
| [lemonorangeapple/dsh-grok4.6-support](https://github.com/lemonorangeapple/dsh-grok4.6-support) | Host | `dsh-grok-4-6-support` | Git only | 0 | 为dsh@0.1.0-rc.6增加对grok4.6的支持。 |
| [littleblakew/msds-chain-mcp](https://github.com/littleblakew/msds-chain-mcp) | Client + Host | `dsh-msds-chain` | Git only | 0 |  |
| [lnyuqian/dsh-skill-sidebar](https://github.com/lnyuqian/dsh-skill-sidebar) | Client + Host | `dsh-skill-sidebar` | Git only | 0 | dsh-skill-sidebar 技能面板：DSH 右侧边栏技能面板（Skills panel）— 扫描本机技能目录列出全部技能，4-6 字功能短语 + 目录标签 + 一键复制调用 + 置顶 + 默认自动打开 + 每周 |
| [loklamlok/dsh-queue-director](https://github.com/loklamlok/dsh-queue-director) | Host | `dsh-queue-director` | Git only | 0 | DSH web plugin: reorder queued messages (up / down / top / bottom) before the agent processes them. |
| [lubaiUwU/DSH-WeChatClawBot](https://github.com/lubaiUwU/DSH-WeChatClawBot) | Host | `dsh-wechat-clawbot` | Git only | 0 | DSH plugin: WeChat floating-ball bridge (QR login, message relay to agent) |
| [msilita/dsh-graceful-restart](https://github.com/msilita/dsh-graceful-restart) | Client (Web UI) | `dsh-graceful-restart` | Git only | 0 |  |
| [pycjava/dsh-usage](https://github.com/pycjava/dsh-usage) | Client + Host | `dsh-usage-ledger` | Git only | 0 | DSH 跨会话 token 记账插件：进程内每一次模型调用都记入本地 SQLite 账本，设置面板一眼看全、agent 一问即答。只做 token,不做钱。 |
| [qschen86/dsh-calendar-todo](https://github.com/qschen86/dsh-calendar-todo) | Client + Host | `dsh-calendar-todo` | Git only | 0 | DSH web plugin: per-folder calendar + todo app with iCal import and conversation tools |
| [qschen86/dsh-web-restart](https://github.com/qschen86/dsh-web-restart) | Client (Web UI) | `dsh-web-restart` | Git only | 0 | DSH web plugin: restart the dsh web service from the UI, with optional auto-continue |
| [qschen86/dsh-workspace-dock](https://github.com/qschen86/dsh-workspace-dock) | Client (Web UI) | `dsh-workspace-dock` | Git only | 0 | DSH web plugin: workspace dock rail left of the sidebar |
| [redfox-data/redfox-community-dsh](https://github.com/redfox-data/redfox-community-dsh) | Host | `redfox-community-dsh` | Git only | 0 | The official bundle plugin package of DSH (DeepSeek Harness) from RedFoxHub: Over 100 social media data skills |
| [rencl3/dsh-matlab-bridge](https://github.com/rencl3/dsh-matlab-bridge) | Host | `dsh-matlab-bridge` | Git only | 0 | DSH plugin + MATLAB daemon bridging AI and MATLAB R2025b via file IPC — 20 matlab_* tools for editor code and  |
| [roushanyyzz/dsh-diff-vis](https://github.com/roushanyyzz/dsh-diff-vis) | Host | `dsh-diff-vis` | Git only | 0 | 让 AI 在对话中每修改一个文件，你就立刻看到它改了什么。 DSH（DeepSeek Harness）插件：拦截 write / edit 工具调用，在对话流的工具卡片位置直接渲染 git 风格文件差异——支持上下对比与 |
| [ruby1304/dsh-public-plugins](https://github.com/ruby1304/dsh-public-plugins) | Host | `dsh-plugin-eval-harness` | Git only | 0 | Public, reusable DeepSeek Harness plugins and skills: workflow canvas toolkit, blind eval harness, LLM cost la |
| [shukookie/dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper) | Client (Web UI) | `dsh-plugin-wallpaper` | Git only | 0 | Wallpaper switcher for DeepSeek Harness - sidebar picker with local image upload, dim slider, and one-click ne |
| [warmwine/dsh-memoryleak](https://github.com/warmwine/dsh-memoryleak) | Host | `dsh-memoryleak` | Git only | 0 | 基于dsh的知识库和待办管理工具 |
| [weijunliang23/dsh-stzb](https://github.com/weijunliang23/dsh-stzb) | Client (Web UI) | `dsh-stzb` | Git only | 0 | DSH Web 率土之滨风格皮肤 |
| [wolfsonliu/dsh-file-explorer](https://github.com/wolfsonliu/dsh-file-explorer) | Client (Web UI) | `@dsh-external/dsh-file-explorer` | Git only | 0 | A floating file-explorer panel for DSH Web — browse the workspace file tree, preview files, and extend preview |
| [xingyingyuzhui/dsh-chat-tune](https://github.com/xingyingyuzhui/dsh-chat-tune) | Client (Web UI) | `dsh-chat-tune` | Git only | 0 | DeepSeek Harness plugin: tune chat font, width, line height, and paragraph spacing |
| [xxxrickymorty-dev/dsh-rick](https://github.com/xxxrickymorty-dev/dsh-rick) | Client (Web UI) | `dsh-rick` | Git only | 0 | C-137 skin for DeepSeek Harness: 28 posters, custom scenes, and overlay pets (Rick, Morty, portal gun). |
| [y0urday/dsh-arcgis-pro-bridge](https://github.com/y0urday/dsh-arcgis-pro-bridge) | Host | `dsh-arcgis-pro-bridge` | Git only | 0 | ArcGIS Pro bridge plugin for DeepSeek Harness — tools exposed as mcp__arcgis__* |
| [yzlin499/dsh-yzlin499-easy-plugins](https://github.com/yzlin499/dsh-yzlin499-easy-plugins) | Host | `dsh-mcp-compat` | Git only | 0 | 非常好的小工具，毛坯房DSH可以看看。 |
| [addxing/conservative-code-edits](https://github.com/addxing/conservative-code-edits) | Host | `dsh-skill-conservative-code-edits` | Git only | 0 | 面向各类 AI 编程代理的保守代码修改守则 Skill，用于约束代理在已有项目中进行最小必要改动，避免无关重构，保护公共基础代码，并在支持深色模式的项目中优先使用动态颜色资源     An agent skill for |
| [addxing/function-extraction](https://github.com/addxing/function-extraction) | Host | `dsh-skill-function-extraction` | Git only | 0 | 面向 AI 编程代理的功能链路提取 Skill。它可以从项目代码中提取某个具体功能的完整实现链路，并生成包含业务逻辑、数据流、异常处理、模块依赖和 Mermaid 图表的技术开发文档     A skill for ex |
| [oukeming64-tech/codex-skills](https://github.com/oukeming64-tech/codex-skills) | Host | `@oukeming64-tech/codex-skills` | Git only | 0 | Evidence-first agent skills for handoff auditing and documentation sync, packaged for Codex and DeepSeek Harne |
| [addxing/replicate-android-feature](https://github.com/addxing/replicate-android-feature) | Host | `dsh-skill-replicate-android-feature` | Git only | 0 | 面向 AI 编程代理的 Android 功能复刻 Skill。它以 Android 源项目的实际实现为依据，将指定功能完整迁移到其他项目或平台，并保持功能链路、业务行为、UI 和可复用资源一致     An agent  |
| [chunkithwang/craft-mermaid](https://github.com/chunkithwang/craft-mermaid) | Host | `craft-mermaid` | Git only | 0 | Portable Craft-style Mermaid generation, rendering, and visual review skill for AI coding agents |
| [jcaiagent7143-ui/sendpage-mcp](https://github.com/jcaiagent7143-ui/sendpage-mcp) | Client + Host | `dsh-sendpage` | Git only | 0 | MCP server for SendPage — publish an HTML document as a shareable link, with PDF/image/Word export. Streamable |
| [Arnoldkevin/prismrelay-mcp](https://github.com/Arnoldkevin/prismrelay-mcp) | Host | `prismrelay-mcp` | Git only | 0 | Vision-first local MCP that gives text-only Agents image understanding through Agnes AI (BYOK). |
| [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | Unattributed | `@mnemon-dev/dsh-mnemon` | Git only | 474 | LLM-supervised persistent memory for AI agents — graph-based recall, cross-session knowledge, single binary. W |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Unattributed | `misakanet` | Git only | 404 | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verifie |
| [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) | Unattributed | `humanizer-ru-dsh` | Git only | 101 | Скилл для ИИ-агентов: находит и убирает следы машинной генерации из русского текста. 38 паттернов, 39 regex-ма |
| [zuorn/Tydora](https://github.com/zuorn/Tydora) | Unattributed | `tydora` | Git only | 32 | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional link |
| [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) | Unattributed | `dsh-status-rotator` | Git only | 21 | A DeepSeek Harness (dsh) web plugin that replaces the "Deep diving…" turn-status label with phase-aware, typew |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Unattributed | `cordis-fabric-bundle` | Git only | 14 | 一种类似MC Fabric的hook处理器 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | Unattributed | `deepseek-manners` | Git only | 13 | DSH 插件：给每次消息后注入感谢语 \| DSH plugin: inject a thank-you line after every message (deepseek-manners) |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | Unattributed | `dsh-code-ide` | Git only | 12 | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | Unattributed | `dsh-whale-musume` | Git only | 12 | DeepSeek Harness 桌宠插件：元气鲸鱼娘陪你写代码 🐋 |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Unattributed | `@your-scope/dsh-plugin-template` | Git only | 11 | 基于原turtle ui官方仓库创建的plugin模板仓库 |
| [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit) | Unattributed | `harness-ai-kit-plugin` | Git only | 10 | Package manager for AI agent assets — 42 skills, 5 CLIs, 1 plugin. Skills for AI/LLM agent engineering, eval-d |
| [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Unattributed | `dsh-mermaid` | Git only | 7 | 在 DSH Web 会话中把 Mermaid 代码围栏渲染为 SVG 图表 \| Render Mermaid code fences as SVG diagrams in DSH Web messages |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Unattributed | `dizzy-dsh` | Git only | 7 | My DSH plugins |
| [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | Unattributed | `dsh-ocgo-lite` | Git only | 7 | OpenCode Go 用量常驻条：套餐余量圆环 + token/花费实时统计（本次会话/全部范围 + 按模型联动，官方实时定价），一键复制 API Key。OpenCode Go usage bar for DeepS |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | Unattributed | `@loserfox/git-identity` | Git only | 7 | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | Git only | 6 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | Unattributed | `dsh-plugin-ds-api-usage` | Git only | 6 |  |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | Unattributed | `@dsh-external/dsh-whale-galgame` | Git only | 5 | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) | Unattributed | `deeptop-bridge` | Git only | 5 | Deeptop, a lightweight native desktop client for DeepSeek Harness. |
| [GrayCodeTeam/graycode-for-dsh](https://github.com/GrayCodeTeam/graycode-for-dsh) | Unattributed | `@graycode/dsh` | Git only | 5 |  |
| [Tisitan/dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | Unattributed | `dsh-live2d-companion` | Git only | 4 | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [loster12520/dsh-btw](https://github.com/loster12520/dsh-btw) | Unattributed | `dsh-btw` | Git only | 4 | deepseek harness版btw插件 |
| [AKS1st/dsh-sysmon](https://github.com/AKS1st/dsh-sysmon) | Unattributed | `dsh-sysmon` | Git only | 3 | DSH Web 系统状态悬浮窗：实时 CPU/内存/磁盘占用率 \| System-status overlay showing live CPU, memory and disk usage for DSH Web |
| [YRN-playmaker/dsh-wallpaper_share](https://github.com/YRN-playmaker/dsh-wallpaper_share) | Unattributed | `we-sync-dsh` | Git only | 3 | A "wallpaper engine" synchronization plugin mounted on the deepseek harness can synchronize static wallpapers |
| [kermanx/dshw](https://github.com/kermanx/dshw) | Unattributed | `dshw` | Git only | 3 | PR workflow plugin for DeepSeek Harness |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | Unattributed | `dsh-prompt-studio` | Git only | 3 | DSH 插件：编辑用户与内置 system-prompt 段落，实时预览（Prompt Studio） \| DSH plugin: edit user and built-in system-prompt sectio |
| [weishao2/tizhuang-agent-skills](https://github.com/weishao2/tizhuang-agent-skills) | Unattributed | `dsh-tizhuang-question-bank` | Git only | 3 | 2000万+中小学K12真题题库 Skill：免费注册、免费抽题、教材/章节/知识点检索、练习测验与AI智能组卷。 |
| [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | Unattributed | `dsh-daily-progress` | Git only | 3 |  |
| [imtanhui/dsh-plugin-butler](https://github.com/imtanhui/dsh-plugin-butler) | Unattributed | `dsh-plugin-butler` | Git only | 2 |  |
| [kanneiren/dsh-windows-manager](https://github.com/kanneiren/dsh-windows-manager) | Unattributed | `dsh-windows-manager-plugin` | Git only | 2 | Lightweight DeepSeek Harness manager for Windows \| 轻量级 DeepSeek Harness Windows 托盘管理器 \| tray |
| [pyf2818/dsh-bili-widget](https://github.com/pyf2818/dsh-bili-widget) | Unattributed | `@dsh-external/dsh-bili-widget` | Git only | 2 | 🎬 DSH (DeepSeek Harness) B站悬浮看片插件：边 coding 边刷视频。推荐/热门/排行/搜索/关注UP主、自动连播、迷你模式、历史持久化 |
| [xingyingyuzhui/dsh-session-actions](https://github.com/xingyingyuzhui/dsh-session-actions) | Unattributed | `dsh-session-actions` | Git only | 2 |  |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | Unattributed | `dsh-task-progress-notifier` | Git only | 2 |  |
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | Unattributed | `dsh-reasoning-translator` | Git only | 2 | DeepSeek Harness plugin: make the model write its chain-of-thought in your language |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | Unattributed | `falsify-dsh` | Git only | 2 | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | Unattributed | `dsh-usage-cost` | Git only | 2 | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; in |
| [GPIOX/dsh-api-balance](https://github.com/GPIOX/dsh-api-balance) | Unattributed | `dsh-api-balance-badge` | Git only | 1 | DeepSeek Harness 动态 Cordis 插件：可拖动、可缩放、亚克力质感的 API 余额悬浮徽章 |
| [KUNTING0701/dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg) | Unattributed | `dsh-aurora-bg` | Git only | 1 | DeepSeek Harness (DSH) Web UI - ? CSS transform,? canvas/mask/blur |
| [SnowfallC/dsh-mobile-voice-call](https://github.com/SnowfallC/dsh-mobile-voice-call) | Unattributed | `dsh-mobile-voice-call` | Git only | 1 | App-free mobile voice calls with existing DeepSeek Harness sessions. |
| [baiyingawa/everyconnect](https://github.com/baiyingawa/everyconnect) | Unattributed | `everyconnect` | Git only | 1 | DSH插件，用于将dsh连接至微信、qq等软件，通过微claw插件、qq机器人等方式实现 |
| [c-v-c-v/dsh-chat-nav](https://github.com/c-v-c-v/dsh-chat-nav) | Unattributed | `dsh-chat-nav` | Git only | 1 | DeepSeek Harness 聊天快捷导航插件（ChatGPT 式悬停滑出）· A DeepSeek Harness chat quick-nav plugin (ChatGPT-style hover slide- |
| [jesspig/deepseek-harness-desktop](https://github.com/jesspig/deepseek-harness-desktop) | Unattributed | `@dsh-desktop/bundle` | Git only | 1 | 这是一个独立的 Cordis 应用:不改动上游仓库,以官方扩展方式(自定义 profile + bundle + Cordis 插件)把 dsh 跑成原生桌面应用。 |
| [qschen86/dsh-plantuml](https://github.com/qschen86/dsh-plantuml) | Unattributed | `dsh-plantuml` | Git only | 1 | DSH web plugin: render PlantUML fenced blocks in conversation messages as SVG |
| [zemul/dsh-generate-image](https://github.com/zemul/dsh-generate-image) | Unattributed | `dsh-generate-image` | Git only | 1 | DeepSeek Harness 插件：通过本机 OpenAI Codex CLI 生成与编辑图片。 |
| [zhenkun26/dsh-repo-atlas](https://github.com/zhenkun26/dsh-repo-atlas) | Unattributed | `dsh-repo-atlas` | Git only | 1 |  |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | Unattributed | `@bill9109/dsh-conversation-share` | Git only | 1 | 分享任意段落的 DSH 对话 |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | Unattributed | `dsh-payload-capture` | Git only | 1 | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 \| DSH plugin: capture every upstream model API payload to JSON |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Unattributed | `dsh-plugin-rag` | Git only | 1 | Local knowledge base RAG for DeepSeek Harness |
| [904915452/dsh-editor-launcher](https://github.com/904915452/dsh-editor-launcher) | Unattributed | `@zhangqingyu/dsh-editor-launcher` | Git only | 0 | DeepSeek Harness 插件：会话头部「在编辑器中打开」下拉框，自动扫描本地编辑器 |
| [AKS1st/dsh-archived-conversations](https://github.com/AKS1st/dsh-archived-conversations) | Unattributed | `dsh-archived-conversations` | Git only | 0 | Show archived conversations in the DSH Web sidebar footer with read-only message previews. |
| [ArcoCodes/bloome-finance-plugin](https://github.com/ArcoCodes/bloome-finance-plugin) | Unattributed | `bloome-finance-plugin` | Git only | 0 |  |
| [Bob-Bo1/dsh-deepseek-balance](https://github.com/Bob-Bo1/dsh-deepseek-balance) | Unattributed | `deepseek-balance` | Git only | 0 | DSH plugin for viewing DeepSeek API balance and local Flash/Pro usage costs. |
| [CrombastiC/dsh-macos-notify](https://github.com/CrombastiC/dsh-macos-notify) | Unattributed | `dsh-macos-notify` | Git only | 0 |  |
| [HUITianYi/dsh-whale-desktop-launcher](https://github.com/HUITianYi/dsh-whale-desktop-launcher) | Unattributed | `dsh-whale-desktop-launcher` | Git only | 0 | Windows desktop launcher plugin for DeepSeek Harness with a whale-girl icon and clean app-mode window |
| [Hanihahaha/dsh-copy-session-id](https://github.com/Hanihahaha/dsh-copy-session-id) | Unattributed | `dsh-copy-session-id` | Git only | 0 |  |
| [Hanihahaha/dsh-open-workspace-folder](https://github.com/Hanihahaha/dsh-open-workspace-folder) | Unattributed | `dsh-open-workspace-folder` | Git only | 0 |  |
| [LeslieWylie/dsh-gateway-billing](https://github.com/LeslieWylie/dsh-gateway-billing) | Unattributed | `dsh-gateway-billing` | Git only | 0 | Per-conversation LLM billing display for the DSH web composer, for anyone self-hosting a New API / One API-com |
| [Nixz0824/dsh-usage-stats-plus](https://github.com/Nixz0824/dsh-usage-stats-plus) | Unattributed | `dsh-usage-stats-plus` | Git only | 0 | DSH 用量与余额面板增强版：官方余额实时拉取、逐事件精确计价、全渠道消耗估算、Codex 风格活动时间轴（Fork of dsh-usage-stats, MIT） |
| [Nixz0824/dsh-sound-cue](https://github.com/Nixz0824/dsh-sound-cue) | Unattributed | `@dsh-external/dsh-sound-cue` | Git only | 0 | DSH sound cues: ding when you need to act, another when a task finishes / 需要操作与任务完成时的简短提示音（Web Audio，无弹窗） |
| [Zenith-Lxz/dsh-foundry](https://github.com/Zenith-Lxz/dsh-foundry) | Unattributed | `@dsh-foundry/daily-bundle` | Git only | 0 | DSH Foundry — zero-patch desktop distribution of official DeepSeek Harness |
| [changlianxiya-139/dsh-ambiguity-handling](https://github.com/changlianxiya-139/dsh-ambiguity-handling) | Unattributed | `dsh-ambiguity-handling` | Git only | 0 | Append ambiguity-handling rules to the DeepSeek Harness system prompt |
| [chuyue-1/deepseek-harness-gamepad-cursor](https://github.com/chuyue-1/deepseek-harness-gamepad-cursor) | Unattributed | `@dsh-user/gamepad-cursor` | Git only | 0 | DeepSeek Harness 手柄光标插件 / Gamepad cursor plugin for DeepSeek Harness |
| [flyhigao/dsh-sticky-notes](https://github.com/flyhigao/dsh-sticky-notes) | Unattributed | `dsh-sticky-notes` | Git only | 0 |  |
| [hajimilvdou/dsh-storecloud](https://github.com/hajimilvdou/dsh-storecloud) | Unattributed | `dsh-storecloud` | Git only | 0 | 集插件及agent商城，云端同步与订阅插件组为一体的dsh插件项目 |
| [hhj2714/dsh-whale-btn](https://github.com/hhj2714/dsh-whale-btn) | Unattributed | `dsh-whale-btn` | Git only | 0 | 桌面悬浮鲸鱼按钮：置顶可拖动，单击聚焦/打开 DeepSeek Harness 窗口 (DSH host plugin, macOS arm64) |
| [jackyoung022/dsh-session-canvas](https://github.com/jackyoung022/dsh-session-canvas) | Unattributed | `@jackyoung022/dsh-session-canvas` | Git only | 0 | dsh插件，基于session的画布，可进行多session汇总 |
| [kimirong/dsher-bbs-plugin](https://github.com/kimirong/dsher-bbs-plugin) | Unattributed | `@kimirong/dsher-bbs-plugin` | Git only | 0 | bbs.dsher.cn 社区面板 — DeepSeek Harness Web 的 bundle 插件：右下角悬浮入口，浏览/搜索/发帖/回帖/点赞/粘贴截图上传/一键登录。dsh plugin --profile w |
| [lhf6623/dsh-vibe](https://github.com/lhf6623/dsh-vibe) | Unattributed | `dsh-vibe` | Git only | 0 | DeepSeek Harness 输入氛围插件：键盘/鼠标实时高亮，打字火焰、输入抖动、回答提示音与整页抖动 |
| [nan1010082085/dsh-plugin-ima-sync](https://github.com/nan1010082085/dsh-plugin-ima-sync) | Unattributed | `dsh-plugin-ima-sync` | Git only | 0 | DSH plugin: auto-upload conversation progress to Tencent IMA (daily note + Work knowledge base) |
| [uigdwunm/dsh-process-fold](https://github.com/uigdwunm/dsh-process-fold) | Unattributed | `dsh-process-fold` | Git only | 0 | Fold DSH Web execution steps into compact expandable process boxes. |
| [wolfsonliu/dsh-file-explorer-preview-code](https://github.com/wolfsonliu/dsh-file-explorer-preview-code) | Unattributed | `@dsh-external/dsh-file-explorer-preview-code` | Git only | 0 | DSH Web file-explorer preview plugin: code preview & editor for DSH Web — per-language syntax highlighting, in |
| [wolfsonliu/dsh-file-explorer-preview-molstar](https://github.com/wolfsonliu/dsh-file-explorer-preview-molstar) | Unattributed | `@dsh-external/dsh-file-explorer-preview-molstar` | Git only | 0 | file-explorer preview plugin: protein 3D structure viewer for DSH Web — interactive previews of .cif, .pdb, an |
| [wolfsonliu/dsh-file-explorer-preview-sequence](https://github.com/wolfsonliu/dsh-file-explorer-preview-sequence) | Unattributed | `@dsh-external/dsh-file-explorer-preview-sequence` | Git only | 0 | DSH Web file-explorer preview plugin: renders FASTA / GenBank / JBEI / SnapGene / SBOL sequences with the SeqV |
| [z-time-007/whale-desktop-kit](https://github.com/z-time-007/whale-desktop-kit) | Unattributed | `dsh-whale-desktop-kit` | Git only | 0 | DeepSeek Harness 桌面增强套件（鲸跃）：壁纸、黑鲸鱼桌宠、工作区/对话框透明度、顶部快捷栏 + 个人助理（本地秘书/文档生成）、Office 文档安全读取、余额与 token 用量数据源、安全自动批准，外 |
| [Paloma966/dsh-kaiju](https://github.com/Paloma966/dsh-kaiju) | Unattributed | `dsh-kaiju` | Git only | 0 | 让 AI 通过「截图→推理→注入键鼠→再截图」视觉回环，用 Kaiju Engine 开发游戏的 DSH 插件 |

## Blocked by reserved scope (43)

These repositories satisfy the bundle contract, but their `package.json` names
them under `@deepseek-ai/`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any `dsh plugin add @deepseek-ai/...` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app) | Host | `@deepseek-ai/dsh-product-bridge` | **blocked** | 392 | DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, pl |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | Host | `@deepseek-ai/dsh-plugin-check` | **blocked** | 24 | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Host | `@deepseek-ai/dsh-toolkit` | **blocked** | 21 | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Host | `@deepseek-ai/dsh-security-audit` | **blocked** | 12 | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Host | `@deepseek-ai/dsh-session-health` | **blocked** | 8 | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Client + Host | `@deepseek-ai/dsh-deepresearch` | **blocked** | 8 |  |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | Host | `@deepseek-ai/dsh-tui` | **blocked** | 7 | as is, no warranty |
| [le-soleil-se-couche/dsh-token-cost](https://github.com/le-soleil-se-couche/dsh-token-cost) | Client + Host | `@deepseek-ai/dsh-token-cost` | **blocked** | 6 | 在对话页面直接查看消耗费用（嵌入官方底部状态条，点击看明细）；设置中汇总用量与费用，并可自定义其他模型单价 |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | Host | `@deepseek-ai/dsh-tool-calculator` | **blocked** | 6 | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | Host | `@deepseek-ai/dsh-tool-stat` | **blocked** | 6 | DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 |
| [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Host | `@deepseek-ai/dsh-qwen-mm` | **blocked** | 4 | Qwen-MM-Plugins支持 |
| [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | Host | `@deepseek-ai/dsh-tool-time` | **blocked** | 4 | DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖 |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | Host | `@deepseek-ai/dsh-tool-csv` | **blocked** | 4 | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 |
| [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | Host | `@deepseek-ai/dsh-tool-markdown` | **blocked** | 4 | DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 |
| [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | Host | `@deepseek-ai/dsh-tool-diff` | **blocked** | 4 | DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具 |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | Client + Host | `@deepseek-ai/dsh-notebooks` | **blocked** | 4 |  |
| [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | Host | `@deepseek-ai/dsh-tool-json` | **blocked** | 3 | DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | Host | `@deepseek-ai/dsh-tool-encoding` | **blocked** | 3 | DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖 |
| [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | Host | `@deepseek-ai/dsh-tool-regex` | **blocked** | 3 | DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具 |
| [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | Host | `@deepseek-ai/dsh-sandbox-microsandbox` | **blocked** | 3 | microsandbox支持 |
| [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | Host | `@deepseek-ai/dsh-tool-schema` | **blocked** | 3 | DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行 |
| [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | Client + Host | `@deepseek-ai/dsh-auto-chess` | **blocked** | 3 | DSH Web里的自走棋插件：人机对战或双AI对弈 |
| [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | Host | `@deepseek-ai/dsh-sandbox-nono` | **blocked** | 3 | nono沙盒支持 |
| [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | Client (Web UI) | `@deepseek-ai/dsh-ultra-ui` | **blocked** | 3 |  |
| [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | Client + Host | `@deepseek-ai/dsh-daily-fortune` | **blocked** | 3 | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | Client + Host | `@deepseek-ai/dsh-fun-weather` | **blocked** | 3 | DSH weather tab and weather-following themes powered by Open-Meteo |
| [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | Client + Host | `@deepseek-ai/dsh-fun-typewriter` | **blocked** | 3 | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | Client + Host | `@deepseek-ai/dsh-pet-corner` | **blocked** | 3 | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | Host | `@deepseek-ai/dsh-sandbox-mxc` | **blocked** | 2 | 微软跨平台沙盒支持 |
| [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) | Client (Web UI) | `@deepseek-ai/dsh-client-web-component` | **blocked** | 2 | web-components支持 |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | Client + Host | `@deepseek-ai/dsh-ex-setting` | **blocked** | 2 | DSH的设置扩展 |
| [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Host | `@deepseek-ai/dsh-agent-budget` | **blocked** | 2 | Native Harness agent-tree token budget plugin |
| [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) | Host | `@deepseek-ai/dsh-paseo` | **blocked** | 2 | DSH 的paseo插件扩展支持 |
| [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Host | `@deepseek-ai/dsh-tool-search` | **blocked** | 2 | Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness |
| [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) | Host | `@deepseek-ai/dsh-trace` | **blocked** | 2 | DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP. |
| [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | Host | `@deepseek-ai/dsh-tool-scout` | **blocked** | 2 | 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。 |
| [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Client (Web UI) | `@deepseek-ai/dsh-turn-navigator` | **blocked** | 2 | Private DSH Web turn navigation plugin |
| [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | Client + Host | `@deepseek-ai/dsh-lmstudio-vision` | **blocked** | 1 | 让你能通过deepseek harness调用LM studio加载的本地视觉模型 |
| [ZTuTZ/dsh-plugins](https://github.com/ZTuTZ/dsh-plugins) | Client (Web UI) | `@deepseek-ai/dsh-marvel-skin` | **blocked** | 1 | My personal plugin collection for DeepSeek Harness (DSH) — everything is a plugin. |
| [lmzhen/dsh-evolution](https://github.com/lmzhen/dsh-evolution) | Unattributed | `@deepseek-ai/dsh-evolution-host` | **blocked** | 1 | Hermes-inspired agent self-evolution plugin family, purpose-built for DeepSeek Harness |
| [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) | Client (Web UI) | `@deepseek-ai/dsh-client-tonghuashun` | **blocked** | 4 | 仿同花顺的webui插件 |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | Client (Web UI) | `@deepseek-ai/dsh-client-ui-skin-miku` | **blocked** | 2 | 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题 |
| [Stu-KatoMegumi/dsh-weixin](https://github.com/Stu-KatoMegumi/dsh-weixin) | Unattributed | `@deepseek-ai/dsh-weixin` | **blocked** | 2 | [STU-XIE] 将你的本地dsh接入微信，尝试使用微信进行工作吧，至少比openclaw的体验要好很多 |
