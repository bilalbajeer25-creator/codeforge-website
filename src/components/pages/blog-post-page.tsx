"use client"

import * as React from "react"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { PageName } from "@/components/site-header"
import { blogPosts } from "@/lib/blog-data"
import { AdBanner, InArticleAd } from "@/components/ad-components"

interface BlogPostPageProps {
  postId: string
  onNavigate: (page: PageName) => void
}

export function BlogPostPage({ postId, onNavigate }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">The blog post you are looking for does not exist.</p>
        <Button onClick={() => onNavigate("blog")} className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate("blog")}
          className="mb-6 text-muted-foreground hover:text-foreground gap-2 p-0 h-auto font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Button>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Top Ad */}
        <AdBanner format="horizontal" slot="post-top" />

        {/* Article Content */}
        <article
          className="prose prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-foreground
            prose-code:text-emerald-600 dark:prose-code:text-emerald-400 prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:mb-1
            prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* In-Article Ad (Middle) */}
        <InArticleAd slot="post-mid" />

        {/* Bottom Ad */}
        <AdBanner format="horizontal" slot="post-bottom" />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Related <span className="text-emerald-600 dark:text-emerald-400">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Card
                  key={related.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    onNavigate(`blog-post-${related.id}` as PageName)
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }}
                >
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2">{related.category}</Badge>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5">{related.readTime} read</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
