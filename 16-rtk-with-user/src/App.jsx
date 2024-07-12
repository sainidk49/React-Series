import React from 'react'
import AddUSer from './components/AddUSer'
import ListUser from './components/ListUser'
const App = () => {
  return (
    <>
      <div className='bg-slate-900 h-screen w-screen'>
        <div className="w-3/5 mx-auto pt-16 box-border">
          <AddUSer />
          <ListUser />
          </div>
      </div>
    </>
  )
}

export default App

