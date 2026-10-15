import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// JS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
