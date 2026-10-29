import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { ThemeProvider } from "./features/theme/context/ThemeProvider";
import { ROUTES } from "./pages/constants";
import { ProtectedRoute } from "./pages/guards/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/layouts/Layout";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RouterErrorPage } from "./pages/RouterErrorPage";
import { SettingsPage } from "./pages/settings-page/SettingsPage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME, // Ruta padre: su layout envuelve a todas las rutas hijas
    element: <Layout />, // Elemento que se renderiza siempre
    errorElement: <RouterErrorPage />, // Página a mostrar cuando la App falla, dentro del router
    children: [
      // ===== RUTAS PÚBLICAS =====
      { path: ROUTES.LOGIN, element: <LoginPage /> },

      // ===== RUTAS PROTEGIDAS =====
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <HomePage /> },
          { path: ROUTES.PROFILE, element: <ProfilePage /> },
          { path: ROUTES.SETTINGS, element: <SettingsPage /> },
        ],
      },

      { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);

// React Router - https://reactrouter.com/
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />;
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
