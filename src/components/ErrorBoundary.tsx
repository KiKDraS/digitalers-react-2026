import {
  Component,
  type ErrorInfo,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { Button } from "./button/Button";

interface ErrorBoundaryProps extends PropsWithChildren {
  // Fallback personalizado: recibe el error y una función para resetear
  fallback?: (error: Error, reset: () => void) => ReactNode;
  // Se ejecuta al resetear el boundary (ej. para re-despachar el fetch)
  onReset?: () => void;
  // Cuando cambian estas keys, el boundary se resetea automáticamente
  resetKeys?: unknown[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ErrorBoundary: componente de CLASE (los hooks no pueden capturar errores).
// Solo captura errores durante el render, lifecycle y constructores.
// NO captura errores de async (fetch/promises) ni de event handlers.
// Por eso el "hack": el error del fetch se guarda en Redux y se relanza
// (throw) durante el render para que este boundary lo capture.
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  // Se llama al renderizar: si un hijo lanza un error, actualizamos el estado
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // Se llama después de capturar el error (útil para logging)
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  // Si cambian las resetKeys mientras hay error, reseteamos el boundary
  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (!this.state.hasError) return;

    const prevKeys = prevProps.resetKeys;
    const nextKeys = this.props.resetKeys;

    if (prevKeys && nextKeys) {
      const changed =
        prevKeys.length !== nextKeys.length ||
        nextKeys.some((key, i) => key !== prevKeys[i]);
      if (changed) this.reset();
    }
  }

  // Resetea el estado del boundary y avisa al padre (ej. para re-fetch)
  reset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      const error =
        this.state.error ?? new Error("Ocurrió un error inesperado");

      // Fallback personalizado si se pasa por props
      if (this.props.fallback) {
        return this.props.fallback(error, this.reset);
      }

      // Fallback por defecto con Bootstrap
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Algo salió mal
          </h4>
          <p className="mb-2">{error.message}</p>
          <Button color="danger" onClick={this.reset}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Reintentar
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
