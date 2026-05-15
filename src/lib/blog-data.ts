export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "vs-code-extensions-2025",
    title: "10 Essential VS Code Extensions for Web Developers in 2025",
    excerpt: "Discover the must-have VS Code extensions that will supercharge your web development workflow. From intelligent code completion to debugging powerhouses, these tools will transform how you write code every day.",
    date: "Jan 15, 2025",
    category: "Web Development",
    readTime: "8 min",
    content: `<h2>Why Your VS Code Setup Matters</h2>
<p>Visual Studio Code has become the most popular code editor in the world, and for good reason. It is fast, lightweight, and endlessly customizable. But what truly makes VS Code powerful is its extension ecosystem. The right set of extensions can double your productivity, catch bugs before they happen, and make coding genuinely more enjoyable. After years of testing hundreds of extensions, these are the ten that I install on every new machine without exception.</p>

<h2>1. Prettier — Code Formatter</h2>
<p>Prettier is the single most important extension you can install. It automatically formats your code every time you save, ensuring consistent style across your entire project. No more debates about tabs versus spaces, single quotes versus double quotes, or where to place closing brackets. Prettier handles it all. Configure it once with a <code>.prettierrc</code> file, enable format-on-save, and never think about formatting again. It supports JavaScript, TypeScript, CSS, HTML, Markdown, and many more languages.</p>

<h2>2. ESLint</h2>
<p>While Prettier handles formatting, ESLint catches actual code problems. It identifies unused variables, detects potential bugs, enforces best practices, and can even warn you about performance issues. When combined with Prettier through the <code>eslint-config-prettier</code> package, you get the best of both worlds: consistent formatting and intelligent error detection. ESLint is non-negotiable for any serious JavaScript or TypeScript project.</p>

<h2>3. GitLens</h2>
<p>GitLens transforms how you interact with Git inside VS Code. It shows you who last modified each line of code (inline blame annotations), when they changed it, and why. You can navigate through file history, compare branches, view commit details, and even open diffs without leaving your editor. The "Code Lens" feature adds clickable annotations above functions and classes showing recent changes and authors. For team projects, GitLens is absolutely indispensable.</p>

<h2>4. Thunder Client</h2>
<p>If you have been using Postman for API testing, Thunder Client will make you switch. It is a lightweight REST API client built right inside VS Code, so you never need to switch windows to test your endpoints. It supports collections, environment variables, authentication, and import/export. The interface is clean and fast, and being inside your editor means you can test APIs while looking at your code simultaneously.</p>

<h2>5. Auto Rename Tag</h2>
<p>This extension saves you countless keystrokes when working with HTML, JSX, or XML. When you rename an opening tag, Auto Rename Tag automatically updates the corresponding closing tag. It works in both directions too — change the closing tag and the opening tag updates. It seems small, but when you are renaming dozens of divs to semantic elements or refactoring component names, this extension saves significant time and prevents the frustration of mismatched tags.</p>

<h2>6. Path Intellisense</h2>
<p>Path Intellisense provides autocompletion for file paths in your import statements, image sources, and link hrefs. Instead of typing out long relative paths and hoping you got the directory structure right, you get a dropdown menu showing available files and folders as you type. It works with JavaScript, TypeScript, and CSS imports, and even supports custom alias paths that you define in your <code>jsconfig.json</code> or <code>tsconfig.json</code>.</p>

<h2>7. Error Lens</h2>
<p>Error Lens is a game-changer for debugging. Instead of squinting at tiny error indicators in the gutter or scrolling to the Problems panel, Error Lens highlights errors, warnings, and other diagnostics directly inline next to your code. The error message appears right where the problem is, making it immediately obvious what went wrong and where. You will find yourself fixing bugs faster simply because you can see the problems more clearly.</p>

<h2>8. Live Server</h2>
<p>Live Server launches a local development server with live reload capability. Every time you save an HTML, CSS, or JavaScript file, the browser automatically refreshes to show your changes. This is especially useful for static sites, prototypes, or when you are learning web development. While frameworks like Next.js and Vite have their own dev servers, Live Server remains essential for quick HTML/CSS experiments and standalone projects.</p>

<h2>9. CSS Peek</h2>
<p>CSS Peek lets you jump from HTML class names directly to their CSS definitions. Ctrl-click on any class or ID attribute in your HTML, and you are taken straight to the corresponding CSS rule. You can also hover over class names to see a preview of the styles. This extension eliminates the constant switching between HTML and CSS files that eats up so much development time, especially in large projects with hundreds of styles.</p>

<h2>10. Bracket Pair Colorizer (Now Built-in)</h2>
<p>While bracket pair colorization is now built into VS Code, many developers do not know it exists or have not enabled it. Go to Settings and search for "bracket pair colorization" to turn it on. Each pair of brackets gets a unique color, making it easy to see which opening bracket matches which closing one. In deeply nested code, this visual aid is incredibly helpful for understanding structure and avoiding bugs caused by misplaced brackets.</p>

<h2>Setting Up Your Extensions</h2>
<p>Installing extensions one by one is tedious. VS Code supports Settings Sync, which lets you sync your extensions and settings across devices using your GitHub or Microsoft account. Alternatively, you can export your extension list using the command line and install them all at once on a new machine. I recommend creating a personal "extensions pack" that you can restore quickly whenever you set up a new development environment.</p>`
  },
  {
    id: "build-website-from-scratch",
    title: "How to Build a Website from Scratch: Complete Beginner Guide",
    excerpt: "A step-by-step walkthrough covering everything from planning your site structure and choosing technologies to writing HTML, CSS, and JavaScript, then deploying your finished website to the internet for free.",
    date: "Jan 12, 2025",
    category: "Web Development",
    readTime: "12 min",
    content: `<h2>Building Your First Website</h2>
<p>Every developer remembers the moment they saw their first website appear in a browser. That feeling of creating something from nothing, something that anyone in the world can visit and interact with, is what makes web development so rewarding. This guide walks you through the entire process from absolute zero to a live website, no prior experience required. We will cover the planning phase, the three core languages of the web, and how to get your site online for free.</p>

<h2>Step 1: Plan Your Website</h2>
<p>Before writing a single line of code, grab a piece of paper and sketch out what you want your website to look like. Decide on the pages you need, the content each page will contain, and how visitors will navigate between them. A simple personal portfolio might have four pages: Home, About, Projects, and Contact. A blog might need a homepage, a post listing page, individual article pages, and an about page. Planning saves hours of reworking later.</p>
<p>Also decide on your color scheme and typography at this stage. Pick two or three colors maximum: a primary color for headings and buttons, a secondary color for accents, and a neutral color for backgrounds and text. Google Fonts offers thousands of free typefaces, and choosing one font for headings and another for body text is enough for a professional-looking site.</p>

<h2>Step 2: HTML — The Structure</h2>
<p>HTML (HyperText Markup Language) defines the structure and content of your website. Think of it as the skeleton. Every web page is built with HTML elements that tell the browser what each piece of content is: a heading, a paragraph, an image, a link, a list, and so on.</p>
<p>Start with the HTML5 boilerplate, which includes the document type declaration, language attribute, character encoding, and viewport meta tag for mobile responsiveness. Use semantic elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> instead of generic <code>&lt;div&gt;</code> tags. Semantic HTML improves accessibility for screen readers and helps search engines understand your content.</p>
<p>Every page should have exactly one <code>&lt;h1&gt;</code> tag for the main heading, followed by <code>&lt;h2&gt;</code> tags for section headings, and <code>&lt;h3&gt;</code> tags for subsections. This hierarchy is important for both SEO and accessibility. Add alt attributes to all images, use descriptive link text instead of "click here," and make sure your forms have proper labels.</p>

<h2>Step 3: CSS — The Styling</h2>
<p>CSS (Cascading Style Sheets) controls how your HTML looks: colors, fonts, spacing, layout, animations, and responsiveness. While HTML is the skeleton, CSS is the skin and clothing that makes your website visually appealing.</p>
<p>Start with a CSS reset to remove inconsistent default browser styles. Then define your color variables using CSS custom properties, which makes it easy to maintain a consistent color scheme and change colors later. Use the box model to control spacing: every HTML element is a rectangular box with content, padding, border, and margin areas.</p>
<p>For layout, learn Flexbox first. It handles one-dimensional layouts (rows or columns) beautifully and solves the common problems of centering elements and distributing space. Once you are comfortable with Flexbox, learn CSS Grid for two-dimensional layouts where you need precise control over both rows and columns simultaneously.</p>
<p>Responsive design is not optional. Use media queries to adjust your layout at different screen widths, and always test on mobile devices. The <code>max-width: 100%</code> rule on images prevents them from overflowing their containers, and relative units like <code>rem</code> and <code>%</code> scale better than fixed pixel values.</p>

<h2>Step 4: JavaScript — The Interactivity</h2>
<p>JavaScript adds behavior to your website: form validation, interactive menus, dynamic content, animations, and much more. You do not need JavaScript for a basic website, but even a small amount can significantly improve the user experience.</p>
<p>Start by learning how to select elements with <code>document.querySelector()</code> and <code>document.querySelectorAll()</code>, add event listeners for clicks and form submissions, and modify element content and styles. Build a mobile navigation toggle, a simple image carousel, or a form that validates input before submission. These small interactions make your website feel polished and professional.</p>

<h2>Step 5: Deploy for Free</h2>
<p>Getting your website online has never been easier or cheaper. GitHub Pages hosts static websites for free directly from your GitHub repository. Netlify and Vercel offer free tiers with automatic deployments from Git, custom domains, and HTTPS certificates. Simply push your code to GitHub, connect it to one of these platforms, and your site is live within minutes.</p>
<p>For a custom domain name, you can purchase one for around ten dollars per year from registrars like Namecheap or Google Domains. Point the DNS records to your hosting platform, and your website will be accessible at your own URL. If you do not want to spend money, the free subdomains provided by these platforms work perfectly fine.</p>`
  },
  {
    id: "web-dev-roadmap-2025",
    title: "Web Development Roadmap 2025: What to Learn and Where to Start",
    excerpt: "Navigate the overwhelming landscape of web development technologies with this clear, structured roadmap. From fundamentals to specialization, know exactly what to learn next at every stage of your journey.",
    date: "Jan 8, 2025",
    category: "Web Development",
    readTime: "10 min",
    content: `<h2>The Overwhelming World of Web Development</h2>
<p>If you are just starting out in web development, the sheer number of technologies, frameworks, and tools can feel paralyzing. Do you learn React or Vue? Do you need TypeScript? What about Node.js, Python, or Go? Should you focus on frontend or backend? The truth is, there is no single correct path, but there is a logical progression that makes the journey smoother and more effective. This roadmap breaks web development into clear stages, so you always know what to focus on next.</p>

<h2>Stage 1: The Foundation (Months 1-2)</h2>
<p>Every web developer, regardless of specialization, must understand the three pillars of the web: HTML, CSS, and JavaScript. These are not optional. They are the languages every browser understands, and every framework or tool you will ever use is built on top of them.</p>
<p>Learn HTML5 semantic elements and document structure. Understand CSS box model, Flexbox, Grid, and responsive design with media queries. For JavaScript, focus on variables, data types, functions, DOM manipulation, event handling, and asynchronous programming with Promises and async/await. Do not rush this stage. A strong foundation makes everything that follows dramatically easier.</p>

<h2>Stage 2: Version Control and Tooling (Month 3)</h2>
<p>Before you build anything substantial, learn Git and GitHub. Version control is how developers track changes, collaborate, and recover from mistakes. Learn to create repositories, make commits, create branches, merge code, and resolve merge conflicts. GitHub is also your portfolio: future employers and clients will look at your GitHub profile to see your work.</p>
<p>Set up a proper development environment with VS Code, install essential extensions, and learn to use the terminal. Understand package managers like npm or bun, and learn how Node.js works at a basic level even if you plan to focus on frontend development.</p>

<h2>Stage 3: Frontend Framework (Months 4-6)</h2>
<p>While you can build websites with plain JavaScript, modern web applications are built with frameworks that provide structure, efficiency, and powerful features out of the box. In 2025, the three most relevant frontend frameworks are React, Vue, and Svelte.</p>
<p>React remains the most popular and has the largest ecosystem and job market. Vue is known for its approachable learning curve and excellent documentation. Svelte offers a compiler-based approach that results in smaller, faster applications. Pick one and learn it thoroughly rather than dabbling in all three. For most developers, especially those seeking employment, React is the safest choice due to market demand.</p>
<p>Learn component architecture, state management, routing, and how to fetch and display data from APIs. Build at least three complete projects: a personal portfolio, a data dashboard, and a CRUD application. These projects demonstrate different skills and make your portfolio compelling.</p>

<h2>Stage 4: Backend and Databases (Months 7-9)</h2>
<p>Understanding backend development makes you a more complete developer, even if you primarily work on the frontend. Learn how servers work, how APIs are built, how databases store and retrieve data, and how authentication and authorization work.</p>
<p>If you already know JavaScript, Node.js with Express is the natural backend choice. Python with Django or FastAPI is another excellent option, especially if you are interested in data science or machine learning. For databases, learn SQL with PostgreSQL for relational data and MongoDB for document-based storage. Build a REST API that your frontend projects can consume.</p>

<h2>Stage 5: Specialization (Months 10+)</h2>
<p>Once you have a solid full-stack foundation, choose a specialization based on your interests and career goals. Frontend specialists dive deep into performance optimization, accessibility, animation, and design systems. Backend specialists focus on scalable architecture, microservices, caching, and DevOps. Full-stack developers build complete applications end to end.</p>
<p>Other specializations include mobile development with React Native, DevOps and cloud infrastructure, security engineering, and technical writing. The key is to go deep in one area while maintaining breadth across the stack.</p>

<h2>What About AI?</h2>
<p>AI tools like ChatGPT, GitHub Copilot, and Cursor are changing how developers work, but they are not replacing developers anytime soon. Learn to use AI as a productivity multiplier: for generating boilerplate, explaining unfamiliar code, debugging errors, and brainstorming solutions. But never rely on AI to write code you do not understand. The developers who thrive in 2025 and beyond are those who combine strong fundamentals with effective AI tool usage.</p>`
  },
  {
    id: "http-status-codes",
    title: "Understanding HTTP Status Codes Every Developer Should Know",
    excerpt: "HTTP status codes are how the web communicates success and failure. Learn what each code range means, which ones you will encounter most often, and how to handle them properly in your applications.",
    date: "Jan 3, 2025",
    category: "Web Development",
    readTime: "7 min",
    content: `<h2>Why HTTP Status Codes Matter</h2>
<p>Every time your browser requests a web page, image, or API endpoint, the server responds with a status code. This three-digit number tells you whether the request succeeded, failed, or needs additional action. Understanding these codes is essential for debugging, building APIs, and providing good user experiences. If your application returns a 200 when something went wrong, or a 500 when the user simply sent invalid data, you are making debugging harder for everyone.</p>

<h2>2xx: Success</h2>
<p>The 2xx range indicates that the request was received, understood, and accepted successfully. The most common is <strong>200 OK</strong>, which means the request succeeded and the response body contains the requested data. <strong>201 Created</strong> is returned when a new resource has been successfully created, typically after a POST request. <strong>204 No Content</strong> means the request succeeded but there is no response body to return, commonly used after a successful DELETE request.</p>

<h2>3xx: Redirection</h2>
<p>Redirection codes tell the client that the requested resource has moved and provide the new location. <strong>301 Moved Permanently</strong> means the resource has permanently moved to a new URL, and search engines should update their indexes. <strong>302 Found</strong> indicates a temporary redirect; the resource is at a different URL for now but will return. <strong>304 Not Modified</strong> is crucial for performance: it tells the browser that its cached version is still valid, saving bandwidth and load time.</p>

<h2>4xx: Client Errors</h2>
<p>4xx codes mean the client made a mistake. These are the codes you will encounter most frequently as a developer. <strong>400 Bad Request</strong> is a generic error indicating the server could not understand the request due to malformed syntax or invalid data. <strong>401 Unauthorized</strong> means the request requires authentication and the client has not provided valid credentials. <strong>403 Forbidden</strong> is different from 401: the server knows who you are, but you do not have permission to access this resource. <strong>404 Not Found</strong> is the most well-known status code, indicating the requested resource does not exist on the server. <strong>429 Too Many Requests</strong> is returned when the client has exceeded rate limits, commonly seen with API usage.</p>

<h2>5xx: Server Errors</h2>
<p>5xx codes indicate that something went wrong on the server side. These are serious because they mean your application is failing. <strong>500 Internal Server Error</strong> is the catch-all server error, usually caused by unhandled exceptions in your code. <strong>502 Bad Gateway</strong> means your server, acting as a gateway, received an invalid response from an upstream server. <strong>503 Service Unavailable</strong> indicates the server is temporarily unable to handle the request, often due to maintenance or overload. <strong>504 Gateway Timeout</strong> means the upstream server did not respond in time.</p>

<h2>Best Practices for Using Status Codes</h2>
<p>When building APIs, always return the most specific status code that accurately describes the situation. Do not return 200 for everything and put error details in the response body. Do not return 500 for validation errors; use 400 or 422 instead. Include a descriptive error message in the response body alongside the status code, so consumers of your API know what went wrong and how to fix it. Consistent and accurate status codes make your API predictable, debuggable, and professional.</p>`
  },
  {
    id: "accessible-web-apps",
    title: "Building Accessible Web Apps: A Practical Developer's Guide",
    excerpt: "Accessibility is not optional — it is essential. Learn practical techniques for building web applications that work for everyone, from semantic HTML and ARIA attributes to keyboard navigation and screen reader testing.",
    date: "Dec 28, 2024",
    category: "Web Development",
    readTime: "11 min",
    content: `<h2>Why Accessibility Matters</h2>
<p>Approximately one billion people worldwide live with some form of disability. That is fifteen percent of the global population. When you build inaccessible websites, you are excluding a massive group of people from using your product. But accessibility is not just about doing the right thing morally. It also makes business sense: accessible websites have better SEO, reach more customers, and are often legally required. In many countries, web accessibility is mandated by law, and companies have faced expensive lawsuits for failing to meet accessibility standards.</p>

<h2>Semantic HTML: The Foundation</h2>
<p>The single most impactful thing you can do for accessibility is use semantic HTML. Semantic elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code> communicate meaning to assistive technologies. A screen reader can announce "navigation landmark" when it encounters a <code>&lt;nav&gt;</code> element, allowing users to jump directly to the navigation. When you use a <code>&lt;div&gt;</code> with a click handler instead of a <code>&lt;button&gt;</code>, you lose all the built-in accessibility: keyboard focus, activation with Enter and Space, and the role announcement that tells screen reader users this is an interactive element.</p>

<h2>ARIA Attributes</h2>
<p>ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies when semantic HTML alone is not enough. The most important rule of ARIA is: do not use it if you do not have to. A native HTML button is always more accessible than a div with <code>role="button"</code>. Use ARIA when you are building custom interactive components that have no native HTML equivalent, such as tab panels, accordions, or modal dialogs.</p>
<p>Key ARIA attributes include <code>aria-label</code> for elements that need descriptive text but have no visible label, <code>aria-labelledby</code> for elements that are labeled by other elements on the page, <code>aria-expanded</code> for toggleable sections, <code>aria-hidden</code> for decorative or redundant content, and <code>role</code> for defining the purpose of custom elements. Always test ARIA implementations with an actual screen reader, because incorrect ARIA can make things worse than having no ARIA at all.</p>

<h2>Keyboard Navigation</h2>
<p>Many users navigate websites entirely with keyboards, including people with motor disabilities and power users who prefer keyboard shortcuts. Every interactive element must be reachable via the Tab key and activatable with Enter or Space. Avoid using <code>tabindex</code> values greater than zero, as they disrupt the natural tab order. Use <code>tabindex="0"</code> to make custom elements focusable, and <code>tabindex="-1"</code> for elements that should be programmatically focusable but not in the tab order, such as off-screen menus that need to receive focus when opened.</p>
<p>Provide visible focus indicators. The default browser focus outline is often removed for aesthetic reasons, which makes keyboard navigation impossible. If you remove the default outline, replace it with a custom focus style that is clearly visible against all backgrounds.</p>

<h2>Color and Contrast</h2>
<p>Approximately eight percent of men and half a percent of women have some form of color vision deficiency. Never rely on color alone to convey information. If a form field turns red on error, also include an icon or text message explaining the error. Ensure sufficient contrast ratios between text and background colors: the WCAG AA standard requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use contrast checking tools to verify your color choices.</p>

<h2>Testing Accessibility</h2>
<p>Automated tools like Lighthouse, axe, and WAVE can catch about thirty percent of accessibility issues. The remaining seventy percent requires manual testing. Navigate your entire website using only the keyboard. Try a screen reader like VoiceOver on Mac or NVDA on Windows. Use your website with zoom set to 200 percent. These manual tests reveal issues that automated tools cannot detect, such as logical reading order, meaningful alt text, and proper focus management in dynamic content.</p>`
  },
  {
    id: "js-performance-optimization",
    title: "JavaScript Performance Optimization: 15 Proven Techniques",
    excerpt: "From code splitting and lazy loading to memory management and Web Workers, these 15 battle-tested techniques will help you build faster, more responsive JavaScript applications that users love.",
    date: "Dec 22, 2024",
    category: "JavaScript",
    readTime: "10 min",
    content: `<h2>Why Performance Matters</h2>
<p>Performance directly impacts user experience and business metrics. Research shows that a one-second delay in page load time results in a seven percent reduction in conversions. Google uses page speed as a ranking factor, meaning slow websites rank lower in search results. Users expect websites to load in under three seconds, and every additional second increases bounce rate. Optimizing JavaScript performance is not premature optimization; it is responsible engineering.</p>

<h2>1. Code Splitting</h2>
<p>Instead of serving one massive JavaScript bundle, split your code into smaller chunks that are loaded on demand. Modern bundlers like Webpack, Vite, and Rollup support code splitting out of the box. Use dynamic imports to load heavy modules only when they are needed. For example, load a chart library only when the user navigates to the analytics page. This reduces the initial bundle size dramatically and speeds up the first meaningful paint.</p>

<h2>2. Lazy Loading</h2>
<p>Lazy loading defers the loading of non-critical resources until they are needed. Images below the fold should use the <code>loading="lazy"</code> attribute. Components that are not immediately visible should be loaded only when they scroll into view using the Intersection Observer API. This technique reduces initial page weight and bandwidth consumption, especially on mobile devices with slower connections.</p>

<h2>3. Debouncing and Throttling</h2>
<p>Events like scroll, resize, and keyup can fire hundreds of times per second. If you attach expensive operations to these events, your application will become unresponsive. Debouncing ensures a function only executes after a specified pause since the last invocation, ideal for search input handlers. Throttling ensures a function executes at most once per specified interval, ideal for scroll handlers. Both techniques prevent performance bottlenecks from high-frequency events.</p>

<h2>4. Virtual Scrolling</h2>
<p>Rendering thousands of DOM elements is one of the fastest ways to slow down a web page. Virtual scrolling renders only the items visible in the viewport, plus a small buffer, and recycles DOM elements as the user scrolls. Libraries like react-window and react-virtuoso make virtual scrolling straightforward. For a list of ten thousand items, virtual scrolling can reduce the DOM from ten thousand elements to around twenty, resulting in dramatic performance improvements.</p>

<h2>5. Web Workers</h2>
<p>JavaScript is single-threaded, meaning heavy computations block the main thread and make the UI unresponsive. Web Workers allow you to run JavaScript in a background thread, keeping the main thread free for user interactions. Move CPU-intensive tasks like data processing, image manipulation, and complex calculations to a Web Worker. The main thread and worker communicate through message passing, ensuring the UI remains smooth even during heavy computation.</p>

<h2>6. Memoization</h2>
<p>Memoization caches the results of expensive function calls and returns the cached result when the same inputs occur again. In React, the <code>useMemo</code> and <code>useCallback</code> hooks prevent unnecessary recalculations and re-renders. Pure functions with the same inputs always produce the same outputs, making them perfect candidates for memoization. However, do not memoize everything: the caching overhead can exceed the computation cost for simple operations.</p>

<h2>7. Efficient DOM Manipulation</h2>
<p>Direct DOM manipulation is expensive. Minimize layout thrashing by batching DOM reads and writes separately. Use <code>document.createDocumentFragment()</code> to build DOM structures off-screen before appending them. Avoid querying layout properties like <code>offsetHeight</code> inside loops, as each query forces the browser to recalculate layout. Prefer CSS transforms and opacity for animations, as these properties can be handled by the GPU without triggering layout recalculations.</p>

<h2>8. Reduce Bundle Size</h2>
<p>Audit your bundle regularly with tools like Webpack Bundle Analyzer. Remove unused dependencies, prefer lighter alternatives (date-fns over moment.js, lodash individual functions over the full library), and tree-shake your imports. Enable compression (gzip or Brotli) on your server. Minification alone can reduce JavaScript file sizes by thirty to fifty percent, and compression can reduce them by another sixty to eighty percent.</p>

<h2>9. Image Optimization</h2>
<p>Images are often the largest assets on a web page. Use modern formats like WebP and AVIF that offer superior compression. Serve responsive images using the <code>srcset</code> attribute so browsers download appropriately sized images. Implement lazy loading for images below the fold. Use CDN-based image transformation services to automatically optimize and resize images on the fly.</p>

<h2>10. Caching Strategies</h2>
<p>Implement browser caching with proper Cache-Control headers. Use service workers to cache assets and API responses for offline access. Consider stale-while-revalidate strategies that serve cached content immediately while fetching fresh data in the background. Effective caching means returning users load your website almost instantly.</p>`
  },
  {
    id: "js-array-methods-2025",
    title: "JavaScript Array Methods You Must Know in 2025",
    excerpt: "Arrays are the workhorse of JavaScript programming. Master these essential array methods to write cleaner, more expressive code and avoid common pitfalls that trip up even experienced developers.",
    date: "Dec 18, 2024",
    category: "JavaScript",
    readTime: "9 min",
    content: `<h2>Why Array Methods Matter</h2>
<p>Working with arrays is one of the most common tasks in JavaScript development. Whether you are transforming data from an API, filtering user input, or calculating aggregate values, JavaScript provides a rich set of built-in array methods that make these operations expressive and concise. Learning these methods replaces verbose for-loop patterns with readable, declarative code that communicates intent clearly. Let us explore the methods you will use most frequently.</p>

<h2>map() — Transform Every Element</h2>
<p>The <code>map()</code> method creates a new array by applying a function to every element in the original array. It never modifies the original array, making it a safe choice for immutable data transformations. Use map whenever you need to convert data from one shape into another: extracting a property from objects, converting units, or adding computed fields.</p>
<pre><code>const users = [{name: 'Ali', age: 25}, {name: 'Sara', age: 30}];
const names = users.map(user => user.name);
// Result: ['Ali', 'Sara']</code></pre>
<p>Remember that map always returns an array of the same length as the original. If you need to filter elements, use filter instead. If you need to reduce to a single value, use reduce. Combining these three methods covers most data transformation needs.</p>

<h2>filter() — Select Matching Elements</h2>
<p>The <code>filter()</code> method creates a new array containing only the elements that pass a test condition. Like map, it does not modify the original array. Filter is ideal for removing unwanted items, finding active records, or narrowing down search results.</p>
<pre><code>const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
// Result: [2, 4, 6]</code></pre>

<h2>reduce() — Accumulate a Single Value</h2>
<p>The <code>reduce()</code> method is the most powerful and versatile array method. It iterates through the array and accumulates a single result, which can be a number, string, object, or even another array. Common uses include summing values, flattening nested arrays, grouping objects by a property, and building frequency counts.</p>
<pre><code>const cart = [{item: 'Book', price: 15}, {item: 'Pen', price: 3}];
const total = cart.reduce((sum, product) => sum + product.price, 0);
// Result: 18</code></pre>

<h2>find() — Locate the First Match</h2>
<p>The <code>find()</code> method returns the first element that satisfies a condition, or undefined if no element matches. Unlike filter, it stops iterating as soon as it finds a match, making it more efficient when you only need one result. Use find to look up records by ID or find the first item meeting specific criteria.</p>

<h2>some() and every() — Test Conditions</h2>
<p><code>some()</code> returns true if at least one element passes the test, while <code>every()</code> returns true only if all elements pass. Both methods short-circuit: some stops as soon as it finds a passing element, and every stops as soon as it finds a failing one. Use these for validation checks, permission testing, and conditional logic.</p>

<h2>flat() and flatMap() — Handle Nested Arrays</h2>
<p>The <code>flat()</code> method flattens nested arrays to a specified depth. <code>flatMap()</code> combines map and flat in a single operation, first mapping each element and then flattening the result by one level. These methods are incredibly useful for processing data that contains nested arrays, such as extracting tags from a list of articles or collecting errors from form validation results.</p>

<h2>includes() and indexOf() — Search for Values</h2>
<p><code>includes()</code> returns a boolean indicating whether an array contains a specific value. It is simpler and more readable than checking <code>indexOf() !== -1</code>. Use includes for existence checks and indexOf when you need the actual position of the element. Both perform linear searches, so for large arrays, consider using a Set for O(1) lookups.</p>

<h2>Chaining Methods Together</h2>
<p>The real power of array methods emerges when you chain them together. You can filter a dataset, transform the remaining items, and reduce them to a final result in a single expression. This functional approach is more readable and less error-prone than nested for-loops with mutable accumulator variables.</p>
<pre><code>const result = products
  .filter(p => p.inStock)
  .map(p => ({...p, priceWithTax: p.price * 1.2}))
  .reduce((total, p) => total + p.priceWithTax, 0);</code></pre>`
  },
  {
    id: "promise-vs-async-await",
    title: "Promise vs Async/Await: Understanding JavaScript Asynchronous Programming",
    excerpt: "From callback hell to the elegance of async/await, trace the evolution of asynchronous JavaScript and learn when to use each pattern for clean, maintainable, and error-resistant code.",
    date: "Dec 14, 2024",
    category: "JavaScript",
    readTime: "10 min",
    content: `<h2>The Problem: JavaScript is Single-Threaded</h2>
<p>JavaScript runs on a single thread, which means it can only execute one piece of code at a time. Yet web applications need to do things that take time: fetch data from servers, read files, wait for user input, and process heavy computations. If JavaScript waited for each of these operations to complete before moving on, the entire page would freeze. Asynchronous programming solves this problem by allowing the program to continue executing other code while waiting for long operations to complete.</p>

<h2>Callbacks: The Original Approach</h2>
<p>In the early days of JavaScript, asynchronous operations were handled with callbacks: functions passed as arguments to be executed when the operation completed. This works fine for simple cases, but when you need to chain multiple asynchronous operations together, you end up with deeply nested callback structures known as "callback hell" or the "pyramid of doom." Each nested level adds indentation and complexity, making the code hard to read, hard to debug, and error-prone.</p>
<pre><code>getUser(id, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      // Three levels deep and growing...
    });
  });
});</code></pre>

<h2>Promises: A Better Abstraction</h2>
<p>Promises represent the eventual result of an asynchronous operation. A Promise is in one of three states: pending (initial state), fulfilled (operation completed successfully), or rejected (operation failed). The key advantage of Promises over callbacks is that they can be chained using the <code>.then()</code> method, flattening the pyramid of doom into a readable linear sequence.</p>
<pre><code>getUser(id)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => console.log(details))
  .catch(error => console.error(error));</code></pre>
<p>The <code>.catch()</code> method handles errors from any step in the chain, which is far cleaner than adding error callbacks at every nesting level. Promises also support <code>Promise.all()</code> for running multiple operations in parallel, <code>Promise.race()</code> for the first to complete, and <code>Promise.allSettled()</code> for waiting on all regardless of outcome.</p>

<h2>Async/Await: Syntactic Sugar</h2>
<p>Async/await, introduced in ES2017, provides a way to write Promise-based code that looks synchronous. The <code>async</code> keyword marks a function as asynchronous, and the <code>await</code> keyword pauses execution until a Promise resolves. Under the hood, async/await is built on top of Promises, but the syntax is dramatically cleaner.</p>
<pre><code>async function getOrderInfo(id) {
  try {
    const user = await getUser(id);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    return details;
  } catch (error) {
    console.error(error);
  }
}</code></pre>
<p>This code reads top-to-bottom like synchronous code, making it significantly easier to understand, especially for developers new to asynchronous programming. Error handling uses standard try/catch blocks instead of <code>.catch()</code> chains.</p>

<h2>When to Use Each Pattern</h2>
<p>Use async/await as your default approach for sequential asynchronous operations. It is more readable and easier to debug. Use raw Promises when you need parallel execution with <code>Promise.all()</code>, when you are writing library code that should return a Promise, or when you need to attach multiple handlers to the same Promise. Avoid callbacks entirely unless you are working with legacy APIs that do not support Promises.</p>
<p>One common mistake is using <code>await</code> inside loops when operations could run in parallel. If you need to fetch ten URLs, do not await each one sequentially. Use <code>Promise.all()</code> to fetch them all concurrently, which can reduce total wait time from ten times the slowest request to just one time the slowest request.</p>`
  },
  {
    id: "js-clean-code-tips",
    title: "10 JavaScript Tips for Writing Clean and Maintainable Code",
    excerpt: "Elevate your JavaScript code quality with these practical tips covering modern syntax features, design patterns, and coding habits that make your codebase easier to read, test, and extend.",
    date: "Dec 10, 2024",
    category: "JavaScript",
    readTime: "8 min",
    content: `<h2>Clean Code Saves Time</h2>
<p>The average developer spends far more time reading code than writing it. Code is read during code reviews, bug fixes, feature additions, and onboarding. Clean code reduces the cognitive load required to understand a codebase, which means faster development, fewer bugs, and happier teams. These ten tips are practical techniques you can start applying today to write JavaScript that other developers will thank you for.</p>

<h2>1. Use Destructuring for Clarity</h2>
<p>Destructuring extracts values from objects and arrays into distinct variables, making code more concise and readable. Instead of repeatedly accessing <code>user.name</code>, <code>user.email</code>, and <code>user.age</code>, destructure them at the top of your function. This also signals to the reader exactly which properties the function uses, serving as implicit documentation.</p>

<h2>2. Optional Chaining for Safe Property Access</h2>
<p>The optional chaining operator (<code>?.</code>) stops evaluation and returns undefined if a property in the chain is null or undefined, instead of throwing an error. Replace verbose null checks like <code>user && user.address && user.address.city</code> with <code>user?.address?.city</code>. This pattern is invaluable when working with API responses that may have incomplete data structures.</p>

<h2>3. Nullish Coalescing for Default Values</h2>
<p>The nullish coalescing operator (<code>??</code>) returns the right operand only when the left operand is null or undefined, unlike the logical OR operator (<code>||</code>) which returns the right operand for any falsy value including zero and empty strings. Use <code>??</code> when zero or empty string are valid values that should not be replaced by defaults.</p>

<h2>4. Template Literals Over String Concatenation</h2>
<p>Template literals use backticks and allow embedded expressions within dollar-curly-brace syntax. They produce more readable strings than concatenation with the plus operator, especially for multi-line strings. Template literals also support tagged templates for advanced use cases like internationalization and HTML sanitization.</p>

<h2>5. Use const by Default</h2>
<p>Declare variables with <code>const</code> unless you explicitly need to reassign them. This signals intent clearly: const variables will not change, making the code easier to reason about. When you see a <code>let</code> declaration, you know the variable will be reassigned, which draws attention to mutable state. Avoid <code>var</code> entirely due to its function-scoping and hoisting behavior.</p>

<h2>6. Early Returns to Reduce Nesting</h2>
<p>Instead of wrapping your entire function body in an if statement, check for invalid conditions early and return. This reduces nesting levels and makes the happy path more prominent. Each guard clause acts as a precondition, and the remaining code can safely assume all preconditions are met.</p>
<pre><code>// Instead of:
function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      // Deep nesting...
    }
  }
}

// Prefer:
function processOrder(order) {
  if (!order) return;
  if (order.items.length === 0) return;
  // Happy path with less nesting
}</code></pre>

<h2>7. Meaningful Names</h2>
<p>Variable and function names should describe their purpose. Avoid abbreviations, single-letter variables (except in short loops), and generic names like <code>data</code>, <code>info</code>, or <code>temp</code>. A function named <code>getActiveUsersByRegion</code> is infinitely more useful than <code>getData</code>. Spend a few extra seconds choosing good names; it pays dividends every time someone reads the code.</p>

<h2>8. Small, Focused Functions</h2>
<p>Each function should do one thing and do it well. If you need to use "and" to describe what a function does, it probably does too much. Small functions are easier to test, easier to understand, easier to reuse, and easier to name. A good rule of thumb: if a function exceeds twenty lines, consider breaking it into smaller pieces.</p>

<h2>9. Avoid Magic Numbers</h2>
<p>Hard-coded numeric values without explanation are confusing. What does <code>86400</code> mean? Extract such values into named constants: <code>const SECONDS_PER_DAY = 86400</code>. Named constants serve as documentation and make it easy to update values in one place when requirements change.</p>

<h2>10. Consistent Formatting</h2>
<p>Use Prettier and ESLint to enforce consistent formatting across your entire project. Consistent style eliminates meaningless differences in code reviews and reduces cognitive overhead. Agree on a style guide as a team, configure your tools, and never waste time discussing formatting in code reviews again.</p>`
  },
  {
    id: "js-closures-deep-dive",
    title: "Understanding JavaScript Closures: A Deep Dive with Examples",
    excerpt: "Closures are one of the most fundamental and often misunderstood concepts in JavaScript. This deep dive explains lexical scope, closure patterns, and practical use cases with clear examples.",
    date: "Dec 5, 2024",
    category: "JavaScript",
    readTime: "10 min",
    content: `<h2>What is a Closure?</h2>
<p>A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing. In JavaScript, every function creates a closure. This is not a special feature you opt into; it is how the language works. Understanding closures unlocks the ability to write private variables, factory functions, event handlers, and much more elegant code patterns.</p>

<h2>Lexical Scope: The Foundation</h2>
<p>JavaScript uses lexical scoping, which means the scope of a variable is determined by where it is declared in the source code, not where the function is called. When a function is defined, it captures a reference to its surrounding scope. This captured scope is the closure. The inner function does not make a copy of the outer variables; it maintains a live reference to them, meaning changes to those variables are visible to the inner function.</p>
<pre><code>function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3</code></pre>
<p>Even though <code>outer()</code> has finished executing, the <code>inner</code> function still has access to <code>count</code>. This is a closure in action. Each call to <code>outer()</code> creates a new scope with its own <code>count</code> variable, so multiple counters operate independently.</p>

<h2>Practical Use Case 1: Data Privacy</h2>
<p>JavaScript does not have built-in private variables for objects, but closures provide a way to achieve data privacy. By defining variables inside a function and only exposing methods that operate on those variables, you prevent external code from directly accessing or modifying the internal state. This pattern is commonly called the module pattern.</p>
<pre><code>function createBankAccount(initial) {
  let balance = initial;
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
}
const account = createBankAccount(100);
account.deposit(50);
account.getBalance(); // 150
// No way to directly access or modify balance</code></pre>

<h2>Practical Use Case 2: Event Handlers</h2>
<p>Closures are essential for event handlers because they allow you to attach data to callback functions. When you add a click handler inside a loop, the closure captures the loop variable, enabling each handler to know which element was clicked. However, be careful with closures in loops using <code>var</code>, because all closures share the same variable reference. Using <code>let</code> instead of <code>var</code> creates a new binding per iteration, solving this classic problem.</p>

<h2>Practical Use Case 3: Partial Application and Currying</h2>
<p>Closures enable partial application, where you pre-fill some arguments of a function and return a new function that accepts the remaining arguments. This technique creates specialized functions from general ones, reducing repetition and improving code readability. Currying takes this further by transforming a function with multiple arguments into a sequence of functions each taking a single argument.</p>
<pre><code>function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
const triple = multiply(3);
double(5);  // 10
triple(5);  // 15</code></pre>

<h2>Common Pitfalls</h2>
<p>Closures can cause memory leaks if you are not careful. Since closures maintain references to their outer scope, the garbage collector cannot free that memory as long as the inner function exists. In most cases this is not a problem, but in long-running applications with many closures, be mindful of unnecessary references to large objects. Also, closures in loops with <code>var</code> capture the same variable reference, leading to the classic "all handlers use the last value" bug. Always use <code>let</code> or <code>const</code> in loops.</p>`
  },
  {
    id: "css-container-queries",
    title: "CSS Container Queries: The Future of Responsive Design",
    excerpt: "Container queries are changing the way we think about responsive design. Instead of responding to viewport size, components can now adapt to their container. Learn how to use this powerful feature today.",
    date: "Nov 28, 2024",
    category: "CSS & Design",
    readTime: "6 min",
    content: `<h2>The Limitation of Media Queries</h2>
<p>For over a decade, responsive web design has relied on media queries that respond to the viewport size. This works well for page-level layouts, but it breaks down when you need components to adapt to their container. A sidebar card and a main content card might need different layouts at the same viewport width. Media queries cannot solve this because they only know about the viewport, not the container. Container queries solve this by allowing components to respond to the size of their parent element.</p>

<h2>How Container Queries Work</h2>
<p>Container queries use two CSS properties: <code>container-type</code> and <code>container-name</code>. The <code>container-type</code> property defines an element as a container, and <code>container-name</code> gives it a name that can be referenced in query conditions. Once a container is established, child elements can use the <code>@container</code> rule to apply styles based on the container's dimensions.</p>
<pre><code>.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}</code></pre>
<p>The <code>inline-size</code> container type enables queries based on the inline dimension (width in horizontal writing modes). The <code>size</code> type enables both inline and block dimension queries. Use <code>inline-size</code> unless you specifically need height-based queries, as it is more performant.</p>

<h2>Container vs Media Queries</h2>
<p>Media queries respond to the viewport; container queries respond to the container. This distinction matters for component-based architectures. A card component might appear in a wide main content area or a narrow sidebar. With media queries, the card has no way to know which context it is in. With container queries, the card adapts to its container regardless of where it is placed. This makes components truly reusable and context-aware.</p>

<h2>Browser Support</h2>
<p>Container queries are supported in all modern browsers including Chrome 105+, Firefox 110+, Safari 16+, and Edge 105+. For older browsers, you can use container queries as a progressive enhancement: the component uses its default layout in unsupported browsers and adapts in modern ones. This graceful degradation approach means you can start using container queries today without breaking older browsers.</p>

<h2>Practical Example: Responsive Card</h2>
<p>Consider a card component that should display as a vertical stack in narrow containers and as a horizontal layout in wide containers. With container queries, you write the responsive logic once inside the component's CSS, and it automatically adapts wherever the component is placed. No JavaScript needed, no prop drilling, no context providers. The CSS is self-contained and portable, which is exactly how component styling should work.</p>

<h2>Best Practices</h2>
<p>Start by identifying components in your design system that need to adapt to different container sizes. Cards, navigation items, form layouts, and data tables are common candidates. Apply container types to their parent wrappers and write container query rules for each breakpoint. Keep your container names semantic and consistent. Avoid overly complex nested container queries, as they can become difficult to reason about. Test your components in various container sizes to ensure smooth transitions between layouts.</p>`
  },
  {
    id: "modern-css-layouts",
    title: "Modern CSS Layouts: Grid, Flexbox, and Beyond",
    excerpt: "Master the art of CSS layout with this deep dive into CSS Grid and Flexbox. Learn when to use each, advanced techniques for complex layouts, and how the two systems work together beautifully.",
    date: "Nov 22, 2024",
    category: "CSS & Design",
    readTime: "7 min",
    content: `<h2>The Two Pillars of Modern CSS Layout</h2>
<p>Before Flexbox and Grid, CSS layout was an exercise in frustration. Developers used floats, clearfixes, inline-block hacks, and table layouts to achieve even basic designs. Today, Flexbox and Grid handle virtually every layout need, and understanding when to use each is one of the most valuable skills a frontend developer can have.</p>

<h2>Flexbox: One-Dimensional Layout</h2>
<p>Flexbox excels at distributing space along a single axis, either horizontally or vertically. Use Flexbox when you need to align items in a row or column, distribute remaining space evenly or proportionally, center content vertically and horizontally, or handle items that should grow, shrink, or remain fixed. The key Flexbox properties are <code>display: flex</code>, <code>justify-content</code> for the main axis, <code>align-items</code> for the cross axis, <code>flex-wrap</code> for wrapping, and <code>gap</code> for spacing between items.</p>
<p>Common Flexbox patterns include navigation bars, button groups, card rows, centering a modal dialog, and form layouts. Flexbox handles these beautifully because they are essentially one-dimensional: items flow in a single direction with alignment along the perpendicular axis.</p>

<h2>CSS Grid: Two-Dimensional Layout</h2>
<p>CSS Grid handles both rows and columns simultaneously, making it the right choice for complex page layouts, dashboards, image galleries, and any design where you need precise control over both dimensions. Grid allows you to define explicit rows and columns, place items into specific cells, span items across multiple cells, and create responsive layouts without media queries using auto-fit and auto-fill.</p>
<pre><code>.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
.sidebar { grid-row: 1 / -1; }
.header { grid-column: 2 / -1; }</code></pre>

<h2>When to Use Which</h2>
<p>A simple rule: if you are aligning items in one direction, use Flexbox. If you need control over both rows and columns, use Grid. But the real answer is more nuanced. Many layouts benefit from combining both: use Grid for the overall page structure and Flexbox for component-level alignment within grid cells. They complement each other perfectly.</p>

<h2>Responsive Grid Without Media Queries</h2>
<p>One of Grid's most powerful features is auto-responsive layouts using <code>auto-fit</code> and <code>minmax()</code>. This pattern creates a grid that automatically adjusts the number of columns based on available space, without any media queries.</p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}</code></pre>
<p>This single line of CSS creates a responsive grid that shows as many 300px columns as fit, with remaining space distributed equally. When the container narrows, columns automatically wrap to the next row. This is remarkably powerful for card layouts and content grids.</p>

<h2>Subgrid: The Missing Piece</h2>
<p>Subgrid allows child elements to align to their grandparent's grid tracks, solving the problem of nested grids with misaligned content. When cards in a grid need their headers, descriptions, and footers to align across all cards regardless of content length, subgrid makes it possible. Browser support for subgrid has improved significantly and it is now safe to use in production with appropriate fallbacks.</p>`
  },
  {
    id: "css-custom-properties",
    title: "CSS Custom Properties: Building Dynamic and Maintainable Stylesheets",
    excerpt: "CSS custom properties (variables) bring programming concepts to stylesheets. Learn how to use them for theming, calculations, responsive design, and JavaScript integration to create truly dynamic styles.",
    date: "Nov 15, 2024",
    category: "CSS & Design",
    readTime: "7 min",
    content: `<h2>Beyond Preprocessor Variables</h2>
<p>CSS custom properties, commonly called CSS variables, are fundamentally different from variables in preprocessors like Sass or Less. Preprocessor variables exist at compile time and are replaced with static values before the browser receives the CSS. Custom properties exist at runtime: they can be read and modified by JavaScript, they cascade and inherit like regular CSS properties, and they can respond to media queries and other dynamic conditions. This runtime nature makes them far more powerful than preprocessor variables.</p>

<h2>Declaring and Using Custom Properties</h2>
<p>Custom properties are declared with the double-hyphen prefix and accessed with the <code>var()</code> function. By convention, they are defined on the <code>:root</code> pseudo-class for global availability, but they can be defined on any selector for scoped usage.</p>
<pre><code>:root {
  --primary: #10b981;
  --radius: 8px;
  --font-size-base: 1rem;
}
.button {
  background: var(--primary);
  border-radius: var(--radius);
  font-size: var(--font-size-base);
}</code></pre>

<h2>Theming Made Simple</h2>
<p>Custom properties make dark mode trivial. Define your color variables on <code>:root</code> for light mode, then override them in a <code>.dark</code> class or <code>[data-theme="dark"]</code> attribute. All elements using those variables update automatically. No duplicated CSS, no separate stylesheets, no JavaScript class toggling on every element.</p>
<pre><code>:root {
  --bg: #ffffff;
  --text: #0f172a;
}
.dark {
  --bg: #0f172a;
  --text: #f8fafc;
}
body {
  background: var(--bg);
  color: var(--text);
}</code></pre>

<h2>Calculations with Custom Properties</h2>
<p>Custom properties can be used in <code>calc()</code> expressions, enabling dynamic calculations that respond to context. You can define a base spacing unit and derive all other spacings from it, or calculate column widths based on the number of columns. This approach creates consistent, mathematical relationships throughout your design system.</p>

<h2>JavaScript Integration</h2>
<p>One of the most powerful features of custom properties is JavaScript integration. You can read and write custom properties using <code>getComputedStyle()</code> and <code>style.setProperty()</code>. This enables dynamic theming, user-customizable interfaces, and animations that respond to scroll position or user input. Libraries like Framer Motion use custom properties for performant animations that run on the compositor thread.</p>
<pre><code>// Set a custom property from JavaScript
document.documentElement.style.setProperty('--accent', '#ef4444');

// Read a custom property
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');</code></pre>

<h2>Responsive Custom Properties</h2>
<p>Custom properties can be redefined inside media queries, allowing you to change multiple values with a single breakpoint. Instead of writing ten declarations inside a media query, redefine a few custom properties and all elements using them update automatically. This dramatically reduces CSS duplication and makes responsive design more maintainable.</p>

<h2>Best Practices</h2>
<p>Name your custom properties semantically, not descriptively. Use <code>--color-primary</code> instead of <code>--color-emerald</code>, because the color might change but the semantic meaning remains. Group related properties together. Provide fallback values in <code>var()</code> for robustness. Use custom properties for any value that is used more than once or might change dynamically.</p>`
  },
  {
    id: "css-animation-mastery",
    title: "CSS Animation Mastery: From Transitions to Keyframes",
    excerpt: "Learn how to create smooth, performant animations that enhance user experience. From simple transitions to complex keyframe sequences, master the techniques that make interfaces feel alive.",
    date: "Nov 8, 2024",
    category: "CSS & Design",
    readTime: "8 min",
    content: `<h2>Why Animation Matters</h2>
<p>Well-executed animation does more than make interfaces pretty. It provides visual feedback that helps users understand what just happened, guides attention to important changes, creates a sense of spatial relationships between elements, and makes interactions feel responsive and natural. Poorly executed animation, on the other hand, slows users down, causes motion sickness, and makes interfaces feel sluggish. The difference between good and bad animation is understanding which properties to animate, how long animations should last, and when to use them at all.</p>

<h2>CSS Transitions</h2>
<p>Transitions animate the change between two states of a CSS property. They are triggered by state changes like hover, focus, active, or class additions. The transition shorthand accepts four values: property, duration, timing function, and delay.</p>
<pre><code>.button {
  background: #10b981;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: #059669;
  transform: translateY(-2px);
}</code></pre>
<p>Keep transition durations between 150ms and 300ms for interactive elements. Faster feels snappy, slower feels sluggish. Use ease for most transitions, ease-in-out for elements entering and leaving, and linear for continuous animations like spinners.</p>

<h2>Keyframe Animations</h2>
<p>While transitions animate between two states, keyframe animations define a sequence of styles across multiple points. Use the <code>@keyframes</code> rule to define the animation, then apply it with the <code>animation</code> property.</p>
<pre><code>@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.element {
  animation: slideIn 0.5s ease-out forwards;
}</code></pre>
<p>Keyframe animations can run automatically on page load, repeat, alternate direction, and be paused and resumed. They are ideal for loading indicators, entrance animations, attention-grabbing effects, and any animation that needs more than a simple state transition.</p>

<h2>Performance: What to Animate</h2>
<p>Not all CSS properties perform equally in animations. Animating <code>transform</code> and <code>opacity</code> is performant because these properties can be handled by the GPU compositor without triggering layout or paint. Animating properties like <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>, <code>margin</code>, or <code>padding</code> triggers layout recalculations, which are expensive and cause frame drops. Always prefer transform for movement and opacity for visibility changes.</p>

<h2>The will-change Property</h2>
<p>The <code>will-change</code> property hints to the browser that an element will be animated, allowing it to optimize ahead of time. Use it sparingly: applying it to too many elements consumes GPU memory and can actually hurt performance. Apply will-change only to elements you know will animate, and remove it when the animation is complete.</p>

<h2>Respecting User Preferences</h2>
<p>Some users are sensitive to motion and have enabled the "reduce motion" setting in their operating system. Always wrap non-essential animations in a media query that respects this preference. Essential animations (like a loading indicator) can remain, but decorative animations should be disabled or simplified for users who prefer reduced motion.</p>
<pre><code>@media (prefers-reduced-motion: no-preference) {
  .element {
    animation: slideIn 0.5s ease-out;
  }
}</code></pre>`
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components: A Complete Guide",
    excerpt: "React Server Components represent a paradigm shift in how we build React applications. Learn how they work under the hood, when to use them, and how they integrate with Next.js App Router for optimal performance.",
    date: "Nov 1, 2024",
    category: "React & Next.js",
    readTime: "12 min",
    content: `<h2>The Problem Server Components Solve</h2>
<p>Traditional React applications render everything on the client. The server sends an HTML shell and a large JavaScript bundle, and the browser takes over from there. This approach has three major problems: large bundle sizes because every component ships JavaScript to the client, slow initial page loads while the browser downloads and executes that JavaScript, and unnecessary client-side rendering for content that never changes, like blog posts or product descriptions.</p>
<p>React Server Components (RSC) solve these problems by allowing components to run exclusively on the server. They can access databases, read files, and use server-only APIs without ever sending their JavaScript to the client. The result is smaller bundles, faster page loads, and direct access to backend resources from your components.</p>

<h2>How Server Components Work</h2>
<p>When a request comes in, React renders the server component tree on the server and produces a special serialized format that describes the rendered UI. This format is sent to the client, where React reconstructs the component tree and renders it to the DOM. Server components can render client components as children, but the reverse is not true: client components cannot render server components directly (though they can through server actions).</p>
<p>The key insight is that server component code never ships to the client. If you import a heavy markdown parser or a date library in a server component, those dependencies are not included in the client bundle. This can dramatically reduce the amount of JavaScript users need to download.</p>

<h2>Server vs Client Components</h2>
<p>In Next.js App Router, all components are server components by default. To make a component a client component, add the <code>"use client"</code> directive at the top of the file. Use server components for data fetching, accessing backend resources, rendering static content, and keeping heavy dependencies on the server. Use client components for interactivity (onClick, onChange, etc.), browser APIs (localStorage, geolocation), and state management (useState, useReducer).</p>

<h2>Data Fetching in Server Components</h2>
<p>Server components can fetch data directly using async/await without useEffect or client-side data fetching libraries. This eliminates the waterfall of client-side requests and the loading spinner flash. Data is fetched on the server before the HTML is sent, resulting in faster Time to First Byte and better SEO since search engines can index the fully rendered content.</p>
<pre><code>async function BlogPost({ id }) {
  const post = await db.post.findUnique({ where: { id } });
  return &lt;article&gt;{post.content}&lt;/article&gt;;
}</code></pre>

<h2>Streaming and Suspense</h2>
<p>Server components work beautifully with React Suspense for streaming. Instead of waiting for all data to load before sending any HTML, you can wrap slow components in Suspense boundaries. React streams the fast parts immediately and sends the slow parts as they become ready. This means users see content progressively rather than staring at a blank screen.</p>

<h2>Best Practices</h2>
<p>Push client components as far down the component tree as possible. A page that is a server component can have interactive client components nested deep inside it, and only those specific components ship JavaScript. Use composition patterns: server components can pass server-rendered content as children to client components, keeping the boundary clean and the bundle small. Avoid unnecessary client components, but do not force interactivity into server components — that simply does not work.</p>`
  },
  {
    id: "nextjs-app-router-migration",
    title: "Next.js App Router: Migration Guide and Best Practices",
    excerpt: "Migrating from Pages Router to App Router in Next.js can feel overwhelming. This comprehensive guide walks you through the migration process step by step, with real-world examples and common pitfalls to avoid.",
    date: "Oct 25, 2024",
    category: "React & Next.js",
    readTime: "14 min",
    content: `<h2>Why Migrate to App Router</h2>
<p>The App Router, introduced in Next.js 13 and stabilized in Next.js 14 and 15, represents the future of Next.js development. It supports React Server Components, nested layouts, streaming with Suspense, improved data fetching, and server actions. While the Pages Router continues to work, new features and optimizations are being built exclusively for the App Router. Migrating positions your project to take advantage of these improvements and ensures long-term compatibility.</p>

<h2>Key Differences</h2>
<p>The Pages Router uses a flat file structure where each file in the pages directory becomes a route. The App Router uses nested folders where each folder can define a layout, page, loading state, error boundary, and not-found page. This nesting approach allows layouts to persist across route changes, eliminating the flicker and re-rendering that occurs with the Pages Router.</p>
<p>Data fetching has fundamentally changed. Instead of <code>getServerSideProps</code> and <code>getStaticProps</code>, you fetch data directly in server components using async/await. API routes have been replaced with Route Handlers defined in special <code>route.ts</code> files. The <code>_app.tsx</code> and <code>_document.tsx</code> files are replaced by a root layout.</p>

<h2>Step-by-Step Migration</h2>
<p>Start by creating an <code>app</code> directory alongside your existing <code>pages</code> directory. They can coexist during migration. Create a root layout in <code>app/layout.tsx</code> that includes the html and body tags. This replaces both <code>_app.tsx</code> and <code>_document.tsx</code>.</p>
<p>Next, migrate one route at a time. For each page, create the corresponding folder structure in the app directory. Convert <code>getServerSideProps</code> to direct data fetching in server components. Convert <code>getStaticProps</code> to server components with appropriate caching. Move shared layouts from custom app wrappers to nested layout files.</p>

<h2>Converting Data Fetching</h2>
<p>The biggest change is data fetching. In Pages Router, you exported special functions that ran on the server. In App Router, you simply make your server component async and use await. For static generation, add the <code>generateStaticParams</code> function. For revalidation, use <code>revalidatePath</code> or <code>revalidateTag</code>. This approach is more intuitive and flexible than the previous static generation API.</p>

<h2>Common Pitfalls</h2>
<p>Do not try to migrate everything at once. The incremental approach allows you to test each route individually and catch issues early. Be careful with client-side navigation between Pages and App Router routes during the migration period. Some patterns like <code>next/router</code> need to change to <code>next/navigation</code>. The <code>useRouter</code> hook has different behavior in the App Router: it does not trigger a full page reload for route changes.</p>
<p>Another common mistake is making too many components client components during migration. Start with server components and only add the "use client" directive when you need interactivity or hooks. This maximizes the performance benefits of the App Router.</p>

<h2>Layouts and Templates</h2>
<p>The App Router's nested layout system is one of its most powerful features. Layouts wrap their children and persist across route changes, maintaining state and avoiding re-renders. This is perfect for navigation bars, sidebars, and footers that should remain constant. Templates are similar to layouts but re-render on navigation, which is useful for page transition effects or resetting state.</p>`
  },
  {
    id: "react-hooks-explained",
    title: "React Hooks Explained: useState, useEffect, and Beyond",
    excerpt: "React Hooks transformed how we write components. This guide covers every built-in hook with practical examples, common mistakes, and patterns that will make your components cleaner and more reliable.",
    date: "Oct 18, 2024",
    category: "React & Next.js",
    readTime: "11 min",
    content: `<h2>The Hook Revolution</h2>
<p>Before Hooks, React components came in two flavors: function components for simple presentational UI and class components for anything with state or lifecycle methods. Hooks unified these, allowing function components to manage state, perform side effects, access context, and more. The result is code that is more concise, easier to test, and simpler to compose. If you are still writing class components, it is time to make the switch.</p>

<h2>useState: Managing State</h2>
<p>The <code>useState</code> hook adds state to function components. It returns a state value and a setter function. The setter can accept a new value or a function that receives the previous state and returns the new state. Always use the functional form when the new state depends on the previous state, especially inside event handlers and effects where stale closures can cause bugs.</p>
<pre><code>const [count, setCount] = useState(0);
setCount(prev => prev + 1); // Correct
setCount(count + 1);       // Can be wrong in closures</code></pre>

<h2>useEffect: Side Effects</h2>
<p>The <code>useEffect</code> hook runs code after the component renders. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount. The dependency array controls when the effect re-runs: no array means every render, an empty array means once on mount, and specific dependencies mean only when those values change.</p>
<p>The most common mistake with useEffect is incorrect dependencies. If your effect uses a value from the component scope, that value must be in the dependency array. ESLint's exhaustive-deps rule catches these errors automatically. Do not suppress it; fix the dependency array instead.</p>

<h2>useRef: Persistent References</h2>
<p>The <code>useRef</code> hook creates a mutable reference that persists across renders without causing re-renders when changed. Common uses include accessing DOM elements directly, storing previous values for comparison, and keeping mutable values that should not trigger re-renders, like timer IDs or WebSocket connections.</p>

<h2>useMemo and useCallback: Performance Optimization</h2>
<p><code>useMemo</code> memoizes a computed value, recalculating only when dependencies change. <code>useCallback</code> memoizes a function definition. Both exist to prevent unnecessary re-renders in child components and expensive recalculations. However, do not memoize everything: the overhead of memoization can exceed the cost of recomputation for simple values and functions. Use them when profiling shows a genuine performance problem.</p>

<h2>useContext: Avoiding Prop Drilling</h2>
<p>The <code>useContext</code> hook provides access to context values without passing props through every level of the component tree. Create a context with <code>createContext</code>, provide a value with <code>Context.Provider</code>, and consume it with <code>useContext</code>. Be aware that when the context value changes, every component that consumes it re-renders, so keep context values stable and split large contexts into smaller, focused ones.</p>

<h2>useReducer: Complex State Logic</h2>
<p>When state logic becomes complex, involving multiple sub-values or where the next state depends on the previous one in complex ways, <code>useReducer</code> provides a more predictable alternative to <code>useState</code>. It follows the same pattern as Redux: a reducer function that takes state and action and returns new state. This pattern centralizes state logic and makes it easy to test.</p>

<h2>Custom Hooks: The Real Power</h2>
<p>The true power of Hooks lies in composition. You can combine built-in hooks into custom hooks that encapsulate reusable logic. A <code>useLocalStorage</code> hook that persists state to localStorage, a <code>useDebounce</code> hook that delays updates, or a <code>useFetch</code> hook that handles API calls with loading and error states — these custom hooks abstract complex patterns into simple, composable functions that can be shared across your entire application.</p>`
  },
  {
    id: "freelancing-pakistan",
    title: "How to Start Freelancing as a Web Developer in Pakistan",
    excerpt: "Breaking into freelancing from Pakistan comes with unique challenges and opportunities. This guide covers everything from building your portfolio and setting rates to finding international clients and receiving payments.",
    date: "Oct 10, 2024",
    category: "Freelancing",
    readTime: "9 min",
    content: `<h2>The Freelance Opportunity in Pakistan</h2>
<p>Pakistan ranks fourth globally in freelancing, with hundreds of thousands of developers earning income through online platforms. The combination of competitive rates, a growing technical workforce, and increasing internet penetration makes freelancing a viable career path for Pakistani developers. However, succeeding requires more than technical skills. You need to understand how to position yourself, find clients, communicate effectively, and manage the business side of freelancing.</p>

<h2>Building Your Portfolio</h2>
<p>Before approaching any client, you need a portfolio that demonstrates your capabilities. If you do not have client work to showcase, build personal projects that solve real problems. A task management app, an e-commerce storefront, or a developer tool are all impressive portfolio pieces that show you can build complete applications. Deploy your projects on Vercel or Netlify and share the source code on GitHub. A live, working project is worth a thousand resume lines.</p>
<p>Your portfolio website itself is your first project. Make it professional, fast, and mobile-friendly. Include case studies that explain the problem, your approach, the technologies used, and the results achieved. Clients want to see your thinking process, not just screenshots.</p>

<h2>Choosing the Right Platform</h2>
<p>Fiverr is the easiest platform to start on. Create gigs for specific services like "I will build a responsive website using Next.js" or "I will convert your Figma design to React." Fiverr brings clients to you, which is ideal when you have no existing network. Upwork requires more effort to win proposals but offers higher-paying, longer-term projects. For experienced developers, Toptal provides access to premium clients but has a rigorous screening process.</p>

<h2>Setting Your Rates</h2>
<p>One of the biggest mistakes new freelancers make is pricing too low. While you cannot charge Silicon Valley rates initially, extremely low rates attract difficult clients and make it impossible to sustain a living. Start at a rate that reflects your skill level and gradually increase it as you build reviews and experience. A junior developer in Pakistan might start at fifteen to twenty dollars per hour, while a senior developer can command forty to eighty dollars per hour on international platforms.</p>

<h2>Getting Paid</h2>
<p>Receiving international payments in Pakistan has become easier. Payoneer and Wise are the most popular options for receiving platform payouts. For direct client payments, bank transfers through SWIFT are reliable but expensive for small amounts. Crypto payments are increasingly accepted but carry regulatory uncertainty. Set up your payment methods before landing your first client so there are no delays when it is time to get paid.</p>

<h2>Communication is Everything</h2>
<p>As a Pakistani freelancer working with international clients, clear communication is your most important skill. Respond to messages promptly, provide regular progress updates, ask questions when requirements are unclear, and be honest about timelines and challenges. Many clients have had bad experiences with freelancers who disappear for days. Being reliable and communicative sets you apart from the majority of freelancers on these platforms.</p>

<h2>Growing Beyond Platforms</h2>
<p>The ultimate goal is to move beyond freelancing platforms and find clients directly. Build a presence on LinkedIn and Twitter by sharing your knowledge and projects. Contribute to open-source projects. Write technical blog posts. These activities establish your reputation and bring clients to you, allowing you to keep the entire project fee instead of paying platform commissions of twenty percent or more.</p>`
  },
  {
    id: "best-earning-platforms",
    title: "Best Platforms for Developers to Earn Money Online",
    excerpt: "From freelance marketplaces to product-based income, explore every viable way developers can monetize their skills online. Honest comparison of platforms with pros, cons, and realistic earning expectations.",
    date: "Oct 3, 2024",
    category: "Freelancing",
    readTime: "10 min",
    content: `<h2>Beyond Traditional Employment</h2>
<p>The internet has created unprecedented opportunities for developers to earn money outside traditional employment. Whether you want to supplement your salary, transition to full-time independence, or build passive income streams, there is a platform and business model that fits your goals. This guide compares the most viable options with honest assessments of what it takes to succeed on each.</p>

<h2>Freelance Marketplaces</h2>
<p><strong>Fiverr</strong> is the easiest entry point. You create service offerings (gigs) and clients come to you. The platform takes a twenty percent commission. Pros: low barrier to entry, clients find you. Cons: competitive pricing pressure, platform dependency, lower average project values. Best for: beginners building their first client base.</p>
<p><strong>Upwork</strong> offers higher-quality projects but requires winning proposals. You compete against other freelancers for each job. The platform takes a sliding commission from five to twenty percent. Pros: higher-paying projects, long-term client relationships. Cons: proposal writing takes time, competitive, slow start. Best for: developers with strong communication skills.</p>
<p><strong>Toptal</strong> positions itself as an exclusive network for the top three percent of freelancers. The screening process is rigorous, involving language, skill, and live interview assessments. Pros: premium clients, high rates, no bidding. Cons: difficult to get accepted, limited project flow. Best for: senior developers with impressive track records.</p>

<h2>Product-Based Income</h2>
<p><strong>Gumroad</strong> lets you sell digital products directly: eBooks, templates, courses, and code snippets. You set the price and Gumroad takes a small fee. The advantage is that you build once and sell repeatedly, creating passive income. The challenge is creating products people want to buy and marketing them effectively.</p>
<p><strong>ThemeForest and CodeCanyon</strong> are marketplaces for selling website templates, WordPress themes, and code scripts. They have massive existing audiences, but approval is competitive and commissions can reach fifty percent. Best for developers who excel at creating polished, market-ready products.</p>

<h2>Content Creation</h2>
<p><strong>YouTube</strong> offers multiple revenue streams: ad revenue, sponsorships, affiliate links, and course promotions. Tech channels can monetize after reaching one thousand subscribers and four thousand watch hours. The earning potential is high, but building an audience takes consistent effort over months or years.</p>
<p><strong>Technical Blogging</strong> through platforms like Medium (via their Partner Program), Dev.to, or your own blog with Google AdSense can generate income from your expertise. Blogging also builds your reputation and brings freelance clients. The income per article is modest, but compounding over time, a well-maintained blog becomes a valuable asset.</p>

<h2>Open Source and Sponsors</h2>
<p>If you maintain popular open-source projects, GitHub Sponsors and Open Collective allow users and companies to financially support your work. This is not a primary income source for most developers, but for maintainers of widely-used libraries, it can provide meaningful support. Companies like Vercel, Supabase, and Sentry sponsor developers who build tools in their ecosystems.</p>

<h2>Realistic Expectations</h2>
<p>No platform is a get-rich-quick scheme. The developers who earn the most are those who combine multiple income streams: freelancing for active income, products for passive income, and content creation for audience building. Start with one platform, build expertise and reputation, then diversify. Expect three to six months of consistent effort before seeing meaningful results on any platform.</p>`
  },
  {
    id: "developer-portfolio-guide",
    title: "Building a Developer Portfolio That Gets You Hired",
    excerpt: "Your portfolio is your most powerful job-hunting tool. Learn exactly what to include, how to design it, where to host it for free, and how to write case studies that make recruiters and clients say yes.",
    date: "Sep 25, 2024",
    category: "Freelancing",
    readTime: "8 min",
    content: `<h2>Why Your Portfolio Matters More Than Your Resume</h2>
<p>In the tech industry, your portfolio speaks louder than any resume. A recruiter can see that you claim to know React on your resume, but a working React application in your portfolio proves it. Hiring managers increasingly use portfolios as the primary screening tool, and many job postings explicitly request a portfolio link. For freelancers, a portfolio is even more critical: it is your storefront, your sales pitch, and your credibility check all in one.</p>

<h2>What to Include</h2>
<p>Your portfolio should include four to six of your best projects. Quality matters far more than quantity. Six mediocre projects dilute the impact of two excellent ones. For each project, include the project name, a brief description of the problem it solves, the technologies used, your specific role and contributions, a link to the live deployment, and a link to the source code on GitHub.</p>
<p>Write case studies for your two or three strongest projects. A good case study tells a story: what was the problem, what approach did you take, what challenges did you face, and what was the outcome. Include screenshots, architecture decisions, and performance metrics when possible. Case studies demonstrate not just what you built but how you think, which is what hiring managers really want to know.</p>

<h2>Design Principles</h2>
<p>Your portfolio is itself a project that showcases your skills. It should be fast, responsive, accessible, and well-designed. Use a clean layout with plenty of white space. Make navigation intuitive. Ensure every link works and every project loads. The design should reflect your personal brand: if you are a frontend specialist, the visual design should impress. If you are a backend specialist, the architecture and performance should speak for themselves.</p>
<p>Do not over-design. Flashy animations and creative layouts are impressive, but they should never come at the cost of usability. A recruiter spending thirty seconds on your portfolio should immediately understand who you are, what you do, and how to contact you. If they cannot figure that out quickly, you have lost them.</p>

<h2>Hosting for Free</h2>
<p>You do not need to spend money on hosting. Vercel offers free hosting for static sites and Next.js applications with automatic HTTPS and global CDN. Netlify provides similar features with continuous deployment from Git. GitHub Pages is perfect for simple static portfolios. All three support custom domains if you want a professional URL. The hosting should be the easiest part of building your portfolio.</p>

<h2>The About Page</h2>
<p>Your About page is where you connect as a human being. Write in first person. Share your story: how you got into development, what excites you about the field, and what you are looking for. Include a professional but approachable photo. Mention your location, availability, and preferred way to work. Recruiters want to know if you are open to remote work, freelance, or full-time positions. Make it easy for them to reach out by providing multiple contact methods.</p>

<h2>Keep It Updated</h2>
<p>An outdated portfolio is worse than no portfolio. It signals that you are not actively maintaining your work or that your best projects are years behind you. Set a reminder to update your portfolio every quarter. Add new projects, remove outdated ones, and refresh the design periodically. Your portfolio should reflect your current skill level and career goals, not where you were two years ago.</p>`
  },
  {
    id: "web-security-basics",
    title: "Web Security Basics Every Developer Must Understand",
    excerpt: "Security is not just for specialists. Every developer writes code that could be vulnerable. Learn the most common web vulnerabilities and practical defenses that protect your users and your reputation.",
    date: "Sep 18, 2024",
    category: "Web Development",
    readTime: "9 min",
    content: `<h2>Security is Everyone's Responsibility</h2>
<p>Web application vulnerabilities affect companies of every size. A single XSS vulnerability can expose millions of user records. A SQL injection can destroy an entire database. Security breaches erode user trust, invite legal liability, and can end careers. The good news is that the most common vulnerabilities are well-understood and preventable. This guide covers the attacks you are most likely to encounter and the defensive patterns you should adopt as default practices.</p>

<h2>Cross-Site Scripting (XSS)</h2>
<p>XSS attacks inject malicious scripts into web pages viewed by other users. There are three types: stored XSS where the script is persisted in the database, reflected XSS where the script is in the request URL, and DOM-based XSS where the script manipulates the page's DOM directly. The fundamental defense is never trusting user input. Escape all user-generated content before rendering it in HTML. Use frameworks like React that escape by default. Set Content Security Policy headers to restrict which scripts can execute on your pages.</p>

<h2>SQL Injection</h2>
<p>SQL injection occurs when user input is concatenated directly into SQL queries, allowing attackers to modify the query logic. A login form that constructs queries like <code>"SELECT * FROM users WHERE name = '" + username + "'"</code> is vulnerable to an attacker entering <code>' OR '1'='1</code> as the username, which returns all users. The solution is parameterized queries (prepared statements), which separate SQL code from data. Every modern database library supports parameterized queries. There is never a reason to concatenate user input into SQL.</p>

<h2>Cross-Site Request Forgery (CSRF)</h2>
<p>CSRF tricks authenticated users into submitting requests they did not intend. An attacker creates a page that submits a form to your application, and if the user is logged in, the request includes their session cookie. Defenses include CSRF tokens (unique, unpredictable values required with each state-changing request), the SameSite cookie attribute set to Lax or Strict, and checking the Origin and Referer headers on sensitive requests.</p>

<h2>Authentication Best Practices</h2>
<p>Never store passwords in plain text. Use bcrypt or argon2 for hashing, never MD5 or SHA1 which are too fast and vulnerable to brute force. Implement rate limiting on login attempts to prevent credential stuffing. Use multi-factor authentication for sensitive operations. Issue short-lived access tokens and long-lived refresh tokens. Store tokens securely: HttpOnly cookies for server-side apps, secure storage for client-side apps.</p>

<h2>HTTPS Everywhere</h2>
<p>There is no excuse for serving any page over HTTP in 2025. HTTPS encrypts data in transit, prevents man-in-the-middle attacks, and is required for many browser APIs like geolocation and service workers. Free certificates from Let's Encrypt make HTTPS accessible to everyone. HSTS headers tell browsers to always use HTTPS, preventing downgrade attacks.</p>

<h2>Regular Security Audits</h2>
<p>Run automated security scanners regularly. Tools like OWASP ZAP, Snyk, and npm audit catch common vulnerabilities in your dependencies. Keep all dependencies updated. Review your code for security issues during pull requests. Consider penetration testing for applications that handle sensitive data. Security is not a one-time checklist; it is an ongoing practice that must be integrated into your development workflow.</p>`
  }
]
