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
`;

interface startProps {
  useStartedGame: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Start = (props: startProps) => {
  return (
    <StatWrapper>
      <button onClick={() => props.useStartedGame(true)}>Play</button>
      <button>Help</button>
    </StatWrapper>
  );
};
