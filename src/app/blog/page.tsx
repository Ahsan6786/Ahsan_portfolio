"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  const { translations, loading } = useLanguage();
  const router = useRouter();

  if (loading) return null;

  return (
    <div className="bg-background min-h-screen relative overflow-hidden pb-24">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Navigation Bar */}
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

        {/* Page Title */}
        <section className="mb-16 md:mb-24 text-center relative">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent">
              {translations.blog?.title || "From the Blog"}
            </h1>
            <p className="text-6xl sm:text-8xl md:text-9xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 z-0 select-none break-words w-full">
              ARTICLES
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-xl mx-auto tracking-wide uppercase font-mono">
              {translations.blog?.subtitle || "Sharing insights on web development, ethics, and engineering journeys."}
            </p>
          </AnimateOnScroll>
        </section>

        {/* Blog Post Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group h-full flex">
                  <div className="bg-card/60 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-2xl overflow-hidden flex flex-col h-full shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group relative w-full">
                    
                    {/* Glowing Accent Stripe */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                    {/* Image Panel */}
                    <div className="relative aspect-video w-full overflow-hidden bg-foreground/5">
                      <Image
                        src={post.image.src}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={post.image.aiHint}
                      />
                      {/* Reading time top badge overlay */}
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-background/85 backdrop-blur border border-border/50 text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded-full shadow-md text-foreground">
                        <Clock className="w-3 h-3 text-yellow-500" />
                        <span>{post.readingTime || "3 min"}</span>
                      </div>
                    </div>

                    {/* Text content details */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      
                      {/* Author & Date metadata */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground border-b border-border/40 pb-3">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-yellow-500" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="space-y-2 flex-grow">
                        <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      {/* Luxury Action Row */}
                      <div className="pt-2">
                        <Button 
                          variant="ghost" 
                          className="rounded-full p-0 h-auto hover:bg-transparent text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 font-semibold text-sm transition-colors duration-300 flex items-center gap-2"
                        >
                          <span>{translations.blog?.readMore || "Read More"}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Button>
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </div>
  );
}
