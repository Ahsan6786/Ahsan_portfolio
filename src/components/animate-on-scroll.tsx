"use client";

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  threshold?: number;
};

export function AnimateOnScroll({
  children,
  className,
  animation = 'fade-in-up-animation',
  delay = '0s',
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000',
        isVisible ? animation : 'opacity-0',
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}
