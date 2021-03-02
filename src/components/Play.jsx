import React from "react";
import { Link, useHistory } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
import { KEYS, useKey } from "../hooks/useKey";
import useSound from "use-sound";
import paperSound from "../sounds/paper.wav";
import scissorsSound from "../sounds/scissors.wav";
import rockSound from "../sounds/rocks.wav";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => setMyChoice(e.target.dataset.id);
  const history = useHistory();
  const [playPaperSound] = useSound(paperSound, { volume: 0.7 });
  const [playScissorsSound] = useSound(scissorsSound);
  const [playRocksSound] = useSound(rockSound);

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

  const handleClickPaper = (e) => {
    playPaperSound();
    setChoice(e);
  };

  const handleClickRock = (e) => {
    playRocksSound();
    setChoice(e);
  };

  const handleClickScissors = (e) => {
    playScissorsSound();
    setChoice(e);
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
            onClick={handleClickPaper}
            className="icon icon--paper"
          />
        </Link>

        <Link to="/game">
          <div
            data-id="scissors"
            onClick={handleClickScissors}
            className="icon icon--scissors"
          />
        </Link>

        <Link to="/game">
          <div
            data-id="rock"
            onClick={handleClickRock}
            className="icon icon--rock"
          />
        </Link>
      </div>
    </div>
  );
};

export default Play;
