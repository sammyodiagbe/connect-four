import { createContext, useEffect, useState } from "react";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameEnded, setGameHasEnded] = useState(false);
  const [timer, setTimer] = useState(15);
  const [playerOnePoint, setPlayerOnePoint] = useState(0);
  const [playerTwoPoint, setPlayerTwoPoint] = useState(0);

  const [roundWinner, setRoundWinner] = useState(null);

  useEffect(() => {
    if (gameEnded) {
      console.log("game has ended");
      console.log(playerTurn);
      setRoundWinner(playerTurn);
      console.log(roundWinner);
      if (playerTurn == 1) {
        setPlayerOnePoint(playerOnePoint + 1);
        setPlayerTurn(2);
      } else {
        setPlayerTwoPoint(playerTwoPoint + 1);
        setPlayerTurn(1);
      }
    }
  }, [gameEnded]);

  const play = (x) => {
    if (gameEnded) return;
    const newBoard = [...gameBoard];
    if (newBoard[0][x] !== 0) return;
    let y = 5;
    while (y >= 0) {
      if (newBoard[y][x] === 0) {
        newBoard[y][x] = playerTurn;

        setGameBoard(newBoard);
        const checkwin = checkWinner(y, x);
        if (checkwin) {
          setGameHasEnded(checkwin);
        } else {
          if (playerTurn == 1) {
            setPlayerTurn(2);
          } else {
            setPlayerTurn(1);
          }
        }
        return;
      }
      y -= 1;
    }

    // check to see if game is over
  };

  const checkWinner = (y, x) => {
    const horizontalRight = [
      validValue(y, x + 1),
      validValue(y, x + 2),
      validValue(y, x + 3),
    ];
    const horizontalLeft = [
      validValue(y, x - 1),
      validValue(y, x - 2),
      validValue(y, x - 3),
    ];

    // vertical top and bottom
    const verticalTop = [
      validValue(y - 1, x),
      validValue(y - 2, x),
      validValue(y - 3, x),
    ];
    const verticalBottom = [
      validValue(y + 1, x),
      validValue(y + 2, x),
      validValue(y + 3, x),
    ];

    // diagonals

    const diagonalUpRight = [
      validValue(y - 1, x + 1),
      validValue(y - 1, x + 2),
      validValue(y - 1, x + 3),
    ];
    const diagonalUpLeft = [
      validValue(y - 1, x - 1),
      validValue(y - 1, x - 2),
      validValue(y - 1, x - 3),
    ];
    const diagonalDownRight = [
      validValue(y + 1, x + 1),
      validValue(y + 2, x + 2),
      validValue(y + 3, x + 3),
    ];
    const diagonalDownLeft = [
      validValue(y + 1, x - 1),
      validValue(y + 2, x - 2),
      validValue(y + 3, x - 3),
    ];

    const checkValue = (y, x, arr) => {
      const value = gameBoard[y][x];
      const won = arr.every((a) => a == value);
      return won;
    };

    const win =
      checkValue(y, x, horizontalLeft) ||
      checkValue(y, x, verticalBottom) ||
      checkValue(y, x, verticalTop) ||
      checkValue(y, x, diagonalDownLeft) ||
      checkValue(y, x, diagonalDownRight) ||
      checkValue(y, x, diagonalUpLeft) ||
      checkValue(y, x, diagonalUpRight) ||
      checkValue(y, x, horizontalRight);

    return win;
  };

  const resetGame = () => {
    resetBoard();
    setPlayerTurn(1);
    setPlayerOnePoint(0);
    setPlayerTwoPoint(0);
    setGameHasEnded(false);
    setRoundWinner(null);
  };

  const resetBoard = () => {
    const newboard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    setGameBoard(newboard);
  };

  const playAgain = () => {
    setGameHasEnded(false);
    resetBoard();
    setRoundWinner(null);
  };

  const validValue = (y, x) => {
    try {
      const board = [...gameBoard];
      const entry =
        board[y] != undefined
          ? board[y][x] != undefined
            ? board[y][x]
            : -1
          : -1;
      if (entry === undefined || entry === null) {
        return -1;
      }
      return entry;
    } catch (err) {}
  };

  return (
    <gameContext.Provider
      value={{
        gameBoard,
        playerTurn,
        setGameBoard,
        setPlayerTurn,
        play,
        timer,
        playerOnePoint,
        playerTwoPoint,
        gameEnded,
        resetGame,
        playAgain,
        roundWinner,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
