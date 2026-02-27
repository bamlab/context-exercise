import { RenderCounter } from "../components/RenderCounter";
import type { User } from "../types";

type AuthPanelProps = {
  isLoggedIn: boolean;
  user: User | null;
};

export const AuthPanel = ({ isLoggedIn, user }: AuthPanelProps) => {
  return (
    <article className="node">
      <h3>AuthPanel</h3>
      <RenderCounter label="AuthPanel" />
      <p>Status: {isLoggedIn ? "authenticated" : "anonymous"}</p>
      <p>Current user: {user?.name ?? "none"}</p>
    </article>
  );
};
