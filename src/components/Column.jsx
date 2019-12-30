import React from "react";

const Column = ({ subBoard }) => {
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
      </div>
    </div>
  );
};

export default Column;
