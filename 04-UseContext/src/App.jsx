import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'

function App() {
  return (
    <UserContextProvider>
      <div className='h-screen w-screen bg-slate-900 flex flex-col content-between text-white'>
        <div className='min-w-40'>
          <Login />
        </div>
      </div>

    </UserContextProvider>
  )
}

export default App
