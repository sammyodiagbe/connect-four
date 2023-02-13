import GameDataProvider from "./context/gameDataContext";
import GameScreen from "./screens/game";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <GameDataProvider>
        <div className="connect-four">
          <Routes>
            <Route exact path="/game" element={<GameScreen />} />
          </Routes>
        </div>
      </GameDataProvider>
    </Router>
  );
}

export default App;
