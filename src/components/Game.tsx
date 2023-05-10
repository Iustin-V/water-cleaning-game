import styled from "styled-components";
import React from "react";

const GameWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
`;
const MainContainer = styled.div`
  display: flex;
  height: 90%;
  width: 45%;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const GameViewContainer = styled.div`
  width: 100%;
  height: 75%;
  background-color: deepskyblue;
`;
const LegendContainer = styled.div`
  width: 25%;
  height: 90%;
  background-color: yellow;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Control = styled.div`
  z-index: 2;
  height: 50%;
  width: 20%;
  border-radius: 25px;
  background-color: darkgrey;
  :hover {
    background-color: dimgrey;
  }
`;
export const Game = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <GameWrapper>
      <LegendContainer></LegendContainer>
      <MainContainer>
        <GameViewContainer
          ref={containerRef}
          onClick={() =>
            console.log(
              "left:",
              containerRef?.current?.offsetLeft,
              "top:",
              containerRef?.current?.offsetTop
            )
          }
        ></GameViewContainer>
        <ButtonContainer>
          <Control></Control>
          <Control></Control>
          <Control></Control>
        </ButtonContainer>
      </MainContainer>
    </GameWrapper>
  );
};
