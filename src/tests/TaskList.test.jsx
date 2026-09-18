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

    // toBeInTheDocument – проверяет, что элемент с текстом "Задача 1" присутствует в DOM
    expect(screen.getByText("Задача 1")).toBeInTheDocument();

    // toBeInTheDocument – проверяет, что элемент с текстом "Задача 2" присутствует в DOM
    expect(screen.getByText("Задача 2")).toBeInTheDocument();

    // toBeInTheDocument – проверяет, что элемент с текстом "Задача 3" присутствует в DOM
    expect(screen.getByText("Задача 3")).toBeInTheDocument();
  });

  test("Пустой список задач", () => {
    render(
      <TaskList 
        tasks={[]} 
        onDeleteTask={() => {}} 
      />
    );


    // not.toBeInTheDocument – проверяет, что элемент с текстом "Задача 1" отсутствует в DOM.
    // Важно: используется queryByText вместо getByText, так как getByText выбросил бы ошибку, 
    // если элемент не найден, а queryByText возвращает null, что позволяет корректно проверить отсутствие элемента.
    expect(screen.queryByText("Задача 1")).not.toBeInTheDocument();
  });
});