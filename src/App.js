import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Otherpage from './pages/Otherpage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/otherpage"}>Otherpage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/dashboard"}>
            <Dashboard />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/otherpage"}>
            <Otherpage />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
