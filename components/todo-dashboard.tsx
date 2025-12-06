"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TodoItem } from "@/components/todo-item";
import { AddTaskDialog } from "@/components/add-task-dialog";
import { LogOut, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase-client";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: "work" | "personal" | "shopping";
  priority: "high" | "medium" | "low";
  createdAt: string;
}

interface TodoDashboardProps {
  userName: string;
  onLogout: () => void;
}

type FilterType = "all" | "active" | "completed";
type SortType = "priority" | "createdAt";

export function TodoDashboard({ userName, onLogout }: TodoDashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortType>("createdAt");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  
  useEffect(() => {
        fetchTasks()
      },[])
  
  
      const fetchTasks = async () => {
    const { error,data } = await supabase
      .from("tasks")
      .select("*")
      .order("createdAt", { ascending: true });

      if (error) {
      console.error("Error reading task:", error.message)
      return
    }

    if(data){
      setTasks(data);
    }

    
  };

  

  const addTask = (task: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
    setIsDialogOpen(false);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = async (id: string) => {

    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      console.error("Error deleting task:", error.message)
      return
    }

    setTasks(tasks.filter((tasks) => tasks.id !== id));
  }

  const getFilteredTasks = () => {
    let filtered = tasks;

    // Apply completion filter
    if (filter === "active") {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((task) => task.category === categoryFilter);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      if (sortBy === "priority") {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    });
  };

  const filteredTasks = getFilteredTasks();
  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <Card className="mb-6 shadow-lg border-2">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Tasks
              </h1>
              <p className="text-muted-foreground mt-1">Hello, {userName}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="flex items-center gap-2 bg-transparent"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </Card>

        {/* Controls */}
        <Card className="mb-6 shadow-lg border-2">
          <div className="p-6 space-y-6">
            {/* Add Task Button */}
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add New Task
            </Button>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Status Filter */}
              <div className="flex gap-2 flex-1">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className="flex-1"
                >
                  All
                </Button>
                <Button
                  variant={filter === "active" ? "default" : "outline"}
                  onClick={() => setFilter("active")}
                  className="flex-1"
                >
                  Active
                </Button>
                <Button
                  variant={filter === "completed" ? "default" : "outline"}
                  onClick={() => setFilter("completed")}
                  className="flex-1"
                >
                  Completed
                </Button>
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value as SortType)}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="createdAt">Date Created</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Counter */}
            <div className="text-center text-sm text-muted-foreground">
              {activeCount} active tasks
            </div>
          </div>
        </Card>

        {/* Tasks List */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <Card className="shadow-lg border-2">
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2">
                  No tasks to display
                </h3>
                <p className="text-muted-foreground">
                  {filter === "completed"
                    ? "You haven't completed any tasks yet"
                    : filter === "active"
                    ? "All tasks completed!"
                    : "Start by adding new tasks"}
                </p>
              </div>
            </Card>
          ) : (
            filteredTasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </div>

      <AddTaskDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddTask={addTask}
        refetchTasks={fetchTasks}
      />
    </div>
  );
}
