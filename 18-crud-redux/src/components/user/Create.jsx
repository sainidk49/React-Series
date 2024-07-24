// src/components/CreateItem.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../../redux/crudSlice/crudSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Create = () => {
  const { userId } = useParams("")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.usersRed);
  const { users } = useSelector((state) => state.usersRed);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isUpdate){
      dispatch(updateUserStart({ userId, name, email, mobile }));
    }
    else{
      dispatch(createUserStart({ name, email, mobile }));
    }
    
    setName('');
    setEmail('');
    setMobile('');
    if (!loading && !error) {
      navigate("/user-list")
    }
  };

  useEffect(() => {
    if (userId) {
      users && users.map((user, index) => {
        if (userId === user.id) {
          setName(user.name);
          setEmail(user.email);
          setMobile(user.mobile);
          setIsUpdate(true)
        }
      })
    }
  }, [userId])


  return (
    <>
      <button className="update" onClick={() => navigate(`../user-list`)}>Users List</button>
      <br /> <br />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {userId && users.length > 0 &&
            <input type="text" value={userId} readOnly />}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter the name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter the email" />
          <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="enter the mobile" />
          <button type="submit">{isUpdate ? "Update" : "Create"}</button>
        </form>
      </div>
    </>

  );
};

export default Create;
