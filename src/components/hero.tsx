import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <p className="text-lg font-medium mb-2">Hello, I'm</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Ahsan Imam Khan</h1>
                    <p className="text-2xl md:text-3xl font-light mt-2 text-primary">Software Developer</p>
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto md:mx-0">
                        Passionate software developer with expertise in building modern web applications. Dedicated to creating elegant, efficient, and user-friendly solutions to complex problems.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <Button asChild size="lg">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                    <Image
                        alt="Portrait of Ahsan Imam Khan"
                        className="rounded-full object-cover"
                        src="https://picsum.photos/seed/ahsan-imam-khan/600/600"
                        fill
                        data-ai-hint="man portrait"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
