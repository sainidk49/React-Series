// src/components/List.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserStart, deleteUserStart, clearMessageStatus } from '../../redux/crudSlice/crudSlice';

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, status, message } = useSelector((state) => state.usersRed);

  // Navigate to the add new user page
  const navigateToAddUser = () => {
    dispatch(clearMessageStatus())
    navigate('../add-user', { state: { status: null } });
  };

  // Navigate to the update user page
  const navigateToUpdateUser = (userId) => {
    navigate(`../add-user/${userId}`, { state: { status: null } });
  };

  // Delete a user
  const deleteUser = (userId) => {
    dispatch(deleteUserStart(userId));
  };

  // Fetch users when the component mounts or when users change
  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchUserStart());
    }
  }, [dispatch, users]);

  // Handle loading state and error state
  if (loading) return <div>Loading...</div>;
  if (status === false) return (
    <div>
      <button className="update" onClick={navigateToAddUser}>Add New User</button>
      <h3>Error: {message}</h3>
    </div>
  );

  return (
    <div className="table-container">
      <button className="update" onClick={navigateToAddUser}>Add New User</button>
      <br /><br />
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
          {users && users.map((user, index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <button className="update" onClick={() => navigateToUpdateUser(user.id)}>Update</button>
                <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
