import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { Chatbot } from "@/components/chatbot";
import { LanguageProvider } from "@/contexts/language-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ahsan Imam Khan - Freelance Web Developer",
  description: "A freelance web designer.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-display antialiased", poppins.variable)}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <ScrollToTopButton />
            <Chatbot />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
