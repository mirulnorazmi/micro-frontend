export interface Employee {
  id: number;
  name: string;
  todos: string[];
}

export const employees: Employee[] = [
  { id: 1, name: "John Doe", todos: ["Buy groceries", "Write report"] },
  { id: 2, name: "Jane Smith", todos: ["Fix the car"] },
  { id: 3, name: "Alice Johnson", todos: ["Plan vacation"] },
];