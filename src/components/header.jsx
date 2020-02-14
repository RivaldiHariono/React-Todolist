import React from "react";
import PropTypes from "prop-types";

const header = ({ showAddToggle }) => {
  return (
    <div className="header">
      <button className="header-btn" onClick={showAddToggle}>
        Add
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </div>
  );
};

header.propTypes = {
  showAddToggle: PropTypes.func.isRequired
};

export default header;
