import React, { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  const getValue = () => {
    const value = inputRef.current.value;
    setName(value);
  }

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input onChange={getValue} ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <div>Name : {name}</div>
    </div>
  );
}

export default App;
