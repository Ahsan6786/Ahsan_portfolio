"use client";

import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const certificates = [
  {
    title: "Python Programming",
    description: "This certificate validates my proficiency in Python programming, covering fundamental to advanced concepts.",
    image: placeholderData.certificate1,
  },
  {
    title: "Personal and Financial Planning",
    description: "Awarded for completing a course on personal and financial planning, covering budgeting, investing, and financial literacy.",
    image: placeholderData.certificate2,
  },
  {
    title: "Social Emotional Learning",
    description: "Demonstrates a strong understanding of social and emotional intelligence, including self-awareness and relationship skills.",
    image: placeholderData.certificate3,
  },
  {
    title: "Critical Thinking and Problem Solving",
    description: "Recognizes my skills in critical thinking and problem-solving, essential for analyzing complex challenges and finding effective solutions.",
    image: placeholderData.certificate4,
  },
  {
    title: "Teamwork and Collaboration",
    description: "Showcases my ability to work effectively in a team, emphasizing communication, collaboration, and shared goals.",
    image: placeholderData.certificate5,
  },
  {
    title: "New Certificate",
    description: "A new achievement to showcase my skills and dedication.",
    image: placeholderData.certificate6,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="bg-background p-4 rounded-lg shadow-lg group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                  <Image
                    src={certificate.image.src}
                    alt={certificate.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={certificate.image.aiHint}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-foreground">{certificate.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
