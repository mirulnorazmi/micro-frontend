import React, { useEffect } from "react";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

const MicroAppContainer = () => {
  return <div id="microapp" className="border p-4 rounded bg-gray-100 w-34 min-h-screen"></div>;
};

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    registerMicroApps([
      {
        name: "todo-app",
        entry: "//localhost:5002",
        container: "#microapp",
        activeRule: "/todo",
      },
      {
        name: "employee-app",
        entry: "//localhost:5003",
        container: "#microapp",
        activeRule: "/employee",
      },
    ]);

    setDefaultMountApp("/todo"); // Default microfrontend
    start();
  }, []);

  return (
    <div className="p-4 flex justify-center flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">Microfrontend App by mirulnorazmi</h1>
      <nav className="mb-4 flex justify-center flex-row">
        <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => navigate("/todo")}>
          Todo App
        </button>
        <button className="p-2 bg-green-500 text-white rounded" onClick={() => navigate("/employee")}>
          Employee App
        </button>
      </nav>
      
      <Routes>
        <Route path="/todo" element={<MicroAppContainer />} />
        <Route path="/employee" element={<MicroAppContainer />} />
      </Routes>
    </div>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
