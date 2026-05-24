"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Download, ArrowLeft, Award, Sparkles, Code, Globe, ShieldCheck, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardFlip } from "@/components/card-flip";

export default function AboutPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  const stats = [
    {
      number: "15+",
      label: translations.about.projectsCompleted,
      subLabel: "Freelance & Open Source",
      icon: <CheckCircle2 className="w-5 h-5 text-yellow-500" />
    },
    {
      number: "2+",
      label: "Ventures Founded",
      subLabel: "Revial & WEBIS Studio",
      icon: <Target className="w-5 h-5 text-yellow-500" />
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      subLabel: "Premium Delivery",
      icon: <Award className="w-5 h-5 text-yellow-500" />
    },
    {
      number: "10+",
      label: "Core Tech Stacks",
      subLabel: "Full-Stack Ecosystem",
      icon: <Code className="w-5 h-5 text-yellow-500" />
    }
  ];

  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-16">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Back Navigation Row */}
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8 flex justify-start items-center">
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="icon"
                className="hover:bg-accent border border-transparent hover:border-border rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Dynamic Page Header */}
        <section className="mb-12 md:mb-20 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.about.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              ABOUT
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              The engineer and visionary behind the platforms
            </p>
          </AnimateOnScroll>
        </section>

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Biography Card */}
          <AnimateOnScroll>
            <div className="relative p-6 sm:p-8 bg-card/60 dark:bg-[#121212]/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-2xl shadow-xl">
              {/* Accent line */}
              <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-r" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Card side */}
                <div className="col-span-1 md:col-span-5 flex justify-center items-center w-full">
                  <CardFlip frontImage="/front.png" backImage="/back.png" className="shadow-2xl" />
                </div>

                {/* Biography text side */}
                <div className="col-span-1 md:col-span-7 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                    {translations.about.name}
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    <p>{translations.about.p1}</p>
                    <p>{translations.about.p2}</p>
                    <p>{translations.about.p3}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Leadership Focus: Revial & WEBIS */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-serif font-bold text-foreground uppercase tracking-wider">Leadership & Ventures</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Venture 1: Revial */}
                <div className="p-5 bg-gradient-to-br from-card/85 to-card/50 dark:from-[#181818] dark:to-[#0f0f0f] border border-border dark:border-yellow-500/10 rounded-xl hover:border-yellow-500/30 transition-all duration-300 group flex flex-col justify-between shadow-md">
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover:text-yellow-500 transition-colors">REVIAL</h4>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 mt-2 leading-relaxed">
                      Co-founded and engineered the daily AI speaking coach platform, serving real-time voice-interactive speech coaching with instant pacing, structural, and grammatical analytics.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground/60 font-mono">www.revial.online</span>
                    <a href="https://www.revial.online" target="_blank" rel="noopener noreferrer" className="text-[10px] text-yellow-500 hover:underline flex items-center gap-1 font-bold">
                      <span>Visit Site</span>
                      <Globe className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Venture 2: WEBIS */}
                <div className="p-5 bg-gradient-to-br from-card/85 to-card/50 dark:from-[#181818] dark:to-[#0f0f0f] border border-border dark:border-yellow-500/10 rounded-xl hover:border-yellow-500/30 transition-all duration-300 group flex flex-col justify-between shadow-md">
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover:text-yellow-500 transition-colors">WEBIS Digital Studio</h4>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 mt-2 leading-relaxed">
                      Founded a boutique digital engineering studio delivering ultra-premium web development, state-of-the-art UI/UX, and technical infrastructure for ambitious clients globally.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground/60 font-mono">www.webiss.shop</span>
                    <a href="https://www.webiss.shop/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-yellow-500 hover:underline flex items-center gap-1 font-bold">
                      <span>Visit Site</span>
                      <Globe className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Glowing Key Stats Dashboard */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-serif font-bold text-foreground uppercase tracking-wider">Metrics & Performance</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-card/50 dark:bg-[#111] border border-border dark:border-white/5 rounded-xl text-center flex flex-col justify-center items-center hover:border-yellow-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 group shadow-sm">
                    <div className="mb-2 p-1.5 rounded-full bg-foreground/5 group-hover:bg-yellow-500/10 transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-500 dark:from-yellow-400 dark:to-amber-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wide text-foreground mt-1 text-center font-bold">
                      {stat.label.replace(" Completed", "")}
                    </span>
                    <span className="text-[9px] text-muted-foreground/80 dark:text-gray-500 mt-0.5">
                      {stat.subLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bottom Actions Row */}
          <AnimateOnScroll>
            <div className="pt-4 flex justify-center items-center gap-4 flex-wrap">
              <Link href="/contact">
                <Button
                  size="default"
                  className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {translations.about.hireMe}
                </Button>
              </Link>

              <a href="/AhsanCV.pdf" download="Ahsan-Imam-Khan-CV.pdf">
                <Button
                  size="default"
                  variant="outline"
                  className="font-semibold rounded-full border-foreground/50 hover:bg-foreground/10 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <Download className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </AnimateOnScroll>

        </div>

      </div>
    </div>
  );
}
