import type { Lang } from "@/lib/i18n";

/**
 * Prefix a site-internal href with the active language.
 * - "/"            -> "/ar" | "/en"
 * - "#anchor"      -> unchanged (same-page anchor)
 * - "/already/prefixed" -> unchanged
 * - "/path"        -> "/ar/path" | "/en/path"
 */
export function localizeHref(lang: Lang, href: string): string {
  if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }
  if (href.startsWith("/ar/") || href.startsWith("/en/")) return href;
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}
