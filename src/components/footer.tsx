"use client"
import React from 'react';

export function Footer() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <footer className="p-4 md:p-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-primary' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </footer>
  );
}
