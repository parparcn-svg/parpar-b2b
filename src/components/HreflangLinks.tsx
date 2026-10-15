import type React from "react";

/**
 * 输出小写 hreflang 的 <link rel="alternate"> 标签。
 *
 * Next.js 的 metadata.alternates.languages 会把属性名渲染成驼峰 hrefLang。
 * HTML 属性名本不区分大小写、Google 两种写法都能识别，但 SEO 审计工具按字面
 * 匹配 "hreflang"，驼峰会被判成"缺少 hreflang"并报 Hreflang conflicts。
 *
 * 这里刻意用小写 hreflang 输出合规属性名，因此需要用类型断言绕开 TS 对
 * hrefLang 的约束（React 也会给开发期 warning，生产环境不输出）。
 *
 * 用法：在页面组件里 <HreflangLinks path="/products/xxx" />
 * path 为不含语言前缀的路径；首页传空字符串 ""。
 */
const BASE = "https://parpareg.com";

export default function HreflangLinks({ path }: { path: string }) {
  const links = [
    { rel: "alternate", hreflang: "en", href: `${BASE}/en${path}` },
    { rel: "alternate", hreflang: "ar", href: `${BASE}/ar${path}` },
    { rel: "alternate", hreflang: "x-default", href: `${BASE}/en${path}` },
  ] as unknown as React.LinkHTMLAttributes<HTMLLinkElement>[];

  return (
    <>
      {links.map((attrs, i) => (
        <link key={i} {...attrs} />
      ))}
    </>
  );
}
