// App.js

import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import VerticalDivider from './components/VerticalDivider';

function App() {
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const handleClick = (button) => {
    if (button === 'left') {
      setLeftClicked(true);
      setTimeout(() => setLeftClicked(false), 300);
    } else if (button === 'right') {
      setRightClicked(true);
      setTimeout(() => setRightClicked(false), 300); 
    }
  };

  return (
    <div className="page">
      <Box id="box1" />
      <VerticalDivider />
      <Box id="box2" />
      <div id="box2-buttons">
        <button className={leftClicked ? "left-button clicked" : "left-button"} onClick={() => handleClick('left')}>
          <img src="img/3a.png" alt="Left" />
        </button>
        <div className="button-text">SERCE SETTINGS</div>
        <button className={rightClicked ? "right-button clicked" : "right-button"} onClick={() => handleClick('right')}>
          <img src="img/3b.png" alt="Right" />
        </button>
      </div>
    </div>
  );
}

export default App;
