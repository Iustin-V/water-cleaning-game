import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import can from "../images/can.png"
import tire from "../images/tire.png"

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

`
const LegendContainer = styled.div`
  width: 25%;
  height: 90%;
  background-color: yellow;
`
const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
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
  transform: translate(-50%,-50%);
`
const Control = styled.div`
  z-index: 2;
  height: 50%;
  width: 20%;
  border-radius: 25px;
  background-color: darkgrey;
  :hover {
    background-color: dimgrey;
  }
`
const Image =styled.img<{position:number}>`
width: 50px;
  position: absolute;
  top:100%;
  visibility: hidden;
  left: ${props => props.position}%;
`
export const Game = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [gameStarted, setGameStarted] = React.useState(false)
    const ImageSlider = ( imageUrls:string[], displayTime:number) => {

        const [images, setImages] = useState([]);

        useEffect(() => {
            const timerId = setTimeout(() => {
                const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
                // @ts-ignore
                setImages([...images, imageUrl]);

                setTimeout(() => {
                    setImages(images.slice(1));
                }, displayTime);
            }, displayTime);

            return () => clearTimeout(timerId);
        }, [images, imageUrls, displayTime]);

        return (
            <div className="image-slider">
                {images.map((imageUrl, index) => (
                    <Image position={Math.floor(Math.random() * 80)} src={imageUrl} alt="" key={index}
                           className="slide-down"/>
                ))}
            </div>
        );
    };


    let imageUrls=[can,tire,can,tire]



    return <GameWrapper>

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
                }>
                {!gameStarted && <StartButton
                    onClick={() => {
                        setGameStarted(true)
                    }}

                >START</StartButton> }
                {ImageSlider(imageUrls, 3000)}

            </GameViewContainer>
            <ButtonContainer>
                <Control></Control>
                <Control></Control>
                <Control></Control>
            </ButtonContainer>

        </MainContainer>

    </GameWrapper>
}