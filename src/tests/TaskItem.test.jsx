import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";

describe("TaskItem component", () => {
  test("Отображение текста задачи", () => {
    const task = { id: 1, text: "Купить молоко" };
    
    render(
      <TaskItem 
        task={task} 
        onDeleteTask={() => {}} 
      />
    );

     // toBeInTheDocument – проверяет, что элемент с текстом задачи успешно отрендерился и присутствует в DOM-дереве
    expect(screen.getByText("Купить молоко")).toBeInTheDocument();
  });

  test("Вызов onDeleteTask при клике на кнопку удаления", () => {
    const task = { id: 1, text: "Купить молоко" };
    
    const mockOnDeleteTask = jest.fn(); 
    
    render(
      <TaskItem 
        task={task} 
        onDeleteTask={mockOnDeleteTask}
      />
    );

    const deleteButton = screen.getByText("Удалить");
    fireEvent.click(deleteButton);

    // toHaveBeenCalledWith – проверяет, что функция-обработчик была вызвана с правильным аргументом (id удаляемой задачи, равным 1)
    expect(mockOnDeleteTask).toHaveBeenCalledWith(1);

    // toHaveBeenCalledTimes – проверяет, что функция удаления была вызвана строго один раз, что предотвращает случайные множественные срабатывания
    expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
  });
});