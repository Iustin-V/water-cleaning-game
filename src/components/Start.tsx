import styled from "styled-components";
import React from "react";

const StatWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  > div >button {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    background: green;
    border: none;
    border-radius: 20px;
    padding: 16px 32px;
    margin:12px;

    :hover {
      background: #388638;
      cursor: pointer;
    }
  }
  @media (max-width: 1200px){
    gap: 20px;
    >div>button {
      font-size: 25px;
      padding: 12px 24px;
    }
  }
`;
const HelpButton =styled.button`
  display: none;
@media(max-width:1200px){
  display: block;
}
`
const StartInfo=styled.div`
max-width: 700px;
  text-transform: uppercase;
  color:white;
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 1);
  >h1 {
    margin-bottom: 40px;
    font-size: 60px;
  }
  >h3{
    font-size: 25px;
  }
  @media(max-width:1200px){
    padding: 0 20px;
    >h1 {
      margin-bottom: 20px;
      font-size: 30px;
    }
    >h3{
      font-size: 15px;
    }
  }
`

interface startProps {
  useStartedGame: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Start = (props: startProps) => {
  return (
    <StatWrapper>
        <StartInfo>
            <h1>TINE APELE CURATE</h1>
            <h3>Poluarea apei este o problema majora in Romania, afectand raurile, lacurile si chiar si apele subterane. Industria, agricultura si infrastructura urbana sunt principalele surse de poluare, iar acest lucru poate duce la efecte negative asupra sanatatii umane si a mediului inconjurator.</h3>
            <h3>
                Colectarea selectiva a deseurilor este importanta pentru protectia mediului si pentru a reduce impactul negativ al deseurilor asupra sanatatii oamenilor si a ecosistemelor.</h3>
        </StartInfo>
        <div>
            <button onClick={() => props.useStartedGame(true)}>Play</button>
            <HelpButton>Help</HelpButton>
        </div>
    </StatWrapper>
  );
};
