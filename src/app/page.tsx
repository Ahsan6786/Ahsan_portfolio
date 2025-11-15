"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Certificates } from "@/components/certificates";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Certificates />
      <Contact />
    </>
  );
}
