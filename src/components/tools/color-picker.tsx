"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"

interface ColorPickerProps {
  onNavigate: (page: PageName) => void
}

export function ColorPicker({ onNavigate }: ColorPickerProps) {
  const [color, setColor] = React.useState("#10b981")
  const [recentColors, setRecentColors] = React.useState<string[]>([])
  const [copiedField, setCopiedField] = React.useState<string | null>(null)

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
      : { r: 0, g: 0, b: 0 }
  }

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255; g /= 255; b /= 255
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h = 0, s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
        case g: h = ((b - r) / d + 2) / 6; break
        case b: h = ((r - g) / d + 4) / 6; break
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
  }

  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  const copyValue = (label: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(label)
    toast.success(`Copied ${label}: ${value}`)
    setTimeout(() => setCopiedField(null), 2000)
    if (!recentColors.includes(color)) {
      setRecentColors((prev) => [color, ...prev].slice(0, 8))
    }
  }

  const colorValues = [
    { label: "HEX", value: color.toUpperCase() },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
  ]

  const paletteSuggestions = [
    { name: "Complementary", colors: [color, `hsl(${(hsl.h + 180) % 360}, ${hsl.s}%, ${hsl.l}%)`] },
    { name: "Analogous", colors: [`hsl(${(hsl.h + 330) % 360}, ${hsl.s}%, ${hsl.l}%)`, color, `hsl(${(hsl.h + 30) % 360}, ${hsl.s}%, ${hsl.l}%)`] },
    { name: "Triadic", colors: [color, `hsl(${(hsl.h + 120) % 360}, ${hsl.s}%, ${hsl.l}%)`, `hsl(${(hsl.h + 240) % 360}, ${hsl.s}%, ${hsl.l}%)`] },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">Design Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Color <span className="text-emerald-600 dark:text-emerald-400">Picker</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Pick colors and convert between HEX, RGB, and HSL. Click any value to copy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Picker */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-32 h-32 rounded-xl cursor-pointer border-0 p-0"
                    />
                  </div>
                  <div className="flex-1 space-y-3 w-full">
                    {colorValues.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                        onClick={() => copyValue(item.label, item.value)}
                      >
                        <div>
                          <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                          <p className="font-mono text-sm font-medium">{item.value}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          {copiedField === item.label ? (
                            <Check className="h-4 w-4 text-emerald-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HEX Input */}
                <div className="mt-4 flex items-center gap-3">
                  <label className="text-sm font-medium text-muted-foreground shrink-0">HEX:</label>
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => {
                      const val = e.target.value
                      if (/^#[0-9a-fA-F]{0,6}$/.test(val)) setColor(val)
                    }}
                    className="font-mono text-sm px-3 py-2 border rounded-lg bg-background flex-1"
                    maxLength={7}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Palette Suggestions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold mb-4">Color Harmonies</h3>
                <div className="space-y-4">
                  {paletteSuggestions.map((palette) => (
                    <div key={palette.name}>
                      <p className="text-xs text-muted-foreground mb-2">{palette.name}</p>
                      <div className="flex gap-2">
                        {palette.colors.map((c, i) => (
                          <button
                            key={i}
                            className="h-10 flex-1 rounded-lg border transition-transform hover:scale-105"
                            style={{ backgroundColor: c }}
                            onClick={() => {
                              // Convert HSL string to hex for the picker
                              if (c.startsWith("hsl")) {
                                const match = c.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
                                if (match) {
                                  const [, h, s, l] = match.map(Number)
                                  const a = s / 100 * Math.min(l / 100, 1 - l / 100)
                                  const f = (n: number) => {
                                    const k = (n + h / 30) % 12
                                    const color = l / 100 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
                                    return Math.round(255 * color).toString(16).padStart(2, "0")
                                  }
                                  setColor(`#${f(0)}${f(8)}${f(4)}`)
                                }
                              } else {
                                setColor(c)
                              }
                            }}
                            aria-label={`Select color ${c}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold mb-3">Preview</h3>
                <div
                  className="h-24 rounded-xl mb-3"
                  style={{ backgroundColor: color }}
                />
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-muted/50">
                    <span className="text-muted-foreground">On White</span>
                    <div
                      className="h-8 rounded mt-1 flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: "#fff", color }}
                    >
                      Aa
                    </div>
                  </div>
                  <div className="p-2 rounded bg-muted/50">
                    <span className="text-muted-foreground">On Dark</span>
                    <div
                      className="h-8 rounded mt-1 flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: "#0f172a", color }}
                    >
                      Aa
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Colors */}
            {recentColors.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3">Recent Colors</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {recentColors.map((c, i) => (
                      <button
                        key={i}
                        className="h-10 w-full rounded-lg border transition-transform hover:scale-110"
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                        aria-label={`Select recent color ${c}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Ad Placeholder */}
            {/* ADSENSE AD: Color Picker sidebar */}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free Online Color Picker Tool</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our color picker tool makes it easy to select and convert colors for your web development and design
            projects. Choose any color using the native color picker, and instantly see its HEX, RGB, and HSL
            values. Click any value to copy it to your clipboard — perfect for use in CSS, design tools, or any
            other application. The tool also generates color harmonies including complementary, analogous, and
            triadic color schemes to help you create visually appealing palettes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Understanding color formats is essential for web development. HEX is the most common format used in
            CSS and HTML, representing colors as a six-digit hexadecimal number. RGB (Red, Green, Blue) is useful
            when you need to manipulate individual color channels or use rgba() for transparency. HSL (Hue,
            Saturation, Lightness) is the most intuitive format for designers, as it allows you to easily adjust
            the hue while maintaining consistent saturation and lightness. Our tool provides all three formats
            simultaneously, making conversion effortless.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Click the color swatch to open the system color picker.</li>
            <li>Select your desired color and see HEX, RGB, HSL values instantly.</li>
            <li>Click on any value to copy it to your clipboard.</li>
            <li>Use the color harmony suggestions for complementary palettes.</li>
            <li>Your recently used colors are saved for quick access.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("css-gradient-generator")}>CSS Gradient Generator</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("image-compressor")}>Image Compressor</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
