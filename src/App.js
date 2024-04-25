import React from 'react';
import './App.css';
import Box from './components/Box';
import VerticalDivider from './components/VerticalDivider';

function App() {
  return (
    <div className="page">
      <Box id="box1" />
      <VerticalDivider />
      <Box id="box2" />
    </div>
  );
}

export default App;
