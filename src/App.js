import GameDataProvider from "./context/gameDataContext";

function App() {
  return (
    <GameDataProvider>
      <div className="App"></div>
    </GameDataProvider>
  );
}

export default App;
