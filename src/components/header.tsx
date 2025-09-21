"use client";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "My Blog" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeLink, setActiveLink] = React.useState('Home');

  React.useEffect(() => {
    const handleScroll = () => {
      const validNavLinks = navLinks.filter(link => link.href.length > 1 && link.href.startsWith('#'));
      const sections = validNavLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(validNavLinks[index].label);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold">AHSAN</Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`hover:text-primary transition-colors ${activeLink === link.label ? 'text-primary border-b-2 border-primary pb-1' : ''}`}
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
