"use client"

import { createContext, useContext, ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import type { Lang } from "@/lib/i18n"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
})

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLang = () => {
    const next: Lang = lang === "ar" ? "en" : "ar"
    // pathname is always prefixed (/ar/... or /en/...) after middleware
    const parts = pathname.split("/")
    if (parts[1] === "ar" || parts[1] === "en") {
      parts[1] = next
      router.push(parts.join("/") || `/${next}`)
    } else {
      router.push(`/${next}${pathname}`)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
