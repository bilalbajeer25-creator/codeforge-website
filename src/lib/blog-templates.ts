// Template-based blog generator that works without AI API
// Used as fallback when z-ai-web-dev-sdk is unavailable (e.g., on Netlify)

const INTROS = [
  "In today's rapidly evolving digital landscape, understanding this topic is more crucial than ever. Whether you're a seasoned developer or just starting out, the concepts we'll explore will reshape how you approach your craft.",
  "The web development world moves at breakneck speed, and staying ahead requires constant learning. This article dives deep into a subject that's gaining momentum and shows you exactly how to leverage it in your projects.",
  "Every developer hits a point where they need to level up their skills. The techniques discussed here represent the cutting edge of modern development practices, and mastering them will set you apart from the crowd.",
  "Building great software is both an art and a science. Today we're going to explore a topic that bridges both worlds, giving you practical tools you can apply immediately while deepening your understanding of the underlying principles.",
  "If you've been in the development community for any length of time, you know that the best solutions often come from understanding fundamentals deeply. This guide takes you back to basics while pushing forward into advanced territory.",
]

const CODE_EXAMPLES: Record<string, { lang: string; code: string; explanation: string }[]> = {
  "Web Development": [
    {
      lang: "html",
      code: `<!-- Semantic HTML5 Structure -->
<article class="blog-post">
  <header>
    <h1>Understanding Modern Layouts</h1>
    <time datetime="2025-01-15">January 15, 2025</time>
  </header>
  <section class="content">
    <p>Content with proper semantics improves accessibility and SEO.</p>
  </section>
  <footer>
    <nav class="post-nav">
      <a href="#prev">Previous Post</a>
      <a href="#next">Next Post</a>
    </nav>
  </footer>
</article>`,
      explanation: "Using semantic HTML elements like <article>, <header>, <section>, and <nav> improves both accessibility for screen readers and search engine optimization. Search engines give more weight to content inside semantic elements.",
    },
    {
      lang: "javascript",
      code: `// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
}, { rootMargin: '50px' });

document.querySelectorAll('img[data-src]')
  .forEach(img => observer.observe(img));`,
      explanation: "The Intersection Observer API provides an efficient way to detect when elements enter the viewport. This is far more performant than listening to scroll events, as it runs off the main thread and only triggers callbacks when needed.",
    },
    {
      lang: "css",
      code: `/* Modern CSS Grid Layout */
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 2rem;
}

.dashboard__card {
  display: grid;
  grid-template-rows: subgrid;
  row-gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--card-bg);
}`,
      explanation: "CSS Grid with auto-fit and minmax creates responsive layouts without media queries. The subgrid value allows child elements to align with the parent grid, creating consistent spacing across cards.",
    },
  ],
  "JavaScript": [
    {
      lang: "javascript",
      code: `// Debounce function for performance
function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage with search input
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce((e) => {
  fetchResults(e.target.value);
}, 500));`,
      explanation: "Debouncing prevents a function from being called too frequently. This is essential for search inputs, window resize handlers, and scroll events where rapid firing would cause performance issues.",
    },
    {
      lang: "javascript",
      code: `// Async iterator pattern
async function* fetchPaginatedData(url) {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();

    yield data.items;
    hasMore = data.hasNextPage;
    page++;
  }
}

// Usage
for await (const items of fetchPaginatedData('/api/posts')) {
  renderItems(items);
}`,
      explanation: "Async iterators provide an elegant way to handle paginated data or streaming responses. The for-await-of loop automatically handles the async iteration, making complex data fetching code much cleaner.",
    },
    {
      lang: "javascript",
      code: `// WeakRef for memory-safe caching
class Cache {
  #cache = new Map();

  get(key) {
    const ref = this.#cache.get(key);
    if (!ref) return undefined;
    const value = ref.deref();
    if (!value) this.#cache.delete(key);
    return value;
  }

  set(key, value) {
    this.#cache.set(key, new WeakRef(value));
  }
}`,
      explanation: "WeakRef allows you to hold a reference to an object without preventing garbage collection. This is perfect for caching scenarios where you want the cache to be automatically cleaned up when memory is needed.",
    },
  ],
  "CSS & Design": [
    {
      lang: "css",
      code: `/* Container Queries - The Future */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}`,
      explanation: "Container queries let you style elements based on their container's size rather than the viewport. This is revolutionary for component-based architectures where components need to adapt to their surrounding layout.",
    },
    {
      lang: "css",
      code: `/* Dynamic color theming with OKLCH */
:root {
  --brand: oklch(0.7 0.15 160);
  --brand-light: oklch(from var(--brand) 0.9 0.08 160);
  --brand-dark: oklch(from var(--brand) 0.4 0.2 160);
}

.button {
  background: var(--brand);
  color: var(--brand-light);
  border: 2px solid var(--brand-dark);
}`,
      explanation: "OKLCH color space provides perceptually uniform colors, making it easier to create accessible palettes. The relative color syntax (oklch from) lets you derive color variations from a single base color.",
    },
  ],
  "React & Next.js": [
    {
      lang: "jsx",
      code: `// React Server Component with streaming
async function BlogList() {
  const posts = await db.posts.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}

// Suspense boundary for streaming
export default function Page() {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogList />
    </Suspense>
  );
}`,
      explanation: "Server Components allow you to fetch data directly in components without useEffect or client-side loading states. Combined with Suspense, this enables streaming HTML to the client, showing content as it becomes available.",
    },
    {
      lang: "javascript",
      code: `// Custom hook with TypeScript generics
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}`,
      explanation: "This generic custom hook provides type-safe data fetching with built-in abort controller support. The generic parameter T ensures that the returned data is properly typed, eliminating the need for type assertions.",
    },
  ],
  "Freelancing": [
    {
      lang: "javascript",
      code: `// Rate calculator with project complexity
function calculateRate(baseRate, complexity, timeline) {
  const multipliers = {
    simple: 1.0,
    moderate: 1.5,
    complex: 2.0,
    rush: 2.5,
  };

  const timelineMultiplier = timeline === 'rush' ? 1.5 : 1.0;
  const totalRate = baseRate * multipliers[complexity] * timelineMultiplier;

  return {
    hourly: Math.round(totalRate),
    projectEstimate: Math.round(totalRate * getHoursEstimate(complexity)),
    timeline: getTimelineEstimate(complexity, timeline),
  };
}`,
      explanation: "A structured approach to pricing ensures you never undercharge. Factor in complexity, timeline pressure, and your base rate. Rush projects should always carry a premium because they disrupt your schedule and increase stress.",
    },
  ],
}

