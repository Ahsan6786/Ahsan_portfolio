"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const educationDetails = {
  degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
  university: "MIT-WPU (MIT World Peace University)",
  department: "Computer Science & Engineering Department",
  duration: "July 2023 – Present",
  cgpa: "8.2",
};

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
            
            <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-lg border border-border/20">
                <div className="flex flex-col items-center text-center">
                    <GraduationCap className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground">{educationDetails.degree}</h3>
                    <p className="text-lg text-primary mt-1">{educationDetails.university}</p>
                    <p className="text-md text-muted-foreground">{educationDetails.department}</p>
                    
                    <div className="w-full h-[1px] bg-border my-6"></div>

                    <div className="flex flex-col sm:flex-row justify-between w-full text-left space-y-4 sm:space-y-0">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-muted-foreground"/>
                            <div>
                                <p className="text-sm text-muted-foreground">Duration</p>
                                <p className="font-semibold">{educationDetails.duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <GraduationCap className="w-5 h-5 text-muted-foreground"/>
                            <div>
                                <p className="text-sm text-muted-foreground">CGPA</p>
                                <p className="font-semibold">{educationDetails.cgpa}</p>
                            </div>
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
