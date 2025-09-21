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
    },
    {
        greeting: "YEP!",
        mainText: ["I'm a ", "creative mind", " ready to ", "build"],
        subText: "Crafting Digital Experiences",
    },
    {
        greeting: "GO!",
        mainText: ["Let's create", " something amazing", " together"],
        subText: "Your Vision, My Code",
    },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
            setIsAnimating(false);
        }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  return (
    <section id="home" className="relative flex items-center min-h-[calc(100vh-80px)] md:min-h-0 py-20 md:py-32 overflow-hidden">
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="w-full">
          <div className={`text-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg font-medium mb-2 slide-in-animation">{currentContent.greeting}</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              {currentContent.mainText.map((text, index) => (
                <span
                  key={index}
                  className={cn(
                    "bg-gradient-to-r from-primary to-primary bg-no-repeat bg-clip-text",
                     index === 1 ? 'text-pan-animation' : index % 2 === 0 ? 'text-foreground' : ''
                  )}
                  style={index === 1 ? { backgroundSize: '0% 100%'} : {}}
                >
                  {text}
                </span>
              ))}
            </h2>
            <p className="text-2xl md:text-3xl font-light mt-2 slide-in-animation">{currentContent.subText}</p>
            <div className="mt-8 flex justify-center space-x-4 slide-in-animation">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">HIRE ME</Button>
              <Button size="lg" variant="outline" className="font-semibold rounded-full border-white/50 hover:bg-white/10 px-8 py-6 text-base md:border-foreground/50 md:hover:bg-foreground/10">MY WORKS</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
