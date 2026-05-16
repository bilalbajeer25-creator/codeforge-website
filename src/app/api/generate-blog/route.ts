import { NextRequest, NextResponse } from "next/server"
import { generateTemplateBlog } from "@/lib/blog-templates"

// Blog topics pool - ensures variety
const BLOG_TOPICS = [
  {
    category: "Web Development",
    topics: [
      "Modern CSS Techniques Every Developer Should Master",
      "How to Build a Progressive Web App from Scratch",
      "The Complete Guide to Web Accessibility",
      "REST API Design Best Practices for Modern Applications",
      "Understanding Browser Rendering From URL to Pixel",
      "Web Performance Optimization Loading Speed Matters",
      "Building Real-Time Applications with WebSockets",
      "The Rise of Edge Computing in Web Development",
      "How to Implement Dark Mode Like a Pro",
      "Cross-Browser Testing Strategies That Actually Work",
      "Server-Side Rendering vs Client-Side Rendering",
      "Building Micro-Frontends Architecture and Implementation",
      "Web Security Fundamentals Every Developer Must Know",
      "How to Build a Design System from Scratch",
      "The Future of CSS What is Coming Next",
      "Responsive Design Beyond Media Queries",
      "How to Optimize Images for the Modern Web",
      "Building Animated User Interfaces with CSS and JavaScript",
      "Static Site Generators Why They Are Taking Over",
    ]
  },
  {
    category: "JavaScript",
    topics: [
      "JavaScript Closures Explained The Definitive Guide",
      "Mastering JavaScript Promises and Async Await",
      "JavaScript Design Patterns Every Developer Should Know",
      "The JavaScript Event Loop How It Really Works",
      "JavaScript Error Handling Best Practices",
      "Understanding JavaScript Prototypes and Inheritance",
      "Modern JavaScript Features You Should Be Using Now",
      "JavaScript Memory Management Avoiding Common Leaks",
      "Functional Programming in JavaScript A Practical Guide",
      "JavaScript Modules From CommonJS to ES Modules",
      "Building Custom JavaScript Libraries from Scratch",
      "JavaScript Regular Expressions The Complete Guide",
      "Web Workers Running JavaScript in Background Threads",
      "How to Write Clean Maintainable JavaScript Code",
      "JavaScript Iterators and Generators Deep Dive",
      "Debugging JavaScript Tools and Techniques That Save Hours",
    ]
  },
  {
    category: "CSS & Design",
    topics: [
      "CSS Grid Mastery Building Complex Layouts with Ease",
      "Modern CSS Layout Flexbox vs Grid vs Container Queries",
      "CSS Custom Properties Building Themeable Design Systems",
      "CSS Animations and Transitions Creating Smooth UI Effects",
      "The Complete Guide to CSS Typography",
      "CSS Architecture Organizing Styles for Large Projects",
      "Mastering CSS Selectors From Basic to Advanced",
      "CSS Container Queries The Future of Responsive Design",
      "Creating Beautiful Forms with Modern CSS",
      "Color Theory for Web Developers Choosing the Right Palette",
    ]
  },
  {
    category: "React & Next.js",
    topics: [
      "React Server Components The Complete Guide",
      "Next.js App Router Building Modern Web Applications",
      "React State Management Context Zustand and Beyond",
      "Building a Full-Stack App with Next.js and Prisma",
      "React Performance Profiling and Optimizing Your App",
      "React Hooks Deep Dive Patterns and Best Practices",
      "Next.js SEO Optimizing Your App for Search Engines",
      "Testing React Applications From Unit to Integration Tests",
      "Building Reusable React Component Libraries",
      "Data Fetching in React SWR React Query and Server Components",
      "Next.js Deployment From Development to Production",
    ]
  },
  {
    category: "Freelancing",
    topics: [
      "How to Start Freelancing as a Web Developer",
      "Setting Your Freelance Rates A Data-Driven Approach",
      "Building a Portfolio That Actually Gets You Clients",
      "Freelance vs Full-Time Making the Right Career Choice",
      "How to Find High-Paying Freelance Clients Consistently",
      "Managing Freelance Projects Tools and Workflows",
      "The Freelancer Guide to Contracts and Invoicing",
      "How to Build a Personal Brand as a Developer",
      "Time Management for Freelancers Work Smarter Not Harder",
      "How to Negotiate Freelance Rates Without Losing Clients",
      "Building Passive Income as a Web Developer",
      "The Complete Guide to Remote Work for Developers",
    ]
  }
]

function getRandomTopic(): { category: string; topic: string } {
  const categoryObj = BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)]
  const topic = categoryObj.topics[Math.floor(Math.random() * categoryObj.topics.length)]
  return { category: categoryObj.category, topic }
}

