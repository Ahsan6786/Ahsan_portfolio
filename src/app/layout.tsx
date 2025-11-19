import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ahsan Imam Khan - Freelance Web Developer",
  description: "A freelance web designer and full-stack developer specializing in creating modern, responsive, and high-performance websites and applications using Next.js, React, and Firebase.",
  keywords: ["Ahsan Imam Khan", "freelance web developer", "Next.js developer", "React developer", "Firebase developer", "full-stack developer", "portfolio", "web design"],
  creator: "Ahsan Imam Khan",
  authors: [{ name: "Ahsan Imam Khan", url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/" }],
  openGraph: {
    title: "Ahsan Imam Khan - Freelance Web Developer",
    description: "A freelance web designer and full-stack developer.",
    url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    siteName: "Ahsan Imam Khan Portfolio",
    images: [
      {
        url: "/my-image-1.png?v=4",
        width: 800,
        height: 600,
        alt: "Ahsan Imam Khan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Imam Khan - Freelance Web Developer",
    description: "A freelance web designer and full-stack developer.",
    creator: "@ahsanimamkhan",
    images: ["/my-image-1.png?v=4"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahsan Imam Khan',
  url: 'https://studio--studio-7268024832-f911c.us-central1.hosted.app/',
  image: '/my-image-1.png?v=4',
  sameAs: [
    'https://www.linkedin.com/in/ahsan-imam-khan-9a0443328',
    'https://github.com/Ahsan6786',
    'https://www.instagram.com/khan_ahsan_8055',
  ],
  jobTitle: 'Full-Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("font-display antialiased", poppins.variable)}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <Header />
              <div className="flex-grow overflow-x-hidden">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
            <Toaster />
            <ScrollToTopButton />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
