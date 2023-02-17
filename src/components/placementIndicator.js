import { useContext } from "react";
import { gameContext } from "../context/gameDataContext";
import MarkerRed from "./markerRed";
import MarkerYellow from "./markerYellow";

const PlacementIndicator = () => {
  const { playerTurn } = useContext(gameContext);
  return playerTurn === 1 ? <MarkerRed /> : <MarkerYellow />;
};

export default PlacementIndicator;
