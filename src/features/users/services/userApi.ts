import type { User } from "../types/User";

// API pública de prueba para usuarios.
const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

// Interfaz: forma de la respuesta de JSONPlaceholder.
interface JsonPlaceholderUser {
  id: number;
  name: string;
}

// JSONPlaceholder no tiene avatar; generamos uno con las iniciales.
// PUT es simulado: el cambio no persiste al recargar.
const toUser = (data: JsonPlaceholderUser): User => ({
  id: String(data.id),
  name: data.name,
  avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${data.name}`,
});

// Map: una promesa por usuario para reutilizarla y evitar fetches duplicados.
const userPromises = new Map<number, Promise<User>>();

// fetchUser: hace la petición real a la API.
const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`${USERS_API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Usuario ${id} no encontrado`);
  }

  const data: JsonPlaceholderUser = await response.json();
  return toUser(data);
};

// getById: devuelve la misma promesa para el mismo id.
const getById = (id: number): Promise<User> => {
  const cached = userPromises.get(id);
  const hasBeingCalled = cached !== undefined;
  if (hasBeingCalled) return cached;

  const promise = fetchUser(id);
  userPromises.set(id, promise);
  return promise;
};

// updateName: actualiza el nombre y descarta la promesa cacheada.
const updateName = async (id: number, name: string): Promise<User> => {
  const response = await fetch(`${USERS_API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error(`No se pudo actualizar el usuario ${id}`);
  }

  // JSONPlaceholder devuelve solo id y name.
  const data: JsonPlaceholderUser = await response.json();

  // El próximo getById debe pedir datos frescos.
  userPromises.delete(id);

  return toUser({ id, name: data.name });
};

// refetch: elimina la promesa fallida y fuerza un nuevo intento.
const refetch = (id: number): Promise<User> => {
  userPromises.delete(id);
  return getById(id);
};

// Servicio: agrupa las llamadas HTTP relacionadas con usuarios.
export const userApi = {
  getById,
  updateName,
  refetch,
};
