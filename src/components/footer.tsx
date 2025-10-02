"use client";

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 md:p-6 bg-card border-t">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Ahsan Imam Khan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
