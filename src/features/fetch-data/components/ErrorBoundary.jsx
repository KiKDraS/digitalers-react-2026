import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para que el siguiente renderizado muestre la UI de fallback.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte.
    console.error("Error atrapado por ErrorBoundary:", error, errorInfo);
  }

  // Reinicia el estado para que el ErrorBoundary intente renderizar el
  // subtree de nuevo. Sin esto, una vez atrapado el error la UI de fallback
  // se mostraría para siempre. Nota: después de componentDidCatch, React
  // desmonta el subtree que falló, por lo que un nuevo render lo remonta
  // desde cero (state local y efectos se recrean).
  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // La prop fallback puede ser JSX o una función (render-prop):
      // fallback({ reset }) nos deja pasar la UI y a la vez un botón
      // "Reintentar" que vuelve a intentar renderizar a los hijos.
      if (typeof this.props.fallback === "function") {
        return this.props.fallback({ reset: this.reset });
      }

      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
