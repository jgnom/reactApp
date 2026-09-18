import { render, screen, fireEvent } from "@testing-library/react";
import TaskInput from "../TaskInput";

describe("TaskInput component", () => {
  test("Отображение input и кнопки", () => {
    render(
      <TaskInput 
        inputValue="" 
        setInputValue={() => {}} 
        onAddTask={() => {}} 
      />
    );

    expect(screen.getByPlaceholderText("Введите задачу...")).toBeInTheDocument();
    expect(screen.getByText("Добавить")).toBeInTheDocument();
  });

  test("Изменение значения input при вводе текста", () => {
    const setInputValue = jest.fn();
    
    render(
      <TaskInput 
        inputValue="" 
        setInputValue={setInputValue} 
        onAddTask={() => {}} 
      />
    );

    const input = screen.getByPlaceholderText("Введите задачу...");
    fireEvent.change(input, { target: { value: "Новая задача" } });

    expect(setInputValue).toHaveBeenCalledWith("Новая задача");
  });

  test("Вызов onAddTask при клике на кнопку", () => {
    const onAddTask = jest.fn();
    
    render(
      <TaskInput 
        inputValue="Тестовая задача" 
        setInputValue={() => {}} 
        onAddTask={onAddTask} 
      />
    );

    const button = screen.getByText("Добавить");
    fireEvent.click(button);

    expect(onAddTask).toHaveBeenCalledTimes(1);
  });
});