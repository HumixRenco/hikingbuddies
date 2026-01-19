import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Language, translations, TranslationKey } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred-language";
const SUPPORTED_LANGUAGES: Language[] = ["en", "fr", "it", "es"];

/**
 * Detects the user's preferred language from browser settings.
 * Returns the first supported language found, or "en" as fallback.
 */
function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  
  // navigator.languages gives ordered list of user preferences
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const lang of browserLanguages) {
    // Extract primary language code (e.g., "fr-FR" → "fr")
    const primaryCode = lang.split("-")[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(primaryCode as Language)) {
      return primaryCode as Language;
    }
  }
  
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // 1. Check localStorage first (user's explicit choice)
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
        return stored as Language;
      }
      // 2. Detect from browser settings
      return detectBrowserLanguage();
    }
    return "en";
  });

  // Persist language choice to localStorage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  // Translation function
  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
