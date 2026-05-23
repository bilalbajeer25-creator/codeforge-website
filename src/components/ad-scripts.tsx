"use client"

import * as React from "react"

// ============================================================
// AD LOADER - Adsterra Background Ads
// ============================================================
// Loads Popunder, Social Bar, and Smartlink ads
// These are non-display ads that run in the background
// Using direct script injection for maximum compatibility
// ============================================================

const ADSTERRA_BG_ADS = [
  {
    id: "adsterra-popunder",
    key: "2b5918513cc0e37f04df78fa62d6219e",
  },
  {
    id: "adsterra-social-bar",
    key: "1e0b98e697ac434bb47e9df88c14aa1d",
  },
  {
    id: "adsterra-smartlink",
    key: "98e9f0d0503b840cac2081dfd778c8d0",
  },
]

export function AdsterraScripts() {
  React.useEffect(() => {
    // Wait for page to fully load before injecting ad scripts
    const loadAds = () => {
      ADSTERRA_BG_ADS.forEach((ad, index) => {
        // Skip if already loaded
        if (document.getElementById(ad.id)) return

        // Create container
        const container = document.createElement("div")
        container.id = ad.id
        container.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;"
        document.body.appendChild(container)

        // Create atOptions script
        const optionsScript = document.createElement("script")
        optionsScript.type = "text/javascript"
        optionsScript.textContent = `
          atOptions = {
            'key': '${ad.key}',
            'format': 'iframe',
            'height': 0,
            'width': 0,
            'params': {}
          };
        `
        container.appendChild(optionsScript)

        // Create invoke script
        const invokeScript = document.createElement("script")
        invokeScript.type = "text/javascript"
        invokeScript.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`
        invokeScript.async = true
        invokeScript.onerror = () => {
          console.warn(`Adsterra ad ${ad.id} failed to load, retrying...`)
          // Retry once after 5 seconds
          setTimeout(() => {
            const existingContainer = document.getElementById(ad.id)
            if (existingContainer) {
              const retryScript = document.createElement("script")
              retryScript.type = "text/javascript"
              retryScript.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`
              retryScript.async = true
              existingContainer.appendChild(retryScript)
            }
          }, 5000)
        }
        container.appendChild(invokeScript)
      })
    }

    // Load ads after a small delay to not block initial page render
    const timer = setTimeout(loadAds, 2000)

    return () => {
      clearTimeout(timer)
      ADSTERRA_BG_ADS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
    }
  }, [])

  return null
}
