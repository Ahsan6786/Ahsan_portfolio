"use client";

import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Instagram className="w-8 h-8 text-primary" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-8 h-8 text-primary" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-8 h-8 text-primary" />,
    label: "Github",
  },
];

export default function ContactPage() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  const contactDetails = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: translations.contact.address,
      value: "Maharashtra Pune, 411046",
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: translations.contact.contactNumber,
      value: "+91 9162248786",
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: translations.contact.emailAddress,
      value: "ahsanimamkhan06@gmail.com",
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
            </AnimateOnScroll>
            <section id="contact" className="pb-16 md:pb-32 overflow-hidden">
            <AnimateOnScroll>
              <div className="text-center mb-12 relative">
                <h2 className="text-4xl md:text-6xl font-bold">{translations.contact.title}</h2>
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                  {translations.contact.title}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {translations.contact.subtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background mx-auto mb-4">
                        {detail.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{detail.title}</h3>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-6 mb-16">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-background hover:bg-primary/10 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <div className="max-w-2xl mx-auto">
                  <ContactForm />
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
