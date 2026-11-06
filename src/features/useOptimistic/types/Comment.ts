// Interfaz: comentario guardado por la API.
export interface Comment {
  id: string;
  text: string;
}

// Intersección: Comment + pending opcional para la UI optimista.
export type OptimisticComment = Comment & { pending?: boolean };
