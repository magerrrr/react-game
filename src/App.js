import React, { useState } from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
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
