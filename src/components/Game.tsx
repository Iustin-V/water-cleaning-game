
import styled from 'styled-components';


const GameWrapper=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap :40px
`
const MainContainer=styled.div`
  display: flex;  
  height: 90%;
  width: 45%;
  gap :40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const GameViewContainer= styled.div`
  width: 100%;
  height: 75%;
  background-color: deepskyblue;
  
`
const LegendContainer=styled.div`
  width: 25%;
  height: 90%;
  background-color: yellow;
`
const ButtonContainer=styled.div`
  width: 100%;
  height: 20%;
  background-color: red;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  
`
const Control=styled.div`
  z-index: 2;
  height: 50%;
  width: 20%;
  border-radius: 25px;
  background-color: darkgrey;
  :hover{
    background-color: dimgrey;  
  }
`
export const Game= ()=>{

    return <GameWrapper>

        <LegendContainer></LegendContainer>

        <MainContainer>
    <GameViewContainer>
    </GameViewContainer>
            <ButtonContainer>
<Control></Control>
<Control></Control>
<Control></Control>
            </ButtonContainer>

        </MainContainer>

    </GameWrapper>
}