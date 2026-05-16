"use client"

import * as React from "react"
import { Copy, Minus, Wand2, AlertCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"

interface JsonFormatterProps {
  onNavigate: (page: PageName) => void
}

export function JsonFormatter({ onNavigate }: JsonFormatterProps) {
  const [input, setInput] = React.useState("")
  const [output, setOutput] = React.useState("")
  const [error, setError] = React.useState("")
  const [indent, setIndent] = React.useState(2)
  const [copied, setCopied] = React.useState(false)

  const formatJson = () => {
    setError("")
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, indent))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON")
      setOutput("")
    }
  }

  const minifyJson = () => {
    setError("")
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON")
      setOutput("")
    }
  }

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output)
      setCopied(true)
      toast.success("Copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
    setError("")
  }

  const sampleJson = `{
  "name": "CodeForge",
  "version": "1.0.0",
  "description": "Developer Tools Platform",
  "tools": ["Image Compressor", "JSON Formatter", "Password Generator"],
  "settings": {
    "theme": "dark",
    "language": "en"
  }
}`

  // Simple syntax highlighting for the output
  const highlightJson = (json: string) => {
    return json.replace(
      /("(?:\\.|[^"\\])*")\s*:/g,
      '<span style="color: #059669">$1</span>:'
    ).replace(
      /:\s*("(?:\\.|[^"\\])*")/g,
      ': <span style="color: #d97706">$1</span>'
    ).replace(
      /:\s*(\d+)/g,
      ': <span style="color: #2563eb">$1</span>'
    ).replace(
      /:\s*(true|false)/g,
      ': <span style="color: #7c3aed">$1</span>'
    ).replace(
      /:\s*(null)/g,
      ': <span style="color: #6b7280">$1</span>'
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">Developer Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            JSON <span className="text-emerald-600 dark:text-emerald-400">Formatter</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Beautify, minify, and validate JSON with syntax highlighting. Debug API responses instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Input JSON</label>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => { setInput(sampleJson); setError(""); }} className="text-xs h-7">
                  Load Sample
                </Button>
                <Button variant="ghost" size="sm" onClick={handleClear} className="text-xs h-7">
                  Clear
                </Button>
              </div>
            </div>
            <Textarea
              placeholder='Paste your JSON here, e.g. {"key": "value"}'
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(""); }}
              className="min-h-[350px] font-mono text-sm resize-y"
            />
            {error && (
              <div className="flex items-center gap-2 mt-2 p-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-md text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span className="text-xs">{error}</span>
              </div>
            )}
          </div>

          {/* Output */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Formatted Output</label>
              <div className="flex items-center gap-2">
                <label className="text-xs text-muted-foreground">Indent:</label>
                <select
                  value={indent}
                  onChange={(e) => setIndent(Number(e.target.value))}
                  className="text-xs border rounded px-1.5 py-0.5 bg-background"
                >
                  <option value={2}>2 spaces</option>
                  <option value={4}>4 spaces</option>
                  <option value={1}>1 tab</option>
                </select>
              </div>
            </div>
            <Card className="min-h-[350px]">
              <CardContent className="p-4 h-full">
                {output ? (
                  <pre
                    className="text-sm font-mono overflow-auto max-h-[330px] custom-scrollbar whitespace-pre-wrap break-words"
                    dangerouslySetInnerHTML={{ __html: highlightJson(output) }}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground italic mt-4">
                    Formatted JSON will appear here...
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button onClick={formatJson} className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
            <Wand2 className="h-4 w-4" />
            Format
          </Button>
          <Button onClick={minifyJson} variant="outline" className="gap-2">
            <Minus className="h-4 w-4" />
            Minify
          </Button>
          <Button onClick={handleCopy} variant="outline" disabled={!output} className="gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Output"}
          </Button>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free Online JSON Formatter and Validator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our JSON formatter tool helps you beautify, minify, and validate JSON data with just one click. Whether
            you&apos;re debugging API responses, formatting configuration files, or validating JSON structures, this
            tool provides instant results with syntax highlighting for easy readability. The formatter supports
            customizable indentation (2 spaces, 4 spaces, or tab) and provides clear error messages when your JSON
            is invalid, making it easy to identify and fix issues.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            JSON (JavaScript Object Notation) is the most widely used data format for APIs and web applications.
            However, minified JSON from API responses can be difficult to read and debug. Our formatter instantly
            transforms compact JSON into a well-structured, indented format with syntax highlighting that
            distinguishes between keys, strings, numbers, booleans, and null values. The minify function is equally
            useful for reducing file sizes before deployment. All processing happens locally in your browser, so
            your data is never sent to any server.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Paste your JSON data into the input area on the left.</li>
            <li>Click &quot;Format&quot; to beautify or &quot;Minify&quot; to compress the JSON.</li>
            <li>Review the formatted output with syntax highlighting on the right.</li>
            <li>Click &quot;Copy Output&quot; to copy the result to your clipboard.</li>
            <li>If there are errors, they&apos;ll be displayed below the input area.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("word-counter")}>Word Counter</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("css-gradient-generator")}>CSS Gradient Generator</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
