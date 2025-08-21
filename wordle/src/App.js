import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useContext } from "react";

import { WordleContextProvider, WordleContext } from "./context/wordle";
import { GameContextProvider, GameContext } from "./context/gamestate";

import { GameApp } from "./game/gameApp.jsx";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);
  // all logic/displaying happens at the entry point GameApp
  return (
    <div className="App">
      <WordleContextProvider>
        <GameContextProvider>
          <GameApp></GameApp>
        </GameContextProvider>
      </WordleContextProvider>
    </div>
  );
}
