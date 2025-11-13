
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Info } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

const projects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine expression.",
    backDescription: "FessUp! provides a private, unfiltered space for students within the same college. Built with anonymity and community engagement at its core, it allows for sharing secrets, thoughts, and campus news in a secure and anonymous way.",
    tags: ["Social Media", "Next.js", "Firebase", "Community"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/"
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support...",
    backDescription: "Mitra AI is a mental wellness app that provides a safe and private space for users...",
    tags: ["AI", "Mental Health", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/"
  },
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts...",
    backDescription: "Ahsanverse is a decentralized app that lets users interact with the blockchain...",
    tags: ["React", "Solidity", "Web3.js", "Blockchain"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.vercel.app/"
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { translations, loading } = useLanguage();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  if (loading) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const rotateY = 25 * ((x - width / 2) / (width / 2));
    const rotateX = -25 * ((y - height / 2) / (height / 2));
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsFlipped(!isFlipped);
    handleMouseLeave();
  };
  
  return (
    <div 
      className="w-full h-[450px]" 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onTap={handleTap}
        animate={{ 
          rotateY: isFlipped ? 180 : rotate.y, 
          rotateX: isFlipped ? 0 : rotate.x,
          scale: isHovering && !isFlipped ? 1.05 : 1,
        }}
        transition={{ duration: isFlipped ? 0.6 : 0.1, ease: "easeOut" }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden group border transition-all duration-300 flex flex-col"
            style={{ 
                boxShadow: isHovering && !isFlipped ? '0px 15px 30px -5px rgba(0, 0, 0, 0.3)' : '0px 5px 15px rgba(0, 0, 0, 0.1)',
                transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`
            }}
        >
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
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      {translations.projects.liveDemo}
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
              <h4 className="font-bold text-lg mb-2">{translations.projects.moreInfo}</h4>
              <p className="text-sm text-muted-foreground">{project.backDescription}</p>
            </div>
            <Button variant="outline" size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  {translations.projects.liveDemo}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
        </div>
      </motion.div>
    </div>
  );
}


export function Projects() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="projects" className="py-16 md:py-32">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">{translations.projects.title}</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              {translations.projects.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {translations.projects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
