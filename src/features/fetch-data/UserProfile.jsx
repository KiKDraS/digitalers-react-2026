import { useEffect, useState } from "react";
import { Spinner } from "./components/Spinner";

// Cambie la variable para que sea endpoint así se pueden diferenciar los ejemplos.
export default function UserProfile({ endpoint }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
    // Permite sincronizar el componente con datos externos
  useEffect(() => {
    // Se ejecuta cuando el componente se monta

    return () => {
      // Se ejecuta cuando el componente se desmonta. Opcional
    };
  }, []); // Array de dependencias - Controla cuándo se ejecuta el evento
            -> Array vacío, solo cuando se monta por PRIMERA VEZ
  */

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com${endpoint}`,
        );

        if (!response.ok)
          throw new Error("No se pudo obtener los datos del usuario");

        setUser(await response.json());
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [endpoint]);

  // Renderizado condicional
  if (isLoading) return <Spinner />;

  //   if (error)
  //     return (
  //       <div className="p-2">
  //         <div className="alert alert-danger">Error: {error}</div>
  //       </div>
  //     );

  // ErrorBoundary solo captura los errors de React. Para que capture el del fetch se lo tenemos que mandar
  if (error) throw error;

  return (
    <div className="card-body">
      {/* conditional chaining - dato?.key */}
      <h2 className="card-title">{user?.name}</h2>
      {/* <h2 className="card-title">{user?.pepe()}</h2> */}
      <p className="card-text">Email: {user?.email}</p>
    </div>
  );
}
