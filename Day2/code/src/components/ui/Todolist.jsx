"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/Todolist";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Card className="w-[400px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(index)} />
              <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
