import React from 'react';
import '../App.css';

function Box({ id }) {
  const backgroundImage = id === 'box1' ? 'img/grill.png' : 'img/grill.png';

  return (
    <div className="box" id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {id === 'box1' && (
        <div>
          <div className="scroll1">
            <img src="img/1.png" alt="Top Image" />
            <img src="img/2.png" alt="Bottom Image" />
            <div className="scroll-handle-1"></div>
            <div className="scroll-handle-2"></div>
            <div className="scroll-handle-circle"></div>
          </div>
          <div className="scroll2">
            <img src="img/1.png" alt="Top Image" />
            <img src="img/2.png" alt="Bottom Image" />
            <div className="scroll-handle-3"></div>
              <div className="lights-text">LIGHTS</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Box;
