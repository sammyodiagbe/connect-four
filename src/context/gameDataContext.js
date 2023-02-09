import { useContext } from "react";

const gameContext = useContext();

const GameDataProvider = ({ children }) => {
  return <gameContext.Provider value={{}}>{children}</gameContext.Provider>;
};

export default GameDataProvider;
