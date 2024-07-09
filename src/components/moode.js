"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function MoodSwn() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      const isDarkMode = storedTheme === "dark";
      setDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    document.documentElement.classList.toggle("dark", !darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="ml-4 cursor-pointer" onClick={toggleDarkMode}>
      {darkMode ? (
        <FaSun className=" w-4 h-4" />
      ) : (
        <FaMoon className=" w-4 h-4" />
      )}
      {/* '🌙' : '☀️' */}
    </div>
  );
}
