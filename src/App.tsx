import React from "react";
import styled from "styled-components";
import "./App.css";
import { Game } from "./components/Game";
import { Start } from "./components/Start";
import background from "./images/background.webp"

const  AppContainer=styled.div`
  background-image: url(${background});
  background-size: cover;
`
function App() {
  const [startedGame, useStartedGame] = React.useState(false);
  return (
    <AppContainer className="App">
      {!startedGame ? <Start useStartedGame={useStartedGame} /> : <Game />}
    </AppContainer>
  );
}

export default App;
