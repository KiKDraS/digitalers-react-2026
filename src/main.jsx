import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// JS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { AppErrorPage } from "./pages/AppErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      fallback={({ reset, error }) => (
        <AppErrorPage error={error} onRetry={reset} />
      )}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
