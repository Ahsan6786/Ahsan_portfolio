
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Code } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import placeholderData from '@/lib/placeholder-images.json';
import Link from 'next/link';

const allSkills = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "JavaScript", logo: "/java_script.png" },
    { name: "React", logo: "/react.png" },
    { name: "Next.js", logo: "/next_js.png?v=2" },
    { name: "Tailwind CSS", logo: "/tailwind-css.png" },
    { name: "Python", logo: "/Python.png" },
    { name: "MySQL", logo: "/mysql.png" },
    { name: "Firebase", logo: "/firebase.png" },
    { name: "C++", logo: "/cplus.png" },
    { name: "AI", logo: "/gemini.png"},
    { name: "Blockchain", logo: "/blockchain.png"},
];

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


function ProjectCard({ project }: { project: (typeof allProjects)[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
    >
      <div className="relative aspect-video w-full">
        <Image src={project.image.src} alt={project.title} fill className="object-cover" data-ai-hint={project.image.aiHint} />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.github && (
            <Button variant="outline" asChild size="sm" className="rounded-full">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {project.liveDemo && (
            <Button asChild size="sm" className="rounded-full">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}


export default function SkillsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredProjects = selectedSkill
    ? allProjects.filter(p => p.tags.includes(selectedSkill))
    : [];

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8 flex justify-between items-center">
              <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="sr-only">Back</span>
              </Button>
            </div>
            </AnimateOnScroll>
            <section className="pb-16 md:pb-24 overflow-hidden">
             <AnimateOnScroll>
              <div className="text-center mb-16 relative">
                <h1 className="text-4xl md:text-5xl font-bold">{translations.skills.title}</h1>
                <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words" aria-hidden="true">
                  Expertise
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Click on a skill to see the projects I've built with it.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                        {allSkills.map((skill) => (
                            <motion.div 
                                key={skill.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedSkill(skill.name)}
                                className={`cursor-pointer p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${selectedSkill === skill.name ? 'bg-primary/20 shadow-lg' : 'bg-card/80 hover:bg-card'}`}
                            >
                                <div className="relative w-12 h-12">
                                    <Image src={skill.logo} alt={`${skill.name} logo`} fill className="object-contain" />
                                </div>
                                <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div className="lg:col-span-2">
                    <div className="sticky top-24">
                        <AnimatePresence mode="wait">
                            {selectedSkill ? (
                                <motion.div 
                                  key={selectedSkill}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Projects using {selectedSkill}</h2>
                                    {filteredProjects.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {filteredProjects.map(proj => (
                                                <ProjectCard key={proj.title} project={proj} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center text-muted-foreground border border-dashed rounded-2xl p-12">
                                            <p>No projects to show for this skill yet. Check back later!</p>
                                        </div>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="h-full flex flex-col items-center justify-center text-center text-muted-foreground border-2 border-dashed rounded-2xl p-12"
                                >
                                    <Code className="w-16 h-16 mb-4"/>
                                    <h3 className="text-xl font-bold mb-2">Select a skill</h3>
                                    <p>Choose a skill from the list on the left to see related projects.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}

    