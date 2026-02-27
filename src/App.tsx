import "./index.css";
import { useState } from "react";
import { RenderCounter } from "./components/RenderCounter";
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
  const { isLoggedIn, login, logout, notifications, addNotification } =
    useAuth();

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
      </header>

      <section className="card stack">
        <h2>1) Bad context: inline value object</h2>
        <div className="row">
          <button onClick={() => setTick(current => current + 1)}>
            Rerender app ({tick})
          </button>
          <button onClick={isLoggedIn ? logout : login}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <button onClick={addNotification}>
            Add notification ({notifications})
          </button>
        </div>

        <Layout />
        <AuthPanel />
        <NotificationBadge />
      </section>
    </main>
  );
};

const NotificationBadge = () => {
  const { notifications } = useAuth();

  return (
    <article className="node">
      <h3>NotificationBadge</h3>
      <RenderCounter label="NotificationBadge" />
      <p>Unread: {notifications}</p>
    </article>
  );
};
