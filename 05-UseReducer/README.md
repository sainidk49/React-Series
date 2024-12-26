# React `useReducer` Hook

The `useReducer` hook in React is an alternative to `useState` for managing state in a more predictable way, especially when dealing with complex state logic or multiple state transitions.

## When to Use `useReducer`

- **Complex state logic**: When state transitions depend on previous state values or require more complex updates.
- **Multiple sub-values**: When the state consists of multiple pieces of state that need to be updated independently.
- **Performance optimization**: When passing callbacks down to child components, `useReducer` can help reduce unnecessary re-renders as it provides a more structured and controlled state update mechanism.

## Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
