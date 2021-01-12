import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const LightBulb = styled.div`
  position: relative;
  margin: 1rem;
  width: 20px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
  transition: background 1s ease;
  animation: ${props => `glow-${props.index} ${props.speed}s`} infinite;
  animation: ${props => !props.blink && "none"};
  background-color: ${props => !props.blink && "gray"};

  @keyframes ${props => `glow-${props.index}`} {
    0%,
    100% {
      filter: ${props =>
        props.index % 2 === 0 ? "brightness(0.5)" : `brightness(1.5)`};
      box-shadow: ${props =>
        props.index % 2 === 0 ? "none" : `0 0 20px 5px ${props.color}`};
    }
    50% {
      filter: ${props =>
        props.index % 2 !== 0 ? "brightness(0.5)" : `brightness(1.5)`};
      box-shadow: ${props =>
        props.index % 2 !== 0 ? "none" : `0 0 20px 5px ${props.color}`};
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 10px;
    height: 20px;
    transform: translate(-50%, -50%);
    background-color: #1d1e22;
  }
`;

function ChristmasLights() {
  const [isBlinking, setIsBlinking] = useState(true);
  const [inputValue, setInputValue] = useState("1");
  const colors = [
    "#C0392B",
    "#F1C40F",
    "#64FCFE",
    "#e366f3",
    "#5bff8c",
    "#F70094",
  ];
  return (
    <Container>
      {colors.map((c, i) => (
        <LightBulb
          color={c}
          key={i}
          index={i}
          blink={isBlinking}
          speed={inputValue}
        />
      ))}
      <div>
        <input
          type="number"
          min="1"
          max="5"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <button onClick={() => setIsBlinking(!isBlinking)}>Blink</button>
      </div>
    </Container>
  );
}
export default ChristmasLights;
