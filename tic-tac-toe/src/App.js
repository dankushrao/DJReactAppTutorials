import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Players from './components/Players';
import GameBoard from './components/GameBoard';
import GameLogs from './components/GameLogs';
import YouWonTheMatch from "./components/YouWonTheMatch";
import { WINNING_COMBINATIONS } from './components/winning-combinations';

const defaultBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  let gamebaord = [...defaultBoard.map(array => [...array])];
  const [gameturns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;
    gamebaord[row][col] = player;
  }
  let gameWinner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination = gamebaord[combination[0].row][combination[0].column];
    const secondCombination = gamebaord[combination[1].row][combination[1].column];
    const thirdCombination = gamebaord[combination[2].row][combination[2].column];
    if (firstCombination &&
      firstCombination === secondCombination &&
      firstCombination === thirdCombination) {
      gameWinner = players[firstCombination];
    }
  }

  const matchDrow = gameturns.length === 9 && !gameWinner;

  function updateActivePlayer(rowIndex, colIndex) {
    setActivePlayer((currActPlys) => currActPlys === "X" ? "O" : "X");
    setGameTurns(
      prevTurn => {
        let currentActPlayer = "X";
        if (prevTurn.length > 0 && prevTurn[0].player === "X") {
          currentActPlayer = "O";
        }
        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentActPlayer },
          ...prevTurn,
        ];
        return updatedTurns;
      });
  }

  function handleRestart() {
    setActivePlayer("X");
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, Name) {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: Name,
      }
    })
  }
  return (
    <main>
      <Header></Header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialName="Player 1" Symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange}></Players>
          <Players initialName="Player 2" Symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}></Players>
        </ol>
        {(gameWinner || matchDrow) && <YouWonTheMatch winner={gameWinner} callback={handleRestart} />}
        <GameBoard onSelectSquare={updateActivePlayer} gamebaord={gamebaord}></GameBoard>
      </div>
      <GameLogs gameturns={gameturns}></GameLogs>
    </main>

  );
}

export default App;
