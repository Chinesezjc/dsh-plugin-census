# DSH Plugin Census

[English](README.md) | 中文

对 DeepSeek Harness 插件生态的可复现普查：`dsh-plugin` 话题里实际有些什么，
以及其中哪些真的装得上。

> **免责声明。** 本项目是个人维护的社区项目，**不是** DeepSeek 官方产品，
> **不代表** DeepSeek 的立场。被收录不构成推荐，未被收录也不是对质量的评判。
> 维护者向 DeepSeek Harness 上游提交贡献，但这不使本目录具有权威性。
> 所有判定都由本仓库的脚本产出且可复现——请核对它们，而不是相信它们。

## 为什么做这个

[`dsh-plugin`](https://github.com/topics/dsh-plugin) 话题在 2026-08-18 有
**6923** 个仓库，四天前是 1064 个。GitHub 的话题页按 star 排序，而 star 最高的
条目恰恰最不可能是插件。

话题是被完整枚举的，不是采样：<!-- census:begin n-enumerated -->13387<!-- census:end n-enumerated --> 个唯一仓库，做法是围绕搜索 API
单次查询 1000 条的上限做分片。契约探测则跨运行累积，所以下表覆盖的是目前已探测的
<!-- census:begin n-probed -->13708<!-- census:end n-probed --> 个仓库：

<!-- census:begin compliance-zh -->
| Star | 符合插件契约的比例 |
| --- | --- |
| 0 | 78.0% |
| 1-2 | 79.7% |
| 3-9 | 85.1% |
| 10-49 | 80.6% |
| 50+ | **59.7%** |
| 全部 | 79.6% |
<!-- census:end compliance-zh -->

只有最高那一档偏低，其构成解释了原因：带这个话题的高 star 仓库大多是这个话题
*本身的目录项目*——`awesome-dsh-plugin`（6439）、
`AdamPlatin123/awesome-dsh-plugins`（1098）、
`0xsline/awesome-deepseek-harness`（649）——加上周边工具，例如
`Tencent/BrowserSkill`（1089）。它们都不是插件，也都没声称是，但都排在访问者
真正要找的插件前面。

更早一次测量（2026-08-14，n=999）发现合格率随 star 单调下降，从 0 star 的
64.5% 降到 50+ 的 36.4%。**该结论已不再成立**，早先那组数字不应再被引用：生态
在三天内增长到 5.7 倍，且本探针现在能在子包中找到 bundle，而早先那次找不到。

## 样本构成

全部 <!-- census:begin n-probed -->13708<!-- census:end n-probed --> 个被探测仓库，按判定分类：

<!-- census:begin verdicts -->
| 判定 | 数量 | 占比 |
| --- | --- | --- |
| `CONTRACT_OK` | 10856 | 79.2% |
| `NO_DSH_FIELD` | 1166 | 8.5% |
| `NO_PACKAGE_JSON` | 851 | 6.2% |
| `DSH_WITHOUT_BUNDLE_PATCH` | 701 | 5.1% |
| `VENDORED_HARNESS` | 45 | 0.3% |
| `PATCH_FILE_EMPTY_OR_INVALID` | 36 | 0.3% |
| `MALFORMED_PACKAGE_JSON` | 20 | 0.1% |
| `PATCH_FILE_MISSING` | 15 | 0.1% |
| `TREE_UNREADABLE` | 12 | 0.1% |
| `BUNDLE_UNDETERMINED` | 5 | 0.0% |
| `FIRST_PARTY_HARNESS` | 1 | 0.0% |
<!-- census:end verdicts -->

探测是累积的：每次运行把 API 配额先花在从未探测过的仓库上，然后是最陈旧的，所以
这张表覆盖的是 <!-- census:begin n-enumerated -->13387<!-- census:end n-enumerated --> 个已枚举仓库中不断增长的一部分，而不是每次重新采样。

`VENDORED_HARNESS` 标记的是携带了 harness 副本、而非插件的仓库：它之所以满足
契约，是因为它*内含* DSH 自己的 bundle 包。这 <!-- census:begin n-vendored -->45<!-- census:end n-vendored --> 个的 `fork` 全部为 false，
即源码复制而非 GitHub fork，所以按 owner 查或按 fork 状态查都发现不了它们；
它们只能按第一方包名识别。其中最大的是
`fufankeji/deepseek-harness-studio`，260 star。

## 数据保鲜期

这些数字描述的是某一时刻的某一份样本，而这个时刻很短。全部 257 个被判为不合格的
仓库在首次探测数小时后被重新探测：其中 2 个已变为合格，因为作者在这段间隔里加上了
`dsh.bundle`——`songoao25/dsh-plugin-guardian` 在 08:58、
`xinyuehtx/dsh-plugin-hooks-ordering` 在同日 07:54。这两处变化都不是探针修复
带来的，是作者自己提交的。

请把这里的任何数字当作带时间戳的一次读数，而不是长期成立的事实。脚本已包含在
仓库内，以便重新测量，而不是让人相信既有结果。

定时 workflow 直接印证了这一点：在上述数字写下数小时后的一次运行，在同样的单次
查询上限下产出了 742 条而非 763 条目录。两次之间探针没有任何改动——只是这个话题
「最近更新的那一页仓库」已经是另一批了。

## 「契约已验证」的含义

验证复刻的是 DSH 加载 bundle 时实际执行的检查，见
`packages/boot/app-boot/src/profile.ts:388-397`。共三级，每一级对应加载器会抛出
的一个独立失败：

| 层级 | 检查 | 缺失时加载器的行为 |
| --- | --- | --- |
| 1 `DECLARED` | `package.json` 中有 `dsh.bundle.patch` | 在 `profile.ts:391-393` 抛错 |
| 2 `RESOLVED` | 声明的路径存在 | 在 `profile.ts:395` 读取失败 |
| 3 `PARSED` | patch 文件含有 patch 条目 | 在 `profile.ts:396` 解析失败 |

只有达到 `PARSED` 的条目才被列为插件。

**如实说明的局限：** 第 2、3 级在实践中拦下的很少——<!-- census:begin n-declared -->2605<!-- census:end n-declared --> 个声明了 patch
的仓库中只有 <!-- census:begin n-tier23-fail -->51<!-- census:end n-tier23-fail --> 个在这两级失败。静态验证在第 1 级就基本到顶了，剩余的不确定性只能靠实际安装
插件来消除。安装验证尚未实现；本仓库不声称任何插件能运行。

## Surface 归因

每个已验证插件都被归因到它所扩展的 surface，证据按强度分级，且置信度一并公布：

<!-- census:begin surface-zh -->
| 置信度 | 依据 | 数量 | 占比 |
| --- | --- | --- | --- |
| `high` | 依赖 `@deepseek-ai/dsh-client-*`（client 侧）或 `@deepseek-ai/dsh-host-*` 及 host 专用包（host 侧） | 6439 | 59.3% |
| `declared` | 插件自己的 `dsh.client` 或 `dsh.host` 块声明了该 surface | 2605 | 24.0% |
| `medium` | 有 `@deepseek-ai/*` 依赖，但没有一个依赖能区分 client 与 host，surface 记为 `indeterminate` | 357 | 3.3% |
| `low` | 没有 `@deepseek-ai/*` 依赖，surface 由名称或描述中的关键词猜测 | 991 | 9.1% |
| `none` | 既无依赖证据也无关键词命中——**根本没有归因** | 464 | 4.3% |
<!-- census:end surface-zh -->

`high` 与 `medium` 这 <!-- census:begin n-dep-evidence -->6796<!-- census:end n-dep-evidence --> 行基于**已安装的依赖**。另有
<!-- census:begin n-declared -->2605<!-- census:end n-declared --> 行为 `declared`：插件自己的 `dsh` 块声明了 surface——这是作者的
声明而非已安装的包，所以排在依赖证据之下、猜测之上。

归因此前只读依赖，因而丢掉了这些声明，并用猜测取而代之。**这些猜测里有 52% 把
surface 搞错了**——283 个中有 147 个在读到声明后发生了改变，所以这是正确性缺陷，
不只是标注问题。

`low` 是从仓库名里的一个词做出的猜测，并被如实标注。`none` 行的 surface 是
`indeterminate`、证据为空：它是归因的缺失，不是弱归因，不应被读成对该插件的任何判断。

**剩下的猜测已经接近这套方法能判定的下限。** 仍然是 `low`/`none` 的那些条目只有
`dsh.bundle` 块，而且通常连依赖都没有，清单里已经没有可读的东西了。用 bundle patch
文件里声明的 seam 来归因这条路已经测过并被否决：在 30 个 surface 已知的插件里，23 个
根本没有 `inject` 块、只有 1 个给出了 seam，所以这条规则无法用任何数据校准。要解决
这些条目需要本普查不收集的证据——实际安装该插件，或读它的源码。

## 可安装性

符合契约说明插件声明了合法的 patch，但不说明这个包能被获取。有两种失败模式无需
安装即可判定：

<!-- census:begin install-zh -->
| 判定 | 含义 | 数量 |
| --- | --- | --- |
| `published` | 声明的包名可在 npm registry 解析 | 4805 |
| `git-only` | 不在 npm 上；只能用 Git specifier 安装 | 5876 |
| `unpublishable-scope` | 仓库不属于该组织，却用 `@deepseek-ai/` 命名自己 | 173 |
| `unknown` | **registry 没有给出结论**——这不是对该包的判断 | 2 |
<!-- census:end install-zh -->

另有 <!-- census:begin n-vendored -->45<!-- census:end n-vendored --> 个仓库原样携带 `@deepseek-ai/dsh-base`（样本外至少还有两个：
`my-dsh/oh-my-dsh` 与 `BenHuHuan/dhs-tuicode`）。它们不是命名错误的插件，而是
**harness 的源码副本**，因此被归为 `VENDORED_HARNESS` 并从目录中排除，不计入上表。

被阻断的条目在目录中单独列出。它们满足 bundle 契约，但只有 DeepSeek 组织能向
`@deepseek-ai` scope 发布，所以这些名字无法由其当前所有者创建，
`dsh plugin add @deepseek-ai/...` 对它们全部失败。这是改名即可修复的命名缺陷，
不是对代码质量的评价。

该检查**有意不**标记 `@deepseek-ai-community` 这类形近 scope。那些是独立且可自由
注册的 scope，其所有者可以正常发布，因此是可安装的——品牌混淆是另一个问题，
本目录不对此做裁定。

## 成对比较排名（尚在收敛中）

排名问的是「两个插件里，有经验的 DSH 用户更信任哪个」。这个问题能区分一维分数区分
不了的案例：`FengYangXun123/dsh-opencode-usage`（7 个文件）赢了
`GongYuanCaiJi/dsh-claude-code-templates`（5057 个文件），而且**赢的是小的那个**
——后者 5057 个文件里有 5031 个在 `skills/` 下、`lib/` 只有 3 个，主要是在打包别人的
东西。被规模带偏的一维绝对分把两者判为相等，成对比较没有。

评级用 Elo，**只由真实发生过的比较驱动**。**不施加任何目标分布。** 强行凑成正态意味着
把几百个插件压到证据不支持的低分上，而这些判断写着别人仓库的名字。

**这些评级还不构成排名。** 目前 <!-- census:begin n-rated -->986<!-- census:end n-rated --> 个条目有评级，平均每个只比过
<!-- census:begin rating-matches-mean -->1.0<!-- census:end rating-matches-mean --> 场（最多 <!-- census:begin rating-matches-max -->1<!-- census:end rating-matches-max --> 场），跨度仅
<!-- census:begin rating-spread -->1492 to 1508<!-- census:end rating-spread -->。Elo 大约需要 10-20 场才有意义，所以**下面的顺序目前接近
随机**，发布它是为了展示机制正在累积，不是推荐。每行都标出场次，正是为此。

<!-- census:begin rating-bands -->
| 分档 | 条目数 | 评级区间 | 平均场次 |
| --- | --- | --- | --- |
| top quartile | 247 | 1508–1508 | 1.0 |
| second quartile | 247 | 1500–1508 | 1.0 |
| third quartile | 247 | 1492–1500 | 1.0 |
| bottom quartile | 245 | 1492–1492 | 1.0 |
<!-- census:end rating-bands -->

**目录内所有条目都参与排名。** 早先的版本只在部分条目之间比较，理由是
「池太大无法收敛」——**这个判断是错的**，它来自一个有 bug 的模拟：同分时按数组下标配对，
而下标同时又编码了真实实力，于是每轮第一次都让实力最接近的对打，比较几乎不携带信息。
把同分改成随机配对后，全目录排名在每个条目 10 场时达到 Spearman **0.87**、20 场时 0.93。

结果以**分档**而非排名列表发布，因为同一个模拟显示：**整体分层的收敛远早于精确名次**
——在 rho=0.87 时，按评级取的前 15 名里只有 0-1 个属于真实前 15。发布排行榜会宣称这套
方法并不具备的精度。没有这个限制时，
「优先配对比较次数最少的」会在整个目录上铺开而永远不深化：跑了两轮之后，每个有评级的
条目都恰好只有 1 场，按此速度要到 10 场需要约 453 轮。比较与枚举并行执行，两者花的是
不同的 API 配额，所以 150 次比较只给整轮增加约 2% 时间，而不是额外的 13 分钟。有些对始终得不出结果：某一对在 8 次相同尝试里只成功 2 次，因为
模型的思考过程与答案争抢 token 预算。未解决的对**只损失覆盖率，不损失正确性**——没有
任何评级被移动。

## 已发布的包声明了什么

契约验证读的是仓库里的 `package.json`。而用户执行 `dsh plugin add <name>` 装的是
**已发布的 tarball**。**这是两个不同的产物，而它们并不一致。**

在 <!-- census:begin n-npm-checked -->4805<!-- census:end n-npm-checked --> 个能在 npm 上解析的包中：

<!-- census:begin npm-manifest-zh -->
| 状态 | 含义 | 数量 | 占比 |
| --- | --- | --- | --- |
| `bundle-ok` | 已发布的清单声明了 `dsh.bundle` | 4396 | 91.5% |
| `bundle-missing` | **已发布的清单没有 `dsh.bundle`**——DSH 会拒绝把它作为 profile bundle 加载 | 228 | 4.7% |
| `package-missing` | 声明的包名已无法在 registry 上解析 | 33 | 0.7% |
| `unreadable` | registry 读取失败；这不是对该包的判断 | 148 | 3.1% |
<!-- census:end npm-manifest-zh -->

其中 <!-- census:begin n-npm-broken -->261<!-- census:end n-npm-broken --> 个（<!-- census:begin pct-npm-broken -->5.4%<!-- census:end pct-npm-broken -->）**按包名装不上**，尽管它们
的仓库满足契约。`bobcat848/dsh-calculator` 的仓库里有 `dsh.bundle` 和完整的
`dsh.client` 块，而已发布的 `dsh-calculator@0.0.1` **连 `dsh` 字段都没有**；
`orriduck/dsh-tui` 在 `0.2.19` 上同样如此。装上并注册为 profile bundle 会失败并报
`declares no dsh.bundle in its package.json`——已对 `@deepseek-ai/dsh@0.1.0-rc.7`
实测确认。

这是**发布环节的缺口**而不是仓库写错了——通常是构建过程重写了 `package.json` 却没有
把 `dsh` 块带过去。目录选择报告它而不是删掉这些条目，因为仓库确实满足契约，修复权在
作者手里。

## 失效扫描

`scripts/scan-decay.mjs` 会重新检查每个已收录条目，报告四种状态，只标记、
从不删除：`gone`（404）、`archived`（已归档）、`dormant`（30 天内无 push）、
`unbundled`（契约已不成立）。无法得出结论的探测被报为 `inconclusive`，
而绝不报为失效——因为每个失效状态都会促使他人删除条目，而证据可能并不支持。

全部 <!-- census:begin n-catalog-rows -->10856<!-- census:end n-catalog-rows --> 个条目：

<!-- census:begin decay -->
| 状态 | 数量 |
| --- | --- |
| `live` | 10542 |
| `archived` | 33 |
| `gone` | 34 |
| `unbundled` | 15 |
| `dormant` | 0 |
| `inconclusive` | 232 |
<!-- census:end decay -->

**`dormant: 0` 反映的是话题的年龄，不是它的健康度。** 目录条目中最久的一次 push 距今
<!-- census:begin max-age-days -->22<!-- census:end max-age-days --> 天，所以 30 天的休眠阈值根本还触发不了。这已经不再是过去那种
采样偏差——枚举现在覆盖整个话题，而不是「最近更新的那一页」——但这个数字仍然说明
不了长期维护情况，因为这个生态里还没有任何项目有时间沉寂下来。

**`inconclusive` 有 <!-- census:begin n-inconclusive -->232<!-- census:end n-inconclusive --> 个（<!-- census:begin pct-inconclusive -->2.1%<!-- census:end pct-inconclusive -->），这是扫描本身的局限，不是对那些仓库的判定。**
失效扫描与探针共用同一份每小时 API 配额，配额耗尽的那次运行会如实报告「没查成」而不是
去猜。拒绝阈值是 40%，所以这次仍然发布了；读者应把失效表理解为「覆盖了实际能查到的
那些条目」。

失效扫描与探针一样是增量的，原因相同：逐条重扫每次要为每个目录条目花掉 2 次 API
调用，且随目录增长——占到每小时配额的 85%，并让一次定时运行以 45.4% inconclusive
被直接拒绝。现在每次只检查一个有界批次（最旧的优先），其余沿用已存结果，所以本表
中的某个状态可能来自比上面那些数字更早的一次运行。

<!-- census:begin decay-flagged-zh -->
被判定为失效的 82 个条目（`inconclusive` 不是失效，已排除）：

| 条目 | 状态 |
| --- | --- |
| `1HelloMan1/dsh-stats-dashboard` | archived — repository is archived |
| `Agents365-ai/dsh-vision-plugin` | archived — repository is archived |
| `brunhildzhou/dsh-all-warmup` | archived — repository is archived |
| `Bryan-cmf/dsh-skill-gate` | archived — repository is archived |
| `Bryan-cmf/dsh-skill-trail` | archived — repository is archived |
| `ccch1mneyyy/dsh-working-activity` | archived — repository is archived |
| `chen731215-dev/dsh-tavern` | archived — repository is archived |
| `Diluka/dsh-side-session` | archived — repository is archived |
| `dsh-plugins/dsh-user-agent` | archived — repository is archived |
| `GoldenZqqq/dsh-model-collapse` | archived — repository is archived |
| `guaguasong/dsh-attachment-s3` | archived — repository is archived |
| `haiyoucuv/dsh-model-provider-label` | archived — repository is archived |

……另有 70 个见 `data/decay.jsonl`。
<!-- census:end decay-flagged-zh -->

## 复现

```sh
# 1. 采集带该话题的仓库
gh api "search/repositories?q=topic:dsh-plugin&sort=updated&per_page=100&page=1" > /dev/null

# 2. 三级契约探测
node scripts/probe-contract.mjs < repos.txt > data/contract.jsonl

# 3. surface 归因
node scripts/attribute.mjs < data/contract.jsonl > data/surface.jsonl

# 4. 可安装性（npm registry + 保留 scope 检查）
node scripts/installability.mjs < data/contract.jsonl > data/installability.jsonl

# 5. 对目录做失效扫描
node scripts/scan-decay.mjs < data/catalog.jsonl > data/decay.jsonl

# 6. 每个门禁的负例控制
node scripts/test-gates.mjs
node scripts/test-monorepo.mjs
node scripts/test-inconclusive.mjs
node scripts/test-decay.mjs
./scripts/test-fetch.sh
```

`scripts/test-gates.mjs` 存在的理由是：不会失败的门禁不算门禁。它断言第 3 级
判定会拒绝空文件、纯空白、纯注释和散文文件，并断言保留 scope 规则会标记外部
owner、同时不误伤有权发布者、无关 scope 和形近 scope。两个门禁都带一个哨兵断言，
一旦规则被改成无条件放行就会失败；两者都通过注入缺陷并确认测试变红来验证过。

## 数据

| 文件 | 内容 |
| --- | --- |
| `data/repos-raw.jsonl` | 搜索 API 返回的仓库元数据 |
| `data/contract-v3.jsonl` | 三级契约判定 |
| `data/surface-v3.jsonl` | 带置信度的 surface 归因 |
| `data/installability-v3.jsonl` | npm 解析与保留 scope 判定 |
| `data/catalog.jsonl` | 合并、分类后的目录 |
| `data/decay.jsonl` | 每个条目的失效状态 |
| `data/npm-manifest.jsonl` | 每个已发布包声明了什么，与其仓库的对比 |
| `data/ratings.jsonl` | 成对比较得出的 Elo 评级，含每个条目的场次 |

搜索 API 单次查询最多返回 1000 条结果。`scripts/enumerate-topic.mjs` 先按 star 桶、
再按创建日期分片绕过这个上限，最终枚举到 <!-- census:begin n-enumerated -->13387<!-- census:end n-enumerated --> 个唯一仓库——
即整个话题，不是样本。日期边界取自结果计数而非排序，因为这个搜索后端根本不支持
按创建时间排序。

## 相关项目

已有多个目录覆盖这个生态，各有取舍：

- [`AdamPlatin123/awesome-dsh-plugins`](https://github.com/AdamPlatin123/awesome-dsh-plugins)
  ——运行级测试（装进 DSH、拉起本地模型、观察工具调用），通过本地 cron 而非
  Actions 运行。是这个生态里最彻底的验证。
- [`Sunrisepeak/dsh-index`](https://github.com/Sunrisepeak/dsh-index)——定时
  发现 workflow，带 `pnpm pack` 校验和失效 pin 告警。
- [`wangshunnn/oh-my-dsh`](https://github.com/wangshunnn/oh-my-dsh)——每八小时
  从 `topic:dsh-plugin` 刷新一次 registry，带 schema 校验。

本项目不在「单仓库深度」上竞争，且上面有两个项目在判据上领先于它：

- [`awesome-dsh-plugin/awesome-dsh-plugin`](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
  （6439 star）对每个 PR 运行投稿门禁（`scripts/check-submission.mjs`）：树中
  任意位置的 `dsh.bundle`、仓库年龄、commit 数。它的树遍历**比本项目更严谨**
  ——它把被截断的树或超出上限的 manifest 数视为*未知*而非「不存在」，而本探针
  此前不这样处理。它还会解析 npm 发布状态（`scripts/probe-npm.mjs`），并通过
  校验已发布包是否指回同一仓库来防止名称抢注。已有约 1300 份投稿经过它。
- [`omdsh-dev/dsh-plugin-check`](https://github.com/omdsh-dev/dsh-plugin-check)
  对单个仓库应用 **36 条判据**——清单协议、patch 结构、构建布局、TypeScript
  导入、row-id 注册——远比这里公布的三级契约更细。

本项目仍然独有的部分：

- **非投稿式覆盖。** 上述两个项目检查的是被提交给它们的仓库。本项目探测的是
  话题范围内的样本，无论有没有人投稿，因此它测量的是生态本身而不是它的收件箱。
- **vendored harness 检测。** 本样本中 5 个仓库原样携带 `@deepseek-ai/dsh-base` 且
  `fork: false`。它们靠内含 DSH 自己的包通过契约检查，而按 owner 查或按 fork
  查都发现不了。
- **拒绝猜测的失效扫描。** `scripts/scan-decay.mjs` 报告 `gone`、`archived`、
  `dormant` 和 `unbundled`，并把探测不成功的情况报为 `inconclusive` 而不是失效，
  因为每一个失效状态都会促使他人删除条目，而证据可能并不支持这个删除。
- **公布整个样本的分布**而非精选列表：判定占比、按 star 档的合格率、以及全部
  <!-- census:begin n-probed -->13708<!-- census:end n-probed --> 个被探测仓库的可安装性，探针脚本一并提供。

更深入的单仓库审计已经存在，但**未发布**——见
[AUDIT-EXPERIMENTAL.md](AUDIT-EXPERIMENTAL.md)。它的首个实现在每一个被测仓库上
都产生了误报，因此在通过人工标注的固定样本集之前，不会有任何判据上线。

## 许可证

MIT
