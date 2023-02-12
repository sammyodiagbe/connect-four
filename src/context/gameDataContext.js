import { createContext, useState } from "react";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
  ]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [screenSize, setScreenSize] = useState();

  const play = (x) => {
    // let;
    console.log("playing at ", x);
    const newBoard = [...gameBoard];
    if (newBoard[0][x] !== 0) return;
    let y = 5;
    while (y >= 0) {
      if (newBoard[y][x] === 0) {
        newBoard[y][x] = playerTurn;
        if (playerTurn == 1) {
          setPlayerTurn(2);
        } else {
          setPlayerTurn(1);
        }
        setGameBoard(newBoard);
        return;
      }
      y -= 1;
    }
    console.log(gameBoard);
    // check to see if game is over
  };

  const checkWinner = (y, x) => {
    // horizontal right and left
    const horizontalRight = [
      gameBoard[y][x + 1] || -1,
      gameBoard[x + 2] || -1,
      gameBoard[y][x + 3] || -1,
    ];
    const horizontalLeft = [
      gameBoard[y][x - 1] || -1,
      gameBoard[y][x - 2] || -1,
      gameBoard[y][x - 3] || -1,
    ];

    // vertical top and bottom
    const verticalTop = [
      gameBoard[y - 1][x] || -1,
      gameBoard[y - 2][x] || -1,
      gameBoard[y - 3][x] || -1,
    ];
    const verticalBottom = [
      gameBoard[y + 1][x] || -1,
      gameBoard[y + 2][x] || -1,
      gameBoard[y + 3][x] || -1,
    ];

    // diagonals

    const diagonalUpRight = [
      gameBoard[y - 1][x + 1] || -1,
      gameBoard[y - 1][x + 2] || -1,
      gameBoard[y - 1][x + 3] || -1,
    ];
    const diagonalUpLeft = [
      gameBoard[y - 1][x - 1] || -1,
      gameBoard[y - 1][x - 2] || -1,
      gameBoard[y - 1][x - 3] || -1,
    ];
    const diagonalDownRight = [
      gameBoard[y + 1][x + 1] || -1,
      gameBoard[y + 1][x + 2] || -1,
      gameBoard[y + 1][x + 3] || -1,
    ];
    const diagonalDownLeft = [
      gameBoard[y + 1][x - 1] || -1,
      gameBoard[y + 1][x - 2] || -1,
      gameBoard[y + 1][x - 3] || -1,
    ];
  };

  return (
    <gameContext.Provider
      value={{ gameBoard, playerTurn, setGameBoard, setPlayerTurn, play }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
