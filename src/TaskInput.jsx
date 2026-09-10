export default function TaskInput({inputValue, setInputValue, onAddTask}) {
     return ( <div className='inputContainer'>
      <input type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Введите задачу...'
      />
      <button onClick={onAddTask}>Добавить</button>
    </div>
     );
}