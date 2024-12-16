import React, { useState } from 'react'
// import Child from './Child';

const ChildComponent = React.lazy(()=> import('./Child'))

const App = () => {
  const [name, setName] = useState("");
  const getName = (value) =>{
    if(value){
      setName(value)
    }
  }
  return (
    <div>
        <div>
            <h3>User name :: {name}</h3>
            <ChildComponent fn={getName} />
        </div>
    </div>
  )
}

export default App