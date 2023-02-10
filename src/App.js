import GameDataProvider from "./context/gameDataContext";

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
