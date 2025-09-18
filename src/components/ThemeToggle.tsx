import React from "react";
import { useTheme } from "../context/ThemeContext.tsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-6 py-2 rounded-lg shadow-md bg-gray-800 text-white transition-colors duration-500"
    >
      {theme}
    </button>
  );
}
