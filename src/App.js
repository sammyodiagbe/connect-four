import GameDataProvider from "./context/gameDataContext";
import GameScreen from "./screens/game";

function App() {
  return (
    <GameDataProvider>
      <div className="connect-four">
        <GameScreen />
      </div>
    </GameDataProvider>
  );
}

export default App;
