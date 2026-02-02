"use client";

import { useRouter } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { PremiumCertificate } from "@/components/premium-certificate";

const allCertificates = [
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
    "description": "Covers principles and practices of measuring sustainable development.",
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
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="sr-only">Back</span>
              </Button>
            </div>
            </AnimateOnScroll>
            <section className="pb-16 md:pb-24 overflow-hidden">
             <AnimateOnScroll>
              <div className="text-center mb-12 relative">
                <h1 className="text-4xl md:text-6xl font-bold">{translations.certificatesPage.title}</h1>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {translations.certificatesPage.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allCertificates.map((certificate, index) => (
                    <PremiumCertificate
                        key={index}
                        recipientName="Ahsan Imam Khan"
                        certificateTitle={certificate.title}
                        certificateDescription={certificate.description}
                        date={certificate.date}
                        credentialId={`CERT-${new Date(certificate.date).getFullYear()}-${index}`}
                        skills={certificate.skills}
                        verifyUrl={certificate.downloadUrl}
                    />
                ))}
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
