"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Globe, Search, Filter, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const screenshots = [
    placeholderData.project2,
];

const projectDetails = {
    title: "News Archive",
    subtitle: "A comprehensive news system that collects and displays articles from sources worldwide.",
    description: [
        "News Archive is a comprehensive news system designed to aggregate and present articles from a multitude of sources across the globe. It serves as a centralized hub for users to stay informed on current events, research topics, and browse headlines without needing to visit multiple news outlets.",
        "The platform boasts a clean, fast, and intuitive interface that prioritizes user experience. Key features include a powerful search functionality to quickly find relevant topics, robust filtering options to narrow down news by source or category, and a fully responsive design that ensures a seamless experience on any device. The project leverages various APIs to fetch data in real-time, making it a powerful tool for staying up-to-date."
    ],
    features: [
        { name: "Global News Sources", icon: <Globe className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Powerful Search", icon: <Search className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Advanced Filtering", icon: <Filter className="w-8 h-8 mb-2 text-primary" /> },
        { name: "API Integration", icon: <BrainCircuit className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Responsive Design", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-primary" /> }
    ],
    timeline: {
        startDate: "July 2024",
        endDate: "August 2024",
        duration: "4 Weeks",
        phases: [
            { name: "Planning & API Research", duration: "1 Week", icon: <PencilRuler className="w-6 h-6" />, color: "bg-blue-500", percentage: (1/4)*100 },
            { name: "Frontend Development", duration: "2 Weeks", icon: <BrainCircuit className="w-6 h-6" />, color: "bg-green-500", percentage: (2/4)*100 },
            { name: "Testing & Deployment", duration: "1 Week", icon: <Rocket className="w-6 h-6" />, color: "bg-purple-500", percentage: (1/4)*100 },
        ]
    },
    techStack: ["Web App", "API", "JavaScript", "HTML", "CSS"],
    liveDemo: "https://bjp-news-archive.vercel.app/",
    github: "https://github.com/Ahsan6786/NEWSARCHIVE",
};


export default function NewsArchiveProjectPage() {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
                 <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* Laptop Hero Section */}
            <div className="w-full h-auto md:h-[80vh] flex items-center justify-center perspective-[1200px] mb-12 md:mb-0">
                <AnimateOnScroll className="w-full h-full">
                    <div 
                        className="relative w-[90%] scale-[0.8] md:w-[80%] md:scale-[0.9] lg:w-[60%] lg:scale-100 max-w-4xl mx-auto"
                        style={{ 
                            transform: 'perspective(1200px) rotateX(10deg)',
                            transformStyle: 'preserve-3d' 
                        }}
                    >
                        {/* Laptop Screen Slideshow */}
                        <div className="absolute top-[5%] left-[10.5%] w-[79%] h-[82%] overflow-hidden">
                            {screenshots.map((img, index) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt={`News Archive Screenshot ${index + 1}`}
                                    fill
                                    className={`object-cover w-full h-full transition-opacity duration-1000 ${index === currentScreenshotIndex ? 'opacity-100' : 'opacity-0'}`}
                                    data-ai-hint={img.aiHint}
                                />
                            ))}
                        </div>
                        {/* Laptop Frame */}
                        <Image
                            src={placeholderData.laptop_frame_bjp.src}
                            alt="Laptop Frame"
                            width={1000}
                            height={600}
                            className="relative w-full h-auto"
                            data-ai-hint={placeholderData.laptop_frame_bjp.aiHint}
                        />
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Project Details Section */}
            <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-32 -mt-12 md:-mt-24">
                <AnimateOnScroll className="max-w-4xl mx-auto bg-card/50 backdrop-blur-lg border border-border/20 rounded-2xl p-6 md:p-12 shadow-2xl">
                    {/* Header */}
                    <AnimateOnScroll className="text-center mb-10" delay="0.1s">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">{projectDetails.title}</h1>
                        <p className="text-lg md:text-xl text-muted-foreground">{projectDetails.subtitle}</p>
                    </AnimateOnScroll>

                    {/* Description */}
                    <AnimateOnScroll className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground space-y-6 mb-12" delay="0.2s">
                        {projectDetails.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </AnimateOnScroll>

                    {/* Features */}
                    <AnimateOnScroll className="mb-12" delay="0.3s">
                        <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {projectDetails.features.map((feature, i) => (
                                <AnimateOnScroll key={feature.name} delay={`${0.3 + i * 0.1}s`}>
                                    <div className="bg-background/50 border border-border/20 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                                        {feature.icon}
                                        <p className="font-semibold text-foreground text-sm mt-2">{feature.name}</p>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </AnimateOnScroll>

                     {/* Project Timeline */}
                     <AnimateOnScroll className="mb-12" delay="0.4s">
                        <h3 className="text-2xl font-bold mb-8 text-center">Project Timeline</h3>
                        <div className="bg-background/50 border border-border/20 rounded-lg p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="w-6 h-6 text-primary" />
                                    <span className="font-bold text-lg">Total Duration: {projectDetails.timeline.duration}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{projectDetails.timeline.startDate} - {projectDetails.timeline.endDate}</span>
                            </div>
                            <div className="flex space-x-1 w-full h-4 rounded-full overflow-hidden">
                                {projectDetails.timeline.phases.map((phase, index) => (
                                    <div key={index} className={`${phase.color} h-full`} style={{ width: `${phase.percentage}%` }} title={`${phase.name} (${phase.duration})`}></div>
                                ))}
                            </div>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                {projectDetails.timeline.phases.map((phase, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                                        <span className="font-semibold">{phase.name}</span>
                                        <span className="text-muted-foreground ml-auto">{phase.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>


                    {/* Tech Stack & Buttons */}
                    <AnimateOnScroll className="text-center" delay="0.5s">
                        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {projectDetails.techStack.map(tech => (
                                <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-full">{tech}</span>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <a href={projectDetails.liveDemo} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                <button className="w-full bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-3 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    <ExternalLink className="inline-block w-4 h-4 mr-2" />
                                    Live Demo
                                </button>
                            </a>
                           <a href={projectDetails.github} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                <button className="w-full bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 px-8 py-3 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    <Github className="inline-block w-4 h-4 mr-2" />
                                    View Code
                                </button>
                            </a>
                        </div>
                    </AnimateOnScroll>
                </AnimateOnScroll>
            </div>
        </div>
    );
}
