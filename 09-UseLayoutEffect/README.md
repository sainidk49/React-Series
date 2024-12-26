## `useLayoutEffect` Hook in React

The `useLayoutEffect` hook is similar to `useEffect`, but it runs synchronously after all DOM mutations. It is typically used when you need to measure the layout of the DOM or perform side effects that require the DOM to be in a "complete" state before continuing (e.g., calculating the size of an element).

### Syntax
```jsx
useLayoutEffect(() => {
  // Code to run after DOM mutations
}, [dependencies]);
