"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales, localeNames, type Locale } from "@/i18n/config";

type DisplayMode = "icon" | "full" | "code" | "code-only" | "responsive" | "mini";

interface LanguageSwitcherProps {
  displayMode?: DisplayMode;
}

export function LanguageSwitcher({ displayMode = "responsive" }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  useEffect(() => {
    const segments = pathname.split("/");
    const localeFromPath = segments[1] as Locale;

    if (locales.includes(localeFromPath)) {
      setCurrentLocale(localeFromPath);
    }
  }, [pathname]);

  const switchLanguage = (newLocale: Locale) => {
    // 1. Save to localStorage
    localStorage.setItem("preferred-locale", newLocale);

    // 2. Set cookie
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // 3. Build new path with new locale
    const segments = pathname.split("/");

    if (locales.includes(segments[1] as Locale)) {
      // Replace existing locale: /en/generator → /vi/generator
      segments[1] = newLocale;
    } else {
      // Add locale: /generator → /vi/generator
      segments.unshift("", newLocale);
    }

    const newPath = segments.join("/");

    // ✅ QUAN TRỌNG: Dùng window.location.href thay vì router.push
    // Để force full page reload và trigger middleware
    window.location.href = newPath;
  };

  const cycleLanguage = () => {
    const currentIndex = locales.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const nextLocale = locales[nextIndex];
    switchLanguage(nextLocale);
  };

  if (displayMode === "mini") {
    return (
      <Globe onClick={cycleLanguage} className="h-4 w-4 cursor-pointer" />
    );
  }

  const renderTriggerContent = () => {
    switch (displayMode) {
      case "icon":
        return <Globe className="h-4 w-4" />;

      case "full":
        return (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>{localeNames[currentLocale]}</span>
          </div>
        );

      case "code":
        return (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="uppercase">{currentLocale}</span>
          </div>
        );

      case "code-only":
        return <span className="uppercase">{currentLocale}</span>;

      case "responsive":
      default:
        return (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline uppercase">{currentLocale}</span>
          </div>
        );
    }
  };

  return (
    <Select value={currentLocale} onValueChange={switchLanguage}>
      <SelectTrigger className="cursor-pointer w-auto gap-2 bg-transparent hover:bg-accent/100 focus:ring-0 focus:ring-offset-0">
        <SelectValue>{renderTriggerContent()}</SelectValue>
      </SelectTrigger>

      <SelectContent align="end" className="z-[1000]">
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            <div className="flex items-center justify-between w-full">
              <span>{localeNames[locale]}</span>
              <span className="text-xs text-muted-foreground uppercase ml-3">
                {locale}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}