"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export type PageName = "home" | "tools" | "blog" | "about" | "contact" | "privacy" | "terms" | "disclaimer" | "image-compressor" | "word-counter" | "json-formatter" | "password-generator" | "color-picker" | "css-gradient-generator" | `blog-post-${string}`

interface SiteHeaderProps {
  currentPage: PageName
  onNavigate: (page: PageName) => void
}

const navItems: { label: string; page: PageName }[] = [
  { label: "Home", page: "home" },
  { label: "Tools", page: "tools" },
  { label: "Blog", page: "blog" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
]

export function SiteHeader({ currentPage, onNavigate }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigate = (page: PageName) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-background border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo onClick={() => handleNavigate("home")} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.page}
              variant="ghost"
              size="sm"
              onClick={() => handleNavigate(item.page)}
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage === item.page
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Button>
          ))}
          <div className="ml-2 pl-2 border-l">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.page}
                    variant={currentPage === item.page ? "secondary" : "ghost"}
                    onClick={() => handleNavigate(item.page)}
                    className={cn(
                      "justify-start text-base font-medium h-11",
                      currentPage === item.page && "text-emerald-600 dark:text-emerald-400"
                    )}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
