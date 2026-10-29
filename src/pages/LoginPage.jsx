import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/components/Form";
import { Input } from "../components/form/components/Input";
import { useForm } from "../components/form/hook/useForm";
import { Section } from "../components/Section";
import { useAuthContext } from "../features/auth/context/AuthProvider";
import { THEME } from "../features/theme/constants";
import { useThemeContext } from "../features/theme/context/useThemeContext";
import { ROUTES } from "./constants";

const INITIAL_FORM = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { form, handleChange } = useForm(INITIAL_FORM);
  const { isLightTheme } = useThemeContext();
  const { login, isLoggingIn } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Validación básica de datos
      if (!form.email || !form.password) {
        throw new Error("Debes completar todos lo datos");
      }

      const user = await login(form);

      if (!user) {
        throw new Error("Usuario y/o contraseña inválido");
      }

      void navigate(ROUTES.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Section>
      <Form handleSubmit={handleSubmit} title="Iniciar Sesión">
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-flex justify-content-center align-items-center gap-4">
          <Button
            type="submit"
            color={isLightTheme ? THEME.DARK : THEME.LIGHT}
            text={isLoggingIn ? "Ingresando..." : "Ingresar"}
            disabled={isLoggingIn}
          />
        </div>
      </Form>
    </Section>
  );
};
