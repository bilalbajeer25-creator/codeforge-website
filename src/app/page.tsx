"use client"

import * as React from "react"
import { SiteHeader, type PageName } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomePage } from "@/components/pages/home-page"
import { ToolsPage } from "@/components/pages/tools-page"
import { BlogPage } from "@/components/pages/blog-page"
import { BlogPostPage } from "@/components/pages/blog-post-page"
import { AboutPage } from "@/components/pages/about-page"
import { ContactPage } from "@/components/pages/contact-page"
import { PrivacyPage } from "@/components/pages/privacy-page"
import { TermsPage } from "@/components/pages/terms-page"
import { DisclaimerPage } from "@/components/pages/disclaimer-page"
import { ImageCompressor } from "@/components/tools/image-compressor"
import { WordCounter } from "@/components/tools/word-counter"
import { JsonFormatter } from "@/components/tools/json-formatter"
import { PasswordGenerator } from "@/components/tools/password-generator"
import { ColorPicker } from "@/components/tools/color-picker"
import { CssGradientGenerator } from "@/components/tools/css-gradient-generator"

const staticPages: string[] = [
  "home", "tools", "blog", "about", "contact",
  "privacy", "terms", "disclaimer",
  "image-compressor", "word-counter", "json-formatter",
  "password-generator", "color-picker", "css-gradient-generator",
]

function getPageFromHash(): PageName {
  if (typeof window === "undefined") return "home"
  const hash = window.location.hash.replace("#", "")
  if (staticPages.includes(hash)) return hash as PageName
  if (hash.startsWith("blog-post-")) return hash as PageName
  return "home"
}

export function extractBlogPostId(page: PageName): string | null {
  const str = page as string
  if (str.startsWith("blog-post-")) {
    return str.replace("blog-post-", "")
  }
  return null
}

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState<PageName>("home")
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const navigate = React.useCallback((page: PageName) => {
    if (page === currentPage) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      window.location.hash = page === "home" ? "" : page
      window.scrollTo({ top: 0, behavior: "instant" })
      setIsTransitioning(false)
    }, 150)
  }, [currentPage])

  // Handle browser back/forward
  React.useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash()
      setCurrentPage(page)
    }
    window.addEventListener("hashchange", handleHashChange)
    setCurrentPage(getPageFromHash())
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const renderPage = () => {
    // Check for blog post page
    const blogPostId = extractBlogPostId(currentPage)
    if (blogPostId) {
      return <BlogPostPage postId={blogPostId} onNavigate={navigate} />
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigate} />
      case "tools":
        return <ToolsPage onNavigate={navigate} />
      case "blog":
        return <BlogPage onNavigate={navigate} />
      case "about":
        return <AboutPage onNavigate={navigate} />
      case "contact":
        return <ContactPage onNavigate={navigate} />
      case "privacy":
        return <PrivacyPage onNavigate={navigate} />
      case "terms":
        return <TermsPage onNavigate={navigate} />
      case "disclaimer":
        return <DisclaimerPage onNavigate={navigate} />
      case "image-compressor":
        return <ImageCompressor onNavigate={navigate} />
      case "word-counter":
        return <WordCounter onNavigate={navigate} />
      case "json-formatter":
        return <JsonFormatter onNavigate={navigate} />
      case "password-generator":
        return <PasswordGenerator onNavigate={navigate} />
      case "color-picker":
        return <ColorPicker onNavigate={navigate} />
      case "css-gradient-generator":
        return <CssGradientGenerator onNavigate={navigate} />
      default:
        return <HomePage onNavigate={navigate} />
    }
  }

  // Determine which nav item should be highlighted
  const activeNavPage = currentPage.startsWith("blog-post-") ? "blog" : currentPage

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage={activeNavPage} onNavigate={navigate} />
      <main className={`flex-1 transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {renderPage()}
      </main>
      <SiteFooter onNavigate={navigate} />
    </div>
  )
}
