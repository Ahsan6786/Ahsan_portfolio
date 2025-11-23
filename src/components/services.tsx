
"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import Link from "next/link";

export function Services() {
  const { translations, loading } = useLanguage();

  if (loading) return null;

  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">{translations.services.title}</h2>
            <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              {translations.services.title}
            </p>
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
                <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                  Explore Services
                </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
