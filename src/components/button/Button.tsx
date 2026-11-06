import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { colorMapper } from "./constants/colorMapper";
import type { ButtonColor } from "./types";

// Interfaz: forma de las props del botón.
// Omit: quita "color" del <button> nativo para usar ButtonColor.
interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    PropsWithChildren {
  // text es opcional: si no se pasa, se renderizan los children
  text?: string;
  color?: ButtonColor;
}

export const Button = ({
  text,
  type = "button",
  color = "primary",
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${colorMapper[color]} ${className ?? ""}`}
      {...rest}
    >
      {/* children ?? text: usa children si existe, si no usa text */}
      {children ?? text}
    </button>
  );
};
