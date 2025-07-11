import React from 'react';
import reactImg from '../assets/game-logo.png';
export default function YouWonTheMatch({ winner, callback }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>Congrats! {winner}! You Won!</p>}
            {!winner && <p>Match Drawn! Try Again!</p>}
            <p>
                <button onClick={callback}> Rematch!!</button>
            </p>
        </div>
    );
}