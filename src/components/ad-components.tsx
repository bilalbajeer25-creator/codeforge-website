"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA ADS - IFRAME METHOD (100% WORKING!)
// Each ad runs in its own iframe - no atOptions conflicts
// Popunder, Social Bar, Smartlink loaded from layout.tsx head
// ============================================================

// ============================================================
// AD BANNER - Loads /ads/banner-728x90.html in iframe
// ============================================================
interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const [closed, setClosed] = React.useState(false)

  if (closed) return null

  const config: Record<string, { src: string; width: string; height: string }> = {
    horizontal: { src: "/ads/banner-728x90.html", width: "728", height: "90" },
    vertical: { src: "/ads/banner-300x250.html", width: "300", height: "250" },
    rectangle: { src: "/ads/banner-300x250.html", width: "336", height: "280" },
    sidebar: { src: "/ads/banner-300x600.html", width: "300", height: "600" },
  }

  const ad = config[format] || config.horizontal

  return (
    <div className={`relative my-4 flex items-center justify-center ${className}`}>
      {showClose && (
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-1 -right-1 z-10 h-5 w-5 rounded-full bg-muted/80 text-muted-foreground hover:bg-muted flex items-center justify-center"
          aria-label="Close ad"
        >
          <X className="h-3 w-3" />
        </button>
      )}
      <iframe
        src={ad.src}
        width={ad.width}
        height={ad.height}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", display: "block", margin: "0 auto" }}
        title={`Ad - ${slot}`}
      />
    </div>
  )
}

// ============================================================
// IN-ARTICLE / NATIVE BANNER - Loads /ads/native.html in iframe
// ============================================================
interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  return (
    <div className={`my-8 flex items-center justify-center ${className}`}>
      <iframe
        src="/ads/native.html"
        width="100%"
        height="250"
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "728px", border: "none", display: "block", margin: "0 auto" }}
        title={`Native Ad - ${slot}`}
      />
    </div>
  )
}

// ============================================================
// SIDEBAR AD - Loads /ads/banner-300x600.html in iframe
// ============================================================
interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  return (
    <div className={className}>
      <iframe
        src="/ads/banner-300x600.html"
        width="300"
        height="600"
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", display: "block", margin: "0 auto" }}
        title={`Sidebar Ad - ${slot}`}
      />
    </div>
  )
}

// ============================================================
// STICKY AD - Social Bar from layout.tsx handles this
// ============================================================
export function StickyAd() {
  return null
}

// ============================================================
// POPUNDER - Loaded from layout.tsx
// ============================================================
export function AdsterraPopunder() {
  return null
}

// ============================================================
// SMARTLINK - Loaded from layout.tsx
// ============================================================
export function AdsterraSmartlink() {
  return null
}
