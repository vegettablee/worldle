import React from "react";
import "./winCelebration.css";

export const WinCelebration = () => {
  return (
    <div className="win-celebration">
      <div className="celebration-content">
        <div className="trophy">🏆</div>
        <h2 className="win-text">You Win!</h2>
        <div className="confetti">
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
        </div>
      </div>
    </div>
  );
};
