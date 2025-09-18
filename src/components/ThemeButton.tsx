import React from "react";
import { useTheme } from "../context/ThemeContext.tsx";
import { colorPalettes } from "../styles/themeConfig.ts";

export default function ThemeButton() {
  const { theme, color, toggleColor } = useTheme();
  const styles = colorPalettes[color][theme];

  return (
    <button
      onClick={toggleColor}
      className={`px-6 py-3 rounded-xl font-bold shadow-md transition-colors duration-500`}
      style={{ backgroundColor: styles.background, color: styles.text }}
    >
      Change Color Palette ({color})
    </button>
  );
}
