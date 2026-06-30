"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function HtmlLangSetter() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
