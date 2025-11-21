"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Download, CheckCircle, Star } from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/language-context";

const allCertificates = [
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
  {
    title: "Python Programming",
    description: "Proficiency in Python programming, from fundamental to advanced concepts.",
    issuer: "Infosys Springboard",
    image: placeholderData.certificate1,
    downloadUrl: "/certificate1.png",
  },
  {
    title: "Personal and Financial Planning",
    description: "Covers budgeting, investing, and building financial literacy.",
    issuer: "TCS iON",
    image: placeholderData.certificate2,
    downloadUrl: "/certificate2.png",
  },
  {
    title: "Social Emotional Learning",
    description: "Strong understanding of social and emotional intelligence.",
    issuer: "TCS iON",
    image: placeholderData.certificate3,
    downloadUrl: "/certificate3.png",
  },
  {
    title: "Critical Thinking and Problem Solving",
    description: "Skills in analyzing complex challenges and finding effective solutions.",
    issuer: "TCS iON",
    image: placeholderData.certificate4,
    downloadUrl: "/certificate4.png",
  },
  {
    title: "Teamwork and Collaboration",
    description: "Ability to work effectively in a team, emphasizing communication.",
    issuer: "TCS iON",
    image: placeholderData.certificate5,
    downloadUrl: "/certificate5.png",
  },
  {
    title: "Measuring Sustainable Development",
    description: "Covers principles and practices of measuring sustainable development.",
    issuer: "TCS iON",
    image: placeholderData.certificate6,
    downloadUrl: "/certificate6.png",
  },
];

type Certificate = (typeof allCertificates)[0];


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
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words" aria-hidden="true">
                  {translations.certificatesPage.gallery}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {translations.certificatesPage.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allCertificates.map((certificate, index) => (
                   <CertificateCard key={index} certificate={certificate} />
                ))}
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
