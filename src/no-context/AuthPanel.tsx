import { RenderCounter } from "../components/RenderCounter";
import { useAuth } from "../context/base/AuthContext";

export const AuthPanel = () => {
  const { isLoggedIn, user, syncRuns } = useAuth();

  return (
    <article className="node">
      <h3>AuthPanel</h3>
      <RenderCounter label="AuthPanel" />
      <p>Status: {isLoggedIn ? "authenticated" : "anonymous"}</p>
      <p>Current user: {user?.name ?? "none"}</p>
      <p>Provider sync side-effect runs: {syncRuns}</p>
    </article>
  );
};
