"use client";

import React from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from '@/lib/utils';

const skillsList = [
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "JavaScript", logo: "/java_script.png" },
  { name: "React", logo: "/react.png" },
  { name: "Next.js", logo: "/next_js.png?v=2" },
  { name: "Tailwind CSS", logo: "/tailwind-css.png" },
  { name: "Python", logo: "/Python.png" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "Firebase", logo: "/firebase.png" },
];

export function Skills() {
  const allSkills = [...skillsList, ...skillsList];

  return (
    <section id="skills" className="py-16 md:py-32 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-6xl font-bold">My Skills</h2>
          <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
            Skills
          </p>
          <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical abilities and tools I use.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="relative w-full">
        <div className="flex items-center animate-infinite-scroll">
          {allSkills.map((skill, index) => (
            <div
              key={`skill-1-${index}`}
              className="flex-shrink-0 w-48 h-32 flex flex-col items-center justify-center m-4"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-lg text-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
