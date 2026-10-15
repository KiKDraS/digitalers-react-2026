import { useState } from "react";
import { Input } from "./Input";

const REG_EXP = /^[A-Za-z ]+$/;

const INITIAL_STATE = { nombre: "", password: "" };

// Formulario Controlado -> Formulario que tiene un valor de state para representar qué se escribe en sus input
export const FormularioControlado = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // setForm((prev) => ({}))
    // setForm((prev) => {
    //     return {}
    // })

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulario No Controlado</h3>
      <Input
        label="Nombre"
        handleChange={handleChange}
        name="nombre"
        value={form.nombre}
        validate={(value) => REG_EXP.test(value)}
      />
      <Input
        label="Password"
        type="password"
        handleChange={handleChange}
        name="password"
        value={form.password}
        validate={(value) => value.length >= 6}
      />
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};
