"use client";

import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';

const certificateImage = placeholderData.certificate1;

export function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-card">
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
        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
            <Image
                src={certificateImage.src}
                alt="Python Programming Certificate"
                fill
                className="object-contain"
                data-ai-hint={certificateImage.aiHint}
            />
        </div>
        <div className="text-center mt-8">
            <h3 className="text-2xl font-bold">Python Programming</h3>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                This certificate validates my proficiency in Python, covering fundamental to advanced concepts of the language.
            </p>
        </div>
      </div>
    </section>
  );
}
