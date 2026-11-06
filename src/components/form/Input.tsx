import { useId, type InputHTMLAttributes } from "react";

// Interfaz: extiende los atributos nativos del input.
// Omit: quita "name" para hacerlo obligatorio.
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
  name: string;
}

export const Input = ({
  label,
  name,
  className,
  ...rest
}: Readonly<InputProps>) => {
  // useId: genera un id único para relacionar label e input.
  const id = useId();

  return (
    <div className="col-12">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        {...rest}
        id={id}
        name={name}
        className={`form-control ${className ?? ""}`}
      />
    </div>
  );
};
