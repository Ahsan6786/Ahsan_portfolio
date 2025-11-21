
"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

const educationHistory = [
    {
        degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
        institution: "MIT-WPU (MIT World Peace University), Pune",
        duration: "July 2023 – Present",
        score: "CGPA: 8.2",
        description: "Studying core areas of computer science including algorithms, data structures, operating systems, software engineering, and web technologies. Built multiple academic and personal projects in web development and programming.",
        image: "/mit.png"
    },
    {
        degree: "Higher Secondary Education (Class 11–12)",
        institution: "Akshara International School, Wakad, Pune",
        duration: "Completed in 2022",
        score: "Percentage: 73%",
        description: "Focused on PCM (Physics, Chemistry, Mathematics) with computer science. Built strong academic foundation before entering engineering.",
        image: "/akshara.png"
    },
    {
        degree: "Matriculation (Class 10)",
        institution: "St. Paul’s High School, Hajipur",
        duration: "Completed in 2020",
        score: null,
        description: "Completed secondary education with strong performance and active participation in school activities.",
        image: "/st.png"
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
            
            <div className="max-w-4xl mx-auto space-y-8">
                {educationHistory.map((edu, index) => (
                    <div key={index} className="bg-card/80 backdrop-blur-sm border border-border/20 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-background rounded-lg p-2 border border-border">
                                <Image 
                                    src={edu.image}
                                    alt={`${edu.institution} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">{edu.degree}</h3>
                                <p className="text-md md:text-lg text-primary font-medium mt-1">{edu.institution}</p>
                                
                                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                                    <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                                        <Calendar className="w-4 h-4"/>
                                        <span>{edu.duration}</span>
                                    </div>
                                    {edu.score && (
                                        <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                                            <GraduationCap className="w-4 h-4"/>
                                            <span>{edu.score}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-border/50 pt-6">
                            <p className="text-muted-foreground">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>

          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}
