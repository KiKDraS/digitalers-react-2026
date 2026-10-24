import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthContext } from "../../features/auth/context/AuthProvider";
import { ROUTES } from "../constants";

export const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  // No hay sesión iniciada (user === null)
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // Si hay sesión iniciada, renderizar la ruta correspondiente (la ruta que se encuentra envuelta por ProtectedRoute)
  return <Outlet />;
};
