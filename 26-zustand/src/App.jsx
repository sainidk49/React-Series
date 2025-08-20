import React, { useState } from 'react'
import Table from './components/Table'
import Form from './components/Form'

const App = () => {
 
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Data Form</h1>
      <Form />
      <Table />
      
    </div>
  )
}

export default App
