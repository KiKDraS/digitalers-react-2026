import type { ButtonHTMLAttributes } from "react";
import { colorMapper } from "./contants/colorMapper";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // type?: "button" | "submit" | "reset";
  text?: string;
  color?: keyof typeof colorMapper;
  // color?: ButtonColor;
}

export const Button = ({
  type = "button",
  text = "Mi Botón",
  color = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button type={type} className={`btn ${colorMapper[color]}`} {...rest}>
      {text}
    </button>
  );
};

/*
    color: "primary" || color: "secondary" || color: "info" || color: "danger"
*/
