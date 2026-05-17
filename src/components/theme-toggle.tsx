"use client"

import * as React from "react"
import { Moon, Sun, Palette, Paintbrush } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
    { mode: 'light', color: 'yellow', label: 'Light - Yellow' },
    { mode: 'light', color: 'green', label: 'Light - Green' },
    { mode: 'light', color: 'cyan', label: 'Light - Cyan' },
    { mode: 'light', color: 'red', label: 'Light - Red' },
    { mode: 'light', color: 'violet', label: 'Light - Violet' },
    { mode: 'light', color: 'orange', label: 'Light - Orange' },
    { mode: 'dark', color: 'yellow', label: 'Dark - Yellow' },
    { mode: 'dark', color: 'green', label: 'Dark - Green' },
    { mode: 'dark', color: 'cyan', label: 'Dark - Cyan' },
    { mode: 'dark', color: 'red', label: 'Dark - Red' },
    { mode: 'dark', color: 'violet', label: 'Dark - Violet' },
    { mode: 'dark', color: 'orange', label: 'Dark - Orange' },
];


export function ThemeToggle() {
  const { setTheme } = useTheme()

  const lightThemes = themes.filter(t => t.mode === 'light');
  const darkThemes = themes.filter(t => t.mode === 'dark');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {lightThemes.map(theme => (
                <DropdownMenuItem key={theme.label} onClick={() => setTheme(`light-${theme.color}`)}>
                  <Paintbrush className="mr-2 h-4 w-4" />
                  <span>{theme.color.charAt(0).toUpperCase() + theme.color.slice(1)}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    {darkThemes.map(theme => (
                        <DropdownMenuItem key={theme.label} onClick={() => setTheme(`dark-${theme.color}`)}>
                            <Paintbrush className="mr-2 h-4 w-4" />
                            <span>{theme.color.charAt(0).toUpperCase() + theme.color.slice(1)}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
