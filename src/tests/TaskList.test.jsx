import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

describe("TaskList component", () => {
  test("Отображение списка задач", () => {
    const tasks = [
      { id: 1, text: "Задача 1" },
      { id: 2, text: "Задача 2" },
      { id: 3, text: "Задача 3" },
    ];
    
    render(
      <TaskList 
        tasks={tasks} 
        onDeleteTask={() => {}} 
      />
    );

    expect(screen.getByText("Задача 1")).toBeInTheDocument();
    expect(screen.getByText("Задача 2")).toBeInTheDocument();
    expect(screen.getByText("Задача 3")).toBeInTheDocument();
  });

  test("Пустой список задач", () => {
    render(
      <TaskList 
        tasks={[]} 
        onDeleteTask={() => {}} 
      />
    );

    expect(screen.queryByText("Задача 1")).not.toBeInTheDocument();
  });
});