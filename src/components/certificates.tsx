"use client";

import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { Award, Download, CheckCircle, Star } from "lucide-react";

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

type Certificate = (typeof certificates)[0];

function CertificateCard({ certificate }: { certificate: Certificate }) {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificate.downloadUrl;
    link.download = `${certificate.title.replace(/ /g, '_')}_Certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="relative bg-card rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-300 p-1 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-2 border-2 border-dashed border-primary/20 rounded-lg"></div>
        
        <div className="relative flex flex-col p-8 h-full text-center items-center justify-between">
            <div className="flex-shrink-0 flex items-center gap-1 text-emerald-500 absolute top-4 right-4 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified</span>
            </div>

            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mb-4">
                <Award className="w-8 h-8" />
            </div>
            
            <div className='flex-grow'>
                <h3 className="text-xl font-bold text-foreground">{certificate.title}</h3>
                <p className="text-muted-foreground text-sm my-4 flex-grow">{certificate.description}</p>
            </div>
            
            <Button 
                onClick={handleDownload}
                className="w-full mt-auto bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90"
            >
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
            </Button>
        </div>
    </div>
  );
}

export function Certificates() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="certificates" className="py-16 md:py-24 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">{translations.certificates.title}</h2>
            <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              {translations.certificates.title}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
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
