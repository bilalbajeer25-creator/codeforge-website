"use client"

import * as React from "react"
import { Github, Twitter, Linkedin, Mail, Heart, Coffee } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import type { PageName } from "@/components/site-header"

interface SiteFooterProps {
  onNavigate: (page: PageName) => void
}

const quickLinks: { label: string; page: PageName }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Blog", page: "blog" },
  { label: "Contact", page: "contact" },
]

const toolLinks: { label: string; page: PageName }[] = [
  { label: "Image Compressor", page: "image-compressor" },
  { label: "Word Counter", page: "word-counter" },
  { label: "JSON Formatter", page: "json-formatter" },
  { label: "Password Generator", page: "password-generator" },
  { label: "Color Picker", page: "color-picker" },
  { label: "CSS Gradient Generator", page: "css-gradient-generator" },
]

const legalLinks: { label: string; page: PageName }[] = [
  { label: "Privacy Policy", page: "privacy" },
  { label: "Terms & Conditions", page: "terms" },
  { label: "Disclaimer", page: "disclaimer" },
]

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo onClick={() => onNavigate("home")} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Forge Your Code, Build Your Future. Free developer tools and resources to boost your productivity.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@codeforge.dev"
                className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Developer Tools</h3>
            <ul className="space-y-2.5">
              {toolLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get the latest developer tips and tool updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 text-sm"
                required
              />
              <Button type="submit" size="sm" className="h-9 bg-emerald-600 hover:bg-emerald-700 text-white shrink-0">
                {subscribed ? "Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> by BILAL
          </p>
          <a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            <Coffee className="h-4 w-4" /> Support CodeForge
          </a>
        </div>
      </div>
    </footer>
  )
}
