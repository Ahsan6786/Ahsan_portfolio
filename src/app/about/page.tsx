"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Download, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <AnimateOnScroll>
        <section id="about" className="py-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <Button asChild variant="outline">
                <Link href="/" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {translations.certificatesPage.backToHome}
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-1 gap-10 md:gap-20 items-center">
              <div className="relative text-center">
                <div className="relative mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold">{translations.about.title}</h2>
                  <p className="text-5xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full text-center">
                    {translations.about.title}
                  </p>
                </div>
                <p className="text-lg">
                  <span 
                    className="font-bold text-primary"
                  >
                    {translations.about.name}
                  </span>
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">{translations.about.p1}</p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">{translations.about.p2}</p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">{translations.about.p3}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">{translations.about.projectsCompleted}</p>
            <div className="flex justify-center items-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    {translations.about.hireMe}
                  </Button>
                </Link>
                <a href="/AhsanCV.pdf" download="Ahsan-Imam-Khan-CV.pdf">
                    <Button size="lg" variant="outline" className="font-semibold rounded-full border-foreground/50 hover:bg-foreground/10 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Download CV
                        <Download className="ml-2 h-5 w-5" />
                    </Button>
                </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
