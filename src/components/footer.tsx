import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahsan's Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
