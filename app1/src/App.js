import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About1 } from './components/About1';
import { info } from './components/info';
import { HomeApp1 } from './components/HomeApp1';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="card-header" >
        <ul className="nav nav-tabs card-header-tabs" style={{ marginTop: '-3.7rem', width: '105%' }}>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/about"> About </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about/info"> Info </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about/services"> Services </NavLink>
          </li>
        </ul>
      </div>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={About1} />
          <Route exact path="/about" component={About1} />
          <Route exact path="/about/info" component={info} />
          <Route exact path="/about/services" component={HomeApp1} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;