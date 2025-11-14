"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Certificates } from "@/components/certificates";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="overflow-x-hidden">
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Testimonials />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
