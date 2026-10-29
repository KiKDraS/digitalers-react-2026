import { Section } from "../components/Section";
import { useAuthContext } from "../features/auth/context/AuthProvider";

export const HomePage = () => {
  const {
    user: { name },
  } = useAuthContext();

  return (
    <Section>
      <div className="card text-center shadow-sm p-4">
        <div className="card-body">
          <h1 className="card-title">Página de Inicio</h1>
          <p className="card-text fs-5">¡Bienvenido de vuelta, {name}!</p>
        </div>
      </div>
    </Section>
  );
};
