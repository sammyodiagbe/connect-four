import { useContext } from "react";
import Seed from "../components/seed";
import { gameContext } from "../context/gameDataContext";

const GameScreen = () => {
  const dataContext = useContext(gameContext);
  const { gameBoard } = dataContext;
  const numberOfRows = 7;

  const numberOfCols = 6;

  console.log(gameBoard[5][0]);

  return (
    <div className="game-screen">
      <div className="board">
        <div className="board-top">
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][0]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][0]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][0]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][0]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][0]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][0]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][1]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][1]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][1]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][1]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][1]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][1]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][2]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][2]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][2]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][2]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][2]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][2]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][3]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][3]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][3]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][3]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][3]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][3]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][4]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][4]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][4]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][4]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][4]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][4]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][5]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][5]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][5]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][5]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][5]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][5]} />
            </div>
          </div>
          <div className="board-row">
            <div className="disc r item-1">
              <Seed entry={gameBoard[5][6]} />
            </div>
            <div className="disc y item-2">
              <Seed entry={gameBoard[4][6]} />
            </div>
            <div className="disc y item-3">
              <Seed entry={gameBoard[3][6]} />
            </div>
            <div className="disc r item-4">
              <Seed entry={gameBoard[2][6]} />
            </div>
            <div className="disc y item-5">
              <Seed entry={gameBoard[1][6]} />
            </div>
            <div className="disc y item-6">
              <Seed entry={gameBoard[0][6]} />
            </div>
          </div>
        </div>
        <div className="board-back"></div>
      </div>
    </div>
  );
};

export default GameScreen;
