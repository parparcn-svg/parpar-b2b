# Parpar B2B — SEO 与内容运营方案

> **站点**：https://parpareg.com（Next.js 16 独立站，EN/AR 双语客户端切换）
> **目标**：以现有站为专项独立站，捕获埃及 B2B 采购主动搜索流量（经销商、酒店、餐饮、清洁公司、政府机构）
> **文档版本**：2026.07

---

## 一、SEO 现状审计结论（2026.07）

### ✅ 已有基础
| 项 | 状态 |
|---|---|
| Organization / WebSite JSON-LD | 已有（layout.tsx） |
| Product JSON-LD | 5 款产品均有（price=0 占位） |
| sitemap.xml 动态生成 | 静态页 + 产品 + 博客 |
| robots.txt | 正确，指向 sitemap |
| Google Search Console 验证 | 已配（meta + 硬编码） |
| 页面级 metadata | 产品页/博客详情/About 有独立 title/description |
| 图片 SEO | 文件名已按关键词/GEO 优化 |
| 双语 UI | 阿拉伯语为默认语言，客户端即时切换 |

### ❌ 已识别差距（按优先级）
1. **canonical 继承 Bug（高）**：`layout.tsx` 中 `alternates.canonical: "/"` 被所有子页面继承，产品页/博客页 canonical 全部指向首页，稀释索引权重。✅ 本轮已修复（子页面显式覆盖）。
2. **Blog 内容严重不足（高）**：仅 1 篇文章。✅ 本轮扩充至 6 篇。
3. **无 FAQ 内容与 FAQPage schema（高）**：✅ 本轮已为 5 款产品增加双语 FAQ 区块 + FAQPage JSON-LD。
4. **无 BreadcrumbList schema（中）**：✅ 本轮已为产品页/博客页/指南页增加。
5. **Blog 索引页无 metadata（中）**：✅ 本轮已补。
6. **语言 SEO 缺口（大项，需单独排期）**：语言切换为纯客户端状态，URL 无 `/ar`/`en` 区分、无 hreflang、`html lang` 服务端固定为 en —— 阿拉伯语内容无法被 Google 单独索引。详见"后续技术大项"。
7. **产品 retailSpec 均为 TBD**：零售规格数据待产品方补充。
8. **项目遗留 lint errors（25 个）**：集中在 SEOContent.tsx / HomeContent.tsx 的 `no-explicit-any`，非本轮引入，建议后续清理。

---

## 二、关键词地图（本轮内容覆盖目标）

### 英语关键词（购买意图，B2B）
| 关键词 | 意图 | 落地页 |
|---|---|---|
| cockroach killer spray wholesale | 交易 | 产品页 P001 + 新博客 |
| mosquito repellent spray supplier Egypt | 交易 | 产品页 P002 |
| mosquito repellent liquid refill wholesale | 交易 | 产品页 P003 |
| electric mosquito vaporizer hotel supplier | 交易 | 产品页 P004/P005 |
| pest control products wholesale Egypt | 交易 | Home / Buyers |
| private label insecticide manufacturer | 研究→交易 | 新博客 |
| pesticide registration Egypt | 信息→信任 | 新博客 |
| hotel mosquito control procurement | 交易 | guides/酒店采购指南 |
| cockroach control restaurants / food industry | 信息→交易 | 新博客 |
| mosquito liquid vs spray comparison | 信息（决策期） | 新博客 |

### 阿拉伯语关键词（后续大项，随语言 URL 化落地）
- شراء مبيدات حشرية بالجملة مصر（埃及杀虫剂批发）
- مبيد صراصير بالجملة（蟑螂药批发）
- طارد البعوض للمستشفيات والفنادق（医院/酒店驱蚊）
- سائل مبخر البعوض بالجملة（蚊香液批发）
- شركة مكافحة حشرات موردين مصر（虫控供应商）

---

## 三、内容建设执行清单（本轮 2026.07 已完成）

