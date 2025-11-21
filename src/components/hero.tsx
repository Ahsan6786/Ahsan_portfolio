"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Instagram, Linkedin, Github } from "lucide-react";

const heroImagesData = [
    placeholderData.heroImage,
    placeholderData.heroImage2,
    placeholderData.heroImage3,
];

const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-6 h-6" />,
    label: "Github",
  },
];

const Typewriter = ({ text, speed = 50 }: { text: string, speed?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      setDisplayedText(""); 
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => text.substring(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
        }
      }, speed);
  
      return () => clearInterval(intervalId);
    }, [text, speed]);
  
    return <span>{displayedText}</span>;
};


export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations, loading } = useLanguage();

  const heroContent = loading ? [] : [
    {
        greeting: translations.hero.greeting1,
        mainText: translations.hero.mainText1,
        subText: translations.hero.subText1,
    },
    {
        greeting: translations.hero.greeting2,
        mainText: translations.hero.mainText2,
        subText: translations.hero.subText2,
    },
    {
        greeting: translations.hero.greeting3,
        mainText: translations.hero.mainText3,
        subText: translations.hero.subText3,
    },
  ];

  useEffect(() => {
    if (loading) return;
    const content = heroContent[currentIndex];
    const fullText = content.mainText;
    const typeDuration = fullText.length * 50; 
    
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, typeDuration + 3000); // 3-second wait

    return () => clearInterval(interval);
  }, [currentIndex, loading, heroContent]);

  if (loading) return null;

  const currentContent = heroContent[currentIndex];
  const fullText = currentContent.mainText;

  return (
    <section id="home" className="relative flex items-center min-h-[560px] md:min-h-[calc(100vh-80px)] py-12 overflow-hidden">
      <div className="absolute inset-0 md:hidden">
        {heroImagesData.map((image, index) => (
            <Image
                key={index}
                alt="Background"
                src={image.src}
                fill
                className={cn(
                    "object-cover object-center transition-opacity duration-1000 ease-in-out",
                    index === currentIndex ? "opacity-100" : "opacity-0"
                )}
                data-ai-hint={image.aiHint}
                priority={index === 0}
            />
        ))}
        <div className="absolute inset-0 bg-transparent dark:bg-black/40" />
      </div>
      <div className="container relative mx-auto px-4 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimateOnScroll className="text-center md:text-left relative min-h-[250px] md:min-h-[300px] flex flex-col justify-center">
              <div className="w-full">
                <p className="text-lg font-medium mb-2">{currentContent.greeting}</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                  <Typewriter text={fullText} />
                </h1>
                <p className="text-xl md:text-3xl font-light mt-2">{currentContent.subText}</p>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <Link href="#contact">
                    <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">{translations.hero.hireMe}</Button>
                    </Link>
                    <Link href="/projects">
                    <Button size="default" variant="outline" className="font-semibold rounded-full border-white/50 hover:bg-white/10 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base md:border-foreground/50 md:hover:bg-foreground/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">{translations.hero.myWorks}</Button>
                    </Link>
                </div>
                <div className="mt-8 flex justify-center md:justify-start space-x-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
              </div>
          </AnimateOnScroll>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[350px] h-[500px] lg:w-[450px] lg:h-[650px] rounded-lg overflow-hidden dark:shadow-2xl">
              {heroImagesData.map((image, index) => (
                  <Image
                      key={index}
                      alt="Hero Image"
                      src={image.src}
                      fill
                      className={cn(
                          "object-cover object-center transition-opacity duration-1000 ease-in-out",
                          index === currentIndex ? "opacity-100" : "opacity-0"
                      )}
                      data-ai-hint={image.aiHint}
                      priority={index === 0}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
