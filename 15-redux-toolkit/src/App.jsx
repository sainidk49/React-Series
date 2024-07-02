import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./redux/slices/counter/counter"
import './App.css'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center flex-col items-center'>
      <h1 className='text-white text-4xl'>{count}</h1>
      <button onClick={() => dispatch(increment())} className="bg-yellow-600 hover:bg-yellow-800 text-white min-w-32 rounded-xl leading-8 capitalize mt-8">increment</button>
      <button onClick={() => dispatch(decrement())} className="bg-yellow-600 hover:bg-yellow-800 text-white min-w-32 rounded-xl leading-8 capitalize mt-8">decrement</button>
    </div>
  )
}

export default App
