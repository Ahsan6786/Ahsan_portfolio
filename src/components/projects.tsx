"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';

const projects = [
  {
    title: "Ahsanverse - Blockchain Dapp",
    description: "A decentralized application built on blockchain technology, featuring smart contracts and Web3 integration for a seamless user experience.",
    tags: ["React", "Solidity", "Web3.js", "Blockchain"],
    image: placeholderData.project1,
    liveDemo: "#"
  },
  {
    title: "BJP News Archive",
    description: "A comprehensive news archive system that collects, categorizes, and displays news articles with search functionality and user-friendly interface.",
    tags: ["JavaScript", "React", "API", "Database"],
    image: placeholderData.project2,
    liveDemo: "#"
  },
  {
    title: "Portfolio",
    description: "A feature-rich code editor with syntax highlighting, multiple language support, and advanced development tools for enhanced productivity.",
    tags: ["React", "TypeScript", "Monaco Editor", "WebAssembly"],
    image: placeholderData.project3,
    liveDemo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl md:text-6xl font-bold">My Projects</h2>
          <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
            Projects
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            These are some of my recent projects. Check out my GitHub for more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden group">
              <div className="relative h-52 w-full">
                <Image
                  src={project.image.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image.aiHint}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
