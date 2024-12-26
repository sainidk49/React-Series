# React useCallback Hook

The `useCallback` hook is part of React's Hooks API and is used to memoize functions so that they are not re-created on every render. This can help optimize performance by preventing unnecessary re-renders of child components that rely on those functions.

## Why Use `useCallback`?

In React, functions are typically re-created on every render. This can be problematic, especially when passing functions down as props to child components. When a parent component re-renders, the child component may also re-render if the function is passed as a prop, even if the function hasn't actually changed. The `useCallback` hook helps avoid this behavior by memoizing the function, ensuring that it is only recreated when one of its dependencies changes.

## Syntax

```jsx
const memoizedCallback = useCallback(() => {
  // Your function logic here
}, [dependencies]);
