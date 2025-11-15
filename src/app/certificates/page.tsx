"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const allCertificates = [
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
  {
    title: "Python Programming",
    description: "This certificate validates my proficiency in Python programming, covering fundamental to advanced concepts.",
    backDescription: "This certification confirms a comprehensive understanding of Python, from basic syntax to advanced topics like data structures and object-oriented programming. It represents the ability to write clean, efficient, and scalable code to solve complex problems.",
    image: placeholderData.certificate1,
  },
  {
    title: "Personal and Financial Planning",
    description: "Awarded for completing a course on personal and financial planning, covering budgeting, investing, and financial literacy.",
    backDescription: "This course provided in-depth knowledge of financial management, including creating budgets, making smart investment choices, and building long-term wealth. It reflects a disciplined and strategic approach to personal and financial goals.",
    image: placeholderData.certificate2,
  },
  {
    title: "Social Emotional Learning",
    description: "Demonstrates a strong understanding of social and emotional intelligence, including self-awareness and relationship skills.",
    backDescription: "This certification highlights a high level of emotional intelligence, including the ability to understand and manage one's own emotions and to recognize and influence the emotions of others. It is a key indicator of strong interpersonal and leadership skills.",
    image: placeholderData.certificate3,
  },
  {
    title: "Critical Thinking and Problem Solving",
    description: "Recognizes my skills in critical thinking and problem-solving, essential for analyzing complex challenges and finding effective solutions.",
    backDescription: "This certificate validates the ability to approach problems with a logical and analytical mindset. It covers skills such as analyzing information, identifying key issues, and developing innovative solutions, which are crucial for success in any technical field.",
    image: placeholderData.certificate4,
  },
  {
    title: "Teamwork and Collaboration",
    description: "Showcases my ability to work effectively in a team, emphasizing communication, collaboration, and shared goals.",
    backDescription: "This certification is a testament to strong collaborative skills, including effective communication, active listening, and the ability to work constructively with others to achieve a common objective. It is essential for thriving in modern, team-based work environments.",
    image: placeholderData.certificate5,
  },
  {
    title: "Measuring Sustainable Development",
    description: "This certificate covers the principles and practices of measuring sustainable development, including key indicators and methodologies.",
    backDescription: "This course focused on the metrics and frameworks used to assess sustainable development. It involved learning how to track progress on environmental, social, and economic goals, providing a solid foundation for contributing to sustainable and responsible projects.",
    image: placeholderData.certificate6,
  },
];

type Certificate = (typeof allCertificates)[0];

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void; }) {
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
      <div className="bg-card rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4 h-[480px]">
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

export default function CertificatesPage() {
  const { translations, loading } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-16 md:pt-24">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCertificates.map((certificate, index) => (
                   <CertificateCard key={index} certificate={certificate} onClick={() => setSelectedCertificate(certificate)} />
                ))}
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
