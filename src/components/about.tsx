"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="about" className="py-16 md:py-32 overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 gap-10 md:gap-20 items-center">
            <div className="relative text-center">
              <div className="relative mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">{translations.about.title}</h2>
                <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full text-center break-words">
                  {translations.about.title}
                </p>
              </div>
              <div className="text-center mt-8">
                <Link href="/about">
                    <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Read More About Me
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
