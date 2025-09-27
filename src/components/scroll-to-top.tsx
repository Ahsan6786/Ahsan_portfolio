"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-opacity duration-300 hover:bg-primary/90",
        isVisible && "opacity-100"
      )}
    >
      <ArrowUp className="h-6 w-6" />
      <span className="sr-only">Go to top</span>
    </Button>
  );
}
