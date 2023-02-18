import { Link } from "react-router-dom";
import Logo from "./logo";

const NavigationBar = ({ showMenu }) => {
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
      <button className="btn">Restart</button>
    </nav>
  );
};

export default NavigationBar;
