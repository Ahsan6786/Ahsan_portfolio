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
          <div className="relative w-full max-w-sm mx-auto aspect-square md:max-w-none">
            <Image
              alt="About Me Image"
              className="rounded-lg object-cover"
              src={aboutImageData.src}
              fill
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
             <p className="text-lg text-muted-foreground mb-6">Passionate developer crafting digital experiences with precision and creativity</p>
             <p className="text-lg text-muted-foreground mb-6">I am a B.Tech Computer Science student at MIT-WPU. I am passionate about coding, exploring new technologies, and turning ideas into real-world applications.</p>
             <p className="text-lg text-muted-foreground mb-6">I love collaborating on projects that challenge me to grow and innovate. When I'm not coding, you can find me exploring new technologies and continuously improving my skills.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-lg">
                <p><span className="font-bold text-foreground">Name:</span> <span className="text-muted-foreground">Ahsan Imam Khan</span></p>
                <p><span className="font-bold text-foreground">Email:</span> <span className="text-muted-foreground">ahsanimamkhan06@gmail.com</span></p>
            </div>
            <p className="text-2xl text-primary font-bold mb-6">6 Projects complete</p>
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">
              HIRE ME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
