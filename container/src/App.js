import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import styles from './container.module.css';
import logo from './assetmark_logo.png';
import { createBrowserHistory } from "history";
import "./App.css";
 
const defaultHistory = createBrowserHistory();

const {
  REACT_APP_APP1_HOST: aboutHost,
  REACT_APP_APP2_HOST: contactHost,
} = process.env;
 
function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title"> MICRO FRONTEND APPLICATION </h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <img className={styles.imglogo} src={logo} alt="logo here"></img>
    </div>
  );
}

function About({ history }) {
  return <MicroFrontend history={history} host={aboutHost} name="About" />;
}
 
function Contact({ history }) {
  return <MicroFrontend history={history} host={contactHost} name="Contact" />;
}
 
function Home({ history }) {

  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/${input}`);
    window.location.reload(false);

  };

  return (
    <div>
      <div className={styles.Form}>
          <input
          type="text"
          name="input"
          placeholder="Enter route here" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.button} onClick={handleOnClick}>Go</button>
      </div>
    </div>
  );
}
 
function App({ history = defaultHistory }) {

      <div className={styles.nav}>
        <Link to=""> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>

  return (
    <React.Fragment>
    <div className={styles.head}>
      <Header/>
    </div>

    <BrowserRouter>

        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to=""> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact </NavLink>
            </li>
            <li>
            <form action="/action_page.php" className={styles.searchf} >
              <input className={styles.search} type="text" placeholder="Search..." name="search"/>
              <button className={styles.submit} type="submit">Search<i className={styles.fasearch}></i></button>
            </form>
            </li>

          </ul>
          </div>

      <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <Home history={history} />} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Switch>
      </React.Fragment>
    </BrowserRouter>

    <div className={styles.foot}>
      <Footer/>
    </div>

    </React.Fragment>
  );
}

export default App;