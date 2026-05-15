"use client"

import * as React from "react"
import { Search, Calendar, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { PageName } from "@/components/site-header"

interface BlogPageProps {
  onNavigate: (page: PageName) => void
}

const categories = ["All", "Web Development", "JavaScript", "CSS & Design", "React & Next.js", "Freelancing"]

const blogPosts = [
  {
    title: "10 Essential VS Code Extensions for Web Developers in 2025",
    excerpt: "Discover the must-have VS Code extensions that will supercharge your web development workflow. From intelligent code completion to debugging powerhouses, these tools will transform how you write code every day.",
    date: "Jan 15, 2025",
    category: "Web Development",
    readTime: "8 min",
  },
  {
    title: "Understanding React Server Components: A Complete Guide",
    excerpt: "React Server Components represent a paradigm shift in how we build React applications. Learn how they work under the hood, when to use them, and how they integrate with Next.js App Router for optimal performance.",
    date: "Jan 10, 2025",
    category: "React & Next.js",
    readTime: "12 min",
  },
  {
    title: "CSS Container Queries: The Future of Responsive Design",
    excerpt: "Container queries are changing the way we think about responsive design. Instead of responding to viewport size, components can now adapt to their container. Learn how to use this powerful feature today.",
    date: "Jan 5, 2025",
    category: "CSS & Design",
    readTime: "6 min",
  },
  {
    title: "JavaScript Performance Optimization: 15 Proven Techniques",
    excerpt: "From code splitting and lazy loading to memory management and Web Workers, these 15 battle-tested techniques will help you build faster, more responsive JavaScript applications that users love.",
    date: "Dec 28, 2024",
    category: "JavaScript",
    readTime: "10 min",
  },
  {
    title: "How to Land Your First Freelance Web Development Client",
    excerpt: "Breaking into freelancing can be daunting. This step-by-step guide covers everything from building your portfolio and setting rates to finding clients and delivering projects that earn repeat business.",
    date: "Dec 20, 2024",
    category: "Freelancing",
    readTime: "9 min",
  },
  {
    title: "Building Accessible Web Apps: A Practical Developer's Guide",
    excerpt: "Accessibility isn't optional — it's essential. Learn practical techniques for building web applications that work for everyone, from semantic HTML and ARIA attributes to keyboard navigation and screen reader testing.",
    date: "Dec 15, 2024",
    category: "Web Development",
    readTime: "11 min",
  },
  {
    title: "Next.js 15 App Router: Migration Guide and Best Practices",
    excerpt: "Migrating from Pages Router to App Router in Next.js 15 can feel overwhelming. This comprehensive guide walks you through the migration process step by step, with real-world examples and common pitfalls to avoid.",
    date: "Dec 10, 2024",
    category: "React & Next.js",
    readTime: "14 min",
  },
  {
    title: "Modern CSS Layouts: Grid, Flexbox, and Beyond",
    excerpt: "Master the art of CSS layout with this deep dive into CSS Grid and Flexbox. Learn when to use each, advanced techniques for complex layouts, and how the two systems work together beautifully.",
    date: "Dec 5, 2024",
    category: "CSS & Design",
    readTime: "7 min",
  },
]

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [search, setSearch] = React.useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const recentPosts = blogPosts.slice(0, 4)

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            The <span className="text-emerald-600 dark:text-emerald-400">Blog</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Insights, tutorials, and tips on web development, JavaScript, CSS, and freelancing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-xs text-muted-foreground">· {post.readTime} read</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-1">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="text-emerald-600 dark:text-emerald-400 p-0 h-auto font-medium">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.filter(c => c !== "All").map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm w-full text-left px-2 py-1.5 rounded transition-colors ${
                          activeCategory === cat
                            ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <button className="text-sm text-left text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Ad Placeholder */}
            {/* ADSENSE AD: Blog sidebar */}
          </aside>
        </div>
      </div>
    </div>
  )
}
