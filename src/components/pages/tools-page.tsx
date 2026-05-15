"use client"

import * as React from "react"
import {
  ImageIcon,
  Type,
  Braces,
  KeyRound,
  Palette,
  Layers,
  ArrowRight,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { PageName } from "@/components/site-header"

interface ToolsPageProps {
  onNavigate: (page: PageName) => void
}

const allTools = [
  {
    icon: ImageIcon,
    name: "Image Compressor",
    description: "Reduce image file sizes without losing quality. Supports JPEG, PNG, and WebP formats with adjustable compression levels.",
    page: "image-compressor" as PageName,
    tag: "Popular",
  },
  {
    icon: Type,
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in real-time. Perfect for content writers and SEO optimization.",
    page: "word-counter" as PageName,
    tag: "Essential",
  },
  {
    icon: Braces,
    name: "JSON Formatter",
    description: "Beautify, minify, and validate JSON data with syntax highlighting. Debug API responses and configuration files easily.",
    page: "json-formatter" as PageName,
    tag: "Popular",
  },
  {
    icon: KeyRound,
    name: "Password Generator",
    description: "Generate strong, customizable passwords with length control and character type toggles. Includes strength indicator.",
    page: "password-generator" as PageName,
    tag: "Security",
  },
  {
    icon: Palette,
    name: "Color Picker",
    description: "Pick colors and convert between HEX, RGB, and HSL formats. Includes color palette suggestions and history.",
    page: "color-picker" as PageName,
    tag: "Design",
  },
  {
    icon: Layers,
    name: "CSS Gradient Generator",
    description: "Create beautiful CSS gradients with visual controls. Choose colors, directions, and copy production-ready CSS code.",
    page: "css-gradient-generator" as PageName,
    tag: "Design",
  },
]

export function ToolsPage({ onNavigate }: ToolsPageProps) {
  const [search, setSearch] = React.useState("")

  const filteredTools = allTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Developer <span className="text-emerald-600 dark:text-emerald-400">Tools</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
          Free, privacy-first tools that run entirely in your browser. No sign-up, no data collection.
        </p>
      </div>

      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <Card
            key={tool.page}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/60"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                  <tool.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                {tool.tag && (
                  <Badge variant="secondary" className="text-xs">{tool.tag}</Badge>
                )}
              </div>
              <CardTitle className="text-lg mt-3">{tool.name}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => onNavigate(tool.page)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
              >
                Use Tool
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tools found matching &quot;{search}&quot;</p>
        </div>
      )}

      {/* Ad Placeholder */}
      {/* ADSENSE AD: Tools page - Below tools grid */}
    </div>
  )
}
