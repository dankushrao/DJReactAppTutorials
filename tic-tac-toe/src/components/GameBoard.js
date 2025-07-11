import React from 'react';

export default function GameBoard({ onSelectSquare, gamebaord }) {

    return (
        <ol id="game-board">
            {gamebaord.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((player, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={player !== null}
                                >{player}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}