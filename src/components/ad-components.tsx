"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// ADSTERRA ADS - EXACT SCRIPTS FROM DASHBOARD
// Banner & Native: Must be injected via createElement (React doesn't execute scripts in innerHTML)
// Popunder, Social Bar, Smartlink: In layout.tsx (auto-inject from head)
// ============================================================

// ============================================================
// AD BANNER (728x90) - EXACT CODE FROM ADSTERRA
// Key: 1e8dd3e93f030e954013bb317706f109
// ============================================================
interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const [closed, setClosed] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return

    // Prevent double-load
    if (containerRef.current.querySelector("script")) return

    const height = format === "horizontal" ? 90 : 250
    const width = format === "horizontal" ? 728 : 300

    // 1. Create atOptions config script
    const configScript = document.createElement("script")
    configScript.type = "text/javascript"
    configScript.textContent = `
      atOptions = {
        'key' : '1e8dd3e93f030e954013bb317706f109',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `
    containerRef.current.appendChild(configScript)

    // 2. Create invoke.js script
    const invokeScript = document.createElement("script")
    invokeScript.type = "text/javascript"
    invokeScript.src = "https://www.highperformanceformat.com/1e8dd3e93f030e954013bb317706f109/invoke.js"
    invokeScript.async = true
    containerRef.current.appendChild(invokeScript)
  }, [mounted, format])

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
        <div ref={containerRef} id={`adsterra-banner-${slot}`} className="w-full min-h-[90px]"></div>
      </div>
    </div>
  )
}

// ============================================================
// IN-ARTICLE / NATIVE BANNER - EXACT CODE FROM ADSTERRA
// Key: 79d0c5ec789aea30f7ce3791e4539308
// ============================================================
interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  const [mounted, setMounted] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return
    if (containerRef.current.querySelector("script")) return

    // Create native banner script
    const script = document.createElement("script")
    script.async = true
    script.setAttribute("data-cfasync", "false")
    script.src = "https://pl29452331.profitablecpmratenetwork.com/79d0c5ec789aea30f7ce3791e4539308/invoke.js"
    containerRef.current.appendChild(script)

    // Create container div that native banner needs
    const adDiv = document.createElement("div")
    adDiv.id = "container-79d0c5ec789aea30f7ce3791e4539308"
    containerRef.current.appendChild(adDiv)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className={`my-8 ${className}`}>
      <div ref={containerRef} id={`adsterra-native-${slot}`} className="w-full min-h-[250px]"></div>
    </div>
  )
}

// ============================================================
// SIDEBAR AD - Uses Banner script with sidebar size
// ============================================================
interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  const [mounted, setMounted] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => { setMounted(true) }, [])

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return
    if (containerRef.current.querySelector("script")) return

    // 1. Create atOptions config script (sidebar size 300x600)
    const configScript = document.createElement("script")
    configScript.type = "text/javascript"
    configScript.textContent = `
      atOptions = {
        'key' : '1e8dd3e93f030e954013bb317706f109',
        'format' : 'iframe',
        'height' : 600,
        'width' : 300,
        'params' : {}
      };
    `
    containerRef.current.appendChild(configScript)

    // 2. Create invoke.js script
    const invokeScript = document.createElement("script")
    invokeScript.type = "text/javascript"
    invokeScript.src = "https://www.highperformanceformat.com/1e8dd3e93f030e954013bb317706f109/invoke.js"
    invokeScript.async = true
    containerRef.current.appendChild(invokeScript)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className={className}>
      <div ref={containerRef} id={`adsterra-sidebar-${slot}`} className="w-full min-h-[600px]"></div>
    </div>
  )
}

// ============================================================
// STICKY AD - Social Bar handles from layout.tsx
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
