import { render, screen, fireEvent } from "@testing-library/react";
import TaskInput from "../TaskInput";

describe("TaskInput component", () => {
  test("Отображение инпут и кнопки", () => {
    render(
      <TaskInput inputValue="" setInputValue={() => {}} onAddTask={() => {}} />
    );

    expect(screen.getByPlaceholderText("Введите задачу")).toBeInTheDocument();
    expect(screen.getByText("Добавить")).toBeInTheDocument();
  });
});