import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import { Section } from "../../../components/Section";
import { Spinner } from "../../../components/Spinner";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { fetchTodos } from "../services";
import { TodoForm } from "./TodoForm";

const ListTodo = lazy(() => import("./List/TodoList"));

export const Todos = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    void dispatch(fetchTodos());
  };

  return (
    <Section>
      <div className="card shadow-sm mt-5">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">
            <i className="bi bi-card-checklist me-2"></i>
            Mi Lista de Tareas
          </h1>
          <TodoForm />
          <hr className="my-4" />
          <ErrorBoundary onReset={handleReset}>
            <Suspense fallback={<Spinner />}>
              <ListTodo />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </Section>
  );
};
