import { useId } from "react";

export const Input = ({
  label,
  type = "text",
  ref,
  handleChange,
  name,
  value,
  validate = () => true,
}) => {
  // useId -> Hook que genera un ID único y estable por instancia del Componente
  const id = useId();

  // Validación "hot": se evalúa en cada cambio de valor
  // -> Input vacío: borde neutro (no mostrar "éxito" sin haber escrito nada)
  // -> Válido: borde verde | Inválido: borde rojo
  const getBorderClass = (value) => {
    if (value === "") return "";
    return validate(value) ? "border-success" : "border-danger";
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <label className="input-group-text" htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          className={`form-control ${getBorderClass(value)}`}
          id={id}
          ref={ref}
          onChange={handleChange}
          name={name}
          value={value}
        />
      </div>
    </div>
  );
};
