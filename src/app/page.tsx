import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
