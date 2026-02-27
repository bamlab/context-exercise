import { RenderCounter } from "../components/RenderCounter";
import type { User } from "../types";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  user: User | null;
};

export const Layout = ({ user }: LayoutProps) => {
  return (
    <article className="node">
      <h3>Layout</h3>
      <RenderCounter label="Layout" />
      <Sidebar user={user} />
    </article>
  );
};
