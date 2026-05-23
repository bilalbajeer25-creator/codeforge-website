"use client"

import * as React from "react"

// ============================================================
// COMPLETE AD LOADING SYSTEM
// Adsterra: Popunder, Social Bar, Smartlink (via createElement)
// Monetag: Push (3 zones) + Multitag (via createElement)
// All scripts loaded client-side only to avoid SSR issues
// Uses setAttribute() to preserve custom data-* attributes
// ============================================================

interface AdConfig {
  id: string
  type: "adsterra" | "monetag-push" | "monetag-multitag"
  scriptSrc: string
  // For Adsterra: the atOptions key
  atOptionsKey?: string
  // For Monetag: query param zone ID (z=)
  zoneId?: string
  // For Monetag: data-zone attribute
  dataZone?: string
}

const AD_CONFIGS: AdConfig[] = [
  // ===== ADSTERRA ADS =====
  {
    id: "adsterra-popunder",
    type: "adsterra",
    scriptSrc: "https://www.highperformanceformat.com/2b5918513cc0e37f04df78fa62d6219e/invoke.js",
    atOptionsKey: "2b5918513cc0e37f04df78fa62d6219e",
  },
  {
    id: "adsterra-social-bar",
    type: "adsterra",
    scriptSrc: "https://www.highperformanceformat.com/1e0b98e697ac434bb47e9df88c14aa1d/invoke.js",
    atOptionsKey: "1e0b98e697ac434bb47e9df88c14aa1d",
  },
  {
    id: "adsterra-smartlink",
    type: "adsterra",
    scriptSrc: "https://www.highperformanceformat.com/98e9f0d0503b840cac2081dfd778c8d0/invoke.js",
    atOptionsKey: "98e9f0d0503b840cac2081dfd778c8d0",
  },
  // ===== MONETAG PUSH ZONES =====
  {
    id: "monetag-push-11013418",
    type: "monetag-push",
    scriptSrc: "https://5gvci.com/act/files/tag.min.js",
    zoneId: "11013418",
  },
  {
    id: "monetag-push-11013421",
    type: "monetag-push",
    scriptSrc: "https://5gvci.com/act/files/tag.min.js",
    zoneId: "11013421",
  },
  {
    id: "monetag-push-11013630",
    type: "monetag-push",
    scriptSrc: "https://5gvci.com/act/files/tag.min.js",
    zoneId: "11013630",
  },
  // ===== MONETAG MULTITAG =====
  {
    id: "monetag-multitag-239844",
    type: "monetag-multitag",
    scriptSrc: "https://quge5.com/88/tag.min.js",
    dataZone: "239844",
  },
]

function loadAdScript(ad: AdConfig) {
  // Skip if already loaded
  if (document.getElementById(ad.id)) return

  const container = document.createElement("div")
  container.id = ad.id
  container.style.display = "none"
  document.body.appendChild(container)

  if (ad.type === "adsterra") {
    // Step 1: Set atOptions global variable for this ad
    const optionsScript = document.createElement("script")
    optionsScript.type = "text/javascript"
    optionsScript.textContent = `
      atOptions = {
        'key': '${ad.atOptionsKey}',
        'format': 'iframe',
        'height': 0,
        'width': 0,
        'params': {}
      };
    `
    container.appendChild(optionsScript)

    // Step 2: Load the invoke.js script
    const invokeScript = document.createElement("script")
    invokeScript.type = "text/javascript"
    invokeScript.src = ad.scriptSrc
    invokeScript.async = true
    container.appendChild(invokeScript)
  } else if (ad.type === "monetag-push") {
    // Monetag Push: script with z= query parameter
    const script = document.createElement("script")
    script.src = `${ad.scriptSrc}?z=${ad.zoneId}`
    script.setAttribute("data-cfasync", "false")
    script.async = true
    container.appendChild(script)
  } else if (ad.type === "monetag-multitag") {
    // Monetag Multitag: script with data-zone attribute
    const script = document.createElement("script")
    script.src = ad.scriptSrc
    script.setAttribute("data-zone", ad.dataZone || "")
    script.setAttribute("data-cfasync", "false")
    script.async = true
    container.appendChild(script)
  }
}

export function AdsterraScripts() {
  React.useEffect(() => {
    // Load all ads with staggered delays to avoid overwhelming the browser
    AD_CONFIGS.forEach((ad, index) => {
      setTimeout(() => {
        try {
          loadAdScript(ad)
        } catch (e) {
          console.warn(`Failed to load ad: ${ad.id}`, e)
        }
      }, index * 800) // 800ms delay between each ad
    })

    return () => {
      // Cleanup on unmount
      AD_CONFIGS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
    }
  }, [])

  return null
}
