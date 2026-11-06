import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { CommentFormContent } from "./CommentFormContent";

// ❌ React 18: el error async se guarda y se relanza en el render.
export function CommentForm() {
  return (
    <ErrorBoundary message="No se pudo guardar el comentario.">
      <CommentFormContent />
    </ErrorBoundary>
  );
}
