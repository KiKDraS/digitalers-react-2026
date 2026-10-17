import { useId } from "react";

export const Input = ({ label, type = "text", ...rest }) => {
  const id = useId();

  return (
    <div className="mb-3 input-group">
      <label className="input-group-text" htmlFor={id}>
        {label}
      </label>
      <input className="form-control" type={type} id={id} {...rest} />
    </div>
  );
};
