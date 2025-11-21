

"use client";

import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLanguage } from "@/contexts/language-context";
import { Award, Download, CheckCircle } from "lucide-react";


const certificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model.",
    issuer: "Govt. of India",
    image: placeholderData.certificateSIH,
    downloadUrl: "/certificate1.1.png",
  },
  {
    title: "Deloitte Technology Job Simulation",
    description: "Completed a job simulation focused on technology consulting.",
    issuer: "Deloitte",
    image: placeholderData.certificateDeloitte,
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
    <div className="bg-card rounded-2xl border-2 border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col p-6 h-full">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-foreground">{certificate.title}</h3>
                    <p className="text-sm text-muted-foreground">Issued by: {certificate.issuer}</p>
                </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-1 text-emerald-500">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs font-semibold">Verified</span>
            </div>
        </div>

        <p className="text-muted-foreground text-sm my-4 flex-grow">{certificate.description}</p>
        
        <Button 
            onClick={handleDownload}
            className="w-full mt-auto bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90"
        >
            <Download className="mr-2 h-4 w-4" />
            Download Certificate
        </Button>
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
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {translations.certificates.subtitle}
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
