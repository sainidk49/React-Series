import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {


  return (
    <UserContextProvider>
      <div className='h-screen bg-slate-900 flex flex-col content-between text-white'>
        <div className='min-w-40'>
          <Login />
        </div>
        <Profile />
      </div>

    </UserContextProvider>
  )
}

export default App
