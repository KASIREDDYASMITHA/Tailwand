import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";

export default function UpdateTodoModal({ open, setOpen, todo, onSave }) {
  const [title, setTitle] = useState(todo?.title || "");

  useEffect(() => {
    setTitle(todo?.title || "");
  }, [todo]);

  const handleSave = () => {
    if (!title.trim()) return;
    onSave(title);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <label className="text-sm">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Todo title" />
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
