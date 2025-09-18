import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { colorPalettes } from "../styles/themeConfig";

type Theme = "light" | "dark";
type Color = keyof typeof colorPalettes;

interface ThemeContextType {
  theme: Theme;
  color: Color;
  toggleTheme: () => void;
  toggleColor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // "light" | "dark"
  const [color, setColor] = useState<Color>("field"); // default palette key

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedColor = localStorage.getItem("color") as Color | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedColor && colorPalettes[savedColor]) setColor(savedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("color", color);
  }, [theme, color]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleColor = () => {
    const paletteKeys = Object.keys(colorPalettes) as Color[];
    const currentIndex = paletteKeys.indexOf(color);
    const nextIndex = (currentIndex + 1) % paletteKeys.length;
    setColor(paletteKeys[nextIndex] as Color);
  };

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
