"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const testimonials = [
  {
    name: "Umme Habiba",
    comment: "Ahsan immediately understood my requirements and delivered a clean, professional website exactly as needed.",
    image: placeholderData.testimonialUmme,
    linkedin: "https://linkedin.com/in/umme-habiba-3b7451271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    projectUrl: "https://ummehabiba-ten.vercel.app/",
    projectGithub: "https://github.com/Ahsan6786/ummehabiba"
  },
  {
    name: "Ziya Murad Khan",
    comment: "Ahsan understood what I needed with very little conversation and delivered exactly the website I had in mind.",
    image: placeholderData.testimonialZiya,
    linkedin: "https://www.linkedin.com/in/ziyamkhan/",
    projectUrl: "https://ziyamuradkhan.vercel.app/",
    projectGithub: "https://github.com/Ahsan6786/ziyamuradkhan"
  },
  {
    name: "Taniya Sana",
    comment: "Ahsan did an exceptional job in bringing my vision to life. He built the website exactly the way I wanted clean, modern, and highly functional. His attention to detail, quick response time, and willingness to accommodate every request truly set him apart. I’m extremely satisfied with the final result and highly recommend Ahsan for anyone looking for a reliable and talented website developer.",
    image: placeholderData.testimonialTaniya,
    linkedin: "https://www.linkedin.com/in/taniyasana/",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
      <Card className="h-full border bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-2xl overflow-visible">
        <CardContent className="p-8 h-full flex flex-col justify-between relative pt-16">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <Image
              src={testimonial.image.src}
              alt={testimonial.name}
              fill
              className="object-cover"
              data-ai-hint={testimonial.image.aiHint}
            />
          </div>
          <div className="text-center">
              <h4 className="font-bold text-xl">{testimonial.name}</h4>
              <div className="flex items-center justify-center gap-3 mt-2">
                  {testimonial.linkedin && (
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {testimonial.projectUrl && (
                    <a href={testimonial.projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Project Website" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {testimonial.projectGithub && (
                    <a href={testimonial.projectGithub} target="_blank" rel="noopener noreferrer" aria-label="Project GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
              </div>
          </div>
          <p className="text-muted-foreground text-center my-6 italic">"{testimonial.comment}"</p>
        </CardContent>
      </Card>
    );
  }

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">Testimonials</h2>
            <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
              Feedback
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              What my clients say about my work.
            </p>
          </div>

          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-2xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full pt-12">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  View All Testimonials
                </Button>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
