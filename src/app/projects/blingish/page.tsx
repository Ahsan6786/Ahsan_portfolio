"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, MessageSquare, Gem, PenTool, Globe, TabletSmartphone, CalendarDays, Rocket, BrainCircuit, PencilRuler, Sparkles, ShieldCheck } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';

const projectDetails = {
  title: "Blingish",
  subtitle: "A premium freelance jewellery e-commerce platform ranking at the top of Google.",
  description: [
    "Blingish is a high-end jewellery website developed as a freelance project, focusing on clean aesthetics and a seamless user experience that resonates with the soul. It is currently ranking at the top of Google search results.",
    "The platform follows a 'Quiet Luxury' approach, where the shopping experience is personalized through direct WhatsApp integration instead of a standard payment gateway. This allows for a more artisanal and trustworthy interaction between the brand and its customers.",
    "From everyday shine to once-in-a-lifetime pieces, Blingish is designed to tell a story through ethically sourced stones and recycled metals, blending hand-crafted legacy with modern design precision."
  ],
  features: [
    { name: "WhatsApp Ordering", icon: <MessageSquare className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Premium Aesthetic", icon: <Sparkles className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Ethical Sourcing", icon: <ShieldCheck className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "3D Previews", icon: <Gem className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Custom Designs", icon: <PenTool className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: "Responsive Layout", icon: <TabletSmartphone className="w-8 h-8 mb-2 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /> }
  ],
  timeline: {
    startDate: "Freelance",
    endDate: "2025",
    duration: "4 Days",
    phases: [
      { name: "UI/UX Design", duration: "1 Day", icon: <PencilRuler className="w-5 h-5" />, color: "bg-yellow-500", percentage: 25 },
      { name: "Development", duration: "2.5 Days", icon: <BrainCircuit className="w-5 h-5" />, color: "bg-amber-500", percentage: 65 },
      { name: "Deployment", duration: "0.5 Day", icon: <Rocket className="w-5 h-5" />, color: "bg-yellow-600", percentage: 10 },
    ]
  },
  techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  liveDemo: "https://www.blingish.in/",
  github: "https://github.com/Ahsan6786/bling",
};

export default function BlingishProjectPage() {
  const router = useRouter();

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] right-[-15%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

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

        {/* Premium Jewellery Showcase Banner (No Laptop Frame) */}
        <div className="w-full max-w-4xl mx-auto mb-16 px-4">
          <AnimateOnScroll className="w-full">
            <div className="relative w-full aspect-video md:aspect-[21/9] mx-auto rounded-3xl overflow-hidden border border-border dark:border-yellow-500/10 shadow-2xl p-1 bg-gradient-to-br from-yellow-500/25 to-amber-600/10 dark:from-yellow-500/15 dark:to-amber-600/5">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <Image
                  src={placeholderData.projectBling.src}
                  alt="Blingish Premium Jewellery Showcase"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  data-ai-hint={placeholderData.projectBling.aiHint}
                  priority
                />
              </div>
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
