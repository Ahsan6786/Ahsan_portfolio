"use client";

import React from 'react';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ParallaxText } from './parallax-text';
import { Code, Palette, ToyBrick, FileCode2, Wind, BrainCircuit, Database, Cloud } from "lucide-react";

const skillsList = [
  "HTML", "React", "CSS", "Next.js", "JavaScript", "Tailwind CSS", "Python", "MySQL", "AWS", "Firebase"
];

const skillsText = skillsList.join(" • ");

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Skills
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my technical abilities and tools I use to build amazing things.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
      <div className="space-y-4">
        <ParallaxText baseVelocity={-2} className="text-2xl md:text-4xl font-semibold text-muted-foreground">
          {skillsText}
        </ParallaxText>
        <ParallaxText baseVelocity={2} className="text-2xl md:text-4xl font-semibold text-primary">
          {skillsText}
        </ParallaxText>
      </div>
    </section>
  );
}
