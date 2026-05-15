"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA AD CONFIGURATION
// ============================================================
// Adsterra is the PRIMARY ad network for this site.
// 
// HOW TO GET YOUR ADSTERRA CODES:
// 1. Go to https://www.adsterra.com/ and sign up (FREE)
// 2. Add your website in dashboard
// 3. Create ad placements - you will get ZONE IDs (numbers)
// 4. Put those zone IDs below in .env.local file
//
// .env.local file me yeh likho:
// NEXT_PUBLIC_AD_NETWORK=adsterra
// NEXT_PUBLIC_ADSTERRA_BANNER_ID=your_banner_zone_id
// NEXT_PUBLIC_ADSTERRA_NATIVE_ID=your_native_zone_id
// NEXT_PUBLIC_ADSTERRA_STICKY_ID=your_sticky_zone_id
// NEXT_PUBLIC_ADSTERRA_POPUNDER_ID=your_popunder_zone_id
// NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_ID=your_interstitial_zone_id
// ============================================================

type AdNetwork = "none" | "adsterra"

function getAdNetwork(): AdNetwork {
  if (typeof window === "undefined") return "none"
  return (process.env.NEXT_PUBLIC_AD_NETWORK as AdNetwork) || "none"
}

// Adsterra Zone IDs - Get these from your Adsterra dashboard
const ADSTERRA_BANNER_ID = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID || ""
const ADSTERRA_NATIVE_ID = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_ID || ""
const ADSTERRA_STICKY_ID = process.env.NEXT_PUBLIC_ADSTERRA_STICKY_ID || ""
const ADSTERRA_POPUNDER_ID = process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_ID || ""
const ADSTERRA_INTERSTITIAL_ID = process.env.NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_ID || ""

// ============================================================
// ADSTERRA SCRIPT LOADER
// Adsterra uses script tags that load from:
// https://www.highperformanceformat.com/{ZONE_ID}/invoke.js
// Each ad placement gets its own script tag
// ============================================================

function loadAdsterraBanner(containerId: string, zoneId: string) {
  if (typeof window === "undefined" || !zoneId) return

  const container = document.getElementById(containerId)
  if (!container) return

  // Check if already loaded in this container
  if (container.querySelector("script")) return

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.highperformanceformat.com/${zoneId}/invoke.js`
  container.appendChild(script)
}

function loadAdsterraNative(containerId: string, zoneId: string) {
  if (typeof window === "undefined" || !zoneId) return

  const container = document.getElementById(containerId)
  if (!container) return

  if (container.querySelector("script")) return

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.highperformanceformat.com/${zoneId}/invoke.js`
  container.appendChild(script)
}

// ============================================================
// AD BANNER COMPONENT (728x90 Leaderboard / 300x250 Rectangle)
// ============================================================
interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const [closed, setClosed] = React.useState(false)
  const network = getAdNetwork()
  const containerId = `adsterra-banner-${slot}-${format}`

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_BANNER_ID) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        loadAdsterraBanner(containerId, ADSTERRA_BANNER_ID)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [network, containerId])

  if (closed || network === "none") return null

  const sizeClasses = {
    horizontal: "w-full min-h-[90px] md:min-h-[90px]",
    vertical: "w-full min-h-[250px]",
    rectangle: "w-full min-h-[250px] max-w-[336px]",
    sidebar: "w-full min-h-[600px]",
  }

  if (network === "adsterra") {
    return (
      <div className={`relative my-4 ${className}`}>
        {showClose && (
          <button
            onClick={() => setClosed(true)}
            className="absolute -top-1 -right-1 z-10 h-5 w-5 rounded-full bg-muted/80 text-muted-foreground hover:bg-muted flex items-center justify-center"
            aria-label="Close ad"
          >
            <X className="h-3 w-3" />
          </button>
        )}
        <div className={`${sizeClasses[format]} flex items-center justify-center overflow-hidden`}>
          {/* Adsterra Banner - Script loads here */}
          <div id={containerId} className="w-full min-h-[90px]"></div>
        </div>
      </div>
    )
  }

  return null
}

// ============================================================
// STICKY MOBILE AD (Bottom of screen on mobile)
// ============================================================
export function StickyAd() {
  const [closed, setClosed] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)
  const network = getAdNetwork()

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (closed || !isVisible || network === "none") return null

  if (network === "adsterra" && ADSTERRA_STICKY_ID) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="relative">
          <button
            onClick={() => setClosed(true)}
            className="absolute -top-6 right-2 z-50 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
          >
            <X className="h-3 w-3" /> Close
          </button>
          <div id="adsterra-sticky-mobile"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  var d=document,z="${ADSTERRA_STICKY_ID}";
                  var s=document.createElement('script');
                  s.src='https://www.highperformanceformat.com/'+z+'/invoke.js';
                  s.async=true;
                  var c=document.getElementById('adsterra-sticky-mobile');
                  if(c)c.appendChild(s);
                })();
              `,
            }}
          />
        </div>
      </div>
    )
  }

  return null
}

// ============================================================
// IN-ARTICLE AD (Native Ad for blog posts)
// ============================================================
interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  const network = getAdNetwork()
  const containerId = `adsterra-native-${slot}`

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_NATIVE_ID) {
      const timer = setTimeout(() => {
        loadAdsterraNative(containerId, ADSTERRA_NATIVE_ID)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [network, containerId])

  if (network === "none") return null

  if (network === "adsterra" && ADSTERRA_NATIVE_ID) {
    return (
      <div className={`my-8 ${className}`}>
        <div id={containerId} className="w-full min-h-[250px]"></div>
      </div>
    )
  }

  return null
}

// ============================================================
// SIDEBAR AD (300x600 for blog listing)
// ============================================================
interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  const network = getAdNetwork()
  const containerId = `adsterra-sidebar-${slot}`

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_BANNER_ID) {
      const timer = setTimeout(() => {
        loadAdsterraBanner(containerId, ADSTERRA_BANNER_ID)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [network, containerId])

  if (network === "none") return null

  if (network === "adsterra" && ADSTERRA_BANNER_ID) {
    return (
      <div className={className}>
        <div id={containerId} className="w-full min-h-[600px]"></div>
      </div>
    )
  }

  return null
}

// ============================================================
// POPUNDER AD (Loads once per page session)
// Popunder = full page ad that appears behind the current tab
// ============================================================
let popunderLoaded = false

export function AdsterraPopunder() {
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_POPUNDER_ID && !popunderLoaded) {
      popunderLoaded = true
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(d,z,s){
          s.src='https://'+d+'/400/'+z;
          try{(document.body||document.documentElement).appendChild(s)}catch(e){}
        })('www.highperformanceformat.com','${ADSTERRA_POPUNDER_ID}',document.createElement('script'));
      `
      document.body.appendChild(script)
    }
  }, [network])

  return null
}

// ============================================================
// INTERSTITIAL AD (Full page ad between pages)
// ============================================================
let interstitialLoaded = false

export function AdsterraInterstitial() {
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_INTERSTITIAL_ID && !interstitialLoaded) {
      interstitialLoaded = true
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(d,z,s){
          s.src='https://'+d+'/400/'+z;
          try{(document.body||document.documentElement).appendChild(s)}catch(e){}
        })('www.highperformanceformat.com','${ADSTERRA_INTERSTITIAL_ID}',document.createElement('script'));
      `
      document.body.appendChild(script)
    }
  }, [network])

  return null
}
