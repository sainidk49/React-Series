import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./redux/reducer/userReducer"

const App = () => {
  const dispatch = useDispatch()
  const { users, loading } = useSelector((state) => state.usersData)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => 
            (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <button className="update" onClick={() => navigate(`../add-user/${user.id}`,{ state: { status: null }})}>Update</button>
                  <button className="delete" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App