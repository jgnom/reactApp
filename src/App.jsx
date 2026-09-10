import './App.css'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, {id: Date.now(), text: inputValue}]);
    setInputValue("")
  }
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
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
        <li key={task.id}>
          <p>{task.text}</p>
          <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
      ))}
    </ul>
    <p>Задач: {tasks.length}</p>
  </div>

  }

export default App
