import styled from "styled-components";
import React, { useEffect, useState } from "react";
import can from "../images/can.png";
import tire from "../images/tire.png";
import plastic from "../images/plastic.png";
import metal from "../images/metal.png";
import sticla from "../images/sticla.png";

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
  position: relative;
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
const StartButton = styled.button`
  background: #12254e;
  padding: 16px;
  border: 2px solid red;
  border-radius: 15px;
  color: white;
  font-weight: bold;

  :hover {
    background: #2550ad;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Control = styled.div`
  z-index: 2;
  height: 60%;
  width: 20%;
  border-radius: 25px;
  background-color: white;
  transition: 0.5s ease-in;
  :hover {
    background-color: darkgrey;
    cursor: pointer;
    >img{
      transform: scale(1.1);
    }
  }
  
  >img {
    transition: 0.5s ease-in;
    height: 100%;
  }
`;
const Image = styled.img<{ position: number }>`
  width: 50px;
  position: absolute;
  top: 100%;
  visibility: hidden;
  left: ${(props) => props.position}%;
`;
export const Game = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const trashRef = React.useRef<HTMLImageElement | null>(null);
  const [gameStarted, setGameStarted] = React.useState(false);

  const [currentImage, setCurrentImage] = useState({ id: 0, url: "" });
  let imageUrls = [can, tire, can, tire];

  React.useEffect(() => {
    if (gameStarted) {
      setCurrentImage({
        id: currentImage.id + 1,
        url: imageUrls[Math.floor(Math.random() * 3)],
      });
    }
  }, [gameStarted]);

  React.useEffect(() => {
    if (gameStarted) {
      setTimeout(() => {
        if (
          trashRef.current?.getBoundingClientRect().y &&
          trashRef.current?.getBoundingClientRect().y > 600
        ) {
          setCurrentImage({
            id: currentImage.id + 1,
            url: imageUrls[Math.floor(Math.random() * 3)],
          });
        }
      }, 2000);
    }
  }, [currentImage, gameStarted]);

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
        >
          {!gameStarted && (
            <StartButton
              onClick={() => {
                setGameStarted(true);
              }}
            >
              START
            </StartButton>
          )}
          {
            <Image
              position={Math.floor(Math.random() * 80)}
              src={currentImage.url}
              ref={trashRef}
              alt=""
              key={currentImage.id}
              className={`slide-down`}
            />
          }
        </GameViewContainer>
        <ButtonContainer>
          <Control>
            <img src={plastic}/>
          </Control>
          <Control>
            <img src={metal}/>
          </Control>
          <Control>
            <img src={sticla}/>
          </Control>
        </ButtonContainer>
      </MainContainer>
    </GameWrapper>
  );
};
