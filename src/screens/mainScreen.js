import { Link } from "react-router-dom";
import PlayVsPlayer from "../components/playVsPlayer";

const MainScreen = () => {
  return (
    <>
      {/* navigation */}
      <main className="main">
        <Link to="/game">
          <PlayVsPlayer />
        </Link>
      </main>
    </>
  );
};

export default MainScreen;
