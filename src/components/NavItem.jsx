import React, { useState } from "react";
import { Icon, ListItem } from "./styles/NavItem.styles";

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ListItem>
      <Icon onClick={handleClick}>{props.icon}</Icon>
      {open && props.children}
    </ListItem>
  );
}

export default NavItem;
