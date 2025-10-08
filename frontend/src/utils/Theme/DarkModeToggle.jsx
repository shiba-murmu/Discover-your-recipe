import React from 'react';
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // Step 1️⃣ : Create a state variable for theme
  const [theme, setTheme] = useState("light");

  // Step 2️⃣ : Auto-detect system preference (dark or light)
  useEffect(() => {
    // Check system preference
    const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    // Check localStorage or fallback to system preference
    const initialTheme = localStorage.getItem("theme") || userPref;

    setTheme(initialTheme);
  }, []);

  // Step 3️⃣ : Apply theme to <html> element whenever it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Step 4️⃣ : Create toggle button
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600 dark:bg-gray-800"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
