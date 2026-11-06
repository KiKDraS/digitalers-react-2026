import { useCallback, useState, type ChangeEvent } from "react";

// Hook: maneja el estado de un formulario controlado.
// Record<string, string>: cada campo del formulario es un string.
export const useForm = (initialForm: Record<string, string> = {}) => {
  const [form, setForm] = useState(initialForm);

  // ChangeEvent: evento de cambio de un input.
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { form, handleChange, updateForm: setForm };
};
