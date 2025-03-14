import { useState } from 'react'
import './App.css'
import { TaskProvider } from './context/TaskContext'
import TaskManager from './component/TaskManagement'

function App() {

  return (
    <TaskProvider>
        <div className='App'>
          <h1>GERENCIADOR DE TAREFAS</h1>
          <TaskManager/>
        </div>
    </TaskProvider>
  )
}

export default App
