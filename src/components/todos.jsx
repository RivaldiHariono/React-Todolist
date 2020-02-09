import React from "react";
import Todo from "./todo";

const todos = props => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar php"
    },
    {
      text: "Belajar Javascript"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar php"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default todos;
