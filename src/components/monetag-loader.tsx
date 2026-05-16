"use client"

import Script from "next/script"
import * as React from "react"

// Monetag ad scripts loaded via next/script for maximum compatibility
// next/script ensures custom attributes (data-zone, data-cfasync) are preserved
// and works in all browsers including in-app browsers (WhatsApp, Facebook, Instagram)

export function MonetagLoader() {
  return (
    <>
      {/* Monetag Multitag (all-in-one) - Zone 239844 - BEST EARNING */}
      <Script
        src="https://quge5.com/88/tag.min.js"
        strategy="afterInteractive"
        data-zone="239844"
        data-cfasync="false"
      />
      {/* Monetag Push - Zone 11013630 */}
      <Script
        src="https://5gvci.com/act/files/tag.min.js?z=11013630"
        strategy="afterInteractive"
        data-cfasync="false"
      />
      {/* Monetag Push - Zone 11013418 */}
      <Script
        src="https://5gvci.com/act/files/tag.min.js?z=11013418"
        strategy="afterInteractive"
        data-cfasync="false"
      />
      {/* Monetag Push - Zone 11013421 */}
      <Script
        src="https://5gvci.com/act/files/tag.min.js?z=11013421"
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </>
  )
}
