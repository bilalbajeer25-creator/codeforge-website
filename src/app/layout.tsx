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
        {/* ============================================ */}
        {/* ADSTERRA ADS - ALL 5 ZONES                  */}
        {/* Website: developertools.space-z.ai           */}
        {/* Approved: 15 May 2026                        */}
        {/* ============================================ */}

        {/* 1. Popunder - Zone: 29351831 (HIGHEST EARNING) */}
        <Script
          id="adsterra-popunder"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('www.highperformanceformat.com','29351831',document.createElement('script'));
            `,
          }}
        />

        {/* 2. Banner 728x90 - Zone: 29351833 */}
        <Script
          id="adsterra-banner"
          src="https://www.highperformanceformat.com/29351833/invoke.js"
          strategy="afterInteractive"
        />

        {/* 3. Native Banner - Zone: 29351832 */}
        <Script
          id="adsterra-native"
          src="https://www.highperformanceformat.com/29351832/invoke.js"
          strategy="afterInteractive"
        />

        {/* 4. Social Bar (Sticky Mobile) - Zone: 29351834 */}
        <Script
          id="adsterra-social-bar"
          src="https://www.highperformanceformat.com/29351834/invoke.js"
          strategy="afterInteractive"
        />

        {/* 5. Smartlink - Zone: 29351835 */}
        <Script
          id="adsterra-smartlink"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('www.highperformanceformat.com','29351835',document.createElement('script'));
            `,
          }}
        />
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
