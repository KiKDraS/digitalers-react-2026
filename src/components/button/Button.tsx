import type { ButtonHTMLAttributes } from "react";
import { colorMapper } from "./contants/colorMapper";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // type?: "button" | "submit" | "reset";
  text?: string;
  color?: keyof typeof colorMapper;
  // color?: ButtonColor;
}

export const Button = ({
  text,
  type = "button",
  color = "primary",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button type={type} className={`btn ${colorMapper[color]}`} {...rest}>
      {/* children ?? text: usa children si existe, si no usa text */}
      {children ?? text}
    </button>
  );
};

/*
    color: "primary" || color: "secondary" || color: "info" || color: "danger"
*/
