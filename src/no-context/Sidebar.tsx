import { RenderCounter } from "../components/RenderCounter";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <article className="node">
      <h4>Sidebar</h4>
      <RenderCounter label="Sidebar" />
      <Avatar />
    </article>
  );
};
