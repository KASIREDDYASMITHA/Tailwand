import { Button } from "./ui/button";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  if (!todo) {
    return <div className="p-6 text-gray-500">Select a todo from the sidebar.</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">{todo.title}</h2>
      <div className="flex items-center gap-2">
        <span
          className={`text-xs px-2 py-1 rounded ${
            todo.status === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {todo.status}
        </span>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onToggle(todo)} variant="secondary">
          Toggle status
        </Button>
        <Button onClick={() => onEdit(todo)} variant="default">
          Edit title
        </Button>
        <Button onClick={() => onDelete(todo)} variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  );
}
