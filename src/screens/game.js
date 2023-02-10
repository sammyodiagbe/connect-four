const GameScreen = () => {
  const numberOfRows = 7;

  const numberOfCols = 6;
  return (
    <div className="game-screen">
      <div className="board">
        <div className="board-back"></div>
        <div className="board-top">
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
          <div className="board-row"></div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
