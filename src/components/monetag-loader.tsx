"use client"

import * as React from "react"

// Monetag ads are now loaded via iframe in ad-scripts.tsx
// This file is kept for compatibility but does nothing
// All Monetag ads use /monetag/*.html files loaded as iframes
// This ensures 100% compatibility with ALL browsers including in-app browsers

export function MonetagLoader() {
  return null
}
