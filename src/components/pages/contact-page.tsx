"use client"

import * as React from "react"
import { Mail, MapPin, Github, Twitter, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"

interface ContactPageProps {
  onNavigate: (page: PageName) => void
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Message sent successfully! We'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bilalbajeer25@gmail.com",
      href: "mailto:bilalbajeer25@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/codeforge",
      href: "https://github.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@codeforge",
      href: "https://twitter.com",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Get in <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`min-h-[150px] resize-y ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.label} className="border-border/60">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-4 text-center">
                <Linkedin className="h-8 w-8 mx-auto text-emerald-600 dark:text-emerald-400 mb-2" />
                <p className="text-sm font-medium">Connect on LinkedIn</p>
                <p className="text-xs text-muted-foreground mt-1">Let&apos;s grow our professional network</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
