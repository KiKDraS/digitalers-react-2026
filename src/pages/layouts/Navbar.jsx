import { Link, NavLink } from "react-router";
import { Button } from "../../components/button/Button";
import { useAuthContext } from "../../features/auth/context/AuthProvider";
import { THEME } from "../../features/theme/constants";
import { useThemeContext } from "../../features/theme/context/useThemeContext";
import { ROUTES } from "../constants";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { toggleTheme, isLightTheme } = useThemeContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${user ? "d-none d-lg-block" : "d-block"}`}
          to={ROUTES.HOME}
        >
          Integrador React
        </Link>
        {user && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Uso de NavLink */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" end to={ROUTES.HOME}>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" end to={ROUTES.PROFILE}>
                    Perfil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" end to={ROUTES.SETTINGS}>
                    Configuración
                  </NavLink>
                </li>
              </ul>
            </div>
            <span className="navbar-text me-3">Hola, {user.name}!</span>
          </>
        )}
        {/* Toggle de Tema */}
        <Button
          onClick={toggleTheme}
          text={isLightTheme ? "🌙 Dark" : "☀️ Light"}
          color={isLightTheme ? THEME.DARK : THEME.LIGHT}
        />
      </div>
    </nav>
  );
};
