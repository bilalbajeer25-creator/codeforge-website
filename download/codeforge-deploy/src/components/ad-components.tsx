"use client"

import * as React from "react"

// ============================================================
// ADSTERRA ADS - IFRAME SRCDOC METHOD
// Each ad gets its own isolated iframe with inline HTML
// This prevents atOptions global variable conflicts
// AND doesn't require separate HTML files to be deployed
// ============================================================

// Banner 728x90 HTML (Adsterra key: 2bcef742f07a8ca1e46ada9ce12a38d5)
const BANNER_728x90_HTML = `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;}</style></head><body><script>atOptions={'key':'2bcef742f07a8ca1e46ada9ce12a38d5','format':'iframe','height':90,'width':728,'params':{}};</script><script src="https://www.highperformanceformat.com/2bcef742f07a8ca1e46ada9ce12a38d5/invoke.js"></script></body></html>`

// Banner 300x250 HTML (same key, different dimensions)
const BANNER_300x250_HTML = `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;}</style></head><body><script>atOptions={'key':'2bcef742f07a8ca1e46ada9ce12a38d5','format':'iframe','height':250,'width':300,'params':{}};</script><script src="https://www.highperformanceformat.com/2bcef742f07a8ca1e46ada9ce12a38d5/invoke.js"></script></body></html>`

// Banner 300x600 HTML (same key, sidebar dimensions)
const BANNER_300x600_HTML = `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;}</style></head><body><script>atOptions={'key':'2bcef742f07a8ca1e46ada9ce12a38d5','format':'iframe','height':600,'width':300,'params':{}};</script><script src="https://www.highperformanceformat.com/2bcef742f07a8ca1e46ada9ce12a38d5/invoke.js"></script></body></html>`

// Native Banner HTML (Adsterra key: b94ec979762f7b8f40c4033b13c7ad1f) - 320x50
const NATIVE_HTML = `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;}</style></head><body><script>atOptions={'key':'b94ec979762f7b8f40c4033b13c7ad1f','format':'iframe','height':50,'width':320,'params':{}};</script><script src="https://www.highperformanceformat.com/b94ec979762f7b8f40c4033b13c7ad1f/invoke.js"></script></body></html>`

interface BannerAdProps {
  format?: "728x90" | "300x250" | "300x600"
  className?: string
}

export function BannerAd({ format = "728x90", className = "" }: BannerAdProps) {
  const config: Record<string, { w: number; h: number; html: string }> = {
    "728x90": { w: 728, h: 90, html: BANNER_728x90_HTML },
    "300x250": { w: 300, h: 250, html: BANNER_300x250_HTML },
    "300x600": { w: 300, h: 600, html: BANNER_300x600_HTML },
  }
  const { w, h, html } = config[format] || config["728x90"]

  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <iframe
        srcDoc={html}
        width={w}
        height={h}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
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
        srcDoc={NATIVE_HTML}
        width={320}
        height={50}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
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
        srcDoc={BANNER_300x600_HTML}
        width={300}
        height={600}
        frameBorder="0"
        scrolling="no"
        style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
        title="Advertisement"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
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
