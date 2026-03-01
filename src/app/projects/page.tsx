
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Github, ArrowLeft, Code, Info } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { useRouter } from "next/navigation";


const projects = [
  {
    title: "Blingish",
    description: "A premium freelance jewellery e-commerce platform built in just 4 days. It features a modern luxury aesthetic with WhatsApp-based ordering for a personalized 'Quiet Luxury' experience.",
    detailedDescription: "Blingish is a high-end jewellery website developed as a freelance project. It features a modern, elegant design tailored for luxury products, ensuring a smooth and responsive user experience. Instead of a traditional payment gateway, it uses WhatsApp-based ordering to maintain a personalized and trustworthy shopping experience.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: placeholderData.projectBling,
    liveDemo: "https://bling-svz9.vercel.app/",
    github: "https://github.com/Ahsan6786/bling",
    detailsPage: "/projects/blingish"
  },
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings.",
    detailedDescription: "FessUp! is a dynamic and anonymous social platform designed specifically for college students. It provides a safe and open space for users to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine and unfiltered expression. The platform is built with Next.js for a fast, server-rendered frontend, Firebase for real-time data and authentication, and styled with Tailwind CSS for a modern, responsive design.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://fessup.onrender.com",
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

export default function ProjectsPage() {
  const { translations, loading } = useLanguage();
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
            <div className="text-center mb-12 md:mb-20 relative">
              <h2 className="text-4xl md:text-5xl font-bold">{translations.projects.title}</h2>
              <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                {translations.projects.title}
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                These are some of my recent projects. Check out my GitHub for more.
              </p>
            </div>
            
            <div className="space-y-20 md:space-y-28">
              {projects.map((project, index) => (
                <AnimateOnScroll key={project.title} className="group">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Image Column */}
                        <div className={`relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <Image
                                src={project.image.src}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint={project.image.aiHint}
                            />
                        </div>

                        {/* Text Column */}
                        <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                            <p className="text-muted-foreground text-base mb-6">{project.description}</p>
                            
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                                    <Code className="w-4 h-4"/>
                                    <span>Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4">
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
                </AnimateOnScroll>
              ))}
            </div>

          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}
