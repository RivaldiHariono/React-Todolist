import React from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const TodoList = () => {
  return (
    // className nama lain dari class
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
}
export default TodoList;