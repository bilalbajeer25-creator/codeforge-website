"use client"

import * as React from "react"

// ============================================================
// ULTIMATE AD LOADER - Works in ALL browsers + in-app browsers
// ============================================================
// 
// Strategy:
// 1. Adsterra Banner/Native → iframe with srcDoc (ALWAYS works)
// 2. Adsterra Popunder/Social Bar/Smartlink → document.createElement (works in regular browsers)
// 3. Monetag ALL → iframe with src URL to static HTML files (ALWAYS works, even in apps)
//
// iframe method is the ONLY 100% reliable way to load third-party
// ad scripts because:
// - Scripts inside iframes execute independently
// - Custom attributes (data-zone, data-cfasync) are preserved
// - Works in ALL browsers including WhatsApp/Facebook/Instagram in-app browsers
// - No React/Next.js attribute stripping issues
// ============================================================

// Adsterra iframe-based ads (Banners & Native)
const ADSTERRA_IFRAME_ADS = [
  {
    id: "adsterra-banner-728x90",
    width: 728,
    height: 90,
    key: "2bcef742f07a8ca1e46ada9ce12a38d5",
  },
  {
    id: "adsterra-native-320x50",
    width: 320,
    height: 50,
    key: "b94ec979762f7b8f40c4033b13c7ad1f",
  },
]

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

// Monetag iframe-based ads (static HTML files)
const MONETAG_IFRAME_ADS = [
  {
    id: "monetag-multitag",
    src: "/monetag/multitag.html",
    width: 0,
    height: 0,
  },
  {
    id: "monetag-push-1",
    src: "/monetag/push-11013630.html",
    width: 0,
    height: 0,
  },
  {
    id: "monetag-push-2",
    src: "/monetag/push-11013418.html",
    width: 0,
    height: 0,
  },
  {
    id: "monetag-push-3",
    src: "/monetag/push-11013421.html",
    width: 0,
    height: 0,
  },
]

// Generate iframe srcDoc for Adsterra ads
function getAdsterraSrcDoc(key: string, width: number, height: number) {
  return `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;}</style></head><body><script>atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script src="https://www.highperformanceformat.com/${key}/invoke.js"></script></body></html>`
}

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

  return (
    <>
      {/* Adsterra Banner & Native - iframe srcDoc method */}
      {ADSTERRA_IFRAME_ADS.map((ad) => (
        <div key={ad.id} className="w-full flex justify-center my-2">
          <iframe
            srcDoc={getAdsterraSrcDoc(ad.key, ad.width, ad.height)}
            width={ad.width}
            height={ad.height}
            frameBorder="0"
            scrolling="no"
            style={{ maxWidth: "100%", border: "none", overflow: "hidden" }}
            title="Advertisement"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      ))}

      {/* Monetag ALL - iframe src method (100% reliable) */}
      {MONETAG_IFRAME_ADS.map((ad) => (
        <iframe
          key={ad.id}
          src={ad.src}
          width={ad.width}
          height={ad.height}
          frameBorder="0"
          scrolling="no"
          style={{ border: "none", overflow: "hidden", position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
          title="Advertisement"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      ))}
    </>
  )
}
