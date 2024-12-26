import React, { useState, useMemo } from 'react';

const ExpensiveComputation = ({ number }) =>{
  const computedValue = useMemo(() => {
    return number * 2; 
  }, [number]);

  return <p>Computed value: {computedValue}</p>;
}

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Number: {number}</p><ExpensiveComputation number={number} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      
    </div>
  );
}

export default App;
