"use client";

import { Search, Lightbulb, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "WEB DESIGN",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "SEO",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    title: "WEB DEVELOPER",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl md:text-6xl font-bold">Services</h2>
          <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
            Services
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
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
              <h3 className="text-lg font-bold uppercase tracking-widest">
                {service.title}
              </h3>
              <div className="w-10 h-1 bg-primary mt-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
