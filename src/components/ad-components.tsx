"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA AD CONFIGURATION - APPROVED! ✅
// Website: developertools.space-z.ai
// Zone IDs: Popunder=29351831, Native=29351832,
//           Banner=29351833, SocialBar=29351834, Smartlink=29351835
// ============================================================

// All Zone IDs hardcoded - guaranteed to work
const ZONE_BANNER = "29351833"
const ZONE_NATIVE = "29351832"
const ZONE_SOCIAL_BAR = "29351834"
const ZONE_POPUNDER = "29351831"
const ZONE_SMARTLINK = "29351835"

// Track which zones have been loaded
const loadedZones = new Set<string>()

// Load an Adsterra script into a container by zone ID
function loadAdsterraZone(containerId: string, zoneId: string) {
  if (typeof window === "undefined" || !zoneId) return
  if (loadedZones.has(containerId)) return

  const container = document.getElementById(containerId)
  if (!container) return
  if (container.querySelector("script")) return

  loadedZones.add(containerId)
  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.highperformanceformat.com/${zoneId}/invoke.js`
  container.appendChild(script)
}

// ============================================================
// HOOK: Wait until component is mounted on client
// ============================================================
function useIsMounted() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])
  return mounted
}

// ============================================================
// AD BANNER (728x90 Leaderboard) - Zone: 29351833
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
      const timer = setTimeout(() => loadAdsterraZone(containerId, ZONE_BANNER), 300)
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
// SOCIAL BAR / STICKY MOBILE AD - Zone: 29351834
// ============================================================
export function StickyAd() {
  const mounted = useIsMounted()
  const [closed, setClosed] = React.useState(false)
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    if (mounted && show) {
      loadAdsterraZone("adsterra-social-bar", ZONE_SOCIAL_BAR)
    }
  }, [mounted, show])

  if (!mounted || !show || closed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="relative">
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-6 right-2 z-50 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
        >
          <X className="h-3 w-3" /> Close
        </button>
        <div id="adsterra-social-bar" className="w-full min-h-[50px]"></div>
      </div>
    </div>
  )
}

// ============================================================
// IN-ARTICLE / NATIVE BANNER - Zone: 29351832
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
      const timer = setTimeout(() => loadAdsterraZone(containerId, ZONE_NATIVE), 300)
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
// SIDEBAR AD - Zone: 29351833 (same banner zone)
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
      const timer = setTimeout(() => loadAdsterraZone(containerId, ZONE_BANNER), 300)
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
// POPUNDER AD - Zone: 29351831 💰 HIGHEST EARNING
// ============================================================
let popunderLoaded = false

export function AdsterraPopunder() {
  const mounted = useIsMounted()

  React.useEffect(() => {
    if (mounted && !popunderLoaded) {
      popunderLoaded = true
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(d,z,s){
          s.src='https://'+d+'/400/'+z;
          try{(document.body||document.documentElement).appendChild(s)}catch(e){}
        })('www.highperformanceformat.com','${ZONE_POPUNDER}',document.createElement('script'));
      `
      document.body.appendChild(script)
    }
  }, [mounted])

  return null
}

// ============================================================
// SMARTLINK - Zone: 29351835
// ============================================================
let smartlinkLoaded = false

export function AdsterraSmartlink() {
  const mounted = useIsMounted()

  React.useEffect(() => {
    if (mounted && !smartlinkLoaded) {
      smartlinkLoaded = true
      const script = document.createElement("script")
      script.async = true
      script.innerHTML = `
        (function(d,z,s){
          s.src='https://'+d+'/400/'+z;
          try{(document.body||document.documentElement).appendChild(s)}catch(e){}
        })('www.highperformanceformat.com','${ZONE_SMARTLINK}',document.createElement('script'));
      `
      document.body.appendChild(script)
    }
  }, [mounted])

  return null
}