// Robust JSON parser that handles common AI response issues
function safeJsonParse(text: string): any {
  // Remove markdown code fences
  let cleaned = text.replace(/```json\s*/gi, "").replace(/```\s*/gi, "").trim()

  // Find the JSON object
  const match = cleaned.match(/\{[\s\S]*\}/)
  if (!match) return null

  let jsonStr = match[0]

  // Strategy 1: Fix the JSON string by replacing control chars inside string values
  const parts: string[] = []
  let inString = false
  let current = ""
  let escapeNext = false

  for (let i = 0; i < jsonStr.length; i++) {
    const ch = jsonStr[i]

    if (escapeNext) {
      current += ch
      escapeNext = false
      continue
    }

    if (ch === '\\') {
      current += ch
      escapeNext = true
      continue
    }

    if (ch === '"') {
      if (inString) {
        current = current.replace(/[\x00-\x1f]/g, (c) => {
          if (c === '\n') return ' '
          if (c === '\r') return ''
          if (c === '\t') return ' '
          return ''
        })
        parts.push('"' + current + '"')
        current = ""
        inString = false
      } else {
        parts.push(current)
        current = ""
        inString = true
      }
    } else {
      current += ch
    }
  }
  if (current) parts.push(current)

  const fixedJson = parts.join('')

  try {
    return JSON.parse(fixedJson)
  } catch (e1) {
    try {
      const aggressive = jsonStr
        .replace(/[\x00-\x1f]/g, ' ')
        .replace(/\s+/g, ' ')
      const m2 = aggressive.match(/\{[\s\S]*\}/)
      if (m2) return JSON.parse(m2[0])
    } catch {}

    try {
      const titleMatch = jsonStr.match(/"title"\s*:\s*"((?:[^"\\]|\\.)*)"/)
      const excerptMatch = jsonStr.match(/"excerpt"\s*:\s*"((?:[^"\\]|\\.)*)"/)
      const categoryMatch = jsonStr.match(/"category"\s*:\s*"((?:[^"\\]|\\.)*)"/)
      const readTimeMatch = jsonStr.match(/"readTime"\s*:\s*"((?:[^"\\]|\\.)*)"/)

      const contentStartMatch = jsonStr.match(/"content"\s*:\s*"([\s\S]*)/)
      let contentVal = ""
      if (contentStartMatch) {
        let raw = contentStartMatch[1]
        const endMatch = raw.match(/"[\s,]*((?:"category")|(?:"readTime")|(\s*}))$/)
        if (endMatch) {
          contentVal = raw.substring(0, endMatch.index)
        } else {
          contentVal = raw.replace(/"\s*\}?\s*$/, '')
        }
        contentVal = contentVal
          .replace(/\\n/g, ' ')
          .replace(/\\'/g, "'")
          .replace(/\\"/g, '"')
          .replace(/\\\\/g, '\\')
          .replace(/[\x00-\x1f]/g, ' ')
      }

      if (titleMatch && contentVal) {
        return {
          title: titleMatch[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'),
          excerpt: (excerptMatch?.[1] || titleMatch[1]).replace(/\\"/g, '"').replace(/\\\\/g, '\\'),
          content: contentVal,
          category: categoryMatch?.[1]?.replace(/\\"/g, '"') || "Web Development",
          readTime: readTimeMatch?.[1] || "8 min",
        }
      }
    } catch {}

    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const requestedCategory = body.category || ""

    let category = requestedCategory
    let topic = ""

    if (!topic) {
      if (category) {
        const catObj = BLOG_TOPICS.find(c => c.category === category)
        if (catObj) {
          topic = catObj.topics[Math.floor(Math.random() * catObj.topics.length)]
        } else {
          const random = getRandomTopic()
          category = random.category
          topic = random.topic
        }
      } else {
        const random = getRandomTopic()
        category = random.category
        topic = random.topic
      }
    }

    if (!category) category = "Web Development"

    // Try AI generation first (works in development environment)
    try {
      const ZAI = (await import("z-ai-web-dev-sdk")).default
      const zai = await ZAI.create()

      const completion = await zai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an expert web development blogger. You write detailed, unique, engaging technical articles. You MUST respond with ONLY a valid JSON object. No markdown code fences. No extra text. The JSON keys: title, excerpt, content, category, readTime. Content must be HTML string. Be unique every time."
          },
          {
            role: "user",
            content: `Write a detailed blog about: "${topic}"\nCategory: ${category}\n\nRequirements: 1500-2500 words HTML content with h2 h3 p code pre ul li strong em tags. Include code examples. 3-5 sentences per paragraph. Unique insights. readTime based on word count.\n\nRespond ONLY with valid JSON: {"title":"...","excerpt":"...","content":"<h2>...</h2><p>...</p>","category":"${category}","readTime":"X min"}`
          }
        ],
        temperature: 0.95,
        max_tokens: 4000,
      })

      const responseText = completion.choices?.[0]?.message?.content || ""

      if (responseText) {
        const blogData = safeJsonParse(responseText)
        if (blogData && blogData.title && blogData.content) {
          const slug = blogData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
            .substring(0, 60) + "-" + Date.now().toString(36)

          const today = new Date()
          const dateStr = today.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })

          const blog = {
            id: slug,
            title: blogData.title,
            excerpt: blogData.excerpt || blogData.title,
            date: dateStr,
            category: blogData.category || category,
            readTime: blogData.readTime || `${Math.ceil(String(blogData.content).split(/\s+/).length / 200)} min`,
            content: blogData.content,
          }

          return NextResponse.json({ success: true, blog, source: "ai" })
        }
      }
    } catch (aiError) {
      console.log("AI generation unavailable, using template fallback:", (aiError as Error).message)
    }

    // Fallback: Template-based blog generation (works everywhere, including Netlify)
    const templateBlog = generateTemplateBlog(category || undefined)

    const slug = templateBlog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .substring(0, 60) + "-" + Date.now().toString(36)

    const today = new Date()
    const dateStr = today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })

    const blog = {
      id: slug,
      title: templateBlog.title,
      excerpt: templateBlog.excerpt,
      date: dateStr,
      category: templateBlog.category,
      readTime: templateBlog.readTime,
      content: templateBlog.content,
    }

    return NextResponse.json({ success: true, blog, source: "template" })
  } catch (error: any) {
    console.error("Blog generation error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to generate blog" },
      { status: 500 }
    )
  }
}
