import "./index.css";
import { memo, useState } from "react";
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

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
      </header>

      <section className="card stack">
        <h2>1) Optimized context</h2>
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
