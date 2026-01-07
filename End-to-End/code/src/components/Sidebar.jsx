export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <aside className="w-64 border-r bg-white h-[calc(100vh-120px)] overflow-y-auto">
      <ul className="divide-y">
        {todos.map((t) => (
          <li
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`p-3 cursor-pointer ${selectedId === t.id ? "bg-blue-50" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{t.title}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  t.status === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {t.status}
              </span>
            </div>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="p-3 text-sm text-gray-500">No todos yet. Create one!</li>
        )}
      </ul>
    </aside>
  );
}
