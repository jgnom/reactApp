import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("Добавление новой задачи и её отображение в списке", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Введите задачу...");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.click(addButton);

    // toBeInTheDocument – проверяет, что элемент с текстом "Новая задача" успешно отрендерился и присутствует в DOM
    expect(screen.getByText("Новая задача")).toBeInTheDocument();

    // toBeInTheDocument – проверяет, что счетчик задач обновился и отображает корректное число "1"
    expect(screen.getByText("Задач: 1")).toBeInTheDocument();
  });

  test("Удаление задачи при клике на кнопку удаления", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Введите задачу...");
    const addButton = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Задача для удаления" } });
    fireEvent.click(addButton);

    // toBeInTheDocument – проверяет, что задача действительно добавилась в список перед попыткой её удаления
    expect(screen.getByText("Задача для удаления")).toBeInTheDocument();

    const deleteButton = screen.getByText("Удалить");
    fireEvent.click(deleteButton);

    // not.toBeInTheDocument (в связке с queryByText) – проверяет, что элемент был успешно удален из DOM. 
    // Используется queryByText, так как getByText выбросил бы ошибку, если элемент не найден.
    expect(screen.queryByText("Задача для удаления")).not.toBeInTheDocument();

    // toBeInTheDocument – проверяет, что счетчик задач обновился и показывает "0" после удаления
    expect(screen.getByText("Задач: 0")).toBeInTheDocument();
  });
});