import React, { useState } from 'react';
import './welcomeScreen.css'

const Card = () => {
    const [flipped, setFlipped] = useState(false);
    
    const handleMouseOver = () => {
      setFlipped(true);
    };
    
    const handleMouseLeave = () => {
      setFlipped(false);
    };
    
    return (
      <div
        className={`card ${flipped ? 'flipped' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      > ппппп
      </div>
    );
  };
  
const WelcomeScreen = () => {
    const cardsCount = Array.from({ length: 36 }, (_, index) => index);

    return (
        <div className="welcomeScreen">
            <div className="card-container">
                {cardsCount.map((index) => (
                    <Card key={index} index={index} /> 
                ))}
            </div>
        </div>
    )   
}

export default WelcomeScreen