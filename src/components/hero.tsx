"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import placeholderData from '@/lib/placeholder-images.json';

const heroImagesData = [
    placeholderData.heroImage,
    placeholderData.heroImage2,
    placeholderData.heroImage3,
];

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];
  const isThirdImage = currentIndex === 2;

  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-80px)] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 md:hidden">
            {heroImagesData.map((image, index) => (
                <Image
                    key={index}
                    alt="Background"
                    src={image.src}
                    fill
                    className={cn(
                        "object-cover object-center transition-opacity duration-1000",
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    )}
                    data-ai-hint={image.aiHint}
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                />
            ))}
            <div className={cn(
                "absolute inset-0",
                 "bg-gradient-to-t from-background via-transparent to-transparent"
            )} />
        </div>
      <div className="container relative mx-auto px-4 md:px-12 z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={cn(
              "text-center md:text-left transition-all duration-500",
              isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          )}>
            <p className="text-lg font-medium mb-2">{currentContent.greeting}</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
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
            <p className="text-2xl md:text-3xl font-light mt-2">{currentContent.subText}</p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <Link href="#contact">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base">HIRE ME</Button>
              </Link>
              <Link href="#projects">
                <Button size="lg" variant="outline" className="font-semibold rounded-full border-white/50 hover:bg-white/10 px-8 py-6 text-base md:border-foreground/50 md:hover:bg-foreground/10">MY WORKS</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[600px] w-full">
            {heroImagesData.map((image, index) => (
                <Image
                    key={index}
                    alt="Hero Image"
                    src={image.src}
                    fill
                    className={cn(
                        "object-cover object-center rounded-lg transition-opacity duration-1000",
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    )}
                    data-ai-hint={image.aiHint}
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                />
            ))}
             <div className={cn(
                "absolute inset-0 rounded-lg",
                isThirdImage 
                ? "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,hsl(var(--background))_100%)]" 
                : "bg-gradient-to-t from-background via-transparent to-transparent"
            )} />
          </div>
        </div>
      </div>
    </section>
  );
}
