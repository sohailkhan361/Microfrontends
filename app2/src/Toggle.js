import React from 'react';
import './Toggle.css';

const Toggle = ({isOn }) => {

  var radios = document.getElementsByName('tab');
  // console.log(radios);
  return (
    <div>
        <ul className="tab">
          <li>
              <input id="tab1" defaultChecked={false} type="radio" name="tab" value={478}/>
              <label htmlFor="tab1">Combined</label>
          </li>
          <li>
              <input id="tab2" type="radio" name="tab" value={479} />
              <label htmlFor="tab2">Separated</label>
          </li>
        </ul>
      </div>
  );
};

export default Toggle;
