
import React, { useEffect, useState } from "react";
import can from "../images/can.png";
import tire from "../images/tire.png";
import bottle1 from "../images/bottle1.png";
import bottle2 from "../images/bottle2.png";
import bag from "../images/bag.png";
import bluebottle from "../images/bluebottle.png";
import bottle from "../images/bottle.png";
import conserve from "../images/conserve.png";
import key from "../images/key.png";
import plastic from "../images/plastic.png";
import metal from "../images/metal.png";
import sticla from "../images/sticla.png";
import heart from "../images/heart.png";
import watereffect from "../images/water.gif";
import cos from "../images/cos.png";
import cosPlastic from "../images/cos-plastic.png";
import cosSticla from "../images/cos-sticla.png";
import cosMetal from "../images/cos-metal.png";
import keyA from "../images/keyA.png"
import keyS from "../images/keyS.png"
import keyD from "../images/keyD.png"
import {
  ButtonContainer,
  Catch, Control,
  GameViewContainer,
  GameWrapper, Heart, ImageGarbage,
  LegendCategory,
  LegendContainer, LegendImages, LivesContainer,
  MainContainer, RecycleBin, ScoreContainer, StartButton,
  WaterEffect
} from "./style";

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
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentImage, setCurrentImage] = useState({ id: 0, url: "" });
  const [currentBasket, setCurrentBasket] = useState(4);

  //  stats
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  let imageUrls = [can, tire, can, tire, bottle1, bottle2, bottle, bag, bluebottle, key, conserve];
  let plasticGarbage = [tire, bottle, bag, bluebottle];
  let metalGarbage=[can,key,conserve]
  let glassGarbage=[bottle1,bottle2]

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
        url: imageUrls[Math.floor(Math.random() * 11)],
      });
    }
  }, [gameStarted]);

  React.useEffect(() => {
    if (gameStarted) {
      if (lives === 0) {
        alert(`Game Over!
        Your score is : ${score}, congratulations!`);
        handleGameReset();
        setCurrentLevel(1);
        setNextLevelScore(500);
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
          currentImage.url &&
          trashRef.current?.getBoundingClientRect().y &&
          trashRef.current?.getBoundingClientRect().y > 550
        ) {
          if (
            (currentBasket === 0 && plasticGarbage.includes(currentImage.url)) ||
            (currentBasket === 1 && metalGarbage.includes(currentImage.url)) ||
            (currentBasket === 2 && glassGarbage.includes(currentImage.url))
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
            url: imageUrls[Math.floor(Math.random() * 11)],
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

  /* ^^^ MERGE TOT NU MAI FII ASA NEGATIVIST*/

  return (
    <GameWrapper>
      <LegendContainer>
        {lastCatch.name && (
          <Catch>
            Ai prins un {lastCatch.name}
            <img
              style={{ height: "30px", objectFit:"contain"}}
              src={lastCatch.url}
              alt={"last catch"}
            />
          </Catch>
        )}
        <LegendCategory>
          <p style={{color: "#e86800"}} > Deseuri de plastic:</p>
          <LegendImages>
            {plasticGarbage.map((url,index)=>
                <img src={url} alt={`garbage_${index}`} />)
            }
          </LegendImages>

        </LegendCategory>
        <LegendCategory>
          <p style={{color: "#ffff00"}}> Deseuri de metal:</p>
          <LegendImages>
            {metalGarbage.map((url,index)=>
                <img src={url} alt={`garbage_${index}`} />)
            }
          </LegendImages>
        </LegendCategory>
        <LegendCategory>
          <p style={{color: "#00bb00"}}> Deseuri de sticla:</p>
          <LegendImages>
            {glassGarbage.map((url,index)=>
                <img src={url} alt={`garbage_${index}`} />)
            }
          </LegendImages>
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
            <ImageGarbage
              position={imgPosition}
              src={currentImage.url}
              ref={trashRef}
              alt=""
              key={currentImage.id}
              animationDuration={2 - currentLevel * 0.1}
              className={`slide-down`}
            />
          }
          <RecycleBin
            src={
              (currentBasket === 0 && cosPlastic) ||
              (currentBasket === 1 && cosMetal) ||
              (currentBasket === 2 && cosSticla) ||
              cos
            }
          />
          <h2>{
              (currentBasket === 0 && "PLASTIC") ||
              (currentBasket === 1 && "METAL") ||
              (currentBasket === 2 && "STICLA") ||
              ""
          }</h2>
        </GameViewContainer>
        <ButtonContainer>
          <h2 style={{ color: "white" }}>SELECTEAZA COSUL CORECT:</h2>
          <div>
            <Control ref={buttonOneRef} onClick={() => handleBasket(0)}>
              <img src={plastic} alt={"plastic bin"} onClick={() => handleBasket(0)} />
              <img className={"keyboard"} src={keyA} alt={"keyA"} onClick={() => handleBasket(0)} />

            </Control>
            <Control ref={buttonTwoRef} onClick={() => handleBasket(1)}>
              <img src={metal} alt={"metal bin"} onClick={() => handleBasket(1)} />
              <img className={"keyboard"} src={keyS} alt={"keyS"} onClick={() => handleBasket(1)} />
            </Control>
            <Control ref={buttonThreeRef} onClick={() => handleBasket(2)}>
              <img src={sticla} alt={"sticla bin"} onClick={() => handleBasket(2)} />
              <img className={"keyboard"} src={keyD} alt={"keyD"} onClick={() => handleBasket(2)} />
            </Control>
          </div>
        </ButtonContainer>
      </MainContainer>
    </GameWrapper>
  );
};
