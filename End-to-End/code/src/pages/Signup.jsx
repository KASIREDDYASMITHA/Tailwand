import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await signup(form.email, form.password);
      navigate("/todos");
    } catch (error) {
      setErr(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Sign up</h1>
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <form className="space-y-3" onSubmit={submit}>
          <div>
            <label className="text-sm">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <Input
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="Minimum 6 characters"
              required
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full">
            {loading ? "Creating account..." : "Sign up"}
          </Button>
        </form>
        <p className="text-sm">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </Card>
    </div>
  );
}
