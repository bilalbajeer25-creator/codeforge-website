"use client"

import * as React from "react"
import { X } from "lucide-react"

// ============================================================
// AD CONFIGURATION
// ============================================================
// Set your ad network IDs below when you sign up.
// Only ONE network should be active at a time.
// After signing up, set NEXT_PUBLIC_AD_NETWORK in your .env file
// ============================================================

type AdNetwork = "none" | "ezoic" | "medianet" | "adsterra"

function getAdNetwork(): AdNetwork {
  if (typeof window === "undefined") return "none"
  return (process.env.NEXT_PUBLIC_AD_NETWORK as AdNetwork) || "none"
}

// Ezoic Site ID - Get this from your Ezoic dashboard
const EZOIC_SITE_ID = process.env.NEXT_PUBLIC_EZOIC_SITE_ID || ""

// Media.net Data CID - Get this from your Media.net dashboard
const MEDIANET_CID = process.env.NEXT_PUBLIC_MEDIANET_CID || ""

// Adsterra Zone IDs - Get these from your Adsterra dashboard
const ADSTERRA_BANNER_ID = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID || ""
const ADSTERRA_NATIVE_ID = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_ID || ""
const ADSTERRA_STICKY_ID = process.env.NEXT_PUBLIC_ADSTERRA_STICKY_ID || ""

// ============================================================
// EZOIC SCRIPT LOADER (loads once per page)
// ============================================================
let ezoicLoaded = false

function loadEzoicScript() {
  if (ezoicLoaded || typeof window === "undefined" || !EZOIC_SITE_ID) return
  ezoicLoaded = true

  // Ezoic's standard integration script
  const script = document.createElement("script")
  script.src = `//www.ezojs.com/ezoic/sa.min.js`
  script.async = true
  script.dataset.ezscrex = "false"
  script.dataset.cfasync = "false"
  document.head.appendChild(script)

  // Ezoic placeholder script
  const script2 = document.createElement("script")
  script2.dataset.ezscrex = "false"
  script2.dataset.cfasync = "false"
  script2.innerHTML = `
    window.ezstandalone = window.ezstandalone || {};
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function() {
      ezstandalone.define(${EZOIC_SITE_ID});
      ezstandalone.enable();
      ezstandalone.display();
    });
  `
  document.head.appendChild(script2)
}

// ============================================================
// MEDIA.NET SCRIPT LOADER (loads once per page)
// ============================================================
let medianetLoaded = false

function loadMedianetScript() {
  if (medianetLoaded || typeof window === "undefined" || !MEDIANET_CID) return
  medianetLoaded = true

  const script = document.createElement("script")
  script.src = "//contextual.media.net/dmedianet.js"
  script.async = true
  script.dataset.cid = MEDIANET_CID
  document.head.appendChild(script)
}

// ============================================================
// ADSTERRA SCRIPT LOADER
// ============================================================
let adsterraLoaded = false

function loadAdsterraScript(zoneId: string) {
  if (adsterraLoaded || typeof window === "undefined" || !zoneId) return
  adsterraLoaded = true

  const script = document.createElement("script")
  script.src = `https://www.highperformanceformat.com/${zoneId}/invoke.js`
  script.async = true
  document.head.appendChild(script)
}

// ============================================================
// AD BANNER COMPONENT
// ============================================================
interface AdBannerProps {
  slot?: string
  format?: "horizontal" | "vertical" | "rectangle" | "sidebar"
  className?: string
  showClose?: boolean
}

