import { useEffect, useState } from "react";
import { THEME, THEME_KEY } from "../constants";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Obtener tema almacenado en localStorage
    const storageTheme = localStorage.getItem(THEME_KEY);

    // THEME.DARK === Valor por defecto para evitar errores cuando no existe el dato en el localStorage
    return storageTheme ?? THEME.DARK;
  });

  //   theme();

  useEffect(() => {
    document.body.dataset.bsTheme = theme;

    // Almacenar tema en el localStorage
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  const data = {
    theme,
    toggleTheme,
    isLightTheme: theme === THEME.LIGHT,
  };

  return <ThemeContext value={data}>{children}</ThemeContext>;
};
