import { useAuthContext } from "../../features/auth/context/AuthProvider";
import { hasRole } from "../../features/auth/utils/roles";

export const RoleGuard = ({ children, role }) => {
  const { user } = useAuthContext();

  return hasRole(user, role) ? children : null;
};
