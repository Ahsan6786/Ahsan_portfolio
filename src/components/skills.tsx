"use client";

import React from 'react';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from '@/lib/utils';

const skillsList = [
  "HTML", "React", "CSS", "Next.js", "JavaScript", "Tailwind CSS", "Python", "MySQL", "AWS", "Firebase"
];

const InfiniteScroller = ({ skills, direction = 'left' }: { skills: string[], direction?: 'left' | 'right' }) => (
  <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className={cn(
      "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll",
      direction === 'right' && 'animate-infinite-scroll-reverse'
    )}>
      {skills.map((skill, index) => (
        <li key={index} className="bg-black text-yellow-400 rounded-lg shadow-md p-4 whitespace-nowrap text-lg font-semibold border-2 border-yellow-500">
          {skill}
        </li>
      ))}
    </ul>
    <ul className={cn(
      "flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll",
      direction === 'right' && 'animate-infinite-scroll-reverse'
    )} aria-hidden="true">
      {skills.map((skill, index) => (
        <li key={index} className="bg-black text-yellow-400 rounded-lg shadow-md p-4 whitespace-nowrap text-lg font-semibold border-2 border-yellow-500">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);


export function Skills() {
  const firstRowSkills = [...skillsList];
  
  return (
    <section id="skills" className="py-16 md:py-32 overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 relative">
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
      <div className="space-y-8">
        <InfiniteScroller skills={firstRowSkills} direction="left" />
      </div>
    </section>
  );
}
