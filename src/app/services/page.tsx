"use client";

import { Code, Rocket, TrendingUp, ArrowLeft } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function ServicesPage() {
  const { translations, loading } = useLanguage();

  if (loading) return null;

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: translations.services.service1,
      description: "I build responsive, high-performance websites from the ground up, ensuring they are scalable, secure, and tailored to your unique business needs, from simple landing pages to complex web applications."
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: translations.services.service2,
      description: "Specializing in dynamic and interactive web applications, I use modern frameworks to create engaging user experiences that are both functional and intuitive, delivering real value to your users."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: translations.services.service3,
      description: "I optimize websites to improve their search engine ranking and load times. Through technical SEO and performance tuning, I help increase your visibility and provide a faster, smoother experience for your audience."
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-16 md:pt-24">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button asChild variant="ghost" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                <Link href="/" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {translations.certificatesPage.backToHome}
                </Link>
              </Button>
            </div>
            <section id="services" className="pb-16 md:pb-32">
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
                    className="bg-card p-8 text-center rounded-lg flex flex-col items-center justify-start hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-background">
                      {service.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-widest">
                      {service.title}
                    </h3>
                    <div className="w-10 h-1 bg-primary mt-3 mb-4"></div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
