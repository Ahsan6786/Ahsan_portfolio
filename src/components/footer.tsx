"use client"
import React, { useState, useEffect } from 'react';

const totalSlides = 3;

export function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="p-4 md:p-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </footer>
  );
}
