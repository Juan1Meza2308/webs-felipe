"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale, type Translations, translations } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
  supportedLocales: Locale[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  // During SSR (mounted=false), provide default locale context so useLanguage works.
  // After hydration (mounted=true), the provider value updates with the stored locale.
  return (
    <LanguageContext.Provider
      value={{
        locale,
        translations: translations[locale],
        setLocale,
        supportedLocales: SUPPORTED_LOCALES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Re-export translations for direct access if needed
export { translations } from "@/lib/i18n";