import { useFormStatus } from "react-dom";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";

export const SubmitButton = () => {
  const { pending, data } = useFormStatus();
  // Derived State - Una variable que almacena un valor derivado de un state
  const email = String(data?.get("email"));

  return (
    <>
      <FormSubmitButton
        isPending={pending}
        idleText="Iniciar sesión"
        pendingText="Autenticando..."
      />
      {pending && (
        <p className="col-12 small text-muted mt-1 mb-0">Enviando {email}...</p>
      )}
    </>
  );
};
