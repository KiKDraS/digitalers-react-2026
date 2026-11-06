import type { PropsWithChildren } from "react";
import { Alert } from "../Alert";
import { ErrorBoundaryComponent } from "./ErrorBoundaryComponent";

// Interfaz: props del boundary reutilizable para demos.
interface ErrorBoundaryProps extends PropsWithChildren {
  message: string;
}

export const ErrorBoundary = ({
  message,
  children,
}: Readonly<ErrorBoundaryProps>) => (
  <ErrorBoundaryComponent fallback={<Alert variant="danger">{message}</Alert>}>
    {children}
  </ErrorBoundaryComponent>
);
