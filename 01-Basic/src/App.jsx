import React, { useState, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]); 
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle ? "Toggled On" : "Toggled Off"}</p>
    </div>
  );
};

export default App;
