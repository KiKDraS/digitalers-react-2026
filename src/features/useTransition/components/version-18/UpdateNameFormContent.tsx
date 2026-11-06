import type { SyntheticEvent } from "react";
import { useEffect, useState } from "react";
import { Alert } from "../../../../components/Alert";
import { Form } from "../../../../components/form/Form";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";
import { useForm } from "../../../../components/form/hooks/useForm";
import { Input } from "../../../../components/form/Input";
import { Spinner } from "../../../../components/Spinner";
import { getErrorMessage } from "../../../../utils/getErrorMessage";
import { userApi } from "../../../users/services/userApi";

// Interfaz: props del contenido del formulario.
interface UpdateNameFormContentProps {
  userId: number;
}

// ❌ React 18: carga y guardado con estados manuales.
export default function UpdateNameFormContent({
  userId,
}: Readonly<UpdateNameFormContentProps>) {
  const { form, handleChange, updateForm } = useForm({ name: "" });
  // string | null: el nombre guardado o null antes de guardar.
  const [savedName, setSavedName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  // Error | null: error inesperado que se relanza en el render.
  const [error, setError] = useState<Error | null>(null);
  // boolean: true mientras la API responde; bloquea input y botón.
  const [isSaving, setIsSaving] = useState(false);

  // useEffect: carga el nombre actual del usuario al montar.
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await userApi.getById(userId);
        updateForm((prev) => ({ ...prev, name: user.name }));
      } catch (err) {
        // ❌ Un error async no llega solo al ErrorBoundary.
        setError(new Error(getErrorMessage(err, "Error al cargar el usuario")));
      } finally {
        setLoading(false);
      }
    };

    void loadUser();
  }, [updateForm, userId]);

  // SyntheticEvent: evento de React; <HTMLFormElement> indica el formulario.
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true); // ❌ Bloquea el formulario
    setError(null);

    try {
      const user = await userApi.updateName(userId, form.name);
      setSavedName(user.name);
    } catch (err) {
      // ❌ Un error async no llega solo al ErrorBoundary.
      setError(new Error(getErrorMessage(err, "Error al guardar el nombre")));
    } finally {
      setIsSaving(false); // ❌ Desbloquea cuando termina la API
    }
  };

  // El ErrorBoundary del componente padre captura este throw.
  if (error) throw error;

  if (loading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit} title="Actualizar nombre">
      <Input
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Escribe un nombre"
        disabled={isSaving} // ❌ El usuario no puede seguir escribiendo
        required
      />
      <FormSubmitButton
        isPending={isSaving}
        idleText="Guardar nombre"
        pendingText="Guardando..."
      />
      {savedName && (
        <Alert variant="success" className="col-12 py-2">
          Nombre guardado: <strong>{savedName}</strong>
        </Alert>
      )}
    </Form>
  );
}
