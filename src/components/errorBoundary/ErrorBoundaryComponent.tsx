import type { ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { Component } from "react";

// Interfaz: props del boundary genérico.
interface ErrorBoundaryComponentProps extends PropsWithChildren {
  // ReactNode: cualquier cosa que React puede renderizar.
  fallback: ReactNode;
}

// Interfaz: estado interno del ErrorBoundary.
interface ErrorBoundaryState {
  hasError: boolean;
}

// Component<Props, State>: componente de clase con props y estado tipados.
export class ErrorBoundaryComponent extends Component<
  ErrorBoundaryComponentProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // ErrorInfo: información extra que React entrega al capturar el error.
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
