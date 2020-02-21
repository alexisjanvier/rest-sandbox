import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Api } from './Api';
import { Prism } from './Prism';

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
          <Route path="/api">
            <Api />
          </Route>
          <Route path="/">
            <Prism />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


