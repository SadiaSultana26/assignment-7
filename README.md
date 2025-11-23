

# What is JSX, and why is it used?
## JSX is a syntax that allows you to write HTML-like code inside JavaScript.
### It is used in React because it makes UI code easier to write, read, and understand. React then compiles JSX into JavaScript functions that create UI elements.

# What is the difference between State and Props?
### State is internal data that a component manages and can change over time.
### Props are external data passed from a parent component and are read-only.

# What is the useState hook, and how does it work?
### useState is a React hook that lets components store and update state.
### It returns a state value and a function to change it. When the state updates, the component re-renders.

# How can you share state between components in React?
### We can share state by lifting the state up to a common parent and passing it as props, or by using the Context API for global/shared data.

# How is event handling done in React?
### Event handling in React is done by using camelCase event names (like onClick) and passing a function that runs when the event occurs.
