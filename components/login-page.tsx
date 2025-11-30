"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LoginPageProps {
  onLogin: (name: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userName = name || email.split("@")[0]
    onLogin(userName)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-background p-4">
      <Card className="w-full max-w-md shadow-xl border-2">
        <CardHeader className="space-y-2 text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Tasks
          </CardTitle>
          <CardDescription className="text-base">{isSignup ? "Create a new account" : "Sign in to your account"}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="h-11"
                />
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isSignup ? (
                <>
                  Already have an account? <span className="font-semibold text-primary">Sign In</span>
                </>
              ) : (
                <>
                  Don't have an account? <span className="font-semibold text-primary">Sign Up</span>
                </>
              )}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