export function AdBanner({ slot = "banner", format = "horizontal", className = "", showClose = false }: AdBannerProps) {
  const [closed, setClosed] = React.useState(false)
  const adRef = React.useRef<HTMLDivElement>(null)
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "ezoic") loadEzoicScript()
    if (network === "medianet") loadMedianetScript()
    if (network === "adsterra" && ADSTERRA_BANNER_ID) loadAdsterraScript(ADSTERRA_BANNER_ID)
  }, [network])

  if (closed || network === "none") return null

  const sizeClasses = {
    horizontal: "w-full min-h-[90px] md:min-h-[90px]",
    vertical: "w-full min-h-[250px]",
    rectangle: "w-full min-h-[250px] max-w-[336px]",
    sidebar: "w-full min-h-[250px]",
  }

  // ============================================================
  // EZOIC AD
  // ============================================================
  if (network === "ezoic") {
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
        <div
          ref={adRef}
          className={`${sizeClasses[format]} flex items-center justify-center overflow-hidden`}
        >
          {/* Ezoic Ad Placeholder - Ezoic auto-fills these divs */}
          <div id={`ezoic-pub-ad-placeholder-${slot}`} className="w-full min-h-[90px]">
            {/* Ezoic will inject the ad here automatically */}
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // MEDIA.NET AD
  // ============================================================
  if (network === "medianet") {
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
        <div
          ref={adRef}
          className={`${sizeClasses[format]} flex items-center justify-center overflow-hidden`}
        >
          {/* Media.net Ad Unit */}
          <div id={`medianet-${slot}`}>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  try {
                    window._mNHandle.queue.push(function(){
                      window._mNDetails.loadTag("${medianetId(slot)}", "${medianetSize(format)}", "${MEDIANET_CID}");
                    });
                  } catch(e) {}
                `,
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // ADSTERRA AD
  // ============================================================
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
        <div
          ref={adRef}
          className={`${sizeClasses[format]} flex items-center justify-center overflow-hidden`}
        >
          {/* Adsterra Banner */}
          <div id={`adsterra-${slot}`}>
            <iframe
              src={`https://www.highperformanceformat.com/${ADSTERRA_BANNER_ID}?size=${adsterraSize(format)}`}
              width="100%"
              height={format === "horizontal" ? "90" : "250"}
              frameBorder="0"
              scrolling="no"
              title="Advertisement"
            />
          </div>
        </div>
      </div>
    )
  }

  return null
}

// Helper: Media.net ad unit IDs
function medianetId(slot: string): string {
  const ids: Record<string, string> = {
    "home-after-tools": "123456789",
    "home-after-blog": "123456790",
    "home-bottom": "123456791",
    "blog-sidebar": "123456792",
    "blog-bottom": "123456793",
    "post-top": "123456794",
    "post-mid": "123456795",
    "post-bottom": "123456796",
    "tools-bottom": "123456797",
  }
  return ids[slot] || "123456789"
}

// Helper: Media.net size
function medianetSize(format: string): string {
  const sizes: Record<string, string> = {
    horizontal: "728x90",
    vertical: "300x250",
    rectangle: "336x280",
    sidebar: "300x600",
  }
  return sizes[format] || "728x90"
}

// Helper: Adsterra size
function adsterraSize(format: string): string {
  const sizes: Record<string, string> = {
    horizontal: "728x90",
    vertical: "300x250",
    rectangle: "336x280",
    sidebar: "300x600",
  }
  return sizes[format] || "728x90"
}

// ============================================================
// STICKY MOBILE AD
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

  // ============================================================
  // EZOIC STICKY AD
  // ============================================================
  if (network === "ezoic") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t">
        <div className="relative">
          <button
            onClick={() => setClosed(true)}
            className="absolute -top-6 right-2 z-10 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
          >
            <X className="h-3 w-3" /> Close
          </button>
          <div className="w-full min-h-[50px] flex items-center justify-center">
            <div id="ezoic-pub-ad-placeholder-sticky-mobile" className="w-full min-h-[50px]">
              {/* Ezoic auto-fills this */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // MEDIA.NET STICKY AD
  // ============================================================
  if (network === "medianet") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t">
        <div className="relative">
          <button
            onClick={() => setClosed(true)}
            className="absolute -top-6 right-2 z-10 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
          >
            <X className="h-3 w-3" /> Close
          </button>
          <div className="w-full min-h-[50px] flex items-center justify-center">
            <div id="medianet-sticky-mobile">
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    try {
                      window._mNHandle.queue.push(function(){
                        window._mNDetails.loadTag("sticky-mobile", "320x50", "${MEDIANET_CID}");
                      });
                    } catch(e) {}
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ============================================================
  // ADSTERRA STICKY AD
  // ============================================================
  if (network === "adsterra" && ADSTERRA_STICKY_ID) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div id={`adsterra-sticky-${ADSTERRA_STICKY_ID}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('www.highperformanceformat.com','${ADSTERRA_STICKY_ID}',document.createElement('script'))
              `,
            }}
          />
        </div>
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-6 right-2 z-10 h-6 px-2 rounded-t bg-muted/80 text-muted-foreground hover:bg-muted flex items-center gap-1 text-xs"
        >
          <X className="h-3 w-3" /> Close
        </button>
      </div>
    )
  }

  return null
}

