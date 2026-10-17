import { colorMapper } from "./contants/colorMapper";

export const Button = ({
  type = "button",
  text = "Mi Botón",
  color = "primary",
  handleClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`btn mt-3 ${colorMapper[color] ?? colorMapper["primary"]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

/*
    color: "primary" || color: "secondary" || color: "info" || color: "danger"
*/
