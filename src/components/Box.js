import React from 'react';
import '../App.css';

function Box({ id }) {
  const backgroundImage = id === 'box1' ? 'img/grill.png' : 'img/grill.png';

  return (
    <div className="box" id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {id === 'box1' && (
        <div className="scroll">
          <div className="scroll1"></div>
          <div className="scroll2"></div>
        </div>
      )}
    </div>
  );
}

export default Box;
