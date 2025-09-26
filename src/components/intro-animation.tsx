"use client";

import React from 'react';

const colors = [
  '#FFD700', '#FFDE59', '#FFE68A', '#FFECB3', '#FFF2D9',
  '#FFFFFF', '#FFF2D9', '#FFECB3', '#FFE68A', '#FFDE59',
  '#FFD700', '#FFC400', '#FFBF00', '#FFB347', '#FFA500',
  '#FFB347', '#FFBF00', '#FFC400', '#FFD700', '#FFDE59',
  '#FFE68A', '#FFECB3', '#FFF2D9', '#FFFFFF'
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
