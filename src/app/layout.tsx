import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
