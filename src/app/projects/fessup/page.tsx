
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
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
        "Anonymous Posting",
        "Real-time Feed",
        "Upvote/Downvote System",
        "Firebase Authentication",
        "Comment on Posts",
        "Responsive Design"
    ],
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
};

export default function FessUpProjectPage() {
    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
    const laptopRef = useRef<HTMLDivElement>(null);
    const scrollYRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        const animate = () => {
            if (laptopRef.current) {
                const scrollY = scrollYRef.current;
                const rotateX = Math.min(90, scrollY * 0.05);
                const rotateY = scrollY * 0.01;
                const translateY = Math.max(-100, -scrollY * 0.1);
                const scale = 1 + Math.min(0.1, scrollY * 0.0001);

                laptopRef.current.style.transform = `
                    perspective(1200px) 
                    translateY(${translateY}px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    scale(${scale})
                `;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
                 <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* 3D Laptop Hero Section */}
            <div className="w-full h-[50vh] md:h-[120vh] flex items-start justify-center perspective-[1200px] mb-12 md:mb-0">
                <div 
                    ref={laptopRef}
                    className="relative w-[80%] md:w-[60%] lg:w-[50%] max-w-4xl"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Laptop Screen Slideshow */}
                    <div className="absolute top-[5%] left-[10.5%] w-[79%] h-[82%] overflow-hidden">
                        {screenshots.map((img, index) => (
                             <Image
                                key={img.src}
                                src={img.src}
                                alt={`FessUp! Screenshot ${index + 1}`}
                                fill
                                className={`object-cover w-full h-full transition-opacity duration-1000 ${index === currentScreenshotIndex ? 'opacity-100' : 'opacity-0'}`}
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
            <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-32 -mt-12 md:-mt-48">
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
                        <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            {projectDetails.features.map(feature => (
                                <div key={feature} className="bg-background/50 border border-border/20 rounded-lg p-4">
                                    <p className="font-medium text-foreground">{feature}</p>
                                </div>
                            ))}
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

