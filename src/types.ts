export const todoStatus = {
  DOING: 'DOING' as const,
  DONE: 'DONE' as const,
};

export const todoFilter = {
  ALL: 'ALL' as const,
  ...todoStatus,
};

export type TodoStatus = keyof typeof todoStatus;
export type TodoFilter = keyof typeof todoFilter;

export type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
};
