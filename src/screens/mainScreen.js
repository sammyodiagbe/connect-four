import { Link } from "react-router-dom";
import Logo from "../components/logo";
import PlayVsPlayer from "../components/playVsPlayer";

const MainScreen = () => {
  return (
    <>
      {/* navigation */}
      <main className="main main-menu">
        <div className="content">
          <Logo />

          <Link to="/game" className="play-button">
            <span>Player vs Player.</span>
            <span className="icon">
              <PlayVsPlayer />
            </span>
          </Link>
          <Link to="/game-rules">Game Rules</Link>
        </div>
      </main>
    </>
  );
};

export default MainScreen;
