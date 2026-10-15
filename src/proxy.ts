import { NextRequest, NextResponse } from "next/server";
import { LANGS } from "./lib/i18n";

/** 规范域名：www 变体一律 301 到裸域，避免重复内容 */
const CANONICAL_HOST = "parpareg.com";

function prefersArabic(request: NextRequest): boolean {
  const accept = request.headers.get("accept-language") || "";
  return /^ar\b|,ar\b|ar-/i.test(accept);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 1) www 变体 → 301 裸域（先于语言处理，保证 www/about 也落到 /en/about）
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  const first = pathname.split("/")[1] ?? "";

  // 2) 已带语言前缀（/en/... 或 /ar/...）— 放行
  if ((LANGS as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  // 3) 其余路径一律 301 到语言版本（英文为默认，阿语偏好者去 /ar）。
  //
  // 这里用 301 而不是 rewrite：此前 rewrite 让 /about 与 /en/about 同时返回 200，
  // 构成重复内容，且页面 canonical/hreflang 指向带前缀的 URL 而非自身，审计因此报了
  // 122 条 "Conflicting hreflang and rel=canonical" 和 61 条 "No self-referencing hreflang"。
  // 改成 301 后无前缀 URL 不再是可索引的实体，canonical 与 hreflang 自指一致。
  const prefix = prefersArabic(request) ? "/ar" : "/en";
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? prefix : `${prefix}${pathname}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|favicon\.ico|images|.*\.(?:png|jpg|jpeg|gif|svg|webp|ico|pdf|woff2?|ttf|eot|js|css|txt|xml)).*)"],
};
