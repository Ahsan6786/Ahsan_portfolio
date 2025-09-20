"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <header className="p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">CLARK</h1>
            <Button className="md:hidden" variant="ghost" size="icon">
                <span className="material-icons">
                    menu
                </span>
            </Button>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link, index) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={
                            index === 0
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "hover:text-primary transition-colors"
                        }
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
  );
}
