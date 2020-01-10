import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./style/modal.scss";

const Modal = ({ children, toggleModal, modalTitle }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  });
  return createPortal(
    <div className="modal_wrapper">
      <div className="modal card">
        <div className="card__header">
          <h2>{modalTitle}</h2>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <button className="button button_cancel" onClick={toggleModal}>
            Close Modal
          </button>
        </div>
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
