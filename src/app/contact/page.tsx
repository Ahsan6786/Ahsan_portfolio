"use client";

import React from "react";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Github, Linkedin, Phone, ArrowLeft, Instagram, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Address",
    value: "Maharashtra Pune, 411046",
  },
  {
    icon: <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Contact Number",
    value: "+91 9162248786",
  },
  {
    icon: <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    title: "Email Address",
    value: "ahsanimamkhan06@gmail.com",
  }
];

const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Instagram className="w-5.5 h-5.5" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-5.5 h-5.5" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-5.5 h-5.5" />,
    label: "GitHub",
  },
];

export default function ContactPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

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
        <section className="mb-16 md:mb-20 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.contact.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              CONTACT
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              {translations.contact.subtitle}
            </p>
          </AnimateOnScroll>
        </section>

        {/* Contact Page Grid Elements */}
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Quick Details Cards Grid */}
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {contactDetails.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 p-8 rounded-2xl shadow-xl hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 group text-center relative overflow-hidden"
                >
                  {/* Accent Top Highlight Stripe */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Circular Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-foreground/5 dark:bg-yellow-500/5 border border-border/40 dark:border-yellow-500/15 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-all duration-500 flex items-center justify-center mb-4 shadow-inner">
                    {detail.icon}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-foreground mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-300 mt-1 font-mono">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Social Platforms Row */}
          <AnimateOnScroll>
            <div className="flex justify-center items-center gap-4 mb-8">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 hover:border-yellow-500/35 transition-all duration-300 shadow-md hover:scale-105"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </AnimateOnScroll>
          
          {/* Main Form Capsule */}
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto bg-card/65 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-border dark:border-yellow-500/10 relative overflow-hidden">
              {/* Highlight top stripe */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-600" />
              
              <div className="text-center mb-8 space-y-1.5">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let's Connect</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Drop a message</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </div>
  );
}
