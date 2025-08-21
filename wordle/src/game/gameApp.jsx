import { useState, useContext } from "react";
import { WordleContext } from "../context/wordle";
import { GameContext } from "../context/gamestate";

import { InputField } from "../components/inputField";
import { LoadingPage } from "../components/loadingPage";
import { GameDisplay } from "./gameEntry";

export function GameApp() {
  let { wordleWord, loading, setLoading } = useContext(WordleContext);
  let {
    board,
    setBoard,
    hasWon,
    setHasWon,
    currentAttempt,
    setCurrentAttempt,
  } = useContext(GameContext);

  function isWordLoaded() {
    if (loading === true) {
      return false;
    } else {
      return true;
    }
  }

  return isWordLoaded() ? (
    <div>
      <GameDisplay></GameDisplay>
      <InputField></InputField>
    </div>
  ) : (
    <LoadingPage></LoadingPage>
  );
}
