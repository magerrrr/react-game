import React from "react";
import { Link, useHistory } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import { KEYS, useKey } from "../hooks/useKey";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => setMyChoice(e.target.dataset.id);
  const history = useHistory();

  const handlePaper = () => {
    setMyChoice("paper");
    history.push("/game");
  };

  const handleScissors = () => {
    setMyChoice("scissors");
    history.push("/game");
  };

  const handleRock = () => {
    setMyChoice("rock");
    history.push("/game");
  };

  useKey(KEYS.Q, handlePaper);
  useKey(KEYS.W, handleScissors);
  useKey(KEYS.A, handleRock);

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          />
        </Link>

        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          />
        </Link>

        <Link to="/game">
          <div data-id="rock" onClick={setChoice} className="icon icon--rock" />
        </Link>
      </div>
    </div>
  );
};

export default Play;
