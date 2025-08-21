import { createContext, useContext, useState } from "react";

export const GameContext = createContext(null);

export function GameContextProvider({ children }) {
  let [board, setBoard] = useState([
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
  ]);

  let [hasWon, setHasWon] = useState(false); //
  let [currentAttempt, setCurrentAttempt] = useState(0); // starts at 0, max attempt is 5
  let [correctWord, setCorrectWord] = useState("");

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        hasWon,
        setHasWon,
        currentAttempt,
        setCurrentAttempt,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
