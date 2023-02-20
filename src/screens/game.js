import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationbar";
import PlacementIndicator from "../components/placementIndicator";
import PlayerOne from "../components/playerOne";
import PlayerTwo from "../components/playerTwo";
import Seed from "../components/seed";
import { gameContext } from "../context/gameDataContext";

const GameScreen = () => {
  const [timer, setTimer] = useState(15);
  const [showMenu, setShowMenu] = useState(false);
  const dataContext = useContext(gameContext);
  const navigate = useNavigate();
  const {
    gameBoard,
    play,
    playerTurn,
    playerOnePoint,
    playerTwoPoint,
    setPlayerTurn,
    resetGame,
    playAgain,
    gameEnded,
    roundWinner,
  } = dataContext;
  // const numberOfRows = 7;

  // const numberOfCols = 6;

  useEffect(() => {
    if (gameEnded) return;
    if (!showMenu) {
      const id = setInterval(() => {
        if (timer <= 0) {
          // switch the user
          if (playerTurn === 1) {
            setPlayerTurn(2);
          } else {
            setPlayerTurn(1);
          }
          setTimer(15);
          return;
        }
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [timer, showMenu, gameEnded]);

  const playToColumn = (event) => {
    let { x } = event.target.dataset;
    x = parseInt(x);
    play(x);
    setTimer(15);
  };

  return (
    <>
      <NavigationBar showMenu={setShowMenu} />
      <div className="game-screen">
        <main className="main-content">
          <div className="game">
            <div className="player-content player">
              <PlayerOne />
              <b>player 1</b>
              <h1>{playerOnePoint}</h1>
            </div>
            <div className="board">
              <div className="board-top">
                <div className="board-row" data-x="0" onClick={playToColumn}>
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
                <div className="board-row" data-x="1">
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
                <div className="board-row" data-x="2">
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
                <div className="board-row" data-x="3">
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
                <div className="board-row" data-x="4">
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
                <div className="board-row" data-x="5">
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
                <div className="board-row" data-x="6">
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
              <div className="board-back">
                <button
                  className="button"
                  data-x={0}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={1}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={2}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={3}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={4}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={5}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
                <button
                  className="button"
                  data-x={6}
                  onClick={playToColumn}
                  tabIndex="-1"
                >
                  <PlacementIndicator />
                </button>
              </div>

              {/* game */}
              <div
                className={`game-status ${
                  !gameEnded ? (playerTurn === 1 ? "player-1" : "player-2") : ""
                }`}
              >
                {roundWinner ? (
                  <>
                    <b>Player {roundWinner}</b>
                    <h2>WINS</h2>
                    <button className="btn" onClick={playAgain}>
                      Play again
                    </button>
                  </>
                ) : (
                  <>
                    <b>Player {playerTurn}'s turn</b>
                    <h1>{timer < 10 ? `0${timer}` : timer}s</h1>
                  </>
                )}
              </div>
            </div>
            <div className="player-content opponent">
              <PlayerTwo />
              <b>player 2</b>
              <h1>{playerTwoPoint}</h1>
            </div>
          </div>
        </main>
      </div>
      <div className="indicator"></div>
      {showMenu && (
        <div className="game-menu">
          <div className="menu">
            <h1>Pause</h1>
            <button
              className="btn"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Continue game
            </button>
            <button
              className="btn"
              onClick={() => {
                resetGame();
                setShowMenu(false);
              }}
            >
              Restart game
            </button>
            <Link
              onClick={(event) => {
                event.preventDefault();
                setShowMenu(false);
                navigate("/");
              }}
            >
              Quit game
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default GameScreen;
