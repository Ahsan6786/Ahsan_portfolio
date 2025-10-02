"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Info } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely.",
    backDescription: "Mitra AI is a mental wellness app that provides a safe and private space for users. It features an AI chatbot for immediate support, guided meditation exercises for relaxation, and a mood journal to track emotional well-being. The app also offers a curated library of resources to support users in their mental health journey.",
    tags: ["AI", "Mental Health", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/"
  },
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.",
    backDescription: "Ahsanverse is a decentralized app that lets users interact with the blockchain. You can connect a digital wallet, send virtual currency, and see a full history of transactions. It's a demonstration of how modern web apps can be built on a secure, decentralized platform.",
    tags: ["React", "Solidity", "Web3.js", "Blockchain"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.vercel.app/"
  },
  {
    title: "News Archive",
    description: "A comprehensive news archive system that collects, categorizes, and displays news articles with search functionality and user-friendly interface.",
    backDescription: "This project is a live news feed from sources all over the world. It has a clean, fast interface where you can search for topics, filter news, and browse headlines. It’s a simple but powerful tool for staying up-to-date with the latest information.",
    tags: ["JavaScript", "React", "API", "Database"],
    image: placeholderData.project2,
    liveDemo: "https://bjp-news-archive.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "A feature-rich personal portfolio website to showcase my skills and projects, built with modern web technologies for a great user experience.",
    backDescription: "This website demonstrates modern web development. It's designed to be fast, responsive, and visually appealing. It features an interactive chatbot, smooth scroll animations, and a clean design that highlights my projects and skills.",
    tags: ["React", "TypeScript", "Next.js", "ShadCN UI"],
    image: placeholderData.project3,
    liveDemo: "#"
  }
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent flip when clicking on the link
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="w-full h-[450px] perspective-1000">
      <motion.div
        onTap={handleTap}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        data-style="preserve-3d"
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 flex flex-col">
           <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-contain"
                data-ai-hint={project.image.aiHint}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-between items-center">
                 <Button variant="outline" size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                <div className="text-yellow-500 animate-pulse">
                  <Info className="h-5 w-5" />
                </div>
              </div>
            </div>
        </div>
        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden border p-6 flex flex-col justify-between" style={{ transform: "rotateY(180deg)"}}>
            <div>
              <h4 className="font-bold text-lg mb-2">More Info</h4>
              <p className="text-sm text-muted-foreground">{project.backDescription}</p>
            </div>
            <Button variant="outline" size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
        </div>
      </motion.div>
    </div>
  );
}


export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Projects
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              These are some of my recent projects. Check out my GitHub for more. Tap any card to see more details.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
