
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { useLanguage } from "@/contexts/language-context";

const featuredPosts = blogPosts.slice(0, 1);

export function Blog() {
  const { translations, loading } = useLanguage();
  if (loading) return null;

  return (
    <section id="blog" className="py-16 md:py-32 bg-background overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold">
              {translations.blog?.title || "From the Blog"}
            </h2>
            <p className="text-5xl sm:text-7xl md:text-8xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 text-foreground/5 z-0 w-full text-center break-words">
              {translations.blog?.backgroundTitle || "Articles"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {featuredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <div className="bg-card rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image.src}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.image.aiHint}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">{post.description}</p>
                    <div className="mt-auto">
                      <Button variant="default" className="rounded-full group-hover:bg-primary/90">
                        {translations.blog?.readMore || "Read More"}
                        <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length > 1 && (
            <div className="text-center mt-12">
                <Button
                size="default"
                asChild
                className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse"
                >
                <Link href="/blog">{translations.blog?.viewAll || "View All Posts"}</Link>
                </Button>
            </div>
          )}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
