import { Button } from "../button/Button";
import type { ButtonColor } from "../button/types";

// Interfaz: props del botón de submit reutilizable.
interface FormSubmitButtonProps {
  isPending: boolean;
  idleText: string;
  pendingText: string;
  color?: ButtonColor;
}

export const FormSubmitButton = ({
  isPending,
  idleText,
  pendingText,
  color = "primary",
}: Readonly<FormSubmitButtonProps>) => (
  <div className="col-12">
    <Button
      type="submit"
      color={color}
      text={isPending ? pendingText : idleText}
      disabled={isPending}
    />
  </div>
);
