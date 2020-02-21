import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Api } from './Api';
import { Prism } from './Prism';
import { PlayerPrism } from './PlayerPrism';
import { PlayerApi } from './PlayerAPI';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Prism API</Link>
            </li>
            <li>
              <Link to="/api">Express API</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/api">
            <Api />
          </Route>
          <Route exact path="/api/player/:playerId" component={PlayerApi as any}></Route>
          <Route exact path="/player/:playerId" component={PlayerPrism as any}></Route>
          <Route path="/">
            <Prism />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


