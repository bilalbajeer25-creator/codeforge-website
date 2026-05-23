"use client"

import * as React from "react"
import { Copy, Check, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"
import { AdBanner, InArticleAd, SidebarAd } from "@/components/ad-components"

interface CssGradientGeneratorProps {
  onNavigate: (page: PageName) => void
}

const directions = [
  { label: "→", value: "to right", angle: 90 },
  { label: "←", value: "to left", angle: 270 },
  { label: "↓", value: "to bottom", angle: 180 },
  { label: "↑", value: "to top", angle: 0 },
  { label: "↗", value: "to top right", angle: 45 },
  { label: "↘", value: "to bottom right", angle: 135 },
  { label: "↙", value: "to bottom left", angle: 225 },
  { label: "↖", value: "to top left", angle: 315 },
]

const presetGradients = [
  { name: "Emerald Glow", start: "#059669", end: "#34d399" },
  { name: "Sunset", start: "#f97316", end: "#ec4899" },
  { name: "Ocean", start: "#0ea5e9", end: "#6366f1" },
  { name: "Forest", start: "#065f46", end: "#a7f3d0" },
  { name: "Fire", start: "#dc2626", end: "#fbbf24" },
  { name: "Lavender", start: "#7c3aed", end: "#c4b5fd" },
  { name: "Midnight", start: "#1e293b", end: "#64748b" },
  { name: "Peach", start: "#fb923c", end: "#fda4af" },
]

export function CssGradientGenerator({ onNavigate }: CssGradientGeneratorProps) {
  const [startColor, setStartColor] = React.useState("#059669")
  const [endColor, setEndColor] = React.useState("#34d399")
  const [direction, setDirection] = React.useState(90)
  const [copied, setCopied] = React.useState(false)

  const cssCode = `background: linear-gradient(${direction}deg, ${startColor}, ${endColor});`

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode)
    setCopied(true)
    toast.success("CSS copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const applyPreset = (preset: typeof presetGradients[0]) => {
    setStartColor(preset.start)
    setEndColor(preset.end)
  }

  const randomGradient = () => {
    const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    setStartColor(randomColor())
    setEndColor(randomColor())
    setDirection(Math.floor(Math.random() * 360))
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">Design Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            CSS Gradient <span className="text-emerald-600 dark:text-emerald-400">Generator</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Create beautiful CSS gradients visually. Pick colors, choose direction, and copy production-ready code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gradient Preview */}
            <Card>
              <CardContent className="p-6">
                <div
                  className="h-48 md:h-64 rounded-xl"
                  style={{
                    background: `linear-gradient(${direction}deg, ${startColor}, ${endColor})`,
                  }}
                />
              </CardContent>
            </Card>

            {/* CSS Output */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium">CSS Code</Label>
                  <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5 h-8">
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied!" : "Copy CSS"}
                  </Button>
                </div>
                <code className="block p-3 bg-muted/50 rounded-lg font-mono text-sm text-foreground select-all">
                  {cssCode}
                </code>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Colors */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="text-sm font-semibold">Colors</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={startColor}
                    onChange={(e) => setStartColor(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border p-0.5"
                  />
                  <div className="flex-1">
                    <Label className="text-xs text-muted-foreground">Start</Label>
                    <input
                      type="text"
                      value={startColor}
                      onChange={(e) => setStartColor(e.target.value)}
                      className="w-full font-mono text-sm px-2 py-1 border rounded bg-background mt-0.5"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={endColor}
                    onChange={(e) => setEndColor(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border p-0.5"
                  />
                  <div className="flex-1">
                    <Label className="text-xs text-muted-foreground">End</Label>
                    <input
                      type="text"
                      value={endColor}
                      onChange={(e) => setEndColor(e.target.value)}
                      className="w-full font-mono text-sm px-2 py-1 border rounded bg-background mt-0.5"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Direction */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold mb-3">Direction</h3>
                <div className="grid grid-cols-4 gap-2">
                  {directions.map((dir) => (
                    <button
                      key={dir.value}
                      onClick={() => setDirection(dir.angle)}
                      className={`h-10 rounded-lg border text-sm font-medium transition-all ${
                        direction === dir.angle
                          ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500 text-emerald-700 dark:text-emerald-400"
                          : "bg-background border-border hover:border-emerald-300 dark:hover:border-emerald-700"
                      }`}
                    >
                      {dir.label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Label className="text-xs text-muted-foreground shrink-0">Angle:</Label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={direction}
                    onChange={(e) => setDirection(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-xs font-mono w-8 text-right">{direction}°</span>
                </div>
              </CardContent>
            </Card>

            {/* Random */}
            <Button variant="outline" onClick={randomGradient} className="w-full gap-2">
              <RotateCw className="h-4 w-4" />
              Random Gradient
            </Button>

            {/* Sidebar Ad */}
            <SidebarAd slot="gradient-sidebar" />
          </div>
        </div>

        {/* Presets */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold mb-3">Preset Gradients</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {presetGradients.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className="text-left group"
                >
                  <div
                    className="h-14 rounded-lg mb-1.5 transition-transform group-hover:scale-105"
                    style={{
                      background: `linear-gradient(90deg, ${preset.start}, ${preset.end})`,
                    }}
                  />
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{preset.name}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Ad */}
        <AdBanner format="horizontal" slot="gradient-top" />

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free CSS Gradient Generator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our CSS gradient generator makes it easy to create beautiful, production-ready gradient code for your
            web projects. Choose your start and end colors, select a direction or specify an exact angle, and
            instantly see the gradient preview. The generated CSS code uses the standard linear-gradient syntax
            that&apos;s supported by all modern browsers, so you can copy and paste it directly into your
            stylesheets. With preset gradients and a random generator, you&apos;ll find inspiration for any project.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            CSS gradients are a powerful design tool that can replace image-based gradients, reducing page load
            times and improving performance. Linear gradients are the most common type, creating a smooth
            transition between two or more colors along a straight line. By adjusting the angle, you can create
            horizontal, vertical, or diagonal gradients that suit your design. The 360-degree angle control gives
            you precise direction control, while the preset directions cover the most common use cases. All
            gradients generated by this tool use the W3C standard linear-gradient syntax.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Choose your start and end colors using the color pickers.</li>
            <li>Select a gradient direction using the directional buttons or the angle slider.</li>
            <li>Preview the gradient in the large preview area.</li>
            <li>Click &quot;Copy CSS&quot; to copy the production-ready CSS code.</li>
            <li>Use presets for quick inspiration or the random button for surprises.</li>
          </ol>

          {/* In-Article Ad */}
          <InArticleAd slot="gradient-mid" />

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("color-picker")}>Color Picker</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("image-compressor")}>Image Compressor</Button>
          </div>
        </div>

        {/* Bottom Ad */}
        <AdBanner format="horizontal" slot="gradient-bottom" />
      </div>
    </div>
  )
}
