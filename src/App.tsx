import React, { useState } from "react";
import Player from "./assets/component/player";
import GameBoard from "./assets/component/GameBoard";
import Log from "./assets/component/Log";
import { WINNING_COMBINATIONS } from "./assets/winningCombinations.js";
import GameOver from "./assets/component/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getActivePlayer = (turns: any) => {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const getWinner = (gameBoard: any) => {
  let winner = null;

  for (const winningCombinations of WINNING_COMBINATIONS) {
    const cell1 =
      gameBoard[winningCombinations[0].row][winningCombinations[0].column];
    const cell2 =
      gameBoard[winningCombinations[1].row][winningCombinations[1].column];
    const cell3 =
      gameBoard[winningCombinations[2].row][winningCombinations[2].column];
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
      winner = cell1;
    }
  }
  return winner;
};

const getGameBoard = (gameTurns: any) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { cell, player } = turn;
    const { row, col } = cell;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};

export default function App() {
  // const [activePlayer, setActivePlayer] = useState<any>("X");
  const [players, setPlayers] = useState<any>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<any>([]);
  const gameBoard = getGameBoard(gameTurns);

  let winner = getWinner(gameBoard);
  if (gameTurns.length === 9 && !winner) {
    winner = "Draw";
  }

  let activePlayer = getActivePlayer(gameTurns);
  const handleSelectSquare = (rowInd: any, colInd: any) => {
    // setActivePlayer((activePlayer: any) => (activePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns: any) => {
      let currentPlayer = getActivePlayer(prevTurns);
      let updatedTurns = [
        {
          cell: { row: rowInd, col: colInd },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleRematch = () => {
    console.log("clicked");
    setGameTurns((prevTurns: any) => {
      let updatedTurns: any = [];
      return updatedTurns;
    });
  };

  const handlePlayerName = (symbol: any, name: any) => {
    setPlayers((current: any) => {
      return {
        ...current,
        [symbol]: name,
      };
    });
    console.log(players);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            handlePlayerName={handlePlayerName}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            handlePlayerName={handlePlayerName}
          />
        </ol>
        {winner && (
          <GameOver
            winner={winner}
            handleRematch={handleRematch}
            players={players}
          />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
