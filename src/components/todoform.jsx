import React, { useState } from "react";
import PropTypes from "prop-types";
// useState = mini database di dalam todoform ini
const todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = e => {
    e.preventDefault();
    if (value === "") {
      alert("No ToDo");
    } else {
      addTodo(value);
      alert(value);
      setValue("");
    }
  };

  console.log("value", value);
  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
};

export default todoform;
todoform.propTypes = {
  addTodo: PropTypes.func.isRequired
};
