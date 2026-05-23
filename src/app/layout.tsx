import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AdsterraScripts } from "@/components/ad-scripts";
import { PWARegistrar } from "@/components/pwa-registrar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "CodeForge - Free Developer Tools & Web Development Blog",
    template: "%s | CodeForge - Free Developer Tools",
  },
  description: "Free online developer tools including image compressor, JSON formatter, password generator, color picker, CSS gradient generator, and word counter. Expert web development blog articles on JavaScript, React, CSS, and freelancing. No sign-up required.",
  keywords: [
    "free developer tools", "online image compressor", "JSON formatter online", "password generator", "color picker tool",
    "CSS gradient generator", "word counter online", "web development blog", "JavaScript tutorials", "React tutorials",
    "CSS tutorials", "freelancing tips", "coding tools free", "developer utilities", "online tools no signup",
    "image optimizer", "JSON validator", "secure password maker", "web developer resources", "learn web development",
  ],
  authors: [{ name: "BILAL", url: "https://developertoolsbybilal.netlify.app" }],
  creator: "BILAL",
  publisher: "CodeForge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "CodeForge - Free Developer Tools & Web Development Blog",
    description: "Free online developer tools and expert web development articles. Image compressor, JSON formatter, password generator, and more. No sign-up required.",
    siteName: "CodeForge",
    type: "website",
    url: "https://developertoolsbybilal.netlify.app",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeForge - Free Developer Tools & Web Development Blog",
    description: "Free online developer tools and expert web development articles. No sign-up required.",
  },
  alternates: {
    canonical: "https://developertoolsbybilal.netlify.app",
  },
  verification: {
    google: "CwI9tyzNY0s6wHoLtMHOGkgYb6gvaTlJr9JnprLn5pk",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CodeForge",
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
        <meta name="google-site-verification" content="CwI9tyzNY0s6wHoLtMHOGkgYb6gvaTlJr9JnprLn5pk" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CodeForge",
              url: "https://developertoolsbybilal.netlify.app",
              description: "Free online developer tools and expert web development articles. No sign-up required.",
              author: {
                "@type": "Person",
                name: "BILAL",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://developertoolsbybilal.netlify.app/#blog",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CodeForge Developer Tools",
              url: "https://developertoolsbybilal.netlify.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
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
          <AdsterraScripts />
          <PWARegistrar />
        </ThemeProvider>
      </body>
    </html>
  );
}
