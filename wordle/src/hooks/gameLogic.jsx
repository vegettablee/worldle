import { useState, useEffect, useContext } from "react";

import { GameContext } from "../context/gamestate";
import { WordleContext } from "../context/wordle";
import DictionaryAPI from "../services/dictionary";

export function UseGameLogic() {
  let {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    hasWon,
    setHasWon,
    gameEnded,
    setGameEnded,
    colors,
    setColors,
    setRunAnimation,
    runAnimation,
  } = useContext(GameContext);

  let { wordleWord, loading, setLoading } = useContext(WordleContext);

  function checkLetters(userInput) {
    let set = new Set(wordleWord.split(""));
    let arr = new Array(5);
    let guessedWord = userInput.toUpperCase();
    for (let char in userInput) {
      if (
        set.has(guessedWord[char]) &&
        guessedWord[char] === wordleWord[char]
      ) {
        // return green
        arr[char] = "GREEN";
      } else if (set.has(guessedWord[char])) {
        // return yellow
        arr[char] = "YELLOW";
      } else {
        // return grey
        arr[char] = "GREY";
      }
    }
    console.log(arr);
    return arr;
  }

  function validateAttempt(userInput) {
    // returns true to make the attempt, false to invalidate it

    let colors = checkLetters(userInput);
    setColors(colors);
    setRunAnimation(true);

    if (wordleWord === userInput.toUpperCase()) {
      setHasWon(true);
      setGameEnded(true); // player has won
    } else if (currentAttempt === 5) {
      setGameEnded(true); // player has lost
    }
  }

  function makeAttempt(guessedWord) {
    if (currentAttempt < 5 && hasWon === false) {
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
      validateAttempt(guessedWord);
      setTimeout(() => {
        setCurrentAttempt((prevCount) => prevCount + 1);
      }, 1000); // so the attempt doesn't increment before the animation finishes
      // setCurrentAttempt((prevCount) => prevCount + 1);
    }
  }
  function handleKeyOperation(key, userInput) {
    if (key === "Enter" && userInput.length === 5) {
      DictionaryAPI.shared.doesWordExist(userInput).then((status) => {
        if (status === true) {
          makeAttempt(userInput);
        }
      });
    }
  }
  return { makeAttempt, handleKeyOperation };
}
