"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { PremiumCertificate } from "@/components/premium-certificate";

const allCertificates = [
  {
    title: "Vishwanova National Hackathon",
    description: "Achieved National Finalist Rank 7 among 700+ competing teams across India in the prestigious Vishwanova National Hackathon.",
    downloadUrl: "/VISHWANOVA.jpg",
    skills: ['Hackathon', 'National Finalist', 'Team Leadership', 'Problem Solving'],
    date: "2026-05-18",
    recipientName: "Ahsan Imam Khan",
    credentialId: "VISHWANOVA-FINALIST-07"
  },
  {
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    description: "Successfully completed the AI Engineer Agentic Track, covering autonomous AI agents, Model Context Protocol (MCP), and advanced AI integrations.",
    downloadUrl: "/AI.png",
    verifyUrl: "https://ude.my/UC-2e2d3909-5aeb-403d-8a11-1f20ea8fda82",
    skills: ['AI Agents', 'MCP', 'Agentic Workflows', 'AI Engineering'],
    date: "2026-05-06",
    recipientName: "Ahsan Khan",
    credentialId: "UC-2e2d3909-5aeb-403d-8a11-1f20ea8fda82",
    instructors: "Ed Donner, Ligency",
    duration: "17 total hours",
    referenceNo: "0004"
  },
  {
    title: "Formal Languages and Automata Theory",
    description: "Mastered core computation concepts: finite automata, regular expressions, context-free grammars, Turing machines, and complexity classes.",
    downloadUrl: "/TOC.png",
    verifyUrl: "https://ude.my/UC-e1d294b2-f590-48b1-b850-e7eeb0f2b9db",
    skills: ['Automata Theory', 'Computation Theory', 'Formal Languages'],
    date: "2026-05-06",
    recipientName: "Ahsan Imam Khan",
    credentialId: "UC-e1d294b2-f590-48b1-b850-e7eeb0f2b9db",
    instructors: "Prof Madana Mohana R",
    duration: "37 total hours",
    referenceNo: "0004"
  },
  {
    title: "Winter Internship - Lightning Resilient India Campaign",
    description: "Successfully completed the Winter Internship with CROPC, demonstrating outstanding dedication and proficiency in understanding climate change, disaster management, and community resilience.",
    downloadUrl: "/internship.jpeg",
    skills: ['Climate Change', 'Disaster Management', 'Community Resilience'],
    date: "2026-01-16"
  },
  {
    title: "L&T Industry Immersion Program",
    description: "Successfully completed the National Academic Immersion Program on Industry-Ready Tech Foundations at the Larsen & Toubro Campus, Chennai.",
    downloadUrl: "/ltc.png",
    skills: ['Tech Foundations', 'Industry Program', 'Immersion'],
    date: "2026-01-20"
  },
  {
    title: "AI @ IISER Pune: Research and Training",
    description: "Participated in the event 'AI @ IISER Pune: Pushing the Boundaries of Research and Training', held at IISER Pune.",
    downloadUrl: "/cii.png",
    skills: ['AI', 'Research', 'Training', 'IISER Pune'],
    date: "2026-02-07"
  },
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model.",
    downloadUrl: "/certificate1.1.png",
    skills: ['Innovation', 'Problem Solving', 'Teamwork'],
    date: "2025-03-30"
  },
  {
    title: "Deloitte Technology Job Simulation",
    description: "Completed a job simulation focused on technology consulting.",
    downloadUrl: "/deloitte_certificate.png",
    skills: ['Consulting', 'Tech Simulation', 'Analysis'],
    date: "2024-06-15"
  },
  {
    title: "Python Programming",
    description: "Proficiency in Python programming, from fundamental to advanced concepts.",
    downloadUrl: "/certificate1.png",
    skills: ['Python', 'Programming', 'Logic'],
    date: "2024-05-20"
  },
  {
    title: "Personal and Financial Planning",
    description: "Covers budgeting, investing, and building financial literacy.",
    downloadUrl: "/certificate2.png",
    skills: ['Finance', 'Planning', 'Budgeting'],
    date: "2024-04-10"
  },
  {
    title: "Social Emotional Learning",
    description: "Strong understanding of social and emotional intelligence.",
    downloadUrl: "/certificate3.png",
    skills: ['Soft Skills', 'EQ', 'Communication'],
    date: "2024-03-05"
  },
  {
    title: "Critical Thinking and Problem Solving",
    description: "Skills in analyzing complex challenges and finding effective solutions.",
    downloadUrl: "/certificate4.png",
    skills: ['Critical Thinking', 'Problem Solving', 'Analytics'],
    date: "2024-02-15"
  },
  {
    title: "Teamwork and Collaboration",
    description: "Ability to work effectively in a team, emphasizing communication.",
    downloadUrl: "/certificate5.png",
    skills: ['Teamwork', 'Collaboration', 'Agile'],
    date: "2024-01-20"
  },
  {
    title: "Measuring Sustainable Development",
    description: "Covers principles and practices of measuring sustainable development.",
    downloadUrl: "/certificate6.png",
    skills: ['Sustainability', 'Development', 'Measurement'],
    date: "2023-12-10"
  },
];

export default function CertificatesPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
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

        {/* Page Section */}
        <section className="pb-16 md:pb-24">
          <AnimateOnScroll>
            
            {/* Title Block */}
            <div className="text-center mb-16 md:mb-24 relative">
              <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Endorsements</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
                {translations.certificatesPage.title}
              </h1>
              <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full" aria-hidden="true">
                CREDENTIALS
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
                {translations.certificatesPage.subtitle}
              </p>
            </div>

            {/* Premium Certificates 3D Hover Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 max-w-5xl mx-auto pt-8">
              {allCertificates.map((certificate, index) => (
                <PremiumCertificate
                  key={index}
                  recipientName={certificate.recipientName || "Ahsan Imam Khan"}
                  certificateTitle={certificate.title}
                  certificateDescription={certificate.description}
                  date={certificate.date}
                  credentialId={certificate.credentialId || `CERT-${new Date(certificate.date).getFullYear()}-${index}`}
                  skills={certificate.skills}
                  verifyUrl={certificate.verifyUrl}
                  downloadUrl={certificate.downloadUrl}
                  instructors={certificate.instructors}
                  duration={certificate.duration}
                  referenceNo={certificate.referenceNo}
                />
              ))}
            </div>

          </AnimateOnScroll>
        </section>

      </div>
    </div>
  );
}
