import "./index.css";
import {
  createContext,
  memo,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { RenderCounter } from "./components/RenderCounter";

export function App() {
  return (
    <main className="page">
      <header>
        <h1>React Rerender Lab</h1>
        <p>
          Dedicated branch to demonstrate the 3 common rerender causes in
          React.
        </p>
      </header>

      <section className="card stack">
        <h2>1) Local state changes</h2>
        <LocalStateDemo />
      </section>

      <section className="card stack">
        <h2>2) Prop changes</h2>
        <PropChangeDemo />
      </section>

      <section className="card stack">
        <h2>3) Context changes</h2>
        <ThemeProviderDemo>
          <ContextConsumerDemo />
        </ThemeProviderDemo>
      </section>

      <section className="card">
        <h2>Takeaways</h2>
        <ul>
          <li>Reason 1: local state updates rerender the component.</li>
          <li>Reason 2: changing props rerenders the receiving component.</li>
          <li>Reason 3: changing context value rerenders subscribers.</li>
        </ul>
      </section>
    </main>
  );
}

const LocalStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <article className="node">
      <h3>LocalCounter</h3>
      <RenderCounter label="LocalCounter" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(current => current + 1)}>
        setState (+1)
      </button>
    </article>
  );
};

const PropChangeDemo = () => {
  const [label, setLabel] = useState("Welcome");
  const [parentTick, setParentTick] = useState(0);

  return (
    <article className="node">
      <h3>Prop Parent</h3>
      <RenderCounter label="PropParent" />
      <div className="row">
        <button onClick={() => setLabel("Hello team")}>Change prop</button>
        <button onClick={() => setParentTick(current => current + 1)}>
          Rerender parent only ({parentTick})
        </button>
      </div>
      <MemoPropChild label={label} />
    </article>
  );
};

const PropChild = ({ label }: { label: string }) => {
  return (
    <article className="node">
      <h4>Prop Child</h4>
      <RenderCounter label="PropChild" />
      <p>Received prop: {label}</p>
    </article>
  );
};

const MemoPropChild = memo(PropChild);

type ThemeContextValue = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const ThemeProviderDemo = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [providerTick, setProviderTick] = useState(0);

  const toggleTheme = () => {
    setTheme(current => (current === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <article className="node">
        <h3>Theme Provider</h3>
        <RenderCounter label="ThemeProviderDemo" />
        <div className="row">
          <button onClick={toggleTheme}>Change context value ({theme})</button>
          <button onClick={() => setProviderTick(current => current + 1)}>
            Rerender provider only ({providerTick})
          </button>
        </div>
        {children}
      </article>
    </ThemeContext.Provider>
  );
};

const ContextConsumerDemo = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ContextConsumerDemo must be used in ThemeProviderDemo");
  }

  return (
    <article className="node">
      <h4>Context Consumer</h4>
      <RenderCounter label="ContextConsumer" />
      <p>Current theme from context: {context.theme}</p>
    </article>
  );
};
