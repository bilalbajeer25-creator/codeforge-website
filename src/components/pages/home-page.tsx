"use client"

import * as React from "react"
import {
  ArrowRight,
  Code2,
  FileText,
  Paintbrush,
  Shield,
  Zap,
  Globe,
  Lock,
  ImageIcon,
  Type,
  Braces,
  KeyRound,
  Palette,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import type { PageName } from "@/components/site-header"
import { blogPosts } from "@/lib/blog-data"

interface HomePageProps {
  onNavigate: (page: PageName) => void
}

const featuredTools = [
  {
    icon: ImageIcon,
    name: "Image Compressor",
    description: "Reduce image file sizes without losing quality. Drag and drop, adjust quality, and download instantly.",
    page: "image-compressor" as PageName,
  },
  {
    icon: Braces,
    name: "JSON Formatter",
    description: "Beautify, minify, and validate JSON data with syntax highlighting and error detection.",
    page: "json-formatter" as PageName,
  },
  {
    icon: KeyRound,
    name: "Password Generator",
    description: "Create strong, secure passwords with customizable length and character options.",
    page: "password-generator" as PageName,
  },
]

const latestPosts = blogPosts.slice(0, 3)

const benefits = [
  {
    icon: Zap,
    title: "Free Tools",
    description: "All developer tools are completely free to use with no hidden charges or premium tiers.",
  },
  {
    icon: Globe,
    title: "No Registration",
    description: "Use any tool instantly without creating an account or providing personal information.",
  },
  {
    icon: Shield,
    title: "Fast & Reliable",
    description: "Client-side processing means lightning-fast results. Your data never leaves your browser.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All processing happens locally in your browser. We never store or transmit your data.",
  },
]

export function HomePage({ onNavigate }: HomePageProps) {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-emerald-950/20 dark:via-background dark:to-slate-950/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
              Free Developer Tools & Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Forge Your Code,{" "}
              <span className="text-emerald-600 dark:text-emerald-400">Build Your Future</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of free, privacy-first developer tools and expert web development articles.
              Everything runs in your browser — no sign-up required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate("tools")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 text-base"
              >
                Explore Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("blog")}
                className="px-8 h-12 text-base"
              >
                <FileText className="mr-2 h-4 w-4" />
                Read Blog
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Free Tools</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Private</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Sign-ups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Featured Tools</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tools You&apos;ll <span className="text-emerald-600 dark:text-emerald-400">Love</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hand-crafted developer utilities that work instantly in your browser. No installations, no accounts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Card
              key={tool.page}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/60"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mb-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                  <tool.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 p-0 h-auto font-medium"
                  onClick={() => onNavigate(tool.page)}
                >
                  Try Now <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => onNavigate("tools")} className="gap-2">
            View All Tools <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-slate-50/50 dark:bg-slate-900/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From the <span className="text-emerald-600 dark:text-emerald-400">Blog</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In-depth articles on web development, JavaScript, CSS, React, and freelancing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-base leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-emerald-600 dark:text-emerald-400 p-0 h-auto font-medium"
                    onClick={() => onNavigate(`blog-post-${post.id}` as PageName)}
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Why CodeForge</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for <span className="text-emerald-600 dark:text-emerald-400">Developers</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We believe developer tools should be free, fast, and respect your privacy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center border-border/60 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Stay in the Loop</h2>
          <p className="mt-3 text-emerald-100 max-w-lg mx-auto">
            Get the latest developer tips, tool updates, and exclusive content delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 focus-visible:ring-white/30"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 h-11 px-6 shrink-0 font-medium">
              {subscribed ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>

      {/* Ad Placeholder */}
      {/* ADSENSE AD: Home page - Below newsletter section */}
    </div>
  )
}
