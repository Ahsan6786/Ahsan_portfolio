"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ExternalLink, Github, ArrowLeft, Code, Info, Sparkles } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

const projects = [
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
    title: "Revial",
    description: "An intelligent, real-time AI Speaking Coach designed to help users speak with clarity, structure, and confidence by analyzing speech patterns and offering instant voice feedback.",
    detailedDescription: "Revial is an intelligent, real-time AI speaking coach designed to help individuals overcome speech hesitation and build communication confidence. It provides personalized, daily coaching sessions and interactive exercises. The platform analyzes your speech structure, vocabulary, and pacing in real time, delivering instant actionable feedback to refine your communication skills. Developed with a high-performance frontend and advanced AI voice processing services.",
    tags: ["Next.js", "AI Speaking Coach", "Real-Time AI", "Tailwind CSS"],
    image: {
      src: "/revial.png",
      aiHint: "AI speaking coach dashboard mockup"
    },
    liveDemo: "https://www.revial.online",
    github: "https://github.com/Ahsan6786",
  },
  {
    title: "FessUp!",
    description: "A dynamic and anonymous social platform for college students to share confessions, thoughts, and campus happenings.",
    detailedDescription: "FessUp! is a dynamic and anonymous social platform designed specifically for college students. It provides a safe and open space for users to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine and unfiltered expression. The platform is built with Next.js for a fast, server-rendered frontend, Firebase for real-time data and authentication, and styled with Tailwind CSS for a modern, responsive design.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: placeholderData.projectFessUp,
    liveDemo: "https://fessup.fun/",
    github: "https://github.com/Ahsan6786/FessUP-",
    detailsPage: "/projects/fessup"
  },
  {
    title: "A1 Farms",
    description: "A comprehensive digital supply chain and e-commerce ecosystem built to streamline organic produce inventory tracking, routing logistics, and crop ordering.",
    detailedDescription: "A1 Farms is a modern digital supply chain and e-commerce ecosystem designed to streamline inventory tracking, organic produce ordering, and farm logistics. It features real-time inventory management, a secure ordering pipeline, and a highly responsive user dashboard to ensure a seamless experience for both managers and customers. The integration of advanced logistical algorithms has boosted operational throughput by 40%.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supply Chain", "E-commerce"],
    image: {
      src: "/f1.webp",
      aiHint: "A1 Farms digital agriculture and logistics catalog dashboard mockup"
    },
    liveDemo: "https://www.a1farms.shop",
    github: "https://github.com/Ahsan6786",
  },
  {
    title: "WEBIS Digital Studio",
    description: "A premium, dark-themed freelance agency portfolio showcasing advanced web development, creative design, and technical engineering services.",
    detailedDescription: "WEBIS is a premium freelance agency portfolio and digital studio designed to showcase cutting-edge web development, creative design, and technical engineering capabilities. It features an interactive, futuristic dark-mode UI with high-performance animations, dynamic styling, and custom integration. Developed using Next.js, Framer Motion, and Tailwind CSS to ensure a lightning-fast, ultra-premium client experience.",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    image: {
      src: "/webis.png",
      aiHint: "digital engineering studio portfolio mockup"
    },
    liveDemo: "https://www.webiss.shop/",
    github: "https://github.com/Ahsan6786/webis2.0",
  },
  {
    title: "Blingish",
    description: "A premium freelance jewellery e-commerce platform ranking at the top of Google. It features a modern luxury aesthetic with WhatsApp-based ordering for a personalized 'Quiet Luxury' experience.",
    detailedDescription: "Blingish is a high-end jewellery website developed as a freelance project. It features a modern, elegant design tailored for luxury products, ensuring a smooth and responsive user experience. Currently ranking at the top of Google search results. Instead of a traditional payment gateway, it uses WhatsApp-based ordering to maintain a personalized and trustworthy shopping experience.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: placeholderData.projectBling,
    liveDemo: "https://www.blingish.in/",
    github: "https://github.com/Ahsan6786/bling",
    detailsPage: "/projects/blingish"
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
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Navigation Bar */}
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8 flex justify-start items-center">
              <Button 
                onClick={() => router.back()} 
                variant="ghost" 
                size="icon" 
                className="hover:bg-accent border border-transparent hover:border-border rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Page Title */}
        <section className="mb-16 md:mb-24 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.projects.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              PORTFOLIO
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              Crafting solutions from backend to frontend interfaces
            </p>
          </AnimateOnScroll>
        </section>

        {/* Project Showcases Section */}
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const imgUrl = typeof project.image === "string" ? project.image : project.image.src;
            const imgHint = typeof project.image === "string" ? project.title : project.image.aiHint;

            return (
              <AnimateOnScroll key={project.title} className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  
                  {/* Image/Mockup Showcase Frame */}
                  <div className={`relative p-1 bg-gradient-to-br from-yellow-500/25 to-amber-600/10 dark:from-yellow-500/15 dark:to-amber-600/5 rounded-3xl border border-border dark:border-yellow-500/10 shadow-2xl transition-all duration-500 group-hover:border-yellow-500/30 group-hover:shadow-yellow-500/5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative aspect-video rounded-[22px] overflow-hidden">
                      <Image
                        src={imgUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={imgHint}
                      />
                    </div>
                  </div>

                  {/* Text Details Container */}
                  <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    
                    {/* Glowing Accent Tag */}
                    <div className="inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Featured Project</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack mapping */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase">
                        <Code className="w-3.5 h-3.5 text-yellow-500" />
                        <span>Technology Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs bg-yellow-500/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/15 text-yellow-600 dark:text-yellow-400 font-mono px-3 py-1.5 rounded-full shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action buttons row */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {project.github && (
                        <Button variant="outline" asChild className="rounded-full border-border/80 dark:border-yellow-500/20 hover:bg-foreground/5 shadow-md font-semibold text-sm px-5 py-4" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            <span>Code Repository</span>
                          </a>
                        </Button>
                      )}
                      
                      {project.liveDemo && (
                        <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-md font-semibold text-sm px-5 py-4" size="sm">
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            <span>Live Launch</span>
                          </a>
                        </Button>
                      )}
                      
                      {project.detailsPage && (
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-md font-semibold text-sm px-5 py-4"
                        >
                          <Link href={project.detailsPage}>
                            <Info className="mr-2 h-4 w-4"/>
                            <span>Case Study</span>
                          </Link>
                        </Button>
                      )}
                    </div>

                  </div>

                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </div>
  );
}
