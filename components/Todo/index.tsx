import React from "react";
import styles from "./style.module.css";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksProps {
  todo: TodoProps;
}

export default function index({ todo }: TasksProps) {
  const { id, title, completed } = todo;
  const h1 = <h2>{todo.title}</h2>;
  const text = completed ? <div className={styles.isCompleted}>{h1}</div> : h1;
  return <div data-testid={`todo-${todo.id}`}>{text}</div>;
}
