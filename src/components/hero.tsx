import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-portrait");

  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="overflow-hidden">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none animate-slide-in [animation-delay:0.1s]">
                  Hi, I'm Ahsan
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="font-headline text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-foreground animate-slide-in [animation-delay:0.2s]">
                  A Creative Full-Stack Developer
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-slide-in [animation-delay:0.3s]">
                  I build beautiful, responsive, and performant web applications with a focus on user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-in [animation-delay:0.4s]">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#skills">
                  View My Skills
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="animate-zoom-in-fade [animation-delay:0.2s] mx-auto">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={600}
                className="aspect-square overflow-hidden rounded-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
