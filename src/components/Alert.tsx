import type { PropsWithChildren } from "react";

// Unión de literales: variantes de Bootstrap que acepta Alert.
type AlertVariant = "danger" | "success" | "info" | "warning";

// Interfaz: props del mensaje reutilizable.
interface AlertProps extends PropsWithChildren {
  variant: AlertVariant;
  className?: string;
}

export const Alert = ({
  variant,
  children,
  className,
}: Readonly<AlertProps>) => (
  <div role="alert" className={`alert alert-${variant} ${className ?? ""}`}>
    {children}
  </div>
);