| # | 内容 | 类型 | 状态 |
|---|---|---|---|
| 1 | canonical 修复 + BreadcrumbList + 产品页 schema | 技术 SEO | ✅ 完成 |
| 2 | 产品 FAQ 区块（双语）+ FAQPage schema | 内容 + schema | ✅ 完成 |
| 3 | Blog 新增 5 篇英文高意图文章 | 内容 | ✅ 完成 |
| 4 | Blog 索引页 metadata | 技术 SEO | ✅ 完成 |
| 5 | 语言 URL 化 + hreflang（/ar /en 路由） | 技术大项 | ⏳ 后续排期 |

### 本轮新增博客（与现有 guides 不重复，均已上线）
1. `wholesale-mosquito-repellent-egypt-2026` — 埃及驱蚊剂批发采购指南（MOQ、价格结构、选商标准）
2. `cockroach-control-restaurants-food-industry` — 餐饮/食品行业蟑螂控制方案
3. `private-label-insecticide-manufacturing-guide` — 贴牌（私有品牌）杀虫剂制造：经销商指南
4. `mosquito-liquid-vs-spray-comparison` — 蚊香液 vs 喷雾：买家决策对比
5. `pesticide-registration-egypt-importers` — 埃及农药注册合规：进口商/经销商指南

### 本轮技术改动清单
- `src/lib/productFaqs.ts`（新增）：5 款产品 × 4 条双语 FAQ 数据
- `src/app/products/[slug]/page.tsx`：canonical 修复 + BreadcrumbList + FAQPage schema
- `src/app/products/[slug]/ProductDetailContent.tsx`：FAQ 折叠区块（AR/EN 跟随语言切换）
- `src/app/blog/page.tsx`：索引页 metadata
- `src/app/blog/[slug]/page.tsx`：canonical + BreadcrumbList
- `src/app/guides/*/page.tsx`（3 个）：BreadcrumbList
- `src/lib/posts.ts`：+5 篇文章
- `src/lib/useTranslation.ts`：FAQ 标题/提示（ar/en）

---

## 四、内容日历（后续 4 周，建议节奏）

| 周 | 内容动作 |
|---|---|
| W1 | 上线本轮 5 篇博客 + 产品 FAQ；提交 sitemap 到 GSC（部署后自动更新 sitemap.xml） |
| W2 | 阿拉伯语博客 2 篇（须先完成语言 URL 化）；外链：埃及 B2B 目录、pest control 行业站 |
| W3 | Google Business Profile 完整运营 + 客户评价收集；YouTube 工厂视频 2 支 |
| W4 | 用 GSC 数据复盘关键词，淘汰无效词，扩写高潜词；对照 Google/Meta 推广方案上广告落地页 |

---

## 五、后续技术大项（需单独评估排期）

### 语言 URL 化 + hreflang（最高优先）
- 现状：语言切换为客户端 state，URL 不变；服务端 `html lang="en"`；阿拉伯语内容不可被搜索引擎独立索引。
- 建议方案：`/ar/*` 与 `/*`（英文）双路由，或 `/en`/`/ar` 前缀；Header 切换改为路由切换；sitemap 输出双语言 URL；每页注入 `alternates.languages`（hreflang en/ar/x-default）。
- 影响面：Header、所有 Link、LanguageContext、HtmlLangSetter、sitemap、metadata、GA/UTM。
- 收益：阿拉伯语搜索流量（埃及 Google 阿语搜索占比高）+ hreflang 正确性。

### 其他
- GA4 Measurement ID 配置（`NEXT_PUBLIC_GA_ID` 未设，GA 未启用）→ 与 Google Ads 转化追踪联动。
- Product schema 价格：拿到真实批发价后替换 `price: "0"`（或改 AggregateOffer min/max），否则无法获得价格富结果。
- 外链建设：埃及本地 B2B 目录、alibaba.com 反链、行业协会资源页。
- `retailSpec` 数据补齐（需产品方提供）。
- 清理遗留 lint errors（SEOContent.tsx / HomeContent.tsx）。

---

## 六、衡量指标（KPI）

- GSC：埃及地区曝光、阿语关键词排名、索引页面数（目标 ≥ 全部 URL 索引）
- 询盘：来源渠道拆分（organic / paid / social / referral）
- 内容：每篇博客的曝光→点击→询盘转化
- 技术：PageSpeed（LCP < 2.5s）、Core Web Vitals 绿区

---

*文档版本：2026.07 — 由运营审计生成，随执行更新*
