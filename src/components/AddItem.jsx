import React, { useState, Fragment, useRef } from "react";

const AddItem = ({ onAdd, item }) => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (name == "") return;
    onAdd(name);
    setName("");
    onToggle();
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const onToggle = () => {
    setActive(!active);
    ref.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`button form-toggler ${active ? "form-toggler_hidden" : ""}`}
        onClick={onToggle}
      >
        New {item}
      </button>
      <form
        className={`form ${active ? "" : "form__hidden"}`}
        onSubmit={handleSubmit}
      >
        <textarea
          className="textarea textarea_w_100"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder={item}
          required
          ref={ref}
        />
        <div className="button-group">
          <button className="button button_green" type="submit">
            Add {item}
          </button>
          <button
            type="button"
            className="button button_cancel"
            onClick={onToggle}
          >
            Cancel
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddItem;
