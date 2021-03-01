import React from "react";

const Header = ({ score, onReset }) => {
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
        {score !== 0 && (
          <button onClick={onReset} className="score-box__button-reset">
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
