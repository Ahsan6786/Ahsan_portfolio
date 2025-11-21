
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
        className="bg-card rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col relative"
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
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <div className="w-full h-auto perspective-1000 group">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full cursor-pointer"
        onClick={onClick}
      >
        <div className="bg-card rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4 h-[480px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4 flex-shrink-0">
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
      </motion.div>
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
