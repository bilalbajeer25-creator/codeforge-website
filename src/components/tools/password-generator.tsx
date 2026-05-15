"use client"

import * as React from "react"
import { RefreshCw, Copy, Check, Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { PageName } from "@/components/site-header"

interface PasswordGeneratorProps {
  onNavigate: (page: PageName) => void
}

type StrengthLevel = "Weak" | "Fair" | "Strong" | "Very Strong"

export function PasswordGenerator({ onNavigate }: PasswordGeneratorProps) {
  const [length, setLength] = React.useState(16)
  const [uppercase, setUppercase] = React.useState(true)
  const [lowercase, setLowercase] = React.useState(true)
  const [numbers, setNumbers] = React.useState(true)
  const [special, setSpecial] = React.useState(true)
  const [password, setPassword] = React.useState("")
  const [copied, setCopied] = React.useState(false)

  const generatePassword = React.useCallback(() => {
    let chars = ""
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz"
    if (numbers) chars += "0123456789"
    if (special) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"
    if (!chars) {
      chars = "abcdefghijklmnopqrstuvwxyz"
      setLowercase(true)
    }

    const array = new Uint32Array(length)
    crypto.getRandomValues(array)
    const result = Array.from(array, (x) => chars[x % chars.length]).join("")
    setPassword(result)
    setCopied(false)
  }, [length, uppercase, lowercase, numbers, special])

  React.useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const getStrength = (): { level: StrengthLevel; score: number } => {
    let score = 0
    if (length >= 8) score += 1
    if (length >= 12) score += 1
    if (length >= 16) score += 1
    if (length >= 24) score += 1
    if (uppercase) score += 1
    if (lowercase) score += 1
    if (numbers) score += 1
    if (special) score += 1

    if (score <= 3) return { level: "Weak", score: 25 }
    if (score <= 5) return { level: "Fair", score: 50 }
    if (score <= 7) return { level: "Strong", score: 75 }
    return { level: "Very Strong", score: 100 }
  }

  const strength = getStrength()

  const strengthConfig: Record<StrengthLevel, { color: string; icon: React.ElementType; textColor: string }> = {
    "Weak": { color: "bg-red-500", icon: ShieldX, textColor: "text-red-500" },
    "Fair": { color: "bg-orange-500", icon: ShieldAlert, textColor: "text-orange-500" },
    "Strong": { color: "bg-emerald-500", icon: ShieldCheck, textColor: "text-emerald-500" },
    "Very Strong": { color: "bg-emerald-600", icon: Shield, textColor: "text-emerald-600" },
  }

  const config = strengthConfig[strength.level]
  const StrengthIcon = config.icon

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    toast.success("Password copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">Security Tool</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Password <span className="text-emerald-600 dark:text-emerald-400">Generator</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Generate strong, secure passwords with customizable options. Uses crypto-grade randomness.
          </p>
        </div>

        {/* Generated Password Display */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-4">
              <code className="text-lg md:text-xl font-mono break-all flex-1 text-foreground select-all">
                {password}
              </code>
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="icon" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={generatePassword}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Strength Indicator */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <StrengthIcon className={`h-4 w-4 ${config.textColor}`} />
                  <span className={`text-sm font-medium ${config.textColor}`}>{strength.level}</span>
                </div>
                <span className="text-xs text-muted-foreground">{length} characters</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${config.color} rounded-full transition-all duration-500`}
                  style={{ width: `${strength.score}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="mb-6">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Password Length</Label>
                <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">{length}</span>
              </div>
              <Slider
                value={[length]}
                onValueChange={(v) => setLength(v[0])}
                min={8}
                max={64}
                step={1}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>8</span>
                <span>64</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="uppercase" className="cursor-pointer">Uppercase (A-Z)</Label>
                <Switch id="uppercase" checked={uppercase} onCheckedChange={setUppercase} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="lowercase" className="cursor-pointer">Lowercase (a-z)</Label>
                <Switch id="lowercase" checked={lowercase} onCheckedChange={setLowercase} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="numbers" className="cursor-pointer">Numbers (0-9)</Label>
                <Switch id="numbers" checked={numbers} onCheckedChange={setNumbers} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="special" className="cursor-pointer">Special (!@#$)</Label>
                <Switch id="special" checked={special} onCheckedChange={setSpecial} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button onClick={generatePassword} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 h-11">
          <RefreshCw className="h-4 w-4" />
          Generate New Password
        </Button>

        {/* SEO Content */}
        <div className="mt-12 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-foreground">Free Secure Password Generator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our password generator creates strong, secure passwords using cryptographically secure random number
            generation. Unlike simple random generators, we use the Web Crypto API&apos;s getRandomValues() method,
            which provides true cryptographic randomness suitable for security-sensitive applications. This means
            the passwords generated by this tool are extremely difficult to crack through brute force or dictionary
            attacks, providing robust protection for your online accounts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The strength indicator evaluates your password based on length and character diversity. A &quot;Very
            Strong&quot; password typically has 16+ characters with all four character types enabled. According to
            security experts, the most important factor in password strength is length — a 20-character password
            with only lowercase letters is stronger than an 8-character password with all character types. However,
            using a mix of character types provides additional security against targeted attacks. We recommend
            using a password manager to store your generated passwords securely.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">How to Use This Tool</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Adjust the password length using the slider (8-64 characters).</li>
            <li>Toggle character types on/off (uppercase, lowercase, numbers, special).</li>
            <li>Click &quot;Generate New Password&quot; or the refresh icon for a new password.</li>
            <li>Check the strength indicator to assess your password&apos;s security.</li>
            <li>Click the copy icon to copy the password to your clipboard.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-8">Related Tools</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button variant="outline" size="sm" onClick={() => onNavigate("json-formatter")}>JSON Formatter</Button>
            <Button variant="outline" size="sm" onClick={() => onNavigate("color-picker")}>Color Picker</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
