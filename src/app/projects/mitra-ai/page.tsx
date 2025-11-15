
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, HeartPulse, Brain, UserCheck, KeyRound, MessageCircle, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const screenshots = [
    placeholderData.mitra_screen1,
    placeholderData.mitra_screen2,
    placeholderData.mitra_screen3,
    placeholderData.mitra_screen4,
    placeholderData.mitra_screen5,
    placeholderData.mitra_screen6,
    placeholderData.mitra_screen7,
    placeholderData.mitra_screen8,
    placeholderData.mitra_screen9,
    placeholderData.mitra_screen10,
    placeholderData.mitra_screen11,
    placeholderData.mitra_screen12,
    placeholderData.mitra_screen13,
    placeholderData.mitra_screen14,
    placeholderData.mitra_screen15,
];

const projectDetails = {
    title: "Mitra AI",
    subtitle: "An innovative mental wellness application providing accessible, stigma-free support.",
    description: [
        "Mitra AI is an innovative mental wellness application designed to provide accessible, stigma-free support. It offers personalized resources, guided exercises, and a compassionate AI chatbot to help users navigate their mental health journey privately and securely.",
        "The app aims to make mental wellness a proactive and manageable part of daily life. Built with a modern tech stack including Next.js and powered by advanced AI, Mitra AI delivers a responsive and intuitive user experience across all devices."
    ],
    features: [
        { name: "AI Wellness Chatbot", icon: <Brain className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Personalized Resources", icon: <UserCheck className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Guided Exercises", icon: <HeartPulse className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Secure Authentication", icon: <KeyRound className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Stigma-Free Support", icon: <MessageCircle className="w-8 h-8 mb-2 text-primary" /> },
        { name: "Responsive Design", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-primary" /> }
    ],
    timeline: {
        startDate: "2025",
        endDate: "",
        duration: "8 Weeks",
        phases: [
            { name: "Concept & Design", duration: "2 Weeks", icon: <PencilRuler className="w-6 h-6" />, color: "bg-blue-500", percentage: (2/8)*100 },
            { name: "Development & AI Integration", duration: "5 Weeks", icon: <BrainCircuit className="w-6 h-6" />, color: "bg-green-500", percentage: (5/8)*100 },
            { name: "Testing & Deployment", duration: "1 Week", icon: <Rocket className="w-6 h-6" />, color: "bg-purple-500", percentage: (1/8)*100 },
        ]
    },
    techStack: ["AI", "Next.js", "Web App", "Firebase", "Tailwind CSS"],
    liveDemo: "https://mitraai.shop/",
    github: "https://github.com/Ahsan6786/MitraAi",
};


export default function MitraAiProjectPage() {
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
                    <div 
                        className="absolute overflow-hidden"
                        style={{
                            top: '5.5%',
                            left: '11.2%',
                            width: '77.6%',
                            height: '86.5%'
                        }}
                    >
                        {screenshots.map((img, index) => (
                             <Image
                                key={img.src}
                                src={img.src}
                                alt={`Mitra AI Screenshot ${index + 1}`}
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
                        <div className="bg-background/50 border border-border/20 rounded-lg p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="w-6 h-6 text-primary" />
                                    <span className="font-bold text-lg">Total Duration: {projectDetails.timeline.duration}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{projectDetails.timeline.startDate}{projectDetails.timeline.endDate && ` - ${projectDetails.timeline.endDate}`}</span>
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
}

    