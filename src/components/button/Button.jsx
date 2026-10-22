import { colorMapper } from "./contants/colorMapper";

export const Button = ({
  type = "button",
  text = "Mi Botón",
  color = "primary",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn ${colorMapper[color] ?? colorMapper["primary"]}`}
      {...rest}
    >
      {text}
    </button>
  );
};

/*
    color: "primary" || color: "secondary" || color: "info" || color: "danger"
*/
