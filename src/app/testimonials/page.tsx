"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholderData from '@/lib/placeholder-images.json';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, Github, ExternalLink, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const allTestimonials = [
  {
    name: "Tarique Imam Khan",
    role: "Founder & CEO",
    company: "A1 Farms",
    comment: "Ahsan designed and built the complete digital supply chain ecosystem for A1 Farms. The integration of real-time inventory management has boosted our operational efficiency by over 40%. His technical precision, responsiveness, and dedication are absolutely elite.",
    image: null,
    linkedin: "https://www.linkedin.com/",
    projectUrl: "https://a1farms.in/",
  },
  {
    name: "Harsh Vardhan",
    role: "Managing Director",
    company: "Blingish",
    comment: "Working with Ahsan to bring Blingish online was a phenomenal experience. He captured our brand's quiet luxury theme flawlessly. The customized WhatsApp-based checkout system has streamlined customer inquiries and significantly driven conversions. Pure class.",
    image: null,
    linkedin: "https://www.linkedin.com/",
    projectUrl: "https://www.blingish.in/",
    projectGithub: "https://github.com/Ahsan6786/bling"
  },
  {
    name: "Umme Habiba",
    role: "Founder",
    company: "Portfolio Website",
    comment: "Ahsan immediately understood my requirements and delivered a clean, professional website exactly as needed. His response time and capacity to handle custom design requests made the entire launch process completely stress-free.",
    image: placeholderData.testimonialUmme,
    linkedin: "https://linkedin.com/in/umme-habiba-3b7451271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    projectUrl: "https://ummehabiba-ten.vercel.app/",
    projectGithub: "https://github.com/Ahsan6786/ummehabiba"
  },
  {
    name: "Ziya Murad Khan",
    role: "Creative Lead",
    company: "Personal Showcase",
    comment: "Ahsan is an incredibly intuitive engineer. He grasped exactly what I was looking for with very little explanation and turned around a stunning, pixel-perfect portfolio in record time. Highly recommend his development expertise.",
    image: placeholderData.testimonialZiya,
    linkedin: "https://www.linkedin.com/in/ziyamkhan/",
    projectUrl: "https://ziyamuradkhan.vercel.app/",
    projectGithub: "https://github.com/Ahsan6786/ziyamuradkhan"
  },
  {
    name: "Taniya Sana",
    role: "Executive Director",
    company: "Digital Commerce",
    comment: "Ahsan did an exceptional job in bringing my vision to life. He built the website exactly the way I wanted – clean, modern, and highly functional. His attention to detail, quick response time, and willingness to accommodate every request truly set him apart. I’m extremely satisfied and highly recommend him.",
    image: placeholderData.testimonialTaniya,
    linkedin: "https://www.linkedin.com/in/taniyasana/",
  },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

function TestimonialCard({ testimonial }: { testimonial: (typeof allTestimonials)[0] }) {
  return (
    <div className="bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-2xl p-8 relative pt-16 flex flex-col justify-between h-full shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group">
      
      {/* Top Accent Gold Stripe */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Quote Icon Watermark */}
      <Quote className="absolute right-6 top-6 w-12 h-12 text-yellow-500/5 dark:text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors duration-500 pointer-events-none" />

      {/* Client Profile Avatar / Stylized Initials Monogram */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br from-yellow-500/15 to-amber-600/35 flex items-center justify-center">
        {testimonial.image ? (
          <Image
            src={testimonial.image.src}
            alt={testimonial.name}
            fill
            sizes="6rem"
            className="object-cover"
            data-ai-hint={testimonial.image.aiHint}
          />
        ) : (
          <span className="font-serif font-bold text-2xl text-yellow-600 dark:text-yellow-100 select-none">
            {getInitials(testimonial.name)}
          </span>
        )}
      </div>

      {/* Main Comment Text */}
      <div className="flex-grow flex items-center justify-center py-4">
        <p className="text-muted-foreground dark:text-gray-300 text-center italic text-sm sm:text-base leading-relaxed">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/50 my-4" />

      {/* Author Profile Details */}
      <div className="text-center space-y-1">
        <h4 className="font-serif font-bold text-lg text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
          {testimonial.name}
        </h4>
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          {testimonial.role} &bull; <span className="text-yellow-600 dark:text-yellow-400 font-bold">{testimonial.company}</span>
        </p>
        
        {/* Profile Action Badges */}
        <div className="flex items-center justify-center gap-3 pt-3">
          {testimonial.linkedin && (
            <a 
              href={testimonial.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile" 
              className="text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {testimonial.projectUrl && (
            <a 
              href={testimonial.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Live Project Website" 
              className="text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors p-1"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {testimonial.projectGithub && (
            <a 
              href={testimonial.projectGithub} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Code Repository" 
              className="text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}

export default function TestimonialsPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;
  
  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Navigation Bar */}
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8 flex justify-start items-center">
              <Button 
                onClick={() => router.back()} 
                variant="ghost" 
                size="icon" 
                className="hover:bg-accent border border-transparent hover:border-border rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Page Title */}
        <section className="pb-16 md:pb-24">
          <AnimateOnScroll>
            <div className="text-center mb-16 md:mb-24 relative">
              <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
                Client Testimonials
              </h1>
              <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full" aria-hidden="true">
                FEEDBACK
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
                Real feedback and endorsements from direct product owners and freelance clients.
              </p>
            </div>

            {/* Testimonials Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 max-w-6xl mx-auto pt-16">
              {allTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </AnimateOnScroll>
        </section>

      </div>
    </div>
  );
}
