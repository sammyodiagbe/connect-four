import { createContext, useState } from "react";

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
  let gameTimerInterval;

  const play = (x) => {
    // let;
    console.log(gameEnded);
    if (gameEnded) return;
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
        setGameHasEnded(checkWinner(y, x));
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

  const startGameTimer = () => {
    gameTimerInterval = setInterval(() => {
      setTimer(timer - 1);
      console.log("hello world", timer);
    }, 1000);
  };
  // console.log(timer);
  // if (timer <= 0) {
  //   // clear the interval
  //   clearInterval(gameTimerInterval);
  //   gameTimerInterval = null;
  //   console.log("timer has ended");
  // }
  // startGameTimer();

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
        startGameTimer,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
