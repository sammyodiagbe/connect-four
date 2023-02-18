import { useContext } from "react";
import { Link } from "react-router-dom";
import { gameContext } from "../context/gameDataContext";
import Logo from "./logo";

const NavigationBar = ({ showMenu }) => {
  const { resetGame } = useContext(gameContext);
  return (
    <nav className="navigation">
      <Link
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          showMenu(true);
        }}
      >
        Menu
      </Link>
      <Logo />
      <button
        className="btn"
        onClick={() => {
          resetGame();
          showMenu(false);
        }}
      >
        Restart
      </button>
    </nav>
  );
};

export default NavigationBar;
