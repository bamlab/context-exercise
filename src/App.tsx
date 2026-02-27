import "./index.css";
import { memo, useMemo, useState } from "react";
import { RenderCounter } from "./components/RenderCounter";
import {
  AuthProvider,
  useAuthActions,
  useAuthState,
} from "./context/optimized/AuthContext";
import { AuthPanel } from "./no-context/AuthPanel";
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
  const { isLoggedIn } = useAuthState();
  const { login, logout } = useAuthActions();

  const treePath = useMemo(() => "App -> Layout -> Sidebar -> Avatar", []);

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
        <p>
          Optimized context exercise: state and actions are split to reduce
          unnecessary subscriptions.
        </p>
      </header>

      <section className="card stack">
        <h2>1) Optimized context</h2>
        <p>
          The subscription path is now context-based, while the visual path
          stays: <code>{treePath}</code>
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
        <ActionsOnlyPanel />
      </section>

      <section className="card">
        <h2>2) Learning goals</h2>
        <ul>
          <li>Stabilize provider references with memoized values.</li>
          <li>Split state and actions into separate contexts.</li>
          <li>Reduce unnecessary subscriptions for action-only consumers.</li>
        </ul>
      </section>

      <section className="card">
        <h2>3) Follow-up branches</h2>
        <ul>
          <li>
            <code>main</code> (baseline without context)
          </li>
          <li>
            <code>exercise/create-base-context</code>
          </li>
          <li>
            <code>exercise/create-optimized-context</code> (current branch)
          </li>
          <li>
            <code>exercise/react-rerender-reasons</code>
          </li>
        </ul>
      </section>
    </main>
  );
};

const ActionsOnlyPanel = memo(() => {
  const { login, logout } = useAuthActions();

  return (
    <article className="node">
      <h3>ActionsOnlyPanel</h3>
      <RenderCounter label="ActionsOnlyPanel" />
      <p>
        This component only subscribes to actions, not to <code>user</code>.
      </p>
      <div className="row">
        <button onClick={login}>Force login</button>
        <button onClick={logout}>Force logout</button>
      </div>
    </article>
  );
});
