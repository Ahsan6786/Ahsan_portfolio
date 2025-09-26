"use client";

import React from 'react';

const barCount = 20;
const goldPalette = [
  '#FFD700', '#FFA500', '#FFC400', '#FFB347', '#FFDE59',
  '#FFECB3', '#DAA520', '#B8860B', '#F0E68C', '#BDB76B'
];

const barStyles = Array.from({ length: barCount }).map((_, i) => {
  const color = goldPalette[i % goldPalette.length];
  const delay = i * 0.05;
  return {
    '--bar-color': color,
    animationDelay: `${delay}s`,
  } as React.CSSProperties;
});

export function IntroAnimation() {
  return (
    <div className="intro-container">
      <div className="intro-bars">
        {barStyles.map((style, index) => (
          <div key={index} className="intro-bar" style={style}></div>
        ))}
      </div>
      <div className="intro-logo">Ahsan</div>
    </div>
  );
}
