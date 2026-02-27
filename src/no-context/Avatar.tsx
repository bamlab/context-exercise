import { RenderCounter } from "../components/RenderCounter";
import { useAuth } from "../context/base/AuthContext";

export const Avatar = () => {
  const { user } = useAuth();

  return (
    <article className="node">
      <h5>Avatar</h5>
      <RenderCounter label="Avatar" />
      <p>{user ? `${user.name} (${user.role})` : "Guest user"}</p>
    </article>
  );
};
