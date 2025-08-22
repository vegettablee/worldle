import { useState, useContext } from "react";
import { WordleContext } from "../context/wordle";
import { GameContext } from "../context/gamestate";

import { InputField } from "../components/inputField";
import { LoadingPage } from "../components/loadingPage";
import { GameDisplay } from "./gameEntry";
import { WordleGrid } from "../components/wordleGrid";
import { WordleNavbar } from "../components/WordleNavbar";
import { WinCelebration } from "../components/winCelebration";

export function GameApp() {
  let { wordleWord, loading, setLoading } = useContext(WordleContext);
  let {
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
  } = useContext(GameContext);

  function isWordLoaded() {
    if (loading === true) {
      return false;
    } else {
      return true;
    }
  }

  const hasGameEnded = () => {
    if (hasWon === true && showEndScreen === true) {
      return <WinCelebration></WinCelebration>; // show player has won
    } else if (hasWon === false && showEndScreen === true) {
      return <div></div>;
    } else {
      return <div></div>;
    }
  };

  return isWordLoaded() ? (
    <div>
      <WordleNavbar></WordleNavbar>
      {hasGameEnded()}
      <GameDisplay></GameDisplay>
    </div>
  ) : (
    <div><LoadingPage></LoadingPage></div>
  );
}
