import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { KEYS, useKey } from "./hooks/useKey";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const localStoreInitialValue = localStorage.getItem("score")
    ? +localStorage.getItem("score")
    : 0;
  const [score, setScore] = useState(localStoreInitialValue);
  const handleReset = () => setScore(0);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useKey(KEYS.Y, handleReset);

  return (
    <>
      <div className="container">
        <Header score={score} onReset={handleReset} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
