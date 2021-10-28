import React, { useState } from 'react';
import styles from './app2.module.css';
// import logo from './assetmark.png';
// import bg from './Concord.png';
// import Switch from './Switch.js';
// import Toggle from './Toggle.js';
// import { Router, Route } from "react-router-dom";
// import ContactComp from './Components/ContactComp';
// import FooterComp from './Components/FooterComp';
// import { createBrowserHistory } from 'history';
 
function App() {
  // const [value, setValue] = useState(false);
  // const PID= (value===true)?478:479;
  // console.log(value===true?`Combined Selected , PID : ${PID}`: `Separated Selected , PID : ${PID}`)
  return (
    <div className={styles.app2}>
      <img src="https://www.advisorwebsites.com/hs-fs/hubfs/AWR%20Assets/Images/assetmark-cropped.png?width=960&height=397&name=assetmark-cropped.png" alt="Logo" width="100px" height="50px"></img>
      <div className={styles.about}>
      Reach out to us...
      </div>
      <div className={styles.para}>
      CONTACT US
      <hr/>
      Shareholders<br/>
      Taylor Hamilton, CFA<br/>
      Head of Investor Relations<br/>
      investorrelations@assetmark.com<br/>
      925-521-2273<br/>
      <br/>
      AssetMark Clients<br/>
      eservice@assetmark.com<br/>
      </div>
    </div>
  );
}
 
export default App;