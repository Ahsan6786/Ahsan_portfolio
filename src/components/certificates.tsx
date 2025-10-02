"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const certificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model, Smart India Hackathon 2025.",
    backDescription: "This achievement highlights strong teamwork, creative thinking, and the ability to develop practical solutions under pressure in a high-stakes national competition.",
    image: placeholderData.certificateSIH,
  },
];

function CertificateCard({ certificate }: { certificate: (typeof certificates)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="w-full h-[480px] perspective-1000 md:col-start-2">
      <motion.div
        onTap={handleTap}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        data-style="preserve-3d"
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-background rounded-lg overflow-hidden group border hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4">
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
        <div className="absolute w-full h-full backface-hidden bg-background rounded-lg overflow-hidden border p-6 flex flex-col justify-center text-center" style={{ transform: "rotateY(180deg)"}}>
            <div>
              <h4 className="font-bold text-lg mb-2">More Info</h4>
              <p className="text-sm text-muted-foreground">{certificate.backDescription}</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}


export function Certificates() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">My Certificates</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Certificates
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my professional certifications and qualifications. Tap to learn more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/certificates">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View All Certificates
              </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
