import React from 'react';
import './App.css';
import useCustomState,{resetIndex} from './hooks/customeUseState';


const App = () => {
  resetIndex();
  const [getValue, setValue] = useCustomState(0)
  return (
    <div className='main-container'>
      <h1>{getValue}</h1>
      <button onClick={() => setValue(prev => prev + 0)}>Increment</button>
    </div>
  );
};

export default App;