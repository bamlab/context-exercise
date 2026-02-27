import "./index.css";
import { useState } from "react";
import { AuthPanel } from "./no-context/AuthPanel";
import { Layout } from "./no-context/Layout";
import type { User } from "./types";

export function App() {
  const [tick, setTick] = useState(0);
  const [user, setUser] = useState<User | null>({
    id: "u-1",
    name: "Ada Lovelace",
    role: "Trainer",
  });

  const isLoggedIn = user !== null;

  const login = () => {
    setUser({
      id: "u-1",
      name: "Ada Lovelace",
      role: "Trainer",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
      </header>

      <section className="card stack">
        <h2>1) Baseline: no context</h2>
        <div className="row">
          <button onClick={() => setTick(current => current + 1)}>
            Rerender app ({tick})
          </button>
          <button onClick={isLoggedIn ? logout : login}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        <Layout user={user} />
        <AuthPanel isLoggedIn={isLoggedIn} user={user} />
      </section>
    </main>
  );
}
