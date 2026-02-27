import { RenderCounter } from "../components/RenderCounter";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <article className="node">
      <h3>Layout</h3>
      <RenderCounter label="Layout" />
      <Sidebar />
    </article>
  );
};
