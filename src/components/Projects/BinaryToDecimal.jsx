import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid ${props => (props.wrong ? "red" : "blue")};
  outline: none;
`;

function BinaryToDecimal() {
  const [B2D, setB2D] = useState(true);
  const [answer, setAnswer] = useState();
  const [inputValue, setInputValue] = useState("");
  const [wrong, setWrong] = useState(false);

  const toggle = () => {
    setAnswer("");
    setB2D(!B2D);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInputValue("");
    if (B2D) {
      setAnswer(parseInt(inputValue.trim(), 2));
    } else {
      setAnswer((inputValue >>> 0).toString(2));
    }
  };
  const handleChange = e => {
    const newCharacter = e.target.value[e.target.value.length - 1];
    if (B2D) {
      const value = newCharacter != 1 && newCharacter != 0;
      setWrong(value);
      if (value) {
        return;
      }
    } else {
    }
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>{!B2D ? "Decimal To Binary" : "Binary To Decimal"}</h1>
      <form onSubmit={handleSubmit}>
        <label for="number">
          Enter the {B2D ? "Binary" : "Decimal"} Number
        </label>
        <Input
          autoComplete="off"
          name="number"
          value={inputValue}
          onChange={handleChange}
          wrong={wrong}
        />
        <button type="submit">Convert</button>
      </form>
      <h1>Answer: {answer}</h1>
      <button onClick={toggle}>{B2D ? "To Binary" : "To Decimal"}</button>
    </div>
  );
}

export default BinaryToDecimal;
