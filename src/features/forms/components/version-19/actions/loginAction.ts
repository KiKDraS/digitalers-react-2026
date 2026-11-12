import { authApi } from "../../../services/authApi";
import type { LoginState } from "../types/LoginState";

export async function loginAction(
  _prevState: LoginState | null,
  formData: FormData,
) {
  const emailEntry = formData.get("email");
  const passwordEntry = formData.get("password");

  const email = typeof emailEntry === "string" ? emailEntry : "";
  const password = typeof passwordEntry === "string" ? passwordEntry : "";

  const result = await authApi.login({ email, password });

  if (result.success) {
    return { success: result.message };
  }

  return { error: result.message };
}
