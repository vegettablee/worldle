import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext(null);

export function GameContextProvider({ children }) {
  let [board, setBoard] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  let [hasWon, setHasWon] = useState(false);
  let [currentAttempt, setCurrentAttempt] = useState(0); // starts at 0, max attempt is 5
  let [correctWord, setCorrectWord] = useState("");
  let [gameEnded, setGameEnded] = useState(false);
  let [showEndScreen, setShowEndScreen] = useState(false);
  let [runAnimation, setRunAnimation] = useState(false);
  let [colors, setColors] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setShowEndScreen(true);
    }, 1000);
  }, [gameEnded]);

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        hasWon,
        setHasWon,
        currentAttempt,
        setCurrentAttempt,
        gameEnded,
        setGameEnded,
        showEndScreen,
        setShowEndScreen,
        runAnimation,
        setRunAnimation,
        colors,
        setColors,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
