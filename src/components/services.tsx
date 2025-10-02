"use client";

import { Code, Rocket, TrendingUp } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";

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
    <section id="services" className="py-16 md:py-32 bg-background">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">{translations.services.title}</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              {translations.services.title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {translations.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 text-center rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-background">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-widest">
                  {service.title}
                </h3>
                <div className="w-10 h-1 bg-primary mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
