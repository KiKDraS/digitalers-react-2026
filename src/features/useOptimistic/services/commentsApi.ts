import type { Comment } from "../types/Comment";

// JSONPlaceholder simula el POST: devuelve un id, pero no persiste el dato.
const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments";

// Interfaz: forma de la respuesta de JSONPlaceholder.
interface CommentResponse {
  id: number;
  body: string;
}

// Servicio: agrupa las llamadas relacionadas con comentarios.
export const commentsApi = {
  // Promise<Comment>: envía el comentario y devuelve el comentario guardado.
  addComment: async (text: string): Promise<Comment> => {
    const response = await fetch(COMMENTS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "demo",
        email: "demo@test.com",
        body: text,
        postId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("No se pudo guardar el comentario");
    }

    const data: CommentResponse = await response.json();
    return { id: String(data.id), text: data.body };
  },
};
