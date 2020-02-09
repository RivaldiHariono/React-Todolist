import React from "react";
import "./styles.css";

import Paper from "./components/paper";
import Header from "./components/header";
import Todoform from "./components/todoform";
import Todos from "./components/todos";
export default function App() {
  return (
    // className nama lain dari class
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
}
