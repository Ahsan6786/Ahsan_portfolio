
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Bot, BookOpen, Briefcase, KeyRound, LayoutDashboard, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const screenshots = [
    placeholderData.mit_screen1,
    placeholderData.mit_screen2,
    placeholderData.mit_screen3,
];

const projectDetails = {
    title: "MIT WPU Chat Assist",
    subtitle: "An intelligent web portal for MIT-WPU students, powered by Gemini AI.",
    description: [
        "MIT Chat Assist is an intelligent web portal designed for students of MIT World Peace University. Powered by Google's Gemini AI, it features a central chatbot for instant answers on admissions, courses, and campus life.",
        "The platform also includes specialized tools like a personalized Course Recommender, an Internship Assistant, and a powerful AI Admin Dashboard for easy management of the chatbot's knowledge base. Built with Next.js and Firebase, it offers a seamless and reliable experience for users."
    ],
    features: [
        { name: "AI Chatbot", icon: <Bot className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Course Recommender", icon: <BookOpen className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Internship Assistant", icon: <Briefcase className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Firebase Auth", icon: <KeyRound className="w-8 h-8 mb-2 text-primary" /> },
        { name: "AI Admin Dashboard", icon: <LayoutDashboard className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Responsive Design", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-primary" /> }
    ],
    timeline: {
        startDate: "December 2023",
        endDate: "January 2024",
        duration: "1.5 Months",
        phases: [
            { name: "Concept & Planning", duration: "1 Week", icon: <PencilRuler className="w-6 h-6 text-primary" /> },
            { name: "Development & AI Integration", duration: "4 Weeks", icon: <BrainCircuit className="w-6 h-6 text-primary" /> },
            { name: "Testing & Deployment", duration: "1 Week", icon: <Rocket className="w-6 h-6 text-primary" /> },
        ]
    },
    techStack: ["Next.js", "Firebase", "Gemini AI", "Tailwind CSS", "TypeScript"],
    liveDemo: "https://studio--studio-4013308653-b04c2.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/studio",
};


export default function MITProjectPage() {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }, 2000);
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
            <div className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center perspective-[1200px] mb-12 md:mb-0">
                <div 
                    className="relative w-[80%] md:w-[60%] lg:w-[50%] max-w-4xl"
                    style={{ 
                        transform: 'perspective(1200px) rotateX(10deg) scale(0.9)',
                        transformStyle: 'preserve-3d' 
                    }}
                >
                    {/* Laptop Screen Slideshow */}
                    <div className="absolute top-[5%] left-[10.5%] w-[79%] h-[82%] overflow-hidden">
                        {screenshots.map((img, index) => (
                             <Image
                                key={img.src}
                                src={img.src}
                                alt={`MIT Chat Assist Screenshot ${index + 1}`}
                                fill
                                className={`object-contain w-full h-full transition-opacity duration-1000 ${index === currentScreenshotIndex ? 'opacity-100' : 'opacity-0'}`}
                                data-ai-hint={img.aiHint}
                            />
                        ))}
                    </div>
                    {/* Laptop Frame */}
                    <Image
                        src={placeholderData.laptop_frame.src}
                        alt="Laptop Frame"
                        width={1000}
                        height={600}
                        className="relative w-full h-auto"
                        data-ai-hint={placeholderData.laptop_frame.aiHint}
                    />
                </div>
            </div>

            {/* Project Details Section */}
            <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-32 -mt-12 md:-mt-24">
                <AnimateOnScroll className="max-w-4xl mx-auto bg-card/50 backdrop-blur-lg border border-border/20 rounded-2xl p-6 md:p-12 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">{projectDetails.title}</h1>
                        <p className="text-lg md:text-xl text-muted-foreground">{projectDetails.subtitle}</p>
                    </div>

                    {/* Description */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
                        {projectDetails.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {projectDetails.features.map(feature => (
                                <div key={feature.name} className="bg-background/50 border border-border/20 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    {feature.icon}
                                    <p className="font-semibold text-foreground text-sm">{feature.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                     {/* Project Timeline */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8 text-center">Project Timeline</h3>
                        <div className="relative max-w-2xl mx-auto">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border top-0"></div>
                            
                            {/* Overall Duration */}
                             <div className="relative flex items-center justify-center mb-8">
                                <div className="z-10 bg-background p-3 rounded-full border-2 border-primary shadow-md">
                                    <CalendarDays className="w-8 h-8 text-primary" />
                                </div>
                                <div className="absolute left-1/2 ml-10">
                                    <p className="text-lg font-bold text-foreground">Total Duration: {projectDetails.timeline.duration}</p>
                                    <p className="text-sm text-muted-foreground">{projectDetails.timeline.startDate} - {projectDetails.timeline.endDate}</p>
                                </div>
                            </div>
                            
                            {/* Timeline Phases */}
                            <div className="space-y-12">
                                {projectDetails.timeline.phases.map((phase, index) => (
                                     <div key={phase.name} className="relative flex items-center">
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                                            <p className="font-bold text-lg text-foreground">{phase.name}</p>
                                            <p className="text-sm text-muted-foreground">{phase.duration}</p>
                                        </div>
                                        <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-background p-3 rounded-full border-2 border-primary/50 shadow-sm">
                                            {phase.icon}
                                        </div>
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Tech Stack & Buttons */}
                    <div className="text-center">
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
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );

    