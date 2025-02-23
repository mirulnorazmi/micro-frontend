export interface Todo {
  id: number;
  text: string;
  employeeId: number;
}

export const todos: Todo[] = [
  { id: 1, text: "Buy groceries", employeeId: 1 },
  { id: 2, text: "Fix the car", employeeId: 2 },
  { id: 3, text: "Write report", employeeId: 1 },
  { id: 4, text: "Plan vacation", employeeId: 3 },
];