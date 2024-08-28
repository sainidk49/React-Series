import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsersStart, deleteUserStart } from "../redux/action/userAction";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, loading, users } = useSelector((state) => state.userReducer);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteUserStart(id));
      // Fetch the updated list of users after successful deletion
      dispatch(fetchUsersStart());
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  const addNewUser = () => {
    navigate("/", { state: { status: null } })
  };

  if (loading) return <div>Loading...</div>;
  if (!users || users.length === 0) return (
    <div>
      <button className="update" onClick={addNewUser}>Add New User</button>
      <h3>Error: {message}</h3>
    </div>
  );
  return (
    <div>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Image</th>
            <th>Status</th>
            <th>Insert Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>
                {user.image ? (
                  <img src={user.image} alt="User" width="50" height="50" />
                ) : (
                  "N/A"
                )}
              </td>
              <td>{user.status}</td>
              <td>{user.insert_time}</td>
              <td>
                <button onClick={() => navigate(`/home/${user.id}`, { state: { status: null } })}>
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNewUser}>Add New User</button>
    </div>
  );
};

export default List;
