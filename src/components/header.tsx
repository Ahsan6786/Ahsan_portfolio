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
    { href: "/education", label: translations.header.education },
    { href: "/services", label: translations.header.services },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: translations.header.projects },
    { href: "/blog", label: "Blog" },
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
          <AnimatePresence mode="wait">
            <motion.span
              key={isScrolled ? "portfolio" : "ahsan"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {isScrolled ? "Portfolio" : "AHSAN"}
            </motion.span>
          </AnimatePresence>
        </Link>
        <div className={cn(
          "hidden md:flex items-center space-x-2 text-sm font-medium",
        )}>
            <nav className="flex items-center space-x-1">
                {navLinks.map((link) => (
                    <Button
                        key={link.href}
                        asChild
                        variant="ghost"
                        size="sm"
                        className={cn("rounded-full font-semibold", 
                            pathname === link.href 
                            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                            : "hover:bg-accent/80"
                        )}
                    >
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </Button>
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
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Open menu"
            onClick={() => setIsSheetOpen(true)}
          >
            <Menu />
          </Button>

          <AnimatePresence>
            {isSheetOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 z-[9999] bg-background/98 backdrop-blur-lg flex flex-col justify-center items-center p-6 overflow-y-auto"
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 rounded-full hover:bg-accent border border-transparent hover:border-border transition-all duration-300"
                  onClick={() => setIsSheetOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center space-y-6 text-center">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          'text-2xl font-bold tracking-wide hover:text-primary transition-colors',
                          pathname === link.href ? 'text-primary' : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <motion.div 
                  className="flex justify-center space-x-6 mt-12"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.04, duration: 0.3 }}
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/75 hover:text-primary transition-colors p-2"
                      aria-label={link.label}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {React.cloneElement(link.icon, { className: "w-6 h-6" })}
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </header>
  );
}
