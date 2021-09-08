import React from 'react';
import '../App.css';
import '../css/HeroSection.css';
import vid1 from '../videos/VID1.mp4';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid1} autoPlay loop muted />
      <h1>Welcome to Car Zone!</h1>
      <p>Car Zone Supplying Great Cars at Great Prices.</p>
      <div className='hero-btns'>
        
      </div>
    </div>
  );
}

export default HeroSection;