const TIPS = [
  "Always start with the documentation before diving into code. The official docs often contain solutions to problems you'll spend hours debugging otherwise.",
  "Write tests before you write features. Test-driven development catches bugs early and gives you confidence that your code works as intended.",
  "Use version control religiously. Even for small projects, Git saves you from catastrophic mistakes and enables experimentation through branching.",
  "Automate repetitive tasks. If you find yourself doing something more than twice, write a script or use a tool to handle it automatically.",
  "Take regular breaks during long coding sessions. Your brain consolidates learning during rest periods, and fresh eyes catch bugs faster than tired ones.",
  "Read other people's code regularly. Open source projects are a goldmine of patterns, techniques, and architectural decisions you can learn from.",
  "Keep a developer journal. Writing down what you learn reinforces the knowledge and creates a personal reference you can revisit months later.",
  "Don't optimize prematurely. Write clean, readable code first, then profile and optimize only the parts that actually need it.",
  "Learn your editor's keyboard shortcuts. The time saved from not reaching for the mouse adds up to hours over a week.",
  "Join developer communities. Whether it's Discord, Reddit, or local meetups, connecting with other developers accelerates your learning exponentially.",
]

const CONCLUSIONS = [
  "The journey of mastering these concepts is ongoing. Start by implementing one technique at a time in your projects, and gradually build up your expertise. Remember that every expert was once a beginner, and consistent practice is the key to growth.",
  "As we've explored throughout this article, the difference between good and great developers often comes down to attention to detail and willingness to learn. Apply these principles consistently, and you'll see measurable improvement in your work.",
  "The tools and techniques discussed here represent years of collective wisdom from the developer community. By integrating them into your workflow, you're not just improving your code — you're investing in your professional growth and future career opportunities.",
  "Software development is a field where continuous learning isn't optional — it's essential. The concepts we've covered today will serve as building blocks for more advanced topics. Keep experimenting, keep building, and most importantly, keep learning.",
  "Every project is an opportunity to apply these principles and refine your skills. Don't try to implement everything at once. Pick the most impactful technique from this article, master it, and then move on to the next one. Progress beats perfection every time.",
]

interface BlogTemplate {
  title: string
  excerpt: string
  category: string
  sections: {
    heading: string
    content: string
    code?: { lang: string; code: string; explanation: string }
  }[]
}

