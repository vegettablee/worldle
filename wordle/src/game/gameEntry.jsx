import { useContext, useState, useEffect, useRef } from "react";
import { GameContext } from "../context/gamestate";
import { inputField } from "../components/inputField";
import { WordleGrid } from "../components/wordleGrid";
import { UseGameLogic } from "../hooks/gameLogic";

export function GameDisplay() {
  let {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    hasWon,
    setHasWon,
    gameEnded,
    setGameEnded,
    showEndScreen,
    setShowEndScreen,
  } = useContext(GameContext);

  let { handleKeyOperation } = UseGameLogic();

  let hiddenInputRef = useRef(null);

  let [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      // handle when the user presses enter to make an attempt visually
      let key = event.key;
      console.log(event.key + "pressed" + " user input : " + userInput);
      handleKeyOperation(key, userInput);
    };
    const forceFocus = () => {
      if (hiddenInputRef.current) {
        hiddenInputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", forceFocus);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", forceFocus);
    };
  });
  useEffect(() => {
    setUserInput("");
  }, [currentAttempt]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value.slice(0, 5));

    let input = event.target.value.slice(0, 5);

    setBoard((prevBoard) => {
      let newBoard = [...prevBoard];
      let arr;
      if (input.length < 5) {
        arr = Array.from({ length: 5 }, (_, index) => input[index] || "");
      } else {
        arr = Array.from(input);
      }

      newBoard[currentAttempt] = arr;
      return newBoard;
    });
  };

  

  return (
    <div>
      <input
        ref={hiddenInputRef}
        value={userInput}
        onChange={handleUserInput}
        autofocus
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <WordleGrid></WordleGrid>
    </div>
  );
}
