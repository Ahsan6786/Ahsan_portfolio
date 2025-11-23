"use client";

import React from 'react';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from './ui/button';
import Link from 'next/link';

export function Skills() {
  const { translations, loading } = useLanguage();

  if (loading) return null;

  return (
    <section id="skills" className="py-16 md:py-32 bg-background overflow-hidden">
        <AnimateOnScroll>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 relative">
                    <h2 className="text-4xl md:text-5xl font-bold">{translations.skills.title}</h2>
                    <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                        Expertise
                    </p>
                </div>
                <div className="text-center mt-8">
                    <Link href="/skills">
                        <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                        View All Skills
                        </Button>
                    </Link>
                </div>
            </div>
        </AnimateOnScroll>
    </section>
  );
}
