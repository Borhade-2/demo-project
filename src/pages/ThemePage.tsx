import React from "react";
import { colorPalettes } from "../styles/themeConfig.ts";
import { useTheme } from "../context/ThemeContext.tsx";

type Theme = "light" | "dark";
type Color = keyof typeof colorPalettes;

export default function ThemePage() {
  const { theme, color, toggleTheme, toggleColor } = useTheme();

  const styles = colorPalettes[color as Color][theme as Theme];

  return (
    <div className="flex justify-center items-center h-full bg-black">
      <div
        className="p-6 shadow-xl rounded-[40px] h-[90vh] w-[80vh]"
        style={{ backgroundColor: styles.background, color: styles.text }}
      >
        <div className="text-center mb-6">
          <h1 className="font-bold text-[4.4rem]" style={{ color: styles.text }}>
            Prototype
          </h1>
          <p className="text-[28px] mr-6" style={{ color: styles.text }}>
            theme and mode changer
          </p>
        </div>

        <div className="mb-8 w-[340px] mx-auto">
          <p className="text-[16px]" style={{ color: styles.text }}>
            Build a responsive interface that allows users to switch between
            predefined color themes and light/dark modes. All UI components
            should dynamically and elegantly adapt their appearance based on
            the active theme and mode.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="grid grid-cols-2 p-2 gap-2 rounded-xl"
            style={{ backgroundColor: styles.card }}
          >
            <div
              className="p-1 rounded-lg flex items-center w-[24vh] h-[20vh]"
              style={{ backgroundColor: styles.mainbox }}
            >
              <div
                className="rounded h-[19vh] w-[12vh]"
                style={{ backgroundColor: styles.box1 }}
              />
              <div className="flex flex-col gap-1 ml-1">
                <div
                  className="rounded h-[9vh] w-[11vh]"
                  style={{ backgroundColor: styles.box2 }}
                />
                <div
                  className="rounded h-[9vh] w-[11vh]"
                  style={{ backgroundColor: styles.box3 }}
                />
              </div>
            </div>

            <div className="grid grid-rows gap-2">
              <p
                className="text-center items-center mt-1 text-[14px]"
                style={{ color: styles.text }}
              >
                Sample Testing
              </p>
              <button
                className="rounded-lg font-400"
                style={{ backgroundColor: styles.btn, color: styles.btntext1 }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = styles.btnHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = styles.btn)
                }
                onClick={toggleTheme}
              >
                {theme}
              </button>
              <button
                className="rounded-lg font-400"
                style={{ backgroundColor: styles.btncolor, color: styles.btntext2 }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = styles.btnHoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = styles.btncolor)
                }
                onClick={toggleColor}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
