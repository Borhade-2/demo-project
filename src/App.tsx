import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DropdownPage from "./pages/DropdownPage";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { colorPalettes } from "./styles/themeConfig";
import ThemePage from "./pages/ThemePage.tsx";

type Theme = "light" | "dark";
type Color = keyof typeof colorPalettes;

const Navbar: React.FC = () => {
  const { theme, color } = useTheme();
  const styles = colorPalettes[color][theme as Theme];

  return (
    <nav
      className={`flex gap-4 p-4 transition-colors duration-500 ${styles.background} ${styles.text}`}
    >
      <Link to="/" className="font-bold">
        Theme
      </Link>
      <Link to="/dropdown" className="font-bold">
        Dropdown
      </Link>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ThemePage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
