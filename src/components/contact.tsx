
"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Contact() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="contact" className="py-16 md:py-32 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">{translations.contact.title}</h2>
            <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              {translations.contact.title}
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
              <Link href="/contact">
                  <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
