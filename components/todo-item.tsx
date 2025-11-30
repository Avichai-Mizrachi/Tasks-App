"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import type { Task } from "./todo-dashboard"
import { cn } from "@/lib/utils"

interface TodoItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const categoryLabels = {
  work: "Work",
  personal: "Personal",
  shopping: "Shopping",
}

const categoryColors = {
  work: "bg-blue-500/10 text-blue-700 border-blue-200",
  personal: "bg-green-500/10 text-green-700 border-green-200",
  shopping: "bg-orange-500/10 text-orange-700 border-orange-200",
}

const priorityColors = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
}

export function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="shadow-md hover:shadow-lg transition-all duration-200 border-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 flex items-start gap-4">
        {/* Checkbox */}
        <div className="pt-1">
          <Checkbox checked={task.completed} onCheckedChange={() => onToggle(task.id)} className="h-5 w-5 rounded-md" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-2">
            {/* Priority Dot */}
            <div
              className={cn("w-3 h-3 rounded-full mt-1.5 flex-shrink-0", priorityColors[task.priority])}
              title={
                task.priority === "high"
                  ? "High Priority"
                  : task.priority === "medium"
                    ? "Medium Priority"
                    : "Low Priority"
              }
            />

            {/* Text */}
            <p
              className={cn(
                "text-base flex-1 transition-all duration-200",
                task.completed && "line-through text-muted-foreground",
              )}
            >
              {task.text}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 mr-6">
            {/* Category Badge */}
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border", categoryColors[task.category])}>
              {categoryLabels[task.category]}
            </span>

            {/* Due Date */}
            <span className="text-xs text-muted-foreground">
              Due: {new Date(task.dueDate).toLocaleDateString("en-US")}
            </span>
          </div>
        </div>

        {/* Delete Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(task.id)}
          className={cn(
            "flex-shrink-0 text-destructive hover:bg-destructive/10 transition-all duration-200",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
