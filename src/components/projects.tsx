

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Github, Code, Info, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const projects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students.",
    detailedDescription:
      "FessUp! is a dynamic and anonymous social platform designed specifically for college students. It provides a safe and open space for users to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine and unfiltered expression.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
    detailsPage: "/projects/fessup",
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support.",
    detailedDescription: "Mitra AI is an innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely. The app aims to make mental wellness a proactive and manageable part of daily life.",
    tags: ["AI", "Next.js", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi",
    detailsPage: "/projects/mitra-ai",
  },
];

type Project = (typeof projects)[0] & { detailsPage?: string };

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    <div className="w-full h-auto perspective-1000 group">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
      >
        <div className="bg-card rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
          <div className="relative">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.image.aiHint}
              />
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-4">{project.description}</p>
              
              <div className="mt-auto flex flex-wrap justify-start items-center gap-4">
                {project.github && (
                  <Button variant="outline" asChild className="rounded-full" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button asChild className="rounded-full" size="sm">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
                 {project.detailsPage && (
                   <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Link href={project.detailsPage}>
                      <Info className="mr-2 h-4 w-4"/>
                      Description
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


export function Projects() {
  const { translations, loading } = useLanguage();
  
  if (loading) return null;

  return (
    <section id="projects" className="py-16 md:py-32 overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">{translations.projects.title}</h2>
            <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              {translations.projects.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              tap any card to see more details
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
