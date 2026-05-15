"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA ADS - EXACT SCRIPTS FROM DASHBOARD
// Website: developertools.space-z.ai
// Approved: 15 May 2026
// ============================================================

// Ad keys from Adsterra dashboard
const BANNER_KEY = "1e8dd3e93f030e954013bb317706f109"
const NATIVE_KEY = "79d0c5ec789aea30f7ce3791e4539308"

// Track loaded zones to prevent duplicates
const loadedZones = new Set<string>()

// Load an ad script into a container div
function loadAdScript(containerId: string, scriptSrc: string, isNative: boolean = false) {
  if (typeof window === "undefined") return
  if (loadedZones.has(containerId)) return

  const container = document.getElementById(containerId)
  if (!container) return
  if (container.querySelector("script")) return

  loadedZones.add(containerId)

  if (isNative) {
    // Native Banner uses async script
    const script = document.createElement("script")
    script.async = true
    script.setAttribute("data-cfasync", "false")
    script.src = scriptSrc
    container.appendChild(script)
  } else {
    // Banner uses atOptions config + invoke.js
    const configScript = document.createElement("script")
    configScript.innerHTML = `
      atOptions = {
        'key' : '${BANNER_KEY}',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `
    container.appendChild(configScript)

    const invokeScript = document.createElement("script")
    invokeScript.src = scriptSrc
    invokeScript.async = true
    container.appendChild(invokeScript)
  }
}

// Hook: wait until client-side mounted
function useIsMounted() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])
  return mounted
}

// ============================================================
// AD BANNER (728x90) - Key: 1e8dd3e93f030e954013bb317706f109
// ============================================================
interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const mounted = useIsMounted()
  const [closed, setClosed] = React.useState(false)
  const containerId = `adsterra-banner-${slot}`

  React.useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        loadAdScript(containerId, `https://www.highperformanceformat.com/${BANNER_KEY}/invoke.js`, false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [mounted, containerId])

  if (!mounted || closed) return null

  const sizeClasses = {
    horizontal: "w-full min-h-[90px]",
    vertical: "w-full min-h-[250px]",
    rectangle: "w-full min-h-[250px] max-w-[336px]",
    sidebar: "w-full min-h-[600px]",
  }

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
        <div id={containerId} className="w-full min-h-[90px]"></div>
      </div>
    </div>
  )
}

// ============================================================
// SOCIAL BAR / STICKY MOBILE AD
// Script loaded from layout.tsx (Social Bar Zone)
// ============================================================
export function StickyAd() {
  // Social Bar is loaded via layout.tsx script tag
  // It automatically creates a sticky bar at bottom of mobile
  // No additional component needed - just export empty for compatibility
  return null
}

// ============================================================
// IN-ARTICLE / NATIVE BANNER AD - Key: 79d0c5ec789aea30f7ce3791e4539308
// ============================================================
interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  const mounted = useIsMounted()
  const containerId = `adsterra-native-${slot}`

  React.useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        loadAdScript(containerId, `https://pl29452331.profitablecpmratenetwork.com/${NATIVE_KEY}/invoke.js`, true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [mounted, containerId])

  if (!mounted) return null

  return (
    <div className={`my-8 ${className}`}>
      <div id={containerId} className="w-full min-h-[250px]"></div>
    </div>
  )
}

// ============================================================
// SIDEBAR AD - Uses Banner Key
// ============================================================
interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  const mounted = useIsMounted()
  const containerId = `adsterra-sidebar-${slot}`

  React.useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        loadAdScript(containerId, `https://www.highperformanceformat.com/${BANNER_KEY}/invoke.js`, false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [mounted, containerId])

  if (!mounted) return null

  return (
    <div className={className}>
      <div id={containerId} className="w-full min-h-[600px]"></div>
    </div>
  )
}

// ============================================================
// POPUNDER - Loaded via layout.tsx script tag
// ============================================================
export function AdsterraPopunder() {
  // Popunder is loaded via layout.ts5 script tag
  return null
}

// ============================================================
// SMARTLINK - Loaded via layout.tsx script tag
// ============================================================
export function AdsterraSmartlink() {
  // Smartlink is loaded via layout.tsx script tag
  return null
}
