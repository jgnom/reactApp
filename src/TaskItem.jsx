export default function TaskItem({ task, onDeleteTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button 
        className="delete-btn"
        onClick={() => onDeleteTask(task.id)}
      >
        Удалить
      </button>
    </li>
  );
}