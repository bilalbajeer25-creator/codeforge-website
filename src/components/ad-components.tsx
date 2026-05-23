"use client"

import * as React from "react"

// ============================================================
// ADSTERRA ADS - HTML FILE IFRAME METHOD
// Each ad loads from a separate HTML file in /public/adsterra/
// This is the MOST RELIABLE method across all browsers
// including mobile and in-app browsers
// ============================================================

interface BannerAdProps {
  format?: "728x90" | "300x250" | "300x600"
  className?: string
}

export function BannerAd({ format = "728x90", className = "" }: BannerAdProps) {
  const config: Record<string, { w: number; h: number; src: string }> = {
    "728x90": { w: 728, h: 90, src: "/adsterra/banner-728x90.html" },
    "300x250": { w: 300, h: 250, src: "/adsterra/banner-300x250.html" },
    "300x600": { w: 300, h: 600, src: "/adsterra/banner-300x600.html" },
  }
  const { w, h, src } = config[format] || config["728x90"]

  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <iframe
        src={src}
        width={w}
        height={h}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
      />
    </div>
  )
}

interface NativeAdProps {
  className?: string
}

export function NativeAd({ className = "" }: NativeAdProps) {
  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <iframe
        src="/adsterra/native.html"
        width={320}
        height={50}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
      />
    </div>
  )
}

interface SidebarAdProps {
  className?: string
}

export function SidebarAd({ className = "" }: SidebarAdProps) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <iframe
        src="/adsterra/banner-300x600.html"
        width={300}
        height={600}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
      />
    </div>
  )
}

// Backward-compatible aliases used by page components
export function AdBanner({ format = "horizontal", slot = "", className = "" }: {
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  slot?: string
  className?: string
}) {
  const formatMap: Record<string, "728x90" | "300x250" | "300x600"> = {
    horizontal: "728x90",
    vertical: "300x600",
    rectangle: "300x250",
    sidebar: "300x600",
  }
  return <BannerAd format={formatMap[format] || "728x90"} className={className} />
}

export function InArticleAd({ slot = "", className = "" }: { slot?: string; className?: string }) {
  return <NativeAd className={className} />
}

export function StickyAd() { return null }
export function AdsterraPopunder() { return null }
export function AdsterraSmartlink() { return null }
