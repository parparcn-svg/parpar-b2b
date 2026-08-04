import { NextRequest, NextResponse } from "next/server";
import { LANGS } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // /ar/... or /en/... already localized — pass through
  if ((LANGS as readonly string[]).includes(first)) {
    return NextResponse.next();
  }

  // Root path: redirect Arabic-preferring visitors to /ar, rewrite others to /en
  if (pathname === "/") {
    const accept = request.headers.get("accept-language") || "";
    if (/^ar\b|,ar\b|ar-/i.test(accept)) {
      const url = request.nextUrl.clone();
      url.pathname = "/ar";
      return NextResponse.redirect(url);
    }
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.rewrite(url);
  }

  // Legacy / English URLs without prefix: rewrite to /en (URL stays unchanged)
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|favicon\.ico|images|.*\.(?:png|jpg|jpeg|gif|svg|webp|ico|pdf|woff2?|ttf|eot|js|css|txt|xml)).*)"],
};
