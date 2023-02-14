import { Link } from "react-router-dom";
import PlayVsPlayer from "../components/playVsPlayer";

const MainScreen = () => {
  return (
    <>
      {/* navigation */}
      <main className="main">
        <Link to="/game">
          <span>Player vs Player</span>
          <PlayVsPlayer />
        </Link>
      </main>
    </>
  );
};

export default MainScreen;
