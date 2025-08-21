import { useState, useEffect } from "react";
import { useInputHandler } from "../logic/inputHandler";
import { handleKeyPress } from "../logic/inputHandler";
import { UseGameLogic } from "../hooks/gameLogic";

export function InputField() {
  let [userInput, setUserInput] = useState("");
  let { makeAttempt, handleKeyOperation } = UseGameLogic();
  const maxCharacters = 5;

  let field = document.getElementById("inputField");

  const handleUserInput = (event) => {
    const value = event.target.value.slice(0, maxCharacters);
    setUserInput(value);
  };
  const handleKeyDown = (event) => {
    let key = event.key;
    handleKeyOperation(key, userInput);
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleKeyDown}
        id="inputField"
      ></input>
      <p>This is the attempt state : {userInput}</p>
    </div>
  );
}
