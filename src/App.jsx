import './App.css'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([]) 
  const [inputValue, setInputValue] = useState("")
  return <div className='App'>
    <h1>Мой список дел</h1>
    <div className='inputContainer'>
      <input type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Введите задачу...'
      />
    </div>
    <p>Задач: {tasks.length}</p>
  </div>

  }

export default App
