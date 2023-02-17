import GameDataProvider from "./context/gameDataContext";
import GameScreen from "./screens/game";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainScreen from "./screens/mainScreen";
import RulesScreen from "./screens/RulesScreen";

function App() {
  return (
    <Router>
      <GameDataProvider>
        <div className="connect-four">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<MainScreen />} />
              <Route exact path="/game-rules" element={<RulesScreen />} />
              <Route exact path="/game" element={<GameScreen />} />
            </Routes>
          </div>
        </div>
      </GameDataProvider>
    </Router>
  );
}

export default App;
