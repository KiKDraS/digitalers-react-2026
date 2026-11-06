import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Button } from "../../../components/button/Button";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { addTodo } from "../services";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No se envía texto vacío
    if (text.trim() === "") return;

    void dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={text}
          placeholder="¿Qué necesitas hacer?"
          onChange={handleChange}
        />
        <Button type="submit" className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Añadir
        </Button>
      </div>
    </form>
  );
};
