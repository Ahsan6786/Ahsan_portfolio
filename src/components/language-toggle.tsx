"use client"

import * as React from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("Set language to English")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Set language to Hindi")}>
          Hindi
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Set language to Urdu")}>
          Urdu
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Set language to French")}>
          French
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Set language to German")}>
          German
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
