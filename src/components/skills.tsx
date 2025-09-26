"use client";

import React from 'react';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Code, Palette, ToyBrick, FileCode2, Wind, BrainCircuit, Database, Cloud } from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code className="w-10 h-10 text-primary" /> },
  { name: "React", icon: <ToyBrick className="w-10 h-10 text-primary" /> },
  { name: "CSS", icon: <Palette className="w-10 h-10 text-primary" /> },
  { name: "Next.js", icon: <ToyBrick className="w-10 h-10 text-primary" /> },
  { name: "JavaScript", icon: <FileCode2 className="w-10 h-10 text-primary" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-10 h-10 text-primary" /> },
  { name: "Python", icon: <BrainCircuit className="w-10 h-10 text-primary" /> },
  { name: "MySQL", icon: <Database className="w-10 h-10 text-primary" /> },
  { name: "AWS", icon: <Cloud className="w-10 h-10 text-primary" /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl md:text-6xl font-bold">My Skills</h2>
            <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Skills
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my technical abilities and tools I use to build amazing things.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-card p-6 rounded-lg flex flex-col items-center justify-center text-center border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
