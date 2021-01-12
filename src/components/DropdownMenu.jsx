import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon } from "./styles/NavItem.styles";

import { CSSTransition } from "react-transition-group";

const DropDown = styled.div`
  box-sizing: content-box;
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translate(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;

  & .menu {
    width: 100%;
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    position: relative;
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-enter {
    position: absolute;
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    position: absolute;
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;

const StyledDDI = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 1rem;
  color: var(--text-color);
  cursor: pointer;
  &:hover {
    background-color: #525357;
  }
  & .left-icon {
    margin-right: 0.5rem;
  }
  & .right-icon {
    margin-left: auto;
  }
`;

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <StyledDDI
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <Icon className="left-icon">{props.leftIcon}</Icon>
        {props.children}
        {props.rightIcon && (
          <Icon className="right-icon">{props.rightIcon}</Icon>
        )}
      </StyledDDI>
    );
  }

  return (
    <DropDown style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon="😜">My Profile</DropdownItem>
          <DropdownItem leftIcon="😉" rightIcon=">" goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-secondary">
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="👈">
            <h1> Go Back</h1>
          </DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
          <DropdownItem leftIcon="✔">More Settings</DropdownItem>
        </div>
      </CSSTransition>
    </DropDown>
  );
}

export default DropdownMenu;
