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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
             <p className="text-lg text-muted-foreground mb-6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-lg">
                <p><span className="font-bold">Name:</span> Clark Thompson</p>
                <p><span className="font-bold">Date of birth:</span> January 01, 1987</p>
                <p><span className="font-bold">Address:</span> San Francisco CA 97987 USA</p>
                <p><span className="font-bold">Zip code:</span> 1000</p>
                <p><span className="font-bold">Email:</span> clarkthomp@gmail.com</p>
                <p><span className="font-bold">Phone:</span> +1-2234-5678-9-0</p>
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
