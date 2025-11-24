"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

const THEMES = [
    'light', 
    'dark', 
    'light-yellow',
    'dark-yellow',
    'light-green',
    'dark-green',
    'light-cyan',
    'dark-cyan',
    'light-red',
    'dark-red',
    'light-violet',
    'dark-violet',
    'light-orange',
    'dark-orange',
];

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props} themes={THEMES}>{children}</NextThemesProvider>
}
