"use client";

import { Code, Rocket, TrendingUp, ArrowLeft, ArrowRight, Sparkles, ShieldCheck, Smartphone, Tablet, Zap } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ServicesPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  const services = [
    {
      icon: <Code className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: translations.services.service1,
      description: "I build responsive, high-performance websites from the ground up, ensuring they are scalable, secure, and tailored to your unique business needs, from simple landing pages to complex web applications."
    },
    {
      icon: <Rocket className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: translations.services.service2,
      description: "Specializing in dynamic and interactive web applications, I use modern frameworks to create engaging user experiences that are both functional and intuitive, delivering real value to your users."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: translations.services.service3,
      description: "I optimize websites to improve their search engine ranking and load times. Through technical SEO and performance tuning, I help increase your visibility and provide a faster, smoother experience for your audience."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Android App Development",
      description: "Building high-performance, native-like Android applications using React Native and modern mobile frameworks to deliver robust, high-fidelity user experiences."
    },
    {
      icon: <Tablet className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "iOS App Development",
      description: "Crafting premium and highly responsive iOS mobile applications tailored for Apple devices, prioritizing elegant animations, fluid interactions, and native fluid speed."
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Progressive Web App (PWA)",
      description: "Developing installable, high-speed Progressive Web Applications (PWAs) that work offline, load instantly, and bring the power of mobile applications straight to any modern web browser."
    },
  ];

  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[15%] left-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Back Navigation Bar */}
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8 flex justify-start items-center">
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="icon"
                className="hover:bg-accent border border-transparent hover:border-border rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Dynamic Page Header */}
        <section className="mb-16 md:mb-24 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.services.title}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              OFFERING
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              Expert digital solutions and technical craftsmanship
            </p>
          </AnimateOnScroll>
        </section>

        {/* Services Showcase Cards Grid */}
        <div className="max-w-6xl mx-auto space-y-16">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 p-8 rounded-2xl flex flex-col items-center justify-between shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group h-full relative overflow-hidden"
                >
                  {/* Glowing border highlight stripe */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex flex-col items-center">
                    {/* Platform Icon Container */}
                    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-foreground/5 border border-border/40 dark:border-white/5 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-all duration-500 shadow-inner">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold tracking-wide text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 text-center">
                      {service.title}
                    </h3>

                    {/* Split line */}
                    <div className="w-12 h-[2px] bg-yellow-500/25 group-hover:bg-yellow-500/80 transition-colors duration-500 my-4"></div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground dark:text-gray-300 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Luxury Call-To-Action Box */}
          <AnimateOnScroll>
            <div className="relative p-8 md:p-12 bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group max-w-4xl mx-auto">
              
              {/* Internal abstract glowing elements */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-yellow-500/5 blur-[80px] pointer-events-none" />

              <div className="relative z-10 space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let's collaborate</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Have an ambitious project in mind?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
                  Let's partner up to construct high-performance digital experiences that will delight your users.
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-8 py-6 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group/btn">
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </div>
  );
}
