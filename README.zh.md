# DSH Plugin Census

[English](README.md) | 中文

对 DeepSeek Harness 插件生态的可复现普查：`dsh-plugin` 话题里实际有些什么，
以及其中哪些真的装得上。

> **免责声明。** 本项目是个人维护的社区项目，**不是** DeepSeek 官方产品，
> **不代表** DeepSeek 的立场。被收录不构成推荐，未被收录也不是对质量的评判。
> 维护者向 DeepSeek Harness 上游提交贡献，但这不使本目录具有权威性。
> 所有判定都由本仓库的脚本产出且可复现——请核对它们，而不是相信它们。

## 为什么做这个

[`dsh-plugin`](https://github.com/topics/dsh-plugin) 话题在 2026-08-17 有
**6081** 个仓库，三天前是 1064 个。GitHub 的话题页按 star 排序，而 star 最高的
条目恰恰最不可能是插件。

在 998 个仓库的样本上实测（搜索 API 单次查询最多返回 1000 条，其中 2 条重复）：

| Star | 符合插件契约的比例 |
| --- | --- |
| 0 | 76.3% |
| 1-2 | 79.1% |
| 3-9 | 77.0% |
| 10-49 | 76.3% |
| 50+ | **52.7%** |
| 全部 | 75.5% |

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

全部 998 个被探测仓库，按判定分类：

| 判定 | 数量 | 占比 |
| --- | --- | --- |
| `CONTRACT_OK` | 753 | 75.5% |
| `NO_DSH_FIELD` | 99 | 9.9% |
| `NO_PACKAGE_JSON` | 78 | 7.8% |
| `DSH_WITHOUT_BUNDLE_PATCH` | 58 | 5.8% |
| `VENDORED_HARNESS` | 5 | 0.5% |
| `PATCH_FILE_EMPTY_OR_INVALID` | 2 | 0.2% |
| `PATCH_FILE_MISSING` | 2 | 0.2% |
| `TREE_UNREADABLE` | 1 | 0.1% |

`VENDORED_HARNESS` 标记的是携带了 harness 副本、而非插件的仓库：它之所以满足
契约，是因为它*内含* DSH 自己的 bundle 包。本样本中这 5 个的 `fork` 全部为 false，
即源码复制而非 GitHub fork，所以按 owner 查或按 fork 状态查都发现不了它们；
它们只能按第一方包名识别。其中最大的是
`fufankeji/deepseek-harness-studio`，208 star。

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

**如实说明的局限：** 第 2、3 级在实践中拦下的很少——757 个声明了 patch 的仓库中只有
4 个在这两级失败（2 个卡在 `RESOLVED`，2 个卡在 `PARSED`）。静态验证在第 1 级就基本
到顶了，剩余的不确定性只能靠实际安装
插件来消除。安装验证尚未实现；本仓库不声称任何插件能运行。

## Surface 归因

每个已验证插件都被归因到它所扩展的 surface，证据按强度分级，且置信度一并公布：

| 置信度 | 依据 | 数量 | 占比 |
| --- | --- | --- | --- |
| `high` | 依赖 `@deepseek-ai/dsh-client-*`（client 侧）或 `@deepseek-ai/dsh-host-*` 及 host 专用包（host 侧） | 414 | 55.0% |
| `medium` | 有 `@deepseek-ai/*` 依赖，但没有一个依赖能区分 client 与 host，surface 记为 `indeterminate` | 36 | 4.8% |
| `low` | 没有 `@deepseek-ai/*` 依赖，surface 由名称或描述中的关键词猜测 | 210 | 27.9% |
| `none` | 既无依赖证据也无关键词命中——**根本没有归因** | 93 | 12.4% |

只有 `high` 与 `medium` 这 450 行基于依赖证据。`low` 是从仓库名里的一个词做出的
猜测，并被如实标注。`none` 行的 surface 是 `indeterminate`、证据为空：它是归因的
缺失，不是弱归因，不应被读成对该插件的任何判断。

## 可安装性

符合契约说明插件声明了合法的 patch，但不说明这个包能被获取。有两种失败模式无需
安装即可判定：

| 判定 | 含义 | 数量 |
| --- | --- | --- |
| `published` | 声明的包名可在 npm registry 解析 | 385 |
| `git-only` | 不在 npm 上；只能用 Git specifier 安装 | 363 |
| `unpublishable-scope` | 仓库不属于该组织，却用 `@deepseek-ai/` 命名自己 | 5 |

本样本中另有 5 个仓库原样携带 `@deepseek-ai/dsh-base`（样本外至少还有两个：
`my-dsh/oh-my-dsh` 与 `BenHuHuan/dhs-tuicode`）。它们不是命名错误的插件，而是
**harness 的源码副本**，因此被归为 `VENDORED_HARNESS` 并从目录中排除，不计入上表。

被阻断的条目在目录中单独列出。它们满足 bundle 契约，但只有 DeepSeek 组织能向
`@deepseek-ai` scope 发布，所以这些名字无法由其当前所有者创建，
`dsh plugin add @deepseek-ai/...` 对它们全部失败。这是改名即可修复的命名缺陷，
不是对代码质量的评价。

该检查**有意不**标记 `@deepseek-ai-community` 这类形近 scope。那些是独立且可自由
注册的 scope，其所有者可以正常发布，因此是可安装的——品牌混淆是另一个问题，
本目录不对此做裁定。

## 失效扫描

`scripts/scan-decay.mjs` 会重新检查每个已收录条目，报告四种状态，只标记、
从不删除：`gone`（404）、`archived`（已归档）、`dormant`（30 天内无 push）、
`unbundled`（契约已不成立）。无法得出结论的探测被报为 `inconclusive`，
而绝不报为失效——因为每个失效状态都会促使他人删除条目，而证据可能并不支持。

全部 753 个条目：

| 状态 | 数量 |
| --- | --- |
| `live` | 752 |
| `archived` | 1 |
| `gone` | 0 |
| `dormant` | 0 |
| `unbundled` | 0 |
| `inconclusive` | 0 |

**`dormant: 0` 是采样偏差的产物，不代表生态健康。** 本普查按最近更新排序采样，
所以样本内每个条目都在数小时内有过 push，休眠在定义上就不可能出现。在同一话题
按 star 排序的样本上，真实的休眠是存在的，最久达 95 天
（`shanliuling/skills-link`，187 star）。读者不应从这张表得出「生态中没有项目
停更」的结论——只能得出「这种采样方式看不到它」。

被标记的条目：`Hanihahaha/deepseek-harness-plugins` 已归档。

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

搜索 API 单次查询最多返回 1000 条结果，且返回的 1000 条中有 2 条重复，所以样本是
6081 个中的 998 个唯一仓库——这个差额是 API 上限造成的，不是筛选造成的。条目按
最近更新排序采样。

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
  998 个被探测仓库的可安装性，探针脚本一并提供。

更深入的单仓库审计已经存在，但**未发布**——见
[AUDIT-EXPERIMENTAL.md](AUDIT-EXPERIMENTAL.md)。它的首个实现在每一个被测仓库上
都产生了误报，因此在通过人工标注的固定样本集之前，不会有任何判据上线。

## 许可证

MIT
