import React, { useState, useCallback } from 'react';

const Button = ({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click me</button>;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ajay")

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
    console.log("app render")
  }, [count]); // Memoize the function until the dependencies change (none here)

  // console.log("app render")

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
      <button onClick={() => setName("Deepak")}>{name}</button>
    </div>
  );
}

export default App