import React, { useState } from "react";
import { PencilSimple, Trash, Check, Plus } from "phosphor-react";
import "./App.css";
import { employees as initialEmployees } from "./data";

const App: React.FC = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [newEmployee, setNewEmployee] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");

  const addEmployee = () => {
    if (newEmployee.trim() === "") return;
    const newEntry = { id: Date.now(), name: newEmployee, todos: [] };
    setEmployees([...employees, newEntry]);
    setNewEmployee("");
  };

  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const startEditing = (id: number, name: string) => {
    setEditingId(id);
    setEditingName(name);
  };

  const saveEdit = (id: number) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, name: editingName } : employee
      )
    );
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Employee App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Add a new employee..."
          value={newEmployee}
          onChange={(e) => setNewEmployee(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={addEmployee}
        >
          <Plus size={20} />
        </button>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Todos</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-t">
              <td className="p-3">
                {editingId === employee.id ? (
                  <input
                    className="border p-2 rounded w-full"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                ) : (
                  <span>{employee.name}</span>
                )}
              </td>
              <td className="p-3">
                <ul className="list-disc pl-6">
                  {employee.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                  ))}
                </ul>
              </td>
              <td className="p-3 text-center space-x-2 flex justify-center">
                {editingId === employee.id ? (
                  <button
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    onClick={() => saveEdit(employee.id)}
                  >
                    <Check size={20} />
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                    onClick={() => startEditing(employee.id, employee.name)}
                  >
                    <PencilSimple size={20} />
                  </button>
                )}
                <button
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
