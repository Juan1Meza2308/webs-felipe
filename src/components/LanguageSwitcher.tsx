"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { localeNames } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale, supportedLocales, translations } = useLanguage();

  return (
    <div className="relative inline-flex items-center" role="group" aria-label={translations.common.language}>
      <button
        type="button"
        aria-expanded="false"
        aria-haspopup="listbox"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
        )}
      >
        <Globe className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
      </button>

      <ul
        className="absolute right-0 mt-2 min-w-[140px] rounded-md border border-border bg-popover py-1 shadow-lg z-50"
        role="listbox"
        aria-label={translations.common.language}
      >
        {supportedLocales.map((l) => (
          <li key={l}>
            <button
              type="button"
              role="option"
              aria-selected={l === locale}
              onClick={() => setLocale(l)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground transition-colors",
                l === locale && "bg-accent/10 text-accent font-medium",
              )}
            >
              {localeNames[l]}
              {l === locale && <span className="ml-auto text-accent">✓</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}