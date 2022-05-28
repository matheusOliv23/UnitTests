import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "./index";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo", () => {
  const tasks = {
    id: 1,
    title: "Caminhar",
    completed: false,
  };
  render(<Todo todo={tasks} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Caminhar");
  expect(todoElement).not.toHaveClass("isCompleted");
});

test("should render completed todo", () => {
  const tasks = {
    id: 2,
    title: "Estudar",
    completed: true,
  };
  render(<Todo todo={tasks} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Estudar");
  expect(todoElement).toContainHTML("div");
});
