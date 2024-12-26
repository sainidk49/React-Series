# React useContext Hook

The `useContext` hook is a powerful feature in React that allows you to share state and functionality between components without having to pass props down manually through the component tree. It is part of the React Hooks API and is used to access values from a React context, providing an elegant solution for managing global state in your application.

## What is Context?

Context provides a way to share values (such as theme, authentication status, language preferences, etc.) between components at different nesting levels without needing to pass props manually through every level of the tree.

- **React.createContext** creates a context object.
- **Context.Provider** is used to supply values to the components within its tree.
- **useContext** is used to consume the values from the context.

## Setting Up useContext

### 1. Create the Context

First, create the context using `React.createContext()`.

```js
import React from 'react';

const MyContext = React.createContext();
