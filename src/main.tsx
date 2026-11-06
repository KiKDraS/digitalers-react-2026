import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// El ! (non-null assertion) le dice a TypeScript que #root existe.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
