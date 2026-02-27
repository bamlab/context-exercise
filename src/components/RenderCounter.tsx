import { useRef } from "react";

type RenderCounterProps = {
  label: string;
};

export const RenderCounter = ({ label }: RenderCounterProps) => {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <span className="render-counter">
      {label} renders: {renders.current}
    </span>
  );
};
