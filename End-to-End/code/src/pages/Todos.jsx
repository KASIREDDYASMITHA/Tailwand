import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodoList from "../components/TodoList";
import UpdateTodoModal from "../components/UpdateTodoModal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  fetchTodosByUser,
  createTodo,
  toggleTodoStatus,
  deleteTodoById,
  updateTodoTitle,
} from "../services/todo.service";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const selectedTodo = useMemo(
    () => todos.find((t) => t.id === selectedId) || null,
    [todos, selectedId]
  );

  const load = async () => {
    setErr("");
    setLoading(true);
    try {
      const items = await fetchTodosByUser(user.uid);
      setTodos(items);
      if (items.length && !selectedId) setSelectedId(items[0].id);
    } catch (error) {
      setErr(error.message || "Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    load();
    // You could add a real-time listener with onSnapshot for production
  }, [user]);

  const handleCreate = async () => {
    if (!newTitle.trim()) return;
    const created = await createTodo({ userId: user.uid, title: newTitle.trim() });
    setTodos((prev) => [created, ...prev]);
    setNewTitle("");
    setSelectedId(created.id);
  };

  const handleToggle = async (todo) => {
    const next = await toggleTodoStatus(todo.id, todo.status);
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? { ...t, status: next } : t)));
  };

  const handleDelete = async (todo) => {
    await deleteTodoById(todo.id);
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    if (selectedId === todo.id) setSelectedId(null);
  };

  const handleEdit = (todo) => {
    setEditing(todo);
    setModalOpen(true);
  };

  const handleSaveEdit = async (title) => {
    if (!editing) return;
    await updateTodoTitle(editing.id, title);
    setTodos((prev) => prev.map((t) => (t.id === editing.id ? { ...t, title } : t)));
    setEditing(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar filter={filter} setFilter={setFilter} />
      <div className="max-w-6xl mx-auto w-full px-4 py-4">
        {/* Create Todo */}
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Create a new todo..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button onClick={handleCreate}>Add</Button>
        </div>

        {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
        {loading ? (
          <div className="p-6">Loading your todos...</div>
        ) : (
          <TodoList
            todos={todos}
            filter={filter}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      </div>
      <Footer />

      <UpdateTodoModal
        open={modalOpen}
        setOpen={setModalOpen}
        todo={editing}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
