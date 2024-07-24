import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { fetchUserStart, deleteUserStart} from '../../redux/crudSlice/crudSlice';

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.usersRed);

  useEffect(() => {
    dispatch(fetchUserStart());
  }, [users.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table-container">
      <button className="update" onClick={() => navigate(`../add-user/`)}>Add New User</button>
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
                  <button className="update" onClick={() => navigate(`../add-user/${user.id}`)}>Update</button>
                  <button className="delete" onClick={() => dispatch(deleteUserStart(user.id))}>Delete</button>
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
