
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const allSkills = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "JavaScript", logo: "/java_script.png" },
    { name: "React", logo: "/react.png" },
    { name: "Next.js", logo: "/next_js.png?v=2" },
    { name: "Tailwind CSS", logo: "/tailwind-css.png" },
    { name: "Python", logo: "/Python.png" },
    { name: "MySQL", logo: "/mysql.png" },
    { name: "Firebase", logo: "/firebase.png" },
    { name: "C++", logo: "/cplus.png" },
];

export default function SkillsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="sr-only">Back</span>
              </Button>
            </div>
            </AnimateOnScroll>
            <section className="pb-16 md:pb-24 overflow-hidden">
             <AnimateOnScroll>
              <div className="text-center mb-12 relative">
                <h1 className="text-4xl md:text-6xl font-bold">{translations.skills.title}</h1>
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words" aria-hidden="true">
                  Expertise
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {translations.skills.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allSkills.map((skill, index) => (
                    <div key={index} className="bg-card p-6 rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow border-2 border-primary/20 hover:border-primary/50">
                        <div className="relative w-20 h-20 mb-4">
                            <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            fill
                            className="object-contain"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
                    </div>
                ))}
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
