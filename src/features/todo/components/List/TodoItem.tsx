import { Button } from "../../../../components/button/Button";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../../store/hooks/useAppSelector";
import { STATUS } from "../../constants/STATUS";
import { deleteTodo, toggleTodo } from "../../services";
import type { Todo } from "../../types/Todo";
import styles from "./TodoItem.module.css";
import { clasesSelector } from "./utils/clasesSelector";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const { itemClasses, iconClasses, textClasses, btnClases } = clasesSelector(
    todo.completed,
  );
  const isPending = useAppSelector(
    (store) => store.todos.status === STATUS.PENDING,
  );

  const handleToggle = () => {
    void dispatch(toggleTodo(todo));
  };

  const handleDelete = () => {
    void dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={itemClasses}>
      <div>
        {/* Icono para marcar como completado */}
        <Button
          className={btnClases}
          onClick={handleToggle}
          disabled={isPending}
          aria-label={
            todo.completed ? "Marcar como pendiente" : "Marcar como completada"
          }
        >
          <i className={iconClasses}></i>
        </Button>

        {/* Texto de la tarea */}
        <Button
          className={`${btnClases} ${textClasses} p-0 text-start ${styles.noHoverBg}`}
          onClick={handleToggle}
          disabled={isPending}
        >
          {todo.text}
        </Button>
      </div>

      {/* Botón de eliminar */}
      <Button
        color="danger"
        onClick={handleDelete}
        disabled={isPending}
        aria-label="Eliminar tarea"
      >
        <i className="bi bi-trash3-fill"></i>
      </Button>
    </li>
  );
};
