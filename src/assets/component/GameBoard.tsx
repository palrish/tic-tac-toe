import { on } from "events";
import { useState } from "react";

// const board = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard(props: any) {
  //   let gameBoard = [...board];
  //   console.log(props.turns);
  //   for (const turn of props.turns) {
  //     const { cell, player } = turn;
  //     const { row, col } = cell;
  //     gameBoard[row][col] = player;
  //   }
  //   const [gameBoard, setGameBoard] = useState<any>(board);
  //   const handleBoardCell = (rowInd: any, colInd: any) => {
  //     setGameBoard((gameBoard: any) => {
  //       const updatedBoard = [...gameBoard];
  //       updatedBoard[rowInd][colInd] = props.activePlayer;
  //       return updatedBoard;
  //     });
  //     props.onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {props.gameBoard.map((row: any, rowInd: any) => (
        <li key={rowInd}>
          <ol>
            {row.map((playerSymbol: any, colInd: any) => (
              <button
                key={colInd}
                onClick={() => props.onSelectSquare(rowInd, colInd)}
                disabled={playerSymbol === null ? false : true}
              >
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
