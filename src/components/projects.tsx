"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Info } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

const projects = [
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely.",
    backDescription: "The backend is powered by Node.js and Express, with a MongoDB database. The frontend is built with React and Next.js, leveraging Tailwind CSS for styling.",
    tags: ["AI", "Mental Health", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/"
  },
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.",
    backDescription: "Developed using Solidity for smart contracts on the Ethereum blockchain. The frontend uses React and Ethers.js for wallet interaction.",
    tags: ["React", "Solidity", "Web3.js", "Blockchain"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.vercel.app/"
  },
  {
    title: "News Archive",
    description: "A comprehensive news archive system that collects, categorizes, and displays news articles with search functionality and user-friendly interface.",
    backDescription: "This project utilizes a public News API to fetch and display articles. Built with vanilla JavaScript, HTML, and CSS for a lightweight footprint.",
    tags: ["JavaScript", "React", "API", "Database"],
    image: placeholderData.project2,
    liveDemo: "https://bjp-news-archive.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "A feature-rich code editor with syntax highlighting, multiple language support, and advanced development tools for enhanced productivity.",
    backDescription: "This personal portfolio site is built with Next.js and ShadCN UI components, showcasing a modern and responsive design.",
    tags: ["React", "TypeScript", "Monaco Editor", "WebAssembly"],
    image: placeholderData.project3,
    liveDemo: "#"
  }
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const rotateY = useTransform(x, [-150, 0, 150], [-180, 0, 180]);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 75) {
      controls.start({ x: info.offset.x > 0 ? 150 : -150 });
      setIsFlipped(true);
    } else {
      controls.start({ x: 0 });
      setIsFlipped(false);
    }
  };

  const handleTap = () => {
    setIsFlipped(!isFlipped);
    controls.start({ x: isFlipped ? 0 : 150 });
  };
  
  return (
    <div className="md:hidden w-full h-[450px] perspective-1000">
      <motion.div
        style={{ rotateY, x }}
        drag="x"
        dragConstraints={{ left: -150, right: 150 }}
        onDragEnd={handleDragEnd}
        onTap={handleTap}
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full h-full relative"
        data-style="preserve-3d"
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300">
           <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-contain"
                data-ai-hint={project.image.aiHint}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm min-h-[60px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
               <div className="absolute bottom-4 right-4 text-muted-foreground animate-pulse">
                <Info className="h-5 w-5" />
              </div>
            </div>
        </div>
        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden border p-6 flex flex-col justify-center" style={{ transform: "rotateY(180deg)"}}>
            <h4 className="font-bold text-lg mb-2">More Info</h4>
            <p className="text-sm text-muted-foreground mb-4">{project.backDescription}</p>
            <Button variant="outline" size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
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
              These are some of my recent projects. Check out my GitHub for more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
             {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 hidden md:block">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.image.aiHint}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm min-h-[60px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
