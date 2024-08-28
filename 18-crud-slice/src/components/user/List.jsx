import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { fetchUserStart, deleteUserStart } from '../../redux/crudSlice/crudSlice';

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { users, loading, status, message } = useSelector((state) => state.usersRed);
  
  const addNewUser = () => {
    navigate(`../add-user/`, { state: { status: null } })
  }
  const deleteUser = (userId) => {
    dispatch(deleteUserStart(userId))
  }

  useEffect(() => {
    dispatch(fetchUserStart());
  }, [users.length]);

  if (loading) return <div>Loading...</div>
  if (status === false) return <div>
    <button className="update" onClick={addNewUser}>Add New User</button>
    <h3>Error: {message}</h3>
  </div>

  return (
    <div className="table-container">
      <button className="update" onClick={addNewUser}>Add New User</button>
      <br />
      <br />
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
          {users && users.map((user, index) => {
            return (
              <tr key={index}>
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
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
