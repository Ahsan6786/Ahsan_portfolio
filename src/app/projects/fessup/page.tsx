"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, ShieldOff, Activity, ThumbsUp, KeyRound, MessageCircle, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler, Sparkles } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';

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
    { name: "Anonymous Posting", icon: <ShieldOff className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Real-time Feed", icon: <Activity className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Upvote System", icon: <ThumbsUp className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Firebase Auth", icon: <KeyRound className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Commenting", icon: <MessageCircle className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Responsive Design", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> }
  ],
  timeline: {
    startDate: "Sept 2025",
    endDate: "Oct 2025",
    duration: "7 Weeks",
    phases: [
      { name: "Planning & Design", duration: "1 Week", icon: <PencilRuler className="w-5 h-5" />, color: "bg-yellow-500", percentage: (1/7)*100 },
      { name: "Development", duration: "5 Weeks", icon: <BrainCircuit className="w-5 h-5" />, color: "bg-amber-500", percentage: (5/7)*100 },
      { name: "Testing & Launch", duration: "1 Week", icon: <Rocket className="w-5 h-5" />, color: "bg-yellow-600", percentage: (1/7)*100 },
    ]
  },
  techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Recharts"],
  liveDemo: "https://fessup.fun/",
  github: "https://github.com/Ahsan6786/FessUP-",
};

export default function FessUpProjectPage() {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
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

        {/* Laptop Hero Section (Highly Responsive Aspect Ratio Frame) */}
        <div className="w-full max-w-4xl mx-auto mb-16 px-4">
          <AnimateOnScroll className="w-full">
            <div className="relative w-full max-w-3xl mx-auto">
              
              {/* Laptop Screen Slideshow */}
              <div 
                className="absolute overflow-hidden bg-zinc-950 rounded"
                style={{
                  top: '5.5%',
                  left: '11.2%',
                  width: '77.6%',
                  height: '86.5%',
                  zIndex: 5
                }}
              >
                {screenshots.map((img, index) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={`FessUp Screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className={`object-contain w-full h-full p-1.5 transition-opacity duration-1000 ${index === currentScreenshotIndex ? 'opacity-100' : 'opacity-0'}`}
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
                className="relative w-full h-auto z-10 pointer-events-none drop-shadow-2xl"
                data-ai-hint={placeholderData.laptop_frame.aiHint}
                priority
              />

            </div>
          </AnimateOnScroll>
        </div>

        {/* Project Details Glass Card */}
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-card/65 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Accent Stripe */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-yellow-500 to-amber-600" />

              {/* Case Study Header */}
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Case Study Details</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
                  {projectDetails.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  {projectDetails.subtitle}
                </p>
              </div>

              {/* Core Description */}
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground dark:text-gray-300 space-y-6 mb-12 text-sm sm:text-base leading-relaxed">
                {projectDetails.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Key Features Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif font-bold mb-6 text-foreground text-center uppercase tracking-wider">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {projectDetails.features.map((feature) => (
                    <div 
                      key={feature.name} 
                      className="bg-card/50 border border-border dark:border-yellow-500/10 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5 group text-center h-full"
                    >
                      {feature.icon}
                      <p className="font-bold text-foreground text-xs sm:text-sm mt-2">{feature.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif font-bold mb-6 text-foreground text-center uppercase tracking-wider">Project Timeline</h3>
                <div className="bg-card/50 border border-border dark:border-yellow-500/10 rounded-xl p-6 md:p-8 shadow-inner">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-yellow-500" />
                      <span className="font-bold text-sm sm:text-base text-foreground">Total Duration: {projectDetails.timeline.duration}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground bg-foreground/5 px-2.5 py-1 rounded">
                      {projectDetails.timeline.startDate}{projectDetails.timeline.endDate && ` - ${projectDetails.timeline.endDate}`}
                    </span>
                  </div>
                  {/* Visual Gantt Bar */}
                  <div className="flex space-x-1 w-full h-4 rounded-full overflow-hidden bg-foreground/5 p-0.5 border border-border/50">
                    {projectDetails.timeline.phases.map((phase, index) => (
                      <div 
                        key={index} 
                        className={`${phase.color} h-full rounded-sm opacity-90 hover:opacity-100 transition-opacity`} 
                        style={{ width: `${phase.percentage}%` }} 
                        title={`${phase.name} (${phase.duration})`}
                      />
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    {projectDetails.timeline.phases.map((phase, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-border/40 pb-2 sm:border-none sm:pb-0">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${phase.color}`} />
                          <span className="font-semibold text-foreground">{phase.name}</span>
                        </div>
                        <span className="text-muted-foreground font-bold">{phase.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Stack & Navigation Actions */}
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-foreground uppercase tracking-wider">Tech Stack</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {projectDetails.techStack.map(tech => (
                      <span key={tech} className="bg-yellow-500/5 border border-border dark:border-yellow-500/15 text-yellow-600 dark:text-yellow-400 font-mono text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  {projectDetails.liveDemo && (
                    <a href={projectDetails.liveDemo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button className="w-full bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/95 px-8 py-5 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Launch</span>
                      </Button>
                    </a>
                  )}
                  {projectDetails.github && (
                    <a href={projectDetails.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full bg-secondary text-secondary-foreground border border-border dark:border-yellow-500/15 font-semibold rounded-full hover:bg-secondary/80 px-8 py-5 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        <span>Code Repository</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </div>
  );
}
