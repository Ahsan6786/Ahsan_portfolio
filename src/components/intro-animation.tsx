"use client";

import React from 'react';

const colors = [
  '#ff0000', '#ff3d00', '#ff7a00', '#ffb800', '#fff500', 
  '#c5ff00', '#88ff00', '#4bff00', '#0eff00', '#00ff3d', 
  '#00ff7a', '#00ffb8', '#00fff5', '#00c5ff', '#0088ff',
  '#004bff', '#000eff', '#3d00ff', '#7a00ff', '#b800ff',
  '#f500ff', '#ff00c5', '#ff0088', '#ff004b'
];

const barStyles = colors.map((color, i) => {
  const rotation = -60 + (i * (120 / (colors.length -1)));
  const delay = i * 0.05;
  return {
    '--bar-color': color,
    transform: `rotate(${rotation}deg)`,
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
