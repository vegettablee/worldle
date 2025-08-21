import { useState, useEffect, useContext } from "react";

import { GameContext } from "../context/gamestate";
import DictionaryAPI from "../services/dictionary";

export function UseGameLogic() {
  let {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    hasWon,
    setHasWon,
  } = useContext(GameContext);

  let dictionaryApi = new DictionaryAPI();

  function handleAttempt(userInput) {}

  function makeAttempt(guessedWord) {
    if (currentAttempt < 5) {
      // don't run any code after the game is over, to prevent undefined errors
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard];
        for (
          let counter = 0;
          counter < newBoard[currentAttempt].length;
          counter++
        ) {
          newBoard[currentAttempt][counter] = guessedWord[counter];
        }
        return newBoard;
      });
      setCurrentAttempt((prevCount) => prevCount + 1);
    }
  }
  function handleKeyOperation(key, userInput) {
    if (key === "Enter" && userInput.length === 5) {
      DictionaryAPI.shared.doesWordExist(userInput).then((status) => {
        if (status === true) {
          makeAttempt(userInput);
        }
      });
      DictionaryAPI.shared.getWordleWord();
    }
  }
  return { makeAttempt, handleKeyOperation };
}
