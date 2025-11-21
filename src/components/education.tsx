"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { GraduationCap } from "lucide-react";

export function Education() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="education" className="py-16 md:py-32 overflow-hidden bg-background">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 gap-10 md:gap-20 items-center">
            <div className="relative text-center">
              <div className="relative mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">{translations.education.title}</h2>
                <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full text-center break-words">
                  {translations.education.title}
                </p>
              </div>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                I am currently pursuing my Bachelor's degree in Computer Science and Engineering, focusing on building a strong foundation in technology and software development.
              </p>
              <div className="text-center mt-8">
                <Link href="/education">
                    <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <GraduationCap className="mr-2 h-5 w-5" />
                        {translations.education.viewMore}
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
