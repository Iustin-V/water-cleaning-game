import styled from "styled-components";
import React, { useEffect, useState } from "react";
import can from "../images/can.png";
import tire from "../images/tire.png";
import bottle1 from "../images/bottle1.png";
import bottle2 from "../images/bottle2.png";
import plastic from "../images/plastic.png";
import metal from "../images/metal.png";
import sticla from "../images/sticla.png";
import heart from "../images/heart.png";
import watereffect from "../images/water.gif";

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
  background-color: #18586bf0;
  overflow: hidden;
  position: relative;
  border: 3px solid black;
  border-radius: 20px;
`;
const LegendContainer = styled.div`
  width: 25%;
  height: 90%;
  background-color: rgba(52, 155, 16, 0.82);
  border: 3px solid black;
  border-radius: 20px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: rgba(77, 36, 3, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 3px solid black;
  border-radius: 20px;
  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  > h2 {
    margin: -43px 0 0 0;
  }
`;
const StartButton = styled.button`
  background: #12254e;
  padding: 16px;
  border: 2px solid #000000;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  z-index: 51;

  :hover {
    background: #2550ad;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);

  > span {
    font-size: 40px;
  }
`;
const Control = styled.div`
  z-index: 2;
  height: 80%;
  width: 20%;
  border-radius: 25px;
  background-color: white;
  transition: 0.2s ease-in;
  :hover {
    background-color: darkgrey;
    cursor: pointer;
    > img {
      transform: scale(1.1);
    }
  }

  > img {
    transition: 0.2s ease-in;
    height: 100%;
    -webkit-user-drag: none;
  }
`;
const Image = styled.img<{ position: number; animationDuration?: number }>`
  width: 50px;
  position: absolute;
  color: red;
  animation-duration: ${(props) => props.animationDuration}!important;
  top: 100%;
  visibility: hidden;
  left: ${(props) => props.position}%;
`;

const LivesContainer = styled.div`
  top: 15px;
  right: 15px;
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 12px;
  z-index: 51;
`;
const ScoreContainer = styled.div`
  top: 15px;
  left: 15px;
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 15px;
  z-index: 51;

  font-weight: 700;
  font-size: 17px;
  color: white;
  height: 24px;
`;
const Heart = styled.img`
  width: 24px;
  z-index: 51;
`;
const WaterEffect = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 50;
  opacity: 30%;
  pointer-events: none;
`;

const Catch = styled.div`
  bottom: 20px;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const LegendCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    color: white;
    font-size: 20px;
  }
`;
export const Game = () => {
  //  refs
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const buttonOneRef = React.useRef<HTMLDivElement | null>(null);
  const buttonTwoRef = React.useRef<HTMLDivElement | null>(null);
  const buttonThreeRef = React.useRef<HTMLDivElement | null>(null);
  const trashRef = React.useRef<HTMLImageElement | null>(null);

  // essentials
  const [gameStarted, setGameStarted] = React.useState(false);
  const [timeoutBool, setTimeoutBool] = React.useState(false);
  const [nextLevelScore, setNextLevelScore] = useState(500);
  const [lastCatch, setLastCatch] = useState({ name: "", url: "" });
  const [imgPosition, setImgPosition] = React.useState(
    Math.floor(Math.random() * 80)
  );

  //  current data
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentImage, setCurrentImage] = useState({ id: 0, url: "" });
  const [currentBasket, setCurrentBasket] = useState(4);

  //  stats
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  let imageUrls = [can, tire, can, tire, bottle1, bottle2];
  // let imageUrls = [tire, tire, tire, tire];

  // game logic
  const handleGameReset = () => {
    setGameStarted(false);
    setScore(0);
    setLives(3);
    setCurrentBasket(4);
    setCurrentImage({ id: 0, url: "" });
  };

  const handleBasket = (id: number) => {
    setCurrentBasket(id);
    console.log("currentbasket", currentBasket);

    buttonOneRef.current?.classList.remove("active");
    buttonTwoRef.current?.classList.remove("active");
    buttonThreeRef.current?.classList.remove("active");
    switch (id) {
      case 0:
        buttonOneRef.current?.classList.add("active");
        break;
      case 1:
        buttonTwoRef.current?.classList.add("active");
        break;
      case 2:
        buttonThreeRef.current?.classList.add("active");
        break;
    }
  };

  React.useEffect(() => {
    if (gameStarted) {
      setImgPosition(Math.floor(Math.random() * 80));
      setCurrentImage({
        id: currentImage.id + 1,
        url: imageUrls[Math.floor(Math.random() * 5)],
      });
      setTimeout(() => {
        if (
          trashRef.current?.getBoundingClientRect().y &&
          trashRef.current?.getBoundingClientRect().y > 550
        ) {
          console.log(currentBasket, currentImage.url);
          if (
            (currentBasket === 0 && currentImage.url === tire) ||
            (currentBasket === 1 && currentImage.url === can)
          ) {
            setScore(score + 100);
          } else {
            setLives(lives - 1);
          }
        }
      }, 2000);
    }
  }, [gameStarted]);

  React.useEffect(() => {
    if (gameStarted) {
      if (lives === 0) {
        alert(`Game Over!
        Your score is : ${score}, congratulations!`);
        handleGameReset();
      } else if (score === nextLevelScore) {
        const userConfirmed = window.confirm(
          `Congratulations, you finished the current level. Proceed to the next one?`
        );
        if (userConfirmed) {
          setCurrentLevel(currentLevel + 1);
          setNextLevelScore(nextLevelScore + 200);
          handleGameReset();
        }
      } else {
        if (
          trashRef.current?.getBoundingClientRect().y &&
          trashRef.current?.getBoundingClientRect().y > 550
        ) {
          console.log(currentBasket, currentImage.url);
          if (
            (currentBasket === 0 && currentImage.url === tire) ||
            (currentBasket === 1 && currentImage.url === can) ||
            (currentBasket === 2 && currentImage.url === bottle1) ||
            (currentBasket === 2 && currentImage.url === bottle2)
          ) {
            setScore(score + 100);
            switch (currentBasket) {
              case 0:
                setLastCatch({
                  name: "deseu de plastic",
                  url: currentImage.url,
                });
                break;
              case 1:
                setLastCatch({ name: "deseu de metal", url: currentImage.url });
                break;
              case 2:
                setLastCatch({
                  name: "deseu de sticla",
                  url: currentImage.url,
                });
                break;
            }
          } else {
            setLives(lives - 1);
          }
          setImgPosition(Math.floor(Math.random() * 80));
          setCurrentImage({
            id: currentImage.id + 1,
            url: imageUrls[Math.floor(Math.random() * 5)],
          });
        }
      }
    }
  }, [timeoutBool, gameStarted]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "a" || event.key === "A") {
        handleBasket(0);
      }
      if (event.key === "s" || event.key === "S") {
        handleBasket(1);
      }
      if (event.key === "d" || event.key === "D") {
        handleBasket(2);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);

  setInterval(() => {
    setTimeoutBool(!timeoutBool);
  }, 2000);

  /* nu merge schimbarea duratiei animatiei, 
  nu merge selectarea cosului pentru runda curenta, 
  schimbarea are loc abia runda urm*/

  return (
    <GameWrapper>
      <LegendContainer>
        {lastCatch.name && (
          <Catch>
            Ai prins un {lastCatch.name}
            <img
              style={{ height: "30px", width: "30px" }}
              src={lastCatch.url}
            />
          </Catch>
        )}
        <LegendCategory>
          <p> Deseuri de plastic:</p>
          <img style={{ height: "50px", width: "50px" }} src={tire} />
        </LegendCategory>
        <LegendCategory>
          <p> Deseuri de metal:</p>
          <img style={{ height: "50px", width: "50px" }} src={can} />
        </LegendCategory>
        <LegendCategory>
          <p> Deseuri de sticla:</p>
          <img style={{ height: "50px", width: "50px" }} src={bottle1} />
          <img style={{ height: "50px", width: "50px" }} src={bottle2} />
        </LegendCategory>
      </LegendContainer>

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
          <WaterEffect src={watereffect} alt={"watter effect"} />
          <ScoreContainer>
            {score} / {nextLevelScore}
          </ScoreContainer>
          <LivesContainer>
            {Array.from({ length: lives }).map((_, i) => (
              <Heart src={heart} alt="heart" />
            ))}
          </LivesContainer>
          {!gameStarted && (
            <StartButton
              className={"start-button"}
              onClick={() => {
                setGameStarted(true);
              }}
            >
              <a href="#">
                START
                <br /> Level {currentLevel}
              </a>
            </StartButton>
          )}
          {
            <Image
              position={imgPosition}
              src={currentImage.url}
              ref={trashRef}
              alt=""
              key={currentImage.id}
              animationDuration={2 - currentLevel * 0.1}
              className={`slide-down`}
            />
          }
        </GameViewContainer>
        <ButtonContainer>
          <h2 style={{ color: "white" }}>SELECTEAZA COSUL CORECT:</h2>
          <div>
            <Control ref={buttonOneRef} onClick={() => handleBasket(0)}>
              <img src={plastic} onClick={() => handleBasket(0)} />
            </Control>
            <Control ref={buttonTwoRef} onClick={() => handleBasket(1)}>
              <img src={metal} onClick={() => handleBasket(1)} />
            </Control>
            <Control ref={buttonThreeRef} onClick={() => handleBasket(2)}>
              <img src={sticla} onClick={() => handleBasket(2)} />
            </Control>
          </div>
        </ButtonContainer>
      </MainContainer>
    </GameWrapper>
  );
};
