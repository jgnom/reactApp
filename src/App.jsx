import './App.css'
import TaskInput from './TaskInput';
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
    setTasks([...tasks, {id: Date.now(), text: inputValue}]);
    setInputValue("")
    }
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return <div className='App'>
    <h1>Мой список дел</h1>
    <TaskInput
      inputValue={inputValue}
      setInputValue={setInputValue}
      onAddTask={handleAddTask}
      />
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
