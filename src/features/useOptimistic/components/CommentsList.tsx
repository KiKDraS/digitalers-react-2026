import type { OptimisticComment } from "../types/Comment";

// Interfaz: props de la lista de comentarios.
interface CommentsListProps {
  comments: OptimisticComment[];
}

export const CommentsList = ({ comments }: Readonly<CommentsListProps>) => (
  <ul className="list-group mt-3">
    {comments.map((comment) => (
      <li key={comment.id} className="list-group-item">
        {comment.text}
        {comment.pending && (
          <span className="text-muted small ms-2">(Enviando...)</span>
        )}
      </li>
    ))}
  </ul>
);
