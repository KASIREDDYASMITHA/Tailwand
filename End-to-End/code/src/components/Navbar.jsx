import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-semibold text-lg">Todos App</div>
        <div className="flex items-center gap-3">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Filter: {filter}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilter("all")}>All todos</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("completed")}>Completed</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("pending")}>Pending</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <Button variant="destructive" onClick={logout}>Sign out</Button>
          ) : (
            <span className="text-sm text-gray-600">Not signed in</span>
          )}
        </div>
      </div>
    </nav>
  );
}
