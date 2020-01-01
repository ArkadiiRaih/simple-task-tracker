import React, { useState } from "react";

const AddBoard = ({ onCreate }) => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCreate(name);
    setName("");
  }
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="board name"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBoard;
