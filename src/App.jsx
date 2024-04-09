// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showStoredTasks, setShowStoredTasks] = useState(false);
  const [storedTasks, setStoredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      console.log("Tareas almacenadas:", storedTasks); // Imprimir tareas almacenadas en la consola
      setStoredTasks(storedTasks);
    }
  }, []);

  const handleShowStoredTasks = () => {
    setShowStoredTasks(true);
  };

  const handleClearStoredTasks = () => {
    localStorage.removeItem("tasks");
    setStoredTasks([]);
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <TaskForm
          onAddTask={(taskName) => {
            const newTask = {
              id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
              name: taskName,
              completed: false,
            };
            setTasks([...tasks, newTask]);
          }}
        />
        <TaskList tasks={tasks} />
        {showStoredTasks && (
          <div className="stored-tasks">
            <h3>Stored Tasks</h3>
            <ul>
              {storedTasks.map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>
            <button onClick={handleClearStoredTasks}>Clear Stored Tasks</button>
          </div>
        )}
        {!showStoredTasks && (
          <button onClick={handleShowStoredTasks}>Show Stored Tasks</button>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
