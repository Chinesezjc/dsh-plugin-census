# DSH Plugin Catalogue

Generated 2026-08-14 from 596 contract-verified repositories.

Every entry below satisfies all three tiers of the bundle contract DSH enforces
in `packages/boot/app-boot/src/profile.ts:388-397`. Contract verification is
static: it proves a plugin *declares* a resolvable, structurally valid patch,
not that it installs or runs. No install verification is claimed.

Ordering is by attribution confidence, then stars.

## Verified attribution

Surface established from `@deepseek-ai/*` dependency evidence.

### Host plugins (243)

| Repository | Surface | Package | Stars | Description |
| --- | --- | --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Host | `dsh-cc-tui` | 488 | 解决DSH 官方尚无终端 TUI 痛点的补位之作，献给偏爱cli的各位极客：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。 |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Host | `@huiliyi37/dsh-tianshu-tui` | 89 | dsh-tianshu-tui — DeepSeek Harness terminal UI +harness workflow。是官方 DeepSeek Harness 上的交互式终端 UI 插件。渲染核心从本仓库自研 |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | Host | `@dsh-external/workflow` | 42 | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 |
| [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) | Host | `@multica-ai/dsh-runtime` | 21 | Support dsh runtime on Multica. |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Host | `dsh-interconnect` | 18 | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [LoserFox/distill](https://github.com/LoserFox/distill) | Host | `@loserfox/distill` | 13 | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | Host | `@deepseek-ai/dsh-plugin-check` | 11 | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | Host | `@deepseek-ai/dsh-toolkit` | 10 | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Host | `dsh-chat-import` | 8 | 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | Host | `@deepseek-ai/dsh-security-audit` | 8 | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Host | `@dsh-tui/dsh-tui` | 7 | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | Host | `@deepseek-ai/dsh-session-health` | 7 | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Host | `@loserfox/telegram` | 6 | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 |
| [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | Host | `@lhmd/dsh-promotion-toolkit` | 6 | 把你的任何想法，变成每个平台原生的宣发内容 \| Turn any idea into platform-native publicity |
| [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | Host | `@lhmd/dsh-director-toolkit` | 6 | DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Pa |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | Host | `@dsh-external/dsh-super-injector` | 6 |  |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | Host | `@openmaic/dsh-openmaic` | 5 | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Host | `deepseek-harness-tui` | 5 | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Host | `dsh-openapi` | 4 | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness |
| [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) | Host | `dsh-find-plugin` | 4 | Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件 |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Host | `@dsh-external/dsh-sentinel` | 4 | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the  |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Host | `dsh-agent-messaging` | 4 | Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a me |
| [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) | Host | `powercontext-dsh` | 4 | DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experien |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | Host | `dsh-plugin-deepeye` | 3 | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analys |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | Host | `@huanlin/dsh-plugin-sleep` | 3 | 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp \| Exposes a sleep tool that pauses for specified ms then returns, with |
| [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) | Host | `dsh-compaction-instant` | 3 | LLM-free lossless* compaction engine for DeepSeek Harness |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Host | `dsh-web-search-pro` | 3 | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform b |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | Host | `@bill9109/dsh-webbridge` | 3 | DSH 结合 Kimi WebBridge |
| [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | Host | `dsh-telegram-relay` | 3 | DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation an |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | Host | `@fakechris/dsh-track` | 3 | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | Host | `dsh-record-replay` | 3 | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record- |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Host | `dsh-lark-bridge` | 3 | Bidirectional Lark/Feishu controller for DeepSeek Harness |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Host | `@jiesou/dsh-stream-rules` | 3 | 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Ti |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | Host | `@deepseek-ai/dsh-tool-csv` | 3 | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | Host | `@deepseek-ai/dsh-tool-calculator` | 3 | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 |
| [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | Host | `@openma/deepseek-harness-acp` | 3 | ACP server implementation for DeepSeek harness |
| [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | Host | `deepseek-harness-qqbot` | 3 | QQ Bot text and image channel plugin for DeepSeek Harness |
| [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) | Host | `deepseek-harness-wecom` | 3 | WeCom AI Bot text and image bridge for DeepSeek Harness |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | Host | `@dsh-external/dsh-better-browser` | 3 | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | Host | `@deepseek-ai/dsh-tui` | 3 | as is, no warranty |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Host | `codex-plugin-dsh` | 3 | Use local Codex App Server as a model provider in DeepSeek Harness |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | Host | `@dsh-external/dsh-evolve` | 3 | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | Host | `dsh-plugin-miliastra-toolbox` | 2 | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Host | `dsh-tiered-approval` | 2 | Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow s |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Host | `dsh-tool-policy` | 2 | Declarative deny-by-default tool policy plugin for DeepSeek Harness |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | Host | `dsh-cost-meter` | 2 | DeepSeek Harness 会话费用统计插件:本会话费用、当日费用、历史记录与官方价格同步 |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Host | `dsh-undo` | 2 | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step an |
| [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | Host | `dsh-mobile-control` | 2 | DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件 |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Host | `dsh-claude-move` | 2 | DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamle |
| [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | Host | `dsh-llm-codex-oauth` | 2 | 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `code |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Host | `dsh-search-mcp` | 2 | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), con |
| [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Host | `dsh-report-html` | 2 | Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowchart |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | Host | `shopline-ai-toolkit-dsh` | 2 | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | Host | `dsh-playwright-cli` | 2 | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML rep |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | Host | `@morlay/session-persistence-rdb` | 2 | session 关系型数据库持久化 |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Host | `nowledge-mem-deepseek-harness` | 2 | Nowledge Mem community plugin bundle for DeepSeek Harness |
| [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | Host | `@deepseek-ai/dsh-tool-diff` | 2 | DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具 |
| [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | Host | `@deepseek-ai/dsh-tool-json` | 2 | DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | Host | `@deepseek-ai/dsh-tool-encoding` | 2 | DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖 |
| [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | Host | `@deepseek-ai/dsh-tool-markdown` | 2 | DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 |
| [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | Host | `@deepseek-ai/dsh-tool-stat` | 2 | DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 |
| [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | Host | `@deepseek-ai/dsh-tool-regex` | 2 | DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具 |
| [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | Host | `@deepseek-ai/dsh-tool-time` | 2 | DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖 |
| [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | Host | `@deepseek-ai/dsh-tool-schema` | 2 | DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行 |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | Host | `dsh-tui` | 2 | A small, session-aware terminal UI for DeepSeek Harness |
| [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) | Host | `@securstack/dsh-plugin` | 2 | SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and  |
| [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | Host | `project-blueprint` | 2 | Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 6 |
| [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) | Host | `dsh-music-plugin` | 2 | DeepSeek Harness music plugin (dsh-plugin) |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | Host | `dsh-openai-codex-auth` | 2 | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness |
| [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) | Host | `dsh-orchestrator` | 2 | 【编排模式】为 DeepSeek Harness 提供多智能体编排模式：主智能体分解分派、worker 全网格互通，支持逐 worker 指定模型与思考强度 |
| [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Host | `dsh-verification-receipt` | 1 | Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness |
| [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Host | `dsh-telemetry-redactor` | 1 | Fail-closed export-copy redaction for DeepSeek Harness session telemetry |
| [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) | Host | `dsh-eval-harness` | 1 | DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness |
| [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) | Host | `@bleed00/dsh-claude-mem` | 1 | DeepSeek Harness plugin integrating claude-mem (memory for dsh) |
| [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | Host | `dsh-clawrouter` | 1 | A second brain for your DeepSeek Harness agent — strong-model review before risky tool calls, plus 70 models f |
| [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | Host | `dsh-im-bridge` | 1 | DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。 |
| [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | Host | `dsh-agent-message` | 1 | 跨会话 Agent 通信插件 for DeepSeek Harness：让同一进程里的不同 Agent 会话互相收发消息。 |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Host | `@dsh-memory/bundle` | 1 | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exa |
| [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) | Host | `dsh-tool-underseal` | 1 |  |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Host | `@dsh-cowork/chatnode-wechat` | 1 | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for  |
| [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | Host | `@dsh-skillport/bundle` | 1 | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md di |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | Host | `@dsh-routines/bundle` | 1 | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file di |
| [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) | Host | `plugin-review` | 1 | DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件) |
| [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | Host | `dsh-find-skill` | 1 | dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp |
| [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | Host | `dsh-browser-control` | 1 | DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件 |
| [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | Host | `deepseek-harness-plugin-from-scratch` | 1 | Code-audited, progressive guide to production-grade DeepSeek Harness plugins |
| [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | Host | `dsh-github` | 1 | GitHub integration for DeepSeek Harness: create PRs, review PRs in background jobs, read issues - every write  |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Host | `dsh-checkpoint-rewind` | 1 | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary  |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Host | `dsh-permission-rules` | 1 | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-na |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Host | `dsh-memento` | 1 | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.me |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | Host | `dsh-lsp-actions` | 1 | LSP action surface for DeepSeek Harness: lsp_diagnostics, lsp_format, and lsp_completion tools over language s |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Host | `dsh-auto-review` | 1 | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns stru |
| [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) | Host | `dsh-plugin-pixluna` | 1 | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | Host | `dsh-nocturne-memory` | 1 | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | Host | `dsh-cloudflare-browser-run` | 1 | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Host | `mindspace-dsh-session-memory` | 1 | Editable, session-isolated personalization memory for DeepSeek Harness |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | Host | `dsh-deeptutor` | 1 | DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. \ |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | Host | `dsh-balance` | 1 | A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring  |
| [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | Host | `dsh-chrome` | 1 | Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl. |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | Host | `@a179-sanae/dsh-code-check` | 1 |  |
| [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) | Host | `dsh-browser` | 1 | Playwright-powered browser automation for DeepSeek Harness |
| [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Host | `dsh-claude-marketplace` | 1 | Claude Code marketplace compatibility for DeepSeek Harness |
| [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | Host | `dsh-deepseek-usage` | 1 | DeepSeek balance and token usage tools for DeepSeek Harness |
| [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Host | `dsh-mcp-proxy` | 1 | Context-cheap lazy MCP access for DeepSeek Harness |
| [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | Host | `dsh-security-scan` | 1 |  |
| [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) | Host | `dsh-memory` | 1 | Durable cross-session SQLite memory for DeepSeek Harness |
| [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Host | `dsh-telegram` | 1 |  |
| [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | Host | `dsh-webhook-bridge` | 1 |  |
| [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Host | `dsh-lens-lite` | 1 | Post-edit diagnostics for DeepSeek Harness |
| [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | Host | `@chushixixin/dsh-harness-mcp-server` | 1 | Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness) |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Host | `dsh-toolbelt` | 1 | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write gua |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Host | `task-passport` | 1 | Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat l |
| [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) | Host | `dsh-openai-codex-oauth` | 1 | ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Host | `dsh-tool-approval` | 1 | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | Host | `dsh-jumpserver` | 1 | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [kerwin2046/dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) | Host | `dsh-pin-recall` | 1 | DeepSeek Harness plugin: pin assistant replies and recall them into the model turn |
| [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | Host | `dsh-meta-orchestrator` | 1 | A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning  |
| [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) | Host | `dsh-plugin-longgraph` | 1 | DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | Host | `dsh-reloader` | 1 | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | Host | `dsh-session-index` | 1 |  |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | Host | `dsh-plugin-doctor` | 1 | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 |
| [lynx-gt/dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) | Host | `dsh-subagent-tools` | 1 | DeepSeek Harness subagent delegation enhancement |
| [lynx-gt/dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) | Host | `dsh-subagent-cwd` | 1 | DeepSeek Harness subagent delegation enhancement |
| [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) | Host | `dsh-audio-dub` | 1 | Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent \| DSH 视频/音频配音插件 |
| [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | Host | `@deepseek-ai/dsh-tool-scout` | 1 | 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。 |
| [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Host | `self-control-guard` | 1 | Self-control guard plugin for DeepSeek Harness host exit and restart workflows. |
| [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Host | `dsh-kimi-bridge` | 1 | Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab. |
| [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | Host | `dsh-codex-bridge` | 1 | Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab. |
| [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | Host | `@qing3a/dsh-event-auditor` | 1 | DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部 |
| [ropon/dsh-plugin-clawrouters](https://github.com/ropon/dsh-plugin-clawrouters) | Host | `dsh-plugin-clawrouters` | 1 | One-key ClawRouters plugin for DeepSeek Harness: chat, image, video, and web search |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | Host | `mmv-dspic` | 1 | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks  |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | Host | `dsh-plugin-wepre` | 1 | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session |
| [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | Host | `dsh-test-runner` | 1 | DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, pars |
| [tappass/dsh-governance](https://github.com/tappass/dsh-governance) | Host | `@tappass/dsh-governance` | 1 | The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your busines |
| [tanf1ng/dsh-tool-hackernews](https://github.com/tanf1ng/dsh-tool-hackernews) | Host | `dsh-tool-hackernews` | 1 | Hacker News tool suite (hn_top_stories, hn_search, hn_item) for DeepSeek Harness agents |
| [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | Host | `dsh-capability-inspector` | 1 | DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins,  |
| [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) | Host | `dsh-model-router` | 1 | Model router & cost optimizer for DeepSeek Harness: heuristic tier routing, failure fallback, and live per-ses |
| [why913/dshx](https://github.com/why913/dshx) | Host | `@why913/dshx` | 1 | The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Cla |
| [xiaoshihou514/dsh-tui](https://github.com/xiaoshihou514/dsh-tui) | Host | `dsh-tui` | 1 | DeepSeek Harness: TUI |
| [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) | Host | `dshplug` | 1 | DeepSeek Harness 微信 ClawBot 消息桥插件 |
| [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | Host | `dsh-obsidian-export` | 1 | DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks |
| [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) | Host | `dsh-weixin` | 1 | DeepSeek Harness: Weixin |
| [xu1132/dsh-plugin-browser](https://github.com/xu1132/dsh-plugin-browser) | Host | `dsh-plugin-browser` | 1 | A DeepSeek Harness community plugin that drives a headless Playwright browser: rendered page text, screenshots |
| [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) | Host | `dsh-vision` | 1 | DeepSeek Harness: vision |
| [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | Host | `dsh-llm-codex` | 1 | DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key \| DSH plugin: reuse your Codex  |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Host | `dsh-tool-monitor` | 1 | Monitor existing DeepSeek Harness background jobs without running commands twice |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Host | `dsh-prime-agent` | 1 | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode |
| [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) | Host | `dsh-ui-spec` | 1 | DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Determi |
| [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Host | `dsh-vision-sidecar` | 0 | Hosted free vision sidecar for DeepSeek Harness with durable session evidence |
| [1HelloMan1/dsh-stats-dashboard](https://github.com/1HelloMan1/dsh-stats-dashboard) | Host | `dsh-stats-dashboard` | 0 | DSH plugin: provider/model usage stats dashboard with response speed, call log, token totals, cache rate, cost |
| [Amengclass/dsh-memory](https://github.com/Amengclass/dsh-memory) | Host | `dsh-memory` | 0 | Persistent, model-editable memory/notes store for DeepSeek Harness. Adds memory_set/get/delete/search tools ba |
| [AllenCX/dsh-quant-workspace](https://github.com/AllenCX/dsh-quant-workspace) | Host | `dsh-quant-workspace` | 0 | DSH plugin bridging a local low-frequent-quant engine: single-ticker signal card, backtest, review (read-only) |
| [BrambleXu/dsh-revdiff](https://github.com/BrambleXu/dsh-revdiff) | Host | `dsh-revdiff` | 0 | Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current A |
| [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) | Host | `dsh-annotate` | 0 | Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, a |
| [BrambleXu/dsh-prompt-profile](https://github.com/BrambleXu/dsh-prompt-profile) | Host | `dsh-prompt-profile` | 0 | Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, a |
| [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) | Host | `dsh-context-proxy` | 0 |  |
| [EvilIrving/dsh-proof](https://github.com/EvilIrving/dsh-proof) | Host | `dsh-proof` | 0 |  |
| [Jelee0145/dsh-mem](https://github.com/Jelee0145/dsh-mem) | Host | `dsh-mem` | 0 | Cross-session long-term memory for DeepSeek Harness (dsh): durable JSON-file memory store with memory_save / m |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Host | `@dsh-crosstalk/bundle` | 0 | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style |
| [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | Host | `@dsh-polyglot/bundle` | 0 | dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSee |
| [Kevoyuan/dsh-mac-vision](https://github.com/Kevoyuan/dsh-mac-vision) | Host | `dsh-mac-vision` | 0 | On-device macOS OCR and Apple Vision for DeepSeek Harness — one native plugin with a bundled Skill. |
| [LaoYueHanNi/dsh-token-usage](https://github.com/LaoYueHanNi/dsh-token-usage) | Host | `dsh-token-usage` | 0 |  |
| [LKRCharon/dsh-egress-guard](https://github.com/LKRCharon/dsh-egress-guard) | Host | `dsh-egress-guard` | 0 | Local, zero-network, fail-closed secret preflight for DeepSeek Harness model requests. |
| [Lbryany/dsh-codebuddy](https://github.com/Lbryany/dsh-codebuddy) | Host | `@lbryany/dsh-codebuddy` | 0 | CodeBuddy OAuth, dynamic models, and reasoning controls for DeepSeek Harness |
| [LuZhouheng/dsh-gen3d](https://github.com/LuZhouheng/dsh-gen3d) | Host | `dsh-gen3d` | 0 | DeepSeek Harness 3D 角色生成插件：直连 Meshy / Hunyuan3D / Tripo3D / Rodin 官方 API，自配 key，mock 回退 |
| [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) | Host | `dsh-plugin-knowledge-graph` | 0 | dsh-plugin-knowledge-graph for Deepseek Harness |
| [MOLAaaaaaaa/dsh-seismicx](https://github.com/MOLAaaaaaaa/dsh-seismicx) | Host | `dsh-seismicx` | 0 | DeepSeek Harness plugin for the SeismicX earthquake-catalog skill |
| [Nunchakus888/dsh-turn-budget](https://github.com/Nunchakus888/dsh-turn-budget) | Host | `dsh-turn-budget` | 0 | Fail-closed per-turn step, tool-call, and provider-token budgets for DeepSeek Harness |
| [NexusAgentX/dsh-mcp-adapter](https://github.com/NexusAgentX/dsh-mcp-adapter) | Host | `dsh-mcp-adapter` | 0 | MCP adapter for DeepSeek Harness — one proxy tool instead of dumping every MCP schema into context. |
| [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) | Host | `dsh-vault` | 0 | Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI |
| [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) | Host | `dsh-doublecheck` | 0 | Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineer |
| [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | Host | `dsh-mcp-panel` | 0 | Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command + Settings MCP t |
| [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) | Host | `@picgo/dsh-plugin` | 0 | Upload images and files to your image host from DeepSeek Harness, powered by PicGo |
| [RRRosmontis/dsh-qwen-mm](https://github.com/RRRosmontis/dsh-qwen-mm) | Host | `@deepseek-ai/dsh-qwen-mm` | 0 | Qwen-MM-Plugins integration bundle for DeepSeek Harness (dsh) — multimodal MCP tools (vision, OCR, ASR, search |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | Host | `dsh-wecom` | 0 | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. |
| [Wha1eChai/dsh-supervisor](https://github.com/Wha1eChai/dsh-supervisor) | Host | `@wha1echai/dsh-supervisor` | 0 | Community control-plane plugin for DeepSeek Harness live sessions |
| [Towzai/dsh-memory](https://github.com/Towzai/dsh-memory) | Host | `@towzai/dsh-memory` | 0 | Cross-session memory plugin for DeepSeek Harness (dsh): embedding search + automatic system-prompt injection |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Host | `dsh-continual-evolve` | 0 | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refine |
| [acosmi/dsh-session-supervisor](https://github.com/acosmi/dsh-session-supervisor) | Host | `dsh-session-supervisor` | 0 | Durable, bounded lifecycle supervisor with scheduled evaluation for live DeepSeek Harness sessions (community  |
| [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) | Host | `dsh-eval-regression` | 0 |  |
| [cyanseek/dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) | Host | `dsh-tool-chaos` | 0 | Deterministic fault injection and autonomous resilience tests for DeepSeek Harness tools |
| [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) | Host | `dsh-cost` | 0 | Evidence-first token cost ledger and budget checks for DeepSeek Harness |
| [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | Host | `dsh-benchmark` | 0 |  |
| [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) | Host | `dsh-action-parity` | 0 | Cross-surface action binding and replay parity evidence for DeepSeek Harness |
| [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) | Host | `dsh-capability-receipt` | 0 | Content-addressed receipts for skills actually loaded by DeepSeek Harness |
| [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) | Host | `dsh-policy-drift-proof` | 0 | Content-addressed, value-redacted policy drift evidence for DeepSeek Harness |
| [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) | Host | `dsh-recovery-proof` | 0 | Read-only recovery drill evidence for DeepSeek Harness |
| [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) | Host | `dsh-cad-review` | 0 | Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness |
| [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) | Host | `dsh-narrative-ledger` | 0 | Verifiable narrative state, continuity and character-knowledge ledger for DeepSeek Harness |
| [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Host | `dsh-2origin` | 0 | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness |
| [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | Host | `dsh-release-proof` | 0 |  |
| [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | Host | `dsh-lineage` | 0 |  |
| [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) | Host | `dsh-switch` | 0 | Evidence-first model control plane for DeepSeek Harness |
| [dsh-external/dsh-better-browser](https://github.com/dsh-external/dsh-better-browser) | Host | `@dsh-external/dsh-better-browser` | 0 | DSH Better Browser：通过 Kimi WebBridge 驱动用户真实浏览器的 13 个 webbridge_* 工具，保留登录态，零核心改动。 |
| [dsh-external/dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) | Host | `@dsh-external/dsh-openmaic` | 0 | Generate OpenMAIC classrooms (interactive AI lessons) and return a playable classroom link |
| [dsh-external/dsh-nowledge-mem](https://github.com/dsh-external/dsh-nowledge-mem) | Host | `@deepseek-ai/dsh-nowledge-mem` | 0 | DSH plugin for Nowledge Mem™ |
| [dsh-external/dsh-sentinel](https://github.com/dsh-external/dsh-sentinel) | Host | `@dsh-external/dsh-sentinel` | 0 | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the  |
| [fly3366/DeepJIT](https://github.com/fly3366/DeepJIT) | Host | `deepjit` | 0 | JIT compiler plugin for deepseek-harness: compiles recurring agent workflows into hot skills and flow template |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | Host | `dsh-plugin-wechat` | 0 |  |
| [f0909172434/dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) | Host | `dsh-plugin-verified-search` | 0 | Verified current-source search workflow for DeepSeek Harness |
| [fishlikewater/dsh-mcp-manager](https://github.com/fishlikewater/dsh-mcp-manager) | Host | `dsh-mcp-manager` | 0 |  |
| [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) | Host | `dsh-shift-router` | 0 | Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backo |
| [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) | Host | `dsh-plugin-git-bash` | 0 |  |
| [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) | Host | `@jorinyang/dsh-doctor` | 0 | DeepSeek Harness environment diagnostic tool: dsh_doctor checks env, profile, config, bundles, mount, port, he |
| [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) | Host | `dsh-push` | 0 | Push DeepSeek Harness agent lifecycle notifications to configurable channels |
| [karuboniru/dsh-approval-guardian](https://github.com/karuboniru/dsh-approval-guardian) | Host | `dsh-approval-guardian` | 0 | 模仿codex auto-review 的自动审批机制 |
| [lakeofsky347/dsh-vision](https://github.com/lakeofsky347/dsh-vision) | Host | `dsh-vision` | 0 | Vision Bridge for DeepSeek Harness: 识图路由插件，图片交给视觉模型描述后回填给纯文本 DeepSeek |
| [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) | Host | `dsh-specflow` | 0 | Specification-driven development toolkit for DeepSeek Harness. |
| [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) | Host | `dsh-gitflow` | 0 | Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness. |
| [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) | Host | `dsh-guardian` | 0 | Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness. |
| [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) | Host | `dsh-code-intel` | 0 | Symbol-aware code indexing and hybrid search for DeepSeek Harness. |
| [lordship12138-crypto/dsh-plugin-dedup](https://github.com/lordship12138-crypto/dsh-plugin-dedup) | Host | `dsh-plugin-dedup` | 0 |  |
| [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | Host | `dsh-tool-git` | 0 | Structured safe Git tools for DeepSeek Harness (dsh): git_status/diff/log/branch/stage/commit/stash/show + des |
| [mario03690/dsh-netcafe](https://github.com/mario03690/dsh-netcafe) | Host | `dsh-netcafe` | 0 | DeepSeek Harness bundle: adds AI NetCafé's hosted outcome tools (statement extraction with reconciliation, SQL |
| [miaobuao/dsh-document-parser](https://github.com/miaobuao/dsh-document-parser) | Host | `dsh-document-parser` | 0 | A DeepSeek Harness document parsing tool powered by LiteParse |
| [mitao-su/dsh-playwright-native](https://github.com/mitao-su/dsh-playwright-native) | Host | `dsh-playwright-native` | 0 | 把原生 Playwright CLI 注册为 DeepSeek Harness 透传工具（dsh-plugin） |
| [qing3a/dsh-tray](https://github.com/qing3a/dsh-tray) | Host | `@qing3a/dsh-tray` | 0 | DeepSeek Harness Windows 系统托盘插件（trayicon exe 宿主，无 native 编译） |
| [rizkirmdhnnn/dsh-tool-notify](https://github.com/rizkirmdhnnn/dsh-tool-notify) | Host | `dsh-tool-notify` | 0 | DSH plugin: model-facing notify tool for DeepSeek Harness — send notifications to ntfy or generic webhooks whe |
| [reshuibuduo/tmcra-deepseek-harness-memory](https://github.com/reshuibuduo/tmcra-deepseek-harness-memory) | Host | `tmcra-deepseek-harness-memory` | 0 | Automatic cross-conversation TMCRA memory for DeepSeek Harness |
| [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | Host | `@shelken/dsh-co-authored-by` | 0 | dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit |
| [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) | Host | `dsh-k12-lesson-builder` | 0 | DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials |
| [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) | Host | `deepseek-harness-dingtalk` | 0 | DingTalk Stream text and image channel plugin for DeepSeek Harness |
| [sliverp/DeepSeek-harness-weixin](https://github.com/sliverp/DeepSeek-harness-weixin) | Host | `deepseek-harness-weixin` | 0 | Weixin ClawBot channel plugin for DeepSeek Harness with QR login and text/image messaging |
| [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) | Host | `deepseek-harness-lark` | 0 | Feishu and Lark text and image channel plugin for DeepSeek Harness |
| [sublatesublate-design/dsh-doctor-windows](https://github.com/sublatesublate-design/dsh-doctor-windows) | Host | `dsh-doctor-windows` | 0 | Windows environment diagnostics for DeepSeek Harness |
| [sybolization/agent-jit](https://github.com/sybolization/agent-jit) | Host | `agent-jit` | 0 | DeepSeek Harness (dsh) 插件：把 LLM agent loop 中确定性的执行路径编译成 DSL 程序并直接执行，显著降低 token、往返轮次与上下文暴露。A DeepSeek Harness p |
| [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) | Host | `dsh-weather` | 0 | Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key |
| [tkr520521/dsh-repo-analyzer](https://github.com/tkr520521/dsh-repo-analyzer) | Host | `dsh-repo-analyzer` | 0 | Local repository intelligence for DeepSeek Harness: stack detection, dependency maps, and module-reference ana |
| [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) | Host | `dsh-pdf` | 0 | PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key) |
| [userInner/dsh-academic-research](https://github.com/userInner/dsh-academic-research) | Host | `@onpeople/dsh-academic-research` | 0 | Evidence-grounded bilingual academic research plugin for DeepSeek Harness and OnPeople |
| [tkr520521/dsh-team-runner](https://github.com/tkr520521/dsh-team-runner) | Host | `dsh-team-runner` | 0 |  |
| [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) | Host | `@tensorlake/dsh-sandbox` | 0 | A deepseek harness plugin for tensorlake sandbox |
| [walavave/dsh-git](https://github.com/walavave/dsh-git) | Host | `dsh-git` | 0 |  |
| [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | Host | `delivery-review-plugin` | 0 | delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发 |
| [yan9651688/dsh-file-checksum](https://github.com/yan9651688/dsh-file-checksum) | Host | `dsh-file-checksum` | 0 | Raw-file SHA-256 and SHA-512 verification plugin for DeepSeek Harness |
| [xu1132/dsh-plugin-hello](https://github.com/xu1132/dsh-plugin-hello) | Host | `dsh-plugin-hello` | 0 | A minimal DeepSeek Harness community plugin that registers a callable hello tool |
| [youjiaqi421/dsh-plugin-workspace-rules](https://github.com/youjiaqi421/dsh-plugin-workspace-rules) | Host | `dsh-plugin-workspace-rules` | 0 | Load Cursor, Gemini CLI, and GitHub Copilot workspace instructions into DeepSeek Harness. |
| [zimai233/dsh-image-search](https://github.com/zimai233/dsh-image-search) | Host | `dsh-image-search` | 0 | Multi-engine reverse image search aggregator for DeepSeek Harness. Turn one public image URL into Google Lens  |
| [zimai233/dsh-figma-to-lottie](https://github.com/zimai233/dsh-figma-to-lottie) | Host | `dsh-figma-to-lottie` | 0 | Figma/SVG to Lottie animation compiler for DeepSeek Harness. Turn SVG paths and keyframe data into self-contai |
| [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) | Host | `@zimzaza4/dsh-bash-win` | 0 | 在 Windows 环境中为 DeepSeek Harness 提供 Git Bash 与 WSL2 bash 工具,含 bwrap 沙箱、审批模式、后台任务 |
| [zimai233/dsh-exam-countdown](https://github.com/zimai233/dsh-exam-countdown) | Host | `dsh-exam-countdown` | 0 | Chinese exam countdown for DeepSeek Harness. Query 64 built-in exams (gaokao, kaoyan, civil service, CET-4/6,  |
| [zimai233/dsh-video-downloader](https://github.com/zimai233/dsh-video-downloader) | Host | `dsh-video-downloader` | 0 | Media downloader for DeepSeek Harness. Detect and download video/audio from Bilibili, YouTube, Douyin, Xiaohon |
| [zimai233/dsh-wash-calendar](https://github.com/zimai233/dsh-wash-calendar) | Host | `dsh-wash-calendar` | 0 | Recurring habit scheduling calendar for DeepSeek Harness. Turn last-wash dates and intervals into next-occurre |

### Client plugins (62)

| Repository | Surface | Package | Stars | Description |
| --- | --- | --- | --- | --- |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Client (Web UI) | `@dsh-external/dsh-ads` | 194 | 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Client (Web UI) | `dsh-open-in-vscode` | 34 | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | Client (Web UI) | `dsh-ui-status-label` | 23 | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 |
| [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | Client (Web UI) | `dsh-client-auto-continue` | 8 | DSH Web UI plugin: automatically sends "继续" (continue) when a request is interrupted by network errors or othe |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Client (Web UI) | `dsh-milestone` | 4 | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条 |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | Client (Web UI) | `deepseek-pet` | 4 | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | Client (Web UI) | `@huanlin/dsh-plugin-better-sidebar-plugin-office` | 3 | 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 \| Provides Office-suite preview (.docx/.xl |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | Client (Web UI) | `@huanlin/dsh-plugin-d399` | 3 | 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） \| Pops up a mini-game menu while the model generates (Wordle/M |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | Client (Web UI) | `@huanlin/dsh-plugin-ya-workspace-sidebar` | 3 | DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 \| DSH Web workspace sidebar replacement: top global r |
| [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) | Client (Web UI) | `dsh-model-config-sync` | 3 | DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。 |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | Client (Web UI) | `@dsh-external/dsh-diff-viewer` | 3 | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool  |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Client (Web UI) | `dsh-kanban` | 2 | Task board plugin for the DeepSeek Harness Web UI |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | Client (Web UI) | `@huanlin/dsh-plugin-anti-ads` | 2 | DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 \| DSH Web ad blocker with four independent defense layers targeting t |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | Client (Web UI) | `@huanlin/dsh-plugin-spur` | 2 | 聊天流中悬挂皮鞭，甩动鞭梢（>2.0 px/ms）即向 agent 发送 go work 消息 \| A whip hanging in the chat stream; flick the tip (>2.0 px/m |
| [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | Client (Web UI) | `dsh-goal-mode` | 2 | 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具 |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | Client (Web UI) | `dsh-github` | 2 |  |
| [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) | Client (Web UI) | `dsh-session-timeline` | 2 | DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开 |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | Client (Web UI) | `@dingyi222666/dsh-session-notification` | 2 | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 |
| [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | Client (Web UI) | `dsh-plugin-graph` | 2 | 一个Deepseek Harness的插件关系图谱可视化插件 |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | Client (Web UI) | `dsh-token-usage` | 2 |  |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | Client (Web UI) | `@dsh-external/dsh-mobile` | 2 |  |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | Client (Web UI) | `dsh-custom-css` | 1 |  |
| [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | Client (Web UI) | `dsh-plugin-switch` | 1 | DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and  |
| [Ruler4396/dsh-launcher-lifetime](https://github.com/Ruler4396/dsh-launcher-lifetime) | Client (Web UI) | `dsh-launcher-lifetime` | 1 | DeepSeek Harness (dsh) plugin: control the dsh service lifetime (always-on / tray / follow-window) for the dsh |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | Client (Web UI) | `@dsh-external/tps` | 1 | 只是一个 tps 插件 |
| [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) | Client (Web UI) | `dsh-effort-tweak` | 1 | A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI. |
| [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) | Client (Web UI) | `dsh-prompt-stash` | 1 | Local, per-session prompt stash for DeepSeek Harness Web \| 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但 |
| [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) | Client (Web UI) | `@dsh-external/dsh-session-pins` | 1 | Persistent pinned-session menu for DeepSeek Harness |
| [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) | Client (Web UI) | `@blue-a11y/dsh-client-shortcuts` | 1 | Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+ |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | Client (Web UI) | `dsh-desktop-window` | 1 |  |
| [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | Client (Web UI) | `@deepseek-ai/dsh-ultra-ui` | 1 |  |
| [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) | Client (Web UI) | `dsh-plugin-session-import` | 1 | DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | Client (Web UI) | `@dsh-external/dsh-split-panes` | 1 |  |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | Client (Web UI) | `dsh-deepseek-balance` | 1 | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | Client (Web UI) | `@deepseek-ai/dsh-ex-setting` | 1 | DSH的设置扩展 |
| [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) | Client (Web UI) | `dsh-cost-ledger` | 1 | Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes re |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | Client (Web UI) | `dsh-pixel-whale` | 1 | A lively pixel-whale running-state companion for DeepSeek Harness Web. |
| [AIMFllyYS/dsh-operating-context](https://github.com/AIMFllyYS/dsh-operating-context) | Client (Web UI) | `dsh-operating-context` | 0 | DeepSeek Harness settings page: cap every configured model to a working context window, clamped to what it can |
| [ChuanTianML/dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) | Client (Web UI) | `dsh-open-with` | 0 | Open DeepSeek Harness workspaces in detected or configured local editors |
| [ChuanTianML/dsh-share](https://github.com/ChuanTianML/dsh-share) | Client (Web UI) | `dsh-share` | 0 | Privacy-first Markdown and self-contained HTML sharing for DeepSeek Harness sessions |
| [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) | Client (Web UI) | `dsh-skin` | 0 | Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallp |
| [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | Client (Web UI) | `dsh-sticky-note` | 0 | DSH 便签插件：随手记点子/感想/TODO，Markdown 预览 + 快捷键 + 历史归档，存储路径可配置 |
| [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) | Client (Web UI) | `@dsh-plugins/chiral-pulse` | 0 |  |
| [causebefore/dsh-pomodoro](https://github.com/causebefore/dsh-pomodoro) | Client (Web UI) | `dsh-pomodoro` | 0 | DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板 |
| [cakeni/harness-whale](https://github.com/cakeni/harness-whale) | Client (Web UI) | `harness-whale` | 0 | Unofficial community pet for DeepSeek Harness — a native DSH web plugin |
| [csiroqa/dsh-hotkeys](https://github.com/csiroqa/dsh-hotkeys) | Client (Web UI) | `@dsh-plugin/hotkeys` | 0 | DeepSeek Harness（DSH）全局快捷键插件：会话切换、发送/清空草稿、停止生成、复制与归档，键位可在设置中自定义。Global keyboard shortcuts plugin for DeepSeek  |
| [csiroqa/dsh-command-opt](https://github.com/csiroqa/dsh-command-opt) | Client (Web UI) | `@dsh-external/dsh-command-opt` | 0 | DeepSeek Harness（DSH）命令优化插件：Tab/Enter 补全命令名、参数格式引导与提示弹框、tool 开启会话（subagent）补丁、空对话命令输出修复。Command optimization p |
| [dsh-external/dsh-eye-care](https://github.com/dsh-external/dsh-eye-care) | Client (Web UI) | `@dsh-external/dsh-eye-care` | 0 | Warm light, warm dark, and system-aware eye-care themes for DSH Web |
| [dsh-external/dsh-open-in-vscode](https://github.com/dsh-external/dsh-open-in-vscode) | Client (Web UI) | `dsh-open-in-vscode` | 0 | dsh-open-in-vscode —— 在 DeepSeek Harness Web 界面中，从侧边栏工作区的「…」菜单一键用 VS Code 打开对应目录的插件。 |
| [fishxcode/dsh-plugin-deepseek-balance](https://github.com/fishxcode/dsh-plugin-deepseek-balance) | Client (Web UI) | `dsh-plugin-deepseek-balance` | 0 | DeepSeek Harness Web client plugin that displays real-time DeepSeek API balance. |
| [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) | Client (Web UI) | `dsh-archived-sessions` | 0 |  |
| [hurry060215-tech/dsh-api-usage-bar](https://github.com/hurry060215-tech/dsh-api-usage-bar) | Client (Web UI) | `dsh-api-usage-bar` | 0 | Cache-aware API token usage bar for the DeepSeek Harness Web UI |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | Client (Web UI) | `dsh-xueqiu` | 0 | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) | Client (Web UI) | `@dsh-external/dsh-home-ui` | 0 | PiUI-inspired home feed visual refinement plugin for DeepSeek Harness web client (pure extension, zero core ch |
| [lynkas/dsh-think-flow-flow](https://github.com/lynkas/dsh-think-flow-flow) | Client (Web UI) | `dsh-think-flow-flow` | 0 | DeepSeek Harness client plugin: constant-rate typewriter reveal for assistant output and reasoning, with per-m |
| [malevrigns/dsh-session-stars](https://github.com/malevrigns/dsh-session-stars) | Client (Web UI) | `dsh-session-stars` | 0 | Favorite DeepSeek Harness Sessions and reopen them from a global cross-Workspace center. |
| [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | Client (Web UI) | `dsh-client-ui-frosted-glass` | 0 |  |
| [qiqikuaidianpao/mypet](https://github.com/qiqikuaidianpao/mypet) | Client (Web UI) | `mypet` | 0 | 🐾 DSH 电子宠物插件 — 你的 AI 编程搭档，住进浏览器的电子宠物 |
| [smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) | Client (Web UI) | `dsh-conversation-indicator` | 0 | Conversation indicator plugin for the DeepSeek Harness web GUI: a compact rail beside the scrollbar marks each |
| [walnut-a/dsh-user-message-navigation](https://github.com/walnut-a/dsh-user-message-navigation) | Client (Web UI) | `dsh-user-message-navigation` | 0 | A user-message navigation rail plugin for DeepSeek Harness |
| [xjackzenvey/Dsh-UI-Enhance](https://github.com/xjackzenvey/Dsh-UI-Enhance) | Client (Web UI) | `dsh-ui-enhance` | 0 | Deepseek Harness 增强工具 |
| [yangYzc/dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) | Client (Web UI) | `dsh-plugin-quote-reply` | 0 | DSH plugin: select text in a conversation, then quote it into the composer or reply in a new window. / DeepSee |

### Client + Host (107)

| Repository | Surface | Package | Stars | Description |
| --- | --- | --- | --- | --- |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Client + Host | `dsh-better-sidebar` | 370 | 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Client + Host | `@dsh-external/dsh-vision-toolkit` | 232 | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | Client + Host | `dsh-agent-teams` | 140 | AgentTeams plugin for DeepSeek Harness |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Client + Host | `dsh-at-file` | 62 | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their conte |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Client + Host | `@dsh-external/dsh-visualize` | 51 | DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Client + Host | `@zseven-w/dsh-openpencil` | 45 | OpenPencil design preview and editing plugin for DSH |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Client + Host | `@omdsh-dev/dsh-genui` | 36 | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fenc |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Client + Host | `dsh-notification` | 26 | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude key |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Client + Host | `dsh-custom-tool` | 18 | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool l |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | Client + Host | `@dsh-external/dsh-computer-use` | 13 | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Compute |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | Client + Host | `@dingyi222666/dsh-focus-chat` | 8 | 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | Client + Host | `@dsh-external/dsh-emoji` | 8 | 为AI回复自动添加表情的插件 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | Client + Host | `@deepseek-ai/dsh-gomoku` | 8 | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | Client + Host | `@dsh-external/dsh-stickers` | 8 | DSH WebUI sticker plugin for bidirectional user and agent reactions |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | Client + Host | `dsh-stock-market` | 7 | 有效解决了写代码的时候账户不能同时亏钱的BUG |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Client + Host | `@deepseek-ai/dsh-data-agent` | 7 | 定义了专用的Data Agent预设，让AI帮你查询、更新、分析。 |
| [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | Client + Host | `dsh-balance-meter` | 5 | DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | Client + Host | `@huanlin/dsh-plugin-mineru` | 5 | 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON \| Exposes MinerU document-parsing tools to th |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | Client + Host | `@dsh-scholar/research-plugin` | 5 | dsh-scholar |
| [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | Client + Host | `@dsh-external/dsh-oauth-mcp-client` | 5 | OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness. |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | Client + Host | `@huanlin/dsh-plugin-yet-another-subagent` | 4 | 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 \| Configurable subagent profile system: s |
| [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | Client + Host | `dsh-plugin-installer` | 4 | A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem. |
| [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | Client + Host | `@ramify/dsh-ramify` | 4 | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | Client + Host | `@dsh-external/dsh-sidechain` | 3 | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | Client + Host | `@huanlin/dsh-plugin-interpreters` | 3 | 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 \| Exposes run_python/run_node tools th |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | Client + Host | `dsh-learn-everything` | 3 |  |
| [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Client + Host | `dsh-advisor` | 3 | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | Client + Host | `@omdsh/dsh-hub` | 3 |  |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | Client + Host | `dsh-explain` | 3 | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | Client + Host | `dsh-douyin` | 2 | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | Client + Host | `@huanlin/dsh-plugin-auto-blame` | 2 | 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 \| After a model turn, an LLM generates 3 critical follow-up suggestions show |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | Client + Host | `@huanlin/dsh-plugin-aigc-canvas` | 2 | provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 \| Provider-agnostic AIGC HTTP bridg |
| [MirDie/dsh-xai](https://github.com/MirDie/dsh-xai) | Client + Host | `dsh-xai` | 2 | xAI Grok SuperGrok / X Premium OAuth for DeepSeek Harness |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | Client + Host | `@xilin3/dsh-prompt-persona` | 2 | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. |
| [dsh-external/dsh-genui](https://github.com/dsh-external/dsh-genui) | Client + Host | `@deepseek-ai/dsh-genui` | 2 | DSH的生成式UI能力,不断更新中,欢迎issue&pr! |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | Client + Host | `@deepseek-ai/dsh-notebooks` | 2 |  |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | Client + Host | `@deepseek-ai/dsh-deepresearch` | 2 |  |
| [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | Client + Host | `@deepseek-ai/dsh-daily-fortune` | 2 | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | Client + Host | `@deepseek-ai/dsh-fun-typewriter` | 2 | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | Client + Host | `@deepseek-ai/dsh-fun-weather` | 2 | DSH weather tab and weather-following themes powered by Open-Meteo |
| [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | Client + Host | `dsh-book2skill` | 2 | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human g |
| [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | Client + Host | `dsh-longbridge` | 2 |  |
| [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | Client + Host | `dsh-ernie-image` | 2 |  |
| [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | Client + Host | `@deepseek-ai/dsh-pet-corner` | 2 | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | Client + Host | `dsh-revive` | 2 | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | Client + Host | `dsh-paddle-ocr` | 2 |  |
| [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | Client + Host | `dsh-voice-funasr` | 2 |  |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Client + Host | `@dsh-plugin/dsh-review-loop` | 2 | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量 |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Client + Host | `dsh-wikilink` | 2 | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach the |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | Client + Host | `dsh-recommend` | 2 | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |
| [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | Client + Host | `dsh-session-hub` | 1 | Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web  |
| [DGPisces/deepseek-harness-openai-oauth](https://github.com/DGPisces/deepseek-harness-openai-oauth) | Client + Host | `deepseek-harness-openai-oauth` | 1 | DeepSeek Harness provider for GPT models using managed ChatGPT OAuth through Codex app-server |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Client + Host | `dsh-model-modes` | 1 | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness |
| [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | Client + Host | `dsh-ssh-remote` | 1 | SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connecti |
| [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) | Client + Host | `dsh-codex-provider` | 1 | OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web  |
| [JeremyGuo/dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) | Client + Host | `dsh-custom-workspace` | 1 | Per-workspace appearance settings for DeepSeek Harness Web |
| [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) | Client + Host | `dsh-ui-workbench` | 1 | DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。 |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | Client + Host | `dsh-web-plugin-manager` | 1 | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、环境管理、插件市场。bundle 与非 bundle 插件全覆盖。 |
| [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) | Client + Host | `dsh-multimodal` | 1 | 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,De |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Client + Host | `dsh-translator` | 1 | Turn DeepSeek Harness into a focused, configurable AI translation workspace. |
| [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) | Client + Host | `dsh-portable-tavern` | 1 | DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依 |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Client + Host | `@wsl043/dsh-codex-subscription` | 1 | Cache-aware ChatGPT / Codex subscription plugin for DeepSeek Harness |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Client + Host | `dsh-codex` | 1 | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) | Client + Host | `@llangtop/dsh-approval-ai` | 1 | AI approval answerer for DeepSeek Harness (DSH) using the unified LLM route with fail-closed policy checks. |
| [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) | Client + Host | `dsh-image-to-path` | 1 | DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响) |
| [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) | Client + Host | `@dsh-external/dsh-schedule` | 1 | DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks |
| [dsh-external/dsh-agent-teams](https://github.com/dsh-external/dsh-agent-teams) | Client + Host | `dsh-agent-teams` | 1 | AgentTeams plugin for DeepSeek Harness |
| [dsh-external/dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) | Client + Host | `@dsh-external/dsh-suggested-replies` | 1 | DSH Web 预测回复插件：AI 回复后在输入框上方生成可点击填入草稿的下一步消息候选 |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Client + Host | `dsh-context-lens` | 1 | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse c |
| [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Client + Host | `@oil-oil/dsh-vision` | 1 | Near-native image understanding for DeepSeek Harness |
| [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | Client + Host | `@mattheliu/7d7d` | 1 |  |
| [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | Client + Host | `@deepseek-ai/dsh-auto-chess` | 1 | DSH Web里的自走棋插件：人机对战或双AI对弈 |
| [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | Client + Host | `dsh-llm-fallbacks` | 1 | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | Client + Host | `dsh-dev-actions` | 1 | AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions. |
| [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) | Client + Host | `dsh-cue-plugin` | 1 | DeepSeek Harness 的跨会话引用(cue)插件 |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | Client + Host | `dsh-archive-manager` | 1 |  |
| [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | Client + Host | `dsh-conversation-rewind` | 0 |  |
| [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) | Client + Host | `@dsh-voice/bundle` | 0 | Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent rea |
| [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) | Client + Host | `dsh-bash-terminal` | 0 |  |
| [Mintcolour/dsh-sidechat](https://github.com/Mintcolour/dsh-sidechat) | Client + Host | `@dsh-external/dsh-sidechat` | 0 | A DeepSeek Harness Web plugin that adds a Codex-style split-screen side chat with model switching and compact  |
| [NexusAgentX/dsh-lens](https://github.com/NexusAgentX/dsh-lens) | Client + Host | `dsh-lens` | 0 | Real-time code feedback for DeepSeek Harness — LSP, linters, formatters, structural analysis via a host-native |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Client + Host | `dsh-builtin-toggles` | 0 | Safe GUI toggles for optional built-in plugins in DeepSeek Harness Web. |
| [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) | Client + Host | `dsh-dashboard` | 0 | Symphony-compatible Linear issue orchestrator and native operations dashboard for DeepSeek Harness. |
| [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) | Client + Host | `deepseek-harness-flow` | 0 | Visual workflows and multi-model evaluation for DeepSeek Harness |
| [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) | Client + Host | `dsh-model-thinking` | 0 | DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible |
| [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) | Client + Host | `@dsh-external/dsh-backup-sync` | 0 | DeepSeek Harness（DSH）备份/恢复 + 跨机同步插件：本地快照、WebDAV 推送/拉取、自动备份与失效归档清理。Snapshot backup, restore and cross-machine s |
| [dsh-external/dsh-computer-use](https://github.com/dsh-external/dsh-computer-use) | Client + Host | `@dsh-external/dsh-computer-use` | 0 | Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped p |
| [dsh-external/dsh-at-file](https://github.com/dsh-external/dsh-at-file) | Client + Host | `dsh-at-file` | 0 | dsh-at-file 是 DeepSeek Harness Web GUI 的一个 Codex 风格 @ 文件提及插件：在输入框输入 @ 即可实时智能搜索并选中工作区文件（或目录），发送时自动把文件内容交给模型、同时保 |
| [dsh-external/dsh-custom-tool](https://github.com/dsh-external/dsh-custom-tool) | Client + Host | `dsh-custom-tool` | 0 | 在设置界面用 Monaco 编辑器编写自己的 JavaScript 工具，让模型在授权范围内自主扩展，沙箱隔离执行。 |
| [dsh-external/dsh-book2skill](https://github.com/dsh-external/dsh-book2skill) | Client + Host | `dsh-book2skill` | 0 | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human g |
| [dsh-external/dsh-ernie-image](https://github.com/dsh-external/dsh-ernie-image) | Client + Host | `dsh-ernie-image` | 0 |  |
| [dsh-external/dsh-fun-typewriter](https://github.com/dsh-external/dsh-fun-typewriter) | Client + Host | `@deepseek-ai/dsh-fun-typewriter` | 0 | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| [dsh-external/dsh-fun-weather](https://github.com/dsh-external/dsh-fun-weather) | Client + Host | `@deepseek-ai/dsh-fun-weather` | 0 | DSH weather tab and weather-following themes powered by Open-Meteo |
| [dsh-external/dsh-daily-fortune](https://github.com/dsh-external/dsh-daily-fortune) | Client + Host | `@deepseek-ai/dsh-daily-fortune` | 0 | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| [dsh-external/dsh-notification](https://github.com/dsh-external/dsh-notification) | Client + Host | `dsh-notification` | 0 | DeepSeek Harness 的桌面通知插件，会话完成一轮任务时通过浏览器系统通知提醒你，并按结束状态与关键词规则精确控制哪些完成需要提醒。 |
| [dsh-external/dsh-pet-corner](https://github.com/dsh-external/dsh-pet-corner) | Client + Host | `@deepseek-ai/dsh-pet-corner` | 0 | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [dsh-external/dsh-paddle-ocr](https://github.com/dsh-external/dsh-paddle-ocr) | Client + Host | `dsh-paddle-ocr` | 0 |  |
| [dsh-external/dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) | Client + Host | `@deepseek-ai/dsh-plan-execute` | 0 | DSH plan/execute 双模型路由插件：plan 模式用规划模型（推理型），批准后自动切执行模型（快速型）；settings.yaml 与 Web 设置页均可配置 |
| [dsh-external/dsh-voice-funasr](https://github.com/dsh-external/dsh-voice-funasr) | Client + Host | `dsh-voice-funasr` | 0 |  |
| [dsh-external/dsh-revive](https://github.com/dsh-external/dsh-revive) | Client + Host | `dsh-revive` | 0 | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [dsh-external/dsh-longbridge](https://github.com/dsh-external/dsh-longbridge) | Client + Host | `dsh-longbridge` | 0 |  |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Client + Host | `dsh-codex-connect` | 0 | ChatGPT OAuth and Codex models for DeepSeek Harness. |
| [hccccc01333/dsh-analytics](https://github.com/hccccc01333/dsh-analytics) | Client + Host | `dsh-analytics` | 0 |  |
| [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) | Client + Host | `dsh-latex-tools` | 0 | ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件 |
| [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) | Client + Host | `dsh-tool-describe-image` | 0 |  |
| [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) | Client + Host | `dsh-codex-auth` | 0 | DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card |
| [ycp424c/dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | Client + Host | `@ycp424c/dsh-luna-vision-bridge` | 0 | DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek |

## Partial attribution (20)

Depends on `@deepseek-ai/*` packages, but none that identify a surface.

| Repository | Surface | Package | Stars | Description |
| --- | --- | --- | --- | --- |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | Unattributed | `dsh-acp-for-bitfun` | 9 | BitFun 与 DSH ACP 交互对接 插件 |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Unattributed | `dsh-recall` | 3 | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and  |
| [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Unattributed | `qiushi-dsh-evidence-audit` | 2 | Observe-only hash-chained evidence receipts for DeepSeek Harness |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | Unattributed | `dsh-local-filetree` | 2 | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, r |
| [Roy-oss1/dsh-lark](https://github.com/Roy-oss1/dsh-lark) | Unattributed | `dsh-lark-channel` | 2 | Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages  |
| [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | Unattributed | `dsh-review-skills` | 2 |  |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Unattributed | `dsh-lark-channel` | 2 | Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages  |
| [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Unattributed | `@yangzhe1003/dsh-web-search-firecrawl` | 2 | Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web) |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Unattributed | `dsh-codex-import` | 1 | Read-only Codex setup compatibility scanner for DeepSeek Harness |
| [Alexis-fish/dsh-worktrees](https://github.com/Alexis-fish/dsh-worktrees) | Unattributed | `dsh-worktrees` | 1 | Git worktree isolation for parallel DeepSeek Harness sessions |
| [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | Unattributed | `dsh-openclaw-acp` | 1 | DeepSeek Harness bundle for OpenClaw and WeChat over ACP |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | Unattributed | `dsh-resume-plugin` | 1 | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | Unattributed | `dsh-all-search` | 1 | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) |
| [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | Unattributed | `@mattheliu/session-teleport` | 1 |  |
| [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) | Unattributed | `dsh-plugin-installer` | 1 |  |
| [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) | Unattributed | `dsh-repro` | 0 |  |
| [MostlyHarmlessxyz/dsh-safe-web-fetch](https://github.com/MostlyHarmlessxyz/dsh-safe-web-fetch) | Unattributed | `dsh-safe-web-fetch` | 0 | SSRF-resistant public-only HTTP(S) WebFetchProvider plugin for DeepSeek Harness |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Unattributed | `dsh-plugin-marketplace` | 0 | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Unattributed | `dsh-web-billing` | 0 | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak h |
| [yweilai77-dev/dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) | Unattributed | `dsh-plugin-cost` | 0 |  |

## Unverified attribution (164)

No `@deepseek-ai/*` dependency. Surface inferred from name and description
keywords only — **these are guesses**, listed for completeness.

| Repository | Surface | Package | Stars | Description |
| --- | --- | --- | --- | --- |
| [liustack/modlens](https://github.com/liustack/modlens) | Host | `@liustack/modlens` | 856 | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Host | `@liustack/modsearch` | 72 | The web plugin for DeepSeek Harness, and the search bridge for every text-only coding agent. Ask the web or X, |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Client (Web UI) | `whale-girl` | 59 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:d |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Host | `@omdsh-dev/dsh-annotation` | 23 | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | Host | `@dsh-external/dsh-automation` | 15 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent session |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | Client + Host | `@dsh-external/dsh-minigames` | 10 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | Client (Web UI) | `@dsh-external/dsh-navbar` | 7 | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | Host | `dsh-context-doctor` | 6 | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | Client + Host | `dsh-mcp-manager` | 5 | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | Client (Web UI) | `@dsh-external/dsh-task-status` | 5 | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | Client + Host | `dsh-vision-proxy` | 4 | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 VLM 转译成文字后交给 DeepSeek 作答 |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | Host | `dsh-win-notify` | 4 | DSH plugin: Windows toast notification with sound when an agent task completes |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | Client (Web UI) | `@bill9109/dsh-web-ui-notify` | 4 | 为 DSH 增加桌面通知提醒 |
| [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) | Client (Web UI) | `dsh-updater-ui` | 4 |  |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | Host | `@zerohackz/dsh-openflowframes` | 3 |  |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | Host | `@detpecca/dsh-llm-wiki` | 3 |  |
| [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) | Host | `dsh-her-eyes` | 3 | 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) |
| [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | Client (Web UI) | `@dsh-external/dsh-archive-viewer` | 3 | DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。 |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Host | `dsh-mnemon` | 3 | Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。 |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | Client + Host | `dsh-web-archive` | 3 | 折叠对话当中众多的“无用消息”，例如Think、Bash等 |
| [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) | Host | `dsh-fail-logger` | 2 | DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 A |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | Client + Host | `dsh-sticky-disclosure` | 2 | DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click,  |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Host | `dsh-sound-effects-plugin` | 2 | Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works,  |
| [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | Host | `dsh-email` | 2 | DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCl |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | Client (Web UI) | `dsh-side-panel` | 2 |  |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Host | `dsh-plugin-opencode-bridge` | 2 | Bridge opencode skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Host | `dsh-plugin-codex-bridge` | 2 | Bridge codex skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Host | `dsh-plugin-pi-bridge` | 2 | Bridge pi skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Host | `dsh-plugin-claude-bridge` | 2 | Bridge Claude Code memory, skills, and config into DeepSeek Harness |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | Client (Web UI) | `@bill9109/dsh-drag-and-drop` | 2 | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 |
| [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) | Client + Host | `dsh-mac-desktop` | 2 | DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView). |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | Host | `deepseek-harness-plugin-mcp` | 2 | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Host | `dsh-superpowers` | 2 | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstr |
| [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | Client (Web UI) | `dsh-balance-monitor` | 2 | DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh si |
| [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | Host | `@dsh-external/dsh-drop-to-path` | 2 | DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH  |
| [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) | Host | `@sakikotgw/pack-agent` | 2 | Agent Modpack — 像装 MC 整合包一样，装你的 agent。 |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | Host | `@dsh-external/dsh-loop` | 2 | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | Host | `@dsh-external/dsh-plannotator` | 2 | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Age |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | Client (Web UI) | `dsh-blue-whale-maid` | 2 | dsh web 的桌面宠物插件，本质是一个任务完成提醒器。 |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | Host | `@humanize/dsh-humanize` | 2 |  |
| [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | Client (Web UI) | `dsh-huadong-bianzuqi` | 2 | DeepSeek Harness的滑动变祖器插件 |
| [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | Client (Web UI) | `gal-view` | 1 |  |
| [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) | Client + Host | `dsh-skill-viewer` | 1 | DSH Web UI plugin: Skills settings section with hot enable/disable, delete and add |
| [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) | Host | `dsh-mimo-vision-hint` | 1 | DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Client (Web UI) | `@dsh-external/dsh-web-skins` | 1 | Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin |
| [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | Client + Host | `dsh-background-agents` | 1 | Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watc |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | Client + Host | `dsh-atuin` | 1 | dsh atuin-history: record dsh user prompts into atuin shell history |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | Client (Web UI) | `dsh-plugin-market` | 1 | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) |
| [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) | Client (Web UI) | `dsh-turn-index` | 1 | deepseek harness的侧边栏对话轮次索引插件 |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Host | `dsh-plugin-meta-memory` | 1 | Structured long-term memory system for DeepSeek Harness |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Host | `dsh-plugin-context-compressor` | 1 | Context compression skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Host | `dsh-plugin-vision-toolkit` | 1 | Vision toolkit for DeepSeek Harness -- give text-only agents eyes |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Host | `dsh-plugin-auto-docs` | 1 | Auto documentation generation skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Host | `dsh-plugin-code-review` | 1 | Structured code review skill for DeepSeek Harness |
| [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) | Host | `sidesight` | 1 | CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and vid |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Host | `dsh-plugin-agent-dashboard` | 1 | Multi-agent dashboard skill for DeepSeek Harness |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Host | `dsh-plugin-acp` | 1 | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs |
| [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Client + Host | `dsh-godot-skill` | 1 | Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime |
| [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | Client + Host | `dsh-plugin-publisher` | 1 | DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins |
| [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) | Host | `agent-plaza` | 1 | Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes) |
| [arrow949/dsh-turn-approval](https://github.com/arrow949/dsh-turn-approval) | Client + Host | `dsh-turn-approval` | 1 | Turn-scoped "Allow for this task" approvals for DeepSeek Harness. |
| [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | Host | `dsh-model-selector` | 1 | DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker. |
| [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | Host | `dsh-effort-config` | 1 | dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budget |
| [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | Host | `dsh-skill-manager` | 1 | Skills management page for DeepSeek Harness Web Settings (dsh plugin) |
| [dancingmemory/dskin](https://github.com/dancingmemory/dskin) | Client (Web UI) | `dskin` | 1 | DSKIN - cartoon pixel skin plugin for DeepSeek Harness (DSH) Web GUI: pixel whale, cartoon mouse mascot, Press |
| [dsh-external/dsh-minigames](https://github.com/dsh-external/dsh-minigames) | Client + Host | `@dsh-external/dsh-minigames` | 1 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Host | `dsh-apple-mode` | 1 |  |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | Client (Web UI) | `@dsh-community/dsh-deeplink` | 1 | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 |
| [quan2005/dsh-plugin-jinji](https://github.com/quan2005/dsh-plugin-jinji) | Host | `dsh-plugin-jinji` | 1 | 把「记忆」带进 DeepSeek Harness：极简文本记忆系统，双轨记忆（流水日志 + 人物/产品实体画像），大模型为核心驱动。无需安装其他软件，无需编译，无第三方依赖。 |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Host | `chat2skill-plugin-runtime` | 1 | Extracting and iterating skills from daily conversations with AI |
| [songqikong/dash](https://github.com/songqikong/dash) | Client + Host | `dash-tui` | 1 | DASH — Deepseek Agentic Service Harness |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | Client (Web UI) | `@deepseek-ai/dsh-client-ui-skin-miku` | 1 | 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题 |
| [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | Host | `dsh-governed-workflow` | 1 | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents. |
| [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | Client + Host | `dsh-chrome-devtools` | 1 | Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP |
| [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | Host | `dsh-tavily-search` | 1 | Free keyless Tavily web search tool for DeepSeek Harness (dsh) |
| [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) | Client (Web UI) | `@xiaoyao-ai/dsh-client-ui-skin-black-whale` | 0 | DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件 |
| [318197375/dsh-bottom-stats](https://github.com/318197375/dsh-bottom-stats) | Host | `dsh-bottom-stats` | 0 | DSH plugin: full-width conversation stats line (no truncation) + context occupancy progress bar for the DeepSe |
| [1a125/dsh-mcp-manager](https://github.com/1a125/dsh-mcp-manager) | Host | `dsh-mcp-manager` | 0 | DSH global MCP manager |
| [Arnoldkevin/prismrelay-mcp](https://github.com/Arnoldkevin/prismrelay-mcp) | Host | `prismrelay-mcp` | 0 | Vision-first local MCP that gives text-only Agents image understanding through Agnes AI (BYOK). |
| [Equinox7379/dsh-session-repair](https://github.com/Equinox7379/dsh-session-repair) | Host | `dsh-session-repair` | 0 | Session log repair for DSH: fixes SessionFormatUnsupportedError by marking unknown events ignorable. |
| [Equinox7379/dsh-daily-brief](https://github.com/Equinox7379/dsh-daily-brief) | Host | `dsh-daily-brief` | 0 | Daily activity brief for DSH: per-session turns/messages/tool-call stats. Read-only. |
| [Elohia/dsh-plugin-mm-vision](https://github.com/Elohia/dsh-plugin-mm-vision) | Host | `dsh-plugin-mm-vision` | 0 |  |
| [Equinox7379/dsh-config-watch](https://github.com/Equinox7379/dsh-config-watch) | Host | `dsh-config-watch` | 0 | Config drift detective for DSH: snapshots profile/plugin state, records changes. |
| [Equinox7379/dsh-turn-watchdog](https://github.com/Equinox7379/dsh-turn-watchdog) | Host | `dsh-turn-watchdog` | 0 | Turn watchdog for DSH: detects stuck turns and injects a quiet warning. |
| [He2way/dsh-task-console](https://github.com/He2way/dsh-task-console) | Client + Host | `dsh-task-console` | 0 | DSH client plugin: a floating glass task console on the back of the page — live background jobs, subagents, se |
| [HongzhongL/dsh-hotswap](https://github.com/HongzhongL/dsh-hotswap) | Client (Web UI) | `dsh-hotswap` | 0 | Runtime hot-swap for DeepSeek Harness plugins: hot enable/disable/restart and auto hot-mount bundles from the  |
| [KureKaruna/dsh-at](https://github.com/KureKaruna/dsh-at) | Client (Web UI) | `dsh-at` | 0 |  |
| [JimmyJin2006/dsh-skill-manager](https://github.com/JimmyJin2006/dsh-skill-manager) | Client + Host | `dsh-skill-manager` | 0 | 在设置界面管理你已有的技能！ |
| [LingyeSoul/dsh-rider](https://github.com/LingyeSoul/dsh-rider) | Host | `dsh-rider` | 0 |  |
| [MicroHEROX/dsh-exa-mcp](https://github.com/MicroHEROX/dsh-exa-mcp) | Client + Host | `dsh-exa-mcp` | 0 | Exa Search MCP for DeepSeek Harness: mounts the remote Exa MCP endpoint (https://mcp.exa.ai/mcp) through the i |
| [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | Host | `dsh-dingtalk` | 0 |  |
| [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) | Host | `dsh-calendar` | 0 |  |
| [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) | Client (Web UI) | `dsh-wallpaper` | 0 |  |
| [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) | Host | `dsh-plugin-asmemory` | 0 | Action-State Memory Engine: typed time-series memory (states + actions) with trend/anomaly/causal analysis for |
| [akqwpeter-prog/dsh-media-skills](https://github.com/akqwpeter-prog/dsh-media-skills) | Host | `dsh-media-skills` | 0 | 给 DeepSeek Harness 装上「眼睛」和「画笔」——免费读图 + 免费生图 Skill。Eyes & brush for DeepSeek Harness: free image reading & gene |
| [biociao/dsh-science](https://github.com/biociao/dsh-science) | Host | `dsh-science` | 0 |  |
| [citrusli2026/dsh-mobile-ui](https://github.com/citrusli2026/dsh-mobile-ui) | Client (Web UI) | `dsh-mobile-ui` | 0 | Mobile UI overlay (bottom strip, session drawer) for the DeepSeek Harness web GUI — out-of-tree dsh client plu |
| [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) | Client (Web UI) | `dsh-claude-theme` | 0 | dsh的claude风格界面 |
| [csiroqa/dsh-archive-viewer](https://github.com/csiroqa/dsh-archive-viewer) | Host | `@dsh-external/dsh-archive-viewer` | 0 | DeepSeek Harness（DSH）归档增强插件：自动定期归档、文件夹归档整理、LLM 摘要沉淀经验库、会话收藏与便签、会话删除与优雅关机。Archive enhancement plugin for DeepSe |
| [cyanseek/dsh-native-playbook](https://github.com/cyanseek/dsh-native-playbook) | Host | `dsh-native-playbook` | 0 | Native capability guide for DeepSeek Harness — installable DSH runtime plugin, Agent Skill, and CLI. |
| [dsh-external/dsh-automation](https://github.com/dsh-external/dsh-automation) | Host | `@dsh-external/dsh-automation` | 0 | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并保留可审计历史。 / A DSH automation plugin for scheduled coding runs in |
| [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) | Client (Web UI) | `dsh-theme-neko` | 0 | A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI. |
| [dsh-external/dsh-plannotator](https://github.com/dsh-external/dsh-plannotator) | Host | `@dsh-external/dsh-plannotator` | 0 | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Age |
| [jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) | Host | `dsh-survey` | 0 | 问卷式批量提问插件 for DeepSeek Harness：一次性问 10+ 题（单选/多选/是否 toggle/对比题/开放题），可跳过、全屏浮层、提交后对半 recap |
| [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) | Host | `@leechen298/code2skill` | 0 |  |
| [misakimiku2/dsh-cost-display](https://github.com/misakimiku2/dsh-cost-display) | Host | `dsh-cost-display` | 0 | DeepSeek Harness 成本显示插件 |
| [minatoAI/jina-dsh-plugin](https://github.com/minatoAI/jina-dsh-plugin) | Client + Host | `dsh-jina` | 0 | Jina AI tools for DeepSeek Harness: 12 model tools (web / arXiv / SSRN search, read, screenshot, embeddings, r |
| [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | Client + Host | `@dsh-external/dsh-minigames` | 0 | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [radaren/dsh-auth](https://github.com/radaren/dsh-auth) | Client (Web UI) | `dsh-auth` | 0 |  |
| [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) | Client + Host | `dsh-auto` | 0 | dsh Auto Approve |
| [vvlife/dsh-agnes-paseo](https://github.com/vvlife/dsh-agnes-paseo) | Host | `dsh-agnes-paseo` | 0 |  |
| [xDer666/dsh-mobile-nav](https://github.com/xDer666/dsh-mobile-nav) | Client (Web UI) | `dsh-mobile-nav` | 0 |  |
| [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) | Host | `@wellorbetter/dsh-product-delivery-workflow` | 0 | 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (resear |
| [wuxinzhe/dsh-speech-sherpa](https://github.com/wuxinzhe/dsh-speech-sherpa) | Client (Web UI) | `dsh-speech-sherpa` | 0 |  |
| [wuwangmao/dsh-qwen-multimodal](https://github.com/wuwangmao/dsh-qwen-multimodal) | Host | `dsh-qwen-multimodal` | 0 | DSH bundle: Qwen multimodal bridge — vision (qwen3-vl), speech-to-text (qwen3-asr), text-to-image (qwen-image) |
| [zimai233/dsh-adhd-copilot](https://github.com/zimai233/dsh-adhd-copilot) | Host | `dsh-adhd-copilot` | 0 | ADHD behavioral coaching skill for DeepSeek Harness. Guides readers through task execution - breaks tasks into |
| [zhangzujian/dsh-same-mode-sandbox-noop](https://github.com/zhangzujian/dsh-same-mode-sandbox-noop) | Host | `@zhangzujian/dsh-same-mode-sandbox-noop` | 0 | DSH compatibility plugin for redundant same-mode sandbox escalation requests |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Unattributed | `@dsh-external/turn-rewind` | 25 | deepseek harness对话和代码状态回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change L |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | Unattributed | `dsh-message-edit` | 13 | DSH plugin: branch-based message editing, reroll, retry, version timeline |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | Unattributed | `@dsh-external/dsh-share` | 12 | dsh对话分享插件，一键分享你的对话 |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | Unattributed | `cordis-fabric-bundle` | 8 | 一种类似MC Fabric的hook处理器 |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | Unattributed | `@loserfox/git-identity` | 7 | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | Unattributed | `dsh-plugin-ds-api-usage` | 6 |  |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | Unattributed | `deepseek-manners` | 3 | DSH 插件：给每次消息后注入感谢语（deepseek-manners） |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Unattributed | `dsh-plugin-cost-tracker` | 3 | Token cost tracker for DeepSeek Harness |
| [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Unattributed | `dsh-plugin-template` | 3 | Template for deepseek-harness plugin development. |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | Unattributed | `dsh-hdc-bridge` | 2 | DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | Unattributed | `dsh-prompt-studio` | 2 | DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio) |
| [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | Unattributed | `dsh-daily-progress` | 2 |  |
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | Unattributed | `dsh-reasoning-translator` | 2 | DeepSeek Harness plugin: make the model write its chain-of-thought in your language |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | Unattributed | `dizzy-dsh` | 1 | My DSH plugins |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Unattributed | `@dsh-external/dsh-spotlight` | 1 | Keyboard-first command palette for DeepSeek Harness Web |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | Unattributed | `dsh-usage-cost` | 1 | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; in |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | Unattributed | `dsh-balance-display` | 1 | DeepSeek API balance overlay for DeepSeek Harness |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | Unattributed | `dsh-payload-capture` | 1 | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 |
| [NigelYao/dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) | Unattributed | `dsh-view-modes` | 1 | view modes for deepseek harness, including Verbose, Normal, Summary Mode |
| [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | Unattributed | `dsh-port-guard` | 1 | DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置 |
| [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | Unattributed | `dsh-screenshot-diff` | 1 | DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具 |
| [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | Unattributed | `dsh-batch-regression` | 1 | DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论 |
| [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | Unattributed | `dsh-bisect-debug` | 1 | DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因 |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Unattributed | `dsh-plugin-rag` | 1 | Local knowledge base RAG for DeepSeek Harness |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | Unattributed | `@bill9109/dsh-conversation-share` | 1 | 分享任意段落的 DSH 对话 |
| [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) | Unattributed | `dsh-plugin-audit` | 1 | Security audit plugin for DeepSeek Harness: static permission profiling + runtime sentinel |
| [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) | Unattributed | `@omdsh/runtime` | 1 |  |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | Unattributed | `dsh-task-progress-notifier` | 1 |  |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | Unattributed | `falsify-dsh` | 1 | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. |
| [Alexis-fish/dsh-projects](https://github.com/Alexis-fish/dsh-projects) | Unattributed | `dsh-projects` | 0 | Codex-style projects for DeepSeek Harness |
| [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | Unattributed | `@chi-hong22/dsh-mdbox` | 0 | DeepSeek Harness (DSH) Web 输入框的 Markdown 编辑辅助插件。 |
| [Chi-hong22/dsh-latexcp](https://github.com/Chi-hong22/dsh-latexcp) | Unattributed | `@chi-hong22/dsh-latexcp` | 0 | DeepSeek Harness (DSH) Web 界面 LaTeX 公式复制插件：悬停公式浮现复制按钮，一键复制公式的 TeX 源码。 |
| [Equinox7379/dsh-update-radar](https://github.com/Equinox7379/dsh-update-radar) | Unattributed | `dsh-update-radar` | 0 | Update radar for DSH: checks installed plugins against git upstreams. |
| [LnsiAxe/dsh-web-restart](https://github.com/LnsiAxe/dsh-web-restart) | Unattributed | `@lnsiaxe/dsh-web-restart` | 0 | DSH bundle: ensure/rotate the DeepSeek Harness web server (detached via WMI) — load to start it |
| [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) | Unattributed | `dsh-web-attention-badge` | 0 | Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for  |
| [MysaDC/dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) | Unattributed | `dsh-plugin-description` | 0 | mount one row in the composition and every plugin card on the Web Settings plugin list page gets a bilingual ( |
| [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) | Unattributed | `dsh-file-claim` | 0 | File claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/relea |
| [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) | Unattributed | `dsh-slack` | 0 |  |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Unattributed | `dsh-landscape` | 0 | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and  |
| [dsh-external/dsh-daily-progress](https://github.com/dsh-external/dsh-daily-progress) | Unattributed | `dsh-daily-progress` | 0 |  |
| [dsh-external/dsh-spotlight](https://github.com/dsh-external/dsh-spotlight) | Unattributed | `@dsh-external/dsh-spotlight` | 0 | Keyboard-first command palette for DeepSeek Harness Web |
| [fountunt/dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) | Unattributed | `dsh-session-cleaner` | 0 |  |
| [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) | Unattributed | `dsh-funpack` | 0 | ??????????????????????? DeepSeek Harness ?? |
| [peach0x33a/dsh-open-browser](https://github.com/peach0x33a/dsh-open-browser) | Unattributed | `dsh-open-browser` | 0 |  |
| [realguan/dsh-mermaid-preview](https://github.com/realguan/dsh-mermaid-preview) | Unattributed | `dsh-mermaid-preview` | 0 | Render Mermaid fenced code blocks as diagrams in DeepSeek Harness (dsh) web — a dynamic Cordis client plugin,  |
| [yeshimei/dsh-sound](https://github.com/yeshimei/dsh-sound) | Unattributed | `dsh-sound` | 0 |  |
| [zhangzujian/dsh-subprocess-inherit-environment](https://github.com/zhangzujian/dsh-subprocess-inherit-environment) | Unattributed | `@zhangzujian/dsh-subprocess-inherit-environment` | 0 | DSH plugin that forwards the complete Harness environment through ctx.subprocess |
