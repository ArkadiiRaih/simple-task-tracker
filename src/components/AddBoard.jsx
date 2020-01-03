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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          className="input input_w_100"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="board name"
          required
        />
        <input className="input input_w_100" type="submit" />
      </form>
    </div>
  );
};

export default AddBoard;
