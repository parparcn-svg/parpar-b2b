"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Root layout html tag is static; this syncs <html lang/dir> with the active
 * URL segment (/ar/* vs /en/*) on the client after hydration.
 */
export default function DocumentLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const isAr = pathname.startsWith("/ar");
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
