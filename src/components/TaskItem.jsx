import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, updateTask }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, text);
    setEditing(false);
  };

  return (
    <div className="flex justify-between items-center">
      
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-600 p-1 rounded"
        />
      ) : (
        <span
          onClick={() => toggleTask(task.id)}
          className={`cursor-pointer ${
            task.completed ? "line-through opacity-50" : ""
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-500 px-2 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 px-2 rounded hover:bg-yellow-600 transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 px-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}