// ============================================================
// IN-ARTICLE AD (for blog posts)
// ============================================================
interface InArticleAdProps {
  slot?: string
  className?: string
}

export function InArticleAd({ slot = "in-article", className = "" }: InArticleAdProps) {
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "ezoic") loadEzoicScript()
    if (network === "medianet") loadMedianetScript()
  }, [network])

  if (network === "none") return null

  // ============================================================
  // EZOIC IN-ARTICLE AD
  // ============================================================
  if (network === "ezoic") {
    return (
      <div className={`my-8 ${className}`}>
        <div id={`ezoic-pub-ad-placeholder-${slot}`} className="w-full min-h-[250px]">
          {/* Ezoic auto-fills this with in-article ad */}
        </div>
      </div>
    )
  }

  // ============================================================
  // MEDIA.NET IN-ARTICLE AD
  // ============================================================
  if (network === "medianet") {
    return (
      <div className={`my-8 ${className}`}>
        <div id={`medianet-${slot}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  window._mNHandle.queue.push(function(){
                    window._mNDetails.loadTag("${medianetId(slot)}", "728x90", "${MEDIANET_CID}");
                  });
                } catch(e) {}
              `,
            }}
          />
        </div>
      </div>
    )
  }

  // ============================================================
  // ADSTERRA IN-ARTICLE AD (Native Ad)
  // ============================================================
  if (network === "adsterra" && ADSTERRA_NATIVE_ID) {
    return (
      <div className={`my-8 ${className}`}>
        <div id={`adsterra-native-${slot}`}>
          <iframe
            src={`https://www.highperformanceformat.com/${ADSTERRA_NATIVE_ID}`}
            width="100%"
            height="250"
            frameBorder="0"
            scrolling="no"
            title="Advertisement"
          />
        </div>
      </div>
    )
  }

  return null
}

// ============================================================
// SIDEBAR AD (for blog listing)
// ============================================================
interface SidebarAdProps {
  slot?: string
  className?: string
}

export function SidebarAd({ slot = "sidebar", className = "" }: SidebarAdProps) {
  const network = getAdNetwork()

  React.useEffect(() => {
    if (network === "ezoic") loadEzoicScript()
    if (network === "medianet") loadMedianetScript()
  }, [network])

  if (network === "none") return null

  // ============================================================
  // EZOIC SIDEBAR AD
  // ============================================================
  if (network === "ezoic") {
    return (
      <div className={className}>
        <div id={`ezoic-pub-ad-placeholder-${slot}`} className="w-full min-h-[250px]">
          {/* Ezoic auto-fills this */}
        </div>
      </div>
    )
  }

  // ============================================================
  // MEDIA.NET SIDEBAR AD
  // ============================================================
  if (network === "medianet") {
    return (
      <div className={className}>
        <div id={`medianet-${slot}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  window._mNHandle.queue.push(function(){
                    window._mNDetails.loadTag("${medianetId(slot)}", "300x600", "${MEDIANET_CID}");
                  });
                } catch(e) {}
              `,
            }}
          />
        </div>
      </div>
    )
  }

  // ============================================================
  // ADSTERRA SIDEBAR AD
  // ============================================================
  if (network === "adsterra" && ADSTERRA_BANNER_ID) {
    return (
      <div className={className}>
        <div id={`adsterra-${slot}`}>
          <iframe
            src={`https://www.highperformanceformat.com/${ADSTERRA_BANNER_ID}?size=300x600`}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Advertisement"
          />
        </div>
      </div>
    )
  }

  return null
}
