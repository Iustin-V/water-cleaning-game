import React from "react";
import "./App.css";
import { Game } from "./components/Game";
import { Start } from "./components/Start";

function App() {
  const [startedGame, useStartedGame] = React.useState(false);
  return (
    <div className="App">
      {!startedGame ? <Start useStartedGame={useStartedGame} /> : <Game />}
    </div>
  );
}

export default App;
