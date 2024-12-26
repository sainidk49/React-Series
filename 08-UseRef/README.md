# React `useRef` Hook

The `useRef` hook is a powerful tool in React that allows you to persist values across renders without causing a re-render when the value changes. It can be used to store a reference to a DOM element, or to hold mutable values that don’t need to trigger a re-render when changed.

## When to Use `useRef`

- **Accessing DOM Elements**: `useRef` is commonly used to directly reference a DOM element (like an input field, button, or canvas) in functional components.
- **Persisting Values Across Renders**: You can use `useRef` to store any mutable value that should not cause a re-render when updated. This is useful for storing previous state or storing timeouts, intervals, or any other data that persists but doesn't need to trigger a re-render.

## Syntax

```jsx
const ref = useRef(initialValue);
