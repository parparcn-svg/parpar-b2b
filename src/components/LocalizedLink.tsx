"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localizeHref } from "@/lib/localize";

export default function LocalizedLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  const { lang } = useLanguage();
  const resolved = typeof href === "string" ? localizeHref(lang, href) : href;
  return <Link {...props} href={resolved} />;
}
