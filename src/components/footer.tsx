"use client";

import React from 'react';
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations, loading } = useLanguage();

  if (loading) return null;

  return (
    <footer className="p-4 md:p-6 bg-card border-t">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Ahsan Imam Khan. {translations.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
