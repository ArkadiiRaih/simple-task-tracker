import React, { useState } from "react";
import firebase, { firestore } from "../firebase";

const Column = ({ subBoard, boardId, idx }) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = e => {
    setTaskName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // const task = { name: taskName, description: "" };
    // const fieldPath = new firebase.firestore.FieldPath(`/subboards/${idx}`);
    // fuck this shit
  };
  return (
    <div className="card">
      <div className="card__header">
        <p>{subBoard.name}</p>
      </div>
      <div className="card__body">
        {subBoard.tasks.map((task, idx) => (
          <div key={`${task}${idx}`}>
            <p>{task.name}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskName"
            value={taskName}
            placeholder="task"
            onChange={handleChange}
          ></input>
          <button type="submit">add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Column;
