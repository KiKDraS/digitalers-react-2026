import { useEffect, useState } from "react";
import { Spinner } from "../../../../components/Spinner";
import { getErrorMessage } from "../../../../utils/getErrorMessage";
import { UserProfileCard } from "../../../users/components/UserProfileCard";
import { userApi } from "../../../users/services/userApi";
import type { User } from "../../../users/types/User";

// Interfaz: props del contenido del perfil.
interface UserProfileContentProps {
  userId: number;
}

// ❌ React 18: fetch con useEffect + useState y manejo manual del error.
export default function UserProfileContent({
  userId,
}: Readonly<UserProfileContentProps>) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // Error | null: guarda el error para relanzarlo en el render.
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const user = await userApi.getById(userId);
        setUser(user);
      } catch (err) {
        setError(new Error(getErrorMessage(err, "Error al cargar")));
      } finally {
        setLoading(false);
      }
    };

    void fetchUser();
  }, [userId]);

  // ❌ El ErrorBoundary no captura errores de useEffect.
  // Al relanzar el error en el render, el boundary del padre sí lo captura.
  if (error) throw error;

  if (loading) return <Spinner />;
  if (!user) return null;

  return <UserProfileCard user={user} />;
}
