import "./index.css";
import { useMemo, useState } from "react";
import { AuthPanel } from "./no-context/AuthPanel";
import { useAuth, AuthProvider } from "./context/base/AuthContext";
import { Layout } from "./no-context/Layout";

export function App() {
  return (
    <AuthProvider>
      <WorkshopApp />
    </AuthProvider>
  );
}

const WorkshopApp = () => {
  const [tick, setTick] = useState(0);
  const { isLoggedIn, login, logout } = useAuth();

  const treePath = useMemo(() => "App -> Layout -> Sidebar -> Avatar", []);

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
        <p>
          Base context exercise: auth data is now shared through a single
          provider.
        </p>
      </header>

      <section className="card stack">
        <h2>1) Base context</h2>
        <p>
          The data still originates from the same path: <code>{treePath}</code>
        </p>
        <div className="row">
          <button onClick={() => setTick(current => current + 1)}>
            Rerender app ({tick})
          </button>
          <button onClick={isLoggedIn ? logout : login}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        <Layout />
        <AuthPanel />
      </section>

      <section className="card">
        <h2>2) Learning goals</h2>
        <ul>
          <li>Remove prop drilling with a shared provider.</li>
          <li>Observe rerenders when provider value changes.</li>
          <li>Prepare next optimization steps for context performance.</li>
        </ul>
      </section>

      <section className="card">
        <h2>3) Follow-up branches</h2>
        <ul>
          <li>
            <code>main</code> (baseline without context)
          </li>
          <li>
            <code>exercise/create-base-context</code> (current branch)
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
};
