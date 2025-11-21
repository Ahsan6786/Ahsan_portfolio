"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import React from "react";

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-16">
          <AnimateOnScroll>
            <div className="mb-8">
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="icon"
                className="hover:bg-accent border border-transparent hover:border-border rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
          </AnimateOnScroll>

          <article className="max-w-4xl mx-auto pb-16 md:pb-24">
            <AnimateOnScroll>
              <header className="mb-8 md:mb-12 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </header>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.1s">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-lg">
                <Image
                  src={post.image.src}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint={post.image.aiHint}
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay="0.2s">
              <div
                className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimateOnScroll>
          </article>
        </div>
      </div>
    </div>
  );
}
