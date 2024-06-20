import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function IncreaseValue(){
    setCount((count) => count + 1)
  }
  return (
    <>
      <button style={{background: "red"}} onClick={IncreaseValue}>
        count is {count}
      </button>
    </>
  )
}

export default App
