import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "./types/Todo";

const BASE_URL = "https://63c3312d8bb1ca34755ea0d1.mockapi.io/todos";

// GET
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) throw new Error("Error getting todos");

  const data: Todo[] = await response.json();
  return data;
});

// POST
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text: string) => {
    // Omit<Todo, "id">: el tipo Todo sin la key "id" (la genera el backend)
    const newTodo: Omit<Todo, "id"> = { text, completed: false };

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) throw new Error("Error creating todo");

    const data: Todo = await response.json();
    return data;
  },
);

// PUT
export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (todo: Todo) => {
    const response = await fetch(`${BASE_URL}/${todo.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    if (!response.ok) throw new Error("Error updating todo");

    const data: Todo = await response.json();
    return data;
  },
);

// DELETE
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error deleting todo");

    const data: Todo = await response.json();
    return data.id;
  },
);
