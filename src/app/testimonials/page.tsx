"use client";

import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Github, ExternalLink, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const allTestimonials = [
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
];


function TestimonialCard({ testimonial }: { testimonial: (typeof allTestimonials)[0] }) {
  return (
    <Card className="h-full border-2 border-primary/20 bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div>
          <Quote className="w-8 h-8 text-primary mb-4" />
          <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.comment}&quot;</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 relative">
              <Image
                src={testimonial.image.src}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
                data-ai-hint={testimonial.image.aiHint}
              />
            </div>
            <div>
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={testimonial.projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Project Website" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
                {testimonial.projectGithub && (
                    <a href={testimonial.projectGithub} target="_blank" rel="noopener noreferrer" aria-label="Project GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                    </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;
  
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
            <div className="pb-16 md:pb-24">
              <div className="text-center mb-12 relative">
                <h1 className="text-4xl md:text-6xl font-bold">Testimonials</h1>
                <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0" aria-hidden="true">
                  Feedback
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  What my clients say about my work.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {allTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
