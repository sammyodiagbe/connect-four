import MarkerRed from "../components/markerRed";

const RulesScreen = () => {
  return (
    <div className="rules">
      <h1 className="title">Objective</h1>
      <p>
        Be the first player to connect 4 of the same colored disc in a row
        (either vertically, horizontally or diagonally)
      </p>
      <h1 className="title">How to play.</h1>
      <ol>
        <li>Red goes first in the first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li>The game ends when there is a 4-in-row or stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>
      <MarkerRed />
    </div>
  );
};

export default RulesScreen;
