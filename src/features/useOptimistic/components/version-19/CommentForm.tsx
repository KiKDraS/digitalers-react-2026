import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { CommentFormContent } from "../version-19/CommentFormContent";

export function CommentForm() {
  return (
    <ErrorBoundary message="No se pudo guardar el comentario">
      <CommentFormContent />
    </ErrorBoundary>
  );
}
