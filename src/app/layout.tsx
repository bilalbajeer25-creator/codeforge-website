import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeForge - Free Developer Tools & Blog",
  description: "Forge Your Code, Build Your Future. Free online developer tools including image compressor, JSON formatter, password generator, and more. Plus expert web development blog articles.",
  keywords: ["developer tools", "image compressor", "JSON formatter", "password generator", "color picker", "CSS gradient generator", "word counter", "web development", "coding tools"],
  authors: [{ name: "BILAL" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "CodeForge - Free Developer Tools & Blog",
    description: "Forge Your Code, Build Your Future. Free online developer tools and expert web development articles.",
    siteName: "CodeForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeForge - Free Developer Tools & Blog",
    description: "Forge Your Code, Build Your Future. Free online developer tools and expert web development articles.",
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
        {/* Adsterra Popunder */}
        <Script id="ad-popunder" src="https://pl29452330.profitablecpmratenetwork.com/15/86/0a/15860a0f7c9e80579176284af1f29357.js" strategy="afterInteractive" />
        {/* Adsterra Social Bar */}
        <Script id="ad-social-bar" src="https://pl29452333.profitablecpmratenetwork.com/7a/15/43/7a1543bcf86b12c60dad53cf5e92b94a.js" strategy="afterInteractive" />
        {/* Adsterra Smartlink */}
        <Script id="ad-smartlink" src="https://www.profitablecpmratenetwork.com/jqumwent2?key=44dfac2e953684f89a0aa8612ebb89ec" strategy="afterInteractive" />
        {/* Ad Loader - loads banner/native ads into their containers */}
        <Script id="ad-loader" src="/adsterra/ad-loader.js" strategy="afterInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
