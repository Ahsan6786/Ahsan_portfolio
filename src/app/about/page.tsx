"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">

        {/* Back Button */}
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="icon"
                className="hover:bg-accent border border-transparent hover:border-border rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="pb-16 md:pb-24 overflow-hidden">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto">
              
              {/* Text Column */}
              <div className="relative text-center">
                <div className="relative mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    {translations.about.title}
                  </h2>

                  {/* Big Background Title */}
                  <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute 
                    -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full 
                    text-center break-words"
                  >
                    {translations.about.title}
                  </p>
                </div>

                <p className="text-lg">
                  <span className="font-bold text-primary">
                    {translations.about.name}
                  </span>
                </p>

                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  {translations.about.p1}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  {translations.about.p2}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  {translations.about.p3}
                </p>

                 {/* Bottom Buttons */}
                <div className="text-center mt-12">
                  <p className="text-xl md:text-2xl text-primary font-bold mb-6">
                    {translations.about.projectsCompleted}
                  </p>

                  <div className="flex justify-center items-center gap-4 flex-wrap">

                    {/* Hire Me */}
                    <Link href="/contact">
                      <Button
                        size="default"
                        className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        {translations.about.hireMe}
                      </Button>
                    </Link>

                    {/* Download CV */}
                    <a href="/AhsanCV.pdf" download="Ahsan-Imam-Khan-CV.pdf">
                      <Button
                        size="default"
                        variant="outline"
                        className="font-semibold rounded-full border-foreground/50 hover:bg-foreground/10 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Download CV
                        <Download className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </AnimateOnScroll>
        </section>

      </div>
    </div>
  );
}
