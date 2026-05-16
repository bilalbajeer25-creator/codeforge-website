"use client"

import * as React from "react"

// Monetag ad scripts - ULTIMATE FIX
// Uses dangerouslySetInnerHTML to bypass ALL Next.js attribute stripping
// This ensures data-zone and data-cfasync attributes are preserved
// Works in ALL browsers including in-app browsers

export function MonetagLoader() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script src="https://quge5.com/88/tag.min.js" data-zone="239844" async data-cfasync="false"></script>
          <script src="https://5gvci.com/act/files/tag.min.js?z=11013630" async data-cfasync="false"></script>
          <script src="https://5gvci.com/act/files/tag.min.js?z=11013418" async data-cfasync="false"></script>
          <script src="https://5gvci.com/act/files/tag.min.js?z=11013421" async data-cfasync="false"></script>
        `,
      }}
    />
  )
}
