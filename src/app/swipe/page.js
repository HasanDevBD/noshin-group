"use client";
import React, { useState, useEffect, useRef } from "react";
import "./style.css"; // Import the CSS file

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const intervalRef = useRef(null);

  const handleMouseDown = () => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          setCompleted(true);
          return 100;
        }
      });
    }, 50);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    if (progress < 100) {
      setProgress(0);
      setCompleted(false);
    }
  };

  return (
    <div className="progress-container">
      <progress
        id="file"
        value={progress}
        max="100"
        className="progress-bar"
      ></progress>
      <span className="progress-label">{progress}%</span>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="hold-button"
      >
        Hold to Fill
      </button>
      {completed && <p className="completed-message">Progress completed!</p>}
    </div>
  );
};

export default ProgressBar;
