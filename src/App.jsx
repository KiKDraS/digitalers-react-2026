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
      { path: ROUTES.LOGIN, element: <LoginPage /> },

      // ===== RUTAS PROTEGIDAS =====
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
