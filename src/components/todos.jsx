import React from "react";
import Todo from "./todo";
import PropTypes from "prop-types";

const todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} />;
      })}
    </section>
  );
};
todos.protoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};
export default todos;
