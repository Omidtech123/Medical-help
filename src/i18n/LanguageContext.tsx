import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type Language, translations, type Translation } from '@/i18n/translations';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'firstaid-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fa') return stored;
    }
    return 'en';
  });

  const dir = lang === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
