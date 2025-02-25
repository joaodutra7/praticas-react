"use client"

import type React from "react"

import { useRef, useEffect } from "react"

import { useTaskContext } from "../context/TaskContext"

const TaskManager: React.FC = () => {
    const {tasks,addTask,toggleTask,removeTask,pendingTaskCount} = useTaskContext()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const text = inputRef.current?.value.trim()
        if(text){
            addTask(text)
            if(inputRef.current){
                inputRef.current.value=""
            }
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == "Enter"){
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder="Adicionar tarefa"
                    onKeyDown={handleKeyDown} />
                <button type="submit"> Adicionar </button>    
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} 
                        onChange={() => toggleTask(task.id)} />
                        <span style={{textDecoration: task.completed ? 
                            "line-through" : "none"}}> {task.text} </span>
                        <button onClick={() =>
                            removeTask(task.id)}> Remover </button>   
                    </li>
                ))}
            </ul>
            <p> Tarefas pendendes: {pendingTaskCount}</p>
        </div>
    )
}

export default TaskManager