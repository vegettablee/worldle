import { useContext, useState, useEffect } from "react";
import { GameContext } from "../context/gamestate";
import { inputField } from "../components/inputField";

export function GameDisplay() {
  let {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    hasWon,
    setHasWon,
  } = useContext(GameContext);
  // this will be used to show the main game board
  return (
    <div>
      <h1>{currentAttempt}</h1>
      <p>{board[0].map((item) => item)}</p>
      <p>{board[1].map((item) => item)}</p>
      <p>{board[2].map((item) => item)}</p>
      <p>{board[3].map((item) => item)}</p>
      <p>{board[4].map((item) => item)}</p>
      <h2>The player has won : {hasWon || "false"}</h2>
    </div>
  );
}
