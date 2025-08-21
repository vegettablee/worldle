import React from "react";
import "./loadingPage.css";

export function LoadingPage() {
  const letters = ["W", "O", "R", "D", "L", "E"];

  return (
    <div className="wordle-loader-container">
      <div className="wordle-loader-content">
        <div className="wordle-grid">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="wordle-tile"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="loading-text">Loading...</div>
        <div className="spinner"></div>
      </div>
    </div>
  );
}
