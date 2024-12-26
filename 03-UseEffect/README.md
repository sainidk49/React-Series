# useEffect Hook Documentation

The `useEffect` hook is used to perform side effects in function components. It allows you to handle tasks such as data fetching, subscriptions, or manually changing the DOM. In React, side effects are actions that can affect the outside world, but do not directly affect the rendering of the component.

## Table of Contents
- [Basic Usage](#basic-usage)
- [Effect Cleanup](#effect-cleanup)
- [Conditional Effects](#conditional-effects)
- [Multiple Effects](#multiple-effects)
- [Dependency Array](#dependency-array)
- [Common Patterns](#common-patterns)
- [Example](#example)


## Basic Usage

The `useEffect` hook is called inside your component and takes two arguments:

1. **Effect Function**: A function that contains the side effect you want to perform.
2. **Dependencies (optional)**: An optional array of dependencies that determines when the effect should run.

