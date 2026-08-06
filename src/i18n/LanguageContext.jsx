import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { resolve } from "./translations";

const STORAGE_KEY = "lang";

const detectInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "vi" || saved === "en") return saved;
  } catch (_) {
    // localStorage may be unavailable (SSR / privacy mode)
  }
  const browser = typeof navigator !== "undefined" ? navigator.language || "" : "";
  return browser.toLowerCase().startsWith("vi") ? "vi" : "en";
};

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectInitialLang);

  const setLang = useCallback((next) => {
    if (next !== "en" && next !== "vi") return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "vi" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (_) {}
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useCallback((path) => resolve(lang, path), [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
