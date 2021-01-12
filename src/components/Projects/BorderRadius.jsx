import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  max-height: 50vh;
  display: grid;
  place-content: center;

  form {
    position: fixed;
    top: 80vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    display: grid;
    place-content: center;
  }
`;
const Box = styled.div.attrs(props => ({
  style: {
    border: props.border,
    borderRadius: props.radius,
  },
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 5rem;
`;

function BorderRadius() {
  const [inputs, setInputs] = useState({
    stroke: 1,
    type: "solid",
    color: "#20df40",
    radius: 10,
    size: 50,
  });
  return (
    <Container>
      <div>
        <Box
          width={`${inputs.size}px`}
          height={`${inputs.size}px`}
          border={`${inputs.stroke}px ${inputs.type} ${inputs.color}`}
          radius={`${inputs.radius}%`}
        />
      </div>
      <form>
        <label>Size</label>
        <input
          type="range"
          min="50"
          max="200"
          value={inputs.size}
          onChange={e => setInputs({ ...inputs, size: e.target.value })}
        />
        <label>Stroke</label>
        <input
          type="range"
          min="1"
          max="50"
          value={inputs.stroke}
          onChange={e => setInputs({ ...inputs, stroke: e.target.value })}
        />

        <label>Radius</label>
        <input
          type="range"
          min="1"
          max="50"
          value={inputs.radius}
          onChange={e => setInputs({ ...inputs, radius: e.target.value })}
        />
        <label>Color</label>
        <input
          type="color"
          value={inputs.color}
          onChange={e => setInputs({ ...inputs, color: e.target.value })}
        />
        <select
          value={inputs.type}
          onChange={e => setInputs({ ...inputs, type: e.target.value })}>
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="outset">Outset</option>
          <option value="inset">Inset</option>
        </select>
      </form>
    </Container>
  );
}

export default BorderRadius;