const BLOG_TEMPLATES: BlogTemplate[] = [
  {
    title: "Mastering {topic}: A Comprehensive Guide for Modern Developers",
    excerpt: "Discover expert techniques and best practices for {topic} that will transform your development workflow. From fundamentals to advanced patterns, this guide covers everything you need to know.",
    category: "Web Development",
    sections: [
      { heading: "Understanding the Fundamentals", content: "Before diving into advanced techniques, it's essential to build a solid foundation. The core principles of {topic} have remained consistent even as the ecosystem has evolved dramatically. Understanding these fundamentals ensures you can adapt to new tools and frameworks as they emerge, rather than being locked into specific implementations that may become obsolete." },
      { heading: "Setting Up Your Development Environment", content: "A well-configured development environment is the first step toward productivity. Modern tooling has made it easier than ever to get started, but knowing which tools to choose and how to configure them properly can save you countless hours down the road. We'll walk through the essential setup steps and explain why each component matters." },
      { heading: "Building Your First Project", content: "Theory is important, but nothing beats hands-on experience. In this section, we'll build a practical project from scratch, applying the concepts we've discussed. This step-by-step approach ensures you understand not just the how, but the why behind each decision we make along the way." },
      { heading: "Advanced Patterns and Techniques", content: "Once you're comfortable with the basics, it's time to level up. Advanced patterns help you write more maintainable, scalable, and performant code. These techniques separate senior developers from junior ones and understanding them early in your career can accelerate your growth significantly." },
      { heading: "Common Pitfalls and How to Avoid Them", content: "Even experienced developers make mistakes. Learning from common pitfalls saves you time and frustration. We've compiled the most frequent errors developers encounter with {topic}, along with clear explanations of why they happen and proven strategies to prevent them in your own projects." },
      { heading: "Performance Optimization Strategies", content: "Performance isn't an afterthought — it should be considered from the start. We'll explore specific optimization techniques that have the biggest impact on real-world applications. These aren't theoretical micro-optimizations but practical improvements you can measure and verify in your own projects." },
    ],
  },
  {
    title: "The Complete {topic} Handbook: From Beginner to Expert",
    excerpt: "Everything you need to know about {topic} in one comprehensive guide. Learn practical techniques, avoid common mistakes, and accelerate your journey from novice to proficient developer.",
    category: "JavaScript",
    sections: [
      { heading: "Why {topic} Matters in 2025", content: "The technology landscape continues to evolve at a breathtaking pace. {topic} has emerged as one of the most important skills for developers to master, and for good reason. Companies are actively seeking developers who understand these concepts, and the demand shows no signs of slowing down. Whether you're looking to advance your career or build better products, this knowledge is indispensable." },
      { heading: "Core Concepts Explained", content: "At its heart, {topic} is built on a few key concepts that everything else derives from. Understanding these core ideas deeply means you can reason about complex problems rather than memorizing solutions. We'll break down each concept with clear examples and explain how they connect to form the bigger picture." },
      { heading: "Real-World Implementation", content: "Knowing the theory is only half the battle. Implementing {topic} in production environments comes with its own set of challenges that textbooks rarely cover. From handling edge cases to integrating with existing systems, real-world implementation requires a pragmatic approach that balances ideal solutions with practical constraints." },
      { heading: "Testing and Quality Assurance", content: "Quality isn't something you add at the end — it's built in from the start. We'll explore testing strategies specifically designed for {topic}, including unit tests, integration tests, and end-to-end verification. These practices catch bugs early and give you the confidence to refactor and improve your code without fear of breaking things." },
      { heading: "Scaling for Production", content: "What works in development doesn't always work at scale. As your application grows, the challenges change. We'll discuss proven strategies for handling increased load, managing complexity, and maintaining performance as your project evolves from a prototype to a production system serving real users." },
    ],
  },
  {
    title: "{topic} Demystified: Practical Tips Every Developer Needs",
    excerpt: "Cut through the complexity of {topic} with practical, actionable advice. This guide strips away the jargon and delivers clear strategies you can apply to your projects today.",
    category: "CSS & Design",
    sections: [
      { heading: "The Problem {topic} Solves", content: "Every technology exists to solve a problem, and understanding that problem deeply is the first step toward mastery. {topic} addresses specific pain points that developers face daily, and once you see the connection between the problem and the solution, everything else clicks into place. We'll start by clearly defining the problem space before exploring solutions." },
      { heading: "Simple Solutions That Work", content: "The best solutions are often the simplest. Before reaching for complex libraries or frameworks, consider whether a straightforward approach might serve you better. We'll explore minimal, effective techniques that solve real problems without adding unnecessary complexity to your codebase. Sometimes the most elegant solution is also the most obvious one." },
      { heading: "Design Patterns Worth Knowing", content: "Design patterns provide proven solutions to recurring problems. Not all patterns are equally useful, though. We'll focus on the patterns that provide the most value in everyday development, explaining when to apply each one and, just as importantly, when not to. Overusing patterns can be just as harmful as not using them at all." },
      { heading: "Mistakes I've Made So You Don't Have To", content: "Learning from others' mistakes is far less painful than making them yourself. In this section, I share the most common mistakes I've seen (and made) with {topic}, along with the lessons learned. These aren't theoretical scenarios — they're real issues that caused real problems in production applications." },
    ],
  },
  {
    title: "Building With {topic}: Architecture, Patterns, and Best Practices",
    excerpt: "A deep dive into architectural decisions and design patterns for {topic}. Learn how to structure your projects for maintainability, scalability, and long-term success.",
    category: "React & Next.js",
    sections: [
      { heading: "Architectural Foundations", content: "Good architecture is invisible. When it's done right, everything just works and new features slot in naturally. When it's wrong, every change feels like pulling teeth. The architectural decisions you make early in a project have an outsized impact on its long-term health. We'll explore the foundational patterns that lead to maintainable, scalable applications." },
      { heading: "Component Design Principles", content: "Well-designed components are the building blocks of great applications. The principles of good component design — single responsibility, clear interfaces, and proper abstraction — apply regardless of the framework you're using. We'll examine how to identify component boundaries, when to split components, and how to create APIs that are intuitive to use." },
      { heading: "State Management Strategies", content: "State management remains one of the most debated topics in frontend development. The truth is, there's no one-size-fits-all solution. The best approach depends on your application's complexity, team size, and specific requirements. We'll compare different strategies and provide clear guidance on when each one is appropriate." },
      { heading: "Optimization Without Over-Engineering", content: "Premature optimization is the root of much evil, but neglecting performance entirely leads to poor user experiences. The key is knowing which optimizations matter and which don't. We'll focus on the high-impact, low-effort improvements that make a real difference in your application's responsiveness and user satisfaction." },
      { heading: "Deployment and DevOps Considerations", content: "Getting your application into production is just the beginning. Modern deployment practices like continuous integration, automated testing, and progressive rollouts help you ship with confidence. We'll cover the essential DevOps practices that every developer should understand, even if you're not a dedicated DevOps engineer." },
    ],
  },
  {
    title: "The Developer's Guide to {topic}: Earn More and Work Smarter",
    excerpt: "Turn your {topic} skills into a thriving freelance career. Learn pricing strategies, client management, and productivity tips from someone who's been there.",
    category: "Freelancing",
    sections: [
      { heading: "Building a Profitable Skill Set", content: "The most successful freelancers don't just code well — they solve business problems. Understanding {topic} gives you a competitive advantage, but knowing how to position and market that skill is what turns technical ability into income. We'll discuss how to identify high-value skills and build expertise that clients will pay premium rates for." },
      { heading: "Finding and Landing Quality Clients", content: "Not all clients are created equal. The difference between a frustrating freelance career and a fulfilling one often comes down to client selection. We'll explore proven strategies for finding clients who respect your expertise, pay fairly, and provide interesting work. You'll learn where to look, how to pitch, and how to qualify leads before investing your time." },
      { heading: "Pricing Your Services Competitively", content: "Pricing is one of the hardest parts of freelancing, and most developers undercharge. We'll break down different pricing models, when to use each one, and how to calculate rates that sustain your business. You'll also learn negotiation techniques that help you command higher rates without losing clients." },
      { heading: "Managing Projects Like a Professional", content: "Good project management separates successful freelancers from those who burn out. We'll cover practical techniques for scoping work, setting expectations, managing timelines, and handling the inevitable scope creep. These skills ensure you deliver quality work on time while maintaining your sanity." },
      { heading: "Scaling Beyond Trading Time for Money", content: "The biggest limitation of freelancing is that your income is tied to your hours. But it doesn't have to stay that way. We'll explore strategies for creating passive income streams, building products, and eventually growing from a solo freelancer into a consultancy. The goal isn't just to freelance — it's to build a sustainable business." },
    ],
  },
]

