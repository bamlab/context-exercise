import { RenderCounter } from "../components/RenderCounter";
import { useAuthState } from "../context/optimized/AuthContext";

export const Avatar = () => {
  const { user } = useAuthState();

  return (
    <article className="node">
      <h5>Avatar</h5>
      <RenderCounter label="Avatar" />
      <p>{user ? `${user.name} (${user.role})` : "Guest user"}</p>
    </article>
  );
};
