import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { fetchTodos } from "../../services";
import { TodoItem } from "./TodoItem";

export default function TodoList() {
  const dispatch = useAppDispatch();
  // const todosState = useAppSelector(store => store.todos);
  // const { todos, error } = todosState;
  const { todos, error } = useAppSelector((store) => store.todos);

  useEffect(() => {
    void dispatch(fetchTodos());
  }, []);

  // Este error es captura por el ErrorBoundary que envuelve al componente
  if (error) {
    throw new Error(error);
  }

  return (
    <ul className="list-group">
      {todos.length === 0 ? (
        <li className="list-group-item text-center text-muted">
          ¡No hay tareas pendientes!
        </li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
}
