// src/components/CreateItem.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../../redux/crudSlice/crudSlice';
import { useNavigate, useParams } from 'react-router-dom';

const CreateItem = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [isUpdate, setIsUpdate] = useState(false);
  
  // State for tracking submission status
  const { status, message, users } = useSelector((state) => state.usersRed);

  useEffect(() => {
    if (userId && users.length > 0) {
      const user = users.find((user) => user.id === userId);
      if (user) {
        setFormData({
          name: user.name,
          email: user.email,
          mobile: user.mobile
        });
        setIsUpdate(true);
      }
    }
  }, [userId, users]);

  useEffect(() => {
    console.log(status)
    if (status === true) {
      setFormData({ name: '', email: '', mobile: '' });
      navigate('/user-list');
    } 
    else if (status === false && message) {
      alert(message);
    }
  }, [status, message, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile } = formData;
    
    if (isUpdate) {
      dispatch(updateUserStart({ userId, name, email, mobile }));
    } else {
      dispatch(createUserStart({ name, email, mobile }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <button className="update" onClick={() => navigate('/user-list')}>Users List</button>
      <br /><br />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {userId && (
            <input type="text" value={userId} readOnly />
          )}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter the name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter the email"
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter the mobile"
          />
          <button type="submit">{isUpdate ? 'Update' : 'Create'}</button>
        </form>
      </div>
    </>
  );
};

export default CreateItem;
