import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useThemeContext must be used between a ThemeProvider");
  }

  return ctx;
};
