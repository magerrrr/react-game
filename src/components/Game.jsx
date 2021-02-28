import React, { useState, useEffect } from "react";

const Game = ({ myChoice, score, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  const result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    newHousePick();
  }, []);

  useEffect(() => {
    result();
  }, [house]);

  return (
    <div className="game">
      my choice: {myChoice} <br />
      house choice: {house} <br />
      Result:
      {playerWin === "win" && <h2>WOW! You Win</h2>}
      {playerWin === "lose" && <h2>Oops... You Lose</h2>}
      {playerWin === "draw" && <h2>Draw!</h2>}
    </div>
  );
};

export default Game;
