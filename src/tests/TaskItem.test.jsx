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

    expect(mockOnDeleteTask).toHaveBeenCalledWith(1);
    expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
  });
});