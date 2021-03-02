import React, { useState } from "react";
import Modal from "./Modal";
import { KEYS, useKey } from "../hooks/useKey";
import useSound from "use-sound";
import bgSound from "../sounds/background.mp3";
import sOn from "../images/s-on.png";
import sOff from "../images/s-off.png";

const Footer = () => {
  const [modal, setModal] = useState(false);
  const [play, { stop, isPlaying }] = useSound(bgSound, {
    interrupt: true,
    onend: () => play(),
  });

  const toggleSong = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  const toggle = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  useKey(KEYS.R, toggle);
  useKey(KEYS.ESCAPE, closeModal);

  return (
    <>
      <footer className="footer">
        <a href="https://rs.school/js/">
          <img className="picture" alt="" />
        </a>
        <img
          className="music"
          src={isPlaying ? sOn : sOff}
          alt="Background Music"
          onClick={toggleSong}
        />
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
