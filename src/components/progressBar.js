"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ duration, currentIndex }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalDuration = duration / 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex, duration]);

  return (
    <div className="progress-container px-2 min-w-min w-full relative text-center">
      <progress
        id="file"
        value={progress}
        max="100"
        className="progress-bar w-full h-2 appearance-none rounded-[12.5px] overflow-hidden bg-[linear-gradient(90deg,_#f3f3f3_0%,_#d9d9d9_100%)]"
      ></progress>
      {/* <span className="absolute top-[0] left-2/4 -translate-x-1/2 w-full leading-[25px] font-bold text-[#fff] [text-shadow:1px_1px_2px_rgba(0,_0,_0,_0.1)]">
        {progress}%
      </span> */}
    </div>
  );
};

export default ProgressBar;
