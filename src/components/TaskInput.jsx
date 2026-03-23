import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 p-2 rounded bg-gray-700 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button className="bg-green-500 px-4 rounded hover:bg-green-600 transition">
        Add
      </button>
    </form>
  );
}