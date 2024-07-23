// src/components/CreateItem.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart } from '../../redux/crudSlice/crudSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.usersRed);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserStart({ name, email, mobile }));
    setName('');
    setEmail('');
    setMobile('');
    if(!loading && ! error){
      navigate("/user-list")
    }
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter the name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter the email" />
        <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="enter the mobile" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
