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
      className=""
    >
      {
        theme === "light" ? (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )
      }
    </button>
  );
}
