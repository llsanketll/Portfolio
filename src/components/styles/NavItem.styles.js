import styled from "styled-components";

export const ListItem = styled.li`
 width: calc(var(--nav-size) * 0.8) ;
 display:flex;
 align-items: center;
 justify-content: center;
`;

export const Icon = styled.a`
--button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  &:hover{
    filter: brightness(1.2);
    cursor: pointer;
  }

  & svg{
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`;
