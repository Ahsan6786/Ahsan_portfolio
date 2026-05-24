"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CardFlipProps {
  frontImage: string;
  backImage: string;
  className?: string;
}

export function CardFlip({ frontImage, backImage, className = "" }: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
    // Restart the 4s timer so we don't flip immediately again
    startTimer();
  };

  return (
    <div
      className={`relative w-full max-w-[500px] aspect-[3/2] perspective-1000 cursor-pointer select-none ${className}`}
      onClick={handleCardClick}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div
        className="relative w-full h-full transform-gpu transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/10 dark:border-white/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src={frontImage}
            alt="Card Front"
            fill
            sizes="(max-w-768px) 100vw, 500px"
            priority
            className="object-cover rounded-2xl"
          />
          {/* Subtle border overlay */}
          <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 pointer-events-none shadow-[inset_0_0_15px_rgba(234,179,8,0.05)]" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/10 dark:border-white/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={backImage}
            alt="Card Back"
            fill
            sizes="(max-w-768px) 100vw, 500px"
            className="object-cover rounded-2xl"
          />
          {/* Subtle border overlay */}
          <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 pointer-events-none shadow-[inset_0_0_15px_rgba(234,179,8,0.05)]" />
        </div>
      </div>
    </div>
  );
}
