
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Info, ArrowLeft, Github } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";


const projects = [
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine expression.",
    backDescription: "FessUp! provides a private, unfiltered space for students within the same college. Built with anonymity and community engagement at its core, it allows for sharing secrets, thoughts, and campus news in a secure and anonymous way.",
    tags: ["Social Media", "Next.js", "Firebase", "Community"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-"
  },
  {
    title: "Mitra AI",
    description: "An innovative mental wellness application providing accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely.",
    backDescription: "Mitra AI is a mental wellness app that provides a safe and private space for users. It features an AI chatbot for immediate support, guided meditation exercises for relaxation, and a mood journal to track emotional well-being. The app also offers a curated library of resources to support users in their mental health journey.",
    tags: ["AI", "Mental Health", "Web App"],
    image: placeholderData.project4,
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi"
  },
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.",
    backDescription: "Ahsanverse is a decentralized app that lets users interact with the blockchain. You can connect a digital wallet, send virtual currency, and see a full history of transactions. It's a demonstration of how modern web apps can be built on a secure, decentralized platform.",
    tags: ["React", "Solidity", "Web3.js", "Blockchain"],
    image: placeholderData.project1,
    liveDemo: "https://ahsanverse.vercel.app/",
    github: "https://github.com/Ahsan6786/ahsan_verse_final_"
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
  const { translations, loading } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (loading) return null;
  
  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[450px]" 
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        onTap={handleTap}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <motion.div 
            className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden group border transition-all duration-300 flex flex-col"
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            animate={{
              boxShadow: isHovered && !isFlipped ? '0px 20px 40px -10px rgba(0, 0, 0, 0.3)' : '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
           <motion.div 
              className="relative h-48 w-full overflow-hidden"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              animate={{
                transform: isHovered && !isFlipped ? "translateZ(40px) scale(1.05)" : "translateZ(20px) scale(1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
           >
              <Image
                src={project.image.src}
                alt={project.title}
                fill
                className="object-contain"
                data-ai-hint={project.image.aiHint}
              />
            </motion.div>
            <motion.div 
              className="p-4 flex flex-col flex-grow"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              animate={{
                transform: isHovered && !isFlipped ? "translateZ(30px)" : "translateZ(20px)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-between items-center">
                 <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        {translations.projects.liveDemo}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          GitHub
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                 </div>
                <div className="text-yellow-500 animate-pulse">
                  <Info className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
        </motion.div>
        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden border p-6 flex flex-col justify-between" style={{ transform: "rotateY(180deg)"}}>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.projects.moreInfo}</h4>
              <p className="text-sm text-muted-foreground">{project.backDescription}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    {translations.projects.liveDemo}
                    <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                {project.github && (
                    <Button variant="outline" size="sm" asChild className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        GitHub
                        <Github className="ml-2 h-4 w-4" />
                    </a>
                    </Button>
                )}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function ProjectsPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <div className="bg-background min-h-screen">
      <AnimateOnScroll>
        <section id="projects" className="py-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <Button asChild variant="ghost" className="hover:bg-accent">
                <Link href="/" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {translations.certificatesPage.backToHome}
                </Link>
              </Button>
            </div>
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
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
