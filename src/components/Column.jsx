import React, { useState } from "react";

import AddItem from "./AddItem";
import Modal from "./Modal";

const Column = ({
  id,
  colName,
  tasks,
  onTaskAdd,
  onColumnDelete,
  onTaskDelete
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  const toggleModal = (task = {}) => {
    setActiveTask(task);
    setShowModal(!showModal);
  };

  const handleTaskChange = e => {
    e.preventDefault();
    const newDescription = e.target.description.value;
    if (activeTask.description != newDescription) {
      const { taskName } = activeTask;
      onTaskDelete(activeTask);
      setActiveTask(Object.assign(activeTask, { description: newDescription }));
      onTaskAdd(taskName, newDescription);
    }
    toggleModal();
  };

  const toggleMenu = () => setMenuActive(!menuActive);
  return (
    <div className="column-wrapper">
      <div className="column">
        <div className="column__header">
          <h1 className="column__title">{colName}</h1>
          <svg
            onClick={toggleMenu}
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
        </div>
        <ul className="column__body list">
          <div
            className={`column__menu ${
              menuActive ? "column__menu_active" : ""
            }`}
          >
            <button
              className="button button_cancel"
              onClick={onColumnDelete}
              style={{ flexBasis: "100%" }}
              data-action="column"
            >
              Delete Column
            </button>
          </div>
          {tasks &&
            tasks.map(({ taskName, description }) => (
              //eslint-disable-next-line
              <li
                className="list__item"
                key={`${id}_${taskName}`}
                onClick={() => toggleModal({ taskName, description })}
              >
                {taskName}
              </li>
            ))}
          <li className="list__item">
            <AddItem onAdd={onTaskAdd} item="task" />
          </li>
        </ul>
      </div>
      {showModal ? (
        <Modal toggleModal={toggleModal} modalTitle={activeTask.taskName}>
          <form className="form" onSubmit={handleTaskChange}>
            <textarea
              name="description"
              className="textarea textarea_w_100"
              defaultValue={`${activeTask.description}`}
              type="text"
            />
            <button className="button button_green" type="submit">
              Submit
            </button>
          </form>
          <button
            className="button button_cancel"
            data-action="task"
            onClick={() => {
              onTaskDelete(activeTask);
              toggleModal();
            }}
          >
            Delete Task
          </button>
        </Modal>
      ) : null}
    </div>
  );
};

export default Column;
