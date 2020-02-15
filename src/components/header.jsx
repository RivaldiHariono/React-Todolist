import React from "react";
import PropTypes from "prop-types";

const header = ({ showAddToggle, showAdd, clearTodo }) => {
  return (
    <div className="header">
      <button className="header-btn" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color" onClick={clearTodo}>
        Clear
      </button>
    </div>
  );
};

header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default header;
