"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-1 gap-10 md:gap-20 items-center">
            <div className="relative text-center">
              <div className="relative mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
                <p className="text-6xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full text-center">
                  About
                </p>
              </div>
              <p className="text-lg"><span className="font-bold text-primary">Ahsan Imam Khan</span></p>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">Passionate developer crafting digital experiences with precision and creativity</p>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">I am a B.Tech Computer Science student at MIT-WPU. I am passionate about coding, exploring new technologies, and turning ideas into real-world applications.</p>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">I love collaborating on projects that challenge me to grow and innovate. When I'm not coding, you can find me exploring new technologies and continuously improving my skills.</p>
              <p className="text-2xl text-primary font-bold mb-6">6 Projects complete</p>
              <Link href="#contact">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">
                  HIRE ME
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
