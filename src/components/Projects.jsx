import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const UL = styled.ul`
  display: grid;
`;

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <UL>
        <NavLink to={`${process.env.PUBLIC_URL}/projects/1`}>
          Binary To Decimal Conveter
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/projects/2`}>
          Border Radius Previewer
        </NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/projects/3`}>
          Christmas Lights
        </NavLink>
      </UL>
    </div>
  );
}

export default Projects;
