import { Link } from "react-router";
import { Button } from "../../components/button/Button";
import { useAuthContext } from "../../features/auth/context/AuthProvider";
import { ROUTES } from "../constants";

export const Navbar = () => {
  const { logout, user } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Link equivalente a elemento a. to equivalente a href */}
        <Link className="navbar-brand d-none d-lg-block" to={ROUTES.HOME}>
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={ROUTES.HOME}
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Button color="danger" onClick={logout} text="Cerrar sesión" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
