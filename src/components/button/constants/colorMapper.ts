import type { ButtonColor } from "../types";

// Record<clave, valor>: cada ButtonColor debe tener su clase CSS.
export const colorMapper: Record<ButtonColor, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  warning: "btn-warning",
  success: "btn-success",
  info: "btn-info",
  danger: "btn-danger",
  dark: "btn-dark",
  light: "btn-light",
};
