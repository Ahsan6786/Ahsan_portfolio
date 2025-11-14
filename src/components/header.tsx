"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Linkedin, Github, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    href: "https://www.instagram.com/khan_ahsan_8055?igsh=MWhpYnJ1OGo2Y214ZA%3D%3D&utm_source=qr",
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram"
  },
  {
    href: "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/Ahsan6786",
    icon: <Github className="w-5 h-5" />,
    label: "Github"
  },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { translations, loading } = useLanguage();
  const pathname = usePathname();

  const navLinks = loading ? [] : [
    { href: "/", label: translations.header.home },
    { href: "/about", label: translations.header.about },
    { href: "/services", label: translations.header.services },
    { href: "/projects", label: translations.header.projects },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/certificates", label: translations.header.certificates },
    { href: "/contact", label: translations.header.contact },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (loading) return null;

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "p-4 md:p-6",
        "flex items-center md:justify-between",
        isScrolled ? "header-scrolled" : "bg-background/80 md:bg-transparent",
    )}>
        <Link 
            href="/" 
            className={cn(
                "text-2xl font-bold tracking-wider text-primary transition-all duration-500",
                "absolute md:static",
                isScrolled 
                  ? 'left-1/2 -translate-x-1/2 md:left-0 md:transform-none'
                  : 'left-4 translate-x-0 md:left-0 md:transform-none'
            )}
        >
            AHSAN
        </Link>
        <div className={cn(
          "hidden md:flex items-center space-x-6 text-sm font-medium",
        )}>
            <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={cn('hover:text-primary transition-colors', pathname === link.href ? 'text-primary border-b-2 border-primary pb-1' : '')}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors p-2"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <LanguageToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isSheetOpen ? "x" : "menu"}
                    initial={{ rotate: isSheetOpen ? -90 : 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: isSheetOpen ? -90 : 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSheetOpen ? <X /> : <Menu />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-6 pt-16 text-center">
                  <nav className="flex flex-col items-center space-y-6">
                      {navLinks.map((link) => (
                          <SheetClose key={link.label} asChild>
                            <Link
                                href={link.href}
                                className={cn('text-xl hover:text-primary transition-colors', pathname === link.href ? 'text-primary' : '')}
                                onClick={() => setIsSheetOpen(false)}
                            >
                                {link.label}
                            </Link>
                          </SheetClose>
                      ))}
                  </nav>
                  <div className="flex justify-center space-x-6 mt-8">
                    {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsSheetOpen(false)}
                          aria-label={link.label}
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
