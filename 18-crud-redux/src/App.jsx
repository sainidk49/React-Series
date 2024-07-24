import { useState } from 'react'
import List from './components/user/List'
import Create from './components/user/Create'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' >
        <Route path='' element={<Create />} />
        <Route path='/add-user' element={<Create />} />
        <Route path='/add-user/:userId' element={<Create />} />
        <Route path='/user-list' element={<List />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
