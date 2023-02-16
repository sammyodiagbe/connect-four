import { Link } from "react-router-dom";
import Logo from "./logo";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="btn">
        Menu
      </Link>
      <Logo />
      <button className="btn">Restart</button>
    </nav>
  );
};

export default NavigationBar;
