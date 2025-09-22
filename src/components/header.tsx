"use client";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Linkedin, Github } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: "https://github.com/Ahsan8055",
    icon: <Github className="w-5 h-5" />,
  },
];

export function Header() {
  const [activeLink, setActiveLink] = React.useState('Home');
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);


  React.useEffect(() => {
    const handleScroll = () => {
      const validNavLinks = navLinks.filter(link => link.href.length > 1 && link.href.startsWith('#'));
      const sections = validNavLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      let currentSection = 'Home';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
           const matchingLink = validNavLinks.find(link => link.href === `#${section.id}`);
           if (matchingLink) {
            currentSection = matchingLink.label;
           }
           break;
        }
      }
      const homeSection = document.querySelector('#home');
      if (homeSection && window.scrollY < homeSection.offsetTop) {
        currentSection = 'Home';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50 flex justify-between items-center w-full">
        <Link href="#" className="text-2xl font-bold ml-4">AHSAN</Link>
        <div className="container mx-auto flex justify-center items-center">
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
        </div>
        <div className="hidden md:flex items-center space-x-4 mr-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.icon}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden mr-4 flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                  <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-6">
                  <Link href="#" className="text-2xl font-bold mb-8 block">AHSAN</Link>
                  <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                          <SheetClose key={link.label} asChild>
                            <Link
                                href={link.href}
                                className={`text-lg hover:text-primary transition-colors ${activeLink === link.label ? 'text-primary' : ''}`}
                                onClick={() => setIsSheetOpen(false)}
                            >
                                {link.label}
                            </Link>
                          </SheetClose>
                      ))}
                  </nav>
                  <div className="flex justify-start space-x-6 mt-8">
                    {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {React.cloneElement(link.icon, { className: "w-6 h-6"})}
                        </a>
                      ))}
                  </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
    </header>
  );
}
