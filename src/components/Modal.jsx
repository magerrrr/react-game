import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

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
        <img src={rules} alt="Rules" />

        <div className="modal__footer">
          <h3>keyboard shortcuts:</h3>
          <div className="footer__items">
            <div className="footer__item">
              <button>Q</button>
              <span>Pick paper</span>
            </div>
            <div className="footer__item">
              <button>W</button>
              <span>Pick scissors</span>
            </div>
            <div className="footer__item">
              <button>A</button>
              <span>Pick rock</span>
            </div>
            <div className="footer__item">
              <button>Space</button>
              <span>Play again</span>
            </div>
            <div className="footer__item">
              <button>R</button>
              <span>Show rules</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
