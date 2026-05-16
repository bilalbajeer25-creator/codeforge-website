"use client"

import * as React from "react"

// Adsterra special ad scripts (Popunder, Social Bar, Smartlink)
// These are loaded client-side only to avoid SSR issues with document.write
// NOTE: Monetag scripts are loaded via static <head> tags in layout.tsx
// for in-app browser compatibility (WhatsApp, Facebook, Instagram etc.)

const AD_SCRIPTS = [
  {
    id: "adsterra-popunder",
    key: "2b5918513cc0e37f04df78fa62d6219e",
    type: "popunder",
  },
  {
    id: "adsterra-social-bar",
    key: "1e0b98e697ac434bb47e9df88c14aa1d",
    type: "social-bar",
  },
  {
    id: "adsterra-smartlink",
    key: "98e9f0d0503b840cac2081dfd778c8d0",
    type: "smartlink",
  },
]

export function AdsterraScripts() {
  React.useEffect(() => {
    AD_SCRIPTS.forEach((ad) => {
      // Skip if already loaded
      if (document.getElementById(ad.id)) return

      const container = document.createElement("div")
      container.id = ad.id
      container.style.display = "none"
      document.body.appendChild(container)

      // Create the atOptions variable
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

      // Load the invoke.js script
      const invokeScript = document.createElement("script")
      invokeScript.type = "text/javascript"
      invokeScript.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`
      invokeScript.async = true
      container.appendChild(invokeScript)
    })

    return () => {
      // Cleanup on unmount
      AD_SCRIPTS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
    }
  }, [])

  return null
}
