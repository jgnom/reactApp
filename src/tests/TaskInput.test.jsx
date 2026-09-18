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

    // toBeInTheDocument – проверяет, что элемент input с указанным плейсхолдером успешно отрендерился и присутствует в DOM
    expect(screen.getByPlaceholderText("Введите задачу...")).toBeInTheDocument();

    // toBeInTheDocument – проверяет, что кнопка с текстом "Добавить" также присутствует в DOM
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

    // toHaveBeenCalledWith – проверяет, что мок-функция была вызвана хотя бы один раз с конкретным аргументом ("Новая задача")
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

    // toHaveBeenCalledTimes – проверяет, что мок-функция была вызвана строго указанное количество раз (в данном случае, ровно 1 раз)
    expect(onAddTask).toHaveBeenCalledTimes(1);
  });
});