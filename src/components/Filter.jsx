export default function Filter({ setFilter }) {
  return (
    <div className="flex justify-between mb-4">
      {["all", "active", "completed"].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-500 transition"
        >
          {f}
        </button>
      ))}
    </div>
  );
}