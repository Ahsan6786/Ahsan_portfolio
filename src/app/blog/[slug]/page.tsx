
"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2, Languages, Loader } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { translate } from "@/ai/flows/translate-flow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotLoader } from "react-spinners";

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
  const post = blogPosts.find((p) => p.slug === slug);

  const [translatedContent, setTranslatedContent] = useState(post?.content || '');
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    if (post) {
      setTranslatedContent(post.content);
    }
  }, [post]);

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

  const handleTranslate = async (langCode: string) => {
    if (langCode === currentLang) return;

    setIsTranslating(true);
    setCurrentLang(langCode);

    try {
        const result = await translate({
            text: post.content,
            targetLang: langCode
        });
        setTranslatedContent(result.translatedText);
    } catch (error) {
        console.error("Translation failed:", error);
        toast({
            title: "Translation Error",
            description: "Could not translate the post. Please try again.",
            variant: "destructive",
        });
        // Revert to original content on failure
        setTranslatedContent(post.content);
        setCurrentLang('en');
    } finally {
        setIsTranslating(false);
    }
  };


  return (
    <div className="bg-background min-h-screen font-sans">
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
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {post.title}
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Languages className="w-4 h-4 mr-2" />
                        Translate
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {supportedLanguages.map(lang => (
                        <DropdownMenuItem key={lang.code} onSelect={() => handleTranslate(lang.code)} disabled={isTranslating}>
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </header>
            </AnimateOnScroll>

            <AnimateOnScroll className="mb-8 md:mb-12">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                    {post.backgroundImage && (
                        <Image
                            src={post.backgroundImage.src}
                            alt="Background"
                            fill
                            className="object-cover opacity-30"
                            data-ai-hint={post.backgroundImage.aiHint}
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <Image
                            src={post.image.src}
                            alt={post.title}
                            width={500}
                            height={300}
                            className="object-contain"
                            data-ai-hint={post.image.aiHint}
                            priority
                        />
                    </div>
                </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
            {isTranslating ? (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground min-h-[300px]">
                  <DotLoader color="hsl(var(--primary))" />
                  <p className="mt-4 text-lg">Translating... Please wait.</p>
                </div>
              ) : (
                <div
                    className="max-w-none mx-auto text-foreground/90 space-y-6"
                    dangerouslySetInnerHTML={{ __html: translatedContent }}
                />
              )}
            </AnimateOnScroll>

            <AnimateOnScroll className="mt-8 md:mt-12 text-center">
                <h3 className="text-lg font-semibold mb-4">Enjoyed this story? Share it with your friends!</h3>
                <Button
                    onClick={handleShare}
                    size="default"
                    className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 px-6 py-5 text-sm md:px-8 md:py-6 md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                    <Share2 className="mr-2 h-5 w-5" />
                    Share Post
                </Button>
            </AnimateOnScroll>

          </article>
        </div>
      </div>
    </div>
  );
}
