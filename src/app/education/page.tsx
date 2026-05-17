"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, GraduationCap, Award, BookOpen, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

const educationHistory = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "MIT-WPU (MIT World Peace University), Pune",
    duration: "July 2023 – Present",
    score: "CGPA: 8.2",
    description: "Studying core areas of computer science including advanced algorithms, data structures, database architecture, software engineering, and AI models. Actively participating in national hackathons and developer communities.",
    image: "/wpu.png",
    icon: <BookOpen className="w-5 h-5 text-yellow-500" />
  },
  {
    degree: "Higher Secondary Education (Class 11–12)",
    institution: "Akshara International School, Wakad, Pune",
    duration: "Completed in 2022",
    score: "Percentage: 73%",
    description: "Focused on Physics, Chemistry, and Mathematics (PCM) alongside Computer Science. Developed foundational analytical and programming fundamentals.",
    image: "/akshara.jpg",
    icon: <GraduationCap className="w-5 h-5 text-yellow-500" />
  },
  {
    degree: "Matriculation (Class 10)",
    institution: "St. Paul’s High School, Hajipur",
    duration: "Completed in 2020",
    score: "Percentage: 87.4%",
    description: "Completed secondary education with high-distinction honors, actively participating in public debating tournaments and science exhibitions.",
    image: "/st.jpg",
    icon: <Award className="w-5 h-5 text-yellow-500" />
  }
];

export default function EducationPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Navigation Bar */}
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

        {/* Section Header */}
        <section className="mb-16 md:mb-24 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.education.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              STUDIES
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              Academic milestones and engineering foundation
            </p>
          </AnimateOnScroll>
        </section>

        {/* Timeline Path & Cards Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-12 md:pl-16 border-l border-border dark:border-yellow-500/20 space-y-12">
          
          {educationHistory.map((edu, index) => (
            <div key={index} className="relative">
              
              {/* Timeline Bullet Node with Glow */}
              <div className="absolute -left-[35px] sm:-left-[59px] md:-left-[75px] top-6 flex items-center justify-center">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-card border border-border dark:border-yellow-500/30 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                  {/* Glowing core */}
                  <div className="absolute inset-0.5 rounded-full bg-yellow-500/10 dark:bg-yellow-500/20 animate-ping opacity-60" />
                  {edu.icon}
                </div>
              </div>

              {/* Education Glass Card */}
              <AnimateOnScroll>
                <div className="p-6 md:p-8 bg-card/60 dark:bg-[#121212]/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-2xl shadow-xl hover:border-yellow-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-500/5 relative overflow-hidden">
                  
                  {/* Premium gold hover element */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    
                    {/* Glowing Logo Frame */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white dark:bg-zinc-900 rounded-xl p-2 border border-border/80 dark:border-yellow-500/15 shadow-inner transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={edu.image}
                        alt={`${edu.institution} logo`}
                        fill
                        sizes="5rem"
                        className="object-contain p-1.5"
                        priority={index === 0}
                      />
                    </div>

                    {/* Meta details */}
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-sm sm:text-base text-yellow-600 dark:text-yellow-500 font-mono mt-1 font-semibold">
                        {edu.institution}
                      </p>

                      {/* Info Badges Row */}
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="flex items-center gap-1.5 bg-foreground/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/15 text-muted-foreground dark:text-yellow-400 font-mono text-xs px-3.5 py-1.5 rounded-full">
                          <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                          <span>{edu.duration}</span>
                        </span>
                        
                        {edu.score && (
                          <span className="flex items-center gap-1.5 bg-foreground/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/15 text-muted-foreground dark:text-yellow-400 font-mono text-xs px-3.5 py-1.5 rounded-full">
                            <GraduationCap className="w-3.5 h-3.5 text-yellow-500" />
                            <span className="font-bold">{edu.score}</span>
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mt-6 pt-6 border-t border-border/50 dark:border-white/5">
                    <p className="text-muted-foreground dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                </div>
              </AnimateOnScroll>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
