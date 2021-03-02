import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
import { keyboardShortcuts } from "../hooks/useKey";
import { renderRules } from "../utils";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" />
          </button>
        </div>
        <img src={rules} alt="Rules" className="img-rules" />

        <div className="modal__footer">
          <h3>keyboard shortcuts:</h3>
          <div className="footer__items">
            {keyboardShortcuts && renderRules(keyboardShortcuts)}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
