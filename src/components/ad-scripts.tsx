"use client"

import * as React from "react"

// ============================================================
// AD LOADER - Adsterra Only
// ============================================================
//
// Strategy:
// 1. Adsterra Banner/Native → iframe with srcDoc (ALWAYS works)
// 2. Adsterra Popunder/Social Bar/Smartlink → document.createElement
//
// ============================================================

// Adsterra background ads (Popunder, Social Bar, Smartlink)
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
    // Load Adsterra background ads via document.createElement
    ADSTERRA_BG_ADS.forEach((ad) => {
      if (document.getElementById(ad.id)) return

      const container = document.createElement("div")
      container.id = ad.id
      container.style.display = "none"
      document.body.appendChild(container)

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

      const invokeScript = document.createElement("script")
      invokeScript.type = "text/javascript"
      invokeScript.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`
      invokeScript.async = true
      container.appendChild(invokeScript)
    })

    return () => {
      ADSTERRA_BG_ADS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
    }
  }, [])

  return null
}
