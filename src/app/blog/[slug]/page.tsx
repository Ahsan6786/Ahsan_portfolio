"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/lib/blog-posts";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Share2, Languages, Loader, Clock, Calendar, Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-context";

const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'fr', name: 'French' },
];

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const slug = params.slug as string;
  
  const { translations, setLanguage, loading: langLoading } = useLanguage();
  
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (langLoading) {
      return;
    }

    const defaultPost = blogPosts.find((p) => p.slug === slug);

    if (!defaultPost) {
      setIsLoading(false);
      return;
    }
    
    const translatedPostData = translations.blogPosts?.[slug];

    if (translatedPostData) {
      setPost({
        ...defaultPost,
        title: translatedPostData.title || defaultPost.title,
        description: translatedPostData.description || defaultPost.description,
      });
      setContent(translatedPostData.content || defaultPost.content);
    } else {
      setPost(defaultPost);
      setContent(defaultPost.content);
    }
    setIsLoading(false);

  }, [slug, langLoading, translations.blogPosts]);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader className="w-8 h-8 animate-spin text-yellow-500" />
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.description,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (err) {
      console.log("Share failed, falling back to clipboard:", err);
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "The post URL has been copied to your clipboard.",
        });
      } catch (copyErr) {
        console.error("Failed to copy to clipboard:", copyErr);
        toast({
          title: "Error",
          description: "Could not share or copy the link.",
          variant: "destructive",
        });
      }
    }
  };
  
  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden pb-24">
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

        {/* Article Reading View Container */}
        <article className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-card/65 backdrop-blur-xl border border-border dark:border-yellow-500/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Gold Accent Stripe */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-yellow-500 to-amber-600" />

              {/* Editorial Header */}
              <header className="mb-10 text-center space-y-6">
                
                {/* Topic Badge */}
                <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Editorial Thought</span>
                </div>

                {/* Main Article Title */}
                <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-wide bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 dark:from-white dark:via-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent leading-tight">
                  {post.title}
                </h1>

                {/* Micro-Capsule Metadata Hub */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted-foreground pt-2">
                  <span className="flex items-center gap-1.5 bg-foreground/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/10 px-3 py-1 rounded-full">
                    <User className="w-3.5 h-3.5 text-yellow-500" />
                    <span>{post.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-foreground/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                    <span>{post.date}</span>
                  </span>
                  {post.readingTime && (
                    <span className="flex items-center gap-1.5 bg-foreground/5 dark:bg-yellow-500/5 border border-border dark:border-yellow-500/10 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-yellow-500" />
                      <span>{post.readingTime}</span>
                    </span>
                  )}
                </div>

                {/* Translation & Share Action Controls */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    size="sm"
                    className="rounded-full border border-border dark:border-yellow-500/15 hover:bg-yellow-500/10 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full border border-border dark:border-yellow-500/15 hover:bg-yellow-500/10 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300">
                        <Languages className="w-4 h-4 mr-2" />
                        Translate
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card/95 border border-border">
                      {supportedLanguages.map(lang => (
                        <DropdownMenuItem key={lang.code} onSelect={() => setLanguage(lang.code)} className="cursor-pointer hover:bg-accent">
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </header>

              {/* Cover Banner Graphic */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border border-border dark:border-yellow-500/10">
                <Image
                  src={post.image.src}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 56rem"
                  className="object-cover"
                  data-ai-hint={post.image.aiHint}
                  priority
                />
              </div>

              {/* High-Readability Prose Content Block */}
              <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 space-y-6 leading-relaxed select-text
                prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
                prose-li:text-muted-foreground dark:prose-li:text-gray-300 prose-li:text-sm sm:prose-li:text-base
                prose-blockquote:border-yellow-500 prose-blockquote:bg-foreground/5 prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground/80 dark:prose-blockquote:text-gray-200
                prose-hr:border-border/50
                prose-strong:text-foreground prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Sharing Call to Action */}
              <div className="mt-16 pt-8 border-t border-border/40 text-center space-y-4">
                <h3 className="text-base sm:text-lg font-serif font-bold text-foreground">Enjoyed reading this piece?</h3>
                <Button
                  onClick={handleShare}
                  size="default"
                  className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/95 px-8 py-5 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  <Share2 className="h-4.5 w-4.5" />
                  <span>Share Article</span>
                </Button>
              </div>

            </div>
          </AnimateOnScroll>
        </article>

      </div>
    </div>
  );
}
