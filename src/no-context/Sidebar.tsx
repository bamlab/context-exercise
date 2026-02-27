import { RenderCounter } from "../components/RenderCounter";
import type { User } from "../types";
import { Avatar } from "./Avatar";

type SidebarProps = {
  user: User | null;
};

export const Sidebar = ({ user }: SidebarProps) => {
  return (
    <article className="node">
      <h4>Sidebar</h4>
      <RenderCounter label="Sidebar" />
      <Avatar user={user} />
    </article>
  );
};
