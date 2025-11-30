"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Task } from "./todo-dashboard"

interface AddTaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddTask: (task: Omit<Task, "id" | "createdAt">) => void
}

export function AddTaskDialog({ open, onOpenChange, onAddTask }: AddTaskDialogProps) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState<Task["category"]>("personal")
  const [priority, setPriority] = useState<Task["priority"]>("medium")
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim() || !dueDate) return

    onAddTask({
      text: text.trim(),
      category,
      priority,
      dueDate,
      completed: false,
    })

    // Reset form
    setText("")
    setCategory("personal")
    setPriority("medium")
    setDueDate("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Fill in the details for your new task</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="task-text">Task Description</Label>
            <Input
              id="task-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your task..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={(value) => setCategory(value as Task["category"])}>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select value={priority} onValueChange={(value) => setPriority(value as Task["priority"])}>
              <SelectTrigger id="priority">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="due-date">Due Date</Label>
            <Input
              id="due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent">
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
