import React from "react";
import "./wordleGrid.css";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gamestate";
import { useAnimation } from "../hooks/animate";
import { WinCelebration } from "./winCelebration";

export const WordleGrid = () => {
  let {
    board,
    setBoard,
    currentAttempt,
    runAnimation,
    setRunAnimation,
    colors,
    setColors,
    hasWon,
    hasGameEnded,
  } = useContext(GameContext);

  // State to track which cells are currently animating
  const [animatingCells, setAnimatingCells] = useState(new Set());
  // State to track which cells should show colors
  const [coloredCells, setColoredCells] = useState(new Set());
  // State to track which cells have been animated with their colors
  const [animatedCellsWithColors, setAnimatedCellsWithColors] = useState(
    new Map()
  );

  useEffect(() => {
    if (runAnimation === true) {
      // Get the current row to animate
      const currentRow = currentAttempt;
      const rowStartIndex = currentRow * 5;

      // Clear previous animations for current row only
      const currentRowCells = new Set();
      for (let col = 0; col < 5; col++) {
        currentRowCells.add(rowStartIndex + col);
      }

      setAnimatingCells(
        (prev) =>
          new Set([...prev].filter((index) => !currentRowCells.has(index)))
      );
      setColoredCells(
        (prev) =>
          new Set([...prev].filter((index) => !currentRowCells.has(index)))
      );

      // Start animation for each cell in the current row with a staggered delay
      for (let col = 0; col < 5; col++) {
        const cellIndex = rowStartIndex + col;

        setTimeout(() => {
          // Add flip animation class
          setAnimatingCells((prev) => new Set([...prev, cellIndex]));

          // After half the animation duration (300ms), apply the color
          setTimeout(() => {
            setColoredCells((prev) => new Set([...prev, cellIndex]));
          }, 300);

          // Remove animation class after animation completes but store the color
          setTimeout(() => {
            setAnimatingCells((prev) => {
              const newSet = new Set(prev);
              newSet.delete(cellIndex);
              return newSet;
            });
            // Store the cell with its color for future rendering
            setAnimatedCellsWithColors((prev) => {
              const newMap = new Map(prev);
              newMap.set(cellIndex, colors[col]?.toLowerCase() || "grey");
              return newMap;
            });
          }, 600);
        }, col * 100); // Stagger each cell by 100ms
      }

      // Reset runAnimation after all animations are scheduled
      setTimeout(() => {
        setRunAnimation(false);
      }, 1000); // Total time: 400ms (last cell delay) + 600ms (animation duration)
    }
  }, [runAnimation]);

  // Function to determine cell classes
  const getCellClass = (cell, index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;

    let classes = ["wordle-cell"];

    // Basic state classes
    if (cell === "") {
      classes.push("empty");
    } else {
      classes.push("filled");
    }

    // Animation class
    if (animatingCells.has(index)) {
      classes.push("flip-animation");
    }

    // Color classes - apply to current row being animated
    if (coloredCells.has(index) && row === currentAttempt && colors[col]) {
      const colorClass = colors[col].toLowerCase();
      classes.push(colorClass);
    }

    // Translucent effect for previously animated cells
    if (animatedCellsWithColors.has(index) && row < currentAttempt) {
      const colorClass = animatedCellsWithColors.get(index);
      classes.push(colorClass);
      classes.push("translucent");
    }

    return classes.join(" ");
  };

  return (
    <div className="wordle-container">
      <div className="wordle-grid">
        {board.flat().map((cell, index) => (
          <div key={index} className={getCellClass(cell, index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};
