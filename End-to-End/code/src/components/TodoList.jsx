import { useMemo } from "react";
import Sidebar from "./Sidebar";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  selectedId,
  setSelectedId,
  onToggle,
  onDelete,
  onEdit,
}) {
  const filtered = useMemo(() => {
    if (filter === "all") return todos;
    return todos.filter((t) => t.status === filter);
  }, [todos, filter]);

  const selected = filtered.find((t) => t.id === selectedId) || null;

  return (
    <div className="flex">
      <Sidebar
        todos={filtered}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <main className="flex-1 bg-white h-[calc(100vh-120px)] overflow-y-auto">
        <TodoItem todo={selected} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      </main>
    </div>
  );
}
