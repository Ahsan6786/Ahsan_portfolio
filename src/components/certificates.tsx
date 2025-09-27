"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Smart India Hackathon 2025",
    description: "Cleared 2 rounds of the world's biggest open innovation model, Smart India Hackathon 2025.",
    image: placeholderData.certificateSIH,
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">My Certificates</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Certificates
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my professional certifications and qualifications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-background p-4 rounded-lg shadow-lg group flex flex-col items-center text-center md:col-start-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4">
                  <Image
                    src={certificate.image.src}
                    alt={certificate.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={certificate.image.aiHint}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{certificate.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-grow">{certificate.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/certificates">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">
                View All Certificates
              </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