const TOPICS: Record<string, string[]> = {
  "Web Development": [
    "Progressive Web Apps", "Server-Side Rendering", "Web Components",
    "Browser APIs", "Service Workers", "Web Accessibility",
    "Performance Optimization", "Responsive Design", "SEO Best Practices",
    "Web Security Headers", "Static Site Generation", "Edge Computing",
    "WebSocket Communication", "Micro-Frontends", "Design Systems",
    "API Gateway Patterns", "Content Delivery Networks", "Web Animation",
  ],
  "JavaScript": [
    "Async/Await Patterns", "Closures and Scope", "Event Loop Mechanics",
    "TypeScript Generics", "Functional Programming", "Module Systems",
    "Proxy and Reflect API", "Memory Management", "Iterator Patterns",
    "Web Workers", "Promise Chains", "Error Boundaries",
    "Dynamic Imports", "Generator Functions", "WeakMap and WeakSet",
    "Structured Clone Algorithm", "Temporal API", "Decorators",
  ],
  "CSS & Design": [
    "CSS Grid Layouts", "Container Queries", "CSS Custom Properties",
    "CSS Animations", "Typography Systems", "Color Theory",
    "Responsive Images", "CSS Architecture", "Modern Selectors",
    "Scroll-Driven Animations", "View Transitions API", "CSS Nesting",
    "Logical Properties", "Subgrid Layouts", "CSS Layers",
  ],
  "React & Next.js": [
    "React Server Components", "Next.js App Router", "State Management",
    "Custom Hooks", "React Suspense", "Data Fetching Patterns",
    "Component Libraries", "Testing Strategies", "SEO Optimization",
    "Middleware Patterns", "Image Optimization", "Error Handling",
    "Concurrent Features", "Streaming SSR", "Static Generation",
  ],
  "Freelancing": [
    "Freelance Pricing", "Client Acquisition", "Portfolio Building",
    "Time Management", "Contract Negotiation", "Remote Work",
    "Passive Income", "Personal Branding", "Project Management",
    "Tax Planning for Freelancers", "Networking Strategies", "Work-Life Balance",
  ],
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function generateTemplateBlog(category?: string): {
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
} {
  const cat = category && BLOG_TEMPLATES.find(t => t.category === category)
    ? category
    : pickRandom(Object.keys(BLOG_TEMPLATES))

  const template = BLOG_TEMPLATES.find(t => t.category === cat) || BLOG_TEMPLATES[0]
  const topic = pickRandom(TOPICS[cat] || TOPICS["Web Development"])
  const intro = pickRandom(INTROS)
  const tip1 = pickRandom(TIPS)
  const tip2 = pickRandom(TIPS.filter(t => t !== tip1))
  const conclusion = pickRandom(CONCLUSIONS)

  const codeExamples = CODE_EXAMPLES[cat] || CODE_EXAMPLES["Web Development"]
  const shuffledCode = shuffleArray(codeExamples)

  // Build HTML content
  let html = `<p>${intro}</p>`

  // Add sections with varying structure for uniqueness
  const sections = shuffleArray(template.sections).slice(0, 4 + Math.floor(Math.random() * 3))
  let codeIndex = 0

  sections.forEach((section, i) => {
    const sectionContent = section.content.replace(/\{topic\}/g, topic.toLowerCase())
    html += `<h2>${section.heading.replace(/\{topic\}/g, topic)}</h2>`
    html += `<p>${sectionContent}</p>`

    // Add a code example after some sections
    if (codeIndex < shuffledCode.length && (i === 0 || i === 2 || i === sections.length - 1)) {
      const codeEx = shuffledCode[codeIndex]
      html += `<h3>Code Example</h3>`
      html += `<pre><code class="language-${codeEx.lang}">${escapeHtml(codeEx.code)}</code></pre>`
      html += `<p><strong>Why this matters:</strong> ${codeEx.explanation}</p>`
      codeIndex++
    }

    // Add a tip in some sections
    if (i === 1) {
      html += `<p><strong>Pro Tip:</strong> ${tip1}</p>`
    }
    if (i === 3) {
      html += `<p><strong>Key Insight:</strong> ${tip2}</p>`
    }
  })

  html += `<h2>Wrapping Up</h2>`
  html += `<p>${conclusion}</p>`

  const title = template.title.replace(/\{topic\}/g, topic)
  const excerpt = template.excerpt.replace(/\{topic\}/g, topic.toLowerCase())

  // Estimate read time (roughly 200 words per minute)
  const plainText = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const wordCount = plainText.split(' ').length
  const readTime = `${Math.max(5, Math.ceil(wordCount / 200))} min`

  return { title, excerpt, content: html, category: cat, readTime }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
