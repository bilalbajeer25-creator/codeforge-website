"use client"

import * as React from "react"
import { X } from "lucide-react"

interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot, format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const [closed, setClosed] = React.useState(false)

  if (closed) return null

  const sizeClasses = {
    horizontal: "w-full min-h-[90px] md:min-h-[90px]",
    vertical: "w-full min-h-[250px]",
    rectangle: "w-full min-h-[250px] max-w-[336px]",
    sidebar: "w-full min-h-[250px]",
  }

  return (
    <div className={`relative my-4 ${className}`}>
      {/* Close button for sticky/intrusive ads */}
      {showClose && (
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-1 -right-1 z-10 h-5 w-5 rounded-full bg-muted/80 text-muted-foreground hover:bg-muted flex items-center justify-center"
          aria-label="Close ad"
        >
          <X className="h-3 w-3" />
        </button>
      )}

      {/* 
        =====================================================
        EZOIC AD PLACEMENT
        =====================================================
        When you get your Ezoic account:
        1. Replace the data-ezsctx attribute with your Ezoic site ID
        2. Replace the slot name with your Ezoic ad slot
        
        Ezoic will automatically serve the highest-paying ads.
        Just connect your site to Ezoic and ads will appear here.
        =====================================================
      */}
      <div
        className={`${sizeClasses[format]} bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden`}
      >
        {/* Ezoic Ad Code - Replace with your actual Ezoic ad code */}
        {/* Example: <div id="ezoic-pub-ad-placeholder-{slot}"></div> */}

        {/* Media.net Ad Code - Replace with your actual Media.net code */}
        {/* Example: <div id="{slot}"></div> */}

        {/* Placeholder - Remove this when adding real ad code */}
        <div className="text-center p-4">
          <p className="text-xs text-muted-foreground/60">Advertisement</p>
          <p className="text-[10px] text-muted-foreground/40 mt-1">
            Ad space for {format} format
          </p>
        </div>
      </div>
    </div>
  )
}

// Sticky bottom ad for mobile
export function StickyAd() {
  const [closed, setClosed] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    // Show sticky ad after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (closed || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t">
      <div className="relative">
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-6 right-2 z-10 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
        >
          <X className="h-3 w-3" /> Close
        </button>

        {/* 
          EZOIC/MEDIA.NET STICKY AD
          Replace with your actual ad code for mobile sticky ads
        */}
        <div className="w-full min-h-[50px] bg-muted/30 flex items-center justify-center">
          <div className="text-center p-2">
            <p className="text-xs text-muted-foreground/60">Advertisement</p>
            <p className="text-[10px] text-muted-foreground/40">Mobile sticky ad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// In-article ad (for blog posts)
export function InArticleAd({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 ${className}`}>
      {/* 
        IN-ARTICLE AD
        Best performing ad placement for blog content
        Ezoic/Media.net will auto-optimize this placement
      */}
      <div className="w-full min-h-[250px] bg-muted/20 border border-dashed border-border/50 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-xs text-muted-foreground/60">Advertisement</p>
          <p className="text-[10px] text-muted-foreground/40 mt-1">In-article ad placement</p>
        </div>
      </div>
    </div>
  )
}

// Sidebar ad for blog
export function SidebarAd({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {/* 
        SIDEBAR AD
        Second best performing placement after in-article
      */}
      <div className="w-full min-h-[250px] bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-xs text-muted-foreground/60">Advertisement</p>
          <p className="text-[10px] text-muted-foreground/40 mt-1">Sidebar ad placement</p>
        </div>
      </div>
    </div>
  )
}
