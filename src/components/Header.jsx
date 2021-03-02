import React from "react";
import useSound from "use-sound";
import resettingSound from "../sounds/resetting.wav";

const Header = ({ score, onReset }) => {
  const [playResetSound] = useSound(resettingSound);
  const isNotZero = score !== 0;

  const handleClick = () => {
    playResetSound();
    onReset();
  };

  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
        {isNotZero && (
          <button onClick={handleClick} className="score-box__button-reset">
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
