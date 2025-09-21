"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholderData from '@/lib/placeholder-images.json';

const aboutImageData = placeholderData.aboutImage;

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              alt="About Me Image"
              className="rounded-lg object-cover"
              src={aboutImageData.src}
              width={600}
              height={600}
              data-ai-hint={aboutImageData.aiHint}
            />
          </div>
          <div className="relative text-center md:text-left">
            <div className="relative mb-4">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-6xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 md:-left-4 text-foreground/5 z-0 w-full text-center md:text-left">
                About
              </p>
            </div>
             <p className="text-lg text-muted-foreground mb-6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-lg">
                <p><span className="font-bold text-foreground">Name:</span> <span className="text-muted-foreground">Ahsan Imam Khan</span></p>
                <p><span className="font-bold text-foreground">Date of birth:</span> <span className="text-muted-foreground">September 16, 2005</span></p>
                <p><span className="font-bold text-foreground">Address:</span> <span className="text-muted-foreground">Maharashtra Pune</span></p>
                <p><span className="font-bold text-foreground">Zip code:</span> <span className="text-muted-foreground">411046</span></p>
                <p><span className="font-bold text-foreground">Email:</span> <span className="text-muted-foreground">ahsanimamkhan06@gmail.com</span></p>
                <p><span className="font-bold text-foreground">Phone:</span> <span className="text-muted-foreground">+91 9162248786</span></p>
            </div>
            <p className="text-2xl text-primary font-bold mb-6">120 Projects complete</p>
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">
              HIRE ME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
