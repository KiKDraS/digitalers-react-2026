import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/*
  Punto de entrada de la App
*/

// Elemento existente en HTML que permite la inclusión de JS dinámico
const htmlElement = document.getElementById("root");

// Convertir el elemento HTML en el "ancla" de React
const rootReactElement = createRoot(htmlElement);

// Insertar en el "ancla" el HTML que crean los componentes de React
// rootReactElement.render(<App />);
rootReactElement.render(
  <StrictMode>
    {/*
        StrictMode
          -> Componente especial de React que envuelve a la aplicación
          -> No se ve en pantalla: solo ayuda durante el desarrollo
          -> Ejecuta los componentes dos veces en desarrollo para detectar errores
            -> Si hay un error, se nota más rápido
          -> Ayuda a encontrar malas prácticas y problemas de rendimiento
          -> En producción no hace nada: solo actúa en desarrollo
          -> Nos avisa de errores antes de publicar
      */}
    <App />
    {/* App === Componente React | <App /> === Usar el Componente React */}
  </StrictMode>,
);
