import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { LoginFormContent } from "./LoginFormContent";

// ❌ React 18: los errores async no llegan solos al ErrorBoundary.
// El contenido guarda el error y lo relanza en el render.
export function LoginForm() {
  return (
    <ErrorBoundary message="No se pudo procesar el inicio de sesión.">
      <LoginFormContent />
    </ErrorBoundary>
  );
}
