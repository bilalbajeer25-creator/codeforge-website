"use client"

import * as React from "react"

// Adsterra special ad scripts (Popunder, Social Bar, Smartlink)
// These are loaded client-side only to avoid SSR issues with document.write

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

// Monetag ad scripts
// Multitag (all-in-one) - covers Push + Popunder + Banner + Vignette etc.
// Plus 3 Push zones for extra push subscription earning
const MONETAG_SCRIPTS = [
  // Multitag Zone 239844 - all-in-one format (BEST EARNING)
  {
    id: "monetag-multitag-239844",
    src: "https://quge5.com/88/tag.min.js",
    dataZone: "239844",
    cfasync: false,
  },
  // Push Zone 11013630
  {
    id: "monetag-push-11013630",
    src: "https://5gvci.com/act/files/tag.min.js?z=11013630",
    cfasync: false,
  },
  // Push Zone 11013418
  {
    id: "monetag-push-11013418",
    src: "https://5gvci.com/act/files/tag.min.js?z=11013418",
    cfasync: false,
  },
  // Push Zone 11013421
  {
    id: "monetag-push-11013421",
    src: "https://5gvci.com/act/files/tag.min.js?z=11013421",
    cfasync: false,
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

    // Monetag scripts
    MONETAG_SCRIPTS.forEach((ad) => {
      if (document.getElementById(ad.id)) return

      const script = document.createElement("script")
      script.id = ad.id
      script.src = ad.src
      script.async = true
      if (ad.cfasync === false) {
        script.setAttribute("data-cfasync", "false")
      }
      if (ad.dataZone) {
        script.setAttribute("data-zone", ad.dataZone)
      }
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup on unmount
      AD_SCRIPTS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
      MONETAG_SCRIPTS.forEach((ad) => {
        const el = document.getElementById(ad.id)
        if (el) el.remove()
      })
    }
  }, [])

  return null
}
