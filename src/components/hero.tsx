import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="container mx-auto px-4 md:px-6">
        <div className="md:flex md:items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <p className="text-lg font-medium mb-2">HELLO!</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">I'm <span className="text-primary">Clark Thompson</span></h2>
                <p className="text-2xl md:text-3xl font-light mt-2">A Freelance Web Designer</p>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <Button className="bg-primary text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors h-auto">HIRE ME</Button>
                    <Button variant="outline" className="font-semibold py-3 px-8 rounded-full h-auto">MY WORKS</Button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image
                    alt="Portrait of Clark Thompson wearing a hat and glasses"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                    src="https://picsum.photos/seed/clark-thompson/600/600"
                    width={600}
                    height={600}
                    data-ai-hint="man portrait"
                />
            </div>
        </div>
    </div>
  );
}
