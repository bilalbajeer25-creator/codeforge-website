"use client"

import * as React from "react"
import { Code2, Palette, Server, Globe, Terminal, GitBranch, MapPin, Heart, Zap, Target, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { PageName } from "@/components/site-header"

interface AboutPageProps {
  onNavigate: (page: PageName) => void
}

const skills = [
  { name: "JavaScript / TypeScript", icon: Code2, level: 95 },
  { name: "React & Next.js", icon: Terminal, level: 90 },
  { name: "Node.js & Backend", icon: Server, level: 85 },
  { name: "CSS & UI Design", icon: Palette, level: 88 },
  { name: "Git & DevOps", icon: GitBranch, level: 80 },
  { name: "Web Performance", icon: Zap, level: 87 },
]

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Every tool and article is crafted with attention to detail, ensuring accuracy and usefulness.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Built by a developer, for developers. Your feedback shapes the tools and content we create.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Fast-loading, efficient tools that respect your time and deliver results instantly.",
  },
  {
    icon: Coffee,
    title: "Passion Project",
    description: "CodeForge is a labor of love — a place to share knowledge and build useful things for the dev community.",
  },
]

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">About</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Hi, I&apos;m <span className="text-emerald-600 dark:text-emerald-400">BILAL</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer and tool builder from Pakistan, creating free resources for the global developer community.
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="mb-16 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Welcome to CodeForge! I&apos;m BILAL, a full-stack web developer based in Pakistan with a deep passion
            for building tools that make developers&apos; lives easier. I created CodeForge as a platform to share
            free, high-quality developer utilities and share the knowledge I&apos;ve gained over years of working
            with web technologies.
          </p>
          <p>
            My journey into web development started with curiosity and a simple HTML page. What began as
            tinkering with code quickly turned into a career driven by the desire to solve real problems. Over
            the years, I&apos;ve worked with startups, agencies, and freelance clients, building everything from
            landing pages to complex web applications. Along the way, I noticed that many of the developer tools
            available online were either paid, required sign-ups, or didn&apos;t respect user privacy. That
            frustration became the spark for CodeForge.
          </p>
          <p>
            Every tool on CodeForge is built with a simple philosophy: it should be free, it should be fast,
            and it should respect your privacy. All processing happens in your browser — your data never touches
            our servers. This isn&apos;t just a technical choice; it&apos;s a commitment to the developer community
            that I&apos;m proud to be part of.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me writing about web development, exploring new frameworks
            and tools, or contributing to open-source projects. I believe that sharing knowledge makes all of
            us better developers, and CodeForge is my way of giving back to the community that has given me so much.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-2xl p-8 md:p-10 mb-16 text-white text-center">
          <Globe className="h-10 w-10 mx-auto mb-4 text-emerald-200" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg leading-relaxed">
            To provide every developer with free, privacy-first tools and quality educational content that
            empowers them to build better software — no strings attached.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Skills & <span className="text-emerald-600 dark:text-emerald-400">Tech Stack</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="border-border/60">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
                      <skill.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What I <span className="text-emerald-600 dark:text-emerald-400">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-border/60">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Based in Pakistan, building for the world</span>
          </div>
        </div>
      </div>
    </div>
  )
}
