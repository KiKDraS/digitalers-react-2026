import { Button } from "../components/button/Button";
import { Section } from "../components/Section";
import { useAuthContext } from "../features/auth/context/AuthProvider";
import { THEME } from "../features/theme/constants";
import { useThemeContext } from "../features/theme/context/useThemeContext";

export const ProfilePage = () => {
  const { user, logout } = useAuthContext();
  const { isLightTheme } = useThemeContext();

  return (
    <Section>
      <div className="card shadow-sm">
        <div className="card-header">
          <h3>Perfil de Usuario</h3>
        </div>
        <div className="card-body">
          <p className="fs-4">
            <strong>Nombre:</strong> {user.name}
          </p>
          <p className="fs-4">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="card-footer">
          <Button
            text="Cerrar sesión"
            onClick={logout}
            color={isLightTheme ? THEME.DARK : THEME.LIGHT}
          />
        </div>
      </div>
    </Section>
  );
};
