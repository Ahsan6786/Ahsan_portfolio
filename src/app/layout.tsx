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
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio--studio-7268024832-f911c.us-central1.hosted.app/"),
  title: "Ahsan Imam Khan | Freelance Full-Stack Developer from India",
  description:
    "Ahsan Imam Khan is a freelance full-stack developer specializing in building modern, responsive, and high-performance websites and applications using Next.js, React, and Firebase.",
  keywords: [
    "Ahsan Imam Khan",
    "freelance web developer India",
    "Next.js developer",
    "React developer",
    "Firebase developer",
    "full-stack developer",
    "portfolio",
    "web design",
  ],
  creator: "Ahsan Imam Khan",
  authors: [
    {
      name: "Ahsan Imam Khan",
      url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    },
  ],
  openGraph: {
    title: "Ahsan Imam Khan | Freelance Full-Stack Developer",
    description:
      "Freelance full-stack developer building scalable and high-performance web applications.",
    url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
    siteName: "Ahsan Imam Khan Portfolio",
    images: [
      {
        url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/my-image-1.png?v=4",
        width: 1200,
        height: 630,
        alt: "Ahsan Imam Khan - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Imam Khan | Freelance Full-Stack Developer",
    description:
      "Building modern and scalable web apps using Next.js, React, and Firebase.",
    creator: "@ahsanimamkhan",
    images: [
      "https://studio--studio-7268024832-f911c.us-central1.hosted.app/my-image-1.png?v=4",
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/A.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahsan Imam Khan",
  url: "https://studio--studio-7268024832-f911c.us-central1.hosted.app/",
  image:
    "https://studio--studio-7268024832-f911c.us-central1.hosted.app/my-image-1.png?v=4",
  description:
    "Freelance Full-Stack Developer specializing in Next.js, React, and Firebase.",
  jobTitle: "Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/ahsan-imam-khan-9a0443328",
    "https://github.com/Ahsan6786",
    "https://www.instagram.com/khan_ahsan_8055",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
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
      <body className={cn("font-sans antialiased", poppins.variable)}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/66a932ff32dca6db2cb7534c/1i4252do5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
          }}
        />
      </body>
    </html>
  );
}
