import React from "react";
import { NavLink } from "react-router-dom";
function Portfolio(props) {
  const goToProject = id => {
    props.history.push(`${process.env.PUBLIC_URL}/projects/${id}`);
  };
  return (
    <div>
      <NavLink to={`${process.env.PUBLIC_URL}/projects`}>
        <h1>Projects</h1>
      </NavLink>
    </div>
  );
}

export default Portfolio;
