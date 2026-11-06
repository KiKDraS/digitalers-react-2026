import type { User } from "../types/User";

// Interfaz: props de la tarjeta de perfil.
interface UserProfileCardProps {
  user: User;
}

// Tarjeta compartida por los ejemplos de React 18 y React 19.
// Readonly: las props no se modifican dentro del componente.
export const UserProfileCard = ({
  user,
}: Readonly<UserProfileCardProps>) => (
  <figure className="alert alert-info d-flex align-items-center gap-2">
    <img
      src={user.avatar}
      alt={user.name}
      className="rounded-circle"
      width={40}
      height={40}
    />
    <figcaption>
      <strong>{user.name}</strong> — ID: {user.id}
    </figcaption>
  </figure>
);
