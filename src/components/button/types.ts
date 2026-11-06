// Union type: ButtonColor solo puede ser UNO de estos strings.
// TypeScript valida en tiempo de compilación que el valor sea válido.
export type ButtonColor =
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "info"
  | "danger"
  | "dark"
  | "light";
