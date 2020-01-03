import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./style/modal.scss";

const Modal = ({ children }) => {
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
      <div className="modal">{children}</div>
    </div>,
    elRef.current
  );
};

export default Modal;
