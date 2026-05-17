"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Translations = { [key: string]: any };

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  translations: Translations;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
            console.error(`Could not load translations for ${language}. Falling back to English.`);
            const fallbackResponse = await fetch(`/locales/en.json`);
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
        } else {
            const data = await response.json();
            setTranslations(data);
        }
      } catch (error) {
        console.error('Failed to fetch translations:', error);
        // Fallback to English on any error
        try {
            const fallbackResponse = await fetch(`/locales/en.json`);
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
        } catch (fallbackError) {
            console.error('Failed to fetch fallback English translations:', fallbackError);
            setTranslations({}); // No translations available
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
