"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const heroContent = [
  {
    greeting: "HELLO",
    mainText: ["I am ", "Ahsan", "", ""],
    subText: "a web designer",
    image: "/hero-image-1.jpg",
    aiHint: "man portrait",
  },
  {
    greeting: "YEP!",
    mainText: ["I'm a ", "creative mind", " ready to ", "build"],
    subText: "Crafting Digital Experiences",
    image: "https://picsum.photos/seed/clark2/800/800",
    aiHint: "abstract art",
  },
  {
    greeting: "GO!",
    mainText: ["Let's create", " something amazing", " together"],
    subText: "Your Vision, My Code",
    image: "https://picsum.photos/seed/clark3/800/800",
    aiHint: "teamwork concept",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      setTextKey(prev => prev + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[activeIndex];

  return (
    <section id="home" className="flex items-center py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium mb-2 slide-in-animation" key={`${textKey}-greeting`}>{currentContent.greeting}</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight" key={`${textKey}-main`}>
              {currentContent.mainText.map((text, index) => (
                <span
                  key={index}
                  className={cn(
                    "bg-gradient-to-r from-primary to-primary bg-no-repeat bg-clip-text",
                     index === 1 ? 'text-pan-animation' : 'text-foreground'
                  )}
                  style={index === 1 ? { backgroundSize: '0% 100%'} : {}}
                >
                  {text}
                </span>
              ))}
            </h2>
            <p className="text-2xl md:text-3xl font-light mt-2 slide-in-animation" key={`${textKey}-subtext`}>{currentContent.subText}</p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4 slide-in-animation" key={`${textKey}-buttons`}>
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">HIRE ME</Button>
              <Button size="lg" variant="outline" className="font-semibold rounded-full border-foreground/50 hover:bg-foreground/10 px-8 py-6 text-base">MY WORKS</Button>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {heroContent.map((content, index) => (
              <Image
                key={index}
                alt="Portrait of Clark Thompson"
                className={cn(
                  "rounded-lg object-cover transition-opacity duration-1000 absolute inset-0",
                  { "opacity-100": index === activeIndex, "opacity-0": index !== activeIndex }
                )}
                src={content.image}
                width={800}
                height={800}
                data-ai-hint={content.aiHint}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
