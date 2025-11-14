
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Github, ArrowLeft, Code } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";


const projects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine expression.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-"
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely.",
    tags: ["AI", "Next.js", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi"
  },
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.",
    tags: ["React", "Solidity", "Web3.js"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.vercel.app/",
    github: "https://github.com/Ahsan6786/ahsan_verse_final_"
  },
  {
    title: "News Archive",
    description: "A comprehensive news archive system that collects, categorizes, and displays news articles with search functionality and user-friendly interface.",
    tags: ["JavaScript", "React", "API"],
    image: placeholderData.project2,
    liveDemo: "https://bjp-news-archive.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "A feature-rich personal portfolio website to showcase my skills and projects, built with modern web technologies for a great user experience.",
    tags: ["Next.js", "TypeScript", "ShadCN UI"],
    image: placeholderData.project3,
    liveDemo: "#"
  }
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const { translations, loading } = useLanguage();
  if (loading) return null;
  
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.image.aiHint}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
        
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <Code className="w-4 h-4"/>
                <span>Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{tag}</span>
            ))}
            </div>
        </div>
        
        <div className="mt-auto flex justify-start items-center gap-4">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          <Button asChild>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}


export default function ProjectsPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24">
        <AnimateOnScroll>
          <div className="mb-8">
            <Button asChild variant="ghost" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {translations.certificatesPage.backToHome}
              </Link>
            </Button>
          </div>
          <section id="projects" className="pb-16 md:pb-32">
            <div className="text-center mb-12 relative">
              <h2 className="text-4xl md:text-5xl font-bold">{translations.projects.title}</h2>
              <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
                {translations.projects.title}
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                {translations.projects.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
