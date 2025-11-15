"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const certificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model, Smart India Hackathon 2025.",
    backDescription: "Successfully advanced through two rigorous stages of the Smart India Hackathon, a national competition that promotes innovation and problem-solving. This achievement highlights strong teamwork, creative thinking, and the ability to develop practical solutions under pressure.",
    image: placeholderData.certificateSIH,
  },
  {
    title: "Deloitte Technology Job Simulation",
    description: "Completed a job simulation focused on technology consulting, covering key areas of the field.",
    backDescription: "This simulation provided hands-on experience in technology consulting, including analyzing client needs, developing solutions, and presenting recommendations. It demonstrates practical skills in a real-world business context, reflecting an ability to bridge the gap between technology and business goals.",
    image: placeholderData.certificateDeloitte,
  },
];

type Certificate = (typeof certificates)[0];

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void; }) {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, rotateY: 90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.95, rotateY: 90 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-card rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64 md:h-96">
            <Image
                src={certificate.image.src}
                alt={certificate.title}
                fill
                className="object-contain"
                data-ai-hint={certificate.image.aiHint}
            />
        </div>
        <div className="p-8 overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{certificate.title}</h2>
            <p className="text-muted-foreground mb-6">{certificate.backDescription}</p>
        </div>
        <Button size="icon" variant="ghost" className="absolute top-4 right-4 rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={onClose}>
            <X className="w-5 h-5"/>
        </Button>
      </motion.div>
    </motion.div>
  );
}


function CertificateCard({ certificate, onClick }: { certificate: Certificate, onClick: () => void }) {
  return (
    <div className="w-full h-auto cursor-pointer" onClick={onClick}>
      <div className="bg-background rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4 h-[480px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4 flex-shrink-0">
            <Image
              src={certificate.image.src}
              alt={certificate.title}
              fill
              className="object-contain"
              data-ai-hint={certificate.image.aiHint}
            />
          </div>
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground">{certificate.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{certificate.description}</p>
            </div>
          </div>
      </div>
    </div>
  );
}


export function Certificates() {
  const { translations, loading } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  if (loading) return null;

  return (
    <section id="certificates" className="py-16 md:py-24 bg-card">
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
              <CertificateCard key={index} certificate={certificate} onClick={() => setSelectedCertificate(certificate)} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/certificates">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                  {translations.certificates.viewAll}
                </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
