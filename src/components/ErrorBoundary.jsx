import React from "react";

/*
    ErrorBoundary sólo captura errores de React. No de peticiones AJAX
*/

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la UI de fallback.
    // Guardamos también el error para pasárselo al fallback.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte.
    console.error("Error atrapado por ErrorBoundary:", error, errorInfo);
  }

  // Reinicia el estado para que el ErrorBoundary intente renderizar el
  // subtree de nuevo.
  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // La prop fallback puede ser JSX o una función (render-prop):
      // fallback({ reset, error }) nos deja pasar la UI, el error atrapado
      // y un botón "Reintentar" que vuelve a intentar renderizar a los hijos.
      if (typeof this.props.fallback === "function") {
        return this.props.fallback({
          reset: this.reset,
          error: this.state.error,
        });
      }

      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
