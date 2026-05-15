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
        {/* ADSTERRA ADS - EXACT SCRIPTS FROM DASHBOARD  */}
        {/* Website: developertools.space-z.ai           */}
        {/* ============================================ */}

        {/* 1. Banner 728x90 */}
        <Script
          id="adsterra-banner-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '1e8dd3e93f030e954013bb317706f109',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          id="adsterra-banner-script"
          src="https://www.highperformanceformat.com/1e8dd3e93f030e954013bb317706f109/invoke.js"
          strategy="afterInteractive"
        />

        {/* 2. Native Banner */}
        <Script
          id="adsterra-native"
          src="https://pl29452331.profitablecpmratenetwork.com/79d0c5ec789aea30f7ce3791e4539308/invoke.js"
          strategy="afterInteractive"
          async
        />

        {/* 3. Popunder (HIGHEST EARNING!) */}
        <Script
          id="adsterra-popunder"
          src="https://pl29452330.profitablecpmratenetwork.com/15/86/0a/15860a0f7c9e80579176284af1f29357.js"
          strategy="afterInteractive"
        />

        {/* 4. Social Bar (Sticky Mobile) */}
        <Script
          id="adsterra-social-bar"
          src="https://pl29452333.profitablecpmratenetwork.com/7a/15/43/7a1543bcf86b12c60dad53cf5e92b94a.js"
          strategy="afterInteractive"
        />

        {/* 5. Smartlink */}
        <Script
          id="adsterra-smartlink"
          src="https://www.profitablecpmratenetwork.com/jqumwent2?key=44dfac2e953684f89a0aa8612ebb89ec"
          strategy="afterInteractive"
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
