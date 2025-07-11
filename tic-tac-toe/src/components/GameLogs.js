import React from 'react';
import reactImg from '../assets/game-logo.png';
export default function GameLogs({ gameturns }) {
   return (
      <ol id="log">
         {gameturns.map(
            (turn) => (
               <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} Selected {turn.square.row},{turn.square.col}
               </li>
            ))};
      </ol>
   );
}