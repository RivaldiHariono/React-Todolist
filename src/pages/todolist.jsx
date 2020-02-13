import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
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
  ]);
  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  return (
    // className nama lain dari class
    <Paper>
      <Header />
      <Todoform addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;
