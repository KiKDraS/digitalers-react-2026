import { useNavigate } from "react-router";
import { Button } from "../components/button/Button";
import { Form } from "../components/form/components/Form";
import { Input } from "../components/form/components/Input";
import { useForm } from "../components/form/hook/useForm";
import { Section } from "../components/Section";
import { useAuthContext } from "../features/auth/context/AuthProvider";
import { ROUTES } from "./constants";

const INITIAL_FORM = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { form, handleChange } = useForm(INITIAL_FORM);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con early return
    if (!form.email || !form.password) {
      alert("Debes completar todos los datos");
      return;
    }

    login(form.email);
    navigate(ROUTES.HOME);
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
        <div className="d-flex justify-content-center align-items-center gap-4">
          <Button type="submit" color="primary" text="Ingresar" />
        </div>
      </Form>
    </Section>
  );
};
