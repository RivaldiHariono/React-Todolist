import React from "react";

const header = () => {
  return (
    <div className="header">
      <button className="header-btn">Add</button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </div>
  );
};

export default header;
