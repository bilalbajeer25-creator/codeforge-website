"use client"

import * as React from "react"
import {
  Shield,
  Plus,
  Trash2,
  Edit3,
  RefreshCw,
  Eye,
  LogOut,
  Loader2,
  Sparkles,
  BookOpen,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Save,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import type { PageName } from "@/components/site-header"
import type { BlogPost } from "@/lib/blog-data"
import { getFirestoreBlogs, deleteBlog, addBlog, updateBlog } from "@/lib/blog-service"

const ADMIN_PASSWORD = "CodeForge@2025"

const CATEGORIES = [
  "Web Development",
  "JavaScript",
  "CSS & Design",
  "React & Next.js",
  "Freelancing",
]

interface AdminPageProps {
  onNavigate: (page: PageName) => void
}

type AdminView = "login" | "dashboard" | "editor"

export function AdminPage({ onNavigate }: AdminPageProps) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const [loginError, setLoginError] = React.useState("")
  const [view, setView] = React.useState<AdminView>("login")
  const [blogs, setBlogs] = React.useState<(BlogPost & { firestoreId?: string })[]>([])
  const [loading, setLoading] = React.useState(false)
  const [generating, setGenerating] = React.useState(false)
  const [deleting, setDeleting] = React.useState<string | null>(null)
  const [toast, setToast] = React.useState<{ type: "success" | "error"; message: string } | null>(null)

  // Editor state
  const [editBlog, setEditBlog] = React.useState<Partial<BlogPost> & { firestoreId?: string } | null>(null)
  const [isEditing, setIsEditing] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState("")

  // Check if already logged in (session)
  React.useEffect(() => {
    const session = sessionStorage.getItem("admin-session")
    if (session === "logged-in") {
      setIsLoggedIn(true)
      setView("dashboard")
      loadBlogs()
    }
  }, [])

  // Auto-hide toast
  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      setView("dashboard")
      sessionStorage.setItem("admin-session", "logged-in")
      setLoginError("")
      loadBlogs()
    } else {
      setLoginError("Wrong password! Try again.")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setView("login")
    setPassword("")
    sessionStorage.removeItem("admin-session")
  }

  const loadBlogs = async () => {
    setLoading(true)
    try {
      const firestoreBlogs = await getFirestoreBlogs()
      setBlogs(firestoreBlogs)
    } catch (error) {
      showToast("error", "Failed to load blogs")
    }
    setLoading(false)
  }

  const handleGenerateBlog = async () => {
    setGenerating(true)
    try {
      const cat = selectedCategory && selectedCategory !== "any" ? selectedCategory : ""

      // Use the API route for AI blog generation
      const response = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: cat || undefined }),
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        showToast("error", data.error || "Failed to generate blog")
        setGenerating(false)
        return
      }

      if (data.blog) {
        // Save to Firestore
        await addBlog(data.blog)
        showToast("success", `Blog generated: "${data.blog.title}"`)
        loadBlogs()
      } else {
        showToast("error", "No blog data received. Try again.")
      }
    } catch (error: any) {
      showToast("error", error.message || "Failed to generate blog")
    }
    setGenerating(false)
  }

  const handleDeleteBlog = async (firestoreId: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setDeleting(firestoreId)
    try {
      await deleteBlog(firestoreId)
      showToast("success", `Blog deleted: "${title}"`)
      loadBlogs()
    } catch (error) {
      showToast("error", "Failed to delete blog")
    }
    setDeleting(null)
  }

  const handleEditBlog = (blog: BlogPost & { firestoreId?: string }) => {
    setEditBlog({ ...blog })
    setIsEditing(true)
    setView("editor")
  }

  const handleSaveBlog = async () => {
    if (!editBlog) return
    try {
      if (editBlog.firestoreId) {
        await updateBlog(editBlog.firestoreId, {
          title: editBlog.title || "",
          excerpt: editBlog.excerpt || "",
          content: editBlog.content || "",
          category: editBlog.category || "Web Development",
          readTime: editBlog.readTime || "5 min",
        })
        showToast("success", "Blog updated successfully!")
      } else {
        await addBlog({
          title: editBlog.title || "",
          excerpt: editBlog.excerpt || "",
          content: editBlog.content || "",
          category: editBlog.category || "Web Development",
          readTime: editBlog.readTime || "5 min",
          date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        })
        showToast("success", "Blog created successfully!")
      }
      setEditBlog(null)
      setIsEditing(false)
      setView("dashboard")
      loadBlogs()
    } catch (error) {
      showToast("error", "Failed to save blog")
    }
  }

  const handleCreateNew = () => {
    const today = new Date()
    setEditBlog({
      title: "",
      excerpt: "",
      content: "",
      category: "Web Development",
      readTime: "5 min",
      date: today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    })
    setIsEditing(false)
    setView("editor")
  }

  // ============ LOGIN VIEW ============
  if (!isLoggedIn || view === "login") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <CardTitle className="text-2xl">Admin Panel</CardTitle>
            <CardDescription>Enter password to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setLoginError("")
                  }}
                  className="h-11"
                  autoFocus
                />
                {loginError && (
                  <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {loginError}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ============ EDITOR VIEW ============
  if (view === "editor" && editBlog) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        {/* Toast */}
        {toast && (
          <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white ${toast.type === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
            {toast.type === "success" ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            {toast.message}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{isEditing ? "Edit Blog" : "Create New Blog"}</h1>
          <Button variant="outline" onClick={() => { setView("dashboard"); setEditBlog(null) }}>
            <X className="h-4 w-4 mr-2" /> Cancel
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Title</label>
            <Input
              value={editBlog.title || ""}
              onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })}
              placeholder="Blog title..."
              className="h-11"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Category</label>
              <Select
                value={editBlog.category || "Web Development"}
                onValueChange={(val) => setEditBlog({ ...editBlog, category: val })}
              >
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Read Time</label>
              <Input
                value={editBlog.readTime || ""}
                onChange={(e) => setEditBlog({ ...editBlog, readTime: e.target.value })}
                placeholder="5 min"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Date</label>
              <Input value={editBlog.date || ""} disabled className="bg-muted" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Excerpt</label>
            <Textarea
              value={editBlog.excerpt || ""}
              onChange={(e) => setEditBlog({ ...editBlog, excerpt: e.target.value })}
              placeholder="Brief summary of the article..."
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Content (HTML)</label>
            <Textarea
              value={editBlog.content || ""}
              onChange={(e) => setEditBlog({ ...editBlog, content: e.target.value })}
              placeholder="<h2>Title</h2><p>Content...</p>"
              rows={20}
              className="font-mono text-sm"
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={handleSaveBlog} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="h-4 w-4 mr-2" />
              {isEditing ? "Update Blog" : "Create Blog"}
            </Button>
            <Button variant="outline" onClick={() => { setView("dashboard"); setEditBlog(null) }}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // ============ DASHBOARD VIEW ============
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white ${toast.type === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
          {toast.type === "success" ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your blog posts and generate AI content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onNavigate("blog")} size="sm">
            <Eye className="h-4 w-4 mr-2" /> View Blog
          </Button>
          <Button variant="outline" onClick={handleLogout} size="sm">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      {/* AI Blog Generator Card */}
      <Card className="mb-8 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            AI Blog Generator
          </CardTitle>
          <CardDescription>
            Generate unique, high-quality blog posts with AI. Each blog is different - unlimited generation!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Any Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Category</SelectItem>
                {CATEGORIES.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={handleGenerateBlog}
              disabled={generating}
              className="bg-emerald-600 hover:bg-emerald-700 flex-1 sm:flex-none"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating Blog...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate New Blog
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleCreateNew}>
              <Plus className="h-4 w-4 mr-2" /> Write Manual
            </Button>
          </div>
          {generating && (
            <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg text-sm text-emerald-700 dark:text-emerald-300">
              <Loader2 className="h-4 w-4 inline mr-2 animate-spin" />
              AI is writing a unique blog post... This takes 10-30 seconds. Each blog is completely different!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{blogs.length}</p>
                <p className="text-sm text-muted-foreground">AI Generated Blogs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">Unlimited</p>
                <p className="text-sm text-muted-foreground">Blog Generation</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center">
                <RefreshCw className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">Unique</p>
                <p className="text-sm text-muted-foreground">Every Blog Different</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog List */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Generated Blogs</h2>
        <Button variant="ghost" size="sm" onClick={loadBlogs} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-emerald-600" />
          <p className="mt-2 text-muted-foreground">Loading blogs...</p>
        </div>
      ) : blogs.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No AI Blogs Yet</h3>
            <p className="text-muted-foreground mb-4">Click "Generate New Blog" above to create your first AI-powered blog post!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {blogs.map((blog) => (
            <Card key={blog.firestoreId || blog.id} className="hover:shadow-md transition-shadow">
              <CardContent className="py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">{blog.category}</Badge>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                      <span className="text-xs text-muted-foreground">{blog.readTime} read</span>
                      <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                        AI Generated
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground truncate">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onNavigate(`blog-post-${blog.id}` as PageName)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditBlog(blog)}
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteBlog(blog.firestoreId!, blog.title)}
                      disabled={deleting === blog.firestoreId}
                    >
                      {deleting === blog.firestoreId ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
