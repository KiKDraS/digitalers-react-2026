import { useActionState } from "react";
import { Alert } from "../../../../components/Alert";
import { Form } from "../../../../components/form/Form";
import { Input } from "../../../../components/form/Input";
import { SubmitButton } from "./SubmitButton";
import { loginAction } from "./actions/loginAction";

// FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
export const LoginFormContent = () => {
  const [state, formAction] = useActionState(loginAction, null);

  if (state?.success) {
    return <h2>Acá pongo el componente de re-dirección de react-router-dom</h2>;
  }

  return (
    <Form action={formAction}>
      <Input label="Email" name="email" type="email" required />
      <Input label="Contraseña" name="password" type="password" required />

      {state?.error && (
        <Alert variant="danger" className="col-12 py-2">
          {state.error}
        </Alert>
      )}

      {/* {state?.success && (
        <Alert variant="success" className="col-12 py-2">
          {state.success}
        </Alert>
      )} */}

      <SubmitButton />
    </Form>
  );
};
