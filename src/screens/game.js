import { useContext } from "react";
import { gameContext } from "../context/gameDataContext";

const GameScreen = () => {
  const dataContext = useContext(gameContext);
  const numberOfRows = 7;

  const numberOfCols = 6;
  return (
    <div className="game-screen">
      <div className="board">
        <div className="board-top">
          <div className="board-row">
            <div className="disc r item-1"></div>
            <div className="disc y item-2"></div>
            <div className="disc y item-3"></div>
            <div className="disc r item-4"></div>
            <div className="disc y item-5"></div>
            <div className="disc y item-6"></div>
          </div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
        </div>
        <div className="board-back"></div>
      </div>
    </div>
  );
};

export default GameScreen;
