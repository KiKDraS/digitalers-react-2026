import type { SyntheticEvent } from "react";
import { useState } from "react";
import { Alert } from "../../../../components/Alert";
import { Form } from "../../../../components/form/Form";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";
import { Input } from "../../../../components/form/Input";
import { useForm } from "../../../../components/form/hooks/useForm";
import { getErrorMessage } from "../../../../utils/getErrorMessage";
import { authApi } from "../../services/authApi";

const INITIAL_FORM = {
  email: "",
  password: "",
};

// Interfaz: mensaje que se muestra después del login.
interface LoginMessage {
  // Unión de literales: "type" solo puede ser "error" o "success".
  type: "error" | "success";
  text: string;
}

// ❌ React 18: estado manual para cada input y para el submit.
export function LoginFormContent() {
  const { form, handleChange } = useForm(INITIAL_FORM);

  // ❌ Estado manual para el botón de carga
  const [isSubmitting, setIsSubmitting] = useState(false);
  // LoginMessage | null: hay mensaje o null si aún no se envió el formulario.
  const [message, setMessage] = useState<LoginMessage | null>(null);
  // Error | null: error inesperado que se relanza en el render.
  const [error, setError] = useState<Error | null>(null);

  // SyntheticEvent: evento de React; <HTMLFormElement> indica el formulario.
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); // ❌ Prevenir comportamiento por defecto
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const result = await authApi.login({
        email: form.email,
        password: form.password,
      });
      // Errores esperados (ej. 401): se muestran como estado, igual que en 19.
      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      });
    } catch (err) {
      // ❌ Un error async no llega solo al ErrorBoundary: se guarda y se
      // relanza en el render para que el boundary lo capture.
      setError(new Error(getErrorMessage(err, "Error al iniciar sesión")));
    } finally {
      setIsSubmitting(false);
    }
  };

  // El ErrorBoundary del componente padre captura este throw.
  if (error) throw error;

  return (
    <Form onSubmit={handleSubmit} title="Iniciar sesión">
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Contraseña"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      {message && (
        <Alert
          variant={message.type === "error" ? "danger" : "success"}
          className="col-12 py-2"
        >
          {message.text}
        </Alert>
      )}
      <FormSubmitButton
        isPending={isSubmitting}
        idleText="Iniciar sesión"
        pendingText="Enviando..."
      />
    </Form>
  );
}
