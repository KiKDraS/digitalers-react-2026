import { use, useState, useTransition, type SyntheticEvent } from "react";
import { Alert } from "../../../../components/Alert";
import { Form } from "../../../../components/form/Form";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";
import { useForm } from "../../../../components/form/hooks/useForm";
import { Input } from "../../../../components/form/Input";
import { userApi } from "../../../users/services/userApi";

interface UpdateNameFormContentProps {
  userId: number;
}

export function UpdateNameForm({
  userId,
}: Readonly<UpdateNameFormContentProps>) {
  const user = use(userApi.getById(userId));
  const { form, handleChange } = useForm({ name: user.name });
  const [savedName, setSaveName] = useState<string | null>(null);
  // const [savedName, setSaveName] = useState(null); - Infiere type null
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const updateUser = await userApi.updateName(userId, form.name);

      startTransition(() => {
        setSaveName(updateUser.name);
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit} title="Actualizar nombre">
      <Input
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Escribe un nombre"
        // ✅ El input NO se deshabilita: el usuario puede seguir escribiendo
        required
      />
      <FormSubmitButton
        isPending={isPending}
        idleText="Guardar nombre"
        pendingText="Guardando..."
      />
      {isPending && (
        <Alert variant="info" className="col-12 py-1 small">
          Guardando en segundo plano...
        </Alert>
      )}
      {savedName && !isPending && (
        <Alert variant="success" className="col-12 py-2">
          Nombre guardado: <strong>{savedName}</strong>
        </Alert>
      )}
    </Form>
  );
}
