"use client";

import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import placeholderData from '@/lib/placeholder-images.json';
import { MapPin, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const contactImageData = placeholderData.contactImage;

const contactDetails = [
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "Address",
    value: "Maharashtra Pune, 411046",
  },
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "Contact Number",
    value: "+91 9162248786",
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Email Address",
    value: "ahsanimamkhan06@gmail.com",
  },
];

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

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-bold">Contact Me</h2>
            <p className="text-6xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Contact
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's talk. I am here to help you.
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
        </div>
      </AnimateOnScroll>
    </section>
  );
}
