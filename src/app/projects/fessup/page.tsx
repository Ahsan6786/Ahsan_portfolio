
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, ShieldOff, Activity, ThumbsUp, KeyRound, MessageCircle, TabletSmartphone, Users, FileText } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';


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
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Recharts"],
    liveDemo: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    github: "https://github.com/Ahsan6786/FessUP-",
};

const weeklyActiveUsersData = [
  { day: 'Mon', users: 150 },
  { day: 'Tue', users: 210 },
  { day: 'Wed', users: 250 },
  { day: 'Thu', users: 180 },
  { day: 'Fri', users: 300 },
  { day: 'Sat', users: 450 },
  { day: 'Sun', users: 400 },
];

const dailyPostsData = [
  { date: 'Day 1', posts: 20 },
  { date: 'Day 2', posts: 35 },
  { date: 'Day 3', posts: 45 },
  { date: 'Day 4', posts: 40 },
  { date: 'Day 5', posts: 60 },
  { date: 'Day 6', posts: 80 },
  { date: 'Day 7', posts: 95 },
];


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
            <div className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center perspective-[1200px] mb-12 md:mb-0">
                <div 
                    className="relative w-[80%] md:w-[60%] lg:w-[50%] max-w-4xl"
                    style={{ 
                        transform: 'perspective(1200px) rotateX(10deg) scale(0.9)',
                        transformStyle: 'preserve-3d' 
                    }}
                >
                    {/* Laptop Screen Slideshow */}
                    <div className="absolute top-[5%] left-[10.5%] w-[79%] h-[82%] overflow-hidden p-2">
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

                    {/* Engagement Metrics */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-8 text-center">User Engagement Metrics</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-base font-medium">Weekly Active Users</CardTitle>
                                    <Users className="w-5 h-5 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+450</div>
                                    <p className="text-xs text-muted-foreground">+25% from last week</p>
                                    <div className="h-[120px] mt-4">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={weeklyActiveUsersData}>
                                                <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                                <Tooltip
                                                    content={({ active, payload }) => {
                                                        if (active && payload && payload.length) {
                                                            return (
                                                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">Day</span>
                                                                            <span className="font-bold text-muted-foreground">{payload[0].payload.day}</span>
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">Users</span>
                                                                            <span className="font-bold">{payload[0].value}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        return null
                                                    }}
                                                />
                                                <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-base font-medium">Daily New Posts</CardTitle>
                                    <FileText className="w-5 h-5 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+95</div>
                                    <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                                    <div className="h-[120px] mt-4">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={dailyPostsData}>
                                                <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                                <Tooltip
                                                    content={({ active, payload }) => {
                                                        if (active && payload && payload.length) {
                                                            return (
                                                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">Date</span>
                                                                            <span className="font-bold text-muted-foreground">{payload[0].payload.date}</span>
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">Posts</span>
                                                                            <span className="font-bold">{payload[0].value}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        return null
                                                    }}
                                                />
                                                <Line type="monotone" dataKey="posts" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: 'hsl(var(--primary))' }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
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

    

    