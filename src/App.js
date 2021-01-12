import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import DropdownMenu from "./components/DropdownMenu";
import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem"
import BinaryToDecimal from './components/Projects/BinaryToDecimal';
import BorderRadius from './components/Projects/BorderRadius';
import ChristmasLights from './components/Projects/ChristmasLights';




function App() {
  return (
    <main className="App">
      <Router>
        <header className="App-header">
          <NavBar>
            <NavItem icon="⬇">
              <DropdownMenu />
            </NavItem>
          </NavBar>
        </header>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={routeProps => (
              <Portfolio {...routeProps} />
            )} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects"}
            render={routeProps => (<Projects {...routeProps} />)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects/1"}
            render={routeProps => (<BinaryToDecimal {...routeProps} />)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects/2"}
            render={routeProps => (<BorderRadius {...routeProps} />)}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects/3"}
            render={routeProps => (<ChristmasLights {...routeProps} />)}
          />

        </Switch>
      </Router>
    </main>
  );
}


export default App;
