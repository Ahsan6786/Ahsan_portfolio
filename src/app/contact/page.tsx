"use client";

import { ContactForm } from "@/components/contact-form";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:ahsanimamkhan06@gmail.com",
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-4 h-4" />,
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
              <div className="text-center mb-12">
                <span className="bg-primary/10 text-primary font-semibold rounded-full px-4 py-1.5 text-sm">
                  {translations.contact.getInTouch}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">{translations.contact.title}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {translations.contact.subtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/20">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{translations.contact.emailAddress}</h3>
                                <p className="text-muted-foreground">ahsanimamkhan06@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/20">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{translations.contact.address}</h3>
                                <p className="text-muted-foreground">Maharashtra Pune, 411046</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/20">
                        <h3 className="font-semibold text-lg mb-4">Connect on Social Media</h3>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((link) => (
                              <Button variant="outline" size="sm" asChild key={link.label}>
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1"
                                >
                                  {link.icon}
                                  <span>{link.label}</span>
                                </a>
                              </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-3 bg-card p-8 rounded-2xl shadow-sm border border-border/20">
                    <h3 className="text-xl font-semibold mb-1">Send a Message</h3>
                    <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
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
