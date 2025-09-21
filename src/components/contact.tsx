"use client";

import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import placeholderData from '@/lib/placeholder-images.json';
import { MapPin, Mail, Phone } from "lucide-react";
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

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-5xl md:text-6xl font-bold">Contact Me</h2>
            <p className="text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0">
              Contact
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's talk. I am here to help you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
          <div className="max-w-2xl mx-auto">
              <ContactForm />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
