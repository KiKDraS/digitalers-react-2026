import type { StatusType } from "../constants/STATUS";
import type { Todo } from "./Todo";

export interface TodoState {
  todos: Todo[];
  status: StatusType; // STATUS.IDLE
  // status: STATUS; - STATUS.IDLE
  error: string | null;
}
