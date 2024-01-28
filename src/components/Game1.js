import React, { useState, useEffect } from 'react';
import '../App.css';

const Game = () => {
  const [diceContainer, setDiceContainer] = useState([]);
  const NUMBER_OF_DICE = 1;

  useEffect(() => {
    randomizeDice();
  }, []); 

  const createDice = (number) => {
    const dotPositionMatrix = {
      1: [[50, 50]],
      2: [[20, 20], [80, 80]],
      3: [[20, 20], [50, 50], [80, 80]],
      4: [[20, 20], [20, 80], [80, 20], [80, 80]],
      5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
      6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
    };

    return (
      <div key={number} className="dice">
        {dotPositionMatrix[number].map((dotPosition, index) => (
          <div
            key={index}
            className="dice-dot"
            style={{
              '--top': `${dotPosition[0]}%`,
              '--left': `${dotPosition[1]}%`,
            }}
          ></div>
        ))}
      </div>
    );
  };

  const randomizeDice = () => {
    const diceArray = Array.from({ length: NUMBER_OF_DICE }, (_, index) => {
      const random = Math.floor(Math.random() * 6) + 1;
      return createDice(random);
    });

    setDiceContainer(diceArray);
  };

  const handleRollDice = () => {
    const interval = setInterval(() => {
      randomizeDice();
    }, 50);

    setTimeout(() => clearInterval(interval), 1000);
  };

  return (
    
    <div className='player1'>Player 1
      <div className="dice-container">{diceContainer}</div>
      <button type="button" className="btn-roll-dice" onClick={handleRollDice}>
        Roll Dice 
      </button>
    </div>

    
  );
};

export default Game;
