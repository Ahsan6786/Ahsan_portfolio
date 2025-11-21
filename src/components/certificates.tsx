"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { PremiumCertificate } from "@/components/premium-certificate";

const certificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model.",
    downloadUrl: "/certificate1.1.png",
  },
  {
    title: "Deloitte Technology Job Simulation",
    description: "Completed a job simulation focused on technology consulting.",
    downloadUrl: "/deloitte_certificate.png",
  },
];

export function Certificates() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="certificates" className="py-16 md:py-24 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">{translations.certificates.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <PremiumCertificate
                  key={index}
                  recipientName="Ahsan Imam Khan"
                  certificateTitle={certificate.title}
                  certificateDescription={certificate.description}
                  date="2024-05-20"
                  credentialId={`SIH-2025-${index}`}
                  skills={['Innovation', 'Problem Solving']}
                  verifyUrl={certificate.downloadUrl}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/certificates">
                <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                  {translations.certificates.viewAll}
                </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
