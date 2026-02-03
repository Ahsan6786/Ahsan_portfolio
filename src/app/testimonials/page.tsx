
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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
  {
    name: "Taniya Sana",
    comment: "Ahsan did an exceptional job in bringing my vision to life. He built the website exactly the way I wanted clean, modern, and highly functional. His attention to detail, quick response time, and willingness to accommodate every request truly set him apart. I’m extremely satisfied with the final result and highly recommend Ahsan for anyone looking for a reliable and talented website developer.",
    image: placeholderData.testimonialTaniya,
    linkedin: "https://www.linkedin.com/in/taniyasana/",
  },
];


function TestimonialCard({ testimonial }: { testimonial: (typeof allTestimonials)[0] }) {
  return (
    <Card className="h-full border bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-2xl overflow-visible">
      <CardContent className="p-8 h-full flex flex-col justify-between relative pt-16">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg">
          <Image
            src={testimonial.image.src}
            alt={testimonial.name}
            fill
            sizes="6rem"
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

export default function TestimonialsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button onClick={() => router.back()} variant="ghost" size="icon" className="hover:bg-accent border border-transparent hover:border-border rounded-full">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="sr-only">Back</span>
              </Button>
            </div>
            </AnimateOnScroll>
            <section className="pb-16 md:pb-24 overflow-hidden">
            <AnimateOnScroll>
              <div className="text-center mb-12 relative">
                <h1 className="text-4xl md:text-6xl font-bold">Testimonials</h1>
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words" aria-hidden="true">
                  Feedback
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  What my clients say about my work.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pt-12">
                {allTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </AnimateOnScroll>
            </section>
        </div>
      </div>
    </div>
  );
}
