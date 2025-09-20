"use client";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "My Blog" },
    { href: "#contact", label: "Contact" },
];

export function Header() {

  return (
    <header className="p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold">CLARK</Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link, index) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`hover:text-primary transition-colors ${index === 0 ? 'text-primary border-b-2 border-primary pb-1' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
                <Menu />
            </Button>
        </div>
    </header>
  );
}
