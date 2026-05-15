"use client"

import * as React from "react"
import { Search, Calendar, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { PageName } from "@/components/site-header"
import { blogPosts } from "@/lib/blog-data"
import { AdBanner, SidebarAd } from "@/components/ad-components"

interface BlogPageProps {
  onNavigate: (page: PageName) => void
}

const categories = ["All", "Web Development", "JavaScript", "CSS & Design", "React & Next.js", "Freelancing"]

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

  const recentPosts = blogPosts.slice(0, 5)

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
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
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
                  {categories.filter(c => c !== "All").map((cat) => {
                    const count = blogPosts.filter(p => p.category === cat).length
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => setActiveCategory(cat)}
                          className={`text-sm w-full text-left px-2 py-1.5 rounded transition-colors flex justify-between ${
                            activeCategory === cat
                              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span>{cat}</span>
                          <span className="text-xs">{count}</span>
                        </button>
                      </li>
                    )
                  })}
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
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <button
                        onClick={() => onNavigate(`blog-post-${post.id}` as PageName)}
                        className="text-sm text-left text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2 leading-snug"
                      >
                        {post.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Sidebar Ad */}
            <SidebarAd slot="blog-sidebar" />
          </aside>
        </div>
        {/* Bottom Ad */}
        <AdBanner format="horizontal" slot="blog-bottom" />
      </div>
    </div>
  )
}
