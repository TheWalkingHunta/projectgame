// App.js
import React from 'react';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="center-content">
        <h1>Welcome to the Dice Rolling Game!</h1>
        <p>Press the button to roll the dice:</p>
        <Game1 /><Game2 />
        <footer>
          <p>Created with React by Nurmukhan Samgar</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
