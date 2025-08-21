import { useState, useEffect, useContext } from "react";
import { GameContext } from "../context/gamestate";
import { UseGameLogic } from "../hooks/gameLogic";

export function handleKeyPress(key) {
  let { makeAttempt } = UseGameLogic();
  if (key === "Enter") {
    console.log("User pressed enter");
  }
  if (key === "Backspace") {
    console.log("User pressed backspace");
  }
}
