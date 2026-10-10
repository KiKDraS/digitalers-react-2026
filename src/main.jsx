import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/*
  Punto de entrada de la App
*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/*
 JS ejecuta función render() 
  -> Argumento render() return de StrictMode 
  -> Argumento StrictMode App
  -> App return <main>...</main>  
*/
