import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
