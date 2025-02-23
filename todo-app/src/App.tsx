import React, { useState } from "react";
import "./App.css";
import { todos as initialTodos } from "./data";
import { PencilSimple, Trash, Check } from "phosphor-react";

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<string>("");
  const [newTodo, setNewTodo] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newEntry = { id: Date.now(), text: newTodo, employeeId: 1 };
    setTodos([...todos, newEntry]);
    setNewTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editingText } : todo))
    );
    setEditingId(null);
  };

  const filteredTodos = filter
    ? todos.filter((todo) => todo.employeeId === parseInt(filter))
    : todos;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Todo App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <select
        className="w-full p-2 border rounded-lg mb-4"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Employees</option>
        <option value="1">Employee 1</option>
        <option value="2">Employee 2</option>
        <option value="3">Employee 3</option>
      </select>
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
            {editingId === todo.id ? (
              <input
                className="border p-2 rounded w-full"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div className="space-x-2 flex">
              {editingId === todo.id ? (
                <button
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                  onClick={() => saveEdit(todo.id)}
                >
                  <Check size={20} />
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                  onClick={() => startEditing(todo.id, todo.text)}
                >
                  <PencilSimple size={20} />
                </button>
              )}
              <button
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
