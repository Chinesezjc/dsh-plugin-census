# DSH Plugin Catalogue

Generated 2026-08-17 from 527 contract-verified repositories.

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

### Host plugins (7)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | Host | `dsh-workbench-plugin` | npm | 13 | Deepseek-harness-workbench-plugin |
| [lqhl/dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Host | `dsh-pi-tui` | npm | 2 |  |
| [lql341/dsh-scnet](https://github.com/lql341/dsh-scnet) | Host | `dsh-scnet` | npm | 2 | dsh plugin for scnet.cn |
| [literaf/dsh-academy](https://github.com/literaf/dsh-academy) | Host | `dsh-academy` | npm | 0 | Academic mode for DeepSeek Harness (dsh): research persona, anti-fabrication rules for citations and data, bil |
| [lkshjd/dsh-debate](https://github.com/lkshjd/dsh-debate) | Host | `@sky_sun/dsh-debate` | npm | 0 | DeepSeek Harness multi-agent debate plugin: isolated research, cross-examination, judge convergence (backgroun |
| [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) | Host | `@lk251066/dsh-tui` | npm | 0 | Fixed framed terminal workbench plugin for DeepSeek Harness with transcript-only scrolling and persistent sess |
| [lovezi0/dsh-memory-palace](https://github.com/lovezi0/dsh-memory-palace) | Host | `dsh-memory-palace` | Git only | 1 | 把 WorkBuddy 的文件式记忆系统移植进 [DeepSeek Harness](https://www.deepseek.com/harness/) —— 为 Harness 提供**跨会话持久化、人类可直接编辑的 |

### Client plugins (1)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [luis1232023/dsh-workspace-enhance](https://github.com/luis1232023/dsh-workspace-enhance) | Client (Web UI) | `dsh-workspace-enhance` | Git only | 1 | 增强dsh左侧工作区区侧栏——每个工作区文件夹下提供 任务/文件/Git 子 Tab，含文件树与右侧预览、Git 的 Changes/Graph 双视图、搜索、视图切换与添加工作区，界面样式对齐默认插件。 |

### Client + Host (3)

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [luodeb/dsh-web-auth-gateway](https://github.com/luodeb/dsh-web-auth-gateway) | Client + Host | `dsh-web-auth-gateway` | npm | 1 | Authentication reverse-proxy gateway plugin for DeepSeek Harness Web |
| [lkshjd/dsh-balance](https://github.com/lkshjd/dsh-balance) | Client + Host | `@sky_sun/dsh-balance` | npm | 0 | DeepSeek Harness session-header account balance plugin: host /api/balance route over credentials seam plus a 6 |
| [lujianjun19/dsh-llm-github-copilot](https://github.com/lujianjun19/dsh-llm-github-copilot) | Client + Host | `@lujianjun19/dsh-llm-github-copilot` | npm | 0 |  |

## Partial attribution (0)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

_None._

## Unverified attribution (515)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Client (Web UI) | `@deepseek-harness-tui/dsh-tui` | npm | 1755 | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured  |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | Host | `@agentrq/dsh-plugin-agentrq` | npm | 1076 | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agent |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Host | `@anionex/dsh-vision-toolkit` | npm | 588 | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Client (Web UI) | `@huiliyi37/dsh-tianshu-tui` | npm | 198 | dsh-tianshu-tui — 是官方 Dsh web端的交互式终端极简风格 UI 插件。以自研ansi为渲染核心，极度丝滑流畅，在官方的基础上增加了TDD、证据门、视觉图像模块等工作流。 |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | npm | 126 | The web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. A |
| [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | Client (Web UI) | `@sanqi-normal/dsh-webui-market-plugin` | npm | 72 | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Ha |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Host | `@mars-sea/dsh-commandcode-provider` | npm | 48 | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support |
| [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) | Client (Web UI) | `dsh-sidebar-qa` | npm | 16 | 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能 |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | Client (Web UI) | `dsh-gui-customization` | npm | 14 | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | Client + Host | `@leetoners/dsh-ui-subagent-monitor` | npm | 12 |  |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Host | `dsh-import-agents` | npm | 10 | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-clic |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | Host | `@michengai/dsh-skills-manager` | npm | 7 | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Client (Web UI) | `dsh-ui-appearance` | npm | 7 | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, gla |
| [better-er/dsh-tool-autoexpand](https://github.com/better-er/dsh-tool-autoexpand) | Host | `dsh-tool-autoexpand` | npm | 6 | dsh·工具结果自动展开插件 |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | Client (Web UI) | `dsh-token-panel` | npm | 6 | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly  |
| [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) | Host | `@js2hou/dsh-mcp-manager` | npm | 5 | 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。 |
| [MimicHunterZ/dsh-agent-compact](https://github.com/MimicHunterZ/dsh-agent-compact) | Host | `@mimichunterz/agent-compact` | npm | 4 | DSH plugin for agent-driven span compaction: compress chosen conversation spans into self-written checkpoints  |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Host | `@agenticcontrolplane/dsh` | npm | 4 | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs |
| [Letter2025/dsh-model-failover](https://github.com/Letter2025/dsh-model-failover) | Host | `dsh-model-failover` | npm | 3 | Two-level model circuit breaker with failover for DeepSeek Harness: trip a model or a whole provider after rep |
| [Phant0Meow/dsh-memory-meow](https://github.com/Phant0Meow/dsh-memory-meow) | Host | `meow-memory` | npm | 3 |  |
| [Physicolor/harness-ui-enhancer](https://github.com/Physicolor/harness-ui-enhancer) | Client (Web UI) | `harness-ui-enhancer` | npm | 3 | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles  |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Host | `dsh-plugin-subagent-director` | npm | 3 | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plu |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | Host | `gongwen-skill` | npm | 3 | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风 |
| [Rain-Shuoyu/dsh-client-deep-sneak](https://github.com/Rain-Shuoyu/dsh-client-deep-sneak) | Client (Web UI) | `dsh-client-deep-sneak` | npm | 2 | DeepSneak（深度摸鱼）是专门为 DeepSeek Harness 设计的插件，在 agent 工作时播放 B 站视频，并在 agent 需要操作时暂停并提醒用户，方便摸鱼的同时避免因为没有发现 agent 被阻塞 |
| [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) | Host | `dsh-github-skills` | npm | 2 | Skill-first GitHub workflows for DeepSeek Harness: PR triage, review feedback, CI diagnosis, and safe publishi |
| [luoyan96/dsh-catnap-studio](https://github.com/luoyan96/dsh-catnap-studio) | Client (Web UI) | `dsh-catnap-plugins` | npm | 2 | Cat-themed DeepSeek Harness Web UI plugin with three original themes and a calm interactive companion. Not an  |
| [AKS1st/dsh-skill-manager](https://github.com/AKS1st/dsh-skill-manager) | Host | `dsh-skill-manager` | npm | 1 | DSH web plugin: a Skill Manager page in the settings panel browsing system / user / workspace / preset skills, |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | Host | `dsh-mattpocock-skills-deck` | npm | 1 | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统 |
| [FuRongJun-1999/CommonTrustProtocol](https://github.com/FuRongJun-1999/CommonTrustProtocol) | Host | `@furongjun1999/dsh-memory` | npm | 1 | Common Trust Protocol (CTP) 共同信任协议 \| Intelligentics 智能论，研究智能系统存续的底层结构条件 |
| [Julyves/dsh-git-ui](https://github.com/Julyves/dsh-git-ui) | Client (Web UI) | `dsh-git-ui` | npm | 1 | DeepSeek Harness (dsh) plugin: Git status pill in the session header — branch, dirty counts, ahead/behind, rec |
| [JunNanLYS/dsh-layered-memory](https://github.com/JunNanLYS/dsh-layered-memory) | Host | `dsh-layered-memory` | npm | 1 | Layered memory plugin for DeepSeek Harness (dsh) — auto-distills conversations into L0–L3 memories (raw dialog |
| [MangMax/dsh-themes](https://github.com/MangMax/dsh-themes) | Client (Web UI) | `dsh-themes` | npm | 1 |  |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | Host | `@michengai/dsh-agency-agents` | npm | 1 | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | npm | 1 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [clarkzhao/dsh-llm-grok](https://github.com/clarkzhao/dsh-llm-grok) | Host | `dsh-llm-grok` | npm | 1 | dsh plugin for grok |
| [jiay98528-dev/dsh-model-sync](https://github.com/jiay98528-dev/dsh-model-sync) | Host | `dsh-model-sync` | npm | 1 | Writes live provider model lists into DSH settings. Composer rings show 5h/7d plan windows or metered balance  |
| [jiesou/dsh-opencode-zen-free-provider](https://github.com/jiesou/dsh-opencode-zen-free-provider) | Host | `@jiesou/dsh-opencode-zen-free-provider` | npm | 1 | OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据 |
| [kingcharleslzy-ai/dsh-honcho-memory](https://github.com/kingcharleslzy-ai/dsh-honcho-memory) | Host | `dsh-honcho-memory` | npm | 1 |  |
| [kouyichi/dsh-tui-app](https://github.com/kouyichi/dsh-tui-app) | Client (Web UI) | `dsh-tui-app` | npm | 1 | DeepSeek Harness terminal UI plugin (Ink/React) |
| [1710782766/dsh-llm-vision](https://github.com/1710782766/dsh-llm-vision) | Host | `dsh-llm-vision` | npm | 0 | Reliable vision + OCR for text-only models on DeepSeek Harness: describe_image (normal/critical) + extract_tex |
| [1MLightyears/dsh-theme-synthwave](https://github.com/1MLightyears/dsh-theme-synthwave) | Client (Web UI) | `@1mlightyears/dsh-theme-synthwave` | npm | 0 | A synthwave style DeepSeek Harness(dsh) theme |
| [Andrietteprotective835/dsh-mcp-lens](https://github.com/Andrietteprotective835/dsh-mcp-lens) | Host | `dsh-mcp-lens` | npm | 0 | Shrink massive MCP catalogs to two tools, letting DeepSeek Harness search and call 1,000+ remote APIs efficien |
| [AndyYang12345/dsh-butler-memory](https://github.com/AndyYang12345/dsh-butler-memory) | Host | `dsh-butler-memory` | npm | 0 | A dsh plugin that uses the butler memory mcp server to achieve better and organized memory for dsh. Long term  |
| [BPZ0726/dsh-bestui](https://github.com/BPZ0726/dsh-bestui) | Client (Web UI) | `dsh-bestui` | npm | 0 | Adaptive wallpaper and appearance studio for the DeepSeek Harness Web UI. |
| [Czerror/dsh-plugin-prompt-tool](https://github.com/Czerror/dsh-plugin-prompt-tool) | Host | `dsh-plugin-prompt-tool` | npm | 0 | DSH 插件：简体中文行为规范三层注入（常驻层 + prompt 技能 + anchored preset 锚定注入）+ Web UI 编辑 prompt.md |
| [E83737664/dsh-skills-manager](https://github.com/E83737664/dsh-skills-manager) | Host | `dsh-skill-manager` | npm | 0 |  |
| [GGbao-114/dsh-theme-cyberpunk-red](https://github.com/GGbao-114/dsh-theme-cyberpunk-red) | Client (Web UI) | `dsh-theme-cyberpunk2077` | npm | 0 | Cyberpunk 2077 red/neon theme for DeepSeek Harness (dsh-plugin) — fork of dsh-theme-cyberpunk2077 by Tommy0074 |
| [Lion-1209/dsh-plugin-lion-skills](https://github.com/Lion-1209/dsh-plugin-lion-skills) | Host | `dsh-plugin-lion-skills` | npm | 0 | Lion-Skills — a developer-focused agent skill suite (zh) as a DeepSeek Harness plugin: 11 workflow skills moun |
| [Linductor-alkaid/dsh_tui](https://github.com/Linductor-alkaid/dsh_tui) | Client (Web UI) | `dsh-tui` | npm | 0 | 用第三方 TUI 组件给 DeepSeek Harness（dsh） 做的终端界面。视觉框架对齐 WebUI：左侧工作区/会话选择，中间流式对话，右侧状态、token、统计和待办面板。 |
| [NOirBRight/dsh-llm-grok](https://github.com/NOirBRight/dsh-llm-grok) | Host | `dsh-llm-grok` | npm | 0 | Grok subscription OAuth provider and Web configuration plugin for DeepSeek Harness |
| [NoNshiranai/dshx-tui](https://github.com/NoNshiranai/dshx-tui) | Client (Web UI) | `@dshx/tui` | npm | 0 |  |
| [SYMlp/dsh-markdown-memory](https://github.com/SYMlp/dsh-markdown-memory) | Host | `dsh-markdown-memory` | npm | 0 | Markdown folder long-term memory plugin for DeepSeek Harness (dsh): one file per fact, human-editable, git-ver |
| [aqsk-BLG/dsh-memory](https://github.com/aqsk-BLG/dsh-memory) | Host | `dsh-memory` | npm | 0 |  |
| [duhu2000/qcc-mcp-oauth](https://github.com/duhu2000/qcc-mcp-oauth) | Host | `qcc-dsh-mcp-oauth` | npm | 0 | DeepSeek Harness 插件：一键 OAuth 授权连接企查查（Qichacha）MCP 服务 / One-click OAuth connect to Qichacha MCP services for De |
| [huntdier/dsh-open-plugins](https://github.com/huntdier/dsh-open-plugins) | Client (Web UI) | `@huntdier/dsh-client-ui-aionui-panel` | npm | 0 |  |
| [iHow1/dsh-ihow-memory](https://github.com/iHow1/dsh-ihow-memory) | Host | `dsh-ihow-memory` | npm | 0 | iHow Memory plugin for DeepSeek Harness |
| [jiesou/dsh-cline-free-provider](https://github.com/jiesou/dsh-cline-free-provider) | Host | `@jiesou/dsh-cline-free-provider` | npm | 0 | Cline 免费模型接入 DeepSeek Harness |
| [lengduan/dsh-815-skin](https://github.com/lengduan/dsh-815-skin) | Client (Web UI) | `@lengduan/dsh-client-ui-skin-815` | npm | 0 | 1945-08-15 世界名画 dsh皮肤 |
| [lhdrc/dsh-df-memory](https://github.com/lhdrc/dsh-df-memory) | Host | `dsh-df-memory` | npm | 0 |  |
| [liu3734/jira-tasks-dsh-plugin](https://github.com/liu3734/jira-tasks-dsh-plugin) | Client (Web UI) | `dsh-jira-tasks` | npm | 0 |  |
| [lyfZhixing/dsh-cost-tracker](https://github.com/lyfZhixing/dsh-cost-tracker) | Host | `dsh-cost-tracker` | npm | 0 | 为 DeepSeek Harness Web（`dsh --profile web`）记录**每日 LLM 调用花费**，支持按会话 / 模型 / 天多维度查看。 |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Unattributed | `dsh-plugin-desktop` | npm | 10963 | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [liustack/modlens](https://github.com/liustack/modlens) | Unattributed | `@liustack/modlens` | npm | 2661 | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Unattributed | `aegis` | npm | 1035 | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across lo |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | Unattributed | `dshmarket` | npm | 780 | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | Unattributed | `dsh-context` | npm | 174 | 一站式 DeepSeek Harness 上下文可视化插件，Context 面板与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 110 | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| brow |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | Unattributed | `deepseek-idesign` | npm | 80 | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Unattributed | `@nanmicoder/dsh-auto-mode` | npm | 79 | Safe automatic permissions for DeepSeek Harness. |
| [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | Unattributed | `@anysearch/anysearch-dsh` | npm | 78 | AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Unattributed | `dsh-usage-stats` | npm | 59 | Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI (dsh  |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | Unattributed | `dsh-plugins-store` | npm | 56 | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness commu |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Unattributed | `dsh-chat-import` | npm | 54 | Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCo |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Unattributed | `@mstar-harness/dsh` | npm | 49 | A Skill-driven Harness/Loop Engineering Workflow Agent Plugin |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | Unattributed | `dsh1024` | npm | 47 | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install command |
| [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | Unattributed | `dsh-stock-watch` | npm | 40 | A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗 |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Unattributed | `dsh-notifier` | npm | 34 | Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (tel |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | Unattributed | `ax-feishu-bridge` | npm | 31 | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Unattributed | `dsh-interconnect` | npm | 30 | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [geml-spec/geml](https://github.com/geml-spec/geml) | Unattributed | `@geml/dsh-plugin` | npm | 24 | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Unattributed | `dsh-code` | npm | 23 | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制与Codex CLI 、Claude Code 的优秀机制，打造的 DSH-Code. （ |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | Unattributed | `@zseven-w/dsh-crew` | npm | 21 | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | Unattributed | `dsh-lark-bot` | npm | 20 | dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃 |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Unattributed | `billion-context-dsh` | npm | 20 | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides wh |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | npm | 20 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Unattributed | `dsh-codex-connect` | npm | 20 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Unattributed | `dsh-user-experience` | npm | 19 | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX  |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Unattributed | `dsh-codex` | npm | 19 | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | Unattributed | `dsh-lark-link` | npm | 17 | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based co |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | Unattributed | `@canglongcl/dsh-web-review` | npm | 15 | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | Unattributed | `dsh-remote` | npm | 12 | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution buil |
| [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) | Unattributed | `dsh-recall-plugin` | npm | 12 | DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Unattributed | `dsh-continual-evolve` | npm | 11 | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refine |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | Unattributed | `@alib8b8/dsh-plugin-aflare` | npm | 11 | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · |
| [isomoes/ikanban](https://github.com/isomoes/ikanban) | Unattributed | `@isomoes/dsh-ikanban` | npm | 11 | Monorepo for the iKanban browser-surface fork for DeepSeek Harness. |
| [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | Unattributed | `@nonamelego/dsh-catppuccin` | npm | 10 | DeepSeek Harness Web GUI 的 Catppuccin 主题插件：Latte / Frappé / Macchiato / Mocha 四种主题一键切换，内置可开关的玻璃质感（Glassmorphis |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | Unattributed | `dsh-opencode-go-usage` | npm | 10 | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) | Unattributed | `dsh-chat-timeline` | npm | 10 | 1:1 port of DeepSeek's official web right-side chat navigation rail (ScrollNav) as a DeepSeek Harness (DSH) pl |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | Unattributed | `@loongsuite/dsh-plugin` | npm | 10 | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM ca |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | Unattributed | `dsh-tavern` | npm | 9 |  |
| [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Unattributed | `dsh-plugin-subscriptions` | npm | 9 | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth logi |
| [icodesign/orbis](https://github.com/icodesign/orbis) | Unattributed | `@orbisapp/remote-dsh` | npm | 9 | A mobile client for deepseek harness remote control |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | Unattributed | `dsh-remote-plugin` | npm | 8 | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Ses |
| [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | Unattributed | `dsh-free-search` | npm | 7 | Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Unattributed | `dsh-better-edit` | npm | 7 | Hash-anchored read/edit/batch_edit/undo_last_edit tools for DeepSeek Harness (dsh) — dsh port of pi-hashline-e |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Unattributed | `dsh-builtin-toggles` | npm | 7 | Evidence-backed built-in capability inspector with fail-closed controls for DeepSeek Harness Web. |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Unattributed | `dsh-codex-subscription` | npm | 7 | 在 DeepSeek Harness 中直接使用 ChatGPT/Codex 订阅，无需 OpenAI API Key 或 Codex CLI，支持 OAuth 登录、订阅搜索与额度显示 \| ChatGPT/Codex |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | Unattributed | `@kc0ed/dsh-bottom-bar` | npm | 6 | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [AngelosZou/dsh-multi-folder](https://github.com/AngelosZou/dsh-multi-folder) | Unattributed | `dsh-multi-folder` | npm | 5 |  |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Unattributed | `upstream-radar` | npm | 5 | DSH plugin security and dependency monitoring for DeepSeek Harness: exact vulnerable paths, breaking updates,  |
| [NanmiCoder/dsh-plugin-market](https://github.com/NanmiCoder/dsh-plugin-market) | Unattributed | `@nanmicoder/dsh-plugin-market` | npm | 5 | Verified plugin marketplace for DeepSeek Harness — discover, inspect, install, and remove DSH plugins from the |
| [balcoz/dsh-ocr-local](https://github.com/balcoz/dsh-ocr-local) | Unattributed | `dsh-ocr-local` | npm | 5 | Local OCR plugin for DeepSeek Harness — paste an image, get its text via PP-OCRv5 + ONNX Runtime, fully offlin |
| [dfkai/dsh-board](https://github.com/dfkai/dsh-board) | Unattributed | `dsh-board` | npm | 5 | DeepSeek Harness 侧栏用量与成本面板：官方峰谷计价 · 1M 上下文 · 词勋段位 · 成就与热力图 |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | Unattributed | `dsh-github-connect` | npm | 5 | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, cre |
| [13071301808/dsh-composer-expand](https://github.com/13071301808/dsh-composer-expand) | Unattributed | `dsh-composer-expand` | npm | 4 | Composer expand/collapse toggle for DeepSeek Harness (dsh): a ⬆/⬇ button in the composer tool row grows the in |
| [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | Unattributed | `dsh-update-checker` | npm | 4 | 全栈更新管理：对 DeepSeek Harness 主程序与每个已装第三方插件做 npm/GitHub 双源 semver 比对，GUI 横幅随系统语言（中/英）提示可更新插件；一键更新主程序或任意插件，自动备份可回滚， |
| [JMOKSZ/dsh-lark-bridge](https://github.com/JMOKSZ/dsh-lark-bridge) | Unattributed | `@jmoksz/lark-bridge` | npm | 4 | Feishu (Lark) entry point for DeepSeek Harness: drive dsh agents from a Feishu bot with streaming cards, ask/a |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Unattributed | `dsh-github` | npm | 4 |  |
| [Zalpha263/dsh-file-explorer](https://github.com/Zalpha263/dsh-file-explorer) | Unattributed | `dsh-file-explorer` | npm | 4 | 可以像其他agent一样查看当前工作区的文件夹，并且可以预览文件 |
| [iamzcr/dsh-obsidian-assistant](https://github.com/iamzcr/dsh-obsidian-assistant) | Unattributed | `dsh-obsidian-assistant` | npm | 4 | DeepSeek Harness 插件（Cordis toolset）：操作本地 Obsidian 知识库（vault），提供搜索、读写笔记、双向链接 / 关系图谱、批量整理，并通过 Obsidian 的 "Local  |
| [losebird/dsh-plugin-market](https://github.com/losebird/dsh-plugin-market) | Unattributed | `@ace-zone/dsh-market` | npm | 4 | DeepSeek Harness plugins market｜DSH 插件市场 |
| [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) | Unattributed | `@eddyskywalker/dsh-chatgpt-subscription` | npm | 3 |  |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | Unattributed | `dsh-awiki` | npm | 3 | AWiki identity and messaging plugin for DeepSeek Harness |
| [Ch0uHuaZ1/DeepSeek-Harness-Desktop](https://github.com/Ch0uHuaZ1/DeepSeek-Harness-Desktop) | Unattributed | `dsh-desktop-launcher` | npm | 3 | One-click desktop launcher for DeepSeek Harness — starts the web UI, runs it in the tray, and reuses your exis |
| [Er1c0v0/dsh-whale-pet](https://github.com/Er1c0v0/dsh-whale-pet) | Unattributed | `dsh-whale-pet` | npm | 3 | Cute whale-girl pet plugin for the DeepSeek Harness Web UI |
| [Jiyr0119/dsh-workspace-explorer](https://github.com/Jiyr0119/dsh-workspace-explorer) | Unattributed | `@jiyr0119/dsh-workspace-explorer` | npm | 3 | DeepSeek Harness 工作区文件资源管理器:右侧目录树面板,点击/拖拽文件引用进输入框,UI 对齐 DSH 原生风格 \| Workspace file explorer plugin for DeepSee |
| [MHfire/dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) | Unattributed | `@mhfire/dsh-im-bridge` | npm | 3 | 即时通讯渠道(企微、飞书等) ⇄ DeepSeek Harness Agent 桥接 |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Unattributed | `dsh-wecom` | npm | 3 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | Unattributed | `oh-my-dsh` | npm | 3 | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [astra3294/dsh-doctor](https://github.com/astra3294/dsh-doctor) | Unattributed | `dsh-doctor` | npm | 3 | Deterministic diagnostics and recovery for DeepSeek Harness |
| [banlanzs/dsh-web-enhanced](https://github.com/banlanzs/dsh-web-enhanced) | Unattributed | `dsh-web-enhanced` | npm | 3 | [building……] DeepSeek Harness's web enhancement plugin—brings task dashboards, Git graphs, workspace file pane |
| [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) | Unattributed | `dsh-plugin-market` | npm | 3 | DSH 插件市场 — DeepSeek Harness 设置内一键安装社区插件，并提供公开目录站（浏览 / 复制安装命令） |
| [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) | Unattributed | `@dshhubs/plugin-search` | npm | 3 | Discover The Best DSH plugins |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | Unattributed | `dsh-plugin-wechat` | npm | 3 |  |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Unattributed | `dsh-plugin-manager` | npm | 3 | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Unattributed | `dsh-xueqiu` | npm | 3 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [lee259/dsh-workbench](https://github.com/lee259/dsh-workbench) | Unattributed | `dsh-workbench` | npm | 3 | Right-side file workspace for DeepSeek Harness Web. |
| [1e0zj/dsh-plugin-mall](https://github.com/1e0zj/dsh-plugin-mall) | Unattributed | `@1e0zj/dsh-plugin-mall` | npm | 2 | DSH 插件市场：搜索 GitHub dsh-plugin 话题插件，一键安装到本地 dsh（agent 工具 + 设置页插件市场 tab） |
| [D4Cluv-Train/dsh-plugin-manager](https://github.com/D4Cluv-Train/dsh-plugin-manager) | Unattributed | `@d4cluvtrain/dsh-plugin-manager` | npm | 2 | 一个插件管理的小插件，功能逐步增加中... |
| [GXX182/dsh-vision-bridge](https://github.com/GXX182/dsh-vision-bridge) | Unattributed | `dsh-vision-bridge` | npm | 2 | DeepSeek Harness plugin that bridges session images to pluggable vision APIs while keeping DeepSeek as the pri |
| [Jannchie/dsh-bill](https://github.com/Jannchie/dsh-bill) | Unattributed | `dsh-bill` | npm | 2 | DSH (DeepSeek Harness) plugin: per-session cost line + cost attribution report, priced by llm-pricing |
| [LA7-F/dsh-MyCordis](https://github.com/LA7-F/dsh-MyCordis) | Unattributed | `dsh-mycordis` | npm | 2 | 可以让你的dsh中的“Cordis插件”变得可管理，可一键生成安装包\|Make the "Cordis plugins" in your dsh manageable and generate installation |
| [Laplace-bit/dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | Unattributed | `dsh-bell-notify` | npm | 2 | DeepSeek Harness (dsh) 社区插件：为 Agent 生命周期事件合成铃声 + 右下角呼吸状态点，每个事件可上传自定义音频。dsh plugin that rings bells and shows a |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | Unattributed | `@michengai/dsh-archive-manager` | npm | 2 | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [Ready22Race/dsh-team-task](https://github.com/Ready22Race/dsh-team-task) | Unattributed | `@ready22race/dsh-team-task` | npm | 2 | team-task for DeepSeek Harness (dsh): long-horizon multi-agent tasks — reviewed plan DAG, runtime-owned settle |
| [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) | Unattributed | `dsh-knowledge` | npm | 2 | Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management  |
| [TecFancy/dsh-auth-gate](https://github.com/TecFancy/dsh-auth-gate) | Unattributed | `dsh-auth-gate` | npm | 2 | Login gate for the DeepSeek Harness (dsh) web surface: password or shared-token authentication, session cookie |
| [TingRuDeng/dsh-feishu-bot](https://github.com/TingRuDeng/dsh-feishu-bot) | Unattributed | `@tingrudeng/dsh-feishu-bot` | npm | 2 | Feishu (Lark) private-chat frontend for DeepSeek Harness: drive, monitor, and approve local agents from Feishu |
| [XJungit/omdp](https://github.com/XJungit/omdp) | Unattributed | `@omdp/dsh-connector` | npm | 2 | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles |
| [alanzhao0128/dsh-balance-monitor](https://github.com/alanzhao0128/dsh-balance-monitor) | Unattributed | `dsh-balance-monitor` | npm | 2 |  |
| [chenproton/dsh-history](https://github.com/chenproton/dsh-history) | Unattributed | `dsh-history` | npm | 2 | Quickly view, search, and jump to all the messages you sent in a long conversation. |
| [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | Unattributed | `@univer-cli/dsh-univer-plugin` | npm | 2 | Preview Univer sheets, docs & slides inside DeepSeek Harness. |
| [ingleav626-art/dsh-native-launcher](https://github.com/ingleav626-art/dsh-native-launcher) | Unattributed | `dsh-native-launcher` | npm | 2 | 以"零额外安装"为设计原则：仅凭一个官方插件与 Windows 原生机制，让 DeepSeek Harness Web UI 获得桌面 App 式的一键启动体验。 |
| [1264459640/dsh-trellis](https://github.com/1264459640/dsh-trellis) | Unattributed | `dsh-trellis` | npm | 1 | Self-contained Trellis workflow trigger for DeepSeek Harness (DSH / Cordis) |
| [863683348/dsh-plugin-audit](https://github.com/863683348/dsh-plugin-audit) | Unattributed | `dsh-audit` | npm | 1 | Plugin health audit for DeepSeek Harness: sync the GitHub dsh-plugin topic into a local catalog, probe npm, st |
| [314857493/dsh-vision](https://github.com/314857493/dsh-vision) | Unattributed | `dsh-vision-proxy-route` | npm | 1 | Free GLM vision for text-only DeepSeek Harness: paste images in the GUI (auto-transcribe route) + vision tool  |
| [Alvin-Somedo/dsh-app-launcher](https://github.com/Alvin-Somedo/dsh-app-launcher) | Unattributed | `dsh-app-launcher` | npm | 1 | 把 DSH Web GUI 变成"桌面应用":以独立应用窗口打开,关闭窗口即优雅退出整个 DSH 进程 |
| [AngelosZou/dsh-python-env](https://github.com/AngelosZou/dsh-python-env) | Unattributed | `dsh-python-env` | npm | 1 |  |
| [Blank-not-black/dsh-remote-plugin](https://github.com/Blank-not-black/dsh-remote-plugin) | Unattributed | `dsh-remote-plugin` | npm | 1 | DSH Remote 插件独立包：DSH 原生侧边栏入口 + 右侧抽屉管理页；内置网关随 DSH 自动启停 |
| [Britneycode/dsh-update-center](https://github.com/Britneycode/dsh-update-center) | Unattributed | `dsh-update-center` | npm | 1 | dsh (DeepSeek Harness) 更新中心与插件市场：自托管 plugins.json 注册表（GitHub dsh-plugin 主题自动聚合 + npm 包名映射秒级安装），一键安装/更新/卸载/禁用插件 |
| [CN-Leo/dsh-deepseek-balance](https://github.com/CN-Leo/dsh-deepseek-balance) | Unattributed | `dsh-deepseek-balance` | npm | 1 | deepseek-harness 插件，实时查询deepseek账号余额 |
| [Choi-Peng/dsh-deepseek-balance](https://github.com/Choi-Peng/dsh-deepseek-balance) | Unattributed | `@choi-p/dsh-deepseek-balance` | npm | 1 | DeepSeek Harness bundle plugin: shows your DeepSeek account balance in the web sidebar footer, above Settings. |
| [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) | Unattributed | `dshmarketplace-plugin` | npm | 1 | Browse and install DSH plugins from inside DeepSeek Harness. /store, a settings tab, and agent tools — bilingu |
| [ECHOUniverse/dshacp](https://github.com/ECHOUniverse/dshacp) | Unattributed | `@hanxu131/dshacp` | npm | 1 |  |
| [FeatherHunter/dsh-prompt](https://github.com/FeatherHunter/dsh-prompt) | Unattributed | `dsh-prompt` | npm | 1 | DeepSeek Harness 的 Prompt 工具箱：别再复制粘贴——24 条深度模板随手点，/prompt 与智能推荐主动兜底，装好即用、可自定义。 \| The Prompt toolbox for DeepS |
| [H97y/dsh-devflow](https://github.com/H97y/dsh-devflow) | Unattributed | `dsh-devflow` | npm | 1 | Automated development pipeline plugin for DeepSeek Harness: requirement pool → LLM refine/design/plan/review → |
| [Hanihahaha/deepseek-harness-plugins](https://github.com/Hanihahaha/deepseek-harness-plugins) | Unattributed | `dsh-auto-approve` | npm | 1 |  |
| [MarecGents/deepseek-harness-hub](https://github.com/MarecGents/deepseek-harness-hub) | Unattributed | `@marecgents/dsh-hub` | npm | 1 | windows desktop project as plugin for deepseek harness |
| [Oo0520/dsh-plugin-doctor](https://github.com/Oo0520/dsh-plugin-doctor) | Unattributed | `dsh-plugin-doctor` | npm | 1 |  |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Unattributed | `dsh-cloudflare-browser-run` | npm | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [Saikel-Orado-Liu/dsh-cost-meter](https://github.com/Saikel-Orado-Liu/dsh-cost-meter) | Unattributed | `@gamegeek-saikel/dsh-cost-meter` | npm | 1 | Cost tracking plugin for the DeepSeek Harness Web GUI — snapshot-anchored per-turn pricing, account balance, a |
| [SiriLee/dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | Unattributed | `dsh-edit-approval` | npm | 1 | DeepSeek Harness plugin: per-edit approval with red/green line diff before write/edit/str_replace_editor (appr |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | Unattributed | `dsh-rewind-plugin` | npm | 1 | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantic |
| [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) | Unattributed | `@steven-wu/dsh-cost-meter` | npm | 1 | dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from t |
| [TeaClearInkII/DSH-Marketplaces-Nexus](https://github.com/TeaClearInkII/DSH-Marketplaces-Nexus) | Unattributed | `dsh-marketplaces-nexus` | npm | 1 | 一个DSH插件市场的市场集 · DSH 万市枢纽。 |
| [TianYa-DAO/dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine) | Unattributed | `dsh-wallpaper-engine` | npm | 1 | deepseek-和人生是、 |
| [WenhongPan/dsh-projects](https://github.com/WenhongPan/dsh-projects) | Unattributed | `dsh-projects` | npm | 1 | Codex-inspired project and session management for DeepSeek Harness. |
| [ZhuSheng-0807/dsh-novel-reader](https://github.com/ZhuSheng-0807/dsh-novel-reader) | Unattributed | `dsh-novel-reader` | npm | 1 |  |
| [cookiesheep/whale-on-desk](https://github.com/cookiesheep/whale-on-desk) | Unattributed | `whale-on-desk` | npm | 1 | A pixel-art whale companion for DeepSeek Harness — it swims while your agents work and taps the glass when an  |
| [dshworks/dsh-crew](https://github.com/dshworks/dsh-crew) | Unattributed | `@dshworks/dsh-crew` | npm | 1 | Watch Claude Code and Codex work inside dsh: each gets a real terminal pane in your session's workspace that y |
| [dshworks/dsh-meter](https://github.com/dshworks/dsh-meter) | Unattributed | `@dshworks/dsh-meter` | npm | 1 | The DeepSeek time-of-use meter for dsh: what this session cost, which tariff is running, when it flips, and th |
| [gfds2005/dsh-timed-goal](https://github.com/gfds2005/dsh-timed-goal) | Unattributed | `dsh-timed-goal` | npm | 1 | DSH（DeepSeek Harness） Web 插件：在任意对话中配置一次性（或每日重复）任务——一个绝对时间加上要执行的提示词。到点时，插件将对话权限固定为 full access（danger-full-acce |
| [fuyu-jie/dsh-go-plugin](https://github.com/fuyu-jie/dsh-go-plugin) | Unattributed | `@fuyu-jie/dsh-go-plugin` | npm | 1 |  |
| [gxx950224/ggame](https://github.com/gxx950224/ggame) | Unattributed | `@ggame/backpack` | npm | 1 | 干活跟打魔兽一样累 |
| [hyzyn/dsh-plugin-kit](https://github.com/hyzyn/dsh-plugin-kit) | Unattributed | `@hyzyn/dsh-plugin-kit` | npm | 1 | dsh-plugin-kit is a general-purpose plugin collection for the DeepSeek Harness (DSH) Web GUI: environment vari |
| [hytime/dsh-companion](https://github.com/hytime/dsh-companion) | Unattributed | `@hytime/dsh-companion` | npm | 1 | DSH Companion 三件套(插件/技能/CLI)发布仓库 - hy-companion 陪伴系统 |
| [iluluyu/dsh-plugin-outline](https://github.com/iluluyu/dsh-plugin-outline) | Unattributed | `dsh-plugin-outline` | npm | 1 | ChatGPT-style right-edge turn navigation plugin for DeepSeek Harness (dsh) web |
| [jeremy9682/dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | Unattributed | `@jeremy9682/dsh-acp` | npm | 1 | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [jcc1997/dsh-plugins](https://github.com/jcc1997/dsh-plugins) | Unattributed | `dsh-git` | npm | 1 |  |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Unattributed | `@jumpserver-east/jumpserver-dsh` | npm | 1 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [kingcharleslzy-ai/dsh-cost-balance-pro](https://github.com/kingcharleslzy-ai/dsh-cost-balance-pro) | Unattributed | `dsh-cost-balance-pro` | npm | 1 |  |
| [kirkchinese/claude2dsh](https://github.com/kirkchinese/claude2dsh) | Unattributed | `claude2dsh` | npm | 1 |  |
| [leo-lab-2026/dsh-lark-bridge](https://github.com/leo-lab-2026/dsh-lark-bridge) | Unattributed | `dsh-lark-bridge` | npm | 1 |  |
| [263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) | Unattributed | `dsh-verify` | npm | 0 | Independent browser acceptance testing for agent deliverables. Agents self-test and pass; real browsers tell t |
| [22-ai-00/dsh-enhanced](https://github.com/22-ai-00/dsh-enhanced) | Unattributed | `@dsh-enhanced/acp` | npm | 0 | 专门用来实现dsh的增强插件集 |
| [940842546/dsh-permissions](https://github.com/940842546/dsh-permissions) | Unattributed | `dsh-permissions` | npm | 0 |  |
| [A-G-guy/dsh-plugins](https://github.com/A-G-guy/dsh-plugins) | Unattributed | `@dsh-plus/bundle-main` | npm | 0 | DSH+ —— DeepSeek Harness 自定义插件 monorepo：移动端窄屏适配 / 任务结束邮件通知 / 子代理独立模型 / 自定义 LLM 路由 / ...... |
| [AlexYin-Tongji/dsh-plugin-console](https://github.com/AlexYin-Tongji/dsh-plugin-console) | Unattributed | `dsh-plugin-console` | npm | 0 | DSH Plugin Console: a verified community plugin catalog and profile manager for DeepSeek Harness |
| [Artificialwhale/session-reader-plugin](https://github.com/Artificialwhale/session-reader-plugin) | Unattributed | `dsh-session-reader` | npm | 0 | Allow agent to acquire context from other sessions. |
| [Awu12277/dsh-sleep-send](https://github.com/Awu12277/dsh-sleep-send) | Unattributed | `dsh-sleep-send` | npm | 0 | DSH Web 的定时发送插件：在输入框右侧提供「定时发送」按钮与配置面板，支持智能时段、自定义日期时间、多个定时任务，并通过 localStorage 持久化任务，刷新页面后自动恢复。 |
| [CharlotteN7/dsh-dlp](https://github.com/CharlotteN7/dsh-dlp) | Unattributed | `dsh-dlp` | npm | 0 | Stops a DeepSeek Harness agent from reading your credential files and pasting secrets into tool calls |
| [CharlotteN7/dsh-netguard](https://github.com/CharlotteN7/dsh-netguard) | Unattributed | `dsh-netguard` | npm | 0 | A host allowlist on DeepSeek Harness web_fetch and web_search, enforced at connect time |
| [CharlotteN7/dsh-ocsf-forwarder](https://github.com/CharlotteN7/dsh-ocsf-forwarder) | Unattributed | `dsh-ocsf-forwarder` | npm | 0 | Ships DeepSeek Harness session activity to your SIEM as OCSF 1.9.0 records |
| [ChiYuKe/dsh-message-map](https://github.com/ChiYuKe/dsh-message-map) | Unattributed | `dsh-message-map` | npm | 0 | 为 DSH 移植 Codex 风格的会话消息导航轨道（Message map） |
| [Enderfga/dsh-clawo](https://github.com/Enderfga/dsh-clawo) | Unattributed | `@enderfga/dsh-clawo` | npm | 0 | DeepSeek Harness bundle: register Claw Orchestrator as an ACP subagent provider — delegate a dsh subagent to a |
| [F1shn/dsh-session-cost](https://github.com/F1shn/dsh-session-cost) | Unattributed | `dsh-session-cost` | npm | 0 | DeepSeek Harness 会话与单次回复费用显示插件 |
| [Fectivnfy112357/dsh-dual-plugin-guide](https://github.com/Fectivnfy112357/dsh-dual-plugin-guide) | Unattributed | `dsh-dual-plugin-guide` | npm | 0 | Dual-format plugin development guide: DSH static plugin package (dsh plugin --profile add) + Agent Plugins 1.0 |
| [FuncWei/dsh-kanban](https://github.com/FuncWei/dsh-kanban) | Unattributed | `dsh-kanban` | npm | 0 |  |
| [GraySilver/dsh-task-modes](https://github.com/GraySilver/dsh-task-modes) | Unattributed | `@graysilver/dsh-task-modes` | npm | 0 | 让每一次 Agent 协作都有明确的工作方式。Independent DeepSeek Harness Web plugin with composable Execute/Plan, Standard/First pr |
| [Hanihahaha/dsh-auto-approve](https://github.com/Hanihahaha/dsh-auto-approve) | Unattributed | `dsh-auto-approve` | npm | 0 |  |
| [JayDong9130/dsh-evolution-lab](https://github.com/JayDong9130/dsh-evolution-lab) | Unattributed | `dsh-evolution-lab` | npm | 0 | Proof-carrying Skill self-evolution for DeepSeek Harness |
| [JxaMe/dsh-telegram-bridge](https://github.com/JxaMe/dsh-telegram-bridge) | Unattributed | `dsh-telegram-bridge` | npm | 0 |  |
| [KeFan-J/dsh-token-usage](https://github.com/KeFan-J/dsh-token-usage) | Unattributed | `dsh-token-usage` | npm | 0 |  |
| [LaoYueHanNi/dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree) | Unattributed | `dsh-git-worktree` | npm | 0 |  |
| [Lan-zk/dsh-at-mention](https://github.com/Lan-zk/dsh-at-mention) | Unattributed | `dsh-at-mention` | npm | 0 | @-mention context references for DeepSeek Harness: workspace file search and cross-session references from the |
| [Leeaoyin/dsh-agent-harness-audit](https://github.com/Leeaoyin/dsh-agent-harness-audit) | Unattributed | `dsh-harness-audit` | npm | 0 | Audits your agent harness stability using deepseek harness. |
| [Leo-Ayh-Oday/dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) | Unattributed | `@leooday/dsh-bundle` | npm | 0 | Runtime governance for DeepSeek Harness: progress governor, evidence freshness, completion guard, capability r |
| [LyaxZ/dsh-quick-toc](https://github.com/LyaxZ/dsh-quick-toc) | Unattributed | `dsh-quick-toc` | npm | 0 | DeepSeek Harness 对话大纲插件：按回合分组的 Markdown 标题目录，自动跟随高亮，平滑跳转导航。 |
| [NoNshiranai/dshx-working-activity](https://github.com/NoNshiranai/dshx-working-activity) | Unattributed | `@dshx/working-activity` | npm | 0 |  |
| [PandaAIDD/dsh-aidd](https://github.com/PandaAIDD/dsh-aidd) | Unattributed | `dsh-aidd` | npm | 0 | Claude Science-style AIDD research workbench for DeepSeek Harness — ReAct research loop, versioned artifacts w |
| [ReachGa0/dsh-desktop](https://github.com/ReachGa0/dsh-desktop) | Unattributed | `dsh-desktop-windows-launcher` | npm | 0 | DeepSeek Harness 桌面版（Windows）：双击即用，选区截图直接问 AI · 系统托盘、会话管理 · Featured in awesome-dsh-plugin |
| [Snowfly11531/dsh-wechat-bot](https://github.com/Snowfly11531/dsh-wechat-bot) | Unattributed | `dsh-wechat-bot` | npm | 0 | WeChat QR-Code Bot Plugin for DeepSeek Harness — Scan-to-login WeChat bot built on the official iLink Bot API. |
| [Sttrevens/dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) | Unattributed | `@steven-wu/dsh-linked-folders` | npm | 0 | dsh plugin: multi-folder workspace — global linked-folders list + per-session on-the-fly linking, managed from |
| [V-Reason/dsh-task-notify](https://github.com/V-Reason/dsh-task-notify) | Unattributed | `dsh-task-notify` | npm | 0 | DeepSeekHarness任务完成时进行消息推送提醒（微信+Windows通知） |
| [VeryInt/dsh-image-vision](https://github.com/VeryInt/dsh-image-vision) | Unattributed | `dsh-image-vision` | npm | 0 |  |
| [Viger1/dsh-pilot](https://github.com/Viger1/dsh-pilot) | Unattributed | `dsh-pilot` | npm | 0 | ✋ Hands for your DeepSeek Harness agent — autonomous browser operation by accessibility refs, with a permissio |
| [Viger1/dsh-preview](https://github.com/Viger1/dsh-preview) | Unattributed | `dsh-preview` | npm | 0 | 👁 Eyes for your DeepSeek Harness agent — it opens, sees, and fixes what it builds. Headless-browser verificat |
| [Walvez/dsh-search-failover](https://github.com/Walvez/dsh-search-failover) | Unattributed | `dsh-search-failover` | npm | 0 | DSH provider-level web search failover pool: 8 free/paid backends with quota-aware circuit breaking (keeps nat |
| [WilliamShi666/dsh-wsl-workspace-picker](https://github.com/WilliamShi666/dsh-wsl-workspace-picker) | Unattributed | `dsh-wsl-workspace-picker` | npm | 0 | Enhanced workspace directory browser for DeepSeek Harness web UI: one-click access to  /mnt  Windows drives un |
| [YOYOYOAKE/dsh-token-plan-monitor](https://github.com/YOYOYOAKE/dsh-token-plan-monitor) | Unattributed | `@yoyoyoake/dsh-token-plan-monitor` | npm | 0 |  |
| [Yidien/dsh-capture-window](https://github.com/Yidien/dsh-capture-window) | Unattributed | `dsh-capture-window` | npm | 0 | DeepSeek Harness 旁路捕获插件：随手丢想法进独立的安静新会话，不打断主线上下文。 |
| [ZaVang/dsh-diorama](https://github.com/ZaVang/dsh-diorama) | Unattributed | `dsh-diorama` | npm | 0 |  |
| [ankesu/dsh-emoji-wallet](https://github.com/ankesu/dsh-emoji-wallet) | Unattributed | `dsh-emoji-wallet` | npm | 0 | Minimal DeepSeek balance wallet for DSH: one click shows your API balance in the session header. · DSH 余额小钱包：顶 |
| [ankesu/dsh-live2d-pet](https://github.com/ankesu/dsh-live2d-pet) | Unattributed | `dsh-live2d-pet` | npm | 0 | Live2D companion for DeepSeek Harness: render a Cubism model in the Web UI with state-driven expressions and m |
| [biggerboy/dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) | Unattributed | `@biggerboy123/dsh-conversation-anchors` | npm | 0 | Sidebar conversation anchor navigation plugin for DeepSeek Harness web GUI |
| [blooming-fang/dsh-feishu-notifier](https://github.com/blooming-fang/dsh-feishu-notifier) | Unattributed | `dsh-feishu-notifier` | npm | 0 | DeepSeek Harness 飞书通知插件：在需要用户操作或对话结束时发送飞书机器人提醒，并支持持久化配置。 |
| [brzvsk/dsh-plugins](https://github.com/brzvsk/dsh-plugins) | Unattributed | `dsh-visualize` | npm | 0 |  |
| [dami9527/dsh-image-pathify](https://github.com/dami9527/dsh-image-pathify) | Unattributed | `dsh-image-pathify` | npm | 0 | DeepSeek Harness 插件：让 deepseek-v4-flash 等不能看图的模型也能处理聊天图片，内置识图工具。安装：dsh plugin --profile web add dsh-image-path |
| [ddll8023/dsh-codex](https://github.com/ddll8023/dsh-codex) | Unattributed | `dsh-codex` | npm | 0 | OpenAI Codex (ChatGPT Plus/Pro OAuth) provider plugin for DeepSeek Harness (DSH). dsh-plugin |
| [dove-a/dsh-chat-window-fold](https://github.com/dove-a/dsh-chat-window-fold) | Unattributed | `dsh-chat-window-fold` | npm | 0 | DSH web GUI plugin: auto fold/expand the chat window — bottom checkpoints hide old pages, top-scroll expands e |
| [dushaobindoudou/dsh-acp](https://github.com/dushaobindoudou/dsh-acp) | Unattributed | `dsh-acp-server` | npm | 0 | Agent Client Protocol (ACP) server plugin for the DeepSeek Harness (dsh) - drive dsh agents from Zed and any A |
| [eddiehuang227-source/live-talk](https://github.com/eddiehuang227-source/live-talk) | Unattributed | `dsh-live-talk` | npm | 0 | Animate any photo into a responsive virtual girl. She talks, turns, smiles, and moves naturally in sync with y |
| [gdy01/dsh-token-cost](https://github.com/gdy01/dsh-token-cost) | Unattributed | `dsh-token-cost` | npm | 0 | DSH plugin: per-project LLM token usage and RMB cost (input / cache-hit / output) based on model standard pric |
| [gjj-star/dsh-conversation-navigato](https://github.com/gjj-star/dsh-conversation-navigato) | Unattributed | `dsh-conversation-navigator` | npm | 0 | DSH 会话导航 |
| [gxx950224/backpack](https://github.com/gxx950224/backpack) | Unattributed | `@ggame/backpack` | npm | 0 | dsh backpack plugin |
| [jiewaigongxing/dsh-jiey-browser](https://github.com/jiewaigongxing/dsh-jiey-browser) | Unattributed | `dsh-jiey-browser` | npm | 0 | DeepSeek Harness plugin: drive Jiey Browser over MCP |
| [jyhn-hunao/dsh-session-cost](https://github.com/jyhn-hunao/dsh-session-cost) | Unattributed | `dsh-session-cost` | npm | 0 |  |
| [kaixinbaba/dsh-complete-notify](https://github.com/kaixinbaba/dsh-complete-notify) | Unattributed | `dsh-complete-notify` | npm | 0 | 任务完成时播放提示音并弹出小通知（页面内 toast + 后台时系统通知）。纯浏览器方案，零系统依赖，跨 Windows/macOS/Linux。 |
| [keepview/dsh-lark](https://github.com/keepview/dsh-lark) | Unattributed | `dsh-lark` | npm | 0 | Minimal Lark/Feishu gateway plugin for DeepSeek Harness (dsh) — chat with your agent from Feishu, one topic =  |
| [jlu-lujing/dsh-kit](https://github.com/jlu-lujing/dsh-kit) | Unattributed | `dsh-kit` | npm | 0 |  |
| [kouyichi/dsh-plugins](https://github.com/kouyichi/dsh-plugins) | Unattributed | `dsh-a2a` | npm | 0 | dsh (DeepSeek Harness) plugin family: 31 plugins / 80+ tools — learn/profile/dream/tower/kanban + scaffold/gua |
| [libinghui55/dsh-tavily-search](https://github.com/libinghui55/dsh-tavily-search) | Unattributed | `dsh-tavily-search` | npm | 0 | Tavily-backed web search provider plugin for DeepSeek Harness (dsh): GUI config card with API key + on/off swi |
| [light-only/dsh-codex-select](https://github.com/light-only/dsh-codex-select) | Unattributed | `dsh-codex-select` | npm | 0 |  |
| [liulei237136/dsh-test-plugin](https://github.com/liulei237136/dsh-test-plugin) | Unattributed | `dsh-test-plugin` | npm | 0 |  |
| [liulei237136/dsh-publish-plugin](https://github.com/liulei237136/dsh-publish-plugin) | Unattributed | `dsh-publish-plugin` | npm | 0 |  |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Host | `dsh-memory-evolve` | Git only | 143 | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广 |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Host | `local-shell-mcp-dsh` | Git only | 49 | Enables LLM to use a cli environment. |
| [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-denia` | Git only | 10 | DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。 |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Host | `dsh-plugin-guard` | Git only | 8 | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, an |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | Git only | 7 | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / liv |
| [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | Client (Web UI) | `dsh-popout-sidebar` | Git only | 4 |  |
| [lhwu1/dsh-withskillhub](https://github.com/lhwu1/dsh-withskillhub) | Host | `dsh-withskillhub` | Git only | 4 | 携手skillhub，快捷安装启用丰富的skill，一键装配方便快捷。 |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | Git only | 3 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [Dylan37670/dsh-plugin-panel](https://github.com/Dylan37670/dsh-plugin-panel) | Client (Web UI) | `@dsh-community/plugin-panel` | Git only | 2 | DSH plugin marketplace panel with full catalog search, Chinese translation, semantic search, favorites, and li |
| [RealHacker/dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | Client (Web UI) | `dsh-theme-colorizer` | Git only | 2 | A Deepseek Harness plugin that gives its UI color themes |
| [YLingHao/dsh-codeui](https://github.com/YLingHao/dsh-codeui) | Client (Web UI) | `dsh-codeui` | Git only | 2 | A code-review workbench for DeepSeek Harness and  jump from an always-on turn rail straight back to that turn  |
| [Ye-Yu-Mo/dsh-llm-proxy](https://github.com/Ye-Yu-Mo/dsh-llm-proxy) | Host | `dsh-llm-proxy` | Git only | 2 | DeepSeek Harness (dsh) 全局 HTTP 代理插件：undici setGlobalDispatcher + EnvHttpProxyAgent，配置化、热切换、可观测 |
| [Yui-Little/dsh-mobile-shell](https://github.com/Yui-Little/dsh-mobile-shell) | Host | `dsh-mobile-shell` | Git only | 2 | Mobile shell UI plugin for DeepSeek Harness web: overlay drawer, full-width conversation, settings sheet, mark |
| [Zalpha263/dsh-ui-beautify](https://github.com/Zalpha263/dsh-ui-beautify) | Client (Web UI) | `dsh-ui-beautify` | Git only | 2 | 用于dsh界面美化，内置四种颜色主题，并且可上传自定义背景 |
| [aka-danielZhang/dsh-mcp-settings](https://github.com/aka-danielZhang/dsh-mcp-settings) | Host | `dsh-mcp-settings` | Git only | 2 | DSH bundle for MCP server management, inventory status, and Web settings |
| [bilbillm/deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) | Client (Web UI) | `dsh-angelina-themes` | Git only | 2 | Angelina light and dark glass themes with parallax for DeepSeek Harness |
| [daboge-beach/dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio) | Client (Web UI) | `@dsh-skin-studio/gallery` | Git only | 2 | 🎨 DeepSeek Harness skin studio — built-in curated skins + a community skin gallery. 皮肤工作室：内置精选皮肤 · 用户上传皮肤中心，让 |
| [jypjypjypjyp/dsh-vqa-agent](https://github.com/jypjypjypjyp/dsh-vqa-agent) | Host | `dsh-vqa-agent` | Git only | 2 | DSH 插件:vqa_ask 双模型视觉问答 —— 主模型提问 → 视觉模型看图回答,UI 实时展示 QA 过程,支持多模态视觉模型选择 |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | Client (Web UI) | `dsh-skin-market` | Git only | 2 |  |
| [0928OYX/dsh-free-skins](https://github.com/0928OYX/dsh-free-skins) | Client (Web UI) | `@dsh-external/dsh-client-ui-skin-gallery` | Git only | 1 | DeepSeek Harness (DSH) 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用免重启 + 皮肤不透明度 + 自定义对话区背景（CC BY-NC-SA 4.0，0928OYX） |
| [534119219/dsh-custom-provider-reasoning](https://github.com/534119219/dsh-custom-provider-reasoning) | Host | `dsh-custom-provider-reasoning` | Git only | 1 | dsh 插件：让自定义提供方（pi-ai 手写路由）的所有模型都能选择思考强度（推理等级），选择经原厂适配器真正发往线上。A dsh plugin giving every custom-provider model s |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Host | `dsh-web-tools` | Git only | 1 | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXN |
| [GitRuozhi/dsh-github-mcp](https://github.com/GitRuozhi/dsh-github-mcp) | Host | `dsh-github-mcp` | Git only | 1 | DSH-GitHub bridge: direct GitHub access for DSH via the official GitHub MCP server, plus a fix for the officia |
| [HeWhenJay/dsh-provider-hub](https://github.com/HeWhenJay/dsh-provider-hub) | Host | `@hewhenjay/dsh-provider-hub` | Git only | 1 | Native DSH provider hub with official account OAuth, API channels, model discovery, failover, and logs |
| [JonyChan8394/dsh-llm-balance](https://github.com/JonyChan8394/dsh-llm-balance) | Host | `dsh-llm-balance` | Git only | 1 | Show LLM API balances under the chat input: DeepSeek, OpenRouter, SiliconFlow and any custom provider with a b |
| [LeslieWylie/agent-loop-workflow](https://github.com/LeslieWylie/agent-loop-workflow) | Host | `agent-loop-workflow` | Git only | 1 | A project-agnostic multi-agent collaboration protocol for the DeepSeek Harness: loop guards that stop runaway  |
| [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) | Host | `evo-memory` | Git only | 1 | agent memory plugin based on CLP |
| [Xiaopeng212321414321413231/critical-skillgovern](https://github.com/Xiaopeng212321414321413231/critical-skillgovern) | Host | `dsh-skillgovern` | Git only | 1 | 🔍 Critical SkillGovern — 批判式技能治理框架。跨平台（Hermes/Claude Code/Codex）技能质量审查方法论，已在 120+ 技能实战验证 |
| [asakumizy/dsh-local-skills](https://github.com/asakumizy/dsh-local-skills) | Host | `dsh-local-skills` | Git only | 1 | DSH plugin: local SKILL browser with a Notion-style web UI (live watch, Use-button guide, bundled starter skil |
| [flg1217/dsh-llm-agy](https://github.com/flg1217/dsh-llm-agy) | Host | `@dsh-external/dsh-llm-agy` | Git only | 1 | AGY (Antigravity CLI) integration for DeepSeek Harness: LLM adapter subagents, deep web search, connectivity d |
| [lemonorangeapple/JuneAgent](https://github.com/lemonorangeapple/JuneAgent) | Host | `june-agent` | Git only | 1 | A Persona and Skills Set for My Daily Use. For Deepseek Harness and Claude Code. |
| [lishLRF/dsh-3d-model-viewer](https://github.com/lishLRF/dsh-3d-model-viewer) | Host | `dsh-3d-model-viewer` | Git only | 1 | DSH 插件：在 DeepSeek Harness 的 Web 界面查看 OBJ/STL/STEP 三维模型，并转译为标准化、LLM 可读的 JSON（含语义分析），一键发送给 AI。 |
| [AtomerCore/dsh-qq-agent-mail](https://github.com/AtomerCore/dsh-qq-agent-mail) | Host | `dsh-qq-agent-mail` | Git only | 0 | A DeepSeek Harness plugin that integrates QQ Agent Mail. |
| [Bryan-cmf/dsh-vector-memory](https://github.com/Bryan-cmf/dsh-vector-memory) | Host | `@bryan-cmf/dsh-vector-memory` | Git only | 0 | DSH-Plugin: durable agent memory core - mem_save/mem_search/mem_health backed by storageDomain (survives resta |
| [FUSU123fusu/dsh-tui-checkpoints](https://github.com/FUSU123fusu/dsh-tui-checkpoints) | Client (Web UI) | `dsh-tui-checkpoints` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-jobs](https://github.com/FUSU123fusu/dsh-tui-jobs) | Client (Web UI) | `dsh-tui-jobs` | Git only | 0 |  |
| [FUSU123fusu/dsh-tui-model-switch](https://github.com/FUSU123fusu/dsh-tui-model-switch) | Client + Host | `dsh-tui-model-switch` | Git only | 0 |  |
| [Failing-coachman563/dsh-skill-viewer](https://github.com/Failing-coachman563/dsh-skill-viewer) | Host | `dsh-skill-viewer` | Git only | 0 | Manage and organize DSH skills via a web interface with one-click enable/disable, batch migration, and workspa |
| [GMH13552/dsh-timer-scheduler](https://github.com/GMH13552/dsh-timer-scheduler) | Client (Web UI) | `dsh-timer-scheduler-ui` | Git only | 0 | 简单的dsh定时任务插件 支持定时列表任务、ui显示，对于长期任务有益 |
| [Github-CJX/dsh-tool-imagegen](https://github.com/Github-CJX/dsh-tool-imagegen) | Host | `@local/dsh-tool-imagegen` | Git only | 0 | DSH Desktop 对话内联生图插件** — 模型在对话中自动调用 `generate_image` 工具，图片直接内联显示在对话框里，无需外部面板、无需手动切换。 |
| [Hanihahaha/dsh-sandbox-argument-normalizer](https://github.com/Hanihahaha/dsh-sandbox-argument-normalizer) | Host | `dsh-sandbox-argument-normalizer` | Git only | 0 |  |
| [Hanihahaha/dsh-skill-mcp-manager](https://github.com/Hanihahaha/dsh-skill-mcp-manager) | Host | `dsh-skill-mcp-manager` | Git only | 0 |  |
| [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) | Host | `dsh-llm-ollama` | Git only | 0 | Native Ollama Cloud provider and Web configuration plugin for DeepSeek Harness |
| [RossBool/dsh-plugins](https://github.com/RossBool/dsh-plugins) | Host | `dsh-agent-orchestration` | Git only | 0 | DeepSeek Harness (DSH) 插件合集：协作编排、跨会话、团队模式、计划引擎、话题时间轴、语音、MCP 管理、提示词增强 |
| [UnKnownFish125/dsh-deepmemory](https://github.com/UnKnownFish125/dsh-deepmemory) | Host | `dsh-deepmemory` | Git only | 0 | DeepSeek Harness 长期记忆系统：跨会话记忆 + 无限上下文（设计对齐 AstrBot livingmemory，作者 lxfight；AGPL-3.0） |
| [WonderfulEdge/dsh-publish-skill](https://github.com/WonderfulEdge/dsh-publish-skill) | Host | `dsh-publish-skill` | Git only | 0 | dsh h0发版技能 |
| [arcships/dsh-llm-aimux](https://github.com/arcships/dsh-llm-aimux) | Host | `@arcships/dsh-llm-aimux` | Git only | 0 | DeepSeek Harness (dsh) LLM adapter backed by aimux — one Rust engine, 325+ providers as dsh model routes |
| [chuyue-yue/dsh-plugin-manager](https://github.com/chuyue-yue/dsh-plugin-manager) | Client (Web UI) | `dsh-plugin-installer-ui` | Git only | 0 |  |
| [cyjyyd/dsh-tui](https://github.com/cyjyyd/dsh-tui) | Client (Web UI) | `dsh-ssh-tui` | Git only | 0 | DeepSeek Harness enhanced plugin:dsh-tui. you can use Deepseek Harness within Terminal |
| [guobinmengxiang-rgb/dsh-memory-canvas](https://github.com/guobinmengxiang-rgb/dsh-memory-canvas) | Host | `dsh-memory-canvas` | Git only | 0 | DSH plugin: offload bulky tool logs to refs/*.md, keep a Mermaid canvas, recall by node_id. Zero daemon. Don't |
| [hddwbd/dsh-plugin-llm-proxy](https://github.com/hddwbd/dsh-plugin-llm-proxy) | Host | `dsh-plugin-llm-proxy` | Git only | 0 | deepseek Harness 模型代理插件 |
| [imkingjh999/dsh-tool-accurate-vision](https://github.com/imkingjh999/dsh-tool-accurate-vision) | Host | `dsh-tool-accurate-vision` | Git only | 0 | Model-facing accurate_vision tool for DeepSeek Harness: precise spatial reasoning via any OpenAI-compatible vi |
| [jean3690/dsh-devtoolbox](https://github.com/jean3690/dsh-devtoolbox) | Host | `dsh-devtoolbox` | Git only | 0 | DSH 本地工具箱插件：侧边栏独立页面 + /toolbox 命令 + 配置驱动的 agent 工具注册，35 个纯本地小工具（文本/编码/数据/安全/提取/转换/参考/效率），数据不出本机。 |
| [kiefeng/dsh-lan-memory](https://github.com/kiefeng/dsh-lan-memory) | Host | `dsh-lan-memory` | Git only | 0 | 澜·记忆与人格系统 — DeepSeek Harness memory & persona plugin (三层记忆 + SOUL/MOOD + 一键整理) |
| [knGear/dsh-AgentTask](https://github.com/knGear/dsh-AgentTask) | Host | `dsh-agenttask` | Git only | 0 |  |
| [littleblakew/msds-chain-mcp](https://github.com/littleblakew/msds-chain-mcp) | Client + Host | `dsh-msds-chain` | Git only | 0 |  |
| [lnyuqian/dsh-skill-sidebar](https://github.com/lnyuqian/dsh-skill-sidebar) | Client + Host | `dsh-skill-sidebar` | Git only | 0 | dsh-skill-sidebar 技能面板：DSH 右侧边栏技能面板（Skills panel）— 扫描本机技能目录列出全部技能，4-6 字功能短语 + 目录标签 + 一键复制调用 + 置顶 + 默认自动打开 + 每周 |
| [loklamlok/dsh-queue-director](https://github.com/loklamlok/dsh-queue-director) | Host | `dsh-queue-director` | Git only | 0 | DSH web plugin: reorder queued messages (up / down / top / bottom) before the agent processes them. |
| [lubaiUwU/DSH-WeChatClawBot](https://github.com/lubaiUwU/DSH-WeChatClawBot) | Host | `dsh-wechat-clawbot` | Git only | 0 | DSH plugin: WeChat floating-ball bridge (QR login, message relay to agent) |
| [lywusichen/dsh-jmcomic](https://github.com/lywusichen/dsh-jmcomic) | Client (Web UI) | `dsh-jmcomic` | Git only | 0 | DeepSeek Harness 插件:JMComic 搜索下载、本地漫画库、窗内阅读器,内置源码离线可用。 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Unattributed | `dsh-ouroboros` | Git only | 5494 | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result ne |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | Unattributed | `misakanet` | Git only | 398 | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verifie |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | Unattributed | `@ethanyoq/dsh-ai-novel-writer` | Git only | 373 | 本地优先 AI 小说创作工作台，提供 Windows/macOS 桌面版与 DeepSeek Harness 插件开发预览，支持角色、大纲、章节蓝图、审稿修稿和本地模型。 |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Unattributed | `@yuxianglin/dsh-bridge-browser` | Git only | 230 | dsh plugin: Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capab |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | Unattributed | `dsh-code-review` | Git only | 113 | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness |
| [Tabbit-Browser/dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) | Unattributed | `tabbit-browser` | Git only | 76 | Tabbit Broser plugins for Deepseek Harness |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Unattributed | `dsh-cost-meter` | Git only | 66 | DeepSeek Harness Session Cost Statistics & OpenCode Go Quota Display, DS Official Balance Display, Codex-like  |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | Unattributed | `@dockyard-dsh/plugin` | Git only | 45 | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | Unattributed | `@dsh-external/ego-browser` | Git only | 22 | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、 |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | Unattributed | `dsh-auto-collapse` | Git only | 22 |  |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | Unattributed | `deepseek-plugin-store` | Git only | 19 | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | Unattributed | `dsh-prompt-enhancer` | Git only | 15 | DeepSeek Harness DSH 提示词增强插件：✨ 一键优化草稿，增强提示词。 |
| [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | Unattributed | `seektty` | Git only | 12 | Pluggable DeepSeek-colored TUI for DeepSeek Harness |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | Unattributed | `dsh-context-doctor` | Git only | 12 | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | Unattributed | `dsh-pet-remielle` | Git only | 11 |  |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | Unattributed | `dsh-code-ide` | Git only | 10 | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | Git only | 9 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Unattributed | `dizzy-dsh` | Git only | 7 | My DSH plugins |
| [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | Unattributed | `dsh-ocgo-lite` | Git only | 6 | OpenCode Go 用量常驻条：套餐余量圆环 + token/花费实时统计（本次会话/全部范围 + 按模型联动，官方实时定价），一键复制 API Key。OpenCode Go usage bar for DeepS |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | Git only | 6 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Unattributed | `@dsh-external/dsh-plugin-tts` | Git only | 5 | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings pan |
| [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | Unattributed | `dsh-mermaid` | Git only | 5 | 在 DSH Web 会话中把 Mermaid 代码围栏渲染为 SVG 图表 \| Render Mermaid code fences as SVG diagrams in DSH Web messages |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Unattributed | `dsh-plugin-codegraph` | Git only | 5 | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools  |
| [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) | Unattributed | `deeptop-bridge` | Git only | 5 | Deeptop, a lightweight native desktop client for DeepSeek Harness. |
| [CAOGGL/dsh-ding](https://github.com/CAOGGL/dsh-ding) | Unattributed | `dsh-ding` | Git only | 4 |  |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Unattributed | `dsh-plugin-knowledge-graph` | Git only | 4 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | Unattributed | `resanity` | Git only | 4 | reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。 |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | Unattributed | `dsh-chat-imagine` | Git only | 4 | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片。 |
| [kinoward/dsh-plugin-subhub](https://github.com/kinoward/dsh-plugin-subhub) | Unattributed | `dsh-plugin-subhub` | Git only | 4 | Bring third-party subscription accounts into DeepSeek Harness - 为 DeepSeek Harness 接入第三方订阅账户(当前支持 OpenAI / Cha |
| [loster12520/dsh-btw](https://github.com/loster12520/dsh-btw) | Unattributed | `dsh-btw` | Git only | 4 | deepseek harness版btw插件 |
| [AKS1st/dsh-sysmon](https://github.com/AKS1st/dsh-sysmon) | Unattributed | `dsh-sysmon` | Git only | 3 | DSH Web 系统状态悬浮窗：实时 CPU/内存/磁盘占用率 \| System-status overlay showing live CPU, memory and disk usage for DSH Web |
| [Han-Yao94/dsh-filelens](https://github.com/Han-Yao94/dsh-filelens) | Unattributed | `dsh-filelens` | Git only | 3 |  |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | Unattributed | `@dsh-external/dsh-whale-galgame` | Git only | 3 | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | Unattributed | `dsh-directorx` | Git only | 3 | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision |
| [LeslieWylie/dsh-ops-kit](https://github.com/LeslieWylie/dsh-ops-kit) | Unattributed | `@dsh-community/dsh-ops-kit` | Git only | 3 | A reusable DeepSeek Harness bundle for evidence-driven memory, orchestration, benchmark operations, and plugin |
| [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) | Unattributed | `mindspace-dsh-local-rag` | Git only | 3 | ARPM-derived local hybrid RAG plugin for DeepSeek Harness |
| [Tisitan/dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | Unattributed | `dsh-live2d-companion` | Git only | 3 | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [anneheartrecord/dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | Unattributed | `dsh-desk-pet` | Git only | 3 | Always-on-top DeepSeek Harness desktop pet. Default whale, four skins, four silent states. |
| [kermanx/dshw](https://github.com/kermanx/dshw) | Unattributed | `dshw` | Git only | 3 | PR workflow plugin for DeepSeek Harness |
| [kobenfang/bigA](https://github.com/kobenfang/bigA) | Unattributed | `@kobenfang/dsh-biga` | Git only | 3 | openclaw-skills BigA · A股智能选股（选股分析·量化交易·股票池） |
| [534119219/chicheng-stats](https://github.com/534119219/chicheng-stats) | Unattributed | `chicheng-stats` | Git only | 2 | DSH 全局用量统计插件：高度可配置侧边栏组件（文字/卡片）+ 统计面板（模型分布/趋势/首字节/耗时明细） |
| [LeslieWylie/dsh-md-preview](https://github.com/LeslieWylie/dsh-md-preview) | Unattributed | `dsh-md-preview` | Git only | 2 | Render Markdown to standalone, self-contained HTML in the DeepSeek Harness — an md_html_render tool that works |
| [MiraculousGarfield/dsh-ops-health](https://github.com/MiraculousGarfield/dsh-ops-health) | Unattributed | `dsh-ops-health` | Git only | 2 |  |
| [Ricketts-Guo/dsh-shortcuts](https://github.com/Ricketts-Guo/dsh-shortcuts) | Unattributed | `dsh-shortcuts` | Git only | 2 | DeepSeek Harness WebUI 键盘快捷键插件（34 个预置功能、一键录制自定义、静默权限切换）— Fully customizable keyboard shortcuts for the DSH Web |
| [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) | Unattributed | `dsh-billing-community-bundle` | Git only | 2 |  |
| [dingzhenyao/dsh-plugin-directory](https://github.com/dingzhenyao/dsh-plugin-directory) | Unattributed | `dsh-plugin-directory` | Git only | 2 | DSH Web GUI plugin: a browsable, searchable, stats-driven directory of GitHub DeepSeek Harness plugins (dsh-pl |
| [dsh-pub/dsh-pub](https://github.com/dsh-pub/dsh-pub) | Unattributed | `@dsh-pub/plugin-directory` | Git only | 2 | The bilingual, source-backed registry and installer for the DeepSeek Harness plugin ecosystem. |
| [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) | Unattributed | `dsh-thinking-effort` | Git only | 2 |  |
| [imtanhui/dsh-plugin-butler](https://github.com/imtanhui/dsh-plugin-butler) | Unattributed | `dsh-plugin-butler` | Git only | 2 |  |
| [kanneiren/dsh-windows-manager](https://github.com/kanneiren/dsh-windows-manager) | Unattributed | `dsh-windows-manager-plugin` | Git only | 2 | Lightweight DeepSeek Harness manager for Windows \| 轻量级 DeepSeek Harness Windows 托盘管理器 \| tray |
| [kobenfang/ListForm](https://github.com/kobenfang/ListForm) | Unattributed | `@kobenfang/dsh-listform` | Git only | 2 | openclaw - skills :　List · 智能表单（万能信息记录·智能记事本·智能账单）- Smart Form & Notes |
| [lhwu1/dsh-lookseek](https://github.com/lhwu1/dsh-lookseek) | Unattributed | `dsh-lookseek` | Git only | 2 | 可以看见ai的执行步骤，将ai的步骤抽出来为对应动画，增加编码时等待的娱乐性。 |
| [1052326311/dsh-plan-lattice](https://github.com/1052326311/dsh-plan-lattice) | Unattributed | `dsh-plan-lattice` | Git only | 1 | Execution-time drift firewall for long-running DeepSeek Harness agents. Real-Harness tests: unsafe stale mutat |
| [1321928757/dsh-prompt-polish](https://github.com/1321928757/dsh-prompt-polish) | Unattributed | `dsh-prompt-polish` | Git only | 1 | 输入栏提示词优化插件 / Input-bar prompt optimizer for DeepSeek Harness：6 种策略 × 3 种语言一键重写草稿，可选会话上下文，带确认弹窗、最近 5 次历史与三级设置持久 |
| [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) | Unattributed | `@amethystluna/logicprobe` | Git only | 1 | Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design d |
| [Awesome-AI-Pedia/Awesome-DSH-Pet](https://github.com/Awesome-AI-Pedia/Awesome-DSH-Pet) | Unattributed | `awesome-dsh-pet` | Git only | 1 | deepseek harness Pet 包含噜噜 总裁等宠物，并可快速添加自定义宠物 |
| [Brain2nd/DSH-AutoLab](https://github.com/Brain2nd/DSH-AutoLab) | Unattributed | `dsh-autolab` | Git only | 1 | DeepSeek Harness (DSH) AutoLab 插件：自治研究控制器 + 本地会话通信 —— 沿袭 DSH 极致内核，高缓存命中、高性能低成本 |
| [Cheng-xiu/dsh-mobile-link](https://github.com/Cheng-xiu/dsh-mobile-link) | Unattributed | `dsh-mobile-link` | Git only | 1 | One-click phone access to DeepSeek Harness (DSH): Cloudflare quick tunnel + multi-channel push (ServerChan/Pus |
| [ChengxiuCDP/dsh-plugin-advisor](https://github.com/ChengxiuCDP/dsh-plugin-advisor) | Unattributed | `dsh-plugin-advisor` | Git only | 1 |  |
| [CyBerKitTen0009/dsh-quota-dashboard](https://github.com/CyBerKitTen0009/dsh-quota-dashboard) | Unattributed | `dsh-quota-dashboard` | Git only | 1 |  |
| [Dely0/dsh-personal-workbench](https://github.com/Dely0/dsh-personal-workbench) | Unattributed | `@dely0/dsh-personal-workbench` | Git only | 1 | DSH 个人工作台：日历 + 任务列表 + AI 澄清/拆解/执行/复盘 \| Personal workbench for DeepSeek Harness Web: calendar + task list + AI |
| [GHJIVHIDD/dsh-plugin-container](https://github.com/GHJIVHIDD/dsh-plugin-container) | Unattributed | `@dsh-community/dsh-plugin-container` | Git only | 1 | Docker 容器沙箱部署级插件(与 dsh-plugin-vm-sandbox 全能力对齐,无需 OrbStack):39 个 docker_* 模型工具、快照/回滚、文件传输、端口转发、后台任务、审计、共享/配额/回 |
| [GPIOX/dsh-api-balance](https://github.com/GPIOX/dsh-api-balance) | Unattributed | `dsh-api-balance-badge` | Git only | 1 | DeepSeek Harness 动态 Cordis 插件：可拖动、可缩放、亚克力质感的 API 余额悬浮徽章 |
| [HeWhenJay/dsh-project-knowledge-review](https://github.com/HeWhenJay/dsh-project-knowledge-review) | Unattributed | `dsh-project-knowledge-review` | Git only | 1 | 中文 DSH 知识复习插件：有证据才回答、资料缺失提醒补充学习视频。 |
| [Jian-Sparrow/dsh-plugin-mission-control](https://github.com/Jian-Sparrow/dsh-plugin-mission-control) | Unattributed | `dsh-plugin-mission-control` | Git only | 1 |  |
| [LeslieWylie/dsh-fleet-audit](https://github.com/LeslieWylie/dsh-fleet-audit) | Unattributed | `dsh-fleet-audit` | Git only | 1 | DSH agent-fleet hygiene audit plugin: credential-file permissions, embedded git-remote credentials (masked), p |
| [MeowTnT3r/catalog-capabilities-zh](https://github.com/MeowTnT3r/catalog-capabilities-zh) | Unattributed | `catalog-capabilities-zh` | Git only | 1 | 一个面向 Codex 的公开 skill：编排当前 Agent 已有的可信安装器，并为 skills、插件和市场能力维护一份有来源依据的中文说明目录 |
| [Ox2g/dsh-plugin-wechat](https://github.com/Ox2g/dsh-plugin-wechat) | Unattributed | `@ox2g/dsh-plugin-wechat` | Git only | 1 | WeChat access plugin for DeepSeek Harness (DSH) |
| [PandaAIDD/dsh-molecule-viewer](https://github.com/PandaAIDD/dsh-molecule-viewer) | Unattributed | `@dsh-plugins/dsh-molecule-viewer` | Git only | 1 | DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染交互式 3D 分子查看器（3Dmol.js，支持旋转/缩放/样式切换/着色）。 |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | Unattributed | `dsh-apex-standard` | Git only | 1 | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [Ri0n72Y/workspace-scope](https://github.com/Ri0n72Y/workspace-scope) | Unattributed | `workspace-scope` | Git only | 1 | Per-workspace Skill and MCP enablement for DeepSeek Harness |
| [SCSpotato/dsh-remote](https://github.com/SCSpotato/dsh-remote) | Unattributed | `dsh-remote-control` | Git only | 1 | Native Android client to remotely control DeepSeek Harness (DSH) from your phone |
| [SnowfallC/dsh-mobile-voice-call](https://github.com/SnowfallC/dsh-mobile-voice-call) | Unattributed | `dsh-mobile-voice-call` | Git only | 1 | App-free mobile voice calls with existing DeepSeek Harness sessions. |
| [Suef-666/dsh-tab-alert](https://github.com/Suef-666/dsh-tab-alert) | Unattributed | `dsh-tab-alert` | Git only | 1 |  |
| [Very12345/sai](https://github.com/Very12345/sai) | Unattributed | `sai-dsh-plugin` | Git only | 1 | A local-first Android coding agent powered by the official DeepSeek Harness |
| [WeiYe6/dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) | Unattributed | `dsh-session-handoff` | Git only | 1 | Hand your long DSH session over to a clean one: /handoff summarizes the conversation with an LLM, creates a ne |
| [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) | Unattributed | `dsh-plugin-git-inspect` | Git only | 1 | Read-only Git inspection tools for DeepSeek Harness |
| [alex04130/dsh-forge](https://github.com/alex04130/dsh-forge) | Unattributed | `dsh-forge` | Git only | 1 | DeepSeek Harness 扩展套件：运行时注入器、子代理派发与模型路由策略、插件市场/技能/插件管理面板、浏览器桥与 MCP 集成。 |
| [baisama-cloud/dsh-session-mover](https://github.com/baisama-cloud/dsh-session-mover) | Unattributed | `dsh-session-mover` | Git only | 1 | Drag sessions to another workspace in the DeepSeek Harness (DSH) web GUI — 把侧边栏会话直接拖到其他工作区（完整历史克隆+原会话归档） |
| [baisama-cloud/dsh-omni-bridge](https://github.com/baisama-cloud/dsh-omni-bridge) | Unattributed | `dsh-omni-bridge` | Git only | 1 |  |
| [baisama-cloud/dsh-stt-input](https://github.com/baisama-cloud/dsh-stt-input) | Unattributed | `dsh-stt-input` | Git only | 1 | Speech-to-text voice input plugin for DeepSeek Harness (DSH) web GUI: click the mic in the composer to turn sp |
| [baiyingawa/everyconnect](https://github.com/baiyingawa/everyconnect) | Unattributed | `everyconnect` | Git only | 1 | DSH插件，用于将dsh连接至微信、qq等软件，通过微claw插件、qq机器人等方式实现 |
| [c-v-c-v/dsh-chat-nav](https://github.com/c-v-c-v/dsh-chat-nav) | Unattributed | `dsh-chat-nav` | Git only | 1 | DeepSeek Harness 聊天快捷导航插件（ChatGPT 式悬停滑出）· A DeepSeek Harness chat quick-nav plugin (ChatGPT-style hover slide- |
| [cungphammanh590-star/dsh-quiz](https://github.com/cungphammanh590-star/dsh-quiz) | Unattributed | `dsh-quiz` | Git only | 1 | 让碎片化知识随问答深入脑海 |
| [eurt-nano/dsh-cache-cost-monitor](https://github.com/eurt-nano/dsh-cache-cost-monitor) | Unattributed | `dsh-cache-cost-monitor` | Git only | 1 | （已按规范要求严格配置文件，不会出现异常阻止启动） DeepSeek Harness 插件，the monster of cache-cost，用于监控前缀缓存命中率、统计 Token 消耗与估算 API 运行成本。 D |
| [fazhu4/dsh-plugin-studio](https://github.com/fazhu4/dsh-plugin-studio) | Unattributed | `dsh-usage-insights` | Git only | 1 | DSH（DeepSeek Harness）插件管理器：在 Web 设置页中按官方/社区分组管理已安装插件（中文描述、一键启停、详情、卸载），并内置 GitHub 插件市场（高收藏/增长最快榜单 + 搜索 + 一键安装）。 |
| [fazhu4/dsh-usage-insights](https://github.com/fazhu4/dsh-usage-insights) | Unattributed | `dsh-usage-insights` | Git only | 1 | dsh的本地用量面板，统计 Token、请求、Agent 活动、工具调用和性能 |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | Unattributed | `dsh-grafana` | Git only | 1 | Paste a Grafana dashboard URL and fine-tune it through conversation with DeepSeek Harness — 贴大盘 URL，对话微调，写回 Gr |
| [huangrx6/dsh-plugin](https://github.com/huangrx6/dsh-plugin) | Unattributed | `dsh-layout` | Git only | 1 | DeepSeek Harness (DSH) 插件合集：Skill 管理（导入/详情/多格式文件预览）、MCP 服务器管理（补丁层读写/测试连接/工具明细）、布局设置 |
| [huxint/dsh-team](https://github.com/huxint/dsh-team) | Unattributed | `dsh-team` | Git only | 1 | Agent teams for DeepSeek Harness: named long-lived teammates over ctx.subagents, a shared task list, a member- |
| [jaxxchen003/foliodrop-dsh-publish](https://github.com/jaxxchen003/foliodrop-dsh-publish) | Unattributed | `@foliodrop/dsh-publish` | Git only | 1 | Publish DeepSeek Harness agent output as a shareable FolioDrop URL |
| [jesspig/deepseek-harness-desktop](https://github.com/jesspig/deepseek-harness-desktop) | Unattributed | `@dsh-desktop/bundle` | Git only | 1 | 这是一个独立的 Cordis 应用:不改动上游仓库,以官方扩展方式(自定义 profile + bundle + Cordis 插件)把 dsh 跑成原生桌面应用。 |
| [kaiqiangh/dsh-workshpace-plugin](https://github.com/kaiqiangh/dsh-workshpace-plugin) | Unattributed | `dsh-workspace-plugin` | Git only | 1 | Inspect the files an agent touched, review session artifacts, preview bounded content, and manage local Worksp |
| [kexuejin/dsh-zhihu-dashboard](https://github.com/kexuejin/dsh-zhihu-dashboard) | Unattributed | `dsh-zhihu-dashboard` | Git only | 1 | Zhihu (知乎) dashboard for DeepSeek Harness: hot list with trends, follow feed, post tracking, and app-idea dist |
| [kobenfang/Eyes](https://github.com/kobenfang/Eyes) | Unattributed | `@kobenfang/dsh-eyes` | Git only | 1 | openclaw - skills : Eyes · 大眼看世界（全球热点·国际新闻·市场分析）- Global News Monitor |
| [kobenfang/FruitPi](https://github.com/kobenfang/FruitPi) | Unattributed | `@kobenfang/dsh-fruitpi` | Git only | 1 | openclaw - skills : Fruit Pi · 水果派（全球水果实时价格） |
| [l-s-c/dsh-workspace-labels](https://github.com/l-s-c/dsh-workspace-labels) | Unattributed | `dsh-workspace-labels` | Git only | 1 | Open DeepSeek Harness workspaces from the existing sidebar three-dot menu |
| [lecutu/dsh-slide-reflex](https://github.com/lecutu/dsh-slide-reflex) | Unattributed | `dsh-slide-reflex` | Git only | 1 | DeepSeek PPT — AI-native PowerPoint generation. Constraint solver closes the loop so LLMs don't need vision |
| [189-sketch/dsh-custom-logo](https://github.com/189-sketch/dsh-custom-logo) | Unattributed | `dsh-custom-logo` | Git only | 0 | Replace the DSH top-left BrandWordmark/FishLogo with your own image or text — an inline ⚙ handle inside the wo |
| [21hbguo/dsh-thinking-counter](https://github.com/21hbguo/dsh-thinking-counter) | Unattributed | `@dsh-external/dsh-thinking-counter` | Git only | 0 | DSH「大胖鲸智商检测器」：Thinking 短语检测统计 · 全会话 reasoning 短语命中/分组/聪明程度判定 |
| [4sa1ary9/dsh-everything-oauth](https://github.com/4sa1ary9/dsh-everything-oauth) | Unattributed | `dsh-everything-oauth` | Git only | 0 | Windows fork of dsh-everything-oauth: Codex / Grok / Claude subscription login for DeepSeek Harness |
| [863683348/dsh-plugin-gate](https://github.com/863683348/dsh-plugin-gate) | Unattributed | `dsh-plugin-gate` | Git only | 0 | Installation safety gate for DeepSeek Harness plugins: antivirus-style scanner for install scripts, permission |
| [904915452/dsh-editor-launcher](https://github.com/904915452/dsh-editor-launcher) | Unattributed | `@zhangqingyu/dsh-editor-launcher` | Git only | 0 | DeepSeek Harness 插件：会话头部「在编辑器中打开」下拉框，自动扫描本地编辑器 |
| [904915452/dsh-specify](https://github.com/904915452/dsh-specify) | Unattributed | `@zhangqingyu/dsh-specify` | Git only | 0 | DeepSeek Harness 插件：Spec-Kit 规范驱动开发技能套件（/speckit-* 斜杠命令） |
| [904915452/dsh-keyboard-shortcuts](https://github.com/904915452/dsh-keyboard-shortcuts) | Unattributed | `@zhangqingyu/dsh-keyboard-shortcuts` | Git only | 0 | DeepSeek Harness 插件：可配置键盘快捷键（输入历史 + 审批/计划快捷键） |
| [AKS1st/dsh-archived-conversations](https://github.com/AKS1st/dsh-archived-conversations) | Unattributed | `dsh-archived-conversations` | Git only | 0 | Show archived conversations in the DSH Web sidebar footer with read-only message previews. |
| [AIsa-plugins/easy-dsh-plugin](https://github.com/AIsa-plugins/easy-dsh-plugin) | Unattributed | `@aisa-plugins/easy-search` | Git only | 0 |  |
| [ArcoCodes/bloome-finance-plugin](https://github.com/ArcoCodes/bloome-finance-plugin) | Unattributed | `bloome-finance-plugin` | Git only | 0 |  |
| [Bob-Bo1/dsh-deepseek-balance](https://github.com/Bob-Bo1/dsh-deepseek-balance) | Unattributed | `deepseek-balance` | Git only | 0 | DSH plugin for viewing DeepSeek API balance and local Flash/Pro usage costs. |
| [Bryan-cmf/dsh-infra-observability](https://github.com/Bryan-cmf/dsh-infra-observability) | Unattributed | `@bryan-cmf/dsh-infra-observability` | Git only | 0 | DSH-Plugin: structural observability layer - real tool/skill usage recording (tools/result), skill-catalog aud |
| [CodeIdeal/dsh_review](https://github.com/CodeIdeal/dsh_review) | Unattributed | `dsh_review` | Git only | 0 | Interactive Codex CLI-style code review plugin for DeepSeek Harness |
| [Como44/dsh-zh-more](https://github.com/Como44/dsh-zh-more) | Unattributed | `dsh-zh-more` | Git only | 0 | DSH 中文增强补全：斜杠命令名与插件清单卡片中文化，支持三种显示模式（只显示中文/中英都显示/不翻译）。Chinese-first plugin for DSH: translates slash-command na |
| [CrombastiC/dsh-macos-notify](https://github.com/CrombastiC/dsh-macos-notify) | Unattributed | `dsh-macos-notify` | Git only | 0 |  |
| [Duoasa/interactive-component-integration](https://github.com/Duoasa/interactive-component-integration) | Unattributed | `interactive-component-integration` | Git only | 0 | Public Codex and DSH skill for faithful canvas, WebGL, shader, scroll, pointer, and third-party animation inte |
| [ErrorLst/dsh-notes](https://github.com/ErrorLst/dsh-notes) | Unattributed | `@dsh-external/dsh-notes` | Git only | 0 |  |
| [Eleven-is-cool/dsh-worktree](https://github.com/Eleven-is-cool/dsh-worktree) | Unattributed | `@eleven-is-cool/dsh-worktree` | Git only | 0 | Git worktree plugin for DeepSeek Harness web: browse/create worktrees from the workspace panel |
| [Gdnaiteab/pingo-dsh-plugin](https://github.com/Gdnaiteab/pingo-dsh-plugin) | Unattributed | `pingo-dsh-plugin` | Git only | 0 | DSH plugin: Pingo desktop-pet companion (catgirl pet in the dsh Web GUI + 14 Pingo persona/strategy skills). O |
| [FlipFlopszzz/dsh-studio](https://github.com/FlipFlopszzz/dsh-studio) | Unattributed | `@dsh-studio/plugins-permission` | Git only | 0 | Desktop workbench & plugin collection for DeepSeek Harness (DSH): Electron shell, IDE-ification plugins, and M |
| [HUITianYi/dsh-whale-desktop-launcher](https://github.com/HUITianYi/dsh-whale-desktop-launcher) | Unattributed | `dsh-whale-desktop-launcher` | Git only | 0 | Windows desktop launcher plugin for DeepSeek Harness with a whale-girl icon and clean app-mode window |
| [Hanihahaha/dsh-copy-session-id](https://github.com/Hanihahaha/dsh-copy-session-id) | Unattributed | `dsh-copy-session-id` | Git only | 0 |  |
| [Hanihahaha/dsh-open-workspace-folder](https://github.com/Hanihahaha/dsh-open-workspace-folder) | Unattributed | `dsh-open-workspace-folder` | Git only | 0 |  |
| [Hefulalala/dsh-remote-workspace](https://github.com/Hefulalala/dsh-remote-workspace) | Unattributed | `@dsh-external/dsh-remote-workspace` | Git only | 0 | DSH plugin: SSH/SFTP remote sites and remote workspaces in the sidebar |
| [JamesYasR/dsh-email-push-master](https://github.com/JamesYasR/dsh-email-push-master) | Unattributed | `dsh-email-push-master` | Git only | 0 |  |
| [KUNTING0701/dsh-aurora-bg](https://github.com/KUNTING0701/dsh-aurora-bg) | Unattributed | `dsh-aurora-bg` | Git only | 0 | DeepSeek Harness (DSH) Web UI - ? CSS transform,? canvas/mask/blur |
| [Lbryany/dsh-herdr](https://github.com/Lbryany/dsh-herdr) | Unattributed | `@lbryany/dsh-herdr` | Git only | 0 | Herdr lifecycle status integration for DeepSeek Harness |
| [LINNoot/dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | Unattributed | `dsh-pet-bridge` | Git only | 0 | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [LeslieWylie/dsh-gateway-billing](https://github.com/LeslieWylie/dsh-gateway-billing) | Unattributed | `dsh-gateway-billing` | Git only | 0 | Per-conversation LLM billing display for the DSH web composer, for anyone self-hosting a New API / One API-com |
| [Lilien-xu/dsh-meego](https://github.com/Lilien-xu/dsh-meego) | Unattributed | `dsh-meego` | Git only | 0 | DeepSeek Harness plugin for Feishu Project/Meego |
| [MicroSpotlight/openharness-find-plugin](https://github.com/MicroSpotlight/openharness-find-plugin) | Unattributed | `@microspotlight/openharness-find-plugin` | Git only | 0 |  |
| [Nicotinamide/dsh-plugin-tg-bridge](https://github.com/Nicotinamide/dsh-plugin-tg-bridge) | Unattributed | `dsh-plugin-tg-bridge` | Git only | 0 | DSH (DeepSeek Harness) ↔️ Telegram bridge: message, approve, ask, switch sessions/models/modes, manage permiss |
| [Nixz0824/dsh-sound-cue](https://github.com/Nixz0824/dsh-sound-cue) | Unattributed | `@dsh-external/dsh-sound-cue` | Git only | 0 | DSH sound cues: ding when you need to act, another when a task finishes / 需要操作与任务完成时的简短提示音（Web Audio，无弹窗） |
| [Nixz0824/dsh-usage-stats-plus](https://github.com/Nixz0824/dsh-usage-stats-plus) | Unattributed | `dsh-usage-stats-plus` | Git only | 0 | DSH 用量与余额面板增强版：官方余额实时拉取、逐事件精确计价、全渠道消耗估算、Codex 风格活动时间轴（Fork of dsh-usage-stats, MIT） |
| [OctKwong30/dsh-conversation-jump](https://github.com/OctKwong30/dsh-conversation-jump) | Unattributed | `dsh-node-jump` | Git only | 0 | 让 DeepSeek Harness Web GUI 在会话内支持对话节点快捷跳转 |
| [OctKwong30/dsh-upload-file](https://github.com/OctKwong30/dsh-upload-file) | Unattributed | `dsh-upload-file` | Git only | 0 | DSH 插件：可将任意文件上传至 Web GUI 对话框（支持附件按钮、拖放以及 read_uploaded_file 工具） |
| [PengboNB/skk-gal-dsh](https://github.com/PengboNB/skk-gal-dsh) | Unattributed | `skk-gal` | Git only | 0 | DSH的外观插件 |
| [PerryLink/dsh-draw](https://github.com/PerryLink/dsh-draw) | Unattributed | `dsh-draw` | Git only | 0 | Unified static-image generation router for DeepSeek Harness: one image_generate tool with standard parameters, |
| [PerryLink/dsh-talk](https://github.com/PerryLink/dsh-talk) | Unattributed | `dsh-talk` | Git only | 0 | Voice-first session loop for DeepSeek Harness: a composer microphone button with browser/local speech-to-text  |
| [QianziTech/dsh-trellis-dashboard](https://github.com/QianziTech/dsh-trellis-dashboard) | Unattributed | `dsh-trellis-dashboard` | Git only | 0 | 支持在Deepseek Harness(dsh)中，通过对话tab查看trellis任务状态、工作区信息等。需配合trellis使用：https://github.com/mindfold-ai/Trellis |
| [Raphaelutumn/dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) | Unattributed | `dsh-change-budget` | Git only | 0 | DeepSeek Harness file-safety guardrail that limits AI coding-agent file edits per turn and prevents too many f |
| [ReiRui/dsh-image-preview](https://github.com/ReiRui/dsh-image-preview) | Unattributed | `dsh-image-preview` | Git only | 0 |  |
| [Mrzhailiming/deepseek-pet](https://github.com/Mrzhailiming/deepseek-pet) | Unattributed | `dsh-pet-plugin` | Git only | 0 | 在 DeepSeek Harness 的 Web 界面里养一只二次元小鲸鱼 —— 你和 Agent 干活它就吃东西 |
| [SamurAIGPT/dsh-plugin-muapi](https://github.com/SamurAIGPT/dsh-plugin-muapi) | Unattributed | `@dsh-plugin/dsh-plugin-muapi` | Git only | 0 | DeepSeek Harness plugin exposing MuApi's 100+ image/video/audio generation models as an agent tool |
| [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) | Unattributed | `@dsh-community/dsh-req-workbench` | Git only | 0 | DeepSeek Harness Web UI 插件：需求管理工作台，从对话/文本/本地文件解析并管理需求与子任务，支持截止时间与超时提醒。 |
| [SodaMem/dsh-plugin-sodamem](https://github.com/SodaMem/dsh-plugin-sodamem) | Unattributed | `dsh-plugin-sodamem` | Git only | 0 | Native DeepSeek Harness (dsh) plugin for SodaMem — auto-injects evidence-grounded memory into every turn and i |
| [Shiyao-Huang/awesome-deepseek-harness-plugin](https://github.com/Shiyao-Huang/awesome-deepseek-harness-plugin) | Unattributed | `deeplugin-market` | Git only | 0 | Public DeepSeek Harness plugin Store and ecosystem dataset: install specs, source evidence, SQLite history, me |
| [TangRj-Git/trajectory-graph](https://github.com/TangRj-Git/trajectory-graph) | Unattributed | `dsh-plugin-trajectory-graph` | Git only | 0 | Interactive per-Turn trajectory graph and execution visualization plugin for DeepSeek Harness. |
| [TheColdWorld/dsh-wsl-keepalive](https://github.com/TheColdWorld/dsh-wsl-keepalive) | Unattributed | `wsl-keepalive` | Git only | 0 | a Ai-Gererated plugin for Dsh alive in Windows Subsystem of Linux |
| [TongaiLinC/dsh-mobile-access](https://github.com/TongaiLinC/dsh-mobile-access) | Unattributed | `dsh-mobile-access` | Git only | 0 | DeepSeek Harness 移动端访问插件 —— 让手机 / 平板通过局域网或 VPN 访问 DeepSeek Harness Web GUI，并内置 PC 端审批门禁、LAN / VPN / 公网自动识别 与 网 |
| [XiaHouSheng/dsh-token-tracker](https://github.com/XiaHouSheng/dsh-token-tracker) | Unattributed | `dsh-token-tracker` | Git only | 0 | A DeepSeek-Harness web plugin that tracks provider token usage, prices it with a peak/off-peak table, and show |
| [XiaoSong1223/dsh-release-guardian](https://github.com/XiaoSong1223/dsh-release-guardian) | Unattributed | `dsh-release-guardian` | Git only | 0 | Deterministic release-risk checks and quality gates for DeepSeek Harness |
| [Xs1KVerOA/dsh-service-manage](https://github.com/Xs1KVerOA/dsh-service-manage) | Unattributed | `dsh-service-manage` | Git only | 0 | DeepSeek Harness service manager for SSH, FTP, databases, Docker and S3, with proxy support, SSH file transfer |
| [Zenith-Lxz/dsh-foundry](https://github.com/Zenith-Lxz/dsh-foundry) | Unattributed | `@dsh-foundry/daily-bundle` | Git only | 0 | DSH Foundry — zero-patch desktop distribution of official DeepSeek Harness |
| [allentnetus/dsh-job-hunting](https://github.com/allentnetus/dsh-job-hunting) | Unattributed | `dsh-job-hunting` | Git only | 0 | DeepSeek Harness job hunting plugin and runtime skill for local job intelligence workflows. |
| [anyuer678/dsh-logtimeline](https://github.com/anyuer678/dsh-logtimeline) | Unattributed | `dsh-logtimeline` | Git only | 0 | Query local log files with Chinese natural-language time expressions — LogTimeline for DeepSeek Harness. |
| [april-jk/dsh-mobile-plugin](https://github.com/april-jk/dsh-mobile-plugin) | Unattributed | `@april-jk/dsh-mobile` | Git only | 0 | Unofficial DSH plugin for paired mobile access to a local DeepSeek Harness |
| [bainianlaoyao/easy-archive](https://github.com/bainianlaoyao/easy-archive) | Unattributed | `easy-archive` | Git only | 0 | DSH web plugin: two-step inline archive on workspace sidebar rows — one click arms a red confirm, the second a |
| [bx33661/dsh-omv](https://github.com/bx33661/dsh-omv) | Unattributed | `dsh-omv` | Git only | 0 | Native DeepSeek Harness workbench for evidence-first vulnerability research, reproduction, and reporting. |
| [cainiao1992/dsh-codebuddy-auth](https://github.com/cainiao1992/dsh-codebuddy-auth) | Unattributed | `dsh-codebuddy-auth` | Git only | 0 | Tencent CodeBuddy provider plugin for DeepSeek Harness: OAuth login, token refresh, and model sync via native  |
| [caisiyang123/dsh-tick-rail](https://github.com/caisiyang123/dsh-tick-rail) | Unattributed | `dsh-tick-rail` | Git only | 0 | Tick-rail conversation navigator plugin for DeepSeek Harness — peak-falloff tick marks, hover previews, click- |
| [changlianxiya-139/dsh-ambiguity-handling](https://github.com/changlianxiya-139/dsh-ambiguity-handling) | Unattributed | `dsh-ambiguity-handling` | Git only | 0 | Append ambiguity-handling rules to the DeepSeek Harness system prompt |
| [calwang414/my-dsh-plugins](https://github.com/calwang414/my-dsh-plugins) | Unattributed | `@calwang414/dsh-cdp-browser` | Git only | 0 |  |
| [chuyue-1/deepseek-harness-gamepad-cursor](https://github.com/chuyue-1/deepseek-harness-gamepad-cursor) | Unattributed | `@dsh-user/gamepad-cursor` | Git only | 0 | DeepSeek Harness 手柄光标插件 / Gamepad cursor plugin for DeepSeek Harness |
| [dhb861832993-star/pbr-render](https://github.com/dhb861832993-star/pbr-render) | Unattributed | `pbr-render` | Git only | 0 | PBR 3D model preview plugin for DeepSeek Harness — GLB/GLTF game art with textures, material channel inspector |
| [djt889/dsh-drag-to-attachment](https://github.com/djt889/dsh-drag-to-attachment) | Unattributed | `@dsh-external/dsh-drag-to-attachment` | Git only | 0 | DSH（DeepSeek Harness）Web UI 插件：把本地任意文件/文件夹拖入或粘贴为附件（图片、任意文件、整个文件夹）或定位真实路径——一个开关，两种模式。dsh-plugin for DeepSeek Ha |
| [dylanzhangzx/dknowc-dsh](https://github.com/dylanzhangzx/dknowc-dsh) | Unattributed | `dknowc-dsh` | Git only | 0 | 深知可信办公全家桶 dsh 插件包：深知可信咨询 / 深知可信搜索 / 深知公文写作（skill + MCP 转接） |
| [fengs2021/dsh-plugin-catalog](https://github.com/fengs2021/dsh-plugin-catalog) | Unattributed | `dsh-plugin-catalog` | Git only | 0 |  |
| [fengyufengzi/dsh-local-diagnostics](https://github.com/fengyufengzi/dsh-local-diagnostics) | Unattributed | `dsh-local-diagnostics` | Git only | 0 | Privacy-first in-memory diagnostics for DeepSeek Harness |
| [fengyufengzi/dsh-learning-plugin](https://github.com/fengyufengzi/dsh-learning-plugin) | Unattributed | `dsh-learning-plugin` | Git only | 0 | A small DeepSeek Harness tool plugin for learning the Cordis extension model |
| [flyhigao/dsh-sticky-notes](https://github.com/flyhigao/dsh-sticky-notes) | Unattributed | `dsh-sticky-notes` | Git only | 0 |  |
| [facai0316/dsh-auto-coding](https://github.com/facai0316/dsh-auto-coding) | Unattributed | `@auto-coding/mega` | Git only | 0 | 一个代码流水线，前期磨合好了以后，会有个很舒服的 vibe coding 体验，也可以更好的把闲时 token 利用起来（白天人肉测试+写需求+审核前一天的计划和决策，晚上让流水线自己挂着跑） |
| [glenngit/dsh-top](https://github.com/glenngit/dsh-top) | Unattributed | `dsh-top` | Git only | 0 | System monitoring tool for the dsh web GUI: live CPU, RAM, disk, network, and top processes in a floating, col |
| [ghbhiee/dsh-plugins](https://github.com/ghbhiee/dsh-plugins) | Unattributed | `dsh-plugin-cli-session` | Git only | 0 | Terminal, file browser, and mobile/CLI plugins for DeepSeek Harness |
| [guozede12593312/dsh-cnwrite](https://github.com/guozede12593312/dsh-cnwrite) | Unattributed | `dsh-cnwrite` | Git only | 0 | DeepSeek Harness 中文写作助手插件：排版 cn_polish + 写作统计 cn_stats |
| [guobinmengxiang-rgb/dsh-plugins](https://github.com/guobinmengxiang-rgb/dsh-plugins) | Unattributed | `dsh-cli-guard` | Git only | 0 | Small DeepSeek Harness plugins. Install one folder at a time. Don't pip the wrong dsh. |
| [hajimilvdou/dsh-storecloud](https://github.com/hajimilvdou/dsh-storecloud) | Unattributed | `dsh-storecloud` | Git only | 0 | 集插件及agent商城，云端同步与订阅插件组为一体的dsh插件项目 |
| [hanchn/dsh-multimodal-router](https://github.com/hanchn/dsh-multimodal-router) | Unattributed | `@hanchn/dsh-multimodal-router` | Git only | 0 | A zero-config, multi-provider vision tool for DeepSeek Harness with automatic local model discovery and privac |
| [hanyi7867069-create/dsh-content-lab](https://github.com/hanyi7867069-create/dsh-content-lab) | Unattributed | `dsh-content-lab` | Git only | 0 | 内容工坊 — topic, title, post and content-calendar generation tools for DeepSeek Harness. |
| [hanyi7867069-create/dsh-moonrise](https://github.com/hanyi7867069-create/dsh-moonrise) | Unattributed | `dsh-moonrise` | Git only | 0 | 月升 Moonrise — a warm amber-on-midnight theme for the DeepSeek Harness Web UI. |
| [hatsuyuki0103/oh-my-deepseek-harness](https://github.com/hatsuyuki0103/oh-my-deepseek-harness) | Unattributed | `oh-my-deepseek-harness` | Git only | 0 |  |
| [hatter123/dsh-math](https://github.com/hatter123/dsh-math) | Unattributed | `dsh-math` | Git only | 0 | Scientific computing plugin for DeepSeek Harness: numeric + symbolic math (mathjs + Algebrite) |
| [hhj2714/dsh-whale-btn](https://github.com/hhj2714/dsh-whale-btn) | Unattributed | `dsh-whale-btn` | Git only | 0 | 桌面悬浮鲸鱼按钮：置顶可拖动，单击聚焦/打开 DeepSeek Harness 窗口 (DSH host plugin, macOS arm64) |
| [hellosky983/dsh-mc-companion](https://github.com/hellosky983/dsh-mc-companion) | Unattributed | `dsh-mc-companion` | Git only | 0 | Friendly AI Minecraft companion for DeepSeek Harness: follows the player, chats like a friend, remembers adven |
| [jackyoung022/dsh-session-canvas](https://github.com/jackyoung022/dsh-session-canvas) | Unattributed | `@jackyoung022/dsh-session-canvas` | Git only | 0 | dsh插件，基于session的画布，可进行多session汇总 |
| [jing-hy/dsh-task-runner](https://github.com/jing-hy/dsh-task-runner) | Unattributed | `dsh-task-runner` | Git only | 0 | DSH plugin: project/task dual-mode workspaces. Tasks skip the workspace picker - every task conversation gets  |
| [jifeng15/dsh-web-restart](https://github.com/jifeng15/dsh-web-restart) | Unattributed | `dsh-web-hot` | Git only | 0 | True hot-loading for dsh web: safely auto-restart after installing plugins, editing config, or upgrading dsh.  |
| [kimirong/dsher-bbs-plugin](https://github.com/kimirong/dsher-bbs-plugin) | Unattributed | `@kimirong/dsher-bbs-plugin` | Git only | 0 | bbs.dsher.cn 社区面板 — DeepSeek Harness Web 的 bundle 插件：右下角悬浮入口，浏览/搜索/发帖/回帖/点赞/粘贴截图上传/一键登录。dsh plugin --profile w |
| [klarkxy/dsh-plugin-autoevo](https://github.com/klarkxy/dsh-plugin-autoevo) | Unattributed | `dsh-plugin-autoevo` | Git only | 0 | 发现、探索、审查、升级。DSH，进化永不停歇！ |
| [knottttt/codex-dsh-bridge](https://github.com/knottttt/codex-dsh-bridge) | Unattributed | `codex-dsh-bridge-companion` | Git only | 0 | Codex bridge for dispatching tasks to DeepSeek Harness sessions, with Harness settings integration. |
| [kobenfang/Big8](https://github.com/kobenfang/Big8) | Unattributed | `@kobenfang/dsh-big8` | Git only | 0 | ☯ Big8 AI玄学助手 - 看风水·看面相·算八字·查星座·每日一卦·老黄历 \| AI fortune-telling: feng shui, face reading, BaZi, zodiac |
| [kobenfang/BigFish](https://github.com/kobenfang/BigFish) | Unattributed | `@kobenfang/dsh-bigfish` | Git only | 0 | 🎣 BigFish AI钓鱼助手 - 钓点分析·鱼情分析·钓点分享 \| Fishing spot analysis, fish activity, bait & lure |
| [kobenfang/BigFood](https://github.com/kobenfang/BigFood) | Unattributed | `@kobenfang/dsh-bigfood` | Git only | 0 | 🍳 BigFood AI冰箱管家 - 食材识别→菜谱推荐 \| Food recognition, recipe recommendation |
| [kobenfang/BigFocus](https://github.com/kobenfang/BigFocus) | Unattributed | `@kobenfang/dsh-bigfocus` | Git only | 0 | 🎯 BigFocus 追踪管家 - 商品价格/明星动态/行业追踪 \| Price tracking, monitoring, alerts |
| [kobenfang/BigLead](https://github.com/kobenfang/BigLead) | Unattributed | `@kobenfang/dsh-biglead` | Git only | 0 | 🎯 BigLead 精准客户线索挖掘 - B2B销售获客 \| B2B lead generation, sales prospecting |
| [kobenfang/BigPlan](https://github.com/kobenfang/BigPlan) | Unattributed | `@kobenfang/dsh-bigplan` | Git only | 0 | 📋 BigPlan AI产品调研 - 市场/技术/供应链分析，三套产品规格方案 \| Product research, market analysis |
| [kobenfang/BigSeedSkill](https://github.com/kobenfang/BigSeedSkill) | Unattributed | `@kobenfang/dsh-bigseed` | Git only | 0 | 🌱 BigSeed 闪念记录与人生拼图 - 捕捉生活点滴生成人生故事/自传 \| Life story, journal, biography, memory keeper |
| [leilei3167/dsh-bookmark](https://github.com/leilei3167/dsh-bookmark) | Unattributed | `dsh-bookmark` | Git only | 0 | Codex-style conversation navigator for the DeepSeek Harness web UI |
| [lemonorangeapple/dsh-grok4.6-support](https://github.com/lemonorangeapple/dsh-grok4.6-support) | Unattributed | `dsh-grok-4-6-support` | Git only | 0 | 为dsh@0.1.0-rc.6增加对grok4.6的支持。 |
| [lhf6623/dsh-vibe](https://github.com/lhf6623/dsh-vibe) | Unattributed | `dsh-vibe` | Git only | 0 | DeepSeek Harness 输入氛围插件：键盘/鼠标实时高亮，打字火焰、输入抖动、回答提示音与整页抖动 |
| [lijx122/dsh-plugin-auth-guard](https://github.com/lijx122/dsh-plugin-auth-guard) | Unattributed | `dsh-plugin-auth-guard` | Git only | 0 | Enterprise-grade Zero-Trust Authentication, LAN/Public Access Control & Security Gate Plugin for DeepSeek Harn |

## Blocked by reserved scope (1)

These repositories satisfy the bundle contract, but their `package.json` names
them under `@deepseek-ai/`, a scope only the DeepSeek organisation can publish
to. None of these names exists on the npm registry, and none can be created by
its current owner, so any `dsh plugin add @deepseek-ai/...` command for them
fails. Renaming to an owned scope makes them installable.

This is a naming defect, not a judgement of the code. Several are also
duplicated across two owners under the same name.

| Repository | Surface | Package | Install | Stars | Description |
| --- | --- | --- | --- | --- | --- |
| [le-soleil-se-couche/dsh-token-cost](https://github.com/le-soleil-se-couche/dsh-token-cost) | Unattributed | `@deepseek-ai/dsh-token-cost` | **blocked** | 6 | 在对话页面直接查看消耗费用（嵌入官方底部状态条，点击看明细）；设置中汇总用量与费用，并可自定义其他模型单价 |
