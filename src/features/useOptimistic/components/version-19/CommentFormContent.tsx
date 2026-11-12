import {
  useOptimistic,
  useState,
  useTransition,
  type SyntheticEvent,
} from "react";
import { Form } from "../../../../components/form/Form";
import { FormSubmitButton } from "../../../../components/form/FormSubmitButton";
import { useForm } from "../../../../components/form/hooks/useForm";
import { Input } from "../../../../components/form/Input";
import { INITIAL_COMMENTS } from "../../data/initialComments";
import { commentsApi } from "../../services/commentsApi";
import type { Comment, OptimisticComment } from "../../types/Comment";
import { CommentsList } from "../CommentsList";

export const CommentFormContent = () => {
  const { form, handleChange, updateForm } = useForm({ text: "" });
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [isPending, startTransition] = useTransition();
  const [optimisticComment, addOptimisticComment] = useOptimistic<
    OptimisticComment[],
    Comment
  >(comments, (current, newComment) => [
    ...current,
    { ...newComment, pending: true },
  ]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = form.text.trim();
    if (!text) return;

    updateForm({ text: "" });

    startTransition(async () => {
      const optimisticComment = { id: crypto.randomUUID(), text };
      addOptimisticComment(optimisticComment); // Actualiza el state comments, con el comentario optimista
      const savedComment = await commentsApi.addComment(text);

      startTransition(() => {
        setComments((prev) => [...prev, savedComment]);
      });
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} title="Agregar comentario">
        <Input
          label="Comentario"
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="Escribe un comentario..."
          required
        />
        <FormSubmitButton
          isPending={false}
          pendingText="Enviando..."
          idleText="Agregar comentario"
        />
      </Form>
      <CommentsList comments={optimisticComment} />
    </>
  );
};
