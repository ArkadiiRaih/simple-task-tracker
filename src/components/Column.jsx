import React, { useState } from "react";

import AddItem from "./AddItem";

const Column = ({ id, colName, tasks, onTaskAdd, onColumnDelete }) => {
  const onAdd = name => {
    onTaskAdd(name, id);
  };

  const onDelete = () => {
    onColumnDelete(id);
  };
  return (
    <div className="column-wrapper">
      <div className="column">
        <div className="column__header">
          <h1 className="column__title">{colName}</h1>
          <svg
            className=""
            data-target="options1"
            fill="#FFFFFF"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <button
            className="button button_cancel"
            onClick={onDelete}
            style={{ flexBasis: "100%" }}
          >
            Delete Column
          </button>
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
