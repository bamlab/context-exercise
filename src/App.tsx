import "./index.css";
import { useState } from "react";
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

  return (
    <main className="page">
      <header>
        <h1>React Context Workshop</h1>
      </header>

      <section className="card stack">
        <h2>1) Base context</h2>
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
    </main>
  );
};
