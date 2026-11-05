import { createSlice, isRejected, type PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "./constants/STATUS";
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from "./services";
import type { Todo } from "./types/Todo";
import type { TodoState } from "./types/TodoState";

const initialState: TodoState = {
  todos: [],
  status: STATUS.IDLE,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Reducers sincrónicos
  },
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchTodos.pending, (state) => {
        state.error = null;
        state.status = STATUS.PENDING;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.status = STATUS.FULFILLED;
        state.todos = action.payload;
      })
      // Error Handler específico. Si existe, se usa por sobre el global
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.error = action.error.message || "Error al cargar las tareas";
      })
      // POST
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      // PUT
      .addCase(toggleTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        );

        if (index === -1) return;

        state.todos[index] = action.payload;

        // findIndex devuelve -1 si no encuentra el elemento
        // if (index !== -1) {
        //     state.todos[index] = action.payload;
        // }
      })
      // DELETE
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      // Global Error Handler
      .addMatcher(isRejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.error =
          action.error.message || "Algo salió mal con el todosSlice";
      });
  },
});

export const todosReducer = todoSlice.reducer;
