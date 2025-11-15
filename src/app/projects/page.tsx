

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Github, ArrowLeft, Code, Info, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { useRouter } from "next/navigation";


const projects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings.",
    detailedDescription: "FessUp! is a dynamic and anonymous social platform designed specifically for college students. It provides a safe and open space for users to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine and unfiltered expression. The platform is built with Next.js for a fast, server-rendered frontend, Firebase for real-time data and authentication, and styled with Tailwind CSS for a modern, responsive design.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
    detailsPage: "/projects/fessup"
  },
  {
    title: "MIT WPU Chat Assist",
    description: "An intelligent web portal for MIT-WPU students, powered by Gemini AI, with a central chatbot and specialized tools.",
    detailedDescription: "MIT Chat Assist is an intelligent web portal designed for students of MIT World Peace University. Powered by Google's Gemini AI, it features a central chatbot for instant answers on admissions, courses, and campus life. The platform also includes specialized tools like a personalized Course Recommender, an Internship Assistant, and a powerful AI Admin Dashboard for easy management of the chatbot's knowledge base. Built with Next.js and Firebase, it offers a seamless and reliable experience for users.",
    tags: ["Next.js", "Firebase", "Gemini AI"],
    image: placeholderData.projectMitChatAssist,
    liveDemo: "https://studio--studio-4013308653-b04c2.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/studio",
    detailsPage: "/projects/mit-chat-assist"
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support.",
    detailedDescription: "Mitra AI is an innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely. The app aims to make mental wellness a proactive and manageable part of daily life.",
    tags: ["AI", "Next.js", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi",
    detailsPage: "/projects/mitra-ai"
  },
  {
    title: "Ahsanverse",
    description: "A Blockchain Dapp with smart contracts and Web3 integration for secure virtual transactions.",
    detailedDescription: "Ahsanverse is a decentralized application built on blockchain technology. It features smart contracts and Web3 integration, allowing users to connect a digital wallet, send virtual currency, and view a full history of transactions, demonstrating modern web apps on a secure, decentralized platform.",
    tags: ["Blockchain", "Web3", "Solidity"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.netlify.app/",
    github: "https://github.com/Ahsan6786/AhsanVerse",
  },
  {
    title: "News Archive",
    description: "A comprehensive news system that collects and displays articles from sources worldwide.",
    detailedDescription: "News Archive is a comprehensive news system that collects and displays articles from sources all over the world. It has a clean, fast interface for searching topics, filtering news, and browsing headlines, making it a powerful tool for staying up-to-date.",
    tags: ["Web App", "API", "JavaScript"],
    image: placeholderData.project2,
    liveDemo: "https://bjp-news-archive.vercel.app/",
    github: "https://github.com/Ahsan6786/NEWSARCHIVE",
    detailsPage: "/projects/news-archive",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio, built with Next.js and ShadCN UI to showcase my skills and projects.",
    detailedDescription: "This personal portfolio website is a project itself, built with modern technologies like Next.js and ShadCN UI. It's designed to be fast, responsive, and visually appealing, featuring an interactive chatbot, smooth animations, and a clean design to highlight my projects and skills.",
    tags: ["Next.js", "ShadCN UI", "Tailwind CSS"],
    image: placeholderData.project3,
    github: "https://github.com/Ahsan6786",
  },
];

type Project = (typeof projects)[0] & { detailsPage?: string; liveDemo?: string };

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void; }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.95, rotateY: 90 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-card rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64 md:h-96">
            <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.image.aiHint}
            />
        </div>
        <div className="p-8 overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-muted-foreground mb-6">{project.detailedDescription}</p>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex items-center gap-4">
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
            </div>
        </div>
        <Button size="icon" variant="ghost" className="absolute top-4 right-4 rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={onClose}>
            <X className="w-5 h-5"/>
        </Button>
      </motion.div>
    </motion.div>
  );
}


function ProjectCard({ project, onInfoClick }: { project: Project, onInfoClick: () => void }) {
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
        <div className="bg-card rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
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


export default function ProjectsPage() {
  const { translations, loading } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <section id="projects" className="py-8 md:py-16">
          <AnimateOnScroll>
            <div className="mb-8">
                <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="sr-only">Back</span>
                </Button>
            </div>
            <div className="text-center mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-bold">{translations.projects.title}</h2>
              <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                {translations.projects.title}
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                These are some of my recent projects. Check out my GitHub for more. Tap any card to see more details.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} onInfoClick={() => setSelectedProject(project)} />
              ))}
            </div>
          </AnimateOnScroll>
        </section>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
