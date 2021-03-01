import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { KEYS, useKey } from "../hooks/useKey";

const Game = ({ myChoice, score, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);
  const history = useHistory();

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  const handleSpace = () => {
    setHouse();
    history.push("/");
  };

  useKey(KEYS.SPACE, handleSpace);

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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        />
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You win</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw!</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}
          />
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
