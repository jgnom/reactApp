import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; // ← Обратите внимание: "../" поднимает нас из папки tests в папку src

describe("App component", () => {
  test("Добавление новой задачи и её отображение в списке", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Введите задачу...");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Новая задача")).toBeInTheDocument();
    expect(screen.getByText("Задач: 1")).toBeInTheDocument();
  });

  test("Удаление задачи при клике на кнопку удаления", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Введите задачу...");
    const addButton = screen.getByText("Добавить");

    // 1. Добавляем задачу
    fireEvent.change(input, { target: { value: "Задача для удаления" } });
    fireEvent.click(addButton);

    // 2. Проверяем, что задача добавилась
    expect(screen.getByText("Задача для удаления")).toBeInTheDocument();

    // 3. Находим кнопку "Удалить" и кликаем по ней
    const deleteButton = screen.getByText("Удалить");
    fireEvent.click(deleteButton);

    // 4. Проверяем, что задача удалена и счетчик стал 0
    expect(screen.queryByText("Задача для удаления")).not.toBeInTheDocument();
    expect(screen.getByText("Задач: 0")).toBeInTheDocument();
  });
});