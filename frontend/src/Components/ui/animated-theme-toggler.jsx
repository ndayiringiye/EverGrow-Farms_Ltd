"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

 const AnimatedThemeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-md"
      aria-label="Toggle Theme"
    >
      <Sun
        className={`text-yellow-400 absolute transition-opacity duration-500 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        size={18}
      />
      <Moon
        className={`text-gray-800 dark:text-white absolute transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        size={18}
      />
    </button>
  );
};
export default AnimatedThemeToggler