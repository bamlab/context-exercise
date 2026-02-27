# React Context Training Playground

This repository is organized as a workshop:

- `main`: baseline app without context (prop drilling first)
- `exercise/create-base-context`: first context implementation
- `exercise/bad-context-side-effect`: intentionally bad provider with a side-effect-driven extra rerender
- `exercise/create-optimized-context`: optimized provider with split responsibilities
- `exercise/react-rerender-reasons`: dedicated demo of React rerender causes

## Exercise order

1. `main`
2. `exercise/create-base-context`
3. `exercise/bad-context-side-effect`
4. `exercise/create-optimized-context`
5. `exercise/react-rerender-reasons`

## Run locally

```bash
bun install
bun dev
```

Then open the local URL shown in the terminal.
