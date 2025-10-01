"use client";

import React from 'react';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { cn } from '@/lib/utils';

const skillsList = [
  { name: "HTML", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.316-.002.69 7.828h11.385l-.33 3.554-3.44 1.12-3.346-1.12-.23-2.622h-2.26l.46 5.126L12 19.351l5.373-1.443.744-8.157H8.531z" fill="currentColor"/></svg> },
  { name: "CSS", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm4.531 6.422l.333 3.75L18.03 10.17l-.23 2.622H5.73l.334 3.75h11.968l-.334 3.554-3.45 1.12-3.346-1.12-.23-2.622H8.13l.46 5.126L12 19.35l5.373-1.443.744-8.157H6.062z" fill="currentColor"/></svg> },
  { name: "JavaScript", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm11.123 18.204H9.285L7.746 5.796h1.838l1.018 7.32h.05l1.019-7.32h1.838l-1.54 12.408zm5.28-1.552c.633.26 1.018.663 1.018 1.552v.203h-1.888a.382.382 0 0 1-.41-.355v-.05c0-.663.203-1.12.914-1.35zm-2.036-7.808c.632.26 1.018.663 1.018 1.552v.203h-1.888a.382.382 0 0 1-.41-.355v-.05c0-.663.203-1.12.914-1.35z" fill="currentColor"/></svg> },
  { name: "React", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.012 21.36a.72.72 0 0 1-.36-.09c-.27-.15-.42-.45-.42-.75V3.48a.72.72 0 0 1 .42-.66c.27-.15.6-.15.87 0l8.28 4.86a.72.72 0 0 1 .42.66v9.36a.72.72 0 0 1-.42.66l-8.28 4.86a.72.72 0 0 1-.51.09zm.45-1.59 7.38-4.29V8.52l-7.38-4.29v8.58zm-1.89-9.42a.72.72 0 0 1-.36-.09c-.27-.15-.42-.45-.42-.75V3.48a.72.72 0 0 1 .42-.66c.27-.15.6-.15.87 0l8.28 4.86a.72.72 0 0 1 .42.66v9.36a.72.72_0 0 1-.42.66l-8.28 4.86a.72.72 0 0 1-.87 0l-8.28-4.86a.72.72 0 0 1-.42-.66V8.22a.72.72 0 0 1 .42-.66l8.28-4.86a.72.72 0 0 1 .51.09zm.45-1.59 7.38-4.29V8.52l-7.38-4.29v8.58zM12 11.25a.72.72 0 0 1-.36-.09c-.27-.15-.42-.45-.42-.75V3.48a.72.72 0 0 1 .42-.66c.27-.15.6-.15.87 0l8.28 4.86a.72.72 0 0 1 .42.66v9.36a.72.72 0 0 1-.42.66l-8.28 4.86a.72.72 0 0 1-.87 0l-8.28-4.86a.72.72 0 0 1-.42-.66V8.22a.72.72 0 0 1 .42-.66l8.28-4.86a.72.72 0 0 1 .51.09z" fill="currentColor"/></svg> },
  { name: "Next.js", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M9.015 15.441V8.559h1.531v6.882zm2.09 0V8.559h4.341v1.442h-2.81v1.56h2.64v1.441h-2.64v2.44zm6.059-3.441c0-2.38-1.59-3.441-3.87-3.441h-2.73v6.882h2.73c2.28 0 3.87-1.06 3.87-3.441m-5.07-1.92h1.65c1.11 0 1.62.48 1.62 1.92s-.51 1.92-1.62 1.92h-1.65Z" fill="currentColor"/></svg> },
  { name: "Tailwind CSS", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.1 16.29c-.198.81.42 1.53 1.29 1.53.84 0 1.47-.69 1.47-1.53 0-.42-.15-.75-.39-1.02-.33-.36-.84-.66-1.5-.93-.69-.3-.99-.54-.99-.81 0-.3.24-.51.6-.51.39 0 .66.21.75.51h1.29c-.15-.81-.75-1.32-1.95-1.32-1.05 0-1.8.54-1.8 1.35 0 .42.21.78.51 1.05.36.3.87.6 1.56.87.66.27.93.51.93.81 0 .33-.27.57-.69.57-.42 0-.75-.24-.81-.57zm8.34.21c0 .84.63 1.53 1.59 1.53.93 0 1.59-.69 1.59-1.53s-.66-1.53-1.59-1.53c-.96 0-1.59.69-1.59 1.53z" fill="currentColor"/></svg> },
  { name: "Python", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M24 12c0-3.324-1.353-6.32-3.528-8.49L12.012 12h11.976zM12 24c3.324 0 6.32-1.353 8.49-3.528L12.012 12v12zM0 12c0 3.324 1.353 6.32 3.528 8.49L11.988 12H0zM12 0C8.676 0 5.68 1.353 3.51 3.528L11.988 12V0z" fill="currentColor"/></svg> },
  { name: "MySQL", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MySQL</title><path d="M12.288 11.136c-1.356.54-2.88.3-3.996-1.128s-1.32-3.336.036-4.572c1.356-.54 2.88-.3 3.996 1.128s1.32 3.336-.036 4.572zM4.92 21.036c0 .864.828 1.404 1.584.972l2.376-2.088c-.648-.288-1.26-.648-1.8-1.08L4.92 21.036zM3.492 12c0-3.096 1.476-5.868 3.78-7.74l3.168 1.764c-1.404 1.584-1.908 3.744-1.188 5.688.72 1.944 2.664 3.132 4.68 3.132h1.152c-1.368 2.088-3.6 3.492-6.264 3.492-2.88 0-5.364-1.656-6.336-4.032h0z" fill="currentColor"/></svg> },
  { name: "AWS", logo: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon Web Services</title><path d="M11.99 18.23a.75.75 0 01-.42-.13l-4.5-3.38a.75.75 0 01-.33-.62V9.87a.75.75 0 011.5 0v5.87l3.75 2.82 3.75-2.82V9.87a.75.75 0 111.5 0v5.88a.75.75 0 01-.33.62l-4.5 3.38a.75.75 0 01-.42.13zM12 12.75a.75.75 0 01-.42-.13L7.08 9.24a.75.75 0 11.84-1.23L12 10.8l4.08-2.79a.75.75 0 11.84 1.23l-4.5 3.38a.75.75 0 01-.42.13z" fill="currentColor"/></svg> },
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
              className="flex-shrink-0 w-48 h-32 bg-black border-4 border-yellow-400 rounded-lg flex flex-col items-center justify-center m-4 text-yellow-400"
            >
              <div className="w-16 h-16 mb-2">
                {skill.logo}
              </div>
              <p className="font-bold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
