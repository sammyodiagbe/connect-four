import { createContext, useState } from "react";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0, 0],
    [2, 2, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0, 0],
  ]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [screenSize, setScreenSize] = useState();

  return (
    <gameContext.Provider
      value={{ gameBoard, playerTurn, setGameBoard, setPlayerTurn }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
