import { Button } from "../../../components/button/Button";

export const UpdateTheme = ({
  theme,
  buttonColor,
  isLightTheme,
  toggleTheme,
}) => {
  return (
    <>
      <h4>Tema de la Aplicación</h4>
      <p>Tema actual: {theme.toUpperCase()}</p>
      <div className="p-2">
        <Button
          color={buttonColor}
          text={`Cambiar a ${isLightTheme ? "Oscuro" : "Claro"}`}
          onClick={toggleTheme}
        />
      </div>
    </>
  );
};
