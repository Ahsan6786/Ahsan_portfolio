"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";


export function Contact() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="contact" className="py-16 md:py-32 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">{translations.contact.title}</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              {translations.contact.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {translations.contact.subtitle}
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <Link href="/contact">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                >
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </motion.div>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
