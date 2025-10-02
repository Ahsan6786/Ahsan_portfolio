"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info } from "lucide-react";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const allCertificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model, Smart India Hackathon 2025.",
    backDescription: "Successfully advanced through two rigorous stages of the Smart India Hackathon, a national competition that promotes innovation and problem-solving. This achievement highlights strong teamwork, creative thinking, and the ability to develop practical solutions under pressure.",
    image: placeholderData.certificateSIH,
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

const Medal = ({ ctx, size }: { ctx: CanvasRenderingContext2D, size: number }) => {
  const S = size * 0.8;
  ctx.beginPath();
  ctx.moveTo(-S / 2, -S / 8);
  ctx.lineTo(S / 2, -S / 8);
  ctx.lineTo(0, S / 2.5);
  ctx.closePath();
  ctx.fillStyle = '#4A90E2';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, S / 2.5 + S / 2.5, S / 2.5, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD700';
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(0, S / 2.5 + S / 2.5, S / 4, 0, Math.PI * 2);
  ctx.fillStyle = '#F5A623';
  ctx.fill();
  
  ctx.font = `${S / 4}px Arial`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("1", 0, S / 2.5 + S / 2.5);
};

const CertificateShape = ({ ctx, size }: { ctx: CanvasRenderingContext2D, size: number }) => {
  const S = size;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(-S/2, -S/3, S, S * 2/3);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "gold";
  ctx.font = `${S / 5}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("CERT", 0, -S/12);
};

const confettiShapes: ((props: { ctx: CanvasRenderingContext2D; size: number }) => void)[] = [
  ({ ctx, size }) => Medal({ ctx, size }),
  ({ ctx, size }) => CertificateShape({ ctx, size }),
];

function CertificateCard({ certificate }: { certificate: (typeof allCertificates)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

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
              <h4 className="font-bold text-lg mb-2">More Info</h4>
              <p className="text-sm text-muted-foreground">{certificate.backDescription}</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CertificatesPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Auto-play confetti on load
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 8000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const drawShape = (ctx: CanvasRenderingContext2D) => {
    const size = 12; 
    const shapeFunc = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
    shapeFunc({ ctx, size });
  };
  
  return (
    <div className="bg-background min-h-screen">
       {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.08}
          drawShape={drawShape}
        />
      )}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="mb-12">
            <Button asChild variant="outline">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-6xl font-bold">My Certificates</h1>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0" aria-hidden="true">
              Gallery
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A complete showcase of my professional certifications and qualifications. Tap any certificate to learn more.
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
