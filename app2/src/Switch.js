import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: '#0b64b4' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        >
            <div style={{fontFamily: 'Roboto', fontSize: '11px', marginLeft: '6px', color: 'white', wordSpacing: '8px', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '0.1px' }}>Combined  Separated</div>
        <span className={`react-switch-button`}>
            <div style={{fontFamily: 'Roboto', fontSize: '11px', marginTop: '4px', marginLeft: '5px' }}></div>
        </span>
      </label>

      
    </div>
  );
};

export default Switch;
