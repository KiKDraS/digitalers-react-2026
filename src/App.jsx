import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { ROUTES } from "./pages/constants";
import { ProtectedRoute } from "./pages/guards/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/layouts/Layout";
import { LoginPage } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME, // Ruta padre: su layout envuelve a todas las rutas hijas
    element: <Layout />, // Elemento que se renderiza siempre
    children: [
      // ===== RUTAS PÚBLICAS =====
      // Accesibles para cualquiera: se agregan como hijas directas del Layout.
      // Cada ruta nueva solo necesita una línea aquí.
      { path: ROUTES.LOGIN, element: <LoginPage /> },

      // ===== RUTAS PROTEGIDAS =====
      // Requieren sesión: se agrupan bajo ProtectedRoute (layout route).
      // Agregar una ruta nueva dentro de este children la protege automáticamente.
      {
        element: <ProtectedRoute />,
        children: [{ index: true, element: <HomePage /> }],
      },
    ],
  },
]);

// React Router - https://reactrouter.com/
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
