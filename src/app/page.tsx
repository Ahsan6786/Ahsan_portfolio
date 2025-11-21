"use client";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Certificates } from "@/components/certificates";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Blog } from "@/components/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <Certificates />
      <Contact />
    </>
  );
}
