"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "./scroll-reveal";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    quote: "Ahsan's work is exceptional. He delivered a high-quality product on time and was a pleasure to work with. His attention to detail and problem-solving skills are top-notch.",
  },
  {
    id: "testimonial-2",
    name: "John Smith",
    title: "Project Manager, Tech Solutions",
    quote: "I was impressed by Ahsan's technical expertise and commitment to our project's success. He transformed our vision into a functional and elegant reality.",
  },
  {
    id: "testimonial-3",
    name: "Emily White",
    title: "Lead Designer, Creative Co.",
    quote: "Working with Ahsan was a seamless experience. He has a great eye for design and was able to translate our complex design mockups into a pixel-perfect, responsive website.",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      api?.scrollNext();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (!api) return;
    
    startAutoplay();
    api.on("pointerDown", stopAutoplay);
    api.on("select", startAutoplay);

    return () => {
      stopAutoplay();
      api.off("pointerDown", stopAutoplay);
      api.off("select", startAutoplay);
    };
  }, [api]);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                What My Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I take pride in building strong relationships and delivering outstanding results.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto pt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          <p className="text-lg font-medium italic text-foreground mb-4">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            {image && (
                              <Avatar>
                                <AvatarImage
                                  src={image.imageUrl}
                                  alt={image.description}
                                  data-ai-hint={image.imageHint}
                                />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            )}
                            <div>
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
