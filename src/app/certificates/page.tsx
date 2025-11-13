"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
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


function CertificateCard({ certificate }: { certificate: (typeof allCertificates)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { translations, loading } = useLanguage();
  if (loading) return null;

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="w-full h-[480px] perspective-1000">
      <motion.div
        onTap={handleTap}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        data-style="preserve-3d"
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4">
           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4">
              <Image
                src={certificate.image.src}
                alt={certificate.title}
                fill
                className="object-contain"
                data-ai-hint={certificate.image.aiHint}
              />
            </div>
            <h3 className="text-lg font-bold text-foreground">{certificate.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 flex-grow">{certificate.description}</p>
            <div className="mt-auto flex justify-end items-center w-full">
              <div className="text-yellow-500 animate-pulse">
                <Info className="h-5 w-5" />
              </div>
            </div>
        </div>
        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-lg overflow-hidden border p-6 flex flex-col justify-center text-center" style={{ transform: "rotateY(180deg)"}}>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.certificates.moreInfo}</h4>
              <p className="text-sm text-muted-foreground">{certificate.backDescription}</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CertificatesPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="mb-12">
            <Button asChild variant="ghost" className="hover:bg-accent">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {translations.certificatesPage.backToHome}
              </Link>
            </Button>
          </div>
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-6xl font-bold">{translations.certificatesPage.title}</h1>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0" aria-hidden="true">
              {translations.certificatesPage.gallery}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {translations.certificatesPage.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCertificates.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
