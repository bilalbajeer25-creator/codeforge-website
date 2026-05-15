"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA AD CONFIGURATION - APPROVED! ✅
// Website: developertools.space-z.ai
// Approved: 15 May 2026
// ============================================================
// Zone IDs from Adsterra:
// Popunder:    29351831
// Native Banner: 29351832
// Banner 728x90: 29351833
// Social Bar:  29351834
// Smartlink:   29351835
// ============================================================

type AdNetwork = "none" | "adsterra"

function getAdNetwork(): AdNetwork {
  if (typeof window === "undefined") return "none"
  const env = process.env.NEXT_PUBLIC_AD_NETWORK as AdNetwork
  return env || "adsterra" // Default to adsterra since we're approved
}

// Adsterra Zone IDs - Hardcoded from approval + env fallback
const ADSTERRA_BANNER_ID = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID || "29351833"
const ADSTERRA_NATIVE_ID = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_ID || "29351832"
const ADSTERRA_STICKY_ID = process.env.NEXT_PUBLIC_ADSTERRA_STICKY_ID || "29351834"
const ADSTERRA_POPUNDER_ID = process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_ID || "29351831"
const ADSTERRA_SMARTLINK_ID = process.env.NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_ID || "29351835"

// ============================================================
// ADSTERRA SCRIPT LOADER
// Adsterra loads ads via script tags:
// https://www.highperformanceformat.com/{ZONE_ID}/invoke.js
// ============================================================

function loadAdsterraScript(containerId: string, zoneId: string) {
  if (typeof window === "undefined" || !zoneId) return

  const container = document.getElementById(containerId)
  if (!container) return

  // Don't load twice in same container
  if (container.querySelector("script")) return

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.highperformanceformat.com/${zoneId}/invoke.js`
  container.appendChild(script)
}

// ============================================================
// AD BANNER COMPONENT (728x90 Leaderboard)
// Zone ID: 29351833
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
  // Unique ID for each ad slot so multiple banners can coexist
  const containerId = `adsterra-banner-${slot}`

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_BANNER_ID) {
      const timer = setTimeout(() => {
        loadAdsterraScript(containerId, ADSTERRA_BANNER_ID)
      }, 200)
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
          {/* Adsterra Banner 728x90 - Zone: 29351833 */}
          <div id={containerId} className="w-full min-h-[90px]"></div>
        </div>
      </div>
    )
  }

  return null
}

// ============================================================
// SOCIAL BAR / STICKY MOBILE AD
// Zone ID: 29351834
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
          {/* Adsterra Social Bar - Zone: 29351834 */}
          <div id="adsterra-social-bar"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  var c=document.getElementById('adsterra-social-bar');
                  if(!c)return;
                  if(c.querySelector('script'))return;
                  var s=document.createElement('script');
                  s.src='https://www.highperformanceformat.com/${ADSTERRA_STICKY_ID}/invoke.js';
                  s.async=true;
                  c.appendChild(s);
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
// IN-ARTICLE / NATIVE BANNER AD
// Zone ID: 29351832
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
        loadAdsterraScript(containerId, ADSTERRA_NATIVE_ID)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [network, containerId])

  if (network === "none") return null

  if (network === "adsterra" && ADSTERRA_NATIVE_ID) {
    return (
      <div className={`my-8 ${className}`}>
        {/* Adsterra Native Banner - Zone: 29351832 */}
        <div id={containerId} className="w-full min-h-[250px]"></div>
      </div>
    )
  }

  return null
}

// ============================================================
// SIDEBAR AD (300x600)
// Uses Banner Zone ID: 29351833
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
        loadAdsterraScript(containerId, ADSTERRA_BANNER_ID)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [network, containerId])

  if (network === "none") return null

  if (network === "adsterra" && ADSTERRA_BANNER_ID) {
    return (
      <div className={className}>
        {/* Adsterra Sidebar Banner - Zone: 29351833 */}
        <div id={containerId} className="w-full min-h-[600px]"></div>
      </div>
    )
  }

  return null
}

// ============================================================
// POPUNDER AD - HIGHEST EARNING! 💰
// Zone ID: 29351831
// Loads once per page session
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
// SMARTLINK AD
// Zone ID: 29351835
// Smartlink redirects users to best-converting offers
// ============================================================
let smartlinkLoaded = false

export function AdsterraSmartlink() {
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "adsterra" && ADSTERRA_SMARTLINK_ID && !smartlinkLoaded) {
      smartlinkLoaded = true
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(d,z,s){
          s.src='https://'+d+'/400/'+z;
          try{(document.body||document.documentElement).appendChild(s)}catch(e){}
        })('www.highperformanceformat.com','${ADSTERRA_SMARTLINK_ID}',document.createElement('script'));
      `
      document.body.appendChild(script)
    }
  }, [network])

  return null
}
