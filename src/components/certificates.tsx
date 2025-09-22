"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const certificates = [
  {
    title: "Python Programming",
    description: "This certificate validates my proficiency in Python, covering fundamental to advanced concepts of the language.",
    image: placeholderData.certificate1,
    pdfLink: "/certificates/c1.pdf" 
  },
  {
    title: "Advanced React",
    description: "Completed an in-depth course on advanced React patterns, hooks, and state management.",
    image: placeholderData.certificate2,
    pdfLink: "/certificates/c2.pdf"
  },
  {
    title: "Cloud Fundamentals",
    description: "Certified in cloud computing fundamentals, including core concepts of IaaS, PaaS, and SaaS.",
    image: placeholderData.certificate3,
    pdfLink: "/certificates/c3.pdf"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Proficiency in fundamental data structures and algorithms, essential for efficient problem-solving.",
    image: placeholderData.certificate4,
    pdfLink: "/certificates/c4.pdf"
  },
  {
    title: "UI/UX Design Principles",
    description: "A comprehensive certification on user-centered design principles and creating intuitive interfaces.",
    image: placeholderData.certificate5,
    pdfLink: "/certificates/c5.pdf"
  },
];


export function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl md:text-6xl font-bold">My Certificates</h2>
            <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Certificates
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my professional certifications and qualifications.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {certificates.map((certificate, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-[400px] md:h-[500px] w-full mb-6">
                        <Image
                          src={certificate.image.src}
                          alt={certificate.title}
                          fill
                          className="object-contain rounded-lg"
                          data-ai-hint={certificate.image.aiHint}
                        />
                      </div>
                      <h3 className="text-2xl font-bold">{certificate.title}</h3>
                      <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto mb-4">
                        {certificate.description}
                      </p>
                      <Button asChild>
                        <a href={certificate.pdfLink} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
