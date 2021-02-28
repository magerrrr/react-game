import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Play} />
          <Route path="/game" component={Game} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
