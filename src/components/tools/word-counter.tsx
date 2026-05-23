"use client"

import * as React from "react"
import { Copy, Trash2, ClipboardPaste } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"
import { AdBanner, InArticleAd } from "@/components/ad-components"

interface WordCounterProps {
  onNavigate: (page: PageName) => void
}

export function WordCounter({ onNavigate }: WordCounterProps) {
  const [text, setText] = React.useState("")

  const stats = React.useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, "").length
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length : 0
    const paragraphs = trimmed ? trimmed.split(/\n\n+/).filter((p) => p.trim().length > 0).length : 0
    const readingTime = Math.max(1, Math.ceil(words / 200))
    return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTime }
  }, [text])

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    toast.success("Text copied to clipboard!")
  }

  const handleClear = () => {
    setText("")
  }

  const handlePaste = async () => {
    try {
      const clipText = await navigator.clipboard.readText()
      setText(clipText)
      toast.success("Text pasted from clipboard!")
    } catch {
      toast.error("Could not access clipboard")
    }
  }

  const statItems = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "No Spaces", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading Time", value: `${stats.readingTime} min` },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">Text Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Word <span className="text-emerald-600 dark:text-emerald-400">Counter</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Count words, characters, sentences, and paragraphs in real-time. Perfect for writers and SEO.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
          {statItems.map((item) => (
            <Card key={item.label} className="text-center">
              <CardContent className="p-3">
                <p className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Text Input */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <Textarea
              placeholder="Start typing or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[300px] resize-y text-base leading-relaxed border-0 focus-visible:ring-0 p-0"
            />
            <div className="flex items-center gap-2 mt-3 pt-3 border-t">
              <Button variant="outline" size="sm" onClick={handlePaste} className="gap-1.5">
                <ClipboardPaste className="h-3.5 w-3.5" />
                Paste
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopy} disabled={!text} className="gap-1.5">
                <Copy className="h-3.5 w-3.5" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleClear} disabled={!text} className="gap-1.5 text-destructive hover:text-destructive">
                <Trash2 className="h-3.5 w-3.5" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Top Ad */}
        <AdBanner format="horizontal" slot="word-top" />

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free Online Word Counter Tool</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our free word counter tool provides instant, real-time statistics about your text. Whether you&apos;re
            writing a blog post, academic paper, social media update, or SEO content, knowing your word count is
            essential. This tool goes beyond simple word counting — it also tracks character count (with and without
            spaces), sentence count, paragraph count, and estimated reading time. All processing happens in your
            browser, ensuring your text remains completely private.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The reading time estimate is based on an average reading speed of 200 words per minute, which is the
            standard for adult readers. This is particularly useful for blog posts and articles where you want to
            manage reader engagement. The character count without spaces is helpful for platforms with strict
            character limits like Twitter/X, meta descriptions, or SMS messages. For SEO professionals, the word
            count helps ensure your content meets the recommended length for search engine optimization — typically
            1,500-2,500 words for comprehensive blog posts.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Type or paste your text into the text area above.</li>
            <li>View real-time statistics updating as you type.</li>
            <li>Use the Copy button to copy your text to clipboard.</li>
            <li>Use the Clear button to reset and start over.</li>
          </ol>

          {/* In-Article Ad */}
          <InArticleAd slot="word-mid" />

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("json-formatter")}>JSON Formatter</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("password-generator")}>Password Generator</Button>
          </div>
        </div>

        {/* Bottom Ad */}
        <AdBanner format="horizontal" slot="word-bottom" />
      </div>
    </div>
  )
}
