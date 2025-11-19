
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

function SkillCard({ skill }: { skill: { name: string; logo: string } }) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 100 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="perspective-1000 relative"
        >
            <div
                style={{
                    transform: "translateZ(20px)",
                    transformStyle: "preserve-3d",
                }}
                className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
                <div className="relative w-20 h-20 mb-4 transform-gpu" style={{ transform: "translateZ(40px)" }}>
                    <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        fill
                        className="object-contain"
                    />
                </div>
                <h3 className="text-lg font-bold text-foreground" style={{ transform: "translateZ(30px)" }}>
                    {skill.name}
                </h3>
            </div>
        </motion.div>
    );
}

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
              <div className="text-center mb-16 relative">
                <h1 className="text-4xl md:text-5xl font-bold">{translations.skills.title}</h1>
                <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words" aria-hidden="true">
                  Expertise
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {allSkills.map((skill, index) => (
                    <AnimateOnScroll key={index} delay={`${index * 0.05}s`}>
                        <SkillCard skill={skill} />
                    </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
