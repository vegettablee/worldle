import React from "react";
import "./WordleNavbar.css";

export const WordleNavbar = () => {
  return (
    <nav className="wordle-navbar">
      <div className="wordle-navbar-content">
        {/* Left side - Menu */}
        <div className="navbar-left">
          <button className="navbar-icon-btn menu-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="4" width="16" height="2" fill="currentColor" />
              <rect x="2" y="9" width="16" height="2" fill="currentColor" />
              <rect x="2" y="14" width="16" height="2" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Center - Title */}
        <div className="navbar-center">
          <h1 className="wordle-title">
            <span className="letter letter-1">W</span>
            <span className="letter letter-2">o</span>
            <span className="letter letter-3">r</span>
            <span className="letter letter-4">d</span>
            <span className="letter letter-5">l</span>
            <span className="letter letter-6">e</span>
          </h1>
        </div>

        {/* Right side - Icons */}
        <div className="navbar-right">
          {/* Help Icon */}
          <button className="navbar-icon-btn help-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M7.5 7.5C7.5 6.11929 8.61929 5 10 5C11.3807 5 12.5 6.11929 12.5 7.5C12.5 8.88071 11.3807 10 10 10V11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="10" cy="14" r="0.5" fill="currentColor" />
            </svg>
          </button>

          {/* Statistics Icon */}
          <button className="navbar-icon-btn stats-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="12" width="2" height="5" fill="currentColor" />
              <rect x="7" y="8" width="2" height="9" fill="currentColor" />
              <rect x="11" y="5" width="2" height="12" fill="currentColor" />
              <rect x="15" y="10" width="2" height="7" fill="currentColor" />
            </svg>
          </button>

          {/* Settings Icon */}
          <button className="navbar-icon-btn settings-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M17 10C17 10.5523 16.5523 11 16 11H15.5C15.2239 11 15 11.2239 15 11.5V12.5C15 12.7761 15.2239 13 15.5 13H16C16.5523 13 17 13.4477 17 14V16C17 16.5523 16.5523 17 16 17H14C13.4477 17 13 16.5523 13 16V15.5C13 15.2239 12.7761 15 12.5 15H11.5C11.2239 15 11 15.2239 11 15.5V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V14C3 13.4477 3.44772 13 4 13H4.5C4.77614 13 5 12.7761 5 12.5V11.5C5 11.2239 4.77614 11 4.5 11H4C3.44772 11 3 10.5523 3 10V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V4.5C11 4.77614 11.2239 5 11.5 5H12.5C12.7761 5 13 4.77614 13 4.5V4C13 3.44772 13.4477 3 14 3H16C16.5523 3 17 3.44772 17 4V10Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
