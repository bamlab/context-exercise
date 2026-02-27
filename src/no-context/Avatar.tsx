import { RenderCounter } from "../components/RenderCounter";
import type { User } from "../types";

type AvatarProps = {
  user: User | null;
};

export const Avatar = ({ user }: AvatarProps) => {
  return (
    <article className="node">
      <h5>Avatar</h5>
      <RenderCounter label="Avatar" />
      <p>{user ? `${user.name} (${user.role})` : "Guest user"}</p>
    </article>
  );
};
