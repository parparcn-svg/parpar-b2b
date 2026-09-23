export interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_HEADING_RE =
  /<h2[^>]*>\s*(?:Frequently Asked Questions|FAQ|الأسئلة الشائعة)\s*<\/h2>/i;

function decodeEntities(input: string): string {
  return input
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(input: string): string {
  return decodeEntities(input.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 从文章 HTML 中提取 FAQ 条目，用于生成 FAQPage 结构化数据。
 *
 * 直接解析页面可见 HTML（而不是单独维护一份数据），可保证 schema 内容与
 * 页面展示完全一致 —— 这是 Google 对 FAQPage 的硬性要求。
 *
 * 约定：FAQ 区块以 <h2>Frequently Asked Questions</h2>（英文）或
 * <h2>الأسئلة الشائعة</h2>（阿语）开头，之后每条 FAQ 为
 * <h3>问题</h3> 紧跟一个 <p>答案</p>。
 * 未找到 FAQ 区块时返回空数组，调用方据此跳过 schema 渲染。
 */
export function extractFaqs(html: string): FaqItem[] {
  const heading = html.match(FAQ_HEADING_RE);
  if (!heading || heading.index === undefined) return [];

  const rest = html.slice(heading.index + heading[0].length);
  const itemRe = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  const faqs: FaqItem[] = [];
  let m: RegExpExecArray | null;

  while ((m = itemRe.exec(rest)) !== null) {
    const question = stripTags(m[1]);
    const answer = stripTags(m[2]);
    if (question && answer) faqs.push({ question, answer });
  }

  return faqs;
}
