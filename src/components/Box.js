import React, {useState} from 'react';
import '../App.css';

function Box({ id }) {
  const backgroundImage = id === 'box1' ? 'img/grill.png' : 'img/grill.png';
  const [isGlowing1, setIsGlowing1] = useState(false);
  const [isGlowing2, setIsGlowing2] = useState(false);
  const [isGlowing3, setIsGlowing3] = useState(false);

const handleScrollHandleClick = (handleNumber) => {
  if (handleNumber === 1) {
    setIsGlowing1(!isGlowing1);
  } else if (handleNumber === 2) {
    setIsGlowing2(!isGlowing2);
  } else if (handleNumber === 3) {
    setIsGlowing3(!isGlowing3);
  }
};

return (
  <div className="box" id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
    {id === 'box1' && (
      <div>
        <div className="scroll1">
          <img src="img/1.png" alt="Top Image" />
          <img src="img/2.png" alt="Bottom Image" />
          <div className={`scroll-handle-1 ${isGlowing1 ? 'glow-effect' : ''}`} onClick={() => handleScrollHandleClick(1)}></div>
          <div className={`scroll-handle-2 ${isGlowing2 ? 'glow-effect' : ''}`} onClick={() => handleScrollHandleClick(2)}></div>
        </div>
        <div className="scroll2">
          <img src="img/1.png" alt="Top Image" />
          <img src="img/2.png" alt="Bottom Image" />
          <div className={`scroll-handle-3 ${isGlowing3 ? 'glow-effect' : ''}`} onClick={() => handleScrollHandleClick(3)}></div>
            <div className="lights-text">LIGHTS</div>
        </div>
      </div>
    )}
  </div>
);
}

export default Box;
