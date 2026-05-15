"use client"

import * as React from "react"

// ============================================================
// ADSTERRA AD PLACEHOLDERS
// Scripts are loaded by layout.tsx ad-loader script
// These components just create the target div containers
// ============================================================

interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  // Map slot names to the IDs used in layout.tsx ad-loader
  const slotToId: Record<string, string> = {
    "home-after-tools": "ad-home-after-tools",
    "home-after-blog": "ad-home-after-blog",
    "home-bottom": "ad-home-bottom",
    "blog-sidebar": "ad-blog-sidebar",
    "blog-bottom": "ad-blog-bottom",
    "post-top": "ad-post-top",
    "post-bottom": "ad-post-bottom",
    "tools-bottom": "ad-tools-bottom",
  }
  const divId = slotToId[slot] || `ad-${slot}`

  const sizeClasses = {
    horizontal: "w-full min-h-[90px]",
    vertical: "w-full min-h-[250px]",
    rectangle: "w-full min-h-[250px] max-w-[336px]",
    sidebar: "w-full min-h-[600px]",
  }

  return (
    <div className={`relative my-4 ${className}`}>
      <div className={`${sizeClasses[format]} flex items-center justify-center overflow-hidden`}>
        <div id={divId} className="w-full min-h-[90px]"></div>
      </div>
    </div>
  )
}

interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  const slotToId: Record<string, string> = {
    "post-mid": "ad-post-mid",
    "in-article": "ad-post-mid",
  }
  const divId = slotToId[slot] || `ad-native-${slot}`

  return (
    <div className={`my-8 ${className}`}>
      <div id={divId} className="w-full min-h-[250px]"></div>
    </div>
  )
}

interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  return (
    <div className={className}>
      <div id="ad-blog-sidebar" className="w-full min-h-[600px]"></div>
    </div>
  )
}

export function StickyAd() { return null }
export function AdsterraPopunder() { return null }
export function AdsterraSmartlink() { return null }
