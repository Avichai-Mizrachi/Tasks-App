"use client"

import { useState } from "react"
import { LoginPage } from "@/components/login-page"
import { TodoDashboard } from "@/components/todo-dashboard"


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState("")

  const handleLogin = (name: string) => {
    setIsAuthenticated(true)
    setUserName(name)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserName("")
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return <TodoDashboard userName={userName} onLogout={handleLogout} />
}
