
"use client";

import { Code, Rocket, TrendingUp } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import Link from "next/link";

export function Services() {
  const { translations, loading } = useLanguage();

  if (loading) return null;

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: translations.services.service1,
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: translations.services.service2,
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: translations.services.service3,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">{translations.services.title}</h2>
            <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              {translations.services.title}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 text-center rounded-2xl flex flex-col items-center justify-start shadow-md hover:shadow-xl transition-shadow h-full"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-background">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-widest">
                  {service.title}
                </h3>
                <div className="w-10 h-1 bg-primary mt-3 mb-4"></div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link href="/services">
                <Button size="default" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse">
                  Explore Services
                </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
