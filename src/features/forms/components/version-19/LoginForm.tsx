import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { LoginFormContent } from "./LoginFormContent";

export function LoginForm() {
  return (
    <ErrorBoundary message="No se pudo procesar el inicio de sesión">
      <LoginFormContent />
    </ErrorBoundary>
  );
}
