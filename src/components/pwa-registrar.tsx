"use client"

import * as React from "react"

export function PWARegistrar() {
  React.useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered:", registration.scope)
        })
        .catch((error) => {
          console.log("SW registration failed:", error)
        })
    }

    // Show install prompt after delay
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      // Store the event for later use
      ;(window as any).deferredInstallPrompt = e

      // Show install banner after 5 seconds
      setTimeout(() => {
        const existing = document.getElementById("pwa-install-banner")
        if (existing) return

        const banner = document.createElement("div")
        banner.id = "pwa-install-banner"
        banner.innerHTML = `
          <div style="
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #059669;
            color: white;
            padding: 14px 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 90vw;
          ">
            <div>
              <div style="font-weight:700;font-size:15px;">Install CodeForge App</div>
              <div style="font-size:13px;opacity:0.9;">Use offline & get faster access</div>
            </div>
            <button id="pwa-install-btn" style="
              background: white;
              color: #059669;
              border: none;
              padding: 8px 18px;
              border-radius: 8px;
              font-weight: 700;
              font-size: 14px;
              cursor: pointer;
              white-space: nowrap;
            ">Install</button>
            <button id="pwa-install-close" style="
              background: none;
              border: none;
              color: white;
              font-size: 20px;
              cursor: pointer;
              padding: 4px;
              opacity: 0.7;
            ">&times;</button>
          </div>
        `
        document.body.appendChild(banner)

        document.getElementById("pwa-install-btn")?.addEventListener("click", () => {
          ;(window as any).deferredInstallPrompt?.prompt()
          banner.remove()
        })

        document.getElementById("pwa-install-close")?.addEventListener("click", () => {
          banner.remove()
        })

        // Auto-dismiss after 10 seconds
        setTimeout(() => banner.remove(), 15000)
      }, 5000)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  return null
}
