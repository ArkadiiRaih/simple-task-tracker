import React, { useState } from "react";

const Column = ({ id, colName, tasks, onCreate }) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = e => {
    setTaskName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(taskName, id);
    setTaskName("");
  };
  return (
    <div className="card">
      <p>{id}</p>
      <p>{colName}</p>
      {tasks && tasks.map(task => <div>{JSON.stringify(task)}</div>)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Column;
