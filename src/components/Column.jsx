import React, { useState } from "react";

import AddItem from "./AddItem";

const Column = ({ id, colName, tasks, onTaskAdd }) => {
  const onAdd = name => {
    onTaskAdd(name, id);
  };
  return (
    <div className="column-wrapper">
      <div className="column">
        <div className="column__header">
          <h1 className="column__title">{colName}</h1>
        </div>
        <ul className="column__body list">
          {tasks &&
            tasks.map(({ taskName, description }) => (
              <li className="list__item" key={`${id}_${taskName}`}>
                {taskName}
              </li>
            ))}
          <li className="list__item">
            <AddItem onAdd={onAdd} item="task" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Column;
