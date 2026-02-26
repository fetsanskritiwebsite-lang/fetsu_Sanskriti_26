import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "sanskriti2025") {
      onLogin();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="font-display text-3xl text-secondary">Admin Panel</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to manage events</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              placeholder="Enter username"
              className="border-border bg-muted/50 focus-visible:ring-secondary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter password"
              className="border-border bg-muted/50 focus-visible:ring-secondary"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
