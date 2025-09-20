"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export function Header() {

  return (
    <header className="p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold">&lt;Ahsan/&gt;</Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="hover:text-primary transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <Button>Sign In</Button>
                <Button className="md:hidden" variant="ghost" size="icon">
                    <span className="material-icons">
                        menu
                    </span>
                </Button>
            </div>
        </div>
    </header>
  );
}
