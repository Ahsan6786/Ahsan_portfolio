
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, ShieldOff, Activity, ThumbsUp, KeyRound, MessageCircle, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const screenshots = [
    placeholderData.fessup_screen1,
    placeholderData.fessup_screen2,
    placeholderData.fessup_screen3,
];

const projectDetails = {
    title: "FessUp!",
    subtitle: "A dynamic and anonymous social platform for college students.",
    description: [
        "FessUp! is a dynamic and anonymous social platform designed specifically for college students. It provides a safe and open space for users to share confessions, thoughts, and campus happenings without revealing their identity, fostering a unique environment for genuine and unfiltered expression.",
        "The platform is built with Next.js for a fast, server-rendered frontend, Firebase for real-time data and authentication, and styled with Tailwind CSS for a modern, responsive design. The user experience is at the core of FessUp!, with a focus on simplicity, privacy, and engagement. Users can post anonymously, comment on others' posts, and see what's trending on their campus, all in real-time."
    ],
    features: [
        { name: "Anonymous Posting", icon: <ShieldOff className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Real-time Feed", icon: <Activity className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Upvote System", icon: <ThumbsUp className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Firebase Auth", icon: <KeyRound className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Commenting", icon: <MessageCircle className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Responsive Design", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-primary" /> }
    ],
    timeline: {
        startDate: "September 2025",
        endDate: "October 2025",
        duration: "7 Weeks",
        phases: [
            { name: "Planning & Design", duration: "1 Week", icon: <PencilRuler className="w-6 h-6" />, color: "bg-blue-500", percentage: (1/7)*100 },
            { name: "Development", duration: "5 Weeks", icon: <BrainCircuit className="w-6 h-6" />, color: "bg-green-500", percentage: (5/7)*100 },
            { name: "Testing & Launch", duration: "1 Week", icon: <Rocket className="w-6 h-6" />, color: "bg-purple-500", percentage: (1/7)*100 },
        ]
    },
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Recharts"],
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
};


export default function FessUpProjectPage() {
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
            <AnimateOnScroll>
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
                                    alt={`FessUp! Screenshot ${index + 1}`}
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
            </AnimateOnScroll>

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
