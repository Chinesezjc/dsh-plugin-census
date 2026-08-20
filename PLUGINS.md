# DSH Plugin Catalogue

Generated 2026-08-20 from 3201 contract-verified repositories.

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

### Host plugins (943)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | Host | `@memtensor/memos-local-plugin` | npm | 10823 | Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill r |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Host | `@deepseek-harness-tui/dsh-tui` | npm | 2116 | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured  |
| [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | Host | `@mem9/dsh-plugin` | npm | 1190 | Unlimited memory for OpenClaw |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | Host | `@agentrq/dsh-plugin-agentrq` | npm | 1082 | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agent |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Host | `aegis` | npm | 1077 | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across lo |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Host | `@huiliyi37/dsh-tianshu-tui` | npm | 221 | 官方 DeepSeek Harness 的交互式终端 UI 插件：自研 ANSI 极简渲染核心（由作者自己的开源项目天枢 Tui 演进）、流式 Markdown/工具卡、多会话 tab、16+ 主题、slash 命令与选 |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | Host | `dsh-code-review` | npm | 163 | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness |
| [cocofhu/anime-find](https://github.com/cocofhu/anime-find) | Host | `@cocofhu/anime-find` | npm | 152 | DeepSeek Harness 搜番插件：对话内多源搜索番剧，卡片展示 Bangumi 评分与详情，支持复制磁力。 |
| [zhaoolee/notes](https://github.com/zhaoolee/notes) | Host | `@zhaoolee/dsh-notes` | npm | 148 | 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片 |
| [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | Host | `@anysearch/anysearch-dsh` | npm | 147 | AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Host | `dsh-cost-meter` | npm | 120 | DeepSeek Harness session cost meter plugin: session/daily cost, budget, history, OpenCode Go quota, official & |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Host | `@nanmicoder/dsh-auto-mode` | npm | 113 | Safe automatic permissions for DeepSeek Harness. |
| [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | Host | `@tencent-connect/dsh-qqbot` | npm | 67 | 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件 |
| [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) | Host | `dsh-find-plugin` | npm | 66 | Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件 |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | Host | `@zseven-w/dsh-crew` | npm | 65 | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Host | `dsh-memento` | npm | 59 | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.me |
| [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion) | Host | `@wxkingstar/specfusion-dsh` | npm | 53 | 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20 个中国开放平台的 65,600+ 篇 API 文档；零配置，支持 Skill |
| [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) | Host | `deepseek-flow` | npm | 46 |  |
| [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) | Host | `dsh-mobile` | npm | 44 | DeepSeek Harness 移动端适配与安全局域网访问插件，支持 Android App 和手机浏览器。 |
| [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | Host | `@univer-cli/dsh-univer-plugin` | npm | 40 | Preview, create, edit office spreadsheets, docs & slides inside DeepSeek Harness. Power by Univer. |
| [zenx0x/allinluna](https://github.com/zenx0x/allinluna) | Host | `@zenx0x/allinflash` | npm | 36 | Resource-aware multi-agent orchestration for Codex and DeepSeek Harness (All in Flash DSH plugin) |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Host | `ax-feishu-bridge` | npm | 34 | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Host | `dsh-interconnect` | npm | 34 | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Host | `billion-context-dsh` | npm | 30 | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides wh |
| [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) | Host | `@modusensus/dsh-mneme` | npm | 30 | Structured memory engine for DeepSeek Harness. Offline semantic search, entity-attribute-timeline, autoDream s |
| [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | Host | `dsh-im-gateway` | npm | 30 | 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 \| Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents t |
| [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | Host | `dsh-free-search` | npm | 29 | Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Host | `dsh-web-search-pro` | npm | 28 | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform b |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Host | `dsh-code` | npm | 27 | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制和高级特性与Codex CLI 、Claude Code 等主流交互机制，打造的 DSH- |
| [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Host | `pi2dsh` | npm | 25 | Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plu |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | Host | `dsh-lark-bot` | npm | 24 | DeepSeek Harness (dsh) 接入飞书/Lark bot，扫码即用：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃后飞书仍可自救）。A sc |
| [6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) | Host | `dsh-wsl-workspace` | npm | 23 | WSL workspace support for DeepSeek Harness——无缝的 WSL 工作区使用体验，无需在 WSL 之中再安装一个dsh，安装该插件后在 GUI 里直接添加 WSL 工作区即可。WSL |
| [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | Host | `dsh-whale-report` | npm | 22 | 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。 |
| [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Host | `@dsh-tui/dsh-tui` | npm | 22 | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle |
| [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | Host | `dsh-lark-link` | npm | 21 | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based co |
| [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | Host | `dsh-workbench-plugin` | npm | 21 | Deepseek-harness-workbench-plugin |
| [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) | Host | `@furongjun1999/dsh-memory` | npm | 21 | AGI 的长期记忆基础设施。让 AI Agent 拥有不可遗忘的自我。跨会话记忆 · 持续学习 · 可审计信任（智能论 v3.2） |
| [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) | Host | `dsh-deepread` | npm | 21 | Evidence-first deep reading for AI agents — trace claims, evidence, confidence and knowledge maps across artic |
| [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | Host | `dsh-clawrouter` | npm | 19 | A safety gate for DeepSeek Harness: a stronger model reviews dangerous tool calls before they run. Plus vision |
| [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) | Host | `dsh-agy` | npm | 19 | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotati |
| [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) | Host | `dsh-plugin-product-subagents` | npm | 18 | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durab |
| [ma-pony/deepspider](https://github.com/ma-pony/deepspider) | Host | `deepspider` | npm | 18 | AI 原生智能爬虫与 JavaScript 逆向工程平台，基于 DSH、Patchright/CDP 与独立语义运行时，从浏览器证据恢复参数生成逻辑并交付可验证 Solver。 |
| [CheshireJCat/blender](https://github.com/CheshireJCat/blender) | Host | `dsh-blender` | npm | 18 | DeepSeek Harness plugin for complete Blender 3D modeling, reconstruction, rendering, validation, and export wo |
| [ZRui-C/dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) | Host | `dsh-computer-use` | npm | 18 | Text-first browser & background macOS control for DeepSeek Harness (DSH): target the right process and window  |
| [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | Host | `dsh-quant` | npm | 17 | "🐳 Dsh-Quant: The Everything-Plugin Ai native Quant OS " |
| [agi-fans/oh-my-dsh](https://github.com/agi-fans/oh-my-dsh) | Host | `@agi-fans/oh-my-dsh` | npm | 17 | A focused, keyboard-first DeepSeek coding agent built on the plugin architecture of DeepSeek Harness and inspi |
| [taxueseek/dsh-files](https://github.com/taxueseek/dsh-files) | Host | `dsh-files` | npm | 16 | DeepSeek Harness dual-face plugin: session-isolated file upload with colorful composer cards + read_document t |
| [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) | Host | `dsh-llm-codebuddy` | npm | 16 | 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分 |
| [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | Host | `dsh-plugin-writing-guard` | npm | 15 | DeepSeek Harness (DSH) academic writing guard for papers — 论文去AI味 / AI-writing style detection, evidence prese |
| [omdsh-dev/dsh-office](https://github.com/omdsh-dev/dsh-office) | Host | `@huiliyi37/dsh-office` | npm | 15 | 办公三件套！Office document tools for DeepSeek Harness (dsh): generate, read, and edit spreadsheets (.xlsx), PDFs, a |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Host | `dsh-continual-evolve` | npm | 14 | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refine |
| [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Host | `dsh-llm-codex` | npm | 14 | DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key \| DSH plugin: reuse your Codex  |
| [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) | Host | `dsh-meme` | npm | 14 | DeepSeek Harness 的表情包插件——找得到、发得出、学得会，纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包 、多种风格随意切换。 |
| [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) | Host | `@dsh-feishu/dsh-feishu` | npm | 14 | The Feishu UI for DeepSeek Harness  — a panel-driven control console: every slash command a button on the ⚙️ c |
| [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | Host | `project-blueprint` | npm | 13 | Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 6 |
| [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) | Host | `dsh-better-deepseek` | npm | 13 | DeepSeek Harness bridge plugin for Better DeepSeek Chrome extension. |
| [HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) | Host | `dsh-file-upload` | npm | 13 | DeepSeek Harness (dsh) file-message plugin: Claude-style drag-and-drop / paperclip upload, content sniffing, d |
| [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Host | `@openma/deepseek-harness-acp` | npm | 12 | ACP server implementation for DeepSeek harness. dsh-acp |
| [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) | Host | `@linenxi-ctrl/dsh-vision` | npm | 12 | 为 DeepSeek Harness 增加外挂识图模型：圆形鲸鱼按钮、发送图片识图自动回传、模型自主截图+识图工具、多协议自动适配、小白一键安装（未装 Node.js 自动下载） |
| [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) | Host | `@wnjxyk/dsh-codex-oauth` | npm | 12 | Use your OpenAI subscription with DeepSeek Harness to access GPT models, image generation, and web search. |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Host | `dsh-better-edit` | npm | 11 | Hash-anchored read/edit/undo_last_edit tools for DeepSeek Harness (dsh) |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | Host | `@alib8b8/dsh-plugin-aflare` | npm | 11 | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · |
| [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) | Host | `@xlight-oss/visionary-dsh` | npm | 11 | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Host | `dsh-sentinel` | npm | 11 | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the  |
| [Weaxs/stock-analysis-plugin](https://github.com/Weaxs/stock-analysis-plugin) | Host | `@weaxs/dsh-stock-analysis` | npm | 11 | Stock analysis extension for Pi Agent — lightweight market data tools + strategy skills |
| [XMoon/dsh-pi-tui](https://github.com/XMoon/dsh-pi-tui) | Host | `@xmoon76/dsh-pi-tui` | npm | 11 | A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui |
| [sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) | Host | `dsh-win32` | npm | 11 | 在 Windows 上把 DSH 用起来。一行装好极简模式的持久 shell，沙箱内也能用 \| Get DSH working on Windows: persistent shell for Minimal mode |
| [Co-Engram/Co-Engram](https://github.com/Co-Engram/Co-Engram) | Host | `@co-engram/dsh` | npm | 10 | Self-evolving team memory |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | Host | `dsh-record-replay` | npm | 10 | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record- |
| [boxeryao/dsh-mini-tui](https://github.com/boxeryao/dsh-mini-tui) | Host | `dsh-mini-tui` | npm | 10 | DSH-TUI: a lightweight and fast terminal plugin connected directly to the DSH runtime. |
| [linyp/dsh-plugin-langfuse](https://github.com/linyp/dsh-plugin-langfuse) | Host | `dsh-plugin-langfuse` | npm | 10 | Langfuse observability for DeepSeek Harness (dsh): exports agent sessions as OpenTelemetry trace trees (GenAI  |
| [Sqhao-O/dsh-docs](https://github.com/Sqhao-O/dsh-docs) | Host | `dsh-doc` | npm | 10 | Fully local document intelligence for DeepSeek Harness. Parse PDF, Office files, images, and scanned documents |
| [LiuMengxuan04/oh-my-dsh](https://github.com/LiuMengxuan04/oh-my-dsh) | Host | `dsh-autopilot` | npm | 10 | Oh My DSH (DSH Autopilot): durable, bounded autonomous development for DeepSeek Harness |
| [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) | Host | `dsh-computer-use` | npm | 10 | Computer Use 插件：虚拟鼠标真人操作 for DeepSeek Harness（screen_observe + computer_click 等 11 个模型友好工具，跨平台 cua-driver 引擎） |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | Host | `@huanlin/dsh-plugin-sleep` | npm | 9 | 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp \| Exposes a sleep tool that pauses for specified ms then returns, with |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | Host | `dsh-balance` | npm | 9 | dsh余额插件. A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, f |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Host | `task-passport` | npm | 9 | Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat l |
| [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | Host | `@chushixixin/dsh-harness-mcp-server` | npm | 9 | Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness) |
| [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) | Host | `dsh-playwright-browser` | npm | 9 | Playwright browser automation for DeepSeek Harness｜面向 DeepSeek Harness 的 Playwright 浏览器自动化插件 |
| [jiezeng2004-design/dsh-chatgpt-bridge](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge) | Host | `dsh-chatgpt-bridge` | npm | 9 | MCP bridge that lets ChatGPT create, view, continue, and control DeepSeek Harness (DSH) agent sessions. |
| [cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) | Host | `dsh-taskboard` | npm | 9 | deepseekharness 任务看板插件 |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Host | `oh-my-dsh` | npm | 8 | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [Owen718/snapgrep](https://github.com/Owen718/snapgrep) | Host | `snapgrep` | npm | 8 | An in-process trigram index that makes code search in Pi&DSH 20-70x faster than ripgrep, with identical result |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Host | `codex-plugin-dsh` | npm | 8 | Use local Codex App Server as a model provider in DeepSeek Harness |
| [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | Host | `dsh-llm-codex-oauth` | npm | 8 | 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `code |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Host | `dsh-checkpoint-rewind` | npm | 8 | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary  |
| [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) | Host | `dsh-compaction-instant` | npm | 8 | LLM-free lossless* compaction engine for DeepSeek Harness |
| [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) | Host | `@zimzaza4/dsh-bash-win` | npm | 8 | 在 Windows 环境中为 DeepSeek Harness 提供 Git Bash 与 WSL 2 bash 工具,含 bwrap 沙箱、审批模式、后台任务 |
| [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | Host | `dsh-telegram-channel` | npm | 8 | DeepSeek Harness Telegram mobile remote: bind live Web sessions (Codex-style). Install: dsh plugin add github: |
| [cogine-ai/dsh-claude-tui](https://github.com/cogine-ai/dsh-claude-tui) | Host | `dsh-claude-tui` | npm | 8 | Claude-Code-Styled TUI for DeepSeek Harness |
| [jiezeng2004-design/dsh-requirements-alignment](https://github.com/jiezeng2004-design/dsh-requirements-alignment) | Host | `dsh-requirements-alignment` | npm | 8 | Lightweight requirement alignment for DeepSeek Harness — align important decisions before execution without a  |
| [wqty123/dsh-browser](https://github.com/wqty123/dsh-browser) | Host | `dsh-builtin-browser` | npm | 8 | Shared real browser plugin for DeepSeek Harness |
| [zhujunpeng12/dsh-memory-system](https://github.com/zhujunpeng12/dsh-memory-system) | Host | `@zhujunpeng12/dsh-memory-system` | npm | 8 | Local-first persistent memory infrastructure for DeepSeek Harness: hot bootstrap, Chinese-BM25 cold recall, le |
| [EchoUser005/dsh-fate-spectrum](https://github.com/EchoUser005/dsh-fate-spectrum) | Host | `dsh-fate-spectrum` | npm | 8 | DeepSeek Harness plugin for Bazi & Zi Wei Dou Shu — deterministic, offline fate-chart calculation for AI agent |
| [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) | Host | `dsh-knowledge` | npm | 7 | Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management  |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Host | `dsh-grafana` | npm | 7 | Paste a Grafana dashboard URL and fine-tune it through conversation with DeepSeek Harness — 贴大盘 URL，对话微调，写回 Gr |
| [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | Host | `dsh-ssh` | npm | 7 | SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ss |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | Host | `dsh-openai-codex-auth` | npm | 7 | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 7 | Bidirectional Lark/Feishu controller for DeepSeek Harness |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Host | `deepseek-harness-tui` | npm | 7 | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals |
| [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) | Host | `dsh-weather` | npm | 7 | Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key |
| [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) | Host | `dsh-pdf` | npm | 7 | PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key) |
| [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) | Host | `dsh-overleaf` | npm | 7 | Connect Overleaf projects to DeepSeek Harness (DSH) through OverleafMCP and MCP tools. |
| [poplarity/dsh-science-workbench](https://github.com/poplarity/dsh-science-workbench) | Host | `dsh-science-workbench` | npm | 7 | A reproducible science workbench plugin for the DeepSeek Harness: agent-driven cells, inline figures with feed |
| [x2802490130-prog/dsh-tool-writing](https://github.com/x2802490130-prog/dsh-tool-writing) | Host | `dsh-tool-writing` | npm | 7 | Writing engine for DeepSeek Harness: long-form web-novel orchestration with a separate DeepSeek key, lore mana |
| [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) | Host | `dsh-github-intelligence` | npm | 7 | The most comprehensive developer-intelligence integration for DeepSeek Harness: 196+ read-only tools across 16 |
| [dushaobindoudou/dsh-acp](https://github.com/dushaobindoudou/dsh-acp) | Host | `dsh-acp-server` | npm | 6 | Agent Client Protocol (ACP) server plugin for the DeepSeek Harness (dsh) - drive dsh agents from Zed, any ACP  |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | Host | `dsh-github-connect` | npm | 6 | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, cre |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Host | `@fakechris/dsh-track` | npm | 6 | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 |
| [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 6 | Vision model for DeepSeek Harness \| DeepSeek Harness 外置视觉模型插件 |
| [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) | Host | `dsh-tdai-memory` | npm | 6 | Agent memory for DeepSeek Harness \| DeepSeek Harness 记忆插件 |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Host | `dsh-claude-move` | npm | 6 | Four-source migration wizard for DeepSeek Harness: move Claude Code, Codex, OpenCode and Hermes sessions, memo |
| [anweat/dsh-browser](https://github.com/anweat/dsh-browser) | Host | `@anweat/dsh-browser` | npm | 6 | Self-contained browser runtime plugin for DeepSeek Harness — bundles Playwright (chromium) and OpenCLI as plug |
| [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) | Host | `@tensorlakeai/dsh-sandbox` | npm | 6 | A deepseek harness plugin for tensorlake sandbox |
| [Pheobe-Southwood/dsh-acp-paseo](https://github.com/Pheobe-Southwood/dsh-acp-paseo) | Host | `dsh-acp-paseo` | npm | 6 | dsh (DeepSeek Harness) ⇄ Paseo ACP integration bundle: auto-discovered model catalog, plan/execute modes, thin |
| [RAFOLIE/dsh-desktop-windowos](https://github.com/RAFOLIE/dsh-desktop-windowos) | Host | `dsh-desktop-plugin` | npm | 6 | DeepSeek Harness desktop shell — Tauri v2, tray + native webchat + task-done toasts, single portable exe |
| [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) | Host | `dsh-approval-llm` | npm | 6 | Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by  |
| [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | Host | `dsh-usage-billing` | npm | 6 |  |
| [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) | Host | `dsh-obsidian-assistant` | npm | 6 | DeepSeek Harness 插件（Cordis toolset）：操作本地 Obsidian 知识库（vault），提供搜索、读写笔记、双向链接 / 关系图谱、批量整理，并通过 Obsidian 的 "Local  |
| [Hyna-hla/dsh-remote](https://github.com/Hyna-hla/dsh-remote) | Host | `dsh-remote-access` | npm | 6 | DSH Remote 手机遥控端：把电脑上的 DeepSeek Harness 装进口袋。手机连上就能给 AI 派活、看实时回复、批审批；支持局域网/内网穿透、扫码连接、审批通知、会话管理、多主题换装，还能解锁加密保险库 |
| [yascitom/dsh-opencode-go-box](https://github.com/yascitom/dsh-opencode-go-box) | Host | `dsh-opencode-go-usage` | npm | 6 |  |
| [1847123733/dsh-prompt-optimize](https://github.com/1847123733/dsh-prompt-optimize) | Host | `dsh-prompt-optimize` | npm | 6 | DSH Web plugin: web ui |
| [Flora233333/dsh-minimal-vision](https://github.com/Flora233333/dsh-minimal-vision) | Host | `dsh-tool-vision` | npm | 6 | DSH 极简模式视觉辅助：保持灰测体验所需的首轮干净上下文，同时通过隐藏上下文和按需 Bash 工作流提供视觉分析 \| Vision assistance for DSH minimal mode: preserve  |
| [balcoz/dsh-ocr-local](https://github.com/balcoz/dsh-ocr-local) | Host | `dsh-ocr-local` | npm | 5 | DeepSeek Harness 本地 OCR 插件：粘贴图片，PP-OCRv5 + ONNX Runtime   识别文字，完全离线，支持 TUI 与 Web \| Local OCR plugin for DeepS |
| [AngelosZou/graphlint](https://github.com/AngelosZou/graphlint) | Host | `dsh-graphlint` | npm | 5 |  |
| [GCS-ZHN/mcp-sentinel](https://github.com/GCS-ZHN/mcp-sentinel) | Host | `@gcszhn/mcp-sentinel-deepseek-harness-plugin` | npm | 5 | Harness agent plugin that acts as a sentinel between the AI agent and MCP servers — polling long-running tasks |
| [freehul/sgme](https://github.com/freehul/sgme) | Host | `dsh-sgme` | npm | 5 | 你的 AI，从此记得你——拾光记忆引擎，它记得你们聊过的每一件事，还会主动关心你。 |
| [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Host | `dsh-verification-receipt` | npm | 5 | Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness |
| [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | Host | `dsh-agent-message` | npm | 5 | DeepSeek Harness 跨会话 Agent 通信插件｜Cross-session agent-to-agent messaging with offline delivery, receipts and ses |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | Host | `dsh-lsp-actions` | npm | 5 | LSP action surface for DeepSeek Harness: diagnostics, formatting, completion, code actions, symbols, signature |
| [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) | Host | `dsh-eval-harness` | npm | 5 | DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness |
| [hccccc01333/dsh-excel-chat](https://github.com/hccccc01333/dsh-excel-chat) | Host | `dsh-excel-chat` | npm | 5 | dsh-excel-chat — talk to Excel in DeepSeek Harness: create, edit, repair, and verify spreadsheets by conversat |
| [hellosz/dsh-pets](https://github.com/hellosz/dsh-pets) | Host | `@hellosz/dsh-pets` | npm | 5 |  |
| [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | Host | `dsh-background-agents` | npm | 5 | Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watc |
| [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) | Host | `dsh-orchestrator` | npm | 5 | 【编排模式】为 DeepSeek Harness 提供多智能体编排模式：主智能体分解分派、worker 全网格互通，支持逐 worker 指定模型与思考强度 |
| [qw457812/dotfiles](https://github.com/qw457812/dotfiles) | Host | `@qw457812/dsh-pi-prompts` | npm | 5 | My dotfiles on macOS and Termux, managed with Chezmoi. |
| [Khellendros97/dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) | Host | `dsh-subscription-auth` | npm | 5 | dsh对接openai、grok、anthropic、kimi订阅渠道 |
| [xiaoyuyu6420/dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) | Host | `dsh-backup` | npm | 5 | Backup DeepSeek Harness user data with one command: /backup, scheduled auto-backup, sha256 checksums and rotat |
| [tomowang/dsh-tui](https://github.com/tomowang/dsh-tui) | Host | `@tomowang/dsh-tui` | npm | 5 | An open-source terminal front door for DeepSeek Harness (dsh). |
| [labmimors/dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 5 | DeepSeek Harness MCP tool search for large catalogs: 1,000 MCP tools behind 2 MCP-facing schemas, exact-schema |
| [geohotstan/dsh-computer-use](https://github.com/geohotstan/dsh-computer-use) | Host | `@zibokapi/dsh-codex-computer-use` | npm | 5 | Desktop computer use for DeepSeek Harness: macOS app listing, accessibility-tree window capture, screenshots,  |
| [zhang787jun/dsh-finance](https://github.com/zhang787jun/dsh-finance) | Host | `dsh-finance` | npm | 5 | Finance and accounting workflows for DeepSeek Harness, adapted from Anthropic Finance |
| [zhn1100/dsh-forge](https://github.com/zhn1100/dsh-forge) | Host | `dsh-forge` | npm | 5 | Reproducible DeepSeek Harness plugin development environment |
| [kw78/dsh-office-tools](https://github.com/kw78/dsh-office-tools) | Host | `dsh-office-tools` | npm | 5 | Model-facing Office tools for DeepSeek Harness: Word (.docx), Excel (.xlsx), and PowerPoint (.pptx) create/rea |
| [madage/dsh-self-improved](https://github.com/madage/dsh-self-improved) | Host | `dsh-self-improved` | npm | 5 | DeepSeek Harness long-term memory & self-evolving plugin: L0 capture -> L1 memory extraction -> L2 scene group |
| [1264459640/dsh-trellis](https://github.com/1264459640/dsh-trellis) | Host | `dsh-trellis` | npm | 4 | Self-contained Trellis workflow trigger for DeepSeek Harness (DSH / Cordis) |
| [GXX182/dsh-vision-bridge](https://github.com/GXX182/dsh-vision-bridge) | Host | `dsh-vision-bridge` | npm | 4 | DeepSeek Harness plugin that bridges session images to pluggable vision APIs while keeping DeepSeek as the pri |
| [JMOKSZ/dsh-lark-bridge](https://github.com/JMOKSZ/dsh-lark-bridge) | Host | `@jmoksz/lark-bridge` | npm | 4 | Feishu (Lark) entry point for DeepSeek Harness: drive dsh agents from a Feishu bot with streaming cards, ask/a |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | Host | `@vlln/dsh-loop` | npm | 4 | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) | Host | `dsh-auto-approval` | npm | 4 |  |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Host | `dsh-undo` | npm | 4 | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step an |
| [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) | Host | `dsh-weixin` | npm | 4 | DeepSeek Harness: Weixin |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Host | `@jiesou/dsh-stream-rules` | npm | 4 | 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Ti |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | Host | `dsh-plugin-deepeye` | npm | 4 | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analys |
| [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | Host | `dsh-tool-git` | npm | 4 | Structured safe Git tools for DeepSeek Harness (dsh): git_status/diff/log/branch/stage/commit/stash/show + des |
| [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) | Host | `@picgo/dsh-plugin` | npm | 4 | Upload images and files to your image host from DeepSeek Harness, powered by PicGo |
| [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) | Host | `dsh-plugin-git-bash` | npm | 4 | DeepSeek Harness 插件：让DSH使用Git Bash，能够保持read-only, workspace-write, full-access权限控制依旧可用 |
| [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Host | `dsh-doublecheck` | npm | 4 | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineer |
| [YiHarvest/dsh-failure-capsule](https://github.com/YiHarvest/dsh-failure-capsule) | Host | `dsh-failure-capsule` | npm | 4 | Local-first failure evidence capsules for DeepSeek Harness sessions |
| [MimicHunterZ/dsh-agent-compact](https://github.com/MimicHunterZ/dsh-agent-compact) | Host | `@mimichunterz/agent-compact` | npm | 4 | DSH plugin for agent-driven span compaction: compress chosen conversation spans into self-written checkpoints  |
| [SPYQWER1/dsh-codex-tools](https://github.com/SPYQWER1/dsh-codex-tools) | Host | `dsh-codex-tools` | npm | 4 |  |
| [Bald0Wang/dsh-imggenerate](https://github.com/Bald0Wang/dsh-imggenerate) | Host | `dsh-image-gen` | npm | 4 | DeepSeek Harness plugin: image_generate tool with qwen-image-3.0 (Aliyun MaaS) and doubao-seedream (Volcano Ar |
| [030611/dsh-context-provenance](https://github.com/030611/dsh-context-provenance) | Host | `dsh-context-provenance` | npm | 4 | Observe-only provenance ledger over public DeepSeek Harness runtime evidence |
| [Letter2025/dsh-tool-search](https://github.com/Letter2025/dsh-tool-search) | Host | `dsh-tool-search` | npm | 4 | Tool search & slimming for DeepSeek Harness: Hermes-style progressive disclosure — search, describe, and call  |
| [Khorsheed/dsh-ankh-guard](https://github.com/Khorsheed/dsh-ankh-guard) | Host | `@khorsheed/dsh-ankh-guard` | npm | 4 | 防止 Agent 自我修改把服务改崩的守护插件（dsh 插件）：绿色构建凭证绑定 git HEAD，改坏不许重启；watchdog 无感重启 + canary 自动回滚 |
| [DEEP-IOS/dsh-humanizer](https://github.com/DEEP-IOS/dsh-humanizer) | Host | `dsh-humanizer` | npm | 4 | DeepSeek Harness原生中文文本人工智能痕迹消除与多重审核对抗工作流 |
| [inmny/dsh-sandbox-escalation-fix](https://github.com/inmny/dsh-sandbox-escalation-fix) | Host | `dsh-plugin-sandbox-escalation-fix` | npm | 4 | DeepSeek Harness 插件：处理DSH沟槽的权限管理（full acess下传入同级或者降级的请求会报错，导致ai大战权限管理） |
| [Einskyle/dsh-llm-vision-bridge](https://github.com/Einskyle/dsh-llm-vision-bridge) | Host | `dsh-llm-vision-bridge` | npm | 4 | DeepSeek vision bridge for dsh: route image attachments to a vision model (Qwen3-VL via pi-ai/llama.cpp) and c |
| [cnChenKai/dsh-web-search-brave](https://github.com/cnChenKai/dsh-web-search-brave) | Host | `dsh-web-search-brave` | npm | 4 | Brave Search-backed WebSearchProvider for DeepSeek Harness (ctx.web) |
| [SZMY-haruhi/dsh-tavily](https://github.com/SZMY-haruhi/dsh-tavily) | Host | `dsh-tavily` | npm | 4 | 为 DSH 新增 Tavily 搜索 API，作为其网页搜索服务提供商。Adds Tavily Search API as a web search provider for DSH. |
| [jiesou/dsh-commandcode-go-provider](https://github.com/jiesou/dsh-commandcode-go-provider) | Host | `@jiesou/dsh-commandcode-go-provider` | npm | 4 | Command Code Go API provider for dsh. Command Code 订阅 + DeekSeek Harness 兼容层 |
| [Edge-Echo/dsh-mcp-bridge](https://github.com/Edge-Echo/dsh-mcp-bridge) | Host | `dsh-mcp-bridge` | npm | 4 | Curated, verified MCP server bundle for DeepSeek Harness (dsh): one install brings demo, memory, filesystem, G |
| [zoahdev/dsh-plugin-doctor](https://github.com/zoahdev/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 4 | Health checks for DeepSeek Harness plugins: manifest, patch, entry, build, pack, fresh-profile install verific |
| [QJAG1024/dsh-model-meta-autofill](https://github.com/QJAG1024/dsh-model-meta-autofill) | Host | `dsh-model-meta-autofill` | npm | 4 | DSH plugin: auto-fill metadata (context window, output cap, display name, input modalities) for custom-provide |
| [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) | Host | `dsh-model-failover` | npm | 3 | Two-level model circuit breaker with failover for DeepSeek Harness: trip a model or a whole provider after rep |
| [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) | Host | `dsh-vault` | npm | 3 | Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Host | `dsh-wecom` | npm | 3 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) | Host | `@dshhubs/plugin-search` | npm | 3 | Discover The Best DSH plugins |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | Host | `dsh-plugin-wechat` | npm | 3 |  |
| [lql341/dsh-scnet](https://github.com/lql341/dsh-scnet) | Host | `dsh-scnet` | npm | 3 | dsh plugin for scnet.cn |
| [mcxianyujun/dsh-web-search-anysearch](https://github.com/mcxianyujun/dsh-web-search-anysearch) | Host | `dsh-web-search-anysearch` | npm | 3 | Native AnySearch /v1/search WebSearchProvider for DeepSeek Harness with Web UI, credentials integration, and W |
| [yhlooo/dsh-bridges](https://github.com/yhlooo/dsh-bridges) | Host | `dsh-bridges` | npm | 3 | 将 DeepSeek Harness 桥接到已配置其它 Harness Agent 的项目。支持 CodeBuddy / Codex / OpenCode / Claude Code / ... |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | Host | `dsh-tui` | npm | 3 | A small, session-aware terminal UI for DeepSeek Harness |
| [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | Host | `dsh-mobile-control` | npm | 3 | DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件 |
| [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) | Host | `dsh-soul-md` | npm | 3 | Soul.md persona for DeepSeek Harness \| DeepSeek Harness 人设卡插件 |
| [TGYD-helige/dsh-pi](https://github.com/TGYD-helige/dsh-pi) | Host | `dsh-pi-host` | npm | 3 | Run trusted Pi extensions inside DeepSeek Harness through a compatibility host. |
| [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) | Host | `dsh-browser` | npm | 3 | Playwright-powered browser automation for DeepSeek Harness |
| [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) | Host | `dsh-plugin-marketplace` | npm | 3 | Plugin marketplace for DeepSeek Harness \| DeepSeek Harness 插件市场 |
| [PixLunaLab/dsh-pixluna](https://github.com/PixLunaLab/dsh-pixluna) | Host | `dsh-pixluna` | npm | 3 | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ |
| [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) | Host | `dsh-ui-spec` | npm | 3 | DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Determi |
| [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | Host | `dsh-meta-orchestrator` | npm | 3 | A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning  |
| [why913/dshx](https://github.com/why913/dshx) | Host | `@why913/dshx` | npm | 3 | DeepSeek Harness（dsh）的 MCP / Skill / 记忆管理工具：写入前先连接自检，连不上不写；从 Claude Code / Codex 一键迁移；可装成 dsh 插件，在 Web 里用 /mcp |
| [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Host | `dsh-telemetry-redactor` | npm | 3 | Fail-closed export-copy redaction for DeepSeek Harness session telemetry |
| [Muelsysel/DeepSeek-Harness-Desktop](https://github.com/Muelsysel/DeepSeek-Harness-Desktop) | Host | `dsh-desktop` | npm | 3 | dsh-desktop: DeepSeek Harness 桌面插件 - click-to-launch Codex-like native window over the live dsh web UI. Everyt |
| [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) | Host | `dsh-cost` | npm | 3 | Evidence-first token cost ledger and budget checks for DeepSeek Harness |
| [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) | Host | `dsh-tool-underseal` | npm | 3 |  |
| [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | Host | `@perrylink/dsh-github` | npm | 3 | Official-grade GitHub CI for DeepSeek Harness: composite action.yml, PR review bot with idempotent inline comm |
| [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) | Host | `@securstack/dsh-plugin` | npm | 3 | SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and  |
| [Jelee0145/dsh-mem](https://github.com/Jelee0145/dsh-mem) | Host | `dsh-mem` | npm | 3 | 为dsh构建持久化跨工作区记忆的插件 |
| [flymysql/dsh-memory](https://github.com/flymysql/dsh-memory) | Host | `dsh-memory-vault` | npm | 3 |  |
| [luoyu-xingu/dsh-background](https://github.com/luoyu-xingu/dsh-background) | Host | `dsh-background` | npm | 3 | DeepSeek Harness Web 背景图片插件:本地图片路径替换网页背景,外观设置行 + 实时预览 |
| [reimu-create/dsh-vision](https://github.com/reimu-create/dsh-vision) | Host | `dsh-vision` | npm | 3 | DSH plugin: text-only models (e.g. DeepSeek-V4) automatically see images via a vision model. Official surface- |
| [ihuajiu/dsh-plugins-finder](https://github.com/ihuajiu/dsh-plugins-finder) | Host | `dsh-plugins-finder` | npm | 3 | Natural-language plugin search for DeepSeek Harness — ask what you need, get matching dsh.so plugins with inst |
| [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) | Host | `@elementor-i/dsh-agentmemory` | npm | 3 | agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the loc |
| [IAMLieutenant/dsh-tool-user-memory](https://github.com/IAMLieutenant/dsh-tool-user-memory) | Host | `dsh-tool-user-memory` | npm | 3 | DeepSeek Harness 用户记忆插件 |
| [ximengxiaolan/dsh-vision-bridge](https://github.com/ximengxiaolan/dsh-vision-bridge) | Host | `dsh-vision-bridge` | npm | 3 | Composer-attached images are auto-described by an OpenAI-compatible vision model and handed to text-only model |
| [ChenyuHeee/dsh-browser-playwright](https://github.com/ChenyuHeee/dsh-browser-playwright) | Host | `dsh-browser-playwright` | npm | 3 | Snapshot-first Playwright browser automation for DeepSeek Harness: accessibility-tree interaction with stable  |
| [zytsyj/dsh-gpu](https://github.com/zytsyj/dsh-gpu) | Host | `dsh-gpu` | npm | 3 | GPU-aware execution layer for DeepSeek Harness: gpu_status / gpu_exec / gpu_run_bg tools, auto card selection, |
| [GIT121995/dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) | Host | `dsh-memory-gate` | npm | 3 | Retrieved ≠ injected: CBDC-gated memory for DeepSeek Harness — decides how memory is USED (use/verify/ignore + |
| [nianpangzhi233/dsh-billing](https://github.com/nianpangzhi233/dsh-billing) | Host | `dsh-billing` | npm | 3 | DSH web GUI realtime billing monitor: token/cost metering, DeepSeek v4 peak pricing, balance anchoring, sideba |
| [superagents-lab/dsh-s1](https://github.com/superagents-lab/dsh-s1) | Host | `dsh-s1` | npm | 3 | Native s1 tools for the DeepSeek Harness (DSH): s1_search, s1_news, s1_crawl, s1_sitemap, s1_trending + bundle |
| [BeiZi6/dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) | Host | `dsh-theme-plugin` | npm | 3 | DSH Web GUI theme studio: presets + per-mode customization (accent, background, foreground, fonts, translucent |
| [Noelune/dsh-agent-relay](https://github.com/Noelune/dsh-agent-relay) | Host | `dsh-agent-relay` | npm | 3 | Local multi-agent collaboration relay for DeepSeek Harness — HMAC-authenticated loopback message broker for ds |
| [Noelune/unified-agent-memory](https://github.com/Noelune/unified-agent-memory) | Host | `dsh-unified-agent-memory` | npm | 3 | Unified fleet-wide agent memory system for DeepSeek Harness — shared Obsidian Vault for dsh, Codex, Claude Cod |
| [Hoshino-Yumetsuki/dsh-onebot](https://github.com/Hoshino-Yumetsuki/dsh-onebot) | Host | `dsh-onebot` | npm | 3 | OneBot Adapter For DSH |
| [dshworks/dsh-watch](https://github.com/dshworks/dsh-watch) | Host | `@dshworks/dsh-watch` | npm | 3 | Put a watch on a stream: background listeners that wake the DeepSeek Harness agent with new matching lines — a |
| [cmfok/dsh-feishucard](https://github.com/cmfok/dsh-feishucard) | Host | `dsh-feishucard` | npm | 3 | DeepSeek Harness <-> Feishu (Lark) bridge with streaming reply card / 自研 DSH 飞书桥：长连接 + 流式回复卡片（工具面板/状态符号/限流熔断兜底 |
| [zby1211/cordis-transfer-plugin](https://github.com/zby1211/cordis-transfer-plugin) | Host | `cordis-transfer-plugin` | npm | 3 | A persistent DSH plugin for importing and exporting dynamic Cordis Plugins. |
| [TYEclipse/dsh-units](https://github.com/TYEclipse/dsh-units) | Host | `dsh-units` | npm | 3 | Unit conversion toolbox for DeepSeek Harness (dsh): 14 categories incl. typography (px/pt/em/rem) and fuel eco |
| [GULI-lab/DSH-element-source](https://github.com/GULI-lab/DSH-element-source) | Host | `dsh-element-source` | npm | 3 | 在开发页面点击任意 UI 元素，一键定位 Vue / React / Svelte / Angular 源码。DSH 点击定位源码检查器，兼容 dsh-better-sidebar：预览本地 dev server，点击元 |
| [nyantused-cpun/folio](https://github.com/nyantused-cpun/folio) | Host | `@nyantused/folio-dsh-events` | npm | 3 | 兰亭 (Folio) · 咨询材料生成引擎：15 个 DSH 原生工具 + 会话协议自动执行 + L0 守卫 + 可换方法论包，零 key 起步。Consulting material engine for DeepSe |
| [yimeng-dev/dsh-traffic-light](https://github.com/yimeng-dev/dsh-traffic-light) | Host | `dsh-traffic-light` | npm | 3 | Multi-session agent status monitor for DeepSeek Harness. |
| [rayafriandion/deepseek-harness-tui](https://github.com/rayafriandion/deepseek-harness-tui) | Host | `deepseek-harness-tui` | npm | 3 | The plugin can use terminal UI like opencode/claude code and other CLI/TUI agents. |
| [jmcc-guo/dsh-ssh](https://github.com/jmcc-guo/dsh-ssh) | Host | `@jmcc-guo/dsh-ssh` | npm | 3 | SSH terminal panel & AI connection manager for DeepSeek Harness — model-driven connect/exec/list/status/discon |
| [Bcy2020/dsh-cc-ecosystem](https://github.com/Bcy2020/dsh-cc-ecosystem) | Host | `dsh-cc-agents` | npm | 3 | 让 DeepSeek Harness 用上 Claude Code 全家桶:技能、命令、规则、权限、子代理、hooks—— .claude/ 资产原样加载,正在逐步做到全兼容。 |
| [iamfromchangsha/dsh-go-balance](https://github.com/iamfromchangsha/dsh-go-balance) | Host | `dsh-go-balance` | npm | 3 | OpenCode Go subscription balance widget for DeepSeek Harness Web: rolling/weekly/monthly quota remaining at th |
| [Isilsolme/dsh-splash-launcher](https://github.com/Isilsolme/dsh-splash-launcher) | Host | `dsh-splash-launcher` | npm | 3 | One-click Windows launcher for the DeepSeek Harness (dsh) Web GUI with a stroke-by-stroke startup animation |
| [brunhildzhou/dsh-all-warmup](https://github.com/brunhildzhou/dsh-all-warmup) | Host | `dsh-all-warmup` | npm | 3 | Global frictionless warm-up layer plugin for DeepSeek Harness \| DeepSeek Harness 全局无感热身层插件：任何会话首轮自动热身，第二轮起恢复完 |
| [maple-pwn/paperlab](https://github.com/maple-pwn/paperlab) | Host | `dsh-paperlab` | npm | 3 | Overleaf-style paper revision workbench powered by a DeepSeek Harness plugin (dsh-plugin) |
| [whitefirer/dsh-browser-fs](https://github.com/whitefirer/dsh-browser-fs) | Host | `dsh-browser-fs` | npm | 3 | dsh（DeepSeek Harness）插件：让 agent 读写浏览器所在机器的本地文件——File System Access 授权 + WS 中继，含非安全上下文兼容模式 |
| [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) | Host | `@1e0zj/dsh-plugin-mall` | npm | 2 | DSH 插件市场：搜索 GitHub dsh-plugin 话题插件，一键安装到本地 dsh（agent 工具 + 设置页插件市场 tab） |
| [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) | Host | `dshmarketplace-plugin` | npm | 2 | Browse and install DSH plugins from inside DeepSeek Harness. /store, a settings tab, and agent tools — bilingu |
| [Enc-hanted/dsh-pulse](https://github.com/Enc-hanted/dsh-pulse) | Host | `dsh-pulse` | npm | 2 | Cross-session usage & cost observatory for the DeepSeek Harness web profile — trend/heatmap dashboards, per-mo |
| [FuRongJun-1999/CommonTrustProtocol](https://github.com/FuRongJun-1999/CommonTrustProtocol) | Host | `@furongjun1999/dsh-memory` | npm | 2 | Common Trust Protocol (CTP) 共同信任协议 \| Intelligentics 智能论，研究智能系统存续的底层结构条件 |
| [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) | Host | `dsh-bill` | npm | 2 | DSH (DeepSeek Harness) plugin: per-session cost line + cost attribution report, priced by llm-pricing |
| [LeslieWylie/dsh-md-preview](https://github.com/LeslieWylie/dsh-md-preview) | Host | `dsh-md-preview` | npm | 2 | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — an md_html_render tool that works |
| [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Host | `@tingrudeng/dsh-feishu-bot` | npm | 2 | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu |
| [creativedswork/dsh-expmem](https://github.com/creativedswork/dsh-expmem) | Host | `@creative-dswork/dsh-expmem` | npm | 2 | Experience Memory for DeepSeek Harness |
| [jiesou/dsh-opencode-zen-free-provider](https://github.com/jiesou/dsh-opencode-zen-free-provider) | Host | `@jiesou/dsh-opencode-zen-free-provider` | npm | 2 | OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据 |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Host | `@jumpserver-east/jumpserver-dsh` | npm | 2 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [lqhl/dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Host | `dsh-pi-tui` | npm | 2 |  |
| [memorylake-ai/memorylake-harness](https://github.com/memorylake-ai/memorylake-harness) | Host | `@memorylake/dsh-plugin` | npm | 2 | MemoryLake Harness |
| [wulun811/dsh-plugin-vet](https://github.com/wulun811/dsh-plugin-vet) | Host | `@jieai/dsh-plugin-vet` | npm | 2 | Trust pipeline for deepseek-harness plugins: deterministic static scan (11 rules) + LLM-driven audit protocol  |
| [xavier711/dsh-plugin-deepseek-usage](https://github.com/xavier711/dsh-plugin-deepseek-usage) | Host | `@xavier711/dsh-deepseek-usage` | npm | 2 | A DeepSeek usage panel plugin for the DeepSeek Harness Web GUI. It adds a 「Usage / 用量」 entry at the bottom of  |
| [yangfch3/dsh-mcp-mgr](https://github.com/yangfch3/dsh-mcp-mgr) | Host | `dsh-mcp-mgr` | npm | 2 | MCP server manager for DeepSeek Harness — workspace mcp.json discovery, hot sync, and a web settings UI. |
| [Spirit4471/multimodal-bridge](https://github.com/Spirit4471/multimodal-bridge) | Host | `dsh-multimodal-bridge` | npm | 2 | Multimodal bridge for any LLM: qwen_vision (Qwen-VL) + qwen_generate (Qwen-Image) — an MCP server for Kimi Cod |
| [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | Host | `@shelken/dsh-co-authored-by` | npm | 2 | dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | npm | 2 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [xiaoshihou514/dsh-tui](https://github.com/xiaoshihou514/dsh-tui) | Host | `dsh-tui` | npm | 2 | DeepSeek Harness: TUI |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | Host | `dsh-deeptutor` | npm | 2 | Learning assistant extension for DeepSeek Harness (dsh): brings DeepTutor tutoring to your agent — deep explan |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Host | `dsh-tiered-approval` | npm | 2 | Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow s |
| [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Host | `dsh-claude-marketplace` | npm | 2 | Claude Code marketplace compatibility for DeepSeek Harness |
| [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | Host | `dsh-find-skill` | npm | 2 | dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp |
| [chancelu/dsh-llmwiki](https://github.com/chancelu/dsh-llmwiki) | Host | `dsh-llmwiki` | npm | 2 | Local Markdown wiki as long-term memory for DeepSeek Harness — RRF-fused retrieval (keyword + wikilink graph + |
| [AbnerAI/dsh-monitor](https://github.com/AbnerAI/dsh-monitor) | Host | `dsh-monitor` | npm | 2 |  |
| [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) | Host | `@bleed00/dsh-claude-mem` | npm | 2 | DeepSeek Harness plugin integrating claude-mem (memory for dsh) |
| [grunmin/dsh-acp-enhanced](https://github.com/grunmin/dsh-acp-enhanced) | Host | `dsh-acp-enhanced` | npm | 2 | Enhanced ACP (Agent Client Protocol) server for DeepSeek Harness (dsh) — drop-in bridge for the Zed editor: bl |
| [karuboniru/dsh-approval-guardian](https://github.com/karuboniru/dsh-approval-guardian) | Host | `dsh-approval-guardian` | npm | 2 | 模仿codex auto-review 的自动审批机制 |
| [Lhy723/dsh-self-evolution](https://github.com/Lhy723/dsh-self-evolution) | Host | `dsh-self-evolution` | npm | 2 | Benchmark-driven self-evolution for DeepSeek Harness · 冻结基准上的 Agent Profile 自我进化：评测 → 候选 → 严格接受/回滚 |
| [fishlikewater/dsh-mcp-manager](https://github.com/fishlikewater/dsh-mcp-manager) | Host | `@fishlikewater/dsh-mcp-manager` | npm | 2 |  |
| [kakadeka/Baton](https://github.com/kakadeka/Baton) | Host | `@kakadeka/dsh-baton` | npm | 2 | Pass your project, not your context. |
| [HEO-Club/DSH-DAG](https://github.com/HEO-Club/DSH-DAG) | Host | `dsh-dag` | npm | 2 |  |
| [jinbaozi/deepseek-harness-plugins](https://github.com/jinbaozi/deepseek-harness-plugins) | Host | `dsh-llm-pi-ai-oauth` | npm | 2 | Personal deepseek harness plugins |
| [drive9-ai/drive9-dsh](https://github.com/drive9-ai/drive9-dsh) | Host | `@drive9/drive9-dsh` | npm | 2 |  |
| [realchenwenqiao/dash](https://github.com/realchenwenqiao/dash) | Host | `@realchenwenqiao/dash` | npm | 2 | DASH — a pi-tui terminal front door for DeepSeek Harness, installed as a dsh bundle plugin |
| [CodePrometheus/dsh-observability](https://github.com/CodePrometheus/dsh-observability) | Host | `dsh-observability` | npm | 2 | Observability for DeepSeek Harness (dsh), use the OpenTelemetry Protocol |
| [nitrazepam01/dsh-web-search-tavily](https://github.com/nitrazepam01/dsh-web-search-tavily) | Host | `dsh-web-search-tavily` | npm | 2 | Tavily-backed web search provider bundle for DeepSeek Harness (dsh) with hot-switchable backend (Tavily / Deep |
| [beex-labs/dsh-desktop-plugin](https://github.com/beex-labs/dsh-desktop-plugin) | Host | `dsh-desktop` | npm | 2 | dsh-desktop-plugin |
| [SamXiaBing/dsh-adb](https://github.com/SamXiaBing/dsh-adb) | Host | `dsh-adb` | npm | 2 |  |
| [Victor-770/dsh-commandcode-provider](https://github.com/Victor-770/dsh-commandcode-provider) | Host | `dsh-commandcode-provider` | npm | 2 | dsh LLM provider plugin for Command Code — every plan incl. Go, uses your Studio API key over /alpha/generate |
| [reina4xa/dsh-plugin-reload](https://github.com/reina4xa/dsh-plugin-reload) | Host | `dsh-plugin-reload` | npm | 2 | Deepseek harness plugin for reloading your deepseek harness plugin (e.g. mcp-client) |
| [kestiny18/dsh-plugins](https://github.com/kestiny18/dsh-plugins) | Host | `dsh-redact` | npm | 2 | Community plugins for DeepSeek Harness |
| [jingzhao-l/iterate-plugin](https://github.com/jingzhao-l/iterate-plugin) | Host | `iterate-plugin` | npm | 2 | DeepSeek Harness (dsh) 插件：把 iterate 技能落成自治闭环代码迭代 — 多轮并行审查、确定性去重收敛、原子修复+验证自停、meta-review 一致性审计、dry-run 只读审查。由 i |
| [kriskwok/dsh-feishu-gateway](https://github.com/kriskwok/dsh-feishu-gateway) | Host | `@kriskwok/dsh-feishu-gateway` | npm | 2 | DeepSeek Harness Feishu gateway plugin: chat with your DSH agent from Feishu (persistent sessions, /new, Markd |
| [cnChenKai/dsh-web-search-tavily](https://github.com/cnChenKai/dsh-web-search-tavily) | Host | `dsh-web-search-tavily` | npm | 2 | Tavily-backed WebSearchProvider for DeepSeek Harness (ctx.web) - keyless mode, no API key required |
| [Huasfan/dsh-tool-git](https://github.com/Huasfan/dsh-tool-git) | Host | `dsh-tool-git` | npm | 2 | Git tools for DeepSeek Harness agent |
| [KHG420/git-worktree](https://github.com/KHG420/git-worktree) | Host | `dsh-git-worktree` | npm | 2 | DeepSeek Harness plugin: one click binds each conversation to its own isolated git worktree + branch, so paral |
| [suuuuuu-1/dsh-discord](https://github.com/suuuuuu-1/dsh-discord) | Host | `dsh-discord` | npm | 2 | Bidirectional Discord bridge and remote controller for DeepSeek Harness |
| [knlght/DSH-update-check](https://github.com/knlght/DSH-update-check) | Host | `dsh_check_updates` | npm | 2 | 让 DeepSeek Harness 拥有版本可见性：dsh_check_updates 模型工具 + Settings 更新检查页 + 周期复查，只报告不升级 |
| [TtTRz/dsh-langfuse](https://github.com/TtTRz/dsh-langfuse) | Host | `dsh-langfuse` | npm | 2 | Langfuse LLM observability for DeepSeek Harness — one OpenTelemetry trace tree per agent session, with feedbac |
| [jonah791/dsh-agent-memory](https://github.com/jonah791/dsh-agent-memory) | Host | `dsh-agent-memory` | npm | 2 | Agent-driven long-term memory for DeepSeek Harness (DSH) |
| [reinocheong/dsh-session-move](https://github.com/reinocheong/dsh-session-move) | Host | `dsh-session-move` | npm | 2 | Manage DeepSeek Harness sessions from the Web UI: drag & drop / menu move to another folder, permanently delet |
| [timwhitez/dsh-self-evolving](https://github.com/timwhitez/dsh-self-evolving) | Host | `@dsh-self-evolving/candidate-baseline` | npm | 2 | Evidence-first, crash-resumable self-evolution engine for DeepSeek Harness and Harbor. |
| [xiaweiliang060035/dsh-opencode-go-usage](https://github.com/xiaweiliang060035/dsh-opencode-go-usage) | Host | `@xiaweiliang060035/dsh-opencode-go-usage` | npm | 2 | DSH (DeepSeek Harness) web plugin — floating widget showing real-time OpenCode Go subscription usage (rolling  |
| [hellosky983/dsh-fabric](https://github.com/hellosky983/dsh-fabric) | Host | `dsh-fabric` | npm | 2 | Fabric — the everything-is-a-plugin primitive for DeepSeek Harness (dsh): unify every extensibility seam behin |
| [polarskicpl/dsh-codex-migrate](https://github.com/polarskicpl/dsh-codex-migrate) | Host | `dsh-codex-migrate` | npm | 2 | Migrate Codex CLI conversations / MCP servers / memories into DeepSeek Harness ｜ 把 Codex CLI 的对话、MCP、记忆迁移到 Dee |
| [Fantasality/dsh-origin-plugin](https://github.com/Fantasality/dsh-origin-plugin) | Host | `dsh-origin-plugin` | npm | 2 | DSH Origin Plugin: drive Origin scientific plotting from DeepSeek Harness AI chat via MCP. Write data, plot li |
| [AbcdefgXW/dsh-msg-hub](https://github.com/AbcdefgXW/dsh-msg-hub) | Host | `dsh-msg-hub` | npm | 2 | dsh IM 渠道桥：微信/QQ/飞书接入 + 主动推送 \| IM channel bridge for dsh: WeChat/QQ/Feishu with proactive push |
| [try-works/dsh-cloudflare](https://github.com/try-works/dsh-cloudflare) | Host | `@try-works/dsh-cloudflare` | npm | 2 | A Cloudflare plugin for DeepSeek Harness. 1:1 functional parity with the Codex plugin for Cloudflare. |
| [22-ai-00/dsh-enhanced](https://github.com/22-ai-00/dsh-enhanced) | Host | `@dsh-enhanced/acp` | npm | 1 | 专门用来实现dsh的增强插件集 |
| [314857493/dsh-vision](https://github.com/314857493/dsh-vision) | Host | `dsh-vision-proxy-route` | npm | 1 | Free GLM vision for text-only DeepSeek Harness: paste images in the GUI (auto-transcribe route) + vision tool  |
| [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | Host | `dsh-python-env` | npm | 1 |  |
| [ECHOUniverse/dshacp](https://github.com/ECHOUniverse/dshacp) | Host | `@hanxu131/dshacp` | npm | 1 |  |
| [Oo0520/dsh-plugin-doctor](https://github.com/Oo0520/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 1 |  |
| [SodaMem/dsh-plugin-sodamem](https://github.com/SodaMem/dsh-plugin-sodamem) | Host | `dsh-plugin-sodamem` | npm | 1 | Native DeepSeek Harness (dsh) plugin for SodaMem — auto-injects evidence-grounded memory into every turn and i |
| [SwainGao/dsh-plugin-ai-bridge](https://github.com/SwainGao/dsh-plugin-ai-bridge) | Host | `dsh-plugin-ai-bridge` | npm | 1 |  |
| [V-Reason/dsh-task-notify](https://github.com/V-Reason/dsh-task-notify) | Host | `dsh-task-notify` | npm | 1 | DeepSeekHarness任务完成时进行消息推送提醒（微信+Windows通知） |
| [aqsk-BLG/dsh-memory](https://github.com/aqsk-BLG/dsh-memory) | Host | `dsh-memory` | npm | 1 | Layered file memory for DeepSeek Harness — workspace-scoped USER/MEMORY notes, background consolidation, hybri |
| [clarkzhao/dsh-llm-grok](https://github.com/clarkzhao/dsh-llm-grok) | Host | `dsh-llm-grok` | npm | 1 | dsh plugin for grok |
| [dami9527/dsh-image-pathify](https://github.com/dami9527/dsh-image-pathify) | Host | `dsh-image-pathify` | npm | 1 | DeepSeek Harness 插件：让 deepseek-v4-flash 等不能看图的模型也能处理聊天图片，内置识图工具。安装：dsh plugin --profile web add dsh-image-path |
| [dshworks/dsh-crew](https://github.com/dshworks/dsh-crew) | Host | `@dshworks/dsh-crew` | npm | 1 | Watch Claude Code and Codex work inside dsh: each gets a real terminal pane in your session's workspace that y |
| [duhu2000/qcc-mcp-oauth](https://github.com/duhu2000/qcc-mcp-oauth) | Host | `qcc-dsh-mcp-oauth` | npm | 1 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查（Qichacha）MCP 服务 / One-click OAuth connect to Qichacha MCP services for De |
| [gxx950224/ggame](https://github.com/gxx950224/ggame) | Host | `@ggame/backpack` | npm | 1 | 干活跟打魔兽一样累 |
| [hatter123/dsh-math](https://github.com/hatter123/dsh-math) | Host | `dsh-math` | npm | 1 | Scientific computing plugin for DeepSeek Harness: numeric + symbolic math (mathjs + Algebrite) |
| [jcc1997/dsh-plugins](https://github.com/jcc1997/dsh-plugins) | Host | `dsh-git` | npm | 1 |  |
| [jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) | Host | `dsh-model-sync` | npm | 1 | Writes live provider model lists into DSH settings. Composer rings show 5h/7d plan windows or metered balance  |
| [jiesou/dsh-cline-free-provider](https://github.com/jiesou/dsh-cline-free-provider) | Host | `@jiesou/dsh-cline-free-provider` | npm | 1 | Cline 免费模型接入 DeepSeek Harness |
| [leo-lab-2026/dsh-lark-bridge](https://github.com/leo-lab-2026/dsh-lark-bridge) | Host | `dsh-lark-bridge` | npm | 1 |  |
| [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) | Host | `@lk251066/dsh-tui` | npm | 1 | Multi-session terminal workbench for DeepSeek Harness — durable Assistant, persistent project sessions, struct |
| [moonbowterfly/dsh-bio-genie](https://github.com/moonbowterfly/dsh-bio-genie) | Host | `@dsh-bio/dsh-bio-genie` | npm | 1 | 🧬 dsh bio analysis plugin for DeepSeek Harness — wish-style bioinformatics & biology analysis: Biopython-powe |
| [qinyre/dsh-plugin-capabilities](https://github.com/qinyre/dsh-plugin-capabilities) | Host | `dsh-plugin-capabilities` | npm | 1 | 在 dsh 设置页管理技能与 MCP 服务器，支持从 Claude Code、Codex 导入。 |
| [stvlynn/dsh.fish](https://github.com/stvlynn/dsh.fish) | Host | `dsh-hub` | npm | 1 | Discover and install DeepSeek Harness plugins, skills, MCP servers, agent presets, bundles, and profiles. |
| [wanshichenguang/dsh-tool-vision](https://github.com/wanshichenguang/dsh-tool-vision) | Host | `dsh-tool-vision` | npm | 1 | DSH plugin: image_describe (识图) tool over the DashScope OpenAI-compatible vision API (qwen3.7-flash). Bring yo |
| [web-casa/dsh-plugin-pkgseek](https://github.com/web-casa/dsh-plugin-pkgseek) | Host | `dsh-plugin-pkgseek` | npm | 1 | PkgSeek Linux package, command and CVE intelligence as native DeepSeek Harness (dsh) tools |
| [xiaohuang-zaianlian/dsh-code-scan](https://github.com/xiaohuang-zaianlian/dsh-code-scan) | Host | `dsh-code-scan` | npm | 1 |  |
| [zoahdev/dsh-zh](https://github.com/zoahdev/dsh-zh) | Host | `dsh-zh` | npm | 1 | Chinese-thinking system-prompt section for DeepSeek Harness: make your dsh agent think and answer in simplifie |
| [lifeodyssey/dsh-compressor](https://github.com/lifeodyssey/dsh-compressor) | Host | `dsh-compressor` | npm | 1 | DeepSeek Harness plugin: compress tool output, cut up to 20% of context, without touching the context cache or |
| [sdoygb/conjugate-spectral-geometry](https://github.com/sdoygb/conjugate-spectral-geometry) | Host | `geometry-knowledge` | npm | 1 | Conjugate Spectral Geometry - Geometric Theory of quantum error correction: 12-volume/117-paper index + DeepSe |
| [diqierjia/StrataGate-AgentMemory](https://github.com/diqierjia/StrataGate-AgentMemory) | Host | `stratagate-dsh` | npm | 1 | Local-first cross-session memory for DeepSeek Harness (DSH): automatic capture, Event/Element cards, evidence- |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Host | `dsh-tool-approval` | npm | 1 | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") |
| [wulusai2333/mimo-vision](https://github.com/wulusai2333/mimo-vision) | Host | `mimo-vision` | npm | 1 | DeepSeek Harness (DSH) native plugin — describe_image tool: a vision bridge (image → mimo-v2.5 → text descript |
| [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | Host | `dsh-browser-control` | npm | 1 | DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件 |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Host | `dsh-cloudflare-browser-run` | npm | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | Host | `dsh-codex-bridge` | npm | 1 | Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab. |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | npm | 1 | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 |
| [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Host | `dsh-telegram` | npm | 1 |  |
| [tappass/dsh-governance](https://github.com/tappass/dsh-governance) | Host | `@tappass/dsh-governance` | npm | 1 | The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your busines |
| [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Host | `dsh-lens-lite` | npm | 1 | Post-edit diagnostics for DeepSeek Harness |
| [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Host | `dsh-mcp-proxy` | npm | 1 | Context-cheap lazy MCP access for DeepSeek Harness |
| [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) | Host | `dsh-memory` | npm | 1 | Durable cross-session SQLite memory for DeepSeek Harness |
| [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | Host | `dsh-deepseek-usage` | npm | 1 | DeepSeek balance and token usage tools for DeepSeek Harness |
| [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) | Host | `dsh-tool-reqpipe` | npm | 1 | reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发） |
| [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | Host | `@qing3a/dsh-event-auditor` | npm | 1 | DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部 |
| [asdf17128/dsh-doctor](https://github.com/asdf17128/dsh-doctor) | Host | `dsh-doctor` | npm | 1 | Find what your DeepSeek Harness (dsh) patches silently broke — dead patches, config fields dropped by whole-co |
| [Porphyrioon/ironlaw](https://github.com/Porphyrioon/ironlaw) | Host | `@ironlaw/adapter-dsh` | npm | 1 | IronLaw: evidence-backed completion and repair layer for coding agents |
| [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) | Host | `@jorinyang/dsh-doctor` | npm | 1 | DeepSeek Harness environment diagnostic tool: dsh_doctor checks env, profile, config, bundles, mount, port, he |
| [Wha1eChai/dsh-cross-session](https://github.com/Wha1eChai/dsh-cross-session) | Host | `@wha1echai/dsh-cross-session` | npm | 1 | Same-runtime cross-Session discovery and communication for DeepSeek Harness |
| [Kevoyuan/dsh-mac-vision](https://github.com/Kevoyuan/dsh-mac-vision) | Host | `dsh-mac-vision` | npm | 1 | On-device macOS OCR and Apple Vision for DeepSeek Harness — one native plugin with a bundled Skill. |
| [LuZhouheng/dsh-gen3d](https://github.com/LuZhouheng/dsh-gen3d) | Host | `dsh-gen3d` | npm | 1 | DeepSeek Harness 3D 角色生成插件：直连 Meshy / Hunyuan3D / Tripo3D / Rodin 官方 API，自配 key，mock 回退 |
| [ylwl1997/noatmark-dsh-plugin](https://github.com/ylwl1997/noatmark-dsh-plugin) | Host | `noatmark-dsh-plugin` | npm | 1 | NoAtMark text hygiene as a DeepSeek Harness (dsh) plugin — sanitize untrusted text, scan invisible characters, |
| [hccccc01333/dsh-eval](https://github.com/hccccc01333/dsh-eval) | Host | `dsh-eval` | npm | 1 | Agent evaluation platform for DeepSeek Harness: benchmark YAML, headless dsh orchestration, trace-based metric |
| [xu1132/dsh-plugin-browser](https://github.com/xu1132/dsh-plugin-browser) | Host | `dsh-plugin-browser` | npm | 1 | A DeepSeek Harness community plugin that drives a headless Playwright browser: rendered page text, screenshots |
| [988hj7tczd-oss/harness-desktop](https://github.com/988hj7tczd-oss/harness-desktop) | Host | `harness-memory` | npm | 1 | 开箱即用的 DeepSeek Harness 桌面客户端 · Out-of-the-box desktop client for DeepSeek Harness |
| [YohtHill/dsh-plugin-greeter](https://github.com/YohtHill/dsh-plugin-greeter) | Host | `dsh-plugin-greeter` | npm | 1 | A DeepSeek Harness (dsh) plugin that greets you at the start of every session with varied wording, and remembe |
| [Nunchakus888/dsh-turn-budget](https://github.com/Nunchakus888/dsh-turn-budget) | Host | `dsh-turn-budget` | npm | 1 | Fail-closed per-turn step, tool-call, and provider-token budgets for DeepSeek Harness |
| [sjakdhasdh/dsh-vision](https://github.com/sjakdhasdh/dsh-vision) | Host | `dsh-vision` | npm | 1 | Vision tool plugin for DeepSeek Harness (DSH): give text-only models like deepseek-v4-flash image recognition  |
| [EveGoodEvening/dsh-autoresearch](https://github.com/EveGoodEvening/dsh-autoresearch) | Host | `dsh-autoresearch` | npm | 1 |  |
| [memorax-ai/dsh-patchouli](https://github.com/memorax-ai/dsh-patchouli) | Host | `dsh-patchouli` | npm | 1 | Agent knowledge hub and deepseek-harness plugin |
| [february2015/dsh-taskswarm](https://github.com/february2015/dsh-taskswarm) | Host | `dsh-taskswarm` | npm | 1 | TaskSwarm (蜂群) — DeepSeek Harness 上的多智能体任务编排插件：waves/lanes 并行执行、git worktree 隔离、任务包与跨模型评审、崩溃可恢复 \| Multi-agent |
| [werifu/dsh-oai-oauth](https://github.com/werifu/dsh-oai-oauth) | Host | `dsh-oai-oauth` | npm | 1 | A plugin allowing you to use ChatGPT via OpenAI subscription without API Key in Deepseek Harness |
| [sikwoxy/dsh-tool-memory](https://github.com/sikwoxy/dsh-tool-memory) | Host | `dsh-tool-memory` | npm | 1 | DeepSeek Harness 插件：跨会话持久记忆（Hermes 式） |
| [hiyms/dsh-web-search-provider](https://github.com/hiyms/dsh-web-search-provider) | Host | `dsh-web-search-provider` | npm | 1 | Improve web search in Deepseek Harness, use server-side search service. |
| [wdwind/dsh-vision-no-vision](https://github.com/wdwind/dsh-vision-no-vision) | Host | `dsh-vision-no-vision` | npm | 1 | DeepSeek Harness native vision plugin! |
| [onlyqzq/dsh-riskproof](https://github.com/onlyqzq/dsh-riskproof) | Host | `dsh-riskproof` | npm | 1 | Risk-aware approval layer for high-risk AI Agent tool calls |
| [bocha-ai/dsh-web-search-bocha](https://github.com/bocha-ai/dsh-web-search-bocha) | Host | `@bocha-ai/dsh-web-search-bocha` | npm | 1 | DeepSeek Harness Web Search Plugin |
| [xinmo114514/dsh-prompt-optimizer](https://github.com/xinmo114514/dsh-prompt-optimizer) | Host | `dsh-prompt-optimizer` | npm | 1 | ✨ DSH 持久化 Web 插件：输入框旁一键把模糊需求改写成 AI 智能体可执行的超级提示词。复用当前所选模型，探索优先协议 + Skills 感知，彩虹跑马边框与输入锁定，重启自动加载。MIT 开源。 |
| [Yan-Zero/dsh-progressive-tools](https://github.com/Yan-Zero/dsh-progressive-tools) | Host | `dsh-progressive-tools` | npm | 1 | An automatically mounted, presentation-only progressive tool disclosure layer for every DeepSeek Harness Agent |
| [xiaoheizi1212/dsh-computer-use](https://github.com/xiaoheizi1212/dsh-computer-use) | Host | `dsh-computer-use` | npm | 1 | Model-agnostic Computer Use for DeepSeek Harness: isolated browser, Windows native helper, third-party vision  |
| [1HelloMan1/dsh-vision-fallback](https://github.com/1HelloMan1/dsh-vision-fallback) | Host | `dsh-vision-fallback` | npm | 1 | Silent vision bridge for DeepSeek Harness: route chat images to a fixed vision model, preserve UI originals, a |
| [duyefeng/dsh-browser](https://github.com/duyefeng/dsh-browser) | Host | `dsh-browser` | npm | 1 | 给 DeepSeek Harness 的浏览器插件：AI 直接开真实的 Edge 浏览器逛网页、点击、填表、截图，无需 CDP 或 MCP。 |
| [visail/dsh-vision-tool](https://github.com/visail/dsh-vision-tool) | Host | `dsh-vision-tool` | npm | 1 | Paste an image into the chat box and text-only DSH models can "see" it — auto-rewrite of pasted images + analy |
| [AlphaGodzilla/ag-dsh-coding-plugins](https://github.com/AlphaGodzilla/ag-dsh-coding-plugins) | Host | `@ag-dsh/dsh-gen-commit-msg-zh` | npm | 1 | 围绕软件工程开发的DeekSeek Harness 插件合集 |
| [lsjspl/dsh-plugin-grok2api-media-tool](https://github.com/lsjspl/dsh-plugin-grok2api-media-tool) | Host | `dsh-plugin-grok2api-media-tool` | npm | 1 | 让 dsh 通过 grok2api 的 API 获得图片与视频生成能力（generate_image / generate_video）。 |
| [YukunR/dsh-ezprot-plugin](https://github.com/YukunR/dsh-ezprot-plugin) | Host | `dsh-ezprot-plugin` | npm | 1 | A plug-and-play proteomics analysis plugin for DeepSeek Harness |
| [gmleong/dsh-img](https://github.com/gmleong/dsh-img) | Host | `dsh-img` | npm | 1 | Give text-only models eyes: analyze_image tool for DeepSeek Harness, backed by free Chinese vision APIs (GLM-4 |
| [meliodascz89/deepseek-harness-plugins](https://github.com/meliodascz89/deepseek-harness-plugins) | Host | `dsh-claude-to-dsh` | npm | 1 | Community plugins for DeepSeek Harness: local-vision (Ollama image description) and claude-to-dsh (Claude Code |
| [luokai-demo/dsh-plugins](https://github.com/luokai-demo/dsh-plugins) | Host | `dsh-balance-plugin` | npm | 1 |  |
| [lmst2/dsh-asc](https://github.com/lmst2/dsh-asc) | Host | `dsh-asc` | npm | 1 |  |
| [Altairpaca/dsh-computer-use-windows](https://github.com/Altairpaca/dsh-computer-use-windows) | Host | `dsh-computer-use-windows` | npm | 1 | Windows Computer Use for DeepSeek Harness (DSH): window-bound screenshot/OCR/click with verification loop, pur |
| [tarraencompassing61/dsh-lark-bot](https://github.com/tarraencompassing61/dsh-lark-bot) | Host | `dsh-lark-bot` | npm | 1 | Bridge DeepSeek Harness into Feishu / Lark—drive your local coding agent from mobile, group chats, and topics  |
| [extension-hunter/dsh-pip](https://github.com/extension-hunter/dsh-pip) | Host | `dsh-pip` | npm | 1 | Detach the DeepSeek Harness Web GUI into a Document Picture-in-Picture window (dsh bundle plugin) |
| [jorinyang/dsh-clawshell](https://github.com/jorinyang/dsh-clawshell) | Host | `dsh-clawshell` | npm | 1 | ClawShell vision as DeepSeek Harness plugins: self-perception, closed-loop self-adaptation, trust/niche swarm, |
| [hyls9527/dsh-local-vision](https://github.com/hyls9527/dsh-local-vision) | Host | `dsh-local-vision` | npm | 1 | DSH 插件：为纯文本模型提供本地看图能力（llama.cpp / Ollama / LM Studio / vLLM 全兼容）｜Local vision for text-only LLMs on any OpenAI |
| [eons2long/dsh-codex-oauth](https://github.com/eons2long/dsh-codex-oauth) | Host | `dsh-codex-oauth` | npm | 1 |  |
| [zxz9988/dsh-wechat-bridge](https://github.com/zxz9988/dsh-wechat-bridge) | Host | `@zxz9988/dsh-wechat-bridge` | npm | 1 | DSH 微信桥接插件 \| DeepSeek Harness WeChat bridge plugin：把手机微信（腾讯官方 iLink/ClawBot 协议）接入 DSH AI 助手——流式回复、扫码登录、会话持久化、 |
| [openAGFS/dsh-agfs](https://github.com/openAGFS/dsh-agfs) | Host | `@open-agfs/dsh-agfs` | npm | 1 | Agent FileBrowser for DeepSeek Harness |
| [changhang155/dsh-plugin-claude-import](https://github.com/changhang155/dsh-plugin-claude-import) | Host | `dsh-plugin-claude-import` | npm | 1 | Import Claude Code sessions into DeepSeek Harness as continuable context — agent tools (claude_session_list /  |
| [MicroHEROX/dsh-unsloth-hands](https://github.com/MicroHEROX/dsh-unsloth-hands) | Host | `dsh-unsloth-hands` | npm | 1 | Unsloth for DeepSeek Harness — a pure-client tool plugin that connects the DeepSeek Harness online model to a  |
| [yangyongzhen/dsh-memory](https://github.com/yangyongzhen/dsh-memory) | Host | `dsh-memory` | npm | 1 |  |
| [cnctem/dsh-acp](https://github.com/cnctem/dsh-acp) | Host | `dsh-acp` | npm | 1 | ACP server for DeepSeek Harness — bridges Zed and other IDEs to dsh agents |
| [fengs2021/dsh-feishu-bridge](https://github.com/fengs2021/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 1 | DSH 飞书机器人桥接插件：飞书消息进 DSH 会话，流式交互卡片实时回复（思维链/正文/工具链分区，打字机效果） |
| [gloryxpnv/dsh-tool-vision](https://github.com/gloryxpnv/dsh-tool-vision) | Host | `dsh-vision-local` | npm | 1 | Local-first vision for DeepSeek Harness: structured JSON evidence (OCR/layout/semantics) from local VLMs (LM S |
| [CHF-hub99/dsh-plugin-manager](https://github.com/CHF-hub99/dsh-plugin-manager) | Host | `dsh-plugin-manager` | npm | 1 | DeepSeek Harness plugin: plugin/MCP/skill management with Web GUI and agent tools |
| [xxiaoxiong/dsh-prometheus](https://github.com/xxiaoxiong/dsh-prometheus) | Host | `dsh-prometheus` | npm | 1 | Privacy-conscious Prometheus metrics and Grafana dashboards for DeepSeek Harness |
| [wensincai/btw4DeepseekHarness](https://github.com/wensincai/btw4DeepseekHarness) | Host | `dsh-btw` | npm | 1 | /btw system command  for deepseek harness |
| [maque2333/dsh-profile-manager](https://github.com/maque2333/dsh-profile-manager) | Host | `dsh-profile-manager` | npm | 1 | A DeepSeek Harness Profile manager |
| [Max-Null/dsh-memory](https://github.com/Max-Null/dsh-memory) | Host | `@max-null/dsh-memory` | npm | 1 |  |
| [yonro/xmemo-deepseek-plugin](https://github.com/yonro/xmemo-deepseek-plugin) | Host | `dsh-xmemo` | npm | 1 | Native DeepSeek Harness (dsh) plugin: hybrid local and XMemo cloud memory for Cordis-based agents. |
| [Sim-xia/dsh-vscode-theme](https://github.com/Sim-xia/dsh-vscode-theme) | Host | `dsh-vscode-theme` | npm | 1 | allow deepseek harness to use .vsix theme file designed for visual studio code |
| [zoahdev/dsh-subscribe](https://github.com/zoahdev/dsh-subscribe) | Host | `dsh-subscribe` | npm | 1 | Steam-style plugin marketplace for DeepSeek Harness: one-click subscribe on the web, one command to sync into  |
| [haifeiWu/dsh-deepseek-usage](https://github.com/haifeiWu/dsh-deepseek-usage) | Host | `dsh-deepseek-usage` | npm | 1 | DSH plugin: real-time DeepSeek token usage, estimated cost and account balance in the DSH Web UI |
| [ThreeBody6666/dsh-computer-use](https://github.com/ThreeBody6666/dsh-computer-use) | Host | `@crazy_th/dsh-computer-use` | npm | 1 | Native Windows Computer Use and configurable vision tools for DeepSeek Harness. |
| [iiwish/dsh-testkit](https://github.com/iiwish/dsh-testkit) | Host | `dsh-testkit` | npm | 1 | Lifecycle conformance testing for DeepSeek Harness plugins |
| [tancheng33/dsh-egress-guard](https://github.com/tancheng33/dsh-egress-guard) | Host | `dsh-egress-guard` | npm | 1 | Runtime security gate for DeepSeek Harness: egress host allowlist, secret redaction in tool results, and an ap |
| [Max-Null/dsh-chinese-thinking](https://github.com/Max-Null/dsh-chinese-thinking) | Host | `@max-null/dsh-chinese-thinking` | npm | 1 |  |
| [54xkeee/dsh-youreyes](https://github.com/54xkeee/dsh-youreyes) | Host | `dsh-youreyes` | npm | 1 | Eyes for text-only DeepSeek on DeepSeek Harness: model-invokable vision tool + wrapper adapters + general VLM  |
| [hjqcan/dsh-goodmemory](https://github.com/hjqcan/dsh-goodmemory) | Host | `dsh-goodmemory` | npm | 1 | Automatic cross-session GoodMemory recall and writeback for DeepSeek Harness |
| [dsh-mixxed/dsh-client-ui-settings-mcp](https://github.com/dsh-mixxed/dsh-client-ui-settings-mcp) | Host | `@dsh-mixxed/dsh-client-ui-settings-mcp` | npm | 1 | 在 DeepSeek Harness 设置页管理 MCP 服务器：运行时添加/编辑/启停/重连/删除，实时状态、自动重连，中英双语界面。MCP server manager for DeepSeek Harness —  |
| [THEWOLFWALKER/dsh-coyote](https://github.com/THEWOLFWALKER/dsh-coyote) | Host | `dsh-coyote` | npm | 1 | Agent- and GUI-controlled DG-LAB Coyote e-stim plugin for DeepSeek Harness: safety-bounded strength, programma |
| [mingzeng21/dsh-notion](https://github.com/mingzeng21/dsh-notion) | Host | `dsh-notion-mcp` | npm | 1 | Connect DeepSeek Harness (dsh) to Notion via the official Notion MCP — OAuth 2.0 + PKCE, one-time login, silen |
| [fire-disposal/dsh-mojibake-interceptor](https://github.com/fire-disposal/dsh-mojibake-interceptor) | Host | `dsh-mojibake-interceptor` | npm | 1 | Mojibake interceptor bundle for DeepSeek Harness: feature-based garbled-text detection, review-then-release, p |
| [DDDPG/dsh-plugins](https://github.com/DDDPG/dsh-plugins) | Host | `dsh-insights` | npm | 1 | personal developed deepseek-harness plugins: Workspace Memory--Cross-session Call--CLI Cmd--Key-Comb Sheet--Ta |
| [Nuo-cl/dsh-auto-mode](https://github.com/Nuo-cl/dsh-auto-mode) | Host | `dsh-auto-mode` | npm | 1 | DSH plugin: auto mode that routes permission-gated tool calls through an LLM review before approving, blocking |
| [tluoluo/dsh-persist](https://github.com/tluoluo/dsh-persist) | Host | `dsh-persist` | npm | 1 | Persistent memory for DeepSeek Harness: per-conversation notes, selective injection, project memory, semantic  |
| [xxiaoxiong/dsh-issue-tracker](https://github.com/xxiaoxiong/dsh-issue-tracker) | Host | `dsh-issue-tracker` | npm | 1 | dsh-issue-tracker |
| [Whatsmore-nf/dsh-context-steward](https://github.com/Whatsmore-nf/dsh-context-steward) | Host | `@whatsmore-nf/dsh-context-steward` | npm | 1 | DSH 智能上下文压缩插件 —— 在有限窗口内管理认知资源，让 Agent 记住真正重要的信息。                 Smart context compression for DSH — managing  |
| [danglong0313/dsh-history-sync](https://github.com/danglong0313/dsh-history-sync) | Host | `@danglong0313/dsh-history-sync` | npm | 1 | 将codex和claude项目历史同步到dsh |
| [haibinwang9/dsh-web-search](https://github.com/haibinwang9/dsh-web-search) | Host | `dsh-web-search` | npm | 1 | DeepSeek Harness 网页访问插件：多引擎搜索自动回退（SearXNG → Tavily → Brave → 零配置 DuckDuckGo）+ URL 正文提取，移植自 pi-web-access |
| [cocofhu/skillhub](https://github.com/cocofhu/skillhub) | Host | `@cocofhu/skillhub` | npm | 1 | skillhub of deepseek-harness |
| [Relistencode/dsh-recall](https://github.com/Relistencode/dsh-recall) | Host | `dsh-recall` | npm | 1 | Conversation history recall for DeepSeek Harness (DSH) — literal/fuzzy/semantic retrieval of every past conver |
| [xxiaoxiong/dsh-kubernetes](https://github.com/xxiaoxiong/dsh-kubernetes) | Host | `dsh-kubernetes` | npm | 1 | dsh-kubernetes |
| [fleg45/memoria-framework](https://github.com/fleg45/memoria-framework) | Host | `dsh-memoria` | npm | 1 | 通用 AI Agent 记忆框架 —— 记忆不是检索，是分流。5 层衰减 / 8 类型 / 5 管线结构化输出。 |
| [try-works/dsh-paper-design](https://github.com/try-works/dsh-paper-design) | Host | `@try-works/dsh-paper-design` | npm | 1 | Paper Design plugin for DeepSeek Harness |
| [nexsjournal/dsh-vision-plugin](https://github.com/nexsjournal/dsh-vision-plugin) | Host | `dsh-vision-plugin` | npm | 1 |  |
| [rj-jiangyichen/dsh-rules](https://github.com/rj-jiangyichen/dsh-rules) | Host | `dsh-rules` | npm | 1 |  |
| [bigclawd/dsh-security-guard](https://github.com/bigclawd/dsh-security-guard) | Host | `dsh-security-guard` | npm | 1 | Security guard for DeepSeek Harness (dsh): static scan for malicious code, prompt injection and token waste, r |
| [Andrietteprotective835/dsh-mcp-lens](https://github.com/Andrietteprotective835/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 0 |  |
| [CharlotteN7/dsh-dlp](https://github.com/CharlotteN7/dsh-dlp) | Host | `dsh-dlp` | npm | 0 |  |
| [CharlotteN7/dsh-netguard](https://github.com/CharlotteN7/dsh-netguard) | Host | `dsh-netguard` | npm | 0 |  |
| [CharlotteN7/dsh-ocsf-forwarder](https://github.com/CharlotteN7/dsh-ocsf-forwarder) | Host | `dsh-ocsf-forwarder` | npm | 0 |  |
| [JUNQINGV587/mattpocock-skills-dsh](https://github.com/JUNQINGV587/mattpocock-skills-dsh) | Host | `mattpocock-skills-dsh` | npm | 0 |  |
| [Leeaoyin/dsh-agent-harness-audit](https://github.com/Leeaoyin/dsh-agent-harness-audit) | Host | `dsh-harness-audit` | npm | 0 |  |
| [NoNshiranai/dshx-tui](https://github.com/NoNshiranai/dshx-tui) | Host | `@dshx/tui` | npm | 0 |  |
| [SYMlp/dsh-markdown-memory](https://github.com/SYMlp/dsh-markdown-memory) | Host | `dsh-markdown-memory` | npm | 0 |  |
| [Snowfly11531/dsh-wechat-bot](https://github.com/Snowfly11531/dsh-wechat-bot) | Host | `dsh-wechat-bot` | npm | 0 |  |
| [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) | Host | `dsh-pilot` | npm | 0 |  |
| [VeryInt/dsh-image-vision](https://github.com/VeryInt/dsh-image-vision) | Host | `dsh-image-vision` | npm | 0 |  |
| [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) | Host | `dsh-preview` | npm | 0 |  |
| [Yidien/dsh-capture-window](https://github.com/Yidien/dsh-capture-window) | Host | `dsh-capture-window` | npm | 0 |  |
| [cyjyyd/dsh-tui](https://github.com/cyjyyd/dsh-tui) | Host | `dsh-ssh-tui` | npm | 0 |  |
| [ddll8023/dsh-codex](https://github.com/ddll8023/dsh-codex) | Host | `dsh-codex` | npm | 0 |  |
| [gxx950224/backpack](https://github.com/gxx950224/backpack) | Host | `@ggame/backpack` | npm | 0 |  |
| [iHow1/dsh-ihow-memory](https://github.com/iHow1/dsh-ihow-memory) | Host | `dsh-ihow-memory` | npm | 0 |  |
| [imkingjh999/dsh-tool-accurate-vision](https://github.com/imkingjh999/dsh-tool-accurate-vision) | Host | `dsh-tool-accurate-vision` | npm | 0 |  |
| [iswalle/getnote-dsh-plugin](https://github.com/iswalle/getnote-dsh-plugin) | Host | `@getnote/dsh-plugin` | npm | 0 |  |
| [keepview/dsh-lark](https://github.com/keepview/dsh-lark) | Host | `dsh-lark` | npm | 0 |  |
| [jlu-lujing/dsh-kit](https://github.com/jlu-lujing/dsh-kit) | Host | `dsh-kit` | npm | 0 |  |
| [literaf/dsh-academy](https://github.com/literaf/dsh-academy) | Host | `dsh-academy` | npm | 0 |  |
| [lkshjd/dsh-debate](https://github.com/lkshjd/dsh-debate) | Host | `@sky_sun/dsh-debate` | npm | 0 |  |
| [protoctistmoses143/dsh-docs](https://github.com/protoctistmoses143/dsh-docs) | Host | `dsh-doc` | npm | 0 |  |
| [ruby1304/dsh-vision-subagent](https://github.com/ruby1304/dsh-vision-subagent) | Host | `dsh-vision-subagent` | npm | 0 |  |
| [rrrrrredy/beforedone](https://github.com/rrrrrredy/beforedone) | Host | `dsh-beforedone` | npm | 0 |  |
| [shuxue6662-a11y/dsh-risk-guard](https://github.com/shuxue6662-a11y/dsh-risk-guard) | Host | `dsh-risk-guard` | npm | 0 |  |
| [tancheng33/dsh-yogacara](https://github.com/tancheng33/dsh-yogacara) | Host | `dsh-yogacara` | npm | 0 |  |
| [useorgx/orgx-deepseek-harness-plugin](https://github.com/useorgx/orgx-deepseek-harness-plugin) | Host | `@useorgx/deepseek-harness-plugin` | npm | 0 |  |
| [winterhuan/dsh-shadow-mind](https://github.com/winterhuan/dsh-shadow-mind) | Host | `@winterchenhuan/dsh-shadow-mind` | npm | 0 |  |
| [yabolee-kkk/dsh-streaming-mcp-bridge](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge) | Host | `dsh-streaming-mcp-bridge` | npm | 0 |  |
| [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | Host | `dsh-expression` | npm | 0 |  |
| [zhangjunjesse/dsh-tool-image-gen](https://github.com/zhangjunjesse/dsh-tool-image-gen) | Host | `dsh-tool-image-gen` | npm | 0 |  |
| [zoahdev/dsh-browser-use](https://github.com/zoahdev/dsh-browser-use) | Host | `dsh-browser-use` | npm | 0 |  |
| [zoahdev/dsh-firecrawl](https://github.com/zoahdev/dsh-firecrawl) | Host | `dsh-firecrawl` | npm | 0 |  |
| [zoahdev/dsh-kirocrew](https://github.com/zoahdev/dsh-kirocrew) | Host | `dsh-kirocrew` | npm | 0 |  |
| [zoahdev/dsh-vision](https://github.com/zoahdev/dsh-vision) | Host | `dsh-vision` | npm | 0 |  |
| [severin-ye/uagent-sync](https://github.com/severin-ye/uagent-sync) | Host | `uagent-sync-dsh` | npm | 0 |  |
| [BolunHan/cc-monitor](https://github.com/BolunHan/cc-monitor) | Host | `dsh-cc-monitor` | npm | 0 |  |
| [rrrrrredy/agent-memory-system](https://github.com/rrrrrredy/agent-memory-system) | Host | `@rrrrrredy/dsh-agent-memory` | npm | 0 |  |
| [SajoLuo/dsh-trellis](https://github.com/SajoLuo/dsh-trellis) | Host | `dsh-trellis` | npm | 0 |  |
| [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) | Host | `dsh-push` | npm | 0 |  |
| [Luck9Star/dsh-gateway-provider](https://github.com/Luck9Star/dsh-gateway-provider) | Host | `dsh-gateway-provider` | npm | 0 |  |
| [qing3a/dsh-tray](https://github.com/qing3a/dsh-tray) | Host | `@qing3a/dsh-tray` | npm | 0 |  |
| [Amengclass/dsh-memory](https://github.com/Amengclass/dsh-memory) | Host | `dsh-memory` | npm | 0 |  |
| [nefevcore/dsh-adt](https://github.com/nefevcore/dsh-adt) | Host | `@nefevcore/abap-adt-dsh-plugin` | npm | 0 |  |
| [xu1132/dsh-plugin-hello](https://github.com/xu1132/dsh-plugin-hello) | Host | `dsh-plugin-hello` | npm | 0 |  |
| [lakeofsky347/dsh-vision](https://github.com/lakeofsky347/dsh-vision) | Host | `dsh-vision` | npm | 0 |  |
| [NexusAgentX/dsh-mcp-adapter](https://github.com/NexusAgentX/dsh-mcp-adapter) | Host | `dsh-mcp-adapter` | npm | 0 |  |
| [NexusAgentX/dsh-web-access](https://github.com/NexusAgentX/dsh-web-access) | Host | `dsh-web-access` | npm | 0 |  |
| [mario03690/dsh-netcafe](https://github.com/mario03690/dsh-netcafe) | Host | `dsh-netcafe` | npm | 0 |  |
| [LKRCharon/dsh-egress-guard](https://github.com/LKRCharon/dsh-egress-guard) | Host | `dsh-egress-guard` | npm | 0 |  |
| [EveGoodEvening/dsh-llmwiki](https://github.com/EveGoodEvening/dsh-llmwiki) | Host | `@evegoodevening/dsh-llmwiki` | npm | 0 |  |
| [slhssb/dsh-advisor](https://github.com/slhssb/dsh-advisor) | Host | `@slhssb/dsh-advisor` | npm | 0 |  |
| [Yuki-takuya-kun/dsh-claude-code](https://github.com/Yuki-takuya-kun/dsh-claude-code) | Host | `dsh-claude-code` | npm | 0 |  |
| [qing3a/dsh-repo-context](https://github.com/qing3a/dsh-repo-context) | Host | `@qing3a/dsh-repo-context` | npm | 0 |  |
| [dong-victor/dsh-opencodego-usage](https://github.com/dong-victor/dsh-opencodego-usage) | Host | `@dong-victor/dsh-opencodego-usage` | npm | 0 |  |
| [Thomas-key/dsh-skill-manager](https://github.com/Thomas-key/dsh-skill-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [jiang539/dsh-auth-gate](https://github.com/jiang539/dsh-auth-gate) | Host | `dsh-auth-gate` | npm | 0 |  |
| [qinyu765/dsh-llm-auto-route](https://github.com/qinyu765/dsh-llm-auto-route) | Host | `dsh-llm-auto-route` | npm | 0 |  |
| [ouones/dsh-tavily-search](https://github.com/ouones/dsh-tavily-search) | Host | `dsh-tavily-search` | npm | 0 |  |
| [xing01l/session-import-codex](https://github.com/xing01l/session-import-codex) | Host | `dsh-session-import-codex` | npm | 0 |  |
| [MaxHou-infinity/dsh-scout](https://github.com/MaxHou-infinity/dsh-scout) | Host | `dsh-scout` | npm | 0 |  |
| [Joeytisaly/dsh-web-search-tokenrhythm](https://github.com/Joeytisaly/dsh-web-search-tokenrhythm) | Host | `dsh-web-search-tokenrhythm` | npm | 0 |  |
| [synmindai/dsh-nanobananapro](https://github.com/synmindai/dsh-nanobananapro) | Host | `dsh-nanobananapro` | npm | 0 |  |
| [synmindai/dsh-seedance2](https://github.com/synmindai/dsh-seedance2) | Host | `dsh-seedance2` | npm | 0 |  |
| [ylwl1997/dshbase-catalog](https://github.com/ylwl1997/dshbase-catalog) | Host | `dshbase-catalog` | npm | 0 |  |
| [Yogioo/dsh-balance](https://github.com/Yogioo/dsh-balance) | Host | `dsh-balance` | npm | 0 |  |
| [ystyle/dsh-tool-terminal-search](https://github.com/ystyle/dsh-tool-terminal-search) | Host | `dsh-tool-terminal-search` | npm | 0 |  |
| [ylwl1997/dsh-browser](https://github.com/ylwl1997/dsh-browser) | Host | `dsh-browser-bsk` | npm | 0 |  |
| [MoonCoder-HAPPY/SpecWorkflow](https://github.com/MoonCoder-HAPPY/SpecWorkflow) | Host | `specworkflow` | npm | 0 |  |
| [BrokkAi/bifrost](https://github.com/BrokkAi/bifrost) | Host | `@brokkai/dsh-plugin-bifrost` | npm | 0 |  |
| [pengzhou267-ai/dsh-shop-assistant](https://github.com/pengzhou267-ai/dsh-shop-assistant) | Host | `dsh-shop-assistant` | npm | 0 |  |
| [dong-victor/dsh-mcphub](https://github.com/dong-victor/dsh-mcphub) | Host | `@dong-victor/dsh-mcphub` | npm | 0 |  |
| [Hyna-hla/dsh-vscode](https://github.com/Hyna-hla/dsh-vscode) | Host | `dsh-vscode` | npm | 0 |  |
| [GongYuanCaiJi/dsh-mattpocock-skills](https://github.com/GongYuanCaiJi/dsh-mattpocock-skills) | Host | `dsh-mattpocock-skills` | npm | 0 |  |
| [cchenbin042/yuque-notes-plugin](https://github.com/cchenbin042/yuque-notes-plugin) | Host | `yuque-notes-plugin` | npm | 0 |  |
| [hezhongtang/dsh-update-copilot](https://github.com/hezhongtang/dsh-update-copilot) | Host | `dsh-update-copilot` | npm | 0 |  |
| [Hyna-hla/dsh-desktop](https://github.com/Hyna-hla/dsh-desktop) | Host | `dsh-desktop` | npm | 0 |  |
| [UndeadSheep/dsh-file-preview](https://github.com/UndeadSheep/dsh-file-preview) | Host | `@undeadsheep/dsh-file-preview` | npm | 0 |  |
| [mmyddd/dsh-prompt-optimize](https://github.com/mmyddd/dsh-prompt-optimize) | Host | `dsh-prompt-optimize` | npm | 0 |  |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | Host | `@open-design/dsh-runtime` | Git only | 89438 | 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative. 🖥️ Local-first desktop app |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Host | `@openviking/dsh-memory-plugin` | Git only | 30469 | Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills. |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | Host | `@evermind-ai/dsh-plugin` | Git only | 12224 | One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving acro |
| [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | Host | `dsh-api-relay-audit` | Git only | 795 | Local security audit for AI API relays and LLM proxies: detects prompt injection, model substitution, tool-cal |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Host | `@yuxianglin/dsh-bridge-browser` | Git only | 333 | dsh plugin: Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capab |
| [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris) | Host | `@polaris-ai/deepseek-harness-plugin` | Git only | 188 | Toward Autonomous Scientific Discovery |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Host | `@dsh-external/dsh-super-injector` | Git only | 126 |  |
| [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) | Host | `@howmp/dsh-pentest` | Git only | 113 | 面向 DeepSeek Harness（dsh）的渗透测试模式  @CloverSecLabs |
| [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) | Host | `tabbit-browser` | Git only | 90 | Tabbit Broser plugins for Deepseek Harness |
| [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | Host | `@dsh-external/workflow` | Git only | 89 | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 |
| [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) | Host | `zat-dsh-engine` | Git only | 75 | Visual plugin marketplace for DeepSeek Harness — browse, search and install community plugins |
| [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Host | `forkprobe-dsh` | Git only | 68 | Compare multiple skills on the same task and pick the winner. |
| [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | Host | `dsh-toy` | Git only | 58 | Toy Control Protocol for DSH |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | Host | `@dsh-external/plugin-console` | Git only | 57 | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Host | `@multica-ai/dsh-runtime` | Git only | 53 | Support dsh runtime on Multica. |
| [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) | Host | `@openguardrails/dsh` | Git only | 30 | The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors. |
| [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | Host | `@huanlin/dsh-plugin-session-delete` | Git only | 25 | Delete DeepSeek Harness sessions from the UI: header danger button + sidebar session-row menu item (no convers |
| [LoserFox/distill](https://github.com/LoserFox/distill) | Host | `@loserfox/distill` | Git only | 20 | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | Host | `@openmaic/dsh-openmaic` | Git only | 19 | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching |
| [unitarylab/quantum-practices](https://github.com/unitarylab/quantum-practices) | Host | `dsh-unitarylab-quantum-practices` | Git only | 18 | 量子计算最佳实践 Quantum Algorithms Best Practices |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Host | `@dsh-external/dsh-deep-research` | Git only | 17 | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/informa |
| [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Host | `@robotic-harness/dsh-bundle` | Git only | 17 | Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pi |
| [railgun0325/dsh-phone](https://github.com/railgun0325/dsh-phone) | Host | `dsh-android-control` | Git only | 13 | 让 DeepSeek Harness 的 agent 跑在手机里，通过 Magisk root 原生操作安卓系统（截图/点击/滑动/开应用）+ 移动端布局 + WebView APK |
| [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) | Host | `dsh-plugin-cobsidian` | Git only | 12 | Agent-agnostic workflow skill for maintaining Obsidian knowledge bases |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Host | `dsh-search-mcp` | Git only | 11 | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), con |
| [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) | Host | `powercontext-dsh` | Git only | 11 | DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experien |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | Host | `dsh-directorx` | Git only | 10 | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | Host | `@dsh-external/dsh-evolve` | Git only | 10 | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Host | `@dsh-external/dsh-better-browser` | Git only | 10 | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in |
| [Thanksgiver233/comm-protocol-hub](https://github.com/Thanksgiver233/comm-protocol-hub) | Host | `dsh-comm-protocol-hub` | Git only | 10 | 将分散在 3GPP Release 15~18 的 70+ 条通信协议规范，按 TN/NTN/全息/近远场/混合/安全等 8 个维度结构化整理，为通信工程师和 AI 助手提供一键式协议查询能力。通过三个 DSH 工具（关 |
| [YTxue/dsh-skill-manager-ytxue](https://github.com/YTxue/dsh-skill-manager-ytxue) | Host | `dsh-skill-manager-ytxue` | Git only | 10 | DSH web plugin: skill manager in the Settings sidebar - list/enable/disable, folder batch import with conflict |
| [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | Host | `@lhmd/dsh-promotion-toolkit` | Git only | 9 | 把你的任何想法，变成每个平台原生的宣发内容 \| Turn any idea into platform-native publicity |
| [JuneLearn/dsh-image2-draw](https://github.com/JuneLearn/dsh-image2-draw) | Host | `dsh-image2-draw` | Git only | 9 | DeepSeek Harness Image2 生图插件，通过第三方 OpenAI Images 兼容接口调用 gpt-image-2，只需配置 baseURL 和 API Key。 \| Image2 generati |
| [WM-CODER/custom-first-control-prompt](https://github.com/WM-CODER/custom-first-control-prompt) | Host | `@wm-coder/dsh-custom-first-control-prompt` | Git only | 9 | DeepSeek Harness plugin for insert custom prompt |
| [inthepond/ff-toolkit](https://github.com/inthepond/ff-toolkit) | Host | `dsh-ffkit` | Git only | 8 | FFmpeg toolkit with CLI, MCP server, and AI tool schemas |
| [hellosky983/dsh-mc-agent](https://github.com/hellosky983/dsh-mc-agent) | Host | `dsh-mc-agent` | Git only | 8 | AI-assisted Minecraft for DeepSeek Harness: drive an autonomous Mineflayer agent (survival, mining, chat, live |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Host | `dsh-chat-imagine` | Git only | 7 | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片。 |
| [yauntyour/DSH-Encrypt](https://github.com/yauntyour/DSH-Encrypt) | Host | `dsh-encrypt` | Git only | 7 | DeepSeek Harness 凭证加密插件，通过设置密码使用AES-256-GCM+SHA3-256实现的全流程加密+校验，运行时临时解密，内存安全。 |
| [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | Host | `deepseek-harness-qqbot` | Git only | 7 | QQ Bot text and image channel plugin for DeepSeek Harness |
| [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | Host | `@lhmd/dsh-director-toolkit` | Git only | 7 | DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Pa |
| [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | Host | `dsh-im-bridge` | Git only | 7 | DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。 |
| [superfly/sprites-deepseek-plugin](https://github.com/superfly/sprites-deepseek-plugin) | Host | `dsh-sprites-plugin` | Git only | 7 | DeepSeek Harness plugin for persistent, isolated Sprites: remote builds, tests, previews, checkpoints, and lon |
| [reshuibuduo/tmcra-memory](https://github.com/reshuibuduo/tmcra-memory) | Host | `tmcra-deepseek-harness-local-memory` | Git only | 6 | TMCRA Core — local-first, scope-isolated long-term memory runtime for AI agents. |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Host | `@loserfox/telegram` | Git only | 6 | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | Host | `@dsh-external/dsh-inspect` | Git only | 6 | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 |
| [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | Host | `@dsh-cowork/chatnode-wechat` | Git only | 6 | READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, |
| [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | Host | `dsh-telegram-relay` | Git only | 6 | DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation an |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Host | `@dsh-cowork/chatnode-wechat` | Git only | 6 | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for  |
| [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) | Host | `dsh-annotate` | Git only | 6 | Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, a |
| [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) | Host | `dsh-model-router` | Git only | 6 | 模型路由与成本优化器：简单问题 flash 直答、故障自动降级、会话 token/缓存/成本实时面板 \| Model router & cost optimizer for DeepSeek Harness: flas |
| [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) | Host | `{{NAME}}` | Git only | 6 | Ready-to-publish DeepSeek Harness plugin skeleton: bundle format, tool DSL, config, tests, and a scaffold scri |
| [ziyou979/dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) | Host | `dsh-llm-oauth` | Git only | 6 | DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropi |
| [tianji-qingtian/dsh-composer-polish](https://github.com/tianji-qingtian/dsh-composer-polish) | Host | `dsh-composer-polish` | Git only | 6 | DeepSeek Harness plugin: one-click ✨ polish for composer drafts — flash rewrite, auto fill-back · DeepSeek Har |
| [beancookie/dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) | Host | `dsh-plugin-anydoc` | Git only | 6 | DSH 插件：基于 @firecrawl/anydoc 将 Word、PPT、Excel、PDF、EPUB、CSV 等文档转换为 GitHub-Flavored Markdown |
| [huanyuLv/dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) | Host | `dsh-balance-tide` | Git only | 6 | DeepSeek Harness (DSH) Web 插件: 余额 + 峰谷计价潮汐提示。显示 DeepSeek 账户余额与本会话花费, 并在余额前提示当前峰/谷价格档位、距切换倒计时与使用建议。 |
| [mytianyi0712/dsh-tui-plugin-OhMyPi](https://github.com/mytianyi0712/dsh-tui-plugin-OhMyPi) | Host | `dsh-omp-tui` | Git only | 6 | 一个dsh的终端样式插件，灵感来自Oh My Pi |
| [ZichengGurrr/dsh-window](https://github.com/ZichengGurrr/dsh-window) | Host | `dsh-window-kit` | Git only | 6 |  |
| [dpskh/dsh-a2a](https://github.com/dpskh/dsh-a2a) | Host | `@dpskh/a2a` | Git only | 5 | Agent2Agent mesh for the Harness |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Host | `nowledge-mem-deepseek-harness` | Git only | 5 | One memory layer for every AI tool and agent, packaged for DeepSeek Harness |
| [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | Host | `dsh-tool-turbo` | Git only | 5 | Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simpl |
| [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Host | `self-control-guard` | Git only | 5 | Self-control guard plugin for DeepSeek Harness host exit and restart workflows. |
| [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) | Host | `deepseek-harness-wecom` | Git only | 5 | WeCom AI Bot text and image bridge for DeepSeek Harness |
| [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Host | `dsh-vision-sidecar` | Git only | 5 | Hosted free vision sidecar for DeepSeek Harness with durable session evidence |
| [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) | Host | `dsh-plugin-longgraph` | Git only | 5 | DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills |
| [ch1bug/dsh-mimo-agent-tools](https://github.com/ch1bug/dsh-mimo-agent-tools) | Host | `dsh-mimo-agent-tools` | Git only | 5 | Xiaomi MiMo search + multimodal tools for DeepSeek Harness agents: mimo_search/vision/audio/video/asr/tts |
| [tianji-qingtian/dsh-spec-loop](https://github.com/tianji-qingtian/dsh-spec-loop) | Host | `dsh-spec-loop` | Git only | 5 | Spec-driven 开发闭环（OpenSpec 兼容）：/spec 命令族驱动 生成规格 → 批准 → 实现 → 逐条验收 → 归档 \| Spec-driven dev loop (OpenSpec-compati |
| [MrMu666/dsh-LAN](https://github.com/MrMu666/dsh-LAN) | Host | `dsh-LAN` | Git only | 5 | 为DeepSeek  harness开启局域网访问及移动端页面的插件，移动端界面适配 |
| [BeiZi6/dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) | Host | `dsh-opencodego-usage` | Git only | 5 | DSH Web GUI plugin: OpenCodeGo quota breathing light + liquid-glass panel with rolling/weekly/monthly progress |
| [maxiaovivi/dsh-cloak-browser](https://github.com/maxiaovivi/dsh-cloak-browser) | Host | `dsh-cloak-browser` | Git only | 5 | Native CloakBrowser tools for DeepSeek Harness: isolated browser sessions, snapshots, interaction, screenshots |
| [qimidandapigu/dsh-xiaotangyuan-game](https://github.com/qimidandapigu/dsh-xiaotangyuan-game) | Host | `@qimidandapigu/dsh-xiaotangyuan-game` | Git only | 5 | 单机游戏内 AI 同伴「小汤圆」｜DeepSeek Harness |
| [ymh0000123/dsh-client-masquerade](https://github.com/ymh0000123/dsh-client-masquerade) | Host | `dsh-client-masquerade` | Git only | 5 | DeepSeek Harness 插件：让自定义 llm-pi-ai provider 伪装成 Claude Code / Codex 客户端（伪造客户端身份请求头）。A DeepSeek Harness plugin: |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Host | `dsh-plugin-knowledge-graph` | Git only | 4 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) | Host | `dsh-plugin-subhub` | Git only | 4 | Bring third-party subscription accounts into DeepSeek Harness - 为 DeepSeek Harness 接入第三方订阅账户(当前支持 OpenAI / Cha |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | Host | `@morlay/session-persistence-rdb` | Git only | 4 | session 关系型数据库持久化 |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Host | `dsh-openapi` | Git only | 4 | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Host | `dsh-prime-agent` | Git only | 4 | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode |
| [cyanseek/dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) | Host | `dsh-tool-chaos` | Git only | 4 | Deterministic fault injection and autonomous resilience tests for DeepSeek Harness tools |
| [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) | Host | `dsh-cad-review` | Git only | 4 | Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness |
| [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Host | `dsh-lineage` | Git only | 4 | Content-addressed artifact, fact, action and report lineage for DeepSeek Harness |
| [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Host | `dsh-capability-receipt` | Git only | 4 | Content-addressed receipts for skills actually loaded by DeepSeek Harness |
| [Sorwcyra/ds-vision-plugin](https://github.com/Sorwcyra/ds-vision-plugin) | Host | `ds-vision-plugin` | Git only | 4 | Paste images into DeepSeek Harness with a four-model vision race, OCR, and an automatic text bridge. |
| [Momojie-S/dsh-workspace-mcp](https://github.com/Momojie-S/dsh-workspace-mcp) | Host | `@momojie-s/dsh-workspace-mcp` | Git only | 4 | DSH 插件: 按 workspace 加载 MCP server (agent-scoped) |
| [CoaseEdge/AgentNavi](https://github.com/CoaseEdge/AgentNavi) | Host | `dsh-agentnavi` | Git only | 4 | The navigation of AI Agent. |
| [1HelloMan1/dsh-stats-dashboard](https://github.com/1HelloMan1/dsh-stats-dashboard) | Host | `dsh-stats-dashboard` | Git only | 4 | Deprecated: the complete usage dashboard was merged into dsh-usage-dashboard-plus. |
| [xiaoxiaosrm/dsh-mattpocock-skills](https://github.com/xiaoxiaosrm/dsh-mattpocock-skills) | Host | `@mattpocock-community/dsh-engineering-skills` | Git only | 4 | Unofficial DSH port of mattpocock/skills — Engineering (18) + Productivity (7) skills as a DeepSeek Harness bu |
| [silencieuxzero/Better_Deepseek_Harness](https://github.com/silencieuxzero/Better_Deepseek_Harness) | Host | `better-deepseek-harness` | Git only | 4 | Better Deepseek Harness, with some functional extensions to webui and Deepseek Harness·更好的deepseek harness，对we |
| [yangyongzhen/dsh-article-publish](https://github.com/yangyongzhen/dsh-article-publish) | Host | `dsh-article-publish` | Git only | 4 | Publish articles from DeepSeek Harness to CSDN / Juejin / CNBlog. dsh plugin. |
| [buguoshixc/deepseek-harness-external-migration](https://github.com/buguoshixc/deepseek-harness-external-migration) | Host | `deepseek-harness-external-migration` | Git only | 4 | **DeepSeek-Harness Migration Plugin** 是一款专为 [DeepSeek-Harness](https://github.com/deepseek-ai/deepseek-harness |
| [chaggle/dsh-powershell-check](https://github.com/chaggle/dsh-powershell-check) | Host | `@chaggle/dsh-powershell-check` | Git only | 4 | Native DeepSeek Harness plugin: gates pwsh tool calls against PowerShell pitfalls via the official tools/pre-e |
| [chiro2001/dsh-oc](https://github.com/chiro2001/dsh-oc) | Host | `@chiro2001/dsh-oc` | Git only | 4 | DeepSeek Harness × OpenCode TUI 前端：把 dsh 的 Agent、会话、工具接入官方 opencode 终端。OpenCode TUI frontend for the DeepSeek  |
| [MrWeiCodes/dsh-permgate](https://github.com/MrWeiCodes/dsh-permgate) | Host | `dsh-permgate` | Git only | 4 | 为 DeepSeek Harness（DSH）提供的细粒度权限控制插件 |
| [katsos/dsh-claude-cli](https://github.com/katsos/dsh-claude-cli) | Host | `dsh-claude-cli` | Git only | 4 | DeepSeek Harness LLM provider that runs your installed Claude Code CLI as the model backend — no API key. |
| [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | Host | `@dsh-community/dsh-ops-kit` | Git only | 3 | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, and plugin |
| [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) | Host | `mindspace-dsh-local-rag` | Git only | 3 | ARPM-derived local hybrid RAG plugin for DeepSeek Harness |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | Git only | 3 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [tafcear/kimi-tide](https://github.com/tafcear/kimi-tide) | Host | `dsh-kimi-tide` | Git only | 3 | 月汐 kimi-tide — DeepSeek Harness（DSH）双模型自动分工路由插件：按任务逐步骤在 Kimi 与 DeepSeek 之间选路（能力评分 × 预算窗口 × 图像护栏），决策全程可观测；0.4.x |
| [alxshelepenok/grove](https://github.com/alxshelepenok/grove) | Host | `dsh-grove` | Git only | 3 | A formal workflow protocol that keeps AI coding agents on track through machine-enforced invariants, verified  |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | Host | `@bill9109/dsh-webbridge` | Git only | 3 | DSH 结合 Kimi WebBridge |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Host | `dsh-tool-policy` | Git only | 3 | Declarative deny-by-default tool policy plugin for DeepSeek Harness |
| [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) | Host | `dsh-music-plugin` | Git only | 3 | DeepSeek Harness music plugin (dsh-plugin) |
| [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | Host | `dsh-governed-workflow` | Git only | 3 | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents. |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | Host | `dsh-plugin-miliastra-toolbox` | Git only | 3 | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | Host | `shopline-ai-toolkit-dsh` | Git only | 3 | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent |
| [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | Host | `@dsh-polyglot/bundle` | Git only | 3 | dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSee |
| [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) | Host | `deepseek-harness-lark` | Git only | 3 | Feishu and Lark text and image channel plugin for DeepSeek Harness |
| [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) | Host | `deepseek-harness-dingtalk` | Git only | 3 | DingTalk Stream text and image channel plugin for DeepSeek Harness |
| [Towzai/dsh-memory](https://github.com/Towzai/dsh-memory) | Host | `@towzai/dsh-memory` | Git only | 3 | Cross-session memory plugin for DeepSeek Harness (dsh): embedding search + automatic system-prompt injection |
| [jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) | Host | `dsh-survey` | Git only | 3 | Questionnaire-style batch questioning plugin for DeepSeek Harness: 10+ questions at once (single/multi/yes-no  |
| [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) | Host | `dsh-switch` | Git only | 3 | Evidence-first model control plane for DeepSeek Harness |
| [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Host | `dsh-2origin` | Git only | 3 | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness |
| [TYEclipse/dsh-webfetch](https://github.com/TYEclipse/dsh-webfetch) | Host | `dsh-webfetch` | Git only | 3 | Web page reader for DeepSeek Harness (dsh): fetch any URL and extract clean Markdown / plain text plus a link  |
| [hyls9527/dsh-plugins](https://github.com/hyls9527/dsh-plugins) | Host | `@hyls9527/dsh-memory` | Git only | 3 | Ecosystem plugins for DeepSeek Harness: bounded cross-session memory and skill lifecycle curation, ported from |
| [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | Host | `dsh-release-proof` | Git only | 3 | Reproducible multi-source release evidence for DeepSeek Harness artifacts and mirrors |
| [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Host | `dsh-benchmark` | Git only | 3 | Deterministic revision-pinned benchmarks and regression evidence for DeepSeek Harness |
| [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) | Host | `dsh-recovery-proof` | Git only | 3 | Read-only recovery drill evidence for DeepSeek Harness |
| [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Host | `dsh-action-parity` | Git only | 3 | Cross-surface action binding and replay parity evidence for DeepSeek Harness |
| [lynx-gt/dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) | Host | `dsh-subagent-cwd` | Git only | 3 | DeepSeek Harness subagent delegation enhancement |
| [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | Host | `dsh-narrative-ledger` | Git only | 3 | Verifiable narrative state, continuity and character-knowledge ledger for DeepSeek Harness |
| [zcXie777/dsh-image-reader](https://github.com/zcXie777/dsh-image-reader) | Host | `dsh-image-reader` | Git only | 3 | Give DeepSeek Harness agents native image reading: a read_image tool backed by any OpenAI-compatible vision en |
| [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) | Host | `dsh-policy-drift-proof` | Git only | 3 | Content-addressed, value-redacted policy drift evidence for DeepSeek Harness |
| [hellosky983/dsh-qrcode](https://github.com/hellosky983/dsh-qrcode) | Host | `dsh-qrcode` | Git only | 3 | DSH plugin: offline QR code (SVG/PNG/ASCII) and barcode (Code128/EAN-13) generator, no network, no shell. |
| [hellosky983/dsh-skillradar](https://github.com/hellosky983/dsh-skillradar) | Host | `dsh-skillradar` | Git only | 3 | DSH plugin: scans session-visible skills and ranks them by relevance to the recent conversation. |
| [MoneShadow/DeepSeek-Harness-linux-](https://github.com/MoneShadow/DeepSeek-Harness-linux-) | Host | `dsh-plugin-vision` | Git only | 3 | 一个基于官方WebUI二改的Linux桌面端，内置了一个外挂视觉插件(需手动接入API Key)，已经迭代了四个版本，可能还是有些小毛病，不过目前用下来暂时没有什么大问题。 |
| [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) | Host | `dsh-audit-bundle` | Git only | 3 | Content-addressed audit indexes across independent DeepSeek Harness evidence producers |
| [tdf1995/dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) | Host | `dsh-plugin-vision` | Git only | 3 | Vision for text-only LLMs in DeepSeek Harness (DSH): describe images / OCR / VQA via free Gemini & GLM vision  |
| [tradercjz/dsh-dolphindb](https://github.com/tradercjz/dsh-dolphindb) | Host | `@tradercjz/dsh-dolphindb` | Git only | 3 |  |
| [CZX2244/dsh-bilibili](https://github.com/CZX2244/dsh-bilibili) | Host | `dsh-bilibili` | Git only | 3 |  |
| [KevinWen7415/dsh-virtual-workspace](https://github.com/KevinWen7415/dsh-virtual-workspace) | Host | `dsh-virtual-workspace` | Git only | 3 | Virtual Workspaces for DeepSeek Harness: a dynamic Cordis Plugin that groups multiple project directories unde |
| [PandaColour/dsh-cmd-starter](https://github.com/PandaColour/dsh-cmd-starter) | Host | `dsh-cmd-starter` | Git only | 3 | 为deepseek-harness提供一个命令行启动工具，让它 --append-prompt  --resume 等类claude命令 |
| [DeepTrial/dsh-bash-rtk](https://github.com/DeepTrial/dsh-bash-rtk) | Host | `@deeptrial/dsh-bash-rtk` | Git only | 3 | DeepSeek Harness bash executor plugin that routes eligible commands through rtk (Rust Token Killer) to compres |
| [bwndlct/dsh-session-export](https://github.com/bwndlct/dsh-session-export) | Host | `dsh-session-export` | Git only | 3 | Export DeepSeek Harness (DSH) sessions to portable Markdown and JSON — dsh plugin |
| [bujue600-arch/dsh-testgen](https://github.com/bujue600-arch/dsh-testgen) | Host | `dsh-testgen` | Git only | 3 | Automated unit-test generation for DeepSeek Harness: /testgen command + generate_tests tool that scaffold, run |
| [1738348785/dsh-plugin-text-translation](https://github.com/1738348785/dsh-plugin-text-translation) | Host | `dsh-plugin-text-translation` | Git only | 3 | DSH plugin: text & document localization with tag-protected extraction, batch slicing and lossless assembly (g |
| [dongsheng123132/dsh-xiapan-media](https://github.com/dongsheng123132/dsh-xiapan-media) | Host | `dsh-xiapan-media` | Git only | 3 | Native vision, gpt-image-2 and Seedance plugins for DeepSeek Harness via Xiapan Cloud |
| [LeslieWylie/dsh-task-relay](https://github.com/LeslieWylie/dsh-task-relay) | Host | `dsh-task-relay` | Git only | 3 | DSH 跨会话任务接力板：task_push/list/claim/done + handoff_write/read |
| [zouyuanqing/dsh-vision-primitives](https://github.com/zouyuanqing/dsh-vision-primitives) | Host | `dsh-vision-primitives` | Git only | 3 | Native interactive visual-reasoning plugin for DeepSeek Harness: precise pixel grounding (SOM grid / zoom / an |
| [Blaczz/dsh-sci](https://github.com/Blaczz/dsh-sci) | Host | `dsh-sci` | Git only | 3 | Zero-dependency scientific computing tools for DeepSeek Harness: physical-unit conversion, CODATA physical con |
| [JoukoPuro/dsh-prompt-polish](https://github.com/JoukoPuro/dsh-prompt-polish) | Host | `dsh-prompt-polish` | Git only | 3 | 一个 DeepSeek Harness（DSH）插件： 在 Web 输入框的工具行中添加一个 ✨ 图标按钮。点击后选择打磨风格，已接入的大模型 会把你草稿中的提示词改写得更专业、更易被 AI 理解 。A DeepSeek |
| [Chhlafiu4312/citeguard](https://github.com/Chhlafiu4312/citeguard) | Host | `dsh-citeguard` | Git only | 3 | Citation extraction and evidence verification for DeepSeek Harness. |
| [Chhlafiu4312/promptwall](https://github.com/Chhlafiu4312/promptwall) | Host | `dsh-promptwall` | Git only | 3 | Local prompt-injection and secret-exfiltration firewall for DeepSeek Harness. |
| [harryopo/dsh-remote-ide](https://github.com/harryopo/dsh-remote-ide) | Host | `dsh-remote-ide` | Git only | 3 | SSH Remote IDE for DeepSeek Harness: connect via SSH and the IDE goes remote — explorer browses the server, ed |
| [xiaoxianyu-office/dsh-image-tools](https://github.com/xiaoxianyu-office/dsh-image-tools) | Host | `@dsh-external/dsh-image-tools` | Git only | 3 | DSH bundle plugin: chat-image bridge + read_image deny + conversational image_recognize for text-only main mod |
| [yuhui-sama/dsh-agentsoul](https://github.com/yuhui-sama/dsh-agentsoul) | Host | `@agentsoul/dsh-agentsoul` | Git only | 3 | Local personality, memory and distillation layer for DeepSeek Harness — SOUL/IDENTITY/USER/STATE persona files |
| [mang0cola/adb_dsh_plugin](https://github.com/mang0cola/adb_dsh_plugin) | Host | `adb-dsh-plugin` | Git only | 3 | DeepSeek Harness plugin for controlling Android devices through ADB |
| [wefio/dsh-engineering-services](https://github.com/wefio/dsh-engineering-services) | Host | `@local/dsh-engineering-services` | Git only | 3 | LSP+DAP+TASK，但是只支持JS/TS、Python |
| [xiekai886/dsh-MusicPlayer](https://github.com/xiekai886/dsh-MusicPlayer) | Host | `@dsh-external/dsh-music` | Git only | 3 | 这是一个可以让你边对话边听歌的 DeepSeek Harness 插件：折叠/展开两种可自由拖动的悬浮窗口形态，利用 Meting API 等解析源接入网易云音乐，支持歌单导入和按歌名或歌手搜索单曲导入。Chat and |
| [GongYuanCaiJi/dsh-simplify](https://github.com/GongYuanCaiJi/dsh-simplify) | Host | `dsh-simplify` | Git only | 3 | DeepSeek Harness 插件：审查最近改动的代码，就清晰度、一致性与可维护性提出改进（移植自 pi-simplify） |
| [Fro2en12/dsh-download-progress](https://github.com/Fro2en12/dsh-download-progress) | Host | `dsh-download-progress` | Git only | 3 | DSH web plugin: 下载进度面板（AI 产物） |
| [kun2-5code/dsh-plugin-template](https://github.com/kun2-5code/dsh-plugin-template) | Host | `dsh-plugin-template` | Git only | 3 | A starter template for DeepSeek Harness (dsh) plugins: six plugin shapes, fourteen browser UI surfaces, and de |
| [buhuikongpan/dsh-win-gitbash](https://github.com/buhuikongpan/dsh-win-gitbash) | Host | `dsh-tool-gitbash` | Git only | 3 | Git Bash tool plugin for Windows (replaces pwsh and WSL-only bash) |
| [MartinDelophy/dsh-timeline-studio-plugin](https://github.com/MartinDelophy/dsh-timeline-studio-plugin) | Host | `dsh-timeline-studio-plugin` | Git only | 3 | DeepSeek Harness plugin for Timeline Studio deterministic project inspection, editing, and rendering |
| [GongYuanCaiJi/dsh-copilot-sdk](https://github.com/GongYuanCaiJi/dsh-copilot-sdk) | Host | `dsh-copilot-sdk` | Git only | 3 | 桥接 GitHub Copilot 订阅到 DeepSeek Harness（移植自 github/copilot-sdk） |
| [lilyblessing/dsh-mcp-skill-panel](https://github.com/lilyblessing/dsh-mcp-skill-panel) | Host | `dsh-mcp-skill-panel` | Git only | 3 | MCP 与技能管理面板：设置页展示 MCP 服务器与 Skill 目录，随时启停释放上下文占用。 |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | Host | `dsh-plan-lattice` | Git only | 2 | Execution-time drift firewall for long-running DeepSeek Harness agents. Real-Harness tests: unsafe stale mutat |
| [SamurAIGPT/dsh-plugin-muapi](https://github.com/SamurAIGPT/dsh-plugin-muapi) | Host | `@dsh-plugin/dsh-plugin-muapi` | Git only | 2 | DeepSeek Harness plugin exposing MuApi's 100+ image/video/audio generation models as an agent tool |
| [anyuer678/dsh-logtimeline](https://github.com/anyuer678/dsh-logtimeline) | Host | `dsh-logtimeline` | Git only | 2 | Query local log files with Chinese natural-language time expressions — LogTimeline for DeepSeek Harness. |
| [dpskh/dsh-checkpoint](https://github.com/dpskh/dsh-checkpoint) | Host | `@dpskh/tool-checkpoint` | Git only | 2 | Mark an exploration start in the session; pairs with rewind to fold the exploration out of context. |
| [dpskh/dsh-rewind](https://github.com/dpskh/dsh-rewind) | Host | `@dpskh/tool-rewind` | Git only | 2 | Fold everything since the last checkpoint mark into an auto-generated report, replacing it in context while ke |
| [TT-Wang/dsh-slice-agent-loop](https://github.com/TT-Wang/dsh-slice-agent-loop) | Host | `@dsh-external/dsh-slice-agent-loop` | Git only | 2 | A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript |
| [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | Host | `@dsh-external/dsh-kb-sieve` | Git only | 2 | DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, determin |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Host | `@a179-sanae/dsh-code-check` | Git only | 2 |  |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | Host | `mmv-dspic` | Git only | 2 | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks  |
| [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) | Host | `dsh-eval-regression` | Git only | 2 |  |
| [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) | Host | `dsh-k12-lesson-builder` | Git only | 2 | DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | Host | `dsh-reloader` | Git only | 2 | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Host | `@dsh-memory/bundle` | Git only | 2 | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exa |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | Host | `dsh-playwright-cli` | Git only | 2 | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML rep |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Host | `@dsh-crosstalk/bundle` | Git only | 2 | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style |
| [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | Host | `@dsh-skillport/bundle` | Git only | 2 | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md di |
| [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | Host | `dsh-obsidian-export` | Git only | 2 | DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks |
| [sliverp/DeepSeek-harness-weixin](https://github.com/sliverp/DeepSeek-harness-weixin) | Host | `deepseek-harness-weixin` | Git only | 2 | Weixin ClawBot channel plugin for DeepSeek Harness with QR login and text/image messaging |
| [fly3366/DeepJIT](https://github.com/fly3366/DeepJIT) | Host | `deepjit` | Git only | 2 | JIT compiler plugin for deepseek-harness: compiles recurring agent workflows into hot skills and flow template |
| [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | Host | `dsh-capability-inspector` | Git only | 2 | DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins,  |
| [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | Host | `dsh-test-runner` | Git only | 2 | DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, pars |
| [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) | Host | `dshplug` | Git only | 2 | DeepSeek Harness 微信 ClawBot 消息桥插件 |
| [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) | Host | `dsh-guardian` | Git only | 2 | Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness. |
| [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) | Host | `dsh-specflow` | Git only | 2 | Specification-driven development toolkit for DeepSeek Harness. |
| [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) | Host | `dsh-gitflow` | Git only | 2 | Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness. |
| [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) | Host | `dsh-openai-codex-oauth` | Git only | 2 | ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness |
| [PerryLink/dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) | Host | `dsh-skill-pack-security` | Git only | 2 | Security-audit skill pack + plugin_vet supply-chain gate for DeepSeek Harness (dsh): 8 bilingual agent skills  |
| [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) | Host | `dsh-audio-dub` | Git only | 2 | Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent \| DSH 视频/音频配音插件 |
| [BrambleXu/dsh-revdiff](https://github.com/BrambleXu/dsh-revdiff) | Host | `dsh-revdiff` | Git only | 2 | Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current A |
| [lynx-gt/dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) | Host | `dsh-subagent-tools` | Git only | 2 | DeepSeek Harness subagent delegation enhancement |
| [kerwin2046/dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) | Host | `dsh-pin-recall` | Git only | 2 | DeepSeek Harness plugin: pin assistant replies and recall them into the model turn |
| [ByronLeeeee/dsh-legal-dashboard](https://github.com/ByronLeeeee/dsh-legal-dashboard) | Host | `dsh-legal-dashboard` | Git only | 2 | Matter-aware legal workspace dashboard and document agent tools for DeepSeek Harness |
| [zimai233/dsh-exam-countdown](https://github.com/zimai233/dsh-exam-countdown) | Host | `dsh-exam-countdown` | Git only | 2 | Chinese exam countdown for DeepSeek Harness. Query 64 built-in exams (gaokao, kaoyan, civil service, CET-4/6,  |
| [zimai233/dsh-video-downloader](https://github.com/zimai233/dsh-video-downloader) | Host | `dsh-video-downloader` | Git only | 2 | Media downloader for DeepSeek Harness. Detect and download video/audio from Bilibili, YouTube, Douyin, Xiaohon |
| [acosmi/dsh-plugin](https://github.com/acosmi/dsh-plugin) | Host | `dsh-dream-reflection` | Git only | 2 | Community plugin collection for DeepSeek Harness (DSH) |
| [baidd1011/dsh-code-impact](https://github.com/baidd1011/dsh-code-impact) | Host | `dsh-code-impact` | Git only | 2 | 面向 DeepSeek Harness 的只读 TypeScript/JavaScript 代码变更影响分析插件 Read-only TypeScript/JavaScript change impact analysi |
| [yangl326-Dylan/learning-dsh](https://github.com/yangl326-Dylan/learning-dsh) | Host | `@dylan/learning-dsh` | Git only | 2 | Just learning — versioned bilingual (EN/ZH) source-code learning pages for DeepSeek Harness (dsh), served as a |
| [Sev7een/dsh-plugin-automations](https://github.com/Sev7een/dsh-plugin-automations) | Host | `dsh-plugin-automations` | Git only | 2 | Scheduled tasks plugin for DeepSeek Harness Web Profile |
| [revive/dsh-git-credentials](https://github.com/revive/dsh-git-credentials) | Host | `dsh-git-credentials` | Git only | 2 | DeepSeek Harness plugin: GitLab and GitHub API tokens stay out of the model context — encrypted at rest (AES-2 |
| [dylan121322/llm-adaptive](https://github.com/dylan121322/llm-adaptive) | Host | `llm-adaptive` | Git only | 2 |  |
| [dongsheng123132/dsh-profile-lock-proof](https://github.com/dongsheng123132/dsh-profile-lock-proof) | Host | `dsh-profile-lock-proof` | Git only | 2 | Content-addressed proof that a DSH profile declaration, pnpm lock and installed bundles agree |
| [dongsheng123132/dsh-surface-contract-proof](https://github.com/dongsheng123132/dsh-surface-contract-proof) | Host | `dsh-surface-contract-proof` | Git only | 2 | Content-addressed conformance proof across recorded DSH ToolRuntime, MCP JSON-RPC and CLI JSON surfaces |
| [Lwc-LiuWenCheng/dsh-provider-usage](https://github.com/Lwc-LiuWenCheng/dsh-provider-usage) | Host | `dsh-provider-usage` | Git only | 2 | DSH Token用量监控，已测试OpenCode Go 计划 |
| [Blaczz/dsh-deck-builder](https://github.com/Blaczz/dsh-deck-builder) | Host | `dsh-deck-builder` | Git only | 2 | DeepSeek Harness tool plugin: convert Markdown into a self-contained HTML presentation (slides) with themes an |
| [TwistedRiCen/dsh-http-probe](https://github.com/TwistedRiCen/dsh-http-probe) | Host | `dsh-http-probe` | Git only | 2 | A bounded HTTP probe tool plugin for DeepSeek Harness. |
| [acnlabs/dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) | Host | `@acnlabs/dsh-plugin-acn` | Git only | 2 | DeepSeek Harness plugin: join ACN so this agent can discover, message, and collaborate with other agents. Defa |
| [dongsheng123132/dsh-windows-readiness-proof](https://github.com/dongsheng123132/dsh-windows-readiness-proof) | Host | `dsh-windows-readiness-proof` | Git only | 2 | Content-addressed readiness proof for sanitized DeepSeek Harness observations on managed Windows hosts |
| [Whning0513/deepseek-protocol-doctor](https://github.com/Whning0513/deepseek-protocol-doctor) | Host | `dsh-deepseek-protocol-doctor` | Git only | 2 | Checks DeepSeek tool loops, reasoning_content, strict schemas, and captured SSE. Also works as a DSH plugin. |
| [phelpsyacht/dshmath-manim](https://github.com/phelpsyacht/dshmath-manim) | Host | `dshmath-manim` | Git only | 2 | deepseek harness manim数学插件 |
| [asd176916847/dsh-plan-first-dev](https://github.com/asd176916847/dsh-plan-first-dev) | Host | `dsh-plan-first-dev` | Git only | 2 | DSH 插件：开发前自动进入 plan mode（plan-first development workflow） |
| [saurtone/dsh-tool-somark](https://github.com/saurtone/dsh-tool-somark) | Host | `dsh-tool-somark` | Git only | 2 | SoMark document parser tool (somark_parse) plugin for DeepSeek Harness |
| [HYY-King/dsh-plugin-auditor](https://github.com/HYY-King/dsh-plugin-auditor) | Host | `dsh-plugin-auditor` | Git only | 2 | DSH plugin auditor: pre-flight compatibility check for profile plugin combinations. DSH 插件审核器：安装新插件前扫描组合兼容性，预防 |
| [wacly/dsh-dynamic-plugin-manage](https://github.com/wacly/dsh-dynamic-plugin-manage) | Host | `dsh-dynamic-plugin-manage` | Git only | 2 | deepseek harness 动态插件管理 |
| [Momojie-S/dsh-subagent-model](https://github.com/Momojie-S/dsh-subagent-model) | Host | `@momojie-s/dsh-subagent-model` | Git only | 2 | DSH plugin: subagent_model tool — delegate to a subagent with a per-call selected model route (minimal fork of |
| [d-ouyang/dsh-plugin-md-outline](https://github.com/d-ouyang/dsh-plugin-md-outline) | Host | `dsh-plugin-md-outline` | Git only | 2 | DeepSeek Harness plugin: outline and lint Markdown document structure (heading tree, level skips, duplicate he |
| [xiaohj233/dsh-credential-handoff](https://github.com/xiaohj233/dsh-credential-handoff) | Host | `dsh-credential-handoff` | Git only | 2 | Conversation-local credential handoff for DSH that writes through the credential service without exposing the  |
| [Thomas-key/dsh-dynplugin-manager](https://github.com/Thomas-key/dsh-dynplugin-manager) | Host | `dsh-dynplugin-manager` | Git only | 2 | Manage DeepSeek Harness dynamic plugins: scan local directories, browse, and load with /dyn slash commands |
| [beijingwahw/dsh-usage-ledger](https://github.com/beijingwahw/dsh-usage-ledger) | Host | `dsh-usage-ledger` | Git only | 2 | dsh-usage-ledger（Token 费用统计）— 自动记下每笔对话花了多少 Token、多少钱（按对话、按天、累计都能查），价格自动跟着官方最新价走、支持多家国产厂商，低谷时段自动按便宜价算，预算超了自动提醒还 |
| [my-dsh-plugin/thinking-level-override](https://github.com/my-dsh-plugin/thinking-level-override) | Host | `dsh-thinking-level-override` | Git only | 2 | 自主覆盖与调整第三方模型的思考等级，修复工具内置预设缺失或不匹配的问题。 |
| [CaoNing3212/dsh-plugin-deepseek-balance](https://github.com/CaoNing3212/dsh-plugin-deepseek-balance) | Host | `dsh-plugin-deepseek-balance` | Git only | 2 | Deepseek余额显示 |
| [Q1hangL/dsh-ask-guard](https://github.com/Q1hangL/dsh-ask-guard) | Host | `dsh-ask-guard` | Git only | 2 | Timeout guard for ask_user_question in DeepSeek Harness: a lost or unanswered question resolves as ASK_TIMEOUT |
| [shaobeichen/dsh-im-bridge](https://github.com/shaobeichen/dsh-im-bridge) | Host | `dsh-im-bridge` | Git only | 2 | 不用一直在电脑前，远程操控Deepseek Harness，在飞书 / 企业微信 / Telegram 里指挥 DeepSeek Harness：远程派活 · 结果通知 · 危险操作审批 |
| [uknowmyface/locallens](https://github.com/uknowmyface/locallens) | Host | `@locallens/dsh-tool-screenshot-ocr` | Git only | 2 | Local OCR for DeepSeek Harness — read text from screenshots on your Mac with Apple's Vision framework. No API  |
| [lmst2/dsh-rename](https://github.com/lmst2/dsh-rename) | Host | `dsh-rename` | Git only | 2 | DeepSeek Harness slash command: /rename with a name, or let the model summarize the conversation and pick one |
| [mayf3/dsh-session-doctor](https://github.com/mayf3/dsh-session-doctor) | Host | `dsh-session-doctor` | Git only | 2 | 会话医生:诊断、解卡、读取 DeepSeek Harness 会话 / Diagnose, unstick, and read DSH sessions |
| [zoahdev/dsh-github-release-radar](https://github.com/zoahdev/dsh-github-release-radar) | Host | `dsh-github-release-radar` | Git only | 2 | GitHub Release Radar plugin for DeepSeek Harness: releases, repo stats, and repository search tools for dsh ag |
| [zoahdev/dsh-plugin-template](https://github.com/zoahdev/dsh-plugin-template) | Host | `dsh-plugin-template` | Git only | 2 | Minimal, verified template for DeepSeek Harness plugins: bundle manifest, one tool, runtime peer guard, tests, |
| [moononnn/DeepSeek-Harness-biaoqingbao](https://github.com/moononnn/DeepSeek-Harness-biaoqingbao) | Host | `dsh-biaoqingbao` | Git only | 2 | 一个在DSH上使用的表情包插件，在和agent聊天时让ta自然的插入表情包 |
| [ShiXiangYu2/dsh-translate-pro](https://github.com/ShiXiangYu2/dsh-translate-pro) | Host | `dsh-translate-pro` | Git only | 2 | Professional translation plugin for DeepSeek Harness: 18 languages, 4 styles, glossary control, whole-file tra |
| [yangyongzhen/dsh-git-workflow](https://github.com/yangyongzhen/dsh-git-workflow) | Host | `dsh-git-workflow` | Git only | 2 |  |
| [zoahdev/dsh-plugin-search](https://github.com/zoahdev/dsh-plugin-search) | Host | `dsh-plugin-search` | Git only | 2 | Plugin discoverability for DeepSeek Harness: search npm + awesome-dsh-plugin, look up packages, browse the cur |
| [cinob/dsh-web-search-multi](https://github.com/cinob/dsh-web-search-multi) | Host | `dsh-web-search-multi` | Git only | 2 | 🌐 Multi-provider web search plugin for DeepSeek Harness: Zero-key Bing/Baidu direct search, free-tier APIs (T |
| [ivorytower1026/dsh-im-bot](https://github.com/ivorytower1026/dsh-im-bot) | Host | `@dsh-extra/im-channel` | Git only | 2 | dsh-plugin: Connect WeChat & Feishu to DeepSeek Harness (dsh) — scan-code bot login, project selection, and fu |
| [echo-lgtm/dsh-plugin-wechat-official](https://github.com/echo-lgtm/dsh-plugin-wechat-official) | Host | `dsh-plugin-wechat-official` | Git only | 2 | DeepSeek Harness 微信 ClawBot 渠道插件：通过腾讯官方 iLink 接口让用户在个人微信中与 DSH Agent 对话 |
| [Yihong89/dsh-voice-core](https://github.com/Yihong89/dsh-voice-core) | Host | `dsh-voice-core` | Git only | 2 | voice engine, using Qwen TTS model |
| [xiaozhe7772222/dsh-draw-router](https://github.com/xiaozhe7772222/dsh-draw-router) | Host | `dsh-draw-router` | Git only | 2 | Universal image generation router for DeepSeek Harness (DSH): auto-discovers image models from any OpenAI-comp |
| [hellosky983/dsh-foundry](https://github.com/hellosky983/dsh-foundry) | Host | `dsh-foundry` | Git only | 2 | Plugin Foundry — a self-extending, everything-is-a-plugin compiler for DeepSeek Harness (DSH). Blueprint regis |
| [Tikzen/dsh-agent-arena](https://github.com/Tikzen/dsh-agent-arena) | Host | `dsh-agent-arena` | Git only | 2 | Interactive multi-agent collaboration, meetings, group chats, and task execution for DeepSeek Harness. |
| [6pofx/dsh-go](https://github.com/6pofx/dsh-go) | Host | `dsh-go-usage` | Git only | 2 | OpenCode GO 套餐用量监控插件：账户三窗口额度 + DSH 按模型 Token/金额统计，为 DeepSeek Harness Web GUI 而生 |
| [go-farther-and-farther/dsh-tool-eyes](https://github.com/go-farther-and-farther/dsh-tool-eyes) | Host | `dsh-tool-eyes` | Git only | 2 | DeepSeek Harness (DSH) 本地视觉眼睛插件:screen 工具(截图/图片交给本地视觉模型描述)+ ocr 工具(Windows 内置 OCR 逐字提取文字)。零云端、OCR 零 GPU、图片不出本机 |
| [ZEM17/dsh-subagent-agy](https://github.com/ZEM17/dsh-subagent-agy) | Host | `@dsh-external/dsh-subagent-antigravity` | Git only | 2 |  |
| [KLRSL/dsh-biomemory](https://github.com/KLRSL/dsh-biomemory) | Host | `dsh-biomemory` | Git only | 2 | 生物仿生记忆系统插件：Biomimetic memory for DeepSeek Harness — transparent Markdown memory, approval-gated writes, frozen |
| [Badakonpro/dsh-llm-volcengine](https://github.com/Badakonpro/dsh-llm-volcengine) | Host | `dsh-llm-volcengine` | Git only | 2 | 为 DeepSeek Harness (DSH) 接入火山方舟 Agent Plan 与 Coding Plan 的插件，思考强度（low/medium/high/xhigh/max）兼容性已实测验证 |
| [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) | Host | `@amethystluna/logicprobe` | Git only | 1 | Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design d |
| [Brain2nd/DSH-AutoLab](https://github.com/Brain2nd/DSH-AutoLab) | Host | `dsh-autolab` | Git only | 1 | DeepSeek Harness (DSH) AutoLab 插件：自治研究控制器 + 本地会话通信 —— 沿袭 DSH 极致内核，高缓存命中、高性能低成本 |
| [CyBerKitTen0009/dsh-quota-dashboard](https://github.com/CyBerKitTen0009/dsh-quota-dashboard) | Host | `dsh-quota-dashboard` | Git only | 1 |  |
| [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) | Host | `@dely0/dsh-personal-workbench` | Git only | 1 | DSH 个人工作台：日历 + 任务列表 + AI 澄清/拆解/执行/复盘 \| Personal workbench for DeepSeek Harness Web: calendar + task list + AI |
| [GitRuozhi/dsh-github-mcp](https://github.com/GitRuozhi/dsh-github-mcp) | Host | `dsh-github-mcp` | Git only | 1 | DSH-GitHub bridge: direct GitHub access for DSH via the official GitHub MCP server, plus a fix for the officia |
| [JonyChan8394/dsh-llm-balance](https://github.com/JonyChan8394/dsh-llm-balance) | Host | `dsh-llm-balance` | Git only | 1 | Show LLM API balances under the chat input: DeepSeek, OpenRouter, SiliconFlow and any custom provider with a b |
| [LeslieWylie/dsh-fleet-audit](https://github.com/LeslieWylie/dsh-fleet-audit) | Host | `dsh-fleet-audit` | Git only | 1 | DSH agent-fleet hygiene audit plugin: credential-file permissions, embedded git-remote credentials (masked), p |
| [Ox2g/dsh-plugin-wechat](https://github.com/Ox2g/dsh-plugin-wechat) | Host | `@ox2g/dsh-plugin-wechat` | Git only | 1 | WeChat access plugin for DeepSeek Harness (DSH) |
| [Raphaelutumn/dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) | Host | `dsh-change-budget` | Git only | 1 | DeepSeek Harness file-safety guardrail that limits AI coding-agent file edits per turn and prevents too many f |
| [SCSpotato/dsh-remote](https://github.com/SCSpotato/dsh-remote) | Host | `dsh-remote-control` | Git only | 1 | Native Android client to remotely control DeepSeek Harness (DSH) from your phone |
| [Shiyao-Huang/awesome-deepseek-harness-plugin](https://github.com/Shiyao-Huang/awesome-deepseek-harness-plugin) | Host | `deeplugin-market` | Git only | 1 | Public DeepSeek Harness plugin Store and ecosystem dataset: install specs, source evidence, SQLite history, me |
| [Tianbaidi/dsh-plugin-vision](https://github.com/Tianbaidi/dsh-plugin-vision) | Host | `dsh-plugin-vision` | Git only | 1 |  |
| [Very12345/sai](https://github.com/Very12345/sai) | Host | `sai-dsh-plugin` | Git only | 1 | A local-first Android coding agent powered by the official DeepSeek Harness |
| [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) | Host | `dsh-plugin-git-inspect` | Git only | 1 | Read-only Git inspection tools for DeepSeek Harness |
| [WeiYe6/dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) | Host | `dsh-session-handoff` | Git only | 1 | Hand your long DSH session over to a clean one: /handoff summarizes the conversation with an LLM, creates a ne |
| [Xiaopeng212321414321413231/critical-skillgovern](https://github.com/Xiaopeng212321414321413231/critical-skillgovern) | Host | `dsh-skillgovern` | Git only | 1 | 🔍 Critical SkillGovern — 批判式技能治理框架。跨平台（Hermes/Claude Code/Codex）技能质量审查方法论，已在 120+ 技能实战验证 |
| [allentnetus/dsh-job-hunting](https://github.com/allentnetus/dsh-job-hunting) | Host | `dsh-job-hunting` | Git only | 1 | DeepSeek Harness job hunting plugin and runtime skill for local job intelligence workflows. |
| [hellosky983/dsh-mc-companion](https://github.com/hellosky983/dsh-mc-companion) | Host | `dsh-mc-companion` | Git only | 1 | Friendly AI Minecraft companion for DeepSeek Harness: follows the player, chats like a friend, remembers adven |
| [jaxxchen003/foliodrop-dsh-publish](https://github.com/jaxxchen003/foliodrop-dsh-publish) | Host | `@foliodrop/dsh-publish` | Git only | 1 | Publish DeepSeek Harness agent output as a shareable FolioDrop URL |
| [lecutu/dsh-slide-reflex](https://github.com/lecutu/dsh-slide-reflex) | Host | `dsh-slide-reflex` | Git only | 1 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| [nexsjournal/dsh-imagegen-plugin](https://github.com/nexsjournal/dsh-imagegen-plugin) | Host | `dsh-imagegen-plugin` | Git only | 1 | 给 DeepSeek Harness（DSH）加上第三方生图/改图能力的插件：对话召唤 + 设置卡片，支持 OpenAI 兼容 / 阿里百炼 / Replicate / fal.ai |
| [paul-yangmy/dsh-tavily-web-search](https://github.com/paul-yangmy/dsh-tavily-web-search) | Host | `dsh-tavily-web-search` | Git only | 1 | Tavily-backed web search provider plugin (bundle) for DeepSeek Harness (dsh) |
| [roxyyn0304/dsh-tool-everything](https://github.com/roxyyn0304/dsh-tool-everything) | Host | `dsh-tool-everything` | Git only | 1 | DeepSeek Harness的 Everything 搜索工具插件 |
| [sunny0826/dsh-plugin-herdr](https://github.com/sunny0826/dsh-plugin-herdr) | Host | `dsh-plugin-herdr` | Git only | 1 | Herdr control-plane plugin for DeepSeek Harness (DSH): observe and drive Herdr — a terminal workspace manager  |
| [twanonymous/agent-dispatch-cli](https://github.com/twanonymous/agent-dispatch-cli) | Host | `dsh-cli-delegator` | Git only | 1 | Codex-native capability router for delegating bounded tasks to configurable local AI CLIs. |
| [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | Host | `deepseek-harness-plugin-from-scratch` | Git only | 1 | Code-audited, progressive guide to production-grade DeepSeek Harness plugins |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Host | `dsh-toolbelt` | Git only | 1 | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write gua |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Host | `dsh-tool-monitor` | Git only | 1 | Monitor existing DeepSeek Harness background jobs without running commands twice |
| [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Host | `dsh-kimi-bridge` | Git only | 1 | Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab. |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | Host | `dsh-plugin-wepre` | Git only | 1 | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | Host | `dsh-session-index` | Git only | 1 |  |
| [TTTPOB/dsh-task-models](https://github.com/TTTPOB/dsh-task-models) | Host | `dsh-task-models` | Git only | 1 | DeepSeek Harness plugin with per-task model and reasoning-effort selection |
| [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | Host | `dsh-security-scan` | Git only | 1 |  |
| [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | Host | `dsh-webhook-bridge` | Git only | 1 |  |
| [kit-zeason/dsh-simple-CLI](https://github.com/kit-zeason/dsh-simple-CLI) | Host | `dsh-simple-cli` | Git only | 1 | Minimal DeepSeek Harness extension tailored for contemporary CLI mobilization. |
| [SLAPaper/dsh-self-checking-profile](https://github.com/SLAPaper/dsh-self-checking-profile) | Host | `dsh-self-checking` | Git only | 1 | A drop-in dsh web profile that adds the **Self Checking** sandbox mode to DeepSeek Harness (dsh) |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | Host | `@dsh-routines/bundle` | Git only | 1 | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file di |
| [TYEclipse/dsh-netdoctor](https://github.com/TYEclipse/dsh-netdoctor) | Host | `dsh-netdoctor` | Git only | 1 | Network diagnostics toolbox for DeepSeek Harness (dsh): DNS lookup, ICMP ping, TCP port check, TLS cert check, |
| [asdf17128/dshp](https://github.com/asdf17128/dshp) | Host | `dshp` | Git only | 1 | Manage DeepSeek Harness profiles — list, create, clone, diff, and share a whole dsh setup as one portable file |
| [f0909172434/dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) | Host | `dsh-plugin-verified-search` | Git only | 1 | Verified current-source search workflow for DeepSeek Harness |
| [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) | Host | `plugin-review` | Git only | 1 | DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件) |
| [Karuisawa-Mrs/dsh-plugins](https://github.com/Karuisawa-Mrs/dsh-plugins) | Host | `@dsh-plugs-dev/dsh-web-search-firecrawl` | Git only | 1 | Community plugins for DeepSeek Harness (DSH) |
| [Lbryany/dsh-codebuddy](https://github.com/Lbryany/dsh-codebuddy) | Host | `@lbryany/dsh-codebuddy` | Git only | 1 | CodeBuddy OAuth, dynamic models, and reasoning controls for DeepSeek Harness |
| [BrambleXu/dsh-prompt-profile](https://github.com/BrambleXu/dsh-prompt-profile) | Host | `dsh-prompt-profile` | Git only | 1 | Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, a |
| [fryghost/deepseek-eyes](https://github.com/fryghost/deepseek-eyes) | Host | `deepseek-eyes` | Git only | 1 | Community plugin for DeepSeek Harness: give text-only models eyes - paste images natively, described via an Op |
| [ropon/dsh-plugin-clawrouters](https://github.com/ropon/dsh-plugin-clawrouters) | Host | `dsh-plugin-clawrouters` | Git only | 1 | One-key ClawRouters plugin for DeepSeek Harness: chat, image, video, and web search |
| [AllenCX/dsh-quant-workspace](https://github.com/AllenCX/dsh-quant-workspace) | Host | `dsh-quant-workspace` | Git only | 1 | DSH plugin bridging a local low-frequent-quant engine: single-ticker signal card, backtest, review (read-only) |
| [lordship12138-crypto/dsh-plugin-dedup](https://github.com/lordship12138-crypto/dsh-plugin-dedup) | Host | `dsh-plugin-dedup` | Git only | 1 |  |
| [fieldnote-ops/frameevidence](https://github.com/fieldnote-ops/frameevidence) | Host | `frameevidence` | Git only | 1 | Independent, bounded Figma REST evidence plugin for DeepSeek Harness: read-only node inspection and temporary  |
| [tanf1ng/dsh-tool-hackernews](https://github.com/tanf1ng/dsh-tool-hackernews) | Host | `dsh-tool-hackernews` | Git only | 1 | Hacker News tool suite (hn_top_stories, hn_search, hn_item) for DeepSeek Harness agents |
| [reshuibuduo/tmcra-plugin-deepseek-harness](https://github.com/reshuibuduo/tmcra-plugin-deepseek-harness) | Host | `dsh-tmcra-memory` | Git only | 1 | TMCRA Integration — lifecycle memory for DeepSeek Harness. |
| [EvilIrving/dsh-proof](https://github.com/EvilIrving/dsh-proof) | Host | `dsh-proof` | Git only | 1 | Read-only acceptance layer for DeepSeek Harness: a verifier gates every turn and steers gaps back into the age |
| [mitao-su/dsh-playwright-native](https://github.com/mitao-su/dsh-playwright-native) | Host | `dsh-playwright-native` | Git only | 1 | 把原生 Playwright CLI 注册为 DeepSeek Harness 透传工具（dsh-plugin） |
| [zimai233/dsh-figma-to-lottie](https://github.com/zimai233/dsh-figma-to-lottie) | Host | `dsh-figma-to-lottie` | Git only | 1 | Figma/SVG to Lottie animation compiler for DeepSeek Harness. Turn SVG paths and keyframe data into self-contai |
| [miaobuao/dsh-document-parser](https://github.com/miaobuao/dsh-document-parser) | Host | `dsh-document-parser` | Git only | 1 | A DeepSeek Harness document parsing tool powered by LiteParse |
| [Temoa/dsh-rules-paths](https://github.com/Temoa/dsh-rules-paths) | Host | `@temoa/dsh-rules-paths` | Git only | 1 | Claude Code-style paths: rule injection for DeepSeek Harness (DSH). |
| [ch1bug/dsh-wsl-bridge](https://github.com/ch1bug/dsh-wsl-bridge) | Host | `dsh-wsl-bridge` | Git only | 1 | Windows access tools for WSL agents: win_ls/win_read/win_write/win_run/win_open/win_path/win_drives as a DeepS |
| [ciceroyang/dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) | Host | `dsh-report-studio` | Git only | 1 | Turn a DeepSeek Harness session into deliverable work reports (daily/weekly/handoff/article) with verifiable r |
| [caopu16/dsh-llm-kiro](https://github.com/caopu16/dsh-llm-kiro) | Host | `dsh-llm-kiro` | Git only | 1 | deepseek-harness 的插件，可以使用kiro的模型（claude系列）和账号 |
| [sherconan/dsh-entity-dd](https://github.com/sherconan/dsh-entity-dd) | Host | `dsh-entity-dd` | Git only | 1 | 出海交易对手尽调 · DeepSeek Harness 插件：先确认你在跟哪个法人签约，再判断这份登记资料能不能作为决策依据。免费官方数据源，无需密钥。 |
| [LKRCharon/dsh-cc-switch](https://github.com/LKRCharon/dsh-cc-switch) | Host | `dsh-cc-switch` | Git only | 1 | Sync cc-switch provider profiles into DeepSeek Harness (DSH) model routes — CLI, slash command, and agent tool |
| [me9rez/dsh-vlm-bridge](https://github.com/me9rez/dsh-vlm-bridge) | Host | `dsh-vlm-bridge` | Git only | 1 | DeepSeek Harness (dsh) bundle plugin: vision_analyze tool lets text-only LLM agents read images via SenseNova  |
| [Yuki-takuya-kun/dsh-engine-switch](https://github.com/Yuki-takuya-kun/dsh-engine-switch) | Host | `dsh-engine-switch` | Git only | 1 | Route DeepSeek Harness top-level sessions to pluggable loop engines by agent-preset — Claude Code ships as a b |
| [Ri0n72Y/dsh-plugin-practice](https://github.com/Ri0n72Y/dsh-plugin-practice) | Host | `dsh-plugin-practice` | Git only | 1 | learn how to write cordis dsh plugin |
| [lamost423/dsh-todo-freshness-guard](https://github.com/lamost423/dsh-todo-freshness-guard) | Host | `dsh-todo-freshness-guard` | Git only | 1 | Out-of-tree DeepSeek Harness guard that prevents stale todo_write state |
| [LeslieWylie/dsh-session-search-pro](https://github.com/LeslieWylie/dsh-session-search-pro) | Host | `dsh-session-search-pro` | Git only | 1 | Advanced cross-session full-text search for DeepSeek Harness — search past and current DSH sessions using the  |
| [xsuas/dsh-balance-display](https://github.com/xsuas/dsh-balance-display) | Host | `@xsuas/dsh-balance-display` | Git only | 1 | DeepSeek Harness 余额显示插件 |
| [Whning0513/awesome-deepseek-skills](https://github.com/Whning0513/awesome-deepseek-skills) | Host | `dsh-awesome-deepseek-skills` | Git only | 1 | Pinned and statically verified Agent Skills for DeepSeek and DSH |
| [muretai/muretai-dsh-skill](https://github.com/muretai/muretai-dsh-skill) | Host | `muretai-dsh-skill` | Git only | 1 | Join the Muretai agent network from DeepSeek Harness (dsh) — one-step install, MCP wiring, inbound-mail wake |
| [CSY656/dsh-skill-remote](https://github.com/CSY656/dsh-skill-remote) | Host | `dsh-skill-remote` | Git only | 1 | Remote skills.sh/GitHub skill provider and installer for DeepSeek Harness — install any skill with one prompt. |
| [skystar567/dsh-openai-plugins](https://github.com/skystar567/dsh-openai-plugins) | Host | `dsh-openai-account` | Git only | 1 | 用于在dsh和openai账户之间建立连接 |
| [outnever/dsh-research-first](https://github.com/outnever/dsh-research-first) | Host | `dsh-research-first` | Git only | 1 | Research-first assistant for DeepSeek Harness: gently nudge agents to investigate docs/code/community before e |
| [xingling80/dsh-zhipu-vision](https://github.com/xingling80/dsh-zhipu-vision) | Host | `dsh-zhipu-vision` | Git only | 1 |  |
| [fieldnote-ops/keyringseam](https://github.com/fieldnote-ops/keyringseam) | Host | `keyringseam` | Git only | 1 | Independent macOS Keychain credential provider for DeepSeek Harness, with a signed and notarized universal hel |
| [fieldnote-ops/relayloom](https://github.com/fieldnote-ops/relayloom) | Host | `relayloom` | Git only | 1 | Independent, default-off DingTalk Stream relay plugin for DeepSeek Harness: allowlisted sessions, ACK-first re |
| [1052326311/dsh-goal-quiescence](https://github.com/1052326311/dsh-goal-quiescence) | Host | `dsh-goal-quiescence` | Git only | 1 | Completion evidence gate for DeepSeek Harness goal-mode subagents |
| [hyls9527/dsh-bundle-updater](https://github.com/hyls9527/dsh-bundle-updater) | Host | `dsh-bundle-updater` | Git only | 1 | DSH 整合包插件管理器：检查更新 / 搜索 / 安装 / 卸载 / 安全审计（npm / GitHub / 本地链接）｜Full-lifecycle plugin manager for DSH profile bun |
| [Hyna-hla/dsh-md-table-formatter](https://github.com/Hyna-hla/dsh-md-table-formatter) | Host | `dsh-md-table-formatter` | Git only | 1 |  |
| [jonah791/dsh-agent-context](https://github.com/jonah791/dsh-agent-context) | Host | `dsh-agent-context` | Git only | 1 | DSH plugin: dsh-agent-context |
| [jonah791/dsh-agent-life](https://github.com/jonah791/dsh-agent-life) | Host | `dsh-agent-life` | Git only | 1 | DSH plugin: dsh-agent-life |
| [damozhang/dsh-herdr-bridge](https://github.com/damozhang/dsh-herdr-bridge) | Host | `herdr-bridge` | Git only | 1 |  |
| [chenkezhen480/dsh-semantic-memory](https://github.com/chenkezhen480/dsh-semantic-memory) | Host | `dsh-plugin-semantic-memory` | Git only | 1 | 为deepseek-harness添加向量化跨会话记忆插件 |
| [mang0cola/frida_dsh_plugin](https://github.com/mang0cola/frida_dsh_plugin) | Host | `frida-dsh-plugin` | Git only | 1 |  |
| [TIZ36/evo](https://github.com/TIZ36/evo) | Host | `evo-memory` | Git only | 1 | agent memory plugin based on CLP |
| [yangyongzhen/dsh-scheduler](https://github.com/yangyongzhen/dsh-scheduler) | Host | `dsh-scheduler` | Git only | 1 |  |
| [Chillizu/MiopIIk](https://github.com/Chillizu/MiopIIk) | Host | `@chillizu/mop-capabilities` | Git only | 1 | DeepSeek Harness 插件集——恢复/执行/授权/探测/学习/遥测 7 个单职责插件 + miopiik preset 模板 \| Single-purpose plugin suite for DeepSe |
| [sijidoubi/dsh-plugin-mermaid](https://github.com/sijidoubi/dsh-plugin-mermaid) | Host | `dsh-tool-mermaid` | Git only | 1 | DeepSeek Harness (dsh) plugin: mermaid_render tool renders Mermaid source to SVG in-process (mermaid 11 + jsdo |
| [cinob/dsh-plugin-custom-provider-enhancer](https://github.com/cinob/dsh-plugin-custom-provider-enhancer) | Host | `dsh-plugin-custom-provider-enhancer` | Git only | 1 | ⚡ DeepSeek Harness 自定义模型增强插件：在配置第三方提供商时，自动从权威模型库补齐上下文大小、Token 上限、视觉多模态输入与思考强度档位。 |
| [Snail-Turbo/dsh-android-sandbox](https://github.com/Snail-Turbo/dsh-android-sandbox) | Host | `dsh-userspace-bash` | Git only | 1 |  |
| [ciceroyang/dsh-plugin-starter](https://github.com/ciceroyang/dsh-plugin-starter) | Host | `{{PKG_NAME}}` | Git only | 1 | Scaffold a battle-tested DeepSeek Harness plugin (bundle, tool, skill, tests, CI) in one command |
| [yan5236/dsh-memory](https://github.com/yan5236/dsh-memory) | Host | `@nanmicoder/dsh-memory` | Git only | 1 | Two-phase long-term memory plugin for DeepSeek Harness (DSH): per-session extraction + global consolidation, a |
| [chenkezhen480/dsh-multimodal](https://github.com/chenkezhen480/dsh-multimodal) | Host | `dsh-plugin-multimodal` | Git only | 1 | 添加deepseek harness生图识图能力插件 |
| [KKLL2025/dsh-project-anchor](https://github.com/KKLL2025/dsh-project-anchor) | Host | `dsh-project-anchor` | Git only | 1 | User-approved Goal, Milestone, and Turn checkpoints for solo long-running DeepSeek Harness projects. |
| [ShanHaiFish/dsh-plugin-security-review](https://github.com/ShanHaiFish/dsh-plugin-security-review) | Host | `dsh-plugin-security-review` | Git only | 1 | DSH 动态 Cordis 插件安装安全审查守卫 (DeepSeek Harness plugin install security review gate, security-first) |
| [a1swg1159-pixel/dsh-prompt-shield](https://github.com/a1swg1159-pixel/dsh-prompt-shield) | Host | `dsh-prompt-shield` | Git only | 1 | Runtime prompt-injection detection and quarantine for DeepSeek Harness tool results. |
| [bxsexc/dsh-roblox-studio](https://github.com/bxsexc/dsh-roblox-studio) | Host | `@dsh-external/dsh-roblox-studio` | Git only | 1 | DeepSeek Harness native plugin: Settings UI for the Roblox Studio MCP bridge - list connected Studio instances |
| [lizhecome/deepseek-harness-flowchart](https://github.com/lizhecome/deepseek-harness-flowchart) | Host | `@lizhecome/dsh-flowchart` | Git only | 1 | Beautiful themed SVG flowchart tool bundle for DeepSeek Harness |
| [Qshuai0213/super-wechat-bridge](https://github.com/Qshuai0213/super-wechat-bridge) | Host | `super-wechat-bridge` | Git only | 1 | 微信 iLink ClawBot 远程桥接插件（DeepSeek Harness）：官方 iLink 协议直连，Web 设置界面（扫码登录/模型/预设/权限/会话管理）+ 24h 自动续期 |
| [elegymythos/exam-paper-plugin](https://github.com/elegymythos/exam-paper-plugin) | Host | `exam-paper-plugin` | Git only | 1 | DeepSeek Harness 插件：自动识别上传的 Word(.doc / .docx) / PDF / 纯文本 题目文件，抽取题目与配图，按你的选择生成一张带书写空隙的可打印试卷（.docx 可编辑 + .html |
| [LiJunfeng000000000000/zotero-mcp-dsh](https://github.com/LiJunfeng000000000000/zotero-mcp-dsh) | Host | `zotero-mcp-dsh` | Git only | 1 | 把本地 Zotero 文献库接入 DSH，让模型在会话中 直接检索文献、读取文献基本信息和 PDF 全文 |
| [lizhecome/deepseek-harness-tool-palette](https://github.com/lizhecome/deepseek-harness-tool-palette) | Host | `@lizhecome/dsh-tool-palette` | Git only | 1 | Progressive tool discovery and per-agent unlocking for DeepSeek Harness |
| [zriyox/dsh-goal-scaffold](https://github.com/zriyox/dsh-goal-scaffold) | Host | `dsh-goal-scaffold` | Git only | 1 | 一句话大需求先别急着跑：拦一下问你要不要先规划，自动生成带验收清单的 plan.md 再开工 — DeepSeek Harness 插件 / Catches one-sentence mammoth tasks and  |
| [fengMax1997/dsh-line-select](https://github.com/fengMax1997/dsh-line-select) | Host | `dsh-line-select` | Git only | 1 |  |
| [SageChenAI/dsh-diary-detective](https://github.com/SageChenAI/dsh-diary-detective) | Host | `dsh-diary-detective` | Git only | 1 | DSH插件下的赛博日记，助力个人成长 |
| [EricXu20266/dsh-discovery](https://github.com/EricXu20266/dsh-discovery) | Host | `dsh-discovery` | Git only | 1 | DSH plugin discovery browser - browse & search community plugins on GitHub (read-only, no one-click installs) |
| [txy-ucas/dsh-workspace-snapshot](https://github.com/txy-ucas/dsh-workspace-snapshot) | Host | `dsh-workspace-snapshot` | Git only | 1 | A bounded, read-only Git workspace status plugin for DeepSeek Harness. |
| [zfu691531-hash/dsh-codex-collab](https://github.com/zfu691531-hash/dsh-codex-collab) | Host | `dsh-codex-collab` | Git only | 1 | Visible bidirectional local collaboration between DeepSeek Harness and Codex Desktop via app-server and MCP. |
| [qiuyiwu1989-star/dsh-k12-substrate](https://github.com/qiuyiwu1989-star/dsh-k12-substrate) | Host | `dsh-k12-substrate` | Git only | 1 | K12 capability substrate for DeepSeek Harness — 143 objectively-decidable capability anchors and 6,091 list it |
| [ASAKAFENG/dsh-qq-remote](https://github.com/ASAKAFENG/dsh-qq-remote) | Host | `@dsh-external/dsh-qq-remote` | Git only | 1 |  |
| [konwait12/dsh-ai-pm](https://github.com/konwait12/dsh-ai-pm) | Host | `dsh-ai-pm` | Git only | 1 | DSH AI-PM 插件：把 pm-scaffold 的 PRD 工作流接入 DeepSeek Harness——agent 侧 ai_pm_* 模型工具（起草/机器闸门/回溯），GUI 侧需求看板与不可绕过的人工确认闸 |
| [Leeminjing/dsh-messages-sanitizer](https://github.com/Leeminjing/dsh-messages-sanitizer) | Host | `dsh-messages-sanitizer` | Git only | 1 | DeepSeek Harness plugin: auto-repairs invalid tool_calls/tool message pairing in the messages array to stop 40 |
| [xsoc1/dsh-image-vision](https://github.com/xsoc1/dsh-image-vision) | Host | `@dsh-external/dsh-image-vision` | Git only | 1 | Eyes for text-only DeepSeek: view_image tool (local Ollama or any OpenAI-compatible VLM) + chat image-attachme |
| [moxingovo/dsh-github](https://github.com/moxingovo/dsh-github) | Host | `dsh-plugin-github` | Git only | 1 | DeepSeek Harness plugin: GitHub repository & issue search, repo/issue details, and file reading tools (github_ |
| [moxingovo/dsh-bilibili](https://github.com/moxingovo/dsh-bilibili) | Host | `dsh-plugin-bilibili` | Git only | 1 | DeepSeek Harness plugin: Bilibili video search, metadata, and subtitle transcripts (bilibili_search / bilibili |
| [Hua1Q1nG/dsh-prompt-self](https://github.com/Hua1Q1nG/dsh-prompt-self) | Host | `dsh-prompt-self-client` | Git only | 1 | 个人 Prompt 画像引擎（DSH 双面客户端插件）：消息级 prompt 自动改写 + 自动学习 + 可视化开关与画像 UI |
| [r600a-code/dsh-swarm-router](https://github.com/r600a-code/dsh-swarm-router) | Host | `dsh-swarm-router` | Git only | 1 | DSH plugin: sub-agent matrix swarm — routes heterogeneous tasks to the most suitable model (OpenRouter-like +  |
| [YuMu247/dsh-kb-rag](https://github.com/YuMu247/dsh-kb-rag) | Host | `@dsh-external/dsh-kb-rag` | Git only | 1 | Local-first RAG knowledge tools for DSH: kb_query / kb_ingest / kb_crawl / kb_related, backed by the kb-rag Py |
| [drscrewdriver/dsh-seatbelt-sandbox](https://github.com/drscrewdriver/dsh-seatbelt-sandbox) | Host | `dsh-seatbelt-sandbox` | Git only | 1 | dsh-seatbelt 方面沙箱增强尝试使用非exec工具直接对接系统seatbelt相关api |
| [csiroqa/dsh-plugin-forge](https://github.com/csiroqa/dsh-plugin-forge) | Host | `@dsh-external/plugin-forge` | Git only | 1 | DeepSeek Harness（DSH）插件生成工具：AI 自发发现能力缺口，子代理开发、迁移为独立 git 仓库并自动提交、热挂载与装入 profile。AI-native plugin generator for  |
| [siruignaw-sys/dsh-tool-bandit-search](https://github.com/siruignaw-sys/dsh-tool-bandit-search) | Host | `dsh-tool-bandit-search` | Git only | 1 |  |
| [TYEclipse/dsh-color](https://github.com/TYEclipse/dsh-color) | Host | `dsh-color` | Git only | 1 | Color conversion toolbox for DeepSeek Harness (dsh): parse/convert any CSS color (hex, rgb, hsl, hwb, named),  |
| [AIsa-plugins/easy-dsh-plugin](https://github.com/AIsa-plugins/easy-dsh-plugin) | Host | `@aisa-plugins/easy-search` | Git only | 0 |  |
| [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) | Host | `@bryan-cmf/dsh-infra-observability` | Git only | 0 |  |
| [Bryan-cmf/dsh-vector-memory](https://github.com/Bryan-cmf/dsh-vector-memory) | Host | `@bryan-cmf/dsh-vector-memory` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-cron](https://github.com/FUSU123fusu/dsh-tui-cron) | Host | `dsh-tui-cron` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-model-switch](https://github.com/FUSU123fusu/dsh-tui-model-switch) | Host | `dsh-tui-model-switch` | Git only | 0 |  |
| [Hanihahaha/dsh-sandbox-argument-normalizer](https://github.com/Hanihahaha/dsh-sandbox-argument-normalizer) | Host | `dsh-sandbox-argument-normalizer` | Git only | 0 |  |
| [Hanihahaha/dsh-skill-mcp-manager](https://github.com/Hanihahaha/dsh-skill-mcp-manager) | Host | `dsh-skill-mcp-manager` | Git only | 0 |  |
| [Hefulalala/dsh-remote-workspace](https://github.com/Hefulalala/dsh-remote-workspace) | Host | `@dsh-external/dsh-remote-workspace` | Git only | 0 |  |
| [JamesYasR/dsh-email-push-master](https://github.com/JamesYasR/dsh-email-push-master) | Host | `dsh-email-push-master` | Git only | 0 |  |
| [Lbryany/dsh-herdr](https://github.com/Lbryany/dsh-herdr) | Host | `@lbryany/dsh-herdr` | Git only | 0 |  |
| [Mshir0/context-graph-deepseek-harness](https://github.com/Mshir0/context-graph-deepseek-harness) | Host | `dsh-context-graph` | Git only | 0 |  |
| [OctKwong30/dsh-upload-file](https://github.com/OctKwong30/dsh-upload-file) | Host | `dsh-upload-file` | Git only | 0 |  |
| [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) | Host | `evo-memory` | Git only | 0 |  |
| [arcships/dsh-llm-aimux](https://github.com/arcships/dsh-llm-aimux) | Host | `@arcships/dsh-llm-aimux` | Git only | 0 |  |
| [fengyufengzi/dsh-learning-plugin](https://github.com/fengyufengzi/dsh-learning-plugin) | Host | `dsh-learning-plugin` | Git only | 0 |  |
| [fengyufengzi/dsh-local-diagnostics](https://github.com/fengyufengzi/dsh-local-diagnostics) | Host | `dsh-local-diagnostics` | Git only | 0 |  |
| [ghbhiee/dsh-plugins](https://github.com/ghbhiee/dsh-plugins) | Host | `dsh-plugin-cli-session` | Git only | 0 |  |
| [guobinmengxiang-rgb/dsh-memory-canvas](https://github.com/guobinmengxiang-rgb/dsh-memory-canvas) | Host | `dsh-memory-canvas` | Git only | 0 |  |
| [guozede12593312/dsh-cnwrite](https://github.com/guozede12593312/dsh-cnwrite) | Host | `dsh-cnwrite` | Git only | 0 |  |
| [guobinmengxiang-rgb/dsh-plugins](https://github.com/guobinmengxiang-rgb/dsh-plugins) | Host | `dsh-cli-guard` | Git only | 0 |  |
| [hanchn/dsh-multimodal-router](https://github.com/hanchn/dsh-multimodal-router) | Host | `@hanchn/dsh-multimodal-router` | Git only | 0 |  |
| [kiefeng/dsh-lan-memory](https://github.com/kiefeng/dsh-lan-memory) | Host | `dsh-lan-memory` | Git only | 0 |  |
| [klarkxy/dsh-plugin-autoevo](https://github.com/klarkxy/dsh-plugin-autoevo) | Host | `dsh-plugin-autoevo` | Git only | 0 |  |
| [knottttt/codex-dsh-bridge](https://github.com/knottttt/codex-dsh-bridge) | Host | `codex-dsh-bridge-companion` | Git only | 0 |  |
| [lijx122/dsh-plugin-auth-guard](https://github.com/lijx122/dsh-plugin-auth-guard) | Host | `dsh-plugin-auth-guard` | Git only | 0 |  |
| [paul-yangmy/dsh-umi-ocr-vision](https://github.com/paul-yangmy/dsh-umi-ocr-vision) | Host | `dsh-umi-ocr-vision` | Git only | 0 |  |
| [po-et/dsh-http-probe](https://github.com/po-et/dsh-http-probe) | Host | `dsh-http-probe` | Git only | 0 |  |
| [rand0wn/dsh-minimal-anchor](https://github.com/rand0wn/dsh-minimal-anchor) | Host | `dsh-minimal-anchor` | Git only | 0 |  |
| [realpkuasule/dsh-launch-pad](https://github.com/realpkuasule/dsh-launch-pad) | Host | `dsh-launch-pad` | Git only | 0 |  |
| [rouyiemei/dsh-smart-router](https://github.com/rouyiemei/dsh-smart-router) | Host | `dsh-smart-router` | Git only | 0 |  |
| [slicenferqin/dsh-whale-tui](https://github.com/slicenferqin/dsh-whale-tui) | Host | `dsh-whale-tui` | Git only | 0 |  |
| [sundusk/dsh-moodball](https://github.com/sundusk/dsh-moodball) | Host | `@linxin666/dsh-moodball-status` | Git only | 0 |  |
| [xiaozhe7772222/dsh-api-key-pool](https://github.com/xiaozhe7772222/dsh-api-key-pool) | Host | `dsh-api-key-pool` | Git only | 0 |  |
| [youngyangvip/dsh-diagon-alley](https://github.com/youngyangvip/dsh-diagon-alley) | Host | `dsh-diagon-alley` | Git only | 0 |  |
| [zhao-wuyan/dsh-maestro-runtime](https://github.com/zhao-wuyan/dsh-maestro-runtime) | Host | `dsh-maestro-runtime` | Git only | 0 |  |
| [zhao999/dsh-plugin-wecom-bot](https://github.com/zhao999/dsh-plugin-wecom-bot) | Host | `dsh-plugin-wecom-bot` | Git only | 0 |  |
| [AmethystLuna/embedded-workbench](https://github.com/AmethystLuna/embedded-workbench) | Host | `@amethystluna/embedded-workbench` | Git only | 0 |  |
| [toRolex/periscope](https://github.com/toRolex/periscope) | Host | `periscope-dsh` | Git only | 0 |  |
| [sybolization/agent-jit](https://github.com/sybolization/agent-jit) | Host | `agent-jit` | Git only | 0 |  |
| [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | Host | `delivery-review-plugin` | Git only | 0 |  |
| [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) | Host | `dsh-code-intel` | Git only | 0 |  |
| [Very12345/sai-dsh-plugins](https://github.com/Very12345/sai-dsh-plugins) | Host | `@sai/dsh-android` | Git only | 0 |  |
| [rizkirmdhnnn/dsh-tool-notify](https://github.com/rizkirmdhnnn/dsh-tool-notify) | Host | `dsh-tool-notify` | Git only | 0 |  |
| [userInner/dsh-academic-research](https://github.com/userInner/dsh-academic-research) | Host | `@onpeople/dsh-academic-research` | Git only | 0 |  |
| [yan9651688/dsh-file-checksum](https://github.com/yan9651688/dsh-file-checksum) | Host | `dsh-file-checksum` | Git only | 0 |  |
| [acosmi/dsh-session-supervisor](https://github.com/acosmi/dsh-session-supervisor) | Host | `dsh-session-supervisor` | Git only | 0 |  |
| [youjiaqi421/dsh-plugin-workspace-rules](https://github.com/youjiaqi421/dsh-plugin-workspace-rules) | Host | `dsh-plugin-workspace-rules` | Git only | 0 |  |
| [sublatesublate-design/dsh-doctor-windows](https://github.com/sublatesublate-design/dsh-doctor-windows) | Host | `dsh-doctor-windows` | Git only | 0 |  |
| [tkr520521/dsh-team-runner](https://github.com/tkr520521/dsh-team-runner) | Host | `dsh-team-runner` | Git only | 0 |  |
| [qizhen2021/dsh-plugin-vision](https://github.com/qizhen2021/dsh-plugin-vision) | Host | `@qizhen2021/dsh-plugin-vision` | Git only | 0 |  |
| [rbelem/dsh-tui](https://github.com/rbelem/dsh-tui) | Host | `@rbelem/dsh-tui` | Git only | 0 |  |
| [tkr520521/dsh-repo-analyzer](https://github.com/tkr520521/dsh-repo-analyzer) | Host | `dsh-repo-analyzer` | Git only | 0 |  |
| [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) | Host | `dsh-context-proxy` | Git only | 0 |  |
| [cheng-nan01/dsh-tool-playwright](https://github.com/cheng-nan01/dsh-tool-playwright) | Host | `dsh-tool-playwright` | Git only | 0 |  |
| [zimai233/dsh-wash-calendar](https://github.com/zimai233/dsh-wash-calendar) | Host | `dsh-wash-calendar` | Git only | 0 |  |
| [zimai233/dsh-image-search](https://github.com/zimai233/dsh-image-search) | Host | `dsh-image-search` | Git only | 0 |  |
| [ljsysfurryACE/dsh-compaction](https://github.com/ljsysfurryACE/dsh-compaction) | Host | `@agentframe/dsh-compaction` | Git only | 0 |  |
| [ljsysfurryACE/dsh-memory-director](https://github.com/ljsysfurryACE/dsh-memory-director) | Host | `@agentframe/dsh-memory-director` | Git only | 0 |  |
| [winyh/dsh-geo](https://github.com/winyh/dsh-geo) | Host | `dsh-geo` | Git only | 0 |  |
| [winyh/dsh-growth](https://github.com/winyh/dsh-growth) | Host | `dsh-growth` | Git only | 0 |  |
| [reimu-create/uiopt](https://github.com/reimu-create/uiopt) | Host | `uiopt` | Git only | 0 |  |
| [andiven/dsh-messaging](https://github.com/andiven/dsh-messaging) | Host | `@dsh-messaging/messaging` | Git only | 0 |  |
| [ookami-change/dsh-plugin-starter](https://github.com/ookami-change/dsh-plugin-starter) | Host | `dsh-plugin-starter` | Git only | 0 |  |
| [cui-stack/dsh-workspace-digest](https://github.com/cui-stack/dsh-workspace-digest) | Host | `dsh-workspace-digest` | Git only | 0 |  |
| [blueWhalei/dsh-verify-gate](https://github.com/blueWhalei/dsh-verify-gate) | Host | `dsh-verify-gate` | Git only | 0 |  |
| [sherconan/dsh-web-recon](https://github.com/sherconan/dsh-web-recon) | Host | `dsh-web-recon` | Git only | 0 |  |
| [Stone623/ai_skills](https://github.com/Stone623/ai_skills) | Host | `dsh-daydream-break` | Git only | 0 |  |
| [XuezuoYS/dsh-IamDeepSeekV4ga](https://github.com/XuezuoYS/dsh-IamDeepSeekV4ga) | Host | `dsh-plugin-iam-deepseek-v4ga` | Git only | 0 |  |
| [m-guo-2/dsh-delayed-task](https://github.com/m-guo-2/dsh-delayed-task) | Host | `dsh-delayed-task` | Git only | 0 |  |
| [CaseyTso/dsh-analyze-image-tool](https://github.com/CaseyTso/dsh-analyze-image-tool) | Host | `analyze-image-tool` | Git only | 0 |  |
| [disyli/dsh-tool-call-stats](https://github.com/disyli/dsh-tool-call-stats) | Host | `dsh-tool-call-stats` | Git only | 0 |  |
| [MadDoooog/dsh-weixinbot](https://github.com/MadDoooog/dsh-weixinbot) | Host | `dsh-weixinbot` | Git only | 0 |  |
| [One1turn/dsh-omnibridge](https://github.com/One1turn/dsh-omnibridge) | Host | `dsh-omnibridge` | Git only | 0 |  |
| [WhaleHarness/WhaleHarness](https://github.com/WhaleHarness/WhaleHarness) | Host | `whale-brand-check` | Git only | 0 |  |
| [KeFan-J/dsh-chat-link](https://github.com/KeFan-J/dsh-chat-link) | Host | `@linxin666/dsh-chat-link` | Git only | 0 |  |
| [caopu16/dsh-mcp-json](https://github.com/caopu16/dsh-mcp-json) | Host | `dsh-mcp-json` | Git only | 0 |  |
| [SWHsz/network_analysis_plugin](https://github.com/SWHsz/network_analysis_plugin) | Host | `dsh-traffic-analysis-plugin` | Git only | 0 |  |
| [lucas-ward/dsh-ci-context](https://github.com/lucas-ward/dsh-ci-context) | Host | `dsh-ci-context` | Git only | 0 |  |
| [thaning0/dsh-llm-codex-auth-native-compact-image](https://github.com/thaning0/dsh-llm-codex-auth-native-compact-image) | Host | `dsh-llm-codex-auth-native-compact-image` | Git only | 0 |  |
| [ToryReina/deepseek-vision](https://github.com/ToryReina/deepseek-vision) | Host | `@torycode/deepseek-vision` | Git only | 0 |  |
| [guntur-d/dsh-memory](https://github.com/guntur-d/dsh-memory) | Host | `@guntur-d/dsh-memory` | Git only | 0 |  |
| [sonozaki7/dsh-codex-kanban](https://github.com/sonozaki7/dsh-codex-kanban) | Host | `dsh-codex-kanban` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-changelog](https://github.com/GongYuanCaiJi/dsh-changelog) | Host | `dsh-changelog` | Git only | 0 |  |
| [malaxiya2019/dsh-cmp-skill-index](https://github.com/malaxiya2019/dsh-cmp-skill-index) | Host | `cmp-skill-index` | Git only | 0 |  |
| [Tianbaidi/dsh-plugin-github-search](https://github.com/Tianbaidi/dsh-plugin-github-search) | Host | `dsh-plugin-github-search` | Git only | 0 |  |
| [Tianbaidi/dsh-plugin-scaffold](https://github.com/Tianbaidi/dsh-plugin-scaffold) | Host | `dsh-plugin-scaffold` | Git only | 0 |  |
| [ShiXiangYu2/dsh-greet-plugin](https://github.com/ShiXiangYu2/dsh-greet-plugin) | Host | `dsh-greet-plugin` | Git only | 0 |  |
| [ShiXiangYu2/dsh-imagegen-plugin](https://github.com/ShiXiangYu2/dsh-imagegen-plugin) | Host | `dsh-imagegen-plugin` | Git only | 0 |  |
| [MoneShadow/dsh-plugin-vision](https://github.com/MoneShadow/dsh-plugin-vision) | Host | `dsh-plugin-vision` | Git only | 0 |  |

### Client plugins (310)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Client (Web UI) | `dshmarket` | npm | 1317 | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | Client (Web UI) | `dsh-context` | npm | 495 | Best DeepSeek Harness plugin for context insight and management, with context dashboard / browser and context  |
| [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | Client (Web UI) | `@sanqi-normal/dsh-webui-market-plugin` | npm | 92 | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Ha |
| [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) | Client (Web UI) | `dsh-dream-skin` | npm | 65 | DeepSeek Harness 换肤 / 壁纸 / 主题包插件 (dsh-plugin) — 8 套 Mirage 主题、每用户强调色、壁纸2.0、主题包导入导出/分享链接、收藏与随机，纯原生 token 系统实现。 |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | Client (Web UI) | `dsh-skin-market` | npm | 52 | DeepSeek Harness skin market 皮肤市场 已收录100+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Client (Web UI) | `dsh-open-in-vscode` | npm | 52 | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | Client (Web UI) | `deepseek-pet` | npm | 33 | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | Client (Web UI) | `dsh-client-auto-continue` | npm | 32 | DSH Web UI plugin: auto-sends 「继续」 to resume requests interrupted by non-human causes — error classification,  |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Client (Web UI) | `dsh-share` | npm | 29 | DSH 对话分享插件，分享单轮或多轮对话，可导出为图片或 Markdown。Share DSH Q&As or selected conversation groups as PNG or Markdown. |
| [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) | Client (Web UI) | `dsh-sidebar-qa` | npm | 26 | 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能 |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | Client (Web UI) | `@huanlin/dsh-plugin-better-sidebar-plugin-office` | npm | 23 | 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 \| Provides Office-suite preview (.docx/.xl |
| [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) | Client (Web UI) | `dsh-chat-timeline` | npm | 19 | 1:1 port of DeepSeek's official web right-side chat navigation rail (ScrollNav) as a DeepSeek Harness (DSH) pl |
| [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) | Client (Web UI) | `dsh-skin` | npm | 19 | Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallp |
| [nevertoday/dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) | Client (Web UI) | `dsh-theme-plugin` | npm | 19 | Chinese traditional colors as a DeepSeek Harness theme pack. |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Client (Web UI) | `dsh-milestone` | npm | 17 | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条 |
| [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) | Client (Web UI) | `dsh-full-remote` | npm | 17 | Auditable, token-gated DeepSeek Harness remote gateway: mobile QR access, per-device sessions, Host/Origin rew |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Client (Web UI) | `@dingyi222666/dsh-session-notification` | npm | 15 | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 |
| [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) | Client (Web UI) | `dsh-file-explorer` | npm | 15 | File explorer plugin for DeepSeek Harness: file tree, preview, markdown, syntax highlighting, in-panel editing |
| [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | Client (Web UI) | `@nonamelego/dsh-catppuccin` | npm | 14 | DeepSeek Harness Web GUI 的 Catppuccin 主题插件：Latte / Frappé / Macchiato / Mocha 四种主题一键切换，内置可开关的玻璃质感（Glassmorphis |
| [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) | Client (Web UI) | `@michengai/dsh-codex-ui` | npm | 14 | DSH Codex UI 基于 DeepSeek Harness 的 Codex UI 插件，还原度90%，小细节拉满 |
| [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) | Client (Web UI) | `dsh-any-background` | npm | 14 | Deepseek Harness 自定义主题插件，支持自定义图片/视频壁纸，对话框，侧边栏等透明度模糊度调整，全局主题色的色轮调整插件 |
| [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) | Client (Web UI) | `dsh-skills` | npm | 13 |  |
| [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) | Client (Web UI) | `@mofeng2223/dsh-claude-provider` | npm | 13 | Custom Claude provider support for DeepSeek Harness |
| [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) | Client (Web UI) | `@lanxing/dsh-galgame` | npm | 13 | 我要成为Galgame高手！！将你的Vibe coding界面修改成为Galgame的样子，在不影响工作的情况下和赏心悦目的DeepSeek娘进行友好互动 |
| [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | Client (Web UI) | `dsh-outline` | npm | 12 | DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | Client (Web UI) | `@huanlin/dsh-plugin-ya-workspace-sidebar` | npm | 11 | DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 \| DSH Web workspace sidebar replacement: top global r |
| [liqichen/dsh-plugin-manager](https://github.com/liqichen/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 11 | DSH 插件管理器:在 DeepSeek Harness 设置面板内嵌 GUI,管理 MCP 服务 / Skills / 内置插件包,改动热生效无需重启 |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | Client (Web UI) | `@huanlin/dsh-plugin-anti-ads` | npm | 10 | DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 \| DSH Web ad blocker with four independent defense layers targeting t |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | Client (Web UI) | `context-vista` | npm | 10 | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /co |
| [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | Client (Web UI) | `dsh-joi-channel-theme` | npm | 9 | 轴伊 Joi 双衣装主题 for DeepSeek Harness — unofficial, non-commercial fan theme plugin 🍊 |
| [zhijun-dai/Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme) | Client (Web UI) | `dsh-catppuccin` | npm | 9 | 🐱 Soothing pastel theme for DeepSeek Harness |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Client (Web UI) | `dsh-ui-appearance` | npm | 8 | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, gla |
| [detongz/dsh-client-ui-obsidian-memory](https://github.com/detongz/dsh-client-ui-obsidian-memory) | Client (Web UI) | `dsh-client-ui-obsidian-memory` | npm | 8 | deepseek harness plugin obsidian memory |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | Client (Web UI) | `@huanlin/dsh-plugin-d399` | npm | 8 | 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） \| Pops up a mini-game menu while the model generates (Wordle/M |
| [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | Client (Web UI) | `@lyhalal/dsh-notification-center` | npm | 8 | DSH 通知中心插件：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效 |
| [tianyhjg-lab/dsh-font](https://github.com/tianyhjg-lab/dsh-font) | Client (Web UI) | `dsh-font` | npm | 8 | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with CJK-Latin pairing, instant apply, |
| [eric-song-dev/dsh-ikun-pet](https://github.com/eric-song-dev/dsh-ikun-pet) | Client (Web UI) | `dsh-ikun-pet` | npm | 8 | 🐤 DeepSeek Harness（DSH）永久插件：Deep diving 回答期间用坤宠动图填满深潜状态行下方区块——进度条 0%→100%，每 20% 切换动作与文案，完成时系统级播放「你干嘛~哎哟」 |
| [Physicolor/harness-ui-enhancer](https://github.com/Physicolor/harness-ui-enhancer) | Client (Web UI) | `harness-ui-enhancer` | npm | 7 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles  |
| [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) | Client (Web UI) | `@ha-na-bi/dsh-client-ui-custom` | npm | 7 | Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcut |
| [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) | Client (Web UI) | `dsh-usage-chart` | npm | 7 | A DeepSeek Harness Web plugin for real-time Token usage, cost estimates, per-round charts, and DeepSeek API ba |
| [stevenx65/dsh-balance-plugin](https://github.com/stevenx65/dsh-balance-plugin) | Client (Web UI) | `dsh-balance-plugin` | npm | 7 |  |
| [wx-yss/dsh-message-rail](https://github.com/wx-yss/dsh-message-rail) | Client (Web UI) | `dsh-message-rail` | npm | 7 | Codex 风格左侧消息导航轨道：等距刻度 + 悬停预览 + 点击跳转用户消息 · DSH Web 插件 |
| [bruc3van/dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) | Client (Web UI) | `dsh-desktop-safe-market` | npm | 7 | 唯一主打安全，提倡先审查再安装的DeepSeek Harness市场。深度扫描 5 分钟，放心使用每一天。npm: dsh-desktop-safe-market |
| [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) | Client (Web UI) | `dsh-agent-skills` | npm | 6 | Discover and manage Agent Skills inside DeepSeek Harness |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | Client (Web UI) | `@huanlin/dsh-plugin-spur` | npm | 6 | 聊天流中悬挂皮鞭，甩动鞭梢（>2.0 px/ms）即向 agent 发送 go work 消息 \| A whip hanging in the chat stream; flick the tip (>2.0 px/m |
| [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) | Client (Web UI) | `dsh-composer-history` | npm | 6 | Terminal-style input history for the DeepSeek Harness web composer: edge-first arrows with exact draft/caret r |
| [R3alloc/dsh-session-deeplink](https://github.com/R3alloc/dsh-session-deeplink) | Client (Web UI) | `dsh-session-deeplink` | npm | 6 | DeepSeek Harness plugin for shareable session deep links |
| [starslittle/dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) | Client (Web UI) | `dsh-blue-whale` | npm | 6 | 复刻 DeepSeek Chat 蓝鲸配色的皮肤，亮色/深色跟随系统外观。 |
| [KeLearns/dsh-navigation-bar](https://github.com/KeLearns/dsh-navigation-bar) | Client (Web UI) | `@kelearns/dsh-navigation-bar` | npm | 6 | Piano-key style conversation navigation bar for the DeepSeek Harness web GUI |
| [wallpap/dsh-compact-activity](https://github.com/wallpap/dsh-compact-activity) | Client (Web UI) | `dsh-compact-activity` | npm | 6 | compact reasoning and tool activity groups for DeepSeek Harness Web and DeepSeek Harness Desktop. |
| [HuanLinOTO/dsh-plugin-merge-tool-calls](https://github.com/HuanLinOTO/dsh-plugin-merge-tool-calls) | Client (Web UI) | `@huanlin/dsh-plugin-merge-tool-calls` | npm | 6 | 把 WebUI 会话流中连续相邻的同工具调用合并为「主卡片+紧凑子行」树状展示，默认覆盖所有内置通用行工具 \| Merges consecutive same-tool calls in the WebUI chat  |
| [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) | Client (Web UI) | `@zhangbo-cn/dsh-client-ui-voice-input` | npm | 6 | Composer mic for DeepSeek Harness Web: tap-to-monitor live transcription and hold-to-talk, with host Edge TTS  |
| [NanmiCoder/dsh-plugin-market](https://github.com/NanmiCoder/dsh-plugin-market) | Client (Web UI) | `@nanmicoder/dsh-plugin-market` | npm | 5 | Verified plugin marketplace for DeepSeek Harness — discover, inspect, install, and remove DSH plugins from the |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Client (Web UI) | `dsh-github` | npm | 5 |  |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Client (Web UI) | `dsh-xueqiu` | npm | 5 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [liliuCourier/dsh-chat-outline](https://github.com/liliuCourier/dsh-chat-outline) | Client (Web UI) | `dsh-chat-outline` | npm | 5 | 对话栏左侧常驻大纲：快速定位每次 user 提问与最后 assistant 回复（DeepSeek Harness 插件） |
| [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) | Client (Web UI) | `dsh-plugin-session-import` | npm | 5 | DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions |
| [zuoguyoupan2023/adhdgofly-dsh-ext](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext) | Client (Web UI) | `adhdgofly-dsh-ext` | npm | 5 | ADHDGoFly POS highlighting plugin for DeepSeek Harness Web: nouns green, verbs red, adjectives/adverbs purple, |
| [bobcat848/dsh-calculator](https://github.com/bobcat848/dsh-calculator) | Client (Web UI) | `dsh-calculator` | npm | 5 | Calculate the real-time cost of DeepSeek API calls made by DeepSeek Harness. |
| [sereinmono/dsh-desktop-pet](https://github.com/sereinmono/dsh-desktop-pet) | Client (Web UI) | `dsh-desktop-pet` | npm | 5 | A plugin that adds a desktop pet to your DeepSeek Harness, supporting the Codex pet format. |
| [PwnKY/dsh-session-link](https://github.com/PwnKY/dsh-session-link) | Client (Web UI) | `dsh-session-link` | npm | 5 | DeepSeek Harness 的 Codex 式会话深度链接插件：dsh:// 深链，跨对话读取上下文 |
| [caoyiwei850/dsh-client-ui-skins](https://github.com/caoyiwei850/dsh-client-ui-skins) | Client (Web UI) | `dsh-client-ui-skins` | npm | 5 | DSH Web skin plugin with built-in themes and custom image skins |
| [xiaoyangcheng84-svg/dsh-skin-manager](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager) | Client (Web UI) | `dsh-skin-manager` | npm | 5 | 一个可以管理皮肤的dsh插件 |
| [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 4 | Cute whale-girl pet plugin for the DeepSeek Harness Web UI |
| [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) | Client (Web UI) | `dsh-workbench` | npm | 4 | Right-side file workspace for DeepSeek Harness Web. |
| [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) | Client (Web UI) | `dsh-session-timeline` | npm | 4 | DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开 |
| [arcmosin/dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) | Client (Web UI) | `dsh-wordbox` | npm | 4 | DSH Web GUI常用词箱子，方便项目常用词的存储和粘贴 \| DSH Web GUI Common Words Box – for storing and pasting frequently used proje |
| [gezi-wen/sage-mem](https://github.com/gezi-wen/sage-mem) | Client (Web UI) | `sage-mem` | npm | 4 |  |
| [zhangzheng25/dsh-timeline](https://github.com/zhangzheng25/dsh-timeline) | Client (Web UI) | `dsh-timeline` | npm | 4 | DSH 插件：极简提问时间线——每条提问一个圆点，点击跳转，悬停预览。Minimal question timeline for DeepSeek Harness. |
| [noone89A/dsh-gauge](https://github.com/noone89A/dsh-gauge) | Client (Web UI) | `dsh-gauge` | npm | 4 | 为 DeepSeek Harness Web UI 提供精确缓存命中率、token 用量与费用估算 |
| [p2coder/dsh-task-control](https://github.com/p2coder/dsh-task-control) | Client (Web UI) | `dsh-task-control` | npm | 4 | 在输入区暂停/恢复/取消正在运行的对话任务：强制暂停立即中断并记住被中断的工具，安全暂停等工具/推理完成后再落地，恢复时需确认；默认暂停粒度可在设置中配置（出厂 safe wait）。 |
| [qweqwe12382/dsh-client-ui-pet](https://github.com/qweqwe12382/dsh-client-ui-pet) | Client (Web UI) | `dsh-client-ui-pet` | npm | 4 | Q pet desktop companion overlay plugin for DeepSeek Harness web GUI (dsh bundle) |
| [Signalight/codex-to-dsh-pet](https://github.com/Signalight/codex-to-dsh-pet) | Client (Web UI) | `@signalight/dsh-codex-pet` | npm | 4 | Convert Codex desktop pets (spritesheet atlases) into DeepSeek Harness (DSH) web-GUI pets — zero-dependency re |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | Client (Web UI) | `@michengai/dsh-archive-manager` | npm | 3 | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [TianYa-DAO/dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine) | Client (Web UI) | `dsh-wallpaper-engine` | npm | 3 | deepseek-和人生是、 |
| [chenproton/dsh-history](https://github.com/chenproton/dsh-history) | Client (Web UI) | `dsh-history` | npm | 3 | Quickly view, search, and jump to all the messages you sent in a long conversation. |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 3 | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. |
| [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) | Client (Web UI) | `@niyongsheng/free-vision-skill` | npm | 3 | Local‑only vision skill for macOS 本地化识图技能 |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | npm | 3 |  |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Client (Web UI) | `dsh-kanban` | npm | 3 | Task board plugin for the DeepSeek Harness Web UI |
| [causebefore/dsh-pomodoro](https://github.com/causebefore/dsh-pomodoro) | Client (Web UI) | `dsh-pomodoro` | npm | 3 | DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板 |
| [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) | Client (Web UI) | `dsh-prompt-stash` | npm | 3 | Local, per-session prompt stash for DeepSeek Harness Web \| 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但 |
| [Ruler4396/dsh-launcher-lifetime](https://github.com/Ruler4396/dsh-launcher-lifetime) | Client (Web UI) | `dsh-launcher-lifetime` | npm | 3 | DeepSeek Harness (dsh) plugin: control the dsh service lifetime (always-on / tray / follow-window) for the dsh |
| [Suxeca/dsh-plugin](https://github.com/Suxeca/dsh-plugin) | Client (Web UI) | `@suxeca/dsh-client-ui-session-switcher` | npm | 3 | DSH 会话切换面板插件（Ctrl+K / Ctrl+[ ]，npm 可装）+ 插件开发模板 |
| [ChengChe106/dsh-session-cost](https://github.com/ChengChe106/dsh-session-cost) | Client (Web UI) | `dsh-session-cost` | npm | 3 | DSH plugin: estimated DeepSeek API cost per session in the web GUI stats strip |
| [forrestahha/dsh-voice-input](https://github.com/forrestahha/dsh-voice-input) | Client (Web UI) | `dsh-voice-input` | npm | 3 | Voice-to-text input plugin for the DeepSeek Harness Web UI |
| [ZhengQingJing/dsh-session-tree](https://github.com/ZhengQingJing/dsh-session-tree) | Client (Web UI) | `dsh-session-tree` | npm | 3 | Lightweight read-only session lineage navigation for DeepSeek Harness |
| [cyber-moshen/dsh-plugin-market](https://github.com/cyber-moshen/dsh-plugin-market) | Client (Web UI) | `@cyber-moshen/dsh-plugin-market` | npm | 3 | DSH插件市场，自动更新，热重载插件，多种排序方案，快速管理和安装插件 |
| [zhijun-dai/Solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) | Client (Web UI) | `@yuquexianzhou/solarized-dsh-theme` | npm | 3 | Solarized + Selenized themes for DeepSeek Harness (dsh): four faithful palettes registered into the theme runt |
| [LightClear/dsh-token-pricing](https://github.com/LightClear/dsh-token-pricing) | Client (Web UI) | `dsh-token-pricing` | npm | 3 | DeepSeek Harness模型定价插件 · 配置token价格并显示会话费用 \| Token pricing plugin for DeepSeek Harness — per-model token rates |
| [x2802490130-prog/dsh-client-ui-writing](https://github.com/x2802490130-prog/dsh-client-ui-writing) | Client (Web UI) | `dsh-client-ui-writing` | npm | 3 | Client-side writing panel for DeepSeek Harness: projects, library, full-text search, evolution diffs and an SV |
| [tttwh/dsh-plugin-diraud](https://github.com/tttwh/dsh-plugin-diraud) | Client (Web UI) | `dsh-plugin-diraud` | npm | 3 | 将DeepSeek Harness插件列表按来源分组展示——官方插件与自行安装插件，一目了然。 |
| [fazhu4/dsh-plugin-studio](https://github.com/fazhu4/dsh-plugin-studio) | Client (Web UI) | `dsh-usage-insights` | npm | 2 | DSH（DeepSeek Harness）插件管理器：在 Web 设置页中按官方/社区分组管理已安装插件（中文描述、一键启停、详情、卸载），并内置 GitHub 插件市场（高收藏/增长最快榜单 + 搜索 + 一键安装）。 |
| [hytime/dsh-companion](https://github.com/hytime/dsh-companion) | Client (Web UI) | `@hytime/dsh-companion` | npm | 2 | DSH Companion 三件套(插件/技能/CLI)发布仓库 - hy-companion 陪伴系统 |
| [luoying2334/dsh-plugin-skill-manager-gui](https://github.com/luoying2334/dsh-plugin-skill-manager-gui) | Client (Web UI) | `dsh-plugin-skill-manager-gui` | npm | 2 | DeepSeek Harness (DSH) 图形化技能管理器——可通过 Web 设置界面创建、编辑、导入（ZIP 压缩包）和删除 SKILL.md 技能。支持全局安装及按工作区安装。 |
| [realMisakaMikoto/dsh-skin-studio](https://github.com/realMisakaMikoto/dsh-skin-studio) | Client (Web UI) | `dsh-skin-studio` | npm | 2 | DeepSeek Harness 自定义皮肤工作室，支持全界面配色、组件图片/视频背景与皮肤包分享 |
| [Anionex/dsh-eye-care](https://github.com/Anionex/dsh-eye-care) | Client (Web UI) | `@anionex/dsh-eye-care` | npm | 2 | Warm light, warm dark, and system-aware eye-care themes for DSH Web |
| [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) | Client (Web UI) | `@blue-a11y/dsh-client-shortcuts` | npm | 2 | Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+ |
| [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | Client (Web UI) | `dsh-plugin-graph` | npm | 2 | 一个Deepseek Harness的插件关系图谱可视化插件 |
| [PerryLink/dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) | Client (Web UI) | `dsh-session-pin` | npm | 2 | Pin sessions and workspaces to the top of the DeepSeek Harness sidebar with per-pin row colors - a dual-face ( |
| [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) | Client (Web UI) | `chiral-pulse` | npm | 2 | Death Stranding skin for DeepSeek Harness UI + live heartbeat feed that pulses on agent thinking/tool executio |
| [SisyphusSQ/dsh-plugins](https://github.com/SisyphusSQ/dsh-plugins) | Client (Web UI) | `dsh-agent-plugins` | npm | 2 | A monorepo for composable DeepSeek Harness (DSH) plugins. |
| [hexbee/dsh-skill-panel](https://github.com/hexbee/dsh-skill-panel) | Client (Web UI) | `dsh-skill-panel` | npm | 2 | DSH plugin: manage agent skills in settings \| DSH 插件：设置页技能管理面板 |
| [GooodWei/arcana](https://github.com/GooodWei/arcana) | Client (Web UI) | `arcana` | npm | 2 | DeepSeek Harness 的悬浮命令甲板：把所有斜杠命令列成可执行按钮，并按使用次数排序。 |
| [jitengfei/dsh-whale-arcade](https://github.com/jitengfei/dsh-whale-arcade) | Client (Web UI) | `dsh-whale-arcade` | npm | 2 | Community-maintained whale arcade for DeepSeek Harness while waiting for model responses |
| [WolfGenerals/ncm-player](https://github.com/WolfGenerals/ncm-player) | Client (Web UI) | `@wolfgenerals/ncm-player` | npm | 2 | ncm-player 是一个运行在 DeepSeek Harness (DSH) Web 界面里的网易云音乐浮窗播放器。 |
| [nzl153/dsh-pet-whale](https://github.com/nzl153/dsh-pet-whale) | Client (Web UI) | `pet-whale` | npm | 2 | 桌宠小鲸鱼：DSH（DeepSeek Harness）Web 桌宠插件，随 agent 状态切换动画，纯 DOM 零依赖 |
| [PeterBon/dsh-hooks](https://github.com/PeterBon/dsh-hooks) | Client (Web UI) | `dsh-hooks` | npm | 2 | Config-driven lifecycle hooks plugin for DeepSeek Harness |
| [Physicolor/harness-widgets](https://github.com/Physicolor/harness-widgets) | Client (Web UI) | `harness-widgets` | npm | 2 | Right-hand widget rail for DeepSeek Harness Web UI: live session stats (turns, LLM/tool time, TTFT, speed, cac |
| [yangzhe1991/dsh-task-notify](https://github.com/yangzhe1991/dsh-task-notify) | Client (Web UI) | `@yangzhe1991/dsh-task-notify` | npm | 2 | DSH plugin: chime + tab-title alert when tasks finish (任务完成提示音与标签标题提醒插件) |
| [Yujm888/dsh-turn-rail](https://github.com/Yujm888/dsh-turn-rail) | Client (Web UI) | `dsh-turn-rail` | npm | 2 |  |
| [yangzhe1991/dsh-web-enhance](https://github.com/yangzhe1991/dsh-web-enhance) | Client (Web UI) | `@yangzhe1991/dsh-web-enhance` | npm | 2 | DSH Web UI enhancement plugin: turn-by-turn navigation, thinking-chain default-expand & session cost meter for |
| [PiyotaHu/muxiva-dsh-voice](https://github.com/PiyotaHu/muxiva-dsh-voice) | Client (Web UI) | `@muxiva/dsh-voice` | npm | 2 | Local-first full-duplex voice for DeepSeek Harness, orchestrated by Muxiva |
| [Yvesgao/dsh-desktop-launcher](https://github.com/Yvesgao/dsh-desktop-launcher) | Client (Web UI) | `dsh-desktop-launcher` | npm | 2 | DSH 启动器- 在 DSH 设置页一键创建 Windows 桌面快捷方式，自动打开浏览器、可固定任务栏。DSH plugin: one-click Windows desktop shortcut launcher f |
| [AngLi1997/dsh-plugin-sync](https://github.com/AngLi1997/dsh-plugin-sync) | Client (Web UI) | `dsh-plugin-sync` | npm | 2 | Deepseek Harness 插件同步 |
| [YeqingTang/dsh-session-flow](https://github.com/YeqingTang/dsh-session-flow) | Client (Web UI) | `dsh-session-flow` | npm | 2 | DSH 会话信息流重设计插件：跨会话档案柜，折叠时间线 / 血缘树 / 检索 / 双模式摘要 / ZIP 导出 / 实时跟踪。Redesign the DSH session flow: cross-session ar |
| [YEYEYEYESHIFU/dsh-session-hotkeys](https://github.com/YEYEYEYESHIFU/dsh-session-hotkeys) | Client (Web UI) | `dsh-session-hotkeys` | npm | 2 |  |
| [genius-alray/dsh-model-picker](https://github.com/genius-alray/dsh-model-picker) | Client (Web UI) | `dsh-model-picker` | npm | 2 | DSH Web UI 模型选择器替换插件：对话框式模型选择（模糊搜索 / 供应商折叠分组 / 收藏 / 思考档位下拉），官方 bundle 形态。 |
| [AndyYang12345/dsh-butler-memory](https://github.com/AndyYang12345/dsh-butler-memory) | Client (Web UI) | `dsh-butler-memory` | npm | 1 | A dsh plugin that uses the butler memory mcp server to achieve better and organized memory for dsh. Long term  |
| [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) | Client (Web UI) | `@steven-wu/dsh-cost-meter` | npm | 1 | dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from t |
| [xczhanjun/lazeword](https://github.com/xczhanjun/lazeword) | Client (Web UI) | `dsh-lazeword` | npm | 1 |  |
| [ztlovelsw/dsh-model-profile](https://github.com/ztlovelsw/dsh-model-profile) | Client (Web UI) | `@ztlovelsw/dsh-model-profile` | npm | 1 | 手动或自动配置模型思考强度、上下文窗口、最大输出token |
| [zzyyyds88/dsh-solo-leveling](https://github.com/zzyyyds88/dsh-solo-leveling) | Client (Web UI) | `deepseek-pet` | npm | 1 | DeepSeek Harness（DSH）插件集：访问门禁（登录 + HTTPS 反代）、默认值、手机端适配、桌宠、任务套件（看板 / 统计 / Git 图谱 / 皮肤）。Linux 服务器部署 DSH，浏览器 / 手机 |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 |
| [lzylyd/dsh-dracula](https://github.com/lzylyd/dsh-dracula) | Client (Web UI) | `dsh-dracula` | npm | 1 | A third-party Dracula dark theme for the DeepSeek Harness web UI |
| [anweat/dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) | Client (Web UI) | `dsh-voice-webspeech` | npm | 1 |  |
| [yangYzc/dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) | Client (Web UI) | `dsh-plugin-quote-reply` | npm | 1 | DSH plugin: select text in a conversation, then quote it into the composer or reply in a new window. / DeepSee |
| [2710165659/dsh-web-plugin-explain](https://github.com/2710165659/dsh-web-plugin-explain) | Client (Web UI) | `dsh-web-plugin-explain` | npm | 1 | dsh Web 插件：在 设置→插件 的「插件列表」里展示每个插件的 package.json 描述，第三方插件带「第三方」标签，支持按描述搜索。 |
| [yunhuantian/dsh-plugin-hub](https://github.com/yunhuantian/dsh-plugin-hub) | Client (Web UI) | `dsh-plugin-hub` | npm | 1 | Plugin Store for DeepSeek Harness (DSH): a graphical app-store inside the Harness Web UI — browse, search and  |
| [chinng-inta/dsh-web-search-searxng](https://github.com/chinng-inta/dsh-web-search-searxng) | Client (Web UI) | `dsh-web-search-searxng` | npm | 1 |  |
| [spirits001/dsh-tokensforce](https://github.com/spirits001/dsh-tokensforce) | Client (Web UI) | `dsh-tokensforce` | npm | 1 | DeepSeek Harness (dsh) plugin — tokensforce gateway integration: one-login onboarding, provider groups, and a  |
| [Visol-456/dsh-web-compat](https://github.com/Visol-456/dsh-web-compat) | Client (Web UI) | `@visol-456/dsh-web-compat` | npm | 1 | DeepSeek Harness Web 兼容插件：非 secure context 下注入 crypto.randomUUID polyfill，修复局域网 HTTP 访问时附件上传崩溃 \| Web compat f |
| [Sanqi-normal/dsh-model-picker](https://github.com/Sanqi-normal/dsh-model-picker) | Client (Web UI) | `dsh-model-picker` | npm | 1 | 针对DSH web前端设计，对模型选择面板进行了升级，改为供应商-模型两侧滚动面板，并添加了搜索框 |
| [Viveksssss/DeepSeek-harness-marketplace](https://github.com/Viveksssss/DeepSeek-harness-marketplace) | Client (Web UI) | `dsh-plugin-marketplace` | npm | 1 | The plugin market of deepseekharness. |
| [kirigayakazima/dsh-usage-vendor-stats](https://github.com/kirigayakazima/dsh-usage-vendor-stats) | Client (Web UI) | `dsh-usage-vendor-stats` | npm | 1 | DeepSeek Harness usage stats by vendor (subscription / official API) × KPI: 53-week heatmap, trend chart, mode |
| [dawsondx/dsh-doc-share](https://github.com/dawsondx/dsh-doc-share) | Client (Web UI) | `dsh-doc-share` | npm | 1 | DSH 对话报告化分享插件：生成带封面、摘要统计与章节排版的精美报告，导出为 PNG 图片 / 单 HTML 文件 / PDF。 |
| [xingke-seeker/dsh-ui-notify](https://github.com/xingke-seeker/dsh-ui-notify) | Client (Web UI) | `dsh-ui-notify` | npm | 1 | Completion sound notifications for the DeepSeek Harness web GUI — a standalone dsh-plugin. Settings persist in |
| [skkjkk/dsh-usage-dashboard](https://github.com/skkjkk/dsh-usage-dashboard) | Client (Web UI) | `@skkjkk/dsh-usage-dashboard` | npm | 1 | DSH (DeepSeek Harness) usage statistics dashboard plugin: token / cost / duration / session aggregation with t |
| [huahai0202/dsh-plugin-manager](https://github.com/huahai0202/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 1 | Manage user-installed DeepSeek Harness plugins from the DSH Web settings page |
| [yushi-xxh/dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | Client (Web UI) | `dsh-homepage-skin` | npm | 1 | 给 dsh web 换上 DeepSeek Harness 首页同款背景:深海流体、点线网格、数字鲸鱼,深浅双主题 |
| [wepar1212/dsh-voice-input](https://github.com/wepar1212/dsh-voice-input) | Client (Web UI) | `dsh-voice-input` | npm | 1 | DSH Web 中英语音输入插件，支持中英混合口述，基于浏览器 Web Speech API。 Chinese and English voice input for DSH Web, with mixed-langua |
| [jiamuAi/dsh-token-usage](https://github.com/jiamuAi/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | npm | 1 | DSH Token 用量统计面板（Codex 风格）：全实例 Token 消耗汇总 + 活动热力图。 |
| [YEYEYEYESHIFU/dsh-result-only-view](https://github.com/YEYEYEYESHIFU/dsh-result-only-view) | Client (Web UI) | `dsh-result-only-view` | npm | 1 | Results-only toggle for the DeepSeek Harness Web GUI: hides thinking and tool-call process, keeps one live sta |
| [189-sketch/dsh-custom-logo](https://github.com/189-sketch/dsh-custom-logo) | Client (Web UI) | `dsh-custom-logo` | npm | 0 |  |
| [BPZ0726/dsh-bestui](https://github.com/BPZ0726/dsh-bestui) | Client (Web UI) | `dsh-bestui` | npm | 0 |  |
| [ChiYuKe/dsh-message-map](https://github.com/ChiYuKe/dsh-message-map) | Client (Web UI) | `dsh-message-map` | npm | 0 |  |
| [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) | Client (Web UI) | `dsh-wsl-workspace-picker` | npm | 0 |  |
| [biggerboy/dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) | Client (Web UI) | `@biggerboy123/dsh-conversation-anchors` | npm | 0 |  |
| [libinghui55/dsh-tavily-search](https://github.com/libinghui55/dsh-tavily-search) | Client (Web UI) | `dsh-tavily-search` | npm | 0 |  |
| [my-dsh-plugin/dsh-skill-manager](https://github.com/my-dsh-plugin/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 0 |  |
| [omdsh-plugins/omdsh-base](https://github.com/omdsh-plugins/omdsh-base) | Client (Web UI) | `@omdsh-plugins/omdsh-base` | npm | 0 |  |
| [ossFrankFrank/dsh-dracula-theme](https://github.com/ossFrankFrank/dsh-dracula-theme) | Client (Web UI) | `dsh-dracula-theme` | npm | 0 |  |
| [preflower/deepseek-harness-compaction-ui](https://github.com/preflower/deepseek-harness-compaction-ui) | Client (Web UI) | `deepseek-harness-compaction-ui` | npm | 0 |  |
| [potoior/dsh-bull-bear](https://github.com/potoior/dsh-bull-bear) | Client (Web UI) | `dsh-bull-bear` | npm | 0 |  |
| [raomaiping-hash/dsh-client-ui-mobile](https://github.com/raomaiping-hash/dsh-client-ui-mobile) | Client (Web UI) | `dsh-client-ui-mobile` | npm | 0 |  |
| [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) | Client (Web UI) | `dsh-archived-sessions` | npm | 0 |  |
| [qiqikuaidianpao/mypet](https://github.com/qiqikuaidianpao/mypet) | Client (Web UI) | `mypet` | npm | 0 |  |
| [ChuanTianML/dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) | Client (Web UI) | `dsh-open-with` | npm | 0 |  |
| [weiyuou-chowbus/dsh-git-status](https://github.com/weiyuou-chowbus/dsh-git-status) | Client (Web UI) | `dsh-git-status` | npm | 0 |  |
| [walnut-a/dsh-user-message-navigation](https://github.com/walnut-a/dsh-user-message-navigation) | Client (Web UI) | `dsh-user-message-navigation` | npm | 0 |  |
| [xjackzenvey/Dsh-UI-Enhance](https://github.com/xjackzenvey/Dsh-UI-Enhance) | Client (Web UI) | `dsh-ui-enhance` | npm | 0 |  |
| [shijunan126-creator/dsh-subagent-effort](https://github.com/shijunan126-creator/dsh-subagent-effort) | Client (Web UI) | `@shijunan123/dsh-client-ui-subagent-effort` | npm | 0 |  |
| [hezi2020/dsh-plugin-wiki](https://github.com/hezi2020/dsh-plugin-wiki) | Client (Web UI) | `@lyhalal/dsh-notification-center` | npm | 0 |  |
| [Khellendros97/dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) | Client (Web UI) | `dsh-better-model-selector` | npm | 0 |  |
| [motongv/dsh-voice](https://github.com/motongv/dsh-voice) | Client (Web UI) | `@motong/dsh-voice` | npm | 0 |  |
| [zuoguyoupan2023/openharness-reply-in-cn](https://github.com/zuoguyoupan2023/openharness-reply-in-cn) | Client (Web UI) | `openharness-reply-in-cn` | npm | 0 |  |
| [zuoguyoupan2023/openharness-rule-for-dsh-plugin](https://github.com/zuoguyoupan2023/openharness-rule-for-dsh-plugin) | Client (Web UI) | `openharness-rule-for-dsh-plugin` | npm | 0 |  |
| [SciGeoLight/dsh-wallpaper](https://github.com/SciGeoLight/dsh-wallpaper) | Client (Web UI) | `dsh-wallpaper` | npm | 0 |  |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Client (Web UI) | `@dsh-external/dsh-ads` | Git only | 514 | 把 DSH 变成 2005 年门户网站｜Parody ads, fake games, and popups for the DSH Web UI |
| [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | Client (Web UI) | `dsh-reasoning-effort` | Git only | 91 | DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Client (Web UI) | `dsh-ui-status-label` | Git only | 38 | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 |
| [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) | Client (Web UI) | `@dsh-external/dsh-mobile-nav` | Git only | 34 | 尽可能的使dsh适配竖屏等移动端设备 |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | Client (Web UI) | `dsh-prompt-enhancer` | Git only | 30 | DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 🔁 DSH 服务异常一键重启 |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | Client (Web UI) | `deepseek-plugin-store` | Git only | 24 | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | Client (Web UI) | `@runzhliu/dsh-browser-desktop` | Git only | 23 | Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Comp |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | Client (Web UI) | `@dsh-external/dsh-diff-viewer` | Git only | 22 | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool  |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Client (Web UI) | `@dsh-external/dsh-mobile` | Git only | 20 |  |
| [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | Client (Web UI) | `@dsh-external/dsh-qq2006` | Git only | 18 | DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材 |
| [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-deepcel` | Git only | 11 | 一款模仿 excel 的 dsh 皮肤 |
| [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | Client (Web UI) | `dsh-sticky-note` | Git only | 11 | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 |
| [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | Client (Web UI) | `dsh-provider-model-configurator` | Git only | 10 | DSH 模型 Pro:为 DSH WebUI 提供将 pi-ai 预设或任意已配置提供商的模型上下文、输出上限、推理档位与兼容开关一键应用到目标提供商,并集中查看、新建、编辑、复制与删除各提供商模型条目的能力。 |
| [jiangnanquan/dsh-ux](https://github.com/jiangnanquan/dsh-ux) | Client (Web UI) | `dsh-enhance` | Git only | 8 | DSH web UI 增强插件 + 无边框 Electron 桌面壳 |
| [Hotsteel2901/dsh-client-ui-mobile-adapt](https://github.com/Hotsteel2901/dsh-client-ui-mobile-adapt) | Client (Web UI) | `dsh-client-ui-mobile-adapt` | Git only | 8 | Your DeepSeek Harness web UI, rebuilt for the phone in your hand. Built for developers who code in Termux on A |
| [huahai0202/dsh-better-archive](https://github.com/huahai0202/dsh-better-archive) | Client (Web UI) | `dsh-better-archive` | Git only | 7 | DeepSeek Harness (DSH) web-GUI plugin: archived-session panel with unarchive & delete |
| [ltao0829/dsh-task-notify](https://github.com/ltao0829/dsh-task-notify) | Client (Web UI) | `@linxin666/dsh-task-notify` | Git only | 7 | DeepSeek Harness task-completion reminder plugin |
| [LeemanCheung/dsh-whale-animation](https://github.com/LeemanCheung/dsh-whale-animation) | Client (Web UI) | `dsh-whale-animation` | Git only | 7 | Persistent closed-loop whale-dive animation for DeepSeek Harness Web turn status |
| [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) | Client (Web UI) | `@minybear/dsh-pet` | Git only | 6 | Codex-style desktop pet plugin for DeepSeek Harness |
| [2768651338/dsh-plugin-manager](https://github.com/2768651338/dsh-plugin-manager) | Client (Web UI) | `@2768651338/dsh-plugin-manager` | Git only | 6 | DeepSeek Harness 的图形化插件管理插件：在 设置 → 插件 里新增「插件管家」标签页，用中文名和说明展示每个插件是做什么的，并提供一键启停开关与内置备注编辑——启停写入全局层补丁并实时热生效，备注保存到本 |
| [cindyguyuehu123/dsh-webchatlike](https://github.com/cindyguyuehu123/dsh-webchatlike) | Client (Web UI) | `dsh-webchatlike` | Git only | 6 | Web-chat style message actions for DeepSeek Harness: edit your prompt, regenerate answers, and flip versions w |
| [peiqi10086/dsh-skills-market](https://github.com/peiqi10086/dsh-skills-market) | Client (Web UI) | `dsh-skills-market` | Git only | 6 | DSH（DeepSeek Harness）Skills 管理 + SkillHub 商城插件：侧边栏面板管理本地 skills（用户级/工作区项目级/内置只读），搜索并一键安装 SkillHub 公开技能，附模型工具 d |
| [Zzzzkd/dsh-prompt-rail](https://github.com/Zzzzkd/dsh-prompt-rail) | Client (Web UI) | `dsh-prompt-rail` | Git only | 6 | Prompt Rail 是 DeepSeek Harness Web 会话页的紧凑纵向提示词快速跳转条。每一条横杠对应一条当前已加载的普通用户提示词。悬停或键盘聚焦会展示预览；点击会滚动跳转到对应提示词。 |
| [lzbaclz/dsh-selection-ask](https://github.com/lzbaclz/dsh-selection-ask) | Client (Web UI) | `dsh-selection-ask` | Git only | 6 | ChatGPT-style select→ask for DeepSeek Harness Web: select text in a conversation, a floating 「询问 DeepSeek」 but |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | Client (Web UI) | `@dsh-external/dsh-split-panes` | Git only | 5 |  |
| [cakeni/harness-pet](https://github.com/cakeni/harness-pet) | Client (Web UI) | `harness-pet` | Git only | 5 | Harness Pet — an unofficial community pet for DeepSeek Harness. Not affiliated with, endorsed by, or maintaine |
| [asukasec/dsh-message-preview](https://github.com/asukasec/dsh-message-preview) | Client (Web UI) | `dsh-message-preview` | Git only | 5 | Right-side user-message navigator for the DeepSeek Harness Web UI. |
| [leavestring/awesome-dsh-background-plugin](https://github.com/leavestring/awesome-dsh-background-plugin) | Client (Web UI) | `awesome-dsh-background-plugin` | Git only | 5 | DSH Web 背景个性化插件：上传自己的图片（JPG / PNG / WEBP / GIF，浏览器端自动压缩到 1600px 以内）或一键切换极光、余烬、宣纸三种预设氛围；实时预览所见即所得，支持细调图像存在感、暗色遮 |
| [mafeis/dsh-net-proxy](https://github.com/mafeis/dsh-net-proxy) | Client (Web UI) | `dsh-net-proxy` | Git only | 5 |  |
| [LeemanCheung/dsh-task-dag](https://github.com/LeemanCheung/dsh-task-dag) | Client (Web UI) | `dsh-task-dag` | Git only | 5 | Persistent live DAG visualization for DeepSeek Harness subagents and workflows |
| [flyemFSB/dsh-reasoning-effort-hdbzq](https://github.com/flyemFSB/dsh-reasoning-effort-hdbzq) | Client (Web UI) | `dsh-reasoning-effort-hdbzq` | Git only | 5 | 滑动变祖器 |
| [Vim0x3c/dsh-skin-appearance](https://github.com/Vim0x3c/dsh-skin-appearance) | Client (Web UI) | `dsh-skin-appearance` | Git only | 5 | DeepSeek Harness 外观定制插件：八套内置主题 + 自定义壁纸（透明度/模糊），Host 设置持久化 \| Appearance plugin for dsh web |
| [gameswu/dsh-notifacation-frame](https://github.com/gameswu/dsh-notifacation-frame) | Client (Web UI) | `dsh-notifacation-frame` | Git only | 5 | dsh通知消息统一管理框架 |
| [Yui-Little/dsh-mobile-shell](https://github.com/Yui-Little/dsh-mobile-shell) | Client (Web UI) | `dsh-mobile-shell` | Git only | 4 | Mobile shell UI plugin for DeepSeek Harness web: overlay drawer, full-width conversation, settings sheet, mark |
| [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | Client (Web UI) | `dsh-client-ui-frosted-glass` | Git only | 4 |  |
| [khiqwq/dsh-system-proxy](https://github.com/khiqwq/dsh-system-proxy) | Client (Web UI) | `dsh-system-proxy` | Git only | 4 | DSH host plugin - smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider |
| [Estellalee/dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme) | Client (Web UI) | `dsh-outdoor-theme` | Git only | 4 | DSH 户外皮肤 · 山野向导（Trail Guide） |
| [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) | Client (Web UI) | `dsh-angelina-themes` | Git only | 3 | Angelina light and dark glass themes with parallax for DeepSeek Harness |
| [dingzhenyao/dsh-plugin-directory](https://github.com/dingzhenyao/dsh-plugin-directory) | Client (Web UI) | `dsh-plugin-directory` | Git only | 3 | DSH Web GUI plugin: a browsable, searchable, stats-driven directory of GitHub DeepSeek Harness plugins (dsh-pl |
| [Guojiz/gitlearnos](https://github.com/Guojiz/gitlearnos) | Client (Web UI) | `gitlearnos` | Git only | 3 | Git-native AI learning OS with a GitLearnOS-exclusive DeepSeek Harness panel, targeted practice, local RAG, an |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | Client (Web UI) | `dsh-custom-css` | Git only | 3 |  |
| [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) | Client (Web UI) | `dsh-effort-tweak` | Git only | 3 | A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI. |
| [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) | Client (Web UI) | `@dsh-external/dsh-session-pins` | Git only | 3 | Persistent pinned-session menu for DeepSeek Harness |
| [bilbillm/dsh-motion](https://github.com/bilbillm/dsh-motion) | Client (Web UI) | `@dsh-external/dsh-motion` | Git only | 3 | Restrained, semantic interface motion for DeepSeek Harness |
| [kezboardpj/dsh-skill-loader](https://github.com/kezboardpj/dsh-skill-loader) | Client (Web UI) | `dsh-skill-loader` | Git only | 3 | Per-conversation skill catalog picker for DeepSeek Harness (dsh) — choose which skills are loaded into each co |
| [3911ee/dsh-workspace-explorer](https://github.com/3911ee/dsh-workspace-explorer) | Client (Web UI) | `dsh-workspace-explorer` | Git only | 3 | VS Code 风格双栏资源管理器。左侧多工作区文件树：语言着色 SVG 图标、行内重命名、新建文件/文件夹；右侧编辑器可拖拽缩放，行号 + 状态栏，语法高亮（函数/关键字/注释/字符串分色，支持 10 种语言） |
| [golitter/dsh-deepseek-billing](https://github.com/golitter/dsh-deepseek-billing) | Client (Web UI) | `dsh-deepseek-billing` | Git only | 3 | 在 DSH 中查看 DeepSeek API 账户余额及计费信息 |
| [xiaohj233/dsh-keepalive](https://github.com/xiaohj233/dsh-keepalive) | Client (Web UI) | `dsh-keepalive` | Git only | 3 | Opt-in detached watchdog for the DSH Web process with snapshot-checked repair and explicit patch restoration. |
| [Zachary7456/dsh-voice-mic](https://github.com/Zachary7456/dsh-voice-mic) | Client (Web UI) | `dsh-voice-mic` | Git only | 3 | DeepSeek Harness (dsh) 语音输入插件：麦克风按钮/快捷键录音，实时转写回填输入框。三种识别引擎：浏览器 Web Speech、本地 SenseVoice/Paraformer 离线后端（一键部署）、 |
| [LeemanCheung/dsh-qq2007-skin](https://github.com/LeemanCheung/dsh-qq2007-skin) | Client (Web UI) | `dsh-qq2007-skin` | Git only | 3 | QQ 2007-inspired retro messenger skin for the DeepSeek Harness Web GUI |
| [dphmoblie/deepseek-harness-android](https://github.com/dphmoblie/deepseek-harness-android) | Client (Web UI) | `dsh-mobile-compat` | Git only | 3 | 该程序是一个独立的 Capacitor Android 应用，用于管理本机 DeepSeek Harness Ubuntu 用户空间。它提供运行时安装与重置、Ubuntu 终端、可选的 Shizuku 设备 Shell  |
| [PathChan/CodeReader](https://github.com/PathChan/CodeReader) | Client (Web UI) | `codereader` | Git only | 3 |  |
| [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) | Client (Web UI) | `dsh-shortcuts` | Git only | 2 | DeepSeek Harness WebUI 键盘快捷键插件（34 个预置功能、一键录制自定义、静默权限切换）— Fully customizable keyboard shortcuts for the DSH Web |
| [dsh-pub/dsh-pub](https://github.com/dsh-pub/dsh-pub) | Client (Web UI) | `@dsh-pub/plugin-directory` | Git only | 2 | The bilingual, source-backed registry and installer for the DeepSeek Harness plugin ecosystem. |
| [huangrx6/dsh-plugin](https://github.com/huangrx6/dsh-plugin) | Client (Web UI) | `dsh-layout` | Git only | 2 | DeepSeek Harness (DSH) 插件合集：Skill 管理（导入/详情/多格式文件预览）、MCP 服务器管理（补丁层读写/测试连接/工具明细）、布局设置 |
| [luis1232023/dsh-workspace-enhance](https://github.com/luis1232023/dsh-workspace-enhance) | Client (Web UI) | `dsh-workspace-enhance` | Git only | 2 | 增强dsh左侧工作区区侧栏——每个工作区文件夹下提供 任务/文件/Git 子 Tab，含文件树与右侧预览、Git 的 Changes/Graph 双视图、搜索、视图切换与添加工作区，界面样式对齐默认插件。 |
| [xDylanLong/dsh-snapmarketing](https://github.com/xDylanLong/dsh-snapmarketing) | Client (Web UI) | `@snapmarketing/dsh-plugin-center` | Git only | 2 | dsh-snapmarketing is a thin DeepSeek Harness surface for discovering, installing, and managing allowlisted plu |
| [shenjackyuanjie/dsh-cot-summary](https://github.com/shenjackyuanjie/dsh-cot-summary) | Client (Web UI) | `@shenjack/dsh-client-cot-summary-overlay` | Git only | 2 | WIP:啊哈哈哈哈，最后一天了，我要总结cot！ |
| [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | Client (Web UI) | `dsh-goal-mode` | Git only | 2 | 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具 |
| [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | Client (Web UI) | `dsh-plugin-switch` | Git only | 2 | DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and  |
| [smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) | Client (Web UI) | `@smanx/dsh-conversation-indicator` | Git only | 2 | Conversation indicator plugin for the DeepSeek Harness web GUI: a compact rail beside the scrollbar marks each |
| [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) | Client (Web UI) | `dsh-cost-ledger` | Git only | 2 | Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes re |
| [csiroqa/dsh-command-opt](https://github.com/csiroqa/dsh-command-opt) | Client (Web UI) | `@dsh-external/dsh-command-opt` | Git only | 2 | DeepSeek Harness（DSH）命令优化插件：Tab/Enter 补全命令名、参数格式引导与提示弹框、tool 开启会话（subagent）补丁、空对话命令输出修复。Command optimization p |
| [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) | Client (Web UI) | `@dsh-external/dsh-home-ui` | Git only | 2 | PiUI-inspired home feed visual refinement plugin for DeepSeek Harness web client (pure extension, zero core ch |
| [Frost-Reed/blocker-notify](https://github.com/Frost-Reed/blocker-notify) | Client (Web UI) | `dsh-blocker-notify` | Git only | 2 | dsh-blocker-notify — Real-time attention alerts for DeepSeek Harness: a global banner + flashing workspace ent |
| [pineapple880066/dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets) | Client (Web UI) | `@dsh-external/dsh-webui-pets` | Git only | 2 | Codex-style desktop pets for the DeepSeek Harness Web UI / 类似 Codex 的 DeepSeek Harness Web UI 桌宠 |
| [Bernardxu123/dsh-plugins](https://github.com/Bernardxu123/dsh-plugins) | Client (Web UI) | `dsh-client-stats-decimal` | Git only | 2 | DeepSeek Harness (dsh) 官方 bundle 规范插件集合: dsh-vision 看图 + dsh-sensenova-image 生图 + dsh-client-stats-decimal 统计两 |
| [Carpon39038/dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme) | Client (Web UI) | `@cabeta/dsh-image-theme` | Git only | 2 | Warp-inspired image-to-theme plugin for DeepSeek Harness: upload a background, extract a palette, and apply a  |
| [Ayaka157/dsh-conversation-cost](https://github.com/Ayaka157/dsh-conversation-cost) | Client (Web UI) | `dsh-conversation-cost` | Git only | 2 | 在 DSH 对话底部统计行实时显示 DeepSeek 用量费用（人民币/美元双币，含缓存命中与峰谷定价） |
| [shaoeric/dsh-suggest](https://github.com/shaoeric/dsh-suggest) | Client (Web UI) | `dsh-suggest` | Git only | 2 | dsh-suggestion |
| [oneinitAI/dsh-settings-plus](https://github.com/oneinitAI/dsh-settings-plus) | Client (Web UI) | `@oneinitai/dsh-settings-plus` | Git only | 2 |  |
| [wellorbetter/dsh-plugin-window-stats](https://github.com/wellorbetter/dsh-plugin-window-stats) | Client (Web UI) | `@wellorbetter/dsh-plugin-window-stats` | Git only | 2 | DSH web plugin: see every session's conversation progress and token usage at a glance — all-windows overview,  |
| [condaThinker/dsh-left-sidebar-collapse](https://github.com/condaThinker/dsh-left-sidebar-collapse) | Client (Web UI) | `dsh-left-sidebar-collapse` | Git only | 2 | Auto-collapse / fully-collapse the DSH left sidebar on session select (standalone DSH plugin) |
| [yunfei07/dsh-song-ui](https://github.com/yunfei07/dsh-song-ui) | Client (Web UI) | `ui-song-theme` | Git only | 2 | The light palette combines silk-paper surfaces, warm ink text, Ru-celadon interactions, and cinnabar error sta |
| [CH4ACKO3/dsh-ui-container](https://github.com/CH4ACKO3/dsh-ui-container) | Client (Web UI) | `@ch4acko3/dsh-ui-container` | Git only | 2 | Remote-capable recursive UI surface container for DeepSeek Harness |
| [CH4ACKO3/dsh-ui-workspace](https://github.com/CH4ACKO3/dsh-ui-workspace) | Client (Web UI) | `@ch4acko3/dsh-ui-workspace` | Git only | 2 | Composable workspace primitives for DeepSeek Harness UI plugins |
| [my-dsh-plugin/session-archive-manager](https://github.com/my-dsh-plugin/session-archive-manager) | Client (Web UI) | `dsh-session-archive-manager` | Git only | 2 | DeepSeek Harness 插件：在设置中查看并管理归档会话，支持取消归档、删除、批量删除与全量删除。Manage archived sessions from DeepSeek Harness Settings: |
| [QuanWenG/token_usage_heatmap](https://github.com/QuanWenG/token_usage_heatmap) | Client (Web UI) | `dsh-plugin-token-usage-heatmap` | Git only | 2 | GitHub-style token usage heatmap and personal statistics dashboard for DeepSeek Harness Web. |
| [baconbao/dsh-mermaid-image-preview](https://github.com/baconbao/dsh-mermaid-image-preview) | Client (Web UI) | `@baconbao/dsh-mermaid-image-preview` | Git only | 2 | A DeepSeek Harness Plugin for Previewing Mermaid Diagram by Images in Chat Sessions |
| [loker66fan/dsh-market-github](https://github.com/loker66fan/dsh-market-github) | Client (Web UI) | `dsh-market-github` | Git only | 2 | DeepSeek Harness 插件商城：启动页入口 + GitHub topic:dsh-plugin 实时搜索、一键安装/重启 · In-harness plugin market with real-time G |
| [Limitinfinitude/DSH-Right-Sidebar](https://github.com/Limitinfinitude/DSH-Right-Sidebar) | Client (Web UI) | `dsh-right-sidebar` | Git only | 2 | Native output sidebar for DeepSeek Harness |
| [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) | Client (Web UI) | `@hewhenjay/dsh-provider-hub` | Git only | 1 | Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs |
| [LINNoot/dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | Client (Web UI) | `dsh-pet-bridge` | Git only | 1 | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [Suef-666/dsh-tab-alert](https://github.com/Suef-666/dsh-tab-alert) | Client (Web UI) | `dsh-tab-alert` | Git only | 1 |  |
| [TangRj-Git/trajectory-graph](https://github.com/TangRj-Git/trajectory-graph) | Client (Web UI) | `dsh-plugin-trajectory-graph` | Git only | 1 | Interactive per-Turn trajectory graph and execution visualization plugin for DeepSeek Harness. |
| [l-s-c/dsh-workspace-labels](https://github.com/l-s-c/dsh-workspace-labels) | Client (Web UI) | `dsh-workspace-labels` | Git only | 1 | Open DeepSeek Harness workspaces from the existing sidebar three-dot menu |
| [omdsh-plugins/omdsh-chatmode](https://github.com/omdsh-plugins/omdsh-chatmode) | Client (Web UI) | `@omdsh-plugins/omdsh-chatmode` | Git only | 1 | Chat mode for the DeepSeek Harness web GUI: a Chat/Work switch above the conversation, a workspace-free sessio |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | Client (Web UI) | `@dsh-external/tps` | Git only | 1 | 只是一个 tps 插件 |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | Client (Web UI) | `dsh-desktop-window` | Git only | 1 |  |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | Client (Web UI) | `dsh-pixel-whale` | Git only | 1 | A lively pixel-whale running-state companion for DeepSeek Harness Web. |
| [malevrigns/dsh-session-stars](https://github.com/malevrigns/dsh-session-stars) | Client (Web UI) | `dsh-session-stars` | Git only | 1 | Favorite DeepSeek Harness Sessions and reopen them from a global cross-Workspace center. |
| [csiroqa/dsh-hotkeys](https://github.com/csiroqa/dsh-hotkeys) | Client (Web UI) | `@dsh-plugin/hotkeys` | Git only | 1 | DeepSeek Harness（DSH）全局快捷键插件：会话切换、发送/清空草稿、停止生成、复制与归档，键位可在设置中自定义。Global keyboard shortcuts plugin for DeepSeek  |
| [AIMFllyYS/dsh-operating-context](https://github.com/AIMFllyYS/dsh-operating-context) | Client (Web UI) | `dsh-operating-context` | Git only | 1 | DeepSeek Harness settings page: cap every configured model to a working context window, clamped to what it can |
| [forrestsweet/dsh-agent-replay](https://github.com/forrestsweet/dsh-agent-replay) | Client (Web UI) | `dsh-agent-replay` | Git only | 1 | DeepSeek Harness 会话回放与脱敏分享插件：将真实 Agent 轨迹导出为独立交互 HTML，用于文档、演示和问题反馈。 |
| [ycp424c/dsh-auto-fold-turn](https://github.com/ycp424c/dsh-auto-fold-turn) | Client (Web UI) | `@ycp424c/dsh-auto-fold-turn` | Git only | 1 |  |
| [haiyoucuv/dsh-model-provider-label](https://github.com/haiyoucuv/dsh-model-provider-label) | Client (Web UI) | `dsh-model-provider-label` | Git only | 1 | DeepSeek Harness plugin that disambiguates same-named models by showing their provider |
| [huolianJiao/dsh-quota-meter](https://github.com/huolianJiao/dsh-quota-meter) | Client (Web UI) | `dsh-quota-meter` | Git only | 1 | DSH Web 插件：在侧边栏底部实时显示 DeepSeek API 剩余额度，并按「当前模型 × 低峰/高峰计价」估算可用 token 数，附每轮实际花费图。 |
| [syOPV/dsh-theme-background-center](https://github.com/syOPV/dsh-theme-background-center) | Client (Web UI) | `dsh-theme-background-center` | Git only | 1 | DeepSeek Harness Web UI 主题背景中心插件：主题/渐变图片背景/毛玻璃/流动氛围灯 |
| [laoduu/DeepSeek-Harness-yizi-themes](https://github.com/laoduu/DeepSeek-Harness-yizi-themes) | Client (Web UI) | `dsh-yizi-themes` | Git only | 1 | 为 DeepSeek Harness（dsh）Web UI 提供的 19 个精品风格主题，完整移植自 YiziMarkdown 的设计语言。 |
| [Yaing-Yan/dsh-better-status](https://github.com/Yaing-Yan/dsh-better-status) | Client (Web UI) | `dsh-better-status` | Git only | 1 | DeepSeek Harness 插件：把文本形式的会话统计（轮/步、LLM/工具耗时、首 token、tok/s、缓存命中、输入/输出 token）替换为页面右侧直观醒目的图表面板。 |
| [ovdoesw/dsh-xiangqi](https://github.com/ovdoesw/dsh-xiangqi) | Client (Web UI) | `dsh-xiangqi` | Git only | 1 | DSH 中国象棋消遣插件：卡通小宠物邀请你在 AI 思考间隙下棋，内置引擎 + 中文记谱 + LLM 点评 |
| [ChisaAlter/dsh-plugin-message-edit](https://github.com/ChisaAlter/dsh-plugin-message-edit) | Client (Web UI) | `dsh-plugin-message-edit` | Git only | 1 | DSH消息撤回插件。Compatibility preview: edit and resend the latest DeepSeek Harness user message |
| [KaichenCurry/TabNexus-DSH](https://github.com/KaichenCurry/TabNexus-DSH) | Client (Web UI) | `dsh-plugin-tabnexus` | Git only | 1 | TabNexus for DSH：零 Chrome 依赖的浏览器任务上下文插件（dsh-plugin 生态）。任务文档、AI 整理、全局工作区，装完即用。 |
| [WuWL-98/dsh-theme-paper](https://github.com/WuWL-98/dsh-theme-paper) | Client (Web UI) | `dsh-theme-paper` | Git only | 1 | deepseek harness 开发者预览版纸质仿claude主题 |
| [pc439527/dsh-side-monitor](https://github.com/pc439527/dsh-side-monitor) | Client (Web UI) | `dsh-side-monitor` | Git only | 1 | DSH 系统监控侧边插件：概览/进程/Docker 只读监控 |
| [linshufan21/dsh-ui-font](https://github.com/linshufan21/dsh-ui-font) | Client (Web UI) | `dsh-ui-font` | Git only | 1 | DSH 字体插件：界面字体/代码字体/显示比例/行高/字体浏览器 \| DSH font plugin: UI/code fonts, display scale, line-height, font browser w |
| [AlexShang1992/dsh-offpeak](https://github.com/AlexShang1992/dsh-offpeak) | Client (Web UI) | `dsh-offpeak` | Git only | 1 | A live peak/off-peak pricing readout for the DeepSeek Harness Web GUI: one status pill under the composer, wit |
| [a1swg1159-pixel/dsh-arcaea-theme](https://github.com/a1swg1159-pixel/dsh-arcaea-theme) | Client (Web UI) | `dsh-arcaea-theme` | Git only | 1 | An original Arcaea-inspired high-key prismatic UI theme plugin for DeepSeek Harness. |
| [guo-ziao/dsh-interrupt-button](https://github.com/guo-ziao/dsh-interrupt-button) | Client (Web UI) | `dsh-interrupt-button` | Git only | 1 | Green interrupt button for DeepSeek Harness WebUI: silently stops a running agent, which then summarizes progr |
| [myflx/hundun-dsh](https://github.com/myflx/hundun-dsh) | Client (Web UI) | `@hundun/dsh-all` | Git only | 1 |  |
| [SenryLee/dsh-frosted-window](https://github.com/SenryLee/dsh-frosted-window) | Client (Web UI) | `dsh-frosted-window` | Git only | 1 | Upload an image as a full-window frosted-glass theme for DeepSeek Harness Web. |
| [haibala-aii/dsh-extensions-wallpaperskin](https://github.com/haibala-aii/dsh-extensions-wallpaperskin) | Client (Web UI) | `@haibala-aii/dsh-extensions-wallpaperskin` | Git only | 1 | Wallpaper Engine skin plugin for the DeepSeek Harness web UI |
| [Attackotw/dsh-token-stats](https://github.com/Attackotw/dsh-token-stats) | Client (Web UI) | `@dsh-external/dsh-token-stats` | Git only | 1 |  |
| [kinmat-A/dsh-theme-switch](https://github.com/kinmat-A/dsh-theme-switch) | Client (Web UI) | `@dsh-external/dsh-theme-switch` | Git only | 1 | 一款轻量级的 DSH 主题外观切换插件：自动检测已装皮肤，一键互斥切换，全部停用时回退官方外观，即时生效、重启保留。 |
| [YinjiangCN/dsh-plugin-ftp-server](https://github.com/YinjiangCN/dsh-plugin-ftp-server) | Client (Web UI) | `dsh-plugin-ftp-server` | Git only | 1 | Configurable FTP file server for DeepSeek Harness with a browser settings panel (zero-dependency FTP core). |
| [Townrain/dsh-model-vendor-badge](https://github.com/Townrain/dsh-model-vendor-badge) | Client (Web UI) | `dsh-model-vendor-badge` | Git only | 1 | Vendor logo seat in the DSH web composer: shows which provider serves the current model, live from the officia |
| [nanami-0713/dsh-notifier](https://github.com/nanami-0713/dsh-notifier) | Client (Web UI) | `@dsh-external/dsh-notifier` | Git only | 1 | DSH 插件：任务结束 / 需要用户决策时弹窗提醒（web toast + 桌面通知），类似 Codex / Claude Code 体验 |
| [Argonaut790/dsh-cursor-settings](https://github.com/Argonaut790/dsh-cursor-settings) | Client (Web UI) | `dsh-cursor-settings` | Git only | 1 | DSH web plugin: Cursor-like Settings pages (AGENTS.md Rules, Skills, MCP servers, import) plus a pinned 'lates |
| [p83765295-sys/gamelike-plugin-manage](https://github.com/p83765295-sys/gamelike-plugin-manage) | Client (Web UI) | `gamelike-plugin-manage` | Git only | 1 | DSH 插件管理器：设置→插件管理。插件安装/卸载/禁用/更新，插件包导入导出，Agent 预设清理。 |
| [Eleven-is-cool/dsh-worktree](https://github.com/Eleven-is-cool/dsh-worktree) | Client (Web UI) | `@eleven-is-cool/dsh-worktree` | Git only | 0 |  |
| [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) | Client (Web UI) | `@dsh-community/dsh-req-workbench` | Git only | 0 |  |
| [fengs2021/dsh-plugin-catalog](https://github.com/fengs2021/dsh-plugin-catalog) | Client (Web UI) | `dsh-plugin-catalog` | Git only | 0 |  |
| [leilei3167/dsh-bookmark](https://github.com/leilei3167/dsh-bookmark) | Client (Web UI) | `dsh-bookmark` | Git only | 0 |  |
| [omdsh-plugins/omdsh-shortcuts](https://github.com/omdsh-plugins/omdsh-shortcuts) | Client (Web UI) | `@omdsh-plugins/omdsh-shortcuts` | Git only | 0 |  |
| [omdsh-plugins/omdsh-sidechat](https://github.com/omdsh-plugins/omdsh-sidechat) | Client (Web UI) | `@omdsh-plugins/omdsh-sidechat` | Git only | 0 |  |
| [tttwh/dsh-plugin-Audit](https://github.com/tttwh/dsh-plugin-Audit) | Client (Web UI) | `dsh-plugin-Audit` | Git only | 0 |  |
| [ChuanTianML/dsh-local-share](https://github.com/ChuanTianML/dsh-local-share) | Client (Web UI) | `dsh-local-share` | Git only | 0 |  |
| [fishxcode/dsh-plugin-deepseek-balance](https://github.com/fishxcode/dsh-plugin-deepseek-balance) | Client (Web UI) | `dsh-plugin-deepseek-balance` | Git only | 0 |  |
| [Nalleyer/dsh-enter-send](https://github.com/Nalleyer/dsh-enter-send) | Client (Web UI) | `dsh-enter-send` | Git only | 0 |  |
| [hurry060215-tech/dsh-api-usage-bar](https://github.com/hurry060215-tech/dsh-api-usage-bar) | Client (Web UI) | `dsh-api-usage-bar` | Git only | 0 |  |
| [yinren112/dsh-plugin-connection-banner](https://github.com/yinren112/dsh-plugin-connection-banner) | Client (Web UI) | `dsh-plugin-connection-banner` | Git only | 0 |  |
| [yaindrop/dsh-session-favorites](https://github.com/yaindrop/dsh-session-favorites) | Client (Web UI) | `@dsh-external/dsh-session-favorites` | Git only | 0 |  |
| [leaveimagination/dsh-qwen-voice](https://github.com/leaveimagination/dsh-qwen-voice) | Client (Web UI) | `dsh-qwen-voice` | Git only | 0 |  |
| [ClausYang/dsh-esc-stop](https://github.com/ClausYang/dsh-esc-stop) | Client (Web UI) | `dsh-esc-stop` | Git only | 0 |  |
| [zbxzbx98/dsh-peak-alert](https://github.com/zbxzbx98/dsh-peak-alert) | Client (Web UI) | `dsh-peak-alert` | Git only | 0 |  |
| [chenluyao680/dsh-plugin-control](https://github.com/chenluyao680/dsh-plugin-control) | Client (Web UI) | `@dsh-external/dsh-plugin-control` | Git only | 0 |  |
| [Qingzhou-Joshua/dsh-dev-toolbox](https://github.com/Qingzhou-Joshua/dsh-dev-toolbox) | Client (Web UI) | `dsh-dev-toolbox` | Git only | 0 |  |
| [ClausYang/dsh-nav-keys](https://github.com/ClausYang/dsh-nav-keys) | Client (Web UI) | `@dsh-external/dsh-nav-keys` | Git only | 0 |  |
| [Gancaozi/dsh-details-panel](https://github.com/Gancaozi/dsh-details-panel) | Client (Web UI) | `@linxin666/dsh-details-panel` | Git only | 0 |  |
| [Da-Mie/dsh-beacons](https://github.com/Da-Mie/dsh-beacons) | Client (Web UI) | `dsh-beacons` | Git only | 0 |  |
| [An0range/dsh-plugins](https://github.com/An0range/dsh-plugins) | Client (Web UI) | `@lyc/dsh-anno` | Git only | 0 |  |
| [Hyna-hla/dsh-interrupt-send](https://github.com/Hyna-hla/dsh-interrupt-send) | Client (Web UI) | `dsh-interrupt-send` | Git only | 0 |  |

### Client + Host (516)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Client + Host | `dsh-plugin-desktop` | npm | 15632 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 4973 | Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Client + Host | `dsh-better-sidebar` | npm | 2378 | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/Git/子代理页面 ｜ Open sidebar foundation, supports third-party extensions to re |
| [tong-io/tongflow](https://github.com/tong-io/tongflow) | Client + Host | `dsh-tongflow` | npm | 880 | TongFlow — multimodal workflow studio and engine (canvas + Python plugin engine) and dsh-tongflow, the DeepSee |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Client + Host | `@anionex/dsh-vision-toolkit` | npm | 762 | [dsh]为纯文本模型设计更强大的视觉工具箱：安装免费使用、粘贴图片直接识别、多张图片问答、截图到前端UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity) | Client + Host | `dsh-working-activity` | npm | 653 | Lively Working-line extension for pi CLI and DSH |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | Client + Host | `@nanmicoder/dsh-agent-teams` | npm | 631 | AgentTeams plugin for DeepSeek Harness |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Client + Host | `dsh-at-file` | npm | 429 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path  |
| [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | Client + Host | `dsh-pet` | npm | 217 | DSH 桌面宠物：一行命令安装现成宠物（28 个透明动画，即装即用），或内置素材链从 AI 视频自造专属宠物 \| One-line install desktop pet for DeepSeek Harness +  |
| [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Client + Host | `dsh-plugin-subscriptions` | npm | 181 | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth logi |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Client + Host | `deepseek-idesign` | npm | 176 | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 152 | Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, sk |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Client + Host | `dsh-mnemon` | npm | 126 | Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Client + Host | `@zseven-w/dsh-openpencil` | npm | 124 | The DeepSeek Harness plugin for OpenPencil — preview, inspect, and edit real .op documents inside a conversati |
| [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) | Client + Host | `@zseven-w/dsh-noema` | npm | 112 | Noema long-term memory plugin for DSH: durable, inspectable agent memory with recall tools and a settings page |
| [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Client + Host | `dsh-image-gen` | npm | 85 | Generate images directly in DeepSeek Harness chats |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Client + Host | `dsh-chat-import` | npm | 81 | Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCo |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Client + Host | `@mars-sea/dsh-commandcode-provider` | npm | 72 | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Client + Host | `@yejiming/dsh-data-agent` | npm | 67 | Connect DSH to your database for conversational data analysis and actionable business insights. |
| [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Client + Host | `@shengsheng/dsh-taskboard` | npm | 62 | Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native W |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Client + Host | `dsh-web-plugin-manager` | npm | 61 | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖 |
| [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) | Client + Host | `dsh-plugin-genui` | npm | 53 | Task-specific React apps for DeepSeek Harness with state carried into the next Agent turn |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Client + Host | `@mstar-harness/dsh` | npm | 51 | An omni-plugin for harness engineering workflows with multi-agents, programmatic gates and skills. |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Client + Host | `dsh-auto-review` | npm | 50 | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns stru |
| [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) | Client + Host | `dsh-smooth-stream` | npm | 40 | DeepSeek Harness Web UI plugin for fluid streaming rendering and silky scrolling. 流畅流式渲染与丝滑滚动。 |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | Client + Host | `@huanlin/dsh-plugin-mineru` | npm | 38 | 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON \| Exposes MinerU document-parsing tools to th |
| [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) | Client + Host | `dsh-session-manager` | npm | 36 | DSH 会话管理插件：删除（回收站恢复/彻底清除）、统计、继续/暂停、打开日志目录、对话顶部抽屉、工作区分组与排序、上下文压缩阈值设置。DSH session manager: delete with trash/res |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Client + Host | `dsh-codex` | npm | 35 | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | Client + Host | `dsh-message-edit` | npm | 34 | DSH 插件：分支式消息编辑、重掷、重试与版本时间线 \| DSH plugin: branch-based message editing, reroll, retry, version timeline |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Client + Host | `dsh-codex-connect` | npm | 33 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [CAPTAIN1275/dsh-ui-web](https://github.com/CAPTAIN1275/dsh-ui-web) | Client + Host | `@captain1275/dsh-client-ui-aionui-panel` | npm | 32 |  |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Client + Host | `dsh-remote` | npm | 31 | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution buil |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Client + Host | `dsh-emoji` | npm | 30 | 让 AI 回复加入自定义表情，支持Bilibili、小红书、贴吧、知乎等多平台表情包，或自定义表情 |
| [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | Client + Host | `dsh-remote` | npm | 27 | Remote-work assistant for DeepSeek Harness (DSH): connect via SSH (key or password), pick a remote workspace,  |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Client + Host | `@anionex/dsh-computer-use` | npm | 24 | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Compute |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Client + Host | `dsh-permission-rules` | npm | 23 | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-na |
| [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) | Client + Host | `dsh-recall-plugin` | npm | 22 | DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent |
| [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) | Client + Host | `dsh-file-review` | npm | 22 | dsh插件 - 立刻审查agent对文件的修改，查看diff。a dsh plugin - review  files that an agent just changed,you can see the diff |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Client + Host | `@dingyi222666/dsh-focus-chat` | npm | 21 | 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 |
| [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | Client + Host | `@pinkbanana/dsh-balance` | npm | 21 | DeepSeek Harness balance plugin for the Settings page |
| [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) | Client + Host | `@sugarforever/dsh-lark` | npm | 21 | DeepSeek Harness Plugin for Lark Integration |
| [hyqibot/DeepSeek-Harness-Token-Free](https://github.com/hyqibot/DeepSeek-Harness-Token-Free) | Client + Host | `dsh-plugin-desktop` | npm | 20 | A token-free desktop client for the DeepSeek Harness，enjoy！为 DeepSeek Harness (DSH)     生态打造的全免Token费的桌面端 ，极简极 |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Client + Host | `dsh-user-experience` | npm | 19 | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX  |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Client + Host | `dsh-codex-subscription` | npm | 18 | 在 DeepSeek Harness 中直接使用 ChatGPT/Codex 订阅，无需 OpenAI API Key 或 Codex CLI，支持 OAuth 登录、订阅搜索与额度显示 \| ChatGPT/Codex |
| [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | Client + Host | `dsh-balance-meter` | npm | 18 | DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI |
| [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) | Client + Host | `dsh-portable-tavern` | npm | 18 | DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依 |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | Client + Host | `dsh-recommend` | npm | 17 | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |
| [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | Client + Host | `dsh-mcp-panel` | npm | 17 | MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and  |
| [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | Client + Host | `dsh-archived-sessions` | npm | 17 | DSH Session Manager: manage conversations, archive/restore, delete safely, open record folders. |
| [fredalxin/dsh-solo-thinking](https://github.com/fredalxin/dsh-solo-thinking) | Client + Host | `dsh-plugin-solo-thinking` | npm | 17 | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | Client + Host | `@leetoners/dsh-ui-subagent-monitor` | npm | 16 |  |
| [Qinling-Melon-Farmers/dsh-memoir](https://github.com/Qinling-Melon-Farmers/dsh-memoir) | Client + Host | `dsh-memoir` | npm | 16 | DSH 项目持久化记忆插件（TypeScript）：会话归纳 + 经验教训沉淀，写入 PROJECT_MEMORY.md 与全局索引；每轮工作结束自动提醒蒸馏、自动注入未来 AGENTS；附 Web GUI 记忆面板（项 |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | Client + Host | `dsh-passwords` | npm | 15 | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, sub |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | Client + Host | `@canglongcl/dsh-web-review` | npm | 15 | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [starslittle/dsh-queue-plus](https://github.com/starslittle/dsh-queue-plus) | Client + Host | `dsh-queue-plus` | npm | 15 | DSH 排队消息增强面板：编辑、删除、插话、排序与批量删除功能 |
| [taichuy/deepseek-harness-auth](https://github.com/taichuy/deepseek-harness-auth) | Client + Host | `deepseek-harness-auth` | npm | 15 | DeepSeek Harness auth插件 |
| [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Client + Host | `dsh-advisor` | npm | 14 | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Client + Host | `@yejiming/dsh-gomoku` | npm | 14 | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 |
| [zebbkira/dsh-skills-mcp-manager](https://github.com/zebbkira/dsh-skills-mcp-manager) | Client + Host | `@zebbkira/dsh-skills-mcp-manager` | npm | 14 | 面向 DeepSeek Harness Web GUI 的正式插件包：在设置页的「Web UI 插件」分组中新增一张「技能与 MCP」卡片，用于在浏览器里管理技能（skills）与 MCP 服务器。 |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | Client + Host | `@huanlin/dsh-plugin-aigc-canvas` | npm | 13 | provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 \| Provider-agnostic AIGC HTTP bridg |
| [XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) | Client + Host | `dsh-md-notes` | npm | 13 | A note-taking plugin for DeepSeek Harness (DSH). It provides a full MD notes manager and MD notes editor, lett |
| [isomoes/ikanban](https://github.com/isomoes/ikanban) | Client + Host | `@isomoes/dsh-ikanban` | npm | 12 | iKanban 是一个面向键盘操作、基于 DeepSeek Harness 的多智能体编码工作空间。它专为跨项目地驱动、审查和协调并行智能体工作而构建，将会话管理、差异审查和项目感知导航集于一处。 |
| [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) | Client + Host | `dsh-bash-terminal` | npm | 12 |  |
| [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) | Client + Host | `@ahggg/dsh-side-chat` | npm | 12 | Codex-style Side Chat for DeepSeek Harness — select text, ask follow-up questions in a focused side conversati |
| [LeemanCheung/dsh-token-usage](https://github.com/LeemanCheung/dsh-token-usage) | Client + Host | `dsh-token-usage` | npm | 12 | Persistent token usage records and dashboard for DeepSeek Harness |
| [timeance/dsh-approve-for-me](https://github.com/timeance/dsh-approve-for-me) | Client + Host | `dsh-approve-for-me` | npm | 12 | DeepSeek Harness plugin for rule-gated automatic sandbox approval with optional LLM review, one-time grants, f |
| [w2112515/dsh-plugin-marketplace](https://github.com/w2112515/dsh-plugin-marketplace) | Client + Host | `@w2112515/dsh-plugin-marketplace` | npm | 12 | Out-of-tree installable plugin marketplace bundle for DeepSeek Harness |
| [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Client + Host | `dsh-llm-fallbacks` | npm | 11 | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Client + Host | `@huanlin/dsh-plugin-yet-another-subagent` | npm | 11 | 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 \| Configurable subagent profile system: s |
| [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) | Client + Host | `dsh-codex-auth` | npm | 11 | DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | Client + Host | `@michengai/dsh-skills-manager` | npm | 10 | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [CocoSgt/dsh-attachments](https://github.com/CocoSgt/dsh-attachments) | Client + Host | `dsh-attachments` | npm | 10 |  |
| [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Client + Host | `dsh-visual-plugin` | npm | 10 | Dsh-visual-plugin.Give your text-only model eyes: forward user images to any OpenAI-compatible vision model an |
| [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) | Client + Host | `dsh-usage-stats` | npm | 10 | DeepSeek Harness 使用统计插件｜Token 总量与构成、7/30 天趋势、年度活跃热力图、模型占比、工作区/任务筛选、CSV/JSON 导出 |
| [IWAIBAOLI/dsh-with-pencil](https://github.com/IWAIBAOLI/dsh-with-pencil) | Client + Host | `dsh-with-pencil` | npm | 10 | Official Pencil (pen.dev) canvas inside DeepSeek Harness: conversation-bound workspaces, live agent edits, and |
| [icodesign/orbis](https://github.com/icodesign/orbis) | Client + Host | `@orbisapp/remote-dsh` | npm | 9 | A mobile client for deepseek harness remote control |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Client + Host | `@huanlin/dsh-plugin-auto-blame` | npm | 9 | 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 \| After a model turn, an LLM generates 3 critical follow-up suggestions show |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | Client + Host | `@huanlin/dsh-plugin-interpreters` | npm | 9 | 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 \| Exposes run_python/run_node tools th |
| [heartmove/dsh-side-chat](https://github.com/heartmove/dsh-side-chat) | Client + Host | `dsh-side-chat` | npm | 9 | 一个 DSH 网页插件，Codex 式侧边聊天的强化版本： 在右侧面板提供按主会话隔离的独立聊天，具备 Codex 式的智能体能力——继承主会话的 工具集、模型、思考难度与权限预设，能感知所在工作目录；选中对话内容即可提 |
| [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) | Client + Host | `dsh-live2d-pets` | npm | 9 | Live2D 桌宠插件 for DeepSeek Harness：Agent 状态镜像 + 互动陪伴，内置宽松许可预设模型 / Live2D pet plugin: agent state mirror + intera |
| [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) | Client + Host | `dsh-codex-provider` | npm | 8 | OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web  |
| [Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) | Client + Host | `dsh-ha-orchestrator` | npm | 8 | DeepSeek Harness（dsh）动态 Cordis 插件：模型高可用回退 + 五种模式子智能体编排（fanout / pipeline / supervisor / map-reduce / router） |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Client + Host | `dsh-builtin-toggles` | npm | 7 | Evidence-backed built-in capability inspector with fail-closed controls for DeepSeek Harness Web. |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Client + Host | `dsh-token-panel` | npm | 7 | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly  |
| [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) | Client + Host | `dsh-latex-tools` | npm | 7 | ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件 |
| [Ceelog/dsh-plugins](https://github.com/Ceelog/dsh-plugins) | Client + Host | `@opendsh/dsh-plugin-scheduled-tasks` | npm | 7 | deepseek harness plugins |
| [iyllyt/dsh-btw](https://github.com/iyllyt/dsh-btw) | Client + Host | `dsh-btw` | npm | 7 | 个人很喜欢 Claude Code 的 /btw，于是为 DSH 做了复刻：共享当前上下文快速旁路提问，不中断主任务，也不写入主会话历史。 |
| [Realyujie/dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) | Client + Host | `dsh-us-stocks` | npm | 7 | US stock market data tools for DeepSeek Harness, powered by yahoo-finance2 |
| [Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) | Client + Host | `dsh-zotero` | npm | 7 | Turn your Zotero library into an evidence store for agents. |
| [querit-ai/querit-plugins](https://github.com/querit-ai/querit-plugins) | Client + Host | `dsh-querit` | npm | 7 | Official Querit search plugins for AI agent harnesses: pi-querit (Pi extension), dsh-querit (DeepSeek Harness  |
| [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) | Client + Host | `@dickpy/dsh-imagegen` | npm | 7 | DSH (DeepSeek Harness) Web GUI AI image generation plugin: text-to-image & image-to-image via OpenAI-compatibl |
| [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | Client + Host | `dsh-ocgo-usage` | npm | 6 | A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the |
| [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | Client + Host | `dsh-plugin-installer` | npm | 6 | A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem. |
| [JustGenius-s/DSH-Plugs](https://github.com/JustGenius-s/DSH-Plugs) | Client + Host | `@just-genius/dsh-codex` | npm | 6 | DSH Plugins Cellection |
| [LaoYueHanNi/dsh-token-usage](https://github.com/LaoYueHanNi/dsh-token-usage) | Client + Host | `dsh-token-usage` | npm | 6 |  |
| [LemCAE/dsh-balance](https://github.com/LemCAE/dsh-balance) | Client + Host | `@lemcae/dsh-balance` | npm | 6 | 一个适用于deepseek-harness的插件，功能是显示当前账户余额以及当前会话预估的费用消耗 \| A plugin for deepseek-harness that displays the current a |
| [siegfly/dsh-deepseek-vision](https://github.com/siegfly/dsh-deepseek-vision) | Client + Host | `dsh-deepseek-vision` | npm | 6 | Vision-language gateway plugin for DeepSeek Harness - paste an image, DeepSeek sees text |
| [zhxqc/dsh-oh-my-theme](https://github.com/zhxqc/dsh-oh-my-theme) | Client + Host | `dsh-oh-my-theme` | npm | 6 | DeepSeek Harness (dsh) web plugin with themes, global typography, @file mentions, project file tree, and Markd |
| [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) | Client + Host | `dsh-ears` | npm | 6 | Voice input plugin for DeepSeek Harness (dsh): Supports voice input plugins with polishing and multiple backen |
| [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) | Client + Host | `@jiyr0119/dsh-workspace-explorer` | npm | 5 | DeepSeek Harness 工作区文件资源管理器:右侧目录树面板,点击/拖拽文件引用进输入框,UI 对齐 DSH 原生风格 \| Workspace file explorer plugin for DeepSee |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | Client + Host | `@michengai/dsh-agency-agents` | npm | 5 | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Client + Host | `dsh-plugin-subagent-director` | npm | 5 | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plu |
| [springbrand-lab/dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) | Client + Host | `@linxin666/dsh-client-ui-aionui-panel` | npm | 5 | Themes and web GUI plugins for DeepSeek Harness: task board, Git graph, file panel, SSH, mobile remote, compan |
| [DGPisces/dsh-openai-oauth](https://github.com/DGPisces/dsh-openai-oauth) | Client + Host | `dsh-openai-oauth` | npm | 5 | DeepSeek Harness provider for GPT models using managed ChatGPT OAuth through Codex app-server |
| [anweat/dsh-restart](https://github.com/anweat/dsh-restart) | Client + Host | `dsh-restart` | npm | 5 |  |
| [Visol-456/dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) | Client + Host | `@visol-456/dsh-llm-fallback` | npm | 5 | DeepSeek Harness 回退链插件：主模型失败自动切换备用 provider，带 Web UI 配置面板 \| Provider fallback chains for DeepSeek Harness |
| [YLifeOnlyOnce/dsh-smarthome](https://github.com/YLifeOnlyOnce/dsh-smarthome) | Client + Host | `dsh-smarthome` | npm | 5 | Home Assistant control for DeepSeek Harness agents — approval-gated lights, switches, climate.                 |
| [0xKcyzz/dsh-plugin-store](https://github.com/0xKcyzz/dsh-plugin-store) | Client + Host | `dsh-plugin-store` | npm | 5 | DeepSeek Harness 插件商店：浏览、搜索、筛选并一键安装 dsh-plugin 生态插件 |
| [wenzetan/dsh-llm-newapi](https://github.com/wenzetan/dsh-llm-newapi) | Client + Host | `dsh-llm-newapi` | npm | 5 | NewAPI (OpenAI-compatible gateway) LLM provider plugin for DeepSeek Harness (dsh): chat-only model discovery + |
| [errorcode7/dsh-prompt-manager](https://github.com/errorcode7/dsh-prompt-manager) | Client + Host | `dsh-prompt-manager` | npm | 5 | DeepSeekHarness的提示词管理器插件 |
| [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) | Client + Host | `@eddyskywalker/dsh-chatgpt-subscription` | npm | 4 |  |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | Client + Host | `dsh-rewind-plugin` | npm | 4 | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantic |
| [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) | Client + Host | `dsh-config-manager` | npm | 4 | Backup / export / import / migrate your DeepSeek Harness (DSH) configuration - dual-face Cordis plugin (host e |
| [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) | Client + Host | `@dsh-usage-meter/usage` | npm | 4 | DeepSeek Harness usage recorder plugin: per-model hourly token usage (input/output/cache hits) with a stacked  |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Client + Host | `dsh-agent-messaging` | npm | 4 | Cross-session verification, claims and a decision ledger for DeepSeek Harness — so two agent sessions don't re |
| [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | Client + Host | `dsh-session-hub` | npm | 4 | Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web  |
| [Anestis271/dsh-desktop](https://github.com/Anestis271/dsh-desktop) | Client + Host | `@anestis271/dsh-desktop` | npm | 4 | Turn the official DeepSeek Harness WebUI into a natural desktop experience. |
| [dsh-plugins/dsh-auxiliary](https://github.com/dsh-plugins/dsh-auxiliary) | Client + Host | `@dsh-plugin/dsh-auxiliary` | npm | 4 | Auxiliary models for DeepSeek Harness: vision understanding and context compression through dedicated model ro |
| [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | Client + Host | `@snowamberx/dsh-role-router` | npm | 4 | Role-based model routing plugin for DeepSeek Harness: planner/subagent roles plus a settings card and composer |
| [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) | Client + Host | `dsh-messager` | npm | 4 | 适用于Deepseek Harness的消息提醒信使，可使用飞书、企业微信、钉钉、Telegram、Discord进行通知推送 |
| [Yan-Zero/dsh-remote-ssh](https://github.com/Yan-Zero/dsh-remote-ssh) | Client + Host | `dsh-remote-ssh` | npm | 4 | Use SSH hosts as transparent workspaces in DeepSeek Harness. |
| [Quophic/dsh-persona-memory](https://github.com/Quophic/dsh-persona-memory) | Client + Host | `dsh-persona-memory` | npm | 4 |  |
| [mbj733/dsh-edit-resend](https://github.com/mbj733/dsh-edit-resend) | Client + Host | `dsh-edit-resend` | npm | 4 | DeepSeek Harness (DSH) plugin: edit sent messages and resend (stop an in-flight reply, edit, resend), plus bra |
| [aaravarr/dsh-subagent-max](https://github.com/aaravarr/dsh-subagent-max) | Client + Host | `@aaravarr/dsh-subagent-max` | npm | 4 | DeepSeek Harness (DSH) plugin — a subagent_with_model tool plus a live multi-panel subagent viewer. |
| [luzhengyangtx/dsh-telegram-duty](https://github.com/luzhengyangtx/dsh-telegram-duty) | Client + Host | `@luzhengyangtx/dsh-telegram-duty` | npm | 4 | Telegram duty gateway for DeepSeek Harness: phone-message task loop, global approval forwarding, duty/local to |
| [helays/dsh-web-terminal](https://github.com/helays/dsh-web-terminal) | Client + Host | `dsh-web-terminal` | npm | 4 | DSH 插件：在 DeepSeek Harness Web 界面（对话/轨迹）顶部新增「终端」Tab，内置 xterm.js + node-pty 交互式终端，让你在编码完成后即时在终端执行指令调试。 |
| [DamonKoy/dsh-plugin-toggle](https://github.com/DamonKoy/dsh-plugin-toggle) | Client + Host | `dsh-plugin-toggle` | npm | 4 | DSH plugin switchboard: Settings tab with descriptions, fuzzy search, and runtime start/stop |
| [wuchubuzai2018/dsh-ai-prompt-optimizer](https://github.com/wuchubuzai2018/dsh-ai-prompt-optimizer) | Client + Host | `dsh-ai-prompt-optimizer` | npm | 4 | DeepSeek Harness（DSH）Web 聊天页面的提示词优化插件,帮助你把粗略想法整理成更清晰、完整、可直接发送给 AI 的提示词 |
| [jasonrale/dsh-archive-manager](https://github.com/jasonrale/dsh-archive-manager) | Client + Host | `dsh-archive-manager` | npm | 4 | Archived-session manager for DSH Web UI: reopen an archived session and keep chatting, unarchive it back in pl |
| [lijian-ui/dsh-im-gateway](https://github.com/lijian-ui/dsh-im-gateway) | Client + Host | `@lijian-ui/dsh-im-gateway` | npm | 4 | 为 DeepSeek Harness 提供多 IM 通道接入的网关插件：钉钉 / QQ / 个人微信，支持扫码绑定与流式回复。 |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | Client + Host | `@awiki/dsh` | npm | 3 | AWiki identity and messaging plugin for DeepSeek Harness |
| [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) | Client + Host | `dsh-auth-gate` | npm | 3 | Login gate for the DeepSeek Harness (dsh) web surface: password or shared-token authentication, session cookie |
| [astra3294/dsh-doctor](https://github.com/astra3294/dsh-doctor) | Client + Host | `dsh-doctor` | npm | 3 | Deterministic diagnostics and recovery for DeepSeek Harness |
| [banlanzs/dsh-web-enhanced](https://github.com/banlanzs/dsh-web-enhanced) | Client + Host | `dsh-web-enhanced` | npm | 3 | [building……] DeepSeek Harness's web enhancement plugin—brings task dashboards, Git graphs, workspace file pane |
| [luodeb/dsh-web-auth-gateway](https://github.com/luodeb/dsh-web-auth-gateway) | Client + Host | `dsh-web-auth-gateway` | npm | 3 | Authentication reverse-proxy gateway plugin for DeepSeek Harness Web |
| [shatyuka/dsh-llm-codebuddy](https://github.com/shatyuka/dsh-llm-codebuddy) | Client + Host | `@shatyuka/dsh-llm-codebuddy` | npm | 3 | Tencent CodeBuddy plugin for DeepSeek Harness (dsh). |
| [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) | Client + Host | `dsh-ui-tweaks` | npm | 3 | 一切皆插件，可以定义自己喜欢的dsh，开关控制单项功能，字体大小，表格样式，对话框长度，timeline，git等 |
| [YOGEMOW/DeepSeek_Prism](https://github.com/YOGEMOW/DeepSeek_Prism) | Client + Host | `@yogemow/deepseek-prism-dsh` | npm | 3 | 为纯文本模型按需识图：DSH 零补丁 Cordis 插件（prism_see 工具 + 图片 VEP 降级 + 技能运行时注册）+ Codex Skill；多 Provider 视觉 API，VEP/1 低 Token  |
| [ycp424c/dsh-browser-bridge](https://github.com/ycp424c/dsh-browser-bridge) | Client + Host | `@ycp424c/dsh-browser-bridge` | npm | 3 | Prompt-scoped bridge between DSH and explicitly attached Chrome tabs |
| [Anionex/dsh-suggested-replies](https://github.com/Anionex/dsh-suggested-replies) | Client + Host | `@anionex/dsh-suggested-replies` | npm | 3 | DSH Web 预测回复插件：AI 回复后在输入框上方生成可点击填入草稿的下一步消息候选 |
| [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) | Client + Host | `dsh-vision` | npm | 3 | DeepSeek Harness: vision |
| [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) | Client + Host | `dsh-output-styles` | npm | 3 | Claude Code outputStyles for DeepSeek Harness - session-scoped, durable, runtime-switchable model output style |
| [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) | Client + Host | `@llangtop/dsh-approval-ai` | npm | 3 | AI approval answerer for DeepSeek Harness (DSH) using the unified LLM route with fail-closed policy checks. |
| [JeremyGuo/dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) | Client + Host | `dsh-custom-workspace` | npm | 3 | Per-workspace appearance settings for DeepSeek Harness Web |
| [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) | Client + Host | `dsh-dashboard` | npm | 3 | Symphony-inspired multi-provider task orchestrator and native operations dashboard for DeepSeek Harness. Suppo |
| [zhuiyueya/dsh-voice](https://github.com/zhuiyueya/dsh-voice) | Client + Host | `dsh-voice` | npm | 3 | Voice for DeepSeek Harness（dsh） —  speech-to-text input +  read-aloud TTS for text-only DeepSeek, zero API key |
| [yflmq001/dsh-cost-tracker](https://github.com/yflmq001/dsh-cost-tracker) | Client + Host | `dsh-cost-tracker` | npm | 3 | Token cost tracking for DeepSeek Harness |
| [1HelloMan1/dsh-usage-dashboard-plus](https://github.com/1HelloMan1/dsh-usage-dashboard-plus) | Client + Host | `dsh-usage-dashboard-plus` | npm | 3 | DeepSeek Harness usage dashboard with API balance, daily spend, external vision-call accounting, per-model sta |
| [ouyangyipeng/dsh-marketplace](https://github.com/ouyangyipeng/dsh-marketplace) | Client + Host | `dsh-marketplace` | npm | 3 | A safe, live plugin marketplace for DeepSeek Harness |
| [z-col/dsh-SkillsManagePlugins](https://github.com/z-col/dsh-SkillsManagePlugins) | Client + Host | `dsh-skills-manager` | npm | 3 | DSH Skills 可视化管理器：在 DSH Web 界面可视化查看、编辑、创建、删除 Skills（用户级 ~/.dsh/skills 与项目级 .dsh/skills） |
| [DfsyJian/dsh-snapshot](https://github.com/DfsyJian/dsh-snapshot) | Client + Host | `dsh-snapshot` | npm | 3 | DeepSeek Harness plugin: automatic file snapshots with a sidebar timeline and settings card |
| [DamonBao/dsh-codex-provider-plugin](https://github.com/DamonBao/dsh-codex-provider-plugin) | Client + Host | `@jcy2387/dsh-codex-provider-plugin` | npm | 3 | OpenAI Codex provider for DeepSeek Harness with ChatGPT OAuth, native settings, and account usage. |
| [yangyue1974/dsh-plugin-audiolib](https://github.com/yangyue1974/dsh-plugin-audiolib) | Client + Host | `dsh-plugin-audiolib` | npm | 3 | Ambient soundtrack for DeepSeek Harness, driven by agent state. Streams 100k+ cleared tracks from AudioLib.ai  |
| [SeverusZh/dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) | Client + Host | `dsh-yolo-mode` | npm | 3 | dsh-yolo-mode - an LLM-powered auto-approval plugin for DeepSeek Harness sandbox escalations (built-in presets |
| [ThreeBody6666/dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) | Client + Host | `dsh-im-hub` | npm | 3 | Multi-platform IM gateway for DeepSeek Harness: Feishu (Lark), WeCom (WeChat Work), and Telegram. One agent pe |
| [cheshireez/dsh-skill-hub](https://github.com/cheshireez/dsh-skill-hub) | Client + Host | `dsh-skill-hub` | npm | 3 | DeepSeek Harness（dsh）Web GUI 技能中枢：浏览/搜索完整本地技能目录、启用/禁用、查看正文、排查诊断、新建技能，基于官方 ctx.skills 注册表。 In-GUI skill hub for |
| [paradoxSCH/dsh-worktree](https://github.com/paradoxSCH/dsh-worktree) | Client + Host | `@paradoxsch/dsh-worktree` | npm | 3 | Durable Git worktree isolation and delivery plugin for DeepSeek Harness |
| [mervyn-teo/dsh-plugin-terminal](https://github.com/mervyn-teo/dsh-plugin-terminal) | Client + Host | `dsh-plugin-terminal` | npm | 3 | DeepSeek Harness Web plugin: a real PTY terminal in a VS Code-style collapsible footer panel |
| [Argonaut790/dsh-deepseek-vision](https://github.com/Argonaut790/dsh-deepseek-vision) | Client + Host | `dsh-deepseek-vision` | npm | 3 | Image understanding, OCR, and persistent visual evidence for text-only DeepSeek Harness models |
| [woyeshishen/dsh-vision-plugin](https://github.com/woyeshishen/dsh-vision-plugin) | Client + Host | `@woyeshishen/dsh-vision-plugin` | npm | 3 |  |
| [bkMoon1024/dsh-ci-cd-bot](https://github.com/bkMoon1024/dsh-ci-cd-bot) | Client + Host | `dsh-ci-cd-bot` | npm | 3 |  |
| [hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) | Client + Host | `dsh-diagram` | npm | 3 | Turn articles in DeepSeek Harness into editable Excalidraw canvases. |
| [xueayi/dsh-opencode-go-usage](https://github.com/xueayi/dsh-opencode-go-usage) | Client + Host | `@xueayi/dsh-opencode-go-usage` | npm | 3 | OpenCode Go plan usage monitor for DeepSeek Harness: real-time 5h-rolling / weekly / monthly quota in a floati |
| [AKS1st/dsh-skill-manager](https://github.com/AKS1st/dsh-skill-manager) | Client + Host | `dsh-skill-manager` | npm | 2 | DSH web plugin: a Skill Manager page in the settings panel browsing system / user / workspace / preset skills, |
| [Britneycode/dsh-update-center](https://github.com/Britneycode/dsh-update-center) | Client + Host | `dsh-update-center` | npm | 2 | dsh (DeepSeek Harness) 更新中心与插件市场：自托管 plugins.json 注册表（GitHub dsh-plugin 主题自动聚合 + npm 包名映射秒级安装），一键安装/更新/卸载/禁用插件 |
| [JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) | Client + Host | `dsh-layered-memory` | npm | 2 | 让 DeepSeek Harness 拥有长期记忆：对话自动蒸馏为事实/场景/画像三层记忆，每步自动召回注入——让 AI 基于证据说话，零操作无感使用 \| Long-term memory for DeepSeek H |
| [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | Client + Host | `dsh-bell-notify` | npm | 2 | DeepSeek Harness (dsh) 社区插件：为 Agent 生命周期事件合成铃声 + 右下角呼吸状态点，每个事件可上传自定义音频。dsh plugin that rings bells and shows a |
| [Ready22Race/dsh-team-task](https://github.com/Ready22Race/dsh-team-task) | Client + Host | `@ready22race/dsh-team-task` | npm | 2 | team-task for DeepSeek Harness (dsh): long-horizon multi-agent tasks — reviewed plan DAG, runtime-owned settle |
| [SiriLee/dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | Client + Host | `dsh-edit-approval` | npm | 2 | DeepSeek Harness plugin: per-edit approval with red/green line diff before write/edit/str_replace_editor (appr |
| [blooming-fang/dsh-feishu-notifier](https://github.com/blooming-fang/dsh-feishu-notifier) | Client + Host | `dsh-feishu-notifier` | npm | 2 | DeepSeek Harness 飞书通知插件：在需要用户操作或对话结束时发送飞书机器人提醒，并支持持久化配置。 |
| [cookiesheep/whale-on-desk](https://github.com/cookiesheep/whale-on-desk) | Client + Host | `whale-on-desk` | npm | 2 | A pixel-art whale companion for DeepSeek Harness — it swims while your agents work and taps the glass when an  |
| [huxint/dsh-team](https://github.com/huxint/dsh-team) | Client + Host | `dsh-team` | npm | 2 | Agent teams for DeepSeek Harness: named long-lived teammates over ctx.subagents, a shared task list, a member- |
| [jean3690/dsh-devtoolbox](https://github.com/jean3690/dsh-devtoolbox) | Client + Host | `dsh-devtoolbox` | npm | 2 | DSH 本地工具箱插件：侧边栏独立页面 + /toolbox 命令 + 配置驱动的 agent 工具注册，35 个纯本地小工具（文本/编码/数据/安全/提取/转换/参考/效率），数据不出本机。 |
| [lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) | Client + Host | `@lujianjun19/dsh-llm-github-copilot` | npm | 2 |  |
| [sjh9714/dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | Client + Host | `dsh-what-changed` | npm | 2 | 看得见 Agent 到底改了什么。一个会话里所有文件改动，一屏看完再决定要不要提交 \| See what the agent actually changed. Every file it wrote this ses |
| [stoneface10/dsh-codex-connect-plus](https://github.com/stoneface10/dsh-codex-connect-plus) | Client + Host | `dsh-codex-connect-plus` | npm | 2 | Use your ChatGPT subscription in DeepSeek Harness to access Codex models and generate or edit images with gpt- |
| [valuz-ai/dsh-valuz-genui](https://github.com/valuz-ai/dsh-valuz-genui) | Client + Host | `@valuz/dsh-valuz-genui` | npm | 2 | DeepSeek Harness plugin: generate_ui — the model authors A2UI documents rendered as interactive surfaces in th |
| [wloops/dsh-git-worktree](https://github.com/wloops/dsh-git-worktree) | Client + Host | `dsh-git-worktree` | npm | 2 | Git worktree Session Targets for DeepSeek Harness with isolated task sessions, reversible Local Preview, human |
| [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) | Client + Host | `dsh-working-activity` | npm | 2 | 已归档:合并至 working-activity,pi 版与 DSH 版同仓维护 |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | Client + Host | `dsh-archive-manager` | npm | 2 |  |
| [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) | Client + Host | `dsh-tool-describe-image` | npm | 2 |  |
| [SailingLoong/loongport-dsh](https://github.com/SailingLoong/loongport-dsh) | Client + Host | `loongport` | npm | 2 | LoongPort npm setup CLI for DeepSeek Harness (dsh) OpenAI-compatible routes |
| [linhx1999/dsh-writing-pad](https://github.com/linhx1999/dsh-writing-pad) | Client + Host | `dsh-writing-pad` | npm | 2 | Markdown writing pad for the DeepSeek Harness web GUI: per-session editing, preview, and in-session AI-assiste |
| [qomob/dsh](https://github.com/qomob/dsh) | Client + Host | `dsh-plugin-hub` | npm | 2 | Home of dsh-plugin-hub: discover, evaluate, and install DeepSeek Harness (dsh) community plugins from inside d |
| [wikkd/dsh-remote-access-web](https://github.com/wikkd/dsh-remote-access-web) | Client + Host | `@froststarinquire/dsh-remote-access-web` | npm | 2 |  |
| [LingLambda/dsh-logger-panel](https://github.com/LingLambda/dsh-logger-panel) | Client + Host | `dsh-logger-panel` | npm | 2 | Runtime log panel for DeepSeek Harness (dsh): live SSE log view in Settings plus bounded date/size rotating JS |
| [jelech/dsh-im-gateway](https://github.com/jelech/dsh-im-gateway) | Client + Host | `dsh-im-gateway` | npm | 2 | An IM gateway for the DeepSeek Harness: bridge messengers into harness agent sessions and control them with sl |
| [JohnathonYe/auto-compact](https://github.com/JohnathonYe/auto-compact) | Client + Host | `auto-compact` | npm | 2 |  |
| [AnothetLoice/dsh-hotplug-engine](https://github.com/AnothetLoice/dsh-hotplug-engine) | Client + Host | `dsh-hotplug-engine` | npm | 2 | Plugin install, rollback, and audit as a service for DSH. |
| [ai-eks/dsh-auth-tunnel](https://github.com/ai-eks/dsh-auth-tunnel) | Client + Host | `dsh-auth-tunnel` | npm | 2 | Password-gated Cloudflare Tunnel access for the DeepSeek Harness Web GUI, with quick and named tunnel modes. |
| [xiaohj233/dsh-resume](https://github.com/xiaohj233/dsh-resume) | Client + Host | `dsh-resume` | npm | 2 | Resume interrupted DSH turns from an empty submit and restore sessions or subagents that were running at shutd |
| [hxy91819/dsh-auth](https://github.com/hxy91819/dsh-auth) | Client + Host | `dsh-auth` | npm | 2 | Caddy-fronted administrator authentication for DeepSeek Harness: Argon2id, revocable sessions, bilingual UI, z |
| [2002yxy/dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet) | Client + Host | `dsh-desktop-pet` | npm | 2 | Nailong (奶龙) desktop-pet plugin for DeepSeek Harness |
| [sgzxs/dsh-global-task-list](https://github.com/sgzxs/dsh-global-task-list) | Client + Host | `dsh-global-task-list` | npm | 2 | A global task library plugin for DeepSeek Harness featuring cross-session persistence, a real-time generative- |
| [sugarforever/dsh-mcp-apps](https://github.com/sugarforever/dsh-mcp-apps) | Client + Host | `@sugarforever/dsh-mcp-apps` | npm | 2 | DeepSeek Plugin that supports MCP Apps |
| [BingChanCN/fabric](https://github.com/BingChanCN/fabric) | Client + Host | `@dsh-do/fabric` | npm | 2 |  |
| [yabo083/dsh-document-review](https://github.com/yabo083/dsh-document-review) | Client + Host | `dsh-document-review` | npm | 2 | DeepSeek Harness plugin: review Markdown documents in a local browser with annotations, replacements, and dele |
| [qichuang321/dsh-web-terminal](https://github.com/qichuang321/dsh-web-terminal) | Client + Host | `dsh-web-terminal` | npm | 2 |  |
| [Rainronin/dsh-balance-monitor](https://github.com/Rainronin/dsh-balance-monitor) | Client + Host | `@rainronin/dsh-balance-monitor` | npm | 2 | 一个好看、简单、实用的余额监视器｜DeepSeek Harness 插件：官方余额快照 + ds_balance 工具 + 峰谷计价区间 + Matrix/原生双风格徽章 |
| [omdsh-dev/dsh-cron](https://github.com/omdsh-dev/dsh-cron) | Client + Host | `dsh-cron` | npm | 2 | Scheduled tasks (cron) for DeepSeek Harness: model- and human-callable scheduling that fires followup/inject i |
| [huoxue1/harness-lark](https://github.com/huoxue1/harness-lark) | Client + Host | `harness-lark` | npm | 2 | Lark/飞书（Feishu）渠道插件，为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 提供飞书通信能力 |
| [spoon-man569/dsh-token-price](https://github.com/spoon-man569/dsh-token-price) | Client + Host | `dsh-token-price` | npm | 2 | DSH 实时 Token 花费与账户余额显示插件（每轮花费 · 总花费 · 余额） |
| [hyper-dsh-plugins/dsh-open-eyes](https://github.com/hyper-dsh-plugins/dsh-open-eyes) | Client + Host | `dsh-open-eyes` | npm | 2 | A lightweight DeepSeek Harness vision delegation tool for text-only routes, with native OpenAI Responses, Chat |
| [BorisShaw6/dsh-cyber-pet](https://github.com/BorisShaw6/dsh-cyber-pet) | Client + Host | `@borisshaw6/dsh-cyber-pet` | npm | 2 | A “Cyber Whale” pet designed for DeepSeek Harness: a whale that hovers on the web page, can be fed, and change |
| [PM25000/dsh-ths-holdings](https://github.com/PM25000/dsh-ths-holdings) | Client + Host | `dsh-ths-holdings` | npm | 2 | DSH 持仓盈亏悬浮卡片（同花顺投资账本）— 自动同步真实持仓数据，显示今日盈亏、上证指数和当日走势图，无需手动添加股票。 |
| [LeemanCheung/dsh-image-gen](https://github.com/LeemanCheung/dsh-image-gen) | Client + Host | `dsh-image-gen` | npm | 2 | GPT Image 2 generation with progressive Codex-style previews for DeepSeek Harness |
| [Johnny-xuan/dsh-paste-to-path](https://github.com/Johnny-xuan/dsh-paste-to-path) | Client + Host | `dsh-paste-to-path` | npm | 2 | A universal path-backed attachment dock for DeepSeek Harness. |
| [Fallen0543/dsh-sidebar-files](https://github.com/Fallen0543/dsh-sidebar-files) | Client + Host | `dsh-sidebar-files` | npm | 2 | DeepSeek Harness 侧边栏文件树插件：会话/文件标签栏 + 懒加载文件树，按扩展名彩色图标、复制路径、发送给 Agent。A sidebar file tree plugin for DeepSeek Ha |
| [AlfredChaos/dsh-usage-panel](https://github.com/AlfredChaos/dsh-usage-panel) | Client + Host | `dsh-usage-panel` | npm | 2 | DeepSeek Harness 消耗统计插件：设置页 Token 用量 KPI、半年活跃热力图、按模型堆叠柱状图与模型环形图（dsh-plugin） |
| [Wine-Red/dsh-codex-timeline](https://github.com/Wine-Red/dsh-codex-timeline) | Client + Host | `dsh-codex-timeline` | npm | 2 | Codex-style turn timeline and local conversation search for DeepSeek Harness Web \| Codex风格的对话节点时间线导航栏，提供会话内容搜 |
| [skiuniverse/dsh-running-liang](https://github.com/skiuniverse/dsh-running-liang) | Client + Host | `dsh-running-liang` | npm | 2 | A Chrome-dino style mini-game for DeepSeek Harness Web: play while waiting for the agent, score from 梁子 to 梁圣 |
| [haiziyao/dsh-vision-mix](https://github.com/haiziyao/dsh-vision-mix) | Client + Host | `dsh-vision-mix` | npm | 2 | Vision routing and image generation for DeepSeek Harness through a fixed Mix model. |
| [az7627/dsh-token-usage](https://github.com/az7627/dsh-token-usage) | Client + Host | `@az7627/dsh-token-usage` | npm | 2 | Per-conversation token usage timeline plugin for the dsh Web conversation view |
| [PandaPolo/dsh-voice-call](https://github.com/PandaPolo/dsh-voice-call) | Client + Host | `dsh-voice-call` | npm | 2 | Give a DeepSeek Harness agent a voice it owns — offer_call rings the human (接听/拒接/稍后); local TTS via CrispASR  |
| [jianweideng0515-create/dsh-usage-stats](https://github.com/jianweideng0515-create/dsh-usage-stats) | Client + Host | `@abcdefu_cja/dsh-usage-stats` | npm | 2 | DSH plugin: precise API usage statistics (tokens, cost, cache hit rate, per-model breakdown) with multi-provid |
| [FenyxHuang/dsh-desktop-pet](https://github.com/FenyxHuang/dsh-desktop-pet) | Client + Host | `dsh-desktop-pet` | npm | 2 | Whale desktop pet for DeepSeek Harness: live agent status + API balance as a circular sea level, with jump/div |
| [H97y/dsh-devflow](https://github.com/H97y/dsh-devflow) | Client + Host | `dsh-devflow` | npm | 1 | Automated development pipeline plugin for DeepSeek Harness: requirement pool → LLM refine/design/plan/review → |
| [Lan-zk/dsh-at-mention](https://github.com/Lan-zk/dsh-at-mention) | Client + Host | `dsh-at-mention` | npm | 1 | @-mention context references for DeepSeek Harness: workspace file search and cross-session references from the |
| [LaoYueHanNi/dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree) | Client + Host | `dsh-git-worktree` | npm | 1 |  |
| [MarecGents/deepseek-harness-hub](https://github.com/MarecGents/deepseek-harness-hub) | Client + Host | `@marecgents/dsh-hub` | npm | 1 | windows desktop project as plugin for deepseek harness |
| [Saikel-Orado-Liu/dsh-cost-meter](https://github.com/Saikel-Orado-Liu/dsh-cost-meter) | Client + Host | `@gamegeek-saikel/dsh-cost-meter` | npm | 1 | Cost tracking plugin for the DeepSeek Harness Web GUI — snapshot-anchored per-turn pricing, account balance, a |
| [WenhongPan/dsh-projects](https://github.com/WenhongPan/dsh-projects) | Client + Host | `dsh-projects` | npm | 1 | Project and session organization for DeepSeek Harness: multi-folder projects, searchable chats, attention summ |
| [brzvsk/dsh-plugins](https://github.com/brzvsk/dsh-plugins) | Client + Host | `dsh-visualize` | npm | 1 |  |
| [cungphammanh590-star/dsh-quiz](https://github.com/cungphammanh590-star/dsh-quiz) | Client + Host | `dsh-quiz` | npm | 1 | 让碎片化知识随问答深入脑海 |
| [fazhu4/dsh-usage-insights](https://github.com/fazhu4/dsh-usage-insights) | Client + Host | `dsh-usage-insights` | npm | 1 | dsh的本地用量面板，统计 Token、请求、Agent 活动、工具调用和性能 |
| [gfds2005/dsh-timed-goal](https://github.com/gfds2005/dsh-timed-goal) | Client + Host | `dsh-timed-goal` | npm | 1 | DSH（DeepSeek Harness） Web 插件：在任意对话中配置一次性（或每日重复）任务——一个绝对时间加上要执行的提示词。到点时，插件将对话权限固定为 full access（danger-full-acce |
| [huntdier/dsh-open-plugins](https://github.com/huntdier/dsh-open-plugins) | Client + Host | `@huntdier/dsh-client-ui-aionui-panel` | npm | 1 |  |
| [saitamahang/dsh-skill-importer](https://github.com/saitamahang/dsh-skill-importer) | Client + Host | `dsh-skill-importer` | npm | 1 | Import, validate, manage, and migrate Agent Skills for DeepSeek Harness (DSH), Claude Code, Codex, and other A |
| [spacexun2/dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) | Client + Host | `dsh-worktime-board` | npm | 1 | 🐂🐴 牛马修仙看板：DeepSeek Harness 工时统计 × 修仙养成——把每一分钟劳动，都修成境界（日/周/月 + 学年年历，炼气→宇宙洪荒） |
| [tianleyitian/dsh-file-drop](https://github.com/tianleyitian/dsh-file-drop) | Client + Host | `dsh-file-drop` | npm | 1 | 文件拖拽：把文件拖到 DSH 窗口，真实路径写入输入框 |
| [young1lin/dsh-ui-gitworkbench](https://github.com/young1lin/dsh-ui-gitworkbench) | Client + Host | `@young1lin/dsh-ui-gitworkbench` | npm | 1 |  |
| [ycp424c/dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | Client + Host | `@ycp424c/dsh-luna-vision-bridge` | npm | 1 | DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek |
| [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) | Client + Host | `@artificialnotimbecile/dsh-context-taxonomy` | npm | 1 | Logical-call context taxonomy plugin for DeepSeek Harness |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Client + Host | `dsh-translator` | npm | 1 | Turn DeepSeek Harness into a focused, configurable AI translation workspace. |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Client + Host | `dsh-context-lens` | npm | 1 | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse c |
| [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | Client + Host | `dsh-chrome` | npm | 1 | Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl. |
| [NexusAgentX/dsh-lens](https://github.com/NexusAgentX/dsh-lens) | Client + Host | `dsh-lens` | npm | 1 | Real-time code feedback for DeepSeek Harness — LSP, linters, formatters, structural analysis via a host-native |
| [edynasty/dsh-opencode-go-provider](https://github.com/edynasty/dsh-opencode-go-provider) | Client + Host | `dsh-opencode-go-provider` | npm | 1 | DSH OpenCode Go provider plugin |
| [mouliangyu/dsh-plugins](https://github.com/mouliangyu/dsh-plugins) | Client + Host | `dsh-remote` | npm | 1 | Community plugins for DeepSeek Harness |
| [NinjaSln-labs/dsh-plugins](https://github.com/NinjaSln-labs/dsh-plugins) | Client + Host | `dsh-context-compass` | npm | 1 | DeepSeek Harness 个人自研插件集：上下文罗盘 / 跨会话知识 / 子代理模型路由 / AI 生图（Personally developed plugins for DeepSeek Harness） |
| [cnyac/dsh-polling](https://github.com/cnyac/dsh-polling) | Client + Host | `dsh-polling` | npm | 1 | dsh-polling — 轮询任务/定时任务 plugin for DeepSeek Harness: cron scheduled tasks as real sessions, natural-language c |
| [namesColin/DSH-Plugin-Account-HUD](https://github.com/namesColin/DSH-Plugin-Account-HUD) | Client + Host | `dsh-account-hud` | npm | 1 | 一个deepseek harness的插件，用于实时显示api-key的余额和api服务状态。昨天dsh发布后高强度使用，发现这个功能对我这种余额敏感开发者很重要，遂开发之，后续必然有更多更好的插件涌现出来，我谨以此项目 |
| [samecorner/dsh-token-usage](https://github.com/samecorner/dsh-token-usage) | Client + Host | `@samecorner/dsh-client-ui-token-usage` | npm | 1 | DSH (DeepSeek Harness) web plugin — Token usage analytics tab for the conversation view (KPIs, context meter,  |
| [HenC49/dsh-mcp-manager](https://github.com/HenC49/dsh-mcp-manager) | Client + Host | `dsh-mcp-manager` | npm | 1 | 一个 DeepSeek Harness MCP 配置页 |
| [a792883583/dsh-git-panel](https://github.com/a792883583/dsh-git-panel) | Client + Host | `dsh-git-panel` | npm | 1 | DSH web GUI git panel: branch management + GitLens-style commit graph |
| [woshi-Tom/dsh-status-plugin](https://github.com/woshi-Tom/dsh-status-plugin) | Client + Host | `dsh-status-plugin` | npm | 1 | dsh status plugin；可以方便的查看宿主机的运行状态，故障时方便排查 |
| [ZeroingIn/dsh-provider-billing](https://github.com/ZeroingIn/dsh-provider-billing) | Client + Host | `dsh-provider-billing` | npm | 1 | DeepSeek Harness plugin: provider account balance inside each Models settings row, queried through a loopback- |
| [lx963/dsh-webui-background](https://github.com/lx963/dsh-webui-background) | Client + Host | `dsh-webui-background` | npm | 1 |  |
| [KeLearns/dsh-token-usage](https://github.com/KeLearns/dsh-token-usage) | Client + Host | `@kelearns/dsh-token-usage` | npm | 1 |  |
| [luoyu-xingu/dsh-multi-root](https://github.com/luoyu-xingu/dsh-multi-root) | Client + Host | `@luoyu_xingu/dsh-multi-root` | npm | 1 |  |
| [devmom/dsh-session-import](https://github.com/devmom/dsh-session-import) | Client + Host | `dsh-session-import` | npm | 1 |  |
| [lhenlihai-hub/dsh-voice-input](https://github.com/lhenlihai-hub/dsh-voice-input) | Client + Host | `dsh-voice-input` | npm | 1 |  |
| [TingRuDeng/dsh-smart-approval](https://github.com/TingRuDeng/dsh-smart-approval) | Client + Host | `dsh-smart-approval` | npm | 1 | Fail-closed three-mode approval plugin for DeepSeek Harness |
| [wanghehe123/dsh-cite](https://github.com/wanghehe123/dsh-cite) | Client + Host | `@wishp3/dsh-cite` | npm | 1 | DeepSeek Harness 的引注插件：@ 历史会话、圈选前文加批注、打开这一轮写出的文件。 |
| [Visol-456/dsh-cost-tracker](https://github.com/Visol-456/dsh-cost-tracker) | Client + Host | `@visol-456/dsh-cost-tracker` | npm | 1 | LLM 成本统计插件（DeepSeek Harness）：按真实 token 用量折算费用，每次调用计费 + 会话汇总 + 使用统计页（UI 全面对齐 CC Switch 风格）· CC-Switch-style usa |
| [JesmonX/dsh-web-shell](https://github.com/JesmonX/dsh-web-shell) | Client + Host | `dsh-web-shell` | npm | 1 | DeepSeek Harness 的右侧停靠 Web Shell 插件，帮助在web对话同时进行用户的 shell 操作。 |
| [FlutterSoul/dsh-git-workbench](https://github.com/FlutterSoul/dsh-git-workbench) | Client + Host | `dsh-git-workbench` | npm | 1 | Git and GitHub pull-request workbench for DeepSeek Harness, with agent tools and an integrated Web UI. |
| [Jamailar/beav-deepseek-harness](https://github.com/Jamailar/beav-deepseek-harness) | Client + Host | `beav-creator-dsh` | npm | 1 | Beav Creator for Xiaohongshu/RED, social-media AI operations, research, copywriting, images and video in DeepS |
| [izz-BLUE/dsh-devtools](https://github.com/izz-BLUE/dsh-devtools) | Client + Host | `dsh-devtools` | npm | 1 | Metadata-first runtime profiler for DeepSeek Harness agents |
| [AlwaysSum/deepseek-harness-kit](https://github.com/AlwaysSum/deepseek-harness-kit) | Client + Host | `dsh-better-sidebar` | npm | 1 | 让所有人可以更方便的使用DeepSeek harness |
| [dsh-mixxed/dsh-client-ui-settings-skills](https://github.com/dsh-mixxed/dsh-client-ui-settings-skills) | Client + Host | `@dsh-mixxed/dsh-client-ui-settings-skills` | npm | 1 | A customized DeepSeek Harness skill setting UI plugin. |
| [PaRr0tBoY/dsh-toc-and-rewind](https://github.com/PaRr0tBoY/dsh-toc-and-rewind) | Client + Host | `dsh-toc-tail` | npm | 1 | 添加一个迷你目录在对话旁，适合长程对话导航，还可以直接rewind到选定对话，支持恢复代码变更和总结，暂不稳定 |
| [CpfPatrick/dsh-codex-keychain](https://github.com/CpfPatrick/dsh-codex-keychain) | Client + Host | `dsh-codex-keychain` | npm | 1 | Unofficial ChatGPT OAuth provider for DeepSeek Harness with native OS keychain storage |
| [dsh-mixxed/dsh-client-ui-filesystem](https://github.com/dsh-mixxed/dsh-client-ui-filesystem) | Client + Host | `@dsh-mixxed/dsh-client-ui-filesystem` | npm | 1 | A customized DeepSeek Harness filesystem UI plugin. |
| [SongChengMing1/dsh-news](https://github.com/SongChengMing1/dsh-news) | Client + Host | `@wilond/dsh-news` | npm | 1 | DSH Web GUI 新闻聚合插件：侧边栏入口 + 弹窗聚合国际/AI/科普/历史 RSS 新闻，站内阅读、中英互译、自定义源。A news aggregator plugin for the DeepSeek Har |
| [hyperMoss/dsh-diary](https://github.com/hyperMoss/dsh-diary) | Client + Host | `dsh-diary` | npm | 1 | Diary plugin for DeepSeek Harness: daily markdown journal entries, custom templates, and a web settings sectio |
| [zebbkira/dsh-pluginmgmt](https://github.com/zebbkira/dsh-pluginmgmt) | Client + Host | `dsh-pluginmgmt` | npm | 1 | Deepseek harness插件全生命周期管理 |
| [xiaohj233/dsh-magic-context](https://github.com/xiaohj233/dsh-magic-context) | Client + Host | `dsh-magic-context` | npm | 1 | Magic Context — community port to DeepSeek Harness (DSH). Shared SQLite memory across harnesses, harness='dsh' |
| [ayahunter/dsh-plugin-clinic](https://github.com/ayahunter/dsh-plugin-clinic) | Client + Host | `dsh-plugin-clinic` | npm | 1 | Read-only health clinic for installed DeepSeek Harness plugins: loader health, dependency integrity, version c |
| [Zaogaogwc/dsh-plugin-manager](https://github.com/Zaogaogwc/dsh-plugin-manager) | Client + Host | `@zaogaogwc/dsh-plugin-manager` | npm | 1 | Mod-style plugin management for DeepSeek Harness: provenance, preview-first hot toggles, presets, AI filtering |
| [peng-huiyang/cronjob-dsh-plugin](https://github.com/peng-huiyang/cronjob-dsh-plugin) | Client + Host | `cronjob-dsh-plugin` | npm | 1 | 尝试开发适配deepseek harness的定时任务插件，支持在前端页面直接设置定时任务，实现内部驱动的定时请求，满足一定程度上的脱手需求 |
| [brickmaker/dsh-workspace-files](https://github.com/brickmaker/dsh-workspace-files) | Client + Host | `dsh-workspace-files` | npm | 1 | 为 DSH Web 提供当前工作区文件树右侧栏 |
| [1710782766/dsh-llm-vision](https://github.com/1710782766/dsh-llm-vision) | Client + Host | `dsh-llm-vision` | npm | 0 |  |
| [AlexYin-Tongji/dsh-plugin-console](https://github.com/AlexYin-Tongji/dsh-plugin-console) | Client + Host | `dsh-plugin-console` | npm | 0 |  |
| [Czerror/dsh-plugin-prompt-tool](https://github.com/Czerror/dsh-plugin-prompt-tool) | Client + Host | `dsh-plugin-prompt-tool` | npm | 0 |  |
| [GraySilver/dsh-task-modes](https://github.com/GraySilver/dsh-task-modes) | Client + Host | `@graysilver/dsh-task-modes` | npm | 0 |  |
| [JayDong9130/dsh-evolution-lab](https://github.com/JayDong9130/dsh-evolution-lab) | Client + Host | `dsh-evolution-lab` | npm | 0 |  |
| [MicroSpotlight/openharness-find-plugin](https://github.com/MicroSpotlight/openharness-find-plugin) | Client + Host | `@microspotlight/openharness-find-plugin` | npm | 0 |  |
| [NOirBRight/dsh-llm-grok](https://github.com/NOirBRight/dsh-llm-grok) | Client + Host | `dsh-llm-grok` | npm | 0 |  |
| [NoNshiranai/dshx-working-activity](https://github.com/NoNshiranai/dshx-working-activity) | Client + Host | `@dshx/working-activity` | npm | 0 |  |
| [Sttrevens/dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) | Client + Host | `@steven-wu/dsh-linked-folders` | npm | 0 |  |
| [lkshjd/dsh-balance](https://github.com/lkshjd/dsh-balance) | Client + Host | `@sky_sun/dsh-balance` | npm | 0 |  |
| [meltartica/dsh-mcp-servers](https://github.com/meltartica/dsh-mcp-servers) | Client + Host | `dsh-mcp-servers` | npm | 0 |  |
| [omdsh-plugins/omdsh-plughub](https://github.com/omdsh-plugins/omdsh-plughub) | Client + Host | `@omdsh-plugins/omdsh-plughub` | npm | 0 |  |
| [peterliucius/dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) | Client + Host | `dsh-prompt-optimize` | npm | 0 |  |
| [quicksandznzn/dsh-session-share](https://github.com/quicksandznzn/dsh-session-share) | Client + Host | `dsh-session-share` | npm | 0 |  |
| [winditer/dsh-prompt-optimizer](https://github.com/winditer/dsh-prompt-optimizer) | Client + Host | `dsh-prompt-optimizer` | npm | 0 |  |
| [xiaosenho/dsh-plugin-remote-access](https://github.com/xiaosenho/dsh-plugin-remote-access) | Client + Host | `@xiaosenho/dsh-plugin-remote-access` | npm | 0 |  |
| [zoyluoblue/deepseek-harness-token](https://github.com/zoyluoblue/deepseek-harness-token) | Client + Host | `@zoytown/dsh-token` | npm | 0 |  |
| [kingsunb/dsh-model-plus](https://github.com/kingsunb/dsh-model-plus) | Client + Host | `@kingsunb/dsh-model-plus` | npm | 0 |  |
| [ZicanC/dsh-git](https://github.com/ZicanC/dsh-git) | Client + Host | `dsh-git` | npm | 0 |  |
| [ZenMux/dsh-plugins](https://github.com/ZenMux/dsh-plugins) | Client + Host | `@zenmux/dsh-plugins` | npm | 0 |  |
| [hccccc01333/dsh-analytics](https://github.com/hccccc01333/dsh-analytics) | Client + Host | `dsh-analytics` | npm | 0 |  |
| [2436238575/dsh-turn-diff](https://github.com/2436238575/dsh-turn-diff) | Client + Host | `dsh-turn-diff` | npm | 0 |  |
| [Tastelessor/dsh-usage-stats](https://github.com/Tastelessor/dsh-usage-stats) | Client + Host | `dsh-token-usage` | npm | 0 |  |
| [hajimixiaojie/dsh-lens](https://github.com/hajimixiaojie/dsh-lens) | Client + Host | `@dsh-lens/dsh-lens` | npm | 0 |  |
| [LKRCharon/dsh-research-library](https://github.com/LKRCharon/dsh-research-library) | Client + Host | `dsh-research-library` | npm | 0 |  |
| [samecorner/dsh-git-graph](https://github.com/samecorner/dsh-git-graph) | Client + Host | `@samecorner/dsh-git-graph` | npm | 0 |  |
| [dingyi222666/dsh-agents-md](https://github.com/dingyi222666/dsh-agents-md) | Client + Host | `@dingyi222666/dsh-agents-md` | npm | 0 |  |
| [pengyonglei/dsh-plugins](https://github.com/pengyonglei/dsh-plugins) | Client + Host | `dsh-balance-view` | npm | 0 |  |
| [puji4810/dsh-study](https://github.com/puji4810/dsh-study) | Client + Host | `@puji4810/dsh-mermaid` | npm | 0 |  |
| [roojay/dsh-trusted-host-proxy-403-fix](https://github.com/roojay/dsh-trusted-host-proxy-403-fix) | Client + Host | `dsh-trusted-host-proxy-403-fix` | npm | 0 |  |
| [KKKneko/dsh-search-enhance](https://github.com/KKKneko/dsh-search-enhance) | Client + Host | `dsh-search-enhance` | npm | 0 |  |
| [zuoguyoupan2023/openharness-reader](https://github.com/zuoguyoupan2023/openharness-reader) | Client + Host | `openharness-reader` | npm | 0 |  |
| [sjh9714/clippy-harness](https://github.com/sjh9714/clippy-harness) | Client + Host | `dsh-clippy` | npm | 0 |  |
| [GodD6366/dsh-sub2api](https://github.com/GodD6366/dsh-sub2api) | Client + Host | `@godd6366/dsh-sub2api` | npm | 0 |  |
| [Da-Mie/dsh-rewind](https://github.com/Da-Mie/dsh-rewind) | Client + Host | `dsh-rewind` | npm | 0 |  |
| [dac114514/dsh-theme-center](https://github.com/dac114514/dsh-theme-center) | Client + Host | `dsh-theme-center` | npm | 0 |  |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | Client + Host | `@ethanyoq/dsh-ai-novel-writer` | Git only | 413 | 本地优先 AI 小说创作工作台，提供 Windows/macOS 桌面版与 DeepSeek Harness 插件开发预览，支持角色、大纲、章节蓝图、审稿修稿和本地模型。 |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Client + Host | `@omdsh-dev/dsh-genui` | Git only | 254 | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fenc |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Client + Host | `@dsh-external/dsh-visualize` | Git only | 188 | 在 DSH 对话中生成交互式可视化｜Render model-generated interactive cards inside DSH conversations |
| [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Client + Host | `dsh-agent-team-gui` | Git only | 108 | Persistent multi-model workflow teams for DeepSeek Harness — dynamic lead planning, bounded DAGs, per-agent mo |
| [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Client + Host | `@oil-oil/dsh-vision` | Git only | 74 | Near-native image understanding for DeepSeek Harness |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 71 | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Client + Host | `dsh-notification` | Git only | 64 | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude key |
| [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | Client + Host | `@openbiliclaw/dsh-plugin` | Git only | 47 | OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册  |
| [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | Client + Host | `seektty` | Git only | 41 | Pluggable DeepSeek-colored TUI for DeepSeek Harness |
| [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) | Client + Host | `dsh-auth-in-one` | Git only | 32 | Self-contained DeepSeek Harness (DSH) plugin for Provider/Auth login, model switching, image fallback, token/c |
| [Fisfzy/dsh-ego-browser](https://github.com/Fisfzy/dsh-ego-browser) | Client + Host | `@dsh-external/ego-browser` | Git only | 26 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | Client + Host | `@dsh-scholar/research-plugin` | Git only | 24 | dsh-scholar |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Client + Host | `dsh-custom-tool` | Git only | 24 | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool l |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | Client + Host | `@dsh-external/dsh-stickers` | Git only | 21 | DSH WebUI sticker plugin for bidirectional user and agent reactions |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | Client + Host | `dsh-stock-market` | Git only | 16 | 有效解决了写代码的时候账户不能同时亏钱的BUG |
| [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) | Client + Host | `@linxin666/freestyle-dsh-theme` | Git only | 12 | DeepSeek Harness 主题体验插件：OKLCH 主题提案 + 主题设计器（跨重启持久化） |
| [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | Client + Host | `dsh-plugin-healthcheck` | Git only | 12 | 害怕插件装了就崩溃？用这个插件帮你检测插件是否正常/是否含木马！ |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Client + Host | `dsh-explain` | Git only | 11 | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 |
| [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | Client + Host | `@dsh-external/dsh-sidechain` | Git only | 10 | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | Client + Host | `@xilin3/dsh-prompt-persona` | Git only | 10 | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. |
| [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) | Client + Host | `@yejiming/dsh-museai-tavern` | Git only | 10 | MuseAI的DeepSeek Harness插件，可以将你的MuseAI角色放进DSH使用啦！ |
| [yanglongyun/ramify-dsh](https://github.com/yanglongyun/ramify-dsh) | Client + Host | `@ramify/dsh-ramify` | Git only | 10 | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| [acefun29/dsh-file-mount](https://github.com/acefun29/dsh-file-mount) | Client + Host | `dsh-file-mount` | Git only | 9 |  |
| [Karbo123/DSH-EvoResearch](https://github.com/Karbo123/DSH-EvoResearch) | Client + Host | `@evoresearch/dsh-app` | Git only | 9 | 自进化科研工作流 |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Client + Host | `dsh-web-tools` | Git only | 8 | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXN |
| [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | Client + Host | `@dsh-external/dsh-oauth-mcp-client` | Git only | 8 | OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness. |
| [Rxiain/dsh-openviking](https://github.com/Rxiain/dsh-openviking) | Client + Host | `dsh-openviking` | Git only | 8 | 面向 DeepSeek Harness 的 OpenViking 检索、资源管理、自动召回与会话记忆插件 |
| [gameswu/dsh-plugin-vscode-sidebar](https://github.com/gameswu/dsh-plugin-vscode-sidebar) | Client + Host | `dsh-plugin-vscode-sidebar` | Git only | 8 | 提供vscode风格和功能的侧栏 |
| [culture-flask/dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet) | Client + Host | `dsh-aemeath-pet` | Git only | 7 | 爱弥斯 · DeepSeek Harness 桌宠 — DeepSeek Harness Web GUI 的像素风宠物插件。 |
| [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) | Client + Host | `hanai-investment-dsh` | Git only | 7 | Local-first A-share research workbench for DeepSeek Harness: market dashboards, watchlists, valuation, four in |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | Client + Host | `dsh-douyin` | Git only | 6 | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 |
| [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) | Client + Host | `dsh-cue-plugin` | Git only | 6 | DeepSeek Harness 的跨会话引用(cue)插件 |
| [kunjinkao-os/dsh-mobile-gui-agent](https://github.com/kunjinkao-os/dsh-mobile-gui-agent) | Client + Host | `dsh-mobile-gui-agent` | Git only | 6 | Android Mobile GUI Agent plugin for DeepSeek Harness with ADB control, iterative verification, approvals, and  |
| [ishuowang/dsh-agent-team-room](https://github.com/ishuowang/dsh-agent-team-room) | Client + Host | `dsh-agent-team-room` | Git only | 6 | Native DSH rooms for connecting independent Sessions and provider-backed AI members—without bundled roles or s |
| [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | Client + Host | `@bill9109/dsh-101` | Git only | 5 | DSH 文档阅读模式 |
| [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | Client + Host | `dsh-longbridge` | Git only | 5 | DSH plugin for Longbridge HK/US market data, accounts, positions, and approval-gated order placement, with a b |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | Client + Host | `dsh-learn-everything` | Git only | 5 |  |
| [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) | Client + Host | `dsh-multimodal` | Git only | 5 | 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,De |
| [Zephyr-vibe/dsh-personalize](https://github.com/Zephyr-vibe/dsh-personalize) | Client + Host | `dsh-personalize` | Git only | 5 | Per-host personalization for DSH: custom instructions, local long-term memory, and reply-tone presets. |
| [yuko0331/DSH-telegram](https://github.com/yuko0331/DSH-telegram) | Client + Host | `dsh-telegram-bot` | Git only | 5 | 通过 Telegram 私聊远程使用和查看 DeepSeek Harness |
| [Altairpaca/dshelm](https://github.com/Altairpaca/dshelm) | Client + Host | `@dshelm/dsh` | Git only | 5 | DSHelm — DeepSeek Harness 的可解释多模型调度层。Chinese-first, DSH-native, evidence-backed. |
| [WhitePlusMS/dsh-input-plus](https://github.com/WhitePlusMS/dsh-input-plus) | Client + Host | `dsh-input-plus` | Git only | 5 | DSH Web UI plugin for workspace file references, prompt history, and lightweight composer enhancements. |
| [1624318455/dsh-plugin-tavily](https://github.com/1624318455/dsh-plugin-tavily) | Client + Host | `@dsh-external/dsh-plugin-tavily` | Git only | 5 | Tavily-backed web search provider plugin for DeepSeek Harness (dsh) — registers a tavily search provider into  |
| [mmzm0808/dsh-ventus-whale](https://github.com/mmzm0808/dsh-ventus-whale) | Client + Host | `dsh-ventus-whale` | Git only | 5 | 🐳 蓝色大肥鱼 · DeepSeek 虎鲸 3D 桌宠插件 — 由 DeepSeek 虎鲸 logo 轮廓重建，悬浮于 Web GUI 角落：拖拽旋转、360° 转圈、爱心互动、悬停工具栏、大小/灵敏度/文字设置，配置 |
| [kikulmj/dsh-jupyter](https://github.com/kikulmj/dsh-jupyter) | Client + Host | `@dsh-local/dsh-jupyter` | Git only | 5 | Provide notebook‑style workbench and local shell for DeepSeek Harness Web GUI |
| [lhwu1/dsh-withskillhub](https://github.com/lhwu1/dsh-withskillhub) | Client + Host | `dsh-withskillhub` | Git only | 4 | 携手skillhub，快捷安装启用丰富的skill，一键装配方便快捷。 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | Client + Host | `@omdsh/dsh-hub` | Git only | 4 |  |
| [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | Client + Host | `@mattheliu/7d7d` | Git only | 4 |  |
| [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | Client + Host | `dsh-book2skill` | Git only | 4 | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human g |
| [echo-xianyu/dsh-go-rotator](https://github.com/echo-xianyu/dsh-go-rotator) | Client + Host | `dsh-go-rotator` | Git only | 4 | A plugin for DSH to swich opencode Go subscription |
| [Jolly-J/dsh-deepseek-billing](https://github.com/Jolly-J/dsh-deepseek-billing) | Client + Host | `dsh-deepseek-billing` | Git only | 4 | DSH WebUI 插件:DeepSeek 余额显示与按会话费用估算 |
| [Aidenwu0209/dsh-PaddleOCR-Skills](https://github.com/Aidenwu0209/dsh-PaddleOCR-Skills) | Client + Host | `dsh-paddleocr-skills` | Git only | 4 | PaddleOCR skills for DeepSeek Harness with native tools and GUI configuration |
| [loguhan/dsh-workshop](https://github.com/loguhan/dsh-workshop) | Client + Host | `dsh-workshop` | Git only | 4 | Steam Workshop style plugin store for DeepSeek Harness Web UI: browse 850+ community plugins, one-click instal |
| [yjh051108/dsh-engram-relay](https://github.com/yjh051108/dsh-engram-relay) | Client + Host | `@dsh-external/dsh-engram-relay` | Git only | 4 | dsh-engram-relay 公开镜像（上游：dsh-external/dsh-engram-relay）：跨会话分层记忆 + 哈希×语义×因果超稀疏唤醒，13 个 engram_* 工具，BSD-3-Clause |
| [Tianyu209/dsh-browser-companion](https://github.com/Tianyu209/dsh-browser-companion) | Client + Host | `dsh-browser-companion` | Git only | 4 | A personal DSH browser plugin: persistent profile, visible window, human-in-the-loop login, and safe agent bro |
| [DoloresCaritasAngelus/DSH-AUX](https://github.com/DoloresCaritasAngelus/DSH-AUX) | Client + Host | `@dolorescaritasangelus/dsh-aux` | Git only | 4 | Auxiliary model system for DeepSeek Harness: unified aux-LLM routing (per-task model, timeout, concurrency, fa |
| [wss534857356/dsh-plugin-codex](https://github.com/wss534857356/dsh-plugin-codex) | Client + Host | `dsh-llm-codex-app-server` | Git only | 4 | Codex App Server model provider for DeepSeek Harness using your local Codex login. |
| [OpenTritium/dsh-codex-shim](https://github.com/OpenTritium/dsh-codex-shim) | Client + Host | `@opentritium/dsh-codex-shim` | Git only | 4 | 让 GPT 在 DSH 中宾至如归    Make GPT feel at home in DSH. |
| [flg1217/dsh-llm-agy](https://github.com/flg1217/dsh-llm-agy) | Client + Host | `@dsh-external/dsh-llm-agy` | Git only | 3 | AGY (Antigravity CLI) integration for DeepSeek Harness: LLM adapter subagents, deep web search, connectivity d |
| [lhwu1/dsh-lookseek](https://github.com/lhwu1/dsh-lookseek) | Client + Host | `dsh-lookseek` | Git only | 3 | 可以看见ai的执行步骤，将ai的步骤抽出来为对应动画，增加编码时等待的娱乐性。 |
| [xiajingchun/dsh-nebulagraph-v5](https://github.com/xiajingchun/dsh-nebulagraph-v5) | Client + Host | `dsh-nebula` | Git only | 3 | nebula v5 plugin for deepseek harness |
| [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | Client + Host | `dsh-revive` | Git only | 3 | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | Client + Host | `dsh-paddle-ocr` | Git only | 3 | DSH plugin for PaddleOCR-VL document layout parsing: convert PDFs and images to Markdown with async jobs, prog |
| [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | Client + Host | `dsh-ernie-image` | Git only | 3 |  |
| [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | Client + Host | `dsh-voice-funasr` | Git only | 3 | Local offline voice input for DSH using FunASR ONNX, with Web Speech fallback, optional LLM polishing, and a b |
| [Yihong89/dsh-usage-plugin](https://github.com/Yihong89/dsh-usage-plugin) | Client + Host | `dsh-usage-plugin` | Git only | 3 | DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + u |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Client + Host | `dsh-wikilink` | Git only | 3 | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach the |
| [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) | Client + Host | `dsh-model-thinking` | Git only | 3 | DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible |
| [sundusk/dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet) | Client + Host | `@linxin666/dsh-waterball` | Git only | 3 | A floating water-ball pet plugin for the DeepSeek Harness Web UI. |
| [l541402398/dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) | Client + Host | `dsh-file-uploads` | Git only | 3 | Upload arbitrary local files from the DeepSeek Harness Web composer and manage them in Settings. |
| [Blaczz/dsh-achievements](https://github.com/Blaczz/dsh-achievements) | Client + Host | `dsh-achievements` | Git only | 3 | DeepSeek Harness achievement & gamification plugin: cross-session badges for turns, tool calls, sessions and d |
| [FlowerWater1019/Angelina-dsh-plugin](https://github.com/FlowerWater1019/Angelina-dsh-plugin) | Client + Host | `@flowerwater1019/angelina-dsh-plugin` | Git only | 3 |  |
| [tzy168/dsh-web-theme-packs](https://github.com/tzy168/dsh-web-theme-packs) | Client + Host | `dsh-web-theme-packs` | Git only | 3 | This is a dsh-pulgin for change theme by yourself. |
| [yha9806/dsh-subagent-admission](https://github.com/yha9806/dsh-subagent-admission) | Client + Host | `dsh-subagent-admission` | Git only | 3 | Shared lifecycle admission protocol and reference policy kernel for DeepSeek Harness subagents. |
| [mervyn-teo/dsh-plugin-qr-connect](https://github.com/mervyn-teo/dsh-plugin-qr-connect) | Client + Host | `dsh-plugin-qr-connect` | Git only | 3 | DeepSeek Harness dynamic plugin: QR-code sidebar button for connecting mobile devices to the web UI |
| [Adkid-Zephyr/Liltloom](https://github.com/Adkid-Zephyr/Liltloom) | Client + Host | `liltloom` | Git only | 3 | 语织：中文优先、用户可控的 AI 写作风格记忆层，让 AI 学会你的表达，需要时再调用。Chinese-first style memory for AI; DeepSeek Harness adapter includ |
| [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) | Client + Host | `dsh-jingling` | Git only | 3 | dsh · dsh-plugin · deepseek · deepseek-harness · deepseek-harness-plugin · ai-companion · desktop-pet · charac |
| [solknight48/dsh-memoryhub](https://github.com/solknight48/dsh-memoryhub) | Client + Host | `dsh-memoryhub` | Git only | 3 | MemoryHub (mh) plugin for DeepSeek Harness (dsh): auto-loads checkpoint memory on session start, adds mh_* too |
| [283Gawin/dsh-heatmap](https://github.com/283Gawin/dsh-heatmap) | Client + Host | `@linxin666/dsh-client-ui-activity-heatmap` | Git only | 3 | DSH Web GUI activity heatmap plugin: GitHub-style commit/token/spend heatmap in the sidebar with per-model cos |
| [deepforce/dsh-balance](https://github.com/deepforce/dsh-balance) | Client + Host | `@deepforce/dsh-balance` | Git only | 3 | DSH plugin: /balance command, composer-dock balance readout with top-up link, session-cost estimate |
| [VanillaCreamer/dsh-plugin-visual-composer](https://github.com/VanillaCreamer/dsh-plugin-visual-composer) | Client + Host | `dsh-plugin-visual-composer` | Git only | 3 | Visual Cordis plugin-tree composer for the DeepSeek Harness Web UI. |
| [invalidnaaaame/dsh-side-workspace](https://github.com/invalidnaaaame/dsh-side-workspace) | Client + Host | `@dsh-external/dsh-side` | Git only | 3 | DSH plugin: Codex-style side conversations (/side, /btw), an integrated right workspace (Side/Subagents/Goal)  |
| [Mreate/dsh-cc-import](https://github.com/Mreate/dsh-cc-import) | Client + Host | `cc-import` | Git only | 3 | Import high-quality conversations into Claude Code and provide CLAUDE.md recognition, add basic features like  |
| [MeowLynxSea/dsh-cot-summerization](https://github.com/MeowLynxSea/dsh-cot-summerization) | Client + Host | `dsh-cot-summerization` | Git only | 3 |  |
| [DreamRift/dsh-web-search-pool](https://github.com/DreamRift/dsh-web-search-pool) | Client + Host | `dsh-web-search-pool` | Git only | 3 | DeepSeek Harness 网页搜索插件：多个 Tavily/Exa key 按限流负载均衡，429 自动换 key，含设置页 UI 与 Tavily 额度总览。 |
| [litestartup-com/dsh-api-gateway](https://github.com/litestartup-com/dsh-api-gateway) | Client + Host | `dsh-api-gateway` | Git only | 3 | DeepSeek Harness's API Gateway plugin: Any third-party client can interact with your DSH Agent. |
| [mianyoubiaoqing/MistyMoon-DSH](https://github.com/mianyoubiaoqing/MistyMoon-DSH) | Client + Host | `@mistymoon/dsh` | Git only | 3 | Local-first long-term companion plugin suite for DeepSeek Harness |
| [21hbguo/dsh-thinking-counter](https://github.com/21hbguo/dsh-thinking-counter) | Client + Host | `@dsh-external/dsh-thinking-counter` | Git only | 2 | DSH「大胖鲸智商检测器」：Thinking 短语检测统计 · 全会话 reasoning 短语命中/分组/聪明程度判定 |
| [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) | Client + Host | `dsh-billing-community-bundle` | Git only | 2 | Billing and usage inspection plugin for DeepSeek Harness. |
| [aka-danielZhang/dsh-mcp-settings](https://github.com/aka-danielZhang/dsh-mcp-settings) | Client + Host | `dsh-mcp-settings` | Git only | 2 | DSH bundle for MCP server management, inventory status, and Web settings |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Client + Host | `@dsh-plugin/dsh-review-loop` | Git only | 2 | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Client + Host | `dsh-model-modes` | Git only | 2 | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness |
| [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) | Client + Host | `@dsh-voice/bundle` | Git only | 2 | Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent rea |
| [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) | Client + Host | `@dsh-external/dsh-schedule` | Git only | 2 | DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks |
| [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | Client + Host | `dsh-conversation-rewind` | Git only | 2 |  |
| [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | Client + Host | `dsh-ssh-remote` | Git only | 2 | SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connecti |
| [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) | Client + Host | `dsh-ui-workbench` | Git only | 2 | DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。 |
| [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) | Client + Host | `dsh-image-to-path` | Git only | 2 | DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响) |
| [MOLAaaaaaaa/dsh-seismicx](https://github.com/MOLAaaaaaaa/dsh-seismicx) | Client + Host | `dsh-seismicx` | Git only | 2 | DeepSeek Harness plugin for the SeismicX earthquake-catalog skill |
| [MirDie/dsh-xai](https://github.com/MirDie/dsh-xai) | Client + Host | `dsh-xai` | Git only | 2 | xAI Grok SuperGrok / X Premium OAuth for DeepSeek Harness |
| [kam74515-boop/dsh-everything-oauth](https://github.com/kam74515-boop/dsh-everything-oauth) | Client + Host | `dsh-everything-oauth` | Git only | 2 | Import local Codex / Grok / Claude / OpenCode / CC Switch logins into DeepSeek Harness |
| [mitian233/dsh-plugin-commandcode-provider](https://github.com/mitian233/dsh-plugin-commandcode-provider) | Client + Host | `dsh-plugin-commandcode-provider` | Git only | 2 |  |
| [izz-BLUE/dsh-deepseek-usage-dashboard](https://github.com/izz-BLUE/dsh-deepseek-usage-dashboard) | Client + Host | `@linxin666/dsh-deepseek-usage-dashboard` | Git only | 2 | DeepSeek Harness Web UI plugin for daily API token usage, cost estimates, and balance monitoring |
| [WhiseNT/dsh-blackjack](https://github.com/WhiseNT/dsh-blackjack) | Client + Host | `dsh-blackjack` | Git only | 2 | 谁不想coding的时候急头白脸的和大肥鱼来一场紧张刺激的21点呢 |
| [Blaczz/dsh-soundscape](https://github.com/Blaczz/dsh-soundscape) | Client + Host | `dsh-soundscape` | Git only | 2 | DeepSeek Harness Web UI soundscape: turn-complete celebration (synth chime + confetti), blocked/approval alert |
| [MagicCrazyMan/dsh-password-prompt](https://github.com/MagicCrazyMan/dsh-password-prompt) | Client + Host | `dsh-password-prompt` | Git only | 2 | DeepSeek Harness plugin: masked password panel in the Web GUI (password_prompt tool) — bundle + dual-face plug |
| [tyql688/dsh-providers](https://github.com/tyql688/dsh-providers) | Client + Host | `dsh-providers` | Git only | 2 | Model providers for DeepSeek Harness: sign in with OAuth or an API key, and keep every provider's model catalo |
| [2501136589/dsh-rewind](https://github.com/2501136589/dsh-rewind) | Client + Host | `@xiaoxin/dsh-rewind` | Git only | 2 | DSH回退插件 |
| [GuZhengSVT/dsh-WeCom-notify](https://github.com/GuZhengSVT/dsh-WeCom-notify) | Client + Host | `dsh-wecom-notify` | Git only | 2 | DeepSeek Harness (dsh) 插件：事件驱动的企业微信（WeCom）群机器人通知 — goal 完成/阻塞与每轮对话自动推送，另含 wechat_notify 工具；走官方 webhook，零封号风险。 |
| [mochgolf/dsh-deepseek-vision-router](https://github.com/mochgolf/dsh-deepseek-vision-router) | Client + Host | `dsh-deepseek-vision-router` | Git only | 2 | Transparent image preprocessing route for DeepSeek Harness |
| [superboy911/dsh-model-router](https://github.com/superboy911/dsh-model-router) | Client + Host | `@dsh-external/dsh-model-router` | Git only | 2 | DSH model-routing plugin for keyword routing and isolated image generation / DSH 关键词路由与隔离生图插件 |
| [xiaohj233/dsh-tavily-search-provider](https://github.com/xiaohj233/dsh-tavily-search-provider) | Client + Host | `dsh-tavily-search-provider` | Git only | 2 | Tavily search provider for DeepSeek Harness with full search-control mapping, credential-backed key UI, and gu |
| [apodemakeles/dsh-token-dashboard](https://github.com/apodemakeles/dsh-token-dashboard) | Client + Host | `@apodemakeles/dsh-token-dashboard` | Git only | 2 | DeepSeek Harness (DSH) plugin: local daily/weekly token usage dashboard and heatmap |
| [Chance-Wu/dsh-change-center](https://github.com/Chance-Wu/dsh-change-center) | Client + Host | `dsh-change-center` | Git only | 2 | 文件变更的捕获 → 审查 → 拒绝 / 应用 → 回滚中心 |
| [9Epuuuu/dsh-api-balance](https://github.com/9Epuuuu/dsh-api-balance) | Client + Host | `@9Epuuuu/dsh-api-balance` | Git only | 2 | DeepSeek account balance readout for DSH Web (dsh-plugin) |
| [KanoNoUta/dsh-captain](https://github.com/KanoNoUta/dsh-captain) | Client + Host | `@kanonouta/dsh-captain` | Git only | 2 | Captain plugin for DeepSeek Harness: GPT planning, DeepSeek workers, independent review, adaptive multi-agent  |
| [tuanmaoOVO/dsh-memory-manager](https://github.com/tuanmaoOVO/dsh-memory-manager) | Client + Host | `@dsh-external/dsh-memory-manager` | Git only | 2 | dsh的记忆管理 |
| [DimitriLIAN/dsh-habits](https://github.com/DimitriLIAN/dsh-habits) | Client + Host | `dsh-habits` | Git only | 2 | Habits editor for DeepSeek Harness — edit the user-global AGENTS.md from Web settings, injected into every ses |
| [qichuang321/dsh-workflow-groups](https://github.com/qichuang321/dsh-workflow-groups) | Client + Host | `dsh-workflow-groups` | Git only | 2 | 分组工作流看板插件：每个分好组的 workflow 在 DSH Web GUI 有独立标签页实时展示状态/阶段/子agent/日志 |
| [ishuowang/dsh-sideband](https://github.com/ishuowang/dsh-sideband) | Client + Host | `dsh-sideband` | Git only | 2 | Async LLM context relay between DeepSeek Harness sessions and Agent Team Rooms |
| [uluckystar/dsh-schedule-tasks](https://github.com/uluckystar/dsh-schedule-tasks) | Client + Host | `dsh-schedule-tasks` | Git only | 2 | DSH 定时任务插件:标准 cron 5 段式调度 + shell/通知触发动作 + Web 侧边栏管理面板。by MyDSH 社区 (mydsh.dev) |
| [lehhair/dsh-html-artifact](https://github.com/lehhair/dsh-html-artifact) | Client + Host | `@dsh-external/dsh-html-artifact` | Git only | 2 |  |
| [WhitePlusMS/dsh-git-graph](https://github.com/WhitePlusMS/dsh-git-graph) | Client + Host | `dsh-git-graph` | Git only | 2 | Read-only Git Graph view for the DeepSeek Harness web interface. Inspect commit topology, branches, tags, remo |
| [lizhecome/deepseek-harness-prompt-optimizer](https://github.com/lizhecome/deepseek-harness-prompt-optimizer) | Client + Host | `@lizhecome/dsh-prompt-optimizer` | Git only | 2 | LLM-backed prompt optimization bundle for DeepSeek Harness |
| [pengzhou267-ai/dsh-coding-plans](https://github.com/pengzhou267-ai/dsh-coding-plans) | Client + Host | `dsh-coding-plans` | Git only | 2 | Use multiple coding-plan subscriptions (ChatGPT/Codex, Claude, Gemini, …) inside DeepSeek Harness via native O |
| [SingleOne/dsh-notify-center](https://github.com/SingleOne/dsh-notify-center) | Client + Host | `dsh-notify-center` | Git only | 2 | Native desktop and webhook notifications for DeepSeek Harness. |
| [1321928757/dsh-prompt-polish](https://github.com/1321928757/dsh-prompt-polish) | Client + Host | `dsh-prompt-polish` | Git only | 1 | 输入栏提示词优化插件 / Input-bar prompt optimizer for DeepSeek Harness：6 种策略 × 3 种语言一键重写草稿，可选会话上下文，带确认弹窗、最近 5 次历史与三级设置持久 |
| [HeWhenJay/dsh-project-knowledge-review](https://github.com/HeWhenJay/dsh-project-knowledge-review) | Client + Host | `dsh-project-knowledge-review` | Git only | 1 | 中文 DSH 知识复习插件：有证据才回答、资料缺失提醒补充学习视频。 |
| [Jian-Sparrow/dsh-plugin-mission-control](https://github.com/Jian-Sparrow/dsh-plugin-mission-control) | Client + Host | `dsh-plugin-mission-control` | Git only | 1 |  |
| [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) | Client + Host | `dsh-llm-ollama` | Git only | 1 | Native Ollama Cloud provider and Web configuration plugin for DeepSeek Harness |
| [PandaAIDD/dsh-molecule-viewer](https://github.com/PandaAIDD/dsh-molecule-viewer) | Client + Host | `@dsh-plugins/dsh-molecule-viewer` | Git only | 1 | DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染交互式 3D 分子查看器（3Dmol.js，支持旋转/缩放/样式切换/着色）。 |
| [bx33661/dsh-omv](https://github.com/bx33661/dsh-omv) | Client + Host | `dsh-omv` | Git only | 1 | Native DeepSeek Harness workbench for evidence-first vulnerability research, reproduction, and reporting. |
| [eurt-nano/dsh-cache-cost-monitor](https://github.com/eurt-nano/dsh-cache-cost-monitor) | Client + Host | `dsh-cache-cost-monitor` | Git only | 1 | 让 DeepSeek 的每一分钱都花在刀刃上 —— 前缀缓存命中率、费用与健康度，一眼看穿。（已按规范要求严格配置文件，不会出现异常阻止启动） DeepSeek Harness 插件，the monster of cac |
| [kaiqiangh/dsh-workshpace-plugin](https://github.com/kaiqiangh/dsh-workshpace-plugin) | Client + Host | `dsh-workspace-plugin` | Git only | 1 | Inspect the files an agent touched, review session artifacts, preview bounded content, and manage local Worksp |
| [kexuejin/dsh-zhihu-dashboard](https://github.com/kexuejin/dsh-zhihu-dashboard) | Client + Host | `dsh-zhihu-dashboard` | Git only | 1 | Zhihu (知乎) dashboard for DeepSeek Harness: hot list with trends, follow feed, post tracking, and app-idea dist |
| [pureskywalk/dsh-context-show](https://github.com/pureskywalk/dsh-context-show) | Client + Host | `dsh-context-show` | Git only | 1 | DSH Web 实时上下文占用面板：可拖动面板、按工具/供应商统计 token 用量与花费、峰谷计价 |
| [space-spacee-clamation/dsh-package-manager](https://github.com/space-spacee-clamation/dsh-package-manager) | Client + Host | `@dsh-ext/dsh-package-manager` | Git only | 1 | dsh包管理器中间件，对原有的add的模式进行的封装，支持预设和插件  （内容还在迭代!!!!） |
| [wangxing-git/dsh-autogate](https://github.com/wangxing-git/dsh-autogate) | Client + Host | `dsh-autogate` | Git only | 1 | DeepSeek Harness 自动审批插件：在 workspace-write 沙箱之上叠加确定性规则 + LLM 安全审批，自动模式不放宽沙箱、fail-closed。 Safe auto-approval for |
| [weisiren000/dsh-remote-ssh-ops](https://github.com/weisiren000/dsh-remote-ssh-ops) | Client + Host | `dsh-remote-ssh-ops` | Git only | 1 | DeepSeek Harness SSH 远程运维插件，支持远程命令、文件管理、JumpServer 与 keyboard-interactive 认证 |
| [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) | Client + Host | `@proton1917/dsh-live-stats` | Git only | 1 | Live token estimates and true streaming TPS for DeepSeek Harness Web |
| [liceses/dsh-web-text-drop](https://github.com/liceses/dsh-web-text-drop) | Client + Host | `@icelily/dsh-text-drop` | Git only | 1 | DSH Web GUI 文本文件拖拽导入插件:把 md / txt / log / 代码等文本文件拖进页面, 按内容长度自动处理 —— 短内容直接进输入框,长内容复制到工作区并粘贴可读路径。 |
| [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) | Client + Host | `deepseek-harness-flow` | Git only | 1 | Visual workflows and multi-model evaluation for DeepSeek Harness |
| [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | Client + Host | `dsh-dev-actions` | Git only | 1 | AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions. |
| [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) | Client + Host | `@dsh-external/dsh-backup-sync` | Git only | 1 | DeepSeek Harness（DSH）备份/恢复 + 跨机同步插件：本地快照、WebDAV 推送/拉取、自动备份与失效归档清理。Snapshot backup, restore and cross-machine s |
| [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) | Client + Host | `dsh-shift-router` | Git only | 1 | Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backo |
| [dalintian/dsh-means-digital-sweet-heart](https://github.com/dalintian/dsh-means-digital-sweet-heart) | Client + Host | `dsh-client-ui-girlfriend` | Git only | 1 | DSH means Digital Sweet Heart — A DSH Plugin to turn your  DeepSeek Harness to AI girlfriends. 一个DSH插件将你的DeepS |
| [dHR-P/dsh-layout-tools](https://github.com/dHR-P/dsh-layout-tools) | Client + Host | `dsh-layout-tools` | Git only | 1 | DSH Web 三栏工作台：对话流净化（工具调用/思考移入右侧面板）+ 左侧工作区文件树（git 状态徽标） |
| [Aidenwu0209/dsh-Unlimited-OCR-Skill](https://github.com/Aidenwu0209/dsh-Unlimited-OCR-Skill) | Client + Host | `dsh-unlimited-ocr-skill` | Git only | 1 | Unlimited-OCR for DeepSeek Harness with a native tool and GUI configuration |
| [Andy294753951/dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme) | Client + Host | `dsh-plugin-gouden-leeuw-theme` | Git only | 1 | Unofficial Gouden Leeuw moonlit sanctuary theme for the DeepSeek Harness web UI |
| [Howe829/dsh-sonar](https://github.com/Howe829/dsh-sonar) | Client + Host | `dsh-sonar` | Git only | 1 | Draggable deep-sea token and context dashboard for DeepSeek Harness |
| [ljcscp/dsh-session-cost](https://github.com/ljcscp/dsh-session-cost) | Client + Host | `@ljcscp/dsh-session-cost` | Git only | 1 | Session cost & balance readout for DeepSeek Harness (DSH) Web GUI: official pricing, peak/off-peak hours, per- |
| [GIGHT111/dsh-workspace-inspector](https://github.com/GIGHT111/dsh-workspace-inspector) | Client + Host | `dsh-workspace-inspector` | Git only | 1 | DeepSeek Harness (dsh) Web 右侧面板插件：Token 用量与占比、全部历史消息目录（可折叠/点击跳转）、上下文压力、工作区文件树（点击系统默认打开）。跨平台（macOS / Windows /  |
| [GuoxinShan/dsh-yzj](https://github.com/GuoxinShan/dsh-yzj) | Client + Host | `@dsh-yzj/bundle` | Git only | 1 | 云之家 (Yunzhijia) plugin bundle for DeepSeek Harness: yzj-cli bridge, 41 model-facing tools, floating workspace  |
| [SASE223/dsh-dev-team-manager](https://github.com/SASE223/dsh-dev-team-manager) | Client + Host | `@dsh-external/dsh-dev-team-manager` | Git only | 1 | 一个将Claudecode的dev-team插件兼容到dsh的套壳插件, token使用很快, 非使用dsh中重度开发的谨慎使用. A wrapper plugin that ports Claude Code's de |
| [781316853/dsh-provider-quota](https://github.com/781316853/dsh-provider-quota) | Client + Host | `@guyunli/dsh-provider-quota` | Git only | 1 |  |
| [cxzrdxy/dsh-file-explorer](https://github.com/cxzrdxy/dsh-file-explorer) | Client + Host | `@cxzrdxy/dsh-file-explorer` | Git only | 1 |  |
| [hiro-nikaitou/dsh-ocg-billing](https://github.com/hiro-nikaitou/dsh-ocg-billing) | Client + Host | `@hiro-nikaitou/dsh-ocg-billing` | Git only | 1 | DeepSeek Harness (dsh) plugin: OpenCode Go billing layer with cached official pricing, proactive update checks |
| [Zhang-Zhengyuan/dsh-memory-amem](https://github.com/Zhang-Zhengyuan/dsh-memory-amem) | Client + Host | `@zhang-zhengyuan/dsh-tool-memory-amem` | Git only | 1 | Long-term, agentic memory for DeepSeek Harness — A-MEM with prompt-injection defenses, atomic persistence, and |
| [boboozeng/dsh-annotation-plugin](https://github.com/boboozeng/dsh-annotation-plugin) | Client + Host | `dsh-annotation-plugin` | Git only | 1 |  |
| [Codingendless/dsh-prevent-scd](https://github.com/Codingendless/dsh-prevent-scd) | Client + Host | `dsh-prevent-scd` | Git only | 1 | A playful rest-reminder pet plugin for DeepSeek Harness (DSH). Detects late-night or hours-long continuous hum |
| [0xKcyzz/dsh-local-project](https://github.com/0xKcyzz/dsh-local-project) | Client + Host | `dsh-local-project` | Git only | 1 | DSH plugin: import a local folder as a server workspace and sync DSH changes back to local. |
| [chinazkk/dsh-task-panel](https://github.com/chinazkk/dsh-task-panel) | Client + Host | `dsh-task-panel` | Git only | 1 |  |
| [Semidia/dsh-sampling-sliders](https://github.com/Semidia/dsh-sampling-sliders) | Client + Host | `dsh-sampling-sliders` | Git only | 1 | DSH plugin: model sampling sliders (temperature/maxTokens) with hot & persist modes, for all providers |
| [yauntyour/DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) | Client + Host | `dsh-multimodal` | Git only | 1 | DSH 多模态输入插件：为不同类型的文件（图片 / 视频 / 音频 / 文本）配置独立的处理模型链，在文件进入会话模型之前，先用预设模型把它处理成 Prompt Tokens（文本），再交给会话模型。插件在 DSH 设置 |
| [RoyougiShiki/dsh-restart-systemd](https://github.com/RoyougiShiki/dsh-restart-systemd) | Client + Host | `dsh-restart-systemd` | Git only | 1 | DSH WebUI 重启按钮（systemd 版）：侧栏一键重启 dsh-web，WSL/Linux systemd 通道 + Windows 分支，/restart 命令，会话自动续接 |
| [YV3507/dsh-webui-launcher](https://github.com/YV3507/dsh-webui-launcher) | Client + Host | `dsh-webui-launcher` | Git only | 1 |  |
| [keyiadiannao/dsh-power-button](https://github.com/keyiadiannao/dsh-power-button) | Client + Host | `dsh-power-button` | Git only | 1 | Self-contained power control for DeepSeek Harness: sidebar power button with upward restart/shutdown menu, Win |
| [princefrogdida-ux/dsh-vision-suite](https://github.com/princefrogdida-ux/dsh-vision-suite) | Client + Host | `dsh-vision-workbench` | Git only | 1 | Windows-first vision suite with image understanding, OCR, screenshot diffing, and multi-provider routing for D |
| [Eridani075/deepseek-harness-antigravity-oauth](https://github.com/Eridani075/deepseek-harness-antigravity-oauth) | Client + Host | `dsh-antigravity-oauth` | Git only | 1 | Google Antigravity OAuth Gemini provider for DeepSeek Harness |
| [StarPivotNet/dsh-plugins-public](https://github.com/StarPivotNet/dsh-plugins-public) | Client + Host | `@starpivot/dsh-agent-teams` | Git only | 1 | Installable DeepSeek Harness plugin marketplace (Settings → Plugins) |
| [youzhoujiMrLiu/dsh-ui-wallpaper](https://github.com/youzhoujiMrLiu/dsh-ui-wallpaper) | Client + Host | `dsh-ui-wallpaper` | Git only | 1 | Wallpaper Engine–style wallpaper for the DeepSeek Harness web GUI: custom images, GIFs, and videos as your app |
| [deathbook/dsh-think-phrases](https://github.com/deathbook/dsh-think-phrases) | Client + Host | `dsh-think-phrases` | Git only | 1 | DeepSeek Harness plugin: top-right widget counting let me / we / let's / I'll in reasoning chains |
| [KryptonGao/dsh-github-integration](https://github.com/KryptonGao/dsh-github-integration) | Client + Host | `dsh-github-integration` | Git only | 1 | 一个面向 DeepSeek Harness Web profile 的 GitHub 工作区插件。  它把 GitHub 仓库绑定到当前 Workspace，在 Harness 内提供 Issues、Pull reque |
| [zhouCode/dsh-squad](https://github.com/zhouCode/dsh-squad) | Client + Host | `@dsh-squad/plugin` | Git only | 1 | 让分布在不同设备与网络中的个人 Agent，在各自的工作区与权限边界内组成可持久委派的团队。 DSH-native delegation for personal Agents across devices and ne |
| [scwlkq/dsh-task-board](https://github.com/scwlkq/dsh-task-board) | Client + Host | `dsh-task-board` | Git only | 1 | Single-package durable task board plugin for DeepSeek Harness |
| [orangeofcarl0-sys/dsh-fresh-start](https://github.com/orangeofcarl0-sys/dsh-fresh-start) | Client + Host | `dsh-fresh-start` | Git only | 1 | DSH /fresh command: summarize conversation, start new session, archive old one |
| [4sa1ary9/dsh-everything-oauth](https://github.com/4sa1ary9/dsh-everything-oauth) | Client + Host | `dsh-everything-oauth` | Git only | 0 |  |
| [4sa1ary9/dockyard-dsh](https://github.com/4sa1ary9/dockyard-dsh) | Client + Host | `@dockyard-dsh/plugin` | Git only | 0 |  |
| [AtomerCore/dsh-qq-agent-mail](https://github.com/AtomerCore/dsh-qq-agent-mail) | Client + Host | `dsh-qq-agent-mail` | Git only | 0 |  |
| [CodeIdeal/dsh_review](https://github.com/CodeIdeal/dsh_review) | Client + Host | `dsh_review` | Git only | 0 |  |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | Client + Host | `@dsh-external/ego-browser` | Git only | 0 |  |
| [TheColdWorld/dsh-wsl-keepalive](https://github.com/TheColdWorld/dsh-wsl-keepalive) | Client + Host | `wsl-keepalive` | Git only | 0 |  |
| [XiaHouSheng/dsh-token-tracker](https://github.com/XiaHouSheng/dsh-token-tracker) | Client + Host | `dsh-token-tracker` | Git only | 0 |  |
| [Xs1KVerOA/dsh-service-manage](https://github.com/Xs1KVerOA/dsh-service-manage) | Client + Host | `dsh-service-manage` | Git only | 0 |  |
| [facai0316/dsh-auto-coding](https://github.com/facai0316/dsh-auto-coding) | Client + Host | `@auto-coding/mega` | Git only | 0 |  |
| [hddwbd/dsh-plugin-llm-proxy](https://github.com/hddwbd/dsh-plugin-llm-proxy) | Client + Host | `dsh-plugin-llm-proxy` | Git only | 0 |  |
| [omdsh-plugins/omdsh-codemode](https://github.com/omdsh-plugins/omdsh-codemode) | Client + Host | `@omdsh-plugins/omdsh-codemode` | Git only | 0 |  |
| [omdsh-plugins/omdsh-editor](https://github.com/omdsh-plugins/omdsh-editor) | Client + Host | `@omdsh-plugins/omdsh-editor` | Git only | 0 |  |
| [omdsh-plugins/omdsh-remdev](https://github.com/omdsh-plugins/omdsh-remdev) | Client + Host | `@omdsh-plugins/omdsh-remdev` | Git only | 0 |  |
| [omdsh-plugins/omdsh-sidepanel](https://github.com/omdsh-plugins/omdsh-sidepanel) | Client + Host | `@omdsh-plugins/omdsh-sidepanel` | Git only | 0 |  |
| [omdsh-plugins/omdsh-status](https://github.com/omdsh-plugins/omdsh-status) | Client + Host | `@omdsh-plugins/omdsh-status` | Git only | 0 |  |
| [omdsh-plugins/omdsh-usage](https://github.com/omdsh-plugins/omdsh-usage) | Client + Host | `@omdsh-plugins/omdsh-usage` | Git only | 0 |  |
| [realpkuasule/dsh-side-notify](https://github.com/realpkuasule/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 |  |
| [realpkuasule/dsh-sidechat](https://github.com/realpkuasule/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 |  |
| [wuyh/dsh-workspace-toolbox](https://github.com/wuyh/dsh-workspace-toolbox) | Client + Host | `dsh-workspace-toolbox` | Git only | 0 |  |
| [xiagaogaozi/dsh-subagent-pool](https://github.com/xiagaogaozi/dsh-subagent-pool) | Client + Host | `dsh-subagent-pool` | Git only | 0 |  |
| [xiaozhiaixue/dsh-side-notify](https://github.com/xiaozhiaixue/dsh-side-notify) | Client + Host | `dsh-side-notify` | Git only | 0 |  |
| [xiaozhiaixue/dsh-sidechat](https://github.com/xiaozhiaixue/dsh-sidechat) | Client + Host | `dsh-sidechat` | Git only | 0 |  |
| [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | Client + Host | `@ramify/dsh-ramify` | Git only | 0 |  |
| [csiroqa/dsh-plugin-usage-report](https://github.com/csiroqa/dsh-plugin-usage-report) | Client + Host | `@dsh-plugin/usage-report` | Git only | 0 |  |
| [Mintcolour/dsh-sidechat](https://github.com/Mintcolour/dsh-sidechat) | Client + Host | `@dsh-external/dsh-sidechat` | Git only | 0 |  |
| [YOLO-LZL/dsh-ssh-plugin](https://github.com/YOLO-LZL/dsh-ssh-plugin) | Client + Host | `dsh-ssh-plugin` | Git only | 0 |  |
| [mixin-ai/dsh-file-changes](https://github.com/mixin-ai/dsh-file-changes) | Client + Host | `dsh-file-changes` | Git only | 0 |  |
| [mindcarver/dsh-codex-canvas](https://github.com/mindcarver/dsh-codex-canvas) | Client + Host | `dsh-codex-canvas` | Git only | 0 |  |
| [xiagaogaozi/dsh-silly-plugin](https://github.com/xiagaogaozi/dsh-silly-plugin) | Client + Host | `dsh-tavern-mode` | Git only | 0 |  |
| [chenzhaoxuan0/dsh-tray](https://github.com/chenzhaoxuan0/dsh-tray) | Client + Host | `dsh-tray-plugin` | Git only | 0 |  |
| [EricJiang0423/dsh-orchestrator](https://github.com/EricJiang0423/dsh-orchestrator) | Client + Host | `@ericjiang0423/dsh-orchestrator` | Git only | 0 |  |
| [Chance-Wu/dsh-task-capsule](https://github.com/Chance-Wu/dsh-task-capsule) | Client + Host | `dsh-task-capsule` | Git only | 0 |  |

## Declared attribution (755)

Surface taken from the plugin's own `dsh.client` or `dsh.host` block. This is the
author's declaration rather than an installed dependency, so it ranks below
dependency evidence and above a keyword guess.

### Host plugins (0)

_None._

### Client plugins (755)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [liustack/modlens](https://github.com/liustack/modlens) | Client (Web UI) | `@liustack/modlens` | npm | 3328 | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Client (Web UI) | `whale-girl` | npm | 248 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | Client (Web UI) | `dsh-pocket` | npm | 238 | 把 DeepSeek Harness 装进你的口袋：电脑上跑 dsh web，手机扫码即同步访问（局域网 + 公网，实时同屏） |
| [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) | Client (Web UI) | `dsh-dafeiyu` | npm | 186 | Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows. |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Client (Web UI) | `dsh-plugin-marketplace` | npm | 125 | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| brow |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | Client (Web UI) | `dsh1024` | npm | 119 | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install command |
| [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) | Client (Web UI) | `dsh-client-liang-intensity-skin` | npm | 117 | DeepSeek Harness 滑动变阻器皮肤 |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Client (Web UI) | `dsh-tokenledger` | npm | 116 | Relay-site attributed token usage for DeepSeek Harness — zero config, no credentials |
| [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | Client (Web UI) | `dsh-undo-savepoint` | npm | 98 | DSH crash-rescue plugin: undo config & plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus o |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Client (Web UI) | `@anionex/dsh-turn-rewind` | npm | 89 | deepseek harness对话和代码状态回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change L |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Client (Web UI) | `dsh-usage-stats` | npm | 87 | Provider balances, subscription quotas, and token-usage analytics for the DeepSeek Harness Web GUI (dsh web). |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | Client (Web UI) | `@xmanrui/dsh-im` | npm | 74 | 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord和WhatsApp）。 Connect IM bots to Dee |
| [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Client (Web UI) | `dsh-stock-watch` | npm | 56 | A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗 |
| [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) | Client (Web UI) | `deepseek-harness-wallet` | npm | 55 | DeepSeek Harness account monitoring, usage accounting, completion alerts, official recharge, flexible layout,  |
| [Francis-Xavier-code/dsh-balance-plugin](https://github.com/Francis-Xavier-code/dsh-balance-plugin) | Client (Web UI) | `dsh-balance-plugin` | npm | 51 | deepSeek 余额监控与用量统计（DSH 动态 Cordis 插件）：余额监控 · 官方充值入口 · 用量统计 · 三方插件管理 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | Client (Web UI) | `@vlln/dsh-navbar` | npm | 46 | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) | Client (Web UI) | `dsh-status-rotator` | npm | 40 | A DeepSeek Harness (dsh) web plugin that replaces the "Deep diving…" turn-status label with phase-aware, typew |
| [opencues/opencues](https://github.com/opencues/opencues) | Client (Web UI) | `@opencues/dsh` | npm | 34 | Turn any text field into a two-way LLM channel: it reads what you write and fills what you ask. Flags a slip a |
| [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) | Client (Web UI) | `@feiyang666/dsh-usage-plugin` | npm | 32 | DeepSeek Harness 用量与消耗插件（dsh-usage-plugin）—— 每次调用的 token 用量/缓存命中统计、峰谷计费、余额查询、CSV/JSON/PNG 导出，可经桌面端一键安装或命令行 dsh |
| [zhu168/dsh-save-money](https://github.com/zhu168/dsh-save-money) | Client (Web UI) | `dsh-save-money` | npm | 31 | Save-money plugin for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time ru |
| [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | Client (Web UI) | `dsh-plugin-marketplace` | npm | 26 | Plugin marketplace for DeepSeek Harness — live-syncs the GitHub dsh-plugin topic (1800+ repos) into a searchab |
| [834063245-creator/HoloGram](https://github.com/834063245-creator/HoloGram) | Client (Web UI) | `@a834063245/hologram-dsh` | npm | 24 | 3D code dependency graph generator with built-in LLM agent. Language-agnostic (Python, TypeScript, Rust, Go, J |
| [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | Client (Web UI) | `dsh-popout-sidebar` | npm | 23 | A sidebar can pop out a separate browser tab (drag it to another monitor) |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Client (Web UI) | `dsh-pet-remielle` | npm | 22 |  |
| [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | Client (Web UI) | `meow-memory` | npm | 22 | Cross-session memory plugin for DeepSeek Harness: seven-layer SQLite store (soul/user/project/fact/lesson/topi |
| [biociao/dsh-science](https://github.com/biociao/dsh-science) | Client (Web UI) | `dsh-science` | npm | 21 |  |
| [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | Client (Web UI) | `dsh-usage-stats` | npm | 21 | DeepSeek Harness 插件：GitHub 风格用量热力图 + Token / 缓存命中 / 账户余额看板 + 工作区别名管理。 |
| [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | Client (Web UI) | `@a9i5k4/dsh-auto-memory` | npm | 20 | A caring memory companion for DSH — three-layer auto memory, proactive calendar reminders, warm AI greetings,  |
| [Tommy00748/dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) | Client (Web UI) | `dsh-theme-cyberpunk2077` | npm | 16 | Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — CRT scanlines, Kiroshi lock-on, typewriter |
| [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) | Client (Web UI) | `dsh-lorebookmd` | npm | 15 | DSH lorebook-driven fiction writer plugin: import Tavern/SillyTavern character cards & world books, save local |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | Client (Web UI) | `dsh-gui-customization` | npm | 14 | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [dragonbaba/dsh-routing-suite](https://github.com/dragonbaba/dsh-routing-suite) | Client (Web UI) | `dsh-routing-suite` | npm | 14 | Lightweight, localized task routing for DeepSeek Harness |
| [magian1127/deepseek-harness-zh_pro](https://github.com/magian1127/deepseek-harness-zh_pro) | Client (Web UI) | `deepseek-harness-zh_pro` | npm | 13 | DeepSeek Harness (DSH) plugin:  A comprehensive enhancement plugin with UI polish, layout tweaks, prompt injec |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | Client (Web UI) | `dsh-remote-plugin` | npm | 12 | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Ses |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | Client (Web UI) | `dsh-tavern` | npm | 12 |  |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | Client (Web UI) | `dsh-opencode-go-usage` | npm | 12 | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [weshopai/weshop-dsh-plugin](https://github.com/weshopai/weshop-dsh-plugin) | Client (Web UI) | `weshop-dsh-plugin` | npm | 12 | Native WeShop Cordis plugin for DeepSeek Harness. Allow you to use infinite canvas with infinite creative skil |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | Client (Web UI) | `dsh-hdc-bridge` | npm | 11 | DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 设备面板（官方 client 插件形态）+ 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建/签名/模拟器控制 / DSH-native Harmon |
| [xingyingyuzhui/dsh-liquid-glass](https://github.com/xingyingyuzhui/dsh-liquid-glass) | Client (Web UI) | `dsh-liquid-glass` | npm | 11 | Wallpaper plus optional Liquid Glass overlay for DeepSeek Harness Web UI |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Client (Web UI) | `@0xsline/dsh-spotlight` | npm | 10 | Keyboard-first command palette for DeepSeek Harness Web |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | Client (Web UI) | `dsh-mcp-manager` | npm | 10 | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration |
| [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | Client (Web UI) | `dsh-balance-monitor` | npm | 10 | DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh si |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | Client (Web UI) | `@vlln/dsh-task-status` | npm | 9 | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [a903067276-rgb/dsh-hud](https://github.com/a903067276-rgb/dsh-hud) | Client (Web UI) | `dsh-hud` | npm | 9 | HUD status panel plugin for DeepSeek Harness (dsh) web: git status, MCP servers, skills, model & token usage i |
| [sulfide2085/dsh-skill-manager](https://github.com/sulfide2085/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 9 | 在 DeepSeek Harness 设置页统一管理 DSH / Codex / Claude 的 AI 技能：热开关启停、GitHub 技能市场一键发现安装、本地 ZIP 导入（dsh-plugin skill hub |
| [SpookySandwich/dsh-plugin-smooth-stream](https://github.com/SpookySandwich/dsh-plugin-smooth-stream) | Client (Web UI) | `dsh-plugin-smooth-stream` | npm | 9 | DeepSeek Harness plugin: paragraph-batched streaming reveals with 8 designed animations, smooth scroll-follow  |
| [badai147/dsh-global-rules](https://github.com/badai147/dsh-global-rules) | Client (Web UI) | `dsh-global-rules` | npm | 9 | 在 DeepSeek Harness Web 设置面板中编辑 ~/.dsh/AGENTS.md 全局规则的插件 |
| [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Client (Web UI) | `dsh-update-checker` | npm | 8 | 全栈更新管理：对 DeepSeek Harness 主程序与每个已装第三方插件做 npm/GitHub 双源 semver 比对，GUI 横幅随系统语言（中/英）提示可更新插件；一键更新主程序或任意插件，自动备份可回滚， |
| [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) | Client (Web UI) | `@js2hou/dsh-mcp-manager` | npm | 8 | 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。 |
| [better-er/dsh-tool-autoexpand](https://github.com/better-er/dsh-tool-autoexpand) | Client (Web UI) | `dsh-tool-autoexpand` | npm | 8 | dsh·工具结果自动展开插件 |
| [springbrand-lab/dsh-plugin-market](https://github.com/springbrand-lab/dsh-plugin-market) | Client (Web UI) | `@springbrand/dsh-plugin-marketplace` | npm | 8 | Plugin marketplace for DeepSeek Harness Web settings: install, update and remove plugins across any local prof |
| [Player-MINEPIG/dsh-tavern](https://github.com/Player-MINEPIG/dsh-tavern) | Client (Web UI) | `dsh-tavern` | npm | 8 | A plugin which makes dsh compatible with SillyTavern artifacts. |
| [Shiye-10Pages/dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) | Client (Web UI) | `dsh-whale-meter` | npm | 8 | 🐳 鲸鱼电表：你在 DeepSeek Harness 上烧了多少 token？消耗量段位、可晒的战绩卡、6 家厂商 46 个模型精准计价（含国内分档）、8·17 调价前后对比。零配置，数据全在本机 \| Token u |
| [dfkai/dsh-board](https://github.com/dfkai/dsh-board) | Client (Web UI) | `dsh-board` | npm | 7 | DeepSeek Harness 侧栏用量与成本面板：官方峰谷计价 · 1M 上下文 · 词勋段位 · 成就与热力图 |
| [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | Client (Web UI) | `dsh-mmx-bridge` | npm | 7 | 一个工具 = MiniMax 全部多模态能力：DSH 纯文本模型看图/画图/生视频/说话/唱歌/翻唱/搜索/查额度 \| One mmx_bridge tool = all MiniMax multimodal (VLM |
| [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) | Client (Web UI) | `@dshthemes/core` | npm | 7 | A collection of UI themes for deepseek-harness. |
| [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) | Client (Web UI) | `dsh-webui-auth` | npm | 7 | WebUI 身份认证：HTTP/传输层强制登录（资源、插件 bundle、/api、WebSocket 四层防护），服务端会话 + HttpOnly Cookie。 |
| [TheTianzz/dsh-billing](https://github.com/TheTianzz/dsh-billing) | Client (Web UI) | `dsh-billing` | npm | 7 | DeepSeek Harness plugin: 账户余额 + 会话费用（/balance /cost 命令、deepseek_billing 工具、Web UI 双胶囊），官方价格每 12 小时自动同步 |
| [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | Client (Web UI) | `dsh-auto-approve` | npm | 7 | 为 DeepSeek Harness 增加介于 Workspace Write 与 Full access 之间的自动批准权限档，危险或不确定操作仍转人工审批。An auto-approval permission pr |
| [GLFzr/dsh-file-upload](https://github.com/GLFzr/dsh-file-upload) | Client (Web UI) | `dsh-file-upload` | npm | 7 | DSH 拖拽文件转路径插件：Codex 式拖拽，路径自动插入输入框（Drop File to Path for DeepSeek Harness） |
| [Cassius0924/dsh-usage-dashboard](https://github.com/Cassius0924/dsh-usage-dashboard) | Client (Web UI) | `@cassius0924/dsh-usage-dashboard` | npm | 7 | DeepSeek 额度与用量仪表盘 — DSH (DeepSeek Harness) 动态 Cordis 插件 |
| [PAKIKNOWLEDGE/dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude) | Client (Web UI) | `@pakiknowledge/dsh-client-ui-skin-claude` | npm | 7 | Claude-style skin for DeepSeek Harness (dsh) Web GUI — warm-black canvas, Anthropic clay accent, serif UI |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | Client (Web UI) | `gongwen-skill` | npm | 6 | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，面向公文写作、企事业单位材料编制场景，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown  |
| [liustack/pptfast](https://github.com/liustack/pptfast) | Client (Web UI) | `@liustack/pptfast` | npm | 6 | Stable, editable PPTX generation for AI agents — semantic IR in, native DrawingML out. DSH plugin + Claude Cod |
| [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | Client (Web UI) | `dsh-email` | npm | 6 | DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCl |
| [Vim0x3c/dsh-session-manager](https://github.com/Vim0x3c/dsh-session-manager) | Client (Web UI) | `dsh-session-manager` | npm | 6 | DeepSeek Harness 会话管理设置面板：列出本机全部会话（运行中/空闲/已归档），支持继续会话、预览大纲、删除会话 \| Session management settings section for dsh |
| [skr311/dsh-codex-pet](https://github.com/skr311/dsh-codex-pet) | Client (Web UI) | `dsh-codex-pet` | npm | 6 | dsh-codex-pet · DSH 桌面宠物插件 — 导入精灵图序列帧宠物，悬浮浮层渲染 + Agent 状态联动 |
| [aceice01/dsh-whale-pet](https://github.com/aceice01/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 6 | DeepSeek 鲸鱼娘桌宠：DSH Desktop 桌宠 + Web 版悬浮桌宠，晓伊神经网络语音、撒娇互动、任务完成提醒 |
| [SamizuHM/dsh-client-ui-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp) | Client (Web UI) | `dsh-client-ui-theme-xp` | npm | 6 | Windows XP Luna desktop theme for the DeepSeek Harness web GUI: multi-window desktop, XP chrome, taskbar, Blis |
| [3274375092/dsh-voice](https://github.com/3274375092/dsh-voice) | Client (Web UI) | `@nn12138/dsh-voice` | npm | 6 | Voice input plugin for DeepSeek Harness: mic → local/browser speech recognition → text submitted as a normal c |
| [liceses/dsh-wallpaper-rotator](https://github.com/liceses/dsh-wallpaper-rotator) | Client (Web UI) | `dsh-wallpaper-rotator` | npm | 6 | DSH 壁纸轮换插件：定时轮换应用背景壁纸（交叉淡化动效）、内置壁纸集、毛玻璃/压暗/文字阴影可读性调节。dsh plugin add 一键安装。 |
| [Z-6354/dsh-mobile-hanui](https://github.com/Z-6354/dsh-mobile-hanui) | Client (Web UI) | `dsh-mobile-hanui` | npm | 6 | 基于deepseek-harness（dsh）的手机网页优化插件，修复了部分网页与手机端不适配的问题； |
| [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) | Client (Web UI) | `dsh-multi-folder` | npm | 5 |  |
| [losebird/dsh-plugin-market](https://github.com/losebird/dsh-plugin-market) | Client (Web UI) | `@ace-zone/dsh-market` | npm | 5 | DeepSeek Harness plugins market｜DSH 插件市场 |
| [loster12520/dsh-btw](https://github.com/loster12520/dsh-btw) | Client (Web UI) | `dsh-btw` | npm | 5 | deepseek harness版btw插件 |
| [mengyun233/dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | Client (Web UI) | `dsh-codex-pet` | npm | 5 | 将 Codex 桌宠皮肤自动迁移到 DeepSeek Harness，在 DSH Web 界面渲染功能一致的桌宠：动画、多会话对话框、设置面板，一键迁移即插即用。 |
| [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) | Client (Web UI) | `dsh-web-attention-badge` | npm | 5 | Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for  |
| [fountunt/dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) | Client (Web UI) | `dsh-session-cleaner` | npm | 5 | 为 DeepSeek Harness 提供会话删除能力，支持侧边栏 ⋮ 菜单入口 |
| [BillyChen123/qdd](https://github.com/BillyChen123/qdd) | Client (Web UI) | `qdd` | npm | 5 |  |
| [siberiah2o/dsh-plugin-terminal](https://github.com/siberiah2o/dsh-plugin-terminal) | Client (Web UI) | `dsh-plugin-terminal` | npm | 5 | Bottom terminal panel plugin for DeepSeek Harness (DSH Web GUI) |
| [cokiscarazo-rgb/dsh-session-management](https://github.com/cokiscarazo-rgb/dsh-session-management) | Client (Web UI) | `dsh-session-management` | npm | 5 |  |
| [qjcnmd/dsh-reasoning-slider](https://github.com/qjcnmd/dsh-reasoning-slider) | Client (Web UI) | `reasoning-slider` | npm | 5 |  |
| [AcidGr/dsh-web-mobile-fix](https://github.com/AcidGr/dsh-web-mobile-fix) | Client (Web UI) | `dsh-web-mobile-fix` | npm | 5 | DeepSeek Harness (dsh) Web plugin |
| [FuzzySoul/dsh-free-vision](https://github.com/FuzzySoul/dsh-free-vision) | Client (Web UI) | `dsh-free-vision` | npm | 5 | 为DSH（DeepSeek Harness）量身打造的视觉插件，现已支持agent调用图片显示/Vision plugin for DSH(DeepSeek Harness),support Proactive Imag |
| [CeilCelia/dsh-eli-mode](https://github.com/CeilCelia/dsh-eli-mode) | Client (Web UI) | `dsh-eli-mode` | npm | 5 | Eli Mode is an agent preset for DeepSeek Harness built around wiki-driven long-term memory and skills, on an e |
| [marisa-4219/deepseek-harness-quota-monitor](https://github.com/marisa-4219/deepseek-harness-quota-monitor) | Client (Web UI) | `deepseek-harness-quota-monitor` | npm | 5 | DeepSeek Harness 多供应商额度监控插件：余额型 API 查询 + 限额型本地用量计量，侧边栏实时卡片 + 可视化配置。 |
| [pixellover1433/dsh-better-sidebar-lite](https://github.com/pixellover1433/dsh-better-sidebar-lite) | Client (Web UI) | `dsh-better-sidebar-lite` | npm | 5 | a simple plugin to improve web UX/UI for "Deepseek Harness (dsh)" |
| [Starlight-bananice/dsh-status-bar](https://github.com/Starlight-bananice/dsh-status-bar) | Client (Web UI) | `@bananiceee/dsh-status-bar` | npm | 5 | Know what your agent is doing at a glance — 17-segment configurable status bar for DeepSeek Harness: status/mo |
| [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) | Client (Web UI) | `dsh-composer-expand` | npm | 4 | Composer expand/collapse toggle for DeepSeek Harness (dsh): a ⬆/⬇ button in the composer tool row grows the in |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Client (Web UI) | `dsh-mattpocock-skills-deck` | npm | 4 | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统 |
| [MHfire/dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) | Client (Web UI) | `@mhfire/dsh-im-bridge` | npm | 4 | 即时通讯渠道(企微、飞书等) ⇄ DeepSeek Harness Agent 桥接 |
| [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) | Client (Web UI) | `@hytime/dsh-thinking-effort` | npm | 4 | Configurable reasoning levels for hand-declared DSH llm-pi-ai models, with bilingual settings and subagent def |
| [xbzbing/dsh-auth-gateway](https://github.com/xbzbing/dsh-auth-gateway) | Client (Web UI) | `dsh-auth-gateway` | npm | 4 | 为 DeepSeek Harness 增加远程访问能力，并通过密码和 OTP 进行安全加固。 Adds secure remote access to DeepSeek Harness with password aut |
| [zhtx2024/dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) | Client (Web UI) | `dsh-skin-switcher` | npm | 4 | DeepSeek Harness Web GUI 皮肤切换插件：设置界面一键切换已安装皮肤 |
| [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) | Client (Web UI) | `widget-dock` | npm | 4 | DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness |
| [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) | Client (Web UI) | `dsh-theme-neko` | npm | 4 | A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI. |
| [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) | Client (Web UI) | `dsh-ui-quote-selection` | npm | 4 | Codex-style select-to-quote for DeepSeek Harness Web: quote any chat text into the composer as a native refere |
| [2031814001yuyue-tech/dsh-side-chat](https://github.com/2031814001yuyue-tech/dsh-side-chat) | Client (Web UI) | `dsh-side-chat` | npm | 4 | dsh-plugin |
| [qichuang321/dsh-plugin-browser](https://github.com/qichuang321/dsh-plugin-browser) | Client (Web UI) | `dsh-plugin-browser` | npm | 4 |  |
| [elviszhang007/dsh-moyan](https://github.com/elviszhang007/dsh-moyan) | Client (Web UI) | `dsh-moyan` | npm | 4 | 简洁、克制、安静，旨在为您的Vibe Coding增加些许文艺感。每次打开WebUI，左下角都会出现一句话，从古诗词到文采句，再到脍炙人口的游戏台词，应有尽有。语料库可高度自定义，插件风格完全适配原生Harness界面， |
| [xxxxxxxyu/dsh-notify-sound](https://github.com/xxxxxxxyu/dsh-notify-sound) | Client (Web UI) | `dsh-notify-sound` | npm | 4 | DSH (DeepSeek Harness) web plugin: plays a sound when the agent finishes replying (turn/end). Sound, volume an |
| [xiaoxianyu-office/dsh-skills-manager](https://github.com/xiaoxianyu-office/dsh-skills-manager) | Client (Web UI) | `dsh-skills-manager` | npm | 4 | DSH Skills 管理器：设置页系统/用户技能分类，用户技能开关/编辑/删除/新建。Skills manager for DeepSeek Harness: system/user skill management  |
| [FengHuoLinShan/dsh-plugin-llm-balance](https://github.com/FengHuoLinShan/dsh-plugin-llm-balance) | Client (Web UI) | `dsh-plugin-llm-balance` | npm | 4 | DSH 插件：可拖动的 API 余额/配额悬浮卡片（DeepSeek / Moonshot / Kimi For Coding 自动发现、分档变色、实时刷新）\| Draggable API balance/quota  |
| [nanshan1995/DSH-Plugin-Market](https://github.com/nanshan1995/DSH-Plugin-Market) | Client (Web UI) | `dsh-plugin-market` | npm | 4 | DeepSeek Harness 插件市场：精选目录 + GitHub 实时浏览、中英翻译搜索、安装前静态安全审计闸门。Plugin market for DeepSeek Harness with a pre-inst |
| [huguangyu666/dsh-store](https://github.com/huguangyu666/dsh-store) | Client (Web UI) | `dsh-store` | npm | 4 |  |
| [pan17/dsh-wechat](https://github.com/pan17/dsh-wechat) | Client (Web UI) | `dsh-wechat` | npm | 4 | DSH插件，将微信私聊消息桥接到DSH，支持文本、图片、文件、音视频的双向传输。目标是在微信端还原DSH的原生体验 |
| [tuogusa/dsh-skill-manager](https://github.com/tuogusa/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 4 | DeepSeek Harness 技能管理器：扫描/删除/撤回/检查更新技能，支持 GitHub/Gitee Release（host + client 一体包） |
| [x2802490130-prog/dsh-balance-float](https://github.com/x2802490130-prog/dsh-balance-float) | Client (Web UI) | `dsh-balance-float` | npm | 4 | DSH 悬浮余额/一键退出插件 |
| [guo6x/dsh-pilot](https://github.com/guo6x/dsh-pilot) | Client (Web UI) | `dsh-pilot` | npm | 4 | Give your DSH agent hands: drive a real browser (Edge/Chrome over CDP) from the chat — ref-driven clicking, pe |
| [cindyguyuehu123/dsh-mobile](https://github.com/cindyguyuehu123/dsh-mobile) | Client (Web UI) | `dsh-mobile` | npm | 4 | Use DeepSeek Harness from your iPhone / iPad: LAN reverse proxy, iOS PWA (add-to-home-screen) chrome, and touc |
| [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) | Client (Web UI) | `dsh-ssh-ops` | npm | 4 | DeepSeek Harness SSH 运维插件：主对话驱动 SSH，带高危命令保护与右侧终端。 |
| [Ultronen/dsh-archived-chats](https://github.com/Ultronen/dsh-archived-chats) | Client (Web UI) | `dsh-archived-chats` | npm | 4 | DeepSeek Harness 已归档会话管理页：在设置里查看、搜索、取消归档、删除已归档的聊天，按项目分组。An Archived Chats settings page for DeepSeek Harness:  |
| [0nt-one/dsh-voice-input](https://github.com/0nt-one/dsh-voice-input) | Client (Web UI) | `dsh-voice-input-web` | npm | 4 | Voice input plugin — a mic button in the composer tool row that turns speech into text live via the browser's  |
| [Awu12277/dsh-sleep-send](https://github.com/Awu12277/dsh-sleep-send) | Client (Web UI) | `dsh-sleep-send` | npm | 3 | DSH Web 的定时发送插件：在输入框右侧提供「定时发送」按钮与配置面板，支持智能时段、自定义日期时间、多个定时任务，并通过 localStorage 持久化任务，刷新页面后自动恢复。 |
| [Ch0uHuaZ1/DeepSeek-Harness-Desktop](https://github.com/Ch0uHuaZ1/DeepSeek-Harness-Desktop) | Client (Web UI) | `dsh-desktop-launcher` | npm | 3 | One-click desktop launcher for DeepSeek Harness — starts the web UI, runs it in the tray, and reuses your exis |
| [ingleav626-art/dsh-native-launcher](https://github.com/ingleav626-art/dsh-native-launcher) | Client (Web UI) | `dsh-native-launcher` | npm | 3 | 以"零额外安装"为设计原则：仅凭一个官方插件与 Windows 原生机制，让 DeepSeek Harness Web UI 获得桌面 App 式的一键启动体验。 |
| [lyfZhixing/dsh-cost-tracker](https://github.com/lyfZhixing/dsh-cost-tracker) | Client (Web UI) | `dsh-cost-tracker` | npm | 3 | 为 DeepSeek Harness Web（`dsh --profile web`）记录**每日 LLM 调用花费**，支持按会话 / 模型 / 天多维度查看。 |
| [siweina/dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | Client (Web UI) | `dsh-novel-writer` | npm | 3 | DSH / DeepSeek Harness 小说写作助手插件：章节库管理、句式模式分析（九类句式/情感曲线/风格指纹）、风格自检、伏笔登记、批量导入、续写辅助。Novel writing assistant plugi |
| [wsz987/dsh-channels](https://github.com/wsz987/dsh-channels) | Client (Web UI) | `@wsz987/dsh-channels` | npm | 3 | 把微信 / QQ / 钉钉 / 飞书 / Telegram 接入 DeepSeek Harness：统一配置、扫码授权，直接在各 IM 与 Agent 对话；支持图片与文件收发，Agent 可读取 PDF、DOCX、XL |
| [yingjunnan/dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) | Client (Web UI) | `dsh-deepseek-quota` | npm | 3 | DeepSeek API quota (balance) widget for the DSH web GUI: a floating bottom-right card showing remaining DeepSe |
| [Yummyxl/dsh-eyecare](https://github.com/Yummyxl/dsh-eyecare) | Client (Web UI) | `dsh-eyecare` | npm | 3 | dsh护眼插件 |
| [IT-coder-Yy/dsh-git-plugin](https://github.com/IT-coder-Yy/dsh-git-plugin) | Client (Web UI) | `dsh-easygit-plugin` | npm | 3 | A visual Git workbench for DeepSeek Harness Web—inspect repositories, run common Git actions, and safely execu |
| [QWQ-nn/dsh-client-ui-trajectory-categories](https://github.com/QWQ-nn/dsh-client-ui-trajectory-categories) | Client (Web UI) | `dsh-client-ui-trajectory-categories` | npm | 3 |  |
| [lglglglgy/dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) | Client (Web UI) | `dsh-whale-pet` | npm | 3 | dsh-whale-pet |
| [wangwei-wade/dsh-quote-annotate](https://github.com/wangwei-wade/dsh-quote-annotate) | Client (Web UI) | `dsh-quote-annotate` | npm | 3 | DSH 会话选区引用与锚点批注插件：选中文字 → 批注 → 引用锚点 chip（点击跳回原文、悬停显示原文）。Contextual selection & anchored annotation plugin for D |
| [Fu3rte/dsh-sight](https://github.com/Fu3rte/dsh-sight) | Client (Web UI) | `dsh-sight` | npm | 3 | Plug-in vision for text-only DeepSeek Harness (dsh) models: built-in free/cheap VLM presets + multi-image batc |
| [YLifeOnlyOnce/dsh-dynamic-island](https://github.com/YLifeOnlyOnce/dsh-dynamic-island) | Client (Web UI) | `dsh-dynamic-island` | npm | 3 | A tiny glass companion for DeepSeek Harness — it breathes while the agent thinks, pulses while it works, and p |
| [zhang66633/dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui) | Client (Web UI) | `dsh-pixel-ui` | npm | 3 | DeepSeek Harness 像素皮肤（Agent Xi 风格）：四个主题一键切换——像素·木屋 / 像素·羊皮纸 / 像素·暖阳 / 像素·终端绿，随时可切回现代默认 UI。 |
| [winterhuan/dsh-skills-viewer](https://github.com/winterhuan/dsh-skills-viewer) | Client (Web UI) | `@winterchenhuan/dsh-skills-viewer` | npm | 3 | Read-only Skills settings page plugin for DeepSeek Harness Web |
| [dttxorg/deepseekeyes](https://github.com/dttxorg/deepseekeyes) | Client (Web UI) | `@dttxorg/deepseekeyes` | npm | 3 | Auditable vision and cross-platform Computer Use runtime for DeepSeek Harness — strict evidence, health-checke |
| [Lanxing6480/dsh-skill-manager](https://github.com/Lanxing6480/dsh-skill-manager) | Client (Web UI) | `@lanxing/dsh-skill-manager` | npm | 3 | Deepseek Harness 的Skill管理插件 |
| [Pasumao/dsh-plugin-workbench](https://github.com/Pasumao/dsh-plugin-workbench) | Client (Web UI) | `dsh-plugin-workbench` | npm | 3 | VS Code-style workspace file explorer with editable preview for the DSH web GUI |
| [feiyang-dev/dsh-vault](https://github.com/feiyang-dev/dsh-vault) | Client (Web UI) | `@feiyang666/dsh-vault` | npm | 3 | DeepSeek Harness 数据保险箱插件（dsh-vault）—— 自动备份、清空检测、一键恢复，保护聊天记录与工作区数据；可经桌面端一键安装或命令行 dsh plugin add 安装。 |
| [LCYLYM/dsh-attachments](https://github.com/LCYLYM/dsh-attachments) | Client (Web UI) | `dsh-multimedia-webui-input` | npm | 3 | Cross-platform DSH WebUI multimedia input and workspace attachments |
| [sharkymew/dsh-utility-tools](https://github.com/sharkymew/dsh-utility-tools) | Client (Web UI) | `dsh-utility-tools` | npm | 3 | DSH（DeepSeek Harness）对话工具插件：拖拽任意文件进入对话 + 选中文本引用。 |
| [Iwctwbh/dsh-flowglass](https://github.com/Iwctwbh/dsh-flowglass) | Client (Web UI) | `dsh-dynamic-toolbox` | npm | 3 | 流镜 Flowglass — DeepSeek Harness session flowgraph，实时可视化消息、工具组、子代理分支与步骤详情。 |
| [wenzetan/dsh-quota-panel](https://github.com/wenzetan/dsh-quota-panel) | Client (Web UI) | `dsh-quota-panel` | npm | 3 | Provider quota/balance widget for the dsh web surface: capsule + card + settings panel, dual-face (loopback RP |
| [zoumutou/dsh-cost-balance](https://github.com/zoumutou/dsh-cost-balance) | Client (Web UI) | `dsh-cost-balance` | npm | 3 | DeepSeek Harness 插件：输入框下方 iOS 风格统计条——会话花费、账户余额、缓存命中、Token 用量一键展开 |
| [linxichen/dsh-rigorquant](https://github.com/linxichen/dsh-rigorquant) | Client (Web UI) | `dsh-rigorquant` | npm | 3 | Adds capability to Deepseek harness to do rigorous quant finance work |
| [knlght/DSH-shutdown](https://github.com/knlght/DSH-shutdown) | Client (Web UI) | `dsh-shutdown` | npm | 3 | 一键结束 DeepSeek Harness 服务：Settings 关机页 + 二次确认 + 优雅退出，关掉浏览器不再留下后台进程 |
| [arvin-yd/dsh-update-notifier](https://github.com/arvin-yd/dsh-update-notifier) | Client (Web UI) | `dsh-update-notifier` | npm | 3 |  |
| [Hakunm/dsh-workspace](https://github.com/Hakunm/dsh-workspace) | Client (Web UI) | `dsh-workspace` | npm | 3 | 一个把文件工作区直接带进 DeepSeek Harness WebUI，并为手机和第三方客户端提供稳定的远程接口插件。A bilingual file workspace and secure remote API fo |
| [StarChen-Cycler/octie-dsh-plugin](https://github.com/StarChen-Cycler/octie-dsh-plugin) | Client (Web UI) | `octie-cli` | npm | 3 | State-oriented task graph kernel for the agentic era - a DeepSeek Harness bundle: 13 octie_* tools, octie Cord |
| [lbl61/dsh-drop-in](https://github.com/lbl61/dsh-drop-in) | Client (Web UI) | `dsh-drop-in` | npm | 3 | 把文件拖入/粘贴到 DeepSeek Harness Web：输入框原生引用气泡，随消息发送（含绝对路径），气泡渲染文件卡片。Drag/paste files into the DeepSeek Harness web  |
| [cn-scuo-oo/dsh-deepseek-quota](https://github.com/cn-scuo-oo/dsh-deepseek-quota) | Client (Web UI) | `dsh-deepseek-quota` | npm | 3 | DeepSeek Harness Web 侧边栏 DeepSeek API 额度卡片 + 充值面板插件 \| Sidebar quota card & recharge panel for DeepSeek Harnes |
| [kyo615/dsh-browser-control](https://github.com/kyo615/dsh-browser-control) | Client (Web UI) | `dsh-browser-control` | npm | 3 | Let an AI control a real visible Chrome browser via Playwright MCP, with a live view of every action inside th |
| [lucky8197/dsh-devquest](https://github.com/lucky8197/dsh-devquest) | Client (Web UI) | `dsh-devquest` | npm | 3 | 把开发变成 RPG 的 DSH 插件：回合/工具/待办积累 XP、47 枚成就+稀有度、每日/每周挑战、每日抽奖、赛季商店、7 款主题皮肤、多称号、活跃日历+荣誉墙。事件流驱动，装好自动计分。 |
| [StruggleYang/dsh-project-kanban](https://github.com/StruggleYang/dsh-project-kanban) | Client (Web UI) | `dsh-project-kanban` | npm | 3 |  |
| [jiangli07/dsh-deepseek-quota-bar](https://github.com/jiangli07/dsh-deepseek-quota-bar) | Client (Web UI) | `dsh-deepseek-quota-bar` | npm | 3 | DeepSeek API quota blood-bar widget for the DSH web GUI: remaining balance vs month-opening, today/month spend |
| [HuiHuitie-zhu/dsh-incognito](https://github.com/HuiHuitie-zhu/dsh-incognito) | Client (Web UI) | `dsh-incognito` | npm | 3 |  |
| [nabin-qq273274877/dsh-model-balance](https://github.com/nabin-qq273274877/dsh-model-balance) | Client (Web UI) | `dsh-model-balance` | npm | 3 | 为 DeepSeek Harness Web GUI 提供多供应商真实账户余额显示 |
| [XanthanL/dsh-plugin-uisfx](https://github.com/XanthanL/dsh-plugin-uisfx) | Client (Web UI) | `dsh-plugin-uisfx` | npm | 3 | DSH plugin: semantic UI sound effects powered by uisfx dsh 语义化音效插件：任务开始/成功/失败、按钮反馈，设置页即时试听，12 种音色包，支持其他插件调用。 |
| [2nd1st/dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) | Client (Web UI) | `@2nd1st/dsh-plugin-open-app` | npm | 3 | Bring open-mcp-apps into deepseek-harness: apps as sidebar containers with their own sessions, an agent status |
| [Apageoflove/DSH-arena](https://github.com/Apageoflove/DSH-arena) | Client (Web UI) | `dsh-arena` | npm | 3 | Local-first experiment and evaluation workbench plugin for DeepSeek Harness (DSH). |
| [CN-Leo/dsh-deepseek-balance](https://github.com/CN-Leo/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 2 | deepseek-harness 插件，实时查询deepseek账号余额 |
| [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Client (Web UI) | `dsh-prompt` | npm | 2 | DeepSeek Harness 的 Prompt 工具箱：别再复制粘贴——24 条深度模板随手点，/prompt 与智能推荐主动兜底，装好即用、可自定义。 \| The Prompt toolbox for DeepS |
| [XJungit/omdp](https://github.com/XJungit/omdp) | Client (Web UI) | `@omdp/dsh-connector` | npm | 2 | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles |
| [ZhuSheng-0807/dsh-novel-reader](https://github.com/ZhuSheng-0807/dsh-novel-reader) | Client (Web UI) | `dsh-novel-reader` | npm | 2 |  |
| [alanzhao0128/dsh-balance-monitor](https://github.com/alanzhao0128/dsh-balance-monitor) | Client (Web UI) | `dsh-balance-monitor` | npm | 2 |  |
| [luoyan96/dsh-catnap-studio](https://github.com/luoyan96/dsh-catnap-studio) | Client (Web UI) | `dsh-catnap-plugins` | npm | 2 | Cat-themed DeepSeek Harness Web UI plugin with three original themes and a calm interactive companion. Not an  |
| [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) | Client (Web UI) | `dsh-approval-gate` | npm | 2 | DeepSeek Harness 自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe） |
| [qingfeng200410/dsh-plugin-dosage](https://github.com/qingfeng200410/dsh-plugin-dosage) | Client (Web UI) | `dsh-plugin-dosage` | npm | 2 | DeepSeek Harness 用量插件。把多供应商余额监测和 DeepSeek 峰谷计费合进侧栏同一个「用量/余额」浮层：账户额度、Token 统计、消耗概览、月历、调用记录和官方价格一次看完，换项目数据也不丢 |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | Client (Web UI) | `dsh-side-panel` | npm | 2 |  |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Client (Web UI) | `@jasonjin06/dsh-sound-effects` | npm | 2 | Sound effects plugin for DeepSeek Harness: ambient work music, success chime, and attention chime. |
| [1a125/dsh-mcp-manager](https://github.com/1a125/dsh-mcp-manager) | Client (Web UI) | `dsh-mcp-manager` | npm | 2 | DSH global MCP manager |
| [Yuuz12/dsh-vision-helper](https://github.com/Yuuz12/dsh-vision-helper) | Client (Web UI) | `dsh-vision-helper` | npm | 2 | DeepSeek Harness Vision Helper/DeepSeek Harness 视觉辅助方案 |
| [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) | Client (Web UI) | `dsh-wallpaper` | npm | 2 |  |
| [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) | Client (Web UI) | `dsh-plugins-market` | npm | 2 | DSH的插件创意市场来啦!～～～欢迎使用&提供反馈！！DSH 插件创意市场 · DeepSeek Harness 插件发现与一键安装面板 全量嗅探官方 dsh-plugin topic（900+），过滤蹭标签噪音，保留人 |
| [wuxinzhe/dsh-cyberdog-speech-sherpa](https://github.com/wuxinzhe/dsh-cyberdog-speech-sherpa) | Client (Web UI) | `dsh-cyberdog-speech-sherpa` | npm | 2 |  |
| [yumusb/dsh-opencode-go-usage](https://github.com/yumusb/dsh-opencode-go-usage) | Client (Web UI) | `dsh-opencode-go-usage` | npm | 2 |  |
| [ZRui-C/dsh-content-studio](https://github.com/ZRui-C/dsh-content-studio) | Client (Web UI) | `dsh-content-studio` | npm | 2 | DSH bundle plugin: screenshots, screen recording, Markdown→Xiaohongshu image cards, dev.to publishing, and hum |
| [moon09300731/dsh-vision-tools](https://github.com/moon09300731/dsh-vision-tools) | Client (Web UI) | `dsh-vision-tools` | npm | 2 | DeepSeek Harness 视觉能力全家桶：vision_understand 工具 + 粘贴/拖拽/按钮三入口识图 |
| [ddbj-hub/dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin) | Client (Web UI) | `dsh-wallpaper-skin` | npm | 2 | Persistent wallpaper skin for dsh web: static image or muted looping video background with translucent panels. |
| [hx876298682-tech/deepseek-harness-desktop](https://github.com/hx876298682-tech/deepseek-harness-desktop) | Client (Web UI) | `dsh-usage-stats` | npm | 2 | Electron desktop shell for the DeepSeek Harness Web UI |
| [wang-bool/visual-review](https://github.com/wang-bool/visual-review) | Client (Web UI) | `visual-review` | npm | 2 | dsh 插件，可以支持图像上传，图像识别。将ds的使用体验变为多模态 |
| [KekuKase/dsh-deepseek-status](https://github.com/KekuKase/dsh-deepseek-status) | Client (Web UI) | `dsh-deepseek-status` | npm | 2 | DSH 侧边栏实时显示 DeepSeek 官方服务状态（status.deepseek.com）\| Live DeepSeek official service status in the DSH sidebar |
| [wangxilhy23/dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin) | Client (Web UI) | `dsh-wx-skin` | npm | 2 | deepseek harness 皮肤插件。支持选择本地目录下的图片作为背景设置 |
| [hucj09/dsh-file-mention](https://github.com/hucj09/dsh-file-mention) | Client (Web UI) | `@hucj/dsh-file-mention` | npm | 2 | DSH (DeepSeek Harness) Web GUI 插件：输入 @ 引用工作区文件，体验类似 Claude Code 的 @file。 |
| [lmmzss-jk/dsh-plugin-balance](https://github.com/lmmzss-jk/dsh-plugin-balance) | Client (Web UI) | `@lmmzss/dsh-plugin-balance` | npm | 2 | dsh-plugin-balance |
| [orxz/deepseek-harness-pets](https://github.com/orxz/deepseek-harness-pets) | Client (Web UI) | `deepseek-harness-pets` | npm | 2 | 这是一个专为 DeepSeek-Harness 定制的桌宠皮肤包， DeepSeek 的标志性“大鲸鱼”等宠物养成。 |
| [zoumutou/dsh-web-preview](https://github.com/zoumutou/dsh-web-preview) | Client (Web UI) | `dsh-web-preview-panel` | npm | 2 | DeepSeek Harness 侧边网页预览面板：本地静态托管、项目运行、元素标记批注、链接点击接管（Cordis 插件包） |
| [duntansen/dsh-update-checker](https://github.com/duntansen/dsh-update-checker) | Client (Web UI) | `dsh-update-checker` | npm | 2 | DSH web plugin: check DeepSeek Harness updates from Settings (dsh --version vs npm latest/next) ｜ DSH Web 插件：在 |
| [jinsiyu/dsh-webproxy-router-plugin](https://github.com/jinsiyu/dsh-webproxy-router-plugin) | Client (Web UI) | `dsh-webproxy-router-plugin` | npm | 2 | 一个deepseek harness webfetch的代理插件，可以让llm自己维护代理列表，让llm也能科学上网 |
| [chinaRXQ/dsh-wallpaper](https://github.com/chinaRXQ/dsh-wallpaper) | Client (Web UI) | `dsh-wallpaper` | npm | 2 | Wallpaper skin for the DeepSeek Harness (dsh) web UI: image background with opacity, mask and blur controls. |
| [Creakono/dsh-cost-meter](https://github.com/Creakono/dsh-cost-meter) | Client (Web UI) | `dsh-cost-meter` | npm | 2 | Automatically calculate the cost based on the configured price list. 自动按配置的价目表算价格花费。当前未启用峰谷价格，后续还请自行在配置页添加 |
| [Small-Miao/dsh-statusbar](https://github.com/Small-Miao/dsh-statusbar) | Client (Web UI) | `dsh-statusbar` | npm | 2 | VSCode-like bottom status bar for DSH Web: token usage, CPU/memory char bars, session stats, live TPS, per-ite |
| [yokesky/dsh-usage-lens](https://github.com/yokesky/dsh-usage-lens) | Client (Web UI) | `@yokesky/dsh-usage-lens` | npm | 2 | DeepSeek Harness (DSH) 用量统计面板 — usage statistics dashboard: GitHub-style heatmap, daily token trend, model usa |
| [yuhangkang/dsh-ide-sidebar](https://github.com/yuhangkang/dsh-ide-sidebar) | Client (Web UI) | `dsh-ide-sidebar` | npm | 2 |  |
| [dsh-plugins/dsh-thought-buddy](https://github.com/dsh-plugins/dsh-thought-buddy) | Client (Web UI) | `@dsh-plugin/dsh-thought-buddy` | npm | 2 | A DeepSeek Harness Web plugin that puts a dynamic little buddy — a GrokBot-style animated avatar with a synchr |
| [GitHubJiKe/dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) | Client (Web UI) | `dsh-markdown-preview` | npm | 2 | dsh-markdown-preview |
| [dyhyfjn/dsh-rollback-withdraw](https://github.com/dyhyfjn/dsh-rollback-withdraw) | Client (Web UI) | `dsh-rollback-withdraw` | npm | 2 | Trae-style withdraw for DeepSeek Harness Web — one-click rollback of workspace code + conversation (git commit |
| [zljr/dsh-share](https://github.com/zljr/dsh-share) | Client (Web UI) | `@zljr/dsh-share` | npm | 2 |  |
| [fuyue521/dsh-desktop-shortcut](https://github.com/fuyue521/dsh-desktop-shortcut) | Client (Web UI) | `dsh-desktop-shortcut` | npm | 2 | DeepSeek Harness plugin that creates a Windows desktop shortcut for launching dsh web. |
| [kami-mura/dsh-cost](https://github.com/kami-mura/dsh-cost) | Client (Web UI) | `dsh-cost-log` | npm | 2 |  |
| [levi52/dsh-appearance](https://github.com/levi52/dsh-appearance) | Client (Web UI) | `dsh-appearance` | npm | 2 | DeepSeek Harness Web UI 的外观设置插件，一键个性化你的 Web UI【NPM】 |
| [Saikel-Orado-Liu/dsh-coding-agent-preset](https://github.com/Saikel-Orado-Liu/dsh-coding-agent-preset) | Client (Web UI) | `@gamegeek-saikel/dsh-coding-agent-preset` | npm | 2 | Windows-adapted DSH coding agent preset with persistent PowerShell 7 (pwsh) and str_replace_editor, mirroring  |
| [a1073097082/dsh-model-search](https://github.com/a1073097082/dsh-model-search) | Client (Web UI) | `dsh-model-search` | npm | 2 |  |
| [Tlyer233/dsh-vscode-review](https://github.com/Tlyer233/dsh-vscode-review) | Client (Web UI) | `review-changes` | npm | 2 | deepseek harness review插件, 可以让你在vscode中直观看到dsh的"增删改"操作, 支持逐行ac或rj |
| [Fayelin12/dsh-office](https://github.com/Fayelin12/dsh-office) | Client (Web UI) | `dsh-office` | npm | 2 | Agent-office dashboard for DeepSeek Harness (DSH): workspaces, sessions, token usage & subagents in a 6-column |
| [SaiSenBox/dsh-prompt-manager](https://github.com/SaiSenBox/dsh-prompt-manager) | Client (Web UI) | `dsh-prompt-manager` | npm | 2 | Session-level multi-prompt library and system prompt injector for DeepSeek Harness Web |
| [Winter-And-You-Gone/dsh-turn-fold](https://github.com/Winter-And-You-Gone/dsh-turn-fold) | Client (Web UI) | `dsh-turn-fold` | npm | 2 |  |
| [imkingjh999/dsh-shorts-wall](https://github.com/imkingjh999/dsh-shorts-wall) | Client (Web UI) | `dsh-shorts-wall` | npm | 2 | DSH plugin: vertical shorts wall for dsh-better-sidebar — YouTube Shorts + Bilibili vertical, dual-source caro |
| [1841220388zzzcccxxx-star/dsh-token-stats](https://github.com/1841220388zzzcccxxx-star/dsh-token-stats) | Client (Web UI) | `dsh-token-stats` | npm | 2 | Token usage & cost statistics plugin for DeepSeek Harness — per model / date / session, cost estimation (USD/C |
| [z953218350/dsh-history-tree](https://github.com/z953218350/dsh-history-tree) | Client (Web UI) | `dsh-history-tree` | npm | 2 | Codex-style conversation turn timeline and hover history overview for DSH Web UI |
| [Ultronen/dsh-liquid-glass](https://github.com/Ultronen/dsh-liquid-glass) | Client (Web UI) | `dsh-liquid-glass` | npm | 2 | DeepSeek Harness 液态玻璃：点一下，整个界面通透起来。透明度随心调，背景图自由换——让你的 Agent 住进风景里。Liquid glass for DeepSeek Harness: one toggl |
| [bobostudio/dsh-session-lens](https://github.com/bobostudio/dsh-session-lens) | Client (Web UI) | `dsh-session-lens` | npm | 2 | DeepSeek Harness plugin: one-click session analytics + privacy-safe single-file HTML export · DSH 会话洞察与脱敏分享插件 |
| [StarsTom/dsh-session-delete](https://github.com/StarsTom/dsh-session-delete) | Client (Web UI) | `dsh-session-delete` | npm | 2 | 为 DeepSeek Harness Web 的会话菜单增加带二次确认的永久删除功能。 |
| [0nt-one/dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin) | Client (Web UI) | `dsh-neo-skin` | npm | 2 | Neo-brutalism skin for the DeepSeek Harness Web UI — hard borders, high contrast, two switchable schemes (Blue |
| [pppolf/dsh-webgate](https://github.com/pppolf/dsh-webgate) | Client (Web UI) | `dsh-webgate` | npm | 2 | DSH 远程访问插件：内网二维码 / cloudflared 隧道 / frp+自有服务器（含登录门户） |
| [Blank-not-black/dsh-remote-plugin](https://github.com/Blank-not-black/dsh-remote-plugin) | Client (Web UI) | `dsh-remote-plugin` | npm | 1 | DSH Remote 插件独立包：DSH 原生侧边栏入口 + 右侧抽屉管理页；内置网关随 DSH 自动启停 |
| [F1shn/dsh-session-cost](https://github.com/F1shn/dsh-session-cost) | Client (Web UI) | `dsh-session-cost` | npm | 1 | DeepSeek Harness 会话与单次回复费用显示插件 |
| [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) | Client (Web UI) | `dsh-themes` | npm | 1 |  |
| [Rain-Shuoyu/dsh-client-deep-sneak](https://github.com/Rain-Shuoyu/dsh-client-deep-sneak) | Client (Web UI) | `dsh-client-deep-sneak` | npm | 1 | DeepSneak（深度摸鱼）是专门为 DeepSeek Harness 设计的插件，在 agent 工作时播放 B 站视频，并在 agent 需要操作时暂停并提醒用户，方便摸鱼的同时避免因为没有发现 agent 被阻塞 |
| [TeaClearInkII/DSH-Marketplaces-Nexus](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus) | Client (Web UI) | `dsh-marketplaces-nexus` | npm | 1 | 一个DSH插件市场的市场集 · DSH 万市枢纽。 |
| [fuyu-jie/dsh-go-plugin](https://github.com/fuyu-jie/dsh-go-plugin) | Client (Web UI) | `@fuyu-jie/dsh-go-plugin` | npm | 1 |  |
| [kingcharleslzy-ai/dsh-cost-balance-pro](https://github.com/kingcharleslzy-ai/dsh-cost-balance-pro) | Client (Web UI) | `dsh-cost-balance-pro` | npm | 1 |  |
| [liu3734/jira-tasks-dsh-plugin](https://github.com/liu3734/jira-tasks-dsh-plugin) | Client (Web UI) | `dsh-jira-tasks` | npm | 1 | 在 DSH 会话输入框下方展示当前 JIRA 项目指派给当前用户的「开启 / 重新开启」任务列表。JIRA 地址与令牌从凭据读取；项目 Key 与 JQL 按工作区配置并持久化。 |
| [nan1010082085/dsh-plugin-ima-sync](https://github.com/nan1010082085/dsh-plugin-ima-sync) | Client (Web UI) | `dsh-plugin-ima-sync` | npm | 1 | DSH plugin: auto-upload conversation progress to Tencent IMA (daily note + Work knowledge base) |
| [moonquake2004/dsh-doctor](https://github.com/moonquake2004/dsh-doctor) | Client (Web UI) | `@moonquake2004/dsh-doctor` | npm | 1 |  |
| [s17179XTY/dsh-mobile](https://github.com/s17179XTY/dsh-mobile) | Client (Web UI) | `dsh-mobile` | npm | 1 | dsh-mobile — 用於 DeepSeek Harness 的手机連接 |
| [tevenfeng/dsh-plugin-omoslim](https://github.com/tevenfeng/dsh-plugin-omoslim) | Client (Web UI) | `dsh-plugin-omoslim` | npm | 1 | DeepSeek Harness bundle: oh-my-opencode-slim style Orchestrator agent preset with model-pinned specialist suba |
| [uluckystar/dsh-plugin-market](https://github.com/uluckystar/dsh-plugin-market) | Client (Web UI) | `dsh-plugin-market` | npm | 1 | DSH 插件市场：在设置页浏览 mydsh.dev 插件大全（5596 候选 / 3656 有效），分类/AI 搜索、一键安装启用停用卸载、安全评估与自动重启。非官方社区 mydsh.dev 出品 |
| [z953218350/dsh-archive-manager](https://github.com/z953218350/dsh-archive-manager) | Client (Web UI) | `@mlgbnb/dsh-archive-manager` | npm | 1 | Codex-style archived session manager for DSH Web UI — view, search, restore, and delete archived sessions from |
| [zhouzhencheng07/dsh-memory](https://github.com/zhouzhencheng07/dsh-memory) | Client (Web UI) | `dsh-memory` | npm | 1 | Cross-session memory for DeepSeek Harness (dsh): Auto-Memory per-turn capture, memory_search, Dream consolidat |
| [linshufan21/dsh-Api-monitor](https://github.com/linshufan21/dsh-Api-monitor) | Client (Web UI) | `dsh-api-balance` | npm | 1 | DeepSeek Harness API 余额监测 \| DeepSeek Harness API balance monitor |
| [Dariandai/dsh-starter-pack](https://github.com/Dariandai/dsh-starter-pack) | Client (Web UI) | `dsh-starter-pack` | npm | 1 |  |
| [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) | Client (Web UI) | `sidesight` | npm | 1 | CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and vid |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | Client (Web UI) | `dsh-balance-display` | npm | 1 | DeepSeek API balance overlay for DeepSeek Harness |
| [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) | Client (Web UI) | `dsh-turn-index` | npm | 1 | deepseek harness的侧边栏对话轮次索引插件 |
| [chendefine/dsh-plugins-plan-usage](https://github.com/chendefine/dsh-plugins-plan-usage) | Client (Web UI) | `dsh-plan-usage` | npm | 1 | deepseek harness plugins plan-usage |
| [KarlOfLaw/dsh-side-chat](https://github.com/KarlOfLaw/dsh-side-chat) | Client (Web UI) | `dsh-side-chat` | npm | 1 | DeepSeek Harness native parallel side chat with hidden child sessions and on-demand parent context |
| [AmaTsumeAkira/opencode-usage](https://github.com/AmaTsumeAkira/opencode-usage) | Client (Web UI) | `opencode-usage` | npm | 1 | OpenCode Go 订阅额度徽章插件（dsh bundle） \| OpenCode Go quota badge plugin for dsh |
| [TimeCraker/dsh-claude-import](https://github.com/TimeCraker/dsh-claude-import) | Client (Web UI) | `dsh-claude-import` | npm | 1 | Import Claude Code config (skills/rules/CLAUDE.md/AGENTS.md) into DeepSeek Harness, with destination preview,  |
| [Xin-Zhang-IceMan/dsh-vision-plugin](https://github.com/Xin-Zhang-IceMan/dsh-vision-plugin) | Client (Web UI) | `dsh-vision-plugin` | npm | 1 | DeepSeek Harness 视觉插件：让纯文本模型拥有视觉能力 / Vision plugin for DSH: vision_analyze tool + automatic image transcriptio |
| [yanzoro926/dsh-usage-dash](https://github.com/yanzoro926/dsh-usage-dash) | Client (Web UI) | `dsh-usage-dash` | npm | 1 |  |
| [xiaoso456/dsh-turn-navigator](https://github.com/xiaoso456/dsh-turn-navigator) | Client (Web UI) | `@xiaoso/dsh-turn-navigator` | npm | 1 | Jump between conversation turns in the DeepSeek Harness web UI |
| [kkishapppy/dsh-opencode-go-usage](https://github.com/kkishapppy/dsh-opencode-go-usage) | Client (Web UI) | `dsh-opencode-go-usage` | npm | 1 | OpenCode Go 订阅用量悬浮小部件：滚动/周/月用量与重置倒计时（DSH WebUI） |
| [kami-mura/dsh-English-search](https://github.com/kami-mura/dsh-English-search) | Client (Web UI) | `dsh-english-search` | npm | 1 |  |
| [kami-mura/dsh-logo-silhouette](https://github.com/kami-mura/dsh-logo-silhouette) | Client (Web UI) | `dsh-logo-silhouette` | npm | 1 |  |
| [huantian1223/dsh-token-stats](https://github.com/huantian1223/dsh-token-stats) | Client (Web UI) | `dsh-token-stats` | npm | 1 |  |
| [drfccv/dsh-mcp-center](https://github.com/drfccv/dsh-mcp-center) | Client (Web UI) | `dsh-mcp-center` | npm | 1 | Connect any MCP server to your DeepSeek Harness — point, click, done. |
| [lywusichen/dsh-skill-panel](https://github.com/lywusichen/dsh-skill-panel) | Client (Web UI) | `dsh-skill-panel` | npm | 1 | DeepSeek Harness 技能悬浮窗插件：侧边栏技能按钮，一键查看当前会话已加载的技能并打开本地目录。 |
| [kyya/dsh-deepseek-balance](https://github.com/kyya/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 1 | DeepSeek Harness plugin: real-time DeepSeek API balance in the sidebar |
| [zdjmrq/dsh-usage-balance](https://github.com/zdjmrq/dsh-usage-balance) | Client (Web UI) | `dsh-usage-balance` | npm | 1 | DeepSeek Harness 侧边栏用量/余额插件 |
| [chang416/deepsee](https://github.com/chang416/deepsee) | Client (Web UI) | `@chang416/deepsee` | npm | 1 | Vision + smart model routing for DeepSeek Harness. Gemini sees. DeepSeek codes. |
| [tuogusa/dsh-whale-background](https://github.com/tuogusa/dsh-whale-background) | Client (Web UI) | `dsh-whale-background` | npm | 1 | DeepSeek Harness Web 背景插件（client-only）：深海鲸鱼娘壁纸 + 半透明磨砂应用表面，支持设置页换图、透明度、contain/cover 与恢复默认，远程图片自动预检并 no-referr |
| [tuogusa/dsh-plugin-toggle](https://github.com/tuogusa/dsh-plugin-toggle) | Client (Web UI) | `dsh-plugin-toggle` | npm | 1 | DeepSeek Harness 插件开关/删除/版本更新管理器（host + client 一体包） |
| [ayingQAQ/dsh-web-launcher](https://github.com/ayingQAQ/dsh-web-launcher) | Client (Web UI) | `dsh-web-launcher` | npm | 1 | Windows 上的 DeepSeek Harness Web 一键启动器｜One-click launcher with background restart and browser refresh. |
| [OSSKn4w7/dsh-plugin-manager](https://github.com/OSSKn4w7/dsh-plugin-manager) | Client (Web UI) | `@osskn4w7/dsh-plugin-manager` | npm | 1 | Manage DeepSeek Harness (dsh) plugins from the web GUI, CLI, and /plugin chat command — install, enable/disabl |
| [Wongzexu/dsh-git-status](https://github.com/Wongzexu/dsh-git-status) | Client (Web UI) | `@wongzexu/dsh-git-status` | npm | 1 | Git status (Git Graph) plugin for DSH: commit DAG lane graph + uncommitted changes/stash + inline diffs + bran |
| [YZz-S/dsh-update-checker](https://github.com/YZz-S/dsh-update-checker) | Client (Web UI) | `dsh-update-checker` | npm | 1 | DeepSeek Harness (dsh) plugins — dsh-update-checker: in-GUI version badge with npm update checks. |
| [huanghouchun/dsh-claude-migrator](https://github.com/huanghouchun/dsh-claude-migrator) | Client (Web UI) | `dsh-claude-migrator` | npm | 1 | Claude → DeepSeek Harness (DSH) 配置迁移插件：自动识别用户主目录与项目根的 .claude/skills、.claude/rules、.mcp.json、CLAUDE.md，skill 按 |
| [AFAP/dsh-token-usage](https://github.com/AFAP/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | npm | 1 | DeepSeek Harness Web GUI Token 用量展示插件：单会话胶囊 + 全局每日/按模型消耗面板（只读日志，零配置）\| Token usage display plugin: per-session |
| [qiushui0901/dsh-token-stats](https://github.com/qiushui0901/dsh-token-stats) | Client (Web UI) | `dsh-token-stats` | npm | 1 | Cross-session token usage statistics panel for DeepSeek Harness: monthly stacked cost chart by provider and mo |
| [uwu9039/dsh-airbag](https://github.com/uwu9039/dsh-airbag) | Client (Web UI) | `dsh-airbag` | npm | 1 | 呱来点人口牙...再也不会误把api key粘贴喂给ai了!!!可自定义的安全等级与安全措施，解决容易泄漏api key的底层问题。同时有报告记录可查!!! |
| [AiLi1337/dsh-plugin-library-search](https://github.com/AiLi1337/dsh-plugin-library-search) | Client (Web UI) | `dsh-plugin-library-search` | npm | 1 | DSH 插件：在设置页搜索 GitHub 官方插件库 (topic:dsh-plugin)，瀑布流浏览 + 一键安装 + AI 可调用 |
| [zhangjianyu1006156/dsh-balance-display](https://github.com/zhangjianyu1006156/dsh-balance-display) | Client (Web UI) | `dsh-balance-display` | npm | 1 | DeepSeek API 余额显示插件：左下角余额胶囊、低余额预警、余额趋势、一键充值。密钥不出主机端。 |
| [Andyqwe44/dsh-notify-win](https://github.com/Andyqwe44/dsh-notify-win) | Client (Web UI) | `dsh-notify-win` | npm | 1 | Native Windows toast + taskbar flash for DeepSeek Harness when a task finishes or your input is needed. |
| [jungeer/dsh-theme-stardew](https://github.com/jungeer/dsh-theme-stardew) | Client (Web UI) | `dsh-theme-stardew` | npm | 1 |  |
| [Saikel-Orado-Liu/dsh-archive-manager](https://github.com/Saikel-Orado-Liu/dsh-archive-manager) | Client (Web UI) | `@gamegeek-saikel/dsh-archive-manager` | npm | 1 | Archived-session management (show/unarchive/permanently delete) for the DSH Web GUI, with zero changes to offi |
| [baka-world/dsh-notify](https://github.com/baka-world/dsh-notify) | Client (Web UI) | `dsh-notify` | npm | 1 | DeepSeek Harness desktop notification plugin (notify-send / D-Bus) |
| [qing9835/dsh-eyes](https://github.com/qing9835/dsh-eyes) | Client (Web UI) | `dsh-vision-bridge` | npm | 1 | DSH 视觉模型插件：为无视觉能力的文本模型提供图片识别。粘贴/拖入/导入的图片自动交给 OpenAI 兼容视觉模型识别为文字并发送进对话，支持多轮复核（vision_ask）、多提供商配置。 |
| [LKMeng2001/dsh-mcp-market](https://github.com/LKMeng2001/dsh-mcp-market) | Client (Web UI) | `dsh-mcp-market` | npm | 1 |  |
| [flyingtimes/dsh-trajectory-reader](https://github.com/flyingtimes/dsh-trajectory-reader) | Client (Web UI) | `@clarkchan/trajectory-reader` | npm | 1 | 轨迹解读 · Trajectory Reader — DeepSeek Harness (DSH) web client plugin: a new 轨迹解读 tab that interprets what the a |
| [keke050/dsh-wallpaper](https://github.com/keke050/dsh-wallpaper) | Client (Web UI) | `dsh-wallpaper` | npm | 1 | Set a custom background wallpaper for the DeepSeek Harness desktop app — presets, image URL, upload, and an op |
| [AtropinolTT/dsh-auto-review](https://github.com/AtropinolTT/dsh-auto-review) | Client (Web UI) | `dsh-auto-review` | npm | 1 | DSH Auto Mode — native security review plugin for DeepSeek Harness: pre-execution rule interception + delivery |
| [kimiya1010/dsh-plugin-market](https://github.com/kimiya1010/dsh-plugin-market) | Client (Web UI) | `dsh-plugin-market` | npm | 1 | A DeepSeek Harness plugin market: search and one-click install GitHub dsh-plugin plugins straight from the web |
| [itr-del/dsh-cue-bank](https://github.com/itr-del/dsh-cue-bank) | Client (Web UI) | `dsh-cue-bank` | npm | 1 | Cross-session event-cue memory plugin for DeepSeek Harness: auto-builds a persistent cue bank from conversatio |
| [sumarilkkxx/dsh-artifact](https://github.com/sumarilkkxx/dsh-artifact) | Client (Web UI) | `dsh-artifact` | npm | 1 | Inline ECharts rendering plugin for DeepSeek Harness |
| [ChuanTianML/dsh-chat-tidy](https://github.com/ChuanTianML/dsh-chat-tidy) | Client (Web UI) | `dsh-chat-tidy` | npm | 1 | Restrained chat typography and layout for DeepSeek Harness Web |
| [Mg-K-Mn/dsh-plugin-manager](https://github.com/Mg-K-Mn/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-manager` | npm | 1 |  |
| [1148281964/dsh-token-stats](https://github.com/1148281964/dsh-token-stats) | Client (Web UI) | `dsh-token-stats` | npm | 1 | DeepSeek Harness 全局 Token 用量统计插件 \| Real usage tracking, durable ledger, cost estimation (OpenRouter pricing), |
| [bamboostrip/dsh-access-gate](https://github.com/bamboostrip/dsh-access-gate) | Client (Web UI) | `dsh-access-gate` | npm | 1 |  |
| [Floating-Dreaming/dsh-minimax-usage](https://github.com/Floating-Dreaming/dsh-minimax-usage) | Client (Web UI) | `@floatingdeaming/minimax-usage` | npm | 1 | DSH (DeepSeek Harness) plugin: MiniMax Token Plan usage in Settings |
| [nbfys/dsh-web-attention-badge-enhanced](https://github.com/nbfys/dsh-web-attention-badge-enhanced) | Client (Web UI) | `dsh-web-attention-badge` | npm | 1 | DSH Web attention badge (fork): [Waiting]/[Done] tab title, current-session done tracking, acknowledged remind |
| [rrvvvnnn/dsh-web-file-upload](https://github.com/rrvvvnnn/dsh-web-file-upload) | Client (Web UI) | `@iamroven/dsh-web-file-upload` | npm | 1 |  |
| [BaihaWhite/mcp-ds-ocr](https://github.com/BaihaWhite/mcp-ds-ocr) | Client (Web UI) | `dsh-ocr` | npm | 1 |  |
| [alcohol-101/dsh-gif-background](https://github.com/alcohol-101/dsh-gif-background) | Client (Web UI) | `dsh-gif-background` | npm | 1 | Custom background (image / GIF / animated wallpaper) plugin for the DeepSeek Harness (DSH) Web GUI - enable sw |
| [awa-123-cw/dsh-update-check](https://github.com/awa-123-cw/dsh-update-check) | Client (Web UI) | `dsh-update-check` | npm | 1 | DSH 设置页「关于」栏位 + 一键检测更新插件（About page with update checking for DeepSeek Harness WebUI） |
| [akira399/dsh-session-delete](https://github.com/akira399/dsh-session-delete) | Client (Web UI) | `dsh-session-delete` | npm | 1 | Permanently delete DSH sessions from the file system, right from the sidebar conversation menu — 在 DSH 侧边栏菜单真正 |
| [InkshadeWoods/dsh-tool-visual-primitives](https://github.com/InkshadeWoods/dsh-tool-visual-primitives) | Client (Web UI) | `dsh-tool-visual-primitives` | npm | 1 | DeepSeek Harness 视觉增强插件：将图片交给外部视觉模型分析，输出带坐标化视觉原语的纯文本证据，使不支持多模态的文本模型也能在对话中理解图片、截图与文档。 |
| [nanami-0713/dsh-remote-public](https://github.com/nanami-0713/dsh-remote-public) | Client (Web UI) | `dsh-remote` | npm | 1 | DSH-Remote 公开脱敏镜像：基于 DeepSeek Harness 的手机远程控制客户端 |
| [sstar16/dsh-plugin-market](https://github.com/sstar16/dsh-plugin-market) | Client (Web UI) | `dsh-plugin-market` | npm | 1 | DSH Web插件市场（plugins market) |
| [AI-Galaxy-GPU/dsh-sound](https://github.com/AI-Galaxy-GPU/dsh-sound) | Client (Web UI) | `dsh-sound` | npm | 1 | DeepSeek Harness（DSH）Web 端插件：回合完成、审批、提问、计划评审、目标受阻、任务失败各有独立提示音与音量，内置合成音 / 静音 / 本地音频文件，Web 设置面板可配置。 |
| [hkkz9522/dsh-session-manager](https://github.com/hkkz9522/dsh-session-manager) | Client (Web UI) | `dsh-session-manager` | npm | 1 | Session manager for DeepSeek Harness: delete conversations with confirmation and manage archives. |
| [ZYar-er/dsh-notify-bell](https://github.com/ZYar-er/dsh-notify-bell) | Client (Web UI) | `dsh-notify-bell` | npm | 1 | Semantic notification sounds for DeepSeek Harness: complete/approval/question/block/error via BEL or WAV, with |
| [Shiye-10Pages/dsh-memory-porter](https://github.com/Shiye-10Pages/dsh-memory-porter) | Client (Web UI) | `dsh-memory-porter` | npm | 1 | 📦 记忆搬家：把 Claude / ChatGPT 的历史记忆搬进 DeepSeek Harness —— 逐字证据由代码回原文核对，你逐条批准，全程本地 \| Move your Claude & ChatGPT m |
| [FuzzySoul/dsh-chatvoice](https://github.com/FuzzySoul/dsh-chatvoice) | Client (Web UI) | `dsh-chatvoice` | npm | 1 | ChatVoice — free voice input + AI reply read-aloud for DeepSeek Harness (dsh). 零配置/零成本/免 API key 语音插件 |
| [Zouu-X/DSH_WebNotification](https://github.com/Zouu-X/DSH_WebNotification) | Client (Web UI) | `dsh-notify` | npm | 1 | It is a plug-in that helps sending notifications when agent finishes in DSH. 这是一个DSH的网页提示插件，让Agent跑完任务时会有明确提示 |
| [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) | Client (Web UI) | `@1mlightyears/dsh-theme-synthwave` | npm | 0 |  |
| [940842546/dsh-permissions](https://github.com/940842546/dsh-permissions) | Client (Web UI) | `dsh-permissions` | npm | 0 |  |
| [CrombastiC/dsh-macos-notify](https://github.com/CrombastiC/dsh-macos-notify) | Client (Web UI) | `dsh-macos-notify` | npm | 0 |  |
| [FuncWei/dsh-kanban](https://github.com/FuncWei/dsh-kanban) | Client (Web UI) | `dsh-kanban` | npm | 0 |  |
| [GGbao-114/dsh-theme-cyberpunk-red](https://github.com/GGbao-114/dsh-theme-cyberpunk-red) | Client (Web UI) | `dsh-theme-cyberpunk2077` | npm | 0 |  |
| [JxaMe/dsh-telegram-bridge](https://github.com/JxaMe/dsh-telegram-bridge) | Client (Web UI) | `dsh-telegram-bridge` | npm | 0 |  |
| [KeFan-J/dsh-token-usage](https://github.com/KeFan-J/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | npm | 0 |  |
| [LianbinZhou/dsh-archive-manager](https://github.com/LianbinZhou/dsh-archive-manager) | Client (Web UI) | `dsh-archive-manager` | npm | 0 |  |
| [LyaxZ/dsh-quick-toc](https://github.com/LyaxZ/dsh-quick-toc) | Client (Web UI) | `dsh-quick-toc` | npm | 0 |  |
| [Phant0Meow/dsh-memory-meow](https://github.com/Phant0Meow/dsh-memory-meow) | Client (Web UI) | `meow-memory` | npm | 0 |  |
| [QianziTech/dsh-trellis-dashboard](https://github.com/QianziTech/dsh-trellis-dashboard) | Client (Web UI) | `dsh-trellis-dashboard` | npm | 0 |  |
| [TiChuXiXi/dsh-message-jump](https://github.com/TiChuXiXi/dsh-message-jump) | Client (Web UI) | `dsh-message-jump` | npm | 0 |  |
| [YOYOYOAKE/dsh-token-plan-monitor](https://github.com/YOYOYOAKE/dsh-token-plan-monitor) | Client (Web UI) | `@yoyoyoake/dsh-token-plan-monitor` | npm | 0 |  |
| [ZaVang/dsh-diorama](https://github.com/ZaVang/dsh-diorama) | Client (Web UI) | `dsh-diorama` | npm | 0 |  |
| [ankesu/dsh-emoji-wallet](https://github.com/ankesu/dsh-emoji-wallet) | Client (Web UI) | `dsh-emoji-wallet` | npm | 0 |  |
| [dhb861832993-star/img-preview](https://github.com/dhb861832993-star/img-preview) | Client (Web UI) | `img-preview` | npm | 0 |  |
| [dove-a/dsh-chat-window-fold](https://github.com/dove-a/dsh-chat-window-fold) | Client (Web UI) | `dsh-chat-window-fold` | npm | 0 |  |
| [eddiehuang227-source/live-talk](https://github.com/eddiehuang227-source/live-talk) | Client (Web UI) | `dsh-live-talk` | npm | 0 |  |
| [gdy01/dsh-token-cost](https://github.com/gdy01/dsh-token-cost) | Client (Web UI) | `dsh-token-cost` | npm | 0 |  |
| [gjj-star/dsh-conversation-navigato](https://github.com/gjj-star/dsh-conversation-navigato) | Client (Web UI) | `dsh-conversation-navigator` | npm | 0 |  |
| [glenngit/dsh-top](https://github.com/glenngit/dsh-top) | Client (Web UI) | `dsh-top` | npm | 0 |  |
| [iluluyu/dsh-plugin-outline](https://github.com/iluluyu/dsh-plugin-outline) | Client (Web UI) | `dsh-plugin-outline` | npm | 0 |  |
| [jing-hy/dsh-task-runner](https://github.com/jing-hy/dsh-task-runner) | Client (Web UI) | `dsh-task-runner` | npm | 0 |  |
| [jyhn-hunao/dsh-session-cost](https://github.com/jyhn-hunao/dsh-session-cost) | Client (Web UI) | `dsh-session-cost` | npm | 0 |  |
| [kaixinbaba/dsh-complete-notify](https://github.com/kaixinbaba/dsh-complete-notify) | Client (Web UI) | `dsh-complete-notify` | npm | 0 |  |
| [lengduan/dsh-815-skin](https://github.com/lengduan/dsh-815-skin) | Client (Web UI) | `@lengduan/dsh-client-ui-skin-815` | npm | 0 |  |
| [light-only/dsh-codex-select](https://github.com/light-only/dsh-codex-select) | Client (Web UI) | `dsh-codex-select` | npm | 0 |  |
| [miiaowuwu/dsh-event-sounds](https://github.com/miiaowuwu/dsh-event-sounds) | Client (Web UI) | `dsh-client-ui-event-sounds` | npm | 0 |  |
| [niuniuaba/dsh-subagent-vision](https://github.com/niuniuaba/dsh-subagent-vision) | Client (Web UI) | `dsh-subagent-vision` | npm | 0 |  |
| [qschen86/dsh-deepseek-balance](https://github.com/qschen86/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | npm | 0 |  |
| [ruby1304/dsh-quota-status](https://github.com/ruby1304/dsh-quota-status) | Client (Web UI) | `dsh-quota-status` | npm | 0 |  |
| [suanlayu666/suanlayu-dsh-plugins](https://github.com/suanlayu666/suanlayu-dsh-plugins) | Client (Web UI) | `dsh-file-upload` | npm | 0 |  |
| [thooy/dsh-client-ui-theme-manager](https://github.com/thooy/dsh-client-ui-theme-manager) | Client (Web UI) | `dsh-client-ui-theme-manager` | npm | 0 |  |
| [wuhobin/dsh-mcp-manage](https://github.com/wuhobin/dsh-mcp-manage) | Client (Web UI) | `dsh-mcp-manage` | npm | 0 |  |
| [xingyingyuzhui/dsh-skill-manager](https://github.com/xingyingyuzhui/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 0 |  |
| [zdx8637-gitdog/dshmobile](https://github.com/zdx8637-gitdog/dshmobile) | Client (Web UI) | `@zdx8637/dshmobile-bridge` | npm | 0 |  |
| [zsvd/dsh-mcp-manager](https://github.com/zsvd/dsh-mcp-manager) | Client (Web UI) | `dsh-mcp-manager` | npm | 0 |  |
| [JimmyJin2006/dsh-skill-manager](https://github.com/JimmyJin2006/dsh-skill-manager) | Client (Web UI) | `dsh-skill-manager` | npm | 0 |  |
| [HongzhongL/dsh-hotswap](https://github.com/HongzhongL/dsh-hotswap) | Client (Web UI) | `dsh-hotswap` | npm | 0 |  |
| [Seryta/dsh-file-mention](https://github.com/Seryta/dsh-file-mention) | Client (Web UI) | `dsh-file-mention` | npm | 0 |  |
| [mouse33333/dsh-quota-monitor](https://github.com/mouse33333/dsh-quota-monitor) | Client (Web UI) | `dsh-quota-monitor` | npm | 0 |  |
| [hemo94931/dsh-timeline](https://github.com/hemo94931/dsh-timeline) | Client (Web UI) | `@hemo94931/dsh-timeline` | npm | 0 |  |
| [lire1131/dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) | Client (Web UI) | `dsh-undo-savepoint` | npm | 0 |  |
| [penguinpanda/sebastian-kitchen-board](https://github.com/penguinpanda/sebastian-kitchen-board) | Client (Web UI) | `sebastian-kitchen-board` | npm | 0 |  |
| [qzhqzh/dsh-quickstart](https://github.com/qzhqzh/dsh-quickstart) | Client (Web UI) | `dsh-quickstart-plugin` | npm | 0 |  |
| [necigit/Coral-Memory](https://github.com/necigit/Coral-Memory) | Client (Web UI) | `coral-memory` | npm | 0 |  |
| [taontech/dsh-git](https://github.com/taontech/dsh-git) | Client (Web UI) | `@taontech/dsh-git` | npm | 0 |  |
| [kaixinbaba/dsh-vision-recognizer](https://github.com/kaixinbaba/dsh-vision-recognizer) | Client (Web UI) | `dsh-vision-recognizer` | npm | 0 |  |
| [x2802490130-prog/dsh-guard](https://github.com/x2802490130-prog/dsh-guard) | Client (Web UI) | `dsh-guard` | npm | 0 |  |
| [x2802490130-prog/dsh-shield](https://github.com/x2802490130-prog/dsh-shield) | Client (Web UI) | `dsh-shield` | npm | 0 |  |
| [Jieice/dsh-wallpaper-rotator-enhanced](https://github.com/Jieice/dsh-wallpaper-rotator-enhanced) | Client (Web UI) | `dsh-wallpaper-rotator` | npm | 0 |  |
| [r0bert001/dsh-balance-plugin](https://github.com/r0bert001/dsh-balance-plugin) | Client (Web UI) | `dsh-model-balance` | npm | 0 |  |
| [V-dev-388/dsh-usage-meter](https://github.com/V-dev-388/dsh-usage-meter) | Client (Web UI) | `dsh-usage-meter` | npm | 0 |  |
| [FengYangXun123/dsh-opencode-usage](https://github.com/FengYangXun123/dsh-opencode-usage) | Client (Web UI) | `dsh-opencode-usage` | npm | 0 |  |
| [vtxf/dsh-web-mermaid](https://github.com/vtxf/dsh-web-mermaid) | Client (Web UI) | `dsh-web-mermaid` | npm | 0 |  |
| [louwenbo580/read-paper](https://github.com/louwenbo580/read-paper) | Client (Web UI) | `paper-review` | npm | 0 |  |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-maid-atelier` | Git only | 1473 | Whale Girl skin series for DeepSeek Harness. 适用于 DeepSeek Harness 的，鲸鱼娘系列皮肤。 |
| [lencx/Minke](https://github.com/lencx/Minke) | Client (Web UI) | `@lencx/minke-harness-overlay` | Git only | 238 | 🐳 DeepSeek Harness Desktop |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Client (Web UI) | `dsh-memory-evolve` | Git only | 200 | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广 |
| [d-dev0101/open-sea-skin](https://github.com/d-dev0101/open-sea-skin) | Client (Web UI) | `open-sea-skin` | Git only | 182 | WebGPU ocean skin for DeepSeek Harness — DSH plugin, Harness-only Chrome/Edge extension, static installer, and |
| [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | Client (Web UI) | `gal-view` | Git only | 106 | 把dsh会话界面切换成galgame游戏界面的插件 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Client (Web UI) | `@omdsh-dev/dsh-annotation` | Git only | 81 | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Client (Web UI) | `@dsh-external/dsh-automation` | Git only | 67 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent session |
| [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) | Client (Web UI) | `dsh-claude-ux` | Git only | 58 | DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Client (Web UI) | `local-shell-mcp-dsh` | Git only | 52 | Enables LLM to use a cli environment. |
| [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | Client (Web UI) | `recruiting-copilot` | Git only | 39 | 给 HR / 猎头的 AI 招聘工作流：岗位标准梳理、Boss直聘 + 猎聘双通道寻源初筛、市场人才盘点、简历评估、约面试、候选人台账与日报。可装成 Claude Code 插件或 DeepSeek Harness (d |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | Client (Web UI) | `dsh-auto-collapse` | Git only | 30 |  |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Client (Web UI) | `dsh-plugin-guard` | Git only | 28 | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, an |
| [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) | Client (Web UI) | `@dsh-external/dsh-plugin-workshop` | Git only | 25 | Steam Workshop-style plugin browser for the DeepSeek Harness (DSH) Web UI - zero-server: GitHub-powered search |
| [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) | Client (Web UI) | `@xiaoyao-ai/dsh-client-ui-skin-black-whale` | Git only | 24 | 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链 |
| [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) | Client (Web UI) | `dsh-models-config-plugin` | Git only | 24 |  |
| [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | Client (Web UI) | `dsh-whale-musume` | Git only | 23 | DeepSeek Harness 桌宠插件：元气鲸鱼娘陪你写代码 🐋 |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | Client (Web UI) | `@dsh-external/dsh-minigames` | Git only | 23 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-denia` | Git only | 22 | DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。 |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Client (Web UI) | `@bill9109/dsh-web-ui-notify` | Git only | 18 | 为 DSH 增加桌面通知提醒 |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | Client (Web UI) | `dsh-context-doctor` | Git only | 17 | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | Client (Web UI) | `@omdsh-dev/dsh-drag-and-drop` | Git only | 17 | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 |
| [xiake595/touhou-hakurei](https://github.com/xiake595/touhou-hakurei) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-hakurei-shrine` | Git only | 17 | 灵梦（Reimu）·博丽神社（东方Project）美化版皮肤：神社昼夜实景背景、灵梦立绘、画框侧边栏与输入框、纸白透明界面 — DeepSeek Harness Web GUI skin |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | Client (Web UI) | `@dsh-external/dsh-side-panel` | Git only | 16 | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 |
| [yunxiiQwQ/dsh-maid-whale-webUI](https://github.com/yunxiiQwQ/dsh-maid-whale-webUI) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-maid-whale-webui` | Git only | 16 | DeepSeek Harness Web UI 鲸鱼女仆主题插件 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | Client (Web UI) | `deepseek-manners` | Git only | 15 | DSH 插件：给每次消息后注入感谢语 \| DSH plugin: inject a thank-you line after every message (deepseek-manners) |
| [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) | Client (Web UI) | `dsh-git-graph` | Git only | 13 | Embedded git repository graph visualizer for the DeepSeek Harness Web GUI \| 嵌入式 Git 仓库图谱可视化插件（提交历史图 / 分支过滤 /  |
| [xiaoxianyu-office/dsh-router-flash](https://github.com/xiaoxianyu-office/dsh-router-flash) | Client (Web UI) | `dsh-router-flash` | Git only | 13 | DSH bundle 插件：V4 Flash 神模式（opencode-go）agent preset 分发包，dsh plugin add 安装后自动同步 router-flash preset。DSH agent p |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | Client (Web UI) | `dsh-code-ide` | Git only | 12 | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | Client (Web UI) | `dsh-plugin-background` | Git only | 11 | dsh壁纸插件 |
| [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | Client (Web UI) | `@dsh-external/dsh-drop-to-path` | Git only | 11 | DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH  |
| [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) | Client (Web UI) | `dsh-file-mentions` | Git only | 11 | Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, mentioned-files chip  |
| [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar) | Client (Web UI) | `dsh-bottom-info-bar` | Git only | 11 | Bottom Info Bar — an information bar plugin for DeepSeek Harness: provider/model, live balance, peak/off-peak  |
| [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | Client (Web UI) | `dsh-ocgo-lite` | Git only | 10 | OpenCode Go 用量常驻条：套餐余量圆环 + token/花费实时统计（本次会话/全部范围 + 按模型联动，官方实时定价），一键复制 API Key。OpenCode Go usage bar for DeepS |
| [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | Client (Web UI) | `dsh-answer-pet` | Git only | 10 |  |
| [AKS1st/dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle) | Client (Web UI) | `cyber-particle` | Git only | 10 | 为 DeepSeek Harness Web 界面添加动态粒子网络背景 \| Particle-network background plugin for DeepSeek Harness web |
| [HR2AY/DSH-Plan-Graph](https://github.com/HR2AY/DSH-Plan-Graph) | Client (Web UI) | `dsh-plan-graph` | Git only | 10 | another version of deepseek herness trajectory (DIY) |
| [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Client (Web UI) | `dsh-mermaid` | Git only | 9 | 在 DSH Web 会话中把 Mermaid 代码围栏渲染为 SVG 图表 \| Render Mermaid code fences as SVG diagrams in DSH Web messages |
| [buhuikongpan/dsh-pluginmanager](https://github.com/buhuikongpan/dsh-pluginmanager) | Client (Web UI) | `dsh-pluginmanager` | Git only | 9 | DSH 分层插件管理器：原生插件按 系统层/WebUI 层/工具层 只读展示，用户扩展支持停用/启用、补登记、卸载与可编辑描述。 |
| [lilwhich/dsh-plugin-gather](https://github.com/lilwhich/dsh-plugin-gather) | Client (Web UI) | `my_better-dsh` | Git only | 9 | for better dsh |
| [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) | Client (Web UI) | `dsh-composer-tools` | Git only | 8 | Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo. |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | Client (Web UI) | `@dsh-external/dsh-whale-galgame` | Git only | 7 | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | Git only | 7 | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / liv |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | Client (Web UI) | `dsh-web-archive` | Git only | 7 | 折叠对话当中众多的“无用消息”，例如Think、Bash等 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | Client (Web UI) | `@dsh-external/dsh-plannotator` | Git only | 7 | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Age |
| [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | Client (Web UI) | `dsh-huadong-bianzuqi` | Git only | 7 | DeepSeek Harness的滑动变祖器插件 |
| [DViridescent/dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme) | Client (Web UI) | `dafy-whale-theme` | Git only | 7 | DeepSeek Harness 蓝色大肥鱼主题插件：海洋配色、鱼群、气泡、吉祥物与品牌替换 |
| [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | Client (Web UI) | `@xmanrui/dsh-feishu` | Git only | 7 | 通过扫码把飞书机器人接入DeepSeek Harness |
| [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) | Client (Web UI) | `dsh-lark-meeting-notifier` | Git only | 7 | 一个只有副作用的DeepSeekHarness插件：在你跟 AI 聊得神魂颠倒时，提醒你「该去跟碳基生命开会了」。 |
| [SherUnlocked-4869/dsh-plugin-msg-nav](https://github.com/SherUnlocked-4869/dsh-plugin-msg-nav) | Client (Web UI) | `dsh-plugin-msg-nav` | Git only | 7 | DeepSeek Harness 对话节点导航条插件：在对话区右缘渲染一列短横线节点串（每条真实用户消息一个节点），跟随阅读位置；鼠标靠近节点串时，节点条「变形弹出」为单行消息预览面板（覆盖原位置，移开复原），点击任意预 |
| [GLFzr/dsh-opencode-go-quota](https://github.com/GLFzr/dsh-opencode-go-quota) | Client (Web UI) | `dsh-opencode-go-quota` | Git only | 7 | DSH 插件：OpenCode Go 额度圆环 —— 输入框模型选择器左侧的进度圆环，点击切换 5小时/每周/每月用量（OpenCode Go quota ring for DeepSeek Harness Web） |
| [lssyd20070106/dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) | Client (Web UI) | `dsh-ui-preset-enhance` | Git only | 7 | Third-party DSH WebUI enhancement plugin: custom backgrounds, theme colors, prompt presets, token/context visi |
| [MuWinds/dsh-archived-sessions](https://github.com/MuWinds/dsh-archived-sessions) | Client (Web UI) | `@muwinds/dsh-archived-sessions` | Git only | 7 | DeepSeek Harness 插件-归档会话管理，支持释放、清除归档会话 |
| [EricXu20266/dsh-gui](https://github.com/EricXu20266/dsh-gui) | Client (Web UI) | `dsh-about` | Git only | 7 | DeepSeek Harness (DHS) Electron GUI client — webui to gui, kernel untouched |
| [cirelir/dsh-change-review](https://github.com/cirelir/dsh-change-review) | Client (Web UI) | `dsh-change-review` | Git only | 7 | DeepSeek Harness 会话修改审查插件：追踪会话内 write/edit，diff 对比展示，会话隔离/子代理聚合/SSE 实时推送/颜色自定义 |
| [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | Client (Web UI) | `dsh-theme-endfield` | Git only | 6 | 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。 |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | Client (Web UI) | `dsh-plugin-ds-api-usage` | Git only | 6 |  |
| [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) | Client (Web UI) | `dsh-updater-ui` | Git only | 6 |  |
| [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | Client (Web UI) | `@dsh-external/dsh-minigames` | Git only | 6 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) | Client (Web UI) | `dsh-funpack` | Git only | 6 | DeepSeek Harness的一些有趣插件 |
| [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) | Client (Web UI) | `dsh-token-monitor` | Git only | 6 | DeepSeek Harness plugin: token usage & conversation stats as a native settings page - today / 7d / 30d totals, |
| [JuneLearn/dsh-reasoning-settings](https://github.com/JuneLearn/dsh-reasoning-settings) | Client (Web UI) | `dsh-reasoning-settings` | Git only | 6 | 让 DeepSeek Harness 的第三方 API 支持低、中、高等推理强度，并可为每次子 Agent 调用选择模型｜Add Low, Medium, High, and other reasoning levels |
| [qwert702/dsh-token-viewer](https://github.com/qwert702/dsh-token-viewer) | Client (Web UI) | `dsh-token-viewer` | Git only | 6 | Developer tool: live token usage & cost monitoring for DeepSeek Harness - consumed tokens for the current sess |
| [LJninse/dsh-open-in-ide](https://github.com/LJninse/dsh-open-in-ide) | Client (Web UI) | `dsh-open-in-ide` | Git only | 6 | DeepSeek Harness Web UI plugin: add an IDE button that auto-detects local IDEs and opens the current workspace |
| [AKS1st/model-usage-plugin](https://github.com/AKS1st/model-usage-plugin) | Client (Web UI) | `model-usage-plugin` | Git only | 6 | 统计各模型 tokens 消耗并估算费用，显示账户余额 \| Model token usage stats and cost estimation with account balance for DSH |
| [smanx/dsh-proxy](https://github.com/smanx/dsh-proxy) | Client (Web UI) | `@smanx/dsh-proxy` | Git only | 6 | HTTP + WebSocket 反向代理：把局域网端口转发到本地 DSH 服务 |
| [AKS1st/ikun-theme-skin](https://github.com/AKS1st/ikun-theme-skin) | Client (Web UI) | `ikun-theme-skin` | Git only | 6 | IKUN 主题皮肤 for DeepSeek Harness — ikun 应援主题、全屏壁纸轮播、基尼太美音乐盒、发送自动播「你干嘛~哎哟」 |
| [ccch713/deepddw](https://github.com/ccch713/deepddw) | Client (Web UI) | `@deepddw/ddw-teams-panel` | Git only | 6 | Memory & Knowledge Base for DeepSeek Harness — reachable from any device on your LAN |
| [kermanx/dshw](https://github.com/kermanx/dshw) | Client (Web UI) | `dshw` | Git only | 5 | PR workflow plugin for DeepSeek Harness |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | Client (Web UI) | `dsh-blue-whale-maid` | Git only | 5 | 运行在 deepseek harness 上的女仆酱 |
| [AtropinolTT/dsh-guide-dog](https://github.com/AtropinolTT/dsh-guide-dog) | Client (Web UI) | `dsh-guide-dog` | Git only | 5 | Guide Dog for DSH — MiniMax multimodal plugin: image/video/music/speech generation & vision tools, voice mode, |
| [linshule/dsh-balance](https://github.com/linshule/dsh-balance) | Client (Web UI) | `@linshule/dsh-balance` | Git only | 5 | DeepSeek API 余额 + OpenCodeGo 余量实时显示插件（dsh web GUI）：可拖拽双段徽章与详情弹层 + DeepSeek/OpenCodeGo 两个设置页；Key 仅存本机 ~/.dsh/ds |
| [monk233/dsh-plugin-manager](https://github.com/monk233/dsh-plugin-manager) | Client (Web UI) | `@dsh-external/dsh-plugin-manager` | Git only | 5 | DSH 插件管理, 一键启用/禁用插件 |
| [kairoz9/dsh-mcp-admin](https://github.com/kairoz9/dsh-mcp-admin) | Client (Web UI) | `dsh-mcp-admin` | Git only | 5 | dsh plugin for MCP status inspection and server management \| dsh 的 MCP状态查看与服务管理插件 |
| [invalidnaaaame/dsh-scroll-timeline](https://github.com/invalidnaaaame/dsh-scroll-timeline) | Client (Web UI) | `dsh-scroll-timeline` | Git only | 5 | DSH web plugin: ChatGPT-style scroll timeline on the chat sidebar — magnetic mountain hover, click to jump to  |
| [02Muller25/dsh-api-balance](https://github.com/02Muller25/dsh-api-balance) | Client (Web UI) | `api-balance` | Git only | 5 | 安装在deepseek的插件，能够实时显示当前api的余额，30秒自动刷新一次 |
| [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) | Client (Web UI) | `dsh-ding` | Git only | 4 |  |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | Client (Web UI) | `@dsh-community/dsh-deeplink` | Git only | 4 | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | Client (Web UI) | `dsh-win-notify` | Git only | 4 | DSH 插件：代理任务完成时弹出带声音的 Windows Toast 通知，点击通知即可直接切回并前台显示 DSH 标签页 |
| [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) | Client (Web UI) | `@xiaoyao-ai/dsh-client-ui-skin-black-whale` | Git only | 4 | DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件 |
| [KhanZou/Deepseek-Harness-as-Desktop](https://github.com/KhanZou/Deepseek-Harness-as-Desktop) | Client (Web UI) | `@dsh-external/dsh-desktop-framework` | Git only | 4 | Turn DeepSeek Harness into a Codex-style desktop app: native WebView2 shell, system tray, auto-start, Windows  |
| [f0909172434/dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet) | Client (Web UI) | `dsh-deepseek-girl-pet` | Git only | 4 | Animated deepseek girl desktop pet plugin for DeepSeek Harness |
| [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) | Client (Web UI) | `dsh-her-eyes` | Git only | 4 | 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) |
| [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) | Client (Web UI) | `dsh-node-nav` | Git only | 4 | 对话节点导航：DSH Web GUI 右侧节点串，hover 预览、点击跳转、active 药丸跟随阅读位置 |
| [lj970926/dsh-plugin-mermaid](https://github.com/lj970926/dsh-plugin-mermaid) | Client (Web UI) | `dsh-plugin-mermaid` | Git only | 4 | DeepSeek Harness web client plugin: render mermaid code blocks with a chart/source toggle. |
| [Dbi-Eshuh/dsh-thinking-status-customizer](https://github.com/Dbi-Eshuh/dsh-thinking-status-customizer) | Client (Web UI) | `dsh-thinking-status-customizer` | Git only | 4 | Customize DSH Web thinking status with custom flowing text, animated GIF/APNG/WebP, or combined image-and-text |
| [tsonglew/dsh-workspace-search](https://github.com/tsonglew/dsh-workspace-search) | Client (Web UI) | `dsh-workspace-search` | Git only | 4 | VS Code-style workspace keyword search for DeepSeek Harness: a Search tab in dsh-better-sidebar |
| [DevourerM/dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme) | Client (Web UI) | `dsh-naiwa-theme` | Git only | 4 | 为deepseek harness构建的奶蛙主题，可是我觉得很神圣呀。（素材来自互联网） |
| [zdjmrq/dsh-pluginmanager](https://github.com/zdjmrq/dsh-pluginmanager) | Client (Web UI) | `dsh-pluginmanager` | Git only | 4 | DSH 用户插件管理器:在 设置→插件 统一管理插件目录散件、运行树插件与 npm 插件包——挂载/卸载/启用/停用(cordis.patch.yml 补丁层 + HMR 热生效) |
| [pitetow/dsh-notify-on-complete](https://github.com/pitetow/dsh-notify-on-complete) | Client (Web UI) | `dsh-notify-on-complete` | Git only | 4 | Desktop notifications for DeepSeek Harness (dsh) — run completion, questions, approvals. Zero-dependency Cordi |
| [dfycaly98931680/dsh-trajectory-governance](https://github.com/dfycaly98931680/dsh-trajectory-governance) | Client (Web UI) | `dsh-trajectory-governance` | Git only | 4 | Agent trajectory governance & anomaly diagnosis plugin for DeepSeek Harness (dsh): multi-branch trajectory tre |
| [vinyumao/dsh-opencode-usage](https://github.com/vinyumao/dsh-opencode-usage) | Client (Web UI) | `@chen-001/dsh-opencode-usage` | Git only | 4 | DSH plugin: OpenCode Go 套餐用量显示（滚动/每周/每月用量百分比与重置倒计时 + Agent 工具 opencode_go_usage）。官方 bundle 插件，安装: dsh plugin - |
| [yu2025-luo/dsh-file-panel](https://github.com/yu2025-luo/dsh-file-panel) | Client (Web UI) | `dsh-file-panel` | Git only | 4 | Right-side file panel for DeepSeek Harness — auto-popup when the agent creates or downloads files, with image/ |
| [lo2589/deepseek-harness-meida](https://github.com/lo2589/deepseek-harness-meida) | Client (Web UI) | `dsh-provider-quick-config` | Git only | 4 | use glm/minimax/openai/claude api in your deepseek harness |
| [warmwine/dsh-ui-font](https://github.com/warmwine/dsh-ui-font) | Client (Web UI) | `dsh-ui-font` | Git only | 4 | DSH老花眼插件，对眼睛不好看不了小字的朋友相当有善。 |
| [1123762794/dsh-web-restart](https://github.com/1123762794/dsh-web-restart) | Client (Web UI) | `dsh-web-restart` | Git only | 4 | One-click restart button for the DeepSeek Harness Web UI: sidebar footer button, single click restarts the dsh |
| [534119219/chicheng-stats](https://github.com/534119219/chicheng-stats) | Client (Web UI) | `chicheng-stats` | Git only | 3 | DSH 全局用量统计插件：高度可配置侧边栏组件（文字/卡片）+ 统计面板（模型分布/趋势/首字节/耗时明细） |
| [AKS1st/dsh-sysmon](https://github.com/AKS1st/dsh-sysmon) | Client (Web UI) | `dsh-sysmon` | Git only | 3 | DSH Web 系统状态悬浮窗：实时 CPU/内存/磁盘占用率 \| System-status overlay showing live CPU, memory and disk usage for DSH Web |
| [Dylan37670/dsh-plugin-panel](https://github.com/Dylan37670/dsh-plugin-panel) | Client (Web UI) | `@dsh-community/plugin-panel` | Git only | 3 | DSH plugin marketplace panel with full catalog search, Chinese translation, semantic search, favorites, and li |
| [YLingHao/dsh-codeui](https://github.com/YLingHao/dsh-codeui) | Client (Web UI) | `dsh-codeui` | Git only | 3 | A workbench for programmers to review code and track changes, featuring a conversation navigation rail for jum |
| [YRN-playmaker/dsh-wallpaper_share](https://github.com/YRN-playmaker/dsh-wallpaper_share) | Client (Web UI) | `we-sync-dsh` | Git only | 3 | 一种利用壁纸引擎同步显示器各类壁纸的插件A "wallpaper engine" synchronization plugin mounted on the deepseek harness can synchroniz |
| [Ye-Yu-Mo/dsh-llm-proxy](https://github.com/Ye-Yu-Mo/dsh-llm-proxy) | Client (Web UI) | `dsh-llm-proxy` | Git only | 3 | DeepSeek Harness (dsh) 全局 HTTP 代理插件：undici setGlobalDispatcher + EnvHttpProxyAgent，配置化、热切换、可观测 |
| [kevin-luo/dsh-org-panel](https://github.com/kevin-luo/dsh-org-panel) | Client (Web UI) | `dsh-org-panel` | Git only | 3 | deepseek harness 纯牛马 —— 多智能体数字员工指挥台插件 |
| [tiantyu/dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) | Client (Web UI) | `dsh-skin-toggle` | Git only | 3 | 皮肤管理🐋切换按钮，用于 DeepSeek Harness (DSH)网页 GUI 的皮肤管理。纯客户端插件。 |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | Client (Web UI) | `dsh-prompt-studio` | Git only | 3 | DSH 插件：编辑用户与内置 system-prompt 段落，实时预览（Prompt Studio） \| DSH plugin: edit user and built-in system-prompt sectio |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | Client (Web UI) | `@humanize/dsh-humanize` | Git only | 3 |  |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | Client (Web UI) | `@bill9109/dsh-conversation-share` | Git only | 3 | 分享任意段落的 DSH 对话 |
| [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | Client (Web UI) | `dsh-daily-progress` | Git only | 3 |  |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | Client (Web UI) | `dsh-sticky-disclosure` | Git only | 3 | DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click,  |
| [Meredith2328/dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) | Client (Web UI) | `dsh-sidebar-mode` | Git only | 3 | 把默认的四种模式切换塞进「新会话」按钮里，新会话创建更方便（标准/PTC/创造/极简，与设置双向同步） |
| [zneoxlab/deepseek-harness-app](https://github.com/zneoxlab/deepseek-harness-app) | Client (Web UI) | `dsh-app-bridge` | Git only | 3 | DeepSeek Harness Desktop — A native desktop app for DeepSeek Harness (dsh). Open the app and start using the a |
| [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | Client (Web UI) | `@dsh-external/dsh-archive-viewer` | Git only | 3 | DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。 |
| [Easyhoov/deepseek-harness-desktop-windows](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | Client (Web UI) | `@dsh-desktop/balance` | Git only | 3 | 把 DeepSeek Harness 装进 Windows 桌面的应用：不用装 Node.js、不用敲命令，双击启动即用。进程内集成官方 DSH、零端口 IPC 传输；内置侧边栏工作台（文件 / 终端 / Git / 浏 |
| [yu-xin-c/dsh-project-wiki](https://github.com/yu-xin-c/dsh-project-wiki) | Client (Web UI) | `@dsh-external/dsh-project-wiki` | Git only | 3 | Auditable workspace-local project Wiki with a native Web UI for DeepSeek Harness |
| [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | Client (Web UI) | `dsh-plugin-publisher` | Git only | 3 | DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins |
| [pangzi499/dsh-balance-stats](https://github.com/pangzi499/dsh-balance-stats) | Client (Web UI) | `dsh-balance-stats` | Git only | 3 | Balance, session cost, token usage, and invoice summaries for DeepSeek Harness Web. |
| [z21for99/silk-background](https://github.com/z21for99/silk-background) | Client (Web UI) | `silk-background` | Git only | 3 | DSH Web GUI 客户端插件：WebGL Silk 丝绸动态背景 + 全站玻璃化皮肤（官方主题 token 覆盖，零依赖） \| WebGL silk shader background & glassmorphi |
| [LQ-1123/paste-to-workspace](https://github.com/LQ-1123/paste-to-workspace) | Client (Web UI) | `@dsh-user/paste-to-workspace` | Git only | 3 | DSH 插件：把粘贴/拖入聊天框的图片与任意文件保存为会话工作区文件。官方 bundle 插件，安装：dsh plugin --profile web add github:LQ-1123/paste-to-worksp |
| [zealot00/dsh-pet](https://github.com/zealot00/dsh-pet) | Client (Web UI) | `@dsh-local/dsh-pet` | Git only | 3 | Desktop pet for DeepSeek Harness Web UI: sprite animation, agent state linkage, drag, alarm & pomodoro widgets |
| [lco117/dsh-think-any-lang](https://github.com/lco117/dsh-think-any-lang) | Client (Web UI) | `dsh-think-any-lang` | Git only | 3 | DeepSeek Harness (DSH) plugin: a "Thinking Language" selector under Settings → General that tells the model wh |
| [muvuula/DeepSeek-Harness-Core](https://github.com/muvuula/DeepSeek-Harness-Core) | Client (Web UI) | `dshcore` | Git only | 3 | DeepSeek Harness Core (DHC) · AI 人格核心进化插件 / AI personality core evolution plugin for DeepSeek Harness |
| [z953218350/dsh-np-ppt](https://github.com/z953218350/dsh-np-ppt) | Client (Web UI) | `dsh-np-ppt` | Git only | 3 | 原生 DSH (DeepSeek Harness) 插件：PPT 演示文稿专家，内置 PPTD DSL 引擎、55173 所见即所得可视化编辑器、Python-PPTX 高保真离线编译内核与一键导出 PPTX。 \| N |
| [crTnT/dsh-plugin-suite](https://github.com/crTnT/dsh-plugin-suite) | Client (Web UI) | `dsh-plugin-center` | Git only | 3 | DeepSeek Harness 社区插件套件：插件中心与自动更新器 |
| [QT-Chen/dsh-mic-input](https://github.com/QT-Chen/dsh-mic-input) | Client (Web UI) | `dsh-mic-input` | Git only | 3 | DSH Web ?????????:??? Web Speech API ????,????/??????????????????Microphone voice input plugin for the DeepSee |
| [3403473060/dsh-inline-images](https://github.com/3403473060/dsh-inline-images) | Client (Web UI) | `dsh-inline-images` | Git only | 3 |  |
| [fyy99/dsh-livis-connector](https://github.com/fyy99/dsh-livis-connector) | Client (Web UI) | `dsh-livis-connector` | Git only | 3 | Connect Livis to DeepSeek Harness with in-app authorization and relay management. |
| [flaricy/maid-atelier-ui-bundle](https://github.com/flaricy/maid-atelier-ui-bundle) | Client (Web UI) | `@dsh-external/dsh-side-panel` | Git only | 3 | A calm Maid Atelier theme and practical file, preview, Git, and terminal side panel for DeepSeek Harness Web. |
| [linkingoscar/dsh-attachment-formats](https://github.com/linkingoscar/dsh-attachment-formats) | Client (Web UI) | `dsh-attachment-formats` | Git only | 3 | Codex-style attachment formats for the DeepSeek Harness Web GUI: PDF text-layer extraction, Office text extrac |
| [linkingoscar/dsh-billing-glass](https://github.com/linkingoscar/dsh-billing-glass) | Client (Web UI) | `dsh-billing-glass` | Git only | 3 | Liquid-glass billing overlay for the DeepSeek Harness Web GUI: provider balances, session cost, daily spend an |
| [wjy9902/dsh-web-default-session](https://github.com/wjy9902/dsh-web-default-session) | Client (Web UI) | `dsh-web-default-session` | Git only | 3 | DSH Web client plugin: New Session defaults to a no-folder workspace rooted at the host launch directory; the  |
| [tsonglew/dsh-media-preview](https://github.com/tsonglew/dsh-media-preview) | Client (Web UI) | `dsh-media-preview` | Git only | 3 | Audio/video preview viewer for dsh-better-sidebar: native playback with Range-seeking streaming route |
| [a1141171521/dsh-thinking-effort](https://github.com/a1141171521/dsh-thinking-effort) | Client (Web UI) | `dsh-thinking-effort` | Git only | 3 | dsh 工作区可添加多文件夹/第三方厂商模型可开启推理等级插件 |
| [LiuJunheng/DeepSeekHarnessGreen](https://github.com/LiuJunheng/DeepSeekHarnessGreen) | Client (Web UI) | `dsh-archive-purge` | Git only | 3 | DeepSeek Harness绿色整合版，一键启动，不污染C盘，一个文件夹里管理。DeepSeek Harness Green All-in-One Launcher - double-click to run, al |
| [ai7603/dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme) | Client (Web UI) | `dsh-cyberpunk-theme` | Git only | 3 |  |
| [cynch18/plugin-switch](https://github.com/cynch18/plugin-switch) | Client (Web UI) | `dsh-profile-plugin-switch` | Git only | 3 | DSH web plugin: toggle plugins on/off from the GUI without restarting the server |
| [Argonaut790/dsh-zh-hant-hk](https://github.com/Argonaut790/dsh-zh-hant-hk) | Client (Web UI) | `dsh-zh-hant-hk` | Git only | 3 | DeepSeek Harness plugin: Hong Kong Traditional Chinese wording (對話, 設定, 儲存) |
| [LessXi/dsh-fluid-width](https://github.com/LessXi/dsh-fluid-width) | Client (Web UI) | `dsh-fluid-width` | Git only | 3 | 让 DSH Web GUI 聊天显示区自适应屏幕宽度（覆盖硬编码 748px 为 min(100%,2000px)） |
| [zenghuizhu69-hub/dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale) | Client (Web UI) | `dsh-skin-blue-whale` | Git only | 3 | dsh Web UI skin: DeepSeek blue-whale theme with official gradient and leaping whale art (dsh plugin) |
| [condaThinker/dsh-image-inline](https://github.com/condaThinker/dsh-image-inline) | Client (Web UI) | `dsh-image-inline` | Git only | 3 | DSH plugin: show_image tool that renders an image inline into the web chat flow (QQ/WeChat style) — path text  |
| [kxSenlin/dsh-whale-font](https://github.com/kxSenlin/dsh-whale-font) | Client (Web UI) | `dsh-whale-font` | Git only | 3 | 把 DeepSeek Harness 对话里的主语人称「我/你/I/me」渲染成 DeepSeek 蓝鲸图标（DSH 插件） |
| [Minecraftbe/dsh-toolfold](https://github.com/Minecraftbe/dsh-toolfold) | Client (Web UI) | `dsh-toolfold` | Git only | 3 | Codex 风格的工具调用折叠 / Codex-style folding for DSH Web GUI |
| [534119219/chicheng-gate](https://github.com/534119219/chicheng-gate) | Client (Web UI) | `chicheng-gate` | Git only | 3 | DSH Web 插件：局域网/远程访问控制、frpc 内网穿透、面板密码门禁与手机端 UI 适配。 |
| [Bing-Bryan/dsh-unread-dot](https://github.com/Bing-Bryan/dsh-unread-dot) | Client (Web UI) | `dsh-unread-dot` | Git only | 3 | DSH plugin: macOS Dock badge (dot = running, number = results) + bubble chime, built on the Badging API |
| [Han-1413141/dsh-ui-hub](https://github.com/Han-1413141/dsh-ui-hub) | Client (Web UI) | `dsh-ui-hub` | Git only | 3 |  |
| [With-With/dsh-hindsight-plugins](https://github.com/With-With/dsh-hindsight-plugins) | Client (Web UI) | `dsh-hindsight-plugins` | Git only | 3 |  |
| [baisama-cloud/dsh-custom-brand](https://github.com/baisama-cloud/dsh-custom-brand) | Client (Web UI) | `dsh-custom-brand` | Git only | 3 | DeepSeek Harness（DSH）网页界面可自定义品牌区域——用您自己的本地图片替换鲸鱼标志和 DeepSeek 字标，并编辑 HARNESS 徽章文字。 |
| [2006spy/dsh-token-billing](https://github.com/2006spy/dsh-token-billing) | Client (Web UI) | `dsh-token-billing` | Git only | 3 | DSH 实时 token 计费插件：官网人民币价直接计费、高峰/错峰自动切换、价格实时跟随官网、可视化自定义模型价格。Real-time token billing plugin for DeepSeek Harness |
| [Happy2Git/dsh-compass](https://github.com/Happy2Git/dsh-compass) | Client (Web UI) | `dsh-compass` | Git only | 3 | DeepSeek Harness context-and-files panel plugin: directory browser, injected context, and read-only git graph  |
| [deCOLE118/dsh-sitemap](https://github.com/deCOLE118/dsh-sitemap) | Client (Web UI) | `@dsh-external/dsh-sitemap` | Git only | 3 | 站点地图（Yakit 风格）：DeepSeek Harness 侧边栏树形接口地图，搜索 / 接口详情 / 一键复制 curl，数据实时同步 |
| [pk7j7sqryy-ops/dsh-token-pet](https://github.com/pk7j7sqryy-ops/dsh-token-pet) | Client (Web UI) | `dsh-token-pet` | Git only | 3 | DSH 动态 Cordis 插件：卡通用量小部件 + 天气/预报/预警（Token Pet 布布玩偶） |
| [Cheng-cheng9669/dsh-cache-precision](https://github.com/Cheng-cheng9669/dsh-cache-precision) | Client (Web UI) | `dsh-cache-precision` | Git only | 3 | DSH client plugin: render the built-in session cache-hit percentage with three decimal places. |
| [534119219/chicheng-push](https://github.com/534119219/chicheng-push) | Client (Web UI) | `chicheng-push` | Git only | 3 | DSH(DeepSeek Harness) Web 消息推送插件：多渠道推送(Server酱/PushPlus/Bark/钉钉/企微/Telegram/飞书/Webhook等)，设置界面提供「推送插件」入口，可被其他插件 |
| [Vim0x3c/dsh-tts](https://github.com/Vim0x3c/dsh-tts) | Client (Web UI) | `dsh-tts` | Git only | 3 | DeepSeek Harness (dsh web) 语音播报插件：用 Edge TTS 微软神经语音朗读每个助手回复的最终结果。只读最终答复、长文自动分段、输入框喇叭一键开关、审批提示朗读与自定义提示音，全程本地零第三 |
| [MiraculousGarfield/dsh-ops-health](https://github.com/MiraculousGarfield/dsh-ops-health) | Client (Web UI) | `dsh-ops-health` | Git only | 2 |  |
| [RealHacker/dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | Client (Web UI) | `dsh-theme-colorizer` | Git only | 2 | A Deepseek Harness plugin that gives its UI color themes |
| [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) | Client (Web UI) | `dsh-ui-beautify` | Git only | 2 | 用于dsh界面美化，内置四种颜色主题，并且可上传自定义背景 |
| [daboge-beach/dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio) | Client (Web UI) | `@dsh-skin-studio/gallery` | Git only | 2 | 🎨 DeepSeek Harness skin studio — built-in curated skins + a community skin gallery. 皮肤工作室：内置精选皮肤 · 用户上传皮肤中心，让 |
| [imtanhui/dsh-plugin-butler](https://github.com/imtanhui/dsh-plugin-butler) | Client (Web UI) | `dsh-plugin-butler` | Git only | 2 |  |
| [pyf2818/dsh-bili-widget](https://github.com/pyf2818/dsh-bili-widget) | Client (Web UI) | `@dsh-external/dsh-bili-widget` | Git only | 2 | 🎬 DSH (DeepSeek Harness) B站悬浮看片插件：边 coding 边刷视频。推荐/热门/排行/搜索/关注UP主、自动连播、迷你模式、历史持久化 |
| [s17179XTY/dsh-BigfishPet](https://github.com/s17179XTY/dsh-BigfishPet) | Client (Web UI) | `bigfish-pet` | Git only | 2 | dsh-BigfishPet — DeepSeek Harness 桌宠插件 |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Client (Web UI) | `chat2skill-plugin-runtime` | Git only | 2 | Extracting and iterating skills from daily conversations with AI |
| [xingyingyuzhui/dsh-session-actions](https://github.com/xingyingyuzhui/dsh-session-actions) | Client (Web UI) | `dsh-session-actions` | Git only | 2 |  |
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | Client (Web UI) | `dsh-reasoning-translator` | Git only | 2 | DeepSeek Harness plugin: make the model write its chain-of-thought in your language |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | Client (Web UI) | `dsh-usage-cost` | Git only | 2 | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; in |
| [NigelYao/dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) | Client (Web UI) | `dsh-view-modes` | Git only | 2 | view modes for deepseek harness, including Verbose, Normal, Summary Mode |
| [misakimiku2/dsh-cost-display](https://github.com/misakimiku2/dsh-cost-display) | Client (Web UI) | `dsh-cost-display` | Git only | 2 | DeepSeek Harness 成本显示插件 |
| [quan2005/dsh-plugin-jinji](https://github.com/quan2005/dsh-plugin-jinji) | Client (Web UI) | `dsh-plugin-jinji` | Git only | 2 | 把「记忆」带进 DeepSeek Harness：极简文本记忆系统，双轨记忆（流水日志 + 人物/产品实体画像），大模型为核心驱动。无需安装其他软件，无需编译，无第三方依赖。 |
| [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) | Client (Web UI) | `dsh-claude-theme` | Git only | 2 | dsh的claude风格界面 |
| [MysaDC/dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) | Client (Web UI) | `dsh-plugin-description` | Git only | 2 | mount one row in the composition and every plugin card on the Web Settings plugin list page gets a bilingual ( |
| [arrow949/dsh-turn-approval](https://github.com/arrow949/dsh-turn-approval) | Client (Web UI) | `dsh-turn-approval` | Git only | 2 | Turn-scoped "Allow for this task" approvals for DeepSeek Harness. |
| [Heyflyingpig/long-draft-input](https://github.com/Heyflyingpig/long-draft-input) | Client (Web UI) | `long-draft-input` | Git only | 2 | Deepseek Harness 插件：用于聚合发送框长文本 |
| [benzhoupo/dsh-dardar](https://github.com/benzhoupo/dsh-dardar) | Client (Web UI) | `dsh-dardar` | Git only | 2 | DSH 插件：在模型选择框左侧显示当前 DeepSeek V4 Pro / V4 Flash 的 codexradar IQ，每 5 分钟刷新（CC BY 4.0） |
| [honghudavy-star/DSH_plugins_4U](https://github.com/honghudavy-star/DSH_plugins_4U) | Client (Web UI) | `@dsh-plugins/4u` | Git only | 2 | DSH 自建插件集合：微信桥接器 + GUI 微信入口补丁，一键安装 |
| [TableRogue/dsh-message-navigator](https://github.com/TableRogue/dsh-message-navigator) | Client (Web UI) | `dsh-message-navigator` | Git only | 2 | 消息导航条 Message Navigator: DeepSeek Harness 网页聊天界面右侧的垂直消息索引(动态 Cordis 插件) |
| [Niuniu-Sir/dsh-data-ledger](https://github.com/Niuniu-Sir/dsh-data-ledger) | Client (Web UI) | `dsh-data-ledger` | Git only | 2 | 数据台账：DeepSeek Harness 本地数据统一看板——对话/账本/技能/记忆/日志的来源、位置与内容摘要，回收站删除、浏览器存储清理（dsh-plugin） |
| [wenliang9527/dsh-themes](https://github.com/wenliang9527/dsh-themes) | Client (Web UI) | `dsh-aurora` | Git only | 2 |  |
| [xluomo/dsh-mcp-settings](https://github.com/xluomo/dsh-mcp-settings) | Client (Web UI) | `dsh-mcp-settings` | Git only | 2 | dsh mcp服务器配置管理 |
| [yuzh2001/dsh-zotero](https://github.com/yuzh2001/dsh-zotero) | Client (Web UI) | `dsa-zotero-sidebar` | Git only | 2 | 在 DeepSeek Harness 中浏览、搜索并引用你的 Zotero 文献库（侧边栏文件树 + & 与 /zotero 快速引用） |
| [cwbcheng/dsh-knowledge-graph](https://github.com/cwbcheng/dsh-knowledge-graph) | Client (Web UI) | `dsh-knowledge-graph` | Git only | 2 | DSH Cordis plugin: turn any source text into an AI knowledge graph (facts/inferences/concepts/definitions/exam |
| [Blackspace2/dsh-math-copy](https://github.com/Blackspace2/dsh-math-copy) | Client (Web UI) | `math-copy` | Git only | 2 | 在 dsh web 中复制数学公式 |
| [Way2LOose4/dsh-agent-pricing](https://github.com/Way2LOose4/dsh-agent-pricing) | Client (Web UI) | `dsh-agent-pricing` | Git only | 2 | Real-time session cost preview for DeepSeek Harness: live cost readout, today usage chart, price_estimate/sess |
| [wanzhiwei5/dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis) | Client (Web UI) | `dsh-skin-amis` | Git only | 2 | 鸣潮爱弥斯主题皮肤: 粉白配色+赛博霓虹装饰的 DeepSeek Harness Web GUI 皮肤 / Amis-inspired pink-white skin for DSH Web UI |
| [01Virex/dsh-foxy-jumpscare](https://github.com/01Virex/dsh-foxy-jumpscare) | Client (Web UI) | `dsh-foxy-jumpscare` | Git only | 2 | DeepSeek Harness plugin: every second there's a 1-in-1000 chance that FNAF 2's Foxy (Withered Foxy) jumpscares |
| [jypjypjypjyp/dsh-vqa-agent](https://github.com/jypjypjypjyp/dsh-vqa-agent) | Client (Web UI) | `dsh-vqa-agent` | Git only | 2 | DSH 插件:vqa_ask 双模型视觉问答 —— 主模型提问 → 视觉模型看图回答,UI 实时展示 QA 过程,支持多模态视觉模型选择 |
| [allen546/dsh-plugin-genshin-startup](https://github.com/allen546/dsh-plugin-genshin-startup) | Client (Web UI) | `dsh-plugin-genshin-startup` | Git only | 2 | DeepSeek Harness (dsh) plugin: Plays the Genshin Impact launch video centered with white fill on startup befor |
| [WJNCT55555/dsh-web-preview-float](https://github.com/WJNCT55555/dsh-web-preview-float) | Client (Web UI) | `@dsh-external/dsh-web-preview-float` | Git only | 2 | 为DSH提供预览-代码两个悬浮窗 |
| [YiYan129600/dsh-mobile-access](https://github.com/YiYan129600/dsh-mobile-access) | Client (Web UI) | `dsh-mobile-access` | Git only | 2 | DeepSeek Harness plugin: one-page mobile access setup — Tailscale/LAN detection, scan-to-open QR (offline), in |
| [fenxin-fx/dsh-default-workspace-plugin](https://github.com/fenxin-fx/dsh-default-workspace-plugin) | Client (Web UI) | `@dsh-external/dsh-default-workspace` | Git only | 2 |  |
| [CaoNing3212/dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper) | Client (Web UI) | `dsh-plugin-image-wallpaper` | Git only | 2 | 自定义Deepseek Harness webUI主题 |
| [fykuang02/furina-desk-pet](https://github.com/fykuang02/furina-desk-pet) | Client (Web UI) | `@dsh-external/dsh-client-ui-furina-desk-pet` | Git only | 2 | 一个小小的陪伴你的芙宁娜 |
| [2h0n/dsh-web-notification](https://github.com/2h0n/dsh-web-notification) | Client (Web UI) | `dsh-web-notification` | Git only | 2 | Desktop notifications when the model finishes a reply in DeepSeek Harness |
| [beimianism/Hermes-to-DSH](https://github.com/beimianism/Hermes-to-DSH) | Client (Web UI) | `hermes-to-dsh` | Git only | 2 | 浏览本机 Hermes 的 技能 / MCP 服务 / 对话历史,并把选中的技能与 MCP 配置注入到当前 agent。 |
| [dlpufan/dsh-theme-cyberpunk](https://github.com/dlpufan/dsh-theme-cyberpunk) | Client (Web UI) | `dsh-theme-cyberpunk` | Git only | 2 | DeepSeek Harness 赛博朋克主题插件：RGB 流动霓虹、自定义背景图库、本地音乐播放器与一键启停。 |
| [dsh-pub/dsh-meow-cat](https://github.com/dsh-pub/dsh-meow-cat) | Client (Web UI) | `dsh-meow-cat` | Git only | 2 | A cat runs across the bottom of the DeepSeek Harness web UI with a synthesized meow every time a conversation  |
| [Semidia/dsh-session-manager](https://github.com/Semidia/dsh-session-manager) | Client (Web UI) | `@dsh-external/dsh-session-manager` | Git only | 2 |  |
| [ZrSiO4-y/dsh-explorer](https://github.com/ZrSiO4-y/dsh-explorer) | Client (Web UI) | `@zrsio4-y/dsh-explorer` | Git only | 2 | VS Code-style file explorer for DeepSeek Harness: sidebar file tree + multi-tab preview (code/image/PDF/audio/ |
| [cershuang/dsh-fschannel](https://github.com/cershuang/dsh-fschannel) | Client (Web UI) | `dsh-fschannel` | Git only | 2 | DSH-Feishu channel plugin |
| [Nothree-code/folder-tree-sh](https://github.com/Nothree-code/folder-tree-sh) | Client (Web UI) | `folder-tree-sh` | Git only | 2 | Workspace file-tree panel for the DSH web UI: explore, preview (DOCX / Markdown / PDF / code / CSV), and manag |
| [kelai141/dsh-code-diff-viewer](https://github.com/kelai141/dsh-code-diff-viewer) | Client (Web UI) | `dsh-code-diff-viewer` | Git only | 2 | 用于dsh的代码可视化系统 |
| [Boliban/dsh-enter-customizer](https://github.com/Boliban/dsh-enter-customizer) | Client (Web UI) | `dsh-enter-customizer` | Git only | 2 | A DSH plugin that allows customizable input modes |
| [YZz-S/dsh-token-cost-meter](https://github.com/YZz-S/dsh-token-cost-meter) | Client (Web UI) | `dsh-token-cost-meter` | Git only | 2 | Community plugins for DeepSeek Harness (DSH) Web GUI: session token cost meter with official dynamic pricing,  |
| [Nothree-code/voco-input-sh](https://github.com/Nothree-code/voco-input-sh) | Client (Web UI) | `voco-input-sh` | Git only | 2 | DeepSeek Harness (dsh web) 语音输入插件：集成 VocoType 本地离线识别，识别结果自动插入聊天输入框（自动部署/防重复/持续输入） |
| [awa-123-cw/dsh-webui-perf](https://github.com/awa-123-cw/dsh-webui-perf) | Client (Web UI) | `dsh-webui-perf` | Git only | 2 | DeepSeek Harness WebUI 性能优化开关插件：长代码流式渲染/历史加载/高亮缓存优化，设置面板一键开关（with official-package patches） |
| [PeterZoneZz/dsh-token-cost](https://github.com/PeterZoneZz/dsh-token-cost) | Client (Web UI) | `@dsh-user/dsh-token-cost` | Git only | 2 | DSH (DeepSeek Harness) web plugin: a draggable whale floating widget showing token usage, spend and the offici |
| [yq04/dsh-git-remotes](https://github.com/yq04/dsh-git-remotes) | Client (Web UI) | `dsh-git-remotes` | Git only | 2 | DSH web plugin: better-sidebar Git Remotes tab for fetch / ff-only pull / confirmed push |
| [U1s1-king/dsh-gbc-ui](https://github.com/U1s1-king/dsh-gbc-ui) | Client (Web UI) | `dsh-gbc-ui` | Git only | 2 | 适用于DeepSeek Harness Web GUI的GirlsBangCry 皮肤 |
| [v-quest123456/dsh-smart-input](https://github.com/v-quest123456/dsh-smart-input) | Client (Web UI) | `dsh-smart-input` | Git only | 2 | 智能输入插件 for DeepSeek Harness — 语音输入 + 提示词优化 |
| [auroralab-art/dsh-file-ref](https://github.com/auroralab-art/dsh-file-ref) | Client (Web UI) | `dsh-file-ref` | Git only | 2 | DeepSeek Harness plugin: paste or drop a file to insert an @workspace path or absolute path. |
| [br1nosense/dsh-wxauto-plugin](https://github.com/br1nosense/dsh-wxauto-plugin) | Client (Web UI) | `@dsh-user/dsh-wxauto` | Git only | 2 | dsh-wxauto-plugin — DSH 微信汇报与监听插件 |
| [Elohia/dsh-genome](https://github.com/Elohia/dsh-genome) | Client (Web UI) | `dsh-genome` | Git only | 2 |  |
| [TommyFang2077/dsh-easy-desktop](https://github.com/TommyFang2077/dsh-easy-desktop) | Client (Web UI) | `dsh-desktop-voice` | Git only | 2 | 官方 DeepSeek Harness（dsh）原生桌面壳：Tauri 2 把官方 WebUI 变成原生桌面窗口，保留会话/工作区/插件/技能。内置 SenseVoice 离线语音输入、插件市场、视觉模型配置；锚定模式解 |
| [txlznbzsdj-collab/dsh-deepseek-pet](https://github.com/txlznbzsdj-collab/dsh-deepseek-pet) | Client (Web UI) | `dsh-deepseek-pet` | Git only | 2 | DeepSeek 小蓝鲸桌宠 DSH 插件：模型可调用 pet_say 命令桌宠说话，桌宠同步对话开始/结束（思考/庆祝） |
| [thjyy/dph-endfield-theme](https://github.com/thjyy/dph-endfield-theme) | Client (Web UI) | `dph-endfield-theme` | Git only | 2 | Unofficial Endfield-inspired theme and animated mascot for DeepSeek Harness Web |
| [lak321/dsh-filetree](https://github.com/lak321/dsh-filetree) | Client (Web UI) | `dsh-filetree` | Git only | 2 | DSH (DeepSeek Harness) ?????????: ??? + VSCode ????? (????/??/??) |
| [songoao25/dsh-chatgpt-subscription](https://github.com/songoao25/dsh-chatgpt-subscription) | Client (Web UI) | `dsh-chatgpt-subscription` | Git only | 2 | ChatGPT Subscription - a DeepSeek Harness plugin: bind your ChatGPT account via official OAuth and chat with C |
| [ZIye1208/dsh-approval-voice](https://github.com/ZIye1208/dsh-approval-voice) | Client (Web UI) | `dsh-approval-voice` | Git only | 2 | DSH Web GUI 审批语音提示插件：需要审批/回答的弹窗出现时播放提示音并语音播报 |
| [liguanyu/dsh_PromptRecall](https://github.com/liguanyu/dsh_PromptRecall) | Client (Web UI) | `dsh-prompt-recall` | Git only | 2 | 仿 Codex 的 DSH Web GUI 输入历史插件：会话输入框按 ↑/↓ 浏览历史 prompt，Esc清除当前对话框并进入历史，跨会话、跨重启持久保留，仅存纯文本，安全接管不误伤草稿。 A Codex-style |
| [wqx-txdsyl/dsh-ds-attach](https://github.com/wqx-txdsyl/dsh-ds-attach) | Client (Web UI) | `dsh-ds-attach` | Git only | 2 | chat.deepseek.com-style attachments for DeepSeek Harness: paperclip upload, DS-style file cards, drag-drop, te |
| [lco117/dsh-peak-hours](https://github.com/lco117/dsh-peak-hours) | Client (Web UI) | `dsh-peak-hours` | Git only | 2 | A DeepSeek Harness plugin that displays a peak-hours status badge in the session header. |
| [0928OYX/dsh-free-skins](https://github.com/0928OYX/dsh-free-skins) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-gallery` | Git only | 1 | DeepSeek Harness (DSH) 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用免重启 + 皮肤不透明度 + 自定义对话区背景（CC BY-NC-SA 4.0，0928OYX） |
| [Awesome-AI-Pedia/Awesome-DSH-Pet](https://github.com/Awesome-AI-Pedia/Awesome-DSH-Pet) | Client (Web UI) | `awesome-dsh-pet` | Git only | 1 | deepseek harness Pet 包含噜噜 总裁等宠物，并可快速添加自定义宠物 |
| [Cheng-xiu/dsh-auto-scheduler](https://github.com/Cheng-xiu/dsh-auto-scheduler) | Client (Web UI) | `dsh-auto-scheduler` | Git only | 1 | DSH timed auto-work plugin: start/stop agent sessions on a user-defined schedule with Beijing valley/peak pres |
| [GHJIVHIDD/dsh-plugin-container](https://github.com/GHJIVHIDD/dsh-plugin-container) | Client (Web UI) | `@dsh-community/dsh-plugin-container` | Git only | 1 | Docker 容器沙箱部署级插件(与 dsh-plugin-vm-sandbox 全能力对齐,无需 OrbStack):39 个 docker_* 模型工具、快照/回滚、文件传输、端口转发、后台任务、审计、共享/配额/回 |
| [GMH13552/dsh-timer-scheduler](https://github.com/GMH13552/dsh-timer-scheduler) | Client (Web UI) | `dsh-timer-scheduler-ui` | Git only | 1 | 简单的dsh定时任务插件 支持定时列表任务、ui显示，对于长期任务有益 |
| [GPIOX/dsh-api-balance](https://github.com/GPIOX/dsh-api-balance) | Client (Web UI) | `dsh-api-balance-badge` | Git only | 1 | DeepSeek Harness 动态 Cordis 插件：可拖动、可缩放、亚克力质感的 API 余额悬浮徽章 |
| [KUNTING0701/dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg) | Client (Web UI) | `dsh-aurora-bg` | Git only | 1 | DeepSeek Harness (DSH) Web UI - ? CSS transform,? canvas/mask/blur |
| [baisama-cloud/dsh-omni-bridge](https://github.com/baisama-cloud/dsh-omni-bridge) | Client (Web UI) | `dsh-omni-bridge` | Git only | 1 | DeepSeek Harness（DSH）多通道消息桥：将微信（ClawBot/iLink）、QQ和飞书（Lark）聊天消息路由给DSH代理，并将代理的回复反馈给发送方。 |
| [baisama-cloud/dsh-session-mover](https://github.com/baisama-cloud/dsh-session-mover) | Client (Web UI) | `dsh-session-mover` | Git only | 1 | Drag sessions to another workspace in the DeepSeek Harness (DSH) web GUI — 把侧边栏会话直接拖到其他工作区（完整历史克隆+原会话归档） |
| [baisama-cloud/dsh-stt-input](https://github.com/baisama-cloud/dsh-stt-input) | Client (Web UI) | `dsh-stt-input` | Git only | 1 | Speech-to-text voice input plugin for DeepSeek Harness (DSH) web GUI: click the mic in the composer to turn sp |
| [baiyingawa/everyconnect](https://github.com/baiyingawa/everyconnect) | Client (Web UI) | `everyconnect` | Git only | 1 | DSH插件，用于将dsh连接至微信、qq等软件，通过微claw插件、qq机器人等方式实现 |
| [c-v-c-v/dsh-chat-nav](https://github.com/c-v-c-v/dsh-chat-nav) | Client (Web UI) | `dsh-chat-nav` | Git only | 1 | DeepSeek Harness 聊天快捷导航插件（ChatGPT 式悬停滑出）· A DeepSeek Harness chat quick-nav plugin (ChatGPT-style hover slide- |
| [caisiyang123/dsh-tick-rail](https://github.com/caisiyang123/dsh-tick-rail) | Client (Web UI) | `dsh-tick-rail` | Git only | 1 | Tick-rail conversation navigator plugin for DeepSeek Harness — peak-falloff tick marks, hover previews, click- |
| [dhb861832993-star/pbr-render](https://github.com/dhb861832993-star/pbr-render) | Client (Web UI) | `pbr-render` | Git only | 1 | PBR 3D model preview plugin for DeepSeek Harness — GLB/GLTF game art with textures, material channel inspector |
| [lishLRF/dsh-3d-model-viewer](https://github.com/lishLRF/dsh-3d-model-viewer) | Client (Web UI) | `dsh-3d-model-viewer` | Git only | 1 | DSH 插件：在 DeepSeek Harness 的 Web 界面查看 OBJ/STL/STEP 三维模型，并转译为标准化、LLM 可读的 JSON（含语义分析），一键发送给 AI。 |
| [lnyuqian/dsh-skill-sidebar](https://github.com/lnyuqian/dsh-skill-sidebar) | Client (Web UI) | `dsh-skill-sidebar` | Git only | 1 | dsh-skill-sidebar 技能面板：DSH 右侧边栏技能面板（Skills panel）— 扫描本机技能目录列出全部技能，4-6 字功能短语 + 目录标签 + 一键复制调用 + 置顶 + 默认自动打开 + 每周 |
| [nexsjournal/dsh-customui-plugin](https://github.com/nexsjournal/dsh-customui-plugin) | Client (Web UI) | `dsh-customui-plugin` | Git only | 1 | Personalize the DeepSeek Harness web GUI: sidebar logo, empty-conversation hero, and chat background image — a |
| [qschen86/dsh-plantuml](https://github.com/qschen86/dsh-plantuml) | Client (Web UI) | `dsh-plantuml` | Git only | 1 | DSH web plugin: render PlantUML fenced blocks in conversation messages as SVG |
| [songoao25/dsh-plugin-guardian](https://github.com/songoao25/dsh-plugin-guardian) | Client (Web UI) | `dsh-plugin-guardian` | Git only | 1 | Safe uninstall with snapshot rollback for DeepSeek Harness plugins — clean residue, health check, no command l |
| [hetu-altas/hetu-hammurabi](https://github.com/hetu-altas/hetu-hammurabi) | Client (Web UI) | `@hetu-altas/ConstitutionCoding-Plugin` | Git only | 1 | hetu 系列「宪章编程」harness 模块。通过 dsh和opencode 的 Commands / Agents / Skills / Plugins 将研发流程固化为可自动执行的节点流水线：输入任务书路径或一句话 |
| [Gandufu/dsh-plugin](https://github.com/Gandufu/dsh-plugin) | Client (Web UI) | `dsh-theme-wukong` | Git only | 1 | DeepSeek Harness 插件集合｜齐天大圣双主题皮肤，支持亮暗模式、响应式布局与热插拔 |
| [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | Client (Web UI) | `dsh-effort-config` | Git only | 1 | dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budget |
| [Chi-hong22/dsh-latexcp](https://github.com/Chi-hong22/dsh-latexcp) | Client (Web UI) | `@chi-hong22/dsh-latexcp` | Git only | 1 | DeepSeek Harness (DSH) Web 界面 LaTeX 公式复制插件：悬停公式浮现复制按钮，一键复制公式的 TeX 源码。 |
| [RainbowDashy/dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes) | Client (Web UI) | `dsh-theme-palettes` | Git only | 1 |  |
| [JunWan666/dsh-plugins](https://github.com/JunWan666/dsh-plugins) | Client (Web UI) | `@dsh-external/dsh-auth` | Git only | 1 | 给deepseek-harness开发的一些插件. |
| [HamSamMike/dsh-mod-manager](https://github.com/HamSamMike/dsh-mod-manager) | Client (Web UI) | `@dsh-external/dsh-mod-manager` | Git only | 1 | A mod-style plugin manager for DeepSeek Harness web profiles. |
| [djh2203/dsh-refined](https://github.com/djh2203/dsh-refined) | Client (Web UI) | `dsh-refined` | Git only | 1 | DeepSeek-Refined 的 DeepSeek Harness 移植版 为 DeepSeek Harness（DSH）前端注入 Obsidian Border 风格的 Markdown 美化与多主题配色。 |
| [oceanxuikun/dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin) | Client (Web UI) | `dsh-eva-theme-plugin` | Git only | 1 | Evangelion-inspired theme plugin for DSH WebUI, featuring Unit-00, Unit-01, and Unit-02 themes with immersive  |
| [MaYiFei1995/dsh-approval-comment](https://github.com/MaYiFei1995/dsh-approval-comment) | Client (Web UI) | `dsh-approval-comment` | Git only | 1 | DSHWeb 审批增强插件：无感替代内置审批窗口，支持「拒绝并附言」，并在拒绝后终止当前回合、让模型重新结合附言思考 |
| [aberter0x3f/dsh-custom-enter-key](https://github.com/aberter0x3f/dsh-custom-enter-key) | Client (Web UI) | `@dsh-external/dsh-custom-enter-key` | Git only | 1 |  |
| [fflow2023/dsh-usage-cost](https://github.com/fflow2023/dsh-usage-cost) | Client (Web UI) | `@fflow2023/dsh-usage-cost` | Git only | 1 | Lightweight DeepSeek Harness plugin: per-session + global API cost stats (peak/off-peak pricing) |
| [shaoyi1991/dsh-restart-web](https://github.com/shaoyi1991/dsh-restart-web) | Client (Web UI) | `dsh-restart-web` | Git only | 1 | DSH Web 设置页新增的「重启」入口：点击即可安全重启整个 DSH 进程，页面约 5 秒后自动重新连接。 |
| [zhangxiang1993621/dsh-ws-files](https://github.com/zhangxiang1993621/dsh-ws-files) | Client (Web UI) | `dsh-ws-files` | Git only | 1 | 工作空间文件浏览器：树形目录浏览、搜索、在线编辑，可放入布局左/右区域，文件在对话/轨迹同级标签页打开 |
| [tangbut1/dsh-plugin-voice-input](https://github.com/tangbut1/dsh-plugin-voice-input) | Client (Web UI) | `dsh-plugin-voice-input` | Git only | 1 | DeepSeek Harness Web 语音输入插件 |
| [zealot00/dsh-zen](https://github.com/zealot00/dsh-zen) | Client (Web UI) | `@dsh-local/dsh-zen` | Git only | 1 | Zen mode for DeepSeek Harness Web UI: one-click immersive focus (hide sidebar/topbar), Ctrl+Shift+Z, pet auto- |
| [jiangnan-awa/dsh-user-message-jump](https://github.com/jiangnan-awa/dsh-user-message-jump) | Client (Web UI) | `dsh-user-message-jump` | Git only | 1 |  |
| [kkishapppy/dsh-usage-record](https://github.com/kkishapppy/dsh-usage-record) | Client (Web UI) | `dsh-usage-record` | Git only | 1 | DSH Web 对话区左侧提问导航轨：横线=提问，点击跳转+鱼眼+滚动跟随+后台预加载 |
| [doncelee229-cmyk/dsh-plugin-approval-alert](https://github.com/doncelee229-cmyk/dsh-plugin-approval-alert) | Client (Web UI) | `dsh-plugin-approval-alert` | Git only | 1 | DeepSeek Harness 审批/选择方案系统级通知提醒，显示工作区名、点击跳转、多语言。Approval & decision alerts with native notifications for DeepS |
| [xiaohj233/dsh-compat-shims](https://github.com/xiaohj233/dsh-compat-shims) | Client (Web UI) | `dsh-keyboard-guard` | Git only | 1 | Version-scoped compatibility shims for DeepSeek Harness 0.1.0-rc.6: pi-ai compat, sandbox schema shim, keyboar |
| [LI-Huaa/dsh-workspace-upload](https://github.com/LI-Huaa/dsh-workspace-upload) | Client (Web UI) | `dsh-workspace-upload` | Git only | 1 | A simple plugin to address the pain point of inconvenient file management when deploying DeepSeek Harness in t |
| [magicOF2/dsh-chat-width-customizer](https://github.com/magicOF2/dsh-chat-width-customizer) | Client (Web UI) | `dsh-chat-width-customizer` | Git only | 1 |  |
| [anxinyuanshiyu/dsh-plugin-zh-inventory](https://github.com/anxinyuanshiyu/dsh-plugin-zh-inventory) | Client (Web UI) | `dsh-plugin-zh-inventory` | Git only | 1 | 给DeepSeek Harness 中的插件列表加上中文的表签和简述 |
| [Zenjibad/dsh-any-attachment](https://github.com/Zenjibad/dsh-any-attachment) | Client (Web UI) | `dsh-any-attachment` | Git only | 1 | dsh bundle: attach any file type in the DeepSeek Harness Web UI — text-likes inline, binaries as workspace pat |
| [QinLuza/dsh-rollback-visual](https://github.com/QinLuza/dsh-rollback-visual) | Client (Web UI) | `@dsh-external/dsh-client-ui-rollback-visual` | Git only | 1 | Visual plugin for dsh /rollback: trajectory anchor badges with click-to-rollback. Data layer ready; native-nod |
| [Elipese568/coloured-favicon](https://github.com/Elipese568/coloured-favicon) | Client (Web UI) | `coloured-favicon` | Git only | 1 | 为 DeepSeek Harness (DSH) 网页提供彩色渐变流动小鲸鱼 favicon，并将页面内品牌元素一并彩虹化的 Cordis 客户端插件 A colour-gradient animated whale f |
| [harmony520/path-click](https://github.com/harmony520/path-click) | Client (Web UI) | `path-click` | Git only | 1 | Hover file paths and URLs in the DSH Web UI to reveal them in Explorer or open them in the default browser. |
| [magicOF2/dsh-turn-marks](https://github.com/magicOF2/dsh-turn-marks) | Client (Web UI) | `dsh-turn-marks` | Git only | 1 | DSH web UI plugin: Claude Code / Codex style turn-marks strip on the left edge of the conversation - one bar p |
| [LuniteGlaze/dsh-plugin-catalog](https://github.com/LuniteGlaze/dsh-plugin-catalog) | Client (Web UI) | `dsh-plugin-catalog` | Git only | 1 |  |
| [hubo980205/dsh-bgwall-plugin](https://github.com/hubo980205/dsh-bgwall-plugin) | Client (Web UI) | `dsh-bgwall-plugin` | Git only | 1 |  |
| [chenzhexii/dsh-api-usage](https://github.com/chenzhexii/dsh-api-usage) | Client (Web UI) | `dsh-plugin-ds-api-usage` | Git only | 1 | 在 DSH Web 界面侧边栏底部提供常驻小部件，实时展示 DeepSeek API 的当前余额、今日消费、Token 用量与请求次数，并附 24 小时消费柱状图，点击即可直达 DeepSeek 充值页。 |
| [tuogusa/dsh-session-tags](https://github.com/tuogusa/dsh-session-tags) | Client (Web UI) | `dsh-session-tags` | Git only | 1 | DeepSeek Harness 会话标签（host + client 一体包） |
| [wellorbetter/dsh-input-history](https://github.com/wellorbetter/dsh-input-history) | Client (Web UI) | `@wellorbetter/dsh-input-history` | Git only | 1 | Arrow-key input history for the DeepSeek Harness Web GUI |
| [xmanrui/dsh-weixin](https://github.com/xmanrui/dsh-weixin) | Client (Web UI) | `@xmanrui/dsh-weixin` | Git only | 1 | 通过微信扫码把微信机器人接入 DeepSeek Harness |
| [Henryang777/whale-girl-plus](https://github.com/Henryang777/whale-girl-plus) | Client (Web UI) | `whale-girl-plus` | Git only | 1 | 鲸鱼娘桌宠增强版（whale-girl+）——DeepSeek Harness Web GUI 的桌面宠物插件：休闲随机动作、多套服饰、工作节奏动画、可配置行为。Forked & enhanced from vlln/w |
| [i1j/dsh-krill-theme](https://github.com/i1j/dsh-krill-theme) | Client (Web UI) | `dsh-krill-theme` | Git only | 1 | 浮游主题（Krill）——深海世界 + 浅海世界 双模式主题插件（DSH Web）：深色=深海（亮度编码信息层级），亮色=浅海（清澈度编码）；浮游生物动画背景、深潜工作态增强、水母参数入口。dsh-plugin |
| [dlpufan/yuhao-pet](https://github.com/dlpufan/yuhao-pet) | Client (Web UI) | `yuhao-pet` | Git only | 1 | DeepSeek Harness Web GUI 桌面宠物「宇昊」 |
| [xmanrui/dsh-dingtalk](https://github.com/xmanrui/dsh-dingtalk) | Client (Web UI) | `@xmanrui/dsh-dingtalk` | Git only | 1 | DingTalk QR channel plugin for DeepSeek Harness |
| [Sal7one/DSH-Design-Studio](https://github.com/Sal7one/DSH-Design-Studio) | Client (Web UI) | `@sal7one/dsh-design-studio` | Git only | 1 | Inspired By Calude design, A Deepseek harness Design Plugin!, Select elements, Use Open Router Vision agents,  |
| [KhalilYamber/dsh-prism](https://github.com/KhalilYamber/dsh-prism) | Client (Web UI) | `dsh-prism` | Git only | 1 | DSH 界面两档模式插件：简化/原生一键切换，工具卡片白话化，降低上手门槛 / Two-level UI mode plugin for DeepSeek Harness |
| [jackma5477001/dsh-system-monitor](https://github.com/jackma5477001/dsh-system-monitor) | Client (Web UI) | `dsh-system-monitor` | Git only | 1 | DeepSeek Harness System Monitor |
| [johnnycls/dsh-no-setup-mode](https://github.com/johnnycls/dsh-no-setup-mode) | Client (Web UI) | `dsh-no-setup-mode` | Git only | 1 | DeepSeek Harness 免設置模式 — 安裝後開箱即用，幫你做出最好的設置（No-Setup Mode for DeepSeek Harness: out-of-the-box, best setup auto |
| [guoPhineas/dsh-weather-sky](https://github.com/guoPhineas/dsh-weather-sky) | Client (Web UI) | `@dsh-external/dsh-weather-sky` | Git only | 1 | 在 DeepSeek Harness 界面叠加一层实时天气与天空动画——白天显示太阳，夜晚显示带真实月相的月亮，并按天气呈现云、雨、雪、雾，以及周期性的闪电。Overlay a live weather & sky an |
| [Nothree-code/review-quote-sh](https://github.com/Nothree-code/review-quote-sh) | Client (Web UI) | `review-quote-sh` | Git only | 1 |  |
| [ldgeng/dsh-claudecode-tips](https://github.com/ldgeng/dsh-claudecode-tips) | Client (Web UI) | `@claude-code-tips/dsh-plugin` | Git only | 1 | 将deep diving替换为claudecode式的working tips |
| [hongweifei/dsh-chat-content-visibility-auto](https://github.com/hongweifei/dsh-chat-content-visibility-auto) | Client (Web UI) | `@dsh-external/dsh-chat-content-visibility-auto` | Git only | 1 | DeepSeek Harness 聊天列表性能优化：为消息节点启用 content-visibility:auto，跳过屏外节点渲染/布局/绘制；DSH plugin: content-visibility:auto w |
| [YZz-S/dsh-workspace-files-explorer](https://github.com/YZz-S/dsh-workspace-files-explorer) | Client (Web UI) | `workspace-files-explorer` | Git only | 1 | A collection of dynamic Cordis plugins for DeepSeek Harness (DSH): token cost metering, balance checks, update |
| [javaxiaov/deepseek-herness-login](https://github.com/javaxiaov/deepseek-herness-login) | Client (Web UI) | `@dsh-login-gate/auth-gate` | Git only | 1 | dsh-login-plugin |
| [xiaomao49/dsh-wiki-bridge](https://github.com/xiaomao49/dsh-wiki-bridge) | Client (Web UI) | `dsh-wiki-bridge` | Git only | 1 | WikiBridge：DSH × Obsidian 知识库桥接插件（约束工具 + 自动词典检索 + 零补丁配置） |
| [AlexCHONG8/dsh-viewboost](https://github.com/AlexCHONG8/dsh-viewboost) | Client (Web UI) | `@dsh-external/viewboost` | Git only | 1 | DeepSeek Harness 插件：右侧预览面板工具栏增强（访达显示/全屏/复制路径/复制文件）+ Token 用量卡 |
| [YZz-S/dsh-modlens](https://github.com/YZz-S/dsh-modlens) | Client (Web UI) | `dsh-modlens` | Git only | 1 | DeepSeek Harness (dsh) vision plugin — a fork of ModLens adding multi-engine image reading (Gemini, Volcengine |
| [nieyunliang/dsh-git-component](https://github.com/nieyunliang/dsh-git-component) | Client (Web UI) | `dsh-git-component` | Git only | 1 | Git panel for the DeepSeek Harness Web GUI — floating right-side panel with working-tree changes, diff viewer, |
| [sijidoubi/dsh-image-zoom](https://github.com/sijidoubi/dsh-image-zoom) | Client (Web UI) | `@dsh-external/dsh-image-zoom` | Git only | 1 | DeepSeek Harness (dsh) client plugin: click-to-zoom lightbox for markdown/chat images |
| [X9wd09ncc/dsh-x9-theme](https://github.com/X9wd09ncc/dsh-x9-theme) | Client (Web UI) | `dsh-x9-theme` | Git only | 1 | 一个dsh的主题修改插件 |
| [marvin9551/dynamic-schulte-dsh](https://github.com/marvin9551/dynamic-schulte-dsh) | Client (Web UI) | `dynamic-schulte-dsh` | Git only | 1 |  |
| [Yun-tech123/dsh-document-reader](https://github.com/Yun-tech123/dsh-document-reader) | Client (Web UI) | `dsh-document-reader` | Git only | 1 | DeepSeek Harness (DSH) web plugin: read PDF / Word .docx / PPT .pptx / plain-text & code files into the compos |
| [AJUbest/dsh-plugin-optimization](https://github.com/AJUbest/dsh-plugin-optimization) | Client (Web UI) | `dsh-plugin-optimization` | Git only | 1 | A DSH plugin that distinguishes official built-in DSH plugins and user custom plugins on the external interfac |
| [blktea814/hud-bar-for-dsh](https://github.com/blktea814/hud-bar-for-dsh) | Client (Web UI) | `hud-floating-bar` | Git only | 1 | 一个基于浏览器画中画功能的dsh悬浮窗口，可在网页外的悬浮窗口中随时使用dsh进行工作！ |
| [baka-world/dsh-sidebar-modes](https://github.com/baka-world/dsh-sidebar-modes) | Client (Web UI) | `dsh-sidebar-modes` | Git only | 1 | DeepSeek Harness sidebar modes plugin: compact mode, right sidebar, collapsible rail |
| [M4sh1r0-444/dsh-opg-usage](https://github.com/M4sh1r0-444/dsh-opg-usage) | Client (Web UI) | `dsh-opg-usage` | Git only | 1 | DSH插件：实时查看 OpenCode Go 套餐额度。可拖拽、可收缩的浮动胶囊，展示滚动/本周/本月窗口的已用与剩余额度。 |
| [Mystery-God/dsh-chime](https://github.com/Mystery-God/dsh-chime) | Client (Web UI) | `@linxin666/dsh-chime` | Git only | 1 | 任务完成提示音插件 for DeepSeek Harness Web GUI — task-completion chime, volume control, custom audio, Plugins settings |
| [Eicbro3ding/dsh-plugin-backup](https://github.com/Eicbro3ding/dsh-plugin-backup) | Client (Web UI) | `@dsh-external/dsh-plugin-backup` | Git only | 1 | One-click export/restore of installed DSH plugins (JSON snapshot) · DSH 插件一键导出/还原 |
| [Mystery-God/dsh-balance](https://github.com/Mystery-God/dsh-balance) | Client (Web UI) | `@linxin666/dsh-balance` | Git only | 1 | 模型账户余额悬浮窗插件 for DeepSeek Harness Web GUI — floating model-account balance monitor with a settings master switc |
| [awa-123-cw/dsh-matrix-rain](https://github.com/awa-123-cw/dsh-matrix-rain) | Client (Web UI) | `dsh-matrix-rain` | Git only | 1 | DeepSeek Harness WebUI 动效美化插件：聊天背景黑客帝国代码雨，雨字内容 = 当前会话 AI 思考链（流式实时），设置页调色盘 + 全套 DIY |
| [skadi-0510/sakura-Snow](https://github.com/skadi-0510/sakura-Snow) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-sakura-snow` | Git only | 1 |  |
| [szh1007/dsh-changes-panel](https://github.com/szh1007/dsh-changes-panel) | Client (Web UI) | `@dsh-external/dsh-client-changes-panel` | Git only | 1 |  |
| [rikfish163-rgb/dsh-pets](https://github.com/rikfish163-rgb/dsh-pets) | Client (Web UI) | `@dsh-local/dsh-pets` | Git only | 1 | Codex Pets–style desktop pet + live task panel plugin for DeepSeek Harness (DSH) Web UI |
| [LiFenrir/dsh-scenario](https://github.com/LiFenrir/dsh-scenario) | Client (Web UI) | `@lifenrir/dsh-scenario` | Git only | 1 | DeepSeek Harness (DSH) 场景管理插件：把「人设 + 模型 + 权限」打包成命名场景（dev / wiki / personal），设置页一键热切换 |
| [huluwocom/huluTable-dsh-plugin](https://github.com/huluwocom/huluTable-dsh-plugin) | Client (Web UI) | `dsh-hulutable-plugin` | Git only | 1 | A local table data management plugin developed for DeepSeek Harness |
| [shsr07/dsh-go-usage](https://github.com/shsr07/dsh-go-usage) | Client (Web UI) | `dsh-go-usage` | Git only | 1 | OpenCode GO subscription usage widget for DeepSeek Harness: rolling / weekly / monthly usage with reset countd |
| [LvsH13/dsh-desktop](https://github.com/LvsH13/dsh-desktop) | Client (Web UI) | `@dsh-external/dsh-desktop` | Git only | 1 | DeepSeek Harness 的 Windows 桌面端插件：托盘鲸鱼图标、桌面快捷方式、开机自启直达桌面窗口，一键切换桌面/网页端。 A Windows desktop companion for DeepSeek |
| [GGigHub/dsh-plugin-index](https://github.com/GGigHub/dsh-plugin-index) | Client (Web UI) | `@dsh-external/dsh-plugin-index` | Git only | 1 | DSH 社区插件索引：按 GitHub 星标浏览 topic:dsh-plugin，并安装 / 更新 / 修复 / 卸载 |
| [miisaka19800/dsh-restart-fab](https://github.com/miisaka19800/dsh-restart-fab) | Client (Web UI) | `dsh-restart-fab` | Git only | 1 | A floating one-click restart button for the DeepSeek Harness web GUI — self-contained, cross-platform. |
| [GHJIVHIDD/dsh-plugin-repoflow](https://github.com/GHJIVHIDD/dsh-plugin-repoflow) | Client (Web UI) | `@dsh-community/dsh-plugin-repoflow` | Git only | 1 | RepoFlow — DeepSeek Harness (DSH) 的 Git 可视化与 GitHub 部署插件。提供设置页、全局 GitHub 账号配置、仓库管理、分支图，以及供智能体使用的 git_* 系列工具。原生 |
| [ovensi/dsh-plugin-minimax-usage](https://github.com/ovensi/dsh-plugin-minimax-usage) | Client (Web UI) | `@dsh-external/minimax-usage` | Git only | 1 | DeepSeek Harness plugin: MiniMax Coding Plan quota monitor with progress bars in sidebar |
| [Zongwei9888/dsh-abyss](https://github.com/Zongwei9888/dsh-abyss) | Client (Web UI) | `dsh-abyss` | Git only | 1 | 🌊 深海事务所 · Abyss — 把 DeepSeek Harness 的多 agent 运行画成一间看得见的事务所：委派谱系、每个 agent 的成本与失败归因、上下文水位、考勤时间线，历史案子可回放并一键导出 M |
| [mldhao/dsh-blue-archive-shiroko](https://github.com/mldhao/dsh-blue-archive-shiroko) | Client (Web UI) | `dsh-blue-archive-shiroko` | Git only | 1 | Blue Archive-inspired DSH theme with a Shiroko desktop companion, Codex-style reply bubbles, petting effects,  |
| [beimianism/Hermeslike-Mixagent-MoA](https://github.com/beimianism/Hermeslike-Mixagent-MoA) | Client (Web UI) | `hermeslike-moa` | Git only | 1 |  |
| [zl99103/dsh-answer-sound](https://github.com/zl99103/dsh-answer-sound) | Client (Web UI) | `@local/dsh-answer-sound` | Git only | 1 | Agent answer sound effects for the DeepSeek Harness web GUI: start/done/error tones following the answering li |
| [2128627267/dsh-qapproval-timeout](https://github.com/2128627267/dsh-qapproval-timeout) | Client (Web UI) | `dsh-qapproval-timeout` | Git only | 1 |  |
| [2128627267/dsh-qbetter-config](https://github.com/2128627267/dsh-qbetter-config) | Client (Web UI) | `dsh-qbetter-config` | Git only | 1 |  |
| [2128627267/dsh-qknowledge-base](https://github.com/2128627267/dsh-qknowledge-base) | Client (Web UI) | `dsh-qknowledge-base` | Git only | 1 |  |
| [2128627267/dsh-qrules](https://github.com/2128627267/dsh-qrules) | Client (Web UI) | `dsh-qrules` | Git only | 1 |  |
| [awa-123-cw/better-deepseek-harness](https://github.com/awa-123-cw/better-deepseek-harness) | Client (Web UI) | `pic-host` | Git only | 1 | DSH 图片/音视频托管插件：自动拉起 8899 静态服务 + 3080 /files/ 路由（HTTP Range 流式）+ WebUI 内点击即播（视频静音/音频 20% 音量/互斥懒加载） |
| [fan969690/dsh-module-center](https://github.com/fan969690/dsh-module-center) | Client (Web UI) | `dsh-module-center` | Git only | 1 | 🧩 DSH 模块中心:开放框架插件——右侧模块化桌面,宫格排布任意模块,自定义尺寸 1x1~2x6,单击改尺寸/长按拖拽换位,开放模块协议(插件注册即显示),内置 2 个演示模块 |
| [futongxu9-maker/dsh-path-reveal](https://github.com/futongxu9-maker/dsh-path-reveal) | Client (Web UI) | `dsh-path-reveal` | Git only | 1 | 点击消息里的 Windows 绝对路径在资源管理器中打开所在文件夹（文件定位选中/目录直接打开），纯插件实现 |
| [3361805598-gif/dsh-md-annotator](https://github.com/3361805598-gif/dsh-md-annotator) | Client (Web UI) | `dsh-md-annotator` | Git only | 1 |  |
| [lhenlihai-hub/dsh-deepseek-chat](https://github.com/lhenlihai-hub/dsh-deepseek-chat) | Client (Web UI) | `dsh-deepseek-chat` | Git only | 1 |  |
| [qe2592008/dsh-ui-customizer](https://github.com/qe2592008/dsh-ui-customizer) | Client (Web UI) | `@dsh-external/dsh-client-ui-customizer` | Git only | 1 | DSH界面定制插件，暂时支持背景图片的自定义操作和主题定制操作，可以随便添加背景图片，并支持保存10个历史图片，主题可以保存无限个 |
| [DNNCOVO/dsh-sounds](https://github.com/DNNCOVO/dsh-sounds) | Client (Web UI) | `harness-sounds` | Git only | 1 | DeepSeek Harness sound alerts: task done, task failed, turn complete, waiting approval, agent question (DSH pl |
| [0x250-t/dsh-task-estimator](https://github.com/0x250-t/dsh-task-estimator) | Client (Web UI) | `dsh-task-estimator` | Git only | 1 | DeepSeek Harness (DSH) plugin: live task completion time, token & per-model cost estimator in the session head |
| [JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis](https://github.com/JimingYang25/Lafeng-UI-A-snazzy-personalized-custom-UI-plugin-for-DeepSeek-Harness-Cordis) | Client (Web UI) | `@linxin666/dsh-client-ui-la-feng` | Git only | 1 |  |
| [leozou320-ai/dsh-web-speech-input](https://github.com/leozou320-ai/dsh-web-speech-input) | Client (Web UI) | `dsh-web-speech-input` | Git only | 1 | Voice-to-text for the DeepSeek Harness Web UI — live, editable, never auto-sends. \| DeepSeek Harness 网页语音输入 |
| [904915452/dsh-editor-launcher](https://github.com/904915452/dsh-editor-launcher) | Client (Web UI) | `@zhangqingyu/dsh-editor-launcher` | Git only | 0 |  |
| [904915452/dsh-keyboard-shortcuts](https://github.com/904915452/dsh-keyboard-shortcuts) | Client (Web UI) | `@zhangqingyu/dsh-keyboard-shortcuts` | Git only | 0 |  |
| [AKS1st/dsh-archived-conversations](https://github.com/AKS1st/dsh-archived-conversations) | Client (Web UI) | `dsh-archived-conversations` | Git only | 0 |  |
| [ArcoCodes/bloome-finance-plugin](https://github.com/ArcoCodes/bloome-finance-plugin) | Client (Web UI) | `bloome-finance-plugin` | Git only | 0 |  |
| [Bob-Bo1/dsh-deepseek-balance](https://github.com/Bob-Bo1/dsh-deepseek-balance) | Client (Web UI) | `deepseek-balance` | Git only | 0 |  |
| [Como44/dsh-zh-more](https://github.com/Como44/dsh-zh-more) | Client (Web UI) | `dsh-zh-more` | Git only | 0 |  |
| [ErrorLst/dsh-notes](https://github.com/ErrorLst/dsh-notes) | Client (Web UI) | `@dsh-external/dsh-notes` | Git only | 0 |  |
| [FlipFlopszzz/dsh-studio](https://github.com/FlipFlopszzz/dsh-studio) | Client (Web UI) | `@dsh-studio/plugins-permission` | Git only | 0 |  |
| [Github-CJX/dsh-tool-imagegen](https://github.com/Github-CJX/dsh-tool-imagegen) | Client (Web UI) | `@local/dsh-tool-imagegen` | Git only | 0 |  |
| [Hanihahaha/dsh-copy-session-id](https://github.com/Hanihahaha/dsh-copy-session-id) | Client (Web UI) | `dsh-copy-session-id` | Git only | 0 |  |
| [Hanihahaha/dsh-open-workspace-folder](https://github.com/Hanihahaha/dsh-open-workspace-folder) | Client (Web UI) | `dsh-open-workspace-folder` | Git only | 0 |  |
| [LeslieWylie/dsh-gateway-billing](https://github.com/LeslieWylie/dsh-gateway-billing) | Client (Web UI) | `dsh-gateway-billing` | Git only | 0 |  |
| [Mrzhailiming/deepseek-pet](https://github.com/Mrzhailiming/deepseek-pet) | Client (Web UI) | `dsh-pet-plugin` | Git only | 0 |  |
| [Nicotinamide/dsh-plugin-tg-bridge](https://github.com/Nicotinamide/dsh-plugin-tg-bridge) | Client (Web UI) | `dsh-plugin-tg-bridge` | Git only | 0 |  |
| [Nixz0824/dsh-usage-stats-plus](https://github.com/Nixz0824/dsh-usage-stats-plus) | Client (Web UI) | `dsh-usage-stats-plus` | Git only | 0 |  |
| [Nixz0824/dsh-sound-cue](https://github.com/Nixz0824/dsh-sound-cue) | Client (Web UI) | `@dsh-external/dsh-sound-cue` | Git only | 0 |  |
| [OctKwong30/dsh-conversation-jump](https://github.com/OctKwong30/dsh-conversation-jump) | Client (Web UI) | `dsh-node-jump` | Git only | 0 |  |
| [PengboNB/skk-gal-dsh](https://github.com/PengboNB/skk-gal-dsh) | Client (Web UI) | `skk-gal` | Git only | 0 |  |
| [Ri0n72Y/workspace-scope](https://github.com/Ri0n72Y/workspace-scope) | Client (Web UI) | `workspace-scope` | Git only | 0 |  |
| [RossBool/dsh-plugins](https://github.com/RossBool/dsh-plugins) | Client (Web UI) | `dsh-agent-orchestration` | Git only | 0 |  |
| [UnKnownFish125/dsh-deepmemory](https://github.com/UnKnownFish125/dsh-deepmemory) | Client (Web UI) | `dsh-deepmemory` | Git only | 0 |  |
| [bainianlaoyao/easy-archive](https://github.com/bainianlaoyao/easy-archive) | Client (Web UI) | `easy-archive` | Git only | 0 |  |
| [chuyue-yue/dsh-plugin-manager](https://github.com/chuyue-yue/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-installer-ui` | Git only | 0 |  |
| [chuyue-1/deepseek-harness-gamepad-cursor](https://github.com/chuyue-1/deepseek-harness-gamepad-cursor) | Client (Web UI) | `@dsh-user/gamepad-cursor` | Git only | 0 |  |
| [flyhigao/dsh-sticky-notes](https://github.com/flyhigao/dsh-sticky-notes) | Client (Web UI) | `dsh-sticky-notes` | Git only | 0 |  |
| [hajimilvdou/dsh-storecloud](https://github.com/hajimilvdou/dsh-storecloud) | Client (Web UI) | `dsh-storecloud` | Git only | 0 |  |
| [hanyi7867069-create/dsh-moonrise](https://github.com/hanyi7867069-create/dsh-moonrise) | Client (Web UI) | `dsh-moonrise` | Git only | 0 |  |
| [jackyoung022/dsh-session-canvas](https://github.com/jackyoung022/dsh-session-canvas) | Client (Web UI) | `@jackyoung022/dsh-session-canvas` | Git only | 0 |  |
| [kimirong/dsher-bbs-plugin](https://github.com/kimirong/dsher-bbs-plugin) | Client (Web UI) | `@kimirong/dsher-bbs-plugin` | Git only | 0 |  |
| [knGear/dsh-AgentTask](https://github.com/knGear/dsh-AgentTask) | Client (Web UI) | `dsh-agenttask` | Git only | 0 |  |
| [lhf6623/dsh-vibe](https://github.com/lhf6623/dsh-vibe) | Client (Web UI) | `dsh-vibe` | Git only | 0 |  |
| [loklamlok/dsh-queue-director](https://github.com/loklamlok/dsh-queue-director) | Client (Web UI) | `dsh-queue-director` | Git only | 0 |  |
| [msilita/dsh-graceful-restart](https://github.com/msilita/dsh-graceful-restart) | Client (Web UI) | `dsh-graceful-restart` | Git only | 0 |  |
| [pycjava/dsh-usage](https://github.com/pycjava/dsh-usage) | Client (Web UI) | `dsh-usage-ledger` | Git only | 0 |  |
| [qschen86/dsh-calendar-todo](https://github.com/qschen86/dsh-calendar-todo) | Client (Web UI) | `dsh-calendar-todo` | Git only | 0 |  |
| [qschen86/dsh-web-restart](https://github.com/qschen86/dsh-web-restart) | Client (Web UI) | `dsh-web-restart` | Git only | 0 |  |
| [qschen86/dsh-workspace-dock](https://github.com/qschen86/dsh-workspace-dock) | Client (Web UI) | `dsh-workspace-dock` | Git only | 0 |  |
| [roushanyyzz/dsh-diff-vis](https://github.com/roushanyyzz/dsh-diff-vis) | Client (Web UI) | `dsh-diff-vis` | Git only | 0 |  |
| [shukookie/dsh-plugin-wallpaper](https://github.com/shukookie/dsh-plugin-wallpaper) | Client (Web UI) | `dsh-plugin-wallpaper` | Git only | 0 |  |
| [uigdwunm/dsh-process-fold](https://github.com/uigdwunm/dsh-process-fold) | Client (Web UI) | `dsh-process-fold` | Git only | 0 |  |
| [warmwine/dsh-memoryleak](https://github.com/warmwine/dsh-memoryleak) | Client (Web UI) | `dsh-memoryleak` | Git only | 0 |  |
| [weijunliang23/dsh-stzb](https://github.com/weijunliang23/dsh-stzb) | Client (Web UI) | `dsh-stzb` | Git only | 0 |  |
| [wolfsonliu/dsh-file-explorer-preview-code](https://github.com/wolfsonliu/dsh-file-explorer-preview-code) | Client (Web UI) | `@dsh-external/dsh-file-explorer-preview-code` | Git only | 0 |  |
| [wolfsonliu/dsh-file-explorer](https://github.com/wolfsonliu/dsh-file-explorer) | Client (Web UI) | `@dsh-external/dsh-file-explorer` | Git only | 0 |  |
| [wolfsonliu/dsh-file-explorer-preview-molstar](https://github.com/wolfsonliu/dsh-file-explorer-preview-molstar) | Client (Web UI) | `@dsh-external/dsh-file-explorer-preview-molstar` | Git only | 0 |  |
| [wolfsonliu/dsh-file-explorer-preview-sequence](https://github.com/wolfsonliu/dsh-file-explorer-preview-sequence) | Client (Web UI) | `@dsh-external/dsh-file-explorer-preview-sequence` | Git only | 0 |  |
| [xingyingyuzhui/dsh-chat-tune](https://github.com/xingyingyuzhui/dsh-chat-tune) | Client (Web UI) | `dsh-chat-tune` | Git only | 0 |  |
| [xxxrickymorty-dev/dsh-rick](https://github.com/xxxrickymorty-dev/dsh-rick) | Client (Web UI) | `dsh-rick` | Git only | 0 |  |
| [z-time-007/whale-desktop-kit](https://github.com/z-time-007/whale-desktop-kit) | Client (Web UI) | `dsh-whale-desktop-kit` | Git only | 0 |  |
| [zdjmrq/dsh-user-plugins-manager](https://github.com/zdjmrq/dsh-user-plugins-manager) | Client (Web UI) | `dsh-pluginmanager` | Git only | 0 |  |
| [yzlin499/dsh-yzlin499-easy-plugins](https://github.com/yzlin499/dsh-yzlin499-easy-plugins) | Client (Web UI) | `dsh-mcp-compat` | Git only | 0 |  |
| [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | Client (Web UI) | `@chi-hong22/dsh-mdbox` | Git only | 0 |  |
| [csiroqa/dsh-archive-viewer](https://github.com/csiroqa/dsh-archive-viewer) | Client (Web UI) | `@dsh-external/dsh-archive-viewer` | Git only | 0 |  |
| [KureKaruna/dsh-at](https://github.com/KureKaruna/dsh-at) | Client (Web UI) | `dsh-at` | Git only | 0 |  |
| [He2way/dsh-task-console](https://github.com/He2way/dsh-task-console) | Client (Web UI) | `dsh-task-console` | Git only | 0 |  |
| [xDer666/dsh-mobile-nav](https://github.com/xDer666/dsh-mobile-nav) | Client (Web UI) | `dsh-mobile-nav` | Git only | 0 |  |
| [LingyeSoul/dsh-rider](https://github.com/LingyeSoul/dsh-rider) | Client (Web UI) | `dsh-rider` | Git only | 0 |  |
| [WindLX/paper_plane_x_dsh](https://github.com/WindLX/paper_plane_x_dsh) | Client (Web UI) | `paper-plane-x-dsh` | Git only | 0 |  |
| [318197375/dsh-bottom-stats](https://github.com/318197375/dsh-bottom-stats) | Client (Web UI) | `dsh-bottom-stats` | Git only | 0 |  |
| [realguan/dsh-mermaid-preview](https://github.com/realguan/dsh-mermaid-preview) | Client (Web UI) | `dsh-mermaid-preview` | Git only | 0 |  |
| [l541402398/dsh-top-leaderboard](https://github.com/l541402398/dsh-top-leaderboard) | Client (Web UI) | `dsh-top-leaderboard` | Git only | 0 |  |
| [wenliang9527/dsh-eye](https://github.com/wenliang9527/dsh-eye) | Client (Web UI) | `dsh-eye-host` | Git only | 0 |  |
| [FrankZhangIronly/dsh-composer-enter](https://github.com/FrankZhangIronly/dsh-composer-enter) | Client (Web UI) | `dsh-composer-enter` | Git only | 0 |  |
| [FrankZhangIronly/dsh-system-control](https://github.com/FrankZhangIronly/dsh-system-control) | Client (Web UI) | `dsh-system-control` | Git only | 0 |  |
| [xjwwjx/dsh-conversation-quote](https://github.com/xjwwjx/dsh-conversation-quote) | Client (Web UI) | `@xjwwjx/dsh-conversation-quote` | Git only | 0 |  |
| [Lwc-LiuWenCheng/dsh-session-notify](https://github.com/Lwc-LiuWenCheng/dsh-session-notify) | Client (Web UI) | `dsh-session-notify` | Git only | 0 |  |
| [ReLuckyLucy/dsh_Rhine_Lab_theme](https://github.com/ReLuckyLucy/dsh_Rhine_Lab_theme) | Client (Web UI) | `dsh-theme-rhine-lab` | Git only | 0 |  |
| [jackuh105/remielle-dsh-plugin](https://github.com/jackuh105/remielle-dsh-plugin) | Client (Web UI) | `remielle-dsh` | Git only | 0 |  |
| [ClausYang/dsh-bang-shell](https://github.com/ClausYang/dsh-bang-shell) | Client (Web UI) | `@omdsh-dev/dsh-bang-shell` | Git only | 0 |  |
| [reimu-create/ds-turn-notify](https://github.com/reimu-create/ds-turn-notify) | Client (Web UI) | `ds-turn-notify` | Git only | 0 |  |
| [yewenyell-lang/dsh-workloads](https://github.com/yewenyell-lang/dsh-workloads) | Client (Web UI) | `dsh-workloads-local-ui1` | Git only | 0 |  |
| [onlyLT/tizhi-agent](https://github.com/onlyLT/tizhi-agent) | Client (Web UI) | `tizhi-agent-ui` | Git only | 0 |  |
| [Ayor1337/dsh-side-panel-workspace](https://github.com/Ayor1337/dsh-side-panel-workspace) | Client (Web UI) | `dsh-plugin-side-drawer` | Git only | 0 |  |
| [FairyScript/dsh-arbitrary-host](https://github.com/FairyScript/dsh-arbitrary-host) | Client (Web UI) | `dsh-arbitrary-host` | Git only | 0 |  |
| [cdxDNRF/wishadel-theme](https://github.com/cdxDNRF/wishadel-theme) | Client (Web UI) | `@cdxdnrf/dsh-client-ui-skin-wishadel` | Git only | 0 |  |
| [Hyna-hla/dsh-ambience](https://github.com/Hyna-hla/dsh-ambience) | Client (Web UI) | `dsh-ambience` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-mermaid](https://github.com/GongYuanCaiJi/dsh-mermaid) | Client (Web UI) | `dsh-mermaid` | Git only | 0 |  |
| [noexcs/dsh-skin-glass](https://github.com/noexcs/dsh-skin-glass) | Client (Web UI) | `dsh-skin-glass` | Git only | 0 |  |
| [ddll8023/dsh-access-mode](https://github.com/ddll8023/dsh-access-mode) | Client (Web UI) | `dsh-access-mode` | Git only | 0 |  |
| [NekoDD-wow/dsh-chain-toggle-all](https://github.com/NekoDD-wow/dsh-chain-toggle-all) | Client (Web UI) | `dsh-chain-toggle-all` | Git only | 0 |  |

### Client + Host (0)

_None._

## Partial attribution (127)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Unattributed | `dsh-vision-router` | npm | 858 | Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q& |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | Unattributed | `dsh-plugins-store` | npm | 60 | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness commu |
| [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | Unattributed | `@dhicoc/dsh-reverse-skill` | npm | 45 | Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authoriz |
| [openma-ai/Martty](https://github.com/openma-ai/Martty) | Unattributed | `@openma/deepseek-harness-tui` | npm | 43 | deepseek-harness-tui before. Self-Improvement TUI Plugin of DeepSeek Harness. Everything Here Is Also A Plugin |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Unattributed | `dsh-lark-channel` | npm | 38 | Lark/Feishu IM bot channel for DeepSeek Harness \| 飞书 DeepSeek Harness （DSH）插件 |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 20 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) | Unattributed | `dsh-harmony` | npm | 14 | A library for patching, replacing and decorating dsh plugin during runtime |
| [chaojixinren/dsh-reviewer-bot](https://github.com/chaojixinren/dsh-reviewer-bot) | Unattributed | `@dshrb/bundle` | npm | 12 | 原生 DeepSeek Harness 插件形态的代码评审机器人：跨代码平台、规则可插拔、可本地重放。 |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Unattributed | `dsh-import-agents` | npm | 10 | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-clic |
| [penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) | Unattributed | `dsh-bookmarks` | npm | 10 | Bookmark assistant replies in DeepSeek Harness: per-message bookmarks with notes/tags, a cross-session center, |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | Unattributed | `@kc0ed/dsh-bottom-bar` | npm | 8 | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [xgone/dsh-remote](https://github.com/xgone/dsh-remote) | Unattributed | `@xgone/dsh-remote` | npm | 8 | Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, rol |
| [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) | Unattributed | `dsh-extension-hub` | npm | 8 | Manage DSH（DeepSeek Harness)） skills and MCP servers: CLI + settings-page UI with zh/en i18n, Claude/Codex imp |
| [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) | Unattributed | `dsh-inspector` | npm | 7 |  |
| [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) | Unattributed | `dsh-spend` | npm | 6 | Token usage & cost monitor for DeepSeek Harness — floating widget with multi-dimensional stats, time-series ch |
| [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) | Unattributed | `@tonydua/dsh-web-search-exa` | npm | 6 | Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp |
| [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) | Unattributed | `dsh-multi-tenant` | npm | 6 | Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session isolation, authorization, ten |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Unattributed | `dsh-plugin-guide` | npm | 5 | Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Of |
| [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Unattributed | `qiushi-dsh-evidence-audit` | npm | 5 | Observe-only hash-chained evidence receipts for DeepSeek Harness |
| [kbpoyo/dsh-image-bridge](https://github.com/kbpoyo/dsh-image-bridge) | Unattributed | `@kbpoyo/dsh-image-bridge` | npm | 5 | DSH 插件：让纯文本模型也能看图。Web 端直接粘贴图片即可发送，无需指定图片路径；模型自主调用视觉技能查看，多模态模型原生直通，零skill绑定。 |
| [Gumiho12345/dsh-plugin-net-access](https://github.com/Gumiho12345/dsh-plugin-net-access) | Unattributed | `dsh-plugin-net-access` | npm | 5 | 为 DeepSeek Harness(dsh) 新增 Net Access 模式，用于解决 Windows 沙箱内 curl.exe 无法访问 HTTPS 的问题，文件写保护不变。 / Adds a Net Access |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 4 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [Zalpha263/dsh-file-explorer](https://github.com/Zalpha263/dsh-file-explorer) | Unattributed | `dsh-file-explorer` | npm | 4 | 可以像其他agent一样查看当前工作区的文件夹，并且可以预览文件 |
| [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 4 | DSH 插件市场 — DeepSeek Harness 设置内一键安装社区插件，并提供公开目录站（浏览 / 复制安装命令） |
| [GOU-GEE/deepseek-vision](https://github.com/GOU-GEE/deepseek-vision) | Unattributed | `dsh-plugin-deepseek-vision` | npm | 4 |  |
| [huguangyu666/dsh-plugin-notify](https://github.com/huguangyu666/dsh-plugin-notify) | Unattributed | `dsh-plugin-notify` | npm | 4 | DeepSeek Harness 插件：通知出口——agent 通过桌面通知 / 中文语音播报 / 提示音主动联系用户（长任务完成、出错、呼叫用户回来）。Windows 本机零依赖。 |
| [beijingwahw/dsh-companion](https://github.com/beijingwahw/dsh-companion) | Unattributed | `dsh-companion` | npm | 4 | DeepSeek Companion — DeepSeek Harness 官方伴侣插件：对话导出/交接摘要/成本优化/全局检索 + 执行轨迹分析、Prompt 工程工作台、多模型竞技场、任务编排、安全与审计（E–J 九 |
| [nonentity303/dsh-plugin-manager](https://github.com/nonentity303/dsh-plugin-manager) | Unattributed | `dsh-plugin-manager-pro` | npm | 3 |  |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Unattributed | `dsh-recall` | npm | 3 | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and  |
| [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | Unattributed | `dsh-plugin-installer` | npm | 3 | DeepSeek Harness（dsh）的插件商店 + 安装助手：在 Web GUI 里逛插件目录，一键确认安装，agent 替你装好。 |
| [StyxNether/dsh-auto-approval-plugin](https://github.com/StyxNether/dsh-auto-approval-plugin) | Unattributed | `dsh-auto-approval-plugin` | npm | 3 | Trusted Auto: a middle permission tier for DeepSeek Harness between workspace-write and danger-full-access, au |
| [kyorakuyk/dsh-hotreload-plugin-manager](https://github.com/kyorakuyk/dsh-hotreload-plugin-manager) | Unattributed | `@kyorakuyk/dsh-plugin-manager` | npm | 3 | DeepSeek Harness plugin: hot install / uninstall / update / enable-disable of profile plugin bundles from the  |
| [x2802490130-prog/dsh-writing-remote](https://github.com/x2802490130-prog/dsh-writing-remote) | Unattributed | `dsh-writing-remote` | npm | 3 | Typert remote for dsh-tool-writing: exposes project, library and search data to the client writing panel. |
| [Linjiangxian0203/dsh-remote-tunnel](https://github.com/Linjiangxian0203/dsh-remote-tunnel) | Unattributed | `dsh-remote-tunnel` | npm | 3 | Remote Host Tunnel Manager for dsh: remote port allocation + registry + resilient SSH tunnel |
| [D4Cluv-Train/dsh-plugin-manager](https://github.com/D4Cluv-Train/dsh-plugin-manager) | Unattributed | `@d4cluvtrain/dsh-plugin-manager` | npm | 2 | 一个插件管理的小插件，功能逐步增加中... |
| [ChengChe106/dsh-web-auto-open](https://github.com/ChengChe106/dsh-web-auto-open) | Unattributed | `dsh-web-auto-open` | npm | 2 | DSH plugin: auto-open the default browser when `dsh web` starts — cross-platform (Windows/macOS/Linux) |
| [jilian-dsh/dsh-rules-manager](https://github.com/jilian-dsh/dsh-rules-manager) | Unattributed | `dsh-rules-manager` | npm | 2 | Rules & commands manager for DeepSeek Harness: /rules command + settings panel + custom commands |
| [edabchann/dsh-neotui](https://github.com/edabchann/dsh-neotui) | Unattributed | `dsh-neotui-app` | npm | 2 | Neo-TUI: mouse-driven terminal UI client for DeepSeek Harness |
| [KYinCode/dsh-project-mcp-bridge](https://github.com/KYinCode/dsh-project-mcp-bridge) | Unattributed | `dsh-project-mcp-bridge` | npm | 2 | Per-project MCP loading for DeepSeek Harness: drop a .dsh/mcp.json into a project and its sessions get the MCP |
| [zerro-223/dsh-token-usage](https://github.com/zerro-223/dsh-token-usage) | Unattributed | `@zerro223/dsh-token-usage` | npm | 2 | Token usage statistics plugin for DeepSeek Harness (DSH) Web UI: per-request LLM usage captured from llm/strea |
| [coderdailyone/dsh-plugin-web-search-tavily](https://github.com/coderdailyone/dsh-plugin-web-search-tavily) | Unattributed | `dsh-plugin-web-search-tavily` | npm | 2 | Tavily search provider bundle for DeepSeek Harness (dsh) — community plugin registering a WebSearchProvider in |
| [d3cker/dsh-web-search-searxng](https://github.com/d3cker/dsh-web-search-searxng) | Unattributed | `dsh-web-search-searxng` | npm | 2 | A standalone SearXNG-backed web search provider for the DeepSeek Harness web profile. It plugs into the harnes |
| [us/dsh-crw](https://github.com/us/dsh-crw) | Unattributed | `dsh-crw` | npm | 2 | fastCRW-backed web_search and web_fetch providers for DeepSeek Harness (ctx.web) |
| [nianchen8/dsh-skill-panel](https://github.com/nianchen8/dsh-skill-panel) | Unattributed | `dsh-skill-panel` | npm | 2 | Skill management panel for the DeepSeek Harness web app |
| [caomengxuan666/dsh-winuxsh](https://github.com/caomengxuan666/dsh-winuxsh) | Unattributed | `@cmx666/dsh-winuxsh-bundle` | npm | 2 | Winuxsh runtime, sandbox, profile bundle, and Web UI plugin for DeepSeek Harness |
| [XCNXNXNX/dsh-gamemode](https://github.com/XCNXNXNX/dsh-gamemode) | Unattributed | `dsh-gamemode` | npm | 2 | dsh 插件：/gamemode 1 = 一键切换到内置创造模式（cordis）预设。dsh plugin: /gamemode 1 = switch to the built-in Creative Mode (cor |
| [haoku123/dsh-voice](https://github.com/haoku123/dsh-voice) | Unattributed | `@haoku123/dsh-voice` | npm | 2 | Full-duplex voice plugin for DeepSeek Harness: mic → SenseVoice ASR (sherpa-onnx) → LLM → Edge TTS with true b |
| [FANXING-0710/dsh-web-search-opencode](https://github.com/FANXING-0710/dsh-web-search-opencode) | Unattributed | `dsh-web-search-opencode` | npm | 2 | 为了解决使用opencode go接入deepseek harness会无法搜索，而诞生的插件。将deepseek harness的搜索逻辑改为opencode。 |
| [Choi-Peng/dsh-deepseek-balance](https://github.com/Choi-Peng/dsh-deepseek-balance) | Unattributed | `@choi-p/dsh-deepseek-balance` | npm | 1 | DeepSeek Harness bundle plugin: shows your DeepSeek account balance in the web sidebar footer, above Settings. |
| [Hanihahaha/deepseek-harness-plugins](https://github.com/Hanihahaha/deepseek-harness-plugins) | Unattributed | `dsh-auto-approve` | npm | 1 |  |
| [Julyves/dsh-git-ui](https://github.com/Julyves/dsh-git-ui) | Unattributed | `dsh-git-ui` | npm | 1 | DeepSeek Harness (dsh) plugin: Git status pill in the session header — branch, dirty counts, ahead/behind, rec |
| [Walvez/dsh-search-failover](https://github.com/Walvez/dsh-search-failover) | Unattributed | `dsh-search-failover` | npm | 1 | DSH provider-level web search failover pool: 8 free/paid backends with quota-aware circuit breaking (keeps nat |
| [dshworks/dsh-meter](https://github.com/dshworks/dsh-meter) | Unattributed | `@dshworks/dsh-meter` | npm | 1 | The DeepSeek time-of-use meter for dsh: what this session cost, which tariff is running, when it flips, and th |
| [jeremy9682/dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | Unattributed | `@jeremy9682/dsh-acp` | npm | 1 | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [renpengfei1027/dsh-web-notify](https://github.com/renpengfei1027/dsh-web-notify) | Unattributed | `dsh-web-notify` | npm | 1 | Approval attention plugin for the DSH Web GUI: pending approval/plan-review/question alerts (chime, tab-title  |
| [wwumit/dsh-plugin-tools](https://github.com/wwumit/dsh-plugin-tools) | Unattributed | `@wwumit/dsh-plugin-tools` | npm | 1 | Plugin tools provider for DeepSeek Harness: expert2skill, skill-compliance, dependency-scan (dsh.bundle) |
| [rrrrrredy/skill-security-guard](https://github.com/rrrrrredy/skill-security-guard) | Unattributed | `dsh-skill-security-guard` | npm | 1 | Static security scanner for agent skills: A-F risk rating, safe zip scanning, CI-tested rules |
| [openHacking/pptkit-presentation](https://github.com/openHacking/pptkit-presentation) | Unattributed | `dsh-plugin-pptkit-presentation` | npm | 1 | End-user presentation workflows, preview application, and Agent Skill powered by PPTKit. |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | Unattributed | `dsh-all-search` | npm | 1 | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) |
| [superslash-rico/dsh-plugin-slashx-gateway](https://github.com/superslash-rico/dsh-plugin-slashx-gateway) | Unattributed | `dsh-plugin-slashx-gateway` | npm | 1 | DeepSeek Harness host bundle for SlashX request, response, rich media, async callbacks, and complete token met |
| [zhbdream/dsh-feishu-bridge](https://github.com/zhbdream/dsh-feishu-bridge) | Unattributed | `dsh-feishu-bridge` | npm | 1 | 飞书 → 本机 DeepSeek Harness Agent 桥接（dsh-plugin） |
| [kongxiangyiren/dhs-theme-plugin](https://github.com/kongxiangyiren/dhs-theme-plugin) | Unattributed | `@kongxiangyiren/dhs-theme-plugin` | npm | 1 | dsh 主题管理插件,可以自定义主题 |
| [CSY656/dsh-worktree](https://github.com/CSY656/dsh-worktree) | Unattributed | `dsh-worktree` | npm | 1 | Git worktree filesystem isolation for DeepSeek Harness subagents — each child works in its own worktree; clean |
| [deepforce/dsh-plugin-reloader](https://github.com/deepforce/dsh-plugin-reloader) | Unattributed | `@deepforce/dsh-plugin-reloader` | npm | 1 | Hot-reload DeepSeek Harness plugins without restarting dsh web — auto-watch, /reload command, dependency-chang |
| [ucloud/ucloud-dsh-plugin](https://github.com/ucloud/ucloud-dsh-plugin) | Unattributed | `@ucloud-ai/ucloud-dsh-plugin` | npm | 1 |  |
| [penguin-oo/dsh-pathlink](https://github.com/penguin-oo/dsh-pathlink) | Unattributed | `dsh-pathlink` | npm | 1 | Ctrl+click file paths and links in DeepSeek Harness chat: paths open their folder in the OS file manager, link |
| [ink5897/dsh-theme-kit](https://github.com/ink5897/dsh-theme-kit) | Unattributed | `dsh-theme-kit` | npm | 1 | A DeepSeek Harness Web GUI appearance kit: 32 preset themes, animated/static wallpapers, paper textures, per-z |
| [realLoganLuo/dsh-session-cost](https://github.com/realLoganLuo/dsh-session-cost) | Unattributed | `@logan-luo/dsh-session-cost-bundle` | npm | 1 |  |
| [AbcdefgXW/dsh-toolbox-web](https://github.com/AbcdefgXW/dsh-toolbox-web) | Unattributed | `dsh-toolbox-web` | npm | 1 | dsh 工具箱：会话/回收站/子目录/搜索/预设/配置管理 + 定时心跳/长消息折叠 \| Toolbox plugin for dsh: session/trash/subdir/search/preset/confi |
| [ahikl/dsh-desktop](https://github.com/ahikl/dsh-desktop) | Unattributed | `@ahikl/dsh-desktop` | npm | 1 | DeepSeek Harness 桌面端插件：基于 Electron 的 dsh Web UI 桌面外壳。\| An Electron desktop shell for the DeepSeek Harness Web |
| [jilian-dsh/dsh-rule-engine](https://github.com/jilian-dsh/dsh-rule-engine) | Unattributed | `dsh-rule-engine` | npm | 1 |  |
| [Fectivnfy112357/dsh-dual-plugin-guide](https://github.com/Fectivnfy112357/dsh-dual-plugin-guide) | Unattributed | `dsh-dual-plugin-guide` | npm | 0 |  |
| [Hanihahaha/dsh-auto-approve](https://github.com/Hanihahaha/dsh-auto-approve) | Unattributed | `dsh-auto-approve` | npm | 0 |  |
| [qsjzqssh/mc-hud](https://github.com/qsjzqssh/mc-hud) | Unattributed | `mc-hud` | npm | 0 |  |
| [wwumit/dsh-compliancehub](https://github.com/wwumit/dsh-compliancehub) | Unattributed | `@wwumit/dsh-compliancehub` | npm | 0 |  |
| [wwumit/dsh-office](https://github.com/wwumit/dsh-office) | Unattributed | `@wwumit/dsh-office` | npm | 0 |  |
| [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) | Unattributed | `@openma/deepseek-harness-tui` | npm | 0 |  |
| [MostlyHarmlessxyz/dsh-safe-web-fetch](https://github.com/MostlyHarmlessxyz/dsh-safe-web-fetch) | Unattributed | `dsh-safe-web-fetch` | npm | 0 |  |
| [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) | Unattributed | `dsh-skill-mcp-panel` | Git only | 84 | DSH Web UI plugin: skill and MCP management（Web界面的skill/MCP管理工具） |
| [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) | Unattributed | `dsh-plugin-bridge` | Git only | 29 | Cross-preset session migration for DeepSeek Harness: fixed-schema handoff summaries instead of bypassing the p |
| [cyijun/dsh-surfing-plugin](https://github.com/cyijun/dsh-surfing-plugin) | Unattributed | `dsh-surfing-plugin` | Git only | 12 | SearXNG search and Crawl4AI fetch providers for DeepSeek Harness |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | Git only | 11 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | Unattributed | `dsh-acp-for-bitfun` | Git only | 10 | BitFun 与 DSH ACP 交互对接 插件 |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Unattributed | `@dsh-external/dsh-plugin-tts` | Git only | 7 | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings pan |
| [FTShare-Lab/dsh_kline](https://github.com/FTShare-Lab/dsh_kline) | Unattributed | `@ftshare-lab/dsh-kline` | Git only | 7 | 面向 DeepSeek Harness 的交互式 K 线分析插件，支持多市场行情、技术指标、支撑压力位、新闻与基本面分析，并在原生侧栏中直接展示。 |
| [sanshanya/better-model-provider](https://github.com/sanshanya/better-model-provider) | Unattributed | `better-model-provider` | Git only | 6 | Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (wire spellings) + request moda |
| [cyanseek/dsh-native-playbook](https://github.com/cyanseek/dsh-native-playbook) | Unattributed | `dsh-native-playbook` | Git only | 5 | Task-aware native capability manager for DeepSeek Harness — use, prepare, and verify built-in DSH tools before |
| [yuqingsh/dsh-image-subagent](https://github.com/yuqingsh/dsh-image-subagent) | Unattributed | `dsh-image-subagent` | Git only | 5 |  |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | Unattributed | `resanity` | Git only | 4 | reSanity 散修 — 面向散户投研的证据搜索与逻辑梳理 Skill：核查一手资料，拆解题材到收入、利润和现金的传导链，标注证据与推断边界。 |
| [chu557/douyin-plugin-dsh-plugin](https://github.com/chu557/douyin-plugin-dsh-plugin) | Unattributed | `dsh-command-douyin` | Git only | 4 | 在使用dsh等待的过程中刷抖音 |
| [gameswu/dsh-pref-kit](https://github.com/gameswu/dsh-pref-kit) | Unattributed | `dsh-pref-kit` | Git only | 4 | 缓解部分dsh性能问题的插件 |
| [Han-Yao94/dsh-filelens](https://github.com/Han-Yao94/dsh-filelens) | Unattributed | `dsh-filelens` | Git only | 3 |  |
| [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) | Unattributed | `@dsh-external/dsh-conv-search` | Git only | 3 | dsh-conv-search（对话内文本搜索）— in-conversation text search plugin for DeepSeek Harness (Ctrl+F, match case, whole w |
| [beijingwahw/dsh-conv-export](https://github.com/beijingwahw/dsh-conv-export) | Unattributed | `@dsh-external/dsh-conv-export` | Git only | 3 | dsh-conv-export（对话导出）— export the current DeepSeek Harness conversation as Markdown, PDF, or a long PNG image |
| [NLeRWantFly/dsh-HoldThatBigBlueFatFish](https://github.com/NLeRWantFly/dsh-HoldThatBigBlueFatFish) | Unattributed | `dsh-pwsh2wslbash` | Git only | 3 | 约束蓝色大肥鱼过度思考暂时的方案~模型测试opencode go实现 |
| [Chloride233/dsh-cot-profile](https://github.com/Chloride233/dsh-cot-profile) | Unattributed | `dsh-cot-profile` | Git only | 3 | Real-time chain-of-thought trajectory profiling for DeepSeek Harness: live wording indicators, profile-family  |
| [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | Unattributed | `@mattheliu/session-teleport` | Git only | 2 |  |
| [lsz-asd/dsh-chameleon](https://github.com/lsz-asd/dsh-chameleon) | Unattributed | `@dsh-external/dsh-chameleon` | Git only | 2 |  |
| [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | Unattributed | `dsh-review-skills` | Git only | 2 |  |
| [wzxaaaa/dsh-w-plugin-ecosystem](https://github.com/wzxaaaa/dsh-w-plugin-ecosystem) | Unattributed | `dsh-w-archive-manager` | Git only | 2 | 为dsh专属打造的贴近原生的自定义插件生态，支持插件可配置，独立协议，热拔插 |
| [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | Unattributed | `agent-loop-workflow` | Git only | 1 | A project-agnostic multi-agent collaboration protocol for the DeepSeek Harness: loop guards that stop runaway  |
| [asakumizy/dsh-local-skills](https://github.com/asakumizy/dsh-local-skills) | Unattributed | `dsh-local-skills` | Git only | 1 | DSH plugin: local SKILL browser with a Notion-style web UI (live watch, Use-button guide, bundled starter skil |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | Unattributed | `dsh-local-filetree` | Git only | 1 | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, r |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | Unattributed | `dsh-resume-plugin` | Git only | 1 | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Unattributed | `dsh-codex-import` | Git only | 1 | Read-only Codex setup compatibility scanner for DeepSeek Harness |
| [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | Unattributed | `dsh-openclaw-acp` | Git only | 1 | DeepSeek Harness bundle for OpenClaw and WeChat over ACP |
| [BB-84C/deepseek-harness-mobile-solution](https://github.com/BB-84C/deepseek-harness-mobile-solution) | Unattributed | `@bb-84c/dsh-mobile-cli` | Git only | 1 | dsh plugins: control a local DeepSeek Harness from your phone — tailscale point-to-point or your own VPS relay |
| [Jesse-njx/dsh-plugin-manager](https://github.com/Jesse-njx/dsh-plugin-manager) | Unattributed | `@dsh-pm/cli` | Git only | 1 | dsh pm — discover, install, update, and manage dsh plugins from the CLI: multi-source search (awesome list + G |
| [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) | Unattributed | `dsh-repro` | Git only | 1 | Minimal, secret-scrubbed, replayable problem bundles for DeepSeek Harness sessions (/repro). |
| [ParticleLight/dsh-ultracode](https://github.com/ParticleLight/dsh-ultracode) | Unattributed | `dsh-ultracode` | Git only | 1 |  |
| [LeslieWylie/review-workflow](https://github.com/LeslieWylie/review-workflow) | Unattributed | `review-workflow` | Git only | 1 | A structured multi-panelist review workflow for the DeepSeek Harness: N panelists score in isolated subagents, |
| [moton16/dsh-msg-edit](https://github.com/moton16/dsh-msg-edit) | Unattributed | `@moton16/dsh-msg-edit` | Git only | 1 | Message edit / regenerate plugin for DeepSeek Harness Web — Cordis host plugin (/api/msg-edit/*) + dsh.client  |
| [AythyaCrispus/dsh-minimal-msys2](https://github.com/AythyaCrispus/dsh-minimal-msys2) | Unattributed | `dsh-minimal-msys2` | Git only | 1 | Windows Minimal Mode: persistent bash + str_replace_editor dsh plugin — registers an agent preset, provides a  |
| [Sutera-Diffusus/dsh-windows-notify](https://github.com/Sutera-Diffusus/dsh-windows-notify) | Unattributed | `dsh-windows-notify` | Git only | 1 | Windows-grade notifications for DeepSeek Harness: system toasts, custom sounds, and a taskbar tray badge — a n |
| [stakeswky/awesome-dsh](https://github.com/stakeswky/awesome-dsh) | Unattributed | `awesome-dsh` | Git only | 1 | DSH 插件生态导航：GitHub topic dsh-plugin 全量目录，自动抓取 + Workers AI 中文翻译 + 按需检索 skill｜Auto-updating catalog of 2600+ Dee |
| [Failing-coachman563/dsh-skill-viewer](https://github.com/Failing-coachman563/dsh-skill-viewer) | Unattributed | `dsh-skill-viewer` | Git only | 0 |  |
| [jifeng15/dsh-web-restart](https://github.com/jifeng15/dsh-web-restart) | Unattributed | `dsh-web-hot` | Git only | 0 |  |
| [syncable-dev/dsh-plugin-memtrace](https://github.com/syncable-dev/dsh-plugin-memtrace) | Unattributed | `dsh-plugin-memtrace` | Git only | 0 |  |
| [WOOK98/airesearch-plugin](https://github.com/WOOK98/airesearch-plugin) | Unattributed | `airesearch-plugin` | Git only | 0 |  |
| [yweilai77-dev/dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) | Unattributed | `dsh-plugin-cost` | Git only | 0 |  |
| [s3yf1337/dsh-desktop](https://github.com/s3yf1337/dsh-desktop) | Unattributed | `dsh-desktop-shell` | Git only | 0 |  |
| [mixin-ai/dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) | Unattributed | `@mixin-ai/dsh-git-branch-switcher` | Git only | 0 |  |
| [ttxl314/dsh-skill-lord-serf](https://github.com/ttxl314/dsh-skill-lord-serf) | Unattributed | `@ttxl314/dsh-skill-lord-serf` | Git only | 0 |  |
| [songyang0603/dsh-codex](https://github.com/songyang0603/dsh-codex) | Unattributed | `@songyang0603/dsh-codex-apply-patch-engine` | Git only | 0 |  |
| [icefall7/dsh-plugin-scout](https://github.com/icefall7/dsh-plugin-scout) | Unattributed | `dsh-plugin-scout` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-superpowers-zh](https://github.com/GongYuanCaiJi/dsh-superpowers-zh) | Unattributed | `dsh-superpowers-zh` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-claude-code-templates](https://github.com/GongYuanCaiJi/dsh-claude-code-templates) | Unattributed | `dsh-claude-code-templates` | Git only | 0 |  |

## Unverified attribution (467)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Host | `@tt-a1i/archify-dsh` | npm | 14554 | Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Host | `managed-agents` | npm | 626 | Local-first AI agent runtime with sandboxed sessions, MCP tools, memory, credentials, audit/replay, and a buil |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Host | `graph-memory` | npm | 559 | Deepseek Harness、Openclaw知识图谱记忆插件。2026年4月受邀发布在清华大学讨论会。Knowledge Graph + Memory；Knowledge Graph Context Engine  |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | npm | 175 | The web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. A |
| [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | Host | `dsh-engramory` | npm | 164 | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + |
| [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | Host | `@icelily/dsh-gitbash-preset` | npm | 134 | DeepSeek Harness 插件：一键安装「极简模式 (Git Bash)」agent preset —— 把 DSH 自带极简模式中的 bash 调用映射到 Git for Windows 的 bash（MSYS |
| [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | Host | `superpowers-dsh` | npm | 69 | Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/ |
| [geml-spec/geml](https://github.com/geml-spec/geml) | Host | `@geml/dsh-plugin` | npm | 24 | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, |
| [AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) | Client (Web UI) | `dsh-web-lan-access` | npm | 22 | DeepSeek Harness (dsh) Web plugin |
| [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill) | Host | `@dhicoc/dsh-chinese-traditional-wisdom-skill` | npm | 16 | 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 |
| [huey1in/reef](https://github.com/huey1in/reef) | Client + Host | `dsh-reef` | npm | 15 | DSH 插件全家桶:浏览器自动化 + MCP Server + GitHub/GitLab 自动评审 + 原生嵌入面板 \| One install, five modules for DeepSeek Harness: |
| [Solismuchengxue/dsh_plugin_swift_cycle](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle) | Host | `dsh-plugin-swift-cycle` | npm | 14 | Swift Cycle governance skill adapter for DeepSeek Harness; user-invoked, version-pinned, and offline-verifiabl |
| [Smalldy/godot-bridge](https://github.com/Smalldy/godot-bridge) | Host | `godot-bridge` | npm | 12 | DSH (DeepSeek Harness) plugin that launches and drives a running Godot 4.x game through its in-game TCP intera |
| [Mr-remon219/dsh-search-boost](https://github.com/Mr-remon219/dsh-search-boost) | Host | `dsh-search-boost` | npm | 12 | The plunge for dsh to boost model's search ability. |
| [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | Host | `@fakechris/dsh-restart-recover` | npm | 11 | DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | Host | `dsh-vision-proxy` | npm | 11 | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。GUI 附加图片自动经 OpenAI 兼容 VLM 转译成文字后交给 DeepSeek 作答；支持百炼/智谱/OpenRouter 等任意 O |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Host | `dsh-plugin-codegraph` | npm | 9 | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools  |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Host | `dsh-plugin-claude-bridge` | npm | 9 | Bridge Claude Code memory, skills, and config into DeepSeek Harness |
| [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) | Host | `dsh-fail-logger` | npm | 9 | DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 A |
| [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) | Client (Web UI) | `dsh-lan-access` | npm | 9 |  |
| [xylt369/dsh-browser](https://github.com/xylt369/dsh-browser) | Host | `@yeesy369/dsh-browser-playwright` | npm | 8 | Browser capability for DeepSeek Harness: headed Edge/Playwright provider, SSRF-safe navigation, a11y-ref click |
| [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) | Host | `dsh-codex-port` | npm | 8 | DeepSeek Harness 技能移植插件：把 ~/.codex 的 Codex 官方插件（186+ 个、583+ 技能）一键移植为 DSH 技能（codex_list/port/status），frontmatte |
| [sjh9714/dsh-movein](https://github.com/sjh9714/dsh-movein) | Host | `dsh-movein` | npm | 7 | Migrate your whole Claude Code or Codex setup into DeepSeek Harness (DSH) with one command. Import skills, sla |
| [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | Client (Web UI) | `dsh-opencode-palette` | npm | 7 | 🎨 看腻了 DSH 默认皮肤？34 款 opencode 经典配色一键换上——tokyonight、dracula、gruvbox、matrix、rose-pine……即点即换，重启不丢。34 opencode the |
| [maxwell-feng/dsh-windows-ocr](https://github.com/maxwell-feng/dsh-windows-ocr) | Host | `@maxwell-feng/dsh-windows-ocr` | npm | 6 |  |
| [rotifer-protocol/rotifer-playground](https://github.com/rotifer-protocol/rotifer-playground) | Host | `rotifer` | npm | 6 | Local dev environment — Rust core + TypeScript CLI for gene development & Arena competition |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Host | `upstream-radar` | npm | 5 | Scan and monitor DeepSeek Harness plugins: find exact dependency and compatibility problems, then keep a fixab |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Host | `@agenticcontrolplane/dsh` | npm | 5 | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs |
| [platonai/dsh-browser4](https://github.com/platonai/dsh-browser4) | Host | `dsh-browser4` | npm | 5 | Browser4 — an AI-native browser engine for autonomous agents, intelligent extraction, and large-scale web auto |
| [wz-heng/dsh-feishu-bridge](https://github.com/wz-heng/dsh-feishu-bridge) | Host | `dsh-feishu-bridge` | npm | 5 | Fail-closed Feishu (Lark) channel bridge for DeepSeek Harness (dsh) — chat with a bot, get agent turns back. O |
| [cerebrixos-org/tuning-engines-cli](https://github.com/cerebrixos-org/tuning-engines-cli) | Host | `tuningengines-cli` | npm | 5 | CLI & MCP server for Tuning Engines — fine-tune LLMs on code repositories |
| [0lidaxiang/dsh-plugin-greet](https://github.com/0lidaxiang/dsh-plugin-greet) | Host | `dsh-plugin-greet` | npm | 5 | DeepSeek Harness is a plugin-based system for building AI agents. Everything, from tools and models to the web |
| [nanpaidashi/dsh-honcho-sync](https://github.com/nanpaidashi/dsh-honcho-sync) | Host | `@nanpaidashi/dsh-honcho-sync` | npm | 5 | DSH plugin: auto-sync conversation turns to Honcho memory service |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Host | `dsh-plugin-opencode-bridge` | npm | 4 | Bridge opencode skills and config into DeepSeek Harness |
| [brittanistrehlowll-oss/dsh-quota-panel](https://github.com/brittanistrehlowll-oss/dsh-quota-panel) | Client + Host | `dsh-quota-panel` | npm | 4 | Provider quota/balance corner panel for the dsh web surface (DeepSeek Harness plugin): server-side credential  |
| [dawsondx/dsh-web-open](https://github.com/dawsondx/dsh-web-open) | Client (Web UI) | `@dawsondx/dsh-web-open` | npm | 4 | DeepSeek Harness (dsh) bundle: when `dsh web` is ready, print the full GUI URL and open it in your default bro |
| [STARDUSTLC666/dsh-rss](https://github.com/STARDUSTLC666/dsh-rss) | Host | `dsh-rss` | npm | 4 | DeepSeek Harness RSS 订阅插件：rss_list/add/remove/fetch/check 五工具，RSS 0.9x/1.0/2.0 与 Atom 归一化解析，订阅列表持久化到 settings， |
| [Terry12138qy/dsh-vision](https://github.com/Terry12138qy/dsh-vision) | Host | `dsh-vision` | npm | 4 | DeepSeek Harness 识图插件：为不具备原生识图能力的模型提供识图能力（阿里云百炼 qwen3.5-omni-plus，失败自动切换智谱 glm-4.6v-flash）。由 claude-vision-ski |
| [Highjobop/dsh-gadgets](https://github.com/Highjobop/dsh-gadgets) | Client (Web UI) | `dsh-gadgets` | npm | 4 | Lightweight DeepSeek Harness tweaks: dsh-skin (appearance) + dsh-tidy (conversation folding & nav rail) |
| [SaiSenBox/dsh-boot-guard](https://github.com/SaiSenBox/dsh-boot-guard) | Client (Web UI) | `dsh-boot-guard` | npm | 4 | A loader-independent rescue console for DeepSeek Harness when a broken plugin prevents the Web UI from startin |
| [STARDUSTLC666/dsh-ffmpeg](https://github.com/STARDUSTLC666/dsh-ffmpeg) | Host | `dsh-ffmpeg` | npm | 4 | DeepSeek Harness 视频处理插件：ffmpeg_probe/cut/concat/encode/subtitle/extract/gif 七工具，走官方 subprocess 服务、argv 数组无 she |
| [truelove-dreamer/dsh-plugin-vetting](https://github.com/truelove-dreamer/dsh-plugin-vetting) | Host | `dsh-plugin-vetting` | npm | 4 | DeepSeek Harness plugin: heuristic malware vetting for installed third-party plugins |
| [CHplus0/dsh-learning-mode](https://github.com/CHplus0/dsh-learning-mode) | Host | `dsh-learning-mode` | npm | 4 | A DeepSeek Harness (DSH) agent preset that teaches while coding — concrete scenario-grounded explanations, Soc |
| [Hongcheng-LI/dsh-zotero](https://github.com/Hongcheng-LI/dsh-zotero) | Host | `dsh-zotero` | npm | 4 | Zotero tools for DeepSeek Harness: search library, read metadata/fulltext, list attachments, download PDFs, ma |
| [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) | Host | `dsh-github-skills` | npm | 3 | Skill-first GitHub workflows for DeepSeek Harness: PR triage, review feedback, CI diagnosis, and safe publishi |
| [wingsky-1/dsh-plugin-hub](https://github.com/wingsky-1/dsh-plugin-hub) | Client (Web UI) | `@wingsky-1/dsh-gzip` | npm | 3 | DSH (DeepSeek Harness) 插件集 \| npm-installable plugins: MCP manager, notifications, LAN proxy, gzip, file previ |
| [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) | Host | `@eqman00003/knowlp-rag` | npm | 3 | KnowLP-RAG: dual knowledge-graph RAG for Markdown notes — dsh plugin add @eqman00003/knowlp-rag · MCP + native |
| [ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | Host | `dsh-vibe-math` | npm | 3 | Vibe Mathematics —— 多代理数学问题求解与形式化验证框架 |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Host | `dsh-superpowers` | npm | 3 | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstr |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Host | `dsh-plugin-meta-memory` | npm | 3 | Structured long-term memory system for DeepSeek Harness |
| [zhouzhencheng07/dsh-free-search](https://github.com/zhouzhencheng07/dsh-free-search) | Host | `dsh-free-search` | npm | 3 | Free keyless Tavily web search tool for DeepSeek Harness (dsh) |
| [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) | Host | `dsh-calendar` | npm | 3 | DeepSeek Harness 日历插件：calendar_list/create/update/delete/search 五工具，CalDAV 协议支持 Google/iCloud/Nextcloud/自定义端点， |
| [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | Host | `dsh-dingtalk` | npm | 3 | DeepSeek Harness 钉钉群机器人通知插件：dingtalk_notify/dingtalk_text 两工具，自定义机器人 webhook + HMAC 加签安全模式，手写签名实现、零运行时依赖；纯 Nod |
| [MicroHEROX/dsh-exa-mcp](https://github.com/MicroHEROX/dsh-exa-mcp) | Client + Host | `dsh-exa-mcp` | npm | 3 | Exa Search MCP for DeepSeek Harness: mounts the remote Exa MCP endpoint (https://mcp.exa.ai/mcp) through the i |
| [akslcw/dsh-negative-ledger](https://github.com/akslcw/dsh-negative-ledger) | Host | `@akslcw/dsh-negative-ledger` | npm | 3 |  |
| [TommyFang2077/gh-tea-npm-dsh](https://github.com/TommyFang2077/gh-tea-npm-dsh) | Host | `@tommyfang/gh-tea-npm-dsh` | npm | 3 | GitHub (gh) + Gitea (tea) + npm CLIs for DeepSeek Harness (dsh): guided auth/config, issue & package tools |
| [STARDUSTLC666/dsh-docker](https://github.com/STARDUSTLC666/dsh-docker) | Host | `@stardustlc/dsh-docker` | npm | 3 | DeepSeek Harness 容器管理插件：docker_ps/logs/inspect/exec/manage 五工具，官方 subprocess 服务、argv 无 shell 注入、exec 审批门、零运行时依 |
| [jeremy9682/dsh-skill-pack](https://github.com/jeremy9682/dsh-skill-pack) | Host | `@jeremy9682/dsh-skill-pack` | npm | 3 | 11 shareable workflow skills for DeepSeek Harness: handoffs, triage, specs, tickets, wayfinding, teaching, mod |
| [dhicoc/dsh-wuyun-liuqi](https://github.com/dhicoc/dsh-wuyun-liuqi) | Host | `@dhicoc/dsh-wuyun-liuqi` | npm | 3 | 五运六气（运气学）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：31 个 SKILL.md 技能原样封装，一行 dsh plugin add 安装。 |
| [LA7-F/dsh-MyCordis](https://github.com/LA7-F/dsh-MyCordis) | Host | `dsh-mycordis` | npm | 2 | 可以让你的dsh中的“Cordis插件”变得可管理，可一键生成安装包\|Make the "Cordis plugins" in your dsh manageable and generate installation |
| [alex04130/dsh-forge](https://github.com/alex04130/dsh-forge) | Client + Host | `dsh-forge` | npm | 2 | DeepSeek Harness 扩展套件：运行时注入器、子代理派发与模型路由策略、插件市场/技能/插件管理面板、浏览器桥与 MCP 集成。 |
| [lhdrc/dsh-df-memory](https://github.com/lhdrc/dsh-df-memory) | Host | `dsh-df-memory` | npm | 2 |  |
| [maxwell-feng/dsh-tesseract-ocr](https://github.com/maxwell-feng/dsh-tesseract-ocr) | Host | `@maxwell-feng/dsh-tesseract-ocr` | npm | 2 |  |
| [morlay/better-session](https://github.com/morlay/better-session) | Client (Web UI) | `@morlay/better-session` | npm | 2 | better session |
| [Roarpeng/GraphFlow](https://github.com/Roarpeng/GraphFlow) | Host | `@roarpeng/graphflow` | npm | 2 | Local-first code knowledge graph and context harness for coding agents. MCP + DeepSeek Harness (dsh) plugin. |
| [ZihaoVistonWang/Stata-AI-Skill](https://github.com/ZihaoVistonWang/Stata-AI-Skill) | Host | `@zihaovistonwang/stata-ai-skill` | npm | 2 | Stata AI Skill Native Service: Native localhost HTTP service that lets AI agents run Stata without VS Code, No |
| [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) | Host | `@sakikotgw/pack-agent` | npm | 2 | Agent Modpack — 像装 MC 整合包一样，装你的 agent。 |
| [Fectivnfy112357/github-explore](https://github.com/Fectivnfy112357/github-explore) | Host | `github-explore` | npm | 2 | Discovery + management wrappers around gh CLI for AI coding agents. find_repos, multi-axis explore, trending,  |
| [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) | Host | `@ohmydsh/runtime` | npm | 2 |  |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Host | `dsh-plugin-codex-bridge` | npm | 2 | Bridge codex skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Host | `dsh-plugin-pi-bridge` | npm | 2 | Bridge pi skills and config into DeepSeek Harness |
| [sleepinginsummer/dsh-rtk-optimizer](https://github.com/sleepinginsummer/dsh-rtk-optimizer) | Host | `dsh-rtk-optimizer` | npm | 2 |  |
| [tc206107/dsh-open-ecosystem](https://github.com/tc206107/dsh-open-ecosystem) | Client (Web UI) | `dsh-git-autoinit` | npm | 2 |  |
| [meme-dog/dsh-plugin-finder](https://github.com/meme-dog/dsh-plugin-finder) | Host | `dsh-plugin-finder` | npm | 2 | Find and audit DeepSeek Harness (DSH) plugins inside the agent — live `dsh-plugin` topic search + source audit |
| [truelove-dreamer/dsh-plugin-git-workflow](https://github.com/truelove-dreamer/dsh-plugin-git-workflow) | Host | `dsh-plugin-git-workflow` | npm | 2 | DeepSeek Harness plugin: first-class Git workflow tools for the model — repo status, diffs, commit creation wi |
| [6kongbai/dsh-plugin-market](https://github.com/6kongbai/dsh-plugin-market) | Client (Web UI) | `dsh-plugin-market` | npm | 2 | A dsh plugin marketplace CLI: browse, install, and uninstall community plugins from the dsh-plugin GitHub topi |
| [xiehuan123/coding-coach](https://github.com/xiehuan123/coding-coach) | Client + Host | `coding-coach` | npm | 2 |  |
| [Pasumao/dsh-plugin-notify](https://github.com/Pasumao/dsh-plugin-notify) | Host | `dsh-notify` | npm | 2 | dsh插件，agent操作结束后调用系统通知，在windows托盘增加图标来启动页面和关闭后台程序 |
| [lium970320/dsh-vision-bridge](https://github.com/lium970320/dsh-vision-bridge) | Host | `@liu__min/dsh-vision-bridge` | npm | 2 | DSH 视觉桥接插件：让无视觉能力的主模型看图（会话收图 + 自动转文字 + view_image 工具） |
| [birdman1992/dsh-birdman-plugins](https://github.com/birdman1992/dsh-birdman-plugins) | Host | `@birdman1992/model-autofill` | npm | 2 | Community plugins for DeepSeek Harness (DSH): model metadata autofill and workspace artifacts view. |
| [Lanxi26/dsh-cluster](https://github.com/Lanxi26/dsh-cluster) | Host | `@lanxi266/dsh-cluster-plugin` | npm | 2 | 画布式多智能体协作插件 \| Canvas-based multi-agent cooperation plugin for DeepSeek Harness |
| [YYTbit/oh-my-dsh](https://github.com/YYTbit/oh-my-dsh) | Host | `oh-my-dsh` | npm | 2 | Multi-agent orchestration for DeepSeek Harness |
| [STARDUSTLC666/dsh-sql](https://github.com/STARDUSTLC666/dsh-sql) | Host | `dsh-sql` | npm | 2 | DeepSeek Harness 工程师级数据库插件：sql_list/query/exec/schema 四工具，SQLite/MySQL/PostgreSQL 三引擎、只读白名单、写审批门、行数钳制。· Databa |
| [wjabanjj/aifp-mcp](https://github.com/wjabanjj/aifp-mcp) | Host | `aifp-mcp` | npm | 2 | AiFP 记忆感知系统｜MCP 服务，一套记忆全 AI 共享。面向中文的 Agent 感知记忆，支持叙事链、语义纠错、感知链图扩散。兼容 DeepSeek‑Harness、Claude Code、Cursor、Codex |
| [SihanLv/dsh-literature](https://github.com/SihanLv/dsh-literature) | Host | `@shlv/dsh-literature` | npm | 2 | Literature research for DeepSeek Harness — dblp + arXiv search, authoritative BibTeX, and full-text download. |
| [Moeblack/dsh-minimal-web](https://github.com/Moeblack/dsh-minimal-web) | Host | `dsh-minimal-web` | npm | 2 | DSH 插件：极简模式（网络）preset——极简双工具编码 Agent + 网络搜索 + AGENTS.md 加载 \| Minimal-mode agent preset with web search and AG |
| [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) | Host | `@hyzyn/dsh-plugin-kit` | npm | 2 | dsh-plugin-kit is a general-purpose plugin collection for the DeepSeek Harness (DSH) Web GUI: environment vari |
| [MuYu-Zh/dsh-open-browser](https://github.com/MuYu-Zh/dsh-open-browser) | Client (Web UI) | `dsh-open-browser` | npm | 2 | 源码启动自动唤醒web ui |
| [gongyijie85/mattpocock-skills-dsh](https://github.com/gongyijie85/mattpocock-skills-dsh) | Host | `mattpocock-skills-dsh` | npm | 2 | Matt Pocock's skills for DeepSeek Harness (DSH): grilling, writing-for-agents, wait-what, TDD and more — 25 sk |
| [Alvin-Somedo/dsh-app-launcher](https://github.com/Alvin-Somedo/dsh-app-launcher) | Client (Web UI) | `dsh-app-launcher` | npm | 1 | 把 DSH Web GUI 变成"桌面应用":以独立应用窗口打开,关闭窗口即优雅退出整个 DSH 进程 |
| [kingcharleslzy-ai/dsh-honcho-memory](https://github.com/kingcharleslzy-ai/dsh-honcho-memory) | Host | `dsh-honcho-memory` | npm | 1 |  |
| [kouyichi/dsh-tui-app](https://github.com/kouyichi/dsh-tui-app) | Client + Host | `dsh-tui-app` | npm | 1 | DeepSeek Harness terminal UI plugin (Ink/React) |
| [ph4310822/dsh-x402-wallet](https://github.com/ph4310822/dsh-x402-wallet) | Client (Web UI) | `@danielng23/dsh-x402-wallet` | npm | 1 | x402 Payment wallet plugin for DeepSeek Harness |
| [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) | Host | `dsh-amber-protocol` | npm | 1 | Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overla |
| [zjsthmjialin/commercial-ui-ux-codex-skill](https://github.com/zjsthmjialin/commercial-ui-ux-codex-skill) | Client (Web UI) | `dsh-commercial-ui-ux` | npm | 1 | Installable Codex skill for commercial UI/UX/GUI design, review, repair, and implementation. |
| [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) | Client + Host | `design-playbook` | npm | 1 | Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrain |
| [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) | Host | `agent-plaza` | npm | 1 | Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes) |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | Client + Host | `dsh-atuin` | npm | 1 | dsh atuin-history: record dsh user prompts into atuin shell history |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Host | `dsh-plugin-vision-toolkit` | npm | 1 | Vision toolkit for DeepSeek Harness -- give text-only agents eyes |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Host | `dsh-plugin-code-review` | npm | 1 | Structured code review skill for DeepSeek Harness |
| [ConradLu2740/pa-dsh](https://github.com/ConradLu2740/pa-dsh) | Host | `@proactive-agent/dsh` | npm | 1 | ProactiveAgent × DeepSeek Harness 插件组：把主动记忆 + 主动建议接入 DSH（6 个 cordis 插件，引擎零重写） |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Host | `dsh-plugin-auto-docs` | npm | 1 | Auto documentation generation skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Host | `dsh-plugin-context-compressor` | npm | 1 | Context compression skill for DeepSeek Harness |
| [ophielel/deepseek-forge](https://github.com/ophielel/deepseek-forge) | Host | `dsh-devkit-browser` | npm | 1 | DeepSeek Harness 开发锻造工坊：审批守卫、开发 Skills、GitHub/浏览器能力与 Token Watch 消耗监督，装上就能干活。 |
| [minatoAI/jina-web-search-dsh-plugin](https://github.com/minatoAI/jina-web-search-dsh-plugin) | Client + Host | `dsh-jina` | npm | 1 | Jina AI tools for DeepSeek Harness: 12 model tools (web / arXiv / SSRN search, read, screenshot, embeddings, r |
| [Elohia/dsh-plugin-mm-vision](https://github.com/Elohia/dsh-plugin-mm-vision) | Host | `dsh-plugin-mm-vision` | npm | 1 |  |
| [lingtima/dsh-think-chinese](https://github.com/lingtima/dsh-think-chinese) | Host | `dsh-think-chinese` | npm | 1 | DSH 插件：让模型始终用中文进行内部推理与思考（think in Chinese）。 |
| [cnzgray/dsh-plugins](https://github.com/cnzgray/dsh-plugins) | Host | `@cnzgray/dsh-claude-auto-memory` | npm | 1 |  |
| [GZMULDY/dsh-windows-tray](https://github.com/GZMULDY/dsh-windows-tray) | Client (Web UI) | `@gzmuldyxx/dsh-windows-tray` | npm | 1 |  |
| [fan56/dsh-tui-pi](https://github.com/fan56/dsh-tui-pi) | Client (Web UI) | `@aiwayds/dsh-tui-pi` | npm | 1 | pi-style terminal UI for DeepSeek Harness (dsh) — pi-tui look & feel, dsh slash commands, GitHub light/dark th |
| [math-lrz/dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack) | Client (Web UI) | `dsh-theme-pack` | npm | 1 | 16 theme skins for the DeepSeek Harness (DSH) Web GUI - Catppuccin/Gruvbox/Everforest/Rose Pine/Solarized/Kana |
| [Hyna-hla/dsh-snapshot](https://github.com/Hyna-hla/dsh-snapshot) | Host | `dsh-snapshot` | npm | 1 |  |
| [Oliver0804/dsh-discord-bot](https://github.com/Oliver0804/dsh-discord-bot) | Host | `dsh-discord-bot` | npm | 1 | Map dsh (DeepSeek Harness) workspaces onto a Discord category — query session trajectories and live subagents, |
| [Def1ce/dsh-lan-bridge](https://github.com/Def1ce/dsh-lan-bridge) | Client (Web UI) | `dsh-lan-bridge` | npm | 1 | Fix the DeepSeek Harness web UI on phones: injects a crypto.randomUUID polyfill so it works over plain HTTP on |
| [TwistedRiCen/dsh-vision-bridge](https://github.com/TwistedRiCen/dsh-vision-bridge) | Host | `@liangdacheng/dsh-vision-bridge` | npm | 1 | DSH-native Vision Evidence bridge for text-only reasoning models with native image attachments and strict mult |
| [JIAChenyu525/dsh-explore](https://github.com/JIAChenyu525/dsh-explore) | Host | `dsh-explore` | npm | 1 |  |
| [STARDUSTLC666/dsh-ppt](https://github.com/STARDUSTLC666/dsh-ppt) | Host | `dsh-ppt` | npm | 1 | DSH 技能插件：一句话生成完整演示文稿（HTML 放映 + PPTX 导出 + manifest），5 套视觉主题，中英双语，零运行时依赖。· One prompt to a full presentation for |
| [STARDUSTLC666/dsh-flakefinder](https://github.com/STARDUSTLC666/dsh-flakefinder) | Host | `dsh-flakefinder` | npm | 1 | DSH 测试稳定性插件：重复运行测试识别 flaky 用例，历史与隔离清单，零运行时依赖。 |
| [STARDUSTLC666/dsh-cite](https://github.com/STARDUSTLC666/dsh-cite) | Host | `dsh-cite` | npm | 1 |  |
| [STARDUSTLC666/dsh-code-security](https://github.com/STARDUSTLC666/dsh-code-security) | Host | `dsh-code-security` | npm | 1 | DSH AI 代码安全审查插件：九工具确定性扫描、基线接受与 SBOM-lite，零运行时依赖。 |
| [263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) | Host | `dsh-verify` | npm | 0 |  |
| [E83737664/dsh-skills-manager](https://github.com/E83737664/dsh-skills-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [Enderfga/dsh-clawo](https://github.com/Enderfga/dsh-clawo) | Host | `@enderfga/dsh-clawo` | npm | 0 |  |
| [Lion-1209/dsh-plugin-lion-skills](https://github.com/Lion-1209/dsh-plugin-lion-skills) | Host | `dsh-plugin-lion-skills` | npm | 0 |  |
| [Linductor-alkaid/dsh_tui](https://github.com/Linductor-alkaid/dsh_tui) | Client (Web UI) | `dsh-tui` | npm | 0 |  |
| [PandaAIDD/dsh-aidd](https://github.com/PandaAIDD/dsh-aidd) | Host | `dsh-aidd` | npm | 0 |  |
| [ReachGa0/dsh-desktop](https://github.com/ReachGa0/dsh-desktop) | Host | `dsh-desktop-windows-launcher` | npm | 0 |  |
| [dylanzhangzx/dknowc-dsh](https://github.com/dylanzhangzx/dknowc-dsh) | Host | `dknowc-dsh` | npm | 0 |  |
| [jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) | Host | `dsh-jiey-browser` | npm | 0 |  |
| [kouyichi/dsh-plugins](https://github.com/kouyichi/dsh-plugins) | Host | `dsh-a2a` | npm | 0 |  |
| [liulei237136/dsh-publish-plugin](https://github.com/liulei237136/dsh-publish-plugin) | Host | `dsh-publish-plugin` | npm | 0 |  |
| [liulei237136/dsh-test-plugin](https://github.com/liulei237136/dsh-test-plugin) | Host | `dsh-test-plugin` | npm | 0 |  |
| [shifan3/dsh-approve-for-me](https://github.com/shifan3/dsh-approve-for-me) | Host | `dsh-approve-for-me` | npm | 0 |  |
| [warm-flame-core/new-project-init](https://github.com/warm-flame-core/new-project-init) | Host | `new-project-init` | npm | 0 |  |
| [zuoyunlai/lunheng-article-pipeline-dsh](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh) | Host | `lunheng-article-pipeline` | npm | 0 |  |
| [radaren/dsh-auth](https://github.com/radaren/dsh-auth) | Client (Web UI) | `dsh-auth` | npm | 0 |  |
| [weijiafu14/dsh-remote-sandbox](https://github.com/weijiafu14/dsh-remote-sandbox) | Host | `dsh-remote-sandbox` | npm | 0 |  |
| [Seryta/dsh-image-bridge](https://github.com/Seryta/dsh-image-bridge) | Host | `dsh-image-bridge` | npm | 0 |  |
| [sleepinginsummer/dsh-hashline-edit-pro](https://github.com/sleepinginsummer/dsh-hashline-edit-pro) | Host | `dsh-hashline-edit-pro` | npm | 0 |  |
| [sleepinginsummer/dsh-fff](https://github.com/sleepinginsummer/dsh-fff) | Host | `dsh-fff` | npm | 0 |  |
| [truelove-dreamer/dsh-plugin-security-audit](https://github.com/truelove-dreamer/dsh-plugin-security-audit) | Host | `dsh-plugin-security-audit` | npm | 0 |  |
| [truelove-dreamer/dsh-plugin-hooks](https://github.com/truelove-dreamer/dsh-plugin-hooks) | Host | `dsh-plugin-hooks` | npm | 0 |  |
| [truelove-dreamer/dsh-plugin-recall](https://github.com/truelove-dreamer/dsh-plugin-recall) | Host | `dsh-plugin-recall` | npm | 0 |  |
| [ohoyour/dsh-file-mention](https://github.com/ohoyour/dsh-file-mention) | Client (Web UI) | `@ohoyo/dsh-file-mention` | npm | 0 |  |
| [ikashana/dsh-notify](https://github.com/ikashana/dsh-notify) | Host | `dsh-notify` | npm | 0 |  |
| [zhengjy01/dsh-notify](https://github.com/zhengjy01/dsh-notify) | Host | `dsh-notify` | npm | 0 |  |
| [alvinunreal/openpets](https://github.com/alvinunreal/openpets) | Unattributed | `@open-pets/dsh` | npm | 1087 | Local first, desktop companion platform with animated pets, plugin SDK and coding-agent integrations. |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Unattributed | `dsh-notifier` | npm | 49 | Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (tel |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | Unattributed | `@dsh-suite/all` | npm | 41 | The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin st |
| [Xuxchloris/deepseek-harness-sdr-plugin](https://github.com/Xuxchloris/deepseek-harness-sdr-plugin) | Unattributed | `@xuxchloris/dsh-sdr` | npm | 24 | DeepSeek Harness 的 SDR 数字员工插件：九阶段外贸获客 SOP、结构性人工审批、客户去重、持久化知识检索与审计日志，默认 dry-run 安全演示。 |
| [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) | Unattributed | `dsh-desktop-pet` | npm | 17 | DeepSeek Harness：鲸鱼娘桌宠！ |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | Unattributed | `@loongsuite/dsh-plugin` | npm | 14 | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM ca |
| [2672243194/dsh-read-url](https://github.com/2672243194/dsh-read-url) | Unattributed | `dsh-read-url` | npm | 11 | DeepSeek Harness URL reader: fetch any page and return clean main-content text/Markdown. Auto charset (GBK/GB2 |
| [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) | Unattributed | `@dsh-trading/bundle` | npm | 9 | Trading research workbench for DeepSeek Harness (dsh): typed market-data seam, deterministic indicators, inter |
| [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | Unattributed | `dsh-file-claim` | npm | 6 | File claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/relea |
| [Alan2Z/dsh-speak](https://github.com/Alan2Z/dsh-speak) | Unattributed | `dsh-speak` | npm | 5 | 一种能让你的harness开口说话的方案/Make your AI harness speak — a verified voice-announcement solution |
| [ayahunter/dsh-trail](https://github.com/ayahunter/dsh-trail) | Unattributed | `dsh-trail-bundle` | npm | 5 | DeepSeek Harness Web 轨迹页签的新手友好视图插件（out-of-tree bundle）：把事件流变成人人能看懂的故事线 |
| [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) | Unattributed | `dsh-slack` | npm | 4 | DeepSeek Harness Slack 插件：slack_notify/channels/inbox/reply 四工具，Socket Mode 免公网回调收消息，收件箱队列 + 线程回复，支持自定义 slackA |
| [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) | Unattributed | `dsh-plugin-audit` | npm | 4 | Security audit for DeepSeek Harness plugins: static permission profile with file/line evidence + a runtime sen |
| [STARDUSTLC666/dsh-remotion](https://github.com/STARDUSTLC666/dsh-remotion) | Unattributed | `dsh-remotion` | npm | 4 | DSH 视频创作技能插件：注册 Remotion 官方移植技能（React 编程式视频，38 个规则文件），安装即用。· Remotion skill plugin for DeepSeek Harness. |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Unattributed | `dsh-plugin-cost-tracker` | npm | 3 | Token cost tracker for DeepSeek Harness |
| [peach0x33a/dsh-open-browser](https://github.com/peach0x33a/dsh-open-browser) | Unattributed | `dsh-open-browser` | npm | 3 |  |
| [LvienOeria/dsh-launcher](https://github.com/LvienOeria/dsh-launcher) | Unattributed | `dsh-launcher` | npm | 3 | 一个轻量的 dsh（DeepSeek Harness）插件：安装一个终端命令，输入 dsh-go 即可启动 harness 并自动打开浏览器。零依赖，约 9 KB。（桌面双击版在独立的 dsh-desktop-launc |
| [jkrandom-sudo/dsh-ci-doctor](https://github.com/jkrandom-sudo/dsh-ci-doctor) | Unattributed | `dsh-ci-doctor` | npm | 3 | CI failure, diagnosed before you open the logs — DeepSeek Harness plugin that watches GitHub Actions for new f |
| [STARDUSTLC666/dsh-hyperframes](https://github.com/STARDUSTLC666/dsh-hyperframes) | Unattributed | `dsh-hyperframes` | npm | 3 | DSH 视频创作技能插件：注册 HyperFrames by HeyGen 官方移植技能五件套（HTML 写视频/CLI/注册表/网址转视频/GSAP），安装即用。· HyperFrames skill plugin f |
| [wanghehe123/dsh-Friend](https://github.com/wanghehe123/dsh-Friend) | Unattributed | `@wishp3/dsh-friend-all` | npm | 2 | 人格化伴侣插件 for DeepSeek Harness：角色卡、语音、Live2D、本地记忆与工作陪伴。 |
| [MicroHEROX/dsh-Kimi-WebBridge](https://github.com/MicroHEROX/dsh-Kimi-WebBridge) | Unattributed | `dsh-kimi-webbridge` | npm | 2 | Kimi WebBridge for DeepSeek Harness — a third-party dsh plugin bundle that turns the local Kimi WebBridge daem |
| [LvienOeria/dsh-desktop-launcher](https://github.com/LvienOeria/dsh-desktop-launcher) | Unattributed | `dsh-desktop-launcher` | npm | 2 | 一个轻量的 dsh（DeepSeek Harness）插件：安装桌面双击启动器 —— macOS 上是带官方鲸鱼图标的 dsh.app，Linux 上是 .desktop 入口。零依赖，约 147 KB。（终端命令在独立 |
| [dongsheng123132/dsh-terminal](https://github.com/dongsheng123132/dsh-terminal) | Unattributed | `dsh-terminal` | npm | 2 | Persistent interactive terminal mode for DeepSeek Harness |
| [yangyongzhen/dsh-notify](https://github.com/yangyongzhen/dsh-notify) | Unattributed | `dsh-notify` | npm | 2 | Task-completion notifications for DeepSeek Harness: ServerChan / DingTalk / Feishu / generic webhooks. dsh plu |
| [itr-del/dsh-feishu](https://github.com/itr-del/dsh-feishu) | Unattributed | `dsh-feishu` | npm | 2 | Feishu (Lark) IM bridge for DeepSeek Harness (dsh) — a cordis plugin |
| [STARDUSTLC666/dsh-voice](https://github.com/STARDUSTLC666/dsh-voice) | Unattributed | `dsh-voice` | npm | 2 | DeepSeek Harness 语音双件套插件：voice_tts（edge-tts 协议免费微软神经语音合成，Sec-MS-GEC 本地 DRM 生成）/ voice_stt（OpenAI 兼容 ASR）/ voic |
| [AmeKrance/anan-thermal-monitor](https://github.com/AmeKrance/anan-thermal-monitor) | Unattributed | `anan-thermal-monitor` | npm | 2 | 紫白桌宠温度监控：CPU/内存/GPU/NVMe 实时温度 + 硬件信息 · DeepSeek Harness (DSH) 插件，支持 dsh plugin add 一键安装 |
| [xinyuehtx/dsh-plugin-hooks-ordering](https://github.com/xinyuehtx/dsh-plugin-hooks-ordering) | Unattributed | `@tengxiaohtx/dsh-plugin-hooks-ordering` | npm | 1 | 为 deepseek harness 的 waterfall 和 serial 进行确定性 hooks 监听排序 |
| [zjsthmjialin/pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill) | Unattributed | `dsh-pdf-background-gray` | npm | 1 | Codex skill for removing gray backgrounds from scanned PDFs without changing resolution or anti-aliased text. |
| [zjsthmjialin/inspiration-deck-workshop](https://github.com/zjsthmjialin/inspiration-deck-workshop) | Unattributed | `dsh-inspiration-deck-workshop` | npm | 1 | Inspiration Deck Workshop: local HTML presentation skill and template toolkit |
| [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | Unattributed | `dsh-batch-regression` | npm | 1 | DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论 |
| [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | Unattributed | `dsh-screenshot-diff` | npm | 1 | DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具 |
| [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | Unattributed | `dsh-port-guard` | npm | 1 | DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置 |
| [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | Unattributed | `dsh-bisect-debug` | npm | 1 | DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因 |
| [hahaha-taotao/dsh-oauth-api](https://github.com/hahaha-taotao/dsh-oauth-api) | Unattributed | `dsh-oauth` | npm | 1 | DeepSeek Harness (dsh) out-of-tree OAuth plugin for Grok/xAI, Codex, and Claude Code. Community plugin, not of |
| [devmom/dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) | Unattributed | `dsh-trajectory-debug-bundle` | npm | 1 |  |
| [Freakz2z/dsh-catgirl-plugin](https://github.com/Freakz2z/dsh-catgirl-plugin) | Unattributed | `dsh-catgirl-plugin` | npm | 1 | A token-efficient persona runtime for DeepSeek Harness. 把人格留在界面，把智能留给模型。Measured: -67% input tokens, -66% cach |
| [ethan0084/dsh-cockpit](https://github.com/ethan0084/dsh-cockpit) | Unattributed | `dsh-cockpit` | npm | 1 | A desktop-style project and AI workbench plugin for DeepSeek Harness |
| [YZz-S/dsh-notifier](https://github.com/YZz-S/dsh-notifier) | Unattributed | `dsh-notifier` | npm | 1 | Community plugins for DeepSeek Harness (DSH) Web GUI: system notifier. Plain JavaScript, no build required. |
| [AATINF/pdf-extractor-dsh-plugin](https://github.com/AATINF/pdf-extractor-dsh-plugin) | Unattributed | `pdf-extractor-dsh-plugin` | npm | 1 | 让 AI Agent 直接处理 PDF：提取/拆分/合并/旋转，100% 纯本地执行。DeepSeek Harness 插件，三种接入方式：DSH Skill / MCP Server / 原生 Cordis 插件。\| |
| [ct188579/dsh-a-stock-select](https://github.com/ct188579/dsh-a-stock-select) | Unattributed | `dsh-a-stock-select` | npm | 1 | 基于 a-stock-data（A股数据源） 开发的 DSH 技能插件：将 a-stock-data V3.6.1 的全部 47 个数据端点内嵌合并，叠加四大策略筛选逻辑、持仓诊断流程与强制风控纪律，做成自包含的 SKI |
| [shrekcg/dsh-im-channel](https://github.com/shrekcg/dsh-im-channel) | Unattributed | `dsh-im-channel` | npm | 1 | 将 DeepSeek Harness 接入飞书/Lark 的双向通道：持久会话、群聊、流式卡片、40 个飞书 MCP 工具 |
| [040822/dsh-codex-approval](https://github.com/040822/dsh-codex-approval) | Unattributed | `dsh-codex-approval` | npm | 1 | dsh-codex-approval插件：仿照Codex的AI自动审批，规则+AI三级风险评估自动放行/拒绝，让dsh沙箱审批自动化 |
| [DLive/dsh-qqbot-community](https://github.com/DLive/dsh-qqbot-community) | Unattributed | `dsh-qqbot-community` | npm | 1 | 为 DeepSeek Harness 提供 QQ 官方机器人的接入能力 |
| [myfire2014/dsh-admin-gateway](https://github.com/myfire2014/dsh-admin-gateway) | Unattributed | `dsh-admin-gateway` | npm | 1 | dsh-admin-gateway DeepSeek Harness (dsh) 管理员验证网关插件。 只需一个绑定在 Cloudflare 的域名 |
| [Pidreamleaves/dsh-pi-kit](https://github.com/Pidreamleaves/dsh-pi-kit) | Unattributed | `dsh-pi-kit` | npm | 1 | DSH使用体验优化包-UI has been i18n (zh/en)。自动审核(auto-review)、提示音(systematic notification)，为你把关系统权限，持续推进；需要你审批、回答或后台任务 |
| [xun404/dsh-pihuo-plugins](https://github.com/xun404/dsh-pihuo-plugins) | Unattributed | `@pihuo/dsh-pihuo` | npm | 1 | PiHuo: DeepSeek Harness plugins that run local ACP processes as chat workers |
| [A-G-guy/dsh-plus](https://github.com/A-G-guy/dsh-plus) | Unattributed | `@dsh-plus/bundle-main` | npm | 0 |  |
| [Leo-Ayh-Oday/dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) | Unattributed | `@leooday/dsh-bundle` | npm | 0 |  |
| [qschen86/dsh-telegram-bridge](https://github.com/qschen86/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 |  |
| [ray062/dsh-obvious-grid](https://github.com/ray062/dsh-obvious-grid) | Unattributed | `dsh-obvious-grid` | npm | 0 |  |
| [lougyang/dsh-voice-input](https://github.com/lougyang/dsh-voice-input) | Unattributed | `dsh-voice-input` | npm | 0 |  |
| [LnsiAxe/dsh-web-restart](https://github.com/LnsiAxe/dsh-web-restart) | Unattributed | `@lnsiaxe/dsh-web-restart` | npm | 0 |  |
| [IriskaDev/dsh-desktop](https://github.com/IriskaDev/dsh-desktop) | Unattributed | `dsh-desktop` | npm | 0 |  |
| [x2802490130-prog/dsh-lan-pass](https://github.com/x2802490130-prog/dsh-lan-pass) | Unattributed | `dsh-lan-pass` | npm | 0 |  |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Host | `dsh-ouroboros` | Git only | 5584 | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result ne |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Host | `treg-dsh` | Git only | 511 | OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Client + Host | `superdesign-dsh` | Git only | 436 | The design skill for Claude Code, Cursor and any coding agent. Stop shipping AI-slop UI: turn it into shippabl |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | Host | `dsh-harmony-next` | Git only | 332 | 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, archit |
| [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) | Host | `easyeda-agent-dsh` | Git only | 250 | 嘉立创EDA专业版(EasyEDA Pro)自动化：给 AI harness 装上画板的「手」—— 一套 typed 原理图/PCB 动作，CLI / Agent Skill / stdio MCP 三形态融合接入。承接 |
| [taxueseek/argo](https://github.com/taxueseek/argo) | Host | `@taxueseek/argo-dsh` | Git only | 104 | 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。 |
| [labring/sealos-skills](https://github.com/labring/sealos-skills) | Host | `sealos` | Git only | 72 | AI agent skills for Sealos — deploy any project, provision databases, object storage & more with one command.  |
| [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp) | Host | `ru-marketplace-mcp-dsh` | Git only | 66 | Девять российских маркетплейсов и китайский Taobao как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский  |
| [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) | Host | `dsh-greet-tool` | Git only | 35 | An Agent Skills skill for developing DeepSeek Harness (DSH) plugins（开发 DSH 插件的 Agent Skill）——插件/服务/事件/工具/LLM 适 |
| [upstash/skills](https://github.com/upstash/skills) | Host | `upstash-skills` | Git only | 19 | Collection of skills for Upstash |
| [Jungod1121/dsh-anchored-standard](https://github.com/Jungod1121/dsh-anchored-standard) | Host | `dsh-anchored-standard` | Git only | 19 | Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap (bash+read), then full Standard tools after the f |
| [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Host | `dsh-plugin-development` | Git only | 14 | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional profile-installabl |
| [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) | Host | `dsh-design-skills` | Git only | 14 | Design aesthetics skill pack for DeepSeek Harness (DSH) - keeps vibe-coded websites away from the AI look. 6 s |
| [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Host | `dsh-media-skills` | Git only | 13 | Free vision & image generation for DeepSeek Harness — paste an image into any chat, even text-only sessions. G |
| [mudden2380078550-creator/write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) | Host | `write-chinese-long-screenplay` | Git only | 10 | 中文电影与剧集长剧本写作 skill |
| [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Client + Host | `dsh-godot-skill` | Git only | 9 | Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime |
| [creght-dev/skills](https://github.com/creght-dev/skills) | Host | `creght-skills` | Git only | 8 | Codex and agent skills for Cregh. |
| [ConsoleSun/Gemini-Eyes](https://github.com/ConsoleSun/Gemini-Eyes) | Host | `dsh-gemini-eyes-bundle` | Git only | 8 |  |
| [SummerSec/SumSec-Skills](https://github.com/SummerSec/SumSec-Skills) | Host | `sumsec-skills` | Git only | 7 | SummerSec 个人自定义Skill仓库 |
| [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) | Host | `@leechen298/code2skill` | Git only | 7 | Generate Function, MCP, Agent Skill, and offline test packages from existing code; installable as a DeepSeek H |
| [xiongjiamu/dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) | Host | `dsh-atomgit` | Git only | 7 | AtomGit plugin bundle for DeepSeek Harness (dsh): atomgit-skills workflows + ag CLI + platform-hosted AtomGit/ |
| [Chu-Xin-r/wanjiqi-meme](https://github.com/Chu-Xin-r/wanjiqi-meme) | Host | `wanjiqi-meme` | Git only | 7 | 玩机器(6657直播间)烂梗 Skill：22771条真实弹幕烂梗蒸馏成AI Skill，生成玩机器式弹幕/解说吐槽/CS×DOTA双料梗 |
| [GuangminJu/mellos-mapping](https://github.com/GuangminJu/mellos-mapping) | Client + Host | `mellos-mapping-dsh` | Git only | 6 | A live layered dependency map for bottom-up development — MCP server + terminal pane for Claude Code, Codex CL |
| [Noob-stupid/dsh-github-login](https://github.com/Noob-stupid/dsh-github-login) | Host | `dsh-github-login` | Git only | 6 | DeepSeek Harness 生态的 GitHub 可视化登录工具（零终端）：设备码流程，令牌同步 gh CLI \| Visual GitHub login for the DSH ecosystem - no t |
| [Cavan-Ou/hermes-dsh-collab](https://github.com/Cavan-Ou/hermes-dsh-collab) | Host | `hermes-dsh-collab` | Git only | 6 | Battle-tested multi-agent collaboration playbook for DeepSeek Harness: model-tier routing, spec discipline, gi |
| [Asher-2000/dsh-expert-mode](https://github.com/Asher-2000/dsh-expert-mode) | Host | `dsh-expert-mode` | Git only | 6 | DSH (DeepSeek Harness) 专家模式 agent preset — 首席协调官 + 16位领域专家子代理 Expert-mode preset for DeepSeek Harness |
| [Classicoke/cleverer-dsh](https://github.com/Classicoke/cleverer-dsh) | Host | `cleverer-dsh` | Git only | 6 | DSH execution-discipline plugin suite: 11 plugins + 6 skills, zero dependencies, 426 tests. 让 DeepSeek Harness |
| [Bernardxu123/dsh-mobile-gate](https://github.com/Bernardxu123/dsh-mobile-gate) | Client (Web UI) | `dsh-mobile-gate` | Git only | 5 | LAN mobile gateway for DeepSeek Harness (DSH): first-visit approval, per-device tokens, rate limiting, mobile  |
| [songoao25/dsh-virtual-product-team](https://github.com/songoao25/dsh-virtual-product-team) | Host | `dsh-virtual-product-team` | Git only | 5 | Product Team Mode - a DeepSeek Harness agent preset: user-led conversation with a virtual product team (PM to  |
| [moguiyu/dsh-tavily](https://github.com/moguiyu/dsh-tavily) | Host | `dsh-tavily-workspace` | Git only | 5 | Tavily-powered optional search tool for DeepSeek Harness (rc.7 plugin management): multi-key rotation/failover |
| [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | Client + Host | `dsh-desk-pet` | Git only | 4 | macOS desk pet for DeepSeek Harness: a real always-on-top window that clears fullscreen Spaces, six states dri |
| [wangzhuo-coding/geo-content-optimizer](https://github.com/wangzhuo-coding/geo-content-optimizer) | Host | `@dsh-external/dsh-plugin-geo-content-optimizer` | Git only | 4 | GEO生成式引擎优化智能体 — 7类关键词+七层架构+EE-A-T权威框架+8维度降痕改写 |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | Host | `@zerohackz/dsh-openflowframes` | Git only | 4 | Video Frame Interpolation for Windows |
| [fatmo666/Caushell](https://github.com/fatmo666/Caushell) | Host | `caushell-dsh-bash` | Git only | 4 | Compiler-style pre-execution safety analysis for Harness shell actions. |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | Host | `@detpecca/dsh-llm-wiki` | Git only | 4 |  |
| [libinyam/dsh-vision-provider](https://github.com/libinyam/dsh-vision-provider) | Client + Host | `dsh-vision-provider` | Git only | 4 | Config-only DeepSeek Harness bundle for OpenAI-compatible vision models. |
| [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) | Client + Host | `dsh-auto` | Git only | 4 | Auto Approve with Audit Agent |
| [bwndlct/dsh-session-audit](https://github.com/bwndlct/dsh-session-audit) | Host | `dsh-session-audit` | Git only | 4 | Session execution analytics and audit reports for DeepSeek Harness — see how your agent actually worked |
| [seamas0825-lab/dsh-youmind-plugin](https://github.com/seamas0825-lab/dsh-youmind-plugin) | Host | `dsh-youmind-plugin` | Git only | 4 | YouMind OpenAPI tools and skill bundle for DeepSeek Harness |
| [cdxiaodong/dsh-guardian](https://github.com/cdxiaodong/dsh-guardian) | Host | `dsh-guardian` | Git only | 4 |  |
| [ztl34245881-commits/dsh-task-planner](https://github.com/ztl34245881-commits/dsh-task-planner) | Host | `dsh-task-planner` | Git only | 4 | Task planning with experience muscle-memory for DeepSeek Harness: condition-reflex recall + LLM capability mat |
| [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Host | `dsh-plugin-call-me` | Git only | 4 | Your DeepSeek Harness agent rings your actual phone: it asks out loud, you answer out loud, and what you said  |
| [yzd6552-commits/dsh-browseruse](https://github.com/yzd6552-commits/dsh-browseruse) | Host | `dsh-browseruse` | Git only | 4 | browser-use style browser automation plugin for DeepSeek Harness: drives a dedicated Chrome instance (persiste |
| [Cavan-Ou/dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) | Host | `dsh-observation-journal` | Git only | 4 | Zero-touch runtime telemetry for DeepSeek Harness: every session writes its own report card (task/model/tools/ |
| [HubaKing/dsh-community-plugins](https://github.com/HubaKing/dsh-community-plugins) | Host | `dsh-community-plugins` | Git only | 4 | DeepSeek Harness (dsh) plugin: registers a global skill that teaches agents how to discover, evaluate and inst |
| [Nwflower/dsh-weneed](https://github.com/Nwflower/dsh-weneed) | Host | `dsh-weneed` | Git only | 4 | 让dsh稳定触发We Need思维链，提高模型能力。 |
| [cdxiaodong/dsh-island](https://github.com/cdxiaodong/dsh-island) | Host | `dsh-island` | Git only | 4 | 把 DeepSeek Harness(DSH) agent 实时状态桥接到 CodeIsland 刘海面板 — sessions/tools/approvals on the Dynamic Island |
| [534119219/dsh-custom-provider-reasoning](https://github.com/534119219/dsh-custom-provider-reasoning) | Host | `dsh-custom-provider-reasoning` | Git only | 3 | dsh 插件：让自定义提供方（pi-ai 手写路由）的所有模型都能选择思考强度（推理等级），选择经原厂适配器真正发往线上。A dsh plugin giving every custom-provider model s |
| [ChengxiuCDP/dsh-plugin-advisor](https://github.com/ChengxiuCDP/dsh-plugin-advisor) | Host | `dsh-plugin-advisor` | Git only | 3 |  |
| [kobenfang/bigA](https://github.com/kobenfang/bigA) | Host | `@kobenfang/dsh-biga` | Git only | 3 | openclaw-skills BigA · A股智能选股（选股分析·量化交易·股票池） |
| [watericetangcw/academic-research-graph](https://github.com/watericetangcw/academic-research-graph) | Host | `dsh-academic-research-graph` | Git only | 3 | A SKILL that turns one paper into a living research map. |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | Host | `deepseek-harness-plugin-mcp` | Git only | 3 | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Client (Web UI) | `@dsh-external/dsh-web-skins` | Git only | 3 | DSH 换肤插件镜像 + 夕港（harbor）皮肤 \| Mirror of dsh-external/dsh-skins + harbor (夕港) dusk-harbor skin |
| [zhangzujian/dsh-same-mode-sandbox-noop](https://github.com/zhangzujian/dsh-same-mode-sandbox-noop) | Host | `@zhangzujian/dsh-same-mode-sandbox-noop` | Git only | 3 | DSH compatibility plugin for redundant same-mode sandbox escalation requests |
| [zimai233/dsh-adhd-copilot](https://github.com/zimai233/dsh-adhd-copilot) | Host | `dsh-adhd-copilot` | Git only | 3 | ADHD behavioral coaching skill for DeepSeek Harness. Guides readers through task execution - breaks tasks into |
| [zeroa234/dsh-preset-minimal-windows](https://github.com/zeroa234/dsh-preset-minimal-windows) | Host | `@dsh-external/dsh-tool-gitbash` | Git only | 3 | Minimal Windows agent preset + Git Bash tool for DeepSeek Harness: gitbash & pwsh & str_replace_editor, drop-i |
| [jinguanghai/deepseek-harness-forge-plugins](https://github.com/jinguanghai/deepseek-harness-forge-plugins) | Host | `deepseek-harness-forge-plugins` | Git only | 3 | Forge-plus: math/logic/regex/eprover/system/repair gates + TCM diagnosis + memory recall plugins for DeepSeek  |
| [YYTbit/oh-my-deepseek-harness](https://github.com/YYTbit/oh-my-deepseek-harness) | Host | `oh-my-deepseek-harness` | Git only | 3 | Multi-agent orchestration for DeepSeek Harness |
| [cdxiaodong/dsh-llm-inspector](https://github.com/cdxiaodong/dsh-llm-inspector) | Host | `dsh-llm-inspector` | Git only | 3 |  |
| [xuboboo/dsh-grok-geo](https://github.com/xuboboo/dsh-grok-geo) | Host | `dsh-grok-geo` | Git only | 3 | DSH (DeepSeek Harness) plugin bundle: grok-geo GEO brand audit agent skill - AI-search visibility, recommendat |
| [Wechsels/dsh-zotero-wiki](https://github.com/Wechsels/dsh-zotero-wiki) | Host | `dsh-zotero-wiki` | Git only | 3 | DeepSeekHarness × Zotero 插件：自动同步文献库，MinerU 解析 PDF，DeepSeek 全文阅读生成结构化笔记，编译成可检索的 Obsidian LLM Wiki。 |
| [wuykjl/dsh-equip-engine](https://github.com/wuykjl/dsh-equip-engine) | Host | `dsh-equip-engine` | Git only | 3 |  |
| [BotonJ/dsh-remote-link](https://github.com/BotonJ/dsh-remote-link) | Client + Host | `dsh-remote-link` | Git only | 3 | Authenticated remote gateway for DeepSeek Harness: QR/HMAC pairing, cookie sessions, mDNS, fork_session tool.  |
| [shinjiyu/dsh-plugin-multimodal](https://github.com/shinjiyu/dsh-plugin-multimodal) | Host | `dsh-plugin-multimodal` | Git only | 3 | Vision sidecar for DeepSeek Harness: accept pasted images on text-only models. |
| [MJorgin/dsh-agent-conductor](https://github.com/MJorgin/dsh-agent-conductor) | Client + Host | `dsh-agent-conductor` | Git only | 3 | ⚡ DSH 指挥家（动态插件/热更新版）：在会话里派活给 11 种外部 agent CLI（Codex/Claude Code/TraeCode…），cordis_define 秒级安装，不碰 profile。 |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | Host | `dsh-apex-standard` | Git only | 2 | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [kobenfang/ListForm](https://github.com/kobenfang/ListForm) | Host | `@kobenfang/dsh-listform` | Git only | 2 | openclaw - skills :　List · 智能表单（万能信息记录·智能记事本·智能账单）- Smart Form & Notes |
| [redfox-data/redfox-community-dsh](https://github.com/redfox-data/redfox-community-dsh) | Host | `redfox-community-dsh` | Git only | 2 | The official bundle plugin package of DSH (DeepSeek Harness) from RedFoxHub: Over 100 social media data skills |
| [SummerSec/semantic-linter](https://github.com/SummerSec/semantic-linter) | Host | `semantic-linter` | Git only | 2 | 一款面向 LLM 指令文件的插件和命令行工具，用于检测语义边界过宽的用词，并提供受保护的 Hook、项目级本地规则注入，以及针对 Skill、Prompt 和 Agent 的语义陷阱检查。 |
| [WeirdSky924/project-change-router-skill](https://github.com/WeirdSky924/project-change-router-skill) | Host | `project-change-router-skill` | Git only | 2 | Project-level change routing and reuse governance for AI coding agents. Helps Codex and Claude Code find the r |
| [drowned-fish1/deepseek-harness-skillx](https://github.com/drowned-fish1/deepseek-harness-skillx) | Host | `dsh-skillx` | Git only | 2 | DeepSeek Harness plugin for safely discovering, auditing, and adopting external Agent Skills — prompt-injectio |
| [zsxh1990/pr-genius](https://github.com/zsxh1990/pr-genius) | Host | `pr-genius` | Git only | 2 | PR Genius — 提交前改进顾问 + 大型开源项目 PR 知识库 |
| [Samuka007/dsh-nix](https://github.com/Samuka007/dsh-nix) | Client (Web UI) | `@dsh-nix/tui-core` | Git only | 2 | Nix-native packaging for DeepSeek Harness (dsh) |
| [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) | Host | `@wellorbetter/dsh-product-delivery-workflow` | Git only | 2 | 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (resear |
| [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) | Host | `dsh-mimo-vision-hint` | Git only | 2 | DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection |
| [songqikong/dash](https://github.com/songqikong/dash) | Client + Host | `dash-tui` | Git only | 2 | DASH — Deepseek Agentic Service Harness, a TUI Plugin of Deepseek Harness |
| [Miku196/dsh-tokensave](https://github.com/Miku196/dsh-tokensave) | Host | `dsh-tokensaver` | Git only | 2 | DSH 插件：tokensave 语义图 cli 直连——自动索引 + 更新检测，让 AI 用语义查询代替暴力 grep/读文件，大幅省 token |
| [Tostoevsky/TsienHsueShen](https://github.com/Tostoevsky/TsienHsueShen) | Host | `dsh-tsien-hsue-shen` | Git only | 2 | 钱学森《工程控制论》全书蒸馏的 DeepSeek Harness 方法论技能插件 \| A DeepSeek Harness skill plugin distilled from Qian Xuesen's Engin |
| [2303572348/deepseek-harness-memory](https://github.com/2303572348/deepseek-harness-memory) | Host | `deepseek-harness-memory` | Git only | 2 |  |
| [brittanistrehlowll-oss/dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura) | Client + Host | `dsh-pet-shura` | Git only | 2 | 修罗小脑斧 — animated desktop pet for the DeepSeek Harness (DSH) web surface: v2 spritesheet animation, drag & drop |
| [superclaude1/dsh-vision-android](https://github.com/superclaude1/dsh-vision-android) | Client (Web UI) | `dsh-vision-android` | Git only | 2 | DeepSeek Harness plugin: multimodal vision (OpenAI-compatible) + Android adb UI automation for real-tap mobile |
| [lsz-asd/dsh-plugin-device-info](https://github.com/lsz-asd/dsh-plugin-device-info) | Host | `@huanlin/dsh-plugin-device-info` | Git only | 2 | Read-only Windows device info tools for DeepSeek Harness: 12 win_* tools (time, system, CPU, memory, disk, GPU |
| [Bxfjjb/Deepseek-Harness-plug](https://github.com/Bxfjjb/Deepseek-Harness-plug) | Host | `dsh-model-stage-router` | Git only | 2 | 我的dsh插件 |
| [tjxj/dsh-wanghong-handwritten-ppt](https://github.com/tjxj/dsh-wanghong-handwritten-ppt) | Host | `dsh-wanghong-handwritten-ppt` | Git only | 2 | 王虹学术手写风 PPT Skill for DeepSeek Harness · Notability-style HTML slides and PNG export |
| [niuniu-869/dsh-plugin-cas-kb](https://github.com/niuniu-869/dsh-plugin-cas-kb) | Host | `dsh-plugin-cas-kb` | Git only | 2 | DeepSeek Harness bundle: article-level Chinese accounting standards (CAS / ASSE) and tax law lookup, plus a sk |
| [LeemanCheung/dsh-agent-preset-recommender](https://github.com/LeemanCheung/dsh-agent-preset-recommender) | Host | `dsh-agent-preset-recommender` | Git only | 2 | Privacy-safe local Codex, Claude Code, WorkBuddy and CodeBuddy activity scanner that recommends DSH agent pres |
| [xuboboo/dsh-xiaohongshu-viral-note](https://github.com/xuboboo/dsh-xiaohongshu-viral-note) | Host | `dsh-xiaohongshu-viral-note` | Git only | 2 | DSH (DeepSeek Harness) plugin bundle: Xiaohongshu/RED viral-note agent skill - hot-note research, note generat |
| [homily707/dsh-session-header](https://github.com/homily707/dsh-session-header) | Host | `dsh-session-header` | Git only | 2 |  |
| [akira399/dsh-guardian](https://github.com/akira399/dsh-guardian) | Host | `dsh-guardian` | Git only | 2 | DeepSeek Harness task-protection plugin: preflight scanner (catches missing inject declarations that crash the |
| [ook826092-cloud/dsh-mobile-css](https://github.com/ook826092-cloud/dsh-mobile-css) | Client (Web UI) | `dsh-mobile-css` | Git only | 2 |  |
| [swaylq/dsh-digipet](https://github.com/swaylq/dsh-digipet) | Host | `dsh-digipet` | Git only | 2 | 在 DeepSeek Harness 里孵一只数码兽：吃你的真实工作长大，数码宝贝式分支进化，零 token、模型不知道它存在 \| Digimon-style raising game for DSH — feeds  |
| [Jyleaves/dsh-win-bash-fix](https://github.com/Jyleaves/dsh-win-bash-fix) | Host | `@jyleaves/dsh-win-bash-fix` | Git only | 2 | Windows Git Bash fix for DeepSeek Harness (dsh): MSYS sandbox conflict + terminal inspector, with the minimal- |
| [aerince/dsh-models-dev-reasoning](https://github.com/aerince/dsh-models-dev-reasoning) | Host | `dsh-models-dev-reasoning` | Git only | 2 | Add models.dev reasoning levels to unconfigured third-party DeepSeek Harness models. |
| [aerince/dsh-active-context-pruning](https://github.com/aerince/dsh-active-context-pruning) | Host | `dsh-active-context-pruning` | Git only | 2 | Model-authored context pruning for DeepSeek Harness through the official compaction API. |
| [MeowTnT3r/catalog-capabilities-zh](https://github.com/MeowTnT3r/catalog-capabilities-zh) | Host | `catalog-capabilities-zh` | Git only | 1 | 一个面向 Codex 的公开 skill：编排当前 Agent 已有的可信安装器，并为 skills、插件和市场能力维护一份有来源依据的中文说明目录 |
| [calwang414/my-dsh-plugins](https://github.com/calwang414/my-dsh-plugins) | Host | `@calwang414/dsh-cdp-browser` | Git only | 1 |  |
| [kobenfang/Eyes](https://github.com/kobenfang/Eyes) | Host | `@kobenfang/dsh-eyes` | Git only | 1 | openclaw - skills : Eyes · 大眼看世界（全球热点·国际新闻·市场分析）- Global News Monitor |
| [kobenfang/FruitPi](https://github.com/kobenfang/FruitPi) | Host | `@kobenfang/dsh-fruitpi` | Git only | 1 | openclaw - skills : Fruit Pi · 水果派（全球水果实时价格） |
| [lemonorangeapple/JuneAgent](https://github.com/lemonorangeapple/JuneAgent) | Host | `june-agent` | Git only | 1 | A Persona and Skills Set for My Daily Use. For Deepseek Harness and Claude Code. |
| [y0urday/dsh-arcgis-pro-bridge](https://github.com/y0urday/dsh-arcgis-pro-bridge) | Host | `dsh-arcgis-pro-bridge` | Git only | 1 | ArcGIS Pro bridge plugin for DeepSeek Harness — tools exposed as mcp__arcgis__* |
| [addxing/function-testing](https://github.com/addxing/function-testing) | Host | `dsh-skill-function-testing` | Git only | 1 | 面向各类 AI 编程代理的功能测试用例生成 Skill。它可以根据 PRD、Git 提交记录或用户故事生成功能测试用例，并输出 Excel 风格测试报告     A skill for generating functi |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Host | `dsh-plugin-agent-dashboard` | Git only | 1 | Multi-agent dashboard skill for DeepSeek Harness |
| [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Host | `dsh-apple-mode` | Git only | 1 | Xcode AI integration mode for DeepSeek Harness (dsh) — an agent preset + installer that gives your DSH session |
| [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | Client + Host | `dsh-chrome-devtools` | Git only | 1 | Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP |
| [fangweixuan26-hash/dsh-a2a-agent](https://github.com/fangweixuan26-hash/dsh-a2a-agent) | Host | `dsh-a2a-agent` | Git only | 1 | Expose a DeepSeek Harness agent over the Agent2Agent (A2A) protocol: agent card, JSON-RPC, LLM replies. |
| [Neplich/dsh_plugin](https://github.com/Neplich/dsh_plugin) | Host | `@neplich/dsh-agent-presetdev` | Git only | 1 |  |
| [Equinox7379/dsh-daily-brief](https://github.com/Equinox7379/dsh-daily-brief) | Host | `dsh-daily-brief` | Git only | 1 | Daily activity brief for DSH: per-session turns/messages/tool-call stats. Read-only. |
| [Equinox7379/dsh-turn-watchdog](https://github.com/Equinox7379/dsh-turn-watchdog) | Host | `dsh-turn-watchdog` | Git only | 1 | Turn watchdog for DSH: detects stuck turns and injects a quiet warning. |
| [Equinox7379/dsh-config-watch](https://github.com/Equinox7379/dsh-config-watch) | Host | `dsh-config-watch` | Git only | 1 | Config drift detective for DSH: snapshots profile/plugin state, records changes. |
| [Equinox7379/dsh-session-repair](https://github.com/Equinox7379/dsh-session-repair) | Host | `dsh-session-repair` | Git only | 1 | Session log repair for DSH: fixes SessionFormatUnsupportedError by marking unknown events ignorable. |
| [ljsysfurryACE/dsh-aura-scheduler](https://github.com/ljsysfurryACE/dsh-aura-scheduler) | Host | `@agentframe/dsh-aura-scheduler` | Git only | 1 | Proactive scheduling for DeepSeek Harness: Aura heartbeat + value network (official is model-driven only) |
| [shinjiyu/deepseek-harness-evolver](https://github.com/shinjiyu/deepseek-harness-evolver) | Host | `plugin-evolve` | Git only | 1 | Complement to DSH Creator mode: stage, score, and solidify in-memory plugin trials to disk. |
| [QSWWLTN/dsh-UEAssetsOperator](https://github.com/QSWWLTN/dsh-UEAssetsOperator) | Host | `@deepseek-dsh-desktop/dsh-ue-uasset-operator` | Git only | 1 |  |
| [Equinox7379/dsh-skill-search](https://github.com/Equinox7379/dsh-skill-search) | Host | `dsh-skill-search` | Git only | 1 | On-demand skill search for DSH: zero preloading, keyword-search a shared skill library |
| [herminger/dsh-web-search-responses](https://github.com/herminger/dsh-web-search-responses) | Host | `dsh-web-search-responses` | Git only | 1 | DSH ctx.web search provider that reuses the conversation model's OpenAI Responses built-in web_search |
| [rison114514/dsh-image-understanding](https://github.com/rison114514/dsh-image-understanding) | Host | `dsh-image-understanding` | Git only | 1 | deepseek-harness 原生插件：让纯文本模型(如 DeepSeek)经 agent/pre-step 劫持 + resolveModelInfo 包装自动识别上传图片(qwen-vl) |
| [frankq007/dsh-plugin-devecocli](https://github.com/frankq007/dsh-plugin-devecocli) | Client (Web UI) | `dsh-plugin-devecocli` | Git only | 1 | HarmonyOS development tools for DeepSeek Harness: device/emulator management, UI automation, build & deploy, l |
| [ikashana/dsh-desktop-shell](https://github.com/ikashana/dsh-desktop-shell) | Host | `dsh-desktop-shell` | Git only | 1 | Desktop launcher shell for DeepSeek Harness (dsh): a tray-resident Electron wrapper that starts or reuses the  |
| [sd1g1/dsh-image-describe](https://github.com/sd1g1/dsh-image-describe) | Host | `@local/dsh-image-describe` | Git only | 1 | DeepSeek Harness 宿主插件：让纯文本主模型也能通过 describe_image 工具“看图” |
| [AL-spiritphoenix/dsh-auto-model](https://github.com/AL-spiritphoenix/dsh-auto-model) | Host | `dsh-auto-model` | Git only | 1 |  |
| [haoyuan-sjtu/Deepseek-Harness-Lifelong-Agent](https://github.com/haoyuan-sjtu/Deepseek-Harness-Lifelong-Agent) | Host | `dsh-governed-memory` | Git only | 1 | A governed long-term memory core for AI agents, with technical-preview adapter contracts for DeepSeek Harness  |
| [glangzh/dsh-advisor](https://github.com/glangzh/dsh-advisor) | Host | `dsh-advisor-plugin` | Git only | 1 | 给 DeepSeek Harness 的 Agent 增加一位"顾问"：日常任务使用较弱模型（默认模型），遇到真正困难的决策时，Agent 会自动向一个更强的模型咨询。 |
| [swaylq/dsh-genie](https://github.com/swaylq/dsh-genie) | Host | `dsh-genie` | Git only | 1 | Wishes that outlive the session — turn a DeepSeek Harness agent's runtime plugins into permanently installed o |
| [afa-cloud/desktop-gui-automation-cua](https://github.com/afa-cloud/desktop-gui-automation-cua) | Client + Host | `@afa-cloud/dsh-cua-desktop` | Git only | 1 | Cross-platform macOS desktop GUI automation & computer-use skill built on cua-driver: AX→pixel→desktop gracefu |
| [huermi/dsh-deepseek-web-adapter](https://github.com/huermi/dsh-deepseek-web-adapter) | Host | `dsh-deepseek-web-adapter` | Git only | 1 | 免费的 DeepSeek 网页版（chat.deepseek.com）LLM 服务提供方，用于 DeepSeek Harness——无需 API 密钥。自动启动网关，支持工具调用和连续对话。Free DeepSeek W |
| [RizenHNT/dsh-skin-digital-arcade](https://github.com/RizenHNT/dsh-skin-digital-arcade) | Client + Host | `dsh-skin-digital-arcade` | Git only | 1 | Rizen Signal Console — digital arcade HUD skin for DeepSeek Harness Web GUI (neon cyan/violet/magenta, pixel f |
| [nanshanyi/dsh-mcp-xcode](https://github.com/nanshanyi/dsh-mcp-xcode) | Host | `dsh-mcp-xcode` | Git only | 1 | dsh-mcp-xcode |
| [crwsr124/dsh-memflow](https://github.com/crwsr124/dsh-memflow) | Host | `dsh-memflow` | Git only | 1 | DeepSeek Harness 记忆框架插件。MEMFLOW 记忆流模式：会话会结束，记忆不会——感知先行、边做边记、无缝续接。分布式记忆架构：每个项目都有自己的记忆，子任务自定义记忆上下文，项目 skill 自迭代— |
| [swaylq/dsh-wildmon](https://github.com/swaylq/dsh-wildmon) | Host | `dsh-wildmon` | Git only | 1 | 你的真实工作就是草丛：野生小灵随机冒头，扔球捕捉，28 格图鉴、6 只队伍、夜行种与传说条件，宝可梦式收集，零 token \| Collect-em-all safari for DSH — your work rus |
| [sd1g1/dsh-minimal-bash-fix](https://github.com/sd1g1/dsh-minimal-bash-fix) | Host | `dsh-minimal-bash-fix` | Git only | 1 | DSH 插件：修复极简模式（minimal）预设中 persistent bash 工具约 3.5s 延迟返回的 bug，并提供 minimal-fast preset |
| [904915452/dsh-specify](https://github.com/904915452/dsh-specify) | Host | `@zhangqingyu/dsh-specify` | Git only | 0 |  |
| [Duoasa/interactive-component-integration](https://github.com/Duoasa/interactive-component-integration) | Host | `interactive-component-integration` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-checkpoints](https://github.com/FUSU123fusu/dsh-tui-checkpoints) | Client (Web UI) | `dsh-tui-checkpoints` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-jobs](https://github.com/FUSU123fusu/dsh-tui-jobs) | Client + Host | `dsh-tui-jobs` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-keys](https://github.com/FUSU123fusu/dsh-tui-keys) | Client (Web UI) | `dsh-tui-keys` | Git only | 0 |  |
| [Lilien-xu/dsh-meego](https://github.com/Lilien-xu/dsh-meego) | Host | `dsh-meego` | Git only | 0 |  |
| [ReiRui/dsh-image-preview](https://github.com/ReiRui/dsh-image-preview) | Host | `dsh-image-preview` | Git only | 0 |  |
| [TongaiLinC/dsh-mobile-access](https://github.com/TongaiLinC/dsh-mobile-access) | Client (Web UI) | `dsh-mobile-access` | Git only | 0 |  |
| [WonderfulEdge/dsh-publish-skill](https://github.com/WonderfulEdge/dsh-publish-skill) | Host | `dsh-publish-skill` | Git only | 0 |  |
| [cainiao1992/dsh-codebuddy-auth](https://github.com/cainiao1992/dsh-codebuddy-auth) | Host | `dsh-codebuddy-auth` | Git only | 0 |  |
| [hanyi7867069-create/dsh-content-lab](https://github.com/hanyi7867069-create/dsh-content-lab) | Host | `dsh-content-lab` | Git only | 0 |  |
| [hatsuyuki0103/oh-my-deepseek-harness](https://github.com/hatsuyuki0103/oh-my-deepseek-harness) | Host | `oh-my-deepseek-harness` | Git only | 0 |  |
| [kingguuu8-svg/dsh-pi-compatible](https://github.com/kingguuu8-svg/dsh-pi-compatible) | Host | `dsh-pi-compatible` | Git only | 0 |  |
| [kobenfang/Big8](https://github.com/kobenfang/Big8) | Host | `@kobenfang/dsh-big8` | Git only | 0 |  |
| [kobenfang/BigFish](https://github.com/kobenfang/BigFish) | Host | `@kobenfang/dsh-bigfish` | Git only | 0 |  |
| [kobenfang/BigFocus](https://github.com/kobenfang/BigFocus) | Host | `@kobenfang/dsh-bigfocus` | Git only | 0 |  |
| [kobenfang/BigLead](https://github.com/kobenfang/BigLead) | Host | `@kobenfang/dsh-biglead` | Git only | 0 |  |
| [kobenfang/BigFood](https://github.com/kobenfang/BigFood) | Host | `@kobenfang/dsh-bigfood` | Git only | 0 |  |
| [kobenfang/BigPlan](https://github.com/kobenfang/BigPlan) | Host | `@kobenfang/dsh-bigplan` | Git only | 0 |  |
| [kobenfang/BigSeedSkill](https://github.com/kobenfang/BigSeedSkill) | Host | `@kobenfang/dsh-bigseed` | Git only | 0 |  |
| [lemonorangeapple/dsh-grok4.6-support](https://github.com/lemonorangeapple/dsh-grok4.6-support) | Host | `dsh-grok-4-6-support` | Git only | 0 |  |
| [littleblakew/msds-chain-mcp](https://github.com/littleblakew/msds-chain-mcp) | Client + Host | `dsh-msds-chain` | Git only | 0 |  |
| [lubaiUwU/DSH-WeChatClawBot](https://github.com/lubaiUwU/DSH-WeChatClawBot) | Host | `dsh-wechat-clawbot` | Git only | 0 |  |
| [rencl3/dsh-matlab-bridge](https://github.com/rencl3/dsh-matlab-bridge) | Host | `dsh-matlab-bridge` | Git only | 0 |  |
| [ruby1304/dsh-public-plugins](https://github.com/ruby1304/dsh-public-plugins) | Host | `dsh-plugin-eval-harness` | Git only | 0 |  |
| [addxing/conservative-code-edits](https://github.com/addxing/conservative-code-edits) | Host | `dsh-skill-conservative-code-edits` | Git only | 0 |  |
| [addxing/function-extraction](https://github.com/addxing/function-extraction) | Host | `dsh-skill-function-extraction` | Git only | 0 |  |
| [oukeming64-tech/codex-skills](https://github.com/oukeming64-tech/codex-skills) | Host | `@oukeming64-tech/codex-skills` | Git only | 0 |  |
| [addxing/replicate-android-feature](https://github.com/addxing/replicate-android-feature) | Host | `dsh-skill-replicate-android-feature` | Git only | 0 |  |
| [chunkithwang/craft-mermaid](https://github.com/chunkithwang/craft-mermaid) | Host | `craft-mermaid` | Git only | 0 |  |
| [jcaiagent7143-ui/sendpage-mcp](https://github.com/jcaiagent7143-ui/sendpage-mcp) | Client + Host | `dsh-sendpage` | Git only | 0 |  |
| [Arnoldkevin/prismrelay-mcp](https://github.com/Arnoldkevin/prismrelay-mcp) | Host | `prismrelay-mcp` | Git only | 0 |  |
| [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) | Host | `dsh-plugin-asmemory` | Git only | 0 |  |
| [vvlife/dsh-agnes-paseo](https://github.com/vvlife/dsh-agnes-paseo) | Host | `dsh-agnes-paseo` | Git only | 0 |  |
| [wuwangmao/dsh-qwen-multimodal](https://github.com/wuwangmao/dsh-qwen-multimodal) | Host | `dsh-qwen-multimodal` | Git only | 0 |  |
| [xsoc1/math-research-dsh](https://github.com/xsoc1/math-research-dsh) | Host | `math-research-dsh` | Git only | 0 |  |
| [Seryta/llm-deepseek-image-admit](https://github.com/Seryta/llm-deepseek-image-admit) | Host | `llm-deepseek-image-admit` | Git only | 0 |  |
| [CatNebulaaaa/wps-dsh-plugin](https://github.com/CatNebulaaaa/wps-dsh-plugin) | Host | `dsh-plugin-wps-office` | Git only | 0 |  |
| [lisycotana/dsh-code-lens](https://github.com/lisycotana/dsh-code-lens) | Host | `dsh-code-lens` | Git only | 0 |  |
| [lisycotana/dsh-workflow-worktree](https://github.com/lisycotana/dsh-workflow-worktree) | Host | `dsh-workflow-worktree` | Git only | 0 |  |
| [oppnc/dsh-kernel-mesh](https://github.com/oppnc/dsh-kernel-mesh) | Host | `dsh-kernel-mesh` | Git only | 0 |  |
| [Haoran2099/dsh-focal](https://github.com/Haoran2099/dsh-focal) | Host | `focal-dsh` | Git only | 0 |  |
| [Zenjibad/dsh-lan-uuid-fix](https://github.com/Zenjibad/dsh-lan-uuid-fix) | Client (Web UI) | `dsh-lan-uuid-fix` | Git only | 0 |  |
| [yujianjian1013/dsh-codex-media](https://github.com/yujianjian1013/dsh-codex-media) | Client + Host | `dsh-codex-media` | Git only | 0 |  |
| [YangCazz/CazzPatent](https://github.com/YangCazz/CazzPatent) | Host | `dsh-cazz-patent` | Git only | 0 |  |
| [Hongcheng-LI/dsh-scientific](https://github.com/Hongcheng-LI/dsh-scientific) | Host | `dsh-chimerax` | Git only | 0 |  |
| [Kimoiran/dsh-gui-trash](https://github.com/Kimoiran/dsh-gui-trash) | Client (Web UI) | `dsh-gui-trash` | Git only | 0 |  |
| [br1nosense/dsh-vision-solution](https://github.com/br1nosense/dsh-vision-solution) | Host | `@dsh-user/dsh-vision-solution` | Git only | 0 |  |
| [zp-home/dsh-skill-adapter](https://github.com/zp-home/dsh-skill-adapter) | Host | `dsh-skill-adapter` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-chinese-thinking](https://github.com/GongYuanCaiJi/dsh-chinese-thinking) | Host | `dsh-chinese-thinking` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-pi-memory](https://github.com/GongYuanCaiJi/dsh-pi-memory) | Host | `dsh-pi-memory` | Git only | 0 |  |
| [JayLi52/dsh-web-search-doubao](https://github.com/JayLi52/dsh-web-search-doubao) | Host | `dsh-web-search-doubao` | Git only | 0 |  |
| [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | Unattributed | `@mnemon-dev/dsh-mnemon` | Git only | 490 | LLM-supervised persistent memory for AI agents — graph-based recall, cross-session knowledge, single binary. W |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Unattributed | `misakanet` | Git only | 412 | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verifie |
| [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) | Unattributed | `humanizer-ru-dsh` | Git only | 106 | Скилл для ИИ-агентов: находит и убирает следы машинной генерации из русского текста. 38 паттернов, 39 regex-ма |
| [zuorn/Tydora](https://github.com/zuorn/Tydora) | Unattributed | `tydora` | Git only | 59 | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional link |
| [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode) | Unattributed | `@beauticode/dsh-plugin` | Git only | 34 | 面向 AI 编程客户端的动态、可响应环境——视频背景、氛围场景与主题，适用于 DeepSeek Harness 与 Codex Desktop。 |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Unattributed | `cordis-fabric-bundle` | Git only | 15 | 一种类似MC Fabric的dsh hook处理器 |
| [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit) | Unattributed | `harness-ai-kit-plugin` | Git only | 13 | Package manager for AI agent assets — 42 skills, 5 CLIs, 1 plugin. Skills for AI/LLM agent engineering, eval-d |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | Unattributed | `@your-scope/dsh-plugin-template` | Git only | 11 | 基于原turtle ui官方仓库创建的plugin模板仓库 |
| [ADWMC/helm-d](https://github.com/ADWMC/helm-d) | Unattributed | `@dsh-security/bootstrap` | Git only | 11 | DeepSeek Harness 破甲一体化安全分析插件：Android · Web · Native · Protocol · Malware · AI-Security 全领域聚合（9 bundle + 1 pres |
| [Len7183/DSH-Think-zh](https://github.com/Len7183/DSH-Think-zh) | Unattributed | `dsh-think-zh` | Git only | 10 | DeepSeek Harness 默认的思考语言为英文，这不利于中文使用者阅读推理过程与复核结论。本插件通过在每次请求的 system prompt 中注入一条精简的强制语言指令，使: 思考过程强制简体中文，无论用户用什 |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | Git only | 8 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Unattributed | `dsh-plugin-template` | Git only | 8 | Template for deepseek-harness plugin development. |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Unattributed | `dizzy-dsh` | Git only | 7 | My DSH plugins |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | Unattributed | `@loserfox/git-identity` | Git only | 7 | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config |
| [131CDA1/dsh-scrape-webpage](https://github.com/131CDA1/dsh-scrape-webpage) | Unattributed | `dsh-scrape-webpage` | Git only | 6 | 用于DeepSeek Harness的网页读取插件 |
| [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) | Unattributed | `deeptop-bridge` | Git only | 5 | Deeptop, a lightweight native desktop client for DeepSeek Harness. |
| [Tisitan/dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | Unattributed | `dsh-live2d-companion` | Git only | 5 | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [GrayCodeTeam/graycode-for-dsh](https://github.com/GrayCodeTeam/graycode-for-dsh) | Unattributed | `@graycode/dsh` | Git only | 5 |  |
| [Apageoflove/DSH-changeproof](https://github.com/Apageoflove/DSH-changeproof) | Unattributed | `dsh-changeproof` | Git only | 5 | 变更证明（ChangeProof）— DeepSeek Harness 插件：代码改动后确认改动的行真的被测试覆盖到 |
| [godchen520/dsh-web-remote](https://github.com/godchen520/dsh-web-remote) | Unattributed | `dsh-web-remote` | Git only | 5 | DSH 手机/外网远程访问插件：Cloudflare Quick Tunnel 公网隧道 + token 鉴权 + gzip 压缩 + 局域网 HTTPS 直连 + 手机图标面板 + QQ 机器人取链接 |
| [yangyongzhen/dsh-session-export](https://github.com/yangyongzhen/dsh-session-export) | Unattributed | `dsh-session-export` | Git only | 4 | Export DeepSeek Harness sessions to Markdown for review, blogging and audit. dsh plugin. |
| [the-qian/dsh-commit-review](https://github.com/the-qian/dsh-commit-review) | Unattributed | `dsh-commit-review` | Git only | 4 | 一个 DSH 插件：为 Web GUI 增加 /commit 与 /review 两个斜杠命令 |
| [WTStarMark/DSH-QAQ](https://github.com/WTStarMark/DSH-QAQ) | Unattributed | `dsh-qaq` | Git only | 4 | QAQ（DSH-QAQ）面向 DeepSeek Harness（DSH）的启动容灾守卫，配套 dsh-qaq 备份插件：headless Chrome 读浏览器真实 DOM，检测宿主崩溃与 Web UI 红屏，自动回滚  |
| [weishao2/tizhuang-agent-skills](https://github.com/weishao2/tizhuang-agent-skills) | Unattributed | `dsh-tizhuang-question-bank` | Git only | 3 | 2000万+中小学K12真题题库 Skill：免费注册、免费抽题、教材/章节/知识点检索、练习测验与AI智能组卷。 |
| [biuboomc/dsh-plugin-consult](https://github.com/biuboomc/dsh-plugin-consult) | Unattributed | `dsh-plugin-consult` | Git only | 3 | DeepSeek Harness peer-consult plugin: talk to a fork of another session without mutating the original |
| [xwh-01/dsh-mediacrawler](https://github.com/xwh-01/dsh-mediacrawler) | Unattributed | `dsh-mediacrawler` | Git only | 3 | Installable DeepSeek Harness profile bundle and bounded MCP adapter for MediaCrawler. |
| [YKennen/dsh-zh-output](https://github.com/YKennen/dsh-zh-output) | Unattributed | `dsh-zh-output` | Git only | 3 | DeepSeek Harness 中文输出插件：强制中文思考与输出的中文预设 |
| [OneZero-Y/dsh-plugin-kit](https://github.com/OneZero-Y/dsh-plugin-kit) | Unattributed | `@your-scope/dsh-plugin-template` | Git only | 3 | Agent skills and a working template for building standalone DeepSeek Harness (DSH) plugins |
| [Momojie-S/dsh-workspace-env](https://github.com/Momojie-S/dsh-workspace-env) | Unattributed | `@momojie-s/dsh-workspace-env` | Git only | 3 | DSH plugin: per-workspace .env injection for shell subprocesses |
| [akira399/dsh-stall-guard](https://github.com/akira399/dsh-stall-guard) | Unattributed | `dsh-stall-guard` | Git only | 3 | DeepSeek Harness watchdog plugin: detects truly stalled agent turns (never killing in-progress tasks — in-flig |
| [didclawapp-ai/DSH-Office](https://github.com/didclawapp-ai/DSH-Office) | Unattributed | `dsh-zagens-office` | Git only | 3 | DeepSeek Harness plugin for PPTX / DOCX / XLSX / PDF read/write/edit |
| [kanneiren/dsh-windows-manager](https://github.com/kanneiren/dsh-windows-manager) | Unattributed | `dsh-windows-manager-plugin` | Git only | 2 | Lightweight DeepSeek Harness manager for Windows \| 轻量级 DeepSeek Harness Windows 托盘管理器 \| tray |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | Unattributed | `dsh-task-progress-notifier` | Git only | 2 |  |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | Unattributed | `falsify-dsh` | Git only | 2 | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. |
| [mchenziyi/galgame-dsh-plugin](https://github.com/mchenziyi/galgame-dsh-plugin) | Unattributed | `galgame-dsh-plugin` | Git only | 2 | A customizable text-based galgame and otome world engine plugin for DeepSeek Harness (dsh) |
| [zhangzujian/dsh-subprocess-inherit-environment](https://github.com/zhangzujian/dsh-subprocess-inherit-environment) | Unattributed | `@zhangzujian/dsh-subprocess-inherit-environment` | Git only | 2 | DSH plugin that forwards the complete Harness environment through ctx.subprocess |
| [echo-xianyu/dsh-better-chat-history](https://github.com/echo-xianyu/dsh-better-chat-history) | Unattributed | `dsh-better-chat-history` | Git only | 2 | A plugin for DSH to optimize session loading speed and reduce disk read/write consumption. |
| [SnowNightt/dsh-token-activity](https://github.com/SnowNightt/dsh-token-activity) | Unattributed | `dsh-token-activity` | Git only | 2 | 用于展示最近365天的每日Token使用热力图，悬停任意日期查看当天使用过的全部模型及其Token用量。 |
| [yangzhaofeng496/dsh-feishu-plugin](https://github.com/yangzhaofeng496/dsh-feishu-plugin) | Unattributed | `dsh-feishu-plugin` | Git only | 2 | Feishu bot bridge plugin for DeepSeek Harness |
| [dongsheng123132/dsh-cache-stabilizer](https://github.com/dongsheng123132/dsh-cache-stabilizer) | Unattributed | `dsh-cache-stabilizer` | Git only | 2 | Cache-prefix stabilization and evidence-based cache metrics for DeepSeek Harness |
| [yangyongzhen/dsh-session-report](https://github.com/yangyongzhen/dsh-session-report) | Unattributed | `dsh-session-report` | Git only | 2 | Session cost/usage report cards for DeepSeek Harness: tokens, cache-hit rate, per-turn breakdown, cost estimat |
| [victorzhong0110/dsh-code-reference](https://github.com/victorzhong0110/dsh-code-reference) | Unattributed | `dsh-code-reference` | Git only | 2 | DeepSeek Harness (DSH) 代码参考检索与复用调查插件：开发前检索本地代码库与 GitHub/npm 开源项目，评估复用/改造/引入依赖/自制并询问用户，支持架构级复用。Code reference & |
| [BotonJ/dsh-windtunnel](https://github.com/BotonJ/dsh-windtunnel) | Unattributed | `dsh-windtunnel` | Git only | 2 | A windtunnel Plugin for DeepSeek Harness |
| [fly3366/dsh-o11y-plugin](https://github.com/fly3366/dsh-o11y-plugin) | Unattributed | `dsh-o11y-plugin` | Git only | 2 | Unified plugin-dimension observability (trace/log/metric) for deepseek-harness: registers global OTel provider |
| [jeremy9682/dsh-observability](https://github.com/jeremy9682/dsh-observability) | Unattributed | `dsh-codex-observability` | Git only | 2 |  |
| [lucky8197/dsh-git-hygiene](https://github.com/lucky8197/dsh-git-hygiene) | Unattributed | `dsh-git-hygiene` | Git only | 2 | DSH 插件：Git 卫生巡检——只读扫描已合并/过期分支、大文件、未跟踪文件与未提交修改，输出体检报告与清理建议，不自动删除任何东西。Git Hygiene Checker for DeepSeek Harness. |
| [lucky8197/dsh-weekly-digest](https://github.com/lucky8197/dsh-weekly-digest) | Unattributed | `dsh-weekly-digest` | Git only | 2 | DSH 插件：周报生成器——聚合最近 N 天的 git 提交、会话活动与每日记忆，自动生成 Markdown 周报，全程只读。Weekly Digest Generator for DeepSeek Harness. |
| [DoloresCaritasAngelus/SeekMaid-pet](https://github.com/DoloresCaritasAngelus/SeekMaid-pet) | Unattributed | `seekmaid-pet` | Git only | 2 | SeekMaid 女仆：基于 DeepSeek Harness 的 Windows 原生桌宠插件，自动监控 DSH 任务、授权、QA 并气泡提醒，支持零配置自动部署。 |
| [WJNCT55555/dsh-achievements](https://github.com/WJNCT55555/dsh-achievements) | Unattributed | `@wjnct55555/dsh-achievements-bundle` | Git only | 2 | 为了探索dsh 让vibecoding像游戏一样有趣 |
| [HUITianYi/dsh-whale-desktop-launcher](https://github.com/HUITianYi/dsh-whale-desktop-launcher) | Unattributed | `dsh-whale-desktop-launcher` | Git only | 1 | Windows desktop launcher plugin for DeepSeek Harness with a whale-girl icon and clean app-mode window |
| [SnowfallC/dsh-mobile-voice-call](https://github.com/SnowfallC/dsh-mobile-voice-call) | Unattributed | `dsh-mobile-voice-call` | Git only | 1 | App-free mobile voice calls with existing DeepSeek Harness sessions. |
| [jesspig/deepseek-harness-desktop](https://github.com/jesspig/deepseek-harness-desktop) | Unattributed | `@dsh-desktop/bundle` | Git only | 1 | 这是一个独立的 Cordis 应用:不改动上游仓库,以官方扩展方式(自定义 profile + bundle + Cordis 插件)把 dsh 跑成原生桌面应用。 |
| [zemul/dsh-generate-image](https://github.com/zemul/dsh-generate-image) | Unattributed | `dsh-generate-image` | Git only | 1 | DeepSeek Harness 插件：通过本机 OpenAI Codex CLI 生成与编辑图片。 |
| [zhenkun26/dsh-repo-atlas](https://github.com/zhenkun26/dsh-repo-atlas) | Unattributed | `dsh-repo-atlas` | Git only | 1 |  |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | Unattributed | `dsh-payload-capture` | Git only | 1 | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 \| DSH plugin: capture every upstream model API payload to JSON |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Unattributed | `dsh-plugin-rag` | Git only | 1 | Local knowledge base RAG for DeepSeek Harness |
| [qing3a/dsh-plugin-verify](https://github.com/qing3a/dsh-plugin-verify) | Unattributed | `@qing3a/verify-auditor` | Git only | 1 | 验证 DSH 插件的 CLI：一条命令跑 mock-llm 完整 agent 循环，检查 waterfall 链与零副作用，产出验证报告 |
| [Equinox7379/dsh-update-radar](https://github.com/Equinox7379/dsh-update-radar) | Unattributed | `dsh-update-radar` | Git only | 1 | Update radar for DSH: checks installed plugins against git upstreams. |
| [TZHR-invest/dsh-plugins](https://github.com/TZHR-invest/dsh-plugins) | Unattributed | `dsh-auto-archive` | Git only | 1 |  |
| [bpc-oss/chrome-faithful](https://github.com/bpc-oss/chrome-faithful) | Unattributed | `@bpc-oss/dsh-plugin-chrome-faithful` | Git only | 1 | Faithful control of your real, logged-in Chrome profiles: MCP server + MV3 extension + authenticated localhost |
| [kkishapppy/dsh-session-repacker](https://github.com/kkishapppy/dsh-session-repacker) | Unattributed | `dsh-session-repacker` | Git only | 1 | DSH 会话日志 zstd 帧重打包：万帧拼接→官方两帧形态，旧会话打开提速约 6 倍 |
| [youxi-huang/dsh-gpt-file-discipline](https://github.com/youxi-huang/dsh-gpt-file-discipline) | Unattributed | `dsh-gpt-file-discipline` | Git only | 1 | A configurable DeepSeek Harness plugin that adds file-reading discipline to selected GPT model prompts. |
| [1052326311/dsh-instruction-audit](https://github.com/1052326311/dsh-instruction-audit) | Unattributed | `dsh-instruction-audit` | Git only | 1 | Privacy-minimal instruction provenance receipts for DeepSeek Harness |
| [2008924/dsh-progress-viz](https://github.com/2008924/dsh-progress-viz) | Unattributed | `dsh-progress-viz-plugin` | Git only | 1 | Real-time stage & ETA dashboard for DeepSeek Harness (dsh) from session event stream \| dsh 任务进度可视化：会话事件流实时阶段+ |
| [lucky8197/dsh-doc-guard](https://github.com/lucky8197/dsh-doc-guard) | Unattributed | `dsh-doc-guard` | Git only | 1 | DSH 插件：审计仓库的文档-代码一致性——版本号/更新记录表/结构树/模块清单/测试计数/文档间引用漂移检测，按严重度输出修复建议，全程只读。Document-Code Consistency Guard for De |
| [runyuan-wang/dsh-route-certificate](https://github.com/runyuan-wang/dsh-route-certificate) | Unattributed | `dsh-route-certificate` | Git only | 1 | Experimental RouteCertificate observer for the DeepSeek Harness developer preview |
| [lucky8197/dsh-code-smell](https://github.com/lucky8197/dsh-code-smell) | Unattributed | `dsh-code-smell` | Git only | 1 | DSH 插件：代码气味雷达——静态扫描 TODO/FIXME 债务、未实现桩、超长行、大文件与重复代码块，按严重度输出修复建议，全程只读。Code Smell Radar for DeepSeek Harness. |
| [2672243194/dsh-tally](https://github.com/2672243194/dsh-tally) | Unattributed | `dsh-tally` | Git only | 1 | Personal bookkeeping for DeepSeek Harness: record expenses/income (single or batch), list, monthly/annual stat |
| [GongYuanCaiJi/dsh-archify](https://github.com/GongYuanCaiJi/dsh-archify) | Unattributed | `dsh-archify` | Git only | 1 | DeepSeek Harness 插件：用 JSON 规格生成可验证的架构图、流程图、时序图、数据流图与生命周期图（移植自 tt-a1i/archify） |
| [rocker2018-droid/dsh-longtask-orchestrator](https://github.com/rocker2018-droid/dsh-longtask-orchestrator) | Unattributed | `dsh-longtask-orchestrator` | Git only | 1 |  |
| [orangeofcarl0-sys/dsh-large-proj-perf](https://github.com/orangeofcarl0-sys/dsh-large-proj-perf) | Unattributed | `dsh-large-proj-perf` | Git only | 1 | DSH large-session performance plugin: zero-copy fork + projection warmup + chunked materialize |
| [Henryang777/dsh-illustrated-teaching](https://github.com/Henryang777/dsh-illustrated-teaching) | Unattributed | `dsh-illustrated-teaching` | Git only | 1 | 图解教学：DeepSeek Harness 插件——把任何知识点自动渲染成精美图解画廊（8 套小红书科普风模板，专为本科学习设计） |
| [Gdnaiteab/pingo-dsh-plugin](https://github.com/Gdnaiteab/pingo-dsh-plugin) | Unattributed | `pingo-dsh-plugin` | Git only | 0 |  |
| [Zenith-Lxz/dsh-foundry](https://github.com/Zenith-Lxz/dsh-foundry) | Unattributed | `@dsh-foundry/daily-bundle` | Git only | 0 |  |
| [changlianxiya-139/dsh-ambiguity-handling](https://github.com/changlianxiya-139/dsh-ambiguity-handling) | Unattributed | `dsh-ambiguity-handling` | Git only | 0 |  |
| [hhj2714/dsh-whale-btn](https://github.com/hhj2714/dsh-whale-btn) | Unattributed | `dsh-whale-btn` | Git only | 0 |  |
| [Paloma966/dsh-kaiju](https://github.com/Paloma966/dsh-kaiju) | Unattributed | `dsh-kaiju` | Git only | 0 |  |
| [baobaolaodie/cc-dsh-notifier](https://github.com/baobaolaodie/cc-dsh-notifier) | Unattributed | `cc-dsh-notifier` | Git only | 0 |  |
| [ryunana/selfdistill](https://github.com/ryunana/selfdistill) | Unattributed | `selfdistill-dsh` | Git only | 0 |  |
| [AtlasCloudAI/dsh-media-gen](https://github.com/AtlasCloudAI/dsh-media-gen) | Unattributed | `dsh-media-gen` | Git only | 0 |  |
| [Codingendless/dsh-liang-rheostat](https://github.com/Codingendless/dsh-liang-rheostat) | Unattributed | `dsh-liang-rheostat-server` | Git only | 0 |  |
| [MoonGlassKitty/dsh-tailscale-sync](https://github.com/MoonGlassKitty/dsh-tailscale-sync) | Unattributed | `dsh-tailscale-sync` | Git only | 0 |  |
| [fuilyha56-wq/dsh-for-mofox-ada](https://github.com/fuilyha56-wq/dsh-for-mofox-ada) | Unattributed | `dsh-for-mofox-ada` | Git only | 0 |  |
| [GongYuanCaiJi/dsh-extension-workbook](https://github.com/GongYuanCaiJi/dsh-extension-workbook) | Unattributed | `dsh-extension-workbook` | Git only | 0 |  |

## Blocked by reserved scope (83)

These repositories satisfy the bundle contract, but their `package.json` names
them under `@deepseek-ai/`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any `dsh plugin add @deepseek-ai/...` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app) | Host | `@deepseek-ai/dsh-product-bridge` | **blocked** | 603 | DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, pl |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | Host | `@deepseek-ai/dsh-plugin-check` | **blocked** | 24 | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Host | `@deepseek-ai/dsh-toolkit` | **blocked** | 23 | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十 |
| [chenw2759-wq/dsh-IDE](https://github.com/chenw2759-wq/dsh-IDE) | Client + Host | `@deepseek-ai/dsh-client-ui-aionui-panel` | **blocked** | 21 | dsh-IDE 把 DeepSeek Harness（DSH）网页版升级成一站式 IDE：JupyterLab 式文件树、带语法高亮的代码编辑、多格式预览、Trae 风格红绿 diff 和内置终端，再加上「本地大脑、远程 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Host | `@deepseek-ai/dsh-security-audit` | **blocked** | 12 | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Client + Host | `@deepseek-ai/dsh-deepresearch` | **blocked** | 9 |  |
| [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) | Client + Host | `@deepseek-ai/dsh-peer-link` | **blocked** | 9 |  |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Host | `@deepseek-ai/dsh-session-health` | **blocked** | 8 | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | Host | `@deepseek-ai/dsh-tui` | **blocked** | 8 | as is, no warranty |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | Host | `@deepseek-ai/dsh-tool-calculator` | **blocked** | 7 | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | Host | `@deepseek-ai/dsh-tool-stat` | **blocked** | 6 | DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 |
| [sulfide2085/dsh-llm-wechat](https://github.com/sulfide2085/dsh-llm-wechat) | Host | `@deepseek-ai/dsh-llm-wechat` | **blocked** | 6 | DeepSeek Harness 微信网关适配插件：复用 DeepSeekAdapter + 流式 think 标签转译 |
| [le-soleil-se-couche/dsh-token-cost](https://github.com/le-soleil-se-couche/dsh-token-cost) | Client + Host | `@deepseek-ai/dsh-token-cost` | **blocked** | 5 | 在对话页面直接查看消耗费用（嵌入官方底部状态条，点击看明细）；设置中汇总用量与费用，并可自定义其他模型单价 |
| [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Host | `@deepseek-ai/dsh-qwen-mm` | **blocked** | 5 | Qwen-MM-Plugins支持 |
| [chenw2759-wq/dsh-mindmap](https://github.com/chenw2759-wq/dsh-mindmap) | Client + Host | `@deepseek-ai/dsh-mindmap` | **blocked** | 5 | DSH 思维导图模式插件：课件(PPT/PDF/Word)+电子书 → 打印级复习思维导图 HTML（A3 横向、每主干一页、大括号式横向、黑体、4 种风格、右侧笔记区、封面总览 + 交互式测试题）。建议配合 dsh-I |
| [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | Host | `@deepseek-ai/dsh-tool-time` | **blocked** | 4 | DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖 |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | Host | `@deepseek-ai/dsh-tool-csv` | **blocked** | 4 | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 |
| [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | Host | `@deepseek-ai/dsh-tool-markdown` | **blocked** | 4 | DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 |
| [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | Host | `@deepseek-ai/dsh-tool-diff` | **blocked** | 4 | DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具 |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | Client + Host | `@deepseek-ai/dsh-notebooks` | **blocked** | 4 |  |
| [xinCodes/deepseek-billing-plugin](https://github.com/xinCodes/deepseek-billing-plugin) | Host | `@deepseek-ai/dsh-deepseek-billing` | **blocked** | 4 | DeepSeek Harness (DSH) 插件：DeepSeek 官方 API 余额与当前会话费用估算 |
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
| [MkaliezZ/dsh-agentfuse-plugin](https://github.com/MkaliezZ/dsh-agentfuse-plugin) | Host | `@deepseek-ai/dsh-agentfuse` | **blocked** | 3 | Deterministic fail-closed tool-call authorization for DSH with evidence: allow/block/ask policy gate plus appr |
| [kaotusi/dsh-task-notify](https://github.com/kaotusi/dsh-task-notify) | Host | `@deepseek-ai/dsh-task-notify` | **blocked** | 3 | DeepSeek Harness (DSH) system-level task notifications: approval required / awaiting reply / task finished (ba |
| [OoWJZZoO/dsh-read-image](https://github.com/OoWJZZoO/dsh-read-image) | Host | `@deepseek-ai/dsh-read-image` | **blocked** | 3 | A plug-and-play image-reading plugin for DeepSeek Harness. After installation, DSH will no longer refuse to fe |
| [skylar-fei/dsh-wechat-maid](https://github.com/skylar-fei/dsh-wechat-maid) | Client + Host | `@deepseek-ai/dsh-pet-maid` | **blocked** | 3 | 一个适用于DSH的插件，提供微信远程控制、主动对话、未来任务、桌宠等功能，可通过桌宠面板实时检查未来任务的状态，并提供“自动编码”模式，使模型在对话完后发微信提醒你，以便你认真的刷手机。 |
| [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | Host | `@deepseek-ai/dsh-sandbox-mxc` | **blocked** | 2 | 微软跨平台沙盒支持 |
| [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) | Client (Web UI) | `@deepseek-ai/dsh-client-web-component` | **blocked** | 2 | web-components支持 |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | Client + Host | `@deepseek-ai/dsh-ex-setting` | **blocked** | 2 | DSH的设置扩展 |
| [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Host | `@deepseek-ai/dsh-agent-budget` | **blocked** | 2 | Native Harness agent-tree token budget plugin |
| [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) | Host | `@deepseek-ai/dsh-paseo` | **blocked** | 2 | DSH 的paseo插件扩展支持 |
| [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Host | `@deepseek-ai/dsh-tool-search` | **blocked** | 2 | Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness |
| [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) | Host | `@deepseek-ai/dsh-trace` | **blocked** | 2 | DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP. |
| [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | Host | `@deepseek-ai/dsh-tool-scout` | **blocked** | 2 | 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。 |
| [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Client (Web UI) | `@deepseek-ai/dsh-turn-navigator` | **blocked** | 2 | Private DSH Web turn navigation plugin |
| [RRRosmontis/dsh-qwen-mm](https://github.com/RRRosmontis/dsh-qwen-mm) | Host | `@deepseek-ai/dsh-qwen-mm` | **blocked** | 2 | Qwen-MM-Plugins integration bundle for DeepSeek Harness (dsh) — multimodal MCP tools (vision, OCR, ASR, search |
| [NagasakiSoyo-ui/dsh-llm-deepseek-vision](https://github.com/NagasakiSoyo-ui/dsh-llm-deepseek-vision) | Host | `@deepseek-ai/dsh-llm-deepseek-vision` | **blocked** | 2 | Vision-augmented DeepSeek adapter plugin for DeepSeek Harness: a vision-capable model describes image input, t |
| [omdsh-dev/dsh-fusion](https://github.com/omdsh-dev/dsh-fusion) | Client + Host | `@deepseek-ai/dsh-fusion` | **blocked** | 2 | 将多个 DeepSeek Harness 对话融合为一个可继续的会话，支持 Agent 智能剪枝、话题分组、内容排序和界面操作 |
| [gxpppp/dsh-obsidian](https://github.com/gxpppp/dsh-obsidian) | Host | `@deepseek-ai/dsh-client-ui-obsidian` | **blocked** | 2 | Obsidian bridge plugin for DSH |
| [ellelkktrraaa/dsh-audio-alert](https://github.com/ellelkktrraaa/dsh-audio-alert) | Client + Host | `@deepseek-ai/dsh-client-audio-alert` | **blocked** | 2 | dsh中断声音提示喵（可配置音频喵）Browser audio alerts for dsh attention edges: approval requests, ask-user questions, and fin |
| [wjwjw/dsh-workspace-files](https://github.com/wjwjw/dsh-workspace-files) | Client + Host | `@deepseek-ai/dsh-bundle-workspace-files` | **blocked** | 2 | Workspace file explorer plugin for the DeepSeek Harness web GUI |
| [OpenSaozi/dsh-antigravity](https://github.com/OpenSaozi/dsh-antigravity) | Host | `@deepseek-ai/dsh-llm-pi-ai-antigravity` | **blocked** | 2 | 接入 Google Anti Gravity Coding Plan 作为 DeepSeek Harness LLM Provider，直接使用账号下的 Gemini / Claude / GPT-OSS。 \| Goo |
| [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | Client + Host | `@deepseek-ai/dsh-lmstudio-vision` | **blocked** | 1 | 让你能通过deepseek harness调用LM studio加载的本地视觉模型 |
| [ZTuTZ/dsh-plugins](https://github.com/ZTuTZ/dsh-plugins) | Client (Web UI) | `@deepseek-ai/dsh-marvel-skin` | **blocked** | 1 | My personal plugin collection for DeepSeek Harness (DSH) — everything is a plugin. |
| [studyzy/dsh-lazy-tools](https://github.com/studyzy/dsh-lazy-tools) | Host | `@deepseek-ai/dsh-lazy-tools` | **blocked** | 1 |  |
| [Da1dr1em/dsh-ego-browser](https://github.com/Da1dr1em/dsh-ego-browser) | Host | `@deepseek-ai/dsh-ego-browser` | **blocked** | 1 |  |
| [omdsh-dev/dsh-shuttle](https://github.com/omdsh-dev/dsh-shuttle) | Client + Host | `@deepseek-ai/dsh-shuttle` | **blocked** | 1 | 在 DeepSeek Harness 与 Codex、Claude Code、Pi、Reasonix、OpenCode 之间双向迁移对话记录，支持 CLI 与 Web UI |
| [omdsh-dev/dsh-essential](https://github.com/omdsh-dev/dsh-essential) | Client + Host | `@deepseek-ai/dsh-essential` | **blocked** | 1 | 为 DeepSeek Harness 提供可恢复的对话删除能力，支持菜单集成、即时隐藏与重启安全归档 |
| [UsamiRenkorin/dsh-workspace-file-view](https://github.com/UsamiRenkorin/dsh-workspace-file-view) | Client + Host | `@deepseek-ai/dsh-workspace-file-view` | **blocked** | 1 | DeepSeek Harness dsh-workspace-file-view |
| [mtaech/dsh-material-you](https://github.com/mtaech/dsh-material-you) | Client (Web UI) | `@deepseek-ai/dsh-skin-material-you` | **blocked** | 1 | Material You (M3) skin for DeepSeek Harness: HCT tonal palette + Maple Mono NF CN, clean blue & white |
| [sunyuhuirong/deepseek-account](https://github.com/sunyuhuirong/deepseek-account) | Client + Host | `@deepseek-ai/dsh-deepseek-account` | **blocked** | 1 |  |
| [pany0593/dsh-ui-notifications](https://github.com/pany0593/dsh-ui-notifications) | Client (Web UI) | `@deepseek-ai/dsh-client-ui-notifications` | **blocked** | 1 | System notifications for the DeepSeek Harness web GUI — OS-level popups for finished turns and pending interac |
| [omdsh-dev/dsh-sandbox-micro](https://github.com/omdsh-dev/dsh-sandbox-micro) | Host | `@deepseek-ai/dsh-sandbox-micro` | **blocked** | 1 |  |
| [zhangjiabo522/dsh-tool-doc](https://github.com/zhangjiabo522/dsh-tool-doc) | Host | `@deepseek-ai/dsh-tool-doc` | **blocked** | 0 |  |
| [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | Client (Web UI) | `@deepseek-ai/dsh-plugin-console` | **blocked** | 61 | DeepSeek Harness (DSH) 插件管理面板：一键启用/停用插件 + GitHub dsh-plugin 插件市场，带插件详情与一键安装 \| Plugin manager & marketplace fo |
| [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) | Client (Web UI) | `@deepseek-ai/dsh-client-tonghuashun` | **blocked** | 14 | 仿同花顺的webui插件 |
| [le-soleil-se-couche/dsh-skin-claude-code](https://github.com/le-soleil-se-couche/dsh-skin-claude-code) | Client (Web UI) | `@deepseek-ai/dsh-client-ui-skin-claude-code` | **blocked** | 3 | 完美复刻 Claude Code 皮肤，纪念我的 Vibe Coding 白月光。 |
| [GHJIVHIDD/dsh-plugin-vm-sandbox](https://github.com/GHJIVHIDD/dsh-plugin-vm-sandbox) | Client (Web UI) | `@deepseek-ai/dsh-plugin-vm-sandbox` | **blocked** | 3 | 原生UI界面。面向 DeepSeek Harness Web 的虚拟机沙箱插件：它基于 OrbStack 为每个会话提供独立的 debian/alpine 沙箱虚拟机，在会话视图环中新增「虚拟机」页签，支持查看/启动/休 |
| [Stu-KatoMegumi/dsh-weixin](https://github.com/Stu-KatoMegumi/dsh-weixin) | Client (Web UI) | `@deepseek-ai/dsh-weixin` | **blocked** | 2 | [STU-XIE] 将你的本地dsh接入微信，尝试使用微信进行工作吧，至少比openclaw的体验要好很多 |
| [life1996cou/dsh-codex](https://github.com/life1996cou/dsh-codex) | Client (Web UI) | `@deepseek-ai/dsh-codex-importer` | **blocked** | 2 | 同步codex中的会话到dsh,一键导入上下文. |
| [life1996cou/dsh-timer](https://github.com/life1996cou/dsh-timer) | Client (Web UI) | `@deepseek-ai/dsh-timer` | **blocked** | 1 | 能自由设置计划任务时间,含一键避开高峰模式,只用低峰价格跑. |
| [mccxs/dsh-client-plugin-manager](https://github.com/mccxs/dsh-client-plugin-manager) | Client (Web UI) | `@deepseek-ai/dsh-client-plugin-manager` | **blocked** | 1 | DeepSeek Harness 客户端插件管理器：分组插件清单 + 插件市场标签页（dsh-client-plugin-manager） |
| [GHJIVHIDD/dsh-plugin-session-terminal](https://github.com/GHJIVHIDD/dsh-plugin-session-terminal) | Client (Web UI) | `@deepseek-ai/dsh-plugin-session-terminal` | **blocked** | 1 | DeepSeek Harness 的会话终端观察插件：在会话视图环提供「终端」页签，只读实时展示当前会话 bash 命令、状态、输出与耗时，纯前端无执行/交互能力。 |
| [GHJIVHIDD/dsh-plugin-canvas](https://github.com/GHJIVHIDD/dsh-plugin-canvas) | Client (Web UI) | `@deepseek-ai/dsh-plugin-canvas` | **blocked** | 1 | DeepSeek Harness 的画布预览插件：提供 HTML 设计稿原型页签与 canvas_preview 模型工具，支持隐私打码和沙箱 iframe 渲染。原生UI界面 |
| [qwased/dsh-web-search-duckduckgo](https://github.com/qwased/dsh-web-search-duckduckgo) | Unattributed | `@deepseek-ai/dsh-web-search-duckduckgo-bundle` | **blocked** | 2 |  |
| [OpenSaozi/dsh-xai-catalog](https://github.com/OpenSaozi/dsh-xai-catalog) | Unattributed | `@deepseek-ai/dsh-model-catalog-xai` | **blocked** | 2 | 接入 xAI / Grok Coding Plan 作为 DeepSeek Harness 模型清单插件，自动同步并选用 grok-4.6 等最新模型。 \| Live xAI / Grok model catalog  |
| [lmzhen/dsh-evolution](https://github.com/lmzhen/dsh-evolution) | Unattributed | `@deepseek-ai/dsh-evolution-host` | **blocked** | 1 | Hermes-inspired agent self-evolution plugin family, purpose-built for DeepSeek Harness |
| [OpenSaozi/dsh-bigmodel-catalog](https://github.com/OpenSaozi/dsh-bigmodel-catalog) | Unattributed | `@deepseek-ai/dsh-model-catalog-bigmodel` | **blocked** | 1 | 接入智谱 BigModel / GLM Coding Plan 作为 DeepSeek Harness 模型清单插件，解锁 glm-5.3 等模型。 \| Live Zhipu BigModel / GLM catalo |
| [moyu-good/dsh-lark-bridge](https://github.com/moyu-good/dsh-lark-bridge) | Unattributed | `@deepseek-ai/dsh-lark-bridge` | **blocked** | 1 | 🕊️ Run a full DeepSeek Harness coding agent inside Feishu/Lark — native thinking process (CoT), interactive a |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | Client (Web UI) | `@deepseek-ai/dsh-client-ui-skin-miku` | **blocked** | 0 |  |
| [ericleoo/dsh-escalation-tolerance](https://github.com/ericleoo/dsh-escalation-tolerance) | Client + Host | `@deepseek-ai/dsh-escalation-tolerance` | **blocked** | 0 |  |
| [tuterx/dsh-desktop](https://github.com/tuterx/dsh-desktop) | Unattributed | `@deepseek-ai/dsh-host-electron` | **blocked** | 2 | DeepSeek Harness desktop app - auto-built from upstream + BETA dsh-host-electron plugin |
