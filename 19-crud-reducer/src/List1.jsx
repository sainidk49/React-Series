import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://theroundrectangle.com/Deepak/contactform/olivrweb/user/UserApi.php/getUsers",
          {
            method: "POST",
          }
        );
        const data = await response.json();
        console.log(data);

        // Assuming the API returns an object with a "user" array
        if (data.status && data.user) {
          setUsers(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Show a loader while the data is being fetched
  if (users.length === 0) {
    return <div>Loading...</div>;
  }

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
          {users.map((user) => (
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
                <button onClick={() => console.log("Update user:", user.id)}>
                  Update
                </button>
                <button
                  onClick={() => console.log("Delete user:", user.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Backbtn</button>
    </div>
  );
};

export default List;
