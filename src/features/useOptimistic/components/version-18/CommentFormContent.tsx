import type { SyntheticEvent } from "react";
import { useState } from "react";
import { Form } from "../../../../components/form/Form";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";
import { Input } from "../../../../components/form/Input";
import { useForm } from "../../../../components/form/hooks/useForm";
import { getErrorMessage } from "../../../../utils/getErrorMessage";
import { INITIAL_COMMENTS } from "../../data/initialComments";
import { commentsApi } from "../../services/commentsApi";
import type { Comment } from "../../types/Comment";
import { CommentsList } from "../CommentsList";

// ❌ React 18: el comentario aparece cuando termina la API.
export function CommentFormContent() {
  const { form, handleChange, updateForm } = useForm({ text: "" });
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  // Error | null: error inesperado que se relanza en el render.
  const [error, setError] = useState<Error | null>(null);
  // boolean: true mientras la API responde; bloquea input y botón.
  const [isSaving, setIsSaving] = useState(false);

  // SyntheticEvent: evento de React; <HTMLFormElement> indica el formulario.
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = form.text.trim();
    if (!text) return;

    setIsSaving(true);
    setError(null);

    try {
      const savedComment = await commentsApi.addComment(text);
      setComments((prev) => [...prev, savedComment]);
      updateForm({ text: "" });
    } catch (err) {
      // ❌ Un error async no llega solo al ErrorBoundary: se guarda y se
      // relanza en el render para que el boundary lo capture.
      setError(
        new Error(getErrorMessage(err, "Error al guardar el comentario")),
      );
    } finally {
      setIsSaving(false);
    }
  };

  // El ErrorBoundary del componente padre captura este throw.
  if (error) throw error;

  return (
    <>
      <Form onSubmit={handleSubmit} title="Agregar comentario">
        <Input
          label="Comentario"
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="Escribe un comentario..."
          disabled={isSaving} // ❌ El usuario no puede seguir escribiendo
          required
        />
        <FormSubmitButton
          isPending={isSaving}
          idleText="Agregar comentario"
          pendingText="Enviando..."
        />
      </Form>
      <CommentsList comments={comments} />
    </>
  );
}
