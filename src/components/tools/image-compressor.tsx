"use client"

import * as React from "react"
import { Upload, Download, Trash2, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import type { PageName } from "@/components/site-header"

interface ImageCompressorProps {
  onNavigate: (page: PageName) => void
}

export function ImageCompressor({ onNavigate }: ImageCompressorProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [quality, setQuality] = React.useState(80)
  const [compressedUrl, setCompressedUrl] = React.useState<string | null>(null)
  const [compressedSize, setCompressedSize] = React.useState<number>(0)
  const [isCompressing, setIsCompressing] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)
      setCompressedUrl(null)
      setCompressedSize(0)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) handleFileSelect(droppedFile)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const compressImage = async () => {
    if (!file) return
    setIsCompressing(true)

    try {
      const img = new Image()
      const url = URL.createObjectURL(file)

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = reject
        img.src = url
      })

      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext("2d")
      if (!ctx) throw new Error("Canvas context not available")
      ctx.drawImage(img, 0, 0)

      const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg"
      const dataUrl = canvas.toDataURL(mimeType, quality / 100)

      const response = await fetch(dataUrl)
      const blob = await response.blob()

      setCompressedUrl(URL.createObjectURL(blob))
      setCompressedSize(blob.size)
      URL.revokeObjectURL(url)
    } catch {
      // Error handling
    } finally {
      setIsCompressing(false)
    }
  }

  const downloadImage = () => {
    if (!compressedUrl || !file) return
    const a = document.createElement("a")
    a.href = compressedUrl
    a.download = `compressed-${file.name}`
    a.click()
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B"
    const k = 1024
    const sizes = ["B", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const savings = file && compressedSize > 0
    ? Math.round(((file.size - compressedSize) / file.size) * 100)
    : 0

  const reset = () => {
    setFile(null)
    setCompressedUrl(null)
    setCompressedSize(0)
    setQuality(80)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">Image Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Image <span className="text-emerald-600 dark:text-emerald-400">Compressor</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Compress images directly in your browser. No upload to servers — your files stay private.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Tool Area */}
          <div className="lg:col-span-2 space-y-6">
            {!file ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => inputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                    : "border-border hover:border-emerald-400 dark:hover:border-emerald-600"
                }`}
              >
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground">
                  Drag & drop your image here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  or click to browse • JPEG, PNG, WebP supported
                </p>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                />
              </div>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatSize(file.size)}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={reset}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {compressedUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-muted/50">
                      <img
                        src={compressedUrl}
                        alt="Compressed preview"
                        className="max-h-64 mx-auto object-contain"
                      />
                    </div>
                  )}

                  {!compressedUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-muted/50 p-8 text-center">
                      <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground/40" />
                      <p className="text-sm text-muted-foreground mt-2">Preview will appear here</p>
                    </div>
                  )}

                  {compressedUrl && (
                    <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">Original</p>
                        <p className="font-semibold text-sm">{formatSize(file.size)}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">Compressed</p>
                        <p className="font-semibold text-sm">{formatSize(compressedSize)}</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">Savings</p>
                        <p className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">{savings}%</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button
                      onClick={compressImage}
                      disabled={isCompressing}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                    >
                      {isCompressing ? "Compressing..." : "Compress Image"}
                    </Button>
                    {compressedUrl && (
                      <Button onClick={downloadImage} variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Compression Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Quality</Label>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{quality}%</span>
                  </div>
                  <Slider
                    value={[quality]}
                    onValueChange={(v) => setQuality(v[0])}
                    min={10}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    Lower quality = smaller file size. 70-85% is usually a good balance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ad Placeholder */}
            {/* ADSENSE AD: Image Compressor sidebar */}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free Online Image Compressor</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our free online image compressor allows you to reduce the file size of your images without significantly
            compromising quality. Whether you&apos;re optimizing images for a website, reducing upload times, or saving
            storage space, this tool provides an easy and effective solution. The compression process runs entirely in
            your browser using HTML5 Canvas technology, meaning your images are never uploaded to any server. This
            ensures complete privacy and lightning-fast processing speeds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The quality slider gives you precise control over the compression level. A quality setting of 70-85%
            typically produces excellent results with file size reductions of 40-70%. For web use, this level of
            compression is virtually indistinguishable from the original while dramatically improving page load times.
            The tool supports JPEG, PNG, and WebP image formats, making it versatile for any use case. Whether
            you&apos;re a web developer optimizing assets, a blogger reducing image sizes, or a designer preparing
            files for email, our image compressor delivers professional results for free.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Drag and drop your image or click to browse and select a file.</li>
            <li>Adjust the quality slider to set your desired compression level.</li>
            <li>Click &quot;Compress Image&quot; to process the file.</li>
            <li>Review the before/after file sizes and savings percentage.</li>
            <li>Click &quot;Download&quot; to save the compressed image.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("color-picker")}>Color Picker</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("css-gradient-generator")}>CSS Gradient Generator</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
