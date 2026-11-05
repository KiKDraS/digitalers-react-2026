import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// JS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
