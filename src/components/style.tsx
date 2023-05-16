import styled from "styled-components";

export const GameWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
`;
export const MainContainer = styled.div`
  display: flex;
  height: 90%;
  width: 45%;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const GameViewContainer = styled.div`
  width: 100%;
  height: 75%;
  background-color: #18586bf0;
  overflow: hidden;
  position: relative;
  border: 3px solid black;
  border-radius: 20px;
  >h2 {
    position: absolute;
    font-size: 30px;
    color: white;
    text-align: center;
    bottom: 3%;
    left: 50%;
    z-index: 20;
    transform: translateX(-50%);
  }
`;
export const LegendContainer = styled.div`
  width: 25%;
  height: 90%;
  background-color: rgba(103, 103, 103, 0.82);
  border: 3px solid black;
  border-radius: 20px;
`;
export const ButtonContainer = styled.div`
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
export const StartButton = styled.button`
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
export const Control = styled.div`
  position: relative;
  z-index: 2;
  height: 80%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  >.keyboard {
    transition: 0.2s ease-in;
    height: 45%;
    bottom: -20px;
    position: absolute;
    object-fit: contain;
    -webkit-user-drag: none;
  }
  > img {
    transition: 0.2s ease-in;
    height: 80%;
    object-fit: contain;
    -webkit-user-drag: none;
  }
`;
export const ImageGarbage = styled.img<{ position: number; animationDuration?: number }>`
  height: 50px;
  object-fit: contain;
  position: absolute;
  color: red;
  animation-duration: ${(props) => props.animationDuration}s !important;
  top: 100%;
  visibility: hidden;
  z-index: 20;
  left: ${(props) => props.position}%;
  transform: rotate(${(props) => props.position}deg);
`;


export const LivesContainer = styled.div`
  top: 15px;
  right: 15px;
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 12px;
  z-index: 51;
`;
export const ScoreContainer = styled.div`
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
export const Heart = styled.img`
  width: 24px;
  z-index: 51;
`;
export const WaterEffect = styled.img`
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

export const Catch = styled.div`
  bottom: 20px;
  color: white;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const LegendCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 25px;
  }
`;

export const RecycleBin = styled.img`
  width: 100%;
  position: absolute;
  bottom: -85px;
  left: 0;
  object-fit: contain;
  z-index: 19;
`;

export const LegendImages=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 20px;
  row-gap: 10px;
  padding: 0 30px;
  >img {
    height: 50px;
    object-fit: contain;
  }
`