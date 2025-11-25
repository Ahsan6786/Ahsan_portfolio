"use client";

import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Github, Linkedin, Phone } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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
    }
];

const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Linkedin className="w-6 h-6" />, // Assuming instagram, but using linkedin as it was there
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
  },
];

export default function ContactPage() {
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
            <section id="contact" className="pb-16 md:pb-24 overflow-hidden">
            <AnimateOnScroll>
              <div className="text-center mb-12 relative">
                <h2 className="text-4xl md:text-5xl font-bold">{translations.contact.title}</h2>
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold absolute w-full left-0 top-1/2 -translate-y-1/2 text-foreground/5 z-0 break-words">
                    {translations.contact.title}
                </p>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                  {translations.contact.subtitle}
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 text-center">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4">
                                {detail.icon}
                            </div>
                            <h3 className="font-bold text-lg text-foreground">{detail.title}</h3>
                            <p className="text-muted-foreground">{detail.value}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-6 mb-16">
                    {socialLinks.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={link.label}
                      >
                        {React.cloneElement(link.icon, { className: "w-7 h-7"})}
                      </a>
                    ))}
                </div>
                
                <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl shadow-sm border border-border/20">
                    <h3 className="text-xl font-semibold mb-1 text-center">Send a Message</h3>
                    <p className="text-muted-foreground mb-6 text-sm text-center">Fill out the form below and I'll get back to you as soon as possible.</p>
                    <ContactForm />
                </div>
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
