import Link from "next/link";
import { Aperture } from "lucide-react";

export function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-2" aria-label="Back to home">
      <Aperture className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        Ahsan
      </span>
    </Link>
  );
}
