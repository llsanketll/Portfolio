import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./styles/NavBar.styles";

function NavBar(props) {
  return (
    <Nav>
      <NavLink to={`${process.env.PUBLIC_URL}/`}>
        <h1>Home</h1>
      </NavLink>
      <ul>{props.children}</ul>
    </Nav>
  );
}

export default NavBar;
