# React `useMemo` Hook

The `useMemo` hook is a part of React's API that helps to optimize performance by memoizing the result of a computation. This means it stores the result of expensive calculations and reuses the cached value unless the dependencies change, reducing unnecessary recalculations.

## Table of Contents

- [What is `useMemo`?](#what-is-usememo)
- [Syntax](#syntax)
- [Usage Example](#usage-example)
- [When to Use `useMemo`](#when-to-use-usememo)
- [Best Practices](#best-practices)

## What is `useMemo`?

`useMemo` is a React hook that returns a memoized value. This value will only be recomputed when one of its dependencies changes. It helps to avoid unnecessary computations during re-renders, especially for expensive or complex calculations.

## Syntax

```jsx
const memoizedValue = useMemo(() => {
  // Compute value
  return result;
}, [dependencies]);
