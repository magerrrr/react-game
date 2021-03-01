import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <a href="https://rs.school/js/">
          <img className="picture" alt="" />
        </a>

        <div className="attribution">
          Challenge by
          <a href="https://rs.school/js/" target="_blank" className="link">
            The Rolling Scopes School
          </a>
          . GitHub:
          <a href="https://github.com/magerrrr" className="link">
            Kirill Mager
          </a>
          , 2021.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
