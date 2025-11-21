"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, GraduationCap, School } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const educationHistory = [
    {
        degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
        institution: "MIT-WPU (MIT World Peace University), Pune",
        duration: "July 2023 – Present",
        score: "CGPA: 8.2",
        description: "Studying core areas of computer science including algorithms, data structures, operating systems, software engineering, and web technologies. Built multiple academic and personal projects in web development and programming.",
        icon: <GraduationCap className="w-8 h-8" />
    },
    {
        degree: "Higher Secondary Education (Class 11–12)",
        institution: "Akshara International School, Wakad, Pune",
        duration: "Completed in 2022",
        score: "Percentage: 73%",
        description: "Focused on PCM (Physics, Chemistry, Mathematics) with computer science. Built strong academic foundation before entering engineering.",
        icon: <School className="w-8 h-8" />
    },
    {
        degree: "Matriculation (Class 10)",
        institution: "St. Paul’s High School, Hajipur",
        duration: "Completed in 2020",
        score: null,
        description: "Completed secondary education with strong performance and active participation in school activities.",
        icon: <School className="w-8 h-8" />
    }
];

export default function EducationPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
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

        <section id="education" className="pb-16 md:pb-24 overflow-hidden">
          <AnimateOnScroll>
            <div className="relative text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                    {translations.education.title}
                </h2>
                <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute 
                    -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full 
                    text-center break-words"
                >
                    {translations.education.title}
                </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-9 top-0 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
                
                {educationHistory.map((edu, index) => (
                  <div key={index} className="relative pl-20 pb-12 last:pb-0">
                    <div className="absolute left-0 top-0">
                        <div className="w-18 h-18 bg-card border-2 border-primary/50 text-primary rounded-full flex items-center justify-center p-2 shadow-md">
                            {edu.icon}
                        </div>
                    </div>

                    <div className="bg-card/80 backdrop-blur-sm border border-border/20 p-6 rounded-xl shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        {edu.score && (
                          <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 sm:mt-0">{edu.score}</span>
                        )}
                      </div>
                      <p className="text-md text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground my-2">{edu.duration}</p>
                      <p className="text-sm text-muted-foreground mt-4">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}
