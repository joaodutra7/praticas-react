"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface Task {
    id: number
    text: string
    completed: boolean
}

interface TaskContextType {
    tasks: Task[]
    addTask: (text: string) => void
    toggleTask: (id: number) => void
    removeTask: (id: number) => void
    pendingTaskCount: number
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("useContext deve ser definido")
    }
    return context
}

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedtasks = localStorage.getItem("tasks")
        return storedtasks ? JSON.parse(storedtasks) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (text: string) => {
        setTasks([...tasks, { id: Date.now(), text, completed: false }])
    }

    const toggleTask = (id: number) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed}: task)))
}

const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

const pendingTaskCount = tasks.filter((task) => !task.completed).length

return (
    <TaskContext.Provider value={{
        tasks, addTask, toggleTask, removeTask,
        pendingTaskCount
    }}>
        {children}
    </TaskContext.Provider>
)

}