import './App.css'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, {id: Date.now(), text: inputValue}]);
    setInputValue("")
  }


  return <div className='App'>
    <h1>Мой список дел</h1>
    <div className='inputContainer'>
      <input type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Введите задачу...'
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id}> {task.text}</li>
      ))}
    </ul>
    <p>Задач: {tasks.length}</p>
  </div>

  }

export default App
