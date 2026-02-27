import "./index.css";
import { useMemo, useState } from "react";
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

  const treePath = useMemo(() => {
    return "App -> Layout -> Sidebar -> Avatar";
  }, []);

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
        <p>
          Baseline branch with no context: data is passed through props to show
          prop drilling first.
        </p>
      </header>

      <section className="card stack">
        <h2>1) Baseline: no context</h2>
        <p>
          Path used to pass <code>user</code>: <code>{treePath}</code>
        </p>
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

      <section className="card">
        <h2>2) Learning goals</h2>
        <ul>
          <li>Understand when Context is useful and when it is not.</li>
          <li>Identify the 3 reasons a React component rerenders.</li>
          <li>Explain why Provider value references can trigger broad rerenders.</li>
          <li>Practice context optimization techniques.</li>
        </ul>
      </section>

      <section className="card">
        <h2>3) Follow-up branches</h2>
        <ul>
          <li>
            <code>exercise/create-base-context</code>
          </li>
          <li>
            <code>exercise/create-optimized-context</code>
          </li>
          <li>
            <code>exercise/react-rerender-reasons</code>
          </li>
        </ul>
      </section>
    </main>
  );
}
