"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const skills = [
  { name: "HTML", value: 95 },
  { name: "React", value: 90 },
  { name: "CSS", value: 90 },
  { name: "Next.js", value: 85 },
  { name: "JavaScript", value: 85 },
  { name: "Tailwind CSS", value: 90 },
  { name: "Python", value: 80 },
  { name: "MySQL", value: 85 },
  { name: "AWS", value: 75 },
];

export function Skills() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timers = skills.map((skill, index) =>
            setTimeout(() => {
              setProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = skill.value;
                return newProgress;
              });
            }, index * 100)
          );
          return () => timers.forEach(clearTimeout);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32" ref={sectionRef}>
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl md:text-6xl font-bold">My Skills</h2>
            <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Skills
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={progress[index]} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
