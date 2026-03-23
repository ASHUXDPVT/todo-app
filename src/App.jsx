import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const updateTask = (id, text) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start p-6">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg text-white">

        <h1 className="text-2xl font-bold text-center mb-4">
          🚀 To-Do App
        </h1>

        <TaskInput addTask={addTask} />
        <Filter setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

      </div>
    </div>
  );
}