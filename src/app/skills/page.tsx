
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Code, Info } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import placeholderData from '@/lib/placeholder-images.json';
import Link from 'next/link';

const allProjects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
    detailsPage: "/projects/fessup"
  },
  {
    title: "MIT WPU Chat Assist",
    description: "An intelligent web portal for MIT-WPU students, powered by Gemini AI, with a central chatbot and specialized tools.",
    tags: ["Next.js", "Firebase", "Gemini AI", "AI"],
    image: placeholderData.projectMitChatAssist,
    liveDemo: "https://studio--studio-4013308653-b04c2.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/studio",
    detailsPage: "/projects/mit-chat-assist"
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support.",
    tags: ["AI", "Next.js", "Web App", "Firebase", "Tailwind CSS"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi",
    detailsPage: "/projects/mitra-ai"
  },
  {
    title: "Ahsanverse",
    description: "A Blockchain Dapp with smart contracts and Web3 integration for secure virtual transactions.",
    tags: ["Blockchain", "Web3", "Solidity", "React"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.netlify.app/",
    github: "https://github.com/Ahsan6786/AhsanVerse",
  },
  {
    title: "News Archive",
    description: "A comprehensive news system that collects and displays articles from sources worldwide.",
    tags: ["Web App", "API", "JavaScript", "HTML", "CSS"],
    image: placeholderData.project2,
    liveDemo: "https://bjp-news-archive.vercel.app/",
    github: "https://github.com/Ahsan6786/NEWSARCHIVE",
    detailsPage: "/projects/news-archive",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio, built with Next.js and ShadCN UI to showcase my skills and projects.",
    tags: ["Next.js", "ShadCN UI", "Tailwind CSS", "React"],
    image: placeholderData.project3,
    github: "https://github.com/Ahsan6786",
  },
];

type Project = (typeof allProjects)[0] & { detailsPage?: string };

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

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
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow mb-4">{project.description}</p>
            
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Code className="w-4 h-4"/>
                    <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
                </div>
            </div>
            
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
                  variant="secondary"
                  className="rounded-full"
                >
                  <Link href={project.detailsPage}>
                    <Info className="mr-2 h-4 w-4"/>
                    Details
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


export default function SkillsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <section className="py-8 md:py-16">
          <AnimateOnScroll>
            <div className="mb-8">
                <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="sr-only">Back</span>
                </Button>
            </div>
            <div className="text-center mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-bold">{translations.skills.title}</h2>
              <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                {translations.projects.title}
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Here's a showcase of my projects and the technologies I used to build them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}
