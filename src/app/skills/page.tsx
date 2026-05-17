"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
  {
    title: "Blingish",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "FessUp!",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "React"],
    detailsPage: "/projects/fessup"
  },
  {
    title: "MIT WPU Chat Assist",
    tags: ["Next.js", "Firebase", "Gemini AI", "AI", "React"],
    detailsPage: "/projects/mit-chat-assist"
  },
  {
    title: "Mitra AI",
    tags: ["AI", "Next.js", "Web App", "Firebase", "Tailwind CSS", "React"],
    detailsPage: "/projects/mitra-ai"
  },
  {
    title: "Ahsanverse",
    tags: ["Blockchain", "Web3", "Solidity", "React"],
  },
  {
    title: "News Archive",
    tags: ["Web App", "API", "JavaScript", "HTML", "CSS"],
    detailsPage: "/projects/news-archive",
  },
  {
    title: "Portfolio Website",
    tags: ["Next.js", "ShadCN UI", "Tailwind CSS", "React"],
  },
];

const allSkillsWithLogos = [
    { name: "React", logo: "/react.png" },
    { name: "Next.js", logo: "/next_js.png?v=2" },
    { name: "JavaScript", logo: "/java_script.png" },
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "Tailwind CSS", logo: "/tailwind-css.png" },
    { name: "Firebase", logo: "/firebase.png" },
    { name: "Python", logo: "/Python.png" },
    { name: "MySQL", logo: "/mysql.png" },
    { name: "Solidity", logo: "/download.png" },
];

const getProjectsForSkill = (skill: string) => {
    return allProjects.filter(project => project.tags.includes(skill));
}

export default function SkillsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Dynamic Background Glowing Ambient Orbs */}
      <div className="absolute top-[15%] right-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Navigation row */}
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

        {/* Page Header */}
        <section className="mb-16 md:mb-24 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.skills.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              TECH STACK
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              Expertise mapping and technology stack highlights
            </p>
          </AnimateOnScroll>
        </section>

        {/* Skills Interactive List Area */}
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {allSkillsWithLogos.map(skill => {
                const projects = getProjectsForSkill(skill.name);
                return (
                  <AccordionItem 
                    value={skill.name} 
                    key={skill.name} 
                    className="border-none bg-card/50 dark:bg-[#121212]/50 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-2xl hover:border-yellow-500/25 transition-all duration-300 shadow-md group relative overflow-hidden px-6"
                  >
                    
                    {/* Golden top stripe on card hover */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <AccordionTrigger className="text-lg font-semibold hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors py-5 no-underline hover:no-underline flex justify-between items-center w-full">
                      <div className="flex items-center gap-4 text-left">
                        {/* Premium Logo Frame */}
                        <div className="relative w-10 h-10 p-1.5 bg-white dark:bg-zinc-900 border border-border/80 dark:border-yellow-500/15 rounded-xl transition-all duration-500 group-hover:scale-105 shadow-inner flex items-center justify-center">
                          <Image 
                            src={skill.logo} 
                            alt={`${skill.name} logo`} 
                            fill 
                            sizes="2.5rem" 
                            className="object-contain p-1.5"
                          />
                        </div>
                        <span className="text-foreground font-serif font-bold tracking-wide text-base sm:text-lg">{skill.name}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6 pl-1 sm:pl-14">
                      {projects.length > 0 ? (
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase">
                            <Layers className="w-3.5 h-3.5 text-yellow-500" />
                            <span>Used in projects:</span>
                          </div>

                          <div className="flex flex-wrap gap-2.5">
                            {projects.map(project => (
                              project.detailsPage ? (
                                <Link 
                                  href={project.detailsPage} 
                                  key={project.title} 
                                  className="inline-flex items-center gap-1.5 bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/15 hover:border-yellow-500/35 text-yellow-600 dark:text-yellow-400 font-mono text-xs px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/5 shadow-sm"
                                >
                                  <span>{project.title}</span>
                                  <ArrowRight className="w-3 h-3 ml-0.5" />
                                </Link>
                              ) : (
                                <span 
                                  key={project.title} 
                                  className="inline-flex items-center bg-foreground/5 border border-border text-muted-foreground font-mono text-xs px-4 py-2 rounded-full"
                                >
                                  {project.title}
                                </span>
                              )
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-muted-foreground italic text-sm pt-2">
                          <BookOpen className="w-4 h-4 text-muted-foreground/50" />
                          <span>No specific projects to show for this skill yet.</span>
                        </div>
                      )}
                    </AccordionContent>

                  </AccordionItem>
                )
              })}
            </Accordion>
          </AnimateOnScroll>
        </div>

      </div>
    </div>
  );
}